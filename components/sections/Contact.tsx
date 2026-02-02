import { PERSONAL_INFO } from '@/lib/data';

export default function Contact() {
  return (
    <section id="contact" className="section-height" style={{backgroundColor: 'var(--bg)'}}>
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{color: 'var(--text-primary)'}}>
          Get In <span style={{color: 'var(--accent)'}}>Touch</span>
        </h2>

        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>
                Email
              </h3>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xl hover:opacity-80"
                style={{color: 'var(--accent)'}}
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2" style={{color: 'var(--text-primary)'}}>
                Location
              </h3>
              <p style={{color: 'var(--text-secondary)'}}>
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{
                backgroundColor: 'var(--surface)',
                border: `1px solid var(--border)`
              }}
            >
              <span className="text-2xl">🐙</span>
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full hover:scale-110 transition-all"
              style={{
                backgroundColor: 'var(--surface)',
                border: `1px solid var(--border)`
              }}
            >
              <span className="text-2xl">💼</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
