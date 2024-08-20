<script setup>
import { useRouter } from 'vue-router'
import { useMainStore } from '@/store';
const store = useMainStore();
const router = useRouter();
</script>

<template>
  <!-- desktop view -->
  <div class="sticky top-0 border-b h-14 bg-background/90 z-10">
    <div class="max-w-[1280px] mx-auto h-full p-4">
      <span class="text-lg font-bold" @click="router.push({ path : '/'})">UI Playground</span>
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
            <path d="M3 2L6 5L3 8" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="font-semibold">{{ store.currentMenu?.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
