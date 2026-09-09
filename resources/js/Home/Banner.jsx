import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../Context/LanguageContext";
import Hero3DCanvas from "../Components/Hero3DCanvas";
import {
  FaChevronRight,
  FaChevronLeft,
  FaUserPlus,
  FaArrowLeft,
  FaArrowRight,
  FaHandsHelping,
  FaUsers,
  FaHeartbeat,
  FaGraduationCap
} from "react-icons/fa";

export default function Banner({ sliders = [] }) {
  const { t, isRtl } = useLanguage();

  // Built-in fallback slides with rich captions
  const defaultSlides = [
    {
      image: "/images/Banner/تطوع كبير.jpg",
      title: t("hero_title"),
      subtitle: t("hero_subtitle"),
      badge: t("hero_badge")
    },
    {
      image: "/images/Banner/عيش وملح كبير.jpg",
      title: isRtl ? "معاً.. نحو حياة كريمة" : "Together.. Towards a Dignified Life",
      subtitle: isRtl
        ? "قوافل إطعام، ورعاية صحية، وتدخلات إنسانية متكاملة تصل لكل بيت في قرى ومراكز الإسماعيلية."
        : "Relief convoys, healthcare, and humanitarian interventions reaching every doorstep across Ismailia.",
      badge: isRtl ? "حملة عيش وملح" : "Eish & Melh Campaign"
    },
    {
      image: "/images/Banner/نخيل كبير.jpg",
      title: isRtl ? "أثر مستدام يدوم لأجيال" : "Sustainable Impact Lasting for Generations",
      subtitle: isRtl
        ? "مشروعات تنموية ووقف خيري يُمكّن الأسر المستحقة ويحول الاحتياج إلى إنتاج."
        : "Community development initiatives and micro-enterprises empowering families from aid to sustainable productivity.",
      badge: isRtl ? "وقف النخيل والتنمية" : "Palm Endowment & Development"
    },
  ];

  // Merge DB sliders or fallback
  const slides = (sliders && sliders.length > 0)
    ? sliders.map((s, idx) => ({
        image: s.image?.startsWith("http") || s.image?.startsWith("/") ? s.image : `/storage/${s.image}`,
        title: s.title || defaultSlides[idx % defaultSlides.length].title,
        subtitle: s.subtitle || defaultSlides[idx % defaultSlides.length].subtitle,
        badge: s.badge || t("hero_badge")
      }))
    : defaultSlides;

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="hero-banner-wrapper relative overflow-hidden" style={{ minHeight: "580px", background: "#01243a" }}>
      {/* Interactive 3D Three.js Geometric & Particle Canvas */}
      <Hero3DCanvas />

      {/* Background Image Carousel with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute top-0 start-0 w-full h-full"
          style={{
            backgroundImage: `url("${slides[currentIndex].image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dual Gradient Overlay for readability with 3D canvas */}
          <div
            className="absolute top-0 start-0 w-full h-full"
            style={{
              background: isRtl
                ? "linear-gradient(90deg, rgba(1, 36, 58, 0.93) 0%, rgba(1, 73, 118, 0.8) 55%, rgba(1, 36, 58, 0.65) 100%)"
                : "linear-gradient(270deg, rgba(1, 36, 58, 0.93) 0%, rgba(1, 73, 118, 0.8) 55%, rgba(1, 36, 58, 0.65) 100%)"
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content */}
      <div className="container position-relative py-5 text-white d-flex flex-column justify-content-center" style={{ minHeight: "580px", zIndex: 10 }}>
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <motion.div
              key={`text-${currentIndex}-${isRtl}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Badge */}
              <span
                className="inline-flex items-center px-4 py-1 rounded-full mb-4 font-bold"
                style={{
                  background: "rgba(251, 174, 66, 0.2)",
                  color: "#FBAE42",
                  border: "1px solid rgba(251, 174, 66, 0.4)",
                  fontSize: "0.9rem"
                }}
              >
                <FaHandsHelping className="me-2" />
                <span>{slides[currentIndex].badge}</span>
              </span>

              {/* Title */}
              <h1 className="text-[3.5rem] font-light leading-[1.2] font-bold mb-4" style={{ lineHeight: "1.25", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
                {slides[currentIndex].title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl font-light mb-6 text-light" style={{ maxWidth: "620px", lineHeight: "1.8", opacity: 0.95 }}>
                {slides[currentIndex].subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3">
                <Link
                  href="/Login"
                  className="btn btn-warning text-dark px-6 py-4 rounded-full font-bold inline-flex items-center shadow-lg hover-lift"
                  style={{ background: "linear-gradient(45deg, #FBAE42, #f59e0b)", border: "none" }}
                >
                  <FaUserPlus className="me-2" />
                  <span>{t("hero_cta_volunteer")}</span>
                </Link>

                <Link
                  href="/About"
                  className="btn btn-outline-light px-6 py-4 rounded-full font-bold inline-flex items-center hover-lift"
                  style={{ backdropFilter: "blur(5px)" }}
                >
                  <span>{t("hero_cta_explore")}</span>
                  {isRtl ? <FaArrowLeft className="ms-2" size={12} /> : <FaArrowRight className="ms-2" size={12} />}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="row mt-5 pt-4 border-top" style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}>
          <div className="col-6 col-md-3 mb-3 d-flex align-items-center" style={{ gap: "0.75rem" }}>
            <div className="stat-icon p-2 rounded-full text-warning shrink-0" style={{ background: "rgba(251,174,66,0.15)" }}>
              <FaUsers size={22} />
            </div>
            <div>
              <h4 className="font-bold mb-0 text-white">{t("stat_volunteers")}</h4>
              <span className="text-[80%] text-light" style={{ opacity: 0.85 }}>{t("stat_volunteers_label")}</span>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-3 d-flex align-items-center" style={{ gap: "0.75rem" }}>
            <div className="stat-icon p-2 rounded-full text-warning shrink-0" style={{ background: "rgba(251,174,66,0.15)" }}>
              <FaHeartbeat size={22} />
            </div>
            <div>
              <h4 className="font-bold mb-0 text-white">{t("stat_convoys")}</h4>
              <span className="text-[80%] text-light" style={{ opacity: 0.85 }}>{t("stat_convoys_label")}</span>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-3 d-flex align-items-center" style={{ gap: "0.75rem" }}>
            <div className="stat-icon p-2 rounded-full text-warning shrink-0" style={{ background: "rgba(251,174,66,0.15)" }}>
              <FaGraduationCap size={22} />
            </div>
            <div>
              <h4 className="font-bold mb-0 text-white">{t("stat_beneficiaries")}</h4>
              <span className="text-[80%] text-light" style={{ opacity: 0.85 }}>{t("stat_beneficiaries_label")}</span>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-3 d-flex align-items-center" style={{ gap: "0.75rem" }}>
            <div className="stat-icon p-2 rounded-full text-warning shrink-0" style={{ background: "rgba(251,174,66,0.15)" }}>
              <FaHandsHelping size={22} />
            </div>
            <div>
              <h4 className="font-bold mb-0 text-white">{t("stat_years")}</h4>
              <span className="text-[80%] text-light" style={{ opacity: 0.85 }}>{t("stat_years_label")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls (Arrows) */}
      <button
        type="button"
        onClick={isRtl ? prevSlide : nextSlide}
        className="carousel-btn absolute top-1/2 start-0 -translate-y-1/2 btn text-white rounded-full p-2 mx-4 hidden md:flex items-center justify-center"
        style={{ width: "45px", height: "45px", background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.2)", zIndex: 15 }}
        aria-label="Previous Slide"
      >
        {isRtl ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
      <button
        type="button"
        onClick={isRtl ? nextSlide : prevSlide}
        className="carousel-btn absolute top-1/2 end-0 -translate-y-1/2 btn text-white rounded-full p-2 mx-4 hidden md:flex items-center justify-center"
        style={{ width: "45px", height: "45px", background: "rgba(0,0,0,0.35)", border: "1px solid rgba(255,255,255,0.2)", zIndex: 15 }}
        aria-label="Next Slide"
      >
        {isRtl ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-0 start-1/2 -translate-x-1/2 pb-4 flex" style={{ gap: "0.5rem", zIndex: 15 }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className="border-0 rounded-full p-0"
            style={{
              width: currentIndex === idx ? "28px" : "10px",
              height: "8px",
              background: currentIndex === idx ? "#FBAE42" : "rgba(255, 255, 255, 0.4)",
              transition: "all 0.3s ease"
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
