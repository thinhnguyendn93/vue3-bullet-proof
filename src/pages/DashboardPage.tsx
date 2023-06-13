import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import { useI18n } from 'vue-i18n';
import DashboardContainer from 'containers/DashboardContainer';

export default defineComponent({
  setup() {
    const { t } = useI18n();

    useMeta({
      title: t('dashboard'),
    });

    return (): JSX.Element => <DashboardContainer />;
  },
});
