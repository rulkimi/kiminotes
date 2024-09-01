import{P as p}from"./PageLayout-Cu7Yr9al.js";/* empty css                                                                                   */import{_ as s}from"./PreviewBlock-CN94VSsD.js";import{r as t,y as d,o as h,c as f,w as i,a as o,d as e,b as n,u as a}from"./index-povdJ_7Q.js";import{g as m}from"./index-DQwBvNK9.js";const g={class:"flex flex-col gap-4"},y=e("p",null,"To ensure that your Vue.js application is correctly deployed on GitHub Pages, you need to configure several aspects of your project. Here’s a breakdown of the necessary configurations:",-1),b=e("h3",{class:"text-lg font-bold sublink"},[o("Configuring the "),e("span",{class:"font-mono"},"package.json"),o(" file")],-1),_=e("p",null,[o("In the "),e("span",{class:"font-mono"},"package.json"),o(" file, you need to set the "),e("span",{class:"font-mono"},"homepage"),o(" field to your GitHub Pages URL. Additionally, add "),e("span",{class:"font-mono"},"predeploy"),o(" and "),e("span",{class:"font-mono"},"deploy"),o(" scripts to automate the build and deployment process.")],-1),v=e("h3",{class:"text-lg font-bold sublink"},"Configuring the Vue Router",-1),H=e("p",null,[o("When configuring Vue Router, you must specify the base path in "),e("span",{class:"font-mono"},"createWebHashHistory"),o(". This ensures that the router correctly handles paths when deployed under a subpath on GitHub Pages.")],-1),k=e("h3",{class:"text-lg font-bold sublink"},"Configuring Vite",-1),j=e("p",null,[o("The Vite configuration file ("),e("span",{class:"font-mono"},"vite.config.js"),o(") should include a "),e("span",{class:"font-mono"},"base"),o(" option to match the repository name. This ensures that asset paths are correctly resolved during the build process.")],-1),B={__name:"WebHistory",setup(x){const r=t([]);d(()=>{r.value=m()});const c=t(`{
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
`),u=t(`import { createWebHashHistory, createRouter } from 'vue-router';

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
`);return(C,V)=>(h(),f(p,{sublinks:r.value},{subtitle:i(()=>[o(" How to configure web history properly for deployment in github pages. ")]),content:i(()=>[e("div",g,[y,b,_,n(a(s),{"json-code":c.value,"file-name":"package.json"},null,8,["json-code"]),v,H,n(a(s),{"script-code":u.value,"file-name":"/router/index.js"},null,8,["script-code"]),k,j,n(a(s),{"script-code":l.value,"file-name":"vite.config.js"},null,8,["script-code"])])]),_:1},8,["sublinks"]))}};export{B as default};
