<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { PreviewBlock } from '@/components/templates';
import { getSubLinks } from '@/utils';

import { ref, onMounted } from 'vue';

const sublinks = ref([]);

onMounted(() => {
  sublinks.value = getSubLinks();
});

const aliasConfigCode = ref(`resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}`);

const exampleImportCode = ref(`import MyComponent from '../../components/MyComponent.vue';`);
const exampleImportCodeWithAlias = ref(`import MyComponent from '@/components/MyComponent.vue';`);
</script>

<template>
  <PageLayout :sublinks="sublinks">
    <template #subtitle>
      Setting up Path Aliasing in Vite
    </template>
    
    <template #content>
      <div class="flex flex-col gap-4">
        <p>To simplify importing files in your project, you can configure a path alias in the Vite configuration file.</p>
        
        <h3 class="text-lg font-bold sublink">Configuring Path Aliases</h3>
        <p>By setting up the alias, you can use <span class="font-mono">@</span> as a shortcut for the <span class="font-mono">./src</span> directory. This makes importing components and files cleaner and easier to manage.</p>
        <PreviewBlock :script-code="aliasConfigCode" file-name="vite.config.js" />
        
        <h3 class="text-lg font-bold sublink">Example Import Using Alias</h3>
        <p>For example, instead of writing:</p>
        <PreviewBlock :script-code="exampleImportCode" file-name="without alias" />
        <p>You can write:</p>
        <PreviewBlock :script-code="exampleImportCodeWithAlias" file-name="with alias" />
      </div>
    </template>
  </PageLayout>
</template>
