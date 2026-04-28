import {
  Award,
  BookOpen,
  Bot,
  BrainCircuit,
  Camera,
  Compass,
  Dumbbell,
  Layers,
  Lightbulb,
  Search,
  Sparkles,
  Telescope,
  Trophy,
  Users,
} from "lucide-react";
import styles from "./Passions.module.css";

const interestCards = [
  {
    title: "Embodied AI",
    text: "How perception, reasoning, and control should cooperate when an agent has to act in a physical environment.",
    icon: Bot,
  },
  {
    title: "Robust Perception",
    text: "Vision systems that keep working when lighting, occlusion, clutter, and distribution shift make the scene less convenient.",
    icon: Camera,
  },
  {
    title: "Autonomy Evaluation",
    text: "Simulation, scenario design, and metrics that make autonomous systems easier to debug before they reach the real world.",
    icon: Search,
  },
  {
    title: "LLM/VLM Reasoning",
    text: "Using language and vision-language models as reasoning layers, not magic boxes, inside grounded AI systems.",
    icon: BrainCircuit,
  },
];

const hobbies = [
  {
    title: "Faith & Fellowship",
    text: "Community, service, and steady growth through Asian Christian Fellowship.",
    icon: Users,
    href: "https://acfpcc.org/",
  },
  {
    title: "Cardistry",
    text: "A precision-heavy creative outlet built around flow, repetition, and visual control.",
    icon: Sparkles,
  },
  {
    title: "Table Tennis",
    text: "Fast rallies, compact decision-making, and the constant work of improving technique.",
    icon: Compass,
  },
  {
    title: "Weight Lifting",
    text: "A simple counterweight to screen time: consistent training, patience, and measurable progress.",
    icon: Dumbbell,
  },
];

const achievements = [
  { label: "Dean's List", detail: "Fall 2024, Fall 2025", icon: Trophy },
  { label: "Incoming AI/ML SWE Intern", detail: "Cruise · AV Simulation Core", icon: Award },
  { label: "Research Assistant", detail: "CMU Reliable Autonomous Systems Lab", icon: Telescope },
  { label: "Teaching Assistant", detail: "CMU 07-180 Concepts in AI", icon: Lightbulb },
  { label: "AIME Qualifier", detail: "Mathematical problem solving", icon: Layers },
  { label: "ACT 36", detail: "Composite score", icon: Award },
];

const coursework = [
  {
    group: "AI / ML",
    courses: ["Intro to Machine Learning", "Intro to Deep Learning", "Generative AI", "Autonomous Agents"],
  },
  {
    group: "Vision / Robotics",
    courses: ["Computer Vision", "Visual Learning and Perception"],
  },
  {
    group: "Systems / CS Foundations",
    courses: ["Data Structures and Algorithms", "Intro to Computer Systems", "Search Engines"],
  },
];

export const Passions = () => {
  return (
    <section className={styles.container} id="passions">
      <div className={styles.sectionHeader}>
        <span>Beyond Code</span>
        <h2>Curiosity, coursework, and the parts of the work that keep pulling me forward.</h2>
        <p>
          I am drawn to systems that have to perceive messy state, reason about what
          matters, and take practical action. Outside technical work, I keep a few
          slower, human interests in the loop too.
        </p>
      </div>

      <div className={styles.contentGrid}>
        <section className={styles.interestsPanel} aria-labelledby="interests-heading">
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon} aria-hidden="true">
              <Telescope strokeWidth={1.8} />
            </div>
            <div>
              <span>Interests</span>
              <h3 id="interests-heading">Questions I keep returning to</h3>
            </div>
          </div>
          <div className={styles.interestGrid}>
            {interestCards.map((item) => {
              const Icon = item.icon;

              return (
                <article className={styles.interestCard} key={item.title}>
                  <Icon aria-hidden="true" strokeWidth={1.8} />
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.hobbiesPanel} aria-labelledby="hobbies-heading">
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon} aria-hidden="true">
              <Compass strokeWidth={1.8} />
            </div>
            <div>
              <span>Outside Work</span>
              <h3 id="hobbies-heading">Small practices that keep me balanced</h3>
            </div>
          </div>
          <div className={styles.hobbyList}>
            {hobbies.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon aria-hidden="true" strokeWidth={1.8} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.hobbyItem}
                  key={item.title}
                >
                  {content}
                </a>
              ) : (
                <div className={styles.hobbyItem} key={item.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.achievementsPanel} aria-labelledby="achievements-heading">
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon} aria-hidden="true">
              <Trophy strokeWidth={1.8} />
            </div>
            <div>
              <span>Achievements</span>
              <h3 id="achievements-heading">Signals of momentum</h3>
            </div>
          </div>
          <div className={styles.achievementGrid}>
            {achievements.map((item) => {
              const Icon = item.icon;

              return (
                <article className={styles.achievementCard} key={`${item.label}-${item.detail}`}>
                  <Icon aria-hidden="true" strokeWidth={1.8} />
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.detail}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.courseworkPanel} aria-labelledby="coursework-heading">
          <div className={styles.panelHeader}>
            <div className={styles.panelIcon} aria-hidden="true">
              <BookOpen strokeWidth={1.8} />
            </div>
            <div>
              <span>Coursework</span>
              <h3 id="coursework-heading">Relevant academic foundation</h3>
            </div>
          </div>
          <div className={styles.courseworkGrid}>
            {coursework.map((group) => (
              <article className={styles.courseGroup} key={group.group}>
                <h4>{group.group}</h4>
                <ul>
                  {group.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
