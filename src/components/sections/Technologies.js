'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Technologies.module.css';
import {
  fadeLeft,
  staggerContainer,
  staggerItem,
  fadeUp,
  viewportConfig,
} from '@/hooks/useScrollReveal';

import technologiesData from '@/data/technologies.json';

// Technologies names are universal; only levels and labels translate
function TechItem({ tech, learning = false, strings }) {
  const levelLabel = strings.technologies.levels[tech.level] || tech.level;
  const learningBadge = strings.technologies.learningBadge;

  const LEVEL_WIDTH = {
    'Básico': '35%', 'Basico': '35%',
    'Intermedio': '65%', 'Avanzado': '90%',
  };

  return (
    <motion.div
      className={`${styles.techItem} ${learning ? styles.techItemLearning : ''}`}
      variants={staggerItem}
    >
      <div className={styles.techIcon}>
        <Image
          src={tech.icon}
          alt={tech.name}
          width={36}
          height={36}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.techInfo}>
        <span className={styles.techName}>{tech.name}</span>
        {learning ? (
          <span className={styles.learningBadge}>{learningBadge}</span>
        ) : (
          <>
            <span className={styles.techLevel}>{levelLabel}</span>
            <div className={styles.techBar}>
              <div
                className={styles.techBarFill}
                style={{ width: LEVEL_WIDTH[tech.level] || '40%' }}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function Technologies() {
  const { strings } = useLanguage();
  const s = strings.technologies;

  return (
    <section id="technologies" className={styles.section}>
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

        {/* ── CATEGORÍAS ── */}
        <motion.div
          className={styles.categories}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >

          {/* Lenguajes */}
          <motion.div className={styles.category} variants={fadeUp}>
            <div className={styles.catHeader}>
              <span className={styles.catTitle}>{s.categories.languages}</span>
              <span className={styles.catCount}>{technologiesData.programming.length}</span>
            </div>
            <motion.div
              className={styles.techGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {technologiesData.programming.map((tech) => (
                <TechItem key={tech.name} tech={tech} strings={strings} />
              ))}
            </motion.div>
          </motion.div>

          {/* Data Science & ML */}
          <motion.div className={`${styles.category} ${styles.categoryWide}`} variants={fadeUp}>
            <div className={styles.catHeader}>
              <span className={styles.catTitle}>{s.categories.dataScience}</span>
              <span className={styles.catCount}>{technologiesData.dataScience.length}</span>
            </div>
            <motion.div
              className={styles.techGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {technologiesData.dataScience.map((tech) => (
                <TechItem key={tech.name} tech={tech} strings={strings} />
              ))}
            </motion.div>
          </motion.div>

          {/* Herramientas */}
          <motion.div className={styles.category} variants={fadeUp}>
            <div className={styles.catHeader}>
              <span className={styles.catTitle}>{s.categories.tools}</span>
              <span className={styles.catCount}>{technologiesData.tools.length}</span>
            </div>
            <motion.div
              className={styles.techGrid}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {technologiesData.tools.map((tech) => (
                <TechItem key={tech.name} tech={tech} strings={strings} />
              ))}
            </motion.div>
          </motion.div>

        </motion.div>

        {/* ── APRENDIENDO ── */}
        <motion.div
          className={styles.learningSection}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <div className={styles.learningHeader}>
            <span className={styles.catTitle}>{s.categories.learning}</span>
            <span className={styles.learningDot}>●</span>
          </div>
          <motion.div
            className={styles.learningGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {technologiesData.learning.map((tech) => (
              <TechItem key={tech.name} tech={tech} strings={strings} learning />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}