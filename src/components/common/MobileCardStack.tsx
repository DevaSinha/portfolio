import { useState } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface MobileCardStackProps {
    children: React.ReactNode[];
}

const wrapIndex = (i: number, len: number) => (i + len) % len;

const MobileCardStack = ({ children }: MobileCardStackProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = () => {
        setDirection(1);
        setActiveIndex((prev) => wrapIndex(prev + 1, children.length));
    };

    const prev = () => {
        setDirection(-1);
        setActiveIndex((prev) => wrapIndex(prev - 1, children.length));
    };

    const onDragEnd = (_e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const threshold = 50;
        const velocityThreshold = 500;

        if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
            next();
        } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
            prev();
        }
    };

    return (
        <div className="relative w-full h-[60vh] flex flex-col items-center justify-center">
            <div className="relative w-full flex justify-center items-center h-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={activeIndex}
                        custom={direction}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={onDragEnd}
                        onPointerDown={(e) => e.stopPropagation()}
                        initial={{ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.8 }}
                        animate={{ x: 0, opacity: 1, scale: 1 }}
                        exit={{ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="mobile-card-stack absolute w-full max-w-sm cursor-grab active:cursor-grabbing select-none"
                        style={{ touchAction: "pan-y" }}
                    >
                        {children[activeIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="absolute -bottom-10 flex gap-2">
                {children.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === activeIndex ? "bg-secondary" : "bg-white/20"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default MobileCardStack;
