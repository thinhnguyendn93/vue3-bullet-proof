import { createI18n } from 'vue-i18n';
import { getLanguage } from 'utils/cookie';
import { langEn, langVi, DEFAULT_LANGUAGE } from './constants';

const currentLanguage = getLanguage() || DEFAULT_LANGUAGE;

export default createI18n({
  legacy: false,
  mode: 'composition',
  locale: currentLanguage,
  fallbackLocale: DEFAULT_LANGUAGE,
  messages: {
    en: langEn,
    vi: langVi,
  },
});
