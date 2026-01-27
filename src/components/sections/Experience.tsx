import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/utils/constants';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';

export const Experience = () => {
    return (
        <Section id="experience">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px bg-white/10 flex-1" />
                <h2 className="text-3xl font-bold text-foreground">Experience</h2>
                <div className="h-px bg-white/10 flex-1" />
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-6 md:p-8 hover:bg-card/60 transition-colors border-l-4 border-l-primary/50">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                                    <div className="text-primary font-medium">{exp.company}</div>
                                </div>
                                <div className="text-sm font-mono text-muted-foreground bg-white/5 py-1 px-3 rounded-full w-fit">
                                    {exp.period}
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {exp.points.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm md:text-base">
                                        <span className="text-secondary mt-1.5 text-xs">●</span>
                                        <span className="leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
