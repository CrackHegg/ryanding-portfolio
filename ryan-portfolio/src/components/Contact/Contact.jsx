import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.svg")} alt="Email icon" />
          <a href="mailto:ryanwding@gmail.com">ryanwding@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.svg")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ryan-ding-2a8987273/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/ryan-ding-2a8987273
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.svg")} alt="Github icon" />
          <a href="https://github.com/CrackHegg" target="_blank" rel="noopener noreferrer">
            github.com/CrackHegg
          </a>
        </li>
      </ul>
      <div className={styles.location}>
        <p>📍 Pittsburgh, PA | (225) 333-6811</p>
      </div>
    </footer>
  );
};