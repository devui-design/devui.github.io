var I=Object.defineProperty;var $=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var j=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,N=(e,o)=>{for(var t in o||(o={}))W.call(o,t)&&j(e,t,o[t]);if($)for(var t of $(o))O.call(o,t)&&j(e,t,o[t]);return e};import{_ as U,V as P,r as S,c as G,a as B,w,b as z,d as n,e as a,o as H}from"./app.1c78646e.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:l,normalizeClass:c,openBlock:h,createElementBlock:p}=P,_=e(" Panel with foldable "),f=e("This is body"),m=l("br",null,null,-1),T=l("br",null,null,-1),v=e(" Panel has no left padding "),A=e("This is body"),x=l("br",null,null,-1),i=l("br",null,null,-1),k=e("Panel with header and footer"),u=e("This is body"),d=e("This is footer");function r(g,L){const C=o("d-panel-header"),q=o("d-panel-body"),F=o("d-panel"),D=o("d-panel-footer");return h(),p("div",null,[s(F,{type:"primary",isCollapsed:!0,showAnimation:!0},{default:t(()=>[s(C,null,{default:t(()=>[_]),_:1}),s(q,null,{default:t(()=>[f]),_:1})]),_:1}),m,T,s(F,{toggle:g.toggle,isCollapsed:!0,showAnimation:!0,hasLeftPadding:!1},{default:t(()=>[s(C,null,{default:t(()=>[v,l("em",{class:c(`icon icon-chevron-${g.toggleState?"down":"up"}`)},null,2)]),_:1}),s(q,null,{default:t(()=>[A]),_:1})]),_:1},8,["toggle"]),x,i,s(F,{isCollapsed:!0,beforeToggle:g.beforeToggle},{default:t(()=>[s(C,null,{default:t(()=>[k]),_:1}),s(q,null,{default:t(()=>[u]),_:1}),s(D,null,{default:t(()=>[d]),_:1})]),_:1},8,["beforeToggle"])])}const{defineComponent:b,ref:y}=P,E=b({setup(){const g=y(!0);return{toggle:q=>g.value=q,toggleState:g,beforeToggle:()=>!1}}});return N({render:r},E)}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:l,openBlock:c,createElementBlock:h}=P,p=e("Panel with info Type"),_=e("This is body"),f=e("Panel with Primary Type"),m=e("This is body"),T=l("br",null,null,-1),v=l("br",null,null,-1),A=e("Panel with Success Type"),x=e("This is body"),i=l("br",null,null,-1),k=l("br",null,null,-1),u=e("Panel with Warning Type"),d=e("This is body"),r=l("br",null,null,-1),b=l("br",null,null,-1),y=e("Panel with danger Type"),E=e("This is body");function g(C,q){const F=o("d-panel-header"),D=o("d-panel-body"),V=o("d-panel");return c(),h("div",null,[s(V,{type:"info",isCollapsed:!0,showAnimation:!0},{default:t(()=>[s(F,null,{default:t(()=>[p]),_:1}),s(D,null,{default:t(()=>[_]),_:1})]),_:1}),s(V,{type:"primary",isCollapsed:!0,showAnimation:!0},{default:t(()=>[s(F,null,{default:t(()=>[f]),_:1}),s(D,null,{default:t(()=>[m]),_:1})]),_:1}),T,v,s(V,{type:"success",isCollapsed:!0,showAnimation:!0},{default:t(()=>[s(F,null,{default:t(()=>[A]),_:1}),s(D,null,{default:t(()=>[x]),_:1})]),_:1}),i,k,s(V,{type:"warning",isCollapsed:!0,showAnimation:!0},{default:t(()=>[s(F,null,{default:t(()=>[u]),_:1}),s(D,null,{default:t(()=>[d]),_:1})]),_:1}),r,b,s(V,{type:"danger",isCollapsed:!0,showAnimation:!0},{default:t(()=>[s(F,null,{default:t(()=>[y]),_:1}),s(D,null,{default:t(()=>[E]),_:1})]),_:1})])}return N({render:g},{})}(),"render-demo-2":function(){const{normalizeClass:e,createElementVNode:o,createTextVNode:t,resolveComponent:s,withCtx:l,createVNode:c,toDisplayString:h,openBlock:p,createElementBlock:_}=P,f=t(" Panel with foldable "),m=t(" This is body "),T=o("br",null,null,-1),v=o("br",null,null,-1);function A(u,d){const r=s("d-panel-header"),b=s("d-panel-body"),y=s("d-panel"),E=s("d-button");return p(),_("div",null,[c(y,{type:"primary",hasLeftPadding:u.padding,toggle:u.handleToggle,beforeToggle:u.beforeToggle,showAnimation:u.showAnimation},{default:l(()=>[c(r,null,{default:l(()=>[f,o("i",{class:e(`icon-arrow-${u.toggle?"down":"up"}`)},null,2)]),_:1}),c(b,null,{default:l(()=>[m]),_:1})]),_:1},8,["hasLeftPadding","toggle","beforeToggle","showAnimation"]),T,v,c(E,{onClick:d[0]||(d[0]=g=>u.panelToggle=!u.panelToggle)},{default:l(()=>[t(h(u.panelToggle?"\u963B\u6B62\u6298\u53E0":"\u5141\u8BB8\u6298\u53E0"),1)]),_:1})])}const{defineComponent:x,ref:i}=P,k=x({setup(){let u=i(!0),d=i(!0),r=i(!0),b=i(!0),y,E=i(!1);return{state:y,toggle:r,panelToggle:d,beforeToggle:C=>(console.log(C),d.value),isCollapsed:u,handleToggle:C=>{r.value=C},showAnimation:b,padding:E}}});return N({render:A},k)}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:o,withCtx:t,createVNode:s,createElementVNode:l,toDisplayString:c,openBlock:h,createElementBlock:p}=P,_=e(" Panel with foldable "),f=e(" This is body "),m=l("br",null,null,-1),T=l("br",null,null,-1);function v(k,u){const d=o("d-panel-header"),r=o("d-panel-body"),b=o("d-panel"),y=o("d-button");return h(),p("div",null,[s(b,{hasLeftPadding:k.padding,isCollapsed:!0},{default:t(()=>[s(d,null,{default:t(()=>[_]),_:1}),s(r,null,{default:t(()=>[f]),_:1})]),_:1},8,["hasLeftPadding"]),m,T,s(y,{onClick:u[0]||(u[0]=E=>k.padding=!k.padding)},{default:t(()=>[e(c(k.padding?"\u6709\u5DE6\u586B\u5145":"\u6CA1\u6709\u5DE6\u586B\u5145"),1)]),_:1})])}const{defineComponent:A,ref:x}=P,i=A({setup(){return{padding:x(!1)}}});return N({render:v},i)}()}},kn='{"title":"Panel \u9762\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u79CD\u7C7B\u578B","slug":"\u591A\u79CD\u7C7B\u578B"},{"level":3,"title":"\u963B\u6B62\u6298\u53E0","slug":"\u963B\u6B62\u6298\u53E0"},{"level":3,"title":"\u52A8\u6001\u5207\u6362","slug":"\u52A8\u6001\u5207\u6362"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"\u63A5\u53E3&\u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/panel/index.md","lastUpdated":1638458212325}',K=z('<h1 id="panel-\u9762\u677F" tabindex="-1">Panel \u9762\u677F <a class="header-anchor" href="#panel-\u9762\u677F" aria-hidden="true">#</a></h1><p>\u5185\u5BB9\u9762\u677F\uFF0C\u7528\u4E8E\u5185\u5BB9\u5206\u7EC4\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9875\u9762\u5185\u5BB9\u9700\u8981\u8FDB\u884C\u5206\u7EC4\u663E\u793A\u65F6\u4F7F\u7528\uFF0C\u4E00\u822C\u5305\u542B\u5934\u90E8\u3001\u5185\u5BB9\u533A\u57DF\u3001\u5E95\u90E8\u4E09\u4E2A\u90E8\u5206\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel with foldable
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("toggle")]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":hasLeftPadding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel has no left padding
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("em")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon icon-chevron-${toggleState ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(":"),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("em")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":beforeToggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("beforeToggle")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with header and footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-footer")]),n("span",{class:"token punctuation"},">")]),a("This is footer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-footer")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" toggleState "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" toggleState"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" e"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      toggleState`),n("span",{class:"token punctuation"},","),a(`
      beforeToggle
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Q=n("h3",{id:"\u591A\u79CD\u7C7B\u578B",tabindex:"-1"},[a("\u591A\u79CD\u7C7B\u578B "),n("a",{class:"header-anchor",href:"#\u591A\u79CD\u7C7B\u578B","aria-hidden":"true"},"#")],-1),R=n("p",null,"\u9762\u677F\u7C7B\u578B\u5206\u4E3Adefault\u3001primary\u3001success\uFF0Cdanger\u3001warning\u3001info\u3002",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("info"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with info Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with Primary Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("success"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with Success Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("warning"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with Warning Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("danger"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a("Panel with danger Type"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a("This is body"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h3",{id:"\u963B\u6B62\u6298\u53E0",tabindex:"-1"},[a("\u963B\u6B62\u6298\u53E0 "),n("a",{class:"header-anchor",href:"#\u963B\u6B62\u6298\u53E0","aria-hidden":"true"},"#")],-1),Z=n("p",null,"\u67D0\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u963B\u6B62\u9762\u677F\u6536\u8D77\u3002Panel\u63D0\u4F9B\u4E86\u8FD9\u9879API\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528beforeToggle\u6765\u963B\u6B62\u9762\u677F\u7684\u6536\u8D77",-1),nn=n("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0C\u5F53panel\u5C55\u5F00\u65F6\uFF0C\u70B9\u51FB\u963B\u6B62\u6298\u53E0\u6309\u94AE\uFF0C\u5C06\u65E0\u6CD5\u6298\u53E0panel\u3002\u5F53panel\u5C55\u5F00\u65F6\u4E0D\u5F71\u54CD\u64CD\u4F5C\u3002",-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":hasLeftPadding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("padding")]),a(),n("span",{class:"token attr-name"},":toggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("handleToggle")]),a("  "),n("span",{class:"token attr-name"},":beforeToggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("beforeToggle")]),a(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("showAnimation")]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel with foldable `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("i")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`icon-arrow-${toggle ? "),n("span",{class:"token punctuation"},"'"),a("down"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("up"),n("span",{class:"token punctuation"},"'"),a("}`"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("i")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
      This is body
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("panelToggle = !panelToggle"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    {{ panelToggle ? '\u963B\u6B62\u6298\u53E0' : '\u5141\u8BB8\u6298\u53E0' }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" isCollapsed "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" panelToggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" toggle "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" showAnimation "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" state"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" padding "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a("toggle"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" e"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeToggle"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a("console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token keyword"},"return"),a(" panelToggle"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      state`),n("span",{class:"token punctuation"},","),a(`
      toggle`),n("span",{class:"token punctuation"},","),a(`
      panelToggle`),n("span",{class:"token punctuation"},","),a(`
      beforeToggle`),n("span",{class:"token punctuation"},","),a(`
      isCollapsed`),n("span",{class:"token punctuation"},","),a(`
      handleToggle`),n("span",{class:"token punctuation"},","),a(`
      showAnimation`),n("span",{class:"token punctuation"},","),a(`
      padding
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),tn=n("h3",{id:"\u52A8\u6001\u5207\u6362",tabindex:"-1"},[a("\u52A8\u6001\u5207\u6362 "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u5207\u6362","aria-hidden":"true"},"#")],-1),sn=n("p",null,"\u6211\u4EEC\u4EE5hasLeftPadding\u4E3A\u4F8B",-1),en=n("p",null,"\u7406\u8BBA\u4E0A\u6240\u6709\u7684\u5C5E\u6027\u90FD\u53EF\u4EE5\u52A8\u6001\u5207\u6362",-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel")]),a(),n("span",{class:"token attr-name"},":hasLeftPadding"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),a("padding")]),a(),n("span",{class:"token attr-name"},":isCollapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
      Panel with foldable
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-header")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
      This is body
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel-body")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-panel")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("br")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("padding = !padding"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    {{ padding ? '\u6709\u5DE6\u586B\u5145' : '\u6CA1\u6709\u5DE6\u586B\u5145' }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" padding "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      padding`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),ln=z(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">type</td><td style="text-align:center;">PanelType</td><td style="text-align:center;">&#39;default&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9762\u677F\u7684\u7C7B\u578B</td></tr><tr><td style="text-align:center;">cssClass</td><td style="text-align:center;">string</td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49 class \u540D</td></tr><tr><td style="text-align:center;">isCollapsed</td><td style="text-align:center;">boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u5F00</td></tr><tr><td style="text-align:center;">hasLeftPadding</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5DE6\u4FA7\u586B\u5145</td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;">boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u793A\u52A8\u753B</td></tr><tr><td style="text-align:center;">beforeToggle</td><td style="text-align:center;">Function|Promise|Observable</td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9762\u677F\u6298\u53E0\u72B6\u6001\u6539\u53D8\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE boolean \u7C7B\u578B\uFF0C\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62\u9762\u677F\u6539\u53D8\u6298\u53E0\u72B6\u6001 \u6839\u636E\u6761\u4EF6\u963B\u6B62\u6298\u53E0</td></tr><tr><td style="text-align:center;">toggle</td><td style="text-align:center;">Function</td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9762\u677F\u5F53\u524D\u72B6\u6001\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DEboolean\u7C7B\u578B\uFF0C\u8FD4\u56DE false \u4EE3\u8868\u9762\u677F\u88AB\u6536\u8D77\uFF0C\u8FD4\u56DE true \u4EE3\u8868\u9762\u677F\u5C55\u5F00</td></tr></tbody></table><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3&amp;\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">export</span> type PanelType <span class="token operator">=</span> <span class="token string">&#39;default&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,4);function un(e,o,t,s,l,c){const h=S("render-demo-0"),p=S("demo"),_=S("render-demo-1"),f=S("render-demo-2"),m=S("render-demo-3");return H(),G("div",null,[K,B(p,{sourceCode:`<template>
  <d-panel type="primary" :isCollapsed="true" :showAnimation="true" >
    <d-panel-header>
      Panel with foldable
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br /><br />
  <d-panel :toggle=toggle :isCollapsed="true" :showAnimation="true" :hasLeftPadding="false">
    <d-panel-header>
      Panel has no left padding
      <em :class="\`icon icon-chevron-\${toggleState ? 'down':'up'}\`"></em>
    </d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br /><br />
  <d-panel :isCollapsed="true" :beforeToggle=beforeToggle>
    <d-panel-header>Panel with header and footer</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
    <d-panel-footer>This is footer</d-panel-footer>
  </d-panel>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const toggleState = ref(true);
    const toggle = (e) => toggleState.value = e;
    const beforeToggle = () => false;
    return {
      toggle,
      toggleState,
      beforeToggle
    }
  }
})
<\/script>
`},{highlight:w(()=>[M]),default:w(()=>[B(h)]),_:1}),Q,R,B(p,{sourceCode:`<template>
  <d-panel type="info" :isCollapsed="true" :showAnimation="true">
    <d-panel-header>Panel with info Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <d-panel type="primary" :isCollapsed="true" :showAnimation="true">
    <d-panel-header>Panel with Primary Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br /><br />
  <d-panel type="success" :isCollapsed="true" :showAnimation="true">
    <d-panel-header>Panel with Success Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br /><br />
  <d-panel type="warning" :isCollapsed="true" :showAnimation="true">
    <d-panel-header>Panel with Warning Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
  <br /><br />
  <d-panel type="danger" :isCollapsed="true" :showAnimation="true">
    <d-panel-header>Panel with danger Type</d-panel-header>
    <d-panel-body>This is body</d-panel-body>
  </d-panel>
</template>
`},{highlight:w(()=>[X]),default:w(()=>[B(_)]),_:1}),Y,Z,nn,B(p,{sourceCode:`<template>
  <d-panel type="primary" :hasLeftPadding=padding :toggle=handleToggle  :beforeToggle=beforeToggle :showAnimation=showAnimation >
    <d-panel-header>
      Panel with foldable <i :class="\`icon-arrow-\${toggle ? 'down' : 'up'}\`"></i>
    </d-panel-header>
    <d-panel-body>
      This is body
    </d-panel-body>
  </d-panel>
  <br /><br />
  <d-button @click="panelToggle = !panelToggle" >
    {{ panelToggle ? '\u963B\u6B62\u6298\u53E0' : '\u5141\u8BB8\u6298\u53E0' }}
  </d-button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(){
    let isCollapsed = ref(true);
    let panelToggle = ref(true);
    let toggle = ref(true);
    let showAnimation = ref(true);
    let state;
    let padding = ref(false);
    const handleToggle = (e) => {toggle.value = e;}
    const beforeToggle = (e) => {console.log(e); return panelToggle.value;}
    return {
      state,
      toggle,
      panelToggle,
      beforeToggle,
      isCollapsed,
      handleToggle,
      showAnimation,
      padding
    }
  }
})
<\/script>
`},{highlight:w(()=>[an]),default:w(()=>[B(f)]),_:1}),tn,sn,en,B(p,{sourceCode:`<template>
  <d-panel :hasLeftPadding=padding :isCollapsed="true">
    <d-panel-header>
      Panel with foldable
    </d-panel-header>
    <d-panel-body>
      This is body
    </d-panel-body>
  </d-panel>
  <br /><br />
  <d-button @click="padding = !padding" >
    {{ padding ? '\u6709\u5DE6\u586B\u5145' : '\u6CA1\u6709\u5DE6\u586B\u5145' }}
  </d-button>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(){
    let padding = ref(false);
    return {
      padding,
    }
  }
})
<\/script>
`},{highlight:w(()=>[on]),default:w(()=>[B(m)]),_:1}),ln])}var dn=U(J,[["render",un]]);export{kn as __pageData,dn as default};
