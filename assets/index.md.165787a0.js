import{_ as n,c as s,o as a,b as e}from"./app.1c78646e.js";const v='{"title":"\u5FEB\u901F\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":3,"title":"Vue\u7248\u672C","slug":"vue\u7248\u672C"},{"level":3,"title":"1. \u521B\u5EFA\u4E00\u4E2A\u9879\u76EE","slug":"_1-\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE"},{"level":3,"title":"2. \u5B89\u88C5","slug":"_2-\u5B89\u88C5"},{"level":3,"title":"3. \u5F15\u5165\u6A21\u5757\u548C\u6837\u5F0F","slug":"_3-\u5F15\u5165\u6A21\u5757\u548C\u6837\u5F0F"},{"level":3,"title":"4. \u542F\u52A8\u5F00\u53D1\u8C03\u8BD5","slug":"_4-\u542F\u52A8\u5F00\u53D1\u8C03\u8BD5"}],"relativePath":"index.md","lastUpdated":1636901380154}',t={},p=e(`<h1 id="\u5FEB\u901F\u5F00\u59CB" tabindex="-1">\u5FEB\u901F\u5F00\u59CB <a class="header-anchor" href="#\u5FEB\u901F\u5F00\u59CB" aria-hidden="true">#</a></h1><p>\u5F15\u5BFC\u60A8\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528DevUI</p><h3 id="vue\u7248\u672C" tabindex="-1">Vue\u7248\u672C <a class="header-anchor" href="#vue\u7248\u672C" aria-hidden="true">#</a></h3><p>\u5F53\u524D\u652F\u6301\u7684Vue\u7248\u672C ^3.0.0</p><h3 id="_1-\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE" tabindex="-1">1. \u521B\u5EFA\u4E00\u4E2A\u9879\u76EE <a class="header-anchor" href="#_1-\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE" aria-hidden="true">#</a></h3><p>\u63A8\u8350\u4F7F\u7528@vite/cli\u521B\u5EFA\u4F60\u7684\u9879\u76EE</p><div class="language-shell"><pre><code><span class="token function">yarn</span> create vite my-vue-app --template vue-ts
</code></pre></div><h3 id="_2-\u5B89\u88C5" tabindex="-1">2. \u5B89\u88C5 <a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u8FDB\u5165\u4F60\u7684\u9879\u76EE\u6587\u4EF6\u5939\uFF0C\u4F7F\u7528yarn\u5B89\u88C5DevUI</p><div class="language-shell"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> vue-devui

<span class="token comment"># \u53EF\u9009\uFF0C\u5B57\u4F53\u56FE\u6807\u5E93, \u90E8\u5206Demo\u4F9D\u8D56\u6B64\u5B57\u4F53\u5E93</span>
<span class="token comment"># yarn add @devui-design/icons</span>
<span class="token comment"># main.ts \u6587\u4EF6\u5F15\u5165</span>
<span class="token comment"># import &#39;@devui-design/icons/icomoon/devui-icon.css&#39;</span>
</code></pre></div><h3 id="_3-\u5F15\u5165\u6A21\u5757\u548C\u6837\u5F0F" tabindex="-1">3. \u5F15\u5165\u6A21\u5757\u548C\u6837\u5F0F <a class="header-anchor" href="#_3-\u5F15\u5165\u6A21\u5757\u548C\u6837\u5F0F" aria-hidden="true">#</a></h3><p>main.ts</p><div class="language-js"><pre><code><span class="token comment">// \u5168\u5C40\u5F15\u5165</span>
<span class="token keyword">import</span> DevUI <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-devui/style.css&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DevUI<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u6309\u9700\u5F15\u5165</span>
<span class="token comment">// main.ts\u6587\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">// Step 1: \u5F15\u5165\u5355\u4E2A\u7EC4\u4EF6</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>
<span class="token comment">// or import Button from &#39;vue-devui/button&#39;</span>
<span class="token comment">// Step 2: \u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F</span>
<span class="token comment">// \u65B9\u5F0F\u4E00\uFF1A\u624B\u52A8\u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-devui/button/style.css&#39;</span>

<span class="token comment">// \u65B9\u5F0F\u4E8C\uFF1A\u81EA\u52A8\u6309\u9700\u5F15\u5165\u7EC4\u4EF6</span>
<span class="token comment">// vite.config.ts\u6587\u4EF6</span>
<span class="token comment">// import styleImport from &#39;vite-plugin-style-import&#39;</span>
<span class="token comment">//   plugins: [</span>
<span class="token comment">//       vue(),</span>
<span class="token comment">//       styleImport({</span>
<span class="token comment">//         libs: [</span>
<span class="token comment">//           {</span>
<span class="token comment">//             libraryName: &#39;vue-devui&#39;,</span>
<span class="token comment">//             esModule: true,</span>
<span class="token comment">//             resolveStyle: (name) =&gt; \`vue-devui/\${name}/style\`,</span>
<span class="token comment">//           },</span>
<span class="token comment">//         ],</span>
<span class="token comment">//       })</span>
<span class="token comment">//     ]</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span> <span class="token comment">// Step 3: \u4F7F\u7528\u7EC4\u4EF6</span>
<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_4-\u542F\u52A8\u5F00\u53D1\u8C03\u8BD5" tabindex="-1">4. \u542F\u52A8\u5F00\u53D1\u8C03\u8BD5 <a class="header-anchor" href="#_4-\u542F\u52A8\u5F00\u53D1\u8C03\u8BD5" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">yarn</span> dev
</code></pre></div>`,16),o=[p];function c(l,i,u,r,d,m){return a(),s("div",null,o)}var h=n(t,[["render",c]]);export{v as __pageData,h as default};
