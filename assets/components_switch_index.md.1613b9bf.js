var D=Object.defineProperty;var B=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var b=(o,e,c)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[e]=c,w=(o,e)=>{for(var c in e||(e={}))z.call(e,c)&&b(o,c,e[c]);if(B)for(var c of B(e))q.call(e,c)&&b(o,c,e[c]);return o};import{_ as V,V as F,r as v,c as N,a as f,w as i,b as _,d as t,e as n,o as S}from"./app.1c78646e.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:e,openBlock:c,createElementBlock:k}=F;function g(s,a){const p=o("d-switch");return c(),k("div",null,[e(p,{checked:s.checkedSmall,"onUpdate:checked":a[0]||(a[0]=u=>s.checkedSmall=u),size:"small"},null,8,["checked"]),e(p,{checked:s.uncheckedMiddle,"onUpdate:checked":a[1]||(a[1]=u=>s.uncheckedMiddle=u)},null,8,["checked"]),e(p,{checked:s.checkedLarge,"onUpdate:checked":a[2]||(a[2]=u=>s.checkedLarge=u),size:"large"},null,8,["checked"])])}const{defineComponent:m,ref:l}=F,d=m({setup(){const s=l(!0),a=l(!1),p=l(!0);return{checkedSmall:s,uncheckedMiddle:a,checkedLarge:p}}});return w({render:g},d)}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:e,openBlock:c,createElementBlock:k}=F;function g(s,a){const p=o("d-switch");return c(),k("div",null,[e(p,{checked:s.checkedDisabled,"onUpdate:checked":a[0]||(a[0]=u=>s.checkedDisabled=u),disabled:!0},null,8,["checked"]),e(p,{checked:s.checkedDisabled1,"onUpdate:checked":a[1]||(a[1]=u=>s.checkedDisabled1=u),disabled:!0},null,8,["checked"])])}const{defineComponent:m,ref:l}=F,d=m({setup(){const s=l(!0),a=l(!1);return{checkedDisabled:s,checkedDisabled1:a}}});return w({render:g},d)}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:e,createTextVNode:c,withCtx:k,createElementVNode:g,openBlock:m,createElementBlock:l}=F,d=c("\u5F00"),s=c("\u5173"),a=g("i",{class:"icon-right"},null,-1),p=g("i",{class:"icon-error"},null,-1);function u(r,h){const E=o("d-switch");return m(),l("div",null,[e(E,{checked:r.checkedColor,"onUpdate:checked":h[0]||(h[0]=C=>r.checkedColor=C),color:"#FECC55"},null,8,["checked"]),e(E,{checked:r.checkedContent,"onUpdate:checked":h[1]||(h[1]=C=>r.checkedContent=C)},{checkedContent:k(()=>[d]),uncheckedContent:k(()=>[s]),_:1},8,["checked"]),e(E,{color:"#50D4AB",checked:r.checkedIcon,"onUpdate:checked":h[2]||(h[2]=C=>r.checkedIcon=C)},{checkedContent:k(()=>[a]),uncheckedContent:k(()=>[p]),_:1},8,["checked"])])}const{defineComponent:x,ref:y}=F,A=x({setup(){const r=y(!0),h=y(!1),E=y(!0);return{checkedColor:r,checkedContent:h,checkedIcon:E}}});return w({render:u},A)}()}},R='{"title":"Switch \u5F00\u5173","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"size","slug":"size"},{"level":3,"title":"disabled","slug":"disabled"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"d-switch \u53C2\u6570","slug":"d-switch-\u53C2\u6570"},{"level":3,"title":"d-switch \u4E8B\u4EF6","slug":"d-switch-\u4E8B\u4EF6"}],"relativePath":"components/switch/index.md","lastUpdated":1636901380149}',M=_('<h1 id="switch-\u5F00\u5173" tabindex="-1">Switch \u5F00\u5173 <a class="header-anchor" href="#switch-\u5F00\u5173" aria-hidden="true">#</a></h1><p>\u5F00/\u5173\u5207\u6362\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u4E24\u79CD\u72B6\u6001\u9700\u8981\u6765\u56DE\u5207\u6362\u63A7\u5236\u65F6\uFF0C\u6BD4\u5982\u542F\u7528/\u7981\u7528\u3002</p><h3 id="size" tabindex="-1">size <a class="header-anchor" href="#size" aria-hidden="true">#</a></h3>',5),I=t("div",null,[n("size\u53EF\u9009\uFF1A"),t("code",null,"small | middle | large"),n("\uFF0C\u9ED8\u8BA4\u4E3Amiddle")],-1),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedSmall"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("uncheckedMiddle"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedLarge"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedSmall "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" uncheckedMiddle "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedLarge "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      checkedSmall`),t("span",{class:"token punctuation"},","),n(`
      uncheckedMiddle`),t("span",{class:"token punctuation"},","),n(`
      checkedLarge
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=t("h3",{id:"disabled",tabindex:"-1"},[n("disabled "),t("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),j=t("div",null,"\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u5F00\u5173\uFF0C\u9ED8\u8BA4\u4E3Afalse",-1),$=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedDisabled"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("true"),t("span",{class:"token punctuation"},"'")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedDisabled1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("true"),t("span",{class:"token punctuation"},"'")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedDisabled "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedDisabled1 "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      checkedDisabled`),t("span",{class:"token punctuation"},","),n(`
      checkedDisabled1
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),H=t("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u6837\u5F0F "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),P=t("div",null,"\u53EF\u9009\uFF0C\u53EF\u8BBE\u7F6E\u6587\u5B57\u8BF4\u660E/\u56FE\u6807",-1),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedColor"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#FECC55"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedContent"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#checkedContent"),t("span",{class:"token punctuation"},">")]),n("\u5F00"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#uncheckedContent"),t("span",{class:"token punctuation"},">")]),n("\u5173"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
 `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#50D4AB"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("checkedIcon"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#checkedContent"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("i")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon-right"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("i")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#uncheckedContent"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("i")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("icon-error"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("i")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-switch")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedColor "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedContent "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" checkedIcon "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      checkedColor`),t("span",{class:"token punctuation"},","),n(`
      checkedContent`),t("span",{class:"token punctuation"},","),n(`
      checkedIcon
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),J=_('<h3 id="d-switch-\u53C2\u6570" tabindex="-1">d-switch \u53C2\u6570 <a class="header-anchor" href="#d-switch-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">size</td><td style="text-align:center;"><code>small | middle | large</code></td><td style="text-align:center;"><code>middle</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5F00\u5173\u5C3A\u5BF8\u5927\u5C0F</td><td style="text-align:left;"><a href="#size">size</a></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5F00\u5173\u6253\u5F00\u65F6\u7684\u81EA\u5B9A\u4E49\u989C\u8272</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td style="text-align:center;">checked</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5F00\u5173\u662F\u5426\u6253\u5F00\uFF0C\u9ED8\u8BA4\u5173\u95ED</td><td style="text-align:left;"><a href="#size">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u5F00\u5173</td><td style="text-align:left;"><a href="#size">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">checkedContent</td><td style="text-align:center;"><code>string | HTMLElement</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5F00\u5173\u6253\u5F00\u65F6\u8BF4\u660E</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td style="text-align:center;">uncheckedContent</td><td style="text-align:center;"><code>string | HTMLElement</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5F00\u5173\u5173\u95ED\u65F6\u8BF4\u660E</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr></tbody></table><h3 id="d-switch-\u4E8B\u4EF6" tabindex="-1">d-switch \u4E8B\u4EF6 <a class="header-anchor" href="#d-switch-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;"><code>EventEmitter&lt;boolean&gt;</code></td><td style="text-align:left;">\u53EF\u9009,\u5F00\u5173\u6253\u5F00\u8FD4\u56DE true,\u5173\u95ED\u8FD4\u56DE false</td></tr></tbody></table>',4);function K(o,e,c,k,g,m){const l=v("render-demo-0"),d=v("demo"),s=v("render-demo-1"),a=v("render-demo-2");return S(),N("div",null,[M,f(d,{sourceCode:`<template>
  <d-switch v-model:checked="checkedSmall" size="small"></d-switch>
  <d-switch v-model:checked="uncheckedMiddle" ></d-switch>
  <d-switch v-model:checked="checkedLarge" size="large"></d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkedSmall = ref(true)
    const uncheckedMiddle = ref(false)
    const checkedLarge = ref(true)
    return {
      checkedSmall,
      uncheckedMiddle,
      checkedLarge
    }
  }
})
<\/script>
`},{description:i(()=>[I]),highlight:i(()=>[U]),default:i(()=>[f(l)]),_:1}),T,f(d,{sourceCode:`<template>
 <d-switch v-model:checked="checkedDisabled" :disabled='true'></d-switch>
 <d-switch v-model:checked="checkedDisabled1" :disabled='true'></d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkedDisabled = ref(true)
    const checkedDisabled1 = ref(false)
    return {
      checkedDisabled,
      checkedDisabled1
    }
  }
})
<\/script>
`},{description:i(()=>[j]),highlight:i(()=>[$]),default:i(()=>[f(s)]),_:1}),H,f(d,{sourceCode:`<template>
 <d-switch v-model:checked="checkedColor" color="#FECC55"></d-switch>
 <d-switch v-model:checked="checkedContent">
  <template #checkedContent>\u5F00</template>
  <template #uncheckedContent>\u5173</template>
</d-switch>
 <d-switch color="#50D4AB" v-model:checked="checkedIcon">
  <template #checkedContent>
    <i class="icon-right"></i>
  </template>
  <template #uncheckedContent>
    <i class="icon-error"></i>
  </template>
</d-switch>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const checkedColor = ref(true)
    const checkedContent = ref(false)
    const checkedIcon = ref(true)
    return {
      checkedColor,
      checkedContent,
      checkedIcon
    }
  }
})
<\/script>
`},{description:i(()=>[P]),highlight:i(()=>[G]),default:i(()=>[f(a)]),_:1}),J])}var W=V(L,[["render",K]]);export{R as __pageData,W as default};
