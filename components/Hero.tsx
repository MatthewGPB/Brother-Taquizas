import Image from 'next/image';
import Link from 'next/link';
import { hero, images, site } from '@/lib/content';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>
              <span className="dot"></span> {hero.eyebrow}
            </span>
            <h1 className={styles.h1}>
              {hero.headlineStart}
              <em>{hero.headlineEm}</em>
              {hero.headlineEnd}
            </h1>
            <p className={styles.sub}>{hero.sub}</p>
            <div className={styles.actions}>
              <Link href="/book-call" className="btn btn-primary">
                <span>{hero.primaryCta}</span>
                <span className="btn-arrow"></span>
              </Link>
              <Link href="#pricing" className="btn btn-secondary">
                {hero.secondaryCta}
              </Link>
              <a href={`sms:${site.phoneRaw}`} className="btn btn-secondary">
                Text me
              </a>
            </div>
            <div className={styles.trust}>
              <div className={styles.trustText}>
                <strong>{hero.trustHeadline}</strong>
                <span className={styles.stars}>★★★★★</span> {hero.trustSub}
              </div>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.photoBox}>
              {images.hero ? (
                <Image
                  src={images.hero}
                  alt="Matthew Durnya — Founder, Grow Palm Beach"
                  fill
                  className={styles.heroImg}
                  priority
                  sizes="(max-width: 900px) 100vw, 500px"
                />
              ) : (
                <div className={styles.placeholder}>Hero image</div>
              )}
            </div>
            <div className={`${styles.floatCard} ${styles.float1}`}>
              <div className={styles.floatIcon}>↗</div>
              <div>
                <strong>{hero.floatCard1.label}</strong>
                <small>{hero.floatCard1.sub}</small>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.float2}`}>
              <div className={styles.floatIcon} style={{ background: '#FDE7DD', color: 'var(--coral-600)' }}>★</div>
              <div>
                <strong>{hero.floatCard2.label}</strong>
                <small>{hero.floatCard2.sub}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
