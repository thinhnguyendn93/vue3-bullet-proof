/**
 * Vuetify3 Plugin
 */
import { createVuetify, type VuetifyOptions } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as labsComponents from 'vuetify/labs/components';
// Translations provided by Vuetify
import { en, vi } from 'vuetify/locale';

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';
import { DEFAULT_LANGUAGE } from 'config/constants';

/**
 * Vuetify Components
 *
 * @see {@link https://vuetifyjs.com/en/features/treeshaking/}
 */
let vuetifyConfig: VuetifyOptions = {
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    locale: DEFAULT_LANGUAGE,
    fallback: DEFAULT_LANGUAGE,
    messages: { en, vi },
  },
  theme: {
    defaultTheme: 'light',
  },
};

if (NODE_ENV == 'development') {
  // Disable treeshaking for DEV mode.
  vuetifyConfig = {
    components: { components, labsComponents },
    directives,
    ...vuetifyConfig,
  };
}
export default createVuetify(vuetifyConfig);
