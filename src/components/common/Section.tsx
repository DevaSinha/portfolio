import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    id: number;
}

const Section = ({ children, id }: SectionProps) => {
    return (
        <motion.section
            key={id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
                willChange: "transform, opacity",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 pt-24 overflow-y-auto scrollbar-hide"
        >
            <div className="max-w-5xl w-full h-full flex flex-col justify-center">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
