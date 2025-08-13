import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaProjectDiagram, FaHandsHelping, FaUserGraduate } from "react-icons/fa";

function AboutImpact() {
  const impactStats = [
    {
      title: "مستفيد مباشر",
      value: "1.5M+",
      icon: <FaUsers className="join-icon" />,
    },
    {
      title: "مشروع منفذ",
      value: "3K+",
      icon: <FaProjectDiagram className="join-icon" />,
    },
    {
      title: "متطوع مشارك",
      value: "25K+",
      icon: <FaHandsHelping className="join-icon" />,
    },
    {
      title: "مبادرة تعليمية",
      value: "400+",
      icon: <FaUserGraduate className="join-icon" />,
    },
  ];

  return (
    <section className="about-impact py-5">
      <div className="container">
        {/* Title & Description */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <h2 className="about-impact-title mb-3">أثرنا المجتمعي</h2>
          <p className="about-impact-text">
            على مدار السنوات، قدرنا نوصل لملايين المستفيدين وننفذ آلاف المشروعات اللي غيرت حياة الناس.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="row">
          {impactStats.map((item, index) => (
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="join-card text-center p-4 h-100">
                <div className="mb-2">{item.icon}</div>
                <h3 className="impact-number">{item.value}</h3>
                <p className="impact-title">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutImpact;
