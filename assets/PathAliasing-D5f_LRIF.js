import{P as m}from"./PageLayout-gnKP0t_A.js";/* empty css                                                                                   */import{_ as s}from"./PreviewBlock-DF2hZQdL.js";import{r as e,y as u,c as f,w as l,o as d,a as t,d as o,b as n,u as a}from"./index-D3ypXnRU.js";import{g as _}from"./index-DQwBvNK9.js";const h={class:"flex flex-col gap-4"},g=o("p",null,"To simplify importing files in your project, you can configure a path alias in the Vite configuration file.",-1),x=o("h3",{class:"text-lg font-bold sublink"},"Configuring Path Aliases",-1),y=o("p",null,[t("By setting up the alias, you can use "),o("span",{class:"font-mono"},"@"),t(" as a shortcut for the "),o("span",{class:"font-mono"},"./src"),t(" directory. This makes importing components and files cleaner and easier to manage.")],-1),b=o("h3",{class:"text-lg font-bold sublink"},"Example Import Using Alias",-1),v=o("p",null,"For example, instead of writing:",-1),C=o("p",null,"You can write:",-1),T={__name:"PathAliasing",setup(k){const i=e([]);u(()=>{i.value=_()});const c=e(`resolve: {
  alias: {
    '@': fileURLToPath(new URL('./src', import.meta.url))
  }
}`),r=e("import MyComponent from '../../components/MyComponent.vue';"),p=e("import MyComponent from '@/components/MyComponent.vue';");return(w,P)=>(d(),f(m,{sublinks:i.value},{subtitle:l(()=>[t(" Setting up Path Aliasing in Vite ")]),content:l(()=>[o("div",h,[g,x,y,n(a(s),{"script-code":c.value,"file-name":"vite.config.js"},null,8,["script-code"]),b,v,n(a(s),{"script-code":r.value,"file-name":"without alias"},null,8,["script-code"]),C,n(a(s),{"script-code":p.value,"file-name":"with alias"},null,8,["script-code"])])]),_:1},8,["sublinks"]))}};export{T as default};
