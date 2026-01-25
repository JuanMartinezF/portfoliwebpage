export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="project-modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="project-modal cv-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <div className="cv-modal__header">
          <h3>Descarga mi CV</h3>
          <p className="cv-modal__subtitle">Selecciona el idioma de tu preferencia</p>
        </div>
        <div className="cv-modal__options">
          <a 
            href="/Profesional_CV_Juan_Martinez.pdf" 
            download="CV-JuanCarlosMartinez-ES.pdf"
            className="cv-option"
          >
            <div className="cv-option__icon">🇪🇸</div>
            <div className="cv-option__content">
              <h4>Español</h4>
              <p>Curriculum Vitae en español</p>
            </div>
            <span className="cv-option__arrow">→</span>
          </a>
          <a 
            href="/Prof_CV_Juan_Martinez_En.pdf" 
            download="CV-JuanCarlosMartinez-EN.pdf"
            className="cv-option"
          >
            <div className="cv-option__icon">🇺🇸</div>
            <div className="cv-option__content">
              <h4>English</h4>
              <p>Resume in English</p>
            </div>
            <span className="cv-option__arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}
