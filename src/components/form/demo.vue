<template>
  <div class="demo-box">
    <ft-form :model="formValues" :rules="formRules" ref="FtForm">
      <ft-form-item label="姓名" prop="name" :rules="nameRules">
        <!-- <template #label>
        <b>customLabel</b>
      </template> -->
        <ft-input placeholder="请输入XXX" v-model="formValues.name" />
      </ft-form-item>
      <ft-form-item label="密码" prop="password">
        <!-- <template #label>
        <b>customLabel</b>
      </template> -->
        <ft-input
          placeholder="请输入XXX"
          type="password"
          v-model="formValues.password"
        />
      </ft-form-item>
      <ft-form-item>
        <button @click="submit">提交按钮</button>
      </ft-form-item>
    </ft-form>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue';
import { FORMCONTEXT, FtRuleItem } from './types';
export default defineComponent({
  name: 'FormDemo',
  setup(props, { emit }) {
    const text = ref('aaa');
    const formValues = reactive({
      name: '',
      password: '',
    });
    const formRules = reactive({
      name: [
        {
          required: true,
          message: '请输入姓名',
          trigger: 'blur',
        },
        {
          max: 6,
          message: '不超过6位',
          trigger: 'blur',
        },
      ],
      password: { min: 6, message: '最少6位', trigger: 'blur' },
    });
    const FtForm = ref<FORMCONTEXT | null>(null);
    const submit = () => {
      console.log(FtForm, 'FtForm');
      FtForm.value!.validate((valid) => {
        console.log('demo', valid);
      });
    };
    return {
      text,
      formValues,
      formRules,
      submit,
      FtForm,
    };
  },
});
</script>

<style scoped lang="scss"></style>
