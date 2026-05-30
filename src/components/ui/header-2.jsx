'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10); // Changed threshold to 10 to match example's intent

    const links = [
        {
            label: 'About',
            href: '#about',
        },
        {
            label: 'Skills',
            href: '#skills',
        },
        {
            label: 'Work',
            href: '#projects',
        },
    ];

    React.useEffect(() => {
        if (open) {
            // Disable scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scroll
            document.body.style.overflow = '';
        }

        // Cleanup when component unmounts (important for Next.js)
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={cn(
                'fixed top-0 z-50 transition-all duration-300 ease-out left-0 w-full md:left-1/2 md:-translate-x-1/2 md:max-w-[94vw] border-b border-transparent',
                {
                    'bg-[#0b0b0d]/80 border-white/5 backdrop-blur-lg md:top-[1.11vw] md:max-w-[90vw] md:rounded-[0.83vw] md:border md:shadow-2xl': scrolled && !open,
                    'bg-[#0b0b0d] h-screen md:h-auto': open,
                }
            )}
        >
            <div className="w-full px-4 md:px-[1.66vw] md:py-0 flex items-center justify-between">
                <nav
                    className={cn(
                        'relative z-[60] flex h-20 md:h-[5.55vw] w-full items-center justify-between transition-all ease-out',
                        {
                            'h-16 md:h-[4.44vw]': scrolled && !open,
                        }
                    )}
                >
                    <a href="#" className={cn(
                        "text-[1.5rem] md:text-[1.66vw] font-bold tracking-tighter transition-colors duration-300 text-[#f5f5f7]"
                    )}>
                        TalhaAmir<span className="text-blue-500">.</span>
                    </a>

                    <div className="hidden items-center gap-2 md:flex md:gap-[0.55vw]">
                        {links.map((link, i) => (
                            <a
                                key={i}
                                className={cn(
                                    buttonVariants({ variant: 'ghost' }),
                                    "text-sm md:text-[0.97vw] font-medium transition-colors text-[#a1a1a6] hover:text-[#f5f5f7] hover:bg-white/5 md:px-[1vw] md:py-[0.55vw]"
                                )}
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className={cn(
                                "ml-2 inline-flex items-center justify-center px-6 py-2.5 md:ml-[0.55vw] md:px-[1.66vw] md:py-[0.69vw] text-sm md:text-[0.97vw] font-semibold rounded-full transition-all duration-300 hover:scale-105 leading-none bg-white text-black hover:bg-neutral-200"
                            )}
                        >
                            Let's Talk
                        </a>
                    </div>
                    <Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden">
                        <MenuToggleIcon open={open} className={cn("size-6 text-white")} duration={300} />
                    </Button>
                </nav>
            </div>

            <div
                className={cn(
                    'fixed top-[80px] right-0 bottom-0 left-0 z-50 flex flex-col overflow-y-auto bg-[#0b0b0d] md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div
                    data-slot={open ? 'open' : 'closed'}
                    className={cn(
                        'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
                        'flex min-h-full w-full flex-col justify-between gap-y-8 p-8 pb-12',
                    )}
                >
                    <div className="grid gap-y-6">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className={buttonVariants({
                                    variant: 'ghost',
                                    className: 'justify-start text-4xl font-bold text-[#f5f5f7] hover:text-white hover:bg-white/10 h-auto py-4',
                                })}
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2 pt-8">
                        <a
                            href="#contact"
                            className={cn(buttonVariants({ variant: 'default' }), "w-full bg-[#f5f5f7] text-black hover:bg-white h-16 text-xl font-bold rounded-2xl")}
                            onClick={() => setOpen(false)}
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
