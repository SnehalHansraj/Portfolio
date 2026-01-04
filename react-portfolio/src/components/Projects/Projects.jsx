import { useState } from "react";
import styles from "./Projects.module.css";
import { projectsData } from "../../data/projectsData";
import { Github } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const { language } = useLanguage(); // 🔥 FIX
  const projects = projectsData[language];
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>
        {language === "de" ? "Projekte" : "Projects"}
      </h2>

      {/* FILTER */}
      <div className={styles.filters}>
        {[
          {
            key: "all",
            label: language === "de" ? "Alle" : "All",
          },
          {
            key: "frontend",
            label: "Frontend",
          },
          {
            key: "ml",
            label: language === "de" ? "Maschinelles Lernen" : "Machine Learning",
          },
          {
            key: "genai",
            label: "GenAI",
          },
        ].map((btn) => (
          <button
            key={btn.key}
            className={`${styles.filterBtn} ${
              filter === btn.key ? styles.active : ""
            }`}
            onClick={() => setFilter(btn.key)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((project, index) => (
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

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.github}
                >
                  <Github size={18} />
                  GitHub
                </a>
              )}
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
