import { Ref, computed, ref } from 'vue';
import { TransferItem, TransferProps } from './transfer';

export const useTransfer = (
  props: TransferProps, // 传入的属性
  model: Ref<TransferItem[]>, // 传入的模型
  emit: (event: 'change', ...args: any[]) => void // 用于触发事件的函数
) => {
  const { data } = props; // 从属性中获取数据
  const dataSource = ref(data); // 数据源
  const selected = ref<(string | number)[]>([]); // 已选中的项
  const leftFilterStr = ref(''); // 左侧搜索过滤字符串
  const rightFilterStr = ref(''); // 右侧搜索过滤字符串

  const ltrDisabled = computed(() => {
    return !dataSource.value!.some((a) => selected.value.includes(a.key));
  }); // 计算属性，用于判断左侧到右侧按钮是否禁用

  const rtlDisabled = computed(() => {
    return !model.value.some((a) => selected.value.includes(a.key));
  }); // 计算属性，用于判断右侧到左侧按钮是否禁用

  const onPick = (item: TransferItem, checked: boolean) => {
    if (checked) {
      selected.value.push(item.key); // 选中某项
    } else {
      const index = selected.value.indexOf(item.key);
      index !== -1 && selected.value.splice(index, 1); // 取消选中某项
    }
  };

  const doltr = () => {
    for (let i = 0; i < selected.value.length; i++) {
      const currentKey = selected.value[i];
      const index = dataSource.value!.findIndex((a) => a.key === currentKey);
      if (index !== -1) {
        const moveItem = dataSource.value!.splice(index, 1);
        selected.value.splice(i, 1);
        model.value.push(...moveItem); // 从左侧到右侧移动选中的项
      }
    }
    emit('change', model.value); // 触发 change 事件
  };

  const dortl = () => {
    for (let i = 0; i < selected.value.length; i++) {
      const currentKey = selected.value[i];
      const index = model.value.findIndex((a) => a.key === currentKey);
      if (index !== -1) {
        const moveItem = model.value.splice(index, 1);
        selected.value.splice(i, 1);
        dataSource.value!.push(moveItem[0]); // 从右侧到左侧移动选中的项
      }
    }
    emit('change', model.value); // 触发 change 事件
  };

  const leftDatasource = computed(() => {
    return dataSource.value!.filter((a) =>
      a.label.includes(leftFilterStr.value)
    ); // 左侧数据源，根据搜索过滤字符串过滤
  });

  const rightDatasource = computed(() => {
    return model.value!.filter((a) =>
      a.label.includes(rightFilterStr.value)
    ); // 右侧数据源，根据搜索过滤字符串过滤
  });

  return {
    ltrDisabled,
    rtlDisabled,
    onPick,
    doltr,
    dortl,
    leftFilterStr,
    rightFilterStr,
    leftDatasource,
    rightDatasource
  };
};
