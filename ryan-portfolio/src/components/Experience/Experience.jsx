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
      "Incoming on AV Simulation Core, focused on evaluation and simulation infrastructure.",
      "Working near the systems layer that helps autonomy stacks fail earlier and more measurably.",
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
      "Built real-time RGB-D object detection, segmentation, and tracking for assistive robotics.",
      "Integrated Grounded SAM2, improving precision by 25% and cutting false detections by 30%.",
      "Added 3D localization and LLM spatial validation, reducing invalid placements by up to 40%.",
    ],
  },
  {
    role: "Teaching Assistant - 07-180 Concepts in A.I.",
    organization: "CMU School of Computer Science",
    time: "Jan 2025 - Present",
    signal: "Teaching",
    icon: GraduationCap,
    bullets: [
      "Teach 100+ students core AI topics: search, probability, decisions, and reinforcement learning.",
      "Lead recitations, office hours, assignments, and exam support.",
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
      "Built TypeScript REST services, PostgreSQL workflows, and production automation tooling.",
      "Integrated ETL pipelines and LLM generation modules with publishing APIs.",
      "Shipped modular data layers, file workflows, and n8n automations.",
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
