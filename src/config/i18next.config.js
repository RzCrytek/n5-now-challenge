import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translationEn, translationEs } from '../translations';

const resources = {
  es: { translation: translationEs },
  en: { translation: translationEn },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
