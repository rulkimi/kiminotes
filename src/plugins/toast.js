import { useToastStore } from '@/store';

export default {
  install(app) {
    const toastStore = useToastStore();

    app.config.globalProperties.$toast = {
      show(message) {
        toastStore.showToast(message);
      },
      hide() {
        toastStore.hideToast();
      }
    }
  }
}