import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a561abaa.js";const B=JSON.parse('{"title":"Tabs 标签页","description":"","frontmatter":{},"headers":[],"relativePath":"component/tabs/index.md","filePath":"component/tabs/index.md"}'),p={name:"component/tabs/index.md"},o=l(`<h1 id="tabs-标签页" tabindex="-1">Tabs 标签页 <a class="header-anchor" href="#tabs-标签页" aria-label="Permalink to &quot;Tabs 标签页&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础的、简洁的标签页。 Tabs 组件提供了选项卡功能， 默认选中第一个标签页。 可以通 <code>v-model:active</code> 进行双向绑定</p><div class="example"></div><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">qf-tabs</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">:data</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">[</span></span>
<span class="line"><span style="color:#C98A7D;">        { label: &#39;标签1&#39;, value: &#39;1&#39; },</span></span>
<span class="line"><span style="color:#C98A7D;">        { label: &#39;标签2&#39;, value: &#39;2&#39; }</span></span>
<span class="line"><span style="color:#C98A7D;">      ]</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">:width</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">300</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">      </span><span style="color:#BD976A;">v-model:activeKey</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">num</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&gt;&lt;/</span><span style="color:#4D9375;">qf-tabs</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">div</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">setup</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#666666;">=</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">ref</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vue</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">const </span><span style="color:#BD976A;">num</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">ref</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">1</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">qf-tabs</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">:data</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">[</span></span>
<span class="line"><span style="color:#B56959;">        { label: &#39;标签1&#39;, value: &#39;1&#39; },</span></span>
<span class="line"><span style="color:#B56959;">        { label: &#39;标签2&#39;, value: &#39;2&#39; }</span></span>
<span class="line"><span style="color:#B56959;">      ]</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">:width</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">300</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">      </span><span style="color:#B07D48;">v-model:activeKey</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">num</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&gt;&lt;/</span><span style="color:#1E754F;">qf-tabs</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">div</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">setup</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#999999;">=</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">ts</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">ref</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">const </span><span style="color:#B07D48;">num</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">ref</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">1</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span></code></pre></div><h2 id="字段说明" tabindex="-1">字段说明 <a class="header-anchor" href="#字段说明" aria-label="Permalink to &quot;字段说明&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td>string</td><td>large / small / mini</td><td>default</td></tr><tr><td>type</td><td>类型</td><td>string</td><td>primary / success / warning / info / danger / text</td><td>primary</td></tr><tr><td>loading</td><td>加载中</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>`,7),t=[o];function e(c,r,y,i,d,D){return a(),n("div",null,t)}const u=s(p,[["render",e]]);export{B as __pageData,u as default};