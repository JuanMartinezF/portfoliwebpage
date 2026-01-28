import Image from 'next/image';

export default function ProjectModal({ project, onClose }) {
  if (!project) {
    return null;
  }

  return (
    <div className="project-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="project-modal" onClick={(event) => event.stopPropagation()}>
        <button className="project-modal__close" onClick={onClose} aria-label="Cerrar detalle de proyecto">
          ×
        </button>
        <div className="project-modal__header">
          <div className={`thumb ${project.variant === "alt" ? "alt" : ""}`}>
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
            )}
          </div>
          <div>
            <p className="project-modal__eyebrow">Proyecto destacado</p>
            <h3>{project.title}</h3>
          </div>
        </div>
        {Array.isArray(project.longDescription) ? (
          project.longDescription.map((paragraph, index) => (
            <p key={index} className="project-modal__lead">{paragraph}</p>
          ))
        ) : (
          <p className="project-modal__lead">{project.longDescription ?? project.description}</p>
        )}
        {project.highlights?.length ? (
          <ul className="project-modal__list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
        {project.technologies?.length ? (
          <div className="project-modal__tags">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        ) : null}
        {project.pdfUrl && (
          <div className="project-modal__actions">
            <a 
              href={project.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-pdf"
            >
              📄 Ver documentación del proyecto
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
