import styles from './CVModal.module.css';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* header */}
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>▸ CURRICULUM VITAE</div>
            <h3 className={styles.title}>DESCARGA<br />MI CV.</h3>
            <p className={styles.subtitle}>Selecciona el idioma de tu preferencia</p>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Cerrar">×</button>
        </div>

        {/* opciones */}
        <div className={styles.options}>
          <a
            href="/Profesional_CV_Juan_Martinez.pdf"
            download="CV-JuanCarlosMartinez-ES.pdf"
            className={styles.option}
          >
            <div className={styles.flag}>🇪🇸</div>
            <div className={styles.optionContent}>
              <span className={styles.optionName}>Español</span>
              <span className={styles.optionValue}>Curriculum Vitae</span>
            </div>
            <div className={styles.downloadIcon}>↓</div>
          </a>

          <a
            href="/Prof_CV_Juan_Martinez_En.pdf"
            download="CV-JuanCarlosMartinez-EN.pdf"
            className={styles.option}
          >
            <div className={styles.flag}>🇺🇸</div>
            <div className={styles.optionContent}>
              <span className={styles.optionName}>English</span>
              <span className={styles.optionValue}>Resume</span>
            </div>
            <div className={styles.downloadIcon}>↓</div>
          </a>
        </div>

      </div>
    </div>
  );
}