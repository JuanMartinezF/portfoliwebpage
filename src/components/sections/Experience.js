import experiencesData from '@/data/experiences.json';
import styles from './Experience.module.css';

export default function Experience() {
  // más reciente primero
  const sorted = [...experiencesData].reverse();

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>

        {/* ── HEADER ── */}
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <h2 className={styles.sectionTitle}>EXPERIENCIA</h2>
        </div>

        {/* ── LISTA ── */}
        <div className={styles.list}>
          {sorted.map((exp, index) => (
            <div key={exp.id} className={styles.item}>

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

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}