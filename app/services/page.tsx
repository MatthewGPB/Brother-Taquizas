import type { Metadata } from 'next';
import Link from 'next/link';
import { site, servicesHub, services, otherCapabilities } from '@/lib/content';
import { CTA } from '@/components/CTA';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Services | Local SEO, Web Design, Google Ads & More',
  description:
    'Everything Palm Beach businesses need to get found and get calls: AI-optimized web design, local SEO, Google and Meta ads, content, social media, and review generation. All founder-led.',
  alternates: { canonical: `${site.url}/services` },
};

export default function ServicesPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">{servicesHub.eyebrow}</span>
          <h1 className={styles.h1}>{servicesHub.title}</h1>
          <p className={styles.sub}>{servicesHub.sub}</p>
        </div>
      </section>

      <section className={styles.gridSection}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={styles.card}>
                <span className={styles.icon}>{s.icon}</span>
                <h2 className={styles.cardTitle}>{s.name}</h2>
                <p className={styles.cardBlurb}>{s.cardBlurb}</p>
                <span className={styles.cardLink}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.other}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow eyebrow-gold">{servicesHub.otherTitle}</span>
            <h2 className="section-title">If your business needs it built, I can build it.</h2>
            <p className="section-sub">{servicesHub.otherSub}</p>
          </div>
          <div className={styles.otherGrid}>
            {otherCapabilities.map((c) => (
              <div key={c.name} className={styles.otherItem}>
                <h3>{c.name}</h3>
                <p>{c.blurb}</p>
              </div>
            ))}
          </div>
          <p className={styles.otherCta}>
            Need one of these? <Link href="/book-call">Book a free 15-min call</Link> or call me at{' '}
            <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
