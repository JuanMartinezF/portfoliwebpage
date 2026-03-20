'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import AboutMobile from '@/components/sections/AboutMobile';
import Experience from '@/components/sections/Experience';
import Technologies from '@/components/sections/Technologies';
import ProjectCard from '@/components/sections/ProjectCard';
import ProjectModal from '@/components/modals/ProjectModal';
import CVModal from '@/components/modals/CVModal';
import ContactModal from '@/components/modals/ContactModal';
import projectsData from '@/data/projects.json';
import styles from './page.module.css';

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const featured = projectsData.find((p) => p.id === 6);
  const rest = projectsData.filter((p) => p.id !== 6);

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
              <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02</span>
                <h2 className={styles.sectionTitle}>PROYECTOS</h2>
              </div>
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
        </main>
        <Footer />
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}