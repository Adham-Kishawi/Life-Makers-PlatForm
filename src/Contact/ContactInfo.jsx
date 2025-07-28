import React from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <section className="contact-info-section py-5">
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
              title="راسلنا على واتساب"
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
              title="راسلنا بالإيميل"
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
              title="تابعنا على فيسبوك"
            >
              <FaFacebookF />
            </a>
          </div>
          <div className="col-auto">
            <a
              href="https://www.instagram.com/life_makers_ismailia?igsh=dWxndHVoMDI5OXl2"
              target="_blank"
              rel="noreferrer"
              className="social-icon-box"
              title="تابعنا على إنستجرام"
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
          <h5 className="mb-4">
           حنا دايمًا فاتحين أبوابنا… تعالى زورنا في مقرنا هتلاقي القلوب مفتوحة قبل المكان
          </h5>
          <div className="map-responsive rounded shadow">
            <iframe
              title="life-makers-ismailia-location"
              src="https://www.google.com/maps?q=30.612942440173153,32.2684368165654&z=15&output=embed"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactInfo;
