// src/utils/whatsapp.js
import { WHATSAPP_NUMBER } from "./constants";

/**
 * Membentuk URL wa.me dengan pesan otomatis yang sudah terisi
 * nama project yang diklik user.
 *
 * @param {string} projectName - Nama project undangan, mis. "Elegant Rose"
 * @returns {string} URL siap dipakai di <a href>
 */
export function buildWhatsAppLink(projectName) {
  const message =
    `Halo, saya lihat project undangan pernikahan ` +
    `"${projectName}" di website Anda. ` +
    `Saya tertarik membuat undangan seperti itu. ` +
    `Boleh diskusi lebih lanjut?`;

  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
