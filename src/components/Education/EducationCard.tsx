// src/components/Education/EducationCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Education } from "@/types/education";
import { PiGraduationCapFill } from "react-icons/pi";

export default function EducationCard({ edu }: { edu: Education }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-lg"
    >
      {/* Icon */}
      <PiGraduationCapFill
        className="absolute -left-3 top-2 text-blue-400"
        size={24}
      />

      <div className="ml-4">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
          {edu.degree}
        </h3>
        <p className="text-sm text-white/70">{edu.institution}</p>
        <p className="text-sm text-white/60 mt-1">
          {edu.result} • {edu.period}
        </p>
      </div>
    </motion.div>
  );
}
