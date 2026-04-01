'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import esStrings from '@/locales/es.json';
import enStrings from '@/locales/en.json';
import esExperiences from '@/data/experiences.json';
import enExperiences from '@/data/en/experiences.json';
import esProjects from '@/data/projects.json';
import enProjects from '@/data/en/projects.json';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  }, []);

  const strings = lang === 'es' ? esStrings : enStrings;
  const experiences = lang === 'es' ? esExperiences : enExperiences;
  const projects = lang === 'es' ? esProjects : enProjects;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, strings, experiences, projects }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
