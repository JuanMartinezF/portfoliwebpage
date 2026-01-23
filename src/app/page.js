import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Sistema que detecta la salud del corazón",
      description: "In today's fast-paced business world, keeping up with financial management can be overwhelming.",
      variant: "default"
    },
    {
      id: 2,
      title: "How real-time analytics can revolutionize strategy",
      description: "Perfect for small businesses or startups, our Starter Plan gives you the essential tools.",
      variant: "alt"
    }
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />
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
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

