'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Technologies from '@/components/Technologies';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import CVModal from '@/components/CVModal';
import ContactModal from '@/components/ContactModal';
import projectsData from '@/data/projects.json';

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <div className={activeProject || isCVModalOpen || isContactModalOpen ? 'content-dimmed' : ''}>
        <Header onOpenContact={() => setIsContactModalOpen(true)} />
        <main>
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />
          <Experience />
          <section id="projects" className="articles-section">
            <div className="container">
              <h2 className="section-title">Revisa mis trabajos</h2>
              <div className="grid cards-grid">
                {projectsData.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    variant={project.variant}
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

