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
              <h3>Incoming AI/ML Intern @ Cruise</h3>
              <p>
                Joining Cruise's AV Simulation Core team in Summer 2026 to work on
                autonomous vehicle systems infrastructure and simulation at scale.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.svg")} alt="Research icon" />
            <div className={styles.aboutItemText}>
              <h3>CV & Robotics Researcher</h3>
              <p>
                Research Assistant at CMU's Reliable Autonomous Systems Lab, building
                real-time 3D vision pipelines, zero-shot object detection with Grounded SAM2,
                and LLM-based spatial reasoning for assistive robotics.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.svg")} alt="Education icon" />
            <div className={styles.aboutItemText}>
              <h3>B.S. Artificial Intelligence @ CMU</h3>
              <p>
                Dean's List student at Carnegie Mellon studying AI, with coursework spanning
                deep learning, computer vision, autonomous agents, and generative AI.
                Also a Teaching Assistant for Concepts in AI.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};