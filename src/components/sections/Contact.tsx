import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '@/utils/constants';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

export const Contact = () => {
    return (
        <Section id="contact" className="min-h-[60vh] flex items-center justify-center text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto space-y-8"
            >
                <div>
                    <span className="text-primary font-mono text-lg mb-4 block">What&apos;s Next?</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        I&apos;m currently open to new opportunities. Whether you have a question or just want to say hi,
                        feel free to drop me an email!
                    </p>
                </div>

                <Button
                    size="lg"
                    className="h-14 px-8 text-lg gap-2"
                    onClick={() => window.location.href = `mailto:${SOCIAL_LINKS.email}`}
                >
                    Say Hello
                </Button>
            </motion.div>
        </Section>
    );
};
