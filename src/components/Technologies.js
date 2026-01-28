import Image from 'next/image';

export default function Technologies() {
  const technologies = {
    programming: [
      { name: "Python", level: "Avanzado", icon: "/iconos/pythonlogo.webp" },
      { name: "JavaScript", level: "Avanzado", icon: "/iconos/JavaScriptlogo.png" },
      { name: "C++", level: "Avanzado", icon: "/iconos/C++logo.png" }
    ],
    frameworks: [
      { name: "Next.js", level: "Basico", icon: "/iconos/next_jslogo.png" },
      { name: "TypeScript", level: "Intermedio", icon: "/iconos/Typescriptlogo.png" },
      { name: "React", level: "Intermedio", icon: "/iconos/Reactlogogrande.png" },
      { name: "Tensor flow", level: "Intermedio", icon: "/iconos/Tensorflowlogosimple.png" },
      { name: "Keras", level: "Intermedio", icon: "/iconos/keraslogogrande.png" },
      { name: "Numpy", level: "Intermedio", icon: "/iconos/numpylogogrande.png" },
      { name: "Pandas", level: "Intermedio", icon: "/iconos/Pandaslogogrande.png" },
      { name: "Matplotlib", level: "Intermedio", icon: "/iconos/Matplotliblogo.webp" },
      { name: "Seaborn", level: "Intermedio", icon: "/iconos/seabornlogo.svg" },
      { name: "Scikit-learn", level: "Intermedio", icon: "/iconos/Scikitlearnlogo.png" },
      { name: "Beautifulsoup", level: "Intermedio", icon: "/iconos/bs4logo.png" },
      { name: "Selenium", level: "Intermedio", icon: "/iconos/Seleniumlogo.png" },
      { name: "Tailwind CSS", level: "Intermedio", icon: "/iconos/Tailwindlogo.png" },
        { name: "HTML", level: "Intermedio", icon: "/iconos/HTML5logo.png" },
        { name: "CSS", level: "Básico", icon: "/iconos/CSS3logo.png" },
        
    ],
    tools: [
      { name: "Git", level: "Basico", icon: "/iconos/gitlogo.png" },
      { name: "GitHub", level: "Intermedio", icon: "/iconos/githublogo.png" },
      { name: "GCP", level: "Basico", icon: "/iconos/gcplogo.png" },
      { name: "Figma", level: "Basico", icon: "/iconos/Figmalogo.png" },
        { name: "Power BI", level: "Basico", icon: "/iconos/PowerBIlogosolo.png" }
    ],
    learning: [
      { name: "Kubernetes", icon: "/iconos/kubernetes.png" },
      { name: "Go", icon: "/iconos/go.png" },
      { name: "GraphQL", icon: "/iconos/graphql.png" },
      { name: "Redis", icon: "/iconos/redis.png" }
    ]
  };

  return (
    <section id="technologies" className="technologies-section">
      <div className="container">
        <h2 className="section-title">Tecnologías & Herramientas</h2>
        
        <div className="tech-category">
          <h3 className="tech-category__title">Lenguajes de Programación</h3>
          <div className="tech-grid">
            {technologies.programming.map((tech) => (
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
            {technologies.frameworks.map((tech) => (
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
            {technologies.tools.map((tech) => (
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
            {technologies.learning.map((tech) => (
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
