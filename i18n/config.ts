import i18n from 'i18next';
import enTranslation from './en/translation.json';
import itTranslation from './it/translation.json';
import {initReactI18next} from 'react-i18next';

export const resources = {
  en: {
    translation: enTranslation,
  },
  it: {
    translation: itTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  resources,
});
