'use client';

import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { strings } = useLanguage();
  const f = strings.footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.logo}>JCMF</div>

        <div className={styles.copy}>
          {f.copy.replace('{year}', year)}
        </div>

        <div className={styles.links}>
          <a href="https://github.com/JuanMartinezF" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/juan-mart%C3%ADnez-f/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
        </div>

      </div>

      {/* banda inferior */}
      <div className={styles.band}>
        <span>{f.band[0]}</span>
        <span className={styles.bandDot}>◆</span>
        <span>{f.band[1]}</span>
        <span className={styles.bandDot}>◆</span>
      </div>
    </footer>
  );
}