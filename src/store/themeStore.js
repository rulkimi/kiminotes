import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false);

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark';
    } else {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDarkMode.value = prefersDarkScheme;
    }

    applyTheme();
  };

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    applyTheme();
  };

  const applyTheme = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  onMounted(initializeTheme);

  return { isDarkMode, toggleDarkMode };
});
