import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePage } from '@inertiajs/react';
import { useLanguage } from '../Context/LanguageContext';
import TiltCard from '../Components/TiltCard';
import { FaCamera, FaEye, FaTimes } from 'react-icons/fa';

export default function HomeGallerySection() {
  const { events } = usePage().props;
  const { t, isRtl } = useLanguage();

  // Fallback real activity photos
  const defaultGallery = [
    { image: "/images/Gallery/GalleryHome (1).jpg", title: isRtl ? "قافلة إنسانية وتوزيع كراتين الخير" : "Humanitarian Relief & Food Box Distribution" },
    { image: "/images/Gallery/GalleryHome (2).jpg", title: isRtl ? "فعاليات مشروع أحسن صاحب لذوي الإعاقة" : "Ahsan Saheb Disability Inclusion Initiatives" },
    { image: "/images/Gallery/GalleryHome (3).jpg", title: isRtl ? "أنشطة توعية وتنمية مهارات الأطفال" : "Child Awareness & Creative Skills Workshops" },
    { image: "/images/Gallery/GalleryHome (4).jpg", title: isRtl ? "ورش تدريب وتأهيل المتطوعين الشباب" : "Youth Volunteer Leadership Development" },
    { image: "/images/Gallery/GalleryHome (5).jpg", title: isRtl ? "مبادرة كساء وتوزيع الملابس للأسر المستحقة" : "Clothing & Winter Relief Distribution" },
    { image: "/images/Gallery/GalleryHome (6).jpg", title: isRtl ? "نزول ميداني واستقبال الشباب الجدد" : "Field Outreach & New Volunteer Welcoming" },
  ];

  const items = (events && events.length > 0)
    ? events.map((e, idx) => ({
        image: e.image?.startsWith("http") || e.image?.startsWith("/") ? e.image : `/storage/${e.image}`,
        title: e.title || defaultGallery[idx % defaultGallery.length].title
      }))
    : defaultGallery;

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="py-12" style={{ background: "transparent" }}>
      <div className="container py-4">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center px-4 py-1 rounded-full mb-4 font-bold"
            style={{
              background: "rgba(1, 73, 118, 0.08)",
              color: "var(--main-color)",
              fontSize: "0.9rem"
            }}
          >
            <FaCamera className="me-2" />
            <span>{t("gallery_badge")}</span>
          </span>

          <h2 className="font-bold mb-4" style={{ color: "var(--text-color)", fontSize: "2.2rem" }}>
            {t("gallery_title")}
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
            {t("gallery_subtitle")}
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <TiltCard className="w-full">
                <div
                  className="modern-image-frame shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
                  onClick={() => setSelectedImg(item)}
                >
                  {/* Floating Photo Index Chip */}
                  <div className="floating-chip">
                    <span>{`#${index + 1}`}</span>
                  </div>

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="image-vignette-overlay" />

                  {/* Content Overlay */}
                  <div
                    className="absolute bottom-0 start-0 w-full p-4 text-white flex flex-col justify-end"
                    style={{ zIndex: 4 }}
                  >
                    <span className="text-[80%] font-bold text-warning flex items-center mb-1" style={{ gap: "0.35rem" }}>
                      <FaEye size={13} />
                      <span style={{ fontSize: "0.82rem" }}>{t("zoom_image", "تكبير")}</span>
                    </span>
                    <h6 className="font-bold mb-0 truncate text-white" style={{ fontSize: "0.98rem", textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>
                      {item.title}
                    </h6>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 start-0 w-full h-full flex items-center justify-center p-4"
            style={{
              background: "rgba(0, 0, 0, 0.88)",
              zIndex: 9999,
              backdropFilter: "blur(6px)"
            }}
            onClick={() => setSelectedImg(null)}
          >
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="btn btn-light rounded-full absolute top-0 end-0 m-4 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]"
                style={{ zIndex: 10001, width: "40px", height: "40px" }}
                onClick={() => setSelectedImg(null)}
              >
                <FaTimes />
              </button>
              <img
                src={selectedImg.image}
                alt={selectedImg.title}
                className="rounded-4 max-w-full h-auto shadow-[0_1rem_3rem_rgba(0,0,0,0.175)]"
                style={{ maxHeight: "85vh", maxWidth: "90vw", objectFit: "contain" }}
              />
              <div className="text-center text-white font-bold mt-2 fs-5">
                {selectedImg.title}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
