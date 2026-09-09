import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCamera, FaExpand, FaTimes, FaHeart } from "react-icons/fa";

export default function AboutGallery() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    {
      src: "/Images/Gallery/GalleryHome (1).jpg",
      title: "قوافل الإغاثة الميدانية",
      subtitle: "متطوعو صناع الحياة في توزيع المساعدات على الأسر الأولى بالرعاية",
      category: "قوافل وميدان"
    },
    {
      src: "/Images/Gallery/GalleryHome (2).jpg",
      title: "مبادرات التعليم وبناء المهارات",
      subtitle: "ورش تدريبية تفاعلية وتجهيز الشنط المدرسية للطلاب المستحقين",
      category: "التعليم"
    },
    {
      src: "/Images/Gallery/GalleryHome (3).jpg",
      title: "العمل التطوعي وروح الفريق",
      subtitle: "شباب فرع الإسماعيلية يشاركون في تخطيط وتنفيذ المبادرات",
      category: "شباب وتطوع"
    },
    {
      src: "/Images/Gallery/GalleryHome (4).jpg",
      title: "مشروع شريان الحياة والصحة",
      subtitle: "حملات التبرع بالدم والقوافل الطبية المتخصصة في القرى",
      category: "صحة وإغاثة"
    },
    {
      src: "/Images/Gallery/GalleryHome (5).jpg",
      title: "حملات التكافل والإطعام",
      subtitle: "تجهيز وتوزيع الوجبات والكراتين الغذائية في المناسبات والمواسم",
      category: "تكافل مجتمعي"
    },
    {
      src: "/Images/Gallery/GalleryHome (6).jpg",
      title: "ملتقيات قيادات التطوع",
      subtitle: "معسكرات بناء القدرات وإعداد قادة العمل الأهلي المستقبلي",
      category: "تدريب وقيادة"
    }
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="about-gallery-section py-12 relative">
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
            <FaCamera className="text-warning" />
            <span>لقطات حية من الميدان</span>
          </span>
          <h2 className="display-5 font-bold mb-4" style={{ color: "var(--main-color)" }}>
            معرض الأثر والفعاليات الميدانية
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "750px", fontSize: "1.1rem", lineHeight: 1.8 }}>
            مشاهد حقيقية توثق رحلة متطوعي صناع الحياة في شوارع وقرى الإسماعيلية ومصر، نصنع الأمل ونترك بصمة في كل مكان.
          </p>
        </motion.div>

        {/* Gallery Grid with 24px rounded corners and 16:10 aspect ratio */}
        <div className="row g-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6 col-lg-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="modern-image-frame relative overflow-hidden"
                style={{
                  aspectRatio: "16 / 10",
                  borderRadius: "1.5rem", // 24px smooth organic rounded corners
                  boxShadow: "0 8px 30px -4px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  border: "1.5px solid var(--card-border)"
                }}
                onClick={() => setActiveImage(item)}
              >
                {/* Floating Category Pill */}
                <div
                  className="absolute"
                  style={{
                    top: "14px",
                    right: "14px",
                    background: "rgba(15, 23, 42, 0.75)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    color: "#ffffff",
                    borderRadius: "9999px",
                    padding: "0.3rem 0.85rem",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    zIndex: 3
                  }}
                >
                  {item.category}
                </div>

                {/* Zoom Icon Button */}
                <div
                  className="absolute flex items-center justify-center"
                  style={{
                    top: "14px",
                    left: "14px",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(251, 174, 66, 0.85)",
                    color: "#000000",
                    zIndex: 3,
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)"
                  }}
                >
                  <FaExpand size={13} />
                </div>

                <img
                  src={item.src}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />

                {/* Vignette Gradient & Captions */}
                <div
                  className="absolute bottom-0 start-0 end-0 p-6 text-white"
                  style={{
                    background: "linear-gradient(180deg, transparent 0%, rgba(1, 36, 58, 0.9) 80%)",
                    zIndex: 2,
                    pointerEvents: "none"
                  }}
                >
                  <h3 className="text-[1rem] font-medium leading-[1.2] mb-2 font-bold mb-1" style={{ color: "#ffffff", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    {item.title}
                  </h3>
                  <p className="text-[80%] mb-0 text-white-50" style={{ fontSize: "0.82rem", lineHeight: 1.5 }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Blur Backdrop */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 start-0 w-full h-full flex items-center justify-center p-4"
            style={{
              background: "rgba(11, 17, 32, 0.88)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              zIndex: 9999
            }}
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative text-center"
              style={{ maxWidth: "900px", width: "100%" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className="btn absolute flex items-center justify-center"
                style={{
                  top: "-48px",
                  right: "0",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.15)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  cursor: "pointer"
                }}
                onClick={() => setActiveImage(null)}
                aria-label="إغلاق المعاينة"
              >
                <FaTimes size={18} />
              </button>

              {/* Image Preview */}
              <img
                src={activeImage.src}
                alt={activeImage.title}
                style={{
                  width: "100%",
                  maxHeight: "75vh",
                  objectFit: "contain",
                  borderRadius: "1.75rem", // 28px
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.5)"
                }}
              />

              {/* Caption */}
              <div className="mt-4 text-white">
                <h3 className="text-[1.25rem] font-medium leading-[1.2] mb-2 font-bold mb-1" style={{ color: "#FBAE42" }}>
                  {activeImage.title}
                </h3>
                <p className="text-light text-[80%] mb-0" style={{ opacity: 0.85 }}>
                  {activeImage.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
