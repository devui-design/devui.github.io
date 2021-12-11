var S=Object.defineProperty;var l=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var i=(n,e,s)=>e in n?S(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,k=(n,e)=>{for(var s in e||(e={}))V.call(e,s)&&i(n,s,e[s]);if(l)for(var s of l(e))q.call(e,s)&&i(n,s,e[s]);return n};import{_ as w,V as g,r as E,c as N,a as h,w as c,b as v,o as z,d as t,e as a}from"./app.1c78646e.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:n,createTextVNode:e,resolveDirective:s,withDirectives:u,openBlock:d,createElementBlock:r}=g,o={class:"dragdrop-card-container"},p={class:"dragdrop-card"},F=n("div",{class:"dragdrop-card-header"},"Draggable Item",-1),C={class:"dragdrop-card-block"},D={id:"draggable-item",class:"draggable-item"},m=[e("VSCode")],b={class:"dragdrop-card"},_=[n("div",{class:"dragdrop-card-header"},"Drop Area",-1),n("div",{class:"dragdrop-card-block"},null,-1)];function A(H,J){const x=s("d-draggable"),y=s("d-droppable");return d(),r("div",null,[n("div",o,[n("div",p,[F,n("div",C,[u(n("div",D,m,512),[[x,{dragScope:"default-css",dragData:{item:"item",parent:"list1"}}]])])]),u(n("div",b,_,512),[[y]])])])}const{defineComponent:f}=g,B=f({setup(){return{msg:"Dragdrop \u62D6\u62FD \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B"}}});return k({render:A},B)}()}},Q='{"title":"Dragdrop \u62D6\u62FD","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"d-draggable \u6307\u4EE4","slug":"d-draggable-\u6307\u4EE4"},{"level":3,"title":"d-droppable \u6307\u4EE4","slug":"d-droppable-\u6307\u4EE4"}],"relativePath":"components/dragdrop/index.md","lastUpdated":1636901380137}',I=v('<h1 id="dragdrop-\u62D6\u62FD" tabindex="-1">Dragdrop \u62D6\u62FD <a class="header-anchor" href="#dragdrop-\u62D6\u62FD" aria-hidden="true">#</a></h1><p>\u62D6\u62FD\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u4F7F\u7528\u6570\u4E2A\u64CD\u4F5C\u6B65\u9AA4\uFF0C\u4E14\u6B65\u9AA4\u7684\u987A\u5E8F\u9700\u8981\u7075\u6D3B\u8C03\u6574\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),T=t("div",null,"\u4ECE\u4E00\u4E2Acontainer\u62D6\u52A8\u5230\u53E6\u5916\u4E00\u4E2Acontainer\u3002",-1),j=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card-container"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card-header"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("Draggable Item"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card-block"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"id"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("draggable-item"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("draggable-item"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"v-d-draggable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a(`{
          dragScope: `),t("span",{class:"token punctuation"},"'"),a("default-css"),t("span",{class:"token punctuation"},"'"),a(`,
          dragData: { item: `),t("span",{class:"token punctuation"},"'"),a("item"),t("span",{class:"token punctuation"},"'"),a(", parent: "),t("span",{class:"token punctuation"},"'"),a("list1"),t("span",{class:"token punctuation"},"'"),a(` },
        }`),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("VSCode"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card"),t("span",{class:"token punctuation"},'"')]),a(),t("span",{class:"token attr-name"},"v-d-droppable"),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card-header"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a("Drop Area"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("div")]),a(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),a("dragdrop-card-block"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),a(`

      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("div")]),t("span",{class:"token punctuation"},">")]),a(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("template")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[a(`
`),t("span",{class:"token keyword"},"import"),a(),t("span",{class:"token punctuation"},"{"),a(" defineComponent "),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token keyword"},"from"),a(),t("span",{class:"token string"},"'vue'"),a(`

`),t("span",{class:"token keyword"},"export"),a(),t("span",{class:"token keyword"},"default"),a(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(`
    `),t("span",{class:"token keyword"},"return"),a(),t("span",{class:"token punctuation"},"{"),a(`
      msg`),t("span",{class:"token operator"},":"),a(),t("span",{class:"token string"},"'Dragdrop \u62D6\u62FD \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),a(`
    `),t("span",{class:"token punctuation"},"}"),a(`
  `),t("span",{class:"token punctuation"},"}"),a(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("script")]),t("span",{class:"token punctuation"},">")]),a(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),a("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[a(`
`),t("span",{class:"token selector"},".dragdrop-card-container"),a(),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),a(" flex"),t("span",{class:"token punctuation"},";"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`

`),t("span",{class:"token selector"},".dragdrop-card"),a(),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},"padding"),t("span",{class:"token punctuation"},":"),a(" 12px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),a(" 12px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),a(" 1px solid #dfe1e6"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),a(" 1px solid "),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),a("--devui-dividing-line"),t("span",{class:"token punctuation"},","),a("#dfe1e6"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`

`),t("span",{class:"token selector"},".dragdrop-card .dragdrop-card-header"),a(),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},"padding-bottom"),t("span",{class:"token punctuation"},":"),a(" 12px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"font-size"),t("span",{class:"token punctuation"},":"),a(" 12px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"font-size"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),a("--devui-font-size"),t("span",{class:"token punctuation"},","),a("12px"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`

`),t("span",{class:"token selector"},".draggable-item"),a(),t("span",{class:"token punctuation"},"{"),a(`
  `),t("span",{class:"token property"},"padding"),t("span",{class:"token punctuation"},":"),a(" 0 16px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(" 30px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),a(" 1px solid #5e7ce0"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),a(" 1px solid "),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),a("--devui-brand"),t("span",{class:"token punctuation"},","),a("#5e7ce0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(" #fff"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),a("--devui-light-text"),t("span",{class:"token punctuation"},","),a("#fff"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),a(" 5px"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),a(" 1.5"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),a(" #5e7ce0"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),a("--devui-brand"),t("span",{class:"token punctuation"},","),a("#5e7ce0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),a(" flex"),t("span",{class:"token punctuation"},";"),a(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),a(" center"),t("span",{class:"token punctuation"},";"),a(`
`),t("span",{class:"token punctuation"},"}"),a(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),a("style")]),t("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),L=v('<h3 id="d-draggable-\u6307\u4EE4" tabindex="-1">d-draggable \u6307\u4EE4 <a class="header-anchor" href="#d-draggable-\u6307\u4EE4" aria-hidden="true">#</a></h3><p>d-draggable \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td>dragData</td><td>any</td><td>--</td><td>\u53EF\u9009\uFF0C\u8F6C\u9012\u7ED9 DropEvent\u4E8B\u4EF6\u7684\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>dragScope</td><td>string | Array&lt;string&gt;</td><td>&#39;default&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236 drop \u7684\u4F4D\u7F6E\uFF0C\u5FC5\u987B\u5339\u914D\u5BF9\u5E94\u7684 dropScope</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr></tbody></table><p>d-draggable \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>dragStartEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>\u5F00\u59CB\u62D6\u52A8\u7684 DragStart \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dragEndEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>\u62D6\u52A8\u7ED3\u675F\u7684 DragEnd \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dropEndEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>\u653E\u7F6E\u7ED3\u675F\u7684 Drop \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="d-droppable-\u6307\u4EE4" tabindex="-1">d-droppable \u6307\u4EE4 <a class="header-anchor" href="#d-droppable-\u6307\u4EE4" aria-hidden="true">#</a></h3><p>d-droppable \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td>dropScope</td><td>string</td><td>Array&lt;string&gt;</td><td>&#39;default&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236 drop \u7684\u533A\u57DF\uFF0C\u5BF9\u5E94 dragScope</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-droppable \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>dragEnterEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>drag \u5143\u7D20\u8FDB\u5165\u7684 dragenter \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dragOverEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>drag \u5143\u7D20\u5728 drop \u533A\u57DF\u4E0A\u7684 dragover \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dragLeaveEvent</td><td>EventEmitter&lt;DragEvent&gt;</td><td>drag \u5143\u7D20\u79BB\u5F00\u7684 dragleave \u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dropEvent</td><td>EventEmitter&lt;DropEvent&gt;</td><td>\u653E\u7F6E\u4E00\u4E2A\u5143\u7D20, \u63A5\u6536\u7684\u4E8B\u4EF6\uFF0C\u5176\u4E2D nativeEvent \u8868\u793A\u539F\u751F\u7684 drop \u4E8B\u4EF6\uFF0C\u5176\u4ED6\u89C1\u5B9A\u4E49\u6CE8\u91CA</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',10);function O(n,e,s,u,d,r){const o=E("render-demo-0"),p=E("demo");return z(),N("div",null,[I,h(p,{sourceCode:`<template>
  <div class="dragdrop-card-container">
    <div class="dragdrop-card">
      <div class="dragdrop-card-header">Draggable Item</div>
      <div class="dragdrop-card-block">
        <div id="draggable-item" class="draggable-item" v-d-draggable="{
          dragScope: 'default-css',
          dragData: { item: 'item', parent: 'list1' },
        }">VSCode</div>
      </div>
    </div>
    <div class="dragdrop-card" v-d-droppable>
      <div class="dragdrop-card-header">Drop Area</div>
      <div class="dragdrop-card-block">

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      msg: 'Dragdrop \u62D6\u62FD \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'
    }
  }
})
<\/script>

<style>
.dragdrop-card-container {
  display: flex;
}

.dragdrop-card {
  padding: 12px;
  margin-right: 12px;
  border: 1px solid #dfe1e6;
  border: 1px solid var(--devui-dividing-line,#dfe1e6);
}

.dragdrop-card .dragdrop-card-header {
  padding-bottom: 12px;
  font-size: 12px;
  font-size: var(--devui-font-size,12px);
}

.draggable-item {
  padding: 0 16px;
  height: 30px;
  border: 1px solid #5e7ce0;
  border: 1px solid var(--devui-brand,#5e7ce0);
  color: #fff;
  color: var(--devui-light-text,#fff);
  margin-bottom: 5px;
  line-height: 1.5;
  background-color: #5e7ce0;
  background-color: var(--devui-brand,#5e7ce0);
  display: flex;
  align-items: center;
}
</style>
`},{description:c(()=>[T]),highlight:c(()=>[j]),default:c(()=>[h(o)]),_:1}),L])}var R=w($,[["render",O]]);export{Q as __pageData,R as default};
