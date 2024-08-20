<script setup>
import PageLayout from '@/layout/PageLayout.vue';
import { PreviewBlock } from '@/components/templates';
import { getSubLinks } from '@/utils';

import { ref, onMounted } from 'vue';

const sublinks = ref([]);

onMounted(() => {
  sublinks.value = getSubLinks();
});

const jsonCode = ref(`{
  "name": "<repository-name>",
  ...
  "homepage": "https://<github-name>.github.io/<repository-name>/",
  "scripts": {
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  ...
}
`);

const scriptCode = ref(`import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  // ... paths
]

const router = createRouter({
  // make sure to use createWebHashHistory as createWebHistory will mess up the github page on refresh
  history: createWebHashHistory(),
  routes,
})

export default router;
`);

const configCode = ref(`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/<repository-name>/"
})
`);
</script>

<template>
  <PageLayout :sublinks="sublinks">

    <template #subtitle>
      How to configure web history properly for deployment in github pages.
    </template>

    <template #content>
      <div class="flex flex-col gap-4">
        <p>To ensure that your Vue.js application is correctly deployed on GitHub Pages, you need to configure several aspects of your project. Here’s a breakdown of the necessary configurations:</p>
        
        <h3 class="text-lg font-bold sublink">Configuring the <span class="font-mono">package.json</span> file</h3>
        <p>In the <span class="font-mono">package.json</span> file, you need to set the <span class="font-mono">homepage</span> field to your GitHub Pages URL. Additionally, add <span class="font-mono">predeploy</span> and <span class="font-mono">deploy</span> scripts to automate the build and deployment process.</p>
        <PreviewBlock :json-code="jsonCode" file-name="package.json" />
        
        <h3 class="text-lg font-bold sublink">Configuring the Vue Router</h3>
        <p>When configuring Vue Router, you must specify the base path in <span class="font-mono">createWebHashHistory</span>. This ensures that the router correctly handles paths when deployed under a subpath on GitHub Pages.</p>
        <PreviewBlock :script-code="scriptCode" file-name="/router/index.js" />

        <h3 class="text-lg font-bold sublink">Configuring Vite</h3>
        <p>The Vite configuration file (<span class="font-mono">vite.config.js</span>) should include a <span class="font-mono">base</span> option to match the repository name. This ensures that asset paths are correctly resolved during the build process.</p>
        <PreviewBlock :script-code="configCode" file-name="vite.config.js" />
      </div>
    </template>

  </PageLayout>
</template>