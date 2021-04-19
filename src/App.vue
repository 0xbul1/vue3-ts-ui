<template>
  <div class="app">
    <div class="app-container">
      <pre> ------input start------</pre>
      <input-demo />
      <pre> ------input end------</pre>
      <pre> ------form start------</pre>
      <form-demo />
      <pre> ------form end------</pre>
      <pre> ------tabs start------</pre>
      <tabs-demo />
      <pre> ------tabs end------</pre>
      <pre>


                                                                                           ------to be continued------
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputDemo from './components/input/demo.vue';
import FormDemo from './components/form/demo.vue';
import TabsDemo from './components/tabs/demo.vue';

export default defineComponent({
  name: 'App',
  components: {
    InputDemo,
    FormDemo,
    TabsDemo,
  },
});
</script>
<style lang="scss">
.app-container {
  width: 800px;
  margin: 0 auto;
}
</style>
