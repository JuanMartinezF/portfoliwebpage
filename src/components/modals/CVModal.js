'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './CVModal.module.css';

export default function CVModal({ isOpen, onClose }) {
  const { strings } = useLanguage();
  const c = strings.cvModal;

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* header */}
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>{c.eyebrow}</div>
            <h3 className={styles.title}>
              {c.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <p className={styles.subtitle}>{c.subtitle}</p>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Close">×</button>
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
              <span className={styles.optionName}>{c.options[0].lang}</span>
              <span className={styles.optionValue}>{c.options[0].label}</span>
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
              <span className={styles.optionName}>{c.options[1].lang}</span>
              <span className={styles.optionValue}>{c.options[1].label}</span>
            </div>
            <div className={styles.downloadIcon}>↓</div>
          </a>
        </div>

      </div>
    </div>
  );
}