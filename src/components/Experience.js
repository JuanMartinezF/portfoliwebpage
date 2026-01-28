import experiencesData from '@/data/experiences.json';

export default function Experience() {

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div className="timeline">
          {[...experiencesData].reverse().map((exp) => (
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
