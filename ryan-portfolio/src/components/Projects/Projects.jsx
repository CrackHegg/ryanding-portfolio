import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        <div className={styles.projectCard}>
          <img
            src={getImageUrl("projects/act2goal.svg")}
            alt="Act2Goal"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>Act2Goal</h3>
          <p className={styles.projectDescription}>
            End-to-end egocentric video understanding pipeline that infers high-level tasks from low-level
            actions. Extended ActionFormer with a custom 9-stage FPN and sliding-window inference on Ego4D
            data, achieving +7.5 mAP over baseline. Built LLM and VLM reasoning pipelines with structured
            prompting and semantic similarity scoring over 80+ hours of video.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>PyTorch</li>
            <li className={styles.projectSkill}>ActionFormer</li>
            <li className={styles.projectSkill}>Omnivore</li>
            <li className={styles.projectSkill}>LLM/VLM</li>
            <li className={styles.projectSkill}>Python</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Source</a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img
            src={getImageUrl("projects/terrabot.svg")}
            alt="TerraBot"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>TerraBot</h3>
          <p className={styles.projectDescription}>
            Fully autonomous terrarium that identifies plant foliage and health via UNet-based segmentation,
            then drives a behavior scheduler controlling watering, lighting, and sensing with ROS. Built the
            full ML pipeline from data collection and labeling to edge deployment on Raspberry Pi, running
            continuously for weeks with automated email monitoring.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>ROS</li>
            <li className={styles.projectSkill}>OpenCV</li>
            <li className={styles.projectSkill}>UNet</li>
            <li className={styles.projectSkill}>Roboflow</li>
            <li className={styles.projectSkill}>Python</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Source</a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img
            src={getImageUrl("projects/pathforge.svg")}
            alt="PathForge"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>PathForge</h3>
          <p className={styles.projectDescription}>
            Event-driven personalized education platform that processes student transcripts asynchronously
            via RabbitMQ, extracts skills with GPT-4o, and generates adaptive learning roadmaps using
            DAG-based milestone sequencing. Includes instructor/student dashboards with code auto-grading
            and progress analytics.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>FastAPI</li>
            <li className={styles.projectSkill}>RabbitMQ</li>
            <li className={styles.projectSkill}>GPT-4o</li>
            <li className={styles.projectSkill}>React</li>
            <li className={styles.projectSkill}>SQLite</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Source</a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img
            src={getImageUrl("projects/balderdash.svg")}
            alt="Reverse Balderdash"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>Reverse Balderdash</h3>
          <p className={styles.projectDescription}>
            Fine-tuned GPT-2 with HuggingFace Transformers to generate deceptive but contextually plausible
            definitions for a social deception game. Compared parallel vs. sequential token prediction
            strategies, achieving 19% entropy reduction. Analyzed 10K+ generated samples to diagnose and
            correct subword bias.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>GPT-2</li>
            <li className={styles.projectSkill}>HuggingFace</li>
            <li className={styles.projectSkill}>PyTorch</li>
            <li className={styles.projectSkill}>Python</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="https://github.com/CrackHegg/Reverse-Balderdash" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Source</a>
          </div>
        </div>
      </div>
    </section>
  );
};