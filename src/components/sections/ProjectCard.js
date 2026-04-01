'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ProjectCard.module.css';
import { viewportConfig } from '@/hooks/useScrollReveal';

const TECH_COLORS = {
  'React':        'blue',
  'TypeScript':   'blue',
  'Next.js':      'blue',
  'JavaScript':   'blue',
  'Tailwind CSS': 'blue',
  'Python':       'green',
  'Pandas':       'green',
  'Numpy':        'green',
  'BeautifulSoup':'green',
  'Selenium':     'green',
  'Requests':     'green',
  'TensorFlow':   'green',
  'Keras':        'green',
  'Scikit-learn': 'green',
  'MATLAB':       'gray',
  'AppDesigner':  'gray',
  'HTML':         'gray',
  'CSS':          'gray',
  'XML':          'gray',
  'Excel':        'gray',
  'Git':          'gray',
  'GitHub':       'gray',
  'Réflex':       'outline',
};

function getBadgeClass(tech) {
  const color = TECH_COLORS[tech] || 'outline';
  return `${styles.badge} ${styles[`badge_${color}`]}`;
}

export default function ProjectCard({
  id,
  title,
  description,
  image,
  technologies = [],
  featured = false,
  onSelect,
}) {
  const { strings } = useLanguage();

  return (
    <motion.article
      className={`${styles.card} ${featured ? styles.featured : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => onSelect?.()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect?.();
        }
      }}
      initial={{ opacity: 0, y: featured ? 60 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{
        duration: featured ? 0.45 : 0.3,
        ease: 'easeOut',
        delay: featured ? 0 : 0.05,
      }}
    >
      {/* THUMBNAIL */}
      <div className={styles.thumb}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className={styles.thumbPlaceholder}>
            {title.slice(0, 2).toUpperCase()}
          </span>
        )}

        {featured && (
          <div className={styles.featuredBadge}>⭐ DESTACADO</div>
        )}
      </div>

      {/* BODY */}
      <div className={styles.body}>
        <span className={styles.projectNum}>
          {String(id).padStart(2, '0')} —
        </span>

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>

        {technologies.length > 0 && (
          <div className={styles.tags}>
            {technologies.slice(0, 4).map((tech) => (
              <span key={tech} className={getBadgeClass(tech)}>
                {tech}
              </span>
            ))}
            {technologies.length > 4 && (
              <span className={`${styles.badge} ${styles.badge_outline}`}>
                +{technologies.length - 4}
              </span>
            )}
          </div>
        )}

        <span className={styles.cta}>{strings.projects.cta}</span>
      </div>
    </motion.article>
  );
}