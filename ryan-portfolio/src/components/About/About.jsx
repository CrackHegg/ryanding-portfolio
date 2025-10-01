import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.svg")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack AI Developer</h3>
              <p>
                Currently working at Sparq Solutions building scalable TypeScript backend services, 
                REST APIs, and integrating LLM-based solutions for production clients.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.svg")} alt="Research icon" />
            <div className={styles.aboutItemText}>
              <h3>AI Research Intern</h3>
              <p>
                Building real-time 3D vision pipelines at CMU's Reliable Autonomous Systems Lab, 
                working with computer vision, object detection, and spatial reasoning systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.svg")} alt="Education icon" />
            <div className={styles.aboutItemText}>
              <h3>CS + AI Student</h3>
              <p>
                Junior at Carnegie Mellon studying Computer Science and Artificial Intelligence, 
                with a 3.65 GPA and Dean's List recognition. Teaching Assistant for Concepts in AI.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};