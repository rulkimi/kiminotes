<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { FormInput, FormTextarea, FormSelect, PreviewBlock } from '@/components/templates';

import { ref } from 'vue';

const inputValue = ref('');
const selectedValue = ref('');

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

const formSelectComponentCode = ref(`<script setup>
import { ref, defineEmits, watch, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'change']);

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, Boolean, null],
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
  options: {
    type: Array,
    default: () => []
  },
  optionValue: {
    type: String,
    default: null
  },
  optionLabel: {
    type: String,
    default: null
  },
  returnObject: {
    type: Boolean,
    default: false
  },
  noOptionsMessage: {
    type: String,
    default: 'No options available'
  },
  prefixDisplayValue: {
    type: String,
    default: null
  },
  suffixDisplayValue: {
    type: String,
    default: null
  }
});

const optionsOpen = ref(false);
const displayValue = ref('');
const optionsPositionClass = ref('mt-1');

watch(
  () => props.modelValue,
  (val) => {
    if (props.returnObject && typeof val === 'object') {
      displayValue.value = val[props.optionLabel];
    } else {
      const selectedOption = props.options.find(
        (option) => option[props.optionValue] === val
      );
      displayValue.value = selectedOption ? selectedOption[props.optionLabel] : val;
    }
  },
  { immediate: true }
);

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
  };
});

const toggleOptions = event => {
  optionsOpen.value = !optionsOpen.value;
  if (optionsOpen.value) {
    setOptionsPosition(event);
  }
}

const setOptionsPosition = event => {
  const buttonRect = event.target.getBoundingClientRect();
  const spaceAbove = buttonRect.top;
  const spaceBelow = window.innerHeight - buttonRect.bottom;

  const requiredSpace = (props.options.length || 1 ) * 50 + 10;

  if (spaceBelow < requiredSpace && spaceAbove > spaceBelow) {
    optionsPositionClass.value = 'mb-1 bottom-full';
    document.documentElement.style.setProperty('--translate-y', '10px');
  } else {
    optionsPositionClass.value = 'mt-1';
    document.documentElement.style.setProperty('--translate-y', '-10px');
  }
}

const updateValueByList = (value, label) => {
  displayValue.value = label;
  
  const selectedOption = props.options.find(option => 
    props.optionValue ? option[props.optionValue] === value : option === value
  );

  emit('update:modelValue', props.returnObject ? selectedOption : value);
  emit('change', props.returnObject ? selectedOption : value);
  optionsOpen.value = false;
}
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
    <div class="relative items-center" :class="isBlock ? 'flex' : 'inline-flex'">
      <div v-if="hasPrependIcon" class="absolute left-3 text-gray-500 z-10">
        <slot name="prepend-icon"></slot>
      </div>
      <div v-if="hasAppendIcon" class="absolute right-3 text-gray-500 z-10">
        <slot name="append-icon"></slot>
      </div>
      <div v-if="!readonly" class="relative w-full">
        <button
          @click="toggleOptions"
          :id="id"
          class="rounded-lg block py-3 h-[50px] flex justify-between items-center bg-white"
          :class="[
            baseInputStyles,
            conditionalInputStyles,
          ]"
          :disabled="disabled"
        >
          <div class="text-start truncate mt-1">
            <span v-if="displayValue">
              <span v-if="props.prefixDisplayValue">{{ props.prefixDisplayValue }}</span>
              <span class="text-black">{{ displayValue }}</span>
              <span v-if="props.suffixDisplayValue">suffixDisplayValue</span>
            </span>
            <span v-else class="text-gray-400">{{ placeholder }}</span>
          </div>
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="transition-transform duration-200"
            :class="{
              'rotate-180': optionsOpen
            }"
          />
        </button>
        <transition name="dropdown-fade">
          <div
            v-if="optionsOpen"
            class="absolute bg-white border shadow-lg w-full z-10 rounded-lg max-h-[200px] overflow-auto"
            :class="optionsPositionClass"
          >
            <div v-if="props.options.length === 0" class="p-3 h-[50px] flex justify-center items-center text-gray-500">
              {{ noOptionsMessage }}
            </div>
            <div
              v-else
              v-for="(option, index) in props.options"
              :key="optionValue ? option[optionValue] : option"
              class="p-3 h-[50px] cursor-pointer hover:bg-gray-200 flex justify-between items-center"
              @click="updateValueByList(optionValue ? option[optionValue] : option, optionLabel ? option[optionLabel] : option)"
              :class="{
                'rounded-t-lg': index === 0, 
                'rounded-b-lg': index === options.length - 1
              }"
            >
              <span class="text-black">{{ optionLabel ? option[optionLabel] : option }}</span>
            </div>
          </div>
        </transition>
      </div>
      <input
        v-else
        :id="id"
        v-model="displayValue"
        class="block py-3 h-[50px] outline-none"
        :class="[
          baseInputStyles,
          conditionalInputStyles
        ]"
        readonly
        :disabled="disabled"
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
</template>

<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
}

option {
    background: none;
    color: inherit;
}

.custom-bg-color {
    background-color: light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3));
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

.dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.3s ease;
}
.dropdown-fade-enter-from, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(var(--translate-y));
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}
</style>
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

        <h3 class="text-lg font-bold sublink">Select Element</h3>
        <PreviewBlock :template-code="formSelectComponentCode" file-name="FormSelect.vue">
          <FormSelect
            label="Label"
            v-model="selectedValue"
            id="form-select"
            placeholder="Select an option"
            :options="['Hello', 'My name']"
          />
        </PreviewBlock>
      </div>
    </template>
  </PageLayout>
</template>