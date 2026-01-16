import React from 'react';
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { Header } from '@/components/ui/header-2';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { VelocityScroll } from '@/components/ui/scroll-based-velocity';

gsap.registerPlugin(ScrollTrigger);

function App() {
    const lenisRef = React.useRef();

    React.useEffect(() => {
        // Disable lag smoothing to prevent stutter with Lenis
        gsap.ticker.lagSmoothing(0);

        function update(time) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            <main className="bg-neutral-950 min-h-screen text-neutral-400 font-sans selection:bg-blue-500/30 selection:text-blue-200">
                <Header />
                <Hero>
                    <About />
                </Hero>
                <Skills />
                <div className="py-20 md:py-[5.55vw] bg-[#0b0b0d]">
                    <VelocityScroll
                        text="Based in Lahore &nbsp; • &nbsp; Available for Freelance &nbsp; • &nbsp; Open for New Opportunities &nbsp; • &nbsp; Ready to Collaborate &nbsp; • &nbsp;"
                        default_velocity={2}
                        className="font-display text-center text-5xl font-bold tracking-[-0.02em] text-[#f5f5f7] drop-shadow-sm md:text-[4.5vw] md:leading-[1]"
                    />
                </div>

                <Projects />
                <Contact />
                <Footer />
            </main>
        </ReactLenis>
    );
}

export default App;
