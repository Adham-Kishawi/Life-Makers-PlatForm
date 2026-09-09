import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaBrain, FaUsers, FaHeart, FaProjectDiagram, FaDoorOpen, FaUserPlus } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import TiltCard from "../Components/TiltCard";
import { useLanguage } from "../Context/LanguageContext";

export default function HomeJoinUsSection() {
  const { t, isRtl } = useLanguage();

  const features = [
    {
      title: t("join_feat1_title"),
      icon: <FaHandsHelping size={28} />,
      description: t("join_feat1_desc"),
    },
    {
      title: t("join_feat2_title"),
      icon: <FaBrain size={28} />,
      description: t("join_feat2_desc"),
    },
    {
      title: t("join_feat3_title"),
      icon: <FaUsers size={28} />,
      description: t("join_feat3_desc"),
    },
    {
      title: t("join_feat4_title"),
      icon: <FaHeart size={28} />,
      description: t("join_feat4_desc"),
    },
    {
      title: t("join_feat5_title"),
      icon: <FaProjectDiagram size={28} />,
      description: t("join_feat5_desc"),
    },
    {
      title: t("join_feat6_title"),
      icon: <FaDoorOpen size={28} />,
      description: t("join_feat6_desc"),
    },
  ];

  return (
    <section className="py-12" style={{ background: "rgba(1, 73, 118, 0.03)" }}>
      <div className="container py-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span
            className="inline-flex items-center px-4 py-1 rounded-full mb-4 font-bold"
            style={{
              background: "rgba(251, 174, 66, 0.15)",
              color: "var(--secondary-color)",
              fontSize: "0.9rem"
            }}
          >
            <FaHeart className="text-danger me-2" />
            <span>{t("join_badge")}</span>
          </span>

          <h2 className="font-bold mb-4" style={{ color: "var(--text-color)", fontSize: "2.2rem" }}>
            {t("join_title")}
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
            {t("join_subtitle")}
          </p>
        </motion.div>

        {/* 6 Features with 3D Tilt */}
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4">
              <TiltCard className="w-full">
                <div
                  className="join-card-modern p-6 rounded-4 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] h-full text-center flex flex-col items-center"
                  style={{
                    background: "var(--card-color)",
                    border: "1px solid var(--card-border)",
                    transition: "transform 0.2s ease, box-shadow 0.3s ease"
                  }}
                >
                  <div
                    className="rounded-full p-4 mb-4 flex items-center justify-center"
                    style={{
                      width: "65px",
                      height: "65px",
                      background: "rgba(1, 73, 118, 0.08)",
                      color: "var(--main-color)"
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="font-bold mb-2" style={{ color: "var(--text-color)" }}>{feature.title}</h5>
                  <p className="text-muted text-[80%] mb-0" style={{ lineHeight: "1.7" }}>{feature.description}</p>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

        {/* CTA Banner Box */}
        <motion.div
          className="mt-12 p-12 rounded-4 shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] text-white text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #014976 0%, #01243a 100%)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="display-6 font-bold mb-4">{t("join_cta_title")}</h3>
          <p className="text-xl font-light mb-6 text-light mx-auto" style={{ maxWidth: "600px", opacity: 0.9 }}>
            {t("join_cta_subtitle")}
          </p>

          <Link
            href="/Login"
            className="btn btn-warning text-dark px-12 py-4 rounded-full font-bold fs-5 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)] inline-flex items-center hover-lift"
            style={{ background: "linear-gradient(45deg, #FBAE42, #f59e0b)", border: "none" }}
          >
            <FaUserPlus className="me-2" />
            <span>{t("join_cta_btn")}</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
