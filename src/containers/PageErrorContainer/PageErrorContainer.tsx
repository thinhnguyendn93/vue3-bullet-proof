import { useI18n } from 'vue-i18n';
import { RESOURCES } from 'config/constants';
import { StatusCodeEnum } from 'enums/app';
import { isAuthenticated } from 'utils/cookie';

export default defineComponent({
  props: {
    type: {
      type: Number as PropType<StatusCodeEnum>,
      default: StatusCodeEnum.PageNotFound,
    },
  },
  /* eslint-disable-next-line max-lines-per-function */
  setup({ type }) {
    const { t } = useI18n();

    const title = computed<string>(() => {
      switch (type) {
        case StatusCodeEnum.Forbidden:
          return t('forbidden');
        case StatusCodeEnum.InternalServerError:
          return t('internal_server_error');
        default:
          return t('page_not_found');
      }
    });

    const image = computed<string>(() => {
      switch (type) {
        case StatusCodeEnum.Forbidden:
          return RESOURCES.PAGE_FORBIDDEN;
        case StatusCodeEnum.InternalServerError:
          return RESOURCES.PAGE_INTERNAL_SERVER_ERROR;
        default:
          return RESOURCES.PAGE_NOT_FOUND;
      }
    });

    const hasAction = computed<boolean>(
      () => type === StatusCodeEnum.PageNotFound && isAuthenticated(),
    );

    return (): JSX.Element => (
      <div class="page-error">
        <div class="page-error__content">
          <img class="page-error__image" src={image.value} alt={`${type}`} />
          <h1 class="page-error__title">{title.value}</h1>
        </div>
      </div>
    );
  },
});
