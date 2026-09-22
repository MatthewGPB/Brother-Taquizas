import Image from 'next/image';
import { portfolio } from '@/lib/content';
import styles from './Portfolio.module.css';

export function Portfolio() {
  return (
    <section className={styles.portfolio} id="work">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{portfolio.eyebrow}</span>
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-sub">{portfolio.sub}</p>
        </div>
        <div className={styles.grid}>
          {portfolio.items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.frame}>
                <div className={styles.chrome}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className={styles.urlBar}>{item.url.replace('https://', '')}</div>
                </div>
                <div className={styles.screen}>
                  {item.screenshot ? (
                    <Image
                      src={item.screenshot}
                      alt={`${item.name} website`}
                      fill
                      className={styles.shot}
                      sizes="(max-width: 700px) 100vw, 50vw"
                    />
                  ) : (
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={180}
                      height={90}
                      className={styles.logoFallback}
                    />
                  )}
                </div>
              </div>
              <div className={styles.info}>
                <div>
                  <h3>{item.name}</h3>
                  <span className={styles.tag}>{item.tag}</span>
                </div>
                <p>{item.line}</p>
                <span className={styles.visit}>Visit live site ↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
