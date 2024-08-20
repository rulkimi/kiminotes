import{P as y}from"./PageLayout-g1JgAXPV.js";import{_ as k,h as i,y as b,o as v,e as x,d as e,n as w,t as z,z as h,r as d,x as B,c as P,w as m,a as S,b as l}from"./index-C0Rs27xd.js";import{_}from"./PreviewBlock-BmyVo3tE.js";import{g as $}from"./index-DQwBvNK9.js";const C=["viewBox"],N=["cx","cy","r"],M=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],R=["x","y"],g=10,D={__name:"RadialProgressBarComponent",props:{size:{type:Number,default:60},color:{type:String,default:"text-primary"},radius:{type:Number,default:40},progress:{type:Number,default:0}},setup(a){const t=a,s=i(()=>Math.min(100,Math.max(0,t.progress))),o=i(()=>Number((2*Math.PI*t.radius).toFixed(1))),u=i(()=>o.value-o.value*s.value/100),r=i(()=>t.radius*2+g*2),p=b(),c=i(()=>p.isDarkMode?"#F3F4F6":"#000000");return(n,L)=>(v(),x("div",{style:h({width:`${a.size}px`,height:`${a.size}px`})},[(v(),x("svg",{viewBox:`0 0 ${r.value} ${r.value}`},[e("circle",{class:"text-gray-200 stroke-current","stroke-width":g,cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent"},null,8,N),e("circle",{class:w(["progress-ring__circle stroke-current",a.color]),"stroke-width":g,"stroke-linecap":"round",cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent","stroke-dasharray":o.value,"stroke-dashoffset":u.value},null,10,M),e("text",{x:r.value/2,y:r.value/2,"font-size":"16","text-anchor":"middle","alignment-baseline":"middle",style:h({fill:c.value})},z(s.value)+"% ",13,R)],8,C))],4))}},f=k(D,[["__scopeId","data-v-79750dcd"]]),F={class:"flex flex-col gap-4"},I={class:"flex flex-col md:flex-row gap-4"},W={class:"flex gap-4"},O=e("h3",{class:"text-lg font-bold sublink"},"How to use?",-1),T=e("p",null,"Import in the component you want to use and configure the props.",-1),V=`<script setup>
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
`,E=`<script setup>
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
`,q={__name:"RadialProgressBar",setup(a){const t=d([]);B(()=>{t.value=$()});const s=[d(10),d(20),d(40)],o=c=>{s.forEach(n=>{n.value=Math.min(Math.max(n.value+c,0),100)})},u=()=>o(10),r=()=>o(-10),p=()=>{s[0].value=10,s[1].value=20,s[2].value=40};return(c,n)=>(v(),P(y,{sublinks:t.value},{subtitle:m(()=>[S(" Radial Progress Bar with Tailwind CSS. ")]),content:m(()=>[e("div",F,[l(_,{"template-code":V,"file-name":"RadialProgressbar.vue"},{default:m(()=>[e("div",I,[e("div",W,[l(f,{size:70,progress:s[0].value},null,8,["progress"]),l(f,{size:70,progress:s[1].value},null,8,["progress"]),l(f,{size:70,progress:s[2].value},null,8,["progress"])]),e("div",{class:"flex flex-col gap-2"},[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:u},"+ 10"),e("button",{class:"bg-red-500/20 hover:bg-red-500/30 px-2 py-1 rounded-lg",onClick:r},"- 10")]),e("div",null,[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:p},"Reset")])])]),_:1}),O,T,l(_,{"template-code":E,"file-name":"App.vue"})])]),_:1},8,["sublinks"]))}};export{q as default};
