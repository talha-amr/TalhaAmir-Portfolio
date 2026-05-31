import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, CopyPlus, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

import { SmokeBackground } from './ui/spooky-smoke-animation';

const services = [
  {
    title: "Website Design & Development",
    description: "Modern, high-performance websites designed to strengthen brand presence, engage users, and deliver seamless digital experiences.",
    bgColor: "bg-[#e2e2e2]",
    textColor: "text-neutral-900",
    icon: <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />,
    bgPosition: "left center",
    initialX: -100, // Starts immediately to the left of the center card
    splitX: -115,   // Moves left when splitting
    finalRotateY: 180 + 15, // Flips and tilts right
    finalRotateZ: -2,
    zIndex: 10,
  },
  {
    title: "UI / UX Design",
    description: "User-focused interfaces crafted to improve usability, create visual consistency, and make digital products intuitive and effective.",
    bgColor: "bg-[#1a5bcf]",
    textColor: "text-white",
    icon: <CopyPlus className="w-5 h-5 md:w-6 md:h-6" />,
    bgPosition: "center center",
    initialX: 0,
    splitX: 0,
    finalRotateY: 180, // Flips flat
    finalRotateZ: 0,
    zIndex: 20,
  },
  {
    title: "Motion & Interactive",
    description: "Thoughtful animations and interactive experiences designed to enhance storytelling, increase engagement, and bring digital products to life.",
    bgColor: "bg-[#1c1c1c]",
    textColor: "text-white",
    icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />,
    bgPosition: "right center",
    initialX: 100, // Starts immediately to the right of the center card
    splitX: 115,   // Moves right when splitting
    finalRotateY: 180 - 15, // Flips and tilts left
    finalRotateZ: 2,
    zIndex: 10,
  }
];

export default function Services() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const cardInnersRef = useRef([]);
  const frontFacesRef = useRef([]);

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // 1. Initial Setup
      // Position the outer wrappers tightly together to form the cohesive image
      services.forEach((service, i) => {
        gsap.set(cardsRef.current[i], { xPercent: service.initialX });
        // Ensure inner cards are flat
        gsap.set(cardInnersRef.current[i], { rotateY: 0, rotateZ: 0 });
      });

      // Set initial border radii for the front faces so they form ONE solid rectangle
      gsap.set(frontFacesRef.current[0], { borderRadius: "1vw 0 0 1vw" });
      gsap.set(frontFacesRef.current[1], { borderRadius: "0 0 0 0" });
      gsap.set(frontFacesRef.current[2], { borderRadius: "0 1vw 1vw 0" });

      // 2. The Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-10% top",
          end: "+=400%", // 400vh scroll duration for a smooth sequence
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Phase 1: Splitting apart
      tl.to(cardsRef.current[0], { xPercent: services[0].splitX, duration: 1, ease: "power1.inOut" }, 0);
      tl.to(cardsRef.current[2], { xPercent: services[2].splitX, duration: 1, ease: "power1.inOut" }, 0);
      
      // Animate front faces to become fully rounded as they separate
      tl.to(frontFacesRef.current, { borderRadius: "1vw", duration: 1, ease: "power1.inOut" }, 0);
      
      // Push the center card forward slightly for depth
      tl.to(cardsRef.current[1], { scale: 1.05, duration: 1, ease: "power1.inOut" }, 0);

      // Phase 2: Flipping over
      tl.to(cardInnersRef.current, { 
        rotateY: 180, 
        duration: 2, 
        ease: "power2.inOut",
        stagger: 0.1 // Slight delay between flips for a cooler effect
      }, 1);

      // Phase 3: Final perspective angles
      // Start at 3.5 to ensure Phase 2's rotation is completely finished (preventing GSAP property overlap flicker)
      tl.to(cardInnersRef.current[0], { 
        rotateY: services[0].finalRotateY, 
        rotateZ: services[0].finalRotateZ, 
        duration: 1, 
        ease: "power1.inOut" 
      }, 3.5);
      
      tl.to(cardInnersRef.current[2], { 
        rotateY: services[2].finalRotateY, 
        rotateZ: services[2].finalRotateZ, 
        duration: 1, 
        ease: "power1.inOut" 
      }, 3.5);

      return () => tl.kill();
    });

  }, { scope: containerRef });

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="relative w-full bg-[#0b0b0d]"
    >
      <div className="relative w-full h-auto md:h-screen flex flex-col items-center justify-center py-20 md:py-0 overflow-hidden perspective-[2000px]">
        
        {/* Title */}
        <div className="relative z-20 w-full max-w-[92vw] md:max-w-[88vw] mx-auto text-center mb-20 md:mb-0 md:absolute md:top-[2vh] md:left-0 md:right-0">
          <h2 className="text-5xl md:text-[4.5vw] font-bold text-[#f5f5f7] tracking-tight drop-shadow-lg">
            My Services
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:block items-center gap-8 md:gap-0 px-6">
          
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              style={{ zIndex: service.zIndex }}
              className="
                relative w-[85vw] h-[55vh] md:w-[24vw] md:h-[65vh]
                md:absolute md:top-0 md:bottom-0 md:left-0 md:right-0 md:m-auto
                rounded-[2rem] md:rounded-none
                /* Perspective applied to parent for true 3D inner flipping */
                perspective-[1500px]
              "
            >
              {/* Inner Flipping Container */}
              <div 
                ref={el => cardInnersRef.current[index] = el}
                className="w-full h-full relative"
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* --- FRONT FACE (The Dynamic WebGL Smoke) --- */}
                {/* Hide entirely on mobile, only show on md+ */}
                <div 
                  ref={el => frontFacesRef.current[index] = el}
                  className="hidden md:block absolute inset-0 w-full h-full shadow-2xl overflow-hidden bg-black"
                  style={{ 
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <SmokeBackground smokeColor="#1a5bcf" />
                  <div className="absolute inset-0 bg-black/10 pointer-events-none"></div> {/* Subtle tint */}
                </div>

                {/* --- BACK FACE (The Service Content) --- */}
                <div 
                  className={`
                    md:absolute md:inset-0 w-full h-full rounded-[2rem] md:rounded-[1vw] p-8 md:p-[2vw] flex flex-col justify-between shadow-2xl
                    ${service.bgColor} ${service.textColor}
                  `}
                  style={{ 
                    backfaceVisibility: isDesktop ? 'hidden' : 'visible',
                    transform: isDesktop ? 'rotateY(180deg)' : 'none'
                  }}
                >
                  {/* Premium SVG Noise Texture Overlay */}
                  <div 
                    className="absolute inset-0 w-full h-full mix-blend-overlay pointer-events-none rounded-[2rem] md:rounded-[1vw] opacity-[0.35]"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                  ></div>

                  {/* Icon */}
                  <div className="relative z-10 opacity-80">
                    {service.icon}
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 flex flex-col gap-4">
                    <h3 className="text-3xl md:text-[2vw] leading-[1.1] font-medium tracking-tight pr-4 !text-inherit">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-[0.9vw] leading-relaxed opacity-90 !text-inherit">
                      {service.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
