'use client';
import { useState } from 'react';
import { STATS, PERSONAL_INFO } from '@/lib/data';

export default function About() {
  const [expandedStat, setExpandedStat] = useState<string | null>(null);

  const toggleStat = (statId: string) => {
    setExpandedStat(expandedStat === statId ? null : statId);
  };

  return (
    <section id="about" className="section-height" style={{backgroundColor: 'var(--bg)'}}>
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{color: 'var(--text-primary)'}}>
          About <span style={{color: 'var(--accent)'}}>Me</span>
        </h2>

        {/* Texte About Me */}
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg leading-relaxed whitespace-pre-line" style={{color: 'var(--text-secondary)'}}>
            {PERSONAL_INFO.aboutText || PERSONAL_INFO.description}
          </p>
        </div>

        {/* Stats interactives */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-start">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              onClick={() => toggleStat(stat.id)}
              className="p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer relative"
              style={{
                backgroundColor: expandedStat === stat.id ? 'var(--surface)' : 'var(--bg)',
                border: `2px solid ${expandedStat === stat.id ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              <div className="text-5xl font-bold mb-2" style={{color: 'var(--accent)'}}>
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-3" style={{color: 'var(--text-primary)'}}>
                {stat.label}
              </div>

              {/* Indicateur de clic */}
              <div className="text-sm" style={{color: 'var(--text-muted)'}}>
                {expandedStat === stat.id ? '⌄ Cliquez pour masquer' : '› Cliquez pour voir les détails'}
              </div>

              {/* Détails (affichés au clic) */}
              {expandedStat === stat.id && (
                <div className="mt-4 pt-4" style={{borderTop: '1px solid var(--border)'}}>
                  <ul className="space-y-2">
                    {stat.details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2"
                        style={{color: 'var(--text-secondary)'}}
                      >
                        <span style={{color: 'var(--accent)'}}>•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/img/CV.pdf"
            download
            className="inline-block px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
            style={{backgroundColor: 'var(--accent)'}}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
