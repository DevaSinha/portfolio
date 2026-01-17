import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { NAV_ITEMS, SOCIAL_LINKS } from '../utils/constants';
import MobileNavbar from './MobileNavbar';

interface NavbarProps {
    activeSection: number;
    scrollToSection: (index: number) => void;
}

const Navbar = ({ activeSection, scrollToSection }: NavbarProps) => {
    return (
        <>
            <MobileNavbar activeSection={activeSection} scrollToSection={scrollToSection} />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-between items-center py-6 px-12 backdrop-blur-sm bg-primary/80 border-b border-white/10"
            >
                <div
                    className="text-secondary font-bold text-xl cursor-pointer"
                    onClick={() => scrollToSection(0)}
                >
                    DS
                </div>

                <div className="flex gap-8">
                    {NAV_ITEMS.map((item, index) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(index)}
                            className={`text-sm font-mono transition-all duration-300 relative group ${activeSection === index ? 'text-secondary' : 'text-textLight hover:text-secondary'
                                }`}
                        >
                            <span className="relative z-10">{item}</span>
                            {activeSection === index && (
                                <motion.div
                                    layoutId="navbar-underline"
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-secondary rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="flex gap-6">
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight hover:text-secondary text-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight hover:text-secondary text-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;
