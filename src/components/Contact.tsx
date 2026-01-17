import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../utils/constants';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center max-w-2xl mx-auto">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-secondary font-mono mb-4 text-lg"
            >
                04. What's Next?
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-text mb-6"
            >
                Get In Touch
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-textLight text-lg leading-relaxed mb-10"
            >
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="border border-secondary text-secondary px-8 py-4 rounded hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all duration-300 font-mono backdrop-blur-sm"
                >
                    Say Hello
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-sm text-textLight font-mono"
            >
                <p>Pune, Maharashtra, India</p>
                <p>7898741349</p>
            </motion.div>
        </div>
    );
};

export default Contact;
