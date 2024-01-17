import { computed } from 'vue';
import { TabProps } from './tabs';

export const useTab = (
  props: TabProps,
  emit: (event: 'update:activeKey', ...args: any[]) => void
) => {
  const activeIndex = computed(() => {
    if (!props.activeKey) {
      return 0;
    }
    const index = props.data.findIndex(
      (item) => item.value === props.activeKey
    );
    return index;
  });

  const handleUpdate = (val: string) => {
    emit('update:activeKey', val);
  };
  return {
    handleUpdate,
    activeIndex
  };
};
