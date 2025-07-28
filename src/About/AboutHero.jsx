import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="about-hero-wrapper py-5">
      <div className="container text-center">
        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h1 className="about-hero-title mb-4">صُنّاع الحياة مصر</h1>
          <p className="about-hero-subtitle mb-4">
            مؤسسة أهلية وطنية غير ربحية تأسست عام 2011، ومسجلة مركزيًا برقم
            839 لسنة 2018. تهدف إلى تمكين الشباب وتنمية المجتمعات عبر العمل
            التطوعي والاستجابة للاحتياجات الإنسانية والتنموية.
          </p>

          <motion.a
        
             href="https://lifemakers.org/"
            target="_blank" rel="noreferrer"
       
            className="about-hero-btn btn btn-lg mt-3"
            whileHover={{ scale: 1.05 }}
          >
            اعرف أكتر
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
