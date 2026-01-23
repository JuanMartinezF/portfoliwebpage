export default function Experience() {
  const experiences = [
    
    {
      id: 6,
      date: "2024 | Jul",
      role: "Ingeniero de Datos Jr.",
      company: "Freelance / Upwork",
      description: "Construí un pipeline de adquisición, limpieza y consolidación de datos de médicos desde un sitio web, entregando una base de datos estructurada en Excel."
    },
    {
      id: 5,
      date: "2024 | Mar – Jun",
      role: "Ingeniero ML / Científico de Datos",
      company: "Universidad del Cauca (Proyecto de investigación)",
      description: "Desarrollé una herramienta de machine learning para análisis de señales ECG y evaluación de salud cardíaca de deportistas, integrando modelos con una aplicación desktop en MATLAB."
    },
    {
        id:4,
        date: "2024 | Ago – Dic",
        role: "Ingeniero Deep Learning",
        company: "Universidad del Cauca",
        description: "Desarrollé una aplicación desktop de visión artificial para segmentación y detección de enfermedades en hojas de mango usando procesamiento de imágenes en MATLAB."
    },
    {
        id: 3,
        date: "2025 | Abril",
        role: "Ingeniero de Datos",
        company: "Freelance / Upwork",
        description: "Implementé un sistema de scraping masivo para extraer más de 48.000 registros de notarios, generando datasets estructurados en CSV listos para análisis."
    },
    {
        id:2,
        date: "2025 | Mayo – Presente",
        role: "Desarrollador Web Frontend",
        company: "Universidad del Cauca",
        description: "Construí secciones frontend y diseño UI/UX para un sitio web de congreso usando Réflex, HTML, CSS, JavaScript y Tailwind CSS."
    },
    {
        id:1,
        date: "2025 | Junio - Dic",
        role: "Desarrollador Full Stack",
        company: "Servitaxi S.A.",
        description: "Diseñé, desarrollé y desplegué un sitio web fullstack para cliente, incluyendo frontend en React/TypeScript, formulario funcional, optimización básica SEO y despliegue en hosting."
    }
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div className="timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
