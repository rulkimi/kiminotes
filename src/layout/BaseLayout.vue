<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
  <NavBar />
  <div class="max-w-[1280px] mx-auto">
    <div class="flex">
      <SideBar />
      <div class="w-full p-6">
        <div class="grid grid-cols-4">
          <div class="col-span-3">
            <slot></slot>
          </div>
          <div class="py-6 pl-6">On this page</div>
        </div>
      </div>
    </div>
  </div>
</template>