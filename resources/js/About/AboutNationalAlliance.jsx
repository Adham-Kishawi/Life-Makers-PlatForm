import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaLaptopCode, FaHandsHelping, FaHandHoldingHeart, FaDatabase, FaAward } from "react-icons/fa";

export default function AboutNationalAlliance() {
  const pillars = [
    {
      icon: <FaDatabase size={24} style={{ color: "#3b82f6" }} />,
      title: "قاعدة بيانات الأسر الأكثر استحقاقاً",
      desc: "قاد متطوعو صناع الحياة عمليات الحصر الميداني والبحث الاجتماعي الدقيق لبناء وتحديث أضخم قاعدة بيانات وطنية يعتمد عليها التحالف لتوجيه الدعم بعدالة وموضوعية.",
      badge: "تحول رقمي",
      bgBadge: "rgba(59, 130, 246, 0.12)",
      textBadge: "#3b82f6"
    },
    {
      icon: <FaLaptopCode size={24} style={{ color: "#8b5cf6" }} />,
      title: "تشغيل مراكز تنمية الأسرة والطفل",
      desc: "إدارة وتشغيل مراكز تنمية الأسرة والطفل بالتعاون مع الوزارات، وتقديم برامج عصرية للنشء تشمل البرمجة، والذكاء الاصطناعي، والأردوينو، والمهارات الحركية والإبداعية.",
      badge: "ذكاء اصطناعي وتكنولوجيا",
      bgBadge: "rgba(139, 92, 246, 0.12)",
      textBadge: "#8b5cf6"
    },
    {
      icon: <FaHandHoldingHeart size={24} style={{ color: "#ef4444" }} />,
      title: "قوافل 'ستر وعافية' وقرى حياة كريمة",
      desc: "المشاركة الفاعلة في قوافل التحالف التنموية الشاملة للقرى الأكثر احتياجاً، متضمنة كشوفات طبية، صرف أدوية، تسليم أجهزة تعويضية، ورفع كفاءة المنازل.",
      badge: "مبادرة حياة كريمة",
      bgBadge: "rgba(239, 68, 68, 0.12)",
      textBadge: "#ef4444"
    },
    {
      icon: <FaUsers size={24} style={{ color: "#10b981" }} />,
      title: "تأهيل وإدارة 25,000+ متطوع مستدام",
      desc: "ابتكار نموذج 'مجلس إدارة المتطوعين' الذي يتيح للشباب قيادة المبادرات بأنفسهم ورفع كفاءتهم التنظيمية، مع مضاعفة أعداد المتطوعين المؤهلين لخدمة المجتمع.",
      badge: "قيادات شبابية",
      bgBadge: "rgba(16, 185, 129, 0.12)",
      textBadge: "#10b981"
    }
  ];

  return (
    <section
      className="about-alliance-section py-12 relative"
      style={{
        background: "linear-gradient(180deg, rgba(1, 73, 118, 0.04) 0%, transparent 100%)"
      }}
    >
      <div className="container py-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center mb-4 px-4 py-1 rounded-full font-bold"
            style={{
              background: "linear-gradient(135deg, rgba(251, 174, 66, 0.15) 0%, rgba(251, 174, 66, 0.25) 100%)",
              color: "var(--secondary-color)",
              border: "1px solid rgba(251, 174, 66, 0.4)",
              fontSize: "0.88rem",
              gap: "0.4rem"
            }}
          >
            <FaAward className="text-warning" />
            <span>الشراكة الاستراتيجية القومية</span>
          </div>

          <h2 className="display-5 font-bold mb-4" style={{ color: "var(--main-color)" }}>
            صناع الحياة في قلب التحالف الوطني للعمل الأهلي التنموي
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "800px", fontSize: "1.1rem", lineHeight: 1.85 }}>
            تعد مؤسسة صناع الحياة مصر من المؤسسين والركائز المحورية للتحالف الوطني؛ حيث ننتقل من جهود العمل الفردي إلى التكامل المؤسسي الشامل لتعظيم العائد التنموي على المواطن المصري في كافة ربوع الجمهورية.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="row g-4">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="h-full p-6 md:p-12 relative overflow-hidden"
                style={{
                  background: "var(--card-color)",
                  borderRadius: "1.75rem", // 28px rounded corners
                  border: "1.5px solid var(--card-border)",
                  boxShadow: "0 6px 25px -3px rgba(0, 0, 0, 0.04)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "#FBAE42";
                  e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(1, 73, 118, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.boxShadow = "0 6px 25px -3px rgba(0, 0, 0, 0.04)";
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "1.25rem",
                      background: "rgba(1, 73, 118, 0.06)"
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="badge rounded-full px-4 py-2 font-bold"
                    style={{
                      background: item.bgBadge,
                      color: item.textBadge,
                      fontSize: "0.82rem"
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-[1.25rem] font-medium leading-[1.2] mb-2 font-bold mb-4" style={{ color: "var(--main-color)" }}>
                  {item.title}
                </h3>
                <p className="text-muted mb-0" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
