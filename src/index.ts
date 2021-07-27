import { Tooltip } from '@ionited/tooltip';
import { Directive } from 'vue';

export const tooltip: Directive = {
  mounted(el, binding) {
    el.tooltip = Tooltip(el, binding.value);
  },

  unmounted(el) {
    el.tooltip.destroy();
  }
}
