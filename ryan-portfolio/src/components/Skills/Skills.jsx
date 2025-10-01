import React from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Programming Languages</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/python.svg")} alt="Python" />
                <p>Python</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/javascript.svg")} alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/typescript.svg")} alt="TypeScript" />
                <p>TypeScript</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/java.svg")} alt="Java" />
                <p>Java</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/c.svg")} alt="C" />
                <p>C</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/cpp.svg")} alt="C++" />
                <p>C++</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/r.svg")} alt="R" />
                <p>R</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/sql.svg")} alt="SQL" />
                <p>SQL</p>
              </div>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>AI/ML & Data Science</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/pytorch.svg")} alt="PyTorch" />
                <p>PyTorch</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/opencv.svg")} alt="OpenCV" />
                <p>OpenCV</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/huggingface.svg")} alt="HuggingFace" />
                <p>HuggingFace</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/langchain.svg")} alt="LangChain" />
                <p>LangChain</p>
              </div>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Web Development</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/react.svg")} alt="React" />
                <p>React</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/html.svg")} alt="HTML" />
                <p>HTML</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/rest.svg")} alt="REST API" />
                <p>REST API</p>
              </div>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>Tools & Platforms</h3>
            <div className={styles.skillItems}>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/git.svg")} alt="Git" />
                <p>Git</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/aws.svg")} alt="AWS" />
                <p>AWS EC2</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/gcp.svg")} alt="GCP" />
                <p>GCP</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/ros.svg")} alt="ROS" />
                <p>ROS</p>
              </div>
              <div className={styles.skillItem}>
                <img src={getImageUrl("skills/n8n.svg")} alt="n8n" />
                <p>n8n</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};