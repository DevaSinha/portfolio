// ScrollStack.tsx (your file) — Lenis fix for Firefox nested scroll
// ✅ Disable Lenis for inner-scroll on Firefox (native scroll is smoother)
// ✅ Keep Lenis for window scroll + non-Firefox browsers
// ✅ No API changes

import React, { useLayoutEffect, useRef, useCallback } from "react";
import type { ReactNode } from "react";
import Lenis from "lenis";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div
    className={`scroll-stack-card relative w-full origin-top will-change-transform ${itemClassName}`.trim()}
    style={{ backfaceVisibility: "hidden" }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string | number;
  scaleEndPosition?: string | number;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
  innerClassName?: string;
  innerTopPadding?: string;
  innerPaddingX?: string;
  innerPaddingBottom?: string;
}

const isFirefoxUA = () =>
  typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
  innerClassName = "",
  innerTopPadding = "pt-6 sm:pt-10",
  innerPaddingX = "px-4 sm:px-6 lg:px-10",
  innerPaddingBottom = "pb-[40rem]",
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(
    new Map<number, { y: number; s: number; r: number; b: number }>()
  );

  const cardTopsRef = useRef<number[]>([]);
  const endTopRef = useRef<number>(0);

  const pendingRAFRef = useRef(false);

  const stackCompletedRef = useRef(false);
  const isUpdatingRef = useRef(false);

  const ff = isFirefoxUA();

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop <= start) return 0;
    if (scrollTop >= end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === "string" && value.includes("%")) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return typeof value === "number" ? value : parseFloat(value);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return { scrollTop: window.scrollY, containerHeight: window.innerHeight };
    }
    const scroller = scrollerRef.current;
    return { scrollTop: scroller ? scroller.scrollTop : 0, containerHeight: scroller ? scroller.clientHeight : 0 };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll]
  );

  const measure = useCallback(() => {
    if (!cardsRef.current.length) return;

    cardTopsRef.current = cardsRef.current.map((el) => getElementOffset(el));

    const endElement = useWindowScroll
      ? (document.querySelector(".scroll-stack-end") as HTMLElement | null)
      : (scrollerRef.current?.querySelector(".scroll-stack-end") as HTMLElement | null);

    endTopRef.current = endElement ? getElementOffset(endElement) : 0;
  }, [getElementOffset, useWindowScroll]);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const tops = cardTopsRef.current;
    const endTop = endTopRef.current;

    let topCardIndex = 0;
    if (blurAmount > 0) {
      for (let j = 0; j < tops.length; j++) {
        const jTriggerStart = tops[j] - stackPositionPx - itemStackDistance * j;
        if (scrollTop >= jTriggerStart) topCardIndex = j;
      }
    }

    const pinEnd = endTop - containerHeight / 2;

    for (let i = 0; i < cardsRef.current.length; i++) {
      const card = cardsRef.current[i];
      if (!card) continue;

      const cardTop = tops[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);

      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      let blur = 0;
      if (blurAmount > 0 && i < topCardIndex) blur = Math.max(0, (topCardIndex - i) * blurAmount);

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const y = Math.round(translateY * 100) / 100;
      const s = Math.round(scale * 1000) / 1000;
      const r = Math.round(rotation * 100) / 100;
      const b = Math.round(blur * 100) / 100;

      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        Math.abs(last.y - y) > 0.1 ||
        Math.abs(last.s - s) > 0.001 ||
        Math.abs(last.r - r) > 0.1 ||
        Math.abs(last.b - b) > 0.1;

      if (changed) {
        card.style.transform = `translate3d(0, ${y}px, 0) scale(${s}) rotate(${r}deg)`;
        if (blurAmount > 0) card.style.filter = b > 0 ? `blur(${b}px)` : "";
        lastTransformsRef.current.set(i, { y, s, r, b });
      }

      if (i === cardsRef.current.length - 1) {
        const inView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (inView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!inView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }

    isUpdatingRef.current = false;
  }, [
    blurAmount,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
  ]);

  const handleScroll = useCallback(() => {
    if (pendingRAFRef.current) return;
    pendingRAFRef.current = true;

    requestAnimationFrame(() => {
      pendingRAFRef.current = false;
      updateCardTransforms();
    });
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    if (!useWindowScroll && ff) {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const onNativeScroll = () => handleScroll();
      scroller.addEventListener("scroll", onNativeScroll, { passive: true });

      return () => {
        scroller.removeEventListener("scroll", onNativeScroll);
      };
    }

    if (useWindowScroll) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchMultiplier: 1.2,
        wheelMultiplier: 1,
        lerp: 0.1,
        infinite: false,
      });

      lenis.on("scroll", handleScroll);

      const raf = (time: number) => {
        lenis.raf(time);
        animationFrameRef.current = requestAnimationFrame(raf);
      };
      animationFrameRef.current = requestAnimationFrame(raf);

      lenisRef.current = lenis;

      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        lenis.destroy();
        lenisRef.current = null;
        animationFrameRef.current = null;
      };
    }

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const content = scroller.querySelector(".scroll-stack-inner") as HTMLElement | null;
    if (!content) return;

    const lenis = new Lenis({
      wrapper: scroller,
      content,
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: "vertical",
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchMultiplier: 1.1,
      wheelMultiplier: 0.9,
      lerp: 0.1,
      infinite: false,
    });

    lenis.on("scroll", handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      lenisRef.current = null;
      animationFrameRef.current = null;
    };
  }, [ff, handleScroll, useWindowScroll]);

  useLayoutEffect(() => {
    if (!useWindowScroll && !scrollerRef.current) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(".scroll-stack-card")
        : (scrollerRef.current?.querySelectorAll(".scroll-stack-card") ?? [])
    ) as HTMLElement[];

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = "transform"; // don't hint filter unless blur used
      card.style.transformOrigin = "top center";
      card.style.backfaceVisibility = "hidden";
      if (!ff) {
        card.style.transform = "translateZ(0)";
        (card.style as any).webkitTransform = "translateZ(0)";
      }
    });

    measure();

    const cleanup = setupLenis();
    updateCardTransforms();

    const onResize = () => {
      measure();
      updateCardTransforms();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);

      if (cleanup) cleanup();
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardTopsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
      pendingRAFRef.current = false;
    };
  }, [itemDistance, useWindowScroll, setupLenis, updateCardTransforms, measure]);

  return (
    <div
      className={`relative w-full h-full overflow-y-auto overflow-x-visible ${className}`.trim()}
      ref={scrollerRef}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
        isolation: "isolate",
        ...(ff ? {} : { transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }),
      }}
    >

      <div
        className={[
          "scroll-stack-inner min-h-screen",
          innerTopPadding,
          innerPaddingX,
          innerPaddingBottom,
          innerClassName,
        ].join(" ")}
      >
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
