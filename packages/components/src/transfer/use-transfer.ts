import { Ref, computed, ref } from 'vue';
import { TransferItem, TransferProps } from './transfer';

export const useTransfer = (
  props: TransferProps,
  model: Ref<TransferItem[]>,
  emit: (event: 'change', ...args: any[]) => void
) => {
  const { data } = props;
  const dataSource = ref(data);
  const selected = ref<(string | number)[]>([]);
  const leftFilterStr = ref('');
  const rightFilterStr = ref('');

  const ltrDisabled = computed(() => {
    return !dataSource.value!.some((a) => selected.value.includes(a.key));
  });

  const rtlDisabled = computed(() => {
    return !model.value.some((a) => selected.value.includes(a.key));
  });

  const onPick = (item: TransferItem, checked: boolean) => {
    if (checked) {
      selected.value.push(item.key);
    } else {
      const index = selected.value.indexOf(item.key);
      index !== -1 && selected.value.splice(index, 1);
    }
  };

  const doltr = () => {
    for (let i = 0; i < selected.value.length; i++) {
      const currentKey = selected.value[i];
      const index = dataSource.value!.findIndex((a) => a.key === currentKey);
      if (index !== -1) {
        const moveItem = dataSource.value!.splice(index, 1);
        selected.value.splice(i, 1);
        model.value.push(moveItem[0]);
      }
    }
    emit('change', model.value);
  };

  const dortl = () => {
    for (let i = 0; i < selected.value.length; i++) {
      const currentKey = selected.value[i];
      const index = model.value.findIndex((a) => a.key === currentKey);
      if (index !== -1) {
        const moveItem = model.value.splice(index, 1);
        selected.value.splice(i, 1);
        dataSource.value!.push(moveItem[0]);
      }
    }
    emit('change', model.value);
  };

  const leftDatasource = computed(() => {
    return dataSource.value!.filter((a) =>
      a.label.includes(leftFilterStr.value)
    );
  });

  const rightDatasource = computed(() => {
    return dataSource.value!.filter((a) =>
      a.label.includes(rightFilterStr.value)
    );
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
