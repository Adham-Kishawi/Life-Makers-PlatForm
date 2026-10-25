"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hero3DCanvas from "@/components/Hero3DCanvas";
import { FaChevronRight, FaChevronLeft, FaHandsHelping, FaArrowLeft, FaInfoCircle } from "react-icons/fa";

interface Slide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    image: "/images/Banner/تطوع كبير.jpg",
    badge: "مؤسسة صناع الحياة - الإسماعيلية",
    title: "صُنّاع الحياة.. نبني أثراً، نصنع مستقبلاً",
    subtitle: "حركة شبابية تطوعية رائدة تعمل منذ عام 2004 على تمكين الشباب وتنمية المجتمعات الأكثر احتياجاً بروح الإيجابية والعطاء.",
  },
  {
    image: "/images/Banner/عيش وملح كبير.jpg",
    badge: "حملة عيش وملح 2026",
    title: "معاً.. نحو حياة كريمة في كل قرية",
    subtitle: "قوافل إطعام، ورعاية صحية، وتدخلات إنسانية متكاملة تصل لكل بيت في قرى ومراكز محافظة الإسماعيلية.",
  },
  {
    image: "/images/Banner/نخيل كبير.jpg",
    badge: "وقف النخيل والتنمية المستدامة",
    title: "أثر مستدام يدوم لأجيال قادمة",
    subtitle: "مشروعات تنموية ووقف خيري استثماري يُمكّن الأسر المستحقة ويحول الاحتياج إلى إنتاج وكفاية.",
  },
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DEFAULT_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % DEFAULT_SLIDES.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + DEFAULT_SLIDES.length) % DEFAULT_SLIDES.length);

  const current = DEFAULT_SLIDES[currentIndex];

  return (
    <div className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden bg-slate-950">
      {/* 3D Geometric Canvas */}
      <Hero3DCanvas />

      {/* Slide Background Image with Smooth Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url("${current.image}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-sky-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </motion.div>
      </AnimatePresence>

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-6 backdrop-blur-md">
              {current.badge}
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
              {current.title}
            </h1>

            <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl drop-shadow">
              {current.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/login"
                className="px-8 py-4 rounded-xl text-base font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-xl transition-all flex items-center gap-2.5"
              >
                <FaHandsHelping className="text-lg" />
                <span>خليك صنعاوي (انضم الآن)</span>
              </Link>

              <Link
                href="/about"
                className="px-6 py-4 rounded-xl text-base font-bold bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center gap-2"
              >
                <FaInfoCircle className="text-amber-400" />
                <span>عن المؤسسة ورسالتنا</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
          <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-400">+5,000</div>
            <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">متطوع نشط بالإسماعيلية</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-sky-400">+150</div>
            <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">قافلة إغاثية وطبية</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">+25,000</div>
            <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">أسرة مستفيدة</div>
          </div>
          <div className="bg-slate-900/60 backdrop-blur-md p-4 rounded-xl border border-slate-800">
            <div className="text-2xl sm:text-3xl font-black text-amber-300">+20</div>
            <div className="text-xs sm:text-sm text-slate-400 font-semibold mt-1">عاماً من العطاء المستمر</div>
          </div>
        </div>
      </div>

      {/* Slider Controls (Next / Prev Arrows) */}
      <button
        onClick={prevSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/70 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors border border-slate-800"
        aria-label="Previous Slide"
      >
        <FaChevronRight />
      </button>

      <button
        onClick={nextSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/70 text-white hover:bg-amber-400 hover:text-slate-950 transition-colors border border-slate-800"
        aria-label="Next Slide"
      >
        <FaChevronLeft />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {DEFAULT_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === i ? "w-8 bg-amber-400" : "w-2 bg-slate-600"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
