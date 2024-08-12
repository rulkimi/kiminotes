<script setup>
import { ref } from 'vue';
const activeTab = ref('template');

defineProps({
  templateCode: String,
  scriptCode: String,
  styleCode: String,
});
</script>


<template>
  <div>
    <div class="p-4 flex items-start gap-6 border-t border-x rounded-t-lg">
      <slot></slot>
    </div>

    <div class="flex flex-col">
      <!-- Tabs -->
      <div class="flex space-x-4 p-2 border-t border-x">
        <button
          :class="{ 'text-primary font-semibold': activeTab === 'template' }"
          @click="activeTab = 'template'"
        >
          Template
        </button>
        <button
          :class="{ 'text-primary font-semibold': activeTab === 'script' }"
          @click="activeTab = 'script'"

        >
          Script
        </button>
        <button
          :class="{ 'text-primary font-semibold': activeTab === 'style' }"
          @click="activeTab = 'style'"
        >
          Style
        </button>
      </div>

      <!-- Code Display -->
      <div v-if="templateCode && activeTab === 'template'">
        <pre v-highlight>
          <code class="xml">{{ templateCode }}</code>
        </pre>
      </div>
      <div v-if="scriptCode && activeTab === 'script'">
        <pre v-highlight>
          <code class="javascript">{{ scriptCode }}</code>
        </pre>
      </div>
      <div v-if="styleCode && activeTab === 'style'">
        <pre v-highlight>
          <code class="css">{{ styleCode }}</code>
        </pre>
      </div>
    </div>
  </div>
</template>