import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { highlightDirective } from './directives';

const app = createApp(App);
const pinia = createPinia();

app.directive('highlight', highlightDirective);
app.use(router);
app.use(pinia);
app.mount('#app');