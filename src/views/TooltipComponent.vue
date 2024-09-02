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
  },
  noArrow: {
    type: Boolean,
    default: false,
  }
});

const active = ref(false);
const timeout = ref(null);
const slotRef = ref(null);
const arrowPosition = ref('left');

const showTip = () => {
  const slotElement = slotRef.value.nextElementSibling;
  const { top, left, right, height } = slotElement.getBoundingClientRect();

  timeout.value = setTimeout(() => {
    active.value = true;
    // adjust tooltip position based on slotElement's position
    nextTick(() => {
      const tooltip = document.querySelector('.tooltip-tip');
      tooltip.style.setProperty('--arrow-color', getComputedStyle(tooltip).backgroundColor);
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
      const overflowCheck = (position) => {
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

        const directionMap = {
          top: 'bottom',
          bottom: 'top',
          left: 'right',
          right: 'left'
        };

        // check for both left and right overflow
        if (isOverflowing.left && isOverflowing.right) {
          return space.top > space.bottom ? 'top' : 'bottom';
        }

        // check for both top and bottom overflow
        if (isOverflowing.top && isOverflowing.bottom) {
          return space.left > space.right ? 'right' : 'left';
        }

        return isOverflowing[position] ? directionMap[position] : position;
      };

      const adjustedDirection = overflowCheck(props.direction);
      arrowPosition.value = {
        right: 'left',
        left: 'right',
        top: 'bottom',
        bottom: 'top'
      }[adjustedDirection] || adjustedDirection;
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
          'tooltip-tip fixed z-50 text-start text-sm transform p-2 shadow-md rounded-lg',
          width,
          direction,
          customStyles || (theme === 'dark' ? 'bg-black text-white font-light border-black' : 'bg-white border border-gray-300 text-black')
        ]"
      >
        <div
          v-if="!noArrow"
          class="tooltip-arrow"
          :class="\`arrow-\${arrowPosition}\`"
        ></div>
        <slot name="content">{{ content }}</slot>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-top {
  border-width: 5px 5px 0;
  border-color: var(--arrow-color, black) transparent transparent transparent; 
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow-bottom {
  border-width: 0 5px 5px;
  border-color: transparent transparent var(--arrow-color, black) transparent;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow-left {
  border-width: 5px 5px 5px 0;
  border-color: transparent var(--arrow-color, black) transparent transparent;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-right {
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent var(--arrow-color, black);
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
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

const customStylesCode = ref(`<template>
  <Tooltip
    content="I have indigo background and white bolded text color!" 
    custom-styles="bg-indigo-500 text-white font-bold"
  >
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>`
);

const customHTMLCode = ref(`<template>
  <Tooltip theme="light" direction="bottom">
    <template #content>
      <div class="p-4 bg-white rounded shadow-lg max-w-xs">
        <!-- FontAwesome icon and text -->
        <div class="flex items-center mb-2">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-green-500 mr-2" />
          <span class="text-gray-700 font-medium">Today is {{ new Date().toDateString() }}. I can add icons!</span>
        </div>

        <!-- Additional HTML content -->
        <div class="mt-4">
          <p class="text-sm text-gray-600 mb-2">Here's a list of tasks for today:</p>
          <ul class="list-disc list-inside text-gray-700">
            <li>Meeting at 10 AM</li>
            <li>Lunch with client</li>
            <li>Project deadline</li>
          </ul>
        </div>

        <!-- Tailwind CSS table -->
        <table class="mt-4 w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-2 py-1">Task</th>
              <th scope="col" class="px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="px-2 py-1">Design Mockup</td>
              <td class="px-2 py-1 text-green-600">Completed</td>
            </tr>
            <tr class="bg-white">
              <td class="px-2 py-1">Client Review</td>
              <td class="px-2 py-1 text-red-600">Pending</td>
            </tr>
          </tbody>
        </table>

        <!-- Image with Tailwind styling -->
        <p class="text-sm text-gray-600 mt-2">JUST CATS</p>
        <div class="flex mt-4">
          <img src="@/assets/cute-cat-2.png" alt="Sample Image" class="w-24 h-40 rounded shadow-lg mx-auto" />
          <img src="@/assets/cute-cat.png" alt="Sample Image" class="w-24 h-40 rounded shadow-lg mx-auto" />
        </div>
      </div>
    </template>
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>
`)
</script>

<template>
  <PageLayout :sublinks="sublinks">

    <template #subtitle>
      Tooltip component with Tailwind CSS.
    </template>

    <template #content>
      <div class="flex flex-col gap-4">

        <h3 class="text-lg font-bold sublink">The component code</h3>
        <PreviewBlock :template-code="tooltipCode" file-name="Tooltip.vue">
          <Tooltip content="I'm hovered" >
            <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
          </Tooltip>
        </PreviewBlock>
        <h3 class="text-lg font-bold sublink">Tooltip Direction and Theme</h3>
        <p>
          The tooltip direction can be changed by configuring the <span class="font-mono">direction</span> prop.
          Light and dark themes are also available by configuring the <span class="font-mono">theme</span> prop.
        </p>

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

        <h3 class="text-lg font-bold sublink">Customizing the styles</h3>
        <p>You can customize the background and text color by using the <span class="font-mono">custom-styles</span> prop.</p>
        <PreviewBlock :template-code="customStylesCode">
          <Tooltip
            content="I have indigo background and white bolded text color!" 
            custom-styles="bg-indigo-500 text-white font-bold"
          >
            <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
          </Tooltip>
        </PreviewBlock>

        <h3 class="text-lg font-bold sublink">Customizing with HTML</h3>
        <p>
          Want to do more than just customizing the background and the text color? You can even use html to write the content by wrapping
          it inside <span class="font-mono">&lt;template #content&gt;...&lt;/template&gt;</span>
        </p>
        <PreviewBlock :template-code="customHTMLCode">
          <Tooltip theme="light" direction="bottom">
            <template #content>
              <div class="p-4 bg-white rounded shadow-lg max-w-xs">
                <!-- FontAwesome icon and text -->
                <div class="flex items-center mb-2">
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-green-500 mr-2" />
                  <span class="text-gray-700 font-medium">Today is {{ new Date().toDateString() }}. I can add icons!</span>
                </div>

                <!-- Additional HTML content -->
                <div class="mt-4">
                  <p class="text-sm text-gray-600 mb-2">Here's a list of tasks for today:</p>
                  <ul class="list-disc list-inside text-gray-700">
                    <li>Meeting at 10 AM</li>
                    <li>Lunch with client</li>
                    <li>Project deadline</li>
                  </ul>
                </div>

                <!-- Tailwind CSS table -->
                <table class="mt-4 w-full text-sm text-left text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-2 py-1">Task</th>
                      <th scope="col" class="px-2 py-1">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b">
                      <td class="px-2 py-1">Design Mockup</td>
                      <td class="px-2 py-1 text-green-600">Completed</td>
                    </tr>
                    <tr class="bg-white">
                      <td class="px-2 py-1">Client Review</td>
                      <td class="px-2 py-1 text-red-600">Pending</td>
                    </tr>
                  </tbody>
                </table>

                <!-- Image with Tailwind styling -->
                <p class="text-sm text-gray-600 mt-2">JUST CATS</p>
                <div class="flex mt-4">
                  <img src="@/assets/cute-cat-2.png" alt="Sample Image" class="w-24 h-40 rounded shadow-lg mx-auto" />
                  <img src="@/assets/cute-cat.png" alt="Sample Image" class="w-24 h-40 rounded shadow-lg mx-auto" />
                </div>
              </div>
            </template>
            <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
          </Tooltip>
        </PreviewBlock>

      </div>
    </template>
  </PageLayout>
</template>