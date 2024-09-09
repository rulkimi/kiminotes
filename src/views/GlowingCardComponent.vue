<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { GlowingCard, PreviewBlock } from '@/components/templates';

import { ref } from 'vue';

const componentCode = ref(`<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'w-80 h-36'
  },
  circleSize: {
    type: String,
    default: '700px'
  }
});

const position = ref({ x: 0, y: 0 });
const isHovering = ref(false);

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  position.value.x = event.clientX - rect.left;
  position.value.y = event.clientY - rect.top;
  isHovering.value = true;
}

function handleMouseLeave() {
  isHovering.value = false;
}

const glowStyle = computed(() => ({
  top: \`\${position.value.y}px\`,
  left: \`\${position.value.x}px\`,
  transform: 'translate(-50%, -50%)',
  background: \`radial-gradient(\${props.color}, transparent, transparent)\`,
  width: props.circleSize,
  height: props.circleSize,
  opacity: isHovering.value ? 1 : 0,
  transition: 'opacity 0.5s, top 0s, left 0s', // smooth opacity change without repositioning
}));
<\/script>

<template>
  <div
    class="relative bg-gray-800 rounded-2xl overflow-hidden group"
    :class="size"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="absolute rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      :style="glowStyle"
    ></div>
    <div class="absolute inset-[2px] rounded-2xl bg-gray-800 bg-opacity-90 p-4">
      <slot></slot>
    </div>
  </div>
</template>
`);

const exampleCode = ref(`<GlowingCard size="w-64 h-40" color="hsl(120, 100%, 50%)" circle-size="500px">
  Hover here
</GlowingCard>
<GlowingCard size="w-56 h-32" color="rgba(255, 0, 0, 0.8)" circle-size="450px">
  Continue here
</GlowingCard>
<GlowingCard size="w-48 h-36" color="#FF5733" circle-size="400px">
  ...and here
</GlowingCard>
`);
</script>

<template>
  <PageLayout>

    <template #subtitle>
      Glowing cornder hover effects with Tailwind CSS.
    </template>

    <template #content>
      <div class="flex flex-col gap-4">

        <h3 class="text-lg font-bold sublink">The component code</h3>
        <PreviewBlock :template-code="componentCode" file-name="GlowingCard.vue">
          <div class="flex flex-col md:flex-row gap-4 text-white bg-grid bg-gray-800 p-8 rounded-xl">
            <GlowingCard size="w-48 h-36" color="red" circle-size="400px">
              Hover here
            </GlowingCard>
            <GlowingCard size="w-48 h-36" color="yellow" circle-size="400px">
              Continue here
            </GlowingCard>
            <GlowingCard size="w-48 h-36" color="green" circle-size="400px">
              ...and here
            </GlowingCard>
          </div>
        </PreviewBlock>

        <h3 class="text-lg font-bold sublink">How to use?</h3>
        <p>
          The <span class="font-mono">GlowingCard</span> component is customizable using the following props:
          <ul class="list-disc list-inside">
            <li><span class="font-mono">size:</span> Controls the dimensions of the card. You need to use Tailwind CSS classes like <span class="font-mono">w-48 h-36</span> to set the width and height.</li>
            <li><span class="font-mono">color:</span> Defines the color of the glowing effect. You can pass any valid CSS color value such as HEX (<span class="font-mono">"#FF0000"</span>), RGB (<span class="font-mono">"rgb(255, 0, 0)"</span>), or HSL (<span class="font-mono">"hsl(0, 100%, 50%)"</span>), as well as named colors like <span class="font-mono">"red"</span>.</li>
            <li><span class="font-mono">circleSize:</span> Adjusts the size of the glowing circle. Set this prop to control how large the glow extends beyond the card, with values like <span class="font-mono">"400px"</span> or <span class="font-mono">"700px"</span>.</li>
          </ul>
          By modifying these props, you can easily adapt the look and feel of the <span class="font-mono">GlowingCard</span> to suit different design needs.
        </p>
        <p class="mt-2">
          <strong>Note:</strong> For the best visual effect, it is recommended to use the <span class="font-mono">GlowingCard</span> in a dark-themed layout or background. The glowing effect stands out more prominently against dark surfaces, enhancing the overall visual appeal.
        </p>
        <PreviewBlock :template-code="exampleCode">
          <div class="flex flex-col md:flex-row gap-4 text-white">
            <GlowingCard size="w-64 h-40" color="hsl(120, 100%, 50%)" circle-size="500px">
              Hover here
            </GlowingCard>
            <GlowingCard size="w-56 h-32" color="rgba(255, 0, 0, 0.8)" circle-size="450px">
              Continue here
            </GlowingCard>
            <GlowingCard size="w-48 h-36" color="#FF5733" circle-size="400px">
              ...and here
            </GlowingCard>
          </div>
        </PreviewBlock>

      </div>
    </template>

  </PageLayout>
</template>