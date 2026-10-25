import React from "react";
import StreakTracker from "@/components/StreakTracker";

export const metadata = {
  title: "بوابة المتطوعين وسجل الإنجاز الميداني | صناع الحياة الإسماعيلية",
  description: "متابعة نشاطك التطوعي المستمر، الأوسمة والشارات المكتسبة، سجل ساعات التطوع المعتمدة، وتحميل شهادة التقدير الإلكترونية بالـ QR.",
};

export default function VolunteerDashboardPage() {
  return (
    <div className="py-12 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
            بوابة المتطوعين وصناع الأمل
          </span>
          <h1 className="text-3xl font-black text-white mt-1">
            لوحة إنجازات وتفاعل صانع الحياة
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            سجل حي يوثق نشاطك المستمر، ساعات النزول الميداني المعتمدة في القوافل، وأوسمة الشرف التي تخلد أثرك بمحافظة الإسماعيلية.
          </p>
        </div>

        <StreakTracker />
      </div>
    </div>
  );
}
