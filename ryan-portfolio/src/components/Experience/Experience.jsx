import { Car, GraduationCap, Microscope, ServerCog } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "AI/ML Software Engineer Intern",
    organization: "Cruise · AV Simulation Core",
    href: "https://getcruise.com",
    time: "May 2026 - Aug 2026",
    signal: "Incoming",
    icon: Car,
    bullets: [
      "Joining the AV Simulation Core team to work on autonomous vehicle simulation infrastructure and AI/ML systems.",
      "Focused on tooling that supports evaluation, scenario generation, and reliability for autonomy stacks.",
    ],
  },
  {
    role: "Research Assistant",
    organization: "CMU Reliable Autonomous Systems Laboratory",
    href: "https://github.com/CMU-RASL",
    time: "May 2024 - Present",
    signal: "Research",
    icon: Microscope,
    bullets: [
      "Built a real-time RGB-D vision pipeline with OpenCV, Python, and Grounded SAM2 for dynamic kitchen object detection, segmentation, and tracking.",
      "Improved segmentation precision by 25% and reduced false detections by 30% with zero-shot detection and tracking refinements.",
      "Designed occlusion-robust 3D localization and LLM spatial validation, reducing invalid object placements by up to 40%; curated datasets across 4 kitchens with F1 around 0.89.",
    ],
  },
  {
    role: "Teaching Assistant - 07-180 Concepts in A.I.",
    organization: "CMU School of Computer Science",
    time: "Jan 2025 - Present",
    signal: "Teaching",
    icon: GraduationCap,
    bullets: [
      "Conducted recitations for 100+ students across search, probabilistic reasoning, decision-making, and reinforcement learning.",
      "Led office hours and helped design programming assignments and exams aligned with core AI concepts.",
    ],
  },
  {
    role: "Full Stack AI and Software Developer",
    organization: "Sparq Solutions",
    href: "https://www.sparqsolutionsai.com/",
    time: "Jul 2025 - Dec 2025",
    signal: "Product",
    icon: ServerCog,
    bullets: [
      "Built TypeScript backend services and REST APIs integrated with PostgreSQL for production content automation workflows.",
      "Engineered ETL pipelines and LLM text-generation modules connected to publishing APIs, reducing manual curation overhead.",
      "Developed modular data access layers, file workflows, and n8n automation integrations within Agile sprints.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.sectionHeader}>
        <span>Experience</span>
        <h2>Research, autonomy, teaching, and shipped AI infrastructure.</h2>
      </div>
      <div className={styles.content}>
        <ul className={styles.history}>
          {experiences.map((item) => {
            const Icon = item.icon;

            return (
            <li className={styles.historyItem} key={`${item.role}-${item.organization}`}>
              <div className={styles.marker} aria-hidden="true">
                <Icon className={styles.markerIcon} strokeWidth={1.8} />
                <span>{item.signal}</span>
              </div>
              <article className={styles.historyCard}>
                <div className={styles.itemHeader}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    <Icon strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className={styles.time}>{item.time}</p>
                    <h3>{item.role}</h3>
                    <h4>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                          {item.organization}
                        </a>
                      ) : (
                        item.organization
                      )}
                    </h4>
                  </div>
                  <span className={styles.signal}>{item.signal}</span>
                </div>
                <ul className={styles.historyItemBullets}>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
