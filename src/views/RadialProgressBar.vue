<script setup>
import PageLayout from '../layout/PageLayout.vue';
import RadialProgressBarComponent from '../components/templates/RadialProgressBarComponent.vue';
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Radial Progress Bar with Tailwind CSS.
    </template>
    <template #content>
      <RadialProgressBarComponent />
    </template>
  </PageLayout>
</template>