import{r as k,h as f,u as g,i as x,j as b,o as e,e as t,k as h,l as o,d as r,n,m as c,a as i,t as u}from"./index-DxF87Fs1.js";const S={key:0,class:"bg-grid p-4 flex items-start justify-center gap-6 border-t border-x rounded-t-lg"},_={class:"flex flex-col"},B={key:0},D={class:"xml"},$={key:1},j={class:"javascript"},N={key:2},T={class:"css"},w={__name:"PreviewBlock",props:{templateCode:String,scriptCode:String,styleCode:String},setup(l){const s=k("template"),p=l;f(()=>{s.value=p.templateCode?"template":p.scriptCode?"script":"style"});const y=g(),v=x(()=>!!y.default);return(C,a)=>{const d=b("highlight");return e(),t("div",null,[v.value?(e(),t("div",S,[h(C.$slots,"default")])):o("",!0),r("div",_,[r("div",{class:n(["flex space-x-4 p-2 border-t border-x",{"rounded-t-lg":!v.value}])},[l.templateCode?(e(),t("button",{key:0,class:n({"text-primary font-semibold":s.value==="template"}),onClick:a[0]||(a[0]=m=>s.value="template")}," Template ",2)):o("",!0),l.scriptCode?(e(),t("button",{key:1,class:n({"text-primary font-semibold":s.value==="script"}),onClick:a[1]||(a[1]=m=>s.value="script")}," Script ",2)):o("",!0),l.styleCode?(e(),t("button",{key:2,class:n({"text-primary font-semibold":s.value==="style"}),onClick:a[2]||(a[2]=m=>s.value="style")}," Style ",2)):o("",!0)],2),s.value==="template"?(e(),t("div",B,[c((e(),t("pre",null,[i("          "),r("code",D,u(l.templateCode),1),i(`
        `)])),[[d]])])):o("",!0),s.value==="script"?(e(),t("div",$,[c((e(),t("pre",null,[i("          "),r("code",j,u(l.scriptCode),1),i(`
        `)])),[[d]])])):o("",!0),s.value==="style"?(e(),t("div",N,[c((e(),t("pre",null,[i("          "),r("code",T,u(l.styleCode),1),i(`
        `)])),[[d]])])):o("",!0)])])}}};export{w as _};
