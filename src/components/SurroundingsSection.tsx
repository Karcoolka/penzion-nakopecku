import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import natureImg from '../assets/images/gallery/others/nature.jpg';
import mhffImg from '../assets/images/gallery/others/mhff.png';

const SURROUNDINGS_LINKS = [
  {
    url: 'https://www.regiontourist.cz/co-podniknout/tipy-na-vylety/lokalita/adrspach/',
    image: natureImg,
    titleKey: 'surroundings.link1Title' as const,
    descriptionKey: 'surroundings.link1Description' as const,
  },
  {
    url: 'https://mhff.cz/',
    image: mhffImg,
    titleKey: 'surroundings.link2Title' as const,
    descriptionKey: 'surroundings.link2Description' as const,
  },
] as const;

export default function SurroundingsSection() {
  const { t } = useTranslation();

  return (
    <section id="surroundings" className="py-5" style={{ backgroundColor: 'var(--color-sage-100)' }}>
      <div className="container">
        <motion.h2
          className="text-center mb-2 fw-bold"
          style={{ color: 'var(--color-forest-800)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('surroundings.title')}
        </motion.h2>
        <motion.p
          className="text-center text-body-secondary mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {t('surroundings.description')}
        </motion.p>
        <div className="row g-4 justify-content-center">
          {SURROUNDINGS_LINKS.map((item, i) => (
            <motion.div
              key={i}
              className="col-12 col-sm-6 col-lg-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card border-0 shadow rounded-4 overflow-hidden h-100 text-decoration-none text-body"
              >
                <div className="ratio ratio-16x9 bg-secondary">
                  <img src={item.image} alt="" className="object-fit-cover" loading="lazy" />
                </div>
                <div className="card-body">
                  <h3 className="h6 card-title mb-2" style={{ color: 'var(--color-forest-700)' }}>{t(item.titleKey)}</h3>
                  <p className="card-text small text-body-secondary mb-0">{t(item.descriptionKey)}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
