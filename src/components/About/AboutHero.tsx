/* eslint-disable react/self-closing-comp */
import React from "react";
import { FaUpwork } from "react-icons/fa6";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiPrisma, SiDocker, SiNginx
} from "react-icons/si";
import jupitar from "@/assets/gifs/Jupitor.gif";
import TechPopover from "./TechPopover";

export default function AboutHero() {
  const FRONT_END = [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Redux", icon: SiRedux },
  ];

  const BACK_END = [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "Docker", icon: SiDocker },
    { name: "Nginx", icon: SiNginx },
  ];

  return (
    <section className="relative z-20 w-full bg-transparent text-black mt-16 lg:mt-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 sm:py-16 flex flex-col sm:items-center gap-6">
        {/* FOLLOW ME */}
        <div className="flex flex-col lg:items-start items-center gap-4 w-full justify-start">
          <a
            href="https://www.upwork.com/freelancers/~013cc71063b6d9a7af?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex h-[200px] w-[200px] items-center justify-center rounded-full border border-white text-white hover:bg-white/5 hover:text-[#14A800] transition group"
            aria-label="Upwork"
          >
            <img src={jupitar} alt="jupitar" className="absolute w-[80%] opacity-20 z-10" />
            <FaUpwork className="text-[100px] relative z-20" />

            {/* Tooltip */}
            <span className="absolute   lg:left-1/2 lg:-translate-x-1/2  w-[100px] flex items-center justify-center bottom-[-5px] lg:bottom-[-60px] bg-white/10 backdrop-blur-md text-white text-sm font-medium px-3 py-1 rounded-lg border border-white/20 ">
              Click here
              {/* Line connector */}
              <span className=" hidden lg:block lg:absolute bottom-full left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/30"></span>
            </span>
          </a>
        </div>

        {/* ABOUT TEXT */}
        <div className="max-w-3xl text-center px-6 leading-relaxed">
          <p className="mt-4 text-gray-100 text-base sm:text-lg">
            Hi, I’m <span className="font-semibold text-lime-300">Nadia T.</span>, a Senior Software Engineer
            with over <span className="font-semibold text-lime-300">5+ years of hands-on experience</span> in
            developing real-time, production-grade applications across multiple companies. Since 2023,
            I’ve been working as a full-time freelancer, successfully completing long-term projects while
            maintaining strong coding standards and best practices.
          </p>

          <p className="mt-4 text-gray-100 text-base sm:text-lg">
            I specialize in transforming ideas into modern, high-performing digital products. My expertise
            spans both{" "}
            <TechPopover label="Front-End" items={FRONT_END} align="center" /> and{" "}
            <TechPopover label="Back-End" items={BACK_END} align="center" />{" "}
            development, crafting responsive, user-focused interfaces powered by scalable, efficient logic.
          </p>

          <p className="mt-4 text-gray-100 text-base sm:text-lg">
            Adaptable and results-driven, I’m comfortable working with diverse tech stacks and project scopes.
            Whether collaborating with cross-functional teams or working independently, I stay proactive,
            deadline-focused, and fully committed to delivering clean, impactful code every time.
          </p>
        </div>
      </div>
    </section>
  );
}
