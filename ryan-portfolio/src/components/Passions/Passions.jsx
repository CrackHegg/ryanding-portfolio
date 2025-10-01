import React from "react";
import styles from "./Passions.module.css";
import { getImageUrl } from "../../utils";

export const Passions = () => {
  return (
    <section className={styles.container} id="passions">
      <h2 className={styles.title}>Beyond Code</h2>
      <div className={styles.content}>
        <p className={styles.intro}>
          When I'm not building AI systems or diving into computer vision research, 
          I pursue diverse interests that keep me balanced and energized.
        </p>
        <div className={styles.passionGrid}>
          <div className={styles.passionCard}>
            <img 
              src={getImageUrl("passions/Christian_cross.svg")} 
              alt="Fellowship" 
              className={styles.passionIcon}
            />
            <h3>Faith</h3>
            <p>
              Active member of <a href="https://acfpcc.org/" target="_blank" rel="noopener noreferrer" 
              style={{color: 'var(--color-primary)', textDecoration: 'underline'}}>
              Asian Christian Fellowship</a>, where I find community, grow in faith, 
              and engage in meaningful service with fellow believers.
            </p>
          </div>

          <div className={styles.passionCard}>
            <img 
              src={getImageUrl("passions/cardistry.svg")} 
              alt="Cardistry" 
              className={styles.passionIcon}
            />
            <h3>Cardistry</h3>
            <p>
              The art of card flourishing - transforming ordinary playing cards into 
              mesmerizing visual displays through intricate manipulation and flow. 
              A perfect blend of precision, creativity, and endless practice.
            </p>
          </div>

          <div className={styles.passionCard}>
            <img 
              src={getImageUrl("passions/table-tennis-svgrepo-com.svg")} 
              alt="Table Tennis" 
              className={styles.passionIcon}
            />
            <h3>Table Tennis</h3>
            <p>
              Fast-paced rallies and strategic gameplay keep me sharp both mentally 
              and physically. I find something incredibly satisfying about perfecting 
              technique and competing in this sport.
            </p>
          </div>

          <div className={styles.passionCard}>
            <img 
              src={getImageUrl("passions/weights.svg")} 
              alt="Weight Lifting" 
              className={styles.passionIcon}
            />
            <h3>Weight Lifting</h3>
            <p>
              Building strength and discipline through consistent training. The gym 
              provides both physical challenge and mental clarity - a perfect complement 
              to long coding sessions and research work.
            </p>
          </div>
        </div>
        
        <div className={styles.achievements}>
          <h3>Notable Achievements</h3>
          <ul>
            <li>🏆 Dean's List Fall 2024 at Carnegie Mellon University</li>
            <li>🎯 Perfect ACT Score: 36 Composite</li>
            <li>📚 Co-first author on research paper submitted to ACM HRI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};