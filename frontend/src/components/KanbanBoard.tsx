"use client";

import React, { useState } from "react";
import { KanbanCandidate } from "@/types";
import { INITIAL_CANDIDATES } from "@/data/mockVolunteer";
import VolunteerAvatar from "@/components/VolunteerAvatar";
import { FaUserPlus, FaComments, FaGraduationCap, FaCheckCircle, FaUserCheck, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const STAGES: { key: KanbanCandidate["stage"]; title: string; color: string; icon: React.ReactNode }[] = [
  { key: "new", title: "استمارات جديدة", color: "border-sky-500/40 bg-sky-500/10 text-sky-400", icon: <FaUserPlus /> },
  { key: "interview", title: "تحديد المقابلة", color: "border-amber-500/40 bg-amber-500/10 text-amber-400", icon: <FaComments /> },
  { key: "training", title: "التدريب التأسيسي", color: "border-purple-500/40 bg-purple-500/10 text-purple-400", icon: <FaGraduationCap /> },
  { key: "assigned", title: "تسكين باللجنة", color: "border-blue-500/40 bg-blue-500/10 text-blue-400", icon: <FaCheckCircle /> },
  { key: "active", title: "متطوع نشط معتمد", color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400", icon: <FaUserCheck /> },
];

export default function KanbanBoard() {
  const [candidates, setCandidates] = useState<KanbanCandidate[]>(INITIAL_CANDIDATES);
  const [searchTerm, setSearchTerm] = useState("");

  const moveCandidate = (id: string, nextStage: KanbanCandidate["stage"]) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, stage: nextStage } : c))
    );
  };

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.includes(searchTerm) ||
      c.committee.includes(searchTerm) ||
      c.center.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <span>مسار استقبال وتسكين المتطوعين الجدد</span>
          </h2>
          <p className="text-slate-400 text-xs mt-0.5">
            تتبع مراحل المتطوعين الجدد من تقديم الاستمارة وحتى التسكين النهائي بلجان فرع الإسماعيلية.
          </p>
        </div>
        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="بحث بالاسم أو اللجنة أو المركز..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {STAGES.map((stage) => {
          const stageCandidates = filteredCandidates.filter((c) => c.stage === stage.key);
          return (
            <div
              key={stage.key}
              className="rounded-2xl bg-slate-900/80 border border-slate-800 p-3.5 flex flex-col min-h-[500px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className={`p-1.5 rounded-lg border text-sm ${stage.color}`}>
                    {stage.icon}
                  </span>
                  <span className="font-bold text-sm text-white">{stage.title}</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-300 text-xs font-bold flex items-center justify-center">
                  {stageCandidates.length}
                </span>
              </div>

              {/* Cards Container */}
              <div className="space-y-3 flex-1 overflow-y-auto">
                {stageCandidates.map((cand) => (
                  <div
                    key={cand.id}
                    className="rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400/50 p-3.5 shadow-md transition-all hover:scale-[1.01]"
                  >
                    <div className="flex items-start gap-3 mb-2.5">
                      <VolunteerAvatar name={cand.name} size={38} animate="hover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white text-sm truncate">{cand.name}</h4>
                        <p className="text-[11px] text-amber-300/90 font-medium truncate">
                          {cand.committee}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 text-[11px] text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-slate-500" />
                        <span>{cand.center}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaPhoneAlt className="text-slate-500" />
                        <span>{cand.phone}</span>
                      </div>
                      {cand.notes && (
                        <p className="p-1.5 rounded bg-slate-900/80 text-slate-300 text-[10px] italic border border-slate-800">
                          {cand.notes}
                        </p>
                      )}
                    </div>

                    {/* Stage Transition Buttons */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
                      <span className="text-slate-500 text-[10px]">{cand.appliedAt}</span>
                      <select
                        value={cand.stage}
                        onChange={(e) => moveCandidate(cand.id, e.target.value as KanbanCandidate["stage"])}
                        className="bg-slate-900 border border-slate-700 text-amber-300 rounded px-1.5 py-0.5 text-[10px] focus:outline-none"
                      >
                        <option value="new">جديد</option>
                        <option value="interview">مقابلة</option>
                        <option value="training">تدريب</option>
                        <option value="assigned">تسكين</option>
                        <option value="active">معتمد</option>
                      </select>
                    </div>
                  </div>
                ))}

                {stageCandidates.length === 0 && (
                  <div className="text-center py-10 text-slate-600 text-xs italic">
                    لا يوجد مرشحون بهذه المرحلة
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
