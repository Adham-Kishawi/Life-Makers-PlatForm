"use client";

import React from "react";
import Link from "next/link";
import HeroScrollVideo from "@/components/HeroScrollVideo";
import InitiativesSlider from "@/components/InitiativesSlider";
import TiltCard from "@/components/TiltCard";
import { COMMITTEES } from "@/data/committees";
import { CAMPAIGNS } from "@/data/campaigns";
import { useLanguage } from "@/context/LanguageContext";
import { FaHandsHelping, FaArrowLeft } from "react-icons/fa";

export default function HomePage() {
  const { isRtl, t } = useLanguage();

  return (
    <div className="space-y-0 bg-[#0b1120]">
      {/* 1. Flagship Hero Section: 3D Video Scrubbed with GSAP ScrollTrigger */}
      <HeroScrollVideo />

      {/* 2. The 13 Specialized Committees & Portfolios */}
      <section id="committees" className="py-24 bg-slate-950 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              {isRtl ? "مجالات العمل والتطوع بالإسماعيلية" : "Volunteering & Impact Domains"}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t("committees_title")}
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {t("committees_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMMITTEES.map((comm) => (
              <TiltCard key={comm.id}>
                <Link
                  href={`/committees/${comm.slug}`}
                  className="group block h-full rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-amber-400/60 hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-amber-400/50 flex items-center justify-center text-amber-400 mb-5 transition-colors">
                      <div
                        className="w-7 h-7"
                        dangerouslySetInnerHTML={{ __html: comm.icon }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                      {comm.name}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                      {comm.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-amber-400">
                    <span>{t("committees_explore_card")}</span>
                    <FaArrowLeft className={`group-hover:-translate-x-1 transition-transform ${!isRtl ? "rotate-180" : ""}`} />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/committees"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 hover:border-amber-400 transition-all text-sm"
            >
              <span>{t("committees_view_all")}</span>
              <FaArrowLeft className={!isRtl ? "rotate-180" : ""} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Strategic Initiatives & Convoys Slider */}
      <InitiativesSlider />

      {/* 4. Strategic Field Campaigns with Impact Progress */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                {t("campaigns_kicker")}
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                {t("campaigns_title")}
              </h2>
            </div>
            <Link
              href="/contact"
              className="mt-4 md:mt-0 text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-2"
            >
              <span>{t("campaigns_donate_link")}</span>
              <FaArrowLeft className={!isRtl ? "rotate-180" : ""} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CAMPAIGNS.map((camp) => (
              <div
                key={camp.id}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:border-amber-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url("${camp.image}")` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-md">
                      {camp.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{camp.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-6 font-light">
                      {camp.description}
                    </p>

                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">{t("campaigns_families_label")}</span>
                        <span className="font-bold text-white">
                          {camp.currentFamilies.toLocaleString()} / {camp.targetFamilies.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-amber-400 rounded-full"
                          style={{
                            width: `${Math.min(100, (camp.currentFamilies / camp.targetFamilies) * 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">
                    {camp.volunteersRegistered} {t("campaigns_volunteers_registered")}
                  </span>
                  <Link
                    href="/login"
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950"
                  >
                    {t("campaigns_join_btn")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Clean Volunteer Community Invitation */}
      <section className="py-24 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
            {t("join_kicker")}
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
            {t("join_title")}
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {t("join_subtitle")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/login"
              className="px-8 py-4 rounded-xl font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-xl transition-all text-sm flex items-center gap-2.5"
            >
              <FaHandsHelping className="text-lg" />
              <span>{t("join_cta_btn")}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
