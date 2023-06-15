import { useI18n } from 'vue-i18n';
import { useLocale } from 'vuetify';
import { storeToRefs } from 'pinia';
import { RESOURCES } from 'config/constants';
import useAppStore from 'store/app';
import { VListItem, VSelect } from 'components/Vuetify';

export default defineComponent({
  /* eslint-disable */
  setup() {
    const { current } = useLocale();
    const { t } = useI18n();
    const appStore = useAppStore();
    const { currentLanguage } = storeToRefs(appStore);

    const options = computed(() => [
      {
        key: 'en',
        label: t('english'),
        image: RESOURCES.USA_FLAG,
      },
      {
        key: 'vi',
        label: t('vietnamese'),
        image: RESOURCES.VN_FLAG,
      },
    ]);

    const onChangeLanguage = (lang: string) => {
      current.value = lang;
      appStore.changeLanguage(lang as App.AppLanguage);
    };

    const renderItem = ({ item, props }: App.SelectItem) => {
      const { image } = props;
      const { value, title } = item;

      return (
        <VListItem
          title={title}
          value={value}
          onClick={() => onChangeLanguage(value)}
          v-slots={{
            prepend: () => (
              <img
                class="select-custom-item__image"
                src={image as string}
                alt="Select image"
              />
            ),
          }}
        />
      );
    };

    const renderSelection = ({ item }: App.Any) => {
      const { image, label } = item.props;
      return (
        <div class="select-custom-item">
          <img
            class="select-custom-item__image"
            src={image as string}
            alt="Select image"
          />
          <p class="select-custom-item__title">{label}</p>
        </div>
      );
    };

    return (): JSX.Element => (
      <VSelect
        label={t('select_a_language')}
        items={options.value}
        modelValue={currentLanguage}
        itemValue="key"
        itemTitle="label"
        itemProps
        menuProps={{
          closeOnContentClick: true,
        }}
        v-slots={{
          item: renderItem,
          selection: renderSelection,
        }}
      />
    );
  },
});
