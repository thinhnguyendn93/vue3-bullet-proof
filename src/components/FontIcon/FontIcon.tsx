export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: '24',
    },
    color: {
      type: String,
      default: '',
    },
    cursor: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function as PropType<(payload: MouseEvent) => void>,
    },
  },

  setup(props) {
    const { name, size, color, cursor } = toRefs(props);

    const classes = computed<string>(() =>
      classNames('font-icon', {
        [`font-icon--${name.value}`]: true,
        [`font-icon--size-${size.value}`]: true,
        [`font-icon--${color.value}`]: color.value !== '',
        [`font-icon--cursor`]: cursor.value,
      }),
    );

    return (): JSX.Element => (
      <span class={classes.value} onClick={props.onClick} />
    );
  },
});
