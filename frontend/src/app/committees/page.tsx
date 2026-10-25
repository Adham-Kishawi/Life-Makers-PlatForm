"use client";

import React, { useState } from "react";
import Link from "next/link";
import TiltCard from "@/components/TiltCard";
import { COMMITTEES } from "@/data/committees";
import { FaArrowLeft, FaFilter } from "react-icons/fa";

export default function CommitteesPage() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="py-16 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-4">
            لجان وفرق العمل الميداني
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            استعراض كافة لجان صناع الحياة بالإسماعيلية (13 لجنة)
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            تعرف على تفاصيل كل ملف من ملفات العمل التنموي، الفعاليات الميدانية، والأنشطة المسجلة بالصور، واختر لجنتك للتطوع وصناعة الأثر.
          </p>
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {COMMITTEES.map((comm) => (
            <TiltCard key={comm.id}>
              <Link
                href={`/committees/${comm.slug}`}
                className="group block h-full rounded-2xl bg-slate-900/90 border border-slate-800 p-6 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 transition-all flex flex-col justify-between"
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
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                    {comm.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>{comm.activities.length} أنشطة مصورة</span>
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
      </div>
    </div>
  );
}
