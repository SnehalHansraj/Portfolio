import styles from "./Projects.module.css";
import { projectsData } from "../../data/projectsData";

export default function Projects({ language = "en" }) {
  const projects = projectsData[language];

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        {language === "de" ? "Projekte" : "Projects"}
      </h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <article key={index} className={styles.card}>
            <header className={styles.header}>
              <h3>{project.title}</h3>
              <span className={styles.subtitle}>{project.subtitle}</span>
            </header>

            <div className={styles.meta}>
              <span>
                <strong>{language === "de" ? "Rolle:" : "Role:"}</strong>{" "}
                {project.role}
              </span>
            </div>

            <ul className={styles.points}>
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className={styles.tech}>
              {project.tech.map((tech, i) => (
                <span key={i} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
