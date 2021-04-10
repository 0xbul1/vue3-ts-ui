<template>
  <div class="demo-box">
    <ft-form-item label="111">
      <template #label>
        <b>customLabel</b>
      </template>
      <ft-input placeholder="请输入XXX" />
    </ft-form-item>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'FormDemo',
  setup(props, { emit }) {
    const text = ref('aaa');
    // text.value = 222;
    return {
      text,
    };
  },
});
</script>

<style scoped lang="scss"></style>
