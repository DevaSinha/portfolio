import { SOCIAL_LINKS } from '../../utils/constants';
import { Container } from '../ui/Container';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div className="text-muted text-sm">
                    © {new Date().getFullYear()} Devanshu Sinha. All rights reserved.
                </div>

                <div className="flex gap-6">
                    <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors text-xl"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors text-xl"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="text-muted hover:text-primary transition-colors text-xl"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </Container>
        </footer>
    );
};
