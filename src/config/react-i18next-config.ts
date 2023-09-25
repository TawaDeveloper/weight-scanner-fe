import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import { cn, en, tw } from '@/locales';
import { DEFAULT_LANG } from '@/constants';

const lng = localStorage.getItem('lang') ?? DEFAULT_LANG;
const resources: Resource =
  lng === 'zh_CN'
    ? {
        zh_CN: {
          translation: cn,
        },
      }
    : lng === 'en_US'
    ? {
        en_US: {
          translation: en,
        },
      }
    : {
        zh_TW: {
          translation: tw,
        },
      };

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: 'en_US',
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  detection: {
    caches: ['localStorage', 'sessionStorage', 'cookie'],
  },
});

i18n.on('languageChanged', function (language) {
  console.log('languageChanged', `current language is ${language}`);
});

i18n.on('loaded', function (loaded) {
  console.log(
    loaded ? 'Resource loaded successfully！' : 'Failed to load resource！',
  );
});

export default i18n;
