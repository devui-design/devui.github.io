var w=Object.defineProperty;var B=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var E=(e,a,s)=>a in e?w(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,f=(e,a)=>{for(var s in a||(a={}))D.call(a,s)&&E(e,s,a[s]);if(B)for(var s of B(a))A.call(a,s)&&E(e,s,a[s]);return e};import{_ as b,r as h,c as y,a as g,w as _,b as q,d as t,e as n,o as S,V as x}from"./app.1c78646e.js";const N={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,withCtx:s,createTextVNode:o,openBlock:r,createElementBlock:d}=x,m=o();function c(u,p){const l=e("d-statistic"),i=e("d-col"),k=e("d-row");return r(),d("div",null,[a(k,null,{default:s(()=>[a(i,{span:12},{default:s(()=>[a(l,{title:"Users Sales",value:5201314,style:{position:"absolute"}})]),_:1}),a(i,{span:12},{default:s(()=>[a(l,{title:"Account Weekly Sales (CNY)",value:999999})]),_:1}),m]),_:1})])}return f({render:c},{})}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:a,withCtx:s,openBlock:o,createElementBlock:r}=x;function d(c,v){const u=e("d-icon"),p=e("d-statistic"),l=e("d-card"),i=e("d-col"),k=e("d-row");return o(),r("div",null,[a(k,{gutter:16},{default:s(()=>[a(i,{span:12},{default:s(()=>[a(l,null,{default:s(()=>[a(p,{title:"Growth Rate",value:68.28,precision:3,suffix:"%","content-style":{color:"#3f8600"}},{prefix:s(()=>[a(u,{name:"experice-new"})]),_:1},8,["value"])]),_:1})]),_:1}),a(i,{span:12},{default:s(()=>[a(l,null,{default:s(()=>[a(p,{title:"Decline Rate",value:38.3,suffix:"%",class:"demo-class","content-style":{color:"#cf1322"}},{prefix:s(()=>[a(u,{name:"bold"})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])}return f({render:d},{})}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:a,withCtx:s,createTextVNode:o,openBlock:r,createElementBlock:d}=x,m=o("Start");function c(u,p){const l=e("d-statistic"),i=e("d-card"),k=e("d-col"),F=e("d-button"),C=e("d-row");return r(),d("div",null,[a(C,{gutter:16},{default:s(()=>[a(k,{span:12},{default:s(()=>[a(i,null,{default:s(()=>[a(l,{title:"Animation Growth Rate",value:88.265,suffix:"%","content-style":{color:"#3f8600"},"value-from":0,start:u.start,"animation-duration":5e3,animation:""},null,8,["value","start"])]),_:1})]),_:1}),a(k,{span:12},{default:s(()=>[a(i,null,{default:s(()=>[a(l,{title:"Animation Decline Rate",value:"53.333",precision:0,suffix:"%",class:"demo-class","content-style":{color:"#cf1322"},"value-from":0,start:u.controlStart,animation:""},null,8,["start"]),a(F,{onClick:p[0]||(p[0]=I=>u.controlStart=!0)},{default:s(()=>[m]),_:1})]),_:1})]),_:1})]),_:1})])}return f({render:c},{data(){return{start:!0,controlStart:!1}}})}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:a,withCtx:s,createVNode:o,createElementVNode:r,openBlock:d,createElementBlock:m}=x,c=e(" % "),v=r("span",null,"/ 100",-1);function u(l,i){const k=a("d-statistic"),F=a("d-col"),C=a("d-row");return d(),m("div",null,[o(C,{gutter:16},{default:s(()=>[o(F,{span:12},{default:s(()=>[o(k,{title:"Active User Number",value:1128,showGroupSeparator:!0,style:{"margin-right":"50px"}},{suffix:s(()=>[c]),_:1})]),_:1}),o(F,{span:12},{default:s(()=>[o(k,{title:"Scale",value:"93"},{suffix:s(()=>[v]),_:1})]),_:1})]),_:1})])}return f({render:u},{})}()}},L='{"title":"Statistic \u7EDF\u8BA1\u6570\u503C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5728\u5361\u7247\u4E2D\u4F7F\u7528","slug":"\u5728\u5361\u7247\u4E2D\u4F7F\u7528"},{"level":3,"title":"\u6570\u503C\u52A8\u753B","slug":"\u6570\u503C\u52A8\u753B"},{"level":3,"title":"\u63D2\u69FD\u7684\u4F7F\u7528","slug":"\u63D2\u69FD\u7684\u4F7F\u7528"},{"level":3,"title":"d-statistic","slug":"d-statistic"}],"relativePath":"components/statistic/index.md","lastUpdated":1638875059658}',V=q('<h1 id="statistic-\u7EDF\u8BA1\u6570\u503C" tabindex="-1">Statistic \u7EDF\u8BA1\u6570\u503C <a class="header-anchor" href="#statistic-\u7EDF\u8BA1\u6570\u503C" aria-hidden="true">#</a></h1><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5C55\u793A\u5E26\u63CF\u8FF0\u7684\u7EDF\u8BA1\u7C7B\u6570\u636E\u65F6\u4F7F\u7528</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',4),R=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Users Sales"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5201314"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" absolute")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
        
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Account Weekly Sales (CNY)"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("999999"),t("span",{class:"token punctuation"},'"')]),n(` 
       `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-cow")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),G=t("h3",{id:"\u5728\u5361\u7247\u4E2D\u4F7F\u7528",tabindex:"-1"},[n("\u5728\u5361\u7247\u4E2D\u4F7F\u7528 "),t("a",{class:"header-anchor",href:"#\u5728\u5361\u7247\u4E2D\u4F7F\u7528","aria-hidden":"true"},"#")],-1),T=t("p",null,"\u5728\u5361\u7247\u4E2D\u5C55\u793A\u7EDF\u8BA1\u6570\u503C\u3002",-1),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Growth Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("68.28"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":precision"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":content-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#3f8600"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#prefix"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("experice-new"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Decline Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("38.3"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-class"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":content-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#cf1322"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#prefix"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bold"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=t("h3",{id:"\u6570\u503C\u52A8\u753B",tabindex:"-1"},[n("\u6570\u503C\u52A8\u753B "),t("a",{class:"header-anchor",href:"#\u6570\u503C\u52A8\u753B","aria-hidden":"true"},"#")],-1),W=t("p",null,"\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E animation \u5C5E\u6027 \u5F00\u542F\u6570\u503C\u52A8\u753B\u3002\u53EF\u4EE5\u5728\u9875\u9762\u52A0\u8F7D\u65F6\u5F00\u59CB\u52A8\u753B,\u4E5F\u53EF\u4EE5\u624B\u52A8\u63A7\u5236",-1),Y=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Animation Growth Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("88.265"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":content-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#3f8600"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value-from"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":start"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("start"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":animation-duration"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5000"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"animation"),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Animation Decline Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("53.333"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":precision"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-class"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":content-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#cf1322"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value-from"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":start"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("controlStart"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"animation"),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("controlStart = true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      start`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
      controlStart`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=t("h3",{id:"\u63D2\u69FD\u7684\u4F7F\u7528",tabindex:"-1"},[n("\u63D2\u69FD\u7684\u4F7F\u7528 "),t("a",{class:"header-anchor",href:"#\u63D2\u69FD\u7684\u4F7F\u7528","aria-hidden":"true"},"#")],-1),O=t("p",null,"\u524D\u7F00\u548C\u540E\u7F00\u63D2\u69FD",-1),P=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Active User Number"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1128"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":showGroupSeparator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 50px")]),t("span",{class:"token punctuation"},'"')])]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n(`
          %
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Scale"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("93"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("/ 100"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),z=q('<h3 id="d-statistic" tabindex="-1">d-statistic <a class="header-anchor" href="#d-statistic" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td><code>string | v-slot</code></td><td>-</td><td>\u6570\u503C\u7684\u6807\u9898</td></tr><tr><td>extra</td><td><code>string | v-slot</code></td><td>-</td><td>\u989D\u5916\u5185\u5BB9</td></tr><tr><td>value</td><td><code>number | string</code></td><td>-</td><td>\u6570\u503C\u5185\u5BB9</td></tr><tr><td>group-separator</td><td><code>string</code></td><td>,</td><td>\u8BBE\u7F6E\u5343\u5206\u4F4D\u6807\u8BC6\u7B26</td></tr><tr><td>precision</td><td><code>number</code></td><td>-</td><td>\u8BBE\u7F6E\u6570\u503C\u7CBE\u5EA6</td></tr><tr><td>suffix</td><td><code>string | v-slot</code></td><td>-</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u540E\u7F00</td></tr><tr><td>prefix</td><td><code>string | v-slot</code></td><td>-</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u524D\u7F00</td></tr><tr><td>title-style</td><td><code>style</code></td><td>-</td><td>\u6807\u9898\u6837\u5F0F</td></tr><tr><td>content-style</td><td><code>style</code></td><td>-</td><td>\u5185\u5BB9\u6837\u5F0F</td></tr><tr><td>animation-duration</td><td><code>number</code></td><td>2000</td><td>\u52A8\u753B\u6301\u7EED\u65F6\u95F4</td></tr><tr><td>delay</td><td><code>number</code></td><td>0</td><td>\u5EF6\u8FDF\u8FDB\u884C\u52A8\u753B\u65F6\u95F4</td></tr><tr><td>value-from</td><td><code>number</code></td><td>0</td><td>\u52A8\u753B\u521D\u59CB\u503C</td></tr><tr><td>animation</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u5F00\u542F\u52A8\u753B</td></tr><tr><td>easing</td><td><code>string</code></td><td>quartOut</td><td>\u6570\u5B57\u52A8\u753B\u6548\u679C</td></tr><tr><td>start</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u5F00\u59CB\u52A8\u753B</td></tr></tbody></table>',2);function H(e,a,s,o,r,d){const m=h("render-demo-0"),c=h("demo"),v=h("render-demo-1"),u=h("render-demo-2"),p=h("render-demo-3");return S(),y("div",null,[V,g(c,{sourceCode:`<template>
  <d-row>
    <d-col :span="12">
      <d-statistic
        title="Users Sales"
        :value="5201314"
        style="position: absolute">
      </d-statistic>
        
    </d-col>
    <d-col :span="12">
      <d-statistic title="Account Weekly Sales (CNY)" :value="999999" 
       />
    </d-col>
  </d-cow>
</template>
`},{highlight:_(()=>[R]),default:_(()=>[g(m)]),_:1}),G,T,g(c,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Growth Rate"
          :value="68.28"
          :precision="3"
          suffix="%"
          :content-style="{ color: '#3f8600' }"
        >
          <template #prefix>
            <d-icon name="experice-new" />
          </template>
        </d-statistic>
      </d-card>
    </d-col>
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Decline Rate"
          :value="38.3"
          suffix="%"
          class="demo-class"
          :content-style="{ color: '#cf1322' }"
        >
          <template #prefix>
            <d-icon name="bold" />
          </template>
        </d-statistic>
      </d-card>
    </d-col>
  </d-row>
</template>
`},{highlight:_(()=>[U]),default:_(()=>[g(v)]),_:1}),$,W,g(c,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Animation Growth Rate"
          :value="88.265"
          suffix="%"
          :content-style="{ color: '#3f8600' }"
          :value-from="0"
          :start="start"
          :animation-duration="5000"
          animation
        >
        </d-statistic>
      </d-card>
    </d-col>
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Animation Decline Rate"
          value="53.333"
          :precision="0"
          suffix="%"
          class="demo-class"
          :content-style="{ color: '#cf1322' }"
          :value-from="0"
          :start="controlStart"
          animation
        >
        </d-statistic>
        <d-button @click="controlStart = true">Start</d-button>
      </d-card>
    </d-col>
  </d-row>
</template>
<script>
export default {
  data() {
    return {
      start: true,
      controlStart: false,
    };
  },
};
<\/script>
`},{highlight:_(()=>[Y]),default:_(()=>[g(u)]),_:1}),j,O,g(c,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-statistic
        title="Active User Number"
        :value="1128"
        :showGroupSeparator="true"
        style="margin-right: 50px"
      >
        <template #suffix>
          %
        </template>
      </d-statistic>
    </d-col>
    <d-col :span="12">
      <d-statistic title="Scale" value="93">
        <template #suffix>
          <span>/ 100</span>
        </template>
      </d-statistic>
    </d-col>
  </d-row>
</template>
`},{highlight:_(()=>[P]),default:_(()=>[g(p)]),_:1}),z])}var M=b(N,[["render",H]]);export{L as __pageData,M as default};
