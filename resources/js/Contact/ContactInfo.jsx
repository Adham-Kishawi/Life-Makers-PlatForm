import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../Context/LanguageContext";

export default function ContactInfo() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="contact-info-section py-12">
      <div className="container text-center">
        {/* Social Icons Row */}
        <motion.div
          className="row justify-content-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="col-auto">
            <a
              href="https://wa.me/201017092613"
              target="_blank"
              rel="noreferrer"
              className="social-icon-box"
              title={isRtl ? "راسلنا على واتساب" : "Chat on WhatsApp"}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
          <div className="col-auto">
            <a
              href="mailto:sonaa.ismailia@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="social-icon-box"
              title={isRtl ? "راسلنا بالإيميل" : "Send an Email"}
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <div className="col-auto">
            <a
              href="https://www.facebook.com/share/1Yc9JA2JEw/"
              target="_blank"
              rel="noreferrer"
              className="social-icon-box"
              title={isRtl ? "تابعنا على فيسبوك" : "Follow on Facebook"}
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="col-auto">
            <a
              href="https://www.instagram.com/life_makers_ismailia"
              target="_blank"
              rel="noreferrer"
              className="social-icon-box"
              title={isRtl ? "تابعنا على إنستجرام" : "Follow on Instagram"}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        {/* Google Map + Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h5 className="mb-6 font-bold" style={{ color: "var(--text-color)" }}>
            {t("contact_address_box")}
          </h5>
          <div className="map-responsive rounded-4 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] overflow-hidden">
            <iframe
              title="life-makers-ismailia-location"
              src="https://www.google.com/maps?q=30.612942440173153,32.2684368165654&z=15&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
