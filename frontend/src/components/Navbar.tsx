"use client";

import React, { useState } from "react";
import Link from "next/link";
import VolunteerAvatar from "@/components/VolunteerAvatar";
import LanguageSwitch from "@/components/LanguageSwitch";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useAuth } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import { FaBars, FaTimes, FaSignOutAlt, FaChevronDown, FaUserPlus } from "react-icons/fa";

export default function Navbar() {
  const { user, isLoggedIn, logout } = useAuth();
  const { t, isRtl } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1120]/95 backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="صناع الحياة"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block text-right">
              <span className="block font-black text-white text-base tracking-wide leading-tight">
                {isRtl ? "صناع الحياة مصر" : "Life Makers Egypt"}
              </span>
              <span className="block text-xs font-semibold text-amber-400">
                {isRtl ? "فرع الإسماعيلية" : "Ismailia Branch"}
              </span>
            </div>
          </Link>

          {/* Public Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-bold">
            <Link href="/" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t("nav_home")}
            </Link>
            <Link href="/committees" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t("nav_committees")}
            </Link>
            <Link href="/about" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t("nav_about")}
            </Link>
            <Link href="/contact" className="text-slate-200 hover:text-amber-400 transition-colors">
              {t("nav_contact")}
            </Link>
          </div>

          {/* Controls: Language + Theme + Dynamic Auth */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Capsule */}
            <LanguageSwitch />

            {/* Day / Night Theme Switch */}
            <ThemeSwitch />

            {/* Auth State: Single Action Button */}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-md flex items-center gap-2 cursor-pointer ms-1"
              >
                <FaUserPlus className="text-sm" />
                <span>{t("nav_volunteer")}</span>
              </Link>
            ) : (
              <div className="relative ms-1">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 transition-all text-right"
                >
                  <VolunteerAvatar
                    name={user?.name || "متطوع"}
                    personal_photo={user?.personal_photo}
                    size={34}
                    animate="hover"
                  />
                  <div className="text-right">
                    <span className="block text-xs font-bold text-white leading-tight">
                      {user?.name}
                    </span>
                    <span className="block text-[10px] text-amber-400">
                      {user?.role === "super_admin"
                        ? (isRtl ? "مدير المنصة" : "Super Admin")
                        : user?.role === "committee_manager"
                        ? (isRtl ? "مسؤول ملف" : "Committee Lead")
                        : (isRtl ? "متطوع نشط" : "Active Volunteer")}
                    </span>
                  </div>
                  <FaChevronDown className="text-xs text-slate-400 mr-1" />
                </button>

                {/* Account Dropdown */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50 text-right text-xs">
                    <div className="px-4 py-2 border-b border-slate-800">
                      <p className="font-bold text-white">{user?.name}</p>
                      <p className="text-slate-400 text-[11px] truncate">{user?.email}</p>
                    </div>

                    <Link
                      href="/volunteer"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-amber-400"
                    >
                      {t("nav_dashboard")}
                    </Link>

                    {(user?.role === "super_admin" || user?.role === "committee_manager") && (
                      <Link
                        href="/crm"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-sky-400"
                      >
                        {t("nav_admin")}
                      </Link>
                    )}

                    <button
                      onClick={() => {
                        logout();
                        setDropdownOpen(false);
                      }}
                      className="w-full text-right px-4 py-2.5 text-rose-400 hover:bg-rose-500/10 flex items-center justify-between border-t border-slate-800"
                    >
                      <span>{t("nav_logout")}</span>
                      <FaSignOutAlt />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu & Quick Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeSwitch />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-800"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-bold text-slate-400">{t("nav_lang")}</span>
            <LanguageSwitch />
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-bold border-b border-slate-800"
          >
            {t("nav_home")}
          </Link>
          <Link
            href="/committees"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-bold border-b border-slate-800"
          >
            {t("nav_committees")}
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-bold border-b border-slate-800"
          >
            {t("nav_about")}
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-white font-bold"
          >
            {t("nav_contact")}
          </Link>

          <div className="pt-2 border-t border-slate-800">
            {!isLoggedIn ? (
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 text-center rounded-xl font-extrabold bg-amber-400 text-slate-950 text-sm shadow-md"
              >
                <FaUserPlus className="text-sm" />
                <span>{t("nav_volunteer")}</span>
              </Link>
            ) : (
              <div className="space-y-2">
                <Link
                  href="/volunteer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm"
                >
                  {t("nav_dashboard")} ({user?.name})
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full py-2 text-center text-rose-400 font-bold text-xs"
                >
                  {t("nav_logout")}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
