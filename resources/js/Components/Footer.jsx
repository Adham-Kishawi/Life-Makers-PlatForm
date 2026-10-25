import React from "react";
import { Link } from "@inertiajs/react";
import { useLanguage } from "../Context/LanguageContext";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHandHoldingHeart,
  FaHeart
} from "react-icons/fa";

export default function Footer() {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="main-footer text-white pt-12" style={{ background: "linear-gradient(180deg, #013758 0%, #01243a 100%)" }}>
      <div className="container pb-4">
        <div className="row g-4 justify-content-between">
          {/* Column 1: Brand & Bio */}
          <div className="col-12 col-md-4 mb-4">
            <Link href="/" className="inline-block mb-4">
              <img src="/images/logowhite.png" alt="Life Makers" style={{ width: "135px", height: "auto" }} />
            </Link>
            <p className="text-light text-[80%]" style={{ lineHeight: "1.8", opacity: 0.9 }}>
              <strong>{t("footer_about_title")}</strong>
              <br />
              {t("footer_about_desc")}
            </p>
            <div className="flex items-center mt-4" style={{ gap: "0.75rem" }}>
              <a
                href="https://www.facebook.com/share/1Yc9JA2JEw/"
                target="_blank"
                rel="noreferrer"
                className="social-btn flex items-center justify-center rounded-full no-underline"
                style={{ width: "38px", height: "38px", background: "rgba(255,255,255,0.18)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
                aria-label="Facebook"
              >
                <FaFacebookF size={15} color="#ffffff" />
              </a>
              <a
                href="https://www.instagram.com/life_makers_ismailia"
                target="_blank"
                rel="noreferrer"
                className="social-btn flex items-center justify-center rounded-full no-underline"
                style={{ width: "38px", height: "38px", background: "rgba(255,255,255,0.18)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.25)" }}
                aria-label="Instagram"
              >
                <FaInstagram size={16} color="#ffffff" />
              </a>
              <a
                href="https://wa.me/2010107092613"
                target="_blank"
                rel="noreferrer"
                className="social-btn flex items-center justify-center rounded-full no-underline"
                style={{ width: "38px", height: "38px", background: "rgba(255,255,255,0.18)", color: "#25D366", border: "1px solid rgba(255,255,255,0.25)" }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={17} color="#25D366" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-6 col-md-2 mb-4">
            <h6 className="font-bold mb-4 text-warning">{t("footer_quick_links")}</h6>
            <ul className="list-none p-0 mb-4 flex flex-col text-[80%]" style={{ gap: "0.6rem" }}>
              <li>
                <Link href="/" className="footer-nav-link no-underline" style={{ color: "#f1f5f9" }}>
                  <span style={{ color: "#f1f5f9" }}>{t("nav_home")}</span>
                </Link>
              </li>
              <li>
                <Link href="/About" className="footer-nav-link no-underline" style={{ color: "#f1f5f9" }}>
                  <span style={{ color: "#f1f5f9" }}>{t("nav_about")}</span>
                </Link>
              </li>
              <li>
                <Link href="/Login" className="footer-nav-link no-underline" style={{ color: "#f1f5f9" }}>
                  <span style={{ color: "#f1f5f9" }}>{t("nav_volunteer")}</span>
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="footer-nav-link no-underline" style={{ color: "#f1f5f9" }}>
                  <span style={{ color: "#f1f5f9" }}>{t("nav_contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Donations */}
          <div className="col-6 col-md-3 mb-4">
            <h6 className="font-bold mb-4 text-warning">{t("footer_donation_title")}</h6>
            <ul className="list-none p-0 mb-4 flex flex-col text-[80%]" style={{ gap: "0.6rem" }}>
              <li>
                <a
                  href="https://donate.lifemakers.org/Home/indexAr_Gov/15"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-nav-link no-underline flex items-center"
                  style={{ gap: "0.5rem", color: "#f1f5f9" }}
                >
                  <FaHandHoldingHeart className="text-warning shrink-0" size={15} />
                  <span style={{ color: "#f1f5f9" }}>{t("footer_donation_online")}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://lifemakers.org/%d8%aa%d8%a8%d8%b1%d8%b9-%d8%b9%d8%a8%d8%b1-%d8%a7%d9%84%d8%a8%d9%86%d9%88%d9%83/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-nav-link no-underline flex items-center"
                  style={{ gap: "0.5rem", color: "#f1f5f9" }}
                >
                  <FaHandHoldingHeart className="text-warning shrink-0" size={15} />
                  <span style={{ color: "#f1f5f9" }}>{t("footer_donation_bank")}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2010107092613"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-nav-link no-underline flex items-center"
                  style={{ gap: "0.5rem", color: "#f1f5f9" }}
                >
                  <FaWhatsapp className="text-success shrink-0" size={16} />
                  <span style={{ color: "#f1f5f9" }}>{t("footer_donation_kind")}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="col-12 col-md-3 mb-4">
            <h6 className="font-bold mb-4 text-warning">{t("footer_contact_title")}</h6>
            <div className="text-[80%] flex flex-col" style={{ gap: "0.6rem" }}>
              <div className="flex items-center" style={{ gap: "0.5rem" }}>
                <FaPhone className="text-warning shrink-0" />
                <span>{t("footer_donation_hotline")}</span>
              </div>
              <div className="flex items-center" style={{ gap: "0.5rem" }}>
                <FaEnvelope className="text-warning shrink-0" />
                <span>info@ismailia-makers.org</span>
              </div>
              <div className="flex items-start" style={{ gap: "0.5rem" }}>
                <FaMapMarkerAlt className="text-warning mt-1 shrink-0" />
                <span>{t("footer_address")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 mt-4 border-t border-[#dee2e6]" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-[80%] mb-0 text-light" style={{ opacity: 0.8 }}>
            {t("footer_rights")} • <FaHeart className="text-danger mx-1" size={11} /> {t("footer_motto")}
          </p>
        </div>
      </div>
    </footer>
  );
}
