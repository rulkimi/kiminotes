import{_ as I,r as s,c as C,w as i,o as a,a as l,b as r,d as t,T as m,e as n,f as u,F as f,t as _,p as T,g as P}from"./index-DxF87Fs1.js";import{_ as $}from"./PageLayout-M7EN2Iq6.js";import{_ as j}from"./PreviewBlock-USwLmdCA.js";const g=o=>(T("data-v-09c7c49e"),o=o(),P(),o),A={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"},B=g(()=>t("span",{key:"title"},"No transition",-1)),N=["onClick"],O=g(()=>t("span",{key:"title",class:"text-nowrap"},[t("span",{class:"font-mono"},"appear"),l(" attribute")],-1)),S=["onClick"],W=g(()=>t("span",{key:"title"},"Transition",-1)),L=["onClick"],V={__name:"ListTransition",setup(o){const x=s([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Watermelon"},{id:4,name:"Papaya"},{id:5,name:"Pineapple"}]),v=s([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Watermelon"},{id:4,name:"Papaya"},{id:5,name:"Pineapple"}]),y=s([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Watermelon"},{id:4,name:"Papaya"},{id:5,name:"Pineapple"}]),d=(p,k)=>{const e=p.findIndex(c=>c.id===k);e!==-1&&p.splice(e,1)},b=s(`<transition-group class="relative flex flex-col gap-1" name="list" tag="ul" appear>
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
`);return(p,k)=>(a(),C($,null,{subtitle:i(()=>[l(" To make a smooth transition when an item is deleted or added from a list. ")]),content:i(()=>[r(j,{"template-code":b.value,"script-code":h.value,"style-code":w.value},{default:i(()=>[t("div",A,[r(m,{class:"relative flex flex-col gap-1 w-[150px]",tag:"ul"},{default:i(()=>[B,(a(!0),n(f,null,u(x.value,e=>(a(),n("li",{class:"flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1",key:e.id},[l(_(e.name)+" ",1),t("button",{class:"close-icon",onClick:c=>d(x.value,e.id)},"x",8,N)]))),128))]),_:1}),r(m,{class:"relative flex flex-col gap-1 w-[150px]",name:"list",tag:"ul",appear:""},{default:i(()=>[O,(a(!0),n(f,null,u(y.value,e=>(a(),n("li",{class:"flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1",key:e.id},[l(_(e.name)+" ",1),t("button",{class:"close-icon",onClick:c=>d(y.value,e.id)},"x",8,S)]))),128))]),_:1}),r(m,{class:"relative flex flex-col gap-1 w-[150px]",name:"list",tag:"ul"},{default:i(()=>[W,(a(!0),n(f,null,u(v.value,e=>(a(),n("li",{class:"flex items-center justify-between bg-gray-200 rounded-lg px-2 py-1",key:e.id},[l(_(e.name)+" ",1),t("button",{class:"close-icon",onClick:c=>d(v.value,e.id)},"x",8,L)]))),128))]),_:1})])]),_:1},8,["template-code","script-code","style-code"])]),_:1}))}},G=I(V,[["__scopeId","data-v-09c7c49e"]]);export{G as default};
