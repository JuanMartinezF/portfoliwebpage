'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Header({ onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleContact = () => {
    onOpenContact();
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo" onClick={scrollToTop} role="button" tabIndex={0}>
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <span>Juan Carlos Martinez</span>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('experience')}>Experiencia</button>
          <button onClick={() => scrollToSection('projects')}>Proyectos</button>
          <button onClick={() => scrollToSection('technologies')}>Tecnologías</button>
          <button onClick={handleContact} className="cta">Hablemos</button>
        </nav>
      </div>
    </header>
  );
}
