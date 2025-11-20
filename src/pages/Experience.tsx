import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { EXPERIENCES } from "@/data/experiences";
import { EDUCATION } from "@/data/education";
import EducationCard from "@/components/Education/EducationCard";

export default function Experience() {
  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center text-3xl md:text-4xl font-extrabold mb-12"
        >
          <span className="block leading-[42px] md:leading-[40px]">
            I TAKE <span className="text-yellow-400">🏆</span> PRIDE
          </span>
          <span className="block leading-[42px] md:leading-[56px]">
            IN MY <span className="text-lime-400">EXPERIENCE</span>
          </span>
        </motion.h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <ExperienceCard exp={exp} />

              </motion.div>
            ))}
          </div>

          <div className=" relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-lg flex flex-col gap-5">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <EducationCard edu={edu} />
              </motion.div>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
