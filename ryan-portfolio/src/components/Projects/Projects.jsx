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
            src={getImageUrl("projects/pathforge.svg")}
            alt="PathForge"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>PathForge</h3>
          <p className={styles.projectDescription}>
            An event-driven AI education platform using FastAPI and SQLite that processes student 
            transcripts asynchronously. Features RAG-powered transcript analysis with LangChain and GPT-4, 
            DAG-based milestone sequencing, and auto-grading service with React dashboard integration.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>FastAPI</li>
            <li className={styles.projectSkill}>SQLite</li>
            <li className={styles.projectSkill}>LangChain</li>
            <li className={styles.projectSkill}>GPT-4</li>
            <li className={styles.projectSkill}>React</li>
            <li className={styles.projectSkill}>RabbitMQ</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Demo</a>
            <a href="#" className={styles.projectLink}>Source</a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img
            src={getImageUrl("projects/trainofthought.svg")}
            alt="Train of Thought"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>Train of Thought</h3>
          <p className={styles.projectDescription}>
            A multi-agent LLM system in TypeScript + GCP enabling recursive decomposition of natural 
            language problems via self-evaluating agents and critique loops. Integrated Next.js frontend 
            with real-time evaluation improving pass rates by ~80% on 20+ LeetCode-style programming problems.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>TypeScript</li>
            <li className={styles.projectSkill}>GCP</li>
            <li className={styles.projectSkill}>Next.js</li>
            <li className={styles.projectSkill}>LLM</li>
            <li className={styles.projectSkill}>Multi-Agent</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Demo</a>
            <a href="https://github.com/CrackHegg/Train-of-Thought" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Source</a>
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
            Fine-tuned GPT-2 with HuggingFace Transformers to generate contextually deceptive definitions 
            for a social deception game. Integrated model pipeline with Python using SentencePiece for 
            parallelized tokenization and optimized inference with PyTorch.
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>GPT-2</li>
            <li className={styles.projectSkill}>HuggingFace</li>
            <li className={styles.projectSkill}>PyTorch</li>
            <li className={styles.projectSkill}>Python</li>
            <li className={styles.projectSkill}>SentencePiece</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Demo</a>
            <a href="https://github.com/CrackHegg/Reverse-Balderdash" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Source</a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img
            src={getImageUrl("projects/bibleverse.svg")}
            alt="Bible Verse Generator"
            className={styles.projectImage}
          />
          <h3 className={styles.projectTitle}>Bible Verse Generator</h3>
          <p className={styles.projectDescription}>
            A bible content generation tool that generates Bible verses and allows for tweeting. Built with modern web technologies. 
          </p>
          <ul className={styles.projectSkills}>
            <li className={styles.projectSkill}>JavaScript</li>
            <li className={styles.projectSkill}>HTML/CSS</li>
            <li className={styles.projectSkill}>API Integration</li>
            <li className={styles.projectSkill}>Web Development</li>
          </ul>
          <div className={styles.projectLinks}>
            <a href="#" className={styles.projectLink}>Demo</a>
            <a href="https://github.com/CrackHegg/bible-verse-generator" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Source</a>
          </div>
        </div>
      </div>
    </section>
  );
};