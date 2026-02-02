'use client';

import { useState, useEffect } from 'react';
import { SECTIONS } from '@/lib/constants';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = SECTIONS.map(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: section.id,
            top: rect.top,
            bottom: rect.bottom
          };
        }
        return null;
      }).filter(Boolean);

      const viewportCenter = window.innerHeight / 2;
      
      for (const section of sections) {
        if (section && section.top <= viewportCenter && section.bottom >= viewportCenter) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40">
      <ul className="flex flex-col gap-4">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group relative"
              aria-label={`Navigate to ${section.label}`}
            >
              <div
                className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-150 hover:!bg-[var(--accent)]"
                style={{
                  backgroundColor: activeSection === section.id ? 'var(--accent)' : 'var(--text-muted)',
                  transform: activeSection === section.id ? 'scale(1.25)' : 'scale(1)',
                }}
              />
              <span
                className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                style={{
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text-primary)',
                  border: `1px solid var(--border)`
                }}
              >
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
