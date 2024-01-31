import { inject, computed } from 'vue';
import { CollapseItemProps, CollapseContext } from './collapse';

export const useCollapseItem = (props: CollapseItemProps) => {
  const { activeNames, onChange } = inject(CollapseContext, {
    activeNames: computed<string[]>(() => []),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onChange: (name: string) => {}
  });

  const isActive = computed(() => activeNames.value.includes(props.name!));

  const cls = computed(() => {
    return [
      'qf-collapse-item',
      isActive.value ? 'qf-collapse-item--active' : ''
    ];
  });

  return {
    isActive,
    onChange,
    cls
  };
};
