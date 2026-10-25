import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMMITTEES } from "@/data/committees";
import CommitteeTimeline from "@/components/CommitteeTimeline";
import { FaArrowRight, FaHandsHelping, FaCamera } from "react-icons/fa";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMMITTEES.map((c) => ({
    slug: c.slug,
  }));
}

export default async function CommitteeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const committee = COMMITTEES.find((c) => c.slug === slug);

  if (!committee) {
    notFound();
  }

  return (
    <div className="py-16 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/committees"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-amber-400 transition-colors"
          >
            <FaArrowRight />
            <span>العودة لكافة اللجان والملفات (13)</span>
          </Link>
        </div>

        {/* Committee Header Banner */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-700 text-amber-400 flex items-center justify-center mb-6">
              <div
                className="w-8 h-8"
                dangerouslySetInnerHTML={{ __html: committee.icon }}
              />
            </div>

            <span className="inline-block text-xs font-bold text-amber-400 mb-2">
              ملف تخصصي معتمد • فرع الإسماعيلية
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {committee.name}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              {committee.description}
            </p>

            <Link
              href={`/login?committee=${encodeURIComponent(committee.name)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all text-sm"
            >
              <FaHandsHelping className="text-lg" />
              <span>انضم كمتطوع في لجنة {committee.name}</span>
            </Link>
          </div>
        </div>

        {/* Section Title */}
        <div className="pt-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div>
              <h2 className="text-2xl font-black text-white flex items-center gap-2">
                <FaCamera className="text-amber-400" />
                <span>الأنشطة والفعاليات الميدانية المصورة</span>
              </h2>
              <p className="text-slate-400 text-xs mt-1">
                توثيق حي لمبادرات وفعاليات المتطوعين على أرض الواقع بمحافظة الإسماعيلية.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-300 bg-slate-900 px-4 py-1.5 rounded-full border border-slate-800">
              {committee.activities.length} فعالية مسجلة
            </span>
          </div>

          {/* Zigzag Timeline with central line & animations */}
          <CommitteeTimeline activities={committee.activities} />
        </div>
      </div>
    </div>
  );
}
