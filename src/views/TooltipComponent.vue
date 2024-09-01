<script setup>
import { Tooltip, PreviewBlock, FormSelect } from '@/components/templates';
import PageLayout from '@/layout/PageLayout.vue';

import { getSubLinks } from '@/utils';
import { ref, onMounted } from 'vue';

const sublinks = ref([]);

onMounted(() => {
  sublinks.value = getSubLinks();
});

const tooltipCode = ref(`<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: false,
  },
  delay: {
    type: Number,
    default: 100,
  },
  direction: {
    type: String,
    default: 'right',
  },
  customStyles: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'dark',
    validator: value => ['dark', 'light'].includes(value),
  },
  width: {
    type: String,
    default: 'max-w-[500px]'
  }
});

const active = ref(false);
const timeout = ref(null);
const slotRef = ref(null);

const showTip = () => {
  const slotElement = slotRef.value.nextElementSibling;
  const { top, left, right, height } = slotElement.getBoundingClientRect();

  timeout.value = setTimeout(() => {
    active.value = true;
    // adjust tooltip position based on slotElement's position
    nextTick(() => {
      const tooltip = document.querySelector('.tooltip-tip');
      const positions = {
        top: { 
          top: \`\${top - (tooltip.offsetHeight + 10)}px\`,
          left: \`\${Math.max(left + (slotElement.offsetWidth / 2) - (tooltip.offsetWidth / 2), 10)}px\` // Prevent overflow on the left
        },
        bottom: {
          top: \`\${top + height + 10}px\`,
          left: \`\${Math.max(left + (slotElement.offsetWidth / 2) - (tooltip.offsetWidth / 2), 10)}px\` // Prevent overflow on the left
        },
        left: {
          top: \`\${top + (height / 2) - (tooltip.offsetHeight / 2)}px\`,
          left: \`\${Math.max(left - tooltip.offsetWidth - 10, 10)}px\` // Prevent overflow on the left
        },
        right: {
          top: \`\${top + (height / 2) - (tooltip.offsetHeight / 2)}px\`,
          left: \`\${Math.min(left + slotElement.offsetWidth + 10, window.innerWidth - tooltip.offsetWidth)}px\` // Prevent overflow on the right
        },
      };
      // check for overflow and adjust position
      const overflowCheck = (pos) => {
        const space = {
          top: top - tooltip.offsetHeight - 10,
          bottom: window.innerHeight - (top + height + 15) - tooltip.offsetHeight,
          left: left - tooltip.offsetWidth,
          right: window.innerWidth - right - tooltip.offsetWidth,
        };

        const isOverflowing = {
          top: space.top < 10,
          bottom: space.bottom < 10,
          left: space.left < 10,
          right: space.right < 10,
        };
        return isOverflowing[pos] ? 
          (pos === 'top' ? 'bottom' : pos === 'bottom' ? 'top' : pos === 'left' ? 'right' : 'left') : pos;
      };

      const adjustedDirection = overflowCheck(props.direction);
      Object.assign(tooltip.style, positions[adjustedDirection]);
    });
  }, props.delay);
};

const hideTip = () => {
  clearTimeout(timeout.value);
  active.value = false;
};
<\/script>

<template>
  <div 
    class="inline-block"
    @mouseenter="showTip"
    @mouseleave="hideTip"
  >
    <!-- Wrapping slot content -->
    <span ref="slotRef" style="display: none;"></span>
    <div>
      <slot></slot>
    </div>
    <!-- Tooltip content -->
    <teleport to="body">
      <div
        v-if="active"
        :class="[
          'tooltip-tip fixed z-50 text-start text-sm transform p-2 border shadow-md rounded-lg',
          width,
          direction,
          customStyles || (theme === 'dark' ? 'bg-black text-white font-light border-black' : 'bg-white border-gray-300 text-black')
        ]"
      >
        <slot name="content">{{ content }}</slot>
      </div>
    </teleport>
  </div>
</template>
`);

const theme = ref('dark');

const directionCode = ref(`<template>
  <Tooltip content="I appear on left" direction="left" theme="${theme.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
  <Tooltip content="I appear on right" direction="right" theme="${theme.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
  <Tooltip content="I appear on top!" direction="top" theme="${theme.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
  <Tooltip content="I appear on bottom!" direction="bottom" theme="${theme.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>
`);
</script>

<template>
  <PageLayout :sublinks="sublinks">
    <template #subtitle>
      Tooltip component with Tailwind CSS.
    </template>
    <template #content>

      <h3 class="text-lg font-bold sublink">How to use?</h3>
      <p>Import in the component you want to use and configure the props.</p>
      <PreviewBlock :template-code="tooltipCode" file-name="Tooltip.vue">
        <div class="grid grid-cols-2 gap-2">
          <Tooltip content="I'm hovered" >
            <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
          </Tooltip>
        </div>
      </PreviewBlock>

      <h3 class="text-lg font-bold sublink">How to use?</h3>
      <p>Import in the component you want to use and configure the props.</p>
      <PreviewBlock :template-code="directionCode" file-name="Tooltip.vue">
        <div class="flex gap-6">
          <div class="grid grid-cols-2 gap-2">
            <Tooltip content="I appear on left" direction="left" :theme="theme">
              <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
            </Tooltip>
            <Tooltip content="I appear on right" direction="right" :theme="theme">
              <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
            </Tooltip>
            <Tooltip content="I appear on top!" direction="top" :theme="theme">
              <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
            </Tooltip>
            <Tooltip content="I appear on bottom!" direction="bottom" :theme="theme">
              <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
            </Tooltip>
          </div>
          <div>
            <span>Theme:</span>
            <div class="flex items-center space-x-4">
              <!-- Light Theme Radio Button -->
              <label for="theme-light" class="flex items-center space-x-2">
                <input
                  type="radio"
                  id="theme-light"
                  value="light"
                  v-model="theme"
                  class="form-radio"
                />
                <span>Light</span>
              </label>

              <!-- Dark Theme Radio Button -->
              <label for="theme-dark" class="flex items-center space-x-2">
                <input
                  type="radio"
                  id="theme-dark"
                  value="dark"
                  v-model="theme"
                  class="form-radio"
                />
                <span>Dark</span>
              </label>
            </div>
          </div>
        </div>
      </PreviewBlock>
    </template>
  </PageLayout>
</template>