import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <span>Juan Carlos Martinez</span>
        </div>
        <nav className="main-nav">
          <a href="#work">Proyectos</a>
          <a href="#articles">Tecnologias</a>
          <a href="#contact" className="cta">Hablemos</a>
        </nav>
      </div>
    </header>
  );
}
