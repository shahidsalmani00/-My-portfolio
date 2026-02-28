import { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scrollData, setScrollData] = useState({
        y: 0,
        lastY: 0,
        direction: 'up',
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrollData((prev) => {
                const currentY = window.scrollY;
                return {
                    y: currentY,
                    lastY: prev.y,
                    direction: currentY > prev.y ? 'down' : 'up',
                };
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollData;
};
