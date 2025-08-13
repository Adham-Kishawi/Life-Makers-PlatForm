import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaBrain, FaUsers, FaHeart, FaProjectDiagram, FaDoorOpen } from "react-icons/fa";
import { Link } from "@inertiajs/react";

const features = [
  {
    title: "تسيب بصمة",
    icon: <FaHandsHelping className="join-icon" />,
    description: "كل خطوة بتاخدها معانا ممكن تفرق في حياة حد.",
  },
  {
    title: "تتعلم مهارات جديدة",
    icon: <FaBrain className="join-icon" />,
    description: "هتطور من نفسك في القيادة، التواصل، وتنظيم الوقت.",
  },
  {
    title: "تكون عيلة",
    icon: <FaUsers className="join-icon" />,
    description: "هتلاقي صحبة شبهك، وهنكون كلنا دايمًا سند لبعض.",
  },
  {
    title: "تجارب مش بتنساها",
    icon: <FaHeart className="join-icon" />,
    description: "هتعيش مواقف تفضل تحكي عنها طول عمرك.",
  },
  {
    title: "تشارك في مشاريع حقيقية",
    icon: <FaProjectDiagram className="join-icon" />,
    description: "مش بس أفكار، ده تنفيذ على الأرض وفرق حقيقي.",
  },
  {
    title: "تفتح أبواب جديدة",
    icon: <FaDoorOpen className="join-icon" />,
    description: "هتكتشف فرص وشبكات ناس ممكن تغيرلك حياتك للأفضل.",
  },
];

const HomeJoinUsSection = () => {
  return (
    <div className="container my-5 text-center">
      <motion.h2
        className="home-file-title fw-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ليه تنضم لينا
      </motion.h2>

      <div className="row">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="join-card h-100 p-4">
              {feature.icon}
              <h5 className="fw-bold mt-3">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5">
        <p className="lead">
          <strong>لو شايف إنك تقدر تفرق فإحنا هنا علشانك.</strong>
          <br />
          <span className="home-file-title">انضم لينا وخلي الرحلة تبدأ النهاردة </span>
        </p>

        <Link
          to="/login"
          className="btn  btn-lg shadow mt-3 fw-bold cta-join-link"
          style={{ textDecoration: 'none' }}
        >
          مستني إيه؟ انضم لينا دلوقتي 
        </Link>
      </div>
    </div>
  );
};

export default HomeJoinUsSection;
