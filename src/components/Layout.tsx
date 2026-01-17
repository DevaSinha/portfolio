import Navbar from './Navbar';
import Footer from './Footer';
import Background from './Background';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
    activeSection: number;
    scrollToSection: (index: number) => void;
}

const Layout = ({ children, activeSection, scrollToSection }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-primary text-text font-sans selection:bg-secondary selection:text-primary overflow-hidden relative">
            <Background />
            <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
            <main className="w-full h-screen relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
