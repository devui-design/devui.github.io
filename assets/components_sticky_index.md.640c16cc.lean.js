var w=Object.defineProperty;var _=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var x=(s,a,e)=>a in s?w(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e,v=(s,a)=>{for(var e in a||(a={}))D.call(a,e)&&x(s,e,a[e]);if(_)for(var e of _(a))b.call(a,e)&&x(s,e,a[e]);return s};import{_ as N,r as C,c as T,a as F,w as r,b as f,d as t,e as n,o as V,V as y}from"./app.1c78646e.js";const z={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:a,withCtx:e,createVNode:k,openBlock:d,createElementBlock:g}=y,p={style:{height:"400px"}},o=s("p",null,"\u57FA\u672C\u7528\u6CD5",-1);function l(c,m){const B=a("d-sticky");return d(),g("div",null,[s("div",p,[k(B,{view:c.view,zIndex:c.zIndex,onStatusChange:c.statusChangeHandler},{default:e(()=>[o]),_:1},8,["view","zIndex","onStatusChange"])])])}return v({render:l},{setup(c){const m={top:100,bottom:0},B=1e3;function E(u){console.log("status =",u)}return{view:m,zIndex:B,statusChangeHandler:E}}})}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:a,withCtx:e,createVNode:k,openBlock:d,createElementBlock:g}=y,p={style:{height:"200px"}},o=s("p",null,"\u6307\u5B9A\u5BB9\u5668",-1);function l(E,u){const i=a("d-sticky");return d(),g("div",null,[s("div",p,[k(i,{view:E.view,container:E.container},{default:e(()=>[o]),_:1},8,["view","container"])])])}const{reactive:h,onMounted:c,toRefs:m}=y;return v({render:l},{setup(E){let u=h({container:null});const i={top:100,bottom:0};return c(()=>{u.container=document.getElementsByClassName("container")[0]}),v({view:i},m(u))}})}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:a,withCtx:e,createVNode:k,openBlock:d,createElementBlock:g}=y,p={style:{height:"200px","overflow-y":"scroll"},class:"scrollTarget"},o={style:{height:"1000px"}},l=s("p",null,"\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668",-1);function h(u,i){const A=a("d-sticky");return d(),g("div",null,[s("div",p,[s("div",o,[k(A,{view:u.view,scrollTarget:u.scrollTarget},{default:e(()=>[l]),_:1},8,["view","scrollTarget"])])])])}const{reactive:c,onMounted:m,toRefs:B}=y;return v({render:h},{setup(u){let i=c({scrollTarget:null});const A={top:100,bottom:0};return m(()=>{i.scrollTarget=document.getElementsByClassName("scrollTarget")[0]}),v({view:A},B(i))}})}()}},J='{"title":"Sticky \u4FBF\u8D34","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u6307\u5B9A\u5BB9\u5668","slug":"\u6307\u5B9A\u5BB9\u5668"},{"level":3,"title":"\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668","slug":"\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"d-sticky \u4E8B\u4EF6","slug":"d-sticky-\u4E8B\u4EF6"}],"relativePath":"components/sticky/index.md","lastUpdated":1636901380148}',I=f('<h1 id="sticky-\u4FBF\u8D34" tabindex="-1">Sticky \u4FBF\u8D34 <a class="header-anchor" href="#sticky-\u4FBF\u8D34" aria-hidden="true">#</a></h1><p>\u4FBF\u7B7E\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u7528\u6237\u5728\u6EDA\u52A8\u5C4F\u5E55\u65F6\uFF0C\u9700\u8981\u67D0\u4E2A\u533A\u57DF\u5185\u5BB9\u5728\u6BB5\u843D\u6216\u8005\u6D4F\u89C8\u5668\u53EF\u89C6\u533A\u57DF\u53EF\u89C1\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),q=t("div",null,"\u9ED8\u8BA4\u5BB9\u5668\u4E3A\u7236\u5143\u7D20",-1),M=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 400px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-sticky")]),n(),t("span",{class:"token attr-name"},":view"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("view"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":zIndex"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("zIndex"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@statusChange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("statusChangeHandler"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("\u57FA\u672C\u7528\u6CD5"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-sticky")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"props"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" view "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
      top`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},","),n(`
      bottom`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" zIndex "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1000"),n(`

    `),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token function"},"statusChangeHandler"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"status"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'status ='"),t("span",{class:"token punctuation"},","),n(" status"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      view`),t("span",{class:"token punctuation"},","),n(`
      zIndex`),t("span",{class:"token punctuation"},","),n(`
      statusChangeHandler
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),R=t("h3",{id:"\u6307\u5B9A\u5BB9\u5668",tabindex:"-1"},[n("\u6307\u5B9A\u5BB9\u5668 "),t("a",{class:"header-anchor",href:"#\u6307\u5B9A\u5BB9\u5668","aria-hidden":"true"},"#")],-1),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 200px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-sticky")]),n(),t("span",{class:"token attr-name"},":view"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("view"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":container"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("container"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("\u6307\u5B9A\u5BB9\u5668"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-sticky")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" reactive"),t("span",{class:"token punctuation"},","),n(" onMounted"),t("span",{class:"token punctuation"},","),n(" toRefs "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"props"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" state "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      container`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"null"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" view "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
      top`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},","),n(`
      bottom`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token function"},"onMounted"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      state`),t("span",{class:"token punctuation"},"."),n("container "),t("span",{class:"token operator"},"="),n(" document"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getElementsByClassName"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'container'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      view`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"toRefs"),t("span",{class:"token punctuation"},"("),n("state"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=t("h3",{id:"\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668",tabindex:"-1"},[n("\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668 "),t("a",{class:"header-anchor",href:"#\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668","aria-hidden":"true"},"#")],-1),j=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n("200px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"overflow-y"),t("span",{class:"token punctuation"},":"),n(" scroll"),t("span",{class:"token punctuation"},";"),n()]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scrollTarget"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 1000px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-sticky")]),n(),t("span",{class:"token attr-name"},":view"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("view"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":scrollTarget"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scrollTarget"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-sticky")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" reactive"),t("span",{class:"token punctuation"},","),n(" onMounted"),t("span",{class:"token punctuation"},","),n(" toRefs "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"props"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"let"),n(" state "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      scrollTarget`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token keyword"},"null"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" view "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"{"),n(`
      top`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"100"),t("span",{class:"token punctuation"},","),n(`
      bottom`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token number"},"0"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token function"},"onMounted"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      state`),t("span",{class:"token punctuation"},"."),n("scrollTarget "),t("span",{class:"token operator"},"="),n(" document"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getElementsByClassName"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'scrollTarget'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      view`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"toRefs"),t("span",{class:"token punctuation"},"("),n("state"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=f('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u5305\u88F9\u5C42\u7684 z-index\uFF0C\u7528\u4E8E\u6D6E\u52A8\u7684\u65F6\u5019\u63A7\u5236 z \u8F74\u7684\u53E0\u653E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">container</td><td style="text-align:center;"><code>Element</code></td><td style="text-align:center;">\u7236\u5BB9\u5668</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u89E6\u53D1\u7684\u5BB9\u5668\uFF0C\u53EF\u4E0D\u540C\u4E8E\u7236\u5BB9\u5668</td><td><a href="#%E6%8C%87%E5%AE%9A%E5%AE%B9%E5%99%A8">\u6307\u5B9A\u5BB9\u5668</a></td><td></td></tr><tr><td style="text-align:center;">view</td><td style="text-align:center;"><code>{top?:number,bottom?:number}</code></td><td style="text-align:center;"><code>{top:0,bottom:0}</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u4E8E\u53EF\u89C6\u533A\u57DF\u7684\u8C03\u6574\uFF0C\u6BD4\u5982\u9876\u90E8\u6709\u56FA\u5B9A\u4F4D\u7F6E\u7684\u5934\u90E8\u7B49\uFF0C\u6570\u503C\u5BF9\u5E94\u88AB\u906E\u6321\u7684\u9876\u90E8\u6216\u5E95\u90E8\u7684\u9AD8\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">scrollTarget</td><td style="text-align:center;"><code>Element</code></td><td style="text-align:center;">document.documentElement</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8981\u53D1\u751F\u6EDA\u52A8\u7684\u5BB9\u5668\uFF0C\u4E00\u822C\u4E3A\u6EDA\u52A8\u6761\u6240\u5728\u5BB9\u5668\uFF0C\u4E3A\u4E3B\u9875\u9762\u7684\u6EDA\u52A8\u6761\u65F6\u5019\u53EF\u4EE5\u4E0D\u8BBE\u7F6E</td><td><a href="#%E6%8C%87%E5%AE%9A%E6%BB%9A%E5%8A%A8%E5%AE%B9%E5%99%A8">\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668</a></td><td></td></tr></tbody></table><h3 id="d-sticky-\u4E8B\u4EF6" tabindex="-1">d-sticky \u4E8B\u4EF6 <a class="header-anchor" href="#d-sticky-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">statusChange</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u72B6\u6001\u53D8\u5316\u7684\u65F6\u5019\u89E6\u53D1\uFF0C\u503C\u4E3A\u53D8\u5316\u540E\u7684\u72B6\u6001\u503C</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',4);function P(s,a,e,k,d,g){const p=C("render-demo-0"),o=C("demo"),l=C("render-demo-1"),h=C("render-demo-2");return V(),T("div",null,[I,F(o,{sourceCode:`<template>
  <div style="height: 400px">
    <d-sticky :view="view" :zIndex="zIndex" @statusChange="statusChangeHandler">
      <p>\u57FA\u672C\u7528\u6CD5</p>
    </d-sticky>
  </div>
</template>

<script>
export default {
  setup(props) {
    const view = {
      top: 100,
      bottom: 0
    }
    const zIndex = 1000

    function statusChangeHandler(status) {
      console.log('status =', status)
    }

    return {
      view,
      zIndex,
      statusChangeHandler
    }
  }
}
<\/script>
`},{description:r(()=>[q]),highlight:r(()=>[M]),default:r(()=>[F(p)]),_:1}),R,F(o,{sourceCode:`<template>
  <div style="height: 200px">
    <d-sticky :view="view" :container="container">
      <p>\u6307\u5B9A\u5BB9\u5668</p>
    </d-sticky>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'
export default {
  setup(props) {
    let state = reactive({
      container: null
    })
    const view = {
      top: 100,
      bottom: 0
    }
    onMounted(() => {
      state.container = document.getElementsByClassName('container')[0]
    })
    return {
      view,
      ...toRefs(state)
    }
  }
}
<\/script>
`},{highlight:r(()=>[H]),default:r(()=>[F(l)]),_:1}),S,F(o,{sourceCode:`<template>
  <div style="height:200px; overflow-y: scroll; " class="scrollTarget">
    <div style="height: 1000px">
      <d-sticky :view="view" :scrollTarget="scrollTarget">
        <p>\u6307\u5B9A\u6EDA\u52A8\u5BB9\u5668</p>
      </d-sticky>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, toRefs } from 'vue'

export default {
  setup(props) {
    let state = reactive({
      scrollTarget: null
    })
    const view = {
      top: 100,
      bottom: 0
    }
    onMounted(() => {
      state.scrollTarget = document.getElementsByClassName('scrollTarget')[0]
    })
    return {
      view,
      ...toRefs(state)
    }
  }
}
<\/script>
`},{highlight:r(()=>[j]),default:r(()=>[F(h)]),_:1}),$])}var K=N(z,[["render",P]]);export{J as __pageData,K as default};
