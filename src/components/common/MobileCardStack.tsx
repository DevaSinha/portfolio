import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

interface MobileCardStackProps {
    children: React.ReactNode[];
}

const wrapIndex = (index: number, length: number) => {
    return (index + length) % length;
};


const MobileCardStack = ({ children }: MobileCardStackProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x < -50) {
            setDirection(1);
            setActiveIndex((prev) => wrapIndex(prev + 1, children.length));
        } else if (info.offset.x > 50) {
            setDirection(-1);
            setActiveIndex((prev) => wrapIndex(prev - 1, children.length));
        }
    };


    return (
        <div className="relative w-full h-[60vh] flex justify-center items-center overflow-visible">
            <AnimatePresence initial={false} custom={direction}>
                {children.map((child, index) => {
                    const isCardActive = index === activeIndex;
                    const total = children.length;
                    let offset = index - activeIndex;
                    if (offset < 0) offset += total;
                    if (offset > 2) return null;

                    return (
                        <motion.div
                            key={index}
                            custom={direction}
                            drag={isCardActive ? "x" : false}
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={onDragEnd}
                            initial={{
                                scale: 0.9 - (offset * 0.05),
                                opacity: 0,
                                x: 100 + (offset * 20),
                                zIndex: 10 - offset
                            }}
                            animate={{
                                scale: isCardActive ? 1 : 1 - (offset * 0.08), // Less shrinkage
                                opacity: isCardActive ? 1 : 1 - (offset * 0.15), // Less fade
                                x: isCardActive ? 0 : (offset * 35), // More visible peek (35px per card)
                                y: isCardActive ? 0 : (offset * 10), // Slight vertical drop for stack effect
                                rotate: isCardActive ? 0 : (offset * 3), // Slight rotation
                                zIndex: 10 - offset,
                                filter: isCardActive ? "blur(0px)" : "blur(1px)"
                            }}
                            exit={{
                                x: direction < 0 ? -300 : 300, // Exit direction based on swipe
                                opacity: 0,
                                scale: 0.8,
                                zIndex: 0
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className={`absolute w-full max-w-sm ${!isCardActive ? 'pointer-events-none' : ''}`}
                            style={{
                                touchAction: "pan-y" // Allow vertical scrolling
                            }}
                        >
                            {child}
                        </motion.div>
                    );
                })}
            </AnimatePresence>
            <div className="absolute -bottom-12 flex gap-2">
                {children.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${idx === activeIndex ? 'bg-secondary' : 'bg-white/20'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileCardStack;
