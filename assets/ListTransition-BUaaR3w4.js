import{_ as I,r as s,c as C,w as i,o as a,a as o,b as d,d as t,T as u,e as n,f,F as _,t as g,p as T,g as P}from"./index-B_OwHR-2.js";import{P as j}from"./PageLayout-BrEWfv-p.js";import{_ as B}from"./PreviewBlock-BTnA5iJh.js";const x=l=>(T("data-v-335c6fea"),l=l(),P(),l),L={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"},N=x(()=>t("span",{key:"title"},"No transition",-1)),S=["onClick"],$=x(()=>t("span",{key:"title",class:"text-nowrap"},[t("span",{class:"font-mono"},"appear"),o(" attribute")],-1)),V=["onClick"],A=x(()=>t("span",{key:"title"},"Transition",-1)),F=["onClick"],O={__name:"ListTransition",setup(l){const c=s([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Watermelon"},{id:4,name:"Papaya"},{id:5,name:"Pineapple"}]),v=s([...c.value]),y=s([...c.value]),p=(m,k)=>{const e=m.findIndex(r=>r.id===k);e!==-1&&m.splice(e,1)},b=s(`<transition-group class="relative flex flex-col gap-1" name="list" tag="ul" appear>
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
`);return(m,k)=>(a(),C(j,null,{subtitle:i(()=>[o(" To make a smooth transition when an item is deleted or added from a list. ")]),content:i(()=>[d(B,{"template-code":b.value,"script-code":h.value,"style-code":w.value},{default:i(()=>[t("div",L,[d(u,{class:"relative flex flex-col gap-1 w-[150px]",tag:"ul"},{default:i(()=>[N,(a(!0),n(_,null,f(c.value,e=>(a(),n("li",{class:"flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1",key:e.id},[o(g(e.name)+" ",1),t("button",{class:"close-icon",onClick:r=>p(c.value,e.id)},"x",8,S)]))),128))]),_:1}),d(u,{class:"relative flex flex-col gap-1 w-[150px]",name:"list",tag:"ul",appear:""},{default:i(()=>[$,(a(!0),n(_,null,f(y.value,e=>(a(),n("li",{class:"flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1",key:e.id},[o(g(e.name)+" ",1),t("button",{class:"close-icon",onClick:r=>p(y.value,e.id)},"x",8,V)]))),128))]),_:1}),d(u,{class:"relative flex flex-col gap-1 w-[150px]",name:"list",tag:"ul"},{default:i(()=>[A,(a(!0),n(_,null,f(v.value,e=>(a(),n("li",{class:"flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1",key:e.id},[o(g(e.name)+" ",1),t("button",{class:"close-icon",onClick:r=>p(v.value,e.id)},"x",8,F)]))),128))]),_:1})])]),_:1},8,["template-code","script-code","style-code"])]),_:1}))}},G=I(O,[["__scopeId","data-v-335c6fea"]]);export{G as default};
