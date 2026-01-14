import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Zap, TrendingUp, Layout, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".about-identity",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
        )
            .fromTo(".about-bento",
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
                "-=0.5"
            );

    }, { scope: containerRef });

    return (
        <section id="about" className="py-32 relative bg-[#0a0a0a] overflow-hidden" ref={containerRef}>
            <div className="my-container relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

                    {/* Column 1: The Identity */}
                    <div className="space-y-8 about-identity">
                        <h3 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-white">
                            Obsessed with <span className="inline-block bg-[linear-gradient(110deg,#a78bfa,45%,#e879f9,55%,#a78bfa)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                                details.
                            </span>
                        </h3>
                        <div className="space-y-6 text-neutral-400 text-lg md:text-xl leading-relaxed max-w-lg font-light tracking-wide">
                            <p>
                               I am a Software Engineering student at <span className='text-white font-medium'>PUCIT</span> with professional experience in Frontend Engineering at <span className='text-white font-medium'>Rozee.pk</span>. I bridge the gap between complex logic and intuitive design, specializing in the <span className='text-white font-medium'>React ecosystem</span> to build high-performance, scalable interfaces. My approach is simple: keep it clean, keep it fast, and ensure that every pixel serves a purposeful function in the user journey.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: The Bento Grid */}
                    {/* Anti-Gravity Container: Floats up + Purple Shadow */}
                    <div
                        className="about-bento relative w-full translate-y-[-1.25rem] shadow-[0_20px_40px_-15px_rgba(147,51,234,0.3)] rounded-3xl p-[1px] bg-gradient-to-b from-white/10 to-white/5"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0a0a0a] rounded-[23px] p-4 relative overflow-hidden h-full">
                            {/* Card 1: Tall - Scalability */}
                            <div className="group relative row-span-2 p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden flex flex-col justify-between min-h-[280px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <TrendingUp className="w-8 h-8 text-neutral-400 group-hover:text-purple-400 transition-colors duration-300" />
                                <div className="relative z-10 pt-12">
                                    <h4 className="text-xl font-medium text-neutral-200 mb-2">Scalability</h4>
                                    <p className="text-sm text-neutral-500 leading-relaxed">Clean, modular code built to grow with your product.</p>
                                </div>
                            </div>

                            {/* Card 2: Standard - Performance */}
                            <div className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Zap className="w-6 h-6 text-neutral-400 mb-4 group-hover:text-purple-400 transition-colors duration-300" />
                                <h4 className="text-lg font-medium text-neutral-200 mb-1">Performance</h4>
                                <p className="text-xs text-neutral-500">Lightning-fast load times.</p>
                            </div>

                            {/* Card 3: Standard - Pixel Perfect */}
                            <div className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <Layout className="w-6 h-6 text-neutral-400 mb-4 group-hover:text-purple-400 transition-colors duration-300" />
                                <h4 className="text-lg font-medium text-neutral-200 mb-1">Pixel Perfect</h4>
                                <p className="text-xs text-neutral-500">Transforming Figma into reality.</p>
                            </div>

                            {/* Card 4: Wide - The Stack */}
                            <div className="group relative col-span-1 sm:col-span-2 p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="flex items-center justify-between">
                                    <div className="relative z-10">
                                        <h4 className="text-lg font-medium text-neutral-200 mb-1">The Stack</h4>
                                        <p className="text-sm text-neutral-500">Expertise in React, Next.js, and Tailwind CSS.</p>
                                    </div>
                                    <Globe className="w-8 h-8 text-neutral-400 group-hover:text-purple-400 transition-colors duration-300" />
                                </div>
                            </div>
                        </div>

                        {/* Shimmer Border Overlay - 1px border beam effect */}
                        <div className="absolute inset-0 rounded-3xl pointer-events-none p-[1px] overflow-hidden z-20">
                            <div className="absolute top-0 left-[-100%] h-full w-[20%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
