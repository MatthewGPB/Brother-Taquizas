import Image from 'next/image';
import Link from 'next/link';
import { caseStudy, images } from '@/lib/content';
import styles from './CaseStudy.module.css';

export function CaseStudy() {
  return (
    <section>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.image}>
            {images.caseStudy ? (
              <Image src={images.caseStudy} alt="Case study" fill className={styles.img} sizes="(max-width: 900px) 100vw, 600px" />
            ) : (
              <div className={styles.placeholder}>Case study image</div>
            )}
          </div>
          <div>
            <span className="eyebrow">{caseStudy.eyebrow}</span>
            <h3 className={styles.h3}>{caseStudy.title}</h3>
            <p className={styles.body}>{caseStudy.body}</p>
            <div className={styles.metrics}>
              {caseStudy.metrics.map((m, i) => (
                <div key={i} className={styles.metric}>
                  <div className={styles.num}>{m.num}</div>
                  <div className={styles.label}>{m.label}</div>
                </div>
              ))}
            </div>
            <Link href="/book-call" className="btn btn-secondary">Get results like these →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
