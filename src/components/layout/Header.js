'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64; // altura del nuevo navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    onOpenContact();
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>

        {/* LOGO */}
        <div
          className={styles.logo}
          onClick={scrollToTop}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
        >
          JCMF
        </div>

        {/* NAV DESKTOP */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <button className={styles.navLink} onClick={() => scrollToSection('experience')}>
            Experiencia
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('projects')}>
            Proyectos
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('technologies')}>
            Tecnologías
          </button>
          <button className={`${styles.navLink} ${styles.navCta}`} onClick={handleContact}>
            Hablemos →
          </button>
        </nav>

        {/* HAMBURGER MOBILE */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

      </div>
    </header>
  );
}