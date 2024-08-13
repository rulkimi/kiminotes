import{P as p}from"./PageLayout-BXRg5I9R.js";import{_ as r}from"./PreviewBlock-ClcApW5H.js";import{r as s,h as d,c as h,w as c,o as f,a as o,d as e,b as i}from"./index-CTEdMYMx.js";const g=()=>{const n=[];return document.querySelectorAll(".sublink").forEach(t=>{t.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth"})}),n.push({element:t,title:t.innerText,position:t.getBoundingClientRect().top+window.scrollY})}),n},m={class:"flex flex-col gap-4"},b=e("p",null,"To ensure that your Vue.js application is correctly deployed on GitHub Pages, you need to configure several aspects of your project. Here’s a breakdown of the necessary configurations:",-1),y=e("h3",{class:"text-lg font-bold sublink"},[o("Configuring the "),e("span",{class:"font-mono"},"package.json"),o(" file")],-1),_=e("p",null,[o("In the "),e("span",{class:"font-mono"},"package.json"),o(" file, you need to set the "),e("span",{class:"font-mono"},"homepage"),o(" field to your GitHub Pages URL. Additionally, add "),e("span",{class:"font-mono"},"predeploy"),o(" and "),e("span",{class:"font-mono"},"deploy"),o(" scripts to automate the build and deployment process.")],-1),v=e("h3",{class:"text-lg font-bold sublink"},"Configuring the Vue Router",-1),k=e("p",null,[o("When configuring Vue Router, you must specify the base path in "),e("span",{class:"font-mono"},"createWebHashHistory"),o(". This ensures that the router correctly handles paths when deployed under a subpath on GitHub Pages.")],-1),H=e("h3",{class:"text-lg font-bold sublink"},"Configuring Vite",-1),j=e("p",null,[o("The Vite configuration file ("),e("span",{class:"font-mono"},"vite.config.js"),o(") should include a "),e("span",{class:"font-mono"},"base"),o(" option to match the repository name. This ensures that asset paths are correctly resolved during the build process.")],-1),R={__name:"WebHistory",setup(n){const a=s([]);d(()=>{a.value=g()});const t=s(`{
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
`),l=s(`import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  // ... paths
]

const router = createRouter({
  // make sure to use createWebHashHistory as createWebHistory will mess up the github page on refresh
  history: createWebHashHistory(),
  routes,
})

export default router;
`),u=s(`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/<repository-name>/"
})
`);return(x,w)=>(f(),h(p,{sublinks:a.value},{subtitle:c(()=>[o(" How to configure web history properly for deployment in github pages. ")]),content:c(()=>[e("div",m,[b,y,_,i(r,{"json-code":t.value,"file-name":"package.json"},null,8,["json-code"]),v,k,i(r,{"script-code":l.value,"file-name":"/router/index.js"},null,8,["script-code"]),H,j,i(r,{"script-code":u.value,"file-name":"vite.config.js"},null,8,["script-code"])])]),_:1},8,["sublinks"]))}};export{R as default};
