import { ReactNode } from 'react';
import {
    motion
} from 'motion/react';

interface SectionProps {
    children: ReactNode;
    id: number;
}

const Section = ({ children, id }: SectionProps) => {
    return (
        <motion.section
            key={id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 pt-24 overflow-y-auto scrollbar-hide"
            style={{
                willChange: "opacity",
            }}
        >
            <div className="max-w-5xl w-full h-full flex flex-col justify-center">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
