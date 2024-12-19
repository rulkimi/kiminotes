<script setup>
import { ref } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  allowMultiple: {
    type: Boolean,
    default: false
  }
});

const expandedIndices = ref([]);

const toggle = (index) => {
  if (props.allowMultiple) {
    const idx = expandedIndices.value.indexOf(index);
    if (idx > -1) {
      expandedIndices.value.splice(idx, 1);
    } else {
      expandedIndices.value.push(index);
    }
  } else {
    expandedIndices.value = expandedIndices.value.includes(index) ? [] : [index];
  }
}
</script>

<template>
  <div class="w-full">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="border-x bg-background dark:border-slate-700"
      :class="{
        'border-t rounded-t-lg ': index === 0,
        'border-b rounded-b-lg': index === items.length - 1
      }"
    >
      <div
        class="w-full flex justify-between gap-4 p-4 cursor-pointer hover:text-gray-500"
        @click="toggle(index)"
      >
        <div class="w-full flex justify-between">
          <button type="button">
            <div
              class="flex justify-between w-full items-center gap-2"
              :class="{ 'text-blue-500' : expandedIndices.includes(index) }"
            >
              <slot name="header" :item="item" :index="index">
                <span class="font-semibold">{{ item.header }}</span>
              </slot>
            </div>
          </button>
          <slot name="header-remark" :item="item"></slot>
        </div>
        <div class="flex justify-center items-center">
          <font-awesome-icon 
            :icon="['fas', 'chevron-down']"
            class="transiton-transform duration-200"
            :class="{ 'text-blue-500 rotate-180': expandedIndices.includes(index) }"
          />
        </div>
      </div>
      <div
        class="grid transition-all duration-300 ease-out dark:border-slate-700"
        :class="{
          'border-b': index !== items.length - 1,
          'grid-rows-[0fr]': !expandedIndices.includes(index),
          'grid-rows-[1fr]': expandedIndices.includes(index)
        }"
      >
        <div class="overflow-hidden">
          <div class="px-4 pb-4">
            <slot name="body" :item="item">
              {{ item.body }}
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>