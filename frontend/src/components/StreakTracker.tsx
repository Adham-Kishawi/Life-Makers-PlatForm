"use client";

import React, { useState, useEffect } from "react";
import { Volunteer, Badge, ActivityLog } from "@/types";
import { INITIAL_VOLUNTEER, RECENT_ACTIVITIES } from "@/data/mockVolunteer";
import VolunteerAvatar from "@/components/VolunteerAvatar";
import { FaFire, FaTrophy, FaAward, FaCalendarCheck, FaClock, FaCheckCircle, FaStar, FaQrcode } from "react-icons/fa";

import { useAuth } from "@/context/AuthContext";

export default function StreakTracker() {
  const { user } = useAuth();
  const [volunteer, setVolunteer] = useState<Volunteer>(INITIAL_VOLUNTEER);
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  // Sync with auth user if logged in
  useEffect(() => {
    if (user) {
      setVolunteer((prev) => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        nationalId: user.nationalId || prev.nationalId,
        committee: user.committee || prev.committee,
        center: user.center || prev.center,
        personal_photo: user.personal_photo || prev.personal_photo,
      }));
    }
  }, [user]);

  const handleDailyCheckIn = () => {
    if (checkedInToday) return;

    setVolunteer((prev) => ({
      ...prev,
      streakCount: prev.streakCount + 1,
      totalPoints: prev.totalPoints + 25,
      lastActivityDate: new Date().toISOString().split("T")[0],
    }));
    setCheckedInToday(true);
  };

  return (
    <div className="space-y-8">
      {/* 1. Header Profile & Streak Hero Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border border-amber-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Volunteer Avatar & Info */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-right gap-5">
            <VolunteerAvatar
              name={volunteer.name}
              personal_photo={volunteer.personal_photo}
              size={96}
              animate="hover"
              className="ring-4 ring-amber-400/30"
            />
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                  {volunteer.level}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                  {volunteer.committee}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300">
                  {volunteer.center}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                أهلاً بك، {volunteer.name}
              </h1>
              <p className="text-slate-400 text-sm mt-1">
                الرقم القومي: {volunteer.nationalId} • تاريخ الانضمام: 2024
              </p>
            </div>
          </div>

          {/* Gamified Streak Counter Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-950/70 p-4 sm:p-5 rounded-2xl border border-amber-400/40 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-slate-950 shadow-lg shadow-orange-500/30 animate-pulse">
                <FaFire className="text-3xl" />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 tracking-tight">
                    {volunteer.streakCount}
                  </span>
                  <span className="text-sm font-bold text-amber-200">يوماً من العطاء المستمر</span>
                </div>
                <div className="text-xs text-slate-400">
                  أطول سلسلة نشاط متواصل: {volunteer.longestStreak} يوماً 🔥
                </div>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-r border-slate-700/80 pt-3 sm:pt-0 sm:pr-4 flex flex-col gap-2 w-full sm:w-auto">
              <button
                onClick={handleDailyCheckIn}
                disabled={checkedInToday}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  checkedInToday
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default"
                    : "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-500/30 active:scale-95"
                }`}
              >
                {checkedInToday ? (
                  <>
                    <FaCheckCircle />
                    <span>تم تأكيد حضورك اليوم!</span>
                  </>
                ) : (
                  <>
                    <FaCalendarCheck />
                    <span>تأكيد نشاط اليوم (+25 نقطة)</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800">
          <div className="bg-slate-950/40 rounded-xl p-3 border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <FaStar className="text-amber-400" />
              <span>إجمالي النقاط</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">{volunteer.totalPoints.toLocaleString()}</div>
          </div>

          <div className="bg-slate-950/40 rounded-xl p-3 border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <FaClock className="text-sky-400" />
              <span>ساعات التطوع المعتمدة</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">{volunteer.totalHours} ساعة</div>
          </div>

          <div className="bg-slate-950/40 rounded-xl p-3 border border-slate-800">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <FaTrophy className="text-amber-400" />
              <span>الأوسمة المكتسبة</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-white">
              {volunteer.badges.filter((b) => b.unlocked).length} من {volunteer.badges.length}
            </div>
          </div>

          <div className="bg-slate-950/40 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                <FaAward className="text-emerald-400" />
                <span>شهادة التطوع</span>
              </div>
              <div className="text-xs text-emerald-400 font-bold">معتمدة بالـ QR</div>
            </div>
            <button
              onClick={() => setShowCertModal(true)}
              className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
              title="عرض وتنزيل الشهادة"
            >
              <FaQrcode className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Badges & Medals Showcase */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <FaAward className="text-amber-400" />
              <span>شريط الأوسمة والشارات الميدانية</span>
            </h2>
            <p className="text-slate-400 text-xs mt-0.5">
              كلما زاد تفاعلك واستريك مشاركتك، تفتح أوسمة شرف جديدة ترفع رتبتك في صناع الحياة.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {volunteer.badges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-2xl p-5 border transition-all ${
                badge.unlocked
                  ? "bg-slate-900/90 border-amber-400/40 shadow-lg shadow-amber-500/5 hover:border-amber-400"
                  : "bg-slate-950/50 border-slate-800 opacity-60 grayscale hover:grayscale-0"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{badge.icon}</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    badge.unlocked
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/30"
                      : "bg-slate-800 text-slate-500"
                  }`}
                >
                  {badge.unlocked ? "مكتسب" : "مقفل"}
                </span>
              </div>
              <h3 className="font-bold text-white text-base mb-1">{badge.titleAr}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{badge.description}</p>
              {badge.unlockedAt && (
                <div className="mt-3 text-[11px] text-amber-300/80 flex items-center gap-1">
                  <span>تم التتويج: {badge.unlockedAt}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Verified Field Activity Log */}
      <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <FaCalendarCheck className="text-sky-400" />
          <span>سجل المشاركات الميدانية المعتمدة</span>
        </h2>
        <div className="divide-y divide-slate-800">
          {RECENT_ACTIVITIES.map((act) => (
            <div key={act.id} className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-bold">
                  {act.hours}h
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">{act.title}</h4>
                  <p className="text-slate-400 text-xs mt-0.5">
                    {act.committee} • {act.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md">
                  +{act.points} نقطة
                </span>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md flex items-center gap-1">
                  <FaCheckCircle className="text-[10px]" />
                  <span>معتمد</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Digital Certificate Modal */}
      {showCertModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-400/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setShowCertModal(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>

            <div className="text-center border-4 border-double border-amber-400/60 p-6 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900">
              <div className="flex items-center justify-center gap-3 mb-2">
                <img src="/images/logo.png" alt="Life Makers" className="h-12 object-contain" />
              </div>
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">
                Life Makers Foundation Ismailia Branch
              </p>
              <h3 className="text-2xl font-black text-white mb-4">شهادة تقدير وتطوع معتمدة</h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                تشهد مؤسسة صناع الحياة مصر - فرع الإسماعيلية بأن المتطوع:
              </p>
              <p className="text-2xl font-bold text-amber-300 my-2">{volunteer.name}</p>
              <p className="text-slate-400 text-xs mb-4">الرقم القومي: {volunteer.nationalId}</p>

              <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed mb-6">
                قد أتم بنجاح <span className="font-bold text-white">{volunteer.totalHours} ساعة تطوع ميداني</span> معتمدة في قوافل الإغاثة والمبادرات المجتمعية بمحافظة الإسماعيلية لعام 2026، وأظهر كفاءة وروحاً قيادية ملهمة.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                <div className="text-right">
                  <p className="font-bold text-white">إدارة التطوع والموارد البشرية</p>
                  <p>صناع الحياة - مصر</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-white p-1 rounded-lg">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://lifemakers.ismailia/verify/${volunteer.id}`}
                      alt="Verification QR"
                      className="w-full h-full"
                    />
                  </div>
                  <span className="text-[10px] text-amber-400 mt-1 font-mono">LM-2026-CERT</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowCertModal(false)}
                className="px-5 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-bold"
              >
                إغلاق
              </button>
              <button
                onClick={() => alert("جاري تجهيز وتحميل ملف الشهادة PDF عالية الدقة...")}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-lg hover:shadow-amber-500/30 font-bold text-sm"
              >
                تحميل الشهادة (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
