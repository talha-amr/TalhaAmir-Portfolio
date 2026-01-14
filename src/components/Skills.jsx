import React, { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    // Top Row: Priority
    { name: 'React', icon: FaReact, color: '#61DAFB', glow: false, delay: '0s' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', glow: false, delay: '1s' },
    { name: 'Tailwind CSS', icon: RiTailwindCssFill, color: '#38B2AC', glow: false, delay: '2s' },
    // Bottom Row: Support
    { name: 'GSAP', icon: SiGreensock, color: '#88CE02', glow: false, delay: '0.5s' },
    { name: 'HTML5', icon: FaHtml5, color: '#E34F26', glow: false, delay: '1.5s' },
    { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', glow: false, delay: '2.5s' },
];

const Skills = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.from(".tech-card", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out"
        });
    }, { scope: sectionRef });

    return (
        <section id="skills" className="py-32 bg-[#0a0a0a] relative overflow-hidden" ref={sectionRef}>
            {/* Dark Technical Dot Grid Background */}
            <div className="absolute inset-0 bg-dot-pattern opacity-15 pointer-events-none" />

            <div className="my-container relative z-10">
                <div className="max-w-xl mx-auto text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Technologies</span>
                    </h2>
                    <p className="text-neutral-500 text-sm uppercase tracking-widest font-medium">
                        The modern stack I use to build digital products
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`tech-card relative group p-[1px] rounded-3xl animate-float`}
                            style={{
                                animationDelay: skill.delay,
                                '--skill-color': skill.color
                            }}
                        >
                            {/* Ambient Shadow */}
                            <div className={`absolute inset-0 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${skill.glow ? 'bg-[var(--skill-color)] opacity-30' : 'bg-blue-800'}`} />

                            {/* Card Content */}
                            <div className="relative h-full bg-neutral-900/40 backdrop-blur-md rounded-[23px] p-8 border border-white/5 overflow-hidden flex flex-col items-center justify-center gap-6 transition-colors duration-500 group-hover:border-[var(--skill-color)]/30 group-hover:bg-neutral-900/60">

                                {/* Shimmer Border Beam */}
                                <div className="absolute inset-0 rounded-[23px] overflow-hidden pointer-events-none">
                                    <div className="absolute top-0 left-[-100%] h-full w-[20%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDuration: '3s' }} />
                                </div>

                                <div
                                    className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-neutral-950/50 border border-white/5 transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--skill-color)]/50 ${skill.glow ? 'shadow-[0_0_30px_-5px_var(--skill-color)] border-[var(--skill-color)]/30 scale-105' : 'group-hover:shadow-[0_0_30px_-5px_var(--skill-color)]'}`}
                                >
                                    <skill.icon
                                        className={`w-8 h-8 transition-colors duration-300 ${skill.glow ? 'text-[var(--skill-color)]' : 'text-neutral-400 group-hover:text-[var(--skill-color)]'}`}
                                    />
                                </div>

                                <div className="text-center space-y-1">
                                    <h4 className={`text-xl font-bold transition-colors duration-300 ${skill.glow ? 'text-white' : 'text-neutral-300 group-hover:text-white'}`}>
                                        {skill.name}
                                    </h4>
                                    <div className={`h-1 w-8 mx-auto rounded-full transition-all duration-300 ${skill.glow ? 'bg-[var(--skill-color)]' : 'bg-neutral-800 group-hover:bg-[var(--skill-color)]'}`} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
