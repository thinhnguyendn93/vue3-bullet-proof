import { useI18n } from 'vue-i18n';
import MasterLayout from './MasterLayout';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  /* eslint-disable-next-line max-lines-per-function */
  setup({ title }, { slots }) {
    const { t } = useI18n();
    return (): JSX.Element => (
      <MasterLayout>
        <div class="dashboard-layout">
          <main class="dashboard-layout__main">{slots.default()}</main>
          {slots.footer && (
            <footer class="dashboard-layout__footer">{slots.footer()}</footer>
          )}
        </div>
      </MasterLayout>
    );
  },
});
