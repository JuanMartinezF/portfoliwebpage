import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero({ onOpenCV }) {
  return (
    <section className={styles.hero}>

      {/* ── NAVBAR TICKER ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(2)].map((_, i) => (
            <span key={i} className={styles.tickerContent}>
              <span>DESARROLLO WEB</span>
              <span className={styles.dot}>◆</span>
              <span>WHATSAPP BOT</span>
              <span className={styles.dot}>◆</span>
              <span>AUTOMATIZACIONES</span>
              <span className={styles.dot}>◆</span>
              <span>DATA ENGINEERING</span>
              <span className={styles.dot}>◆</span>
              <span>CANVA & DISEÑO</span>
              <span className={styles.dot}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO INNER ── */}
      <div className={styles.heroInner}>

        {/* LEFT — texto principal */}
        <div className={styles.heroLeft}>
          <span className={styles.locationTag}>📍 Popayán, Colombia</span>

          <h1 className={styles.heroTitle}>
            HOLA,<br />SOY<br />
            <span className={styles.heroAccent}>JUAN.</span>
          </h1>

          <p className={styles.heroDesc}>
            Desarrollo páginas web y automatizo procesos con WhatsApp
            para negocios que quieren crecer en digital. Trabajo con
            empresas locales y clientes remotos.
          </p>

          <div className={styles.heroActions}>
            <a
              href="https://wa.me/+573150290803"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
            <button
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={onOpenCV}
            >
              Descargar CV
            </button>
          </div>
        </div>

        {/* RIGHT — foto + stats card */}
        <div className={styles.heroRight}>
          <div className={styles.statsCard}>

            {/* header de la card */}
            <div className={styles.cardHeader}>
              <span>▸ STATUS.JSON</span>
            </div>

            {/* foto */}
            <div className={styles.photoWrapper}>
              <Image
                src="/fotojcmf.jpg"
                alt="Juan Carlos Martinez"
                width={200}
                height={200}
                className={styles.photo}
                priority
              />
            </div>

            {/* stats */}
            <div className={styles.cardBody}>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Proyectos</span>
                <span className={styles.statValue}>8+</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Años exp.</span>
                <span className={styles.statValue}>5+</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Disponible</span>
                <span className={`${styles.statValue} ${styles.available}`}>● SÍ</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>Base</span>
                <span className={`${styles.statValue} ${styles.statSmall}`}>COL 🇨🇴</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
