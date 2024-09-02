<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { RadialProgressBarComponent, PreviewBlock } from '@/components/templates';

import { ref } from 'vue';

const progress = [ref(10), ref(20), ref(40)];

const adjustProgress = (amount) => {
  progress.forEach((p) => {
    p.value = Math.min(Math.max(p.value + amount, 0), 100);
  });
};

const increaseProgress = () => adjustProgress(10);
const decreaseProgress = () => adjustProgress(-10);

const reset = () => {
  progress[0].value = 10;
  progress[1].value = 20;
  progress[2].value = 40;
};

const componentCode = `<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 60
  },
  color: {
    type: String,
    default: 'text-primary'
  },
  radius: {
    type: Number,
    default: 40 
  },
  progress: {
    type: Number,
    default: 0
  }
});

const strokeWidth = 10;
const clampedProgress = computed(() => Math.min(100, Math.max(0, props.progress)));
const circumference = computed(() => Number((2 * Math.PI * props.radius).toFixed(1)));
const strokeDashOffset = computed(() => circumference.value - (circumference.value * clampedProgress.value) / 100);
const viewBoxSize = computed(() => props.radius * 2 + strokeWidth * 2);
<\/script>

<template>
  <div :style="{ width: \`\${size}px\`, height: \`\${size}px\` }">
    <svg :viewBox="\`0 0 \${viewBoxSize} \${viewBoxSize}\`">
      <circle
        class="text-gray-200 stroke-current"
        :stroke-width="strokeWidth"
        :cx="viewBoxSize / 2"
        :cy="viewBoxSize / 2"
        :r="props.radius"
        fill="transparent"
      />
      <circle
        class="progress-ring__circle stroke-current"
        :class="color"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        :cx="viewBoxSize / 2"
        :cy="viewBoxSize / 2"
        :r="props.radius"
        fill="transparent"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashOffset"
      />
      <text
        :x="viewBoxSize / 2"
        :y="viewBoxSize / 2"
        font-size="16"
        text-anchor="middle"
        alignment-baseline="middle"
      >
        {{ clampedProgress }}%
      </text>
    </svg>
  </div>
<\/template>

<style scoped>
.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
<\/style>
`;

const exampleUsageCode = `<script setup>
// make sure the path is correct
import RadialProgressbar from './components/RadialProgressbar.vue';

import { ref } from 'vue';

const progress = ref(0);

setInterval(() => {
  progress.value += 10;
}, 1000);
<\/script>

<template>
  <RadialProgressbar
    :progress="progress"
    :size="100"
    color="text-red-500"
    :radius="40"
  /> 
<\/template>
`;
</script>

<template>
  <PageLayout>
    <template #subtitle>
      Radial Progress Bar with Tailwind CSS.
    </template>
    <template #content>
      <div class="flex flex-col gap-4">

        <h3 class="text-lg font-bold sublink">The component code</h3>
        <PreviewBlock :template-code="componentCode" file-name="RadialProgressbar.vue">
          <div class="flex flex-col md:flex-row gap-4">
            <div class="flex gap-4">
              <RadialProgressBarComponent :size="70" :progress="progress[0].value" />
              <RadialProgressBarComponent :size="70" :progress="progress[1].value" />
              <RadialProgressBarComponent :size="70" :progress="progress[2].value" />
            </div>
            <div class="flex flex-col gap-2">
              <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg" @click="increaseProgress">+ 10</button>
              <button class="bg-red-500/20 hover:bg-red-500/30 px-2 py-1 rounded-lg" @click="decreaseProgress">- 10</button>
            </div>
            <div>
              <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg" @click="reset">Reset</button>
            </div>
          </div>
        </PreviewBlock>

        <h3 class="text-lg font-bold sublink">How to use?</h3>
        <p>Import in the component you want to use and configure the props.</p>
        <PreviewBlock :template-code="exampleUsageCode" file-name="App.vue" />

      </div>
    </template>
  </PageLayout>
</template>