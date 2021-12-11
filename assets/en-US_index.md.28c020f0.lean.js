import{_ as n,c as s,o as a,b as e}from"./app.1c78646e.js";const v='{"title":"Quick Start","description":"","frontmatter":{},"headers":[{"level":3,"title":"Vue version","slug":"vue-version"},{"level":3,"title":"1. Create a project","slug":"_1-create-a-project"},{"level":3,"title":"2. Install","slug":"_2-install"},{"level":3,"title":"3. Import modules and styles","slug":"_3-import-modules-and-styles"},{"level":3,"title":"4. Start development and debugging","slug":"_4-start-development-and-debugging"}],"relativePath":"en-US/index.md","lastUpdated":1637476932651}',t={},o=e(`__VP_STATIC_START__<h1 id="quick-start" tabindex="-1">Quick Start <a class="header-anchor" href="#quick-start" aria-hidden="true">#</a></h1><p>Guide you how to use DevUI in your project.</p><h3 id="vue-version" tabindex="-1">Vue version <a class="header-anchor" href="#vue-version" aria-hidden="true">#</a></h3><p>Vue version currently supported ^3.0.0.</p><h3 id="_1-create-a-project" tabindex="-1">1. Create a project <a class="header-anchor" href="#_1-create-a-project" aria-hidden="true">#</a></h3><p>It is recommended to use @vite/cli to create your project.</p><div class="language-shell"><pre><code><span class="token function">yarn</span> create vite my-vue-app --template vue-ts
</code></pre></div><h3 id="_2-install" tabindex="-1">2. Install <a class="header-anchor" href="#_2-install" aria-hidden="true">#</a></h3><p>Go to your project folder and use yarn to install DevUI.</p><div class="language-shell"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> vue-devui

<span class="token comment"># Optional, font icon library, some demos rely on this font library</span>
<span class="token comment"># yarn add @devui-design/icons</span>
<span class="token comment"># main.ts file introduction</span>
<span class="token comment"># import &#39;@devui-design/icons/icomoon/devui-icon.css&#39;</span>
</code></pre></div><h3 id="_3-import-modules-and-styles" tabindex="-1">3. Import modules and styles <a class="header-anchor" href="#_3-import-modules-and-styles" aria-hidden="true">#</a></h3><p>main.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> DevUI <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-devui/style.css&#39;</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DevUI<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// On-demand introduction</span>
<span class="token comment">// main.ts file</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>

<span class="token comment">// Step 1: Import a single component</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-devui&#39;</span>
<span class="token comment">// or import Button from &#39;vue-devui/button&#39;</span>
<span class="token comment">// Step 2: Import component style</span>
<span class="token comment">// Way 1\uFF1AManually import component styles</span>
<span class="token keyword">import</span> <span class="token string">&#39;vue-devui/button/style.css&#39;</span>

<span class="token comment">// Way 2\uFF1AAutomatically introduce components on demand</span>
<span class="token comment">// vite.config.ts file</span>
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
<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Button<span class="token punctuation">)</span> <span class="token comment">// Step 3: Use component</span>
<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="_4-start-development-and-debugging" tabindex="-1">4. Start development and debugging <a class="header-anchor" href="#_4-start-development-and-debugging" aria-hidden="true">#</a></h3><div class="language-shell"><pre><code><span class="token function">yarn</span> dev
</code></pre></div>__VP_STATIC_END__`,16),p=[o];function c(l,i,r,u,d,m){return a(),s("div",null,p)}var g=n(t,[["render",c]]);export{v as __pageData,g as default};
