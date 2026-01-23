import { useState, useEffect } from "react";
import SectionHeader from "../components/common/SectionHeader";
import FlowingMenu from "../components/FlowingMenu";
import SpotlightCard from "../components/SpotlightCard";
import { SKILL_CATEGORIES } from "../utils/constants";
import { SkillsCarousel } from "@/components/SkillCarousel";

const Skills = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const renderDesktopCards = () =>
        SKILL_CATEGORIES.map((category, index) => (
            <SpotlightCard
                key={index}
                className="flex flex-col h-[500px] border-neutral-800 bg-neutral-900/30 p-0 overflow-hidden relative w-full"
                spotlightColor="rgba(34, 211, 238, 0.4)"
            >
                <div className="p-6 pb-4 relative z-10 bg-neutral-900/50 backdrop-blur-sm border-b border-white/5">
                    <h3 className="text-2xl font-bold text-white tracking-wide">
                        {category.title}
                    </h3>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500/50 to-transparent" />
                </div>
                <div className="flex-grow relative w-full overflow-hidden">
                    <FlowingMenu
                        items={category.skills.map((skill) => ({
                            link: "#skills",
                            text: skill.name,
                            image: skill.icon,
                        }))}
                        bgColor="transparent"
                        textColor="#bab6b6"
                        marqueeTextColor="#000000"
                        speed={2}
                    />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
            </SpotlightCard>
        ));

    return (
        <div className="w-full min-h-screen flex flex-col items-center pt-12 lg:pt-8 pb-20 px-4">
            <SectionHeader title="Skills" />

            <div className="w-full max-w-7xl">
                {isMobile ? (
                    <div className="w-full flex justify-center py-10">
                        <SkillsCarousel categories={SKILL_CATEGORIES} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {renderDesktopCards()}
                    </div>
                )}
            </div>
        </div>
    );
};
export default Skills;
