'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/context/LanguageContext';
import {
  Mail, Linkedin, Github,
  MessageCircle, Send, CheckCircle, AlertCircle, X
} from 'lucide-react';
import styles from './ContactModal.module.css';

export default function ContactModal({ isOpen, onClose }) {
  const formRef = useRef(null);
  const [tab, setTab] = useState('links');
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { strings } = useLanguage();
  const c = strings.contactModal;
  const f = c.form;

  const contacts = [
    {
      name: 'WhatsApp',
      value: c.whatsappValue,
      link: 'https://wa.me/+573150290803',
      Icon: MessageCircle,
      highlight: false,
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
  ];

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
            <div className={styles.eyebrow}>{c.eyebrow}</div>
            <h3 className={styles.title}>{c.title}</h3>
            <p className={styles.subtitle}>{c.subtitle}</p>
          </div>
          <button className={styles.close} onClick={onClose} aria-label={c.close}>
            <X size={16} />
          </button>
        </div>

        {/* TABS */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${tab === 'links' ? styles.tabActive : ''}`}
            onClick={() => setTab('links')}
          >
            {c.tabLinks}
          </button>
          <button
            className={`${styles.tab} ${tab === 'form' ? styles.tabActive : ''}`}
            onClick={() => setTab('form')}
          >
            {c.tabForm}
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
                <p className={styles.feedbackTitle}>{f.successTitle}</p>
                <p className={styles.feedbackText}>{f.successText}</p>
                <button className={styles.feedbackBtn} onClick={() => setStatus('idle')}>
                  {f.successBtn}
                </button>
              </div>
            )}
            {status === 'error' && (
              <div className={styles.feedback}>
                <AlertCircle size={36} className={styles.feedbackError} />
                <p className={styles.feedbackTitle}>{f.errorTitle}</p>
                <p className={styles.feedbackText}>{f.errorText}</p>
                <button className={styles.feedbackBtn} onClick={() => setStatus('idle')}>
                  {f.errorBtn}
                </button>
              </div>
            )}
            {(status === 'idle' || status === 'sending') && (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>{f.labelName}</label>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder={f.placeholderName}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>{f.labelEmail}</label>
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder={f.placeholderEmail}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>{f.labelMessage}</label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder={f.placeholderMessage}
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
                    <><span className={styles.spinner} /> {f.sending}</>
                  ) : (
                    <><Send size={14} /> {f.submit}</>
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