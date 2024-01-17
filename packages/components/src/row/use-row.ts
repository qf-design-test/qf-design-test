import { CSSProperties, computed, provide } from 'vue';
import { RowProps, rowContextKey } from './row';

export const useRow = (props: RowProps) => {
  const { justify, align } = props;
  const gutter = computed(() => props.gutter ?? 0);

  // 将gutter通过provide注入，提供给col组件方案为
  provide(rowContextKey, { gutter });

  // 根据gutter计算样式
  const style = computed(() => {
    const styles: CSSProperties = {};
    if (!props.gutter) {
      return styles;
    }

    styles.marginRight = styles.marginLeft = `-${gutter.value / 2}px`;
    return styles;
  });

  // 计算className
  const classList = computed(() => [
    'qf-row',
    justify !== 'start' ? `qf-rows--justify-${justify}` : '',
    align ? `qf-rows-align-${align}` : ''
  ]);

  return {
    style,
    classList
  };
};
