import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../utils/constants';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const Skills = () => {
    return (
        <Section id="skills">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl font-bold text-text">Skills</h2>
                <div className="h-px bg-white/10 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="h-full"
                    >
                        <Card className="p-6 h-full hover:border-primary/20 transition-colors bg-surface/40">
                            <h3 className="text-lg font-semibold text-primary mb-6 border-b border-white/5 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-md text-sm text-muted hover:text-white hover:bg-white/10 transition-all cursor-default"
                                    >
                                        <span className="text-lg text-secondary">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
