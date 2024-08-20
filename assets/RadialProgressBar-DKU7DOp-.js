import{P as _}from"./PageLayout-Bsy708pV.js";import{_ as y,h as l,o as f,e as x,d as e,n as k,t as b,y as w,r as c,x as z,c as B,w as u,a as P,b as i}from"./index-BYktUKJA.js";import{_ as h}from"./PreviewBlock-DEscb73L.js";import{g as S}from"./index-DQwBvNK9.js";const $=["viewBox"],N=["cx","cy","r"],C=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],M=["x","y"],m=10,R={__name:"RadialProgressBarComponent",props:{size:{type:Number,default:60},color:{type:String,default:"text-primary"},radius:{type:Number,default:40},progress:{type:Number,default:0}},setup(a){const t=a,s=l(()=>Math.min(100,Math.max(0,t.progress))),o=l(()=>Number((2*Math.PI*t.radius).toFixed(1))),n=l(()=>o.value-o.value*s.value/100),r=l(()=>t.radius*2+m*2);return(v,d)=>(f(),x("div",{style:w({width:`${a.size}px`,height:`${a.size}px`})},[(f(),x("svg",{viewBox:`0 0 ${r.value} ${r.value}`},[e("circle",{class:"text-gray-200 stroke-current","stroke-width":m,cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent"},null,8,N),e("circle",{class:k(["progress-ring__circle stroke-current",a.color]),"stroke-width":m,"stroke-linecap":"round",cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent","stroke-dasharray":o.value,"stroke-dashoffset":n.value},null,10,C),e("text",{x:r.value/2,y:r.value/2,"font-size":"16","text-anchor":"middle","alignment-baseline":"middle"},b(s.value)+"% ",9,M)],8,$))],4))}},g=y(R,[["__scopeId","data-v-0e8baace"]]),I={class:"flex flex-col gap-4"},W={class:"flex flex-col md:flex-row gap-4"},D={class:"flex gap-4"},O=e("h3",{class:"text-lg font-bold sublink"},"How to use?",-1),V=e("p",null,"Import in the component you want to use and configure the props.",-1),E=`<script setup>
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
`,F=`<script setup>
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
`,H={__name:"RadialProgressBar",setup(a){const t=c([]);z(()=>{t.value=S()});const s=[c(10),c(20),c(40)],o=d=>{s.forEach(p=>{p.value=Math.min(Math.max(p.value+d,0),100)})},n=()=>o(10),r=()=>o(-10),v=()=>{s[0].value=10,s[1].value=20,s[2].value=40};return(d,p)=>(f(),B(_,{sublinks:t.value},{subtitle:u(()=>[P(" Radial Progress Bar with Tailwind CSS. ")]),content:u(()=>[e("div",I,[i(h,{"template-code":E,"file-name":"RadialProgressbar.vue"},{default:u(()=>[e("div",W,[e("div",D,[i(g,{size:70,progress:s[0].value},null,8,["progress"]),i(g,{size:70,progress:s[1].value},null,8,["progress"]),i(g,{size:70,progress:s[2].value},null,8,["progress"])]),e("div",{class:"flex flex-col gap-2"},[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:n},"+ 10"),e("button",{class:"bg-red-500/20 hover:bg-red-500/30 px-2 py-1 rounded-lg",onClick:r},"- 10")]),e("div",null,[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:v},"Reset")])])]),_:1}),O,V,i(h,{"template-code":F,"file-name":"App.vue"})])]),_:1},8,["sublinks"]))}};export{H as default};
