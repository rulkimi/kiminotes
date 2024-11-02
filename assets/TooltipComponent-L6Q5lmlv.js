import{_ as B,r as p,o as b,e as S,d as t,k as C,c as I,n as H,j as $,a as c,t as P,A as E,B as R,s as L,w as s,b as l,u as i,v as W,C as O}from"./index-DZ3wKJZw.js";import{_}from"./Tooltip.vue_vue_type_style_index_0_scoped_e920ed47_lang-B9oopjPO.js";import{P as V}from"./PageLayout-CvfnPwJl.js";const z={__name:"Tooltip",props:{content:{type:String,required:!1},delay:{type:Number,default:100},direction:{type:String,default:"right"},customStyles:{type:String,default:""},theme:{type:String,default:"dark",validator:r=>["dark","light"].includes(r)},width:{type:String,default:"max-w-[500px]"},noArrow:{type:Boolean,default:!1},alwaysAppear:{type:Boolean,default:!1}},setup(r){const f=r,e=p(!1),v=p(null),x=p(null),y=p("left"),M=()=>{const n=x.value.nextElementSibling,{top:a,left:u,right:D,height:w}=n.getBoundingClientRect();v.value=setTimeout(()=>{e.value=!0,R(()=>{const o=document.querySelector(".tooltip-tip");o.style.setProperty("--arrow-color",getComputedStyle(o).backgroundColor);const A={top:{top:`${a-(o.offsetHeight+10)}px`,left:`${Math.max(u+n.offsetWidth/2-o.offsetWidth/2,10)}px`},bottom:{top:`${a+w+10}px`,left:`${Math.max(u+n.offsetWidth/2-o.offsetWidth/2,10)}px`},left:{top:`${a+w/2-o.offsetHeight/2}px`,left:`${Math.max(u-o.offsetWidth-10,10)}px`},right:{top:`${a+w/2-o.offsetHeight/2}px`,left:`${Math.min(u+n.offsetWidth+10,window.innerWidth-o.offsetWidth)}px`}},k=(T=>{const d={top:a-o.offsetHeight-10,bottom:window.innerHeight-(a+w+15)-o.offsetHeight,left:u-o.offsetWidth,right:window.innerWidth-D-o.offsetWidth},g={top:d.top<10,bottom:d.bottom<10,left:d.left<10,right:d.right<10},j={top:"bottom",bottom:"top",left:"right",right:"left"};return g.left&&g.right?d.top>d.bottom?"top":"bottom":g.top&&g.bottom?d.left>d.right?"right":"left":g[T]?j[T]:T})(f.direction);y.value={right:"left",left:"right",top:"bottom",bottom:"top"}[k]||k,Object.assign(o.style,A[k])})},f.delay)},m=()=>{f.alwaysAppear||(clearTimeout(v.value),e.value=!1)};return(n,a)=>(b(),S("div",{class:"inline-block",onMouseenter:M,onMouseleave:m},[t("span",{ref_key:"slotRef",ref:x,style:{display:"none"}},null,512),t("div",null,[C(n.$slots,"default",{},void 0,!0)]),(b(),I(E,{to:"body"},[e.value?(b(),S("div",{key:0,class:H(["tooltip-tip fixed z-50 text-start text-sm transform p-2 rounded-lg",r.width,r.direction,r.customStyles||(r.theme==="dark"?"bg-black text-white font-light border-black":"bg-white border border-gray-300 text-black")])},[r.noArrow?$("",!0):(b(),S("div",{key:0,class:H(["tooltip-arrow",`arrow-${y.value}`])},null,2)),C(n.$slots,"content",{},()=>[c(P(r.content),1)],!0)],2)):$("",!0)]))],32))}},h=B(z,[["__scopeId","data-v-e920ed47"]]),N="/kiminotes/assets/cute-cat-2-BJUvLVyA.png",U="/kiminotes/assets/cute-cat-DvG7ZVcn.png",q={class:"flex flex-col gap-4"},Y=t("h3",{class:"text-lg font-bold sublink"},"The component code",-1),J=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),X=t("h3",{class:"text-lg font-bold sublink"},"Tooltip Direction and Theme",-1),F=t("p",null,[c(" The tooltip direction can be changed by configuring the "),t("span",{class:"font-mono"},"direction"),c(" prop. Light and dark themes are also available by configuring the "),t("span",{class:"font-mono"},"theme"),c(" prop. ")],-1),G={class:"flex gap-6"},Z={class:"grid grid-cols-2 gap-2"},K=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),Q=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),tt=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),et=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),ot=t("span",null,"Theme:",-1),st={class:"flex items-center space-x-4"},lt={for:"theme-light",class:"flex items-center space-x-2"},at=t("span",null,"Light",-1),it={for:"theme-dark",class:"flex items-center space-x-2"},rt=t("span",null,"Dark",-1),nt=t("h3",{class:"text-lg font-bold sublink"},"Customizing the styles",-1),pt=t("p",null,[c("You can customize the background and text color by using the "),t("span",{class:"font-mono"},"custom-styles"),c(" prop.")],-1),dt=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),ct=t("h3",{class:"text-lg font-bold sublink"},"Customizing with HTML",-1),ht=t("p",null,[c(" Want to do more than just customizing the background and the text color? You can even use html to write the content by wrapping it inside "),t("span",{class:"font-mono"},"<template #content>...</template>")],-1),mt={class:"p-4 bg-white rounded shadow-lg max-w-xs"},ft={class:"flex items-center mb-2"},ut={class:"text-gray-700 font-medium"},gt=t("div",{class:"mt-4"},[t("p",{class:"text-sm text-gray-600 mb-2"},"Here's a list of tasks for today:"),t("ul",{class:"list-disc list-inside text-gray-700"},[t("li",null,"Meeting at 10 AM"),t("li",null,"Lunch with client"),t("li",null,"Project deadline")])],-1),bt=t("table",{class:"mt-4 w-full text-sm text-left text-gray-500"},[t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-2 py-1"},"Task"),t("th",{scope:"col",class:"px-2 py-1"},"Status")])]),t("tbody",null,[t("tr",{class:"bg-white border-b"},[t("td",{class:"px-2 py-1"},"Design Mockup"),t("td",{class:"px-2 py-1 text-green-600"},"Completed")]),t("tr",{class:"bg-white"},[t("td",{class:"px-2 py-1"},"Client Review"),t("td",{class:"px-2 py-1 text-red-600"},"Pending")])])],-1),vt=t("p",{class:"text-sm text-gray-600 mt-2"},"JUST CATS",-1),xt=t("div",{class:"flex mt-4"},[t("img",{src:N,alt:"Sample Image",class:"w-24 h-40 rounded shadow-lg mx-auto"}),t("img",{src:U,alt:"Sample Image",class:"w-24 h-40 rounded shadow-lg mx-auto"})],-1),yt=t("button",{class:"bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg"},"Hover Over Me!",-1),St={__name:"TooltipComponent",setup(r){const f=p(`<script setup>
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
  },
  noArrow: {
    type: Boolean,
    default: false,
  }
});

