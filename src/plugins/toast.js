import { useToastStore } from '@/store';

export default {
  install(app) {
    const toastStore = useToastStore();

    app.config.globalProperties.$toast = {
      show() {
        toastStore.showToast();
      },
      hide() {
        toastStore.hideToast();
      }
    }
  }
}