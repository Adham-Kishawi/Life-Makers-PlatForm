import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../Context/LanguageContext";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaVideo, FaCompass, FaHeart, FaHandsHelping, FaTree } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HomeVideoSection() {
  const { t, isRtl } = useLanguage();
  const sectionRef = useRef(null);
  const turntableRef = useRef(null);
  const videoRef = useRef(null);
  const glareRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [tiltActive, setTiltActive] = useState(false);

  // GSAP ScrollTrigger and 3D Turntable Physics
  useEffect(() => {
    const sectionEl = sectionRef.current;
    const turntableEl = turntableRef.current;
    if (!sectionEl || !turntableEl) return;

    // Scroll entrance animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        turntableEl,
        {
          scale: 0.88,
          opacity: 0.7,
          rotateX: 12,
          transformPerspective: 1200,
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

  // 3D Turntable Mouse Move Handler
  const handleMouseMove = (e) => {
    const el = turntableRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Normalized from -1 to 1
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Turntable angles (max 8 degrees for natural cinematic feel)
    const rotateY = normX * 8;
    const rotateX = -normY * 6;

    setTiltActive(true);

    gsap.to(el, {
      rotateY,
      rotateX,
      transformPerspective: 1400,
      duration: 0.5,
      ease: "power2.out",
      transformOrigin: "center center",
    });

    // Animate glare reflection
    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(251, 174, 66, 0.22) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const el = turntableRef.current;
    if (!el) return;

    setTiltActive(false);

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
    <section ref={sectionRef} className="py-12 relative overflow-hidden" style={{ background: "transparent" }}>
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="inline-flex items-center px-4 py-1 rounded-full font-bold"
              style={{
                background: "rgba(251, 174, 66, 0.15)",
                color: "var(--secondary-color)",
                fontSize: "0.9rem",
              }}
            >
              <FaVideo className="me-2" />
              <span>{t("video_badge", "شاهد صناع الحياة في الميدان")}</span>
            </span>
            <span
              className="inline-flex items-center px-4 py-1 rounded-full font-bold text-[80%] text-muted hidden md:inline-flex"
              style={{
                background: "rgba(1, 73, 118, 0.08)",
                border: "1px solid var(--card-border)",
              }}
            >
              <FaCompass className="me-1 text-warning" />
              <span>{t("video_3d_turntable", "تفاعل 3D مع الماوس والتمرير")}</span>
            </span>
          </div>

          <h2 className="font-bold mb-4" style={{ color: "var(--text-color)", fontSize: "2.3rem" }}>
            {t("video_title", "نبض الشباب وصناعة الأمل في الإسماعيلية")}
          </h2>
          <p className="text-xl font-light text-muted mx-auto" style={{ maxWidth: "680px", fontSize: "1.05rem", lineHeight: "1.8" }}>
            {t(
              "video_subtitle",
              "رحلة حقيقية تنبض بالحياة، من قوافل الإغاثة ودمج أصحاب الهمم في مبادرة أحسن صاحب، إلى وقف النخيل وتأهيل قادة المستقبل بمحافظة الإسماعيلية."
            )}
          </p>

          {/* Quick Highlight Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <span className="badge px-4 py-2 rounded-full inline-flex items-center" style={{ background: "rgba(1,73,118,0.1)", color: "var(--main-color)", gap: "0.4rem" }}>
              <FaHeart className="text-danger" />
              <span>مبادرة أحسن صاحب</span>
            </span>
            <span className="badge px-4 py-2 rounded-full inline-flex items-center" style={{ background: "rgba(251,174,66,0.15)", color: "var(--secondary-color)", gap: "0.4rem" }}>
              <FaTree className="text-success" />
              <span>مشروع واحة وقف النخيل</span>
            </span>
            <span className="badge px-4 py-2 rounded-full inline-flex items-center" style={{ background: "rgba(1,73,118,0.1)", color: "var(--main-color)", gap: "0.4rem" }}>
              <FaHandsHelping className="text-warning" />
              <span>قوافل دفا وإغاثة القرى</span>
            </span>
          </div>
        </div>

        {/* GSAP Interactive 3D Turntable Frame */}
        <div style={{ perspective: "1600px" }} className="w-full">
          <div
            ref={turntableRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="video-turntable-wrapper bento-card-modern p-2 md:p-4 mx-auto relative"
            style={{
              maxWidth: "1080px",
              transformStyle: "preserve-3d",
              willChange: "transform",
              cursor: "crosshair",
            }}
          >
            {/* Dynamic Glare Overlay */}
            <div
              ref={glareRef}
              className="absolute top-0 start-0 w-full h-full pointer-events-none rounded-4"
              style={{
                zIndex: 4,
                transition: "background 0.15s ease",
              }}
            />

            {/* Inner Video Container */}
            <div
              className="relative overflow-hidden rounded-4"
              style={{
                height: "500px",
                background: "#011b2d",
              }}
            >
              <video
                ref={videoRef}
                className="w-full h-full"
                style={{ objectFit: "cover" }}
                poster="/images/Banner/تطوع كبير.jpg"
                loop
                muted={isMuted}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video/life-makers.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Dark Vignette Overlay */}
              <div
                className="absolute top-0 start-0 w-full h-full pointer-events-none"
                style={{
                  background: isPlaying
                    ? "radial-gradient(circle at center, transparent 45%, rgba(1, 27, 45, 0.45) 100%)"
                    : "linear-gradient(180deg, rgba(1, 27, 45, 0.4) 0%, rgba(1, 27, 45, 0.82) 100%)",
                  transition: "background 0.4s ease",
                }}
              />

              {/* Centered Play Trigger when paused */}
              {!isPlaying && (
                <div
                  className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 text-center cursor-pointer"
                  onClick={togglePlay}
                  style={{ zIndex: 6 }}
                >
                  <button
                    type="button"
                    className="btn-glow-amber btn-shimmer text-dark rounded-full flex items-center justify-center shadow-2xl mx-auto mb-4"
                    style={{
                      width: "88px",
                      height: "88px",
                      fontSize: "1.85rem",
                    }}
                    aria-label="Play Video"
                  >
                    <FaPlay style={{ marginLeft: isRtl ? "0" : "4px", marginRight: isRtl ? "4px" : "0" }} />
                  </button>
                  <div
                    className="text-white font-bold px-6 py-2 rounded-full inline-block shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
                    style={{ background: "rgba(1, 36, 58, 0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(251, 174, 66, 0.3)" }}
                  >
                    {t("video_play_prompt", "شاهد الفيلم الوثائقي التفاعلي (صناع الحياة)")}
                  </div>
                </div>
              )}

              {/* Bottom Glassmorphic Control Bar */}
              <div
                className="absolute bottom-0 start-0 w-full p-4 flex items-center justify-between"
                style={{
                  background: "linear-gradient(0deg, rgba(1, 27, 45, 0.95) 0%, rgba(1, 27, 45, 0.6) 60%, transparent 100%)",
                  zIndex: 7,
                }}
              >
                <div className="flex items-center" style={{ gap: "0.75rem" }}>
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="btn-glow-amber rounded-full flex items-center justify-center"
                    style={{ width: "40px", height: "40px", padding: 0 }}
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <FaPause size={13} /> : <FaPlay size={13} />}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="btn-glow-ghost rounded-full flex items-center justify-center text-white"
                    style={{ width: "40px", height: "40px", padding: 0 }}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? <FaVolumeMute size={15} /> : <FaVolumeUp size={15} />}
                  </button>

                  <span className="text-white text-[80%] font-bold hidden md:inline ms-2" style={{ opacity: 0.95 }}>
                    {isRtl ? "صناع الحياة - فرع الإسماعيلية" : "Life Makers Foundation - Ismailia"}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="badge px-4 py-2 rounded-full font-bold" style={{ background: "rgba(251, 174, 66, 0.2)", color: "#FBAE42", border: "1px solid rgba(251, 174, 66, 0.4)" }}>
                    GSAP 3D Turntable • 60 FPS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
