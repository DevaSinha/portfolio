import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SOCIAL_LINKS } from '@/utils/constants';
import { downloadDocument } from '@/utils/downloadDocument';
import { RESUME } from '@/utils/resume';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';

export const Hero = () => {
    const handleDownloadResume = () => {
        downloadDocument(RESUME, "Devanshu_Sinha_Resume.pdf");
    };

    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Section id="hero" className="min-h-[90vh] flex items-center justify-center pt-0">
            <div className="flex flex-col items-start gap-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-primary font-mono text-lg mb-4 block">Hi, my name is</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
                        Devanshu Sinha.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-muted-foreground mb-6">
                        I build things for the web.
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                        I am a software engineer specializing in scalable, accessible digital experiences.
                        Currently, I build human-centered loan management systems at{' '}
                        <span className="text-primary">Mahindra Finance</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap gap-4"
                >
                    <Button onClick={handleDownloadResume} size="lg" className="gap-2">
                        <Download className="w-5 h-5" />
                        Resume
                    </Button>
                    <Button onClick={scrollToProjects} variant="outline" size="lg" className="gap-2">
                        Check out my work
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex gap-6 mt-8 text-2xl text-muted-foreground"
                >
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </motion.div>
            </div>
        </Section>
    );
};
