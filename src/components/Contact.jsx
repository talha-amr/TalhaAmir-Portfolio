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
    const [submitStatus, setSubmitStatus] = useState('idle');

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
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: "power2.out" }
        )
            .fromTo(formRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
                "-=0.5"
            );

    }, { scope: containerRef });

    return (
        <section id="contact" className="min-h-screen relative bg-[#0b0b0d] flex items-center justify-center py-20 md:py-[5.55vw] overflow-hidden" ref={containerRef}>
            <div className="my-container relative z-10 w-full max-w-6xl md:max-w-[90vw] grid lg:grid-cols-2 gap-12 md:gap-[4vw] lg:gap-[8vw] items-center justify-between">

                {/* Left Side: Text Content */}
                <div className="space-y-8 md:space-y-[2.5vw] text-center lg:text-left">
                    <h2 className="contact-text text-4xl md:text-[4.5vw] font-semibold tracking-tight text-[#f5f5f7] leading-tight">
                        Let's build something <br />
                        <span className="text-[#a1a1a6]">extraordinary.</span>
                    </h2>
                    <p className="contact-text text-[#86868b] text-lg md:text-[1.5vw] leading-relaxed max-w-xl md:max-w-[45vw] mx-auto lg:mx-0 font-normal">
                        I'm currently looking for new opportunities. Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas.
                    </p>

                    <div className="contact-text flex items-center justify-center lg:justify-start gap-4 md:gap-[1.5vw] pt-4 md:pt-[1.5vw]">
                        <a href="https://github.com/talha-amr" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-[1.25vw] rounded-full bg-[#16181d] border border-white/5 hover:bg-[#1c1e24] transition-colors duration-300">
                            <Github className="w-5 h-5 md:w-[1.6vw] md:h-[1.6vw] text-[#f5f5f7]" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-talha-amir-843376329" target="_blank" rel="noopener noreferrer" className="group p-4 md:p-[1.25vw] rounded-full bg-[#16181d] border border-white/5 hover:bg-[#1c1e24] transition-colors duration-300">
                            <Linkedin className="w-5 h-5 md:w-[1.6vw] md:h-[1.6vw] text-[#f5f5f7]" />
                        </a>
                        <a href="mailto:tellyamir16@gmail.com" className="group p-4 md:p-[1.25vw] rounded-full bg-[#16181d] border border-white/5 hover:bg-[#1c1e24] transition-colors duration-300">
                            <Mail className="w-5 h-5 md:w-[1.6vw] md:h-[1.6vw] text-[#f5f5f7]" />
                        </a>
                    </div>
                </div>

                {/* Right Side: Clean Form */}
                <div ref={formRef} className="relative w-full lg:ml-auto">
                    <form
                        className="relative bg-[#16181d] border border-white/5 rounded-2xl p-8 md:p-[3.5vw] shadow-sm"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-6 md:space-y-[2vw] relative z-10">
                            {/* Hidden Captcha for FormSubmit */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="space-y-2 md:space-y-[0.8vw]">
                                <label htmlFor="name" className="text-[13px] md:text-[1.1vw] font-medium text-[#f5f5f7] ml-1 md:ml-[0.27vw]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 md:px-[1.5vw] md:py-[1.2vw] bg-[#0b0b0d] border border-white/10 rounded-lg md:rounded-[0.7vw] text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all duration-200 text-base md:text-[1.2vw]"
                                    placeholder="John Doe"
                                    autoComplete="off"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2 md:space-y-[0.8vw]">
                                <label htmlFor="email" className="text-[13px] md:text-[1.1vw] font-medium text-[#f5f5f7] ml-1 md:ml-[0.27vw]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 md:px-[1.5vw] md:py-[1.2vw] bg-[#0b0b0d] border border-white/10 rounded-lg md:rounded-[0.7vw] text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all duration-200 text-base md:text-[1.2vw]"
                                    placeholder="john@example.com"
                                    autoComplete="off"
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="space-y-2 md:space-y-[0.8vw]">
                                <label htmlFor="message" className="text-[13px] md:text-[1.1vw] font-medium text-[#f5f5f7] ml-1 md:ml-[0.27vw]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 md:px-[1.5vw] md:py-[1.2vw] bg-[#0b0b0d] border border-white/10 rounded-lg md:rounded-[0.7vw] text-[#f5f5f7] placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] transition-all duration-200 resize-none text-base md:text-[1.2vw]"
                                    placeholder="Tell me about your project..."
                                    disabled={isSubmitting}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full mt-2 md:mt-[0.55vw] px-8 py-3 md:px-[2.22vw] md:py-[0.83vw] bg-[#f5f5f7] hover:bg-white text-black font-medium rounded-lg md:rounded-[0.55vw] transition-all duration-200 flex items-center justify-center gap-2 md:gap-[0.55vw] disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span>
                                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                </span>
                                {!isSubmitting && submitStatus !== 'success' && (
                                    <Send className="w-4 h-4 md:w-[1.11vw] md:h-[1.11vw]" />
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <p className="text-green-500 text-sm text-center font-medium animate-pulse">
                                    Thanks! I'll get back to you soon.
                                </p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-sm text-center font-medium">
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
