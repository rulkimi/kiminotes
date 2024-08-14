<script setup>
import PageLayout from '../layout/PageLayout.vue';
import FormInput from '../components/templates/FormInput.vue';
import FormTextarea from '../components/templates/FormTextarea.vue';
import FormSelect from '../components/templates/FormSelect.vue';

import { ref } from 'vue';

const inputValue = ref('');
const selectedValue = ref('Hello');
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
      <FormSelect
        v-model="selectedValue"
        id="form-select"
        :options="['Hello', 'My name']"
      />
    </template>
  </PageLayout>
</template>