import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@inertiajs/react";
import DOMPurify from "dompurify";
import TiltCard from "./TiltCard";
import { useLanguage } from "../Context/LanguageContext";
import { FaArrowLeft, FaArrowRight, FaEye, FaTimes } from "react-icons/fa";

/**
 * Unified FileCard component for committees and activity items with 3D Tilt and elegant frames
 */
export default function FileCard({
  type = "committee",
  title,
  icon,
  path,
  image,
  description,
  index = 0,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, isRtl } = useLanguage();

  // Committee Card on Home page
  if (type === "committee") {
    return (
      <TiltCard className="w-full">
        <Link
          href={`/committee/${encodeURIComponent(path || title)}`}
          className="no-underline block h-full"
        >
          <div
            className="bento-card-modern p-6 h-full flex flex-col items-center text-center justify-between relative"
            style={{ minHeight: "260px" }}
          >
            {/* Top Subtle Amber Ambient Highlight */}
            <div
              className="absolute top-0 start-1/2 -translate-x-1/2"
              style={{
                width: "60%",
                height: "3px",
                background: "linear-gradient(90deg, transparent, #FBAE42, transparent)",
                opacity: 0.7
              }}
            />

            {/* Icon Badge */}
            <div
              className="icon-wrapper-badge rounded-full p-4 my-2 flex items-center justify-center shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
              style={{
                width: "76px",
                height: "76px",
                background: "linear-gradient(135deg, rgba(1, 73, 118, 0.08) 0%, rgba(251, 174, 66, 0.12) 100%)",
                color: "var(--main-color)",
                border: "1px solid rgba(251, 174, 66, 0.25)",
                fontSize: "1.85rem",
                transition: "all 0.35s ease"
              }}
            >
              {icon ? (
                <div
                  className="flex items-center justify-center"
                  style={{ width: "38px", height: "38px" }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(icon) }}
                />
              ) : (
                <span className="font-bold">#</span>
              )}
            </div>

            <div>
              <h5 className="committee-title font-bold mb-2" style={{ color: "var(--text-color)", fontSize: "1.2rem" }}>
                {title}
              </h5>
              <p className="text-muted text-[80%] mb-4 line-clamp-2" style={{ fontSize: "0.85rem", lineHeight: "1.6" }}>
                {description || t("committee_desc_fallback", "أحد ملفات صناع الحياة المتخصصة في خدمة وتنمية المجتمع بالإسماعيلية.")}
              </p>
            </div>

            <span
              className="btn-glow-amber btn-shimmer px-6 py-2 text-[80%] inline-flex items-center font-bold w-full"
              style={{ fontSize: "0.86rem", gap: "0.45rem" }}
            >
              <span>{t("file_explore", "استعراض الأنشطة والفعاليات")}</span>
              {isRtl ? <FaArrowLeft size={11} /> : <FaArrowRight size={11} />}
            </span>
          </div>
        </Link>
      </TiltCard>
    );
  }

  // Activity Card on Committee Detail page with Framed Image & Floating Badge
  const imgSrc = image ? (image.startsWith("http") || image.startsWith("/") ? image : `/storage/${image}`) : null;

  return (
    <>
      <TiltCard className="w-full">
        <div
          className="bento-card-modern h-full flex flex-col relative p-2"
          style={{ minHeight: "360px" }}
        >
          {imgSrc && (
            <div
              className="modern-image-frame relative"
              onClick={() => setIsModalOpen(true)}
              title={t("zoom_image", "اضغط لتكبير الصورة")}
            >
              {/* Floating Badge */}
              <div className="floating-chip">
                <span>{`#${index + 1} ${t("activity_tag", "نشاط ميداني")}`}</span>
              </div>

              <img
                src={imgSrc}
                alt={title || "Activity"}
                loading="lazy"
              />

              {/* Bottom Vignette Overlay */}
              <div className="image-vignette-overlay" />

              {/* Hover Quick Preview Button */}
              <div
                className="absolute top-0 start-0 w-full h-full flex items-center justify-center text-white"
                style={{
                  background: "rgba(1, 73, 118, 0.45)",
                  backdropFilter: "blur(4px)",
                  opacity: 0,
                  transition: "opacity 0.3s ease"
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = 0)}
              >
                <div className="btn-glow-amber px-4 py-2 rounded-full shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] flex items-center" style={{ gap: "0.5rem" }}>
                  <FaEye size={15} />
                  <span className="text-[80%] font-bold">{t("zoom_image", "معاينة كاملة")}</span>
                </div>
              </div>
            </div>
          )}

          <div className="p-4 flex flex-col grow justify-between">
            <div>
              {title && (
                <h5 className="font-bold mb-2" style={{ color: "var(--text-color)", fontSize: "1.12rem" }}>
                  {title}
                </h5>
              )}

              {description && (
                <div
                  className="activity-desc text-muted mb-4 text-[80%] line-clamp-3"
                  style={{ lineHeight: "1.7", fontSize: "0.88rem" }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                />
              )}
            </div>

            <div className="pt-2 border-t border-[#dee2e6] flex items-center justify-between" style={{ borderColor: "var(--card-border)" }}>
              <span className="badge px-4 py-1 rounded-full text-[80%]" style={{ background: "rgba(1, 73, 118, 0.08)", color: "var(--main-color)" }}>
                صناع الحياة - الإسماعيلية
              </span>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn btn-sm text-warning font-bold p-0 flex items-center"
                style={{ gap: "0.3rem", fontSize: "0.82rem" }}
              >
                <span>{t("zoom_image", "تكبير")}</span>
                <FaEye size={13} />
              </button>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && imgSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 start-0 w-full h-full flex items-center justify-center p-4"
            style={{
              background: "rgba(0, 0, 0, 0.88)",
              zIndex: 9999,
              backdropFilter: "blur(8px)"
            }}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="relative p-2 rounded-4 shadow-2xl"
              style={{
                maxWidth: "92vw",
                maxHeight: "90vh",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(12px)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="btn btn-light rounded-full absolute top-0 end-0 m-4 shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]"
                style={{ zIndex: 10001, width: "40px", height: "40px" }}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <img
                src={imgSrc}
                alt={title}
                className="max-w-full h-auto shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] block mx-auto"
                style={{ maxHeight: "80vh", maxWidth: "88vw", objectFit: "contain", borderRadius: "1.75rem" }}
              />
              {title && (
                <div className="text-center text-white font-bold mt-4 fs-5 px-4">
                  {title}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
