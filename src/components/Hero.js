import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="eyebrow ">¿De quien es esto?</div>
        <div className="hero-photo">
            <Image src="/fotojcmf.jpg" alt="Juan Carlos Martinez"
             width={150} height={150} 
             className="rounded-full" />
        </div>
        <h1>Hola soy Juan</h1>
        <p className="lead text-justify">
          Apasionado por la ciencia de datos y la inteligencia artificial, con experiencia en machine learning, deep learning, adquisición de datos y desarrollo web. He participado en proyectos que integran análisis de datos, modelos predictivos y aplicaciones web, entregando soluciones completas de software y datos orientadas a impacto real.
        </p>
        <div className="hero-cta">
          <a className="btn primary" href="#articles">
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}
