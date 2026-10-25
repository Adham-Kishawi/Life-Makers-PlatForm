"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CommitteeActivity } from "@/types";

interface Props {
  activities: CommitteeActivity[];
}

export default function CommitteeTimeline({ activities }: Props) {
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 75%"],
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  if (!activities || activities.length === 0) {
    return (
      <div className="text-center py-16 p-8 rounded-2xl bg-slate-900 border border-dashed border-slate-800 text-slate-400">
        <p className="text-base font-bold text-white mb-2">لا توجد فعاليات معروضة حالياً في هذا الملف</p>
        <p className="text-xs">يتم تحديث الفعاليات بشكل مستمر من قِبل مسؤولي اللجنة الميدانية.</p>
      </div>
    );
  }

  return (
    <div ref={timelineRef} className="timeline-wrapper relative my-8">
      {/* Central Background Track */}
      <div className="timeline-track" />

      {/* Dynamic Animated Scroll Line */}
      <motion.div className="timeline-progress" style={{ height: progressHeight }} />

      {/* Alternating Zigzag Rows */}
      <div className="space-y-16">
        {activities.map((item, index) => {
          const isEven = index % 2 === 0;
          const nodeNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-between"
            >
              {/* Central Glowing Node Dot */}
              <div className="timeline-node-dot shadow-lg">
                <span>{nodeNumber}</span>
              </div>

              {/* Connector Beam (Desktop) */}
              {isEven ? (
                <div className="timeline-connector-right hidden md:block" />
              ) : (
                <div className="timeline-connector-left hidden md:block" />
              )}

              {/* Column 1 (Right in RTL for Even) */}
              {isEven ? (
                <motion.div
                  className="w-full md:w-[45%] pr-12 md:pr-0 md:ml-auto"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:border-amber-400/50 transition-all group">
                    <div className="overflow-hidden h-56 sm:h-64 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="hidden md:block w-[45%]" />
              )}

              {/* Column 2 (Left in RTL for Odd) */}
              {!isEven ? (
                <motion.div
                  className="w-full md:w-[45%] pr-12 md:pr-0 md:mr-auto"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl hover:border-amber-400/50 transition-all group">
                    <div className="overflow-hidden h-56 sm:h-64 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="hidden md:block w-[45%]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
