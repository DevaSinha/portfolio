import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NAV_ITEMS, SOCIAL_LINKS } from '../utils/constants';

interface MobileNavbarProps {
    activeSection: number;
    scrollToSection: (index: number) => void;
}

const MobileNavbar = ({ activeSection, scrollToSection }: MobileNavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (index: number) => {
        scrollToSection(index);
        setIsOpen(false);
    };

    return (
        <div className="md:hidden fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-primary/80 backdrop-blur-md border-b border-white/10">
            {/* Logo or Brand Name (Optional) */}
            <div className="text-xl font-bold text-textLight">DS</div>

            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="text-textLight hover:text-secondary transition-colors z-50 p-2"
            >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-screen w-3/4 max-w-sm bg-primary border-l border-white/10 shadow-2xl z-40 flex flex-col justify-center items-center gap-8"
                    >
                        {/* Navigation Links */}
                        <div className="flex flex-col gap-6 w-full text-center">
                            {NAV_ITEMS.map((item, index) => (
                                <button
                                    key={item}
                                    onClick={() => handleLinkClick(index)}
                                    className={`text-2xl font-mono transition-all duration-300 ${activeSection === index
                                            ? 'text-secondary'
                                            : 'text-textLight hover:text-secondary'
                                        }`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-8">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-textLight hover:text-secondary text-2xl transition-colors"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-textLight hover:text-secondary text-2xl transition-colors"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black/50 z-30"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNavbar;
