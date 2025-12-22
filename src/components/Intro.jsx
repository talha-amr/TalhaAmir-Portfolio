import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Intro = () => {
    const comp = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".intro-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(".intro-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.5");

    }, []);

    const handleEnter = () => {
        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 px-6 relative z-50">
            <div className="text-center space-y-3">
                <p className="intro-text text-neutral-500 font-medium tracking-widest uppercase text-[0.875rem] md:text-[1.2vw]">Hello, I’m</p>

                <h1 className="intro-text text-[3.75rem] md:text-[8vw] lg:text-[7vw] font-black text-neutral-100 tracking-tighter">
                    Talha Amir
                </h1>

                <h2 className="intro-text text-[1.5rem] md:text-[3vw] lg:text-[2.5vw] text-neutral-400 font-light">
                    Frontend Developer
                </h2>

                <p className="intro-text text-neutral-500 max-w-lg mx-auto pt-4 leading-relaxed text-[1rem] md:text-[1.5vw] lg:text-[1.4vw]">
                    I design and build clean, modern web interfaces with a focus on interactions and detailed precision.
                </p>

                <div className="pt-12">
                    <button
                        onClick={handleEnter}
                        className="intro-btn px-10 py-4 bg-neutral-100 text-neutral-950 font-bold rounded-full hover:scale-105 transition-transform duration-300"
                    >
                        Enter Portfolio
                    </button>
                </div>
            </div>

        </section>
    );
};

export default Intro;
