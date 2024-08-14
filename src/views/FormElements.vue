<script setup>
import PageLayout from '../layout/PageLayout.vue';
import FormInput from '../components/templates/FormInput.vue';
import FormTextarea from '../components/templates/FormTextarea.vue';

import { ref } from 'vue';

const inputValue = ref('');
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Form elements with set of styles and props.
      <FormInput
        id="form-input"
        placeholder="Type here"
        v-model="inputValue"
      />
      <FormTextarea
        id="form-textarea"
        placeholder="Type here"
        v-model="inputValue"
      />
    </template>
  </PageLayout>
</template>