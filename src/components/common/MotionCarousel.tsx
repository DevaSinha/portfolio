'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';

interface MotionCarouselProps {
    children: React.ReactNode[];
    options?: EmblaOptionsType;
    /** Flex basis for slides. Example: { base: "85%", md: "50%" } */
    flexBasis?: {
        base: string;
        sm?: string;
        md?: string;
        lg?: string;
        xl?: string;
    };
    inactiveOpacity?: number;
    inactiveScale?: number;
    blurInactive?: boolean;
    className?: string;
    dotSize?: {
        active: number;
        inactive: number;
    };
}

const transition: Transition = {
    type: 'spring',
    stiffness: 200,
    damping: 25,
    mass: 1,
};

const useEmblaControls = (emblaApi: EmblaCarouselType | undefined) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

    const scrollTo = React.useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    const onInit = React.useCallback((api: EmblaCarouselType) => {
        setScrollSnaps(api.scrollSnapList());
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    const onSelect = React.useCallback((api: EmblaCarouselType) => {
        setSelectedIndex(api.selectedScrollSnap());
    }, []);

    React.useEffect(() => {
        if (!emblaApi) return;

        onInit(emblaApi);
        emblaApi.on('reInit', onInit).on('select', onSelect);

        return () => {
            emblaApi.off('reInit', onInit).off('select', onSelect);
        };
    }, [emblaApi, onInit, onSelect]);

    return {
        selectedIndex,
        scrollSnaps,
        scrollTo,
    };
};

export function MotionCarousel({
    children,
    options,
    flexBasis = { base: '85%' },
    inactiveOpacity = 0.5,
    inactiveScale = 0.9,
    blurInactive = false,
    className,
    dotSize = { active: 20, inactive: 6 },
}: MotionCarouselProps) {
    const defaultOptions: EmblaOptionsType = {
        align: 'center',
        loop: true,
        ...options,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);
    const { selectedIndex, scrollSnaps, scrollTo } = useEmblaControls(emblaApi);

    // Construct flex-basis class dynamically or using style
    // Tailwind doesn't support dynamic classes easily without SafeList.
    // However, we can use arbitrary values flex-[0_0_VALUE] if strict,
    // or just pass a className for the slide container.
    // For simplicity, I'll optimize by generating styles or using common breakpoints.
    // Actually, passing a className for slide is cleaner.

    return (
        <div className={cn("w-full space-y-4", className)}>
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom">
                    {React.Children.map(children, (child, index) => {
                        const isActive = index === selectedIndex;



                        const getItemClass = () => {
                            const classes = ['min-w-0 px-2 cursor-pointer'];
                            classes.push(`flex-[0_0_${flexBasis.base}]`);
                            if (flexBasis.sm) classes.push(`sm:flex-[0_0_${flexBasis.sm}]`);
                            if (flexBasis.md) classes.push(`md:flex-[0_0_${flexBasis.md}]`);
                            if (flexBasis.lg) classes.push(`lg:flex-[0_0_${flexBasis.lg}]`);
                            if (flexBasis.xl) classes.push(`xl:flex-[0_0_${flexBasis.xl}]`);
                            return cn(classes);
                        };

                        return (
                            <motion.div
                                key={index}
                                className={getItemClass()}
                                onClick={() => !isActive && scrollTo(index)}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1 : inactiveScale,
                                        opacity: isActive ? 1 : inactiveOpacity,
                                    }}
                                    transition={transition}
                                    className={cn("h-full", blurInactive && !isActive && "blur-[4px]")}
                                    style={{
                                        willChange: 'transform, opacity',
                                        transform: 'translateZ(0)',
                                    }}
                                // Fix for Firefox blur flickering if needed (already handled by transform: translateZ(0))
                                >
                                    {child}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center items-center gap-2">
                {scrollSnaps.map((_, index) => (
                    <motion.button
                        key={index}
                        type="button"
                        onClick={() => scrollTo(index)}
                        className={cn(
                            "rounded-full transition-colors",
                            index === selectedIndex ? "bg-secondary" : "bg-white/20 hover:bg-white/40"
                        )}
                        initial={false}
                        animate={{
                            width: index === selectedIndex ? dotSize.active : dotSize.inactive,
                            height: dotSize.inactive > 6 ? dotSize.inactive : 6, // Maintain min height
                        }}
                        transition={transition}
                    />
                ))}
            </div>
        </div>
    );
}
