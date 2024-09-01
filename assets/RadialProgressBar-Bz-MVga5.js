import{P as k}from"./PageLayout-Cu7Yr9al.js";/* empty css                                                                                   */import{_ as x}from"./PreviewBlock-CN94VSsD.js";import{_ as b,i,z as w,o as h,e as _,d as e,n as z,t as B,A as y,r as u,y as P,c as S,w as g,a as $,b as l,u as c}from"./index-povdJ_7Q.js";import{g as C}from"./index-DQwBvNK9.js";const N=["viewBox"],M=["cx","cy","r"],R=["cx","cy","r","stroke-dasharray","stroke-dashoffset"],D=["x","y"],f=10,F={__name:"RadialProgressBarComponent",props:{size:{type:Number,default:60},color:{type:String,default:"text-primary"},radius:{type:Number,default:40},progress:{type:Number,default:0}},setup(a){const t=a,s=i(()=>Math.min(100,Math.max(0,t.progress))),o=i(()=>Number((2*Math.PI*t.radius).toFixed(1))),p=i(()=>o.value-o.value*s.value/100),r=i(()=>t.radius*2+f*2),m=w(),n=i(()=>m.isDarkMode?"#F3F4F6":"#000000");return(d,j)=>(h(),_("div",{style:y({width:`${a.size}px`,height:`${a.size}px`})},[(h(),_("svg",{viewBox:`0 0 ${r.value} ${r.value}`},[e("circle",{class:"text-gray-200 stroke-current","stroke-width":f,cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent"},null,8,M),e("circle",{class:z(["progress-ring__circle stroke-current",a.color]),"stroke-width":f,"stroke-linecap":"round",cx:r.value/2,cy:r.value/2,r:t.radius,fill:"transparent","stroke-dasharray":o.value,"stroke-dashoffset":p.value},null,10,R),e("text",{x:r.value/2,y:r.value/2,"font-size":"16","text-anchor":"middle","alignment-baseline":"middle",style:y({fill:n.value})},B(s.value)+"% ",13,D)],8,N))],4))}},v=b(F,[["__scopeId","data-v-79750dcd"]]),I={class:"flex flex-col gap-4"},W=e("h3",{class:"text-lg font-bold sublink"},"The component code",-1),T={class:"flex flex-col md:flex-row gap-4"},O={class:"flex gap-4"},V=e("h3",{class:"text-lg font-bold sublink"},"How to use?",-1),A=e("p",null,"Import in the component you want to use and configure the props.",-1),E=`<script setup>
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
`,K={__name:"RadialProgressBar",setup(a){const t=u([]);P(()=>{t.value=C()});const s=[u(10),u(20),u(40)],o=n=>{s.forEach(d=>{d.value=Math.min(Math.max(d.value+n,0),100)})},p=()=>o(10),r=()=>o(-10),m=()=>{s[0].value=10,s[1].value=20,s[2].value=40};return(n,d)=>(h(),S(k,{sublinks:t.value},{subtitle:g(()=>[$(" Radial Progress Bar with Tailwind CSS. ")]),content:g(()=>[e("div",I,[W,l(c(x),{"template-code":E,"file-name":"RadialProgressbar.vue"},{default:g(()=>[e("div",T,[e("div",O,[l(c(v),{size:70,progress:s[0].value},null,8,["progress"]),l(c(v),{size:70,progress:s[1].value},null,8,["progress"]),l(c(v),{size:70,progress:s[2].value},null,8,["progress"])]),e("div",{class:"flex flex-col gap-2"},[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:p},"+ 10"),e("button",{class:"bg-red-500/20 hover:bg-red-500/30 px-2 py-1 rounded-lg",onClick:r},"- 10")]),e("div",null,[e("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg",onClick:m},"Reset")])])]),_:1}),V,A,l(c(x),{"template-code":L,"file-name":"App.vue"})])]),_:1},8,["sublinks"]))}};export{K as default};
