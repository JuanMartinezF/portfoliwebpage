'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import esStrings from '@/locales/es.json';
import enStrings from '@/locales/en.json';
import esExperiences from '@/data/experiences.json';
import enExperiences from '@/data/en/experiences.json';
import esProjects from '@/data/projects.json';
import enProjects from '@/data/en/projects.json';
import esEducation from '@/data/education.json';
import enEducation from '@/data/en/education.json';

const AppContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es');
  const [theme, setTheme] = useState('dark');

  /* ── Apply theme to <html> ── */
  useEffect(() => {
    const saved = localStorage.getItem('nb-theme') || 'dark';
    setTheme(saved);
    document.documentElement.setAttribute('data-theme', saved);
  }, []);

  /* ── Language toggle ── */
  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'es' ? 'en' : 'es'));
  }, []);

  /* ── Theme toggle ── */
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('nb-theme', next);
      return next;
    });
  }, []);

  const strings = lang === 'es' ? esStrings : enStrings;
  const experiences = lang === 'es' ? esExperiences : enExperiences;
  const projects = lang === 'es' ? esProjects : enProjects;
  const education = lang === 'es' ? esEducation : enEducation;

  return (
    <AppContext.Provider value={{ lang, toggleLang, strings, experiences, projects, education, theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
