import Image from 'next/image';
import { testimonials } from '@/lib/content';
import styles from './Testimonials.module.css';

export function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">Real clients, real wins</span>
          <h2 className="section-title">What Palm Beach business owners are saying.</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} ${t.featured ? styles.featured : ''}`}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              {t.result && <div className={styles.result}>+ {t.result}</div>}
              <div className={styles.author}>
                {t.avatar ? (
                  <Image src={t.avatar} alt={t.name} width={48} height={48} className={styles.avatar} />
                ) : (
                  <div className={styles.avatar}></div>
                )}
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.meta}>{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
