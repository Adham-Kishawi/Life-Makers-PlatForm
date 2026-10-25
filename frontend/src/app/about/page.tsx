import React from "react";
import Link from "next/link";
import { FaShieldAlt, FaHeart, FaHandsHelping, FaHistory, FaBullseye, FaEye, FaAward } from "react-icons/fa";

export const metadata = {
  title: "عن المؤسسة وتاريخنا | صناع الحياة مصر - فرع الإسماعيلية",
  description: "نبذة عن مؤسسة صناع الحياة مصر، تأسيسها، أهدافها، ورسالتها في تمكين الشباب وتنمية القرى والتحالف الوطني للعمل الأهلي التنموي.",
};

export default function AboutPage() {
  return (
    <div className="py-16 bg-slate-950 min-h-screen space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-4">
            إحنا مين؟ • قصة أثر مستمر منذ 2004
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-6">
            مؤسسة أهلية وطنية.. تبني الإنسان وتصنع المستقبل
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            مؤسسة صناع الحياة مصر هي مؤسسة أهلية وطنية غير حكومية وغير هادفة للربح، مسجلة مركزياً بوزارة التضامن الاجتماعي برقم 839 لسنة 2018، وتعد عضواً مؤسساً في التحالف الوطني للعمل الأهلي التنموي.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center text-2xl mb-6">
              <FaEye />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">رؤيتنا (Our Vision)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              مجتمع مصري متكافل قادر على استثمار طاقات شبابه لتحقيق التنمية الإنسانية والمستدامة، تتوفر فيه مقومات الحياة الكريمة لكل مواطن، وتزول فيه الفجوة بين الاحتياج والإنتاج.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/30 flex items-center justify-center text-2xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-black text-white mb-3">رسالتنا (Our Mission)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              حشد طاقات الشباب وتأهيلهم كقادة للتغيير الإيجابي، والعمل على مشروعات تنموية وإنسانية كبرى (التعليم، الصحة، سبل العيش المستدامة، ودمج ذوي الإعاقة) بالتعاون مع الدولة والتحالف الوطني.
            </p>
          </div>
        </div>

        {/* National Alliance Partnership Box */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-950/80 via-slate-900 to-slate-950 border border-sky-500/30 p-8 sm:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center text-4xl flex-shrink-0">
            <FaShieldAlt />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">شراكة وطنية استراتيجية</span>
            <h3 className="text-2xl font-black text-white mt-1 mb-2">عضو مؤسس في التحالف الوطني للعمل الأهلي التنموي</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              تشارك مؤسسة صناع الحياة مصر بقوة في المبادرات الرئاسية والقومية تحت مظلة التحالف، وتلعب دوراً محورياً في قوافل الإغاثة وقوافل ستر وعافية، وحملة هنوصلك لحصر وتيسير استخراج كارت الخدمات المتكاملة لذوي الإعاقة في كافة قرى مصر.
            </p>
          </div>
        </div>

        {/* Ismailia Branch Highlights */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-10">
          <h2 className="text-2xl font-black text-white mb-6 text-center">
            فرع محافظة الإسماعيلية.. قلعة شبابية وقوافل لا تنقطع
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-amber-400 mb-2">5 مراكز رئيسية</div>
              <p className="text-slate-400 text-xs">الإسماعيلية الرئيسي، التل الكبير، أبو صوير، القنطرة، وفايد</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-sky-400 mb-2">13 لجنة تخصصية</div>
              <p className="text-slate-400 text-xs">تغطي كافة الاحتياجات الميدانية، التدريبية، والإعلامية</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <div className="text-3xl font-black text-emerald-400 mb-2">+5,000 متطوع</div>
              <p className="text-slate-400 text-xs">شباب واعي ومؤهل يقود المبادرات الميدانية في القرى</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center pt-8">
          <h3 className="text-2xl font-bold text-white mb-4">هل أنت جاهز لتكون جزءاً من هذه المسيرة؟</h3>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 hover:shadow-xl hover:shadow-amber-500/25 transition-all text-sm"
          >
            <FaHandsHelping className="text-lg" />
            <span>سجل الآن وانضم لأسرة صناع الحياة بالإسماعيلية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
