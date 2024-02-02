<template>
  <qf-form :model="formModel" ref="form" :label-width="50">
    <qf-form-item label="姓名" prop="name">
      <qf-input v-model="formModel.name"></qf-input>
    </qf-form-item>
    <qf-form-item label="地址" prop="address">
      <qf-input v-model="formModel.address"></qf-input>
    </qf-form-item>
    <qf-form-item>
      <qf-button @click.prevent="doValidate">确认</qf-button>
    </qf-form-item>
  </qf-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const formModel = reactive({
  name: '',
  address: ''
});

const form = ref<any>();
const doValidate = () => {
  form.value?.validate();
  console.log(form.value, 1);
};
</script>
