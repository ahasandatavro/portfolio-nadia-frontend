import React from "react";
import {
    IconCode,
    IconServer,
    IconDatabase,
    IconDeviceMobile,
    IconBrandFigma,
    IconGitFork
} from "@tabler/icons-react";
import EarthGif from "../assets/gifs/Earth.gif";
import { Skill } from "@/types/skill";
import SkillCards from "@/components/Skill/SkillCards";


const skills: Skill[] = [
    {
        title: "Front-end Development",
        desc: "Expert in HTML5, CSS3, ES6+, React, Vue.js.",
        icon: <IconCode size={28} />,
    },
    {
        title: "Back-end Development",
        desc: "Node.js, Express, Python, Django.",
        icon: <IconServer size={28} />,
        featured: true,
    },
    {
        title: "Database Management",
        desc: "MySQL, MongoDB, PostgreSQL.",
        icon: <IconDatabase size={28} />,
    },
    {
        title: "Version Control",
        desc: "Git, GitHub, Bitbucket.",
        icon: <IconGitFork size={28} />,
    },
    {
        title: "Responsive Design",
        desc: "Beautiful, functional UI across devices.",
        icon: <IconDeviceMobile size={28} />,
    },
    {
        title: "UI/UX Design",
        desc: "Wireframing, prototyping, user flows.",
        icon: <IconBrandFigma size={28} />,
    },
];

export default function Skills() {
    return (
        <main className="relative bg-black overflow-hidden">
            {/* Animated Earth Background */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <img
                    src={EarthGif}
                    alt="Earth Background"
                    className="lg:w-4/12 animate-pulse opacity-30"
                />
            </div>

            {/* Content */}
            <section className="relative z-20 mx-auto max-w-7xl px-6 lg:px-10 py-16 text-white">
                <h2 className="text-center font-extrabold text-3xl sm:text-4xl md:text-4xl">
                    <span className="block leading-[40px]">
                        I SPECIALIZE IN A
                    </span>
                    <span className="block leading-[60px]">
                        RANGE OF <span className="inline-flex items-center gap-2">💪 SKILLS</span>
                    </span>
                </h2>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        skills.map((s, i) => (
                            <SkillCards key={i} skill={s} />
                        ))
                    }
                </div>
            </section>
        </main>
    );
}
