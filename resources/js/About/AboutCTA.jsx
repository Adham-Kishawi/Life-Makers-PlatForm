import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "@inertiajs/react";

function AboutCTA() {
  return (
    <section className="about-cta py-5">
      <div className="container">
        <motion.div
          className="join-card text-center p-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="cta-title mb-3">مستني إيه؟</h2>
          <p className="cta-subtitle mb-4">
            لو نفسك تسيب بصمتك في المجتمع، انضم لينا وتبدأ رحلتك مع صناع الحياة مصر.
          </p>
          <Link to="/login" className="btn cta-join-link CTA-LINK px-4 py-2 d-inline-flex align-items-center">
            انضم لينا
            <FaArrowLeft className="m-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;
