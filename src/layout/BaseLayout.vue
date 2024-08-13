<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
  <NavBar />
  <div class="max-w-[1280px] mx-auto">
    <div class="flex">
      <SideBar />
      <div class="w-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>