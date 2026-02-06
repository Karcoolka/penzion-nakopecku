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

---

## Page Structure

### 1. Header

| Element | Position | Description |
|---------|----------|-------------|
| Carousel Background | Full header | Auto-advances every 6s, manual arrows (watermark style) |
| Title | Center | "Penzionek Na Kopečku" with shadow/watermark effect |
| Logo | Bottom-left | `public/circleHouse.png` |
| Language Flags | Top-right | CZ, EN, DE, PL flags |

**Carousel Images:** `public/carousel/`

---

### 2. Navigation

Horizontal navigation bar with centered content:

| Nav Item | Section ID |
|----------|------------|
| About Us | `#about` |
| Accommodation | `#accommodation` |
| Prices | `#prices` |
| Contact | `#contact` |
| Surroundings | `#surroundings` |

---

### 3. About Us Section

**Title:** Guest house Na Kopečku - private accommodation in Teplice nad Metují

**Description:**
> Guest house is situated in a quiet location only 1 km from the entrance to Teplice rocks and 3 km to Adršpach rocks. The beautiful surrounding countryside is ideal for hiking, mountain biking, cycling or cross country skiing.

**Amenities List:**
- Three double rooms with shower and toilet
- Separate 6-bed apartment option
- Free WiFi
- Nearby restaurant dining
- Fully furnished kitchen
- Guest room (satellite TV, video, CD, guitar)
- Parking
- Fire pit & grilling area
- Children's playground
- Year-round availability
- Non-smoking environment

**Social:** [Facebook Link](https://www.facebook.com/profile.php?id=100067750340203#)

---

### 4. Accommodation Section

Three cards layout with lightbox galleries:

#### Card 1: Apartment

| Feature | Detail |
|---------|--------|
| Type | 6-bed mezonet |
| Kitchen | Fully equipped |
| Living room | Double bed |
| Bedroom | Attic with 4 beds |
| Bathrooms | 2x (shower, sink, WC) |

- **Main Photo:** `src/assets/images/gallery/apartment/apartment.jpg`
- **Gallery:** `src/assets/images/gallery/apartment/`

#### Card 2: Holiday House

| Feature | Detail |
|---------|--------|
| Rooms | 3 double rooms |
| Bathroom | Each room has private shower & WC |
| Heating | Independent per room |
| Extra | Additional bed possible |

- **Main Photo:** `src/assets/images/gallery/holidayHouse/holidayHouse.jpg`
- **Galleries:**
  - Room 1: `src/assets/images/gallery/holidayHouse/room1/`
  - Room 2: `src/assets/images/gallery/holidayHouse/room2/`
  - Room 3: `src/assets/images/gallery/holidayHouse/room3/`

#### Card 3: Equipment

| Amenity | Description |
|---------|-------------|
| Kitchen | Fully furnished |
| Small guestroom | Satellite, video, CD, guitar |
| Big guestroom | "Small saloon" - CD, seats 15 |
| Outdoor | Fire pit, grilling area |
| Children | Playground |
| Parking | Private spaces |

- **Main Photo:** `src/assets/images/gallery/equipment/equipment.jpg`
- **Gallery:** `src/assets/images/gallery/equipment/`

---

### 5. Prices Section

#### Pricing Tables

**Holiday House**

| Capacity | Price/Night |
|----------|-------------|
| Up to 6 people | 3,600 CZK |
| 6-9 people | 4,000 CZK |

**Apartment**

| Capacity | Price/Night |
|----------|-------------|
| 1-4 persons | 2,800 CZK |
| 5-6 persons | 3,600 CZK |
| Child under 2 (no bed) | Free |

#### Important Notes

- Prices in CZK per apartment/night
- Summer holidays: prefer Saturday-to-Saturday stays
- Recreation fee: 20 CZK/person/day (not included)
- Breakfast not included

#### Check-in/Check-out

| Action | Time |
|--------|------|
| Check-in | 16:00 - 20:00 |
| Check-out | Before 10:00 |

#### Cancellation Policy

| Timing | Refund |
|--------|--------|
| 30+ days before | 100% refund |
| 15-30 days before | 50% refund |
| Less than 14 days | No refund |

**Deposit:** 50% advance required for fixed reservation

---

#### Booking Form

| Field | Required |
|-------|----------|
| Name | Yes |
| Email | Yes |
| Phone | Yes |
| Arrival Date | Yes |
| Departure Date | Yes |
| Number of People | Yes |
| Notes | No |

- GDPR consent checkbox required
- **Submit to:** `simkova54321@gmail.com`

---

### 6. Contact Section

**Layout:** Two-column (map left, info right) + activity cards below

#### Contact Information

```
Penzionek "Na Kopečku"
Bucnice 219
Teplice nad Metuji, 549 57
Czech Republic

GPS: 50°36'27.456"N, 16°8'53.045"E

Entrepreneur: Jiri Cernak
ICO: 110 568 51
Trade licence: 360508-37-02

Phone: +420 723 877 046
Email: ubytovani.nakopecku@centrum.cz
```

#### Other Activities Cards

| Activity | Image |
|----------|-------|
| Reflexive accessories for bikers/joggers | `src/assets/images/gallery/others/refflexiveAccessories.png` |
| Sea kayaking - hire and school | `src/assets/images/gallery/others/seaKayaking.jpg` |

---

### 7. Surroundings Section

| Link | Image | Description |
|------|-------|-------------|
| [Region Tourist](https://www.regiontourist.cz/co-podniknout/tipy-na-vylety/lokalita/adrspach/) | `others/nature.jpg` | Trip tips & attractions |
| [MHFF Festival](https://mhff.cz/) | `others/mhff.png` | International Mountaineering Film Festival |

---

### 8. Footer

#### Partner Websites

- adrspach.cz
- teplicenadmetuji.cz
- kladskepomezi.cz
- nasehory.cz
- penziony.cz

#### Credits

- **Position:** Bottom-right
- **Text:** "Created by Adela Simkova"
- **Link:** [LinkedIn](https://www.linkedin.com/in/adela-simkova/)
- **Style:** Plastic LinkedIn icon

---

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
