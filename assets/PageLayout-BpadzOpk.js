import{_ as k,r as d,G as b,D as x,i as y,s as S,o as s,e as n,d as e,t as r,u as w,k as p,F as h,f,j as C,b as L,p as I,g as P}from"./index-B84daWFs.js";const B=()=>{const l=[];return document.querySelectorAll(".sublink").forEach(t=>{t.addEventListener("click",()=>{t.scrollIntoView({behavior:"smooth"})}),l.push({element:t,title:t.innerText,position:t.getBoundingClientRect().top+window.scrollY})}),l},_=l=>(I("data-v-9a39ab67"),l=l(),P(),l),V={class:"grid grid-cols-4"},N={key:0,class:"p-6"},T={class:"text-primary font-semibold mb-2"},F={class:"text-2xl font-bold mb-2"},$={class:"text-lg mb-2"},q={key:1},D=_(()=>e("p",null,"Coming soon.",-1)),G=[D],M={class:"hidden lg:block p-6 sticky top-0 self-start"},R={class:"flex flex-col gap-8"},j={key:0,class:"flex flex-col gap-4"},A=_(()=>e("p",{class:"font-semibold"},"On this page",-1)),E={class:"flex flex-col gap-2"},O=["onClick"],Y={class:"flex flex-col gap-4"},z=_(()=>e("p",{class:"font-semibold"},"Check out my websites!",-1)),H={class:"flex flex-col gap-2"},J={class:"cursor-pointer hover:text-primary transition-all duration-200 flex flex-start items-center gap-2"},K=["href"],Q={__name:"PageLayout",setup(l){const a=d([]),t=d(null),c=b();x(()=>{a.value=B(),c.setSublinks(a.value),c.setPageScroll(t.value)});const u=y(()=>c.currentSection),m=i=>{i.scrollIntoView({block:"start",behavior:"smooth"})},v=d([{title:"Recipe Generator",icon:["fas","utensils"],link:"/recipe-generator"},{title:"Non-Followers Tracker",icon:["fab","square-instagram"],link:"/insta-nonfollowers"},{title:"Bus Location Tracker",icon:["fas","bus-simple"],link:"/bus-location-server"},{title:"Portfolio",icon:["fas","briefcase"],link:"/portfolio-vue"}]);return(i,U)=>{const g=S("font-awesome-icon");return s(),n("div",V,[e("div",{ref_key:"pageScroll",ref:t,class:"col-span-4 lg:col-span-3 custom-scroll overflow-y-auto h-[calc(100vh-3.5rem)]"},[u.value?(s(),n("div",N,[e("p",T,r(u.value.name),1),e("h1",F,r(u.value.menus.find(o=>o.path===w(c).currentPath).name),1),e("p",$,[p(i.$slots,"subtitle",{},void 0,!0)]),p(i.$slots,"content",{},void 0,!0)])):(s(),n("div",q,G))],512),e("div",M,[e("div",R,[a.value.length?(s(),n("div",j,[A,e("ul",E,[(s(!0),n(h,null,f(a.value,o=>(s(),n("li",{class:"cursor-pointer hover:text-primary transition-all duration-200",onClick:W=>m(o.element)},r(o.title),9,O))),256))])])):C("",!0),e("div",Y,[z,e("ul",H,[(s(!0),n(h,null,f(v.value,o=>(s(),n("li",J,[L(g,{icon:o.icon},null,8,["icon"]),e("a",{href:"https://rulkimi.github.io"+o.link,target:"_blank"},r(o.title),9,K)]))),256))])])])])])}}},Z=k(Q,[["__scopeId","data-v-9a39ab67"]]);export{Z as P};
