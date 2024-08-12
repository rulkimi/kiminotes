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
    <ul class="flex flex-col gap-0 w-full p-4">
      <li
        v-for="menu in menus"
        :key="menu.path"
        class="pl-4 border-l"
        :class="{ 'text-primary border-primary' : menu.path === currentPath }"
      >
        <router-link
          :to="menu.path"
          @click="currentPath = menu.path"
        >
          {{ menu.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>