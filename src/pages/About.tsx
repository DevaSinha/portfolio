import { motion } from "motion/react";
import { LuDownload } from "react-icons/lu";
import DecryptedText from "../components/common/DecryptedText";
import { RESUME } from "../utils/resume";
import { downloadDocument } from "../utils/downloadDocument";

const About = () => {
    const handleDownload = () => {
        downloadDocument(RESUME, "Devanshu_Sinha_Resume.pdf");
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-white p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-start text-left space-y-6 max-w-4xl w-full"
            >
                <span className="text-cyan-400 font-mono text-lg md:text-xl">
                    Hi, my name is
                </span>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 pb-2">
                    Devanshu Sinha.
                </h1>

                <h2 className="text-4xl md:text-6xl font-bold text-slate-300">
                    I build things for the web.
                </h2>

                <div className="max-w-2xl mt-6">
                    <DecryptedText
                        text="I am a software engineer specializing in scalable, accessible digital experiences. Currently, I build human-centered loan management systems at Mahindra Finance."
                        animateOn="view"
                        revealDirection="start"
                        speed={50}
                        maxIterations={20}
                        className="text-lg md:text-xl text-slate-400 leading-relaxed"
                        parentClassName="inline-block"
                        encryptedClassName="text-slate-600"
                        sequential
                    />
                </div>

                <div className="pt-8">
                    <button
                        onClick={handleDownload}
                        className="group flex items-center gap-2 px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md font-mono hover:bg-cyan-400/10 transition-colors duration-300"
                    >
                        <span>Resume</span>
                        <LuDownload className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
export default About;
