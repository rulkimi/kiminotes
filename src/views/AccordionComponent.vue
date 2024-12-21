<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { PreviewBlock, Accordion } from '@/components/templates';
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Accordion component with Tailwind CSS.
    </template>
    <template #content>
      <Accordion
        :items="[
          { header: 'Section 1', body: 'Content for section 1', remarks: 'Good' },
          { header: 'Section 2', body: 'Content for section 2', remarks: 'Good' },
          { header: 'Section 3', body: 'Content for section 3', remarks: 'Bad' },
        ]"
      >
        <template #header-remark="{item}">
          {{ item.remarks }}
        </template>
      </Accordion>
    </template>
  </PageLayout>
</template>