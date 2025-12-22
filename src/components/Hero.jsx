import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Hero = () => {
    const comp = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 75%"
            }
        });

        tl.from(".hero-text", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(".hero-btn", {
                opacity: 0,
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.5");

    }, []);

    return (
        <section id="hero" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Gradients/Noise - Subtle */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-violet-900/20 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="my-container w-full relative z-10">
                <div className="max-w-3xl space-y-8">
                    <div className="space-y-4">
                        <h2 className="hero-text text-blue-500 font-medium tracking-wide uppercase text-[0.875rem] md:text-[1vw]">
                            Frontend Developer
                        </h2>
                        <h1 className="hero-text text-[3rem] md:text-[6vw] lg:text-[5vw] font-bold tracking-tight text-neutral-100 leading-tight">
                            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">digital experiences</span> that matter.
                        </h1>
                    </div>

                    <p className="hero-text text-[1.125rem] md:text-[1.5vw] lg:text-[1.2vw] text-neutral-400 max-w-2xl leading-relaxed">
                        Crafting clean, performance-obsessed interfaces with React, Tailwind CSS, GSAP, and modern web standards.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href="#projects" className="hero-btn px-8 py-4 bg-neutral-100 text-neutral-950 rounded-full font-semibold hover:bg-white transition-colors">
                            View Work
                        </a>
                        <a href="#contact" className="hero-btn px-8 py-4 border border-neutral-800 text-neutral-300 rounded-full font-medium hover:border-neutral-600 hover:text-white transition-colors">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
