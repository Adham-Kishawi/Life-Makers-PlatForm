import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandsHelping, FaAward, FaCheckCircle, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from '@inertiajs/react';
import { useLanguage } from "../Context/LanguageContext";

export default function HomeAboutSection() {
  const { t, isRtl } = useLanguage();

  const highlights = isRtl ? [
    "مؤسسة أهلية مرخصة برقم قيد 839 لسنة 2018",
    "شبكة شبابية تطوعية تنموية تمتد في كافة مراكز الإسماعيلية",
    "برامج متكاملة: التمكين الاقتصادي، التعليم، الصحة، ودعم ذوي الإعاقة",
    "شراكات تنموية وإنسانية مع كبرى المؤسسات الوطنية والدولية",
  ] : [
    "Centrally registered national NGO under license #839 of 2018",
    "Dynamic youth volunteer network covering all Ismailia centers & villages",
    "Integrated programs: Economic empowerment, education, health & disability inclusion",
    "Strategic humanitarian partnerships with national and international bodies"
  ];

  return (
    <section className="py-12 relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="container py-4">
        <div className="row align-items-center g-4">
          {/* Text Content */}
          <motion.div
            className="col-12 col-lg-7 order-2 order-lg-1"
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-flex items-center px-4 py-1 rounded-full mb-4 font-bold"
              style={{
                background: "rgba(1, 73, 118, 0.08)",
                color: "var(--main-color)",
                fontSize: "0.9rem"
              }}
            >
              <FaHandsHelping className="me-2" />
              <span>{t("home_about_title")}</span>
            </span>

            <h2 className="font-bold mb-6" style={{ color: "var(--text-color)", fontSize: "2.2rem", lineHeight: "1.3" }}>
              {isRtl ? (
                <>
                  نحن <span style={{ color: "var(--main-color)" }}>صناع الحياة الإسماعيلية</span>
                  <br />
                  نصنع الأمل ونبني قادة الغد
                </>
              ) : (
                <>
                  We Are <span style={{ color: "var(--main-color)" }}>Life Makers Ismailia</span>
                  <br />
                  Inspiring Hope & Building Tomorrow's Leaders
                </>
              )}
            </h2>

            <p className="text-xl font-light mb-6 text-muted" style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
              {t("home_about_desc")}
            </p>

            {/* Checklist */}
            <div className="row g-3 mb-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="col-12 col-sm-6 d-flex align-items-start" style={{ gap: "0.5rem" }}>
                  <FaCheckCircle className="text-warning mt-1 shrink-0" size={16} />
                  <span className="text-[80%] font-bold" style={{ color: "var(--text-color)" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center flex-wrap" style={{ gap: "1rem" }}>
              <Link
                href="/About"
                className="btn btn-primary-custom px-6 py-2 rounded-full font-bold no-underline inline-flex items-center shadow-sm"
              >
                <span>{t("home_about_more")}</span>
                {isRtl ? <FaArrowLeft className="ms-2" size={12} /> : <FaArrowRight className="ms-2" size={12} />}
              </Link>

              <Link
                href="/Login"
                className="no-underline font-bold inline-flex items-center"
                style={{ color: "var(--main-color)" }}
              >
                <FaHeart className="text-danger me-2" />
                <span>{t("nav_volunteer")}</span>
              </Link>
            </div>
          </motion.div>

          {/* Visual Image with Floating Experience Badge */}
          <motion.div
            className="col-12 col-lg-5 order-1 order-lg-2 text-center position-relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="image-frame-container relative inline-block p-2 shadow-2xl" style={{
              background: "linear-gradient(135deg, rgba(1, 73, 118, 0.12) 0%, rgba(251, 174, 66, 0.25) 100%)",
              border: "2px solid rgba(251, 174, 66, 0.35)",
              boxShadow: "0 20px 45px -15px rgba(1, 73, 118, 0.3)",
              borderRadius: "2rem"
            }}>
              <div className="overflow-hidden relative" style={{ border: "1px solid rgba(255,255,255,0.2)", borderRadius: "1.75rem" }}>
                <img
                  src="/Images/home.jpg"
                  alt="Life Makers Team"
                  className="max-w-full h-auto block"
                  style={{ maxHeight: "420px", width: "100%", objectFit: "cover", borderRadius: "1.75rem" }}
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className={`absolute bottom-0 ${isRtl ? "start-0 text-right" : "end-0 text-left"} m-4 p-4 rounded-4 shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]`}
                style={{
                  background: "var(--card-color)",
                  border: "1px solid var(--card-border)",
                  backdropFilter: "blur(8px)",
                  maxWidth: "230px"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-1 text-warning font-bold">
                  <FaAward className="me-2" />
                  <span>+20 {isRtl ? "عاماً" : "Years"}</span>
                </div>
                <div className="text-[80%] font-bold" style={{ color: "var(--text-color)" }}>
                  {t("home_about_experience")}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
