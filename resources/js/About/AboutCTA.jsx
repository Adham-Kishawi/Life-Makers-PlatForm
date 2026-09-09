import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHeart, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function AboutCTA() {
  return (
    <section className="about-cta-section py-12 relative">
      <div className="container py-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-12 text-center text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #013758 0%, #014976 50%, #02639e 100%)",
            borderRadius: "2.5rem", // 40px full organic curve
            boxShadow: "0 25px 60px -15px rgba(1, 55, 88, 0.45)",
            border: "1.5px solid rgba(251, 174, 66, 0.35)"
          }}
        >
          {/* Ambient Glow */}
          <div
            className="absolute"
            style={{
              top: "-50%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(251, 174, 66, 0.25) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div className="relative mx-auto" style={{ maxWidth: "800px", zIndex: 2 }}>
            <span
              className="badge px-4 py-2 rounded-full font-bold mb-4 inline-flex items-center"
              style={{
                background: "rgba(251, 174, 66, 0.2)",
                color: "#FBAE42",
                border: "1px solid rgba(251, 174, 66, 0.45)",
                fontSize: "0.9rem",
                gap: "0.4rem"
              }}
            >
              <FaHeart className="text-warning" />
              <span>اصنع الفارق معنا</span>
            </span>

            <h2 className="display-5 font-bold mb-4" style={{ lineHeight: 1.3 }}>
              كن شريكاً في صناعة الأثر.. خطوتك تبدأ اليوم!
            </h2>

            <p className="text-xl font-light mb-6" style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.15rem", lineHeight: 1.85 }}>
              سواء كنت ترغب في استثمار طاقتك ومهاراتك في صفوف متطوعي فرع الإسماعيلية ومصر، أو المساهمة في دعم مشروعاتنا التنموية، يدك معنا تصنع مستقبلاً أفضل لآلاف الأسر.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2" style={{ gap: "1rem" }}>
              <Link
                href="/Login"
                className="btn btn-glow-amber px-12 py-4 text-dark font-bold inline-flex items-center no-underline shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]"
                style={{
                  background: "linear-gradient(135deg, #FBAE42 0%, #f59e0b 100%)",
                  borderRadius: "9999px",
                  fontSize: "1.05rem",
                  gap: "0.6rem",
                  border: "none"
                }}
              >
                <FaHandsHelping size={20} />
                <span>سجّل كمتطوع جديد (خليك صنعاوي)</span>
              </Link>

              <Link
                href="/Contact"
                className="btn px-6 py-4 text-white font-bold inline-flex items-center no-underline"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1.5px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "9999px",
                  fontSize: "1rem",
                  gap: "0.5rem",
                  backdropFilter: "blur(8px)"
                }}
              >
                <FaPhoneAlt size={14} />
                <span>تواصل مع الفريق</span>
              </Link>

              <a
                href="https://donate.lifemakers.org/"
                target="_blank"
                rel="noreferrer"
                className="btn px-6 py-4 text-warning font-bold inline-flex items-center no-underline"
                style={{
                  background: "rgba(251, 174, 66, 0.12)",
                  border: "1.5px solid rgba(251, 174, 66, 0.4)",
                  borderRadius: "9999px",
                  fontSize: "1rem",
                  gap: "0.5rem",
                  backdropFilter: "blur(8px)"
                }}
              >
                <FaHeart size={14} />
                <span>ادعم المشروعات إلكترونياً</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
