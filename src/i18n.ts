import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cs from './locales/cs.json';
import en from './locales/en.json';
import de from './locales/de.json';
import pl from './locales/pl.json';

const resources = {
  cs: { translation: cs },
  en: { translation: en },
  de: { translation: de },
  pl: { translation: pl },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'cs',
  fallbackLng: 'cs',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
