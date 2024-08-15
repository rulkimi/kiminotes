import{P as u}from"./PageLayout-CRYP0cuM.js";import{_ as s}from"./PreviewBlock-CenI31nz.js";import{g as p}from"./index-DQwBvNK9.js";import{r as t,x as d,c as h,w as r,o as f,a as o,d as e,b as n}from"./index-DBF2LdUY.js";const g={class:"flex flex-col gap-4"},m=e("p",null,"To ensure that your Vue.js application is correctly deployed on GitHub Pages, you need to configure several aspects of your project. Here’s a breakdown of the necessary configurations:",-1),b=e("h3",{class:"text-lg font-bold sublink"},[o("Configuring the "),e("span",{class:"font-mono"},"package.json"),o(" file")],-1),y=e("p",null,[o("In the "),e("span",{class:"font-mono"},"package.json"),o(" file, you need to set the "),e("span",{class:"font-mono"},"homepage"),o(" field to your GitHub Pages URL. Additionally, add "),e("span",{class:"font-mono"},"predeploy"),o(" and "),e("span",{class:"font-mono"},"deploy"),o(" scripts to automate the build and deployment process.")],-1),_=e("h3",{class:"text-lg font-bold sublink"},"Configuring the Vue Router",-1),v=e("p",null,[o("When configuring Vue Router, you must specify the base path in "),e("span",{class:"font-mono"},"createWebHashHistory"),o(". This ensures that the router correctly handles paths when deployed under a subpath on GitHub Pages.")],-1),H=e("h3",{class:"text-lg font-bold sublink"},"Configuring Vite",-1),k=e("p",null,[o("The Vite configuration file ("),e("span",{class:"font-mono"},"vite.config.js"),o(") should include a "),e("span",{class:"font-mono"},"base"),o(" option to match the repository name. This ensures that asset paths are correctly resolved during the build process.")],-1),R={__name:"WebHistory",setup(j){const a=t([]);d(()=>{a.value=p()});const i=t(`{
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
`),c=t(`import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  // ... paths
]

const router = createRouter({
  // make sure to use createWebHashHistory as createWebHistory will mess up the github page on refresh
  history: createWebHashHistory(),
  routes,
})

export default router;
`),l=t(`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/<repository-name>/"
})
`);return(x,C)=>(f(),h(u,{sublinks:a.value},{subtitle:r(()=>[o(" How to configure web history properly for deployment in github pages. ")]),content:r(()=>[e("div",g,[m,b,y,n(s,{"json-code":i.value,"file-name":"package.json"},null,8,["json-code"]),_,v,n(s,{"script-code":c.value,"file-name":"/router/index.js"},null,8,["script-code"]),H,k,n(s,{"script-code":l.value,"file-name":"vite.config.js"},null,8,["script-code"])])]),_:1},8,["sublinks"]))}};export{R as default};
