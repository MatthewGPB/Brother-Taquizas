import Image from 'next/image';
import { clientLogos } from '@/lib/content';
import styles from './Logos.module.css';

export function Logos() {
  return (
    <section className={styles.logos}>
      <div className="container">
        <div className={styles.label}>Trusted by local Palm Beach businesses</div>
        <div className={styles.row}>
          {clientLogos.map((logo, i) => {
            const inner = logo.url ? (
              <Image src={logo.url} alt={logo.name} width={160} height={60} className={styles.img} />
            ) : (
              logo.name
            );
            return logo.site ? (
              <a
                key={i}
                href={logo.site}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.item}
                aria-label={`Visit ${logo.name}`}
                title={`Visit ${logo.name}`}
              >
                {inner}
              </a>
            ) : (
              <div key={i} className={`${styles.item} ${!logo.url ? styles.empty : ''}`}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
