<template>
  <div class="app">
    <div class="app-container">
      <!-- <input-demo /> -->
      <form-demo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import InputDemo from './components/input/demo.vue';
import FormDemo from './components/form/demo.vue';

export default defineComponent({
  name: 'App',
  components: {
    FormDemo,
  },
});
</script>
<style lang="scss">
.app-container {
  width: 800px;
  margin: 0 auto;
}
</style>
