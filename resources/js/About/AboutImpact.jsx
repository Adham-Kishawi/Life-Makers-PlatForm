import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaHandsHelping, FaMapMarkedAlt, FaChartLine } from "react-icons/fa";

export default function AboutImpact() {
  const stats = [
    {
      value: "1.5M+",
      label: "مستفيد مباشر سنوياً",
      desc: "أسر أولى بالرعاية، طلاب، ومرضى وصلهم الدعم الإنساني والتنموي",
      icon: <FaUsers size={28} />,
      color: "#3b82f6",
      bgColor: "rgba(59, 130, 246, 0.1)"
    },
    {
      value: "25,000+",
      label: "متطوع شبابي معتمد",
      desc: "طاقات بشرية مؤهلة تشارك بانتظام في مختلف المبادرات والقوافل",
      icon: <FaHandsHelping size={28} />,
      color: "#FBAE42",
      bgColor: "rgba(251, 174, 66, 0.12)"
    },
    {
      value: "3,000+",
      label: "مشروع ومبادرة منفذة",
      desc: "تدخلات في مجالات الصحة، التعليم، التمكين الاقتصادي، والإغاثة",
      icon: <FaProjectDiagram size={28} />,
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)"
    },
    {
      value: "27",
      label: "محافظة على مستوى مصر",
      desc: "انتشار جغرافي كامل عبر مكاتب إقليمية ومقرات ميدانية نشطة",
      icon: <FaMapMarkedAlt size={28} />,
      color: "#8b5cf6",
      bgColor: "rgba(139, 92, 246, 0.1)"
    }
  ];

  return (
    <section className="about-impact-section py-12 relative">
      <div className="container py-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="badge px-4 py-2 rounded-full font-bold mb-4 inline-flex items-center"
            style={{
              background: "rgba(1, 73, 118, 0.08)",
              color: "var(--main-color)",
              border: "1px solid rgba(1, 73, 118, 0.2)",
              fontSize: "0.9rem",
              gap: "0.4rem"
            }}
          >
            <FaChartLine className="text-warning" />
            <span>الأثر والنتائج الموثقة</span>
          </span>
          <h2 className="display-5 font-bold mb-4" style={{ color: "var(--main-color)" }}>
            أرقام حقيقية تصنع فارقاً مستداماً
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "720px", fontSize: "1.1rem", lineHeight: 1.8 }}>
            عبر أكثر من عقد من العمل الميداني الدؤوب، نجحت صناع الحياة في تحويل طاقات التطوع إلى أثر تنموي عميق يُقاس بإنجازات ملموسة.
          </p>
        </motion.div>

        {/* Counter Bento Cards Grid */}
        <div className="row g-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="col-12 col-md-6 col-lg-3 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div
                className="h-full p-6 xl:p-12 text-center relative overflow-hidden"
                style={{
                  background: "var(--card-color)",
                  borderRadius: "1.75rem", // 28px rounded corners
                  border: "1.5px solid var(--card-border)",
                  boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.04)",
                  transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.borderColor = "#FBAE42";
                  e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(1, 73, 118, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.04)";
                }}
              >
                {/* Floating Glow Dot */}
                <div
                  className="absolute"
                  style={{
                    top: "12px",
                    right: "12px",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: stat.color,
                    boxShadow: `0 0 10px ${stat.color}`
                  }}
                />

                <div
                  className="inline-flex items-center justify-center mb-4"
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "1.25rem",
                    background: stat.bgColor,
                    color: stat.color
                  }}
                >
                  {stat.icon}
                </div>

                <div
                  className="display-6 font-bold mb-2"
                  style={{
                    color: "var(--main-color)",
                    letterSpacing: "-0.5px"
                  }}
                >
                  {stat.value}
                </div>

                <h3 className="text-[1rem] font-medium leading-[1.2] mb-2 font-bold mb-2" style={{ color: "var(--text-color)" }}>
                  {stat.label}
                </h3>

                <p className="text-[80%] text-muted mb-0" style={{ lineHeight: 1.6 }}>
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
