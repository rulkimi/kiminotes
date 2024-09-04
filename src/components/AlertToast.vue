<script setup>
import { useToastStore } from '@/store';

const toastStore = useToastStore();
</script>

<template>
  <transition name="appear" mode="out-in">
    <div
      v-if="toastStore.toasts.length"
      class="fixed bottom-0 right-0 m-6 flex flex-col gap-2"
    >
      <div
        v-for="toast in toastStore.toasts"
        :key="toast.id"
        v-show="toast.isVisible"
        class="z-10 bg-background border p-4 shadow rounded-lg flex items-center gap-2 justify-between min-w-[300px] hover:scale-105 transition-all duration-200"
      >
        <div>{{ toast.message }}</div>
        <font-awesome-icon 
          class="hover:scale-110 cursor-pointer" 
          :icon="['fas', 'times']" 
          @click="() => toastStore.hideToast(toast.id)" 
        />
      </div>
    </div>
  </transition>
</template>

<style scoped>
.appear-enter-active, .appear-leave-active {
  transition: all 0.3s ease-out;
}
.appear-leave-to, .appear-enter-from {
  transform: translateY(100%);
  opacity: 0;
}
.appear-enter-to, .appear-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
