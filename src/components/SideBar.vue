<script setup>
import { ref } from 'vue';

const currentPath = ref('/');
const menus = [
  { name: 'Transition for List', path: '/list-transition'},
  { name: 'Scroll Animation', path: '/scroll-animation'},
]
</script>

<template>
  <div class="border-r h-[calc(100vh-3.5rem)] w-[200px]">
    <div class="w-full p-4">
      <div class="mb-2" v-for="menu in menus">
        <router-link
          :class="{ 'text-primary' : menu.path === currentPath }"
          :to="menu.path"
          @click="currentPath = menu.path"
        >
          {{ menu.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>