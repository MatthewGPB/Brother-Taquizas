'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site, popup } from '@/lib/content';
import styles from './RouterPopup.module.css';

const STORAGE_KEY = 'gpb_popup_last';
const COOLDOWN_DAYS = 7;

export function RouterPopup() {
  const [visible, setVisible] = useState(false);
  const [path, setPath] = useState<number | null>(null);
  const pathname = usePathname();

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    if (pathname === '/book-call') return;

    try {
      const last = Number(localStorage.getItem(STORAGE_KEY) || 0);
      if (Date.now() - last < COOLDOWN_DAYS * 24 * 60 * 60 * 1000) return;
    } catch {}

    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      setVisible(true);
      cleanup();
    };

    const timer = setTimeout(fire, 15000);
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable > 0 && window.scrollY / scrollable >= 0.5) fire();
    };
    const cleanup = () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return cleanup;
  }, [pathname]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  const chosen = path !== null ? popup.paths[path] : null;

  return (
    <div className={styles.backdrop} onClick={dismiss} role="dialog" aria-modal="true">
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={dismiss} aria-label="Close">
          ×
        </button>

        {!chosen ? (
          <>
            <h3 className={styles.title}>{popup.question}</h3>
            <p className={styles.sub}>{popup.sub}</p>
            <div className={styles.choices}>
              {popup.paths.map((p, i) => (
                <button key={p.id} className={styles.choice} onClick={() => setPath(i)}>
                  {p.button}
                </button>
              ))}
            </div>
            <a href={`tel:${site.phoneRaw}`} className={styles.phoneLine}>
              {popup.or}: <strong>{site.phone}</strong>
            </a>
          </>
        ) : (
          <>
            <h3 className={styles.title}>{chosen.headline}</h3>
            <p className={styles.body}>{chosen.body}</p>
            <p className={styles.proof}>{chosen.proof}</p>
            <div className={styles.actions}>
              <Link href="/book-call" className="btn btn-primary" onClick={dismiss}>
                {popup.cta} →
              </Link>
              <a href={`tel:${site.phoneRaw}`} className={styles.phoneLine}>
                {popup.or}: <strong>{site.phone}</strong>
              </a>
            </div>
            <button className={styles.back} onClick={() => setPath(null)}>
              ← Actually, the other one
            </button>
          </>
        )}
      </div>
    </div>
  );
}
