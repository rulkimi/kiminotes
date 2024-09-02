import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToastStore = defineStore('toast', () => {
  const isToastVisible = ref(false);

  const showToast = () => {
    isToastVisible.value = true;
    setTimeout(() => {
      isToastVisible.value = false;
    }, 2000);
  }

  const hideToast = () => {
    isToastVisible.value = false;
  }

  return { isToastVisible, showToast, hideToast };
});
