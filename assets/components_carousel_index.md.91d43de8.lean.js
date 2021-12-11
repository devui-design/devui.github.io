var G=Object.defineProperty;var T=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(u,s,a)=>s in u?G(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,D=(u,s)=>{for(var a in s||(s={}))L.call(s,a)&&S(u,a,s[a]);if(T)for(var a of T(s))j.call(s,a)&&S(u,a,s[a]);return u};import{_ as I,V as f,r as b,c as $,a as F,w as y,b as P,d as t,e as n,o as U}from"./app.1c78646e.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{renderList:u,Fragment:s,openBlock:a,createElementBlock:p,toDisplayString:m,createTextVNode:r,resolveComponent:c,withCtx:e,createBlock:d,createVNode:l}=f;function g(i,w){const x=c("d-carousel-item"),h=c("d-carousel");return a(),p("div",null,[l(h,{height:"200px"},{default:e(()=>[(a(!0),p(s,null,u(i.items,k=>(a(),d(x,{key:k},{default:e(()=>[r(m(k),1)]),_:2},1024))),128))]),_:1})])}const{defineComponent:A,ref:_}=f,C=A({setup(){return{items:_(["page 1","page 2","page 3","page 4"])}}});return D({render:g},C)}(),"render-demo-1":function(){const{renderList:u,Fragment:s,openBlock:a,createElementBlock:p,toDisplayString:m,createTextVNode:r,resolveComponent:c,withCtx:e,createBlock:d,createVNode:l}=f;function g(i,w){const x=c("d-carousel-item"),h=c("d-carousel");return a(),p("div",null,[l(h,{height:"200px",arrowTrigger:"always",dotTrigger:"hover"},{default:e(()=>[(a(!0),p(s,null,u(i.items,k=>(a(),d(x,{key:k},{default:e(()=>[r(m(k),1)]),_:2},1024))),128))]),_:1})])}const{defineComponent:A,ref:_}=f,C=A({setup(){return{items:_(["page 1","page 2","page 3","page 4"])}}});return D({render:g},C)}(),"render-demo-2":function(){const{renderList:u,Fragment:s,openBlock:a,createElementBlock:p,toDisplayString:m,createTextVNode:r,resolveComponent:c,withCtx:e,createBlock:d,createVNode:l}=f;function g(i,w){const x=c("d-carousel-item"),h=c("d-carousel");return a(),p("div",null,[l(h,{height:"200px",autoplay:"",autoplaySpeed:3e3},{default:e(()=>[(a(!0),p(s,null,u(i.items,k=>(a(),d(x,{key:k},{default:e(()=>[r(m(k),1)]),_:2},1024))),128))]),_:1})])}const{defineComponent:A,ref:_}=f,C=A({setup(){return{items:_(["page 1","page 2","page 3","page 4"])}}});return D({render:g},C)}(),"render-demo-3":function(){const{renderList:u,Fragment:s,openBlock:a,createElementBlock:p,toDisplayString:m,createTextVNode:r,resolveComponent:c,withCtx:e,createBlock:d,createVNode:l,createElementVNode:g}=f,A={class:"carousel-demo-operate"},_=r("\u4E0A\u4E00\u5F20"),C=r("\u4E0B\u4E00\u5F20"),i=r("\u7B2C\u4E00\u5F20");function w(v,B){const q=c("d-carousel-item"),V=c("d-carousel"),N=c("d-button");return a(),p("div",null,[l(V,{ref:"carousel",height:"200px",arrowTrigger:"never"},{default:e(()=>[(a(!0),p(s,null,u(v.items,o=>(a(),d(q,{key:o},{default:e(()=>[r(m(o),1)]),_:2},1024))),128))]),_:1},512),g("div",A,[l(N,{bsStyle:"common",onClick:v.onPrev},{default:e(()=>[_]),_:1},8,["onClick"]),l(N,{bsStyle:"primary",onClick:v.onNext},{default:e(()=>[C]),_:1},8,["onClick"]),l(N,{bsStyle:"common",onClick:v.onGoFirst},{default:e(()=>[i]),_:1},8,["onClick"])])])}const{defineComponent:x,ref:h}=f,k=x({setup(){const v=h(["page 1","page 2","page 3","page 4"]),B=h();return{items:v,carousel:B,onPrev:()=>{var o,E;(E=(o=B.value)==null?void 0:o.prev)==null||E.call(o)},onNext:()=>{var o,E;(E=(o=B.value)==null?void 0:o.next)==null||E.call(o)},onGoFirst:()=>{var o,E;(E=(o=B.value)==null?void 0:o.goto)==null||E.call(o,0)}}}});return D({render:w},k)}()}},at='{"title":"Carousel \u8D70\u9A6C\u706F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u6307\u793A\u5668&\u5207\u6362\u7BAD\u5934","slug":"\u6307\u793A\u5668-\u5207\u6362\u7BAD\u5934"},{"level":3,"title":"\u81EA\u52A8\u8F6E\u64AD","slug":"\u81EA\u52A8\u8F6E\u64AD"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u64CD\u4F5C","slug":"\u81EA\u5B9A\u4E49\u64CD\u4F5C"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/carousel/index.md","lastUpdated":1636901380136}',H=P('<h1 id="carousel-\u8D70\u9A6C\u706F" tabindex="-1">Carousel \u8D70\u9A6C\u706F <a class="header-anchor" href="#carousel-\u8D70\u9A6C\u706F" aria-hidden="true">#</a></h1><p>\u4E00\u7EC4\u8F6E\u64AD\u7684\u533A\u57DF\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u7528\u4E8E\u5C55\u793A\u56FE\u7247\u6216\u8005\u5361\u7247\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),J=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".d-carousel-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 200px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-global-bg"),t("span",{class:"token punctuation"},","),n(" #f3f6f8"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),K=t("h3",{id:"\u6307\u793A\u5668-\u5207\u6362\u7BAD\u5934",tabindex:"-1"},[n("\u6307\u793A\u5668&\u5207\u6362\u7BAD\u5934 "),t("a",{class:"header-anchor",href:"#\u6307\u793A\u5668-\u5207\u6362\u7BAD\u5934","aria-hidden":"true"},"#")],-1),M=t("p",null,"arrowTrigger \u8BBE\u4E3A always \u53EF\u4EE5\u4F7F\u7BAD\u5934\u6C38\u4E45\u663E\u793A\uFF0CdotTrigger \u8BBE\u4E3A hover \u53EF\u4EE5\u4F7F hover \u5230\u70B9\u4E0A\u5C31\u5207\u6362\u3002",-1),O=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"arrowTrigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("always"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dotTrigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hover"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".d-carousel-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 200px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-global-bg"),t("span",{class:"token punctuation"},","),n(" #f3f6f8"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Q=t("h3",{id:"\u81EA\u52A8\u8F6E\u64AD",tabindex:"-1"},[n("\u81EA\u52A8\u8F6E\u64AD "),t("a",{class:"header-anchor",href:"#\u81EA\u52A8\u8F6E\u64AD","aria-hidden":"true"},"#")],-1),R=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"autoplay"),n(),t("span",{class:"token attr-name"},":autoplaySpeed"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3000"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".d-carousel-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 200px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token function"},"var"),t("span",{class:"token punctuation"},"("),n("--devui-global-bg"),t("span",{class:"token punctuation"},","),n(" #f3f6f8"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),W=t("h3",{id:"\u81EA\u5B9A\u4E49\u64CD\u4F5C",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u64CD\u4F5C "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u64CD\u4F5C","aria-hidden":"true"},"#")],-1),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("carousel"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200px"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"arrowTrigger"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("never"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-carousel-item")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in items"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{ item }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-carousel")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("carousel-demo-operate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"bsStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onPrev"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u4E0A\u4E00\u5F20"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"bsStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onNext"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u4E0B\u4E00\u5F20"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"bsStyle"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("common"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("onGoFirst"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u7B2C\u4E00\u5F20"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" items "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'page 1'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 2'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 3'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'page 4'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" carousel "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onPrev"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      carousel`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),n("prev"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onNext"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      carousel`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),n("next"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"onGoFirst"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      carousel`),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token operator"},"?."),n("goto"),t("span",{class:"token operator"},"?."),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      items`),t("span",{class:"token punctuation"},","),n(`
      carousel`),t("span",{class:"token punctuation"},","),n(`
      onPrev`),t("span",{class:"token punctuation"},","),n(`
      onNext`),t("span",{class:"token punctuation"},","),n(`
      onGoFirst
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".carousel-demo-operate"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"align-items"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".carousel-demo-operate .devui-btn-host"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Y=P('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h4 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u63CF\u8FF0</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">arrowTrigger</td><td style="text-align:center;"><code>&#39;hover&#39;|&#39;never&#39;|&#39;always&#39;</code></td><td style="text-align:center;">&#39;hover&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u5207\u6362\u7BAD\u5934\u663E\u793A\u65B9\u5F0F</td><td><a href="#%E6%8C%87%E7%A4%BA%E5%99%A8-%E5%88%87%E6%8D%A2%E7%AE%AD%E5%A4%B4">\u6307\u793A\u5668&amp;\u5207\u6362\u7BAD\u5934</a></td></tr><tr><td style="text-align:center;">autoplay</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u8F6E\u64AD</td><td><a href="#%E8%87%AA%E5%8A%A8%E8%BD%AE%E6%92%AD">\u81EA\u52A8\u8F6E\u64AD</a></td></tr><tr><td style="text-align:center;">autoplaySpeed</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">3000</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u914D\u5408<code>autoplay</code>\u4F7F\u7528\uFF0C\u81EA\u52A8\u8F6E\u64AD\u901F\u5EA6\uFF0C\u5355\u4F4D ms</td><td><a href="#%E8%87%AA%E5%8A%A8%E8%BD%AE%E6%92%AD">\u81EA\u52A8\u8F6E\u64AD</a></td></tr><tr><td style="text-align:center;">height</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;100%&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F6E\u64AD\u5BB9\u5668\u9AD8\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">showDots</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u9762\u677F\u6307\u793A\u5668</td><td><a href="#%E8%87%AA%E5%8A%A8%E8%BD%AE%E6%92%AD">\u81EA\u52A8\u8F6E\u64AD</a></td></tr><tr><td style="text-align:center;">dotPosition</td><td style="text-align:center;"><code>&#39;top&#39;|&#39;bottom&#39;</code></td><td style="text-align:center;">&#39;bottom&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9762\u677F\u6307\u793A\u5668\u4F4D\u7F6E</td><td><a href="#%E6%8C%87%E7%A4%BA%E5%99%A8-%E5%88%87%E6%8D%A2%E7%AE%AD%E5%A4%B4">\u6307\u793A\u5668&amp;\u5207\u6362\u7BAD\u5934</a></td></tr><tr><td style="text-align:center;">dotTrigger</td><td style="text-align:center;"><code>&#39;click&#39;|&#39;hover&#39;</code></td><td style="text-align:center;">&#39;click&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u793A\u5668\u89E6\u53D1\u8F6E\u64AD\u65B9\u5F0F</td><td><a href="#%E6%8C%87%E7%A4%BA%E5%99%A8-%E5%88%87%E6%8D%A2%E7%AE%AD%E5%A4%B4">\u6307\u793A\u5668&amp;\u5207\u6362\u7BAD\u5934</a></td></tr><tr><td style="text-align:center;">activeIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u521D\u59CB\u5316\u6FC0\u6D3B\u5361\u7247\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB\uFF0C\u652F\u6301<code>[(activeIndex)]</code>\u53CC\u5411\u7ED1\u5B9A</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h4 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">activeIndexChange</td><td style="text-align:center;"><code>EventEmitter&lt;number&gt;</code></td><td style="text-align:center;">\u5361\u7247\u5207\u6362\u65F6\uFF0C\u8FD4\u56DE\u5F53\u524D\u5361\u7247\u7684\u7D22\u5F15\uFF0C\u4ECE 0 \u5F00\u59CB</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h4 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">\u65B9\u6CD5</th><th style="text-align:left;">\u63CF\u8FF0</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">prev()</td><td style="text-align:left;">\u5207\u6362\u5230\u4E0A\u4E00\u5F20\u5361\u7247</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C">\u81EA\u5B9A\u4E49\u64CD\u4F5C</a></td></tr><tr><td style="text-align:center;">next()</td><td style="text-align:left;">\u5207\u6362\u5230\u4E0B\u4E00\u5F20\u5361\u7247</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C">\u81EA\u5B9A\u4E49\u64CD\u4F5C</a></td></tr><tr><td style="text-align:center;">goTo(index)</td><td style="text-align:left;">\u5207\u6362\u5230\u6307\u5B9A\u7D22\u5F15\u7684\u5361\u7247\uFF0C\u7D22\u5F15\u4ECE 0 \u5F00\u59CB</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%93%8D%E4%BD%9C">\u81EA\u5B9A\u4E49\u64CD\u4F5C</a></td></tr></tbody></table>',7);function Z(u,s,a,p,m,r){const c=b("render-demo-0"),e=b("demo"),d=b("render-demo-1"),l=b("render-demo-2"),g=b("render-demo-3");return U(),$("div",null,[H,F(e,{sourceCode:`<template>
  <d-carousel height="200px">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    return {
      items
    }
  }
})
<\/script>
<style>
.d-carousel-item {
  text-align: center;
  line-height: 200px;
  background: var(--devui-global-bg, #f3f6f8);
}
</style>
`},{highlight:y(()=>[J]),default:y(()=>[F(c)]),_:1}),K,M,F(e,{sourceCode:`<template>
  <d-carousel height="200px" arrowTrigger="always" dotTrigger="hover">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    return {
      items
    }
  }
})
<\/script>
<style>
.d-carousel-item {
  text-align: center;
  line-height: 200px;
  background: var(--devui-global-bg, #f3f6f8);
}
</style>
`},{highlight:y(()=>[O]),default:y(()=>[F(d)]),_:1}),Q,F(e,{sourceCode:`<template>
  <d-carousel height="200px" autoplay :autoplaySpeed="3000">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    return {
      items
    }
  }
})
<\/script>
<style>
.d-carousel-item {
  text-align: center;
  line-height: 200px;
  background: var(--devui-global-bg, #f3f6f8);
}
</style>
`},{highlight:y(()=>[R]),default:y(()=>[F(l)]),_:1}),W,F(e,{sourceCode:`<template>
  <d-carousel ref="carousel" height="200px" arrowTrigger="never">
    <d-carousel-item v-for="item in items" :key="item">{{ item }}</d-carousel-item>
  </d-carousel>
  <div class="carousel-demo-operate">
    <d-button bsStyle="common" @click="onPrev">\u4E0A\u4E00\u5F20</d-button>
    <d-button bsStyle="primary" @click="onNext">\u4E0B\u4E00\u5F20</d-button>
    <d-button bsStyle="common" @click="onGoFirst">\u7B2C\u4E00\u5F20</d-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const items = ref<string[]>(['page 1', 'page 2', 'page 3', 'page 4'])
    const carousel = ref()
    const onPrev = () => {
      carousel.value?.prev?.()
    }
    const onNext = () => {
      carousel.value?.next?.()
    }
    const onGoFirst = () => {
      carousel.value?.goto?.(0)
    }
    return {
      items,
      carousel,
      onPrev,
      onNext,
      onGoFirst
    }
  }
})
<\/script>
<style>
.carousel-demo-operate {
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.carousel-demo-operate .devui-btn-host {
  margin-right: 20px;
}
</style>
`},{highlight:y(()=>[X]),default:y(()=>[F(g)]),_:1}),Y])}var st=I(z,[["render",Z]]);export{at as __pageData,st as default};
