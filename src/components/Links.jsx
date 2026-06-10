import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe, Linkedin, Github } from 'lucide-react';
import talhaBusImg from '../images/talha-bus(1).jpeg';


const Links = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.animate-item',
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    stagger: 0.08,
                    ease: "power3.out",
                    duration: 0.8,
                    delay: 0.1
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const links = [
        {
            title: "Explore Full Portfolio",
            label: "PRIMARY ACTION",
            url: "/",
            isPrimary: true,
            icon: Globe
        },
        {
            title: "LinkedIn Connection",
            label: "PROFESSIONAL",
            url: "https://www.linkedin.com/in/muhammad-talha-amir-843376329",
            isPrimary: false,
            icon: Linkedin
        },
        {
            title: "GitHub Repository",
            label: "SOURCE CODE",
            url: "https://github.com/talha-amr",
            isPrimary: false,
            icon: Github
        }
    ];

    return (
        <main 
            ref={containerRef}
            className="relative min-h-screen bg-[#030303] flex items-center justify-center font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden"
        >
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            {/* Bounding Corners - Decorative */}
            <div className="absolute top-6 left-6 text-neutral-700 font-light text-xl select-none z-0">⌞</div>
            <div className="absolute top-6 right-6 text-neutral-700 font-light text-xl select-none z-0 rotate-90">⌞</div>
            <div className="absolute bottom-6 left-6 text-neutral-700 font-light text-xl select-none z-0 -rotate-90">⌞</div>
            <div className="absolute bottom-6 right-6 text-neutral-700 font-light text-xl select-none z-0 rotate-180">⌞</div>

            <div className="relative z-10 w-full max-w-[520px] px-6 py-12 flex flex-col gap-10">
                
                {/* Header Section */}
                <header className="flex flex-col items-center text-center gap-5 animate-item">
                    <div className="relative group">
                        {/* Avatar frame */}
                        <div className="absolute inset-[-4px] border border-neutral-800 rounded-sm opacity-50 transition-opacity duration-500 group-hover:opacity-100 group-hover:border-blue-500/30"></div>
                        <img 
                            src={talhaBusImg} 
                            alt="Talha Amir" 
                            className="w-24 h-24 object-cover object-center rounded-sm transition-all duration-700 ease-out"
                        />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#f5f5f7]">
                            Talha Amir
                        </h1>
                        <p className="text-[0.65rem] md:text-xs font-medium tracking-[0.25em] text-neutral-500 uppercase">
                            Creative Developer <span className="text-blue-500/70 mx-1">//</span> Frontend Engineer <span className="text-blue-500/70 mx-1">•</span> UI/UX Design
                        </p>
                    </div>
                </header>

                {/* Link Cards Block */}
                <div className="flex flex-col gap-3">
                    {links.map((link, idx) => (
                        <a 
                            key={idx}
                            href={link.url}
                            className={`group animate-item relative block w-full p-5 overflow-hidden transition-all duration-400 ease-out border ${link.isPrimary ? 'border-blue-500/30 bg-blue-500/[0.02] hover:border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0)] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-neutral-800/50 bg-[#080808]/50 hover:bg-[#0a0a0a] hover:border-neutral-700'}`}
                        >
                            {/* Hover Background Tint Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/[0.03] group-hover:via-transparent transition-all duration-500"></div>

                            <div className="relative z-10 flex items-center justify-between">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[0.6rem] font-medium tracking-[0.15em] text-neutral-500 uppercase">
                                        {link.label}
                                    </span>
                                    <span className={`flex items-center gap-2.5 text-sm md:text-base font-medium tracking-wide ${link.isPrimary ? 'text-blue-50' : 'text-neutral-300 group-hover:text-[#f5f5f7]'} transition-colors duration-300`}>
                                        <link.icon className={`w-4 h-4 ${link.isPrimary ? 'text-blue-400' : 'text-neutral-500 group-hover:text-neutral-300'} transition-colors duration-300`} strokeWidth={2} />
                                        {link.title}
                                    </span>
                                </div>
                                
                                {/* Arrow / Indicator */}
                                <div className="overflow-hidden flex items-center justify-center w-6 h-6">
                                    <span className={`text-lg transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${link.isPrimary ? 'text-blue-400' : 'text-neutral-600 group-hover:text-neutral-300'} group-hover:translate-x-1 group-hover:-translate-y-1`}>
                                        ↗
                                    </span>
                                </div>
                            </div>
                            
                            {/* Subtle border draw effect (bottom) */}
                            <div className={`absolute bottom-0 left-0 h-[1px] bg-blue-500 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${link.isPrimary ? 'w-full opacity-50' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}`}></div>
                        </a>
                    ))}
                </div>

                {/* Footer Note */}
                <footer className="mt-8 text-center animate-item">
                    <p className="text-[0.65rem] tracking-[0.1em] text-neutral-600 font-mono">
                        Fidelity. Motion. Logic. &copy; 2026
                    </p>
                </footer>
            </div>
        </main>
    );
};

export default Links;
