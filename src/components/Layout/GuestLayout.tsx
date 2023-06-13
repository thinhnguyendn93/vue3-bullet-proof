import { RESOURCES } from 'config/constants';
import MasterLayout from './MasterLayout';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    hasLogo: {
      type: Boolean,
      default: false,
    },
  },
  setup({ title, hasLogo }, { slots }) {
    const renderHeader = (): JSX.Element => {
      return (
        <div
          class={classNames('guest-layout__header', {
            ['guest-layout__header--has-title']: Boolean(title),
          })}
        >
          {hasLogo && <img class="guest-layout__logo" src={RESOURCES.FLAGS} />}
          {title && <h1 class="guest-layout__title">{title}</h1>}
        </div>
      );
    };

    return (): JSX.Element => (
      <MasterLayout>
        <div class="guest-layout">
          {(title || hasLogo) && renderHeader()}
          <div class="guest-layout__main">{slots.default()}</div>
          {slots.footer && (
            <div class="guest-layout__footer">{slots.footer()}</div>
          )}
        </div>
      </MasterLayout>
    );
  },
});
