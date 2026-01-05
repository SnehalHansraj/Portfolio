import styles from "./Contact.module.css";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

export default function Contact({ language = "en" }) {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>
        {language === "de" ? "Kontakt" : "Contact"}
      </h2>

      <div className={styles.list}>
        <div className={styles.item}>
          <Mail size={18} />
          <a href="mailto:snehal31deore@gmail.com">
            snehal31deore@gmail.com
          </a>
        </div>

        <div className={styles.item}>
          <Phone size={18} />
          <span>+49 152 10604910</span>
        </div>

        <div className={styles.item}>
          <MapPin size={18} />
          <span>
            {language === "de"
              ? "Kaiserslautern, Deutschland"
              : "Kaiserslautern, Germany"}
          </span>
        </div>

        <div className={styles.item}>
          <Linkedin size={18} />
          <a
            href="https://linkedin.com/in/snehaldeore31"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/snehaldeore31
          </a>
        </div>
      </div>
    </section>
  );
}
