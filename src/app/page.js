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

export default function Home() {
  const [activeProject, setActiveProject] = useState(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Sistema que detecta la salud del corazón",
      description: "Enfocado en prevenir escenarios críticos a través de analítica temprana.",
      longDescription: "Modelo de machine learning desplegado como microservicio que analiza señales médicas en tiempo real para anticipar riesgos cardiovasculares.",
      highlights: ["Precisión de 94% validada con datasets clínicos", "Dashboard con alertas inteligentes", "Arquitectura serverless con colas de eventos"],
      technologies: ["Next.js", "TensorFlow", "FastAPI", "AWS"],
      variant: "default"
    },
    {
      id: 2,
      title: "How real-time analytics can revolutionize strategy",
      description: "Suite que centraliza datos comerciales y genera insights accionables.",
      longDescription: "Plataforma multi-tenant para compañías SaaS que combina ETL automatizado con visualizaciones interactivas para acelerar la toma de decisiones.",
      highlights: ["Ingesta de datos en streaming", "Alertas basadas en umbrales dinámicos", "Automatización de reportes semanales"],
      technologies: ["Next.js", "Apache Kafka", "Supabase", "D3.js"],
      variant: "alt"
    }
  ];

  return (
    <>
      <div className={activeProject || isCVModalOpen ? 'content-dimmed' : ''}>
        <Header />
        <main>
          <Hero onOpenCV={() => setIsCVModalOpen(true)} />
          <Experience />
          <section id="articles" className="articles-section">
            <div className="container">
              <h2 className="section-title">Revisa mis trabajos</h2>
              <div className="grid cards-grid">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
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
    </>
  );
}

