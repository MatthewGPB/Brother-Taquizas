import Link from 'next/link';
import { site, contact } from '@/lib/content';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.inner}>
          <h2 className={styles.h2}>
            When locals search, <em>be the one they call</em>.
          </h2>
          <p className={styles.sub}>
            15 minutes, free. No pitch, no pressure — I&apos;ll tell you exactly what I&apos;d fix first.
          </p>
          <div className={styles.actions}>
            <Link href="/book-call" className="btn btn-primary">Book a free 15-min call →</Link>
            <a href={`tel:${site.phoneRaw}`} className="btn btn-light">Call {site.phone}</a>
            <a href={`sms:${site.phoneRaw}`} className="btn btn-light">Text me</a>
          </div>
          <div className={styles.meta}>
            <span>No pitch</span>
            <span>No pressure</span>
            <span>Real advice either way</span>
          </div>
          <p className={styles.capacity}>{contact.capacity}</p>
        </div>
      </div>
    </section>
  );
}
