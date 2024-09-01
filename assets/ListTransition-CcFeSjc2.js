import{_ as I,r as s,o as a,c as C,w as i,a as n,b as d,d as t,T as u,e as l,f,F as g,u as T,t as _,p as P,g as j}from"./index-povdJ_7Q.js";import{P as B}from"./PageLayout-Cu7Yr9al.js";/* empty css                                                                                   */import{_ as L}from"./PreviewBlock-CN94VSsD.js";const x=o=>(P("data-v-c9baf1ac"),o=o(),j(),o),N={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"},S=x(()=>t("span",{key:"title"},"No transition",-1)),$=["onClick"],V=x(()=>t("span",{key:"title",class:"text-nowrap"},[t("span",{class:"font-mono"},"appear"),n(" attribute")],-1)),A=["onClick"],F=x(()=>t("span",{key:"title"},"Transition",-1)),O=["onClick"],W={__name:"ListTransition",setup(o){const c=s([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Watermelon"},{id:4,name:"Papaya"},{id:5,name:"Pineapple"}]),v=s([...c.value]),y=s([...c.value]),p=(m,b)=>{const e=m.findIndex(r=>r.id===b);e!==-1&&m.splice(e,1)},k=s(`<transition-group class="relative flex flex-col gap-1" name="list" tag="ul" appear>
  <li
    class="flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1"
    v-for="item in items"
    :key="item.id"
  >
    {{ item.name }}
    <button
      class="close-icon"
      @click="removeItem(items, item.id)"
    >
      x
    </button>
  </li>
</transition-group>
`),h=s(`import { ref } from 'vue';

const items = ref([
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Orange' },
  { id: 3, name: 'Watermelon' },
  { id: 4, name: 'Papaya' },
  { id: 5, name: 'Pineapple' },
]);

const removeItem = (items, itemId) => {
  const index = items.findIndex(item => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
  }
};
`),w=s(`.list-enter-from, .list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-active, .list-leave-active {
  transition: all 0.4s ease;
}

.list-move {
  transition: all 0.3s ease;
}

.list-leave-active {
  position: absolute;
}
`);return(m,b)=>(a(),C(B,null,{subtitle:i(()=>[n(" To make a smooth transition when an item is deleted or added from a list. ")]),content:i(()=>[d(T(L),{"template-code":k.value,"script-code":h.value,"style-code":w.value},{default:i(()=>[t("div",N,[d(u,{class:"relative flex flex-col gap-1 w-[150px]",tag:"ul"},{default:i(()=>[S,(a(!0),l(g,null,f(c.value,e=>(a(),l("li",{class:"flex items-center justify-between bg-gray-200 dark:bg-slate-900 rounded-lg px-2 py-1",key:e.id},[n(_(e.name)+" ",1),t("button",{class:"close-icon",onClick:r=>p(c.value,e.id)},"x",8,$)]))),128))]),_:1}),d(u,{class:"relative flex flex-col gap-1 w-[150px]",name:"list",tag:"ul",appear:""},{default:i(()=>[V,(a(!0),l(g,null,f(y.value,e=>(a(),l("li",{class:"flex items-center justify-between bg-gray-200 dark:bg-slate-900 rounded-lg px-2 py-1",key:e.id},[n(_(e.name)+" ",1),t("button",{class:"close-icon",onClick:r=>p(y.value,e.id)},"x",8,A)]))),128))]),_:1}),d(u,{class:"relative flex flex-col gap-1 w-[150px]",name:"list",tag:"ul"},{default:i(()=>[F,(a(!0),l(g,null,f(v.value,e=>(a(),l("li",{class:"flex items-center justify-between bg-gray-200 dark:bg-slate-900 rounded-lg px-2 py-1",key:e.id},[n(_(e.name)+" ",1),t("button",{class:"close-icon",onClick:r=>p(v.value,e.id)},"x",8,O)]))),128))]),_:1})])]),_:1},8,["template-code","script-code","style-code"])]),_:1}))}},z=I(W,[["__scopeId","data-v-c9baf1ac"]]);export{z as default};
