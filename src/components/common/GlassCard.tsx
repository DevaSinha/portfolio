import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends MotionProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = ({
    children,
    className = "",
    hoverEffect = false,
    ...props
}: GlassCardProps) => {
    const baseStyles = "bg-white/5 p-6 rounded-lg backdrop-blur-sm border border-white/10 transition-colors duration-300";
    const hoverStyles = hoverEffect ? "hover:border-secondary/50 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(100,255,218,0.1)] group" : "";

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={hoverEffect ? { y: -8 } : undefined}
            {...props}
            className={`${baseStyles} ${hoverStyles} ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
