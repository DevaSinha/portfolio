'use client';

import { motion, easeOut } from 'motion/react';
import * as React from 'react';

interface SkillFlipCardProps {
    frontContent: React.ReactNode;
    backContent: React.ReactNode;
    className?: string;
}

export function SkillFlipCard({ frontContent, backContent, className = "" }: SkillFlipCardProps) {
    const [isFlipped, setIsFlipped] = React.useState(false);

    const isTouchDevice =
        typeof window !== 'undefined' && 'ontouchstart' in window;

    const handleClick = () => {
        if (isTouchDevice) setIsFlipped(!isFlipped);
    };

    const handleMouseEnter = () => {
        if (!isTouchDevice) setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        if (!isTouchDevice) setIsFlipped(false);
    };

    const cardVariants = {
        front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
        back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
    };

    return (
        <div
            className={`relative perspective-1000 cursor-pointer ${className}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            {/* FRONT */}
            <motion.div
                className="absolute inset-0 backface-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col"
                animate={isFlipped ? 'back' : 'front'}
                variants={cardVariants}
                style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                }}
            >
                {frontContent}
            </motion.div>

            <motion.div
                className="absolute inset-0 backface-hidden rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm flex flex-col"
                initial={{ rotateY: 180 }}
                animate={isFlipped ? 'front' : 'back'}
                variants={cardVariants}
                style={{
                    transformStyle: 'preserve-3d',
                    rotateY: 180,
                    backfaceVisibility: 'hidden'
                }}
            >
                {backContent}
            </motion.div>
        </div>
    );
}
