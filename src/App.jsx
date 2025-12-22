import React from 'react';
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
        <Intro />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default App;
