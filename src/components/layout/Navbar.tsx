import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/utils/constants';
import { useActiveSection } from '@/hooks/useActiveSection';
import { Menu, X } from 'lucide-react';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const activeSection = useActiveSection(NAV_ITEMS.map((item) => item.toLowerCase()));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };


    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b border-white/5',
                scrolled ? 'h-16 shadow-md' : 'h-20'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-2xl font-bold tracking-tighter hover:text-primary transition-colors"
                >
                    Devanshu Sinha
                </button>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {NAV_ITEMS.map((item) => {
                            const id = item.toLowerCase();
                            const isActive = activeSection === id;
                            return (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(id)}
                                        className={cn(
                                            'text-sm font-medium transition-colors hover:text-primary',
                                            isActive ? 'text-primary' : 'text-muted-foreground'
                                        )}
                                    >
                                        {item}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={cn(
                    'absolute top-full left-0 w-full bg-background border-b border-white/5 md:hidden flex-col items-center py-6 space-y-4 transition-all duration-300 ease-in-out origin-top shadow-xl',
                    isOpen ? 'flex opacity-100 scale-y-100' : 'hidden opacity-0 scale-y-0'
                )}
            >
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </header>
    );
};
