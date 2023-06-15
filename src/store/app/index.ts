import { defineStore } from 'pinia';
import i18n from 'config/i18n';
import { setLanguage } from 'utils/cookie';
import initialState from './state';
import getters from './getters';
import { Actions, Getters, State } from './types';

export default defineStore<'app', State, Getters, Actions>({
  id: 'app',
  state: initialState,
  getters,
  actions: {
    changeLanguage(lang: App.AppLanguage): void {
      i18n.global.locale.value = lang;
      this.locale = lang;
      setLanguage(lang);
    },
    reset(): void {
      this.$reset();
    },
  },
});
