import{_ as p,C as e,c,k as s,H as l,w as t,a as n,Q as o,o as r}from"./chunks/framework.3627b575.js";const x=JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"component/button/index.md","filePath":"component/button/index.md"}'),E={name:"component/button/index.md"},y=s("h1",{id:"button-按钮",tabindex:"-1"},[n("Button 按钮 "),s("a",{class:"header-anchor",href:"#button-按钮","aria-label":'Permalink to "Button 按钮"'},"​")],-1),d=s("h2",{id:"基础用法",tabindex:"-1"},[n("基础用法 "),s("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),i=s("p",null,[n("使用 "),s("code",null,"type"),n("来定义按钮的样式。")],-1),u={class:"example"},b=o(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;默认按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;">&gt;成功按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;默认按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;主要按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;">&gt;成功按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>你可以使用 <code>disabled</code> 属性来定义按钮是否被禁用。 <br> 使用 <code>disabled</code> 属性来控制按钮是否为禁用状态。 该属性接受一个 <code>Boolean</code> 类型的值</p>`,3),g={class:"example"},q=s("br",null,null,-1),_=s("br",null,null,-1),f=o(`<details><summary>展开查看</summary><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;禁用按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;success&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;成功按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;info&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;信息按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;warning&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;警告按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;危险按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;禁用按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">plain</span><span style="color:#E1E4E8;">&gt;主要按钮&lt;/</span><span style="color:#85E89D;">qf-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;禁用按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;主要按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;success&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;成功按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;info&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;信息按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;warning&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;警告按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;危险按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;禁用按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">plain</span><span style="color:#24292E;">&gt;主要按钮&lt;/</span><span style="color:#22863A;">qf-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><h2 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td>string</td><td>large / small / mini</td><td>default</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / info / danger / text</td><td>primary</td></tr><tr><td>loading</td><td>加载中</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>`,3);function h(F,m,A,C,D,v){const a=e("qf-button");return r(),c("div",null,[y,d,i,s("div",u,[s("div",null,[l(a,null,{default:t(()=>[n("默认按钮")]),_:1}),l(a,{type:"primary"},{default:t(()=>[n("主要按钮")]),_:1})])]),b,s("div",g,[s("div",null,[l(a,{disabled:""},{default:t(()=>[n("禁用按钮")]),_:1}),l(a,{type:"primary",disabled:""},{default:t(()=>[n("主要按钮")]),_:1}),q,_,l(a,{disabled:""},{default:t(()=>[n("禁用按钮")]),_:1}),l(a,{type:"primary",disabled:"",plain:""},{default:t(()=>[n("主要按钮")]),_:1})])]),f])}const k=p(E,[["render",h]]);export{x as __pageData,k as default};
