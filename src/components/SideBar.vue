<script setup>
import { useMainStore } from '../store';
const store = useMainStore();
</script>

<template>
  <div class="border-r h-[calc(100vh-3.5rem)] text-nowrap w-[300px]">
    <div class="w-full p-6">

      <div class="flex flex-col gap-6">
        <div v-for="section in store.sections" class="flex flex-col gap-2">
          <div class="font-semibold">{{ section.name }}</div>
          <ul class="flex flex-col gap-0">
            <li
              v-for="menu in section.menus"
              :key="menu.path"
              class="pl-4 border-l"
              :class="{ 'text-primary border-primary font-semibold' : menu.path === store.currentPath }"
            >
              <router-link
                :to="menu.path"
                @click="store.setCurrentPath(menu.path)"
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