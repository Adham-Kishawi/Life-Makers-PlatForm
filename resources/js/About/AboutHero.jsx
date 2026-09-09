import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaHandsHelping, FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "@inertiajs/react";

export default function AboutHero() {
  return (
    <section
      className="about-hero-section relative overflow-hidden py-12"
      style={{
        background: "linear-gradient(135deg, #012b45 0%, #014976 50%, #023657 100%)",
        color: "#ffffff",
        borderRadius: "0 0 3rem 3rem", // 48px soft organic bottom curves
        boxShadow: "0 20px 50px -10px rgba(1, 43, 69, 0.4)"
      }}
    >
      {/* Ambient background glow circles */}
      <div
        className="absolute"
        style={{
          top: "-15%",
          right: "-5%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(251, 174, 66, 0.15) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(40px)"
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "-20%",
          left: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(2, 99, 158, 0.25) 0%, transparent 70%)",
          pointerEvents: "none",
          filter: "blur(50px)"
        }}
      />

      <div className="container position-relative lg:py-6" style={{ zIndex: 2 }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* National Alliance & Official Reg Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center mb-6 px-6 py-2"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1.5px solid rgba(251, 174, 66, 0.55)",
                borderRadius: "9999px",
                gap: "0.5rem",
                boxShadow: "0 4px 20px rgba(251, 174, 66, 0.15)"
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  background: "#FBAE42",
                  display: "inline-block",
                  boxShadow: "0 0 10px #FBAE42"
                }}
              />
              <span className="text-[80%] font-bold" style={{ color: "#FBAE42", letterSpacing: "0.5px" }}>
                مؤسسة أهلية وطنية مشهرة برقم 839 لسنة 2018 • عضو التحالف الوطني للعمل الأهلي التنموي
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[3.5rem] font-light leading-[1.2] font-bold mb-6"
              style={{
                lineHeight: 1.3,
                fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
                letterSpacing: "-0.5px"
              }}
            >
              نصنع الأمل، نبني الإنسان، <br className="hidden md:block" />
              <span
                style={{
                  background: "linear-gradient(135deg, #FBAE42 0%, #ffc978 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                ونقود التغيير المجتمعي المستدام
              </span>
            </motion.h1>

            {/* Deep Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl font-light mb-6 mx-auto"
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.15rem",
                lineHeight: 1.85,
                maxWidth: "820px"
              }}
            >
              انطلقت مؤسسة <strong>صناع الحياة مصر</strong> كحركة شبابية تطوعية رائدة وتأسست رسميًا كمؤسسة أهلية عام 2011. نؤمن بأن الشباب هم القوة الدافعة الحقيقية لنهضة الوطن، ونعمل عبر شبكة واسعة من المتطوعين والمكاتب الشريكة في كافة محافظات مصر، وبفرع ميداني فاعل في <strong>محافظة الإسماعيلية</strong>، لتقديم تدخلات تنموية وإغاثية تحفظ كرامة الإنسان وتلبي احتياجات الفئات الأكثر استحقاقاً.
            </motion.p>

            {/* Quick Micro-Stats Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="row g-3 justify-content-center my-4 py-2"
            >
              <div className="col-auto">
                <div
                  className="px-4 py-2 text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  <div className="font-bold" style={{ color: "#FBAE42", fontSize: "1.3rem" }}>1.5M+</div>
                  <div className="text-[80%] text-light" style={{ opacity: 0.85 }}>مستفيد سنويًا</div>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className="px-4 py-2 text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  <div className="font-bold" style={{ color: "#FBAE42", fontSize: "1.3rem" }}>25,000+</div>
                  <div className="text-[80%] text-light" style={{ opacity: 0.85 }}>متطوع معتمد</div>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className="px-4 py-2 text-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.06)",
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backdropFilter: "blur(8px)"
                  }}
                >
                  <div className="font-bold" style={{ color: "#FBAE42", fontSize: "1.3rem" }}>27</div>
                  <div className="text-[80%] text-light" style={{ opacity: 0.85 }}>محافظة مصرية</div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 pt-2"
              style={{ gap: "1rem" }}
            >
              <Link
                href="/Login"
                className="btn btn-glow-amber px-6 py-4 text-dark font-bold inline-flex items-center no-underline shadow-[0_0.5rem_1rem_rgba(0,0,0,0.15)]"
                style={{
                  background: "linear-gradient(135deg, #FBAE42 0%, #f59e0b 100%)",
                  borderRadius: "9999px",
                  fontSize: "1rem",
                  gap: "0.5rem",
                  border: "none"
                }}
              >
                <FaHandsHelping size={18} />
                <span>انضم كمتطوع (خليك صنعاوي)</span>
              </Link>

              <a
                href="#official-hub"
                className="btn px-6 py-4 text-white font-bold inline-flex items-center no-underline"
                style={{
                  background: "rgba(255, 255, 255, 0.12)",
                  border: "1.5px solid rgba(255, 255, 255, 0.25)",
                  borderRadius: "9999px",
                  fontSize: "1rem",
                  gap: "0.5rem",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.22)";
                  e.currentTarget.style.borderColor = "#FBAE42";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                }}
              >
                <FaExternalLinkAlt size={14} />
                <span>المنصات والروابط الرسمية</span>
              </a>

              <a
                href="#ismailia-branch"
                className="btn px-6 py-4 text-warning font-bold inline-flex items-center no-underline"
                style={{
                  background: "rgba(251, 174, 66, 0.1)",
                  border: "1.5px solid rgba(251, 174, 66, 0.35)",
                  borderRadius: "9999px",
                  fontSize: "1rem",
                  gap: "0.5rem",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(251, 174, 66, 0.2)";
                  e.currentTarget.style.borderColor = "#FBAE42";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(251, 174, 66, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(251, 174, 66, 0.35)";
                }}
              >
                <FaMapMarkerAlt size={15} />
                <span>مقر فرع الإسماعيلية</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
