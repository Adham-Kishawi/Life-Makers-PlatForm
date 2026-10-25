"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaVideo, FaCompass, FaHeart, FaHandsHelping, FaTree } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeVideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const turntableRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    const turntableEl = turntableRef.current;
    if (!sectionEl || !turntableEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        turntableEl,
        {
          scale: 0.9,
          opacity: 0.7,
          rotateX: 10,
        },
        {
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            end: "center center",
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = turntableRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    const rotateY = normX * 8;
    const rotateX = -normY * 6;

    gsap.to(el, {
      rotateY,
      rotateX,
      transformPerspective: 1400,
      duration: 0.5,
      ease: "power2.out",
      transformOrigin: "center center",
    });

    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(251, 174, 66, 0.25) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = turntableRef.current;
    if (!el) return;

    gsap.to(el, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    if (glareRef.current) {
      glareRef.current.style.background = "transparent";
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-slate-900/60 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full font-bold text-sm bg-amber-400/15 text-amber-400 border border-amber-400/30">
              <FaVideo className="ml-2" />
              <span>نبض الميدان في الإسماعيلية</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
              <FaCompass className="ml-1" />
              <span>مشهد تفاعلي حي</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            شاهد صناع الحياة.. من القوافل إلى الأثر المستدام
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            رحلة حقيقية تنبض بالحياة، من قوافل الإغاثة ودمج أصحاب الهمم في مبادرة أحسن صاحب، إلى مشروعات وقف النخيل وتأهيل قادة الغد بالإسماعيلية.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center gap-1.5">
              <FaHeart className="text-rose-500" />
              <span>مبادرة أحسن صاحب</span>
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
              <FaTree className="text-emerald-400" />
              <span>وقف النخيل التنموي</span>
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
              <FaHandsHelping className="text-amber-400" />
              <span>قوافل عيش وملح الغذائية</span>
            </span>
          </div>
        </div>

        {/* 3D Turntable Video Box */}
        <div style={{ perspective: "1600px" }} className="w-full">
          <div
            ref={turntableRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-2xl p-2 sm:p-4 bg-slate-800/80 border border-slate-700/80 shadow-2xl transition-shadow hover:shadow-amber-500/10"
            style={{
              transformStyle: "preserve-3d",
              willChange: "transform",
              cursor: "crosshair",
            }}
          >
            {/* Dynamic Glare Reflection */}
            <div
              ref={glareRef}
              className="absolute inset-0 pointer-events-none rounded-2xl z-20 transition-all duration-150"
            />

            {/* Inner Video Container */}
            <div className="relative overflow-hidden rounded-xl bg-slate-950 aspect-video max-h-[520px]">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/Banner/تطوع كبير.jpg"
                loop
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/Interactive_3D_website_scroll_an._202609051436.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Vignette Overlay */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                  isPlaying ? "bg-black/20" : "bg-black/60 backdrop-blur-[2px]"
                }`}
              />

              {/* Centered Play Button when paused */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer z-30"
                  onClick={togglePlay}
                >
                  <button
                    type="button"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shadow-xl shadow-amber-500/30 transform hover:scale-110 active:scale-95 transition-all duration-300"
                    aria-label="Play Video"
                  >
                    <FaPlay className="text-2xl sm:text-3xl translate-x-[-2px]" />
                  </button>
                  <span className="mt-4 text-white font-bold text-sm sm:text-base drop-shadow-md">
                    اضغط لتشغيل المشهد السينمائي الميداني
                  </span>
                </div>
              )}

              {/* Bottom Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-30 pointer-events-auto">
                <button
                  onClick={togglePlay}
                  className="px-4 py-2 rounded-lg bg-black/60 hover:bg-black/80 text-white text-sm font-semibold backdrop-blur-md flex items-center gap-2 border border-white/10"
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                  <span>{isPlaying ? "إيقاف مؤقت" : "تشغيل"}</span>
                </button>

                <button
                  onClick={toggleMute}
                  className="p-3 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10"
                  aria-label="Toggle Mute"
                >
                  {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
