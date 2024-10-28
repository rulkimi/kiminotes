<script setup>
import { ref, computed, useSlots, onMounted } from 'vue';

const props = defineProps({
  fileName: String,
  templateCode: String,
  scriptCode: String,
  styleCode: String,
  jsonCode: String,
});

const activeTab = ref('');

const determineActiveTab = () => {
  if (props.templateCode) return 'template';
  if (props.scriptCode) return 'script';
  if (props.styleCode) return 'style';
  if (props.jsonCode) return 'json';
  return ''; 
};

onMounted(() => {
  activeTab.value = determineActiveTab();
});

const slots = useSlots();
const hasDisplay = computed(() => !!slots.default);
</script>


<template>
  <div>
    <div v-if="hasDisplay" class="bg-grid p-4 flex items-start justify-center border-t border-x dark:border-slate-700 rounded-t-lg">
      <slot></slot>
    </div>

    <div class="flex flex-col border-x border-b rounded-b-lg dark:border-slate-700">
      <!-- Tabs -->
      <div
        v-if="fileName"
        class="flex space-x-4 p-2 border-t dark:border-slate-700"
        :class="{ 'rounded-t-lg' : !hasDisplay }"
      >
        <div class="text-primary font-semibold">{{ fileName }}</div>
      </div>
      <div
        v-else
        class="flex space-x-4 p-2 border-t dark:border-slate-700"
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
        <button
          v-if="jsonCode"
          :class="{ 'text-primary font-semibold': activeTab === 'json' }"
          @click="activeTab = 'json'"
        >
          JSON
        </button>
      </div>

      <!-- Code Display -->
      <template v-if="true">
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
        <div v-if="activeTab === 'json'">
          <pre v-highlight>
            <code class="css">{{ jsonCode }}</code>
          </pre>
        </div>
      </template>

      <template v-else>
        <div class="bg-background h-20 rounded-b-lg">

        </div>
      </template>

    </div>
  </div>
</template>