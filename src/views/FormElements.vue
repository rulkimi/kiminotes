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
    </template>

    <template #content>
      <div class="flex flex-col gap-2">
        <FormInput
          label="Form Input"
          id="form-input"
          placeholder="Type here"
          v-model="inputValue"
        />
        <FormTextarea
          label="Textarea"
          id="form-textarea"
          placeholder="Type here"
          v-model="inputValue"
        />
        <FormSelect
          label="Select"
          v-model="selectedValue"
          id="form-select"
          :options="['Hello', 'My name']"
        />
      </div>
    </template>
  </PageLayout>
</template>