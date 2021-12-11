var y=Object.defineProperty;var w=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var E=(u,s,e)=>s in u?y(u,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[s]=e,f=(u,s)=>{for(var e in s||(s={}))x.call(s,e)&&E(u,e,s[e]);if(w)for(var e of w(s))_.call(s,e)&&E(u,e,s[e]);return u};import{_ as S,r as h,c as N,a as A,w as B,b as g,o as H,V as b,d as t,e as n}from"./app.1c78646e.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:u,createTextVNode:s,resolveComponent:e,withCtx:C,createVNode:F,openBlock:c,createBlock:r,createCommentVNode:p,createElementBlock:D}=b;function m(a,o){const d=e("d-button"),i=e("d-drawer");return c(),D("div",null,[F(d,{onClick:a.drawerShow},{default:C(()=>[s(" drawer "+u(a.btnName),1)]),_:1},8,["onClick"]),a.isDrawerShow?(c(),r(i,{key:0,visible:a.isDrawerShow,"onUpdate:visible":o[0]||(o[0]=k=>a.isDrawerShow=k),width:a.drawerWidth,isCover:a.isCover,backdropCloseable:a.backdropCloseable,beforeHidden:a.beforeHidden,position:"right",onClose:a.drawerClose,onAfterOpened:a.drawerAfterOpened},null,8,["visible","width","isCover","backdropCloseable","beforeHidden","onClose","onAfterOpened"])):p("v-if",!0)])}const{ref:l}=b;return f({render:m},{setup(){let a=l(!1),o=l("close"),d=l("15vw"),i=l(!1),k=l(!0);return{isDrawerShow:a,btnName:o,drawerWidth:d,drawerShow:()=>{a.value=!0,o.value="open"},drawerClose:()=>{o.value="close"},drawerAfterOpened:()=>{console.log("open")},isCover:i,backdropCloseable:k,beforeHidden:()=>new Promise(v=>{v(!1)})}}})}()}},G='{"title":"Drawer \u62BD\u5C49\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u53C2\u6570\u53CAAPI","slug":"\u53C2\u6570\u53CAapi"}],"relativePath":"components/drawer/index.md","lastUpdated":1638282474063}',V=g('<h1 id="drawer-\u62BD\u5C49\u677F" tabindex="-1">Drawer \u62BD\u5C49\u677F <a class="header-anchor" href="#drawer-\u62BD\u5C49\u677F" aria-hidden="true">#</a></h1><p>\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u62BD\u5C49\u4ECE\u7236\u7A97\u4F53\u8FB9\u7F18\u6ED1\u5165\uFF0C\u8986\u76D6\u4F4F\u90E8\u5206\u7236\u7A97\u4F53\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u5230\u539F\u4EFB\u52A1\u3002</li><li>\u5F53\u9700\u8981\u4E00\u4E2A\u9644\u52A0\u7684\u9762\u677F\u6765\u63A7\u5236\u7236\u7A97\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u9762\u677F\u5728\u9700\u8981\u65F6\u547C\u51FA\u3002\u6BD4\u5982\uFF0C\u63A7\u5236\u754C\u9762\u5C55\u793A\u6837\u5F0F\uFF0C\u5F80\u754C\u9762\u4E2D\u6DFB\u52A0\u5185\u5BB9\u3002</li><li>\u5F53\u9700\u8981\u5728\u5F53\u524D\u4EFB\u52A1\u6D41\u4E2D\u63D2\u5165\u4E34\u65F6\u4EFB\u52A1\uFF0C\u521B\u5EFA\u6216\u9884\u89C8\u9644\u52A0\u5185\u5BB9\u3002\u6BD4\u5982\u5C55\u793A\u534F\u8BAE\u6761\u6B3E\uFF0C\u521B\u5EFA\u5B50\u5BF9\u8C61\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><h4>\u57FA\u672C\u7528\u6CD5\uFF0C\u53EF\u4EE5\u63A7\u5236\u5168\u5C4F\u3001\u5173\u95ED\u548C\u8BBE\u7F6E\u5BBD\u5EA6\u3002</h4>',6),q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n("  "),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerShow"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" drawer {{ btnName }} "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-drawer")]),n(`
    `),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDrawerShow"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("visible")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isDrawerShow"),t("span",{class:"token punctuation"},'"')]),n(` 
    `),t("span",{class:"token attr-name"},":width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerWidth"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":isCover"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("isCover"),t("span",{class:"token punctuation"},'"')]),n(` 
    `),t("span",{class:"token attr-name"},":backdropCloseable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("backdropCloseable"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":beforeHidden"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("beforeHidden"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@close"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerClose"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@afterOpened"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("drawerAfterOpened"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" isDrawerShow "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" btnName "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'close'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" drawerWidth "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'15vw'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" isCover "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" backdropCloseable "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerShow"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token boolean"},"true"),n(`
      btnName`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'open'"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerClose"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      btnName`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'close'"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"drawerAfterOpened"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'open'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"beforeHidden"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Promise"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"resolve"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
        `),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      isDrawerShow`),t("span",{class:"token punctuation"},","),n(`
      btnName`),t("span",{class:"token punctuation"},","),n(`
      drawerWidth`),t("span",{class:"token punctuation"},","),n(`
      drawerShow`),t("span",{class:"token punctuation"},","),n(`
      drawerClose`),t("span",{class:"token punctuation"},","),n(`
      drawerAfterOpened`),t("span",{class:"token punctuation"},","),n(`
      isCover`),t("span",{class:"token punctuation"},","),n(`
      backdropCloseable`),t("span",{class:"token punctuation"},","),n(`
      beforeHidden`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),W=g('<h3 id="\u53C2\u6570\u53CAapi" tabindex="-1">\u53C2\u6570\u53CAAPI <a class="header-anchor" href="#\u53C2\u6570\u53CAapi" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">v-model:visible</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u662F\u5426\u53EF\u89C1</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>300px</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u5BBD\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1000</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E drawer \u7684 z-index \u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">isCover</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u6709\u906E\u7F69\u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">escKeyCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7 esc \u6309\u952E\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">&#39;right&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u62BD\u5C49\u677F\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C&#39;left&#39;\u6216\u8005&#39;right&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">backdropCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7\u70B9\u51FB\u80CC\u666F\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">beforeHidden</td><td style="text-align:center;"><code>Function | Promise</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u7A97\u53E3\u4E4B\u524D\u7684\u56DE\u8C03</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onClose</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED drawer \u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onAfterOpened</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6253\u5F00 drawer \u540E\u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',2);function P(u,s,e,C,F,c){const r=h("render-demo-0"),p=h("demo");return H(),N("div",null,[V,A(p,{sourceCode:`<template>
  <d-button  @click="drawerShow"> drawer {{ btnName }} </d-button>
  <d-drawer
    v-if="isDrawerShow"
    v-model:visible="isDrawerShow" 
    :width="drawerWidth"
    :isCover="isCover" 
    :backdropCloseable="backdropCloseable"
    :beforeHidden="beforeHidden"
    position="right"
    @close="drawerClose"
    @afterOpened="drawerAfterOpened"
  />
</template>
<script>
import { ref } from 'vue'

export default ({
  setup() {
    let isDrawerShow = ref(false)
    let btnName = ref('close')
    let drawerWidth = ref('15vw')
    let isCover = ref(false)
    let backdropCloseable = ref(true);

    const drawerShow = () => {
      isDrawerShow.value = true
      btnName.value = 'open'
    }

    const drawerClose = () => {
      btnName.value = 'close'
    }

    const drawerAfterOpened = () => {
      console.log('open')
    }

    const beforeHidden = () => {
      return new Promise((resolve) => {
        resolve(false);
      });
    }

    return {
      isDrawerShow,
      btnName,
      drawerWidth,
      drawerShow,
      drawerClose,
      drawerAfterOpened,
      isCover,
      backdropCloseable,
      beforeHidden,
    }
  }
})
<\/script>
`},{highlight:B(()=>[q]),default:B(()=>[A(r)]),_:1}),W])}var J=S(O,[["render",P]]);export{G as __pageData,J as default};
