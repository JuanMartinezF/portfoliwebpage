'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail, Linkedin, Github, Instagram,
  MessageCircle, Send, CheckCircle, AlertCircle, X
} from 'lucide-react';
import styles from './ContactModal.module.css';

const contacts = [
  {
    name: 'WhatsApp',
    value: 'Escríbeme directo',
    link: 'https://wa.me/+573150290803',
    Icon: MessageCircle,
    highlight: true,
  },
  {
    name: 'Email',
    value: 'jcmartinezf14@gmail.com',
    link: 'mailto:jcmartinezf14@gmail.com',
    Icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: 'Juan Martínez F.',
    link: 'https://www.linkedin.com/in/juan-mart%C3%ADnez-f/',
    Icon: Linkedin,
  },
  {
    name: 'GitHub',
    value: 'JuanMartinezF',
    link: 'https://github.com/JuanMartinezF',
    Icon: Github,
  },
  {
    name: 'Instagram',
    value: '@juancmartinezf',
    link: 'https://instagram.com/juancmartinezf',
    Icon: Instagram,
  },
];

export default function ContactModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [tab, setTab] = useState('links');
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          message: form.message,
          title:   `Mensaje de ${form.name}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className={styles.header}>
          <div>
            <div className={styles.eyebrow}>▸ CONTACTO</div>
            <h3 className={styles.title}>HABLEMOS.</h3>
            <p className={styles.subtitle}>¿Tienes un proyecto? Respondo el mismo día.</p>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="Cerrar">
            <X size={16} />
          </button>
        </div>

        {/* TABS */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'links' ? styles.tabActive : ''}`}
            onClick={() => setTab('links')}
          >
            Contacto directo
          </button>
          <button
            className={`${styles.tab} ${tab === 'form' ? styles.tabActive : ''}`}
            onClick={() => setTab('form')}
          >
            Enviar mensaje
          </button>
        </div>

        {/* TAB LINKS */}
        {tab === 'links' && (
          <div className={styles.options}>
            {contacts.map(({ name, value, link, Icon, highlight }) => (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.option} ${highlight ? styles.optionHighlight : ''}`}
              >
                <div className={`${styles.icon} ${highlight ? styles.iconHighlight : ''}`}>
                  <Icon size={18} />
                </div>
                <div className={styles.optionContent}>
                  <span className={styles.optionName}>{name}</span>
                  <span className={styles.optionValue}>{value}</span>
                </div>
                <Send size={14} className={styles.arrow} />
              </a>
            ))}
          </div>
        )}

        {/* TAB FORM */}
        {tab === 'form' && (
          <div className={styles.formWrapper}>
            {status === 'success' && (
              <div className={styles.feedback}>
                <CheckCircle size={36} className={styles.feedbackSuccess} />
                <p className={styles.feedbackTitle}>¡Mensaje enviado!</p>
                <p className={styles.feedbackText}>Te respondo en menos de 24 horas.</p>
                <button className={styles.feedbackBtn} onClick={() => setStatus('idle')}>
                  Enviar otro →
                </button>
              </div>
            )}
            {status === 'error' && (
              <div className={styles.feedback}>
                <AlertCircle size={36} className={styles.feedbackError} />
                <p className={styles.feedbackTitle}>Algo salió mal</p>
                <p className={styles.feedbackText}>Intenta de nuevo o escríbeme por WhatsApp.</p>
                <button className={styles.feedbackBtn} onClick={() => setStatus('idle')}>
                  Intentar de nuevo →
                </button>
              </div>
            )}
            {(status === 'idle' || status === 'sending') && (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Tu nombre</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Ej: Carlos Pérez"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Tu correo</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="tucorreo@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>¿En qué te puedo ayudar?</label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Cuéntame brevemente tu proyecto..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className={styles.spinner} /> Enviando...</>
                  ) : (
                    <><Send size={14} /> Enviar mensaje</>
                  )}
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
}