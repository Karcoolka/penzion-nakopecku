import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import refflexiveAccessoriesImg from '../assets/images/gallery/others/refflexiveAccessories.png';
import seaKayakingImg from '../assets/images/gallery/others/seaKayaking.jpg';

const MAPY_CZ_EMBED_URL = 'https://frame.mapy.cz/s/kamuvukomu';

export default function ContactSection() {
  const { t } = useTranslation();

  const scrollToPrices = () => {
    document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' });
  };

  const activities = [
    { titleKey: 'contact.activity1Title' as const, urlKey: 'contact.activity1Url' as const, image: refflexiveAccessoriesImg },
    { titleKey: 'contact.activity2Title' as const, urlKey: 'contact.activity2Url' as const, image: seaKayakingImg },
  ];

  return (
    <section id="contact" className="py-5" style={{ backgroundColor: 'var(--color-sage-100)' }}>
      <div className="container">
        <motion.h2
          className="text-center mb-2 fw-bold"
          style={{ color: 'var(--color-forest-800)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </motion.h2>
        <motion.p
          className="text-center text-body-secondary mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('contact.description')}
        </motion.p>
        <motion.p
          className="text-center small text-body-secondary mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button type="button" className="btn btn-link p-0 text-decoration-none" style={{ color: 'var(--color-forest-600)' }} onClick={scrollToPrices}>
            {t('contact.bookingFormInPrices')}
          </button>
        </motion.p>

        {/* Two-column: Map left, Contact info right */}
        <div className="row g-4 mb-4">
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow rounded-4 overflow-hidden h-100">
              <div className="ratio ratio-4x3">
                <iframe
                  src={MAPY_CZ_EMBED_URL}
                  title={t('contact.mapTitle')}
                  className="border-0 w-100 h-100"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-lg-6"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow rounded-4 h-100">
              <div className="card-body p-4">
                <p className="fw-semibold mb-1" style={{ color: 'var(--color-forest-800)' }}>{t('contact.addressName')}</p>
                <p className="text-body-secondary small mb-0">
                  {t('contact.addressStreet')}<br />
                  {t('contact.addressCity')}<br />
                  {t('contact.addressCountry')}
                </p>
                <p className="small text-body-secondary mt-3 mb-0">{t('contact.gps')}</p>
                <hr className="my-3" />
                <p className="small text-body-secondary mb-1">{t('contact.entrepreneur')}</p>
                <p className="small text-body-secondary mb-1">{t('contact.ico')}</p>
                <p className="small text-body-secondary mb-3">{t('contact.tradeLicence')}</p>
                <p className="small mb-1">
                  <span className="text-body-secondary">{t('contact.phone')}: </span>
                  <a href={`tel:${t('contact.phoneValue')}`} className="text-decoration-none" style={{ color: 'var(--color-forest-600)' }}>{t('contact.phoneValue')}</a>
                </p>
                <p className="small mb-0">
                  <span className="text-body-secondary">{t('contact.email')}: </span>
                  <a href={`mailto:${t('contact.emailValue')}`} className="text-decoration-none" style={{ color: 'var(--color-forest-600)' }}>{t('contact.emailValue')}</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other Activities cards */}
        <motion.h3
          className="h5 text-center mb-3 fw-bold"
          style={{ color: 'var(--color-forest-800)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('contact.activitiesTitle')}
        </motion.h3>
        <div className="row g-4 justify-content-center">
          {activities.map((activity, i) => (
            <motion.div
              key={i}
              className="col-12 col-sm-6 col-md-5 col-lg-4"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={t(activity.urlKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="card border-0 shadow rounded-4 overflow-hidden h-100 text-decoration-none text-body"
              >
                <div className="ratio ratio-16x9 bg-secondary">
                  <img src={activity.image} alt="" className="object-fit-cover" loading="lazy" />
                </div>
                <div className="card-body py-3">
                  <p className="card-text small mb-0 fw-medium" style={{ color: 'var(--color-forest-700)' }}>{t(activity.titleKey)}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
