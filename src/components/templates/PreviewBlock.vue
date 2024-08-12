<script setup>
import { ref, computed, useSlots, onMounted } from 'vue';

const activeTab = ref('template');

const props = defineProps({
  templateCode: String,
  scriptCode: String,
  styleCode: String,
});

onMounted(() => {
  activeTab.value = props.templateCode ? 'template' : props.scriptCode ? 'script' : 'style';
});


const slots = useSlots();
const hasDisplay = computed(() => !!slots.default);
</script>


<template>
  <div>
    <div v-if="hasDisplay" class="bg-grid p-4 flex items-start gap-6 border-t border-x rounded-t-lg">
      <slot></slot>
    </div>

    <div class="flex flex-col">
      <!-- Tabs -->
      <div
        class="flex space-x-4 p-2 border-t border-x"
        :class="{ 'rounded-t-lg' : !hasDisplay }"
      >
        <button
          v-if="templateCode"
          :class="{ 'text-primary font-semibold': activeTab === 'template' }"
          @click="activeTab = 'template'"
        >
          Template
        </button>
        <button
          v-if="scriptCode"
          :class="{ 'text-primary font-semibold': activeTab === 'script' }"
          @click="activeTab = 'script'"

        >
          Script
        </button>
        <button
          v-if="styleCode"
          :class="{ 'text-primary font-semibold': activeTab === 'style' }"
          @click="activeTab = 'style'"
        >
          Style
        </button>
      </div>

      <!-- Code Display -->
      <div v-if="activeTab === 'template'">
        <pre v-highlight>
          <code class="xml">{{ templateCode }}</code>
        </pre>
      </div>
      <div v-if="activeTab === 'script'">
        <pre v-highlight>
          <code class="javascript">{{ scriptCode }}</code>
        </pre>
      </div>
      <div v-if="activeTab === 'style'">
        <pre v-highlight>
          <code class="css">{{ styleCode }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>