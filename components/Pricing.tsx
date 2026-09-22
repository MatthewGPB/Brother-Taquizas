import Link from 'next/link';
import { pricing } from '@/lib/content';
import styles from './Pricing.module.css';

export function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">{pricing.eyebrow}</span>
          <h2 className="section-title">{pricing.title}</h2>
          <p className="section-sub">{pricing.sub}</p>
        </div>
        <div className={styles.grid}>
          {pricing.plans.map((plan, i) => (
            <div key={i} className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
              {plan.popular && <div className={styles.badge}>Most popular</div>}
              <h3 className={styles.name}>{plan.name}</h3>
              <div className={styles.price}>
                {plan.price}
                <span>{plan.priceNote}</span>
              </div>
              <div className={styles.subNote}>{plan.subNote}</div>
              <div className={styles.bestFor}>
                <strong>Best for:</strong> {plan.bestFor}
              </div>
              <ul className={styles.features}>
                {plan.features.map((f, j) => (
                  <li key={j} className={plan.guarantee && j === plan.features.length - 1 ? styles.guaranteeFeature : ''}>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/book-call"
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} ${styles.cta}`}
              >
                {plan.cta} →
              </Link>
            </div>
          ))}
        </div>
        <p className={styles.guaranteeNote}>{pricing.guaranteeNote}</p>
      </div>
    </section>
  );
}
