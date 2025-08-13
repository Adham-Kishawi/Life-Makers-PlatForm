import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBookOpen,
  FaHandsHelping,
  FaSeedling,
  FaBriefcase,
} from "react-icons/fa";

function AboutPrograms() {
  const programs = [
    {
      title: "الصحة",
      description: "ننفذ حملات توعية صحية، وندعم المبادرات لعلاج غير القادرين.",
      icon: <FaHeartbeat className="join-icon" />,
    },
    {
      title: "التعليم",
      description: "نساهم في تحسين جودة التعليم عبر دعم الطلاب والمدارس المجتمعية.",
      icon: <FaBookOpen className="join-icon" />,
    },
    {
      title: "الإغاثة",
      description: "نتدخل سريعًا في الأزمات لتوفير الدعم العاجل للأسر المتضررة.",
      icon: <FaHandsHelping className="join-icon" />,
    },
    {
      title: "البيئة",
      description: "ندعم الحفاظ على البيئة من خلال أنشطة التوعية والتشجير.",
      icon: <FaSeedling className="join-icon" />,
    },
    {
      title: "سبل كسب العيش",
      description: "نساعد الشباب على إنشاء مشروعات صغيرة وتوفير فرص عمل.",
      icon: <FaBriefcase className="join-icon" />,
    },
  ];

  return (
    <section className="about-programs py-5">
      <div className="container">
        
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <h2 className="about-hero-title mb-3">مجالات عمل المؤسسة</h2>
          <p className="about-programs-text">
            مؤسسة صناع الحياة مصر بتشتغل في مجالات متنوعة بهدف خدمة الإنسان وتوفير حياة كريمة.
          </p>
        </motion.div>

        
        <div className="row">
          {programs.map((prog, index) => (
            <motion.div
              className="col-md-4 mb-4"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="join-card p-4 h-100 text-center rounded">
                <div className="mb-3">{prog.icon}</div>
                <h5 className="about-program-subtitle mb-2">{prog.title}</h5>
                <p className="about-program-desc">{prog.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPrograms;
