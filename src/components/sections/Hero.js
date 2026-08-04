'use client';

import Image from 'next/image';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  staggerContainer,
  viewportConfig,
} from '@/hooks/useScrollReveal';

export default function Hero({ onOpenCV }) {
  const { strings } = useLanguage();
  const h = strings.hero;

  return (
    <section className={styles.hero}>

      {/* ── NAVBAR TICKER ── */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...Array(8)].map((_, i) => (
            <span key={i} className={styles.tickerContent} aria-hidden={i > 0}>
              {h.ticker?.map((item, j) => (
                <span key={j} style={{ display: 'inline-flex', alignItems: 'center', gap: '20px' }}>
                  <span>{item}</span>
                  <span className={styles.dot}>◆</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── HERO INNER ── */}
      <div className={styles.heroInner}>

        {/* LEFT — texto principal */}
        <motion.div
          className={styles.heroLeft}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          <motion.span className={styles.locationTag} variants={fadeLeft}>
            {h.location}
          </motion.span>

          <motion.h1 className={styles.heroTitle} variants={staggerContainer}>
            {h.greeting.map((line, i) => (
              <motion.span key={i} variants={fadeLeft} style={{ display: 'block' }}>
                {line}
              </motion.span>
            ))}
            <motion.span
              className={styles.heroAccent}
              variants={fadeLeft}
              style={{ display: 'block' }}
            >
              {h.name}
            </motion.span>
          </motion.h1>

          <motion.span className={styles.roleTag} variants={fadeUp}>
            {h.role}
          </motion.span>

          <motion.p className={styles.heroDesc} variants={fadeUp}>
            {h.description}
          </motion.p>

          <motion.div className={styles.heroActions} variants={fadeUp}>
            <a
              href="https://wa.me/+573150290803"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              <MessageCircle size={16} />
              <span>{h.whatsapp}</span>
            </a>
            <button
              className={`${styles.btn} ${styles.btnGhost}`}
              onClick={onOpenCV}
            >
              {h.downloadCV}
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT — foto + stats card */}
        <motion.div
          className={styles.heroRight}
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
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
                <span className={styles.statLabel}>{h.stats.projects}</span>
                <span className={styles.statValue}>9+</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>{h.stats.experience}</span>
                <span className={styles.statValue}>2+</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>{h.stats.available}</span>
                <span className={`${styles.statValue} ${styles.available}`}>{h.stats.availableValue}</span>
              </div>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>{h.stats.base}</span>
                <span className={`${styles.statValue} ${styles.statSmall}`}>COL 🇨🇴</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
