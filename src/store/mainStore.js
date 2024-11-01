import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', () => {
  const currentPath = ref('/');
  const sections = [
    {
      name: 'UI Tips',
      menus: [
        { name: 'Transition for List', path: '/list-transition' },
        { name: 'Scroll Offset', path: '/scroll-offset' },
        // { name: 'Scroll Animation', path: '/scroll-animation' },
      ]
    },
    {
      name: 'Github Pages',
      menus: [
        { name: 'Web History (vite)', path: '/web-history' },
      ]
    },
    {
      name: 'Components',
      menus: [
        { name: 'Form Elements', path: '/form-elements', isBeta: true },
        { name: 'Radial Progress Bar', path: '/radial-progress-bar' },
        { name: 'Tooltip', path: '/tooltip' },
        { name: 'Glowing Card', path: '/glowing-card' },
      ]
    },
    {
      name: 'Misc.',
      menus: [
        { name: 'Path Aliasing (vite)', path: '/path-aliasing' },
        { name: 'DAX Code', path: '/dax-code' },
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

  const currentMenu = computed(() => {
    return currentSection.value?.menus.find(menu => menu.path === currentPath.value) || null;
  });

  const isSidebarOpen = ref(false);

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const sublinks = ref([]);

  const setSublinks = links => {
    sublinks.value = links;
  }

  const pageScroll = ref(null);
  const setPageScroll = elementRef => {
    pageScroll.value = elementRef;
  }

  return {
    currentPath,
    currentSection,
    currentMenu,
    sections,
    setCurrentPath,
    isSidebarOpen,
    toggleSidebar,
    sublinks,
    setSublinks,
    pageScroll,
    setPageScroll
  };
});