import{P as E}from"./PageLayout-RPVzVfeT.js";import{_ as j,h as A,i as g,o as a,e as l,d as n,t as b,n as s,j as o,k as I,m as N,b as v,w as S,l as P,r as C,q as z,s as D,F,f as X,v as T,x as R,c as H,a as U,u as B}from"./index-DbHrvn2c.js";import{_ as L}from"./Tooltip.vue_vue_type_style_index_0_scoped_442f00af_lang-BsmlTOmy.js";const Y={key:0,class:"block mb-2"},G=["for"],J={key:0,class:"ml-1 text-red-500"},K={key:0,class:"absolute left-3 text-gray-500"},Q={key:1,class:"absolute right-3 text-gray-500"},W=["id","type","placeholder","required","value","disabled","readonly"],Z={__name:"FormInput",props:{modelValue:{type:[String,Number,null],required:!0},label:{type:String,required:!1},id:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,required:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1},inputClass:{type:String,required:!1},labelClass:{type:String,required:!1},isBlock:{type:Boolean,default:!0},width:{type:String,default:"w-full"}},emits:["update:modelValue","input","change"],setup(e,{emit:x}){const d=x,t=e,u=A(),p=f=>{d("update:modelValue",f.target.value),d("input",f.target.value)},w=f=>{d("change",f.target.value)},c=g(()=>u["prepend-icon"]),h=g(()=>u["append-icon"]),$=g(()=>({border:(t.error||t.errorMessage)&&!t.readonly,"border-red-300":t.error||t.errorMessage,"opacity-50 cursor-not-allowed":t.disabled,"pl-10":t.hasPrependIcon,"pr-10":t.hasAppendIcon}));return(f,y)=>(a(),l("fieldset",{class:s(e.width)},[e.label?(a(),l("div",Y,[n("label",{for:e.id,class:s(["text-sm font-medium text-black/60 dark:text-white/60",e.labelClass])},b(e.label),11,G),e.required&&!e.readonly?(a(),l("span",J,"*")):o("",!0)])):o("",!0),n("div",{class:s(["relative items-center h-[40px] bg-white",[e.inputClass,e.width,$.value,e.isBlock?"flex":"inline-flex",e.readonly?"border-b break-words !bg-transparent":"rounded-lg px-3"]])},[c.value?(a(),l("div",K,[I(f.$slots,"prepend-icon",{},void 0,!0)])):o("",!0),h.value?(a(),l("div",Q,[I(f.$slots,"append-icon",{},void 0,!0)])):o("",!0),n("input",N(f.$attrs,{id:e.id,type:e.type,placeholder:e.placeholder,required:e.required,value:e.modelValue,onInput:y[0]||(y[0]=m=>p(m)),onChange:y[1]||(y[1]=m=>w(m)),class:["block outline-none bg-transparent text-black",[e.width,{"no-arrows":e.type==="number"}]],disabled:e.disabled,readonly:e.readonly}),null,16,W)],2),v(P,{name:"shake-fade"},{default:S(()=>[e.errorMessage?(a(),l("small",{key:0,class:s(["block text-red-400",{"opacity-50":e.disabled}])},b(e.errorMessage),3)):o("",!0)]),_:1})],2))}},_=j(Z,[["__scopeId","data-v-841e4e37"]]),ee={key:0,class:"block mb-2"},te=["for"],ae={key:0,class:"ml-1 text-red-500"},le={key:0,class:"absolute left-3 text-gray-500 z-10"},se={key:1,class:"absolute right-3 text-gray-500 z-10"},oe={key:2,class:"relative w-full"},ne=["id","disabled"],re={class:"text-start truncate mt-1"},ie={key:0},de={key:0},ue={class:"text-black"},pe={key:1},ce={key:1,class:"text-gray-400"},fe={key:0,class:"p-3 h-[50px] flex justify-center items-center text-gray-500"},me=["onClick"],ye={class:"text-black"},be=["id","disabled"],ge={__name:"FormSelect",props:{modelValue:{type:[String,Number,Object,Boolean,null],required:!0},label:{type:String,required:!1},id:{type:String,required:!0},placeholder:{type:String,required:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1},inputClass:{type:String,required:!1},labelClass:{type:String,required:!1},isBlock:{type:Boolean,default:!0},width:{type:String,default:"w-full"},options:{type:Array,default:()=>[]},optionValue:{type:String,default:null},optionLabel:{type:String,default:null},returnObject:{type:Boolean,default:!1},noOptionsMessage:{type:String,default:"No options available"},prefixDisplayValue:{type:String,default:null},suffixDisplayValue:{type:String,default:null}},emits:["update:modelValue","change"],setup(e,{emit:x}){const d=x,t=e,u=C(!1),p=C(""),w=C("mt-1");z(()=>t.modelValue,r=>{if(t.returnObject&&typeof r=="object")p.value=r[t.optionLabel];else{const k=t.options.find(V=>V[t.optionValue]===r);p.value=k?k[t.optionLabel]:r}},{immediate:!0});const c=A(),h=g(()=>c["prepend-icon"]),$=g(()=>c["append-icon"]),f=g(()=>[t.inputClass,t.width]),y=g(()=>({border:(t.error||t.errorMessage)&&!t.readonly,"border-red-300":t.error||t.errorMessage,"opacity-50 cursor-not-allowed":t.disabled,"border-b break-words !bg-transparent":t.readonly,"rounded-lg px-3":!t.readonly,"pl-10":t.hasPrependIcon,"pr-10":t.hasAppendIcon})),m=r=>{u.value=!u.value,u.value&&q(r)},q=r=>{const k=r.target.getBoundingClientRect(),V=k.top,i=window.innerHeight-k.bottom,M=(t.options.length||1)*50+10;i<M&&V>i?(w.value="mb-1 bottom-full",document.documentElement.style.setProperty("--translate-y","10px")):(w.value="mt-1",document.documentElement.style.setProperty("--translate-y","-10px"))},O=(r,k)=>{p.value=k;const V=t.options.find(i=>t.optionValue?i[t.optionValue]===r:i===r);d("update:modelValue",t.returnObject?V:r),d("change",t.returnObject?V:r),u.value=!1};return(r,k)=>{const V=D("font-awesome-icon");return a(),l("fieldset",{class:s(e.width)},[e.label?(a(),l("div",ee,[n("label",{for:e.id,class:s(["text-sm font-medium text-black/60 dark:text-white/60",e.labelClass])},b(e.label),11,te),e.required&&!e.readonly?(a(),l("span",ae,"*")):o("",!0)])):o("",!0),n("div",{class:s(["relative items-center",e.isBlock?"flex":"inline-flex"])},[h.value?(a(),l("div",le,[I(r.$slots,"prepend-icon",{},void 0,!0)])):o("",!0),$.value?(a(),l("div",se,[I(r.$slots,"append-icon",{},void 0,!0)])):o("",!0),e.readonly?T((a(),l("input",{key:3,id:e.id,"onUpdate:modelValue":k[0]||(k[0]=i=>p.value=i),class:s(["block py-3 h-[50px] outline-none",[f.value,y.value]]),readonly:"",disabled:e.disabled},null,10,be)),[[R,p.value]]):(a(),l("div",oe,[n("button",{onClick:m,id:e.id,class:s(["rounded-lg block py-3 h-[50px] flex justify-between items-center bg-white",[f.value,y.value]]),disabled:e.disabled},[n("div",re,[p.value?(a(),l("span",ie,[t.prefixDisplayValue?(a(),l("span",de,b(t.prefixDisplayValue),1)):o("",!0),n("span",ue,b(p.value),1),t.suffixDisplayValue?(a(),l("span",pe,"suffixDisplayValue")):o("",!0)])):(a(),l("span",ce,b(e.placeholder),1))]),v(V,{icon:["fas","chevron-down"],class:s(["transition-transform duration-200 text-black",{"rotate-180":u.value}])},null,8,["class"])],10,ne),v(P,{name:"dropdown-fade"},{default:S(()=>[u.value?(a(),l("div",{key:0,class:s(["absolute bg-white border shadow-lg w-full z-10 rounded-lg max-h-[200px] overflow-auto",w.value])},[t.options.length===0?(a(),l("div",fe,b(e.noOptionsMessage),1)):(a(!0),l(F,{key:1},X(t.options,(i,M)=>(a(),l("div",{key:e.optionValue?i[e.optionValue]:i,class:s(["p-3 h-[50px] cursor-pointer hover:bg-gray-200 flex justify-between items-center",{"rounded-t-lg":M===0,"rounded-b-lg":M===e.options.length-1}]),onClick:Pe=>O(e.optionValue?i[e.optionValue]:i,e.optionLabel?i[e.optionLabel]:i)},[n("span",ye,b(e.optionLabel?i[e.optionLabel]:i),1)],10,me))),128))],2)):o("",!0)]),_:1})]))],2),v(P,{name:"shake-fade"},{default:S(()=>[e.errorMessage?(a(),l("small",{key:0,class:s(["block text-red-400",{"opacity-50":e.disabled}])},b(e.errorMessage),3)):o("",!0)]),_:1})],2)}}},he=j(ge,[["__scopeId","data-v-ffed39f9"]]),ve={key:0,class:"block mb-2"},xe=["for"],ke={key:0,class:"ml-1 text-red-500"},we={key:0,class:"absolute left-3 top-3 text-gray-500"},Se={key:1,class:"absolute right-3 top-3 text-gray-500"},Ve=["id","type","placeholder","required","value","rows","disabled","maxLength","readonly"],Ce={class:"flex justify-between w-full"},qe={__name:"FormTextarea",props:{modelValue:{type:[String,Number],required:!0},label:{type:String,required:!1},id:{type:String,required:!0},type:{type:String,default:"text"},placeholder:{type:String,required:!1},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{type:String,default:""},disabled:{type:Boolean,default:!1},inputClass:{type:String,required:!1},labelClass:{type:String,required:!1},isBlock:{type:Boolean,default:!0},width:{type:String,default:"w-full"},rows:{type:Number,default:4},maxChars:{type:Number,required:!1},resizable:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:x}){const d=x,t=e,u=m=>{d("update:modelValue",m.target.value),d("input",m.target.value)},p=m=>{d("change",m.target.value)},w=A(),c=g(()=>w["prepend-icon"]),h=g(()=>w["append-icon"]),$=g(()=>[t.inputClass,t.width]),f=g(()=>({border:(t.error||t.errorMessage)&&!t.readonly,"border-red-300":t.error||t.errorMessage,"opacity-50 cursor-not-allowed":t.disabled,"border-b break-words !bg-transparent":t.readonly,"rounded-lg px-3":!t.readonly,"pl-10":t.hasPrependIcon,"pr-10":t.hasAppendIcon,"resize-none":!t.resizable})),y=g(()=>t.modelValue.length);return(m,q)=>(a(),l("fieldset",{class:s(e.width)},[e.label?(a(),l("div",ve,[n("label",{for:e.id,class:s(["text-sm font-medium text-black/60 dark:text-white/60",e.labelClass])},b(e.label),11,xe),e.required&&!e.readonly?(a(),l("span",ke,"*")):o("",!0)])):o("",!0),n("div",{class:s(["relative items-start",e.isBlock?"flex":"inline-flex"])},[c.value?(a(),l("div",we,[I(m.$slots,"prepend-icon",{},void 0,!0)])):o("",!0),h.value?(a(),l("div",Se,[I(m.$slots,"append-icon",{},void 0,!0)])):o("",!0),n("textarea",{id:e.id,type:e.type,placeholder:e.placeholder,required:e.required,value:e.modelValue,onInput:q[0]||(q[0]=O=>u(O)),onChange:q[1]||(q[1]=O=>p(O)),class:s(["block py-3 outline-none text-black",[$.value,f.value]]),rows:e.rows,disabled:e.disabled,maxLength:e.maxChars,readonly:e.readonly},null,42,Ve),e.maxChars?(a(),l("small",{key:2,class:s(["absolute bottom-1 right-3 text-xs p-1 rounded",{"text-red-500":y.value>e.maxChars,"text-gray-400":y.value<=e.maxChars}])},b(e.readonly?y.value+" characters":`${y.value} / ${e.maxChars}`),3)):o("",!0)],2),n("div",Ce,[v(P,{name:"shake-fade"},{default:S(()=>[e.errorMessage?(a(),l("small",{key:0,class:s(["text-red-400",{"opacity-50":e.disabled}])},b(e.errorMessage),3)):o("",!0)]),_:1})])],2))}},Be=j(qe,[["__scopeId","data-v-0248cb90"]]),Ie={class:"flex flex-col gap-4"},$e=n("h3",{class:"text-lg font-bold sublink"},"Input Element",-1),Oe=n("h3",{class:"text-lg font-bold sublink"},"Textarea Element",-1),Me=n("h3",{class:"text-lg font-bold sublink"},"Select Element",-1),Ee={__name:"FormElements",setup(e){const x=C(""),d=C(""),t=C(`<script setup>
import { defineEmits, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'input', 'change']);

const props = defineProps({
  modelValue: {
    type: [String, Number, null],
    required: true
  },
  label: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    required: false
  },
  labelClass: {
    type: String,
    required: false
  },
  isBlock: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: 'w-full'
  }
});

const slots = useSlots();

const updateValue = event => {
  emit('update:modelValue', event.target.value);
  emit('input', event.target.value);
}

const onChange = event => {
  emit('change', event.target.value);
}

const hasPrependIcon = computed(() => {
  return slots['prepend-icon'];
});

const hasAppendIcon = computed(() => {
  return slots['append-icon'];
});

const conditionalInputStyles = computed(() => {
  return {
    'border': (props.error || props.errorMessage) && !props.readonly,
    'border-red-300': props.error || props.errorMessage,
    'opacity-50 cursor-not-allowed': props.disabled,
    'pl-10': props.hasPrependIcon,
    'pr-10': props.hasAppendIcon,
  };
});

<\/script>

<template>
  <fieldset :class="width">
    <div v-if="label" class="block mb-2">
      <label
        :for="id"
        class="text-sm font-medium text-black/60 dark:text-white/60"
        :class="labelClass"
      >
        {{ label }}
      </label>
      <span v-if="required && !readonly" class="ml-1 text-red-500">*</span>
    </div>
    <div
      class="relative items-center h-[40px] bg-white"
      :class="[
        inputClass,
        width,
        conditionalInputStyles,
        isBlock ? 'flex' : 'inline-flex',
        readonly ? 'border-b break-words !bg-transparent' : 'rounded-lg px-3'
      ]"
    >
      <div v-if="hasPrependIcon" class="absolute left-3 text-gray-500">
        <slot name="prepend-icon"></slot>
      </div>
      <div v-if="hasAppendIcon" class="absolute right-3 text-gray-500">
        <slot name="append-icon"></slot>
      </div>
      <input
        v-bind="$attrs"
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="updateValue($event)"
        @change="onChange($event)"
        class="block outline-none bg-transparent text-black"
        :class="[width, { 'no-arrows': type === 'number' }]"
        :disabled="disabled"
        :readonly="readonly"
      >
    </div>
    <transition name="shake-fade">
      <small
        v-if="errorMessage"
        class="block text-red-400"
        :class="{ 'opacity-50' : disabled }"
      >
        {{ errorMessage }}
      </small>
    </transition>
  </fieldset>
</template>

<style scoped>
.no-arrows::-webkit-outer-spin-button,
.no-arrows::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.no-arrows {
  -moz-appearance: textfield;  /* Firefox */
  -webkit-appearance: none;    /* Chrome, Safari, Opera */
  appearance: none;            /* Standard */
}

/* Hides the arrows in Internet Explorer and Edge */
.no-arrows::-webkit-inner-spin-button,
.no-arrows::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.shake-fade-enter-active {
  animation: shake 0.5s ease;
}
.shake-fade-leave-active {
  transition: all 0.5s ease;
}
.shake-fade-enter-from, .shake-fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}

input::placeholder {
  height: 40px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
`),u=C(`<script setup>
import { defineEmits, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'input', 'change']);

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    required: false
  },
  labelClass: {
    type: String,
    required: false
  },
  isBlock: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: 'w-full'
  },
  rows: {
    type: Number,
    default: 4
  },
  maxChars: {
    type: Number,
    required: false,
  },
  resizable: {
    type: Boolean,
    default: false
  }
});

const updateValue = event => {
  emit('update:modelValue', event.target.value);
  emit('input', event.target.value);
}

const onChange = event => {
  emit('change', event.target.value);
}

const slots = useSlots();

const hasPrependIcon = computed(() => {
  return slots['prepend-icon'];
});

const hasAppendIcon = computed(() => {
  return slots['append-icon'];
});

const baseInputStyles = computed(() => {
  return [props.inputClass, props.width]
});

const conditionalInputStyles = computed(() => {
  return {
    'border': (props.error || props.errorMessage) && !props.readonly,
    'border-red-300': props.error || props.errorMessage,
    'opacity-50 cursor-not-allowed': props.disabled,
    'border-b break-words !bg-transparent': props.readonly,
    'rounded-lg px-3': !props.readonly,
    'pl-10': props.hasPrependIcon,
    'pr-10': props.hasAppendIcon,
    'resize-none' : !props.resizable
  };
});

const currentCharCount = computed(() => {
  return props.modelValue.length;
});
<\/script>

<template>
  <fieldset :class="width">
    <div v-if="label" class="block mb-2">
      <label
        :for="id"
        class="text-sm font-medium text-black/60 dark:text-white/60"
        :class="labelClass"
      >
        {{ label }}
      </label>
      <span v-if="required && !readonly" class="ml-1 text-red-500">*</span>
    </div>
    <div class="relative items-start" :class="isBlock ? 'flex' : 'inline-flex'">
      <div v-if="hasPrependIcon" class="absolute left-3 top-3 text-gray-500">
        <slot name="prepend-icon"></slot>
      </div>
      <div v-if="hasAppendIcon" class="absolute right-3 top-3 text-gray-500">
        <slot name="append-icon"></slot>
      </div>
      <textarea
        :id="id"
        :type="type"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="updateValue($event)"
        @change="onChange($event)"
        class="block py-3 outline-none text-black"
        :class="[
          baseInputStyles,
          conditionalInputStyles
        ]"
        :rows="rows"
        :disabled="disabled"
        :maxLength="maxChars"
        :readonly="readonly"
      ></textarea>
      <small
        v-if="maxChars"
        class="absolute bottom-1 right-3 text-xs p-1 rounded"
        :class="{ 'text-red-500': currentCharCount > maxChars, 'text-gray-400': currentCharCount <= maxChars }"
      >
        {{ readonly ? currentCharCount + ' characters' : \`\${currentCharCount} / \${maxChars}\` }}
      </small>
    </div>
    <div class="flex justify-between w-full">
      <transition name="shake-fade">
        <small
          v-if="errorMessage"
          class="text-red-400"
          :class="{ 'opacity-50' : disabled }"
        >
          {{ errorMessage }}
        </small>
      </transition>
    </div>
  </fieldset>
</template>

<style scoped>
.shake-fade-enter-active {
  animation: shake 0.5s ease;
}
.shake-fade-leave-active {
  transition: all 0.5s ease;
}
.shake-fade-enter-from, .shake-fade-leave-to {
  opacity: 0;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}
</style>
`),p=C(`<script setup>
import { ref, defineEmits, watch, computed, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'change']);

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, Boolean, null],
    required: true
  },
  label: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  required: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  },
  errorMessage: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: String,
    required: false
  },
  labelClass: {
    type: String,
    required: false
  },
  isBlock: {
    type: Boolean,
    default: true
  },
  width: {
    type: String,
    default: 'w-full'
  },
  options: {
    type: Array,
    default: () => []
  },
  optionValue: {
    type: String,
    default: null
  },
  optionLabel: {
    type: String,
    default: null
  },
  returnObject: {
    type: Boolean,
    default: false
  },
  noOptionsMessage: {
    type: String,
    default: 'No options available'
  },
  prefixDisplayValue: {
    type: String,
    default: null
  },
  suffixDisplayValue: {
    type: String,
    default: null
  }
});

const optionsOpen = ref(false);
const displayValue = ref('');
const optionsPositionClass = ref('mt-1');

watch(
  () => props.modelValue,
  (val) => {
    if (props.returnObject && typeof val === 'object') {
      displayValue.value = val[props.optionLabel];
    } else {
      const selectedOption = props.options.find(
        (option) => option[props.optionValue] === val
      );
      displayValue.value = selectedOption ? selectedOption[props.optionLabel] : val;
    }
  },
  { immediate: true }
);

const slots = useSlots();

const hasPrependIcon = computed(() => {
  return slots['prepend-icon'];
});

const hasAppendIcon = computed(() => {
  return slots['append-icon'];
});

const baseInputStyles = computed(() => {
  return [props.inputClass, props.width]
});

const conditionalInputStyles = computed(() => {
  return {
    'border': (props.error || props.errorMessage) && !props.readonly,
    'border-red-300': props.error || props.errorMessage,
    'opacity-50 cursor-not-allowed': props.disabled,
    'border-b break-words !bg-transparent': props.readonly,
    'rounded-lg px-3': !props.readonly,
    'pl-10': props.hasPrependIcon,
    'pr-10': props.hasAppendIcon,
  };
});

const toggleOptions = event => {
  optionsOpen.value = !optionsOpen.value;
  if (optionsOpen.value) {
    setOptionsPosition(event);
  }
}

const setOptionsPosition = event => {
  const buttonRect = event.target.getBoundingClientRect();
  const spaceAbove = buttonRect.top;
  const spaceBelow = window.innerHeight - buttonRect.bottom;

  const requiredSpace = (props.options.length || 1 ) * 50 + 10;

  if (spaceBelow < requiredSpace && spaceAbove > spaceBelow) {
    optionsPositionClass.value = 'mb-1 bottom-full';
    document.documentElement.style.setProperty('--translate-y', '10px');
  } else {
    optionsPositionClass.value = 'mt-1';
    document.documentElement.style.setProperty('--translate-y', '-10px');
  }
}

const updateValueByList = (value, label) => {
  displayValue.value = label;
  
  const selectedOption = props.options.find(option => 
    props.optionValue ? option[props.optionValue] === value : option === value
  );

  emit('update:modelValue', props.returnObject ? selectedOption : value);
  emit('change', props.returnObject ? selectedOption : value);
  optionsOpen.value = false;
}
<\/script>

<template>
  <fieldset :class="width">
    <div v-if="label" class="block mb-2">
      <label
        :for="id"
        class="text-sm font-medium text-black/60 dark:text-white/60"
        :class="labelClass"
      >
        {{ label }}
      </label>
      <span v-if="required && !readonly" class="ml-1 text-red-500">*</span>
    </div>
    <div class="relative items-center" :class="isBlock ? 'flex' : 'inline-flex'">
      <div v-if="hasPrependIcon" class="absolute left-3 text-gray-500 z-10">
        <slot name="prepend-icon"></slot>
      </div>
      <div v-if="hasAppendIcon" class="absolute right-3 text-gray-500 z-10">
        <slot name="append-icon"></slot>
      </div>
      <div v-if="!readonly" class="relative w-full">
        <button
          @click="toggleOptions"
          :id="id"
          class="rounded-lg block py-3 h-[50px] flex justify-between items-center bg-white"
          :class="[
            baseInputStyles,
            conditionalInputStyles,
          ]"
          :disabled="disabled"
        >
          <div class="text-start truncate mt-1">
            <span v-if="displayValue">
              <span v-if="props.prefixDisplayValue">{{ props.prefixDisplayValue }}</span>
              <span class="text-black">{{ displayValue }}</span>
              <span v-if="props.suffixDisplayValue">suffixDisplayValue</span>
            </span>
            <span v-else class="text-gray-400">{{ placeholder }}</span>
          </div>
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="transition-transform duration-200 text-black"
            :class="{
              'rotate-180': optionsOpen
            }"
          />
        </button>
        <transition name="dropdown-fade">
          <div
            v-if="optionsOpen"
            class="absolute bg-white border shadow-lg w-full z-10 rounded-lg max-h-[200px] overflow-auto"
            :class="optionsPositionClass"
          >
            <div v-if="props.options.length === 0" class="p-3 h-[50px] flex justify-center items-center text-gray-500">
              {{ noOptionsMessage }}
            </div>
            <div
              v-else
              v-for="(option, index) in props.options"
              :key="optionValue ? option[optionValue] : option"
              class="p-3 h-[50px] cursor-pointer hover:bg-gray-200 flex justify-between items-center"
              @click="updateValueByList(optionValue ? option[optionValue] : option, optionLabel ? option[optionLabel] : option)"
              :class="{
                'rounded-t-lg': index === 0, 
                'rounded-b-lg': index === options.length - 1
              }"
            >
              <span class="text-black">{{ optionLabel ? option[optionLabel] : option }}</span>
            </div>
          </div>
        </transition>
      </div>
      <input
        v-else
        :id="id"
        v-model="displayValue"
        class="block py-3 h-[50px] outline-none"
        :class="[
          baseInputStyles,
          conditionalInputStyles
        ]"
        readonly
        :disabled="disabled"
      >
    </div>
    <transition name="shake-fade">
      <small
        v-if="errorMessage"
        class="block text-red-400"
        :class="{ 'opacity-50' : disabled }"
      >
        {{ errorMessage }}
      </small>
    </transition>
  </fieldset>
</template>

<style scoped>
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
}

option {
    background: none;
    color: inherit;
}

.custom-bg-color {
    background-color: light-dark(rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3));
}

.shake-fade-enter-active {
    animation: shake 0.5s ease;
}
.shake-fade-leave-active {
    transition: all 0.5s ease;
}
.shake-fade-enter-from, .shake-fade-leave-to {
    opacity: 0;
}

.dropdown-fade-enter-active, .dropdown-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.3s ease;
}
.dropdown-fade-enter-from, .dropdown-fade-leave-to {
    opacity: 0;
    transform: translateY(var(--translate-y));
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    75% { transform: translateX(-5px); }
}
</style>
`);return(w,c)=>(a(),H(E,null,{subtitle:S(()=>[U(" Form elements with set of styles and props. ")]),content:S(()=>[n("div",Ie,[$e,v(B(L),{"template-code":t.value,"file-name":"FormInput.vue"},{default:S(()=>[v(B(_),{label:"Label",id:"form-input",placeholder:"Placeholder",modelValue:x.value,"onUpdate:modelValue":c[0]||(c[0]=h=>x.value=h)},null,8,["modelValue"])]),_:1},8,["template-code"]),Oe,v(B(L),{"template-code":u.value,"file-name":"FormTextarea.vue"},{default:S(()=>[v(B(Be),{label:"Label",id:"form-textarea",placeholder:"Placeholder",modelValue:x.value,"onUpdate:modelValue":c[1]||(c[1]=h=>x.value=h)},null,8,["modelValue"])]),_:1},8,["template-code"]),Me,v(B(L),{"template-code":p.value,"file-name":"FormSelect.vue"},{default:S(()=>[v(B(he),{label:"Label",modelValue:d.value,"onUpdate:modelValue":c[2]||(c[2]=h=>d.value=h),id:"form-select",placeholder:"Select an option",options:["Hello","My name"]},null,8,["modelValue"])]),_:1},8,["template-code"])])]),_:1}))}};export{Ee as default};
