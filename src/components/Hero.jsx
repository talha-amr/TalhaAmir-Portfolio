import React, { useRef } from 'react';
import HeroScrollAnimation from '@/components/ui/hero-scroll-animation';

const Hero = ({ children }) => {
    return (
        <section id="hero">
            <HeroScrollAnimation>
                {children}
            </HeroScrollAnimation>
        </section>
    );
};

export default Hero;

