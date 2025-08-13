import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="contact-hero-section py-5">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <h2 className=" about-hero-title mb-3">تواصل معنا</h2>
          <p className="contact-hero-subtitle mx-auto">
            بنرحب بتواصلك معانا في صناع الحياة – الإسماعيلية.  
            سواء كنت عايز تستفسر، تقترح، أو تنضم لينا… إحنا في خدمتك وهنرد عليك بأسرع وقت.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
