import Image from 'next/image';
import styles from './ProjectModal.module.css';

const TECH_COLORS = {
  'React': 'blue', 'TypeScript': 'blue', 'Next.js': 'blue',
  'JavaScript': 'blue', 'Tailwind CSS': 'blue',
  'Python': 'green', 'Pandas': 'green', 'Numpy': 'green',
  'BeautifulSoup': 'green', 'Selenium': 'green', 'Requests': 'green',
  'TensorFlow': 'green', 'Keras': 'green',
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* thumbnail */}
        <div className={styles.thumb}>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 600px"
            />
          ) : (
            <span className={styles.thumbPlaceholder}>
              {project.title.slice(0, 2).toUpperCase()}
            </span>
          )}
          <button className={styles.close} onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        {/* body */}
        <div className={styles.body}>
          <div className={styles.eyebrow}>▸ PROYECTO DESTACADO</div>
          <h3 className={styles.title}>{project.title}</h3>

          {/* descripción larga */}
          {Array.isArray(project.longDescription)
            ? project.longDescription.map((p, i) => (
                <p key={i} className={styles.lead}>{p}</p>
              ))
            : <p className={styles.lead}>{project.longDescription ?? project.description}</p>
          }

          {/* highlights */}
          {project.highlights?.length > 0 && (
            <ul className={styles.highlights}>
              {project.highlights.map((item) => (
                <li key={item} className={styles.highlightItem}>
                  <span className={styles.highlightDot}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {/* tecnologías */}
          {project.technologies?.length > 0 && (
            <div className={styles.tags}>
              {project.technologies.map((tech) => {
                const color = TECH_COLORS[tech] || 'outline';
                return (
                  <span key={tech} className={`${styles.badge} ${styles[`badge_${color}`]}`}>
                    {tech}
                  </span>
                );
              })}
            </div>
          )}

          {/* CTA */}
          {project.pdfUrl && (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cta}
            >
              📄 Ver documentación →
            </a>
          )}
        </div>

      </div>
    </div>
  );
}