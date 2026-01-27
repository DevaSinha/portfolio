import { motion } from 'framer-motion';
import { ABOUT } from '../../utils/constants';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';

export const About = () => {
    return (
        <Section id="about">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-3xl font-bold text-text">About Me</h2>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <div className="text-muted space-y-4 text-lg leading-relaxed">
                        {ABOUT.description.map((paragraph, index) => (
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Card className="p-8 h-full bg-surface/30">
                        <h3 className="text-xl font-semibold text-primary mb-6">Highlights</h3>
                        <ul className="space-y-4">
                            {ABOUT.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-start gap-3 text-muted">
                                    <span className="text-secondary mt-1.5">▹</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </motion.div>
            </div>
        </Section>
    );
};
