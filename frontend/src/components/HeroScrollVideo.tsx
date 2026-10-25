"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { FaHandsHelping, FaArrowLeft } from "react-icons/fa";

export default function HeroScrollVideo() {
  const { isRtl } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    const video = videoRef.current;
    if (!track || !video) return;

    try {
      video.load();
      video.currentTime = 0.001;
    } catch (e) {}

    const setupScrub = () => {
      const duration = video.duration && !isNaN(video.duration) ? video.duration : 10;
      const proxy = { time: 0 };

      // Master timeline with scrub: 1.5 for silky smooth physical momentum easing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // Eases the timeline smoothly over 1.5s
        },
      });

      // 1. Smooth frame-by-frame proxy interpolation (NO raw jumps)
      tl.to(
        proxy,
        {
          time: duration - 0.05,
          ease: "none",
          onUpdate: () => {
            if (video && !video.seeking) {
              if (Math.abs(video.currentTime - proxy.time) > 0.02) {
                video.currentTime = proxy.time;
              }
            }
          },
        },
        0
      );

      // 2. High-performance catch-up via seeked listener and ticker
      const onSeeked = () => {
        if (video && Math.abs(video.currentTime - proxy.time) > 0.02) {
          video.currentTime = proxy.time;
        }
      };
      video.addEventListener("seeked", onSeeked);

      const onTick = () => {
        if (!video) return;
        if (!video.seeking && Math.abs(video.currentTime - proxy.time) > 0.02) {
          video.currentTime = proxy.time;
        }
      };
      gsap.ticker.add(onTick);

      // 3. Stats row gently fades around 40%
      if (statsRef.current) {
        tl.to(
          statsRef.current,
          {
            opacity: 0,
            y: 25,
            duration: 0.25,
            ease: "power2.inOut",
          },
          0.4
        );
      }

      // 4. Hero main content stays fully visible through 55%, then gently exits to reveal full 3D move
      if (contentRef.current) {
        tl.to(
          contentRef.current,
          {
            opacity: 0,
            y: -50,
            scale: 0.96,
            duration: 0.35,
            ease: "power2.inOut",
          },
          0.55
        );
      }

      return () => {
        gsap.ticker.remove(onTick);
        video.removeEventListener("seeked", onSeeked);
        tl.kill();
      };
    };

    let cleanup: (() => void) | undefined;

    if (video.readyState >= 1) {
      cleanup = setupScrub();
    } else {
      const handleMetadata = () => {
        cleanup = setupScrub();
      };
      video.addEventListener("loadedmetadata", handleMetadata, { once: true });
    }

    return () => {
      if (cleanup) cleanup();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === track) trigger.kill();
      });
    };
  }, []);

  return (
    // Outer scroll track: 220vh provides natural, smooth scroll pacing
    <div
      ref={trackRef}
      className="relative w-full"
      style={{ height: "220vh" }}
    >
      {/* Sticky Viewport Container: Glued to screen natively, never flies away */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#070b14] hero-scroll-container">
        
        {/* 3D Background Video */}
        <video
          ref={videoRef}
          src="/videos/life_makers_ismailia_3d.mp4"
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover"
        />

        {/* Cinematic Vignette Overlays for Maximum Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120]/85 via-transparent to-[#0b1120] pointer-events-none" />
        <div className="absolute inset-0 bg-[#070b14]/35 pointer-events-none" />

        {/* Hero Interactive Narrative Content (Without Mouse Indicator) */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 pointer-events-none">
          
          {/* Top spacer */}
          <div className="h-2" />

          {/* Hero Main Content */}
          <div
            ref={contentRef}
            className="text-center max-w-4xl mx-auto pointer-events-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold mb-6 backdrop-blur-md">
              <span>
                {isRtl ? "مؤسسة صناع الحياة مصر • فرع الإسماعيلية" : "Life Makers Egypt • Ismailia Branch"}
              </span>
            </div>

            <h1 className="hero-text text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl">
              {isRtl ? "صُنّاع الحياة.. نبني أثراً، نصنع مستقبلاً" : "Life Makers.. Building Impact, Shaping the Future"}
            </h1>

            <p className="hero-text text-base sm:text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl mx-auto drop-shadow-md">
              {isRtl
                ? "حركة شبابية تطوعية رائدة تعمل منذ عام 2004 في كافة مراكز وقرى محافظة الإسماعيلية على تمكين الشباب وتنمية المجتمع بروح العطاء والإيجابية."
                : "A leading youth volunteering movement founded in 2004 across all centers and villages of Ismailia to empower youth and foster sustainable community growth."}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/login"
                className="px-8 py-4 rounded-xl text-sm sm:text-base font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-xl transition-all flex items-center gap-2.5"
              >
                <FaHandsHelping className="text-lg" />
                <span>{isRtl ? "خليك صنعاوي (انضم الآن)" : "Be a Maker (Join Now)"}</span>
              </Link>

              <a
                href="#committees"
                className="px-6 py-4 rounded-xl text-sm sm:text-base font-bold bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-all flex items-center gap-2"
              >
                <span>{isRtl ? "استكشف اللجان والملفات (13 لجنة)" : "Explore Committees (13 Domains)"}</span>
                <FaArrowLeft className={`text-xs text-amber-400 ${!isRtl ? "rotate-180" : ""}`} />
              </a>
            </div>
          </div>

          {/* Bottom Section: Impact Stats Row Only (Mouse Indicator Deleted) */}
          <div className="w-full">
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto pointer-events-auto"
            >
              <div className="bg-slate-950/70 backdrop-blur-md p-3.5 rounded-xl border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">+5,000</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">
                  {isRtl ? "متطوع نشط بالإسماعيلية" : "Active Volunteers"}
                </div>
              </div>
              <div className="bg-slate-950/70 backdrop-blur-md p-3.5 rounded-xl border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-black text-white">+150</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">
                  {isRtl ? "قافلة إغاثية وطبية" : "Relief Convoys"}
                </div>
              </div>
              <div className="bg-slate-950/70 backdrop-blur-md p-3.5 rounded-xl border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-black text-amber-400">+25,000</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">
                  {isRtl ? "أسرة مستفيدة" : "Families Supported"}
                </div>
              </div>
              <div className="bg-slate-950/70 backdrop-blur-md p-3.5 rounded-xl border border-slate-800/80 text-center">
                <div className="text-xl sm:text-2xl font-black text-white">+20</div>
                <div className="text-xs text-slate-300 font-semibold mt-0.5">
                  {isRtl ? "عاماً من العطاء المستمر" : "Years of Giving"}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
