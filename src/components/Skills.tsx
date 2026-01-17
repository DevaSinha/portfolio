import { SKILL_CATEGORIES } from '../utils/constants';
import GlassCard from './common/GlassCard';
import SectionHeader from './common/SectionHeader';
import MobileCardStack from './common/MobileCardStack';

const Skills = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Skills" />

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <GlassCard key={index} className="p-6 h-full" hoverEffect={true}>
                        <h3 className="text-xl font-bold text-textLight mb-6 border-b border-white/10 pb-2">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {category.skills.map((skill) => (
                                <div key={skill.name} className="flex items-center gap-3 text-text/80 hover:text-secondary transition-colors">
                                    <span className="text-xl text-secondary">{skill.icon}</span>
                                    <span>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Mobile Card Stack */}
            <div className="md:hidden">
                <MobileCardStack>
                    {SKILL_CATEGORIES.map((category, index) => (
                        <GlassCard key={index} className="p-6 h-[400px] flex flex-col items-center justify-start overflow-y-auto" hoverEffect={false}>
                            <h3 className="text-xl font-bold text-secondary mb-6 border-b border-white/10 pb-2 w-full text-center">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 gap-6 w-full px-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-4 text-text/80">
                                        <span className="text-2xl text-secondary">{skill.icon}</span>
                                        <span className="text-lg">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </MobileCardStack>
            </div>
        </div>
    );
};

export default Skills;
