import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', () => {
  const currentPath = ref('/');
  const sections = [
    {
      name: 'UI Tips',
      menus: [
        { name: 'Transition for List', path: '/list-transition' },
        { name: 'Scroll Animation', path: '/scroll-animation' },
      ]
    },
    {
      name: 'Components',
      menus: [
        { name: 'Form Elements', path: '/form-elements' },
      ]
    },
  ];  

  function setCurrentPath(path) {
    currentPath.value = path;
  }

  const currentSection = computed(() => {
    for (const section of sections) {
      if (section.menus.some(menu => menu.path === currentPath.value)) {
        return section;
      }
    }
    return null;
  });

  return {
    currentPath,
    currentSection,
    sections,
    setCurrentPath,
  };
});