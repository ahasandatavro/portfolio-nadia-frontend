import React from "react";
import { motion } from "framer-motion";
import { FooterCTAType } from "@/types/footer";
import profileImage from "../assets/images/profile/profile.png";

export default function FooterCTA({
  avatarSrc = profileImage,
  ctaHref = "https://www.upwork.com/freelancers/~013cc71063b6d9a7af?mp_source=share",
  titleTop = "LET'S WORK",
  titleBottom = "TOGETHER",
}: FooterCTAType) {
  return (
    <footer className="relative w-full z-20 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-28 flex flex-col items-center justify-center text-center">
        {/* Title */}
        <div className="relative">
          <h2 className="font-extrabold tracking-tight leading-none text-5xl md:text-7xl">
            {titleTop}
          </h2>

          <div className="mt-2 flex items-center justify-center gap-3">
            {/* Avatar */}
            <span className="inline-flex lg:h-14 lg:w-14 h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/70">
              <img
                src={avatarSrc}
                alt="Profile Avatar"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </span>

            <h2 className="font-extrabold tracking-tight leading-none text-5xl md:text-7xl">
              {titleBottom}
            </h2>
          </div>
        </div>

        {/* CTA button */}
        <motion.a
          href={ctaHref}
          aria-label="Contact Me"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-16 inline-flex h-24 w-24 items-center justify-center rounded-full bg-lime-400 text-black shadow-[0_0_40px_rgba(190,255,0,0.35)]"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 18L18 6M18 6H9M18 6v9"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_55%,rgba(190,255,0,0.10),transparent_60%)]" />
    </footer>
  );
}
