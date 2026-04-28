import { ArrowRight, Code2, FileText, Users } from "lucide-react";
import styles from "./Hero.module.css";

const identityTags = [
  "CMU AI",
  "Computer Vision",
  "Robotics",
  "Autonomous Systems",
  "LLM/VLM Reasoning",
  "Full-Stack AI",
];

const roleHighlights = [
  "Incoming AI/ML SWE Intern @ Cruise",
  "Research Assistant @ CMU RASL",
  "TA for Concepts in AI",
  "Pittsburgh, PA",
];

const pipelineStages = ["RGB-D", "Detect", "Track", "Reason", "Act"];

export const Hero = () => {
  return (
    <section className={styles.container} id="home" aria-labelledby="hero-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>AI systems · Robotics · Perception</p>
        <h1 id="hero-title" className={styles.title}>Ryan Ding</h1>
        <p className={styles.identity}>B.S. Artificial Intelligence @ Carnegie Mellon University</p>
        <p className={styles.heroLine}>Building reliable AI systems for robotics, perception, and autonomy.</p>
        <p className={styles.description}>
          I build across computer vision, autonomous systems, LLM/VLM reasoning,
          and full-stack AI infrastructure.
        </p>

        <ul className={styles.roles} aria-label="Current roles">
          {roleHighlights.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>

        <ul className={styles.tags} aria-label="Technical focus areas">
          {identityTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className={styles.actions} aria-label="Primary links">
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
            <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
          </a>
          <a
            href="/Ryan_Ding_Resume.pdf"
            className={styles.secondaryBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText aria-hidden="true" size={17} strokeWidth={2} />
            View Resume
          </a>
          <a
            href="https://github.com/CrackHegg"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <Code2 aria-hidden="true" size={17} strokeWidth={2} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-ding-2a8987273/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            <Users aria-hidden="true" size={17} strokeWidth={2} />
            LinkedIn
          </a>
        </div>
      </div>

      <div className={styles.visual} aria-label="Abstract robotics perception pipeline">
        <div className={styles.visualHeader}>
          <span>perception_runtime.py</span>
          <span className={styles.status}>tracking</span>
        </div>
        <div className={styles.sensorPanel}>
          <div className={styles.scanLine}></div>
          <div className={`${styles.box} ${styles.boxPrimary}`}>
            <span>mug · 0.94</span>
          </div>
          <div className={`${styles.box} ${styles.boxSecondary}`}>
            <span>bowl · 0.87</span>
          </div>
          <div className={`${styles.box} ${styles.boxTertiary}`}>
            <span>hand · 0.79</span>
          </div>
          <div className={styles.pointCloud}>
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index}></span>
            ))}
          </div>
        </div>

        <div className={styles.pipeline}>
          {pipelineStages.map((stage, index) => (
            <div className={styles.stage} key={stage}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{stage}</strong>
            </div>
          ))}
        </div>

        <div className={styles.telemetry}>
          <span>F1 0.89</span>
          <span>+25% precision</span>
          <span>-30% false detections</span>
        </div>
      </div>
    </section>
  );
};
