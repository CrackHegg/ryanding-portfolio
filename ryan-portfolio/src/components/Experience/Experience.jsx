import React from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/cruise.png")}
              alt="Cruise"
              className={styles.historyItemImage}
            />
            <div className={styles.historyItemDetails}>
              <h3>AI/ML Software Engineer Intern</h3>
              <h4>
                <a href="https://getcruise.com" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  Cruise
                </a>
              </h4>
              <p>May 2026 – Aug 2026</p>
              <ul className={styles.historyItemBullets}>
                <li>
                  Incoming intern on the AV Simulation Core team, working on autonomous vehicle
                  simulation infrastructure and AI/ML systems.
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/sparq.svg")}
              alt="Sparq Solutions"
              className={styles.historyItemImage}
            />
            <div className={styles.historyItemDetails}>
              <h3>Full Stack AI and Software Developer</h3>
              <h4>
                <a href="https://www.sparqsolutionsai.com/" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  Sparq Solutions
                </a>
              </h4>
              <p>Jul 2025 – Dec 2025</p>
              <ul className={styles.historyItemBullets}>
                <li>
                  Built scalable TypeScript backend services and REST APIs integrated with PostgreSQL,
                  automating content workflows and reducing manual engineering overhead.
                </li>
                <li>
                  Engineered fault-tolerant ETL pipelines and integrated LLM-based text generation
                  modules with publishing APIs, cutting human content curation time for production clients.
                </li>
                <li>
                  Developed modular data access layers, file management workflows, and automation
                  integrations using n8n within Agile sprints.
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/CMU logo.jpg")}
              alt="Carnegie Mellon University"
              className={styles.historyItemImage}
            />
            <div className={styles.historyItemDetails}>
              <h3>Research Assistant</h3>
              <h4>
                <a href="https://github.com/CMU-RASL" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  CMU Reliable Autonomous Systems Laboratory
                </a>
              </h4>
              <p>May 2024 – Present</p>
              <ul className={styles.historyItemBullets}>
                <li>
                  Built a real-time 3D vision pipeline using RGB-D cameras, OpenCV, and Python to detect,
                  segment, and track objects in dynamic kitchen environments for assistive robotics.
                  Integrated Grounded SAM2 for zero-shot detection, improving segmentation precision by 25%
                  and reducing false detections by 30%.
                </li>
                <li>
                  Designed occlusion-robust tracking and 3D item localization for object permanence and
                  world-coordinate mapping, and used LLM-based spatial reasoning for contextual item-placement
                  validation — reducing invalid placements by up to 40%.
                </li>
                <li>
                  Annotated and curated datasets from usability studies across 4 kitchen environments,
                  achieving ~0.89 F1 score. Co-first author on research paper submitted to ACM HRI.
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <img
              src={getImageUrl("history/CMU logo.jpg")}
              alt="Carnegie Mellon University"
              className={styles.historyItemImage}
            />
            <div className={styles.historyItemDetails}>
              <h3>Teaching Assistant — 07-180 Concepts in A.I.</h3>
              <h4>CMU School of Computer Science</h4>
              <p>Jan 2025 – Present</p>
              <ul className={styles.historyItemBullets}>
                <li>
                  Conducted recitations for 100+ students covering search, probabilistic reasoning,
                  decision-making, and reinforcement learning.
                </li>
                <li>
                  Led office hours and co-designed programming assignments and exams aligned with AI fundamentals.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};