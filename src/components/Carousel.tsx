import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface CarouselItem {
    title: string;
    description: string;
    id: number;
    icon: React.ReactNode;
}

export interface CarouselProps {
    items?: CarouselItem[];
    baseWidth?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
    children?: React.ReactNode;
}

const Carousel = ({
    items = [],
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = true,
    round = false,
    children,
}: CarouselProps) => {
    const plugins = [];
    if (autoplay) {
        plugins.push(
            Autoplay({
                delay: autoplayDelay,
                stopOnInteraction: true,
                stopOnMouseEnter: pauseOnHover,
            })
        );
    }

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop, align: "center" }, plugins);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const onInit = useCallback((emblaApi: any) => {
        setScrollSnaps(emblaApi.scrollSnapList());
    }, []);

    const onSelect = useCallback((emblaApi: any) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;
        onInit(emblaApi);
        onSelect(emblaApi);
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    const useItems = !children && items.length > 0;
    const slideCount = children ? React.Children.count(children) : items.length;

    return (
        <div className="relative w-full max-w-sm mx-auto">
            {/* Viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y">
                    {children
                        ? React.Children.map(children, (child, index) => (
                              <div
                                  key={index}
                                  className="flex-[0_0_100%] min-w-0 pl-4 py-4" /* Full width slides with padding */
                              >
                                  <div className="mx-auto transform transition-transform duration-300">
                                      {child}
                                  </div>
                              </div>
                          ))
                        : items.map((item, index) => (
                              <div
                                  key={item.id || index}
                                  className="flex-[0_0_100%] min-w-0 pl-4 py-4"
                              >
                                  <div
                                      className={`relative flex flex-col p-6 h-full min-h-[400px] mx-auto
                    ${
                        round
                            ? "items-center justify-center text-center rounded-full aspect-square bg-[#060010]"
                            : "items-center justify-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
                    }`}
                                  >
                                      <div className="text-4xl text-cyan-400 mb-4">
                                          {item.icon}
                                      </div>
                                      <h3 className="text-xl font-bold text-white mb-2">
                                          {item.title}
                                      </h3>
                                      <p className="text-gray-400 text-sm">
                                          {item.description}
                                      </p>
                                  </div>
                              </div>
                          ))}
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === selectedIndex ? "bg-cyan-400 w-6" : "bg-gray-600 hover:bg-gray-400"}`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
