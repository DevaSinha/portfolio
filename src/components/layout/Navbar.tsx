import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import { cn } from '@/lib/utils';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = NAV_ITEMS.map(item => item.toLowerCase());
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"
                )}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div
                            className="text-xl font-bold font-mono tracking-tighter cursor-pointer text-primary"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            &lt;Devanshu Sinha/&gt;
                        </div>

                        <nav className="hidden md:flex items-center gap-8">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item.toLowerCase())}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        activeSection === item.toLowerCase() ? "text-primary" : "text-muted"
                                    )}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>

                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black pt-20 px-4 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 items-center">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item}
                                    onClick={() => handleNavClick(item.toLowerCase())}
                                    className={cn(
                                        "text-lg font-medium transition-colors hover:text-primary",
                                        activeSection === item.toLowerCase() ? "text-primary" : "text-muted"
                                    )}
                                >
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
