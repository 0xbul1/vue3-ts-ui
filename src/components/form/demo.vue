<template>
  <div class="demo-box">
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
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue';
import { FtRuleItem } from './types';
export default defineComponent({
  name: 'FormDemo',
  setup(props, { emit }) {
    const text = ref('aaa');
    const formValues = reactive({
      name: '',
      password: '',
    });
    const nameRules = ref<FtRuleItem | FtRuleItem[]>([
      {
        required: true,
        message: '请输入姓名',
        trigger: 'change',
      },
      {
        max: 6,
        message: '不超过6位',
        trigger: 'blur',
      },
    ]);
    // text.value = 222;
    return {
      text,
      formValues,
      nameRules,
    };
  },
});
</script>

<style scoped lang="scss"></style>
