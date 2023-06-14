import Vue, { VNode, NormalizedScopedSlot } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ScopedSlotElement extends NormalizedScopedSlot {}
    interface ElementClass extends Vue {}

    interface ElementAttributesProperty {
      $props: {};
    }

    interface IntrinsicElements {
      [elem: string]: App.Any;
    }
  }
}
