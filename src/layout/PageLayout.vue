<script setup>
import { computed } from 'vue';
import { useMainStore } from '../store'; // Adjust the path as needed

defineProps({
  sublinks: Array
});

const store = useMainStore();

const currentSection = computed(() => store.currentSection);

const scrollToLink = element => {
  element.scrollIntoView({ block: 'start', behavior: 'smooth' });
}
</script>

<template>
  <div class="grid grid-cols-4">
    <div class="col-span-4 lg:col-span-3 custom-scroll overflow-y-auto h-[calc(100vh-3.5rem)]">
      <div class="p-6" v-if="currentSection">
        <p class="text-primary font-semibold mb-2">{{ currentSection.name }}</p>
        <h1 class="text-2xl font-bold mb-2">
          {{ currentSection.menus.find(menu => menu.path === store.currentPath).name }}
        </h1>
        <p class="text-lg mb-2">
          <slot name="subtitle"></slot>
        </p>
        <slot name="content"></slot>
      </div>
      <div v-else>
        <p>Coming soon.</p>
      </div>
    </div>
    <div class="hidden lg:block p-6 sticky top-0 self-start">
      On this page
      <div
        v-for="sublink in sublinks"
        @click="scrollToLink(sublink.element)"
      >
        {{ sublink.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar styling */
.custom-scroll::-webkit-scrollbar {
  width: 4px;
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #ccc;
  border-radius: 4px;
}

.custom-scroll::-webkit-scrollbar-thumb:hover {
  background-color: #aaa;
}
</style>
