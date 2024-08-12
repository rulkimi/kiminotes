<template>
  <div v-if="currentSection">
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
</template>

<script setup>
import { computed } from 'vue';
import { useMainStore } from '../store'; // Adjust the path as needed

const store = useMainStore();

const currentSection = computed(() => store.currentSection);
</script>
