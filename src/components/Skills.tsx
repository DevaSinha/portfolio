import { SKILL_CATEGORIES } from '../utils/constants';
import SectionHeader from './common/SectionHeader';
import { SkillCarousel } from './common/SkillCarousel';
import { SkillFlipCard } from './common/SkillFlipCard';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';

const Skills = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Skills" />

            {/* Desktop Grid with Flip Cards */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <Blur key={index} delay={index * 100} initialBlur={10}>
                        <SkillFlipCard
                            className="h-[320px]"
                            frontContent={
                                <div className="p-6 h-full flex flex-col">
                                    <h3 className="text-xl font-bold text-secondary mb-4 border-b border-white/10 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-6xl text-secondary/30">
                                            {category.skills[0]?.icon}
                                        </div>
                                    </div>
                                    <p className="text-xs text-textLight/60 text-center mt-auto">
                                        Hover
                                    </p>
                                </div>
                            }
                            backContent={
                                <div className="p-6 h-full flex flex-col overflow-y-auto">
                                    <h3 className="text-lg font-bold text-textLight mb-4 border-b border-secondary/20 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="grid grid-cols-1 gap-3 flex-1">
                                        {category.skills.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className="flex items-center gap-3 text-text/90"
                                            >
                                                <span className="text-lg text-secondary">
                                                    {skill.icon}
                                                </span>
                                                <span className="text-sm">{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            }
                        />
                    </Blur>
                ))}
            </div>

            {/* Mobile Carousel with Flip Cards */}
            <div className="md:hidden">
                <Blur initialBlur={8} delay={100}>
                    <SkillCarousel>
                        {SKILL_CATEGORIES.map((category, index) => (
                            <SkillFlipCard
                                key={index}
                                className="h-[350px]"
                                frontContent={
                                    <div className="p-6 h-full flex flex-col">
                                        <h3 className="text-xl font-bold text-secondary mb-4 border-b border-white/10 pb-2 text-center">
                                            {category.title}
                                        </h3>
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="text-7xl text-secondary/40">
                                                {category.skills[0]?.icon}
                                            </div>
                                        </div>
                                        <p className="text-xs text-textLight/60 text-center mt-auto">
                                            Tap
                                        </p>
                                    </div>
                                }
                                backContent={
                                    <div className="p-6 h-full flex flex-col overflow-y-auto">
                                        <h3 className="text-lg font-bold text-textLight mb-4 border-b border-secondary/20 pb-2 text-center">
                                            {category.title}
                                        </h3>
                                        <div className="grid grid-cols-1 gap-4 flex-1">
                                            {category.skills.map((skill) => (
                                                <div
                                                    key={skill.name}
                                                    className="flex items-center gap-4 text-text/90"
                                                >
                                                    <span className="text-2xl text-secondary">
                                                        {skill.icon}
                                                    </span>
                                                    <span className="text-base">{skill.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                }
                            />
                        ))}
                    </SkillCarousel>
                </Blur>
            </div>
        </div>
    );
};

export default Skills;
