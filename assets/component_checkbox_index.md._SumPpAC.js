import{_ as h,D as p,o as c,b as F,w as l,a as E,d as D,h as A,I as o,c as i,k as s,R as B}from"./chunks/framework.5KlrupG7.js";const b={};function u(r,n){const e=p("qf-checkbox");return c(),F(e,{disabled:""},{default:l(()=>[E("禁用选项")]),_:1})}const k=h(b,[["render",u]]),g=D({__name:"checkbox-group",setup(r){const n=A(["option1"]),e=a=>{console.log("checked",a)};return(a,t)=>{const C=p("qf-checkbox"),y=p("qf-checkbox-group");return c(),F(y,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=d=>n.value=d),onChange:e},{default:l(()=>[o(C,{label:"option1"},{default:l(()=>[E(" 选项1 ")]),_:1}),o(C,{label:"option2"},{default:l(()=>[E(" 选项2 ")]),_:1})]),_:1},8,["modelValue"])}}}),f=D({__name:"checkbox",setup(r){const n=A(!1);return(e,a)=>{const t=p("qf-checkbox");return c(),F(t,{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=C=>n.value=C)},{default:l(()=>[E(" 选项1 ")]),_:1},8,["modelValue"])}}}),x=s("h1",{id:"checkbox-多选框",tabindex:"-1"},[E("Checkbox 多选框 "),s("a",{class:"header-anchor",href:"#checkbox-多选框","aria-label":'Permalink to "Checkbox 多选框"'},"​")],-1),m=s("h2",{id:"基础用法",tabindex:"-1"},[E("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),_=s("p",null,"单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。",-1),q=s("h2",{id:"group",tabindex:"-1"},[E("Group "),s("a",{class:"header-anchor",href:"#group","aria-label":'Permalink to "Group"'},"​")],-1),v=s("p",null,[E("通过"),s("code",null,"checkbox-group"),E("可以同时管理多个checkbox, 在"),s("code",null,"checkbox-group"),E("传入"),s("code",null,"v-model"),E("绑定数组类型的变量，同时需要在"),s("code",null,"checkbox"),E("上定义label变量")],-1),P=s("h2",{id:"disabled",tabindex:"-1"},[E("Disabled "),s("a",{class:"header-anchor",href:"#disabled","aria-label":'Permalink to "Disabled"'},"​")],-1),V=s("p",null,[E("通过"),s("code",null,"disabled"),E("属性，你可以禁用掉多选框，防止选中部分选项")],-1),w=B('<h2 id="checkbox-字段" tabindex="-1">Checkbox 字段 <a class="header-anchor" href="#checkbox-字段" aria-label="Permalink to &quot;Checkbox 字段&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>双向绑定值</td><td>boolean</td><td></td><td>false</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td></td><td>false</td></tr><tr><td>label</td><td>组形式下的标识</td><td>string</td><td></td><td></td></tr></tbody></table><h2 id="checkbox-事件" tabindex="-1">Checkbox 事件 <a class="header-anchor" href="#checkbox-事件" aria-label="Permalink to &quot;Checkbox 事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>change</td><td>选中发生变化时触发</td><td>(checked: boolean) =&gt; void</td></tr></tbody></table><h2 id="checkboxgroup-字段" tabindex="-1">CheckboxGroup 字段 <a class="header-anchor" href="#checkboxgroup-字段" aria-label="Permalink to &quot;CheckboxGroup 字段&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>v-model</td><td>双向绑定</td><td>string[]</td><td></td><td>[]</td></tr></tbody></table><h2 id="checkboxgroup-事件" tabindex="-1">CheckboxGroup 事件 <a class="header-anchor" href="#checkboxgroup-事件" aria-label="Permalink to &quot;CheckboxGroup 事件&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>change</td><td>选中范围发生变化时触发</td><td>(checked: string[]) =&gt; void</td></tr></tbody></table>',8),T=JSON.parse('{"title":"Checkbox 多选框","description":"","frontmatter":{},"headers":[],"relativePath":"component/checkbox/index.md","filePath":"component/checkbox/index.md"}'),N={name:"component/checkbox/index.md"},G=Object.assign(N,{setup(r){return(n,e)=>{const a=p("demo-preview");return c(),i("div",null,[x,m,_,o(a,{title:"基础多选框",description:"",code:"%3Ctemplate%3E%0A%20%20%3Cqf-checkbox%20v-model=%22checked%22%3E%20%E9%80%89%E9%A1%B91%20%3C/qf-checkbox%3E%0A%3C/template%3E%0A%0A%3Cscript%20lang=%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue';%0Aconst%20checked%20=%20ref(false);%0A%3C/script%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bchecked%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%20%E9%80%89%E9%A1%B91%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Echecked%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bchecked%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%20%E9%80%89%E9%A1%B91%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Echecked%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Efalse%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/qf-design-test/qf-design-test/docs/component/checkbox/checkbox.vue",relativePath:"./checkbox.vue"},{default:l(()=>[o(f)]),_:1}),q,v,o(a,{title:"多选框组",description:"",code:"%3Ctemplate%3E%0A%20%20%3Cqf-checkbox-group%20v-model=%22checkedList%22%20@change=%22handleChange%22%3E%0A%20%20%20%20%3Cqf-checkbox%20label=%22option1%22%3E%20%E9%80%89%E9%A1%B91%20%3C/qf-checkbox%3E%0A%20%20%20%20%3Cqf-checkbox%20label=%22option2%22%3E%20%E9%80%89%E9%A1%B92%20%3C/qf-checkbox%3E%0A%20%20%3C/qf-checkbox-group%3E%0A%3C/template%3E%0A%0A%3Cscript%20lang=%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue';%0Aconst%20checkedList%20=%20ref(%5B'option1'%5D);%0A%0Aconst%20handleChange%20=%20(vals:%20string%5B%5D)%20=%3E%20%7B%0A%20%20console.log('checked',%20vals);%0A%7D;%0A%3C/script%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3BcheckedList%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3E%40change%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3BhandleChange%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Boption1%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%20%E9%80%89%E9%A1%B91%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Boption2%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%20%E9%80%89%E9%A1%B92%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3EcheckedList%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3Boption1%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3EhandleChange%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23FFAB70%22%3Evals%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2379B8FF%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%5B%5D)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23F97583%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26%2339%3Bchecked%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%2C%20vals)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Ev-model%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3BcheckedList%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3E%40change%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3BhandleChange%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Boption1%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%20%E9%80%89%E9%A1%B91%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elabel%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Boption2%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%20%E9%80%89%E9%A1%B92%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox-group%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Eimport%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%20ref%20%7D%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Efrom%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3Bvue%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3EcheckedList%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Eref%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(%5B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3Boption1%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%5D)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3Econst%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3EhandleChange%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E36209%22%3Evals%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3A%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23005CC5%22%3Estring%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%5B%5D)%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23D73A49%22%3E%3D%26gt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%7B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20console.%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elog%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E(%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26%2339%3Bchecked%26%2339%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%2C%20vals)%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%7D%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/qf-design-test/qf-design-test/docs/component/checkbox/checkbox-group.vue",relativePath:"./checkbox-group.vue"},{default:l(()=>[o(g)]),_:1}),P,V,o(a,{title:"",description:"",code:"%3Ctemplate%3E%0A%20%20%3Cqf-checkbox%20disabled%3E%E7%A6%81%E7%94%A8%E9%80%89%E9%A1%B9%3C/qf-checkbox%3E%0A%3C/template%3E%0A%0A%3Cscript%20lang=%22ts%22%20setup%3E%3C/script%3E%0A",showCode:"%3Cpre%20v-pre%20class%3D%22shiki%20github-dark%20vp-code-dark%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Edisabled%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%E7%A6%81%E7%94%A8%E9%80%89%E9%A1%B9%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%239ECBFF%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23B392F0%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2385E89D%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23E1E4E8%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E%3Cpre%20v-pre%20class%3D%22shiki%20github-light%20vp-code-light%22%20%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%20%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Edisabled%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%E7%A6%81%E7%94%A8%E9%80%89%E9%A1%B9%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Eqf-checkbox%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26lt%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Elang%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%23032F62%22%3E%26quot%3Bts%26quot%3B%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%20%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%236F42C1%22%3Esetup%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%26lt%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2322863A%22%3Escript%3C%2Fspan%3E%3Cspan%20style%3D%22color%3A%20%2324292E%22%3E%26gt%3B%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/qf-design-test/qf-design-test/docs/component/checkbox/checkbox-disabled.vue",relativePath:"./checkbox-disabled.vue"},{default:l(()=>[o(k)]),_:1}),w])}}});export{T as __pageData,G as default};
