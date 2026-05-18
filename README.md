# Brothers Taquizas — Website

A fast, SEO-optimized one-page site for [brotherstaquizas.com](https://brotherstaquizas.com).
Static HTML/CSS/JS — no framework, no build step. Hosted free on Vercel, version-controlled on GitHub.

## File structure

```
brothers-taquizas-site/
├── index.html        ← The whole page
├── styles.css        ← All styles
├── script.js         ← Mobile menu + AJAX form
├── robots.txt        ← SEO: tells crawlers what to index
├── sitemap.xml       ← SEO: list of pages
├── vercel.json       ← Vercel config (clean URLs, cache headers)
├── .gitignore        ← Files Git ignores
└── README.md         ← This file
```

---

## Deploy in 6 steps (about 20 minutes)

### Step 1 — Install the tools (one time)

You need three things installed on your computer:

1. **Git** — https://git-scm.com/downloads (just click through the installer)
2. **A GitHub account** — https://github.com/signup (free)
3. **A Vercel account** — https://vercel.com/signup (sign up *with GitHub* — it links them automatically)

That's it. No Node.js, no Shopify CLI, nothing else.

### Step 2 — Create a GitHub repo

1. Go to https://github.com/new
2. **Repository name:** `brothers-taquizas-site`
3. **Public** (so Vercel's free plan can deploy it)
4. Leave everything else unchecked
5. Click **Create repository**

GitHub will show you a page with commands. Keep that tab open for Step 4.

### Step 3 — Get the files onto your computer

Unzip `brothers-taquizas-site.zip` somewhere easy to find — like your Desktop or Documents folder.

### Step 4 — Push the files to GitHub

Open Terminal (Mac) or PowerShell (Windows) and run these one at a time. Replace `YOUR-USERNAME` with your actual GitHub username:

```bash
cd ~/Desktop/brothers-taquizas-site     # or wherever you unzipped it
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/brothers-taquizas-site.git
git push -u origin main
```

It'll ask you to log in to GitHub the first time. Done — refresh your GitHub repo page and all the files will be there.

### Step 5 — Set up the catering form (Formspree)

The catering form needs a backend to actually send emails. Use **Formspree** (free for 50 submissions/month, plenty for a food truck):

1. Go to https://formspree.io/register and sign up
2. Click **New Form**
3. Form name: `Catering Inquiries`
4. Email: `info@brotherstaquizas.com` (where you want inquiries sent)
5. Click **Create Form**
6. Copy the **form endpoint URL** — it looks like `https://formspree.io/f/abcdwxyz`
7. Open `index.html` in any text editor (TextEdit, Notepad, VS Code — anything)
8. Find this line:
   ```
   action="https://formspree.io/f/FORM_ID"
   ```
9. Replace `FORM_ID` with just the ID part (e.g. `abcdwxyz`) — so it becomes:
   ```
   action="https://formspree.io/f/abcdwxyz"
   ```
10. Save the file

Then push the change to GitHub:
```bash
git add index.html
git commit -m "Add Formspree form ID"
git push
```

### Step 6 — Deploy to Vercel

1. Go to https://vercel.com/new
2. Click **Import** next to your `brothers-taquizas-site` repo
3. Leave all settings as default — Vercel auto-detects it's a static site
4. Click **Deploy**

About 30 seconds later you'll get a live URL like `brothers-taquizas-site.vercel.app`. The site is live.

### Step 7 — Hook up brotherstaquizas.com

1. In Vercel, open your project → **Settings → Domains**
2. Type `brotherstaquizas.com` and click **Add**
3. Vercel shows you DNS records to add — go to wherever your domain is registered (GoDaddy / Namecheap / Cloudflare / etc.) and add them
4. Also add `www.brotherstaquizas.com` and let Vercel redirect it to the apex
5. **Important:** First go to your old Shopify admin and remove the custom domain from there so Shopify releases it
6. DNS usually propagates in 5–60 minutes. Vercel auto-issues a free SSL certificate

You're done.

---

## How to edit the site after launch

The whole point of this setup: every change becomes one Git commit, and Vercel deploys it automatically within seconds. No more "Shopify edit code → save → wait".

**To change anything — text, image, layout — just:**

1. Open the file (`index.html` for text/structure, `styles.css` for colors/spacing, `script.js` for behavior) in any text editor
2. Make your edit
3. Save
4. In Terminal:
   ```bash
   cd ~/Desktop/brothers-taquizas-site
   git add .
   git commit -m "Updated catering bullets"
   git push
   ```
5. Vercel detects the push and redeploys in ~10 seconds

Or, even easier — edit files **directly on GitHub.com** (click the pencil icon next to any file). Vercel still picks it up automatically.

---

## Common edits — where to find what

| Want to change… | Open… | Find… |
|---|---|---|
| Phone number | `index.html` | Cmd+F for `561-201-5724` |
| Address | `index.html` | Cmd+F for `3707 Broadway` |
| Hours | `index.html` | Cmd+F for `Hours of Operation` |
| Hero headline | `index.html` | Cmd+F for `bt-hero__h1` |
| Dish names / descriptions | `index.html` | Cmd+F for `bt-dish` |
| FAQ questions | `index.html` | Cmd+F for `bt-faq` |
| Catering bullets | `index.html` | Cmd+F for `bt-cater__list` |
| Brand colors | `styles.css` | top of file — `:root` variables |
| Fonts | `styles.css` | top of file — `--bt-font-*` variables |

---

## Images

All photos currently load from your Shopify CDN URLs (the food truck, family photo, dish shots). They'll keep working as long as those Shopify URLs exist.

**To switch to self-hosted images later:**
1. Create an `images/` folder in the project
2. Drop the JPGs/WebPs in there
3. In `index.html`, change image `src` from `https://cdn.shopify.com/...` to `/images/yourfile.jpg`
4. Commit + push

---

## Need help?

- **GitHub docs:** https://docs.github.com
- **Vercel docs:** https://vercel.com/docs
- **Formspree docs:** https://help.formspree.io

The whole setup is designed so you don't need a developer for normal edits. Text changes especially — open the file, change the words, commit.
