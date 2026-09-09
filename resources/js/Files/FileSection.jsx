import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainLayout from '../Layouts/MainLayout';
import FileCard from '../Components/FileCard';
import { Link } from '@inertiajs/react';
import DOMPurify from 'dompurify';
import { useLanguage } from '../Context/LanguageContext';
import { FaUserPlus, FaCalendarAlt, FaCamera } from 'react-icons/fa';

export default function FileSection({ title, description, icon, items = [] }) {
  const { t, isRtl } = useLanguage();
  const timelineRef = useRef(null);

  // Smooth scroll tracking inside the activities timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 75%"]
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <MainLayout>
      {/* Committee Hero Header */}
      <section className="relative py-12 overflow-hidden text-white" style={{
        background: "linear-gradient(135deg, #013758 0%, #01243a 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <div className="container py-4">
          {/* Breadcrumb */}
          <nav className="mb-6 text-[80%] text-light flex items-center" style={{ gap: "0.5rem", opacity: 0.85 }}>
            <Link href="/" className="text-light no-underline">{t("nav_home")}</Link>
            <span>/</span>
            <span>{t("nav_committees")}</span>
            <span>/</span>
            <span className="text-warning font-bold">{title}</span>
          </nav>

          <div className="row align-items-center justify-content-between g-4">
            <div className="col-12 col-lg-8">
              <div className="flex items-center mb-4" style={{ gap: "1rem" }}>
                {icon && (
                  <div
                    className="p-4 rounded-full text-warning flex items-center justify-center shrink-0"
                    style={{
                      width: "68px",
                      height: "68px",
                      background: "rgba(251,174,66,0.15)",
                      border: "1px solid rgba(251,174,66,0.3)",
                      fontSize: "1.75rem"
                    }}
                  >
                    {typeof icon === "string" ? (
                      <div
                        style={{ width: "32px", height: "32px" }}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(icon) }}
                      />
                    ) : (
                      icon
                    )}
                  </div>
                )}
                <div>
                  <span className="badge bg-warning text-dark font-bold px-4 py-1 rounded-full mb-1">
                    {t("committee_specialized")}
                  </span>
                  <h1 className="font-bold display-5 mb-0 text-white">
                    {title}
                  </h1>
                </div>
              </div>

              {description && (
                <div
                  className="text-xl font-light text-light opacity-90 mt-4"
                  style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                />
              )}
            </div>

            <div className="col-12 col-lg-4 text-lg-start d-flex justify-content-lg-end">
              <Link
                href="/Login"
                className="btn-glow-amber btn-shimmer px-6 py-4 font-bold shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] inline-flex items-center"
                style={{ fontSize: "1rem", gap: "0.6rem" }}
              >
                <FaUserPlus size={18} />
                <span>{t("committee_join_btn", "انضم كمتطوع في هذا الملف")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section with Animated Zigzag Timeline */}
      <section className="py-12 relative overflow-hidden" style={{ background: "transparent" }}>
        <div className="container py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 pb-4 border-b border-[#dee2e6]" style={{ borderColor: "var(--card-border)", gap: "1rem" }}>
            <div>
              <span className="badge px-4 py-1 rounded-full mb-2 font-bold" style={{ background: "rgba(251, 174, 66, 0.15)", color: "var(--secondary-color)" }}>
                {t("committee_tag_gallery", "ألبوم الأثر والميدان")}
              </span>
              <h3 className="font-bold mb-1" style={{ color: "var(--text-color)", fontSize: "1.8rem" }}>
                {t("committee_activities", "الأنشطة والفعاليات الميدانية")}
              </h3>
              <p className="text-muted text-[80%] mb-0">
                {t("committee_activities_subtitle", "توثيق ميداني حي لمبادرات وفعاليات المتطوعين على أرض الواقع بمحافظة الإسماعيلية.")}
              </p>
            </div>
            <div>
              <span className="btn-glow-navy px-6 py-2 font-bold" style={{ fontSize: "0.88rem", pointerEvents: "none" }}>
                {items.length} {t("committee_registered", "فعالية مسجلة بالصور")}
              </span>
            </div>
          </div>

          {items && items.length > 0 ? (
            <div ref={timelineRef} className="timeline-wrapper relative py-4 my-4">
              {/* Central Background Timeline Track */}
              <div className="timeline-track" />

              {/* Dynamic Animated Scroll Progress Line */}
              <motion.div
                className="timeline-progress"
                style={{ height: progressHeight }}
              />

              {/* Alternating Zigzag Timeline Rows */}
              {items.map((item, index) => {
                const isEven = index % 2 === 0;
                // In RTL: even index sits on the Right (col 1), odd index sits on the Left (col 2)
                // In LTR: even index sits on the Left (col 1), odd index sits on the Right (col 2)
                const isCardOnFirstCol = isRtl ? isEven : !isEven;
                const nodeNumber = String(index + 1).padStart(2, '0');

                return (
                  <div key={index} className="timeline-row row g-0 align-items-center position-relative mb-5">
                    {/* Glowing Central Timeline Node Dot */}
                    <div className="timeline-node-dot shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]">
                      <span>{nodeNumber}</span>
                    </div>

                    {/* Horizontal Connector Beams (Desktop only) */}
                    {isCardOnFirstCol ? (
                      <div className="timeline-connector-right hidden md:block" />
                    ) : (
                      <div className="timeline-connector-left hidden md:block" />
                    )}

                    {/* Column 1 (Right in RTL / Left in LTR) */}
                    {isCardOnFirstCol ? (
                      <motion.div
                        className="timeline-card-col col-12 col-md-6 pe-md-4 ps-md-0 mb-4 mb-md-0"
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <FileCard
                          type="activity"
                          title={item.title}
                          image={item.image}
                          description={item.description}
                          index={index}
                        />
                      </motion.div>
                    ) : (
                      <div className="timeline-empty-col col-12 col-md-6 d-none d-md-block" />
                    )}

                    {/* Column 2 (Left in RTL / Right in LTR) */}
                    {!isCardOnFirstCol ? (
                      <motion.div
                        className="timeline-card-col col-12 col-md-6 ps-md-4 pe-md-0 mb-4 mb-md-0"
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <FileCard
                          type="activity"
                          title={item.title}
                          image={item.image}
                          description={item.description}
                          index={index}
                        />
                      </motion.div>
                    ) : (
                      <div className="timeline-empty-col col-12 col-md-6 d-none d-md-block" />
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 my-12 p-12 rounded-4 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]" style={{ background: "var(--card-color)", border: "1px dashed var(--card-border)" }}>
              <div className="text-warning mb-4" style={{ fontSize: "3rem" }}>
                <FaCalendarAlt />
              </div>
              <h4 className="font-bold mb-2" style={{ color: "var(--text-color)" }}>
                {t("committee_empty_title")}
              </h4>
              <p className="text-muted mb-6 mx-auto" style={{ maxWidth: "450px" }}>
                {t("committee_empty_desc")}
              </p>
              <Link href="/Login" className="btn btn-primary-custom px-6 py-2 rounded-full font-bold no-underline">
                {t("committee_empty_btn")}
              </Link>
            </div>
          )}
        </div>
      </section>
    </MainLayout>
  );
}
