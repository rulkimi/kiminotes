import{P as l}from"./PageLayout-RPVzVfeT.js";import{_ as c}from"./Tooltip.vue_vue_type_style_index_0_scoped_442f00af_lang-BsmlTOmy.js";import{r as e,o as i,c as r,w as t,a as o,b as f,u as m,d as s}from"./index-DbHrvn2c.js";const u=s("span",{class:"font-mono"},"offsetHeight()",-1),d=s("span",{class:"font-mono"},"getBoundingClientRect()",-1),g={__name:"ScrollOffset",setup(p){const n=e(`<template>
  <nav ref="navbar" class="fixed pb-2 w-full z-20 top-0 start-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <div class="flex items-center">
          <ul class="items-center flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row">
            <li v-for="menu in menus">
              <a
                href="#"
                class="block py-2 px-3 text-text md:p-0"
                @click.prevent="scroll(menu.ref)"
              >
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
`),a=e(`import { ref, inject } from 'vue';
import BaseButton from './BaseButton.vue';

const navbar = ref(null);
const menus = ref([
  { name: 'About', ref: 'about'},
  { name: 'Projects', ref: 'projects'},
  { name: 'Aspirations', ref: 'aspirations'},
]);

const sectionRefs = inject('sectionRefs');

const scroll = (refName) => {
  if (sectionRefs[refName]?.value) {
    const element = sectionRefs[refName].value;
    const navbarHeight = navbar.value.offsetHeight || 0;

    // Calculate the offset position
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
};
`);return(v,x)=>(i(),r(l,null,{subtitle:t(()=>[o(" Get element height by using "),u,o(" and offset the scroll using "),d]),content:t(()=>[f(m(c),{"script-code":a.value,"template-code":n.value},null,8,["script-code","template-code"])]),_:1}))}};export{g as default};