import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-0 w-full text-center py-4 text-textLight/60 text-xs z-40"
        >
            <p>Designed & Built by Devanshu Sinha</p>
        </motion.footer>
    );
};

export default Footer;
