import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import { highlightDirective } from '@/directives';
import { useMainStore } from '@/store';
import toast from '@/plugins/toast';
import '@/style.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(fas)
library.add(far)
library.add(fab)

const app = createApp(App);
const pinia = createPinia();

// directives
app.directive('highlight', highlightDirective);

// plugins
app.use(router);
app.use(pinia);
app.use(toast);
app.component('font-awesome-icon', FontAwesomeIcon)

const store = useMainStore();
router.beforeEach((to, from, next) => {
  store.setCurrentPath(to.path);
  next();
});

app.mount('#app');
