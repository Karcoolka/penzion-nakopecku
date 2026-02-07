import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setLanguage } from '../store/languageSlice';
import type { Language } from '../types';
import type { NavItem } from '../types';

const CAROUSEL_IMAGES = [
  { src: '/carousel/carousel_1.jpg', alt: 'Penzion a okolí' },
  { src: '/carousel/carousel_2.jpg', alt: 'Krajina Teplicko-adršpašských skal' },
  { src: '/carousel/carousel_3.jpg', alt: 'Ubytování' },
  { src: '/carousel/carousel_4.jpg', alt: 'Příroda' },
  { src: '/carousel/carousel_5.jpg', alt: 'Výhled' },
  { src: '/carousel/carousel_6.jpg', alt: 'Skalní oblast' },
];

const LANGUAGES: { code: Language; flag: string; label: string }[] = [
  { code: 'cs', flag: '🇨🇿', label: 'Čeština' },
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
  { code: 'pl', flag: '🇵🇱', label: 'Polski' },
];

const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.home', sectionId: 'about' },
  { labelKey: 'nav.accommodation', sectionId: 'accommodation' },
  { labelKey: 'nav.prices', sectionId: 'prices' },
  { labelKey: 'nav.contact', sectionId: 'contact' },
  { labelKey: 'nav.surroundings', sectionId: 'surroundings' },
];

const CAROUSEL_INTERVAL_MS = 4000;
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=100067750340203';

function FacebookIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Header() {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const currentLang = useAppSelector((s) => s.language.current);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex((index + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  const handleLangChange = (code: Language) => {
    dispatch(setLanguage(code));
    i18n.changeLanguage(code);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="position-relative overflow-hidden shadow-lg mb-4">
      <div className="position-relative">
        <div
          id="header-carousel"
          className="carousel slide carousel-fade rounded-4 header-carousel-fixed"
        >
          <div className="carousel-inner h-100">
            {CAROUSEL_IMAGES.map((img, i) => (
              <div
                key={img.src}
                className={`carousel-item h-100 ${i === activeIndex ? 'active' : ''}`}
              >
                <img
                  src={img.src}
                  className="d-block w-100 h-100"
                  alt={img.alt}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="carousel-control-prev"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Předchozí"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="carousel-control-next"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Další"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </div>

        <div
          className="position-absolute top-0 start-0 end-0 d-flex flex-column flex-md-row align-items-center justify-content-between p-3 p-md-4 gap-2 z-1 header-overlay"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, transparent 100%)' }}
        >
          <div className="d-flex align-items-center gap-3">
            <motion.img
              src="/circleHouse.png"
              alt="Penzionek Na Kopečku"
              width={96}
              height={96}
              
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400 }}
            />
            <h1 className="text-white mb-0 fs-4 fs-md-3 fw-bold text-shadow">
              Penzionek Na Kopečku
            </h1>
          </div>

          <div className="d-flex align-items-center gap-2 flex-wrap">
            {LANGUAGES.map(({ code, flag, label }) => (
              <motion.button
                key={code}
                type="button"
                className={`btn btn-sm rounded-4 ${currentLang === code ? 'btn-primary' : 'btn-light btn-outline-secondary'}`}
                onClick={() => handleLangChange(code)}
                title={label}
                aria-label={label}
                aria-pressed={currentLang === code}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="fs-5" role="img" aria-hidden="true">{flag}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <nav className="position-absolute bottom-0 start-0 end-0 py-2 px-3 d-flex justify-content-center align-items-center gap-2 flex-wrap z-1" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)' }}>
          {NAV_ITEMS.map((item) => (
            <motion.button
              key={item.sectionId}
              type="button"
              className="btn btn-sm btn-outline-light rounded-4"
              onClick={() => scrollTo(item.sectionId)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {t(item.labelKey)}
            </motion.button>
          ))}
          <motion.a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline-light rounded-4 d-inline-flex align-items-center justify-content-center"
            aria-label={t('hero.facebookLabel')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FacebookIcon style={{ width: 22, height: 22, color: 'currentColor' }} />
          </motion.a>
        </nav>
      </div>
    </header>
  );
}
