<script setup>
import { Tooltip } from '@/components/templates';
import PageLayout from '@/layout/PageLayout.vue';
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Tooltip component with Tailwind CSS.
    </template>
    <template #content>
      Testing the
      <Tooltip theme="light">
        <template #content>
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-green-500" />
          HEHEHE
        </template>
        tooltip
      </Tooltip>
    </template>
  </PageLayout>
</template>