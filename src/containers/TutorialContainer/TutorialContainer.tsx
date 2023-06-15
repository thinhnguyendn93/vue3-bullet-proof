import {
  VAvatar,
  VBtn,
  VCol,
  VContainer,
  VDivider,
  VIcon,
  VRow,
} from 'components/Vuetify';
import DataTable from './elements/DataTable';
import Dialog from './elements/Dialog';
import SelectLanguage from './elements/SelectLanguage';

export default defineComponent({
  /* eslint-disable max-lines-per-function, max-lines*/
  setup() {
    return (): JSX.Element => (
      <VContainer>
        <VRow>
          <VCol cols={12}>
            <SelectLanguage />
          </VCol>
          <VCol cols={12}>
            <VAvatar color="blue">
              <VIcon>mdi-alarm</VIcon>
            </VAvatar>
          </VCol>
          <VCol cols={12}>
            <VDivider />
          </VCol>
          <VCol cols={12}>
            <VCol cols="auto">
              <Dialog />
            </VCol>
          </VCol>
          <VCol cols={12}>
            <VRow>
              <VCol cols="auto">
                <VBtn>Default button</VBtn>
              </VCol>
              <VCol cols="auto">
                <VBtn prependIcon={() => <VIcon>mdi-alarm</VIcon>}>
                  Button with prependIcon
                </VBtn>
              </VCol>
              <VCol cols="auto">
                <VBtn prependIcon={() => <VIcon>mdi-alarm</VIcon>}>
                  Default button
                </VBtn>
              </VCol>
              <VCol cols="auto">
                <VBtn prependIcon={() => <VIcon>mdi-alarm</VIcon>}>
                  Default button
                </VBtn>
              </VCol>
            </VRow>
          </VCol>
          <VCol cols={12}>
            <VDivider />
          </VCol>
          <VCol cols={12}>
            <DataTable />
          </VCol>
        </VRow>
      </VContainer>
    );
  },
});
