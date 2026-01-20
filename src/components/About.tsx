import { RESUME } from '../utils/resume';
import { downloadDocument } from '../utils/downloadDocument';
import { Blur } from '@/components/animate-ui/primitives/effects/blur';
import { SplittingText } from '@/components/animate-ui/primitives/texts/splitting';
import { LiquidButton } from './animate-ui/primitives/buttons/liquid';
import { FaArrowDown } from 'react-icons/fa';

const About = () => {
    return (
        <section className="h-full flex flex-col justify-center max-w-4xl">
            <Blur delay={100} initialBlur={8}>
                <p className="text-secondary font-mono text-lg mb-4">
                    Hi, my name is
                </p>
            </Blur>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-cyan-400 to-blue-500">
                <SplittingText
                    text="Devanshu Sinha."
                    type="chars"
                    delay={200}
                    stagger={0.04}
                    initial={{ y: 40, opacity: 0, rotateX: -45 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 15
                    }}
                    className="inline-block"
                />
            </h1>

            <Blur delay={600} initialBlur={10}>
                <h2 className="text-4xl md:text-6xl font-bold text-textLight mb-6">
                    I build things for the web.
                </h2>
            </Blur>

            <Blur delay={700} initialBlur={8}>
                <p className="text-textLight text-lg max-w-xl mb-10 leading-relaxed">
                    I am a software engineer specializing in scalable, accessible digital experiences. Currently, I build human-centered loan management systems at <span className="text-secondary">Mahindra Finance</span>.
                </p>
            </Blur>

            <Blur delay={800} initialBlur={8}>
                <div className="flex gap-4">
                    <LiquidButton
                        onClick={() => downloadDocument(RESUME, "Devanshu_Sinha Full_stack_developer.pdf")}
                        hoverScale={1.02}
                        tapScale={0.98}
                        className="flex items-center gap-2 border border-textLight text-textLight px-8 py-4 rounded-lg font-mono backdrop-blur-sm hover:border-secondary hover:text-secondary hover:shadow-[0_0_20px_rgba(100,255,218,0.2)] transition-colors duration-300"
                    >
                        <FaArrowDown className="text-sm" />
                        <span>Resume</span>
                    </LiquidButton>
                </div>
            </Blur>
        </section>
    );
};

export default About;
