/* Vite resolves these to hashed URLs at build time */
const apartmentImages = import.meta.glob<{ default: string }>(
  '../assets/images/gallery/apartment/*.{jpg,png}',
  { eager: true }
);
const equipmentImages = import.meta.glob<{ default: string }>(
  '../assets/images/gallery/equipment/*.{jpg,png}',
  { eager: true }
);
const othersImages = import.meta.glob<{ default: string }>(
  '../assets/images/gallery/others/*.{jpg,png}',
  { eager: true }
);
const room1Images = import.meta.glob<{ default: string }>(
  '../assets/images/gallery/holidayHouse/room1/*.{jpg,png}',
  { eager: true }
);
const holidayHouseImages = import.meta.glob<{ default: string }>(
  '../assets/images/gallery/holidayHouse/*.{jpg,png}',
  { eager: true }
);

function toSlides(modules: Record<string, { default: string }>): { src: string }[] {
  return Object.values(modules).map((m) => ({ src: m.default }));
}

export const gallerySlides = {
  apartment: toSlides(apartmentImages),
  equipment: toSlides(equipmentImages),
  others: toSlides(othersImages),
  holidayHouseRoom1: toSlides(room1Images),
  holidayHouse: toSlides(holidayHouseImages),
} as const;
