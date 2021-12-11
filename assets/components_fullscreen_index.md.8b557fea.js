var A=Object.defineProperty;var v=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var x=(u,s,a)=>s in u?A(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,E=(u,s)=>{for(var a in s||(s={}))B.call(s,a)&&x(u,a,s[a]);if(v)for(var a of v(s))L.call(s,a)&&x(u,a,s[a]);return u};import{_ as D,r as _,c as w,a as d,w as F,b,d as n,e as t,o as V,V as f}from"./app.1c78646e.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:u,createTextVNode:s,resolveComponent:a,withCtx:c,createVNode:l,createElementVNode:k,openBlock:r,createElementBlock:p}=f,i={"fullscreen-target":""};function C(e,g){const o=a("d-button"),m=a("d-fullscreen");return r(),p("div",null,[l(m,{zIndex:100,onFullscreenLaunch:e.fullscreenLaunch},{default:c(()=>[k("div",i,[l(o,{"fullscreen-launch":""},{default:c(()=>[s(u(e.btnContent),1)]),_:1})])]),_:1},8,["onFullscreenLaunch"])])}const{ref:h}=f;return E({render:C},{setup(){const e=h("FullScreen");return{btnContent:e,fullscreenLaunch:o=>{o?e.value="Exit":e.value="FullScreen"}}}})}(),"render-demo-1":function(){const{toDisplayString:u,createTextVNode:s,resolveComponent:a,withCtx:c,createVNode:l,createElementVNode:k,openBlock:r,createElementBlock:p}=f,i={"fullscreen-target":""};function C(e,g){const o=a("d-button"),m=a("d-fullscreen");return r(),p("div",null,[l(m,{zIndex:100,mode:"normal",onFullscreenLaunch:e.fullscreenLaunch},{default:c(()=>[k("div",i,[l(o,{"fullscreen-launch":""},{default:c(()=>[s(u(e.btnContent),1)]),_:1})])]),_:1},8,["onFullscreenLaunch"])])}const{ref:h}=f;return E({render:C},{setup(){const e=h("\u666E\u901A");return{btnContent:e,fullscreenLaunch:o=>{o?e.value="\u9000\u51FA":e.value="\u666E\u901A"}}}})}()}},G='{"title":"Fullscreen \u5168\u5C4F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u6C89\u6D78\u5F0F\u5168\u5C4F","slug":"\u6C89\u6D78\u5F0F\u5168\u5C4F"},{"level":3,"title":"\u666E\u901A\u5168\u5C4F","slug":"\u666E\u901A\u5168\u5C4F"},{"level":3,"title":"\u53C2\u6570\u53CAAPI","slug":"\u53C2\u6570\u53CAapi"}],"relativePath":"components/fullscreen/index.md","lastUpdated":1638458212324}',S=b('<h1 id="fullscreen-\u5168\u5C4F" tabindex="-1">Fullscreen \u5168\u5C4F <a class="header-anchor" href="#fullscreen-\u5168\u5C4F" aria-hidden="true">#</a></h1><p>\u5168\u5C4F\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u7528\u6237\u9700\u8981\u5C06\u67D0\u4E00\u533A\u57DF\u8FDB\u884C\u5168\u5C4F\u5C55\u793A\u65F6\u3002</p><h3 id="\u6C89\u6D78\u5F0F\u5168\u5C4F" tabindex="-1">\u6C89\u6D78\u5F0F\u5168\u5C4F <a class="header-anchor" href="#\u6C89\u6D78\u5F0F\u5168\u5C4F" aria-hidden="true">#</a></h3><p>\u5145\u6EE1\u6574\u4E2A\u663E\u793A\u5668\u5C4F\u5E55\u7684\u6C89\u6D78\u5F0F\u5168\u5C4F\u3002</p>',6),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},":zIndex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("100"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"@fullscreenLaunch"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("fullscreenLaunch"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"fullscreen-target"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"fullscreen-launch"),n("span",{class:"token punctuation"},">")]),t("{{btnContent}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'FullScreen'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fullscreenLaunch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'Exit'"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'FullScreen'"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      btnContent`),n("span",{class:"token punctuation"},","),t(`
      fullscreenLaunch
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"\u666E\u901A\u5168\u5C4F",tabindex:"-1"},[t("\u666E\u901A\u5168\u5C4F "),n("a",{class:"header-anchor",href:"#\u666E\u901A\u5168\u5C4F","aria-hidden":"true"},"#")],-1),q=n("p",null,"\u5145\u6EE1\u5F53\u524D\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u666E\u901A\u5168\u5C4F\u3002",-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-fullscreen")]),t(),n("span",{class:"token attr-name"},":zIndex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("100"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"mode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("normal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@fullscreenLaunch"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("fullscreenLaunch"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"fullscreen-target"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"fullscreen-launch"),n("span",{class:"token punctuation"},">")]),t("{{btnContent}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-fullscreen")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" btnContent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u666E\u901A'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fullscreenLaunch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u9000\u51FA'"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        btnContent`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'\u666E\u901A'"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      btnContent`),n("span",{class:"token punctuation"},","),t(`
      fullscreenLaunch
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=b('<h3 id="\u53C2\u6570\u53CAapi" tabindex="-1">\u53C2\u6570\u53CAAPI <a class="header-anchor" href="#\u53C2\u6570\u53CAapi" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">mode</td><td style="text-align:center;"><code>immersive</code> \u6216 <code>normal</code></td><td style="text-align:center;"><code>immersive</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5168\u5C4F\u6A21\u5F0F</td><td><a href="#%E6%B2%89%E6%B5%B8%E5%BC%8F%E5%85%A8%E5%B1%8F">\u6C89\u6D78\u5F0F\u5168\u5C4F</a></td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;">10</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5168\u5C4F\u5C42\u7EA7</td><td><a href="#%E6%99%AE%E9%80%9A%E5%85%A8%E5%B1%8F">\u666E\u901A\u5168\u5C4F</a></td></tr><tr><td style="text-align:center;">fullscreenLaunch</td><td style="text-align:center;"><code>EventEmitter&lt;boolean&gt;</code></td><td style="text-align:center;"></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5168\u5C4F\u4E4B\u540E\u7684\u56DE\u8C03</td><td><a href="#%E6%99%AE%E9%80%9A%E5%85%A8%E5%B1%8F">\u666E\u901A\u5168\u5C4F</a></td></tr></tbody></table><p><strong>fullscreen-target</strong> \u9009\u62E9\u5668 \u5FC5\u542B\u6307\u4EE4\uFF0C\u5185\u5BB9\u6295\u5F71\uFF0C\u8BBE\u7F6E<strong>\u9700\u8981\u5168\u5C4F\u7684\u5143\u7D20</strong>\u6C89\u6D78\u5F0F\u5168\u5C4F\u3002</p><p><strong>fullscreen-launch</strong> \u9009\u62E9\u5668 \u5FC5\u542B\u6307\u4EE4\uFF0C\u5185\u5BB9\u6295\u5F71\uFF0C\u8BBE\u7F6E<strong>\u89E6\u53D1</strong>\u8FDB\u5165\u5168\u5C4F\u7684\u6309\u94AE\u6C89\u6D78\u5F0F\u5168\u5C4F\u3002</p>',4);function j(u,s,a,c,l,k){const r=_("render-demo-0"),p=_("demo"),i=_("render-demo-1");return V(),w("div",null,[S,d(p,{sourceCode:`<template>
  <d-fullscreen :zIndex='100' @fullscreenLaunch='fullscreenLaunch'>
    <div fullscreen-target>
      <d-button fullscreen-launch>{{btnContent}}</d-button>
    </div>
  </d-fullscreen>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const btnContent = ref('FullScreen')
    const fullscreenLaunch = (val) => {
      if (val) {
        btnContent.value = 'Exit'
      } else {
        btnContent.value = 'FullScreen'
      }
    }
    return {
      btnContent,
      fullscreenLaunch
    }
  }
}
<\/script>
`},{highlight:F(()=>[I]),default:F(()=>[d(r)]),_:1}),z,q,d(p,{sourceCode:`<template>
  <d-fullscreen :zIndex='100' mode="normal" @fullscreenLaunch='fullscreenLaunch'>
    <div fullscreen-target>
      <d-button fullscreen-launch>{{btnContent}}</d-button>
    </div>
  </d-fullscreen>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const btnContent = ref('\u666E\u901A')
    const fullscreenLaunch = (val) => {
      if (val) {
        btnContent.value = '\u9000\u51FA'
      } else {
        btnContent.value = '\u666E\u901A'
      }
    }
    return {
      btnContent,
      fullscreenLaunch
    }
  }
}
<\/script>
`},{highlight:F(()=>[T]),default:F(()=>[d(i)]),_:1}),$])}var H=D(N,[["render",j]]);export{G as __pageData,H as default};
