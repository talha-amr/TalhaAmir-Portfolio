import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Zap, TrendingUp, Layout, Globe, Palette } from 'lucide-react';

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
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
            .fromTo(".about-card",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" },
                "-=0.5"
            );

    }, { scope: containerRef });

    return (
        <section id="about" className="py-32 md:py-[8.88vw] relative bg-[#0b0b0d] overflow-hidden" ref={containerRef}>
            <div className="my-container relative z-10">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 md:gap-[3.33vw] lg:gap-[5.55vw] items-start">

                    {/* Column 1: The Identity */}
                    <div className="space-y-8 md:space-y-[2.22vw] about-identity">
                        <h3 className="text-4xl md:text-[3.33vw] font-semibold tracking-tight leading-tight text-[#f5f5f7]">
                            Obsessed with details.
                        </h3>
                        <div className="space-y-6 md:space-y-[1.66vw] text-[#a1a1a6] text-lg md:text-[1.38vw] leading-relaxed max-w-lg md:max-w-[39vw] font-normal tracking-normal">
                            <p>
                                I am a Software Engineering student at <span className='text-[#f5f5f7]'>PUCIT</span> and a Frontend Engineer & UI/UX Designer.
                            </p>
                            <p>
                                I blend technical precision with creative strategy to build digital experiences that feel inevitable. My approach is simple: keep it clean, keep it fast, and respect the user.
                            </p>
                            <p>
                                I don't just write code; I craft journeys. Whether it's wireframing in Figma or optimizing React renders, every decision is intentional and aimed at solving real human problems.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Minimal Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[1.66vw]">
                        {/* Card 1: User Centric */}
                        <div className="about-card p-8 md:p-[2.22vw] rounded-2xl md:rounded-[1.11vw] bg-[#16181d] border border-white/5 flex flex-col justify-between h-[240px] md:h-[16.66vw]">
                            <Palette className="w-6 h-6 md:w-[1.66vw] md:h-[1.66vw] text-[#0071e3]" />
                            <div>
                                <h4 className="text-lg md:text-[1.25vw] font-semibold text-[#f5f5f7] mb-2 md:mb-[0.55vw]">User Centric</h4>
                                <p className="text-[15px] md:text-[1.04vw] text-[#a1a1a6] leading-relaxed">Seamless interactions that guide the user effortlessly.</p>
                            </div>
                        </div>

                        {/* Card 2: Performance */}
                        <div className="about-card p-8 md:p-[2.22vw] rounded-2xl md:rounded-[1.11vw] bg-[#16181d] border border-white/5 flex flex-col justify-between h-[240px] md:h-[16.66vw]">
                            <Zap className="w-6 h-6 md:w-[1.66vw] md:h-[1.66vw] text-[#0071e3]" />
                            <div>
                                <h4 className="text-lg md:text-[1.25vw] font-semibold text-[#f5f5f7] mb-2 md:mb-[0.55vw]">Performance</h4>
                                <p className="text-[15px] md:text-[1.04vw] text-[#a1a1a6] leading-relaxed">Lightning-fast load times. Zero lag.</p>
                            </div>
                        </div>

                        {/* Card 3: Pixel Perfect */}
                        <div className="about-card p-8 md:p-[2.22vw] rounded-2xl md:rounded-[1.11vw] bg-[#16181d] border border-white/5 flex flex-col justify-between h-[240px] md:h-[16.66vw]">
                            <Layout className="w-6 h-6 md:w-[1.66vw] md:h-[1.66vw] text-[#0071e3]" />
                            <div>
                                <h4 className="text-lg md:text-[1.25vw] font-semibold text-[#f5f5f7] mb-2 md:mb-[0.55vw]">Pixel Perfect</h4>
                                <p className="text-[15px] md:text-[1.04vw] text-[#a1a1a6] leading-relaxed">Every pixel serves a purpose.</p>
                            </div>
                        </div>

                        {/* Card 4: The Stack */}
                        <div className="about-card p-8 md:p-[2.22vw] rounded-2xl md:rounded-[1.11vw] bg-[#16181d] border border-white/5 flex flex-col justify-between h-[240px] md:h-[16.66vw]">
                            <Globe className="w-6 h-6 md:w-[1.66vw] md:h-[1.66vw] text-[#0071e3]" />
                            <div>
                                <h4 className="text-lg md:text-[1.25vw] font-semibold text-[#f5f5f7] mb-2 md:mb-[0.55vw]">The Stack</h4>
                                <p className="text-[15px] md:text-[1.04vw] text-[#a1a1a6] leading-relaxed">React. Tailwind CSS. Modern standards.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
