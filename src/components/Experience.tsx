import { motion } from 'motion/react';
import { EXPERIENCES } from '../utils/constants';
import GlassCard from './common/GlassCard';
import SectionHeader from './common/SectionHeader';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';

const Experience = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Experience" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block col-span-1 relative">
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '100%', opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-secondary/20 via-secondary to-secondary/20 transform -translate-x-1/2 rounded-full"
                    />
                </div>

                <div className="col-span-12 md:col-span-11 space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline Dot */}
                            <Blur
                                delay={index * 200 + 400}
                                initialBlur={8}
                                className="hidden md:block absolute -left-[4.5%] top-8 w-4 h-4 z-10"
                            >
                                <div className="relative w-4 h-4 bg-secondary rounded-full border-2 border-primary shadow-[0_0_15px_rgba(100,255,218,0.8)] animate-glow-pulse" />
                            </Blur>

                            <Blur delay={index * 150} initialBlur={12}>
                                <h3 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-secondary to-cyan-400 drop-shadow-sm">
                                    {exp.role}
                                </h3>

                                <GlassCard className="p-8 border-l-4 border-l-secondary/50" hoverEffect={true} delay={index * 150 + 100}>
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-xl text-textLight font-medium mb-6 border-b border-white/5 pb-4">
                                        <span className="flex items-center gap-2">
                                            <span className="text-secondary opacity-80">@</span>
                                            {exp.company}
                                        </span>

                                        <span className="text-sm font-mono text-secondary/80 bg-secondary/10 px-3 py-1 rounded-full mt-2 md:mt-0">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <ul className="space-y-4">
                                        {exp.points.map((item, i) => (
                                            <li key={i} className="flex items-start text-text/90 group hover:translate-x-1 transition-transform">
                                                <span className="text-secondary mr-3 mt-1.5 text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                                                    ◆
                                                </span>
                                                <span className="group-hover:text-textLight transition-colors leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </Blur>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
