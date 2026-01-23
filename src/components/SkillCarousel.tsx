// SkillsCarouselMobile.tsx
import * as React from "react";
import type { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "./carousel/carousel";

type Skill = { name: string; icon: ReactElement };
type SkillCategory = { title: string; skills: Skill[] };

type Props = {
    categories: SkillCategory[];
};

export function SkillsCarousel({ categories }: Props) {
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [selected, setSelected] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        const onSelect = () => setSelected(api.selectedScrollSnap());

        setCount(api.scrollSnapList().length);
        onSelect();

        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    return (
        <div className="w-full">
            <Carousel
                setApi={setApi}
                opts={{ align: "center", loop: true }}
                className="w-full"
            >
                <CarouselContent>
                    {categories.map((cat, idx) => (
                        <CarouselItem key={cat.title} className="basis-full">
                            <Card
                                className={[
                                    "relative overflow-hidden",
                                    "border-white/10 bg-white/[0.04] backdrop-blur-xl",
                                    "shadow-[0_16px_60px_rgba(0,0,0,0.35)]",
                                ].join(" ")}
                            >
                                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-cyan-500/15 blur-3xl" />
                                <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />

                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />

                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90">
                                                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(34,211,238,0.65)]" />
                                            </span>

                                            <div className="min-w-0">
                                                <CardTitle className="text-white text-lg leading-tight">
                                                    {cat.title}
                                                </CardTitle>
                                            </div>
                                        </div>

                                        {/* slide counter */}
                                        <span className="text-[11px] text-white/50 tabular-nums">
                                            {idx + 1}/{categories.length}
                                        </span>
                                    </div>
                                </CardHeader>

                                <CardContent className="pb-5">
                                    {/* pills grid */}
                                    <div className="grid grid-cols-1 gap-2">
                                        {cat.skills.slice(0, 12).map((skill) => (
                                            <div
                                                key={skill.name}
                                                className={[
                                                    "flex items-center gap-2",
                                                    "rounded-xl border border-white/10 bg-white/5",
                                                    "px-3 py-3",
                                                ].join(" ")}
                                            >
                                                <span className="text-white/90 leading-none opacity-90">
                                                    {skill.icon}
                                                </span>
                                                <span className="text-xs font-medium text-white/90 truncate">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        ))}

                                        {cat.skills.length -
                                            cat.skills.slice(0, 12).length >
                                            0 && (
                                            <div className="col-span-2 mt-1 text-xs text-white/55">
                                                +{" "}
                                                {cat.skills.length -
                                                    cat.skills.slice(0, 12).length}{" "}
                                                more
                                            </div>
                                        )}
                                    </div>

                                    {/* swipe hint */}
                                    <div className="mt-4 flex items-center justify-between text-[11px] text-white/45">
                                        <span>Swipe for more</span>
                                        <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1">
                                            {selected + 1} / {count || categories.length}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Dots (nicer) */}
            <div className="mt-4 flex items-center justify-center gap-2">
                {Array.from({ length: count || categories.length }).map((_, i) => {
                    const active = i === selected;
                    return (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => api?.scrollTo(i)}
                            className={[
                                "transition-all duration-200",
                                active ? "w-6" : "w-2.5",
                                "h-2.5 rounded-full",
                                active
                                    ? "bg-white shadow-[0_0_18px_rgba(255,255,255,0.35)]"
                                    : "bg-white/25 hover:bg-white/40",
                            ].join(" ")}
                        />
                    );
                })}
            </div>
        </div>
    );
}
