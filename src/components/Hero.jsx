import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Atom } from 'lucide-react'; // Using Atom as a React-like icon

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Staggered Text Entrance
        tl.fromTo(".hero-element",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        )
            // Icon Entrance
            .fromTo(".floating-icon",
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", stagger: 0.2 },
                "-=0.5"
            );

    }, { scope: heroRef });

    return (
        <section
            id="hero"
            ref={heroRef}
            className="min-h-screen relative flex items-center justify-center bg-[#0a0a0a] overflow-hidden"
        >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

            {/* Ambient Gradients - Corner Hues */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            {/* Content Container */}
            <div className="relative z-10 text-center px-6">

                {/* Floating Icons (Anti-Gravity) */}
                <div className="absolute top-[-20%] left-[10%] md:left-[20%] animate-float floating-icon opacity-0">
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/10 transform rotate-[-15deg]">
                        <Atom className="w-8 h-8 md:w-12 md:h-12 text-blue-400" />
                    </div>
                </div>

                <div className="absolute bottom-[-10%] right-[10%] md:right-[20%] animate-float floating-icon opacity-0" style={{ animationDelay: '2s' }}>
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/10 transform rotate-[15deg]">
                        {/* Tailwind-ish SVG */}
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-10 md:h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6C15.3137 6 18 3.31371 18 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M12 18C8.68629 18 6 20.6863 6 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M6 12C6 8.68629 3.31371 6 0 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M18 12C18 15.3137 20.6863 18 24 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            <path d="M17.5 6.5C19.5 8.5 19.5 15.5 17.5 17.5C15.5 19.5 8.5 19.5 6.5 17.5C4.5 15.5 4.5 8.5 6.5 6.5C8.5 4.5 15.5 4.5 17.5 6.5Z" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>


                {/* Main Typography */}
                <div className="space-y-6">
                    <h1 className="hero-element text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">
                        Talha <span className="inline-block bg-[linear-gradient(110deg,#a78bfa,45%,#e879f9,55%,#a78bfa)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">Amir</span>
                    </h1>

                    <p className="hero-element text-lg md:text-2xl text-neutral-400 font-light tracking-wide max-w-2xl mx-auto">
                       Frontend Engineer specializing in React | Experience at Rozee.pk | Student at PUCIT
                    </p>

                    <div className="hero-element pt-8">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 rounded-full font-bold text-lg tracking-tight transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1"
                        >
                            <span>Enter Portfolio</span>
                            <div className="w-2 h-2 bg-neutral-950 rounded-full group-hover:scale-150 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
