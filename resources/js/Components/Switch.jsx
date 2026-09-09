import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Switch() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('life_makers_theme') || localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return document.documentElement.classList.contains('dark-mode');
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
      if (document.body) document.body.classList.add('dark-mode');
      localStorage.setItem('life_makers_theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      if (document.body) document.body.classList.remove('dark-mode');
      localStorage.setItem('life_makers_theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      className="border-0 p-1 rounded-full relative inline-flex items-center cursor-pointer"
      style={{
        width: "66px",
        height: "34px",
        background: isDark
          ? "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
          : "linear-gradient(135deg, #e0f2fe 0%, #fef3c7 100%)",
        border: isDark ? "1px solid rgba(96, 165, 250, 0.3)" : "1px solid rgba(251, 174, 66, 0.4)",
        boxShadow: isDark
          ? "0 0 12px rgba(59, 130, 246, 0.25), inset 0 1px 2px rgba(0,0,0,0.4)"
          : "0 0 12px rgba(251, 174, 66, 0.25), inset 0 1px 2px rgba(255,255,255,0.8)",
        backdropFilter: "blur(10px)",
        padding: "3px",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease"
      }}
      title={isDark ? "تفعيل الوضع النهاري" : "تفعيل الوضع الليلي"}
      aria-label="Toggle theme"
    >
      {/* Background Starlets / Sunlight dots */}
      <div className="w-full h-full absolute top-0 start-0 flex items-center justify-between px-2 overflow-hidden pointer-events-none" style={{ opacity: 0.7 }}>
        {isDark ? (
          <>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [0.7, 1.2, 0.7] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ fontSize: "7px", color: "#93c5fd", marginLeft: "4px" }}
            >
              ✦
            </motion.span>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              style={{ fontSize: "5px", color: "#e2e8f0", marginRight: "6px" }}
            >
              ★
            </motion.span>
          </>
        ) : (
          <>
            <span style={{ fontSize: "8px", color: "#f59e0b", marginLeft: "6px" }}>☼</span>
            <span style={{ fontSize: "6px", color: "#38bdf8", marginRight: "4px" }}>☁</span>
          </>
        )}
      </div>

      {/* Sliding Luminous Thumb */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="rounded-full flex items-center justify-center relative"
        style={{
          width: "26px",
          height: "26px",
          marginLeft: isDark ? "auto" : "0",
          marginRight: isDark ? "0" : "auto",
          background: isDark
            ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
          boxShadow: isDark
            ? "0 2px 8px rgba(59, 130, 246, 0.6), inset 0 1px 1px rgba(255,255,255,0.4)"
            : "0 2px 8px rgba(245, 158, 11, 0.6), inset 0 1px 1px rgba(255,255,255,0.6)",
          zIndex: 3
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.svg
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              color="#ffffff"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" fill="#ffffff" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
