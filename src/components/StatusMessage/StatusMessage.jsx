// src/components/StatusMessage/StatusMessage.jsx
import styles from "./StatusMessage.module.css";

export default function StatusMessage({ type = "loading", message }) {
  const defaultMessages = {
    loading: "Memuat project...",
    error: "Gagal memuat data project. Silakan coba lagi nanti.",
    empty: "Belum ada project yang ditampilkan.",
  };

  return (
    <div className={`${styles.wrap} ${styles[type]}`}>
      <p className={styles.text}>{message || defaultMessages[type]}</p>
    </div>
  );
}
