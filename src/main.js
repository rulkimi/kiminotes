import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { highlightDirective } from './directives';
import { useMainStore } from './store';
import './style.css';

const app = createApp(App);
const pinia = createPinia();

// directives
app.directive('highlight', highlightDirective);

// plugins
app.use(router);
app.use(pinia);

const store = useMainStore();
router.beforeEach((to, from, next) => {
  store.setCurrentPath(to.path);
  next();
});

app.mount('#app');
