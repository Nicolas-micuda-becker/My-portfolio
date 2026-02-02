import { PROJECTS } from '@/lib/data';

export default function Work() {
  return (
    <section id="work" className="section-height" style={{backgroundColor: 'var(--bg)'}}>
      <div className="container-custom">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{color: 'var(--text-primary)'}}>
          My <span style={{color: 'var(--accent)'}}>Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'var(--bg)',
                border: `1px solid var(--border)`
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3" style={{color: 'var(--text-primary)'}}>
                  {project.name}
                </h3>
                <p className="mb-4" style={{color: 'var(--text-secondary)'}}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        color: 'var(--accent)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 text-white font-semibold rounded-full transition-colors"
                  style={{backgroundColor: 'var(--accent)'}}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
