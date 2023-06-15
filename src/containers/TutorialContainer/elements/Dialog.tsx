import { useI18n } from 'vue-i18n';
import {
  VBtn,
  VCard,
  VCardActions,
  VCardText,
  VDialog,
} from 'vuetify/components';

export default defineComponent({
  setup() {
    const { t } = useI18n();
    const dialogVisible = ref(false);

    return (): JSX.Element => (
      <>
        <VBtn onClick={() => (dialogVisible.value = true)}>
          {t('open_dialog')}
        </VBtn>
        <VDialog
          modelValue={dialogVisible.value}
          width="auto"
          onUpdate:modelValue={(value) => (dialogVisible.value = value)}
        >
          <VCard>
            <VCardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </VCardText>
            <VCardActions>
              <VBtn
                color="primary"
                block
                onClick={() => (dialogVisible.value = false)}
              >
                {t('close_dialog')}
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>
      </>
    );
  },
});
