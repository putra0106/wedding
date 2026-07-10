// src/components/PricingService/PricingService.jsx
import styles from "./PricingService.module.css";
import { buildWhatsAppLink } from "../../utils/whatsapp";

// Data harga & fitur HARDCODED sesuai requirement (bukan dari API).
// Taruh di luar komponen supaya tidak dibuat ulang setiap render.
const PRICING_PLANS = [
  {
    id: "basic",
    name: "Basic",
    price: "Rp 75.000",
    highlight: false,
    features: [
      "1 halaman undangan digital",
      "Desain template pilihan",
      "Nama pengantin & tanggal acara",
      "Countdown acara",
      "Tanpa RSVP & buku tamu",
      "Musik latar",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "Rp 125.000",
    highlight: true, // paket paling direkomendasikan
    features: [
      "Semua fitur paket Basic",
      "RSVP & buku tamu digital",
      "Galeri foto pengantin",
      "Wedding Gift list",
      "Free revisi 1x",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "Rp 200.000",
    highlight: false,
    features: [
      "Semua fitur paket Standard",
      "Custom desain sesuai request",
      "Free revisi 2x",
    ],
  },
];

export default function PricingService() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Paket Jasa Pembuatan Undangan</h2>
      <p className={styles.subtitle}>
        Pilih paket sesuai kebutuhan, atau diskusikan kebutuhan khusus via
        WhatsApp
      </p>

      <div className={styles.grid}>
        {PRICING_PLANS.map((plan) => (
          <div
            key={plan.id}
            className={`${styles.card} ${plan.highlight ? styles.highlight : ""}`}>
            {plan.highlight && (
              <span className={styles.ribbon}>Paling Diminati</span>
            )}

            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.price}>{plan.price}</p>

            <ul className={styles.featureList}>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <a
              href={buildWhatsAppLink(`Paket ${plan.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}>
              Tanya Paket Ini
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
