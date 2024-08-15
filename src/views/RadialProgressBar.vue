<script setup>
import PageLayout from '../layout/PageLayout.vue';
import RadialProgressBarComponent from '../components/templates/RadialProgressBarComponent.vue';
import PreviewBlock from '../components/templates/PreviewBlock.vue';

import { getSubLinks } from '../utils';
import { ref, onMounted } from 'vue';

const sublinks = ref([]);

onMounted(() => {
  sublinks.value = getSubLinks();
});

const progress = ref(0);

const increaseProgress = () => {
  if (progress.value + 10 <= 100) {
    progress.value += 10;
  } else {
    progress.value = 100;
  }
};

const decreaseProgress = () => {
  if (progress.value - 10 >= 0) {
    progress.value -= 10;
  } else {
    progress.value = 0;
  }
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
  <PageLayout :sublinks="sublinks">
    <template #subtitle>
      Radial Progress Bar with Tailwind CSS.
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <PreviewBlock :template-code="componentCode" file-name="RadialProgressbar.vue">
            <RadialProgressBarComponent :progress="progress + 10" />
            <RadialProgressBarComponent :progress="progress + 20" />
            <RadialProgressBarComponent :progress="progress + 40" />
            <div class="flex flex-col gap-2">
              <button class="bg-primary/20 px-2 py-1 rounded-lg" @click="increaseProgress">+ 10</button>
              <button class="bg-red-500/20 px-2 py-1 rounded-lg" @click="decreaseProgress">- 10</button>
            </div>
        </PreviewBlock>
        <h3 class="text-lg font-bold sublink">How to use?</h3>
        <p>Import in the component you want to use and configure the props.</p>
        <PreviewBlock :template-code="exampleUsageCode" file-name="App.vue" />
      </div>
    </template>
  </PageLayout>
</template>