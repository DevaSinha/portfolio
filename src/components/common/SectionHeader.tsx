import { motion } from 'motion/react';

interface SectionHeaderProps {
    title: string;
    className?: string;
}

const SectionHeader = ({ title, className = "" }: SectionHeaderProps) => {
    return (
        <div className={`flex items-center gap-4 mb-12 w-full max-w-2xl ${className}`}>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-100 whitespace-nowrap"
            >
                {title}
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                className="h-[1px] bg-gray-700 flex-grow max-w-[300px] origin-left"
            />
        </div>
    );
};

export default SectionHeader;
