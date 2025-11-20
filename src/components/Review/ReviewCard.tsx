import React from "react";
import { motion } from "framer-motion";
import { Review } from "@/types/review";
import { FaStar } from "react-icons/fa"; 

type Props = { r: Review };

export default function ReviewCard({ r }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col justify-between z-20 group relative rounded-2xl w-full border border-white/10 bg-[#0f1a0f] backdrop-blur-sm text-white p-5 shadow-lg overflow-hidden"
    >
      {/* gradient hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* top content */}
      <div className="review_container">
        {r.title && (
          <h3 className="text-lg font-semibold tracking-tight">{r.title}</h3>
        )}

        {/* rating stars */}
        <div className="mt-3 flex items-center gap-1 text-lime-400">
          {Array.from({ length: r.rating }).map((_, i) => (
            <FaStar key={i} size={16} />
          ))}
        </div>

        <p className="mt-3 text-white/80 leading-relaxed">{r.quote}</p>
      </div>

      {/* author + footer */}
      <div className="flex items-end justify-between mt-4">
        <div className="flex flex-col">
          <div className="text-sm text-white/70">{r.author}</div>
          {r.source && (
            <div className="mt-1 text-xs text-white/60">{r.source}</div>
          )}
        </div>
        <div className="text-white/30 text-xs tracking-wider">
          {r.source?.toLowerCase() || "client"}
        </div>
      </div>
    </motion.article>
  );
}
