<template>
  <div class="demo-box">
    <ft-input />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import FtInput from './index'
export default defineComponent({
  name: 'InputDemo',
  components: {
    FtInput,
  },
  setup(props, {emit}) {
    return {}
  }
});
</script>

<style scoped lang="scss">
</style>
