<script setup>
import { ref } from 'vue';

const currentPath = ref('/');
const sections = [
  {
    name: 'UI Tips',
    menus: [
      { name: 'Transition for List', path: '/list-transition'},
      { name: 'Scroll Animation', path: '/scroll-animation'},
    ]
  },
]
</script>

<template>
  <div class="border-r h-[calc(100vh-3.5rem)] text-nowrap w-[300px]">
    <div class="w-full p-6">

      <div class="flex flex-col gap-6">
        <div v-for="section in sections" class="flex flex-col gap-2">
          <div class="font-semibold">{{ section.name }}</div>
          <ul class="flex flex-col gap-0">
            <li
              v-for="menu in section.menus"
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
      </div>

    </div>
  </div>
</template>