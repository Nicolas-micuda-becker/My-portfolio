import { EXPERIENCES } from '@/lib/data';

export default function Timeline() {
  return (
    <section id="timeline" className="section-height" style={{backgroundColor: 'var(--bg)'}}>
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{color: 'var(--text-primary)'}}>
          My <span style={{color: 'var(--accent)'}}>Timeline</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-8 pb-8 last:border-0"
              style={{borderLeft: `2px solid var(--accent)`}}
            >
              <div 
                className="absolute left-0 top-0 w-4 h-4 rounded-full transform -translate-x-[9px]"
                style={{backgroundColor: 'var(--accent)'}}
              />

              <div 
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'var(--surface)',
                  border: `1px solid var(--border)`
                }}
              >
                <div className="text-sm font-semibold mb-2" style={{color: 'var(--accent)'}}>
                  {exp.shortDate}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{color: 'var(--text-primary)'}}>
                  {exp.title}
                </h3>
                <div className="mb-3" style={{color: 'var(--text-secondary)'}}>
                  {exp.company}
                </div>
                <p style={{color: 'var(--text-secondary)'}}>
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
