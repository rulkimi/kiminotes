<script setup>
import NavBar from '../components/NavBar.vue';
import SideBar from '../components/SideBar.vue';
</script>

<template>
  <NavBar />
  <div class="max-w-[1280px] mx-auto">
    <div class="flex">
      <SideBar />
      <div class="w-full px-6 pb-6 md:pt-6">
        <div class="grid grid-cols-4">
          <div class="col-span-4 md:col-span-3 mt-6 md:mt-0">
            <slot></slot>
          </div>
          <div class="hidden md:block py-6 pl-6">On this page</div>
        </div>
      </div>
    </div>
  </div>
</template>