"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef, forwardRef } from "react";
import { TextScramble } from "./text-scramble";

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
            className="relative h-[100svh] md:sticky md:top-0 md:h-screen bg-[#1F1F1F] flex flex-col items-center justify-center text-white overflow-hidden"
        >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Main Typography */}
            <motion.div
                initial={{ opacity: typeof window !== 'undefined' && window.innerWidth >= 768 ? 1 : 0, y: typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : 0.8, delay: typeof window !== 'undefined' && window.innerWidth >= 768 ? 0 : 0.2, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center justify-center text-center select-none"
            >
                <h1 className="font-black text-[15vw] md:text-[12vw] leading-[0.82] tracking-tighter uppercase flex flex-col items-center">
                    {/* TALHA - Solid High Contrast */}
                    <span className="text-white z-20 relative">
                        Talha
                    </span>

                    {/* AMIR - Ghost Outline */}
                    <span
                        className="text-transparent z-10 relative"
                        style={{
                            WebkitTextStroke: '1.5px white',
                            textStroke: '1.5px white'
                        }}
                    >
                        Amir
                    </span>
                </h1>

                <TextScramble
                    className="mt-12 text-xl px-6 md:px-0 md:text-[1.38vw] text-neutral-400 font-light tracking-[0.2em] uppercase w-full text-center"
                    duration={1.2}
                >
                    Frontend Engineer • React • Based in Lahore
                </TextScramble>

                <div className="pt-12 md:pt-[3.33vw]">
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 md:px-[2.22vw] md:py-[1.11vw] bg-white text-black rounded-full font-bold text-lg md:text-[1.25vw] tracking-tight transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1"
                    >
                        <span>Enter Portfolio</span>
                        <div className="w-2 h-2 md:w-[0.55vw] md:h-[0.55vw] bg-black rounded-full group-hover:scale-150 transition-transform duration-300" />
                    </a>
                </div>
            </motion.div>
        </motion.section>
    );
};

// ... lines omitted ...

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
        <main ref={container} className="relative h-auto md:h-[200vh] bg-neutral-950">
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress}>
                {children}
            </Section2>
        </main>
    );
});

HeroScrollAnimation.displayName = "HeroScrollAnimation";

export default HeroScrollAnimation;
