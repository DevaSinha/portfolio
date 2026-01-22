import { FaGithub } from 'react-icons/fa';
import { PROJECTS } from '../utils/constants';
import SectionHeader from './common/SectionHeader';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';
import { Button } from '@/components/animate-ui/primitives/buttons/button';
import { ProjectCarousel } from './common/ProjectCarousel';
import { LuExternalLink } from 'react-icons/lu';

const Projects = () => {
    return (
        <div className="w-full">
            <SectionHeader title="Projects" />

            <Blur initialBlur={10} delay={100}>
                <ProjectCarousel>
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm min-h-[400px] h-full flex flex-col hover:border-secondary/30 transition-colors"                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-cyan-400 to-blue-500">
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    {project.inProgress && (
                                        <span className="text-xs text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                                            WIP
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="text-text/70 text-base mb-6 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-mono text-secondary bg-secondary/5 border border-secondary/20 px-3 py-1.5 rounded-lg transition-all duration-300 hover:bg-secondary/20 hover:border-secondary/50 hover:shadow-[0_0_12px_rgba(100,255,218,0.2)] hover:-translate-y-0.5 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {project.links && (
                                <div className="mt-auto flex items-center gap-4">
                                    <Blur delay={600} initialBlur={8}>
                                        <Button asChild hoverScale={1.1} tapScale={0.98}>
                                            <a
                                                href={project.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center p-2 text-secondary rounded-lg backdrop-blur-sm hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.25)] transition-all duration-300"
                                            >
                                                <FaGithub size={24} />
                                            </a>
                                        </Button>
                                    </Blur>

                                    <Blur delay={600} initialBlur={8}>
                                        <Button asChild hoverScale={1.1} tapScale={0.98}>
                                            <a
                                                href={project.links.website}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center p-2 text-secondary rounded-lg backdrop-blur-sm hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.25)] transition-all duration-300"
                                            >
                                                <LuExternalLink size={24} />
                                            </a>
                                        </Button>
                                    </Blur>
                                </div>
                            )}
                        </div>
                    ))}
                </ProjectCarousel>
            </Blur>
        </div>
    );
};

export default Projects;
