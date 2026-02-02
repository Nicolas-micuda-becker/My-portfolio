import { PERSONAL_INFO } from '@/lib/data';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="section-height pt-20"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:justify-between">
          
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4" style={{borderColor: 'var(--accent)'}}>
            <Image
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4" style={{color: 'var(--text-primary)'}}>
              {PERSONAL_INFO.name}
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6" style={{color: 'var(--accent)'}}>
              {PERSONAL_INFO.title}
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
              {PERSONAL_INFO.description}
            </p>

            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
              style={{backgroundColor: 'var(--accent)'}}
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
