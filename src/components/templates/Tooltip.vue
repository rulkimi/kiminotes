<script setup>
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
          top: `${top - (tooltip.offsetHeight + 10)}px`,
          left: `${Math.max(left + (slotElement.offsetWidth / 2) - (tooltip.offsetWidth / 2), 10)}px` // Prevent overflow on the left
        },
        bottom: {
          top: `${top + height + 10}px`,
          left: `${Math.max(left + (slotElement.offsetWidth / 2) - (tooltip.offsetWidth / 2), 10)}px` // Prevent overflow on the left
        },
        left: {
          top: `${top + (height / 2) - (tooltip.offsetHeight / 2)}px`,
          left: `${Math.max(left - tooltip.offsetWidth - 10, 10)}px` // Prevent overflow on the left
        },
        right: {
          top: `${top + (height / 2) - (tooltip.offsetHeight / 2)}px`,
          left: `${Math.min(left + slotElement.offsetWidth + 10, window.innerWidth - tooltip.offsetWidth)}px` // Prevent overflow on the right
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
</script>

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
          'tooltip-tip fixed z-50 text-start text-sm transform p-2 rounded-lg',
          width,
          direction,
          customStyles || (theme === 'dark' ? 'bg-black text-white font-light border-black' : 'bg-white border border-gray-300 text-black')
        ]"
      >
        <div
          v-if="!noArrow"
          class="tooltip-arrow"
          :class="`arrow-${arrowPosition}`"
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
