import { motion } from 'motion/react';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';

interface SectionHeaderProps {
    title: string;
    className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
    return (
        <Blur
            initialBlur={8}
            blur={0}
            delay={100}
            className={`flex items-center gap-4 mb-8 ${className}`}
        >
            <h2 className="text-3xl font-bold text-text">{title}</h2>
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                className="h-[1px] bg-gradient-to-r from-textLight/50 to-transparent w-64 md:w-80 origin-left"
            />
        </Blur>
    );
};

export default SectionHeader;
