import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToastStore = defineStore('toast', () => {
  const isToastVisible = ref(false);
  const timeOut = ref(null);

  const showToast = () => {
    if (timeOut.value) clearTimeout(timeOut.value);
    isToastVisible.value = true;
    timeOut.value = setTimeout(() => {
      isToastVisible.value = false;
    }, 2000);
  };

  const hideToast = () => {
    isToastVisible.value = false;
    if (timeOut.value) clearTimeout(timeOut.value);
  };

  return { isToastVisible, showToast, hideToast };
});
