import { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
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
        gsap.from(".skill-category", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power2.out"
        });
    }, { scope: sectionRef });

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center py-20 md:py-[5.55vw] bg-[#0a0a0a] relative overflow-hidden" ref={sectionRef}>
            <div className="my-container w-full relative z-10">
                <div className="max-w-xl md:max-w-[65vw] mx-auto text-center mb-16 md:mb-[6.66vw] space-y-4 md:space-y-[1.38vw]">
                    <h2 className="text-3xl md:text-[4.44vw] font-semibold text-[#f5f5f7] tracking-tight">
                        Technical Expertise
                    </h2>
                    <p className="text-[#a1a1a6] text-base md:text-[1.38vw] font-normal max-w-lg md:max-w-[50vw] mx-auto leading-relaxed">
                        A curated stack designed for precision and performance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-[7vw] w-full">
                    {/* Category: Frontend */}
                    <div className="skill-category space-y-6 md:space-y-[2.5vw]">
                        <h3 className="text-lg md:text-[1.66vw] font-medium text-[#f5f5f7] border-b border-white/10 pb-4 md:pb-[1.38vw]">Frontend Center</h3>
                        <div className="space-y-4 md:space-y-[1.38vw]">
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <FaReact className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">React</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">Component Architecture</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <RiTailwindCssFill className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">Tailwind CSS</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">Design Systems</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <SiGreensock className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">GSAP</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">cinematic Motion</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category: Core */}
                    <div className="skill-category space-y-6 md:space-y-[2.5vw]">
                        <h3 className="text-lg md:text-[1.66vw] font-medium text-[#f5f5f7] border-b border-white/10 pb-4 md:pb-[1.38vw]">Core Foundations</h3>
                        <div className="space-y-4 md:space-y-[1.38vw]">
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <FaJs className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">JavaScript (ES6+)</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">Async Patterns & Logic</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <FaHtml5 className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">HTML5</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">Semantic Structure</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <FaCss3Alt className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">CSS3</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">Layouts & Animations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Category: Tools */}
                    <div className="skill-category space-y-6 md:space-y-[2.5vw]">
                        <h3 className="text-lg md:text-[1.66vw] font-medium text-[#f5f5f7] border-b border-white/10 pb-4 md:pb-[1.38vw]">Tools & Workflow</h3>
                        <div className="space-y-4 md:space-y-[1.38vw]">
                            <div className="flex items-center gap-4 md:gap-[1.38vw] group">
                                <div className="p-3 md:p-[1.11vw] rounded-xl md:rounded-[0.83vw] bg-[#16181d] border border-white/5 group-hover:bg-[#1c1e24] transition-colors">
                                    <FaGithub className="w-6 h-6 md:w-[2.22vw] md:h-[2.22vw] text-[#0071e3]" />
                                </div>
                                <div>
                                    <h4 className="text-base md:text-[1.38vw] text-[#f5f5f7]">GitHub</h4>
                                    <p className="text-sm md:text-[1.11vw] text-[#86868b]">Version Control</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
