/* eslint-disable jsx-a11y/no-redundant-roles */
// src/components/Experience/ExperienceCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/types/experience";
import { PiSparkleFill } from "react-icons/pi";

type Props = { exp: Experience };

export default function ExperienceCard({ exp }: Props) {
  const accent = exp.color || "#22c55e"; // emerald-500 fallback

  return (
    <motion.article
      whileHover={{ scale: 1.01, y: -2 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative rounded-2xl border border-white/10 bg-[#0b0b0b] p-6 shadow-lg"
    >
      {/* Accent marker */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-1/2 translate-y-1/2 w-[3px] rounded-r"
        style={{ background: accent }}
      />

   

      <div className="ml-2 md:ml-4">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
          {exp.role}
        </h3>

        <p className="mt-1 text-sm text-white/70">
          <span className="font-medium text-white/80">{exp.company}</span>
          <span className="px-2">•</span>
          <span>{exp.period}</span>
        </p>

        {exp.location ? (
          <p className="text-xs text-white/50 mt-0.5">{exp.location}</p>
        ) : null}

        {Array.isArray(exp.points) && exp.points.length > 0 && (
          <ul
            role="list"
            className="mt-4 space-y-2 text-white/85 marker:text-white/40 list-disc pl-5"
          >
            {exp.points.map((p, i) => (
              <li key={i} className="text-sm leading-relaxed">
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
