import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-[#0b0b0d] border-t border-white/5 py-12 md:py-[3.33vw] relative z-10">
            <div className="my-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

                    {/* Brand / Copyright */}
                    <div className="text-center md:text-left space-y-2 md:space-y-[0.55vw]">
                        <h4 className="text-[15px] md:text-[1.04vw] font-semibold text-[#f5f5f7] tracking-tight">
                            Talha Amir
                        </h4>
                        <p className="text-[13px] md:text-[0.9vw] text-[#86868b]">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-8 md:gap-[2.22vw]">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[13px] md:text-[0.9vw] font-medium text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-6 md:gap-[1.66vw]">
                        <a
                            href="https://github.com/talha-amr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200"
                        >
                            <Github className="w-5 h-5 md:w-[1.38vw] md:h-[1.38vw]" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-talha-amir-843376329"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200"
                        >
                            <Linkedin className="w-5 h-5 md:w-[1.38vw] md:h-[1.38vw]" />
                        </a>
                        <a
                            href="mailto:tellyamir16@gmail.com"
                            className="text-[#86868b] hover:text-[#f5f5f7] transition-colors duration-200"
                        >
                            <Mail className="w-5 h-5 md:w-[1.38vw] md:h-[1.38vw]" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
