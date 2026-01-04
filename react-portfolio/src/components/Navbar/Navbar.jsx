import React, { useState, useEffect, useRef } from "react";

import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { navbarText } from "../../i18n/text";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const { toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = navbarText[language];

  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  /* ======================
     Hide / Show + Compact on Scroll
     ====================== */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current) {
        navRef.current?.classList.add(styles.hide);
      } else {
        navRef.current?.classList.remove(styles.hide);
      }

      if (currentScroll > 60) {
        navRef.current?.classList.add(styles.compact);
      } else {
        navRef.current?.classList.remove(styles.compact);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ======================
     Active Section Highlight
     ====================== */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles.navbarContent}>
        {/* LEFT */}
        <a className={styles.title} href="/">
          Portfolio
        </a>

        {/* CENTER MENU */}
        <div className={styles.menu}>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <ul
            className={`${styles.menuItems} ${
              menuOpen ? styles.menuOpen : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a
                href="#about"
                className={active === "about" ? styles.active : ""}
              >
                {t.about}
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={active === "experience" ? styles.active : ""}
              >
                {t.experience}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={active === "projects" ? styles.active : ""}
              >
                {t.projects}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={active === "contact" ? styles.active : ""}
              >
                {t.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT CONTROLS */}
        <div className={styles.controls}>
          <button onClick={toggleTheme} aria-label="Toggle theme">
            🌓
          </button>
          <button onClick={toggleLanguage}>
            {language === "en" ? "DE" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
};
