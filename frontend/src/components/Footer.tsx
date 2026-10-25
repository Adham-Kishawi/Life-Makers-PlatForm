"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  FaHeart,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHandHoldingHeart,
  FaUserPlus,
} from "react-icons/fa";

export default function Footer() {
  const { isRtl, t } = useLanguage();

  return (
    <footer
      className="text-white pt-16 pb-8 border-t border-slate-800 transition-colors"
      style={{
        background: "linear-gradient(180deg, #070e1c 0%, #030712 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Authentic Volunteer Field Photo Banner in Footer */}
        <div className="mb-14 pb-12 border-b border-slate-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-900/60 p-5 sm:p-6 rounded-2xl border border-slate-800 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-right">
              <img
                src="/images/footer.jpg"
                alt="فريق وقادة متطوعي صناع الحياة بالإسماعيلية"
                className="w-36 h-28 sm:w-44 sm:h-32 rounded-xl object-cover border-2 border-amber-400/50 shadow-2xl shrink-0"
              />
              <div className="pt-1">
                <span className="inline-block text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5">
                  {isRtl ? "سواعد الإسماعيلية في قلب الميدان" : "Ismailia Youth in the Field"}
                </span>
                <h3 className="text-white font-extrabold text-base sm:text-lg mb-2">
                  {isRtl
                    ? "عائلة واحدة.. نبني الإنسان ونصنع الأمل في كل قرية"
                    : "One Family.. Building People & Making Hope in Every Village"}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                  {isRtl
                    ? "لقطة توثيقية حية تجمع شباب وقادة صناع الحياة فرع الإسماعيلية أثناء إحدى القوافل التنموية والإغاثية الميدانية. مكانك دائماً محفوظ بيننا."
                    : "Candid moment documenting Life Makers Ismailia volunteers during a field developmental convoy across the governorate."}
                </p>
              </div>
            </div>

            <Link
              href="/login"
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-xl shrink-0 flex items-center gap-2"
            >
              <FaUserPlus className="text-sm" />
              <span>{t("nav_volunteer", "خليك صنعاوي")}</span>
            </Link>
          </div>
        </div>

        {/* 4 Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & Logo */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <img
                src="/images/logowhite.png"
                alt="صناع الحياة مصر - فرع الإسماعيلية"
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
              <strong className="block text-white font-bold mb-1">
                {isRtl ? "مؤسسة صناع الحياة مصر • فرع الإسماعيلية" : "Life Makers Egypt • Ismailia Branch"}
              </strong>
              {t("footer_desc")}
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1Yc9JA2JEw/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={15} />
              </a>
              <a
                href="https://www.instagram.com/life_makers_ismailia"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://wa.me/2010107092613"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-emerald-600 text-[#25D366] hover:text-white flex items-center justify-center transition-all border border-white/20 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={17} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className={`font-bold text-amber-400 text-sm sm:text-base mb-5 border-amber-400 ${isRtl ? "border-r-2 pr-3" : "border-l-2 pl-3"}`}>
              {isRtl ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-slate-300 hover:text-amber-400 transition-colors">
                  {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link href="/committees" className="text-slate-300 hover:text-amber-400 transition-colors">
                  {t("nav_committees")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-amber-400 transition-colors">
                  {t("nav_about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-amber-400 transition-colors">
                  {t("nav_contact")}
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-slate-300 hover:text-amber-400 transition-colors">
                  {t("nav_volunteer")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Donation Channels */}
          <div>
            <h4 className={`font-bold text-amber-400 text-sm sm:text-base mb-5 border-amber-400 ${isRtl ? "border-r-2 pr-3" : "border-l-2 pl-3"}`}>
              {isRtl ? "طرق وقنوات التبرع المباشرة" : "Direct Donation Channels"}
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://donate.lifemakers.org/Home/indexAr_Gov/15"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <FaHandHoldingHeart className="text-amber-400 shrink-0 text-base" />
                  <span>{isRtl ? "التبرع الإلكتروني عبر المنصة الرسمية" : "Online Donation via Official Portal"}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://lifemakers.org/%d8%aa%d8%a8%d8%b1%d8%b9-%d8%b9%d8%a8%d8%b1-%d8%a7%d9%84%d8%a8%d9%86%d9%88%d9%83/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <FaHandHoldingHeart className="text-amber-400 shrink-0 text-base" />
                  <span>{isRtl ? "حسابات البنوك (الأهلي وبنك مصر)" : "Bank Accounts (NBE & Banque Misr)"}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2010107092613"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <FaWhatsapp className="text-emerald-400 shrink-0 text-base" />
                  <span>{isRtl ? "التبرع العيني والقوافل (واتساب مباشر)" : "In-Kind / Major Convoys (WhatsApp)"}</span>
                </a>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-300 font-bold text-xs">
                  <FaPhoneAlt className="text-amber-400 shrink-0 text-xs" />
                  <span>{isRtl ? "الخط الساخن الموحد للتبرع:" : "Donation Hotline:"} 16563</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Ismailia HQ */}
          <div>
            <h4 className={`font-bold text-amber-400 text-sm sm:text-base mb-5 border-amber-400 ${isRtl ? "border-r-2 pr-3" : "border-l-2 pl-3"}`}>
              {isRtl ? "مقر فرع الإسماعيلية والتواصل" : "Ismailia Branch HQ"}
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-amber-400 mt-1 shrink-0" />
                <span className="leading-relaxed">
                  {isRtl
                    ? "شارع شبين الكوم، بجوار مجمع المحاكم، مدينة الإسماعيلية، مصر"
                    : "Shebin El-Kom St, next to Courts Complex, Ismailia, Egypt"}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-amber-400 shrink-0" />
                <span dir="ltr">+20 64 321 0000 / 16563</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="text-amber-400 shrink-0" />
                <span>ismailia@lifemakers.org</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{t("footer_rights")}</p>
          <p className="flex items-center gap-1.5 font-semibold text-slate-300">
            <span>{isRtl ? "شباب.. أمل.. نماء" : "Youth.. Hope.. Growth"}</span>
            <span>•</span>
            <span>{isRtl ? "صُنع بـ" : "Made with"}</span>
            <FaHeart className="text-rose-500 text-[11px]" />
            <span>{isRtl ? "بأيدي شباب وصناع أمل الإسماعيلية" : "by Youth & Hope Makers of Ismailia"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
