import React, { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGreensock } from "react-icons/si";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const skills = [
    { name: 'HTML5', level: 'Expert', icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 'Expert', icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind CSS', level: 'Expert', icon: RiTailwindCssFill, color: '#38B2AC' },
    { name: 'JavaScript', level: 'Advanced', icon: FaJs, color: '#F7DF1E' },
    { name: 'React', level: 'Advanced', icon: FaReact, color: '#61DAFB' },
    { name: 'GSAP', level: 'Intermediate', icon: SiGreensock, color: '#88CE02' },
];

const Skills = () => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.from(".skill-card", {
            scrollTrigger: {
                trigger: "#skills",
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, []);

    return (
        <section id="skills" className="py-24 bg-neutral-950 border-t border-neutral-900">
            <div className="my-container">
                <h3 className="text-[0.875rem] md:text-[1vw] font-medium text-neutral-500 uppercase tracking-widest mb-12">core technologies</h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            style={{ '--skill-color': skill.color }}
                            className="skill-card p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-[border-color,box-shadow,color] duration-300 group flex flex-col items-center text-center gap-4 hover:shadow-[0_0_30px_-10px_var(--skill-color)]"
                        >
                            <skill.icon className="w-8 h-8 text-neutral-600 group-hover:text-[var(--skill-color)] transition-colors duration-300" />

                            <div>
                                <h4 className="text-neutral-200 font-semibold mb-1 group-hover:text-[var(--skill-color)] transition-colors">
                                    {skill.name}
                                </h4>
                                <span className="text-xs text-neutral-500 group-hover:text-neutral-400">
                                    {skill.level}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
