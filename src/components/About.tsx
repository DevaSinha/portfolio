import { motion } from 'framer-motion';
import { RESUME } from '../utils/resume';
import { downloadDocument } from '../utils/downloadDocument';

const About = () => {
    return (
        <section className="h-full flex flex-col justify-center max-w-4xl">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-secondary font-mono text-lg mb-4"
            >
                Hi, my name is
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-500"
            >
                Devanshu Sinha.
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-textLight mb-6"
            >
                I build things for the web.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-textLight text-lg max-w-xl mb-10 leading-relaxed"
            >
                I am a software engineer specializing in scalable, accessible digital experiences. Currently, I build human-centered loan management systems at <span className="text-secondary">Mahindra Finance</span>.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-4"
            >
                {/* <button className="border border-secondary text-secondary px-8 py-4 rounded hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all duration-300 font-mono backdrop-blur-sm">
                    Check out my work!
                </button> */}
                <button
                    onClick={() => downloadDocument(RESUME, "Devanshu_Sinha Full_stack_developer.pdf")}
                    className="border border-textLight text-textLight px-8 py-4 rounded hover:bg-white/10 hover:text-white transition-all duration-300 font-mono backdrop-blur-sm"
                >
                    Resume
                </button>
            </motion.div>
        </section>
    );
};

export default About;
