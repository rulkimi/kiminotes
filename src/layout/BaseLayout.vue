<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
  <NavBar />
  <div class="max-w-[1280px] mx-auto">
    <div class="flex">
      <SideBar />
      <div class="w-full p-4">
        <div class="grid grid-cols-4">
          <div class="col-span-3">
            <slot></slot>
          </div>
          <div>On this page</div>
        </div>
      </div>
    </div>
  </div>
</template>