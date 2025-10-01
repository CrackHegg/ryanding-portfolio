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
              <p>Jun 2025 - Present</p>
              <ul className={styles.historyItemBullets}>
                <li>
                  Designed and implemented scalable TypeScript backend services and REST APIs (Bun/Express) 
                  integrated with n8n and PostgreSQL, automating content workflows and reducing manual engineering steps.
                </li>
                <li>
                  Integrated LLM-based text generation modules with publishing APIs, cutting human content 
                  curation time for production clients.
                </li>
                <li>
                  Engineered fault-tolerant ETL pipelines with schema migration tools, error tracking, 
                  and automated rollback, improving system uptime.
                </li>
                <li>
                  Authored onboarding docs, API docs, and runbooks; collaborated with other teams to deliver 
                  features within Agile sprints and meet SLA performance targets.
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
              <h3>Software Research Intern</h3>
              <h4>
                <a href="https://github.com/CMU-RASL" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                  CMU Reliable Autonomous Systems Laboratory
                </a>
              </h4>
              <p>May 2024 - Present</p>
              <ul className={styles.historyItemBullets}>
                <li>
                  Built a real-time 3D vision pipeline using RGB-D cameras (Orbbec Femto Bolt, Azure Kinect SDK), 
                  OpenCV, and Python to detect, segment, and track objects in dynamic kitchen environments 
                  with ~85% accuracy in live deployment tests.
                </li>
                <li>
                  Advanced zero-shot detection and segmentation by integrating Grounded SAM2, achieving robust 
                  open-vocabulary object detection with pixel-level masks. Optimized prompt/threshold tuning to 
                  reduce false positives and false negatives across cluttered real-world kitchens, improving 
                  segmentation precision by 25% and reducing false detections by 30%.
                </li>
                <li>
                  Designed an occlusion-robust tracking algorithm and 3D item localization system, achieving 
                  object permanence and enabling accurate world-coordinate mapping across varied kitchen layouts 
                  via registration procedures.
                </li>
                <li>
                  Leveraged LLM-based spatial reasoning for contextual validation of item placement, adding a 
                  safety/risk assessment layer to raw detection, reducing invalid object placements by 40%.
                </li>
                <li>
                  Annotated and curated datasets from usability studies, scaling pipeline across 4 kitchen 
                  environments and achieving F1 score ~0.89. Co-first author on research paper submitted to ACM HRI.
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
              <h3>Teaching Assistant for 07-180 Concepts in A.I.</h3>
              <h4>CMU School of Computer Science</h4>
              <p>Jan 2025 - May 2025</p>
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