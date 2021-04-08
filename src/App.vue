<template>
  <div class="app">
    <div class="app-container">
      <input-demo />
      <br>
      <ft-input></ft-input>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputDemo from './components/input/demo.vue';


export default defineComponent({
  name: 'App',
  components: {
    InputDemo,
  },
});
</script>
<style lang="scss">
.app-container {
  width: 800px;
  margin: 0 auto;
}
</style>
