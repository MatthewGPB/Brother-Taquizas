import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { site, bookCall, images } from '@/lib/content';
import { BookCallFAQ } from '@/components/BookCallFAQ';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Book a free 15-minute call',
  description:
    "15 minutes, free. No pitch, no pressure — Matthew will look at your current setup and tell you exactly what he'd fix first.",
  openGraph: {
    title: `Book a free call — ${site.name}`,
    description: "15 minutes, free. I'll tell you exactly what I'd fix first.",
  },
  alternates: { canonical: `${site.url}/book-call` },
};

export default function BookCallPage() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div className={styles.page}>
        <div className="container">
          <div className={styles.head}>
            <span className={styles.eyebrow}>
              <span className="dot"></span> {bookCall.eyebrow}
            </span>
            <h1 className={styles.h1}>
              {bookCall.headlineStart}
              <em>{bookCall.headlineEm}</em>
              {bookCall.headlineEnd}
            </h1>
            <p className={styles.sub}>{bookCall.sub}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.info}>
              <div className={styles.host}>
                {images.founder ? (
                  <Image src={images.founder} alt={bookCall.hostName} width={64} height={64} className={styles.hostImg} />
                ) : (
                  <div className={styles.hostImg}></div>
                )}
                <div>
                  <div className={styles.hostName}>{bookCall.hostName}</div>
                  <div className={styles.hostTitle}>{bookCall.hostTitle}</div>
                </div>
              </div>

              <div className={styles.meta}>
                {bookCall.meta.map((item, i) => (
                  <div key={i} className={styles.metaItem}>
                    <div className={styles.metaIcon}>{item.icon}</div>
                    <div>
                      <span className={styles.metaLabel}>{item.label}</span>
                      <span className={styles.metaText}>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.promise}>
                <div className={styles.promiseTitle}>What you&apos;ll walk away with</div>
                <ul>
                  {bookCall.promises.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>

              <div className={styles.callback}>
                <div className={styles.callbackLabel}>Prefer to call?</div>
                <a href={`tel:${site.phoneRaw}`}>{site.phone}</a>
              </div>
            </div>

            <div className={styles.cal}>
              <div className={styles.calHead}>
                <h2 className={styles.calH2}>Pick a time</h2>
                <div className={styles.calAvail}><span className="dot"></span>Available this week</div>
              </div>
              <div
                className="calendly-inline-widget"
                data-url={`${site.calendly}?hide_gdpr_banner=1&primary_color=e2693c`}
                style={{ minWidth: '320px', height: '720px', width: '100%' }}
              />
            </div>
          </div>

          <div className={styles.trust}>
            <div className={styles.trustCard}>
              <div className={styles.trustNum}>3<span>x</span></div>
              <div className={styles.trustLabel}>Average lead growth in 90 days</div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustNum}>25<span>+</span></div>
              <div className={styles.trustLabel}>Palm Beach businesses scaled</div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustNum}>30<span>d</span></div>
              <div className={styles.trustLabel}>Website built and live</div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustNum}>100<span>%</span></div>
              <div className={styles.trustLabel}>Founder-led — you get Matthew</div>
            </div>
          </div>

          <div className={styles.testi}>
            <div className={styles.testiInner}>
              <div className={styles.testiStars}>★★★★★</div>
              <p className={styles.testiQuote}>&ldquo;{bookCall.testimonial.quote}&rdquo;</p>
              <div className={styles.testiAuthor}>
                <strong>{bookCall.testimonial.author}</strong> — {bookCall.testimonial.title}
              </div>
            </div>
          </div>

          <BookCallFAQ faqs={bookCall.faqs} />
        </div>
      </div>
    </>
  );
}
