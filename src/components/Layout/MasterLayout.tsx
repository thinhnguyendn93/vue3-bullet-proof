export default defineComponent({
  setup(props, { slots }) {
    return (): JSX.Element => (
      <main class="master-layout">
        <metainfo />
        {slots.default()}
      </main>
    );
  },
});
