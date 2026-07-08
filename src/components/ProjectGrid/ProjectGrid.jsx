// src/components/ProjectGrid/ProjectGrid.jsx
import styles from "./ProjectGrid.module.css";
import { projectList as projects } from "../../utils/projectList";
import ProjectCard from "../ProjectCard/ProjectCard";
import StatusMessage from "../StatusMessage/StatusMessage";

export default function ProjectGrid() {

  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
