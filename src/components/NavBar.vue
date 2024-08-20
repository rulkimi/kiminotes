<script setup>
import { useRouter } from 'vue-router';
import { useMainStore } from '@/store';
import { ref, onMounted } from 'vue';

const store = useMainStore();
const router = useRouter();

const isDarkMode = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark';
  } else {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDarkMode.value = prefersDarkScheme;
  }

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};
</script>


<template>
  <!-- desktop view -->
  <div class="sticky top-0 border-b h-14 bg-background/90 z-10">
    <div class="max-w-[1280px] mx-auto h-full p-4">
      <div class="flex justify-between">
        <div class="flex gap-2 text-lg font-bold" @click="router.push({ path: '/' })">
          <img src="/kiminotes.svg" alt="kiminotes logo" width="20">
          <span>kiminotes</span>
        </div>
        <div class="flex gap-2 items-center">
          <!-- Moon/Sun image triggers dark/light mode -->
          <img
            v-if="isDarkMode"
            src="@/assets/sun.svg"
            alt="Toggle dark mode"
            width="24" 
            @click="toggleDarkMode"
            class="cursor-pointer transition duration-200 hover:scale-110"
          >
          <img
            v-else
            src="@/assets/moon.svg"
            alt="Toggle dark mode"
            width="24" 
            @click="toggleDarkMode"
            class="cursor-pointer transition duration-200 hover:scale-110"
          >
          <a href="https://github.com/rulkimi/ui-playground" target="_blank" class="cursor-pointer transition duration-200 hover:scale-110">
            <img src="@/assets/github-mark.png" width="24" alt="kiminotes github" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile view -->
  <div class="sticky top-[3.5rem] md:hidden border-b h-14 bg-background/90 z-10">
    <div class="max-w-[1280px] mx-auto h-full p-4">
      <div class="flex items-center gap-4">
        <button @click="store.toggleSidebar" aria-label="Toggle sidebar">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div class="flex items-center gap-2">
          <span>{{ store.currentSection?.name }}</span>
          <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 2L6 5L3 8" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span class="font-semibold">{{ store.currentMenu?.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

