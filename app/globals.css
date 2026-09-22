:root {
  --sand-50: #FBF7F0;
  --sand-100: #F4ECDC;
  --sand-200: #E6D6B5;
  --ink-900: #0B1F2D;
  --ink-700: #1F3A4A;
  --ink-500: #4A6678;
  --ink-300: #8FA5B3;
  --palm-700: #0F5C4A;
  --palm-500: #1D9E75;
  --palm-100: #D9F0E5;
  --coral-500: #E2693C;
  --coral-600: #C9542A;
  --gold-500: #D9A24A;
  --white: #FFFFFF;
  --radius: 14px;
  --radius-lg: 22px;
  --container: 1200px;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17px;
  line-height: 1.6;
  color: var(--ink-700);
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 40px);
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 28px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.01em;
  cursor: pointer;
  border: none;
  transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
  white-space: nowrap;
  text-decoration: none;
}
.btn-primary {
  background: var(--coral-500);
  color: var(--white);
  box-shadow: 0 6px 16px rgba(226,105,60,.35);
}
.btn-primary:hover {
  background: var(--coral-600);
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(226,105,60,.45);
}
.btn-secondary {
  background: var(--white);
  color: var(--ink-900);
  border: 1.5px solid var(--ink-900);
}
.btn-secondary:hover { background: var(--ink-900); color: var(--white); }
.btn-light {
  background: transparent;
  color: var(--white);
  border: 1.5px solid rgba(255,255,255,.3);
}
.btn-light:hover { background: var(--white); color: var(--ink-900); border-color: var(--white); }
.btn-arrow::after { content: "→"; transition: transform .2s ease; }
.btn:hover .btn-arrow::after { transform: translateX(3px); }

.eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--coral-500);
  margin-bottom: 14px;
}
.eyebrow-gold { color: var(--gold-500); }

.section-title {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 500;
  font-size: clamp(32px, 4.5vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--ink-900);
  margin-bottom: 18px;
}
.section-sub {
  font-size: 18px;
  color: var(--ink-500);
  max-width: 620px;
  line-height: 1.55;
}
.section-head { margin-bottom: 56px; }
.section-head.center { text-align: center; }
.section-head.center .section-sub { margin: 0 auto; }

section { padding: 100px 0; }
@media (max-width: 700px) { section { padding: 70px 0; } }

.dot {
  width: 8px;
  height: 8px;
  background: var(--palm-500);
  border-radius: 50%;
  animation: pulse 2s infinite;
  display: inline-block;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .5; transform: scale(1.3); }
}
