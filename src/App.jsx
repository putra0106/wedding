// src/App.jsx
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import PricingService from "./components/PricingService/PricingService";

export default function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ProjectGrid />
        <PricingService />
      </main>
    </div>
  );
}
