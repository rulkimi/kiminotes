import{r,o as w,e as T,d as t,k as S,c as C,n as I,a as c,t as W,j as D,B as j,C as P,y as E,s as L,w as o,b as i,u as n,v as M,D as H}from"./index-povdJ_7Q.js";/* empty css                                                                                   */import{_ as y}from"./PreviewBlock-CN94VSsD.js";import{P as R}from"./PageLayout-Cu7Yr9al.js";import{g as B}from"./index-DQwBvNK9.js";const m={__name:"Tooltip",props:{content:{type:String,required:!1},delay:{type:Number,default:100},direction:{type:String,default:"right"},customStyles:{type:String,default:""},theme:{type:String,default:"dark",validator:a=>["dark","light"].includes(a)},width:{type:String,default:"max-w-[500px]"}},setup(a){const h=a,u=r(!1),e=r(null),b=r(null),_=()=>{const d=b.value.nextElementSibling,{top:s,left:p,right:g,height:v}=d.getBoundingClientRect();e.value=setTimeout(()=>{u.value=!0,P(()=>{const l=document.querySelector(".tooltip-tip"),$={top:{top:`${s-(l.offsetHeight+10)}px`,left:`${Math.max(p+d.offsetWidth/2-l.offsetWidth/2,10)}px`},bottom:{top:`${s+v+10}px`,left:`${Math.max(p+d.offsetWidth/2-l.offsetWidth/2,10)}px`},left:{top:`${s+v/2-l.offsetHeight/2}px`,left:`${Math.max(p-l.offsetWidth-10,10)}px`},right:{top:`${s+v/2-l.offsetHeight/2}px`,left:`${Math.min(p+d.offsetWidth+10,window.innerWidth-l.offsetWidth)}px`}},O=(f=>{const x={top:s-l.offsetHeight-10,bottom:window.innerHeight-(s+v+15)-l.offsetHeight,left:p-l.offsetWidth,right:window.innerWidth-g-l.offsetWidth};return{top:x.top<10,bottom:x.bottom<10,left:x.left<10,right:x.right<10}[f]?f==="top"?"bottom":f==="bottom"?"top":f==="left"?"right":"left":f})(h.direction);Object.assign(l.style,$[O])})},h.delay)},k=()=>{clearTimeout(e.value),u.value=!1};return(d,s)=>(w(),T("div",{class:"inline-block",onMouseenter:_,onMouseleave:k},[t("span",{ref_key:"slotRef",ref:b,style:{display:"none"}},null,512),t("div",null,[S(d.$slots,"default")]),(w(),C(j,{to:"body"},[u.value?(w(),T("div",{key:0,class:I(["tooltip-tip fixed z-50 text-start text-sm transform p-2 border shadow-md rounded-lg",a.width,a.direction,a.customStyles||(a.theme==="dark"?"bg-black text-white font-light border-black":"bg-white border-gray-300 text-black")])},[S(d.$slots,"content",{},()=>[c(W(a.content),1)])],2)):D("",!0)]))],32))}},V="/kiminotes/assets/cute-cat-2-BJUvLVyA.png",z="/kiminotes/assets/cute-cat-DvG7ZVcn.png",A={class:"flex flex-col gap-4"},N=t("h3",{class:"text-lg font-bold sublink"},"The component code",-1),U={class:"grid grid-cols-2 gap-2"},q=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),J=t("h3",{class:"text-lg font-bold sublink"},"Tooltip Direction and Theme",-1),Y=t("p",null,[c(" The tooltip direction can be changed by configuring the "),t("span",{class:"font-mono"},"direction"),c(" prop. Light and dark themes are also available by configuring the "),t("span",{class:"font-mono"},"theme"),c(" prop. ")],-1),F={class:"flex gap-6"},G={class:"grid grid-cols-2 gap-2"},Z=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),K=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),Q=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),X=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),tt=t("span",null,"Theme:",-1),et={class:"flex items-center space-x-4"},ot={for:"theme-light",class:"flex items-center space-x-2"},st=t("span",null,"Light",-1),lt={for:"theme-dark",class:"flex items-center space-x-2"},it=t("span",null,"Dark",-1),nt=t("h3",{class:"text-lg font-bold sublink"},"Customizing the styles",-1),at=t("p",null,[c("You can customize the background and text color by using the "),t("span",{class:"font-mono"},"custom-styles"),c(" prop.")],-1),rt=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),dt=t("h3",{class:"text-lg font-bold sublink"},"Customizing with HTML",-1),ct=t("p",null,[c(" Want to do more than just customizing the background and the text color? You can even use html to write the content by wrapping it inside "),t("span",{class:"font-mono"},"<template #content>...</template>")],-1),pt={class:"p-4 bg-white rounded shadow-lg max-w-xs"},mt={class:"flex items-center mb-2"},ht={class:"text-gray-700 font-medium"},ut=t("div",{class:"mt-4"},[t("p",{class:"text-sm text-gray-600 mb-2"},"Here's a list of tasks for today:"),t("ul",{class:"list-disc list-inside text-gray-700"},[t("li",null,"Meeting at 10 AM"),t("li",null,"Lunch with client"),t("li",null,"Project deadline")])],-1),gt=t("table",{class:"mt-4 w-full text-sm text-left text-gray-500"},[t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-2 py-1"},"Task"),t("th",{scope:"col",class:"px-2 py-1"},"Status")])]),t("tbody",null,[t("tr",{class:"bg-white border-b"},[t("td",{class:"px-2 py-1"},"Design Mockup"),t("td",{class:"px-2 py-1 text-green-600"},"Completed")]),t("tr",{class:"bg-white"},[t("td",{class:"px-2 py-1"},"Client Review"),t("td",{class:"px-2 py-1 text-red-600"},"Pending")])])],-1),ft=t("p",{class:"text-sm text-gray-600 mt-2"},"JUST CATS",-1),bt=t("div",{class:"flex mt-4"},[t("img",{src:V,alt:"Sample Image",class:"w-24 h-40 rounded shadow-lg mx-auto"}),t("img",{src:z,alt:"Sample Image",class:"w-24 h-40 rounded shadow-lg mx-auto"})],-1),vt=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),Mt={__name:"TooltipComponent",setup(a){const h=r([]);E(()=>{h.value=B()});const u=r(`<script setup>
import { ref, nextTick } from 'vue';

const props = defineProps({
  content: {
    type: String,
    required: false,
  },
  delay: {
    type: Number,
    default: 100,
  },
  direction: {
    type: String,
    default: 'right',
  },
  customStyles: {
    type: String,
    default: '',
  },
  theme: {
    type: String,
    default: 'dark',
    validator: value => ['dark', 'light'].includes(value),
  },
  width: {
    type: String,
    default: 'max-w-[500px]'
  }
});

const active = ref(false);
const timeout = ref(null);
const slotRef = ref(null);

const showTip = () => {
  const slotElement = slotRef.value.nextElementSibling;
  const { top, left, right, height } = slotElement.getBoundingClientRect();

  timeout.value = setTimeout(() => {
    active.value = true;
    // adjust tooltip position based on slotElement's position
    nextTick(() => {
      const tooltip = document.querySelector('.tooltip-tip');
      const positions = {
        top: { 
          top: \`\${top - (tooltip.offsetHeight + 10)}px\`,
          left: \`\${Math.max(left + (slotElement.offsetWidth / 2) - (tooltip.offsetWidth / 2), 10)}px\` // Prevent overflow on the left
        },
        bottom: {
          top: \`\${top + height + 10}px\`,
          left: \`\${Math.max(left + (slotElement.offsetWidth / 2) - (tooltip.offsetWidth / 2), 10)}px\` // Prevent overflow on the left
        },
        left: {
          top: \`\${top + (height / 2) - (tooltip.offsetHeight / 2)}px\`,
          left: \`\${Math.max(left - tooltip.offsetWidth - 10, 10)}px\` // Prevent overflow on the left
        },
        right: {
          top: \`\${top + (height / 2) - (tooltip.offsetHeight / 2)}px\`,
          left: \`\${Math.min(left + slotElement.offsetWidth + 10, window.innerWidth - tooltip.offsetWidth)}px\` // Prevent overflow on the right
        },
      };
      // check for overflow and adjust position
      const overflowCheck = (pos) => {
        const space = {
          top: top - tooltip.offsetHeight - 10,
          bottom: window.innerHeight - (top + height + 15) - tooltip.offsetHeight,
          left: left - tooltip.offsetWidth,
          right: window.innerWidth - right - tooltip.offsetWidth,
        };

        const isOverflowing = {
          top: space.top < 10,
          bottom: space.bottom < 10,
          left: space.left < 10,
          right: space.right < 10,
        };
        return isOverflowing[pos] ? 
          (pos === 'top' ? 'bottom' : pos === 'bottom' ? 'top' : pos === 'left' ? 'right' : 'left') : pos;
      };

      const adjustedDirection = overflowCheck(props.direction);
      Object.assign(tooltip.style, positions[adjustedDirection]);
    });
  }, props.delay);
};

const hideTip = () => {
  clearTimeout(timeout.value);
  active.value = false;
};
<\/script>

<template>
  <div 
    class="inline-block"
    @mouseenter="showTip"
    @mouseleave="hideTip"
  >
    <!-- Wrapping slot content -->
    <span ref="slotRef" style="display: none;"></span>
    <div>
      <slot></slot>
    </div>
    <!-- Tooltip content -->
    <teleport to="body">
      <div
        v-if="active"
        :class="[
          'tooltip-tip fixed z-50 text-start text-sm transform p-2 border shadow-md rounded-lg',
          width,
          direction,
          customStyles || (theme === 'dark' ? 'bg-black text-white font-light border-black' : 'bg-white border-gray-300 text-black')
        ]"
      >
        <slot name="content">{{ content }}</slot>
      </div>
    </teleport>
  </div>
</template>
`),e=r("dark"),b=r(`<template>
  <Tooltip content="I appear on left" direction="left" theme="${e.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
  <Tooltip content="I appear on right" direction="right" theme="${e.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
  <Tooltip content="I appear on top!" direction="top" theme="${e.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
  <Tooltip content="I appear on bottom!" direction="bottom" theme="${e.value}">
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>
`),_=r(`<template>
  <Tooltip
    content="I have indigo background and white bolded text color!" 
    custom-styles="bg-indigo-500 text-white font-bold"
  >
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>`),k=r(`<template>
  <Tooltip theme="light" direction="bottom">
    <template #content>
      <div class="p-4 bg-white rounded shadow-lg max-w-xs">
        <!-- FontAwesome icon and text -->
        <div class="flex items-center mb-2">
          <font-awesome-icon :icon="['fas', 'calendar-alt']" class="text-green-500 mr-2" />
          <span class="text-gray-700 font-medium">Today is {{ new Date().toDateString() }}. I can add icons!</span>
        </div>

        <!-- Additional HTML content -->
        <div class="mt-4">
          <p class="text-sm text-gray-600 mb-2">Here's a list of tasks for today:</p>
          <ul class="list-disc list-inside text-gray-700">
            <li>Meeting at 10 AM</li>
            <li>Lunch with client</li>
            <li>Project deadline</li>
          </ul>
        </div>

        <!-- Tailwind CSS table -->
        <table class="mt-4 w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-2 py-1">Task</th>
              <th scope="col" class="px-2 py-1">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="px-2 py-1">Design Mockup</td>
              <td class="px-2 py-1 text-green-600">Completed</td>
            </tr>
            <tr class="bg-white">
              <td class="px-2 py-1">Client Review</td>
              <td class="px-2 py-1 text-red-600">Pending</td>
            </tr>
          </tbody>
        </table>

        <!-- Image with Tailwind styling -->
        <p class="text-sm text-gray-600 mt-2">JUST CATS</p>
        <div class="flex mt-4">
          <img src="@/assets/cute-cat-2.png" alt="Sample Image" class="w-24 h-40 rounded shadow-lg mx-auto" />
          <img src="@/assets/cute-cat.png" alt="Sample Image" class="w-24 h-40 rounded shadow-lg mx-auto" />
        </div>
      </div>
    </template>
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>
`);return(d,s)=>{const p=L("font-awesome-icon");return w(),C(R,{sublinks:h.value},{subtitle:o(()=>[c(" Tooltip component with Tailwind CSS. ")]),content:o(()=>[t("div",A,[N,i(n(y),{"template-code":u.value,"file-name":"Tooltip.vue"},{default:o(()=>[t("div",U,[i(n(m),{content:"I'm hovered"},{default:o(()=>[q]),_:1})])]),_:1},8,["template-code"]),J,Y,i(n(y),{"template-code":b.value,"file-name":"Tooltip.vue"},{default:o(()=>[t("div",F,[t("div",G,[i(n(m),{content:"I appear on left",direction:"left",theme:e.value},{default:o(()=>[Z]),_:1},8,["theme"]),i(n(m),{content:"I appear on right",direction:"right",theme:e.value},{default:o(()=>[K]),_:1},8,["theme"]),i(n(m),{content:"I appear on top!",direction:"top",theme:e.value},{default:o(()=>[Q]),_:1},8,["theme"]),i(n(m),{content:"I appear on bottom!",direction:"bottom",theme:e.value},{default:o(()=>[X]),_:1},8,["theme"])]),t("div",null,[tt,t("div",et,[t("label",ot,[M(t("input",{type:"radio",id:"theme-light",value:"light","onUpdate:modelValue":s[0]||(s[0]=g=>e.value=g),class:"form-radio"},null,512),[[H,e.value]]),st]),t("label",lt,[M(t("input",{type:"radio",id:"theme-dark",value:"dark","onUpdate:modelValue":s[1]||(s[1]=g=>e.value=g),class:"form-radio"},null,512),[[H,e.value]]),it])])])])]),_:1},8,["template-code"]),nt,at,i(n(y),{"template-code":_.value},{default:o(()=>[i(n(m),{content:"I have indigo background and white bolded text color!","custom-styles":"bg-indigo-500 text-white font-bold"},{default:o(()=>[rt]),_:1})]),_:1},8,["template-code"]),dt,ct,i(n(y),{"template-code":k.value},{default:o(()=>[i(n(m),{theme:"light",direction:"bottom"},{content:o(()=>[t("div",pt,[t("div",mt,[i(p,{icon:["fas","calendar-alt"],class:"text-green-500 mr-2"}),t("span",ht,"Today is "+W(new Date().toDateString())+". I can add icons!",1)]),ut,gt,ft,bt])]),default:o(()=>[vt]),_:1})]),_:1},8,["template-code"])])]),_:1},8,["sublinks"])}}};export{Mt as default};
