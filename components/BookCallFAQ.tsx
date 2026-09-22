'use client';

import { useState } from 'react';
import styles from './BookCallFAQ.module.css';

type FAQ = { q: string; a: string };

export function BookCallFAQ({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faq}>
      <h2 className={styles.title}>Before your call</h2>
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
  );
}
