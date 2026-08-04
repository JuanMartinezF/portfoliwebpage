import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './AboutMobile.module.css';

export default function AboutMobile() {
  const { strings } = useLanguage();
  const tags = strings.aboutMobile.tags;
  const heroStats = strings.hero.stats;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* foto */}
        <div className={styles.photoWrapper}>
          <Image
            src="/fotojcmf.jpg"
            alt="Juan Carlos Martinez"
            width={120}
            height={120}
            className={styles.photo}
            priority
          />
        </div>

        {/* info */}
        <div className={styles.info}>
          <div className={styles.name}>JUAN CARLOS<br />MARTÍNEZ F.</div>
          <div className={styles.tagList}>
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>

        {/* stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>9+</span>
            <span className={styles.statLabel}>{heroStats.projects}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>2+</span>
            <span className={styles.statLabel}>{heroStats.experience}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statValue} ${styles.available}`}>{heroStats.availableValue}</span>
            <span className={styles.statLabel}>{heroStats.available}</span>
          </div>
        </div>

      </div>
    </section>
  );
}