import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import TiltedCard from '../components/common/TiltCard';
import { EXPERIENCES } from '../utils/constants';

const Experience = () => {
    // Soft, glowing dark gradient background
    const cardBg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='%2322d3ee' stop-opacity='0.15'/%3E%3Cstop offset='100%25' stop-color='transparent'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='%23050505'/%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E`;

    const [cardHeight, setCardHeight] = useState('350px');

    useEffect(() => {
        const handleResize = () => {
            // Adjust height based on content length or screen width
            // Mobile (sm) needs more vertical space as text wraps
            if (window.innerWidth < 768) {
                setCardHeight('550px');
            } else {
                setCardHeight('350px');
            }
        };

        // Initial setup
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center py-20 px-4">
            <SectionHeader title="Experience" />

            <div className="w-full max-w-5xl flex flex-col gap-12 mt-12">
                {EXPERIENCES.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex justify-center"
                    >
                        <TiltedCard
                            imageSrc={cardBg}
                            altText={`Experience at ${exp.company}`}
                            captionText={exp.period}
                            containerHeight={cardHeight}
                            containerWidth="100%"
                            imageHeight={cardHeight}
                            imageWidth="100%"
                            rotateAmplitude={5}
                            scaleOnHover={1.03}
                            showMobileWarning={false}
                            showTooltip={false}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="p-8 md:p-10 h-full flex flex-col justify-center text-left backdrop-blur-[2px] w-full">
                                    <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 border-b border-white/10 pb-4">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                                                {exp.role}
                                            </h3>
                                            <div className="text-lg md:text-xl text-cyan-300 font-medium tracking-tight">
                                                {exp.company}
                                            </div>
                                        </div>
                                        <div className="text-slate-400 text-sm font-mono mt-2 md:mt-0">
                                            {exp.period} • {exp.location}
                                        </div>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="text-gray-300 text-sm md:text-base leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-cyan-500/50">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
export default Experience;
