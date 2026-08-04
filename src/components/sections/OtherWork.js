'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './OtherWork.module.css';
import technologiesData from '@/data/technologies.json';
import {
  fadeLeft,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from '@/hooks/useScrollReveal';

export default function OtherWork({ onSelectProject }) {
  const { projects, strings } = useLanguage();
  const s = strings.otherWork;
  const webProjects = projects.filter((p) => p.category === 'web');

  return (
    <section id="other-work" className={styles.section}>
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
          <div>
            <h2 className={styles.sectionTitle}>{s.sectionTitle}</h2>
            <p className={styles.subtitle}>{s.subtitle}</p>
          </div>
        </motion.div>

        <div className={styles.columns}>

          {/* ── PROYECTOS WEB ── */}
          <motion.div
            className={styles.projectList}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {webProjects.map((project) => (
              <motion.button
                key={project.id}
                type="button"
                className={styles.projectItem}
                variants={staggerItem}
                onClick={() => onSelectProject?.(project)}
              >
                <span className={styles.projectTitle}>{project.title}</span>
                <span className={styles.projectDesc}>{project.description}</span>
                <span className={styles.cta}>{s.cta}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* ── HABILIDADES SECUNDARIAS ── */}
          <motion.div
            className={styles.tagCloud}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            {technologiesData.webDev.map((tech) => (
              <span key={tech.name} className={styles.tag}>{tech.name}</span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
