'use client';

export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  const contacts = [
    {
      name: "Email",
      value: "juancarlos@example.com",
      link: "mailto:juancarlos@example.com",
      icon: "📧"
    },
    {
      name: "Instagram",
      value: "@juancmartinezf",
      link: "https://instagram.com/juancmartinezf",
      icon: "📷"
    },
    {
      name: "LinkedIn",
      value: "Juan Martínez",
      link: "https://www.linkedin.com/in/juan-martínez-f/",
      icon: "💼"
    },
    {
      name: "GitHub",
      value: "JuanMartinezF",
      link: "https://github.com/JuanMartinezF",
      icon: "🐙"
    }
  ];

  return (
    <div className="contact-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="contact-modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <div className="contact-modal__header">
          <h3 className="contact-modal__title">Hablemos</h3>
          <p className="contact-modal__subtitle">¿Tienes un proyecto en mente? Conectemos</p>
        </div>
        <div className="contact-modal__options">
          {contacts.map((contact) => (
            <a 
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
            >
              <div className="contact-option__icon">{contact.icon}</div>
              <div className="contact-option__content">
                <h4>{contact.name}</h4>
                <p>{contact.value}</p>
              </div>
              <span className="contact-option__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
