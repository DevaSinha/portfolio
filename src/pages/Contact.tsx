import { motion } from 'motion/react';
import SectionHeader from '../components/common/SectionHeader';

const Contact = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-white p-8">
            <SectionHeader title="Contact" />
            <p className="text-gray-400">Get in touch form/links...</p>
        </div>
    );
};
export default Contact;
