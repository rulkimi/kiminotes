<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { FormInput, FormTextarea, FormSelect, PreviewBlock } from '@/components/templates';

import { ref } from 'vue';

const inputValue = ref('');
const selectedValue = ref('Hello');

const formInputComponentCode = ref(`<script setup>
import { defineEmits, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'input', 'change']);

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    required: true
  },
  label: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    required: false
  },
  labelClass: {
    type: String,
    required: false
  },
  isBlock: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: 'w-full'
  }
});

const slots = useSlots();

const updateValue = event => {
  emit('update:modelValue', event.target.value);
  emit('input', event.target.value);
}

const onChange = event => {
  emit('change', event.target.value);
}

const hasPrependIcon = computed(() => {
  return slots['prepend-icon'];
});

const hasAppendIcon = computed(() => {
  return slots['append-icon'];
});

const conditionalInputStyles = computed(() => {
  return {
    'border': (props.error || props.errorMessage) && !props.readonly,
    'border-red-300': props.error || props.errorMessage,
    'opacity-50 cursor-not-allowed': props.disabled,
    'pl-10': props.hasPrependIcon,
    'pr-10': props.hasAppendIcon,
  };
});

<\/script>

<template>
  <fieldset :class="width">
    <div v-if="label" class="block mb-2">
      <label
        :for="id"
        class="text-sm font-medium text-black/60 dark:text-white/60"
        :class="labelClass"
      >
        {{ label }}
      </label>
      <span v-if="required && !readonly" class="ml-1 text-red-500">*</span>
    </div>
    <div
      class="relative items-center h-[40px] bg-white"
      :class="[
        inputClass,
        width,
        conditionalInputStyles,
        isBlock ? 'flex' : 'inline-flex',
        readonly ? 'border-b break-words !bg-transparent' : 'rounded-lg px-3'
      ]"
    >
      <div v-if="hasPrependIcon" class="absolute left-3 text-gray-500">
        <slot name="prepend-icon"></slot>
      </div>
      <div v-if="hasAppendIcon" class="absolute right-3 text-gray-500">
        <slot name="append-icon"></slot>
      </div>
      <input
        v-bind="$attrs"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="updateValue($event)"
        @change="onChange($event)"
        class="block outline-none bg-transparent text-black"
        :class="[width, { 'no-arrows': type === 'number' }]"
        :disabled="disabled"
        :readonly="readonly"
      >
    </div>
    <transition name="shake-fade">
      <small
        v-if="errorMessage"
        class="block text-red-400"
        :class="{ 'opacity-50' : disabled }"
      >
        {{ errorMessage }}
      </small>
    </transition>
  </fieldset>
<\/template>

<style scoped>
.no-arrows::-webkit-outer-spin-button,
.no-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrows {
  -moz-appearance: textfield;  /* Firefox */
  -webkit-appearance: none;    /* Chrome, Safari, Opera */
  appearance: none;            /* Standard */
}

/* Hides the arrows in Internet Explorer and Edge */
.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.shake-fade-enter-active {
  animation: shake 0.5s ease;
}
.shake-fade-leave-active {
  transition: all 0.5s ease;
}
.shake-fade-enter-from, .shake-fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}

input::placeholder {
  height: 40px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
<\/style>
`);

const formTextareaComponentCode = ref(`<script setup>
import { defineEmits, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'input', 'change']);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    required: false
  },
  labelClass: {
    type: String,
    required: false
  },
  isBlock: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: 'w-full'
  },
  rows: {
    type: Number,
    default: 4
  },
  maxChars: {
    type: Number,
    required: false,
  },
  resizable: {
    type: Boolean,
    default: false
  }
});

const updateValue = event => {
  emit('update:modelValue', event.target.value);
  emit('input', event.target.value);
}

const onChange = event => {
  emit('change', event.target.value);
}

const slots = useSlots();

const hasPrependIcon = computed(() => {
  return slots['prepend-icon'];
});

const hasAppendIcon = computed(() => {
  return slots['append-icon'];
});

const baseInputStyles = computed(() => {
  return [props.inputClass, props.width]
});

const conditionalInputStyles = computed(() => {
  return {
    'border': (props.error || props.errorMessage) && !props.readonly,
    'border-red-300': props.error || props.errorMessage,
    'opacity-50 cursor-not-allowed': props.disabled,
    'border-b break-words !bg-transparent': props.readonly,
    'rounded-lg px-3': !props.readonly,
    'pl-10': props.hasPrependIcon,
    'pr-10': props.hasAppendIcon,
    'resize-none' : !props.resizable
  };
});

const currentCharCount = computed(() => {
  return props.modelValue.length;
});
<\/script>

<template>
  <fieldset :class="width">
    <div v-if="label" class="block mb-2">
      <label
        :for="id"
        class="text-sm font-medium text-black/60 dark:text-white/60"
        :class="labelClass"
      >
        {{ label }}
      </label>
      <span v-if="required && !readonly" class="ml-1 text-red-500">*</span>
    </div>
    <div class="relative items-start" :class="isBlock ? 'flex' : 'inline-flex'">
      <div v-if="hasPrependIcon" class="absolute left-3 top-3 text-gray-500">
        <slot name="prepend-icon"></slot>
      </div>
      <div v-if="hasAppendIcon" class="absolute right-3 top-3 text-gray-500">
        <slot name="append-icon"></slot>
      </div>
      <textarea
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="updateValue($event)"
        @change="onChange($event)"
        class="block py-3 outline-none text-black"
        :class="[
          baseInputStyles,
          conditionalInputStyles
        ]"
        :rows="rows"
        :disabled="disabled"
        :maxLength="maxChars"
        :readonly="readonly"
      ></textarea>
      <small
        v-if="maxChars"
        class="absolute bottom-1 right-3 text-xs p-1 rounded"
        :class="{ 'text-red-500': currentCharCount > maxChars, 'text-gray-400': currentCharCount <= maxChars }"
      >
        {{ readonly ? currentCharCount + ' characters' : \`\${currentCharCount} / \${maxChars}\` }}
      </small>
    </div>
    <div class="flex justify-between w-full">
      <transition name="shake-fade">
        <small
          v-if="errorMessage"
          class="text-red-400"
          :class="{ 'opacity-50' : disabled }"
        >
          {{ errorMessage }}
        </small>
      </transition>
    </div>
  </fieldset>
<\/template>

<style scoped>
.shake-fade-enter-active {
  animation: shake 0.5s ease;
}
.shake-fade-leave-active {
  transition: all 0.5s ease;
}
.shake-fade-enter-from, .shake-fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}
<\/style>
`);
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Form elements with set of styles and props.
    </template>

    <template #content>
      <div class="flex flex-col gap-4">

        <h3 class="text-lg font-bold sublink">Input Element</h3>
        <PreviewBlock :template-code="formInputComponentCode" file-name="FormInput.vue">
          <FormInput
            label="Label"
            id="form-input"
            placeholder="Placeholder"
            v-model="inputValue"
          />
        </PreviewBlock>

        <h3 class="text-lg font-bold sublink">Textarea Element</h3>
        <PreviewBlock :template-code="formTextareaComponentCode" file-name="FormTextarea.vue">
          <FormTextarea
            label="Label"
            id="form-textarea"
            placeholder="Placeholder"
            v-model="inputValue"
          />
        </PreviewBlock>
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