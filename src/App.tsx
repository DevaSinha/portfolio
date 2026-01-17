import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Section from './components/common/Section';

function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = [About, Experience, Skills, Projects, Contact];

  const handleScroll = useCallback((e: WheelEvent) => {
    if (isScrolling) return;

    if (Math.abs(e.deltaY) < 30) return;

    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 800);

    if (e.deltaY > 0) {
      setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      setActiveSection((prev) => Math.max(prev - 1, 0));
    }
  }, [isScrolling, sections.length]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > minSwipeDistance;

    if (isSwipe) {
      if (distance > 0) {
        // Swipe Up (next section)
        setActiveSection((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        // Swipe Down (prev section)
        setActiveSection((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  const ActiveComponent = sections[activeSection];

  return (
    <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="h-screen w-full">
      <Layout activeSection={activeSection} scrollToSection={setActiveSection}>
        <AnimatePresence mode="wait">
          <Section id={activeSection}>
            <ActiveComponent />
          </Section>
        </AnimatePresence>
      </Layout>
    </div>
  );
}

export default App;
