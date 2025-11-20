import React from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/images/profile/profile.png";


import {
    SiMongodb,
    SiExpress,
    SiReact,
    SiNodedotjs
} from "react-icons/si";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Welcome() {
    return (
        <section className="relative w-full bg-black text-white flex flex-col justify-center pt-10 lg:pt-20">
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 py-16  w-full">
                {/* HEADLINE */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="font-sans font-extrabold text-[36px] sm:text-[52px] md:text-[60px] lg:text-[65px] leading-[1.2] tracking-tight max-w-3xl"
                >
                    CODING WITH <span className="align-middle"> </span>
                    <br className="hidden sm:block" />
                    🔥PASSION, CREATING
                    <br className="hidden sm:block" />
                    WITH PURPOSE
                </motion.h1>

                {/* SUBTEXT */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="mt-10 flex items-center gap-6 text-white/90"
                >
                    <div className="flex items-center justify-center gap-6 text-5xl sm:text-6xl">
                        <SiMongodb className="text-green-500 hover:scale-110 transition-transform duration-200" title="MongoDB" />
                        <SiExpress className="text-gray-400 hover:scale-110 transition-transform duration-200" title="Express.js" />
                        <SiReact className="text-cyan-400 hover:scale-110 transition-transform duration-200 animate-spin-slow" title="React" />
                        <SiNodedotjs className="text-green-400 hover:scale-110 transition-transform duration-200" title="Node.js" />
                    </div>
                </motion.div>

            </div>

            {/* ABSOLUTE IMAGE (Perfectly Centered Right Side, Larger & Rotated) */}
            <div className=" flex items-center justify-center md:absolute top-1/2 right-[10%]  translate-y-[10%] z-30 pointer-events-none">
                {/* Purple Background Card */}
                <div className="absolute top-4 left-4 w-[320px] sm:w-[400px] md:w-[50vh] h-[40vh] md:h-[50vh] bg-lime-400 rounded-3xl rotate-[20deg]" />

                {/* Profile Image */}
                <img
                    src={profileImage}
                    alt="Profile"
                    className="relative z-10 w-[320px] sm:w-[400px] md:w-[35vw] lg:w-[50vh] h-[40vh] lg:h-[50vh] rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.6)] object-cover rotate-[10deg]"
                />
            </div>
        </section>
    );
}
