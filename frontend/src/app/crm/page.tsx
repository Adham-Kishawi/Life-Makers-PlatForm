"use client";

import React, { useState } from "react";
import KanbanBoard from "@/components/KanbanBoard";
import { FaUserPlus, FaUsers, FaHandsHelping, FaFileAlt, FaCheckDouble, FaBriefcase, FaHandHoldingHeart } from "react-icons/fa";

export default function CRMPage() {
  const [activeTab, setActiveTab] = useState<"kanban" | "hours" | "donors">("kanban");

  return (
    <div className="py-12 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              بوابة المنسقين وإدارة الفرع • فرع الإسماعيلية
            </span>
            <h1 className="text-3xl font-black text-white mt-1">
              مركز إدارة شؤون المتطوعين، الشركاء، وساعات التطوع
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              إدارة دورة حياة المتطوع الكاملة: من تقديم الاستمارة مروراً بالمقابلة والتأهيل وحتى اعتماد الساعات الميدانية.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("kanban")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "kanban"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaUsers />
              <span>مسار القبول (Kanban)</span>
            </button>

            <button
              onClick={() => setActiveTab("hours")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "hours"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaCheckDouble />
              <span>اعتماد الساعات الميدانية</span>
            </button>

            <button
              onClick={() => setActiveTab("donors")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                activeTab === "donors"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FaHandHoldingHeart />
              <span>الشركاء والمتبرعين</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Kanban Pipeline */}
        {activeTab === "kanban" && <KanbanBoard />}

        {/* Tab 2: Hours Verification */}
        {activeTab === "hours" && (
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">طلبات اعتماد ساعات النزول الميداني</h3>
                <p className="text-slate-400 text-xs mt-1">
                  مراجعة الساعات المسجلة من قادة القوافل وإصدار نقاط التفاعل وتحديث استريك المتطوع.
                </p>
              </div>
              <button
                onClick={() => alert("تم اعتماد كافة الساعات بنجاح وتحديث حسابات المتطوعين.")}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs"
              >
                اعتماد الكل بضغطة زر
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-3">المتطوع</th>
                    <th className="p-3">الفعالية / القافلة</th>
                    <th className="p-3">اللجنة</th>
                    <th className="p-3">الساعات</th>
                    <th className="p-3">التاريخ</th>
                    <th className="p-3">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr className="hover:bg-slate-950/40">
                    <td className="p-3 font-bold text-white">أحمد كشاوي</td>
                    <td className="p-3">توزيع كراتين عيش وملح بالتل الكبير</td>
                    <td className="p-3 text-amber-300">الإغاثة والرعاية الصحية</td>
                    <td className="p-3 font-bold text-emerald-400">6 ساعات</td>
                    <td className="p-3 text-slate-400">2026-10-24</td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-bold">
                        معتمد ✓
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-950/40">
                    <td className="p-3 font-bold text-white">سارة محمود</td>
                    <td className="p-3">تغطية فوتوغرافية ومونتاج ريلز أحسن صاحب</td>
                    <td className="p-3 text-amber-300">الميديا والإعلام</td>
                    <td className="p-3 font-bold text-emerald-400">5 ساعات</td>
                    <td className="p-3 text-slate-400">2026-10-22</td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-bold">
                        معتمد ✓
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-950/40">
                    <td className="p-3 font-bold text-white">كريم عبد الرحمن</td>
                    <td className="p-3">طرق أبواب وفحص كارت الخدمات المتكاملة</td>
                    <td className="p-3 text-amber-300">حملة هنوصلك</td>
                    <td className="p-3 font-bold text-amber-400">7 ساعات</td>
                    <td className="p-3 text-slate-400">2026-10-20</td>
                    <td className="p-3">
                      <button
                        onClick={(e) => {
                          const btn = e.currentTarget;
                          btn.innerText = "تم الاعتماد ✓";
                          btn.className = "px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-bold";
                        }}
                        className="px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold"
                      >
                        اعتماد الآن
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Donors & Partners CRM */}
        {activeTab === "donors" && (
          <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-white">سجل الشركاء والمتبرعين والمؤسسات الداعمة</h3>
                <p className="text-slate-400 text-xs mt-1">
                  متابعة الشراكات الاستراتيجية مع التحالف الوطني، الجامعات، والشركات الداعمة لمشاريع وقف النخيل والإغاثة.
                </p>
              </div>
              <button
                onClick={() => alert("إضافة جهة داعمة أو شريك جديد...")}
                className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs"
              >
                + إضافة شريك جديد
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
                <span className="text-xs text-amber-400 font-bold">شريك حكومي / تحالف</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">التحالف الوطني للعمل الأهلي التنموي</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  تمويل مشترك ومظلة وطنية لتنسيق قوافل ستر وعافية وقوافل الإغاثة بمراكز الإسماعيلية.
                </p>
                <div className="text-xs text-emerald-400 font-bold">حالة الشراكة: نشطة ومستمرة</div>
              </div>

              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
                <span className="text-xs text-sky-400 font-bold">شريك أكاديمي</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">جامعة قناة السويس</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  بروتوكول تعاون لاستقطاب المتطوعين وتوفير القوافل الطبية المشتركة لكليات الطب والتمريض.
                </p>
                <div className="text-xs text-emerald-400 font-bold">حالة الشراكة: نشطة (تجديد سنوي)</div>
              </div>

              <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5">
                <span className="text-xs text-purple-400 font-bold">جهة مانحة / قطاع خاص</span>
                <h4 className="text-base font-bold text-white mt-1 mb-2">مجموعة شركات تنمية سيناء والقناة</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  دعم مشروعات وقف النخيل وشراء فسائل النخيل المجدول للأسر المعيلة بالقنطرة وفايد.
                </p>
                <div className="text-xs text-emerald-400 font-bold">حالة الدعم: مساهمة موسمية دورية</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
