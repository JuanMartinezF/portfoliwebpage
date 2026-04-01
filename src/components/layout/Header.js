'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Header.module.css';

export default function Header({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLang, strings } = useLanguage();
  const nav = strings.nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 64;
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
            {nav.experience}
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('projects')}>
            {nav.projects}
          </button>
          <button className={styles.navLink} onClick={() => scrollToSection('technologies')}>
            {nav.technologies}
          </button>
          <button className={`${styles.navLink} ${styles.navCta}`} onClick={handleContact}>
            {nav.cta}
          </button>
        </nav>

        {/* LANGUAGE TOGGLE */}
        <button
          className={styles.langToggle}
          onClick={toggleLang}
          aria-label="Toggle language"
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>

        {/* HAMBURGER MOBILE */}
        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={lang === 'es' ? 'Menú' : 'Menu'}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

      </div>
    </header>
  );
}