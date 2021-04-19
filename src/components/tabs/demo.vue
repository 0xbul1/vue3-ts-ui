<template>
  <div class="demo-box">
    <ft-tabs v-model="currentTabName">
      <ft-tab-pane name="tabOne">tabOne</ft-tab-pane>
      <ft-tab-pane name="tabTwo">tabTwo</ft-tab-pane>
      <ft-tab-pane name="tabThree">tabThree</ft-tab-pane>
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
    const currentTabName = ref('');
    // text.value = 222;
    return {
      currentTabName,
    };
  },
});
</script>

<style scoped lang="scss"></style>
