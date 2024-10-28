import{P as w}from"./PageLayout-BpadzOpk.js";import{_ as h}from"./Tooltip.vue_vue_type_style_index_0_scoped_e920ed47_lang-CKT4dJ5N.js";import{r as d,i as x,o as g,e as y,d as e,z as _,k as z,n as b,c as C,w as t,a as o,b as s,u as l}from"./index-B84daWFs.js";const S={class:"absolute inset-[2px] rounded-2xl bg-gray-800 bg-opacity-90 p-4"},a={__name:"GlowingCard",props:{color:{type:String,required:!0},size:{type:String,default:"w-80 h-36"},circleSize:{type:String,default:"700px"}},setup(p){const i=p,n=d({x:0,y:0}),c=d(!1);function f(r){const u=r.currentTarget.getBoundingClientRect();n.value.x=r.clientX-u.left,n.value.y=r.clientY-u.top,c.value=!0}function m(){c.value=!1}const v=x(()=>({top:`${n.value.y}px`,left:`${n.value.x}px`,transform:"translate(-50%, -50%)",background:`radial-gradient(${i.color}, transparent, transparent)`,width:i.circleSize,height:i.circleSize,opacity:c.value?1:0,transition:"opacity 0.5s, top 0s, left 0s"}));return(r,u)=>(g(),y("div",{class:b(["relative bg-gray-800 rounded-2xl overflow-hidden group",p.size]),onMousemove:f,onMouseleave:m},[e("div",{class:"absolute rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100",style:_(v.value)},null,4),e("div",S,[z(r.$slots,"default")])],34))}},k={class:"flex flex-col gap-4"},G=e("h3",{class:"text-lg font-bold sublink"},"The component code",-1),H={class:"flex flex-col md:flex-row justify-center items-center gap-4 text-white bg-grid bg-gray-800 p-8 rounded-xl"},M=e("h3",{class:"text-lg font-bold sublink"},"How to use?",-1),$=e("p",null,[o(" The "),e("span",{class:"font-mono"},"GlowingCard"),o(" component is customizable using the following props: "),e("ul",{class:"list-disc list-inside"},[e("li",null,[e("span",{class:"font-mono"},"size:"),o(" Controls the dimensions of the card. You need to use Tailwind CSS classes like "),e("span",{class:"font-mono"},"w-48 h-36"),o(" to set the width and height.")]),e("li",null,[e("span",{class:"font-mono"},"color:"),o(" Defines the color of the glowing effect. You can pass any valid CSS color value such as HEX ("),e("span",{class:"font-mono"},'"#FF0000"'),o("), RGB ("),e("span",{class:"font-mono"},'"rgb(255, 0, 0)"'),o("), or HSL ("),e("span",{class:"font-mono"},'"hsl(0, 100%, 50%)"'),o("), as well as named colors like "),e("span",{class:"font-mono"},'"red"'),o(".")]),e("li",null,[e("span",{class:"font-mono"},"circleSize:"),o(" Adjusts the size of the glowing circle. Set this prop to control how large the glow extends beyond the card, with values like "),e("span",{class:"font-mono"},'"400px"'),o(" or "),e("span",{class:"font-mono"},'"700px"'),o(".")])]),o(" By modifying these props, you can easily adapt the look and feel of the "),e("span",{class:"font-mono"},"GlowingCard"),o(" to suit different design needs. ")],-1),B=e("p",{class:"mt-2"},[e("strong",null,"Note:"),o(" For the best visual effect, it is recommended to use the "),e("span",{class:"font-mono"},"GlowingCard"),o(" in a dark-themed layout or background. The glowing effect stands out more prominently against dark surfaces, enhancing the overall visual appeal. ")],-1),T={class:"flex flex-col md:flex-row justify-center items-center gap-4 text-white"},Y={__name:"GlowingCardComponent",setup(p){const i=d(`<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: 'w-80 h-36'
  },
  circleSize: {
    type: String,
    default: '700px'
  }
});

const position = ref({ x: 0, y: 0 });
const isHovering = ref(false);

function handleMouseMove(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  position.value.x = event.clientX - rect.left;
  position.value.y = event.clientY - rect.top;
  isHovering.value = true;
}

function handleMouseLeave() {
  isHovering.value = false;
}

const glowStyle = computed(() => ({
  top: \`\${position.value.y}px\`,
  left: \`\${position.value.x}px\`,
  transform: 'translate(-50%, -50%)',
  background: \`radial-gradient(\${props.color}, transparent, transparent)\`,
  width: props.circleSize,
  height: props.circleSize,
  opacity: isHovering.value ? 1 : 0,
  transition: 'opacity 0.5s, top 0s, left 0s', // smooth opacity change without repositioning
}));
<\/script>

<template>
  <div
    class="relative bg-gray-800 rounded-2xl overflow-hidden group"
    :class="size"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="absolute rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      :style="glowStyle"
    ></div>
    <div class="absolute inset-[2px] rounded-2xl bg-gray-800 bg-opacity-90 p-4">
      <slot></slot>
    </div>
  </div>
</template>
`),n=d(`<GlowingCard size="w-64 h-40" color="hsl(120, 100%, 50%)" circle-size="500px">
  Hover here
</GlowingCard>
<GlowingCard size="w-56 h-32" color="rgba(255, 0, 0, 0.8)" circle-size="450px">
  Continue here
</GlowingCard>
<GlowingCard size="w-48 h-36" color="#FF5733" circle-size="400px">
  ...and here
</GlowingCard>
`);return(c,f)=>(g(),C(w,null,{subtitle:t(()=>[o(" Glowing cornder hover effects with Tailwind CSS. ")]),content:t(()=>[e("div",k,[G,s(l(h),{"template-code":i.value,"file-name":"GlowingCard.vue"},{default:t(()=>[e("div",H,[s(l(a),{size:"w-48 h-36",color:"red","circle-size":"400px"},{default:t(()=>[o(" Hover here ")]),_:1}),s(l(a),{size:"w-48 h-36",color:"yellow","circle-size":"400px"},{default:t(()=>[o(" Continue here ")]),_:1}),s(l(a),{size:"w-48 h-36",color:"green","circle-size":"400px"},{default:t(()=>[o(" ...and here ")]),_:1})])]),_:1},8,["template-code"]),M,$,B,s(l(h),{"template-code":n.value},{default:t(()=>[e("div",T,[s(l(a),{size:"w-64 h-40",color:"hsl(120, 100%, 50%)","circle-size":"500px"},{default:t(()=>[o(" Hover here ")]),_:1}),s(l(a),{size:"w-56 h-32",color:"rgba(255, 0, 0, 0.8)","circle-size":"450px"},{default:t(()=>[o(" Continue here ")]),_:1}),s(l(a),{size:"w-48 h-36",color:"#FF5733","circle-size":"400px"},{default:t(()=>[o(" ...and here ")]),_:1})])]),_:1},8,["template-code"])])]),_:1}))}};export{Y as default};
