import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '@/utils/constants';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const Projects = () => {
    return (
        <Section id="projects">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
                <div className="h-px bg-white/10 flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex"
                    >
                        <Card className="flex flex-col h-full hover:border-primary/50 transition-all duration-300 group bg-card/40">
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors text-foreground">
                                        {project.title}
                                    </h3>
                                    {project.inProgress && (
                                        <span className="text-[10px] uppercase font-mono bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded">
                                            In Progress
                                        </span>
                                    )}
                                </div>

                                <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 mt-auto pt-6 border-t border-white/5">
                                    {project.links?.github && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="gap-2 text-muted-foreground hover:text-foreground"
                                            onClick={() => window.open(project.links?.github, '_blank')}
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </Button>
                                    )}
                                    {project.links?.website && (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="gap-2 text-muted-foreground hover:text-foreground"
                                            onClick={() => window.open(project.links?.website, '_blank')}
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
