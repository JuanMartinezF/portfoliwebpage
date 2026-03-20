import Image from 'next/image';
import styles from './AboutMobile.module.css';

export default function AboutMobile() {
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
            <span className={styles.tag}>Desarrollador Web</span>
            <span className={styles.tag}>WhatsApp Bots</span>
            <span className={styles.tag}>Data Engineer</span>
          </div>
        </div>

        {/* stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>8+</span>
            <span className={styles.statLabel}>Proyectos</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statValue}>3+</span>
            <span className={styles.statLabel}>Años exp.</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={`${styles.statValue} ${styles.available}`}>● SÍ</span>
            <span className={styles.statLabel}>Disponible</span>
          </div>
        </div>

      </div>
    </section>
  );
}