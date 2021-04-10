<template>
  <div class="demo-box">
    <ft-form-item />
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';
import FtInput from './FormItem';
export default defineComponent({
  name: 'FormDemo',
  components: {
    FtInput,
  },
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
