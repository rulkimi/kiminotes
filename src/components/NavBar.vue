<script setup>
import { useRouter } from 'vue-router';
import { useMainStore, useThemeStore } from '@/store';
import { ref, getCurrentInstance } from 'vue';

const store = useMainStore();
const themeStore = useThemeStore();
const router = useRouter();
const { proxy } = getCurrentInstance();

const toggleDarkMode = () => {
  themeStore.toggleDarkMode();
  const theme = themeStore.isDarkMode ? 'dark mode' : 'light mode';
  const icon = themeStore.isDarkMode ? 'moon' : 'sun';
  proxy.$toast.show({ message: `Theme changed to ${theme}.`, icon });
}

const showSublinks = ref(false);
const scrollToLink = element => {
  const elementRect = element.getBoundingClientRect();
  const offset = 120;
  const scrollPosition = elementRect.top + store.pageScroll.scrollTop - offset;
  
  store.pageScroll.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  showSublinks.value = false;
};
</script>


<template>
  <!-- desktop view -->
  <div class="sticky top-0 border-b dark:border-slate-700 h-14 bg-background/90 z-10">
    <div class="max-w-[1280px] mx-auto h-full p-4">
      <div class="flex justify-between">
        <div class="flex gap-2 text-lg font-bold" @click="router.push({ path: '/' })">
          <img src="/kiminotes.svg" alt="kiminotes logo" width="20">
          <span>kiminotes</span>
        </div>
        <div class="flex gap-4 items-center">
          <!-- Moon/Sun image triggers dark/light mode -->
          <img
            v-if="themeStore.isDarkMode"
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
          <a href="https://github.com/rulkimi/kiminotes" target="_blank" class="cursor-pointer transition duration-200 hover:scale-110">
            <img v-if="themeStore.isDarkMode" src="@/assets/github-mark-white.png" width="24" alt="kiminotes github" />
            <img v-else src="@/assets/github-mark.png" width="24" alt="kiminotes github" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- mobile view -->
  <div class="sticky top-[3.5rem] md:hidden border-b dark:border-slate-700 h-14 bg-background/90 z-10">
    <div class="max-w-[1280px] mx-auto h-full p-4">
      <div class="flex items-center gap-4">
        <button @click="store.toggleSidebar" aria-label="Toggle sidebar">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div v-if="store.currentSection" class="flex w-full justify-between">
          <div class="flex items-center gap-2">
            <span>{{ store.currentSection?.name }}</span>
            <svg width="12" height="12" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 2L6 5L3 8" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="font-semibold">{{ store.currentMenu?.name }}</span>
          </div>
          <div v-if="store.sublinks.length" class="relative">
            <div @click="showSublinks = !showSublinks">On this page</div>
            <transition name="appear">
              <div
                v-if="showSublinks"
                class="absolute top-[50px] right-0 bg-background w-auto text-nowrap border dark:border-slate-700 rounded-lg p-2 flex flex-col gap-2"
              >
                <div
                  v-for="sublink in store.sublinks"
                  :key="sublink.title"
                  @click="scrollToLink(sublink.element)"
                >
                  {{ sublink.title }}
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div v-else>Home</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.appear-enter-active {
  transition: all 0.3s ease;
}
.appear-leave-active {
  transition: all 0.1s ease;
}
.appear-enter-from, .appear-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>

