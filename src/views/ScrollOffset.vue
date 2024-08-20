<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { PreviewBlock } from '@/components/templates';

import { ref } from 'vue';

const templateCode = ref(`<template>
  <nav ref="navbar" class="fixed pb-2 w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div class="flex items-center">
          <ul class="items-center flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row">
            <li v-for="menu in menus">
              <a
                href="#"
                class="block py-2 px-3 text-text md:p-0"
                @click.prevent="scroll(menu.ref)"
              >
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
<\/template>
`);

const scriptCode = ref(`import { ref, inject } from 'vue';
import BaseButton from './BaseButton.vue';

const navbar = ref(null);
const menus = ref([
  { name: 'About', ref: 'about'},
  { name: 'Projects', ref: 'projects'},
  { name: 'Aspirations', ref: 'aspirations'},
]);

const sectionRefs = inject('sectionRefs');

const scroll = (refName) => {
  if (sectionRefs[refName]?.value) {
    const element = sectionRefs[refName].value;
    const navbarHeight = navbar.value.offsetHeight || 0;

    // Calculate the offset position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
`);
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Get element height by using <span class="font-mono">offsetHeight()</span>
      and offset the scroll using
      <span class="font-mono">getBoundingClientRect()</span>
    </template>

    <template #content>
      <PreviewBlock :script-code="scriptCode" :template-code="templateCode" />
    </template>
  </PageLayout>
</template>