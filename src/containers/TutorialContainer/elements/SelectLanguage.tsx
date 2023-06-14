import { useI18n } from 'vue-i18n';
import { useLocale } from 'vuetify';
import { VListItem, VSelect } from 'vuetify/components';
import { RESOURCES } from 'config/constants';
import useAppStore from 'store/app';

export default defineComponent({
  /* eslint-disable */
  setup() {
    const { current } = useLocale();
    const { t } = useI18n();
    const { currentLanguage, changeLanguage } = useAppStore();
    const selectedLanguage = ref(currentLanguage);

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
      selectedLanguage.value = lang;
      current.value = lang;
      changeLanguage(lang as App.AppLanguage);
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
        modelValue={selectedLanguage.value}
        onUpdate:modelValue={(value) => {
          //
          debugger;
          selectedLanguage.value = value;
        }}
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
