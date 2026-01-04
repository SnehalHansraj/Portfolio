import styles from "./About.module.css";

import { useLanguage } from "../../context/LanguageContext";
import { aboutText } from "../../i18n/text";

export const About = () => {
  const { language } = useLanguage();
  const t = aboutText[language];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>{t.title}</h2>

      <p className={styles.summary}>
        {t.summary}
      </p>
      <p className={styles.summary}>
        {t.summary2}
      </p>

      <div className={styles.educationCard}>
        <h3>{t.education}</h3>
        {t.degrees.map((item, index) => (
          <div key={index} className={styles.educationItem}>
            <span className={styles.degree}>{item.degree}</span>
            <span className={styles.university}>{item.university}</span>
            <span className={styles.duration}>{item.duration}</span>
            <span className={styles.marks}>{item.marks}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
