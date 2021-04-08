<template>
  <div class="demo-box">
    <p>text:{{text}}</p>
    <ft-input placeholder="请输入XXX" v-model="text" />
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';
import FtInput from './index';
export default defineComponent({
  name: 'InputDemo',
  components: {
    FtInput,
  },
  setup(props, { emit }) {
    const text = ref('aaa');
    // text.value = 222;
    return {
      text
    };
  },
});
</script>

<style scoped lang="scss"></style>
