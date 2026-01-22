// SkillsCarouselMobile.tsx
import * as React from "react";
import type { ReactElement } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./carousel/carousel";

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
          {categories.map((cat) => (
            <CarouselItem key={cat.title} className="basis-full">
              <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white">{cat.title}</CardTitle>
                  <Separator className="bg-white/10" />
                </CardHeader>

                <CardContent className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <span className="text-white text-xl leading-none">
                        {skill.icon}
                      </span>
                      <span className="text-sm text-white/90">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={[
              "h-2 w-2 rounded-full transition",
              i === selected ? "bg-white" : "bg-white/30",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
