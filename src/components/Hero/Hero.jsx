import React from "react";
import styles from "./Hero.module.css";
import { useLanguage } from "../../context/LanguageContext";
import { heroText } from "../../i18n/text";
import { contactBtn } from "../../i18n/text";

export const Hero = () => {
  const { language } = useLanguage();
  const text = heroText[language];
  const t = contactBtn[language];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        { /*<h1 className={styles.title}>
          Hi, I’m <span className={styles.name}>Snehal Hansraj</span>
        </h1>

        <h2 className={styles.subtitle}>
          Software Engineer | Computer Science Master’s Student
        </h2>

        <p className={styles.description}>
          Master’s student at RPTU Kaiserslautern with 2+ years of industry
          experience as a Software Engineer at Persistent Systems. Focused on
          backend development, scalable systems, and applied machine learning.
        </p>*/}

        <h1 className={styles.title}>{text.title}</h1>
        <h2 className={styles.subtitle}>{text.subtitle}</h2>
        <p className={styles.description}>{text.description}</p>

        {/* BUTTON WRAPPER */}
        <div className={styles.buttons}>
          <a href="mailto:snehal31deore@gmail.com" className={styles.contactBtn}>
            {t}
          </a>

          <a 
            href={ 
              language === "en"
              ? "/CV_Snehal_Hansraj.pdf"
              : "/CV_Snehal_Hansraj_DE.pdf"
             }
            className={styles.secondaryBtn} 
            download
          >
          {language === "en" ? "Download CV" : "Lebenslauf herunterladen"}
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/Portfolio/hero/SnehalHansrajPhoto.png" 
        alt="Snehal Hansraj"
        className={styles.heroImg} />
      </div>
      

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
