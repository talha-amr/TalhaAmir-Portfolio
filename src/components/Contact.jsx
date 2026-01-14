import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch("https://formsubmit.co/ajax/tellyamir16@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formState,
                    _subject: `New Portfolio Message from ${formState.name}`
                })
            });

            const result = await response.json();

            if (result.success === "true" || response.ok) {
                setSubmitStatus('success');
                setFormState({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Form error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });

        tl.fromTo(".contact-text",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
        )
            .fromTo(formRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
                "<"
            );

    }, { scope: containerRef });

    return (
        <section id="contact" className="min-h-screen relative bg-[#0a0a0a] flex items-center justify-center py-20 overflow-hidden" ref={containerRef}>
            {/* Background Ambient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="my-container relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* Left Side: Text Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <h2 className="contact-text text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                        Let's build something <br />
                        <span className="inline-block bg-[linear-gradient(110deg,#a78bfa,45%,#e879f9,55%,#a78bfa)] bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
                            extraordinary.
                        </span>
                    </h2>
                    <p className="contact-text text-neutral-400 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                        I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas.
                    </p>

                    <div className="contact-text flex items-center justify-center lg:justify-start gap-6 pt-4">
                        <a href="https://github.com/talha-amr" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-purple-900/10 transition-all duration-300">
                            <Github className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-talha-amir-843376329" target="_blank" rel="noopener noreferrer" className="group p-4 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-purple-900/10 transition-all duration-300">
                            <Linkedin className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                        <a href="mailto:tellyamir16@gmail.com" className="group p-4 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-purple-500/30 hover:bg-purple-900/10 transition-all duration-300">
                            <Mail className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Glassmorphic Form */}
                <div ref={formRef} className="relative w-full max-w-md mx-auto lg:ml-auto">
                    {/* Glow effect behind form */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl transform rotate-3 scale-105 opacity-50 pointer-events-none" />

                    <form
                        className="relative bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden"
                        onSubmit={handleSubmit}
                    >
                        {/* Form Shimmer Border */}
                        <div className="absolute inset-0 pointer-events-none p-[1px] rounded-3xl overflow-hidden">
                            <div className="absolute top-0 left-[-100%] h-full w-[40%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDuration: '4s' }} />
                        </div>

                        <div className="space-y-6 relative z-10">
                            {/* Hidden Captcha for FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-neutral-300 ml-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-neutral-950/50 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="John Doe"
                                    autoComplete="off"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-neutral-300 ml-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-5 py-4 bg-neutral-950/50 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="john@example.com"
                                    autoComplete="off"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-300 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-5 py-4 bg-neutral-950/50 border border-neutral-800 rounded-xl text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                                    placeholder="Tell me about your project..."
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full group mt-4 relative px-8 py-4 bg-neutral-100 hover:bg-white text-neutral-950 font-bold rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 flex items-center justify-center gap-2 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                <span className="relative z-10">
                                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                </span>
                                {!isSubmitting && submitStatus !== 'success' && (
                                    <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-sm text-center font-medium animate-pulse">
                                    Thanks! I'll get back to you soon.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-sm text-center font-medium">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
