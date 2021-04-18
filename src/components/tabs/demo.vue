<template>
  <div class="demo-box">
    <ft-tabs>
      <ft-tab-pane name="apple">apple</ft-tab-pane>
      <ft-tab-pane name="banana">banana</ft-tab-pane>
      <ft-tab-pane name="orange">orange</ft-tab-pane>
    </ft-tabs>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref } from 'vue';
import FtTabs from './index';
export default defineComponent({
  name: 'TabsDemo',
  components: {
    FtTabs,
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
