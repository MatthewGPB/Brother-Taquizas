import { aiSection } from '@/lib/content';
import styles from './AISection.module.css';

export function AISection() {
  return (
    <section className={styles.ai}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{aiSection.eyebrow}</span>
          <h2 className="section-title">{aiSection.title}</h2>
          <p className="section-sub">{aiSection.sub}</p>
        </div>
        <div className={styles.grid}>
          {aiSection.stats.map((s, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
          <div className={`${styles.card} ${styles.aiCard}`}>
            <div className={styles.aiCardTitle}>Is your business showing up?</div>
            <div className={styles.aiCardLabel}>
              ChatGPT &amp; Google AI now recommend local businesses. Every site I build is structured so they can find you.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
