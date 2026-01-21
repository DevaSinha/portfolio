import { SKILL_CATEGORIES } from '../utils/constants';
import SectionHeader from './common/SectionHeader';
import { MotionCarousel } from './common/MotionCarousel';
import { FlipCard } from '@/components/animate-ui/components/community/flip-card';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';

const Skills = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Skills" />

            {/* Desktop Grid with Flip Cards */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <Blur key={index} delay={index * 100} initialBlur={10}>
                        <FlipCard
                            className="h-[320px]"
                            front={
                                <div className="h-full w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col p-6">
                                    <h3 className="text-xl font-bold text-secondary mb-4 border-b border-white/10 pb-2">
                                        {category.title}
                                    </h3>
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="text-6xl text-secondary/30">
                                            {category.skills[0]?.icon}
                                        </div>
                                    </div>
                                    <p className="text-xs text-textLight/60 text-center mt-auto">
                                        Hover to see skills
                                    </p>
                                </div>
                            }
                            back={
                                <div className="h-full w-full rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm flex flex-col p-6 overflow-y-auto">
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
                    <MotionCarousel
                        flexBasis={{ base: '85%' }}
                        dotSize={{ active: 20, inactive: 6 }}
                    >
                        {SKILL_CATEGORIES.map((category, index) => (
                            <FlipCard
                                key={index}
                                interaction="click"
                                className="h-[350px]"
                                front={
                                    <div className="h-full w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col p-6">
                                        <h3 className="text-xl font-bold text-secondary mb-4 border-b border-white/10 pb-2 text-center">
                                            {category.title}
                                        </h3>
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="text-7xl text-secondary/40">
                                                {category.skills[0]?.icon}
                                            </div>
                                        </div>
                                        <p className="text-xs text-textLight/60 text-center mt-auto">
                                            Tap to see skills
                                        </p>
                                    </div>
                                }
                                back={
                                    <div className="h-full w-full rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm flex flex-col p-6 overflow-y-auto">
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
                    </MotionCarousel>
                </Blur>
            </div>
        </div>
    );
};

export default Skills;
