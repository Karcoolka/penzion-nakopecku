import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LINKEDIN_URL = 'https://www.linkedin.com/in/adela-simkova/';

function LinkedInIconPlastic() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation();
  const partners = t('footer.partners', { returnObjects: true }) as { name: string; url: string }[];

  return (
    <footer
      className="py-5 mt-auto position-relative"
      style={{ backgroundColor: 'var(--color-forest-800)', color: 'var(--color-sage-200)' }}
    >
      <div className="container">
        <motion.div
          className="row g-4 align-items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="col-12 col-md-4">
            <p className="mb-1 fw-semibold">Penzionek Na Kopečku</p>
            <p className="mb-0 small opacity-75">{t('footer.location')}</p>
            <p className="mb-0 mt-2 small opacity-75">© {new Date().getFullYear()} {t('footer.rights')}</p>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="small text-uppercase opacity-90 mb-2">{t('footer.partnerTitle')}</h6>
            <ul className="list-unstyled small mb-0">
              {Array.isArray(partners) &&
                partners.map((p) => (
                  <li key={p.name} className="mb-1">
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none opacity-75 hover:opacity-100"
                      style={{ color: 'inherit' }}
                    >
                      {p.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          <div className="col-12 col-md-4 d-flex flex-column align-items-md-end justify-content-md-end">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="credits d-flex align-items-center gap-2 small text-decoration-none opacity-90 hover:opacity-100"
              style={{ color: 'inherit' }}
            >
              <span>{t('footer.createdBy')}</span>
              <span
                className="d-inline-flex align-items-center justify-content-center rounded-2 flex-shrink-0"
                style={{
                  width: 28,
                  height: 28,
                  color: 'var(--color-sage-200)',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.2)',
                }}
              >
                <LinkedInIconPlastic />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
