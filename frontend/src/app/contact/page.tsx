"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHandHoldingHeart, FaPaperPlane, FaCheckCircle, FaUniversity } from "react-icons/fa";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "", subject: "استفسار عام" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            أبوابنا مفتوحة دائماً
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-1 mb-4">
            تواصل معنا أو ساهم في قوافل الخير
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            يسعدنا استقبال مقترحاتكم، استفساراتكم حول التطوع، أو التبرع المباشر لصالح قوافل عيش وملح ووقف النخيل بمحافظة الإسماعيلية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Details & Donation Bank Accounts */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 space-y-6">
              <h2 className="text-xl font-bold text-white mb-2">بيانات الاتصال بمقر فرع الإسماعيلية</h2>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">العنوان الرئيسي للفرع</h4>
                    <p className="text-slate-400 text-xs mt-0.5">شارع شبين الكوم، بجوار مجمع المحاكم، مدينة الإسماعيلية، مصر</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">الخط الساخن وأرقام التواصل</h4>
                    <p className="text-slate-400 text-xs mt-0.5 font-mono" dir="ltr">16563 / +20 64 321 0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">البريد الإلكتروني المباشر</h4>
                    <p className="text-slate-400 text-xs mt-0.5 font-mono">ismailia@lifemakers.org</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Donation Channels Box */}
            <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-400/30 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center text-xl">
                  <FaUniversity />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">قنوات التبرع والمساهمة الرسمية</h3>
                  <p className="text-slate-400 text-xs">حسابات بنكية موثقة خاضعة لرقابة وزارة التضامن</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">البنك الأهلي المصري (حساب التبرعات):</span>
                  <span className="font-mono font-bold text-amber-300">1000-5555-8888</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">بنك مصر (حساب وقف النخيل):</span>
                  <span className="font-mono font-bold text-amber-300">2222-7777-9999</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">فوري (كود الخدمة السريعة):</span>
                  <span className="font-mono font-bold text-sky-400">Fawry: 9811</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">إنستاباي (InstaPay Username):</span>
                  <span className="font-mono font-bold text-emerald-400">lifemakers.ismailia@instapay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
            <h2 className="text-xl font-bold text-white mb-2">أرسل لنا رسالة أو استفسار</h2>
            <p className="text-slate-400 text-xs mb-6">
              فريق المنسقين بفرع الإسماعيلية يتواصل معكم في غضون 24 ساعة عمل.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                <FaCheckCircle className="text-4xl text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">تم إرسال رسالتكم بنجاح!</h3>
                <p className="text-slate-300 text-xs">
                  شكراً لتواصلك مع صناع الحياة. سيقوم منسق الفرع بمراجعة رسالتك والتواصل معك قريباً.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">الاسم بالكامل</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: محمد أحمد"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">رقم الهاتف أو الواتساب</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+20 100 000 0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">موضوع الرسالة</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="استفسار عام">استفسار عام عن الفرع</option>
                    <option value="التطوع والقوافل">سؤال عن مواعيد القوافل والتطوع</option>
                    <option value="التبرعات والمساهمة">تبرع لمشروع وقف النخيل أو عيش وملح</option>
                    <option value="شراكات ومؤسسات">طلب شراكة مع جامعة أو شركة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">نص الرسالة</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب تفاصيل استفسارك هنا..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  <span>إرسال الرسالة إلى الفرع</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
