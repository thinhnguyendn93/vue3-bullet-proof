import i18n from 'config/i18n';
import { setLanguage } from 'utils/cookie';
import type { Actions, State } from './types';

const actions: App.ActionsTree<Actions, State> = {
  changeLanguage(): void {
    const locale = this.locale === 'en' ? 'vi' : 'en';
    this.locale = locale;
    i18n.global.locale.value = locale;
    setLanguage(locale);
  },
  reset(): void {
    this.$reset();
  },
};

export default actions;
