import Image from 'next/image';
import Link from 'next/link';
import { founder, images } from '@/lib/content';
import styles from './Founder.module.css';

export function Founder() {
  return (
    <section className={styles.founder}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.image}>
            {images.founder ? (
              <Image src={images.founder} alt="Matthew Durnya — Founder" fill className={styles.img} sizes="(max-width: 900px) 100vw, 500px" />
            ) : (
              <div className={styles.placeholder}>Founder image</div>
            )}
          </div>
          <div>
            <span className="eyebrow eyebrow-gold">{founder.eyebrow}</span>
            <h2 className={styles.h2}>{founder.title}</h2>
            <div className={styles.body}>
              {founder.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className={styles.creds}>
              {founder.credentials.map((c, i) => (
                <div key={i} className={styles.cred}>
                  <div className={styles.credIcon}>{c.icon}</div>
                  <div>{c.text}</div>
                </div>
              ))}
            </div>
            <Link href="/book-call" className="btn btn-primary">{founder.cta} →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
