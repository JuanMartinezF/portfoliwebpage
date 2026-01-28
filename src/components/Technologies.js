import Image from 'next/image';
import technologiesData from '@/data/technologies.json';

export default function Technologies() {

  return (
    <section id="technologies" className="technologies-section">
      <div className="container">
        <h2 className="section-title">Tecnologías & Herramientas</h2>
        
        <div className="tech-category">
          <h3 className="tech-category__title">Lenguajes de Programación</h3>
          <div className="tech-grid">
            {technologiesData.programming.map((tech) => (
              <div key={tech.name} className="tech-card">
                <div className="tech-card__icon">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                </div>
                <h4 className="tech-card__name">{tech.name}</h4>
                <span className="tech-card__level">{tech.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-category__title">Frameworks & Librerías</h3>
          <div className="tech-grid">
            {technologiesData.frameworks.map((tech) => (
              <div key={tech.name} className="tech-card">
                <div className="tech-card__icon">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                </div>
                <h4 className="tech-card__name">{tech.name}</h4>
                <span className="tech-card__level">{tech.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-category__title">Herramientas</h3>
          <div className="tech-grid">
            {technologiesData.tools.map((tech) => (
              <div key={tech.name} className="tech-card">
                <div className="tech-card__icon">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                </div>
                <h4 className="tech-card__name">{tech.name}</h4>
                <span className="tech-card__level">{tech.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="tech-category">
          <h3 className="tech-category__title">Actualmente Aprendiendo</h3>
          <div className="tech-grid">
            {technologiesData.learning.map((tech) => (
              <div key={tech.name} className="tech-card tech-card--learning">
                <div className="tech-card__icon">
                  <Image src={tech.icon} alt={tech.name} width={48} height={48} />
                </div>
                <h4 className="tech-card__name">{tech.name}</h4>
                <span className="tech-card__badge">En progreso</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
