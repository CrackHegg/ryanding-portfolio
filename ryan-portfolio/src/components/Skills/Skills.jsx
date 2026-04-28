import { BrainCircuit, Code2, Database, Eye, Wrench } from "lucide-react";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    title: "ML / AI",
    icon: BrainCircuit,
    skills: ["PyTorch", "HuggingFace", "LangChain", "GPT-4o", "LLM/VLM prompting"],
  },
  {
    title: "Computer Vision / Robotics",
    icon: Eye,
    skills: ["OpenCV", "ROS", "Grounded SAM2", "RGB-D cameras", "Roboflow"],
  },
  {
    title: "Backend / Systems",
    icon: Database,
    skills: ["FastAPI", "TypeScript", "REST APIs", "PostgreSQL", "RabbitMQ", "SQLite", "AWS EC2"],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "C", "C++", "Java", "TypeScript", "SQL", "SML", "R"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "n8n", "React"],
  },
];

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <div className={styles.sectionHeader}>
        <span>Skills</span>
        <h2>Tools I use to build learning systems, robotics pipelines, and product infrastructure.</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.skillsGrid}>
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
            <article className={styles.skillCategory} key={group.title}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIcon} aria-hidden="true">
                  <Icon strokeWidth={1.8} />
                </div>
                <h3 className={styles.categoryTitle}>{group.title}</h3>
              </div>
              <ul className={styles.skillItems}>
                {group.skills.map((skill) => (
                  <li className={styles.skillItem} key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
