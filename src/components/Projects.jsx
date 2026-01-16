import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

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
        tags: ["React", "Vite"],
        link: "https://zentry-phi-blue.vercel.app/",
        image: zentryImg
    }
];

const Projects = () => {
    // Transform projects data to match Timeline format
    const timelineData = projects.map(project => ({
        title: project.title,
        content: (
            <div className="space-y-6 md:space-y-[1.66vw]">
                <p className="text-[#a1a1a6] text-base md:text-[1.4vw] leading-relaxed max-w-2xl md:max-w-[44vw] font-normal">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 md:gap-[0.55vw] mb-4 md:mb-[1.11vw]">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 md:px-[1.1vw] md:py-[0.4vw] bg-white/5 border border-white/10 rounded-full text-xs md:text-[1.0vw] font-medium text-[#f5f5f7]">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Image Container - Full Visibility */}
                <div className="relative w-full aspect-video rounded-xl md:rounded-[0.83vw] overflow-hidden bg-[#16181d] border border-white/5 shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain object-center"
                    />
                </div>

                <div className="pt-2 md:pt-[0.55vw]">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 md:gap-[0.55vw] text-[#f5f5f7] hover:text-[#0071e3] transition-colors duration-300 font-medium text-sm md:text-[1.3vw] group"
                    >
                        Visit Project
                        <ArrowUpRight className="w-4 h-4 md:w-[1.3vw] md:h-[1.3vw] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                </div>
            </div>
        )
    }));

    return (
        <section id="projects" className="py-20 md:py-[8.88vw] bg-[#0b0b0d]">
            <div className="my-container mb-12 md:mb-[3.33vw] px-6 md:px-[2.77vw]">
                <h2 className="text-3xl md:text-[7vw] font-bold text-[#f5f5f7] tracking-tight mb-4 md:mb-[1.11vw]">
                    Selected Work
                </h2>
                <p className="text-[#a1a1a6] max-w-md md:max-w-[28vw] md:text-[1.25vw]">
                    A timeline of recent commercial and personal projects.
                </p>
            </div>

            <Timeline data={timelineData} />
        </section>
    );
};

export default Projects;
