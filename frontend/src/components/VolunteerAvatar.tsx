"use client";

import React from "react";
import { Blobatar } from "@blobatar/react";
import "blobatar/motion.css";

interface VolunteerAvatarProps {
  name: string;
  personal_photo?: string | null;
  size?: number;
  className?: string;
  animate?: "hover" | "always";
}

export default function VolunteerAvatar({
  name,
  personal_photo,
  size = 56,
  className = "",
  animate = "hover",
}: VolunteerAvatarProps) {
  if (personal_photo && personal_photo.trim().length > 0) {
    return (
      <img
        src={personal_photo}
        alt={name}
        className={`rounded-full object-cover border-2 border-amber-400 shadow-md ${className}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    );
  }

  // Consistent slug for Blobatar from name
  const cleanName = (name || "volunteer").trim().toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full overflow-hidden bg-slate-900 border-2 border-amber-400/80 shadow-lg ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      title={`صانع الحياة: ${name}`}
    >
      <Blobatar name={cleanName} animate={animate} />
    </div>
  );
}
