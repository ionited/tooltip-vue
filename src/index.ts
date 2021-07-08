import { Tooltip } from '@ionited/tooltip';
import { Directive } from 'vue';

export const tooltip: Directive = {
  mounted(el: HTMLElement, binding) {
    (el as any).tooltip = Tooltip(el, binding.value);
  },

  unmounted(el: any) {
    el.tooltip.destroy();
  }
}
