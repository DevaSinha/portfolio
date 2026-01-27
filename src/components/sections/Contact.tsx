import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';

export const Contact = () => {
    return (
        <Section id="contact" className="flex flex-col items-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Let's Build Something Together?
                </h2>

                <p className="text-lg text-muted leading-relaxed">
                    I'm currently looking for new opportunities to solve interesting problems.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="pt-8">
                    <a href={`mailto:${SOCIAL_LINKS.email}`}>
                        <Button size="lg" className="h-14 px-8 text-lg gap-3">
                            <Mail className="w-5 h-5" />
                            Say Hello
                        </Button>
                    </a>
                </div>
            </motion.div>
        </Section>
    );
};
