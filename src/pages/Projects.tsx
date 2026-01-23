import { useEffect, useLayoutEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import SectionHeader from "../components/common/SectionHeader";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import { PROJECTS } from "../utils/constants";

const useIsLarge = () => {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)"); // lg
        const onChange = () => setIsLarge(mq.matches);
        onChange();
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return isLarge;
};

// Clamp mobile height so it doesn't show multiple cards initially
function useFirstCardHeight(isLarge: boolean) {
    const [height, setHeight] = useState<number | null>(null);

    useLayoutEffect(() => {
        if (isLarge) {
            setHeight(null);
            return;
        }

        let ro: ResizeObserver | null = null;
        let raf1 = 0;
        let raf2 = 0;

        const attach = () => {
            const el = document.querySelector(
                ".js-first-stack-card"
            ) as HTMLElement | null;
            if (!el) return false;

            const update = () => {
                const h = el.getBoundingClientRect().height;
                setHeight(Math.ceil(h) + 20);
            };

            update();
            ro = new ResizeObserver(update);
            ro.observe(el);
            window.addEventListener("resize", update);
            return true;
        };

        if (!attach()) {
            raf1 = requestAnimationFrame(() => {
                if (!attach()) raf2 = requestAnimationFrame(() => attach());
            });
        }

        return () => {
            if (raf1) cancelAnimationFrame(raf1);
            if (raf2) cancelAnimationFrame(raf2);
            if (ro) ro.disconnect();
            // (ok to leave resize listener in practice; if you want perfect cleanup, we can store update ref)
        };
    }, [isLarge]);

    return height;
}

const gradients = [
    "bg-gradient-to-br from-[#FF512F] to-[#DD2476]",
    "bg-gradient-to-br from-[#8E2DE2] to-[#4A00E0]",
    "bg-gradient-to-br from-[#11998e] to-[#38ef7d]",
    "bg-gradient-to-br from-[#fc4a1a] to-[#f7b733]",
    "bg-gradient-to-br from-[#00b09b] to-[#96c93d]",
];

export default function Projects() {
    const isLarge = useIsLarge();
    const firstCardH = useFirstCardHeight(isLarge);

    useEffect(() => {
        if (!isLarge && firstCardH) window.dispatchEvent(new Event("resize"));
    }, [isLarge, firstCardH]);

    const stack = (
        <ScrollStack
            useWindowScroll={false}
            className={[
                "w-full h-full",
                "overflow-y-scroll overflow-x-visible",
                "overscroll-contain",
                "scrollbar-none",
                "[&::-webkit-scrollbar]:w-0",
                "[&::-webkit-scrollbar]:h-0",
                "[&::-webkit-scrollbar-thumb]:bg-transparent",
                "[&::-webkit-scrollbar-track]:bg-transparent",
            ].join(" ")}
            stackPosition={isLarge ? "6%" : "20%"}
            scaleEndPosition={isLarge ? "2%" : "10%"}
            baseScale={isLarge ? 0.92 : 0.85}
            itemScale={isLarge ? 0.02 : 0.03}
            itemStackDistance={isLarge ? 18 : 30}
            itemDistance={isLarge ? 50 : 100}
            rotationAmount={0}
            blurAmount={0}
        >
            {PROJECTS.map((project, index) => (
                <ScrollStackItem
                    key={project.title ?? index}
                    itemClassName={[
                        index === 0 ? "js-first-stack-card" : "",
                        "h-auto",
                        "p-5 sm:p-8 lg:p-10",
                        "my-6 sm:my-8",
                        "rounded-3xl sm:rounded-[40px]",
                    ].join(" ")}
                >
                    <div
                        className={[
                            "w-full relative overflow-hidden border border-white/15",
                            "shadow-xl sm:shadow-2xl",
                            gradients[index % gradients.length],
                            "rounded-3xl sm:rounded-[40px]",
                            "p-5 sm:p-8 lg:p-10",
                        ].join(" ")}
                    >
                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start sm:items-center justify-between gap-3">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug">
                                        {project.title}
                                    </h3>

                                    {project.inProgress && (
                                        <span className="shrink-0 px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-white/15 border border-white/20 rounded-full">
                                            In Progress
                                        </span>
                                    )}
                                </div>

                                <div className="h-[2px] w-14 sm:w-20 bg-white/40" />

                                <p className="text-white/90 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2 sm:pt-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={`${t}-${i}`}
                                            className="px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold text-white bg-black/20 border border-white/15 sm:backdrop-blur-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap items-center gap-4 pt-4 sm:pt-6">
                                    {project.links?.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                                        >
                                            <FaGithub className="text-lg sm:text-xl" />
                                            <span className="text-sm sm:text-base font-medium underline-offset-4 hover:underline">
                                                GitHub
                                            </span>
                                        </a>
                                    )}

                                    {project.links?.website && (
                                        <a
                                            href={project.links.website}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-base sm:text-lg" />
                                            <span className="text-sm sm:text-base font-medium underline-offset-4 hover:underline">
                                                Website
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollStackItem>
            ))}
        </ScrollStack>
    );

    return (
        <main className="w-full flex flex-col min-h-screen">
            <section className="w-full flex flex-col items-center px-4 flex-1 min-h-0">
                <div className="w-full flex flex-col items-center">
                    <SectionHeader title="Projects" />
                </div>

                <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 text-white/50 text-xs tracking-wide select-none">
                    <span className="uppercase">Scroll</span>
                    <ChevronDown className="h-4 w-4 animate-bounce" />
                </div>

                {isLarge ? (
                    <div className="w-full max-w-5xl">
                        <div className="h-[calc(100vh-50px)]">{stack}</div>
                    </div>
                ) : (
                    <div className="-mx-4 w-screen mt-6 h-[70vh] overflow-hidden">
                        {stack}
                    </div>
                )}
            </section>
        </main>
    );
}
