<template>
  <div class="qf-transfer">
    <div>
      <div class="qf-transfer-panel__header">{{ titles[0] }}</div>
      <nav class="qf-transfer-panel__body">
        <QFInput v-model="leftFilterStr" v-if="filterable" />
        <li v-for="item in leftDatasource" :key="item.key">
          <QFCheckbox
            :disabled="item.disabled"
            @change="onPick(item, $event)"
          />
          <span v-text="item.label" />
        </li>
      </nav>
    </div>
    <div class="qf-transfer__actions">
      <QFButton type="primary" :disabled="rtlDisabled" @click="dortl">
        <div v-if="actionTexts[0]">{{ actionTexts[0] }}</div>
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7L10 12L15 17"
            stroke="#fff"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </QFButton>
      <QFButton type="primary" :disabled="ltrDisabled" @click="doltr">
        <div v-if="actionTexts[1]">{{ actionTexts[1] }}</div>
        <i style="transform: rotate(180deg)" v-else>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7L10 12L15 17"
              stroke="#fff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
      </QFButton>
    </div>
    <div>
      <div class="qf-transfer-panel__header">{{ titles[1] }}</div>
      <nav class="qf-transfer-panel__body">
        <QFInput v-model="rightFilterStr" v-if="filterable" />
        <li v-for="item in rightDatasource" :key="item.key">
          <QFCheckbox :disabled="item.disabled" @click="onPick(item, $event)" />
          <span v-text="item.label" />
        </li>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>
import QFButton from '../button';
import QFCheckbox from '../checkbox';
import QFInput from '../input';
import { TransferItem, TransferProps } from './transfer';
import { useTransfer } from './use-transfer';
import { defineModel } from 'vue';

defineOptions({
  name: 'qf-transfer'
});

const emit = defineEmits(['change']);
const props = withDefaults(defineProps<TransferProps>(), {
  data: () => [],
  titles: () => ['列表1', '列表2'],
  actionTexts: () => ['', ''],
  filterable: false
});

const { titles, actionTexts, filterable } = props;

const model = defineModel<TransferItem[]>({
  default: () => []
});
const {
  leftDatasource,
  rightDatasource,
  leftFilterStr,
  rightFilterStr,
  onPick,
  rtlDisabled,
  ltrDisabled,
  doltr,
  dortl
} = useTransfer(props, model, emit);
</script>
