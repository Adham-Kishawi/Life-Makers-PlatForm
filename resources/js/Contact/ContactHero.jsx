import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../Context/LanguageContext";

export default function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="contact-hero-section py-12">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <h2 className="about-hero-title mb-4">{t("contact_hero_badge")}</h2>
          <p className="contact-hero-subtitle mx-auto" style={{ maxWidth: "700px" }}>
            {t("contact_hero_subtitle")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
