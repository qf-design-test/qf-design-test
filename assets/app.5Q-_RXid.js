import{g as d,d as v,o as u,c as p,r as b,M as Y,m as o,F as J,E as Q,t as x,k as r,O as w,$ as R,n as h,N as S,h as g,P as W,a4 as E,a5 as ee,j,y as D,I as _,w as H,a2 as te,a as I,a6 as ae,a7 as se,T as z,e as F,b as B,a8 as ne,v as O,a9 as le,aa as oe,ab as ie,ac as ce,ad as re,ae as ue,af as de,ag as pe,ah as ve,ai as fe,Y as me,u as he,z as Ce,aj as ge,ak as Le,al as be,am as ye}from"./chunks/framework.5KlrupG7.js";import{t as we}from"./chunks/theme.5BtZx7SH.js";const k=(e,t)=>{if(e.install=a=>{for(const s of[e,...Object.values(t??{})])a.component(s.name,s)},t)for(const[a,s]of Object.entries(t))e[a]=s;return e};let ke=1e3;const Me=()=>ke++,_e=e=>{const{disabled:t}=e;return{_props:d(()=>({ariaDisabled:t,disabled:t}))}},xe=v({name:"qf-button"}),Ve=v({...xe,props:{type:{},disabled:{type:Boolean}},setup(e){const t=e,{_props:a}=_e(t);return(s,n)=>(u(),p("button",Y(o(a),{class:["qf-button",[s.type?`qf-button--${s.type}`:"",{"qf-button--disabled":s.disabled}]]}),[b(s.$slots,"default")],16))}}),T=k(Ve),$e=(e,t)=>{const a=d(()=>e.activeKey?e.data.findIndex(s=>s.value===e.activeKey):0);return{handleUpdate:s=>{t("update:activeKey",s)},activeIndex:a}},qe=["onClick"],He=v({name:"qf-tabs"}),Ze=v({...He,props:{data:{},activeKey:{},width:{}},emits:["update:activeKey"],setup(e,{emit:t}){const a=e,s=t,{activeIndex:n,handleUpdate:l}=$e(a,s);return(i,m)=>(u(),p("div",{class:"qf-tabs",style:w({width:i.width+"px"})},[(u(!0),p(J,null,Q(i.data,(c,f)=>(u(),p("div",{onClick:L=>o(l)(c.value),class:"qf-tabs_item",key:f},x(c.label),9,qe))),128)),r("div",{class:"qf-tabs__select",style:w({transform:`translateX(${i.width/i.data.length*o(n)}px)`,width:`${i.width/i.data.length}px`})},null,4)],4))}}),Ae=k(Ze),U="rowContext",Fe=e=>{const{justify:t,align:a}=e,s=d(()=>e.gutter??0);R(U,{gutter:s});const n=d(()=>{const i={};return e.gutter&&(i.marginRight=i.marginLeft=`-${s.value/2}px`),i}),l=d(()=>["qf-row",t!=="start"?`qf-rows--justify-${t}`:"",a?`qf-rows-align-${a}`:""]);return{style:n,classList:l}},Be=v({name:"qf-row"}),Oe=v({...Be,props:{gutter:{},justify:{default:"start"},align:{}},setup(e){const t=e,{style:a,classList:s}=Fe(t);return(n,l)=>(u(),p("div",{class:h(o(s)),style:w(o(a))},[b(n.$slots,"default")],6))}}),Te=k(Oe),je=e=>{const{span:t,offset:a}=e,{gutter:s}=S(U,{gutter:d(()=>0)}),n=d(()=>{const i={};return s.value&&(i.paddingLeft=i.paddingRight=`${s.value/2}px`),i}),l=d(()=>["qf-col",`qf-col-${t}`,`qf-col--offset-${a}`]);return{style:n,classList:l}},De=v({name:"qf-col"}),Ee=v({...De,props:{span:{default:24},offset:{default:0}},setup(e){const t=e,{style:a,classList:s}=je(t);return(n,l)=>(u(),p("div",{style:w(o(a)),class:h(o(s))},[b(n.$slots,"default")],6))}}),Ie=k(Ee),N="checkboxContext",Pe=(e,t)=>{const a=S(N,void 0),s=d(()=>a!==void 0),n=g(!1),l=d({get(){var c;return s.value?(c=a==null?void 0:a.modelValue)==null?void 0:c.value:e.modelValue??n.value},set(c){s.value?a==null||a.changeHandler(e.label):(t("update:modelValue",c),n.value=c)}}),i=d(()=>e.disabled),m=d(()=>s.value&&Array.isArray(l.value)?l.value.includes(e.label):l.value);return{classList:d(()=>["qf-checkbox",e.disabled?"qf-checkbox--disabled":"",m.value?"qf-checkbox--checked":""]),handleUpdate:async()=>{i.value||(l.value=!l.value,await W(),t("change",l.value))},model:l}},Re=r("span",{class:"qf-checkbox__inner"},null,-1),Se=v({name:"qf-checkbox"}),ze=v({...Se,props:{label:{},modelValue:{type:Boolean,default:void 0},disabled:{type:Boolean}},emits:["change","update:modelValue"],setup(e,{emit:t}){const a=e,s=t,{classList:n,handleUpdate:l,model:i}=Pe(a,s);return(m,c)=>(u(),p("div",{class:h(o(n)),onClick:c[0]||(c[0]=(...f)=>o(l)&&o(l)(...f))},[Re,b(m.$slots,"default")],2))}}),Ue=(e,t,a)=>(R(N,{modelValue:a,changeHandler:s=>{const n=a.value,l=n.findIndex(i=>i===s);l===-1?n.push(s):n.splice(l,1),a.value=n,t("change",a.value)}}),{classList:d(()=>["qf-checkbox-group"])}),Ne=v({name:"qf-checkbox-group"}),Ke=v({...Ne,props:E({modelValue:{}},{modelValue:{default(){return[]}},modelModifiers:{}}),emits:E(["change","update:modelvalue"],["update:modelValue"]),setup(e,{emit:t}){const a=e,s=t,n=ee(e,"modelValue"),{classList:l}=Ue(a,s,n);return(i,m)=>(u(),p("div",{class:h(o(l))},[b(i.$slots,"default")],2))}}),Ge=k(ze,{CheckboxGroup:Ke}),Xe=(e,t)=>{const a=Me(),s=g(!1),n=g(!1),l=d(()=>["qf-dialog"]),i=d(()=>({zIndex:a})),m=d(()=>e.visible??n);return j(()=>{e.visible&&(n.value=!0,s.value=!0)}),D(()=>e.visible,c=>{c&&(s.value=!0),n.value=c,t("update:visible",c)}),{handleCancel:()=>{t("onCancel")},handleOk:()=>{t("onOk")},handleMaskClick:()=>{e.closeOnClickMask&&t("update:visible",!1)},visible:m,classList:l,overlayStyle:i}},Ye={class:"qf-dialog__wrapper"},Je={class:"qf-dialog__header"},Qe={class:"qf-dialog__title"},We={class:"qf-dialog__content"},et={class:"qf-dialog__footer"},tt=v({name:"qf-dialog"}),at=v({...tt,props:{visible:{type:Boolean,default:!1},title:{},width:{},closeOnClickMask:{type:Boolean,default:!0},onOk:{},onClose:{}},emits:["onOk","onCancel","update:visible"],setup(e,{emit:t}){const a=t,s=e,{classList:n,overlayStyle:l,handleOk:i,handleCancel:m,visible:c,handleMaskClick:f}=Xe(s,a);return(L,M)=>(u(),p("div",{class:h(o(n))},[_(z,{name:"qf-dialog-fade"},{default:H(()=>[se(r("div",{class:"qf-dialog__overlay",style:w(o(l)),onClick:M[0]||(M[0]=te((...C)=>o(f)&&o(f)(...C),["self"]))},[r("div",Ye,[r("div",Je,[r("h4",Qe,x(L.title),1)]),r("div",We,[b(L.$slots,"default")]),r("div",et,[_(o(T),{type:"primary",onClick:o(i)},{default:H(()=>[I("确认")]),_:1},8,["onClick"]),_(o(T),{onClick:o(m)},{default:H(()=>[I("取消")]),_:1},8,["onClick"])])])],4),[[ae,o(c)]])]),_:3})],2))}}),st=k(at),P=[T,Ae,Te,Ie,Ge,st],nt={install:e=>{for(const t in P)e.use(P[t])}},Z=(e,t)=>{const a=e.__vccOpts||e;for(const[s,n]of t)a[s]=n;return a},lt={},ot={t:"1661231422733",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3259",width:"20",height:"20"},it=r("path",{d:"M682.666667 810.666667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l226.133333-226.133333-226.133333-226.133333c-17.066667-17.066667-17.066667-42.666667 0-59.733334s42.666667-17.066667 59.733333 0l256 256c17.066667 17.066667 17.066667 42.666667 0 59.733334l-256 256c-8.533333 8.533333-17.066667 12.8-29.866666 12.8zM341.333333 810.666667c-12.8 0-21.333333-4.266667-29.866666-12.8l-256-256c-17.066667-17.066667-17.066667-42.666667 0-59.733334l256-256c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733334L145.066667 512l226.133333 226.133333c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z","p-id":"3260"},null,-1),ct=[it];function rt(e,t){return u(),p("svg",ot,ct)}const ut=Z(lt,[["render",rt]]),dt={},pt={t:"1661231449868",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3541",width:"20",height:"20"},vt=r("path",{d:"M305.6 225.6c-17.6-17.6-43.2-17.6-59.2 0L19.2 460.8c-25.6 30.4-25.6 72 0 97.6l225.6 235.2c8 8 20.8 12.8 30.4 12.8s20.8-4.8 30.4-12.8c17.6-17.6 17.6-43.2 0-59.2L88 512l217.6-225.6c17.6-17.6 17.6-43.2 0-60.8zM1001.6 460.8L774.4 225.6c-17.6-17.6-43.2-17.6-59.2 0s-17.6 43.2 0 59.2L932.8 512 715.2 737.6c-17.6 17.6-17.6 43.2 0 59.2 8 8 17.6 12.8 30.4 12.8 12.8 0 20.8-4.8 30.4-12.8l225.6-235.2c28.8-28.8 28.8-70.4 0-100.8zM612.8 230.4c-20.8-8-46.4 4.8-56 25.6L382.4 742.4c-8 20.8 4.8 46.4 25.6 56 4.8 0 8 4.8 12.8 4.8 17.6 0 33.6-12.8 38.4-30.4l179.2-491.2c8-20.8-4.8-46.4-25.6-51.2z","p-id":"3542"},null,-1),ft=[vt];function mt(e,t){return u(),p("svg",pt,ft)}const ht=Z(dt,[["render",mt]]),Ct={},gt={viewBox:"0 0 544 560",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Lt=r("path",{d:"M399.503 143.667C399.319 152.501 406.332 159.812 415.167 159.997C424.001 160.181 431.312 153.168 431.497 144.333L399.503 143.667ZM416 120L431.997 120.333C431.999 120.207 432 120.081 432 119.954L416 120ZM360 64L360.046 48.0001C360.03 48 360.015 48 360 48L360 64ZM144 64V48C143.984 48 143.968 48 143.953 48.0001L144 64ZM80 128L64.0001 127.953C64 127.968 64 127.984 64 128L80 128ZM80 344H64C64 344.015 64 344.03 64.0001 344.046L80 344ZM136 400L135.954 416C135.97 416 135.985 416 136 416L136 400ZM160 416C168.837 416 176 408.837 176 400C176 391.163 168.837 384 160 384V416ZM217 160H439V128H217V160ZM439 160C461.644 160 480 178.356 480 201H512C512 160.683 479.317 128 439 128V160ZM480 201V423H512V201H480ZM480 423C480 445.644 461.644 464 439 464V496C479.317 496 512 463.317 512 423H480ZM439 464H217V496H439V464ZM217 464C194.356 464 176 445.644 176 423H144C144 463.317 176.683 496 217 496V464ZM176 423V201H144V423H176ZM176 201C176 178.356 194.356 160 217 160V128C176.683 128 144 160.683 144 201H176ZM431.497 144.333L431.997 120.333L400.003 119.667L399.503 143.667L431.497 144.333ZM432 119.954C431.946 100.888 424.347 82.6173 410.865 69.1349L388.238 91.7624C395.741 99.2658 399.97 109.434 400 120.046L432 119.954ZM410.865 69.1349C397.383 55.6526 379.112 48.0543 360.046 48.0001L359.954 79.9999C370.566 80.0301 380.734 84.2589 388.238 91.7624L410.865 69.1349ZM360 48H144V80H360V48ZM143.953 48.0001C122.767 48.0627 102.467 56.5064 87.4868 71.4868L110.114 94.1142C119.117 85.1118 131.316 80.0376 144.047 79.9999L143.953 48.0001ZM87.4868 71.4868C72.5064 86.4673 64.0627 106.767 64.0001 127.953L95.9999 128.047C96.0376 115.316 101.112 103.117 110.114 94.1142L87.4868 71.4868ZM64 128V344H96V128H64ZM64.0001 344.046C64.0543 363.112 71.6526 381.383 85.1349 394.865L107.762 372.238C100.259 364.734 96.0301 354.566 95.9999 343.954L64.0001 344.046ZM85.1349 394.865C98.6173 408.347 116.888 415.946 135.954 416L136.046 384C125.434 383.97 115.266 379.741 107.762 372.238L85.1349 394.865ZM136 416H160V384H136V416Z",fill:"currentColor"},null,-1),bt=[Lt];function yt(e,t){return u(),p("svg",gt,bt)}const wt=Z(Ct,[["render",yt]]),$="vitepress-demo-preview",q=(e,t,a,s)=>{let n=t===""?`${e}`:`${e}-${t}`;return a&&(n+=`__${a}`),s&&(n+=`--${s}`),n},K=(e="")=>({b:()=>q($,e),e:(t="")=>q($,e,t),m:(t="")=>q($,e,"",t),bem:(t,a,s)=>q($,t,a,s)}),kt=()=>{const e=g(!0);return{isCodeFold:e,setCodeFold:t=>{e.value=t}}},Mt=()=>({copyContent:g(""),clickCopy:async e=>{await navigator.clipboard.writeText(e)}}),_t={},xt={width:"20",height:"20",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},Vt=r("path",{d:"M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),$t=r("path",{d:"M17 24L22 29L32 19",fill:"currentColor",stroke:"#333","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),qt=[Vt,$t];function Ht(e,t){return u(),p("svg",xt,qt)}const Zt=Z(_t,[["render",Ht]]),At=v({__name:"message-notice",props:{content:{default:"复制成功！"},close:null},setup(e,{expose:t}){const a=e,s=K(),n=g(!1),l=f=>{n.value=f},i=g(-999),m=f=>{i.value=f};D(n,f=>{f===!0&&setTimeout(()=>{n.value=!1},3e3)});const c=()=>{a.close()};return t({setVisible:l,setTopHeight:m}),(f,L)=>(u(),B(z,{name:"slide-fade",onAfterLeave:c},{default:H(()=>[n.value?(u(),p("div",{key:0,class:h([o(s).bem("message-notice","container")]),style:w({top:i.value+"px"})},[_(Zt),r("span",null,x(e.content),1)],6)):F("",!0)]),_:1}))}}),A=[],Ft={open:()=>{const e=document.createElement("div"),t=ne(At,{content:"复制成功！",close:()=>{document.body.removeChild(e),A.pop(),t.unmount()}}),a=t.mount(e);document.body.appendChild(e);const s=A.length,n=s===0?10:(s+1)*10+s*42;a.setTopHeight(n),a.setVisible(!0),A.push(a)}},Bt=["innerHTML"],Ot=v({__name:"NaiveUI",props:{code:null,showCode:null,title:{default:"默认标题"},description:{default:"描述内容"}},setup(e){const t=e,a=K(),{isCodeFold:s,setCodeFold:n}=kt(),{clickCopy:l}=Mt(),i=g(decodeURIComponent(t.code)),m=g(decodeURIComponent(t.showCode)),c=g(null),f=()=>{l(i.value),Ft.open()},L=d(()=>{var C;return c.value?(C=c.value)==null?void 0:C.clientHeight:0}),M=C=>{s.value?c.value.style.height="0px":c.value.style.height=`${C}px`};return j(()=>{const C=L.value;M(C)}),D(s,()=>{const C=L.value;M(C)}),(C,V)=>(u(),p("div",{class:h([o(a).e("naive-ui__container")])},[r("section",{class:h([o(a).bem("name_handle")])},[t.title?(u(),p("div",{key:0,class:h([o(a).bem("component","name")])},x(e.title),3)):F("",!0),r("div",{class:h([o(a).bem("description","btns")])},[_(wt,{onClick:f}),o(s)?(u(),B(ut,{key:1,onClick:V[1]||(V[1]=X=>o(n)(!1))})):(u(),B(ht,{key:0,onClick:V[0]||(V[0]=X=>o(n)(!0))}))],2)],2),t.description?(u(),p("section",{key:0,class:h([o(a).bem("description")])},[r("span",null,x(e.description),1)],2)):F("",!0),r("section",{class:h([o(a).bem("preview")])},[b(C.$slots,"default")],2),r("section",{class:h([o(a).bem("source")]),ref_key:"sourceCodeArea",ref:c},[r("div",{innerHTML:m.value,class:"language-vue"},null,8,Bt)],2)],2))}}),Tt={...we,enhanceApp:async e=>{e.app.use(nt),e.app.component("demo-preview",Ot)}};function G(e){if(e.extends){const t=G(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const y=G(Tt),jt=v({name:"VitePressApp",setup(){const{site:e}=he();return j(()=>{Ce(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&ge(),Le(),be(),y.setup&&y.setup(),()=>ye(y.Layout)}});async function Dt(){const e=It(),t=Et();t.provide(oe,e);const a=ie(e.route);return t.provide(ce,a),t.component("Content",re),t.component("ClientOnly",ue),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),y.enhanceApp&&await y.enhanceApp({app:t,router:e,siteData:de}),{app:t,router:e,data:a}}function Et(){return pe(jt)}function It(){let e=O,t;return ve(a=>{let s=fe(a),n=null;return s&&(e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),n=me(()=>import(s),__vite__mapDeps([]))),O&&(e=!1),n},y.NotFound)}O&&Dt().then(({app:e,router:t,data:a})=>{t.go().then(()=>{le(t.route,a.site),e.mount("#app")})});export{Dt as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}