import { createApp } from 'vue'
import App from './App.vue'
import LibUses from './lib-uses'
import './assets/styles/index.scss'


// const app = createApp(App).use(LibUses);
createApp(App).use(LibUses).mount('#app')
