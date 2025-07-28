import { motion } from "framer-motion";
import { MdOutlineFlag } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { FaHandsHelping, FaCheckCircle } from "react-icons/fa";

export default function AboutMissionVision() {
  return (
    <section className="about-mission-vision py-5">
      <div className="container">
        {/* Title */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="about-mv-title mb-3">رسالتنا ورؤيتنا وقيمنا</h2>
          <p className="about-mv-text">
            نشارككم ما نؤمن به ونسعى لتحقيقه منذ بداية رحلتنا في صناع الحياة مصر.
          </p>
        </motion.div>

        <div className="row">
          {/* Mission */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="about-mv-card p-4 h-100 text-center rounded">
              <div className="mb-3">
                <MdOutlineFlag className="icon-colored" size={40} />
              </div>
              <h4 className="about-mv-subtitle mb-3">رسالتنا</h4>
              <p className="about-mv-text">
                نهدف إلى تمكين الشباب المصري من اكتشاف قدراتهم وتوجيه طاقتهم
                نحو خدمة مجتمعهم، عبر برامج تطوعية وتنموية مستدامة، تُحدث أثرًا
                حقيقيًا في حياة الفئات الأكثر احتياجًا.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div className="about-mv-card p-4 h-100 text-center rounded">
              <div className="mb-3">
                <AiOutlineEye className="icon-colored" size={40} />
              </div>
              <h4 className="about-mv-subtitle mb-3">رؤيتنا</h4>
              <p className="about-mv-text">
                نطمح لأن نصبح واحدة من المؤسسات الأهلية الرائدة في مصر والعالم
                العربي، يقودها الشباب، وتُبنى على أسس من الاحترافية،
                والاستجابة السريعة، والتأثير الإيجابي.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            className="col-md-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <div className="about-mv-card p-4 h-100 text-center rounded">
              <div className="mb-3">
                <FaHandsHelping className="icon-colored" size={40} />
              </div>
              <h4 className="about-mv-subtitle mb-3">قيمنا</h4>
              <ul className="about-mv-list list-unstyled mb-0 text-start d-inline-block">
                <li><FaCheckCircle className="check-icon" /> الشفافية</li>
                <li><FaCheckCircle className="check-icon" /> العمل الجماعي</li>
                <li><FaCheckCircle className="check-icon" /> الابتكار</li>
                <li><FaCheckCircle className="check-icon" /> احترام الإنسان</li>
                <li><FaCheckCircle className="check-icon" /> النزاهة</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
