import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ryan</h1>
            <p className={styles.description}>AI researcher and full-stack developer at Carnegie Mellon, building the future with computer vision, LLMs, and scalable systems. From real-time 3D vision pipelines to production AI platforms. I'm passionate about serving others and using my skills to build impactful solutions.</p>
            <a href="mailto:ryanwding@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src = {getImageUrl("hero/heroIcon.png")} alt="Ryan's Hero Image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    </section>;
}
