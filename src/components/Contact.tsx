import { SOCIAL_LINKS } from '../utils/constants';
import { Blur, Blurs } from '@/components/animate-ui/primitives/effects/blur';
import { Button } from '@/components/animate-ui/primitives/buttons/button';

const Contact = () => {
    const titleText = "Get In Touch";

    return (
        <div className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto">
            <Blur delay={100} initialBlur={8}>
                <p className="text-secondary font-mono mb-4 text-lg">
                    04. What's Next?
                </p>
            </Blur>

            {/* Animated title with staggered blur reveal */}
            <div className="text-4xl md:text-5xl font-bold text-text mb-6 flex flex-wrap justify-center">
                <Blurs holdDelay={60} delay={200} initialBlur={12}>
                    {titleText.split('').map((char, index) => (
                        <span
                            key={index}
                            className="inline-block hover:text-secondary hover:-translate-y-1 transition-all cursor-default"
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </Blurs>
            </div>

            <Blur delay={500} initialBlur={10}>
                <p className="text-textLight text-lg leading-relaxed mb-10">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </Blur>

            <Blur delay={600} initialBlur={8}>
                <Button
                    asChild
                    hoverScale={1.05}
                    tapScale={0.98}
                >
                    <a
                        href={`mailto:${SOCIAL_LINKS.email}`}
                        className="inline-block border border-secondary text-secondary px-8 py-4 rounded-lg font-mono backdrop-blur-sm hover:bg-secondary/10 hover:shadow-[0_0_30px_rgba(100,255,218,0.25)] transition-all duration-300"
                    >
                        Say Hello
                    </a>
                </Button>
            </Blur>

            <Blur delay={800} initialBlur={6}>
                <div className="mt-12 text-sm text-textLight font-mono space-y-1">
                    <p className="hover:text-secondary hover:translate-x-1 transition-all cursor-default">
                        Pune, Maharashtra, India
                    </p>
                    <p className="hover:text-secondary hover:translate-x-1 transition-all cursor-default">
                        7898741349
                    </p>
                </div>
            </Blur>
        </div>
    );
};

export default Contact;
