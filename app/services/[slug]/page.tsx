import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site, services } from '@/lib/content';
import { CTA } from '@/components/CTA';
import { ServiceFAQ } from '@/components/ServiceFAQ';
import styles from './page.module.css';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${site.url}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${site.url}/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: site.name,
      telephone: site.phoneRaw,
      url: site.url,
    },
    areaServed: 'Palm Beach County, Florida',
    url: `${site.url}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className={styles.hero}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>{service.navLabel}</span>
          </div>
          <span className="eyebrow">{service.eyebrow}</span>
          <h1 className={styles.h1}>
            {service.headlineStart}
            <em>{service.headlineEm}</em>
            {service.headlineEnd}
          </h1>
          <p className={styles.sub}>{service.sub}</p>
          <div className={styles.heroActions}>
            <Link href="/book-call" className="btn btn-primary">
              Book a free 15-min call →
            </Link>
            <a href={`tel:${site.phoneRaw}`} className="btn btn-secondary">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.pain}>
        <div className="container">
          <h2 className="section-title">{service.painTitle}</h2>
          <div className={styles.painGrid}>
            {service.painPoints.map((p, i) => (
              <div key={i} className={styles.painCard}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.deliver}>
        <div className="container">
          <div className={styles.deliverGrid}>
            <div>
              <h2 className="section-title">{service.deliverTitle}</h2>
              <div className={styles.planNote}>
                <p>{service.planNote}</p>
                <Link href="/#pricing" className={styles.planLink}>
                  See plans + pricing →
                </Link>
              </div>
            </div>
            <ul className={styles.deliverList}>
              {service.deliverables.map((d, i) => (
                <li key={i}>
                  <span className={styles.check}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ServiceFAQ faqs={service.faqs} />

      <section className={styles.more}>
        <div className="container">
          <h2 className={styles.moreTitle}>More ways I can help</h2>
          <div className={styles.moreLinks}>
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`}>
                  {s.navLabel}
                </Link>
              ))}
            <Link href="/services" className={styles.moreAll}>
              All services →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
