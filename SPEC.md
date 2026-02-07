# Penzionek Na Kopečku - Technical Specification

## Overview

A modern, responsive React 19 single-page application for a guesthouse accommodation website located in the Teplice-Adršpach rock area, Czech Republic.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | Frontend framework |
| Tailwind CSS | Latest | Utility-first CSS |
| Bootstrap | 5.3.8 | Component library |
| Redux | Latest | State management |
| Framer Motion | Latest | Animations |
| react-i18next | Latest | Internationalization |
| yet-another-react-lightbox | Latest | Photo galleries |

> **Note:** Verify all library versions and usage with Context7 MCP

---

## Design Guidelines

### Style
- **Colors:** Green, silver, nature-inspired
- **Theme:** Modern, elegant, rock/nature aesthetic
- **Corners:** All cards, images, buttons must be rounded
- **Effects:** Plastic/3D appearance with Framer Motion animations

### Responsiveness
- Desktop-first with full tablet and mobile support
- Breakpoints following Bootstrap 5.3 standards

---

## Internationalization (i18n)

| Language | Flag | Locale File | Default |
|----------|------|-------------|---------|
| Czech | CZ | `locales/cs.json` | Yes |
| English | GB | `locales/en.json` | |
| German | DE | `locales/de.json` | |
| Polish | PL | `locales/pl.json` | |

- Active language flag should be visually highlighted
- Title **"Penzionek Na Kopečku"** must NOT be translated


## File Structure

```
public/
  carousel/              # Header carousel images
  circleHouse.png        # Logo

src/
  assets/images/gallery/
    apartment/
    holidayHouse/
      room1/
      room2/
      room3/
    equipment/
    others/
  locales/
    cs.json
    en.json
    de.json
    pl.json
```

---

## SEO Requirements

- Optimize all meta tags
- Proper semantic HTML structure
- Alt texts for all images
- Open Graph tags for social sharing

---

## Deliverables

- [ ] Fully responsive React 19 application
- [ ] All sections implemented per specification
- [ ] i18n with 4 languages
- [ ] Lightbox galleries working
- [ ] Form submission functional
- [ ] Framer Motion animations
- [ ] Updated README.md with tech stack, build instructions, and emojis
