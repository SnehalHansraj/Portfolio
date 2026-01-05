import styles from "./Skills.module.css";
import { skillsData } from "../../data/skillsData";
import { useLanguage } from "../../context/LanguageContext";

export const Skills = () => {
  const { language } = useLanguage();
  const skills = skillsData[language];

  return (
    <div className={styles.skillsGrid}>
      {skills.map((item, index) => (
        <div key={index} className={styles.skillCard}>
          <span className={styles.title}>{item.shortTitle}</span>

          <div className={styles.overlay}>
            <h4>{item.title}</h4>
            <ul>
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
