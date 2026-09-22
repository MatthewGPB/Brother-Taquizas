'use client';

import { useState } from 'react';
import { site, faqs } from '@/lib/content';
import styles from './FAQ.module.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="eyebrow">Common questions</span>
            <h2 className="section-title">Before you book.</h2>
            <p className={styles.sub}>
              Don&apos;t see your question? Call or text me directly at{' '}
              <a href={`tel:${site.phoneRaw}`} className={styles.phone}>{site.phone}</a>.
            </p>
          </div>
          <div className={styles.list}>
            {faqs.map((faq, i) => (
              <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
                <button
                  className={styles.q}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  {faq.q}
                </button>
                <div className={styles.a}><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
