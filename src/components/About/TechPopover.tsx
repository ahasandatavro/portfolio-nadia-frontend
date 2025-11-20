import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";

type TechPopoverProps = {
  label: string;
  items: { name: string; icon: IconType }[]; 
  align?: "left" | "center" | "right"; 
};

export default function TechPopover({ label, items = [], align = "center" }: TechPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverVariants = {
    hidden: { opacity: 0, y: 8, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: "easeOut" } },
  };



  return (
    <span
      className="relative"
      onMouseEnter={() => {
        setIsOpen(true);

      }}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        type="button"
        className="font-semibold text-lime-300 underline underline-offset-4 focus:outline-none"
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`${label} technologies`}
      >
        {label}
      </button>

      {/* Popover */}
      <motion.div
        variants={popoverVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className={`absolute bottom-[150%] -left-[120%] z-30 mt-3 w-[400px] rounded-xl border border-white/15
          bg-white/10 backdrop-blur-md shadow-lg shadow-black/20
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"} transition-all duration-300`}
        role="dialog"
      >
        <div className="p-3 border-b border-white/10 text-sm text-white/80">
          {label} Stack Highlights
        </div>

        <div className="p-3 grid grid-cols-3 gap-3">
          {items.map((it) => (
            <div
              key={it.name}
              className="flex items-center gap-2 rounded-md bg-white/5 border border-white/10 px-2 py-2 hover:bg-white/10 transition"
              title={it.name}
            >
              <it.icon className="text-xl shrink-0 text-white/90" />
              <span className="text-xs text-white/90">{it.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </span>
  );
}
