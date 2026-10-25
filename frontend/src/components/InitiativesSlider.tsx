"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FaChevronRight, FaChevronLeft, FaHandsHelping, FaArrowLeft } from "react-icons/fa";

interface Slide {
  id: number;
  image: string;
  categoryAr: string;
  categoryEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  statsAr: string;
  statsEn: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/Banner/تطوع كبير.jpg",
    categoryAr: "مسار بناء وتمكين الشباب",
    categoryEn: "Youth Empowerment Track",
    titleAr: "صناع الحياة.. نبني أثراً، نصنع مستقبلاً",
    titleEn: "Life Makers.. Building Impact, Shaping the Future",
    subtitleAr: "حركة تطوعية شبابية رائدة تعمل منذ عام 2004 في كافة مراكز وقرى محافظة الإسماعيلية على تنمية المهارات وتوجيه الطاقات لخدمة المجتمع.",
    subtitleEn: "A pioneering volunteer movement working since 2004 across Ismailia to develop youth skills and channel energies toward social impact.",
    statsAr: "+5,000 متطوع نشط",
    statsEn: "+5,000 Active Volunteers",
  },
  {
    id: 2,
    image: "/images/Banner/عيش وملح كبير.jpg",
    categoryAr: "قوافل الإغاثة الإنسانية والإطعام",
    categoryEn: "Humanitarian Relief & Food Convoys",
    titleAr: "معاً.. نحو حياة كريمة في كل قرية",
    titleEn: "Together.. Toward a Dignified Life in Every Village",
    subtitleAr: "تدخلات إنسانية متكاملة تشمل توزيع كراتين المواد الغذائية، القوافل الطبية المتخصصة، وتوفير الأغطية الشتوية للأسر الأكثر استحقاقاً.",
    subtitleEn: "Integrated interventions including food parcels, specialized medical convoys, and winter warm aid for families in need.",
    statsAr: "+25,000 أسرة مستفيدة",
    statsEn: "+25,000 Beneficiary Families",
  },
  {
    id: 3,
    image: "/images/Banner/نخيل كبير.jpg",
    categoryAr: "التمكين الاقتصادي والتنمية المستدامة",
    categoryEn: "Economic Empowerment & Sustainability",
    titleAr: "وقف النخيل الخيري.. أثر يدوم لأجيال",
    titleEn: "Palm Endowment Project.. Impact Lasting for Generations",
    subtitleAr: "مشروع وقفي رائد يهدف إلى تحقيق الاستدامة المالية لمشاريع التنمية وتحويل الأسر من دائرة الاحتياج إلى الإنتاج والاستقلالية.",
    subtitleEn: "An innovative endowment ensuring recurring funding for community programs and transforming vulnerable families into self-reliant producers.",
    statsAr: "+150 مشروع تنموي",
    statsEn: "+150 Community Projects",
  },
];

export default function InitiativesSlider() {
  const { isRtl, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const current = SLIDES[currentIndex];

  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              {t("initiatives_kicker")}
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              {t("initiatives_title")}
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-all border border-slate-700 cursor-pointer"
              aria-label="السابق"
            >
              <FaChevronRight className="text-sm" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white flex items-center justify-center transition-all border border-slate-700 cursor-pointer"
              aria-label="التالي"
            >
              <FaChevronLeft className="text-sm" />
            </button>
          </div>
        </div>

        {/* Carousel Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl min-h-[460px] sm:min-h-[500px] flex items-end">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url("${current.image}")` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Content */}
          <div className="relative z-10 p-6 sm:p-12 max-w-3xl">
            <motion.div
              key={`text-${current.id}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isRtl ? current.categoryAr : current.categoryEn}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs font-semibold text-slate-300">
                  {isRtl ? current.statsAr : current.statsEn}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
                {isRtl ? current.titleAr : current.titleEn}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-light">
                {isRtl ? current.subtitleAr : current.subtitleEn}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/login"
                  className="px-6 py-3.5 rounded-xl font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg text-sm flex items-center gap-2"
                >
                  <FaHandsHelping />
                  <span>{t("initiatives_join_btn")}</span>
                </Link>
                <Link
                  href="/about"
                  className="px-5 py-3.5 rounded-xl font-semibold bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 text-sm flex items-center gap-2"
                >
                  <span>{t("initiatives_details_btn")}</span>
                  <FaArrowLeft className={`text-xs ${!isRtl ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "w-8 bg-amber-400"
                    : "w-2 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`شريحة ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
