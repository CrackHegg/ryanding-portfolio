import { BrainCircuit, Camera, Route } from "lucide-react";
import styles from "./About.module.css";

const researchInterests = [
  "robust perception under distribution shift",
  "3D vision and object tracking",
  "autonomous robotics systems",
  "simulation and evaluation for AVs",
  "LLM/VLM reasoning for embodied AI",
  "AI infrastructure and backend systems",
];

const focusCards = [
  {
    title: "Perception",
    text: "Building vision systems that turn noisy RGB-D streams into usable state: detections, tracks, object permanence, and spatial context.",
    icon: Camera,
  },
  {
    title: "Reasoning",
    text: "Connecting learned perception with LLM/VLM reasoning so systems can interpret scenes, constraints, goals, and failure modes.",
    icon: BrainCircuit,
  },
  {
    title: "Action",
    text: "Designing the infrastructure around models: simulation, evaluation, backend services, and feedback loops that make autonomy measurable.",
    icon: Route,
  },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.sectionHeader}>
        <span>About</span>
        <h2>Curious about systems that close the loop from perception to action.</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.story}>
          <p>
            I am Ryan Ding, a B.S. Artificial Intelligence student at Carnegie Mellon
            University building at the intersection of machine learning, computer vision,
            robotics, autonomous systems, and AI infrastructure.
          </p>
          <p>
            The through-line in my work is making intelligent systems more reliable:
            perception that can survive messy environments, reasoning that can inspect
            context, and infrastructure that helps models become useful products and
            research tools.
          </p>
        </div>

        <div className={styles.focusGrid} aria-label="Perception reasoning action focus">
          {focusCards.map((item) => {
            const Icon = item.icon;

            return (
            <article className={styles.focusCard} key={item.title}>
              <div className={styles.focusIcon} aria-hidden="true">
                <Icon strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
            );
          })}
        </div>

        <aside className={styles.interests} aria-labelledby="interests-title">
          <div>
            <span className={styles.kicker}>Currently exploring</span>
            <h3 id="interests-title">Research interests</h3>
          </div>
          <ul>
            {researchInterests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};
