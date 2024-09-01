<script setup>
import { useMainStore } from '@/store';
const store = useMainStore();

const clickLink = path => {
  store.setCurrentPath(path);
  store.toggleSidebar();
}
</script>

<template>
  <!-- Sidebar -->
  <div
    :class="{
      'translate-x-0': store.isSidebarOpen,
      '-translate-x-full': !store.isSidebarOpen
    }"
    class="fixed top-0 left-0 w-[300px] h-full bg-background transition-transform transform md:translate-x-0 md:relative md:sticky md:top-[3.5rem] md:h-[calc(100vh-3.5rem)] border-r dark:border-slate-700 overflow-auto text-nowrap z-10"
  >
    <div class="w-full p-6">

      <div class="flex flex-col gap-5">
        <div v-for="(section, index) in store.sections" class="flex flex-col gap-2">
          <div class="font-semibold flex justify-between">
            <span>{{ section.name }}</span>
            <span class="block md:hidden" v-if="index === 0" @click="store.toggleSidebar">Close</span>
          </div>
          <ul class="flex flex-col gap-0">
            <li
              v-for="menu in section.menus"
              :key="menu.path"
              class="pl-4 border-l dark:border-slate-700"
              :class="{ 'text-primary border-primary dark:!border-primary font-semibold' : menu.path === store.currentPath }"
            >
              <router-link
                :to="menu.path"
                @click="clickLink(menu.path)"
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
