import { useState, useEffect } from 'react';
import { GravityStarsBackground } from './animate-ui/components/backgrounds/gravity-stars';

const Background = () => {
    // Responsive star count based on screen size
    const [starsCount, setStarsCount] = useState(50);

    useEffect(() => {
        const updateStarsCount = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setStarsCount(30);
            } else if (width < 1024) {
                setStarsCount(50);
            } else if (width < 1536) {
                setStarsCount(75);
            } else {
                setStarsCount(100);
            }
        };

        updateStarsCount();
        window.addEventListener('resize', updateStarsCount);
        return () => window.removeEventListener('resize', updateStarsCount);
    }, []);

    return (
        <GravityStarsBackground
            className="fixed inset-0 z-0 bg-[#0a192f]"
            starsCount={starsCount}
            starsSize={2.5}
            starsOpacity={0.8}
            glowIntensity={20}
            glowAnimation="spring"
            // movementSpeed={0.25}
            mouseInfluence={150}
            mouseGravity="attract"
            gravityStrength={80}
            // starsInteraction={true}
            starsInteractionType="bounce"
            style={{ color: '#64ffda' }}  // Stars will use this color
        />
    );
};

export default Background;
