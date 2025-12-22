import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Work', href: '#projects' },
    ];

    useGSAP(() => {
        // Animation to hide the navbar (translate Y -100%)
        // We start visible (y=0). The tween animates TO hidden (-100%).
        const hideAnim = gsap.to("nav", {
            yPercent: -100,
            paused: true,
            duration: 0.3,
            ease: "power2.inOut"
        });

        const st = ScrollTrigger.create({
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                // Direction 1 = Down, -1 = Up
                // If scrolling down and past 50px, play hide animation.
                if (self.direction === 1 && self.scroll() > 50) {
                    hideAnim.play();
                }
                // If scrolling up or at the very top, reverse (show).
                else if (self.direction === -1 || self.scroll() < 50) {
                    hideAnim.reverse();
                }
            }
        });
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900' : 'bg-transparent'}`}>
            <div className="my-container h-20 flex items-center justify-between">
                <a href="#" className="text-[1.5rem] md:text-[2.5vw] lg:text-[1.8vw] font-bold text-neutral-100 tracking-tighter">
                    TalhaAmir<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Menu */}
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-item text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-neutral-100 text-neutral-950 text-sm font-semibold rounded-full hover:bg-white transition-transform hover:scale-105 leading-none"
                    >
                        Lets Talk
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-neutral-100"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-neutral-950 border-b border-neutral-900 p-6 flex flex-col gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-neutral-400 hover:text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
