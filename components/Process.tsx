import { processSteps } from '@/lib/content';
import styles from './Process.module.css';

export function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">How it works</span>
          <h2 className="section-title">No jargon. No long contracts. No giant check up front.</h2>
          <p className="section-sub">
            I handle everything — you just answer the phone.
          </p>
        </div>
        <div className={styles.grid}>
          {processSteps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.num}>{i + 1}</div>
              <h4 className={styles.h4}>{step.title}</h4>
              <p className={styles.p}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
