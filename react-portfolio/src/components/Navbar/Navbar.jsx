import React, { useState } from "react";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

import { navbarText } from "../../i18n/text";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = navbarText[language];

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "./assets/nav/closeIcon.png"
              : "./assets/nav/menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">{t.about}</a>
          </li>
          <li>
            <a href="#experience">{t.experience}</a>
          </li>
          <li>
            <a href="#projects">{t.projects}</a>
          </li>
          <li>
            <a href="#contact">{t.contact}</a>
          </li>
        </ul>
      </div>

      <div className={styles.controls}>
        <button onClick={toggleTheme}>🌓</button>
        <button onClick={toggleLanguage}>
          {language === "en" ? "DE" : "EN"}
        </button>
      </div>
    </nav>
    
  );
};
