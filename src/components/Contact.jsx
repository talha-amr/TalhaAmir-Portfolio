import React, { useRef } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Contact = () => {
    const comp = useRef(null);

    useGSAP(() => {
        gsap.fromTo(".contact-content",
            {
                y: 100,
                opacity: 0,
                autoAlpha: 0
            },
            {
                scrollTrigger: {
                    trigger: "#contact",
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                autoAlpha: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            }
        );
    }, []);

    return (
        <section id="contact" className="py-32 bg-neutral-950 border-t border-neutral-900">
            <div className="my-container text-center">

                <h2 className="contact-content text-[2.25rem] md:text-[5vw] lg:text-[4vw] font-bold text-neutral-100 mb-8 tracking-tight">
                    Let’s build something <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">meaningful.</span>
                </h2>

                <p className="contact-content text-neutral-400 text-[1.125rem] md:text-[2vw] lg:text-[1.25vw] mb-12 max-w-2xl mx-auto">
                    Currently open for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                </p>

                <a
                    href="mailto:tellyamir16@gmail.com"
                    className="contact-content inline-block px-10 py-5 bg-neutral-100 text-neutral-950 text-lg font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                    Say Hello
                </a>

                <div className="contact-content mt-20 flex items-center justify-center gap-8">
                    <a href="https://github.com/talha-amr" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-talha-amir-843376329" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:tellyamir16@gmail.com" className="text-neutral-500 hover:text-white transition-colors p-2 hover:bg-neutral-900 rounded-full">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>

                <footer className="contact-content mt-24 text-neutral-600 text-sm">
                    &copy; {new Date().getFullYear()} Frontend Developer. Built with React & Tailwind.
                </footer>
            </div>
        </section>
    );
};

export default Contact;
