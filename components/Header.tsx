import Link from 'next/link';
import Image from 'next/image';
import { site, announcement, services } from '@/lib/content';
import styles from './Header.module.css';

export function Header() {
  return (
    <>
      {announcement.show && (
        <div className={styles.announcement}>
          <div className="container">
            <strong>{announcement.label}</strong> {announcement.text}{' '}
            <Link href="/book-call">{announcement.cta}</Link>
          </div>
        </div>
      )}
      <header className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>
            <Link href="/" className={styles.brand}>
              <Image
                src="/images/gpb_logo_icon.png"
                alt={`${site.name} logo`}
                width={44}
                height={37}
                className={styles.logoImg}
                priority
              />
              <span>{site.name}</span>
            </Link>
            <div className={styles.links}>
              <div className={styles.dropdown}>
                <Link href="/services" className={styles.dropdownTrigger}>
                  Services <span className={styles.caret}>▾</span>
                </Link>
                <div className={styles.dropdownMenu}>
                  {services.map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}>{s.navLabel}</Link>
                  ))}
                  <Link href="/services" className={styles.dropdownAll}>All services →</Link>
                </div>
              </div>
              <Link href="/#work">Work</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#results">Results</Link>
              <Link href="/#process">How it works</Link>
              <Link href="/#faq">FAQ</Link>
            </div>
            <div className={styles.cta}>
              <a href={`tel:${site.phoneRaw}`} className={styles.phone}>
                <span>☎</span>{site.phone}
              </a>
              <Link href="/book-call" className="btn btn-primary">Book free call</Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
