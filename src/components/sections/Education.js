'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Education.module.css';
import {
  fadeLeft,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '@/hooks/useScrollReveal';

export default function Education() {
  const { education, strings } = useLanguage();
  const s = strings.education;

  return (
    <section id="education" className={styles.section}>
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
          {education.map((item) => (
            <motion.div key={item.id} className={styles.item} variants={staggerItem}>
              <span className={styles.badge}>
                {item.type === 'degree' ? s.degreeLabel : s.certLabel}
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.institution}>{item.institution}</p>
                {item.description && (
                  <p className={styles.description}>{item.description}</p>
                )}
              </div>
              <span className={styles.date}>{item.date}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
