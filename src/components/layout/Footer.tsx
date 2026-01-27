import { Container } from '@/components/ui/Container';
import { SOCIAL_LINKS } from '@/utils/constants';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-background/50 backdrop-blur-sm py-12">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Devanshu Sinha. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground/50">
                        Built with React, TypeScript & Tailwind CSS
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope className="w-5 h-5" />
                    </a>
                </div>
            </Container>
        </footer>
    );
};
