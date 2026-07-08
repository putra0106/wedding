// src/components/Header/Header.jsx
import styles from "./Header.module.css";
import { HOME_URL } from "../../utils/constants";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href={HOME_URL} className={styles.backLink}>
        <span className={styles.arrow} aria-hidden="true">←</span>
        Kembali ke Beranda
      </a>

      <div className={styles.titleBlock}>
        <h1 className={styles.title}>Project Undangan Pernikahan Digital</h1>
        <span className={styles.divider} aria-hidden="true" />
        <p className={styles.subtitle}>
          Kumpulan project undangan pernikahan digital yang pernah dibuat
        </p>
      </div>
    </header>
  );
}
