# Laith Alskaf — Portfolio

**One site, two ways to read it.**
Every project is told twice: once in plain words for anyone, and once with the engineering for people who build software. A switch in the header flips the whole site between the two, and it changes the look too: warm paper for everyone, a blueprint for engineers. Arabic (RTL) and English are both first-class.

🔗 **Live:** <https://laith-alskaf.github.io/portfolio/>

> نسخة عربية مختصرة في آخر الملف · [Arabic summary below](#بالعربية)

---

## Why it is built this way

A portfolio has two very different readers: someone who has never written code and wants to know *"can this person solve my problem?"*, and an engineer who wants to know *"how does it actually work?"*. Most portfolios serve one and lose the other.

| | **Everyone** (default) | **Engineers** |
| --- | --- | --- |
| Hero | What I do, in one sentence | Stack and approach |
| Project page | Who it is for → the situation → what I built → what came out of it | Stack, real decisions and hard parts, full feature inventory |
| "What I build" | Plain explanation | Technologies, mapped to proof projects |
| Look | Warm paper, editorial serif, vermilion | Navy blueprint grid, mono labels, cyan |

Content rule: **only facts that exist.** No invented metrics. Where a number appears (23+ modules, 30% productivity for 20+ employees), it comes from the original project record.

## Features

- Bilingual **Arabic / English** with automatic RTL, written with CSS logical properties
- **Reading modes** (Everyone / Engineers), remembered between visits
- **16 case files**, filterable, each with its own page and screenshots
- A **"Open it yourself"** strip linking to every project that has a public page
- A **contact composer**: pick why you're writing and a polite first message is drafted; send it by WhatsApp or email, edit it first if you like
- Hash routing (`#/p/musafer`), so shared links and refreshes never 404 on GitHub Pages
- Accessible by default: semantic landmarks, skip link, visible focus, `prefers-reduced-motion`, print styles
- No UI framework and no animation library: **React + Vite + one CSS file**

## Project structure

```
index.html                 # SEO, Open Graph, fonts, structured data
public/                    # favicon.svg, og.png (social preview)
src/
  main.jsx · App.jsx       # entry and page shell
  styles.css               # the whole design system (tokens → components)
  lib/
    prefs.jsx              # language + reading-mode context (persisted)
    router.js              # tiny hash router
    format.js              # dates (Latin digits in Arabic too), WhatsApp/mail links
  content/
    ui.js                  # interface strings, EN + AR
    profile.js             # contact, offers, process, journey, education, contact starters
    projectMeta.js         # facts per project: links, images, stack, feature inventory
    projectText.js         # narrative per project, EN + AR (plain story + engineering notes)
    projects.js            # joins meta + text, helpers
  components/              # Header, Hero, Work, ProjectCard, ProjectPage, Offers, Journey, Contact, Footer
```

## Run it

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
npm run deploy     # build + publish dist/ to the gh-pages branch
```

Requires Node 18+.

## Adding or editing a project

1. Add its facts to `src/content/projectMeta.js` (`id`, `kind`, dates, `team`, `stack`, `features`, `cover`, `gallery`, `links`).
2. Add its story to `src/content/projectText.js` under the same `id`, in **both** `en` and `ar`:
   `name`, `tagline`, `who`, `problem`, `built`, `result`, `role`, and `notes` (the engineering decisions).
3. Projects appear in the order of `projectMeta.js`. `kind` is one of `apps`, `systems`, `web`, `backend`, `ai`.

To change contact details, journey or the "What I build" cards, edit `src/content/profile.js`.

## Design notes

- **Tokens first.** All colour lives in CSS variables on `:root`; `[data-mode="engineer"]` only overrides them, so a new component gets both looks for free.
- **Direction-safe.** Margins, padding and positions use logical properties (`inline-start`, `inset-inline-end`…). Arrow icons flip under `[dir="rtl"]`.
- **Technical terms stay Latin** inside Arabic text (Flutter, BLoC, CI/CD), the way Arabic-speaking engineers write them.
- **Fonts:** Fraunces (English display), IBM Plex Sans Arabic (Arabic + UI), JetBrains Mono (labels), loaded from Google Fonts with `display=swap`.

---

## بالعربية

**موقع واحد بطريقتين للقراءة.** كل مشروع يُروى مرتين: بكلمات بسيطة لأي شخص، وبالتفاصيل الهندسية لمن يعمل في البرمجة. مفتاح في أعلى الصفحة يبدّل الموقع كله بين «للجميع» (ورق دافئ) و«للمهندسين» (مخطط هندسي). العربية والإنجليزية مدعومتان بالكامل مع اتجاه RTL.

- **التشغيل:** `npm install` ثم `npm run dev`
- **النشر:** `npm run deploy` (ينشر مجلد `dist/` على فرع `gh-pages`)
- **إضافة مشروع:** أضف بياناته في `projectMeta.js` وقصته بالعربية والإنجليزية في `projectText.js`
- **قاعدة المحتوى:** حقائق موجودة فقط، بلا أرقام مخترعة
