<script setup>
import { useToastStore } from '@/store';

const toastStore = useToastStore();
</script>

<template>
  <transition name="appear">
    <div
      v-if="toastStore.isToastVisible"
      class="fixed bottom-0 right-0 m-6 z-10 bg-background border p-4 shadow rounded-lg flex items-center gap-2 justify-between min-w-[200px] hover:scale-105 transition-all duration-200"
    >
      <div>Alert Toast</div>
      <font-awesome-icon class="hover:scale-110 cursor-pointer" :icon="['fas', 'times']" @click="toastStore.hideToast"/>
    </div>
  </transition>
</template>

<style scoped>
.appear-enter-active, .appear-leave-active {
  transition: all 0.3s ease-out;
}
.appear-leave-to, .appear-enter-from {
  bottom: -100px;
}
.appear-enter-to, .appear-leave-from {
  bottom: 0px;
}
</style>