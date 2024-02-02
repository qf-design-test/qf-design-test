<template>
  <qf-form :model="formModel" :rules="rules" ref="form">
    <qf-form-item label="姓名" prop="name">
      <qf-input v-model="formModel.name"></qf-input>
    </qf-form-item>
    <qf-form-item label="地址" prop="address">
      <qf-input v-model="formModel.address"></qf-input>
    </qf-form-item>
    <qf-form-item label="是否参加工作" prop="worked">
      <qf-switch
        v-model="formModel.worked"
        style="
          --switch-inactive-bg-color: yellow;
          --switch-active-bg-color: green;
        "
      />
    </qf-form-item>
    <qf-form-item>
      <qf-button
        type="primary"
        style="margin-right: 10px"
        @click.prevent="doValidate"
        >确认</qf-button
      >
      <qf-button type="info" @click.prevent="doRestFields">重置</qf-button>
    </qf-form-item>
  </qf-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const formModel = reactive({
  name: '1',
  address: '',
  worked: false
});

const rules = {
  name: {
    type: 'string',
    required: true,
    message: '请输入姓名'
  },
  address: {
    type: 'string',
    required: true,
    min: 10,
    message: '请输入地址，地址信息不能小于10个字'
  }
};

const form = ref<any>();
const doValidate = () => {
  form.value
    ?.validate()
    .then(() => {
      console.log('验证成功');
    })
    .catch((error: Error) => {
      console.error('验证失败');
      console.table(error);
    });
};

const doRestFields = () => {
  form.value?.resetFields();
  formModel.name = '1';
  console.log(formModel, 'model');
};
</script>
