<script setup>
import PageLayout from '../layout/PageLayout.vue';
import PreviewBlock from '../components/templates/PreviewBlock.vue';

import { ref } from 'vue';

const scriptCode = ref(`const scroll = (refName) => {
  if (sectionRefs[refName]?.value) {
    const element = sectionRefs[refName].value;
    const navbarHeight = navbar.value.offsetHeight || 0;
    // Calculate the offset position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};`);
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Get element height by using <span class="font-mono">offsetHeight()</span>
      and offset the scroll using
      <span class="font-mono">getBoundingClientRect()</span>
    </template>

    <template #content>
      <PreviewBlock :script-code="scriptCode" />
    </template>
  </PageLayout>
</template>