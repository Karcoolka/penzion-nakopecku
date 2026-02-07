import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import { gallerySlides } from '../data/gallery';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
};

export default function AccommodationSection() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);

  const openGallery = (slides: { src: string }[]) => {
    setLightboxSlides(slides);
    setLightboxOpen(true);
  };

  const cards = [
    {
      id: 'apartment',
      titleKey: 'accommodation.apartment.title',
      featuresKey: 'accommodation.apartment.features',
      image: gallerySlides.apartment[0]?.src ?? '/circleHouse.png',
      slides: gallerySlides.apartment,
    },
    {
      id: 'holiday-house',
      titleKey: 'accommodation.holidayHouse.title',
      featuresKey: 'accommodation.holidayHouse.features',
      image: gallerySlides.holidayHouse[0]?.src ?? gallerySlides.holidayHouseRoom1[0]?.src ?? '/circleHouse.png',
      slides: [...gallerySlides.holidayHouse, ...gallerySlides.holidayHouseRoom1],
    },
    {
      id: 'equipment',
      titleKey: 'equipment.title',
      featuresKey: 'equipment.features',
      image: gallerySlides.equipment[0]?.src ?? '/circleHouse.png',
      slides: gallerySlides.equipment,
    },
  ];

  return (
    <section id="accommodation" className="py-5 bg-white">
      <div className="container">
        <motion.h2
          className="text-center mb-4 fw-bold"
          style={{ color: 'var(--color-forest-800)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('accommodation.title')}
        </motion.h2>
        <div className="row g-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              className="col-12 col-md-4"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="card h-100 border-0 shadow rounded-4 overflow-hidden"
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ borderRadius: '1rem' }}
              >
                <div className="ratio ratio-16x9 bg-secondary">
                  <img
                    src={card.image}
                    alt={t(card.titleKey)}
                    className="object-fit-cover"
                    loading="lazy"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 card-title" style={{ color: 'var(--color-forest-700)' }}>
                    {t(card.titleKey)}
                  </h3>
                  {(() => {
                    const features = t(card.featuresKey, { returnObjects: true }) as string[] | string;
                    if (Array.isArray(features) && features.length > 0) {
                      return (
                        <ul className="card-text text-body-secondary small list-unstyled flex-grow-1 mb-0">
                          {features.map((item, j) => (
                            <li key={j} className="d-flex align-items-start gap-2 mb-1">
                              <span
                                className="rounded-2 flex-shrink-0 mt-1"
                                style={{ width: 4, height: 4, backgroundColor: 'var(--color-forest-500)' }}
                                aria-hidden
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })()}
                  <button
                    type="button"
                    className="btn btn-primary rounded-4 mt-auto align-self-end"
                    onClick={() => openGallery(card.slides)}
                  >
                    {t('accommodation.viewGallery')}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={lightboxSlides}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
