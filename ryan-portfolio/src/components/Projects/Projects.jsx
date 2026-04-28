import { createElement } from "react";
import {
  Camera,
  ExternalLink,
  Leaf,
  MessageSquareText,
  Video,
  Workflow,
} from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Kitchen Object Tracking Research",
    eyebrow: "CMU Reliable Autonomous Systems Lab",
    summary: "RGB-D perception and object permanence for assistive robotics in kitchens.",
    motif: "tracking",
    icon: Camera,
    tags: ["Grounded SAM2", "OpenCV", "RGB-D", "3D Tracking", "LLM Reasoning"],
    impact: [
      "+25% precision, -30% false detections with zero-shot segmentation refinements.",
      "3D localization and object permanence for cluttered, dynamic scenes.",
      "LLM spatial validation reduced invalid placements by up to 40%.",
    ],
    links: [{ label: "Lab", href: "https://github.com/CMU-RASL" }],
  },
  {
    title: "Act2Goal",
    eyebrow: "Egocentric video understanding",
    summary: "Egocentric video pipeline for inferring goals from low-level actions.",
    motif: "timeline",
    icon: Video,
    tags: ["PyTorch", "ActionFormer", "Omnivore", "LLM/VLM", "Ego4D"],
    impact: [
      "Extended ActionFormer with a custom 9-stage FPN.",
      "Achieved +7.5 mAP over baseline.",
      "Ran LLM/VLM reasoning over 80+ hours of Ego4D video.",
    ],
  },
  {
    title: "TerraBot",
    eyebrow: "Autonomous robotics system",
    summary: "Autonomous terrarium using vision to control watering, lighting, and sensing.",
    motif: "loop",
    icon: Leaf,
    tags: ["ROS", "OpenCV", "UNet", "Roboflow", "Raspberry Pi"],
    impact: [
      "Built data collection, labeling, model training, and edge deployment.",
      "Used UNet segmentation to drive a ROS behavior scheduler.",
      "Ran continuously with automated monitoring and alerts.",
    ],
  },
  {
    title: "PathForge",
    eyebrow: "Full-stack AI infrastructure",
    summary: "Event-driven AI platform for adaptive learning roadmaps.",
    motif: "dag",
    icon: Workflow,
    tags: ["FastAPI", "RabbitMQ", "GPT-4o", "React", "SQLite"],
    impact: [
      "Processed transcripts through RabbitMQ-backed workflows.",
      "Used GPT-4o to extract skills and sequence DAG milestones.",
      "Built dashboards, auto-grading, and progress analytics.",
    ],
  },
  {
    title: "Reverse Balderdash",
    eyebrow: "Language model experimentation",
    summary: "Fine-tuned GPT-2 for plausible fake definitions in a word game.",
    motif: "tokens",
    icon: MessageSquareText,
    tags: ["GPT-2", "HuggingFace", "PyTorch", "NLP"],
    impact: [
      "Compared parallel vs. sequential token prediction.",
      "Reduced generation entropy by 19%.",
      "Analyzed 10K+ samples to correct subword bias.",
    ],
    links: [{ label: "Source", href: "https://github.com/CrackHegg/Reverse-Balderdash" }],
  },
];

const Motif = ({ type, icon }) => (
  <div className={`${styles.motif} ${styles[type]}`} aria-hidden="true">
    {createElement(icon, { className: styles.motifIcon, strokeWidth: 1.8 })}
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
);

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <div className={styles.sectionHeader}>
        <span>Projects</span>
        <h2>Case studies in perception, reasoning, autonomy, and AI platforms.</h2>
      </div>
      <div className={styles.projects}>
        {projects.map((project) => (
          <article className={styles.projectCard} key={project.title}>
            <div className={styles.projectTop}>
              <Motif type={project.motif} icon={project.icon} />
              <div>
                <p className={styles.eyebrow}>{project.eyebrow}</p>
                <h3 className={styles.projectTitle}>{project.title}</h3>
              </div>
            </div>
            <p className={styles.projectDescription}>{project.summary}</p>

            <ul className={styles.projectImpact}>
              {project.impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ul className={styles.projectSkills} aria-label={`${project.title} technologies`}>
              {project.tags.map((tag) => (
                <li className={styles.projectSkill} key={tag}>{tag}</li>
              ))}
            </ul>

            {project.links && (
              <div className={styles.projectLinks}>
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    {link.label}
                    <ExternalLink aria-hidden="true" size={15} strokeWidth={2} />
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
