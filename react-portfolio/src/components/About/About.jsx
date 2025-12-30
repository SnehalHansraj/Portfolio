import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <p className={styles.summary}>
        Software Engineer with 2+ years of professional experience in backend and
        full-stack development. Currently pursuing a Master’s degree in Computer
        Science at RPTU Kaiserslautern, with strong interest in scalable systems,
        clean architecture, and applied software engineering.
      </p>

      <div className={styles.educationCard}>
        <h3>Education</h3>

        <div className={styles.educationItem}>
          <span className={styles.degree}>M.Sc. Computer Science</span>
          <span className={styles.university}>
            RPTU Kaiserslautern-Landau, Germany
          </span>
          <span className={styles.duration}>2024 – Present</span>
        </div>

        <div className={styles.educationItem}>
          <span className={styles.degree}>B.E. Computer Engineering</span>
          <span className={styles.university}>
            University of Mumbai, India
          </span>
          <span className={styles.duration}>2018 – 2022</span>
        </div>
      </div>
    </section>
  );
};
