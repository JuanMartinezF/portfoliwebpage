import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.logo}>JCMF</div>

        <div className={styles.copy}>
          © {new Date().getFullYear()} Juan Carlos Martínez — Popayán, Colombia
        </div>

        <div className={styles.links}>
          <a href="https://github.com/JuanMartinezF" target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/juan-mart%C3%ADnez-f/" target="_blank" rel="noopener noreferrer" className={styles.link}>
            LinkedIn
          </a>
          <a href="https://instagram.com/juancmartinezf" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Instagram
          </a>
        </div>

      </div>

      {/* banda inferior */}
      <div className={styles.band}>
        <span>IMPULSADO POR CAFÉ ☕</span>
        <span className={styles.bandDot}>◆</span>
        <span>HECHO EN POPAYÁN</span>
        <span className={styles.bandDot}>◆</span>
        <span>NEXT.JS + NEO BRUTALISM</span>
      </div>
    </footer>
  );
}