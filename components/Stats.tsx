import { stats } from '@/lib/content';
import styles from './Stats.module.css';

export function Stats() {
  return (
    <section className={styles.stats} id="results">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow eyebrow-gold">Real results</span>
          <h2 className={styles.title}>Numbers that move businesses, not vanity metrics.</h2>
          <p className={styles.sub}>
            Every campaign tied to revenue. One-page report each month.
          </p>
        </div>
        <div className={styles.grid}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.num}>
                {stat.num}
                <span>{stat.suffix}</span>
              </div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
