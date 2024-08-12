import{_ as l}from"./PageLayout-ZYAvUkez.js";import{_ as t}from"./PreviewBlock-1AZ5u_Gs.js";import{r as s,c as p,w as a,o as u,a as o,d as e,b as n}from"./index-DFvMQKVc.js";const d={class:"flex flex-col gap-4"},h=e("p",null,"To ensure that your Vue.js application is correctly deployed on GitHub Pages, you need to configure several aspects of your project. Here’s a breakdown of the necessary configurations:",-1),f=e("h3",{class:"text-lg font-bold"},[o("1. Configuring the "),e("span",{class:"font-mono"},"package.json"),o(" file")],-1),m=e("p",null,[o("In the "),e("span",{class:"font-mono"},"package.json"),o(" file, you need to set the "),e("span",{class:"font-mono"},"homepage"),o(" field to your GitHub Pages URL. Additionally, add "),e("span",{class:"font-mono"},"predeploy"),o(" and "),e("span",{class:"font-mono"},"deploy"),o(" scripts to automate the build and deployment process.")],-1),g=e("h3",{class:"text-lg font-bold"},"2. Configuring the Vue Router",-1),y=e("p",null,[o("When configuring Vue Router, you must specify the base path in "),e("span",{class:"font-mono"},"createWebHashHistory"),o(". This ensures that the router correctly handles paths when deployed under a subpath on GitHub Pages.")],-1),_=e("h3",{class:"text-lg font-bold"},"3. Configuring Vite",-1),b=e("p",null,[o("The Vite configuration file ("),e("span",{class:"font-mono"},"vite.config.js"),o(") should include a "),e("span",{class:"font-mono"},"base"),o(" option to match the repository name. This ensures that asset paths are correctly resolved during the build process.")],-1),k={__name:"WebHistory",setup(v){const r=s(`{
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
`),i=s(`import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  // ... paths
]

const router = createRouter({
  // make sure to use createWebHashHistory as createWebHistory will mess up the github page on refresh
  history: createWebHashHistory(),
  routes,
})

export default router;
`),c=s(`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/<repository-name>/"
})
`);return(H,j)=>(u(),p(l,null,{subtitle:a(()=>[o(" How to configure web history properly for deployment in github pages. ")]),content:a(()=>[e("div",d,[h,f,m,n(t,{"json-code":r.value,"file-name":"package.json"},null,8,["json-code"]),g,y,n(t,{"script-code":i.value,"file-name":"/router/index.js"},null,8,["script-code"]),_,b,n(t,{"script-code":c.value,"file-name":"vite.config.js"},null,8,["script-code"])])]),_:1}))}};export{k as default};
