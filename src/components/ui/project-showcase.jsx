import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

import basilicoImg from "../../images/basilico-concept.png";
import cryonixImg from "../../images/cryonix-1.png";
import velvetPourImg from "../../images/velvet-pour.png";
import zushafiImg from "../../images/zushafi.png";
import zentryImg from "../../images/zentry.png";
import uniconnectImg from "../../images/landing-page.png";
import organicPulpsImg from "../../images/organic-pulp-ss.png";

const projects = [
  {
    title: "Organic Pulps",
    category: "Headless Shopify Experience",
    description:
      "A custom ecommerce experience featuring Shopify product and checkout integration, responsive design, and immersive GSAP animations.",
    year: "2026",
    link: "https://organicpulps.com/",
    image: organicPulpsImg,
  },
  {
    title: "Basilico",
    category: "Luxury Restaurant Experience",
    description:
      "A premium digital dining experience for a luxury Italian restaurant, featuring immersive GSAP animations and sophisticated visual storytelling.",
    year: "2026",
    link: "https://basilico-concept.vercel.app/",
    image: basilicoImg,
  },
  {
    title: "Cryonix",
    category: "Premium Technology Brand",
    description:
      "Premium technology brand experience designed to strengthen credibility, increase engagement, and showcase services through immersive storytelling.",
    year: "2026",
    link: "https://cryonix-peach.vercel.app/",
    image: cryonixImg,
  },
  {
    title: "Velvet Pour",
    category: "Luxury Beverage Experience",
    description:
      "Luxury beverage brand website crafted to elevate brand perception, highlight products, and create a memorable customer experience.",
    year: "2025",
    link: "https://velvet-pour-alpha-smoky.vercel.app/",
    image: velvetPourImg,
  },
  {
    title: "ZBS.",
    category: "Personal Brand Platform",
    description:
      "Professional personal branding website focused on establishing authority, showcasing expertise, and attracting potential clients.",
    year: "2025",
    link: "https://www.zushafi.com/",
    image: zushafiImg,
  },
  {
    title: "Zentry",
    category: "Interactive Digital Experience",
    description:
      "Interactive digital experience combining modern design and motion to increase engagement and strengthen brand identity.",
    year: "2025",
    link: "https://zentry-phi-blue.vercel.app/",
    image: zentryImg,
  },
  {
    title: "UniConnect",
    category: "Education Management Platform",
    description:
      "University management platform built to streamline administrative workflows, reporting, and student record management.",
    year: "2024",
    link: "https://uni-connect-cloud.vercel.app/",
    image: uniconnectImg,
  },
];

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsVisible(false);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full max-w-[92vw] md:max-w-[88vw] mx-auto px-6 py-16 md:py-[8vw]"
    >
      <h2 className="text-3xl md:text-[5.2vw] font-bold text-foreground tracking-tight mb-8 md:mb-[5vw] text-center">
        Selected Work
      </h2>

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl hidden md:block"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${
            smoothPosition.y - 100
          }px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition:
            "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[30vw] h-[35vh] bg-secondary rounded-xl overflow-hidden border border-border">
          {projects.map((project, index) => (
            <img
              key={project.title}
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out bg-secondary"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </div>
      </div>

      <div className="space-y-0 relative z-10 w-full md:max-w-[70vw] mx-auto">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.link}
            target={project.link !== "#" ? "_blank" : "_self"}
            rel={project.link !== "#" ? "noopener noreferrer" : ""}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-6 md:py-[1.9vw] border-t border-border transition-all duration-300 ease-out group-last:border-b">
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-secondary/50 rounded-lg md:rounded-[0.55vw]
                  transition-all duration-300 ease-out
                  ${
                    hoveredIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }
                `}
              />

              <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-foreground font-medium text-xl md:text-[1.5vw] tracking-tight">
                      <span className="relative">
                        {project.title}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-[2px] bg-foreground
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    <ArrowUpRight
                      className={`
                        w-5 h-5 md:w-[1.5vw] md:h-[1.5vw] text-muted-foreground
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* NEW CATEGORY LINE */}
                  <p
                    className={`
                      text-[11px] md:text-[0.82vw]
                      uppercase tracking-[0.12em]
                      text-muted-foreground/70
                      mt-4
                      transition-all duration-300 ease-out
                      ${
                        hoveredIndex === index
                          ? "text-foreground/60"
                          : "text-muted-foreground/70"
                      }
                    `}
                  >
                    {project.category}
                  </p>

                  <p
                    className={`
                      text-muted-foreground text-sm md:text-[1.3vw]
                      mt-2 md:mt-[0.6vw]
                      leading-relaxed
                      transition-all duration-300 ease-out
                      max-w-[80vw] md:max-w-[45vw]
                      ${
                        hoveredIndex === index
                          ? "text-foreground/80"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {project.description}
                  </p>
                </div>

                <span
                  className={`
                    text-xs mb-auto mt-1 md:text-[0.9vw]
                    font-mono text-muted-foreground tabular-nums shrink-0
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "text-foreground/80" : ""}
                  `}
                >
                  {project.year}
                </span>

                <div className="mt-4 md:hidden w-full aspect-video rounded-lg overflow-hidden border border-border bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}