import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const About = () => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".about-content",
            {
                y: 100,
                opacity: 0,
                autoAlpha: 0
            },
            {
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            }
        );
    }, []);

    return (
        <section id="about" className="py-24 md:py-32 bg-neutral-950">
            <div className="my-container">
                <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div className="space-y-6">
                        <h2 className="about-content text-[2rem] md:text-[3.5vw] lg:text-[2.5vw] font-bold text-neutral-100">
                            Obsessed with <span className="text-neutral-500">details</span>.
                        </h2>
                        <div className="about-content space-y-4 text-neutral-400 text-[1.125rem] md:text-[1.5vw] lg:text-[1.15vw] leading-relaxed">
                            <p>
                                I am a frontend developer who believes that code quality is as important as the visual output. I build extensive layouts that scale, ensuring every pixel serves a purpose.
                            </p>
                            <p>
                                Focusing on the React ecosystem, I bridge the gap between design and engineering. My approach is simple: keep it clean, keep it fast, and make it intuitive.
                            </p>
                        </div>
                    </div>

                    <div className="about-content relative aspect-square md:aspect-[4/3] bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 p-8 flex items-center justify-center group">
                        {/* Abstract Visual representation of code/structure */}
                        <div className="absolute inset-0 bg-neutral-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="grid grid-cols-2 gap-4 w-full max-w-[200px] opacity-80 group-hover:scale-105 transition-transform duration-500">
                            <div className="h-24 bg-neutral-800 rounded-lg w-full"></div>
                            <div className="h-24 bg-neutral-800/50 rounded-lg w-full mt-8"></div>
                            <div className="h-24 bg-neutral-800/50 rounded-lg w-full -mt-8"></div>
                            <div className="h-24 bg-neutral-800 rounded-lg w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
