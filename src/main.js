import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import Prism from 'prismjs';
import registerComponents from "@/course/components/index.js";
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';   
import 'prismjs/components/prism-java'; 
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

const app = createApp(App);

// Call the register function to globally register components
registerComponents(app);

// Use router and mount app
app.use(router).mount('#app');

// Prism syntax highlighting
Prism.highlightAll();
