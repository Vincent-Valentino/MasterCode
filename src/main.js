// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';    // Add Python support
import 'prismjs/components/prism-java';      // Add Java support
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

console.log('Vue is initializing...');

createApp(App)
  .use(router)
  .mount('#app');

Prism.highlightAll();
