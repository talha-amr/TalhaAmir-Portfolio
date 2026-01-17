"use client";
import {
    useScroll,
    useTransform,
    motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const updateHeight = () => {
                const rect = ref.current.getBoundingClientRect();
                setHeight(rect.height);
            };

            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => window.removeEventListener('resize', updateHeight);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 40%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-[#0b0b0d] font-sans md:px-[2.77vw]"
            ref={containerRef}
        >

            <div ref={ref} className="relative max-w-7xl md:max-w-[88vw] mx-auto pb-20 md:pb-[13.88vw]">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-[11.11vw] md:gap-[2.77vw]"
                    >
                        {/* Left Side: Sticky Title */}
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 md:top-[11.11vw] self-start max-w-xs md:max-w-[22vw] lg:max-w-[26vw] md:w-full">
                            <div className="h-10 md:h-[2.77vw] absolute left-3 md:left-[0.83vw] w-10 md:w-[2.77vw] rounded-full bg-[#0b0b0d] flex items-center justify-center border border-white/10">
                                <div className="h-4 w-4 md:h-[1.11vw] md:w-[1.11vw] rounded-full bg-neutral-800 border border-neutral-700 p-2 md:p-[0.55vw]" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-[5.55vw] md:text-[3.33vw] font-bold text-neutral-500 ">
                                {item.title}
                            </h3>
                        </div>

                        {/* Right Side: Content */}
                        <div className="relative pl-20 pr-4 md:pl-[1.11vw] w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}
                        </div>
                    </div>
                ))}

                {/* The Vertical Line */}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-[2.22vw] left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-500 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
