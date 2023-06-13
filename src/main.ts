import { createPinia } from 'pinia';
import { createMetaManager } from 'vue-meta';
import i18n from 'config/i18n';
import Application from 'components/Application';
import MasterLayout from 'components/Layout/MasterLayout';
import GuestLayout from 'components/Layout/GuestLayout';
import DashboardLayout from 'components/Layout/DashboardLayout';
import FontIcon from 'components/FontIcon';
import router from 'config/router';

import 'styles/main.scss';

const pinia = createPinia();

createApp(Application)
  .use(router)
  .use(i18n)
  .use(pinia)
  .use(createMetaManager())
  .component('MasterLayout', MasterLayout)
  .component('DashboardLayout', DashboardLayout)
  .component('GuestLayout', GuestLayout)
  .component('FontIcon', FontIcon)
  .mount('#app');
