import styles from "./Experience.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { skillsData } from "../../data/skillsData";
import { experienceData } from "../../data/experienceData";
import * as Icons from "lucide-react";

export const Experience = () => {
  const { language } = useLanguage();

  const skills = skillsData[language];
  const experience = experienceData[language];

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.layout}>
        {/* LEFT COLUMN — SKILLS */}
        <div className={styles.skillsColumn}>
          {skills.map((item, index) => {
          const Icon = Icons[item.icon];

          return (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <Icon size={22} className={styles.icon} />
                <span className={styles.skillTitle}>
                  {item.shortTitle}
                </span>
              </div>
              <div className={styles.skillContent}>
                <h4>{item.title}</h4>
                <ul>
                  {item.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
             );
          })}
        </div>

        {/* RIGHT COLUMN — EXPERIENCE */}
        <div className={styles.experienceColumn}>
          {experience.map((job, index) => (
            <div key={index} className={styles.experienceCard}>
              <h3>
                {job.role} – {job.company}
              </h3>

              <span className={styles.meta}>
                {job.location} | {job.duration}
              </span>

              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
