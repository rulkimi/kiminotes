<script setup>
import { Tooltip } from '@/components/templates';
</script>

<template>
  Testing the
  <Tooltip theme="light">
    <template #content>
      <font-awesome-icon :icon="['fas', 'times']" />
      HEHEHE
    </template>
    tooltip
  </Tooltip>
</template>