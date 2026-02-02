'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', borderBottom: `1px solid var(--border)`}}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold" style={{color: 'var(--text-primary)'}}>
            My Portfolio
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full transition-colors"
            style={{color: isDark ? 'var(--accent)' : 'var(--text-primary)'}}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
