import { FaGithub } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import { PROJECTS } from '../utils/constants';
import SectionHeader from './common/SectionHeader';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';

import { MotionCarousel } from './common/MotionCarousel';
import { FlipCard } from '@/components/animate-ui/components/community/flip-card';


const Projects = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Projects" />

            <Blur initialBlur={10} delay={100}>
                <MotionCarousel
                    flexBasis={{ base: '85%', md: '70%', lg: '55%' }}
                    blurInactive={true}
                    inactiveOpacity={0.4}
                    dotSize={{ active: 24, inactive: 8 }}
                >
                    {PROJECTS.map((project, index) => (
                        <div key={index} className="h-full min-h-[350px]">
                            {/* Desktop View (No Flip) */}
                            <div className="hidden md:flex flex-col h-full bg-[#112240] p-6 rounded-xl border border-[#233554] hover:shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] transition-all duration-300 group relative overflow-hidden">
                                {/* Top highlight accent */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="mb-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            {project.inProgress && (
                                                <span className="text-[10px] font-semibold tracking-wide text-secondary bg-secondary/10 px-2 py-0.5 rounded-sm border border-secondary/20 uppercase">
                                                    WIP
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    {/* Simple Long Divider */}
                                    <div className="h-px w-full bg-cyan-900/50 group-hover:bg-cyan-400/30 transition-colors duration-300" />
                                </div>

                                <p className="text-text/80 text-sm mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-mono px-2 py-1 rounded transition-all duration-200 cursor-default bg-secondary/5 text-secondary border border-secondary/10 hover:bg-secondary/10"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.links && (
                                        <div className="flex items-center gap-4 pt-0">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-text/70 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group/link"
                                                    title="View Source Code"
                                                >
                                                    <FaGithub size={18} />
                                                    <span className="text-xs font-mono group-hover/link:underline decoration-cyan-400/30 underline-offset-4">GitHub</span>
                                                </a>
                                            )}
                                            {project.links.website && (
                                                <a
                                                    href={project.links.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-text/70 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group/link"
                                                    title="Visit Website"
                                                >
                                                    <LuExternalLink size={18} />
                                                    <span className="text-xs font-mono group-hover/link:underline decoration-cyan-400/30 underline-offset-4">Live</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Mobile View (Flip Card) */}
                            <div className="md:hidden h-full">
                                <FlipCard
                                    interaction="click"
                                    className="h-full"
                                    front={
                                        <div className="h-full w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col p-6 shadow-lg">
                                            <div className="mb-3">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="text-xl font-bold text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]">
                                                        {project.title}
                                                    </h3>
                                                    {project.inProgress && (
                                                        <span className="text-[10px] font-semibold tracking-wide text-secondary bg-secondary/10 px-2 py-0.5 rounded-sm border border-secondary/20 uppercase">
                                                            WIP
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="h-px w-full bg-cyan-900/50" />
                                            </div>

                                            {/* Tagline Centered */}
                                            <div className="flex-1 flex items-center justify-center text-center px-2">
                                                <p className="text-lg font-bold text-textLight/90 leading-tight italic">
                                                    "{project.tagline}"
                                                </p>
                                            </div>

                                            <div className="flex-grow-0 flex items-end mb-4">
                                                <div className="flex flex-wrap gap-1.5 content-end">
                                                    {project.tech.slice(0, 5).map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="text-[10px] font-mono px-2 py-1 rounded border bg-secondary/5 text-secondary border-secondary/10"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.tech.length > 5 && (
                                                        <span className="text-[10px] text-textLight/40 px-1 py-1 font-mono">
                                                            +{project.tech.length - 5}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-3 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
                                                <div className="flex gap-4">
                                                    {project.links && (
                                                        <>
                                                            {project.links.github && (
                                                                <a
                                                                    href={project.links.github}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-textLight hover:text-cyan-400 transition-colors z-20 relative"
                                                                >
                                                                    <FaGithub size={18} />
                                                                </a>
                                                            )}
                                                            {project.links.website && (
                                                                <a
                                                                    href={project.links.website}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="text-textLight hover:text-cyan-400 transition-colors z-20 relative"
                                                                >
                                                                    <LuExternalLink size={18} />
                                                                </a>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                                <button className="text-xs font-mono text-cyan-400/80 z-10 click-cursor hover:text-cyan-300">
                                                    Tap for details &rarr;
                                                </button>
                                            </div>
                                        </div>
                                    }
                                    back={
                                        <div className="h-full w-full rounded-xl border border-secondary/30 bg-secondary/5 backdrop-blur-sm flex flex-col p-6 overflow-y-auto">
                                            <div className="mb-3">
                                                <div className="flex justify-between items-center mb-2">
                                                    <h3 className="text-base font-mono text-cyan-400">
                                                        {project.title}
                                                    </h3>
                                                    {project.inProgress && (
                                                        <span className="text-[10px] font-semibold text-secondary/70 uppercase">
                                                            WIP
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="h-px w-full bg-cyan-900/50" />
                                            </div>

                                            <p className="text-text/90 text-sm leading-relaxed font-light">
                                                {project.description}
                                            </p>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    ))}
                </MotionCarousel>
            </Blur>
        </div>
    );
};

export default Projects;
