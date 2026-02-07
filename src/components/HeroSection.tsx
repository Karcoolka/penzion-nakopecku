import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t } = useTranslation();
  const amenities = t('hero.amenities', { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-5">
      <div className="container">
        <motion.div
          className="card plastic border-0 shadow-lg rounded-4 overflow-hidden p-4 p-md-5 bg-white"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          style={{
            background: 'linear-gradient(145deg, var(--color-cream-50), var(--color-sage-100))',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
          }}
        >
          <h2 className="h3 mb-3" style={{ color: 'var(--color-forest-800)' }}>
            {t('hero.title')}
          </h2>
          <p className="text-body-secondary lh-lg mb-4">
            {t('hero.description')}
          </p>
          <ul className="list-unstyled row g-2 g-md-3 mb-4">
            {Array.isArray(amenities) &&
              amenities.map((item, i) => (
                <motion.li
                  key={i}
                  className="col-12 col-sm-6 col-lg-4 d-flex align-items-start gap-2"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                >
                  <span
                    className="rounded-2 flex-shrink-0 mt-1"
                    style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: 'var(--color-forest-500)',
                    }}
                    aria-hidden
                  />
                  <span className="text-body-secondary small">{item}</span>
                </motion.li>
              ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
