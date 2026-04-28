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
    summary: "Real-time RGB-D perception pipeline for assistive robotics in dynamic kitchen environments.",
    motif: "tracking",
    icon: Camera,
    tags: ["Grounded SAM2", "OpenCV", "RGB-D", "3D Tracking", "LLM Reasoning"],
    impact: [
      "+25% segmentation precision and -30% false detections with zero-shot detection refinements.",
      "Occlusion-robust 3D localization and object permanence for world-coordinate mapping.",
      "LLM spatial validation reduced invalid placements by up to 40%; F1 around 0.89.",
    ],
    links: [{ label: "Lab", href: "https://github.com/CMU-RASL" }],
  },
  {
    title: "Act2Goal",
    eyebrow: "Egocentric video understanding",
    summary: "Pipeline that infers high-level goals from low-level actions over long-horizon Ego4D video.",
    motif: "timeline",
    icon: Video,
    tags: ["PyTorch", "ActionFormer", "Omnivore", "LLM/VLM", "Ego4D"],
    impact: [
      "Extended ActionFormer with a custom 9-stage FPN and sliding-window inference.",
      "Achieved +7.5 mAP over baseline on action understanding experiments.",
      "Built structured LLM/VLM reasoning and semantic similarity scoring over 80+ hours of video.",
    ],
  },
  {
    title: "TerraBot",
    eyebrow: "Autonomous robotics system",
    summary: "Self-monitoring terrarium that uses plant segmentation to control watering, lighting, and sensing.",
    motif: "loop",
    icon: Leaf,
    tags: ["ROS", "OpenCV", "UNet", "Roboflow", "Raspberry Pi"],
    impact: [
      "Built the full ML path from data collection and labeling to edge deployment.",
      "Used UNet-based foliage and health segmentation to drive a behavior scheduler.",
      "Ran continuously for weeks with automated monitoring and email alerts.",
    ],
  },
  {
    title: "PathForge",
    eyebrow: "Full-stack AI infrastructure",
    summary: "Event-driven education platform that converts transcripts into adaptive learning roadmaps.",
    motif: "dag",
    icon: Workflow,
    tags: ["FastAPI", "RabbitMQ", "GPT-4o", "React", "SQLite"],
    impact: [
      "Processed student transcripts asynchronously with RabbitMQ-backed workflows.",
      "Extracted skills using GPT-4o and generated DAG-based milestone sequences.",
      "Built instructor and student dashboards with code auto-grading and progress analytics.",
    ],
  },
  {
    title: "Reverse Balderdash",
    eyebrow: "Language model experimentation",
    summary: "Fine-tuned GPT-2 to generate deceptive but plausible definitions for a social word game.",
    motif: "tokens",
    icon: MessageSquareText,
    tags: ["GPT-2", "HuggingFace", "PyTorch", "NLP"],
    impact: [
      "Compared parallel and sequential token prediction strategies for generation quality.",
      "Reduced entropy by 19% across generated definitions.",
      "Analyzed 10K+ samples to diagnose and correct subword bias.",
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
