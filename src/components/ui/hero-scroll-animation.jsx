"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef, forwardRef } from "react";
import { TextScramble } from "./text-scramble";
import Magnetic from "./magnetic";

const Section1 = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.section
            style={{
                scale: typeof window !== 'undefined' && window.innerWidth >= 768 ? scale : 1,
                rotate: typeof window !== 'undefined' && window.innerWidth >= 768 ? rotate : 0
            }}
            initial={{ opacity: typeof window !== 'undefined' && window.innerWidth >= 768 ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : 1 }}
            className="relative min-h-[100svh] h-auto md:sticky md:top-0 md:h-screen bg-[#1F1F1F] flex flex-col items-center justify-center text-white overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Asymmetric Split Layout */}
            <div className="relative z-10 w-full max-w-[92vw] md:max-w-[88vw] mx-auto flex flex-col md:grid md:grid-cols-12 md:gap-8 pt-[14vh] md:pt-0 pb-[6vh] md:pb-0 md:py-0">

                {/* Left Column: Portrait Asset */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="md:col-span-5 h-full flex items-center justify-center md:justify-start"
                >
                    {/* The Frame */}
                    <div className="relative w-[60vw] max-w-[40vh] md:w-full md:max-w-[26vw] aspect-[3/4] rounded-3xl p-2 border border-white/5 bg-[#ffffff03] backdrop-blur-sm shadow-2xl">
                        <div className="w-full h-full rounded-2xl overflow-hidden relative bg-[#121212]">
                            <img
                                src="/talha.png"
                                alt="Talha Portrait"
                                className="w-full h-full object-cover object-center"
                            />
                            {/* Subtle dark gradient overlay to blend perfectly with the dark theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Typography */}
                <div className="md:col-span-7 h-full flex flex-col justify-end items-center md:items-end mt-6 md:mt-0">

                    {/* Massive Headline */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center md:justify-end overflow-hidden"
                    >
                        <h1 className="text-white text-[13.5vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase text-center md:text-right drop-shadow-lg">
                            Frontend
                            <br />
                            Engineer
                        </h1>
                    </motion.div>

                    {/* Introduction Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center md:justify-end mt-5 md:mt-10"
                    >
                        <p className="text-neutral-300 text-sm md:text-[1.4vw] max-w-[320px] md:max-w-[39vw] text-center md:text-right tracking-tight leading-relaxed font-medium">
Hi, I'm Talha, a Frontend Engineer & UI/UX Designer creating modern websites that engage users and strengthen brands.                        </p>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex justify-center md:justify-end mt-6 md:mt-10"
                    >
                        <Magnetic>
                            <a
                                href="#work"
                                className="group relative inline-flex items-center justify-center px-6 py-3 md:px-[2vw] md:py-[1vw] text-sm md:text-[0.9vw] font-bold rounded-full transition-all duration-300 hover:scale-[1.02] bg-white text-black hover:bg-neutral-200 shadow-xl"
                            >
                                <span className="flex items-center gap-2 md:gap-[0.5vw] text-sm md:text-[1vw]">
                                    View My Work
                                    <svg className="w-4 h-4 md:w-[1vw] md:h-[1vw] transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </a> 
                        </Magnetic>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

const Section2 = ({ scrollYProgress, children }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{
                scale: typeof window !== 'undefined' && window.innerWidth >= 768 ? scale : 1,
                rotate: typeof window !== 'undefined' && window.innerWidth >= 768 ? rotate : 0
            }}
            className="relative z-10"
        >
            {children}
        </motion.section>
    );
};

const HeroScrollAnimation = forwardRef(({ children }, ref) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={container} className="relative h-auto md:min-h-[200vh] bg-neutral-950">
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress}>
                {children}
            </Section2>
        </main>
    );
});

HeroScrollAnimation.displayName = "HeroScrollAnimation";

export default HeroScrollAnimation;
