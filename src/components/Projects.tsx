import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../utils/constants';
import GlassCard from './common/GlassCard';
import SectionHeader from './common/SectionHeader';
import MobileCardStack from './common/MobileCardStack';

const Projects = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Projects" />

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((project, index) => (
                    <GlassCard key={index} className="p-6 h-full flex flex-col" hoverEffect={true}>
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-textLight group-hover:text-secondary transition-colors">
                                {project.title}
                            </h3>
                            {project.inProgress &&
                                <span className="inline-flex items-center gap-2 rounded-full backdrop-blur-md bg-white/5 text-amber-300 px-3 py-1 text-xs font-semibold border border-white/10 shadow-sm">
                                    WIP
                                </span>
                            }
                            {project.links.github && <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-textLight hover:text-secondary text-xl transition-colors"
                            >
                                <FaGithub />
                            </a>}
                        </div>
                        <p className="text-text/70 mb-6 flex-grow">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech) => (
                                <span key={tech} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                ))}
            </div>

            {/* Mobile Card Stack */}
            <div className="md:hidden">
                <MobileCardStack>
                    {PROJECTS.map((project, index) => (
                        <GlassCard key={index} className="p-6 h-[400px] flex flex-col" hoverEffect={false}>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-textLight">
                                    {project.title}
                                </h3>
                                {project.inProgress &&
                                    <span className="inline-flex items-center gap-2 rounded-full backdrop-blur-md bg-white/5 text-amber-300 px-3 py-1 text-xs font-semibold border border-white/10 shadow-sm">
                                        WIP
                                    </span>
                                }
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-textLight hover:text-secondary text-2xl transition-colors"
                                >
                                    <FaGithub />
                                </a>
                            </div>
                            <p className="text-text/80 mb-6 flex-grow text-sm leading-relaxed overflow-y-auto">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    ))}
                </MobileCardStack>
            </div>
        </div>
    );
};

export default Projects;
