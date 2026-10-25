"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth, UserRole } from "@/context/AuthContext";
import VolunteerAvatar from "@/components/VolunteerAvatar";
import { COMMITTEES } from "@/data/committees";
import { FaUser, FaLock, FaIdCard, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaCalendarAlt, FaBriefcase, FaCamera, FaArrowLeft, FaArrowRight, FaHandsHelping, FaCheckCircle, FaSyncAlt } from "react-icons/fa";

const CENTERS = [
  "مركز الإسماعيلية (الرئيسي)",
  "مركز التل الكبير",
  "مركز أبو صوير",
  "مركز القنطرة (شرق وغرب)",
  "مركز فايد",
];

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [isFlipped, setIsFlipped] = useState(false); // false: Login, true: Register
  const [step, setStep] = useState(1);

  // Login inputs
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("volunteer");

  // Multi-step Registration inputs (13 fields as in original app)
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [center, setCenter] = useState(CENTERS[0]);
  const [committee, setCommittee] = useState(COMMITTEES[0].name);
  const [qualification, setQualification] = useState("");
  const [job, setJob] = useState("");
  const [address, setAddress] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhotoPreview(url);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(loginId || "volunteer@lifemakers.org", loginPassword, selectedRole);
    if (selectedRole === "super_admin" || selectedRole === "committee_manager") {
      router.push("/crm");
    } else {
      router.push("/volunteer");
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name || "متطوع جديد", password, "volunteer");
    router.push("/volunteer");
  };

  return (
    <div className="py-16 bg-[#0b1120] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Flip Toggle Button */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <button
            onClick={() => {
              setIsFlipped(false);
              setStep(1);
            }}
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              !isFlipped
                ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            تسجيل دخول المتطوعين
          </button>
          <button
            onClick={() => setIsFlipped(true)}
            className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              isFlipped
                ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20"
                : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
            }`}
          >
            استمارة تطوع جديدة (خليك صنعاوي)
          </button>
        </div>

        {/* 3D Flip Card Container */}
        <div
          style={{ perspective: "1400px" }}
          className="w-full"
        >
          <div
            className="rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 transition-transform duration-700 relative overflow-hidden"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(0deg)" : "rotateY(0deg)",
            }}
          >
            {/* FRONT: LOGIN */}
            {!isFlipped ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center text-2xl shadow-md">
                    <FaUser />
                  </div>
                  <h2 className="text-2xl font-black text-white">بوابة المتطوعين وصناع الأمل</h2>
                  <p className="text-slate-400 text-xs mt-1">
                    أدخل رقمك القومي أو بريدك الإلكتروني للدخول إلى حسابك ومتابعة الساعات الميدانية
                  </p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">
                      الرقم القومي (14 رقم) أو البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="29901011900000 أو volunteer@lifemakers.org"
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        className="w-full pl-4 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                      <FaIdCard className="absolute right-3.5 top-3.5 text-slate-500 text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-bold mb-1">كلمة المرور</label>
                    <div className="relative">
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className="w-full pl-4 pr-10 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                      <FaLock className="absolute right-3.5 top-3.5 text-slate-500 text-sm" />
                    </div>
                  </div>

                  {/* Role Selector for testing */}
                  <div>
                    <label className="block text-slate-400 font-bold mb-1">الدور المطلوب لتسجيل الدخول:</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedRole("volunteer")}
                        className={`py-2 rounded-lg border text-center text-[11px] font-bold transition-all ${
                          selectedRole === "volunteer"
                            ? "bg-amber-400 text-slate-950 border-amber-400"
                            : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                        }`}
                      >
                        المتطوع العادي
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedRole("committee_manager")}
                        className={`py-2 rounded-lg border text-center text-[11px] font-bold transition-all ${
                          selectedRole === "committee_manager"
                            ? "bg-amber-400 text-slate-950 border-amber-400"
                            : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                        }`}
                      >
                        مسؤول الملف
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedRole("super_admin")}
                        className={`py-2 rounded-lg border text-center text-[11px] font-bold transition-all ${
                          selectedRole === "super_admin"
                            ? "bg-amber-400 text-slate-950 border-amber-400"
                            : "bg-slate-950 text-slate-400 border-slate-800 hover:text-white"
                        }`}
                      >
                        الأدمن
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-xl active:scale-95 transition-all mt-3"
                  >
                    تسجيل الدخول إلى حسابي
                  </button>
                </form>

                <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
                  <span>ليس لديك حساب؟ </span>
                  <button
                    onClick={() => setIsFlipped(true)}
                    className="font-bold text-amber-400 hover:underline"
                  >
                    انضم كمتطوع جديد الآن
                  </button>
                </div>
              </div>
            ) : (
              /* BACK: MULTI-STEP REGISTRATION WIZARD (13 FIELDS) */
              <div className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-black text-white">استمارة التطوع بصناع الحياة</h2>
                  <p className="text-slate-400 text-xs mt-1">
                    المرحلة {step} من 3:{" "}
                    {step === 1
                      ? "البيانات الشخصية الأساسية"
                      : step === 2
                      ? "التسكين الجغرافي واللجني والمؤهل"
                      : "الصورة الشخصية وكلمة المرور"}
                  </p>
                </div>

                {/* Step Indicators */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-amber-400" />
                  <div className={`flex-1 h-1.5 rounded-full ${step >= 2 ? "bg-amber-400" : "bg-slate-800"}`} />
                  <div className={`flex-1 h-1.5 rounded-full ${step >= 3 ? "bg-amber-400" : "bg-slate-800"}`} />
                </div>

                {/* STEP 1: PERSONAL INFO */}
                {step === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">الاسم الرباعي</label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: أحمد محمد إبراهيم حسن"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">الرقم القومي (14 رقم بطاقة)</label>
                      <input
                        type="text"
                        required
                        maxLength={14}
                        placeholder="29901011900000"
                        value={nationalId}
                        onChange={(e) => setNationalId(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-bold mb-1">رقم الهاتف / واتساب</label>
                        <input
                          type="tel"
                          required
                          placeholder="01012345678"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-bold mb-1">البريد الإلكتروني</label>
                        <input
                          type="email"
                          required
                          placeholder="volunteer@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">تاريخ الميلاد</label>
                      <input
                        type="date"
                        required
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 mt-2"
                    >
                      <span>المتابعة للمرحلة الثانية</span>
                      <FaArrowLeft />
                    </button>
                  </div>
                )}

                {/* STEP 2: ASSIGNMENT & QUALIFICATIONS */}
                {step === 2 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-300 font-bold mb-1">مركز التطوع بالإسماعيلية</label>
                      <select
                        value={center}
                        onChange={(e) => setCenter(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      >
                        {CENTERS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">اللجنة التخصصية المفضلة (من لجان الـ 13)</label>
                      <select
                        value={committee}
                        onChange={(e) => setCommittee(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      >
                        {COMMITTEES.map((comm) => (
                          <option key={comm.id} value={comm.name}>
                            {comm.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-bold mb-1">المؤهل الدراسي</label>
                        <input
                          type="text"
                          placeholder="مثال: بكالوريوس هندسة / طالب"
                          value={qualification}
                          onChange={(e) => setQualification(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-bold mb-1">الوظيفة الحالية</label>
                        <input
                          type="text"
                          placeholder="مثال: مهندس برمجيات / طالب"
                          value={job}
                          onChange={(e) => setJob(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">المدينة / الحي</label>
                      <input
                        type="text"
                        placeholder="مثال: حي الشيخ زايد - الإسماعيلية"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">العنوان بالتفصيل</label>
                      <input
                        type="text"
                        placeholder="الشارع، رقم العمارة، علامة مميزة"
                        value={detailedAddress}
                        onChange={(e) => setDetailedAddress(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                      >
                        السابق
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm"
                      >
                        المتابعة للمرحلة الأخيرة
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: PHOTO & PASSWORDS */}
                {step === 3 && (
                  <form onSubmit={handleRegisterSubmit} className="space-y-4 text-xs">
                    {/* Photo Upload with Blobatar Fallback Preview */}
                    <div>
                      <label className="block text-slate-300 font-bold mb-2">
                        الصورة الشخصية (اختيارية)
                      </label>
                      <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                        <VolunteerAvatar
                          name={name || "متطوع جديد"}
                          personal_photo={photoPreview}
                          size={64}
                          animate="hover"
                        />
                        <div className="flex-1">
                          <label className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs cursor-pointer inline-block">
                            اختر صورة من جهازك
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handlePhotoUpload}
                              className="hidden"
                            />
                          </label>
                          <p className="text-[11px] text-slate-400 mt-1">
                            إذا لم تختر صورة، سيتم تلقائياً تفعيل شخصيتك الرمزية التفاعلية.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">كلمة المرور (8 خانات على الأقل)</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-bold mb-1">تأكيد كلمة المرور</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-5 py-3 rounded-xl bg-slate-800 text-slate-300 font-bold text-xs"
                      >
                        السابق
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-xl"
                      >
                        إرسال الاستمارة وبدء رحلة التطوع
                      </button>
                    </div>
                  </form>
                )}

                <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
                  <span>مسجل بالفعل؟ </span>
                  <button
                    onClick={() => {
                      setIsFlipped(false);
                      setStep(1);
                    }}
                    className="font-bold text-amber-400 hover:underline"
                  >
                    تسجيل الدخول للمتطوعين
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
