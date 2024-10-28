import{P as u}from"./PageLayout-BWNIq2Jc.js";import{_ as t}from"./Tooltip.vue_vue_type_style_index_0_scoped_e920ed47_lang-CVtpTcwu.js";import{r as s,o as p,c as d,w as r,a as o,d as e,b as n,u as a}from"./index-DOGTbr6_.js";const h={class:"flex flex-col gap-4"},f=e("p",null,"To ensure that your Vue.js application is correctly deployed on GitHub Pages, you need to configure several aspects of your project. Here’s a breakdown of the necessary configurations:",-1),g=e("h3",{class:"text-lg font-bold sublink"},[o("Configuring the "),e("span",{class:"font-mono"},"package.json"),o(" file")],-1),m=e("p",null,[o("In the "),e("span",{class:"font-mono"},"package.json"),o(" file, you need to set the "),e("span",{class:"font-mono"},"homepage"),o(" field to your GitHub Pages URL. Additionally, add "),e("span",{class:"font-mono"},"predeploy"),o(" and "),e("span",{class:"font-mono"},"deploy"),o(" scripts to automate the build and deployment process.")],-1),y=e("h3",{class:"text-lg font-bold sublink"},"Configuring the Vue Router",-1),b=e("p",null,[o("When configuring Vue Router, you must specify the base path in "),e("span",{class:"font-mono"},"createWebHashHistory"),o(". This ensures that the router correctly handles paths when deployed under a subpath on GitHub Pages.")],-1),_=e("h3",{class:"text-lg font-bold sublink"},"Configuring Vite",-1),v=e("p",null,[o("The Vite configuration file ("),e("span",{class:"font-mono"},"vite.config.js"),o(") should include a "),e("span",{class:"font-mono"},"base"),o(" option to match the repository name. This ensures that asset paths are correctly resolved during the build process.")],-1),w={__name:"WebHistory",setup(H){const i=s(`{
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
`),c=s(`import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  // ... paths
]

const router = createRouter({
  // make sure to use createWebHashHistory as createWebHistory will mess up the github page on refresh
  history: createWebHashHistory(),
  routes,
})

export default router;
`),l=s(`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/<repository-name>/"
})
`);return(j,x)=>(p(),d(u,null,{subtitle:r(()=>[o(" How to configure web history properly for deployment in github pages. ")]),content:r(()=>[e("div",h,[f,g,m,n(a(t),{"json-code":i.value,"file-name":"package.json"},null,8,["json-code"]),y,b,n(a(t),{"script-code":c.value,"file-name":"/router/index.js"},null,8,["script-code"]),_,v,n(a(t),{"script-code":l.value,"file-name":"vite.config.js"},null,8,["script-code"])])]),_:1}))}};export{w as default};
