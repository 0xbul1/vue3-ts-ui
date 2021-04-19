<template>
  <div class="demo-box">
    <ft-tabs v-model="currentTabName">
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
    const currentTabName = ref('orange');
    // text.value = 222;
    return {
      currentTabName,
    };
  },
});
</script>

<style scoped lang="scss"></style>
