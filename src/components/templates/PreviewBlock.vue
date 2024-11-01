<script setup>
import { ref, computed, useSlots, onMounted } from 'vue';

const props = defineProps({
  fileName: String,
  templateCode: String,
  scriptCode: String,
  styleCode: String,
  jsonCode: String,
  hideCode: Boolean,
});

const activeTab = ref('');
const showCode = ref(!props.hideCode)

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

const codePreview = computed(() => {
  const previewLength = 500;
  let codeSnippet = '';

  switch (activeTab.value) {
    case 'template':
      codeSnippet = props.templateCode || '';
      break;
    case 'script':
      codeSnippet = props.scriptCode || '';
      break;
    case 'style':
      codeSnippet = props.styleCode || '';
      break;
    case 'json':
      codeSnippet = props.jsonCode || '';
      break;
    default:
      codeSnippet = 'No code available';
  }

  return codeSnippet.length > previewLength
    ? codeSnippet.substring(0, previewLength) + '...'
    : codeSnippet;
});

const copyCode = () => {
  let codeToCopy = '';

  switch (activeTab.value) {
    case 'template':
      codeToCopy = props.templateCode || '';
      break;
    case 'script':
      codeToCopy = props.scriptCode || '';
      break;
    case 'style':
      codeToCopy = props.styleCode || '';
      break;
    case 'json':
      codeToCopy = props.jsonCode || '';
      break;
    default:
      codeToCopy = '';
  }

  if (codeToCopy) {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      // alert('Code copied to clipboard');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  } else {
    // alert('No code available to copy');
  }
};
</script>

<template>
  <div>
    <div v-if="hasDisplay" class="bg-grid p-4 flex items-start justify-center border-t border-x dark:border-slate-700 rounded-t-lg">
      <slot></slot>
    </div>

    <div
      class="flex flex-col border-x border-b rounded-b-lg dark:border-slate-700"
      :class="{ 'rounded-t-lg' : !hasDisplay }"
    >
      <!-- Tabs -->
      <div class="flex w-full justify-between rounded-lg border-t dark:border-slate-700 p-3">
        <div
          v-if="fileName"
          class="flex"
          :class="{ 'rounded-t-lg' : !hasDisplay }"
        >
          <div class="text-primary font-semibold">{{ fileName }}</div>
        </div>
        <div
          v-else
          class="flex gap-2"
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
        <div class="flex gap-2">
          <button v-if="showCode" @click="showCode = false">Hide Code</button>
          <button @click="copyCode">Copy</button>
        </div>
      </div>

      <!-- Code Display -->
      <template v-if="showCode">
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
            <code class="json">{{ jsonCode }}</code>
          </pre>
        </div>
      </template>

      <template v-else>
        <div class="bg-background h-40 rounded-b-lg relative">
          <pre class="blur select-none pointer-events-none" v-highlight>
            <code class="!overflow-hidden h-40">{{ codePreview }}</code>
          </pre>
          <div class="absolute inset-0 flex justify-center items-center">
            <div
              class="hover:scale-105 cursor-pointer transition-transform duration-300 text-white"
              @click="showCode = true"
            >
              <font-awesome-icon :icon="['fas', 'eye']" size="lg" />
              <span class="ml-2">Show code</span>
            </div>
          </div>
        </div>
      </template>

    </div>
  </div>
</template>
