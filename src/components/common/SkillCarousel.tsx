'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

interface SkillCarouselProps {
    children: React.ReactNode[];
    options?: EmblaOptionsType;
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

export function SkillCarousel({ children, options }: SkillCarouselProps) {
    const defaultOptions: EmblaOptionsType = {
        align: 'center',
        loop: true,
        ...options,
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(defaultOptions);
    const { selectedIndex, scrollSnaps, scrollTo } = useEmblaControls(emblaApi);

    return (
        <div className="w-full space-y-4">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
                <div className="flex touch-pan-y touch-pinch-zoom">
                    {React.Children.map(children, (child, index) => {
                        const isActive = index === selectedIndex;

                        return (
                            <motion.div
                                key={index}
                                className="min-w-0 flex-[0_0_85%] px-2"
                                onClick={() => !isActive && scrollTo(index)}
                                style={{ willChange: 'transform, opacity' }}
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        scale: isActive ? 1 : 0.9,
                                        opacity: isActive ? 1 : 0.5,
                                    }}
                                    transition={transition}
                                    className="h-full"
                                    style={{
                                        willChange: 'transform, opacity',
                                        transform: 'translateZ(0)',
                                    }}
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
                        className={`rounded-full transition-colors ${index === selectedIndex
                                ? 'bg-secondary'
                                : 'bg-white/20'
                            }`}
                        initial={false}
                        animate={{
                            width: index === selectedIndex ? 20 : 6,
                            height: 6,
                        }}
                        transition={transition}
                    />
                ))}
            </div>
        </div>
    );
}
