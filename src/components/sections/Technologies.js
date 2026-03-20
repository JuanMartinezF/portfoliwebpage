import Image from 'next/image';
import technologiesData from '@/data/technologies.json';
import styles from './Technologies.module.css';

const LEVEL_WIDTH = {
  'Básico':      '35%',
  'Basico':      '35%',
  'Intermedio':  '65%',
  'Avanzado':    '90%',
};

function TechItem({ tech, learning = false }) {
  return (
    <div className={`${styles.techItem} ${learning ? styles.techItemLearning : ''}`}>
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
          <span className={styles.learningBadge}>En progreso</span>
        ) : (
          <>
            <span className={styles.techLevel}>{tech.level}</span>
            <div className={styles.techBar}>
              <div
                className={styles.techBarFill}
                style={{ width: LEVEL_WIDTH[tech.level] || '40%' }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className={styles.section}>
      <div className={styles.inner}>

        {/* ── HEADER ── */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03</span>
          <h2 className={styles.sectionTitle}>TECNOLOGÍAS</h2>
        </div>

        {/* ── CATEGORÍAS ── */}
        <div className={styles.categories}>

          {/* Lenguajes */}
          <div className={styles.category}>
            <div className={styles.catHeader}>
              <span className={styles.catTitle}>Lenguajes</span>
              <span className={styles.catCount}>{technologiesData.programming.length}</span>
            </div>
            <div className={styles.techGrid}>
              {technologiesData.programming.map((tech) => (
                <TechItem key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className={`${styles.category} ${styles.categoryWide}`}>
            <div className={styles.catHeader}>
              <span className={styles.catTitle}>Frameworks & Librerías</span>
              <span className={styles.catCount}>{technologiesData.frameworks.length}</span>
            </div>
            <div className={styles.techGrid}>
              {technologiesData.frameworks.map((tech) => (
                <TechItem key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

          {/* Herramientas */}
          <div className={styles.category}>
            <div className={styles.catHeader}>
              <span className={styles.catTitle}>Herramientas</span>
              <span className={styles.catCount}>{technologiesData.tools.length}</span>
            </div>
            <div className={styles.techGrid}>
              {technologiesData.tools.map((tech) => (
                <TechItem key={tech.name} tech={tech} />
              ))}
            </div>
          </div>

        </div>

        {/* ── APRENDIENDO ── */}
        <div className={styles.learningSection}>
          <div className={styles.learningHeader}>
            <span className={styles.catTitle}>Actualmente aprendiendo</span>
            <span className={styles.learningDot}>●</span>
          </div>
          <div className={styles.learningGrid}>
            {technologiesData.learning.map((tech) => (
              <TechItem key={tech.name} tech={tech} learning />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}