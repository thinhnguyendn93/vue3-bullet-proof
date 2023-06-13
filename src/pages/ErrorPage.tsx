import { useI18n } from 'vue-i18n';
import { useMeta } from 'vue-meta';
import { useRouter } from 'vue-router';
import { StatusCodeEnum } from 'enums/app';
import PageErrorContainer from 'containers/PageErrorContainer';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const router = useRouter();

    const routeName = get(router, 'currentRoute.value.name');
    const type = ref<number>(StatusCodeEnum.PageNotFound);

    const title = computed<string>(() => {
      switch (routeName) {
        case '403':
          type.value = StatusCodeEnum.Forbidden;
          return t('forbidden');
        case '500':
          type.value = StatusCodeEnum.InternalServerError;
          return t('internal_server_error');
        default:
          return t('page_not_found');
      }
    });

    useMeta({
      title: title.value,
    });

    return (): JSX.Element => (
      <master-layout>
        <PageErrorContainer type={type.value} />
      </master-layout>
    );
  },
});
