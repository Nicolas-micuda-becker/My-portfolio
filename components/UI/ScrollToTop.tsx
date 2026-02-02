'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full text-white font-bold text-xl shadow-lg hover:scale-110 transition-transform duration-300 z-50"
            style={{ backgroundColor: 'var(--accent)' }}
        >
            ↑
        </button>
    );
}