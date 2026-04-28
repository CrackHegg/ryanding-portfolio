import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ryan</h1>
            <p className={styles.description}>AI student at Carnegie Mellon building at the intersection of computer vision, autonomous systems, and LLM reasoning. Incoming AI/ML Intern at Cruise — passionate about shipping systems that actually work in the real world.</p>
            <a href="mailto:ryanwding@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src = {getImageUrl("hero/heroIcon.png")} alt="Ryan's Hero Image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}
