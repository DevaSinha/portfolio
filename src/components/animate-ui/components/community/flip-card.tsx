'use client';

import { motion, easeOut } from 'motion/react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  interaction?: 'hover' | 'click';
}

export function FlipCard({ front, back, className, interaction = 'hover' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (interaction === 'click') {
      setIsFlipped((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (interaction === 'hover') {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (interaction === 'hover') {
      setIsFlipped(false);
    }
  };

  const cardVariants = {
    front: { rotateY: 0, transition: { duration: 0.5, ease: easeOut } },
    back: { rotateY: 180, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <div
      className={cn("relative perspective-1000 cursor-pointer", className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* FRONT */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        animate={isFlipped ? 'back' : 'front'}
        variants={cardVariants}
        style={{
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden'
        }}
      >
        {front}
      </motion.div>

      {/* BACK */}
      <motion.div
        className="absolute inset-0 backface-hidden"
        initial={{ rotateY: 180 }}
        animate={isFlipped ? 'front' : 'back'}
        variants={cardVariants}
        style={{
          transformStyle: 'preserve-3d',
          rotateY: 180,
          backfaceVisibility: 'hidden'
        }}
      >
        {back}
      </motion.div>
    </div>
  );
}
