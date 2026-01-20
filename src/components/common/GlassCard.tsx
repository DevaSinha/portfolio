import { ReactNode } from 'react';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';
import { cn } from '@/lib/utils';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    delay?: number;
}

const GlassCard = ({
    children,
    className = "",
    hoverEffect = false,
    delay = 0,
}: GlassCardProps) => {
    const baseStyles = "bg-white/5 p-6 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300";
    const hoverStyles = hoverEffect
        ? "hover:border-secondary/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(100,255,218,0.12)] hover:-translate-y-2 group"
        : "";

    return (
        <Blur
            delay={delay}
            initialBlur={10}
            blur={0}
            transition={{ type: 'spring', stiffness: 150, damping: 18 }}
            className={cn(baseStyles, hoverStyles, className)}
        >
            {children}
        </Blur>
    );
};

export default GlassCard;
