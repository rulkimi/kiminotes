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

<script>
 /* Tooltip Component Usage Example:
 <Tooltip 
   content="This is a tooltip!" 
   :delay="200" 
   direction="top" 
   custom-styles="bg-blue-500" 
   theme="light" 
   width="max-w-[300px]"
 >
   <button>Hover over me</button>
 </Tooltip>
 */
export default {
  name: 'Tooltip',
  props: {
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
  },
  data() {
    return {
      active: false,
      timeout: null,
    };
  },
  methods: {
    showTip() {
      const slotElement = this.$refs.slotRef.nextElementSibling; 
      const { top, left, right, height, width } = slotElement.getBoundingClientRect();
      this.timeout = setTimeout(() => {
        this.active = true;
        // Adjust tooltip position based on slotElement's position
        this.$nextTick(() => {
          const tooltip = document.querySelector('.tooltip-tip');
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

          // Check for overflow and adjust position
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

          const adjustedDirection = overflowCheck(this.direction);
          Object.assign(tooltip.style, positions[adjustedDirection]);
        });
      }, this.delay);
    },
    hideTip() {
      clearTimeout(this.timeout);
      this.active = false;
    },
  },
};
</script>
