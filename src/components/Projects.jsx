import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Import Images
import velvetPourImg from '../images/velvet-pour.png';
import zushafiImg from '../images/zushafi.png';
import zentryImg from '../images/zentry.png';

const projects = [
    {
        title: "Velvet Pour",
        status: "Completed",
        description: "A visually refined beverage brand website focused on elegant UI, smooth transitions, and responsive design.",
        tags: ["React", "GSAP", "Tailwind"],
        link: "https://velvet-pour-alpha-smoky.vercel.app/",
        image: velvetPourImg
    },
    {
        title: "ZBS.",
        status: "Completed",
        description: "A professional portfolio website built for a client, emphasizing clean layout, typography, and performance.",
        tags: ["React", "Framing", "Styled Components"],
        link: "https://www.zushafi.com/",
        image: zushafiImg
    },
    {
        title: "Zentry",
        status: "In Progress",
        description: "An ongoing project exploring modern layouts, interactive UI elements, and advanced animations.",
        tags: ["React", "Three.js", "Vite"],
        link: "https://zentry-phi-blue.vercel.app/",
        image: zentryImg
    }
];

const Projects = () => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".project-card",
            {
                y: 100,
                opacity: 0,
                autoAlpha: 0
            },
            {
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            }
        );
    }, []);

    return (
        <section id="projects" className="py-32 bg-neutral-950">
            <div className="my-container">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-[2rem] md:text-[4vw] lg:text-[3vw] font-bold text-neutral-100 mt-2">Selected Work</h2>
                    <span className="hidden md:block text-neutral-500 text-[0.875rem] md:text-[1vw] tracking-widest uppercase mb-2">2024 - 2025</span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card group relative block bg-neutral-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 ease-out border border-neutral-800 hover:border-neutral-700 hover:shadow-2xl hover:shadow-blue-900/10"
                        >
                            {/* Image Container */}
                            <div className="aspect-[4/3] bg-neutral-800 w-full relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 md:p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${project.status === 'Completed' ? 'border-emerald-900/50 text-emerald-400 bg-emerald-950/20' : 'border-amber-900/50 text-amber-400 bg-amber-950/20'}`}>
                                        {project.status}
                                    </span>
                                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-neutral-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-neutral-200 mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-neutral-500">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
