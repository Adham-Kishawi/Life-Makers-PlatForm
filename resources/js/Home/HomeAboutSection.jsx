import React from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { Link } from '@inertiajs/react';


const HomeAboutSection = () => {
  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div className="row align-items-center">
      
        <div className="col-md-7 order-2 order-md-1">
          <h3 className="text-primary font-weight-bold mb-3 d-flex align-items-center justify-content-center justify-content-md-start">
            <FaHeart className="text-danger mr-2" size={24} />
            <span className="Hellow-Home">إحنا مين؟</span>
          </h3>
          <p className="lead text-muted Home-text">
            إحنا <strong>فريق صناع الحياة الإسماعيلية</strong>،  
            شباب مؤمن إن التغيير الحقيقي بيبدأ من نفسنا ومن اللي حوالينا.  
            بنشتغل بروح الفريق، وبنؤمن إن كل واحد فينا يقدر يفرق.  
            <br />
            بننتمي لـ <strong>صناع الحياة مصر</strong>،  
            واللي تُعتبر <strong>أكبر كيان شبابي تطوعي في مصر</strong>،  
            وبتشتغل على تمكين الشباب وتنمية المجتمع من سنين طويلة.
            <br />
            بنشتغل في مجالات كتير زي التعليم، الصحة، التوعية، المساعدات الإنسانية، وتنمية المهارات.
            <br />
            لو بتدور على مكان تسيب فيه بصمتك...  
             <br />
<Link
  to="/login"
  className="home-about-link"
  style={{ textDecoration: 'none' }}
>
  فإحنا مستنيينك تكون معانا! ❤️
</Link>



          </p>
        </div>

        <div className="col-md-5 order-1 order-md-2 text-center mb-4 mb-md-0">
          <img
            src="Images/home.jpg"
            alt="فريق صناع الحياة"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HomeAboutSection;
