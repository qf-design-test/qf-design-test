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
      <qf-button @click.prevent="doValidate">确认</qf-button>
    </qf-form-item>
  </qf-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const formModel = reactive({
  name: '',
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
    validator: (rule: unknown, value: string) => {
      if (!value.includes('上海')) {
        return new Error('只允许填写上海地区地址, 地址内必须要包含上海');
      }
      return true;
    }
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
</script>
