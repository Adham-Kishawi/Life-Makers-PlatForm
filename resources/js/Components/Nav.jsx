import React, { useState } from "react";
import Switch from "./Switch";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../Context/LanguageContext";
import { Link, usePage } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaUserPlus } from "react-icons/fa";

export default function Nav() {
  const { url, props } = usePage();
  const { t, isRtl } = useLanguage();
  const committee = props.committee || [];
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [hoveredPath, setHoveredPath] = useState(null);

  const getActiveKey = () => {
    if (url === "/") return "/";
    if (url.startsWith("/About")) return "/About";
    if (url.startsWith("/committee")) return "/committee";
    if (url.startsWith("/Contact")) return "/Contact";
    return "/";
  };

  const isActive = (path) => {
    if (path === "/" && url === "/") return true;
    if (path !== "/" && url.startsWith(path)) return true;
    return false;
  };

  const activePath = hoveredPath !== null ? hoveredPath : getActiveKey();

  return (
    <nav className="site-navbar sticky top-0 z-[1020] shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]" style={{
      background: "var(--glass-bg)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--glass-border)",
      transition: "all 0.3s ease"
    }}>
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logo */}
        <Link className="flex items-center no-underline" href="/">
          <img
            src="/images/logo.png"
            alt="Life Makers Ismailia"
            style={{ width: "115px", height: "auto" }}
          />
        </Link>

        {/* Scoped styles to ensure styling & sliding pill are 100% immune to CSS caching */}
        <style>{`
          .nav-link-custom {
            position: relative !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 0.5rem 1.25rem !important;
            border-radius: 9999px !important;
            font-weight: 700 !important;
            font-size: 0.98rem !important;
            color: #014976 !important;
            text-decoration: none !important;
            transition: color 0.22s ease, transform 0.22s ease !important;
            user-select: none;
            background: transparent;
            outline: none !important;
            box-shadow: none !important;
            border: none !important;
            white-space: nowrap;
            cursor: pointer;
          }
          .nav-link-custom:hover {
            color: #FBAE42 !important;
            text-decoration: none !important;
          }
          .nav-link-custom.is-active {
            color: #d97706 !important;
            text-decoration: none !important;
          }
          .dark-mode .nav-link-custom,
          html.dark-mode .nav-link-custom {
            color: #f1f5f9 !important;
          }
          .dark-mode .nav-link-custom:hover,
          .dark-mode .nav-link-custom.is-active,
          html.dark-mode .nav-link-custom:hover,
          html.dark-mode .nav-link-custom.is-active {
            color: #FBAE42 !important;
          }
          .nav-sliding-pill {
            position: absolute !important;
            inset: 0 !important;
            border-radius: 9999px !important;
            background: rgba(1, 73, 118, 0.08) !important;
            border: 1.5px solid #FBAE42 !important;
            box-shadow: 0 4px 15px rgba(251, 174, 66, 0.25), 0 0 10px rgba(251, 174, 66, 0.2) !important;
            backdrop-filter: blur(8px) !important;
            z-index: 1 !important;
            pointer-events: none !important;
          }
          .dark-mode .nav-sliding-pill,
          html.dark-mode .nav-sliding-pill {
            background: rgba(251, 174, 66, 0.15) !important;
            border: 1.5px solid #FBAE42 !important;
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4), 0 0 16px rgba(251, 174, 66, 0.35) !important;
          }
        `}</style>

        {/* Desktop Navigation Links with Animated Sliding Active Pill */}
        <ul
          className="hidden lg:flex items-center mb-0 list-none p-0 mb-4 relative"
          style={{ gap: "0.5rem" }}
          onMouseLeave={() => setHoveredPath(null)}
        >
          {/* Home */}
          <motion.li
            className="relative"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              className={`nav-link-custom ${activePath === "/" ? "is-active" : ""}`}
              href="/"
              onMouseEnter={() => setHoveredPath("/")}
            >
              {activePath === "/" && (
                <motion.div
                  layoutId="nav-sliding-pill"
                  className="nav-sliding-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative" style={{ zIndex: 2 }}>
                {t("nav_home")}
              </span>
            </Link>
          </motion.li>

          {/* About */}
          <motion.li
            className="relative"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              className={`nav-link-custom ${activePath === "/About" ? "is-active" : ""}`}
              href="/About"
              onMouseEnter={() => setHoveredPath("/About")}
            >
              {activePath === "/About" && (
                <motion.div
                  layoutId="nav-sliding-pill"
                  className="nav-sliding-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative" style={{ zIndex: 2 }}>
                {t("nav_about")}
              </span>
            </Link>
          </motion.li>

          {/* Committees Dropdown */}
          {committee && committee.length > 0 && (
            <motion.li
              className="relative"
              whileHover={{ y: -1 }}
              onMouseEnter={() => {
                setHoveredPath("/committee");
                setIsDropdownOpen(true);
              }}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link-custom ${activePath === "/committee" ? "is-active" : ""}`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {activePath === "/committee" && (
                  <motion.div
                    layoutId="nav-sliding-pill"
                    className="nav-sliding-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span className="relative flex items-center" style={{ zIndex: 2, gap: "0.35rem" }}>
                  <span>{t("nav_committees")}</span>
                  <FaChevronDown size={10} style={{
                    transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.2s ease"
                  }} />
                </span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="dropdown-menu-custom absolute shadow-[0_1rem_3rem_rgba(0,0,0,0.175)] py-2"
                    style={{
                      top: "100%",
                      [isRtl ? "right" : "left"]: 0,
                      minWidth: "220px",
                      background: "var(--card-color)",
                      border: "1px solid var(--card-border)",
                      borderRadius: "1.25rem",
                      overflow: "hidden",
                      zIndex: 1050
                    }}
                  >
                    {committee.map((item, index) => (
                      <Link
                        key={index}
                        href={`/committee/${item.name}`}
                        className="dropdown-item-custom block px-4 py-2 no-underline"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          )}

          {/* Contact */}
          <motion.li
            className="relative"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              className={`nav-link-custom ${activePath === "/Contact" ? "is-active" : ""}`}
              href="/Contact"
              onMouseEnter={() => setHoveredPath("/Contact")}
            >
              {activePath === "/Contact" && (
                <motion.div
                  layoutId="nav-sliding-pill"
                  className="nav-sliding-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <span className="relative" style={{ zIndex: 2 }}>
                {t("nav_contact")}
              </span>
            </Link>
          </motion.li>
        </ul>

        {/* Action Controls (Volunteer CTA + Language + Dark Mode + Mobile Hamburger) */}
        <div className="flex items-center" style={{ gap: "0.6rem" }}>
          {/* Volunteer CTA with rich hover micro-interaction */}
          <motion.div
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:block"
          >
            <Link
              className="volunteer-cta-nav btn no-underline px-4 py-2 rounded-full font-bold flex items-center relative overflow-hidden"
              href="/Login"
              style={{
                background: "linear-gradient(135deg, #014976 0%, #02639e 100%)",
                color: "#ffffff",
                border: "1px solid rgba(251, 174, 66, 0.4)",
                boxShadow: "0 4px 14px rgba(1, 73, 118, 0.25)",
                gap: "0.45rem",
                transition: "box-shadow 0.25s ease, border-color 0.25s ease"
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex text-warning"
              >
                <FaUserPlus />
              </motion.span>
              <span>{t("nav_volunteer", "خليك صنعاوي")}</span>
            </Link>
          </motion.div>

          {/* Language Switcher */}
          <LanguageSwitch />

          {/* Sliding Glass Dark Mode Switch */}
          <Switch />

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden btn btn-outline-secondary p-2 rounded-[0.3rem] border-0"
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Navigation"
            style={{ color: "var(--main-color)", fontSize: "1.25rem" }}
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Framer Motion) */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden mobile-drawer px-6 py-4"
            style={{
              background: "var(--card-color)",
              borderTop: "1px solid var(--card-border)",
              overflow: "hidden"
            }}
          >
            <ul className="list-none p-0 mb-4 mb-0 flex flex-col" style={{ gap: "0.75rem" }}>
              <li>
                <Link
                  className={`nav-link-mobile block py-2 ${isActive("/") ? "active" : ""}`}
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link-mobile block py-2 ${isActive("/About") ? "active" : ""}`}
                  href="/About"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link-mobile block py-2 ${isActive("/Contact") ? "active" : ""}`}
                  href="/Contact"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {t("nav_contact")}
                </Link>
              </li>
              <li className="sm:hidden pt-2">
                <Link
                  className="btn btn-primary-custom w-full flex items-center justify-center no-underline py-2 rounded-full font-bold"
                  href="/Login"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <FaUserPlus className="me-2" />
                  <span>{t("nav_volunteer")}</span>
                </Link>
              </li>

              {committee && committee.length > 0 && (
                <li className="pt-2 border-t border-[#dee2e6]">
                  <span className="text-muted text-[80%] font-bold block mb-2">
                    {t("nav_committees")}:
                  </span>
                  <div className="flex flex-wrap gap-2" style={{ gap: "0.5rem" }}>
                    {committee.map((item, index) => (
                      <Link
                        key={index}
                        href={`/committee/${item.name}`}
                        className="badge-committee-mobile no-underline px-4 py-1 rounded-full"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
