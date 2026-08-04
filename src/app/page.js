'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/layout/Header';
import { fadeLeft, viewportConfig } from '@/hooks/useScrollReveal';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutMobile from '@/components/sections/AboutMobile';
import Experience from '@/components/sections/Experience';
import Technologies from '@/components/sections/Technologies';
import Education from '@/components/sections/Education';
import OtherWork from '@/components/sections/OtherWork';
import ProjectCard from '@/components/sections/ProjectCard';
import ProjectModal from '@/components/modals/ProjectModal';
import CVModal from '@/components/modals/CVModal';
import ContactModal from '@/components/modals/ContactModal';
import styles from './page.module.css';

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { projects, strings } = useLanguage();
  const s = strings.projects;

  const dataProjects = projects.filter((p) => p.category !== 'web');
  const featured = dataProjects.find((p) => p.featured) || dataProjects[0];
  const rest = dataProjects.filter((p) => p.id !== featured?.id);

  return (
    <>
      <div className={activeProject || isCVModalOpen || isContactModalOpen ? 'content-dimmed' : ''}>
        <Header onOpenContact={() => setIsContactModalOpen(true)} />
        <main>
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />

          {/* solo visible en mobile */}
          <AboutMobile />

          <Experience />

          <section id="projects" className={styles.projectsSection}>
            <div className={styles.projectsInner}>
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
              <div className={styles.grid}>
                {featured && (
                  <ProjectCard
                    key={featured.id}
                    {...featured}
                    featured={true}
                    onSelect={() => setActiveProject(featured)}
                  />
                )}
                {rest.map((project) => (
                  <ProjectCard
                    key={project.id}
                    {...project}
                    featured={false}
                    onSelect={() => setActiveProject(project)}
                  />
                ))}
              </div>
            </div>
          </section>

          <Technologies />

          <Education />

          <OtherWork onSelectProject={setActiveProject} />
        </main>
        <Footer />
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}