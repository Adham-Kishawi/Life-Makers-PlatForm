import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeartbeat,
  FaBookOpen,
  FaHandsHelping,
  FaBriefcase,
  FaSeedling,
  FaCheck,
  FaArrowLeft
} from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function AboutPrograms() {
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    {
      id: "education",
      title: "التعليم وبناء القدرات",
      shortDesc: "القضاء على الأمية، دعم المدارس المجتمعية، والتعليم الرقمي للأجيال الجديدة.",
      icon: <FaBookOpen size={24} />,
      color: "#2563eb",
      bgColor: "rgba(37, 99, 235, 0.1)",
      projects: [
        { name: "مشروع 'العلم قوة'", desc: "مبادرة وطنية لمحو أمية الآلاف من الكبار عبر فصول تعليمية يديرها شباب المتطوعين." },
        { name: "تجهيز الشنط المدرسية", desc: "توفير آلاف الحقائب المدرسية المتكاملة والزي للأطفال غير القادرين في مطلع العام." },
        { name: "مراكز التكنولوجيا والبرمجة", desc: "تدريب النشء على أساسيات الذكاء الاصطناعي، البرمجة، والأردوينو لبناء أجيال رقمية." }
      ]
    },
    {
      id: "health",
      title: "الصحة وجودة الحياة",
      shortDesc: "قوافل طبية متكاملة، مشروع شريان الحياة للتبرع بالدم، وعلاج غير القادرين.",
      icon: <FaHeartbeat size={24} />,
      color: "#ef4444",
      bgColor: "rgba(239, 68, 68, 0.1)",
      projects: [
        { name: "مشروع 'شريان الحياة'", desc: "حملات منتظمة للتبرع الطوعي بالدم لدعم بنوك الدم والمستشفيات في أوقات الطوارئ." },
        { name: "القوافل الطبية المتخصصة", desc: "كشوفات مجانية، تحاليل، صرف أدوية، وإجراء جراحات العيون والقلب بالتعاون مع كبار الأطباء." },
        { name: "الدعم الميداني بالمستشفيات", desc: "فرق تطوعية في مستشفيات القناة ومصر لمساندة المرضى وذويهم وتسهيل إجراءات الرعاية." }
      ]
    },
    {
      id: "economy",
      title: "التمكين الاقتصادي ومكافحة الفقر",
      shortDesc: "تحويل الأسر المستهلكة إلى منتجة عبر المشروعات الصغيرة وبرامج التدريب الحرفي.",
      icon: <FaBriefcase size={24} />,
      color: "#f59e0b",
      bgColor: "rgba(245, 158, 11, 0.1)",
      projects: [
        { name: "مشروع 'رزق حلال'", desc: "تأسيس وتمويل مشروعات صغيرة مستدامة (تربية دواجن، ورش حياكة، منافذ بيع) للأسر المعيلة." },
        { name: "برنامج 'فرصة'", desc: "الشراكة مع وزارة التضامن والتحالف الوطني لتمكين المستفيدين من تكافل وكرامة في سوق العمل." },
        { name: "التأهيل والتدريب المهني", desc: "دورات تدريبية مكثفة للشباب في الحرف اليدوية والصناعات الواعدة لضمان دخل كريم وثابت." }
      ]
    },
    {
      id: "relief",
      title: "الإغاثة والمساعدات العاجلة",
      shortDesc: "التدخل السريع في الأزمات والكوارث، حملات الشتاء، وتكافل المجتمع المستمر.",
      icon: <FaHandsHelping size={24} />,
      color: "#10b981",
      bgColor: "rgba(16, 185, 129, 0.1)",
      projects: [
        { name: "حملة 'دفا' الشتوية", desc: "توزيع الأغطية الشتوية، عزل أسقف المنازل المتضررة من الأمطار، وكسوة الأطفال والمسنين." },
        { name: "حملات الإطعام والتكافل", desc: "توزيع كراتين المواد الغذائية الأساسية والوجبات الساخنة (حملات رمضان وعيش وملح)." },
        { name: "غرف الاستجابة السريعة", desc: "جاهزية المتطوعين للتدخل الميداني الفوري لتقديم الإسعافات والمأوى في الحوادث والأزمات." }
      ]
    },
    {
      id: "environment",
      title: "البيئة والمبادرات الخضراء",
      shortDesc: "التشجير، حماية البيئة المحلية، ونشر الوعي بمواجهة التغيرات المناخية.",
      icon: <FaSeedling size={24} />,
      color: "#059669",
      bgColor: "rgba(5, 150, 105, 0.1)",
      projects: [
        { name: "مبادرات التشجير وغرس الأمل", desc: "زراعة آلاف الأشجار المثمرة والظليلة في المدارس والشوارع والمراكز بمحافظة الإسماعيلية ومصر." },
        { name: "التوعية المناخية وإعادة التدوير", desc: "ورش عمل ميدانية ومسابقات للشباب لتعزيز سلوكيات الاستدامة وفرز المخلفات." },
        { name: "حماية الشواطئ والمجاري المائية", desc: "حملات تطوعية لتنظيف شواطئ القناة والمسطحات المائية ونشر الوعي البيئي." }
      ]
    }
  ];

  return (
    <section className="about-programs-section py-12 relative" style={{ background: "rgba(1, 73, 118, 0.02)" }}>
      <div className="container py-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
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
            <FaBriefcase className="text-warning" />
            <span>محاور الأثر والتنمية</span>
          </span>
          <h2 className="display-5 font-bold mb-4" style={{ color: "var(--main-color)" }}>
            مجالات عمل المؤسسة ومشروعاتها الكبرى
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "750px", fontSize: "1.1rem", lineHeight: 1.8 }}>
            خمسة محاور تنموية رئيسية تغطي كافة جوانب الحياة، تم تصميمها لتقديم حلول مستدامة تنهض بالفرد وتخدم المجتمع.
          </p>
        </motion.div>

        {/* Tab Pills Nav (with 9999px rounded pills and zero sharp corners) */}
        <div className="flex flex-wrap justify-center mb-12 gap-2" style={{ gap: "0.6rem" }}>
          {programs.map((prog, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={prog.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className="btn px-6 py-2 rounded-full font-bold inline-flex items-center relative cursor-pointer border-0"
                style={{
                  background: isActive
                    ? "linear-gradient(135deg, #014976 0%, #02639e 100%)"
                    : "var(--card-color)",
                  color: isActive ? "#ffffff" : "var(--text-color)",
                  border: isActive ? "none" : "1.5px solid var(--card-border)",
                  boxShadow: isActive ? "0 6px 20px rgba(1, 73, 118, 0.25)" : "none",
                  gap: "0.5rem",
                  transition: "all 0.25s ease",
                  fontSize: "0.95rem"
                }}
              >
                <span style={{ color: isActive ? "#FBAE42" : prog.color }}>{prog.icon}</span>
                <span>{prog.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card (Animated with Framer Motion) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <div
              className="p-6 md:p-12 relative overflow-hidden"
              style={{
                background: "var(--card-color)",
                borderRadius: "2rem", // 32px soft rounded corners
                border: "1.5px solid var(--card-border)",
                boxShadow: "0 15px 40px -10px rgba(0, 0, 0, 0.06)"
              }}
            >
              {/* Header row of the active program */}
              <div className="row align-items-center justify-content-between pb-4 mb-4 border-bottom" style={{ borderColor: "var(--card-border)" }}>
                <div className="col-12 col-lg-8">
                  <div className="flex items-center" style={{ gap: "1.25rem" }}>
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "1.25rem",
                        background: programs[activeTab].bgColor,
                        color: programs[activeTab].color
                      }}
                    >
                      {programs[activeTab].icon}
                    </div>
                    <div>
                      <h3 className="text-[1.75rem] font-medium leading-[1.2] mb-2 font-bold mb-1" style={{ color: "var(--main-color)" }}>
                        {programs[activeTab].title}
                      </h3>
                      <span className="text-muted" style={{ fontSize: "1.05rem" }}>
                        {programs[activeTab].shortDesc}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4 text-lg-start mt-3 mt-lg-0">
                  <Link
                    href="/committee"
                    className="btn btn-outline-warning rounded-full px-6 py-2 font-bold no-underline inline-flex items-center"
                    style={{
                      borderWidth: "1.5px",
                      gap: "0.5rem"
                    }}
                  >
                    <span>استكشف أنشطة اللجان</span>
                    <FaArrowLeft size={12} />
                  </Link>
                </div>
              </div>

              {/* Sub-projects list */}
              <div className="row g-3 pt-2">
                {programs[activeTab].projects.map((proj, pIdx) => (
                  <div key={pIdx} className="col-12 col-md-4">
                    <div
                      className="p-6 h-full relative"
                      style={{
                        background: "rgba(1, 73, 118, 0.03)",
                        borderRadius: "1.5rem", // 24px soft rounded corners
                        border: "1px solid rgba(1, 73, 118, 0.08)",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor = "#FBAE42";
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = "rgba(1, 73, 118, 0.08)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div
                        className="flex items-center justify-center mb-4"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          background: "rgba(251, 174, 66, 0.2)",
                          color: "var(--secondary-color)"
                        }}
                      >
                        <FaCheck size={14} />
                      </div>
                      <h4 className="text-[1rem] font-medium leading-[1.2] mb-2 font-bold mb-2" style={{ color: "var(--main-color)" }}>
                        {proj.name}
                      </h4>
                      <p className="text-muted text-[80%] mb-0" style={{ lineHeight: 1.7 }}>
                        {proj.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
