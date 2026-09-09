import React from "react";
import { motion } from "framer-motion";
import { MdOutlineFlag } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FaHandsHelping, FaBalanceScale, FaCheckCircle, FaHeart } from "react-icons/fa";

export default function AboutMissionVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="about-mv-section py-12 relative">
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
            <FaHeart className="text-warning" />
            <span>البوصلة والمبادئ</span>
          </span>
          <h2 className="display-5 font-bold mb-4" style={{ color: "var(--main-color)" }}>
            رؤيتنا ورسالتنا وقيمنا الراسخة
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "700px", fontSize: "1.1rem", lineHeight: 1.8 }}>
            الأسس والمبادئ الإنسانية التي انطلقت منها مسيرة صناع الحياة، وتوجه بوصلة كل متطوع ومبادرة نقوم بها في مصر والإسماعيلية.
          </p>
        </motion.div>

        {/* Bento Grid Layout with 26px rounded corners */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="row g-4"
        >
          {/* Mission Card (Wide Hero Card) */}
          <motion.div variants={itemVariants} className="col-12 col-lg-6 mb-4">
            <div
              className="h-full p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, var(--card-color) 0%, rgba(1, 73, 118, 0.03) 100%)",
                borderRadius: "1.75rem", // 28px
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#FBAE42";
                e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(1, 73, 118, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                className="inline-flex items-center justify-center mb-6"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "1.25rem",
                  background: "linear-gradient(135deg, rgba(1, 73, 118, 0.1) 0%, rgba(1, 73, 118, 0.2) 100%)",
                  color: "var(--main-color)"
                }}
              >
                <MdOutlineFlag size={32} style={{ color: "var(--main-color)" }} />
              </div>
              <h3 className="text-[1.5rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                رسالتنا الوطنية
              </h3>
              <p className="text-muted mb-0" style={{ fontSize: "1.05rem", lineHeight: 1.85 }}>
                تمكين الشباب في مختلف أنحاء مصر بالمعرفة والمهارات والفرص التي تؤهلهم ليصبحوا قادة فاعلين قادرين على مواجهة التحديات المحلية في مجتمعاتهم، من خلال العمل التطوعي المؤسسي وتقديم تدخلات مبتكرة وذات أثر مستدام، مصممة خصيصًا لتلبية احتياجات الفئات الأكثر هشاشة واستحقاقًا مع ضمان الحفاظ على كرامتهم الإنسانية في إطار من الحياد والمساواة.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={itemVariants} className="col-12 col-lg-6 mb-4">
            <div
              className="h-full p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, var(--card-color) 0%, rgba(251, 174, 66, 0.04) 100%)",
                borderRadius: "1.75rem", // 28px
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#FBAE42";
                e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(251, 174, 66, 0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                className="inline-flex items-center justify-center mb-6"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "1.25rem",
                  background: "linear-gradient(135deg, rgba(251, 174, 66, 0.15) 0%, rgba(251, 174, 66, 0.3) 100%)",
                  color: "var(--secondary-color)"
                }}
              >
                <AiOutlineEye size={32} style={{ color: "var(--secondary-color)" }} />
              </div>
              <h3 className="text-[1.5rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                رؤيتنا المستقبلية
              </h3>
              <p className="text-muted mb-6" style={{ fontSize: "1.05rem", lineHeight: 1.85 }}>
                تنمية مجتمعية شاملة ومستدامة لصالح الإنسانية؛ نقود فيها العمل الأهلي التنموي في مصر والعالم العربي بنموذج شبابي تطوعي احترافي قادر على إحداث نقلة نوعية في حياة الأسر المستحقة وبناء قيادات وطنية تصنع الفارق في كل مدينة وقرية.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="badge rounded-full px-4 py-2" style={{ background: "rgba(1, 73, 118, 0.08)", color: "var(--main-color)", fontSize: "0.85rem" }}>
                  • تنمية مستدامة
                </span>
                <span className="badge rounded-full px-4 py-2" style={{ background: "rgba(251, 174, 66, 0.15)", color: "var(--secondary-color)", fontSize: "0.85rem" }}>
                  • ريادة مجتمعية
                </span>
                <span className="badge rounded-full px-4 py-2" style={{ background: "rgba(16, 185, 129, 0.1)", color: "#10b981", fontSize: "0.85rem" }}>
                  • قيادة شبابية
                </span>
              </div>
            </div>
          </motion.div>

          {/* Core Values Card */}
          <motion.div variants={itemVariants} className="col-12 col-lg-6 mb-4">
            <div
              className="h-full p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "var(--card-color)",
                borderRadius: "1.75rem",
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#FBAE42";
                e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                className="inline-flex items-center justify-center mb-6"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "1.25rem",
                  background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.2) 100%)",
                  color: "var(--main-color)"
                }}
              >
                <FaHandsHelping size={28} style={{ color: "var(--main-color)" }} />
              </div>
              <h3 className="text-[1.5rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                قيمنا الجوهرية
              </h3>
              <p className="text-muted mb-6" style={{ lineHeight: 1.7 }}>
                المبادئ الأخلاقية التي يتربى عليها كل متطوع وقيادي داخل منظومة صناع الحياة:
              </p>
              <div className="row g-2">
                {[
                  { title: "الشفافية المطلقة", desc: "وضوح في البيانات والتقارير المالية والميدانية" },
                  { title: "العمل الجماعي", desc: "قوة الفريق الواحد وإعلاء المصلحة العامة" },
                  { title: "الابتكار والتجديد", desc: "ابتكار حلول تنموية عصرية للتحديات المجتمعية" },
                  { title: "احترام كرامة الإنسان", desc: "حفظ كرامة كل مستفيد ومستحقة كأولوية قصوى" },
                  { title: "النزاهة والمسؤولية", desc: "أمانة العمل وإتقان تقديم الخدمة للمجتمع" }
                ].map((val, idx) => (
                  <div key={idx} className="col-12 mb-2">
                    <div
                      className="flex items-center p-2 px-4 rounded-full"
                      style={{
                        background: "rgba(1, 73, 118, 0.04)",
                        border: "1px solid rgba(1, 73, 118, 0.08)",
                        gap: "0.75rem"
                      }}
                    >
                      <FaCheckCircle className="text-warning shrink-0" size={16} />
                      <div>
                        <strong style={{ color: "var(--main-color)", fontSize: "0.95rem" }}>{val.title}: </strong>
                        <span className="text-muted text-[80%]">{val.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4 Humanitarian Principles Card */}
          <motion.div variants={itemVariants} className="col-12 col-lg-6 mb-4">
            <div
              className="h-full p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "var(--card-color)",
                borderRadius: "1.75rem",
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.05)",
                transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#FBAE42";
                e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--card-border)";
                e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.05)";
              }}
            >
              <div
                className="inline-flex items-center justify-center mb-6"
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "1.25rem",
                  background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.2) 100%)",
                  color: "#10b981"
                }}
              >
                <FaBalanceScale size={28} style={{ color: "#10b981" }} />
              </div>
              <h3 className="text-[1.5rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                المبادئ الإنسانية الدولية
              </h3>
              <p className="text-muted mb-6" style={{ lineHeight: 1.7 }}>
                تلتزم مؤسسة صناع الحياة بالمبادئ الإنسانية الأربعة المعترف بها دولياً في جميع مشروعاتها وبرامجها:
              </p>
              <div className="row g-3">
                {[
                  { title: "الإنسانية", desc: "تخفيف المعاناة وحماية الحياة والصحة وضمان الاحترام للإنسان في كل مكان.", color: "#ef4444" },
                  { title: "الحياد", desc: "عدم الانحياز لأي طرف سياسي أو أيديولوجي والتركيز التام على الهدف الإنساني.", color: "#3b82f6" },
                  { title: "عدم التحيز", desc: "تقديم المساعدات بناءً على الاحتياج وحده دون أي تمييز عرقي أو ديني أو فئوي.", color: "#10b981" },
                  { title: "الاستقلالية", desc: "استقلالية القرار الإنساني لصالح المستفيدين بعيداً عن أي ضغوط خارجية.", color: "#8b5cf6" }
                ].map((item, idx) => (
                  <div key={idx} className="col-12 col-sm-6">
                    <div
                      className="p-4 rounded-4 h-full"
                      style={{
                        background: "rgba(1, 73, 118, 0.03)",
                        border: "1px solid rgba(1, 73, 118, 0.08)",
                        borderRadius: "1.25rem"
                      }}
                    >
                      <div className="font-bold mb-1" style={{ color: item.color, fontSize: "1rem" }}>
                        {item.title}
                      </div>
                      <div className="text-muted text-[80%]" style={{ lineHeight: 1.6 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
