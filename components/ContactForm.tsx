'use client';

import { useState } from 'react';
import { site, contact } from '@/lib/content';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/bbfbd87f6afc3d7d92564aae53e3d3b0', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error('failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 className="section-title">{contact.title}</h2>
            <p className={styles.sub}>{contact.sub}</p>
            <a href={`sms:${site.phoneRaw}`} className={styles.textLink}>
              {contact.textLine}: <strong>{site.phone}</strong>
            </a>
            <p className={styles.capacity}>{contact.capacity}</p>
          </div>

          {status === 'sent' ? (
            <div className={styles.successBox}>
              <span className={styles.check}>✓</span>
              <p>{contact.success}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New lead from growpalmbeach.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              <input
                type="text"
                name="name"
                placeholder={contact.namePlaceholder}
                required
                className={styles.input}
              />
              <input
                type="text"
                name="contact"
                placeholder={contact.phonePlaceholder}
                required
                className={styles.input}
              />
              <textarea
                name="message"
                placeholder={contact.messagePlaceholder}
                required
                rows={4}
                className={styles.input}
              />
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : `${contact.button} →`}
              </button>
              {status === 'error' && (
                <p className={styles.error}>
                  Something glitched — text or call me instead:{' '}
                  <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
