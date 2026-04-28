import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { BufferAttribute, BufferGeometry } from "three";
import styles from "./BackgroundScene.module.css";

const points = [
  [-3.2, 1.3, -1.2],
  [-2.3, -0.2, 0.4],
  [-1.4, 1.0, 0.9],
  [-0.4, -0.9, -0.2],
  [0.8, 0.6, 0.6],
  [1.8, -0.3, -0.7],
  [2.8, 1.0, -1.1],
  [3.4, -0.8, 0.3],
  [-2.8, -1.3, -0.5],
  [0.2, 1.45, -0.9],
  [2.2, 1.55, 0.2],
  [-0.9, 0.15, -1.5],
];

const edges = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [5, 6],
  [5, 7],
  [1, 8],
  [2, 9],
  [6, 10],
  [3, 11],
];

const frustum = [
  [0, -1.4, 0.35],
  [-1.45, -0.25, -1.4],
  [1.45, -0.25, -1.4],
  [1.05, 1.0, -1.4],
  [-1.05, 1.0, -1.4],
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function FloatingPointCloud({ reducedMotion }) {
  const groupRef = useRef(null);
  const particleRefs = useRef([]);
  const lineGeometries = useMemo(
    () =>
      edges.map(([start, end]) => {
        const geometry = new BufferGeometry();
        geometry.setAttribute(
          "position",
          new BufferAttribute(new Float32Array([...points[start], ...points[end]]), 3),
        );
        return geometry;
      }),
    [],
  );
  const frustumGeometries = useMemo(
    () =>
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 1],
      ].map(([start, end]) => {
        const geometry = new BufferGeometry();
        geometry.setAttribute(
          "position",
          new BufferAttribute(new Float32Array([...frustum[start], ...frustum[end]]), 3),
        );
        return geometry;
      }),
    [],
  );
  const particleData = useMemo(
    () =>
      points.map((position, index) => ({
        position,
        radius: 0.045 + (index % 3) * 0.012,
        phase: index * 0.54,
        color: index % 4 === 0 ? "#93c5fd" : index % 4 === 1 ? "#c4b5fd" : "#5eead4",
      })),
    [],
  );

  useFrame(({ clock, pointer }) => {
    if (!groupRef.current || reducedMotion) return;

    const elapsed = clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(elapsed * 0.12) * 0.08 + pointer.x * 0.035;
    groupRef.current.rotation.x = Math.cos(elapsed * 0.1) * 0.035 - pointer.y * 0.025;

    particleRefs.current.forEach((particle, index) => {
      if (!particle) return;
      const base = particleData[index].position;
      const phase = particleData[index].phase;
      particle.position.set(
        base[0] + Math.sin(elapsed * 0.45 + phase) * 0.1,
        base[1] + Math.cos(elapsed * 0.38 + phase) * 0.08,
        base[2] + Math.sin(elapsed * 0.32 + phase) * 0.12,
      );
    });
  });

  return (
    <group ref={groupRef} position={[0, 0.1, 0]} scale={[1.05, 1.05, 1.05]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.55, -0.8]}>
        <planeGeometry args={[8, 4.5, 16, 8]} />
        <meshStandardMaterial color="#dbeafe" transparent opacity={0.13} wireframe />
      </mesh>

      {lineGeometries.map((geometry, index) => (
        <line key={`edge-${index}`} geometry={geometry}>
          <lineBasicMaterial color="#60a5fa" transparent opacity={0.18} />
        </line>
      ))}

      {frustumGeometries.map((geometry, index) => (
        <line key={`frustum-${index}`} geometry={geometry}>
          <lineBasicMaterial color="#14b8a6" transparent opacity={0.16} />
        </line>
      ))}

      {particleData.map((particle, index) => (
        <mesh
          key={particle.position.join("-")}
          position={particle.position}
          ref={(node) => {
            particleRefs.current[index] = node;
          }}
        >
          <sphereGeometry args={[particle.radius, 24, 24]} />
          <meshPhysicalMaterial
            color={particle.color}
            transparent
            opacity={0.46}
            roughness={0.18}
            metalness={0}
            transmission={0.45}
            thickness={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

const BackgroundScene = () => {
  const reducedMotion = useReducedMotion();

  return (
    <div className={styles.scene} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.2, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 5, 6]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-4, 2, 4]} intensity={1.2} color="#bfdbfe" />
        <FloatingPointCloud reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
