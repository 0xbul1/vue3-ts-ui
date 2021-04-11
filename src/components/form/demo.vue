<template>
  <div class="demo-box">
    <ft-form-item label="姓名">
      <!-- <template #label>
        <b>customLabel</b>
      </template> -->
      <ft-input placeholder="请输入XXX" v-model="formValues.name" />
    </ft-form-item>
  </div>
</template>

<script lang="tsx">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'FormDemo',
  setup(props, { emit }) {
    const text = ref('aaa');
    const formValues = reactive({
      name: '',
    });
    // text.value = 222;
    return {
      text,
      formValues,
    };
  },
});
</script>

<style scoped lang="scss"></style>
