import{r as x,x as b,u as k,h as g,z as h,o as e,e as t,j,i as l,d as n,n as a,t as d,s as v,a as r}from"./index-B_OwHR-2.js";const S={key:0,class:"bg-grid p-4 flex items-start justify-center border-t border-x rounded-t-lg"},N={class:"flex flex-col"},$={class:"text-primary font-semibold"},B={key:2},D={class:"xml"},T={key:3},V={class:"javascript"},w={key:4},z={class:"css"},_={key:5},A={class:"css"},J={__name:"PreviewBlock",props:{fileName:String,templateCode:String,scriptCode:String,styleCode:String,jsonCode:String},setup(o){const c=o,s=x(""),p=()=>c.templateCode?"template":c.scriptCode?"script":c.styleCode?"style":c.jsonCode?"json":"";b(()=>{s.value=p()});const f=k(),m=g(()=>!!f.default);return(C,i)=>{const u=h("highlight");return e(),t("div",null,[m.value?(e(),t("div",S,[j(C.$slots,"default")])):l("",!0),n("div",N,[o.fileName?(e(),t("div",{key:0,class:a(["flex space-x-4 p-2 border-t border-x",{"rounded-t-lg":!m.value}])},[n("div",$,d(o.fileName),1)],2)):(e(),t("div",{key:1,class:a(["flex space-x-4 p-2 border-t border-x",{"rounded-t-lg":!m.value}])},[o.templateCode?(e(),t("button",{key:0,class:a({"text-primary font-semibold":s.value==="template"}),onClick:i[0]||(i[0]=y=>s.value="template")}," Template ",2)):l("",!0),o.scriptCode?(e(),t("button",{key:1,class:a({"text-primary font-semibold":s.value==="script"}),onClick:i[1]||(i[1]=y=>s.value="script")}," Script ",2)):l("",!0),o.styleCode?(e(),t("button",{key:2,class:a({"text-primary font-semibold":s.value==="style"}),onClick:i[2]||(i[2]=y=>s.value="style")}," Style ",2)):l("",!0),o.jsonCode?(e(),t("button",{key:3,class:a({"text-primary font-semibold":s.value==="json"}),onClick:i[3]||(i[3]=y=>s.value="json")}," JSON ",2)):l("",!0)],2)),s.value==="template"?(e(),t("div",B,[v((e(),t("pre",null,[r("          "),n("code",D,d(o.templateCode),1),r(`
        `)])),[[u]])])):l("",!0),s.value==="script"?(e(),t("div",T,[v((e(),t("pre",null,[r("          "),n("code",V,d(o.scriptCode),1),r(`
        `)])),[[u]])])):l("",!0),s.value==="style"?(e(),t("div",w,[v((e(),t("pre",null,[r("          "),n("code",z,d(o.styleCode),1),r(`
        `)])),[[u]])])):l("",!0),s.value==="json"?(e(),t("div",_,[v((e(),t("pre",null,[r("          "),n("code",A,d(o.jsonCode),1),r(`
        `)])),[[u]])])):l("",!0)])])}}};export{J as _};
