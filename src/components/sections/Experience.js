'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Experience.module.css';
import {
  fadeLeft,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '@/hooks/useScrollReveal';

export default function Experience() {
  const { experiences, strings } = useLanguage();
  const s = strings.experience;

  // más reciente primero
  const sorted = [...experiences].reverse();

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>

        {/* ── HEADER ── */}
        <motion.div
          className={styles.sectionHeader}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <span className={styles.sectionNumber}>{s.sectionNumber}</span>
          <h2 className={styles.sectionTitle}>{s.sectionTitle}</h2>
        </motion.div>

        {/* ── LISTA ── */}
        <motion.div
          className={styles.list}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {sorted.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.item}
              variants={staggerItem}
            >

              {/* columna izquierda — fecha */}
              <div className={styles.dateCol}>
                <div className={styles.year}>
                  {exp.date.split('|')[0].trim()}
                </div>
                <div className={styles.period}>
                  {exp.date.split('|')[1]?.trim()}
                </div>
                <div className={styles.indexNum}>
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* columna derecha — contenido */}
              <div className={styles.content}>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}