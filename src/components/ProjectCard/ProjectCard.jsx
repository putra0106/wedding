// src/components/ProjectCard/ProjectCard.jsx
import styles from "./ProjectCard.module.css";
import { buildWhatsAppLink } from "../../utils/whatsapp";

export default function ProjectCard({ project }) {
  const { name, image, demoUrl, category } = project;
  const whatsappLink = buildWhatsAppLink(name);

  return (
    <article className={styles.card}>
      <div className={styles.thumbnailWrap}>
        <img
          src={image}
          alt={`Screenshot undangan pernikahan ${name}`}
          className={styles.thumbnail}
          loading="lazy"
        />
        {category && <span className={styles.badge}>{category}</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>

        <div className={styles.actions}>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.demoButton}
          >
            Lihat Demo 👁️
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.orderButton}
          >
            Pesan Undangan Seperti Ini 🛒
          </a>
        </div>
      </div>
    </article>
  );
}
