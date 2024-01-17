import { computed } from 'vue';
import { TabProps } from './tabs';

export const useTab = (
  props: TabProps,
  emit: (event: 'update:activeKey', ...args: any[]) => void
) => {
  // 计算当前激活的tab index，如果没有activeKey，默认为0，否则为activeKey对应的index
  const activeIndex = computed(() => {
    if (!props.activeKey) {
      return 0;
    }
    const index = props.data.findIndex(
      (item) => item.value === props.activeKey
    );
    return index;
  });

  // 更新 active key
  const handleUpdate = (val: string) => {
    emit('update:activeKey', val);
  };
  return {
    handleUpdate,
    activeIndex
  };
};