const active = ref(false);
const timeout = ref(null);
const slotRef = ref(null);
const arrowPosition = ref('left');

const showTip = () => {
  const slotElement = slotRef.value.nextElementSibling;
  const { top, left, right, height } = slotElement.getBoundingClientRect();

  timeout.value = setTimeout(() => {
    active.value = true;
    // adjust tooltip position based on slotElement's position
    nextTick(() => {
      const tooltip = document.querySelector('.tooltip-tip');
      tooltip.style.setProperty('--arrow-color', getComputedStyle(tooltip).backgroundColor);
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
      const overflowCheck = (position) => {
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

        const directionMap = {
          top: 'bottom',
          bottom: 'top',
          left: 'right',
          right: 'left'
        };

        // check for both left and right overflow
        if (isOverflowing.left && isOverflowing.right) {
          return space.top > space.bottom ? 'top' : 'bottom';
        }

        // check for both top and bottom overflow
        if (isOverflowing.top && isOverflowing.bottom) {
          return space.left > space.right ? 'right' : 'left';
        }

        return isOverflowing[position] ? directionMap[position] : position;
      };

      const adjustedDirection = overflowCheck(props.direction);
      arrowPosition.value = {
        right: 'left',
        left: 'right',
        top: 'bottom',
        bottom: 'top'
      }[adjustedDirection] || adjustedDirection;
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
          'tooltip-tip fixed z-50 text-start text-sm transform p-2 shadow-md rounded-lg',
          width,
          direction,
          customStyles || (theme === 'dark' ? 'bg-black text-white font-light border-black' : 'bg-white border border-gray-300 text-black')
        ]"
      >
        <div
          v-if="!noArrow"
          class="tooltip-arrow"
          :class="\`arrow-\${arrowPosition}\`"
        ></div>
        <slot name="content">{{ content }}</slot>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-top {
  border-width: 5px 5px 0;
  border-color: var(--arrow-color, black) transparent transparent transparent; 
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow-bottom {
  border-width: 0 5px 5px;
  border-color: transparent transparent var(--arrow-color, black) transparent;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow-left {
  border-width: 5px 5px 5px 0;
  border-color: transparent var(--arrow-color, black) transparent transparent;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.arrow-right {
  border-width: 5px 0 5px 5px;
  border-color: transparent transparent transparent var(--arrow-color, black);
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
}
</style>
`),e=p("dark"),v=p(`<template>
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
`),x=p(`<template>
  <Tooltip
    content="I have indigo background and white bolded text color!" 
    custom-styles="bg-indigo-500 text-white font-bold"
  >
    <button class="bg-primary/20 hover:bg-primary/30 px-2 py-1 rounded-lg">Hover Over Me!</button>
  </Tooltip>
</template>`),y=p(`<template>
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
`);return(M,m)=>{const n=L("font-awesome-icon");return b(),I(V,null,{subtitle:s(()=>[c(" Tooltip component with Tailwind CSS. ")]),content:s(()=>[t("div",q,[Y,l(i(_),{"hide-code":"","template-code":f.value,"file-name":"Tooltip.vue"},{default:s(()=>[l(i(h),{content:"I'm hovered"},{default:s(()=>[J]),_:1})]),_:1},8,["template-code"]),X,F,l(i(_),{"template-code":v.value,"file-name":"Tooltip.vue"},{default:s(()=>[t("div",G,[t("div",Z,[l(i(h),{content:"I appear on left",direction:"left",theme:e.value},{default:s(()=>[K]),_:1},8,["theme"]),l(i(h),{content:"I appear on right",direction:"right",theme:e.value},{default:s(()=>[Q]),_:1},8,["theme"]),l(i(h),{content:"I appear on top!",direction:"top",theme:e.value},{default:s(()=>[tt]),_:1},8,["theme"]),l(i(h),{content:"I appear on bottom!",direction:"bottom",theme:e.value},{default:s(()=>[et]),_:1},8,["theme"])]),t("div",null,[ot,t("div",st,[t("label",lt,[W(t("input",{type:"radio",id:"theme-light",value:"light","onUpdate:modelValue":m[0]||(m[0]=a=>e.value=a),class:"form-radio"},null,512),[[O,e.value]]),at]),t("label",it,[W(t("input",{type:"radio",id:"theme-dark",value:"dark","onUpdate:modelValue":m[1]||(m[1]=a=>e.value=a),class:"form-radio"},null,512),[[O,e.value]]),rt])])])])]),_:1},8,["template-code"]),nt,pt,l(i(_),{"template-code":x.value},{default:s(()=>[l(i(h),{content:"I have indigo background and white bolded text color!","custom-styles":"bg-indigo-500 text-white font-bold"},{default:s(()=>[dt]),_:1})]),_:1},8,["template-code"]),ct,ht,l(i(_),{"template-code":y.value},{default:s(()=>[l(i(h),{theme:"light",direction:"bottom"},{content:s(()=>[t("div",mt,[t("div",ft,[l(n,{icon:["fas","calendar-alt"],class:"text-green-500 mr-2"}),t("span",ut,"Today is "+P(new Date().toDateString())+". I can add icons!",1)]),gt,bt,vt,xt])]),default:s(()=>[yt]),_:1})]),_:1},8,["template-code"])])]),_:1})}}};export{St as default};
