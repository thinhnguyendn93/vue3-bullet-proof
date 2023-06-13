import { useI18n } from 'vue-i18n';
import { useMeta } from 'vue-meta';
import TutorialContainer from 'containers/TutorialContainer';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    useMeta({
      title: t('tutorial'),
    });

    return (): JSX.Element => (
      <master-layout>
        <TutorialContainer />
      </master-layout>
    );
  },
});
