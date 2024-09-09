import{P as y}from"./PageLayout-CGjd-rAp.js";import{_ as x}from"./Tooltip.vue_vue_type_style_index_0_scoped_983a5156_lang-W-boYjoH.js";import{_ as k,i as l,y as b,o as h,e as v,d as e,n as w,t as z,z as _,r as u,c as B,w as m,a as P,b as c,u as n}from"./index-DzCTdQxW.js";const S=["viewBox"],$=["cx","cy","r"],N=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],C=["x","y"],g=10,M={__name:"RadialProgressBar",props:{size:{type:Number,default:60},color:{type:String,default:"text-primary"},radius:{type:Number,default:40},progress:{type:Number,default:0}},setup(t){const s=t,o=l(()=>Math.min(100,Math.max(0,s.progress))),a=l(()=>Number((2*Math.PI*s.radius).toFixed(1))),p=l(()=>a.value-a.value*o.value/100),r=l(()=>s.radius*2+g*2),d=b(),i=l(()=>d.isDarkMode?"#F3F4F6":"#000000");return(E,j)=>(h(),v("div",{style:_({width:`${t.size}px`,height:`${t.size}px`})},[(h(),v("svg",{viewBox:`0 0 ${r.value} ${r.value}`},[e("circle",{class:"text-gray-200 stroke-current","stroke-width":g,cx:r.value/2,cy:r.value/2,r:s.radius,fill:"transparent"},null,8,$),e("circle",{class:w(["progress-ring__circle stroke-current",t.color]),"stroke-width":g,"stroke-linecap":"round",cx:r.value/2,cy:r.value/2,r:s.radius,fill:"transparent","stroke-dasharray":a.value,"stroke-dashoffset":p.value},null,10,N),e("text",{x:r.value/2,y:r.value/2,"font-size":"16","text-anchor":"middle","alignment-baseline":"middle",style:_({fill:i.value})},z(o.value)+"% ",13,C)],8,S))],4))}},f=k(M,[["__scopeId","data-v-2481e72c"]]),R={class:"flex flex-col gap-4"},D=e("h3",{class:"text-lg font-bold sublink"},"The component code",-1),F={class:"flex flex-col md:flex-row gap-4"},I={class:"flex gap-4"},W=e("h3",{class:"text-lg font-bold sublink"},"How to use?",-1),T=e("p",null,"Import in the component you want to use and configure the props.",-1),O=`<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    default: 60
  },
  color: {
    type: String,
    default: 'text-primary'
  },
  radius: {
    type: Number,
    default: 40 
  },
  progress: {
    type: Number,
    default: 0
  }
});

const strokeWidth = 10;
const clampedProgress = computed(() => Math.min(100, Math.max(0, props.progress)));
const circumference = computed(() => Number((2 * Math.PI * props.radius).toFixed(1)));
const strokeDashOffset = computed(() => circumference.value - (circumference.value * clampedProgress.value) / 100);
const viewBoxSize = computed(() => props.radius * 2 + strokeWidth * 2);
<\/script>

<template>
  <div :style="{ width: \`\${size}px\`, height: \`\${size}px\` }">
    <svg :viewBox="\`0 0 \${viewBoxSize} \${viewBoxSize}\`">
      <circle
        class="text-gray-200 stroke-current"
        :stroke-width="strokeWidth"
        :cx="viewBoxSize / 2"
        :cy="viewBoxSize / 2"
        :r="props.radius"
        fill="transparent"
      />
      <circle
        class="progress-ring__circle stroke-current"
        :class="color"
        :stroke-width="strokeWidth"
        stroke-linecap="round"
        :cx="viewBoxSize / 2"
        :cy="viewBoxSize / 2"
        :r="props.radius"
        fill="transparent"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashOffset"
      />
      <text
        :x="viewBoxSize / 2"
        :y="viewBoxSize / 2"
        font-size="16"
        text-anchor="middle"
        alignment-baseline="middle"
      >
        {{ clampedProgress }}%
      </text>
    </svg>
  </div>
</template>

<style scoped>
.progress-ring__circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
`,V=`<script setup>
// make sure the path is correct
import RadialProgressbar from './components/RadialProgressbar.vue';

import { ref } from 'vue';

const progress = ref(0);

setInterval(() => {
  progress.value += 10;
}, 1000);
<\/script>

<template>
  <RadialProgressbar
    :progress="progress"
    :size="100"
    color="text-red-500"
    :radius="40"
  /> 
</template>
`,U={__name:"RadialProgressBarComponent",setup(t){const s=[u(10),u(20),u(40)],o=d=>{s.forEach(i=>{i.value=Math.min(Math.max(i.value+d,0),100)})},a=()=>o(10),p=()=>o(-10),r=()=>{s[0].value=10,s[1].value=20,s[2].value=40};return(d,i)=>(h(),B(y,null,{subtitle:m(()=>[P(" Radial Progress Bar with Tailwind CSS. ")]),content:m(()=>[e("div",R,[D,c(n(x),{"template-code":O,"file-name":"RadialProgressbar.vue"},{default:m(()=>[e("div",F,[e("div",I,[c(n(f),{size:70,progress:s[0].value},null,8,["progress"]),c(n(f),{size:70,progress:s[1].value},null,8,["progress"]),c(n(f),{size:70,progress:s[2].value},null,8,["progress"])]),e("div",{class:"flex flex-col gap-2"},[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:a},"+ 10"),e("button",{class:"bg-red-500/20 hover:bg-red-500/30 px-2 py-1 rounded-lg",onClick:p},"- 10")]),e("div",null,[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:r},"Reset")])])]),_:1}),W,T,c(n(x),{"template-code":V,"file-name":"App.vue"})])]),_:1}))}};export{U as default};
