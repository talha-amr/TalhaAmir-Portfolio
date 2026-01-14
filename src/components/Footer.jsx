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
        <footer className="bg-[#0a0a0a] border-t border-neutral-900 py-12 relative z-10">
            <div className="my-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

                    {/* Brand / Copyright */}
                    <div className="text-center md:text-left space-y-2">
                        <h4 className="text-lg font-bold text-neutral-100 tracking-tight">
                            Talha Amir
                        </h4>
                        <p className="text-sm text-neutral-500">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex items-center gap-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-neutral-500 hover:text-purple-400 transition-colors duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Socials */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/talha-amr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white hover:bg-neutral-800 p-2 rounded-full transition-all duration-300"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muhammad-talha-amir-843376329"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 hover:text-white hover:bg-neutral-800 p-2 rounded-full transition-all duration-300"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:tellyamir16@gmail.com"
                            className="text-neutral-500 hover:text-white hover:bg-neutral-800 p-2 rounded-full transition-all duration-300"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
