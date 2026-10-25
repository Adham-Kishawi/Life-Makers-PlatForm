"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div
      dir="ltr"
      className="relative inline-flex items-center cursor-pointer select-none transition-all"
      style={{
        width: "88px",
        height: "34px",
        borderRadius: "9999px",
        background: "var(--card-color, #111827)",
        border: "1.5px solid var(--card-border, #1f2937)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12), inset 0 1px 2px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(12px)",
        padding: "3px",
        overflow: "hidden",
      }}
      title={isAr ? "التحويل للغة الإنجليزية (Switch to English)" : "Switch to Arabic (التحويل للغة العربية)"}
      role="group"
      aria-label="Language Selector"
    >
      {/* Precision Sliding Capsule Thumb */}
      <div
        className="absolute"
        style={{
          top: "3px",
          left: "3px",
          width: "39px",
          height: "26px",
          borderRadius: "9999px",
          background: isAr
            ? "linear-gradient(135deg, #014976 0%, #02639e 100%)"
            : "linear-gradient(135deg, #FBAE42 0%, #f59e0b 100%)",
          boxShadow: isAr
            ? "0 2px 8px rgba(1, 73, 118, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
            : "0 2px 8px rgba(251, 174, 66, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5)",
          transform: isAr ? "translateX(0px)" : "translateX(41px)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease, box-shadow 0.3s ease",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Arabic Button Slot */}
      <button
        type="button"
        onClick={() => setLang("ar")}
        className="p-0 border-0 flex items-center justify-center relative font-bold cursor-pointer transition-colors"
        style={{
          width: "41px",
          height: "28px",
          borderRadius: "9999px",
          fontSize: "0.82rem",
          color: isAr ? "#ffffff" : "var(--text-muted, #94a3b8)",
          opacity: isAr ? 1 : 0.65,
          zIndex: 2,
          outline: "none",
          lineHeight: 1,
          background: "transparent",
        }}
      >
        <span>عربي</span>
      </button>

      {/* English Button Slot */}
      <button
        type="button"
        onClick={() => setLang("en")}
        className="p-0 border-0 flex items-center justify-center relative font-bold cursor-pointer transition-colors"
        style={{
          width: "41px",
          height: "28px",
          borderRadius: "9999px",
          fontSize: "0.82rem",
          letterSpacing: "0.5px",
          color: !isAr ? "#0f172a" : "var(--text-muted, #94a3b8)",
          opacity: !isAr ? 1 : 0.65,
          zIndex: 2,
          outline: "none",
          lineHeight: 1,
          background: "transparent",
        }}
      >
        <span>EN</span>
      </button>
    </div>
  );
}
