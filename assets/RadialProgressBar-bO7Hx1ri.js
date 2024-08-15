import{P as x}from"./PageLayout-Dux_au_g.js";import{_ as h,h as l,o as c,e as m,d as s,n as _,t as k,y,r as f,x as b,c as w,w as u,a as z,b as i,i as B}from"./index-kSbyBowU.js";import{_ as g}from"./PreviewBlock-DBmaJuhJ.js";import{g as P}from"./index-DQwBvNK9.js";const S=["viewBox"],$=["cx","cy","r"],N=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],C=["x","y"],d=10,R={__name:"RadialProgressBarComponent",props:{size:{type:Number,default:60},color:{type:String,default:"text-primary"},radius:{type:Number,default:40},progress:{type:Number,default:0}},setup(o){const t=o,e=l(()=>Math.min(100,Math.max(0,t.progress))),a=l(()=>Number((2*Math.PI*t.radius).toFixed(1))),n=l(()=>a.value-a.value*e.value/100),r=l(()=>t.radius*2+d*2);return(v,T)=>(c(),m("div",{style:y({width:`${o.size}px`,height:`${o.size}px`})},[(c(),m("svg",{viewBox:`0 0 ${r.value} ${r.value}`},[s("circle",{class:"text-gray-200 stroke-current","stroke-width":d,cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent"},null,8,$),s("circle",{class:_(["progress-ring__circle stroke-current",o.color]),"stroke-width":d,"stroke-linecap":"round",cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent","stroke-dasharray":a.value,"stroke-dashoffset":n.value},null,10,N),s("text",{x:r.value/2,y:r.value/2,"font-size":"16","text-anchor":"middle","alignment-baseline":"middle"},k(e.value)+"% ",9,C)],8,S))],4))}},p=h(R,[["__scopeId","data-v-0e8baace"]]),M={class:"flex flex-col gap-4"},I={class:"flex flex-col md:flex-row gap-4"},W={class:"flex gap-4"},D={class:"flex flex-col gap-2"},V=s("h3",{class:"text-lg font-bold sublink"},"How to use?",-1),O=s("p",null,"Import in the component you want to use and configure the props.",-1),F=`<script setup>
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
`,L=`<script setup>
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
`,j={__name:"RadialProgressBar",setup(o){const t=f([]);b(()=>{t.value=P()});const e=f(0),a=()=>{e.value+10<=100?e.value+=10:e.value=100},n=()=>{e.value-10>=0?e.value-=10:e.value=0};return(r,v)=>(c(),w(x,{sublinks:t.value},{subtitle:u(()=>[z(" Radial Progress Bar with Tailwind CSS. ")]),content:u(()=>[s("div",M,[i(g,{"template-code":F,"file-name":"RadialProgressbar.vue"},{default:u(()=>[s("div",I,[s("div",W,[i(p,{size:70,progress:e.value+10},null,8,["progress"]),i(p,{size:70,progress:e.value+20},null,8,["progress"]),i(p,{size:70,progress:e.value+40},null,8,["progress"])]),s("div",D,[s("button",{class:"bg-primary/20 px-2 py-1 rounded-lg",onClick:a},"+ 10"),e.value?(c(),m("button",{key:0,class:"bg-red-500/20 px-2 py-1 rounded-lg",onClick:n},"- 10")):B("",!0)])])]),_:1}),V,O,i(g,{"template-code":L,"file-name":"App.vue"})])]),_:1},8,["sublinks"]))}};export{j as default};
