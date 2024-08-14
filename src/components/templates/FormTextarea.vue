<script setup>
import { defineEmits, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'change']);

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
</script>

<template>
  <fieldset :class="width" class="mb-2">
    <div v-if="label" class="block">
      <label
        :for="id"
        class="mb-2 text-sm font-medium text-black/60"
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
        class="block py-3 outline-none bg-input-color"
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
        {{ readonly ? currentCharCount + ' characters' : `${currentCharCount} / ${maxChars}` }}
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
</template>

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
</style>
