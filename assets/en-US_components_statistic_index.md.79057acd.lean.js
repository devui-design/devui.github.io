var N=Object.defineProperty;var y=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var b=(e,a,s)=>a in e?N(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,v=(e,a)=>{for(var s in a||(a={}))C.call(a,s)&&b(e,s,a[s]);if(y)for(var s of y(a))V.call(a,s)&&b(e,s,a[s]);return e};import{_ as B,r as h,c as E,a as g,w as _,b as S,d as t,e as n,o as U,V as w}from"./app.1c78646e.js";const A={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,withCtx:s,createTextVNode:o,openBlock:r,createElementBlock:d}=w,m=o();function c(l,p){const u=e("d-statistic"),i=e("d-col"),k=e("d-row");return r(),d("div",null,[a(k,null,{default:s(()=>[a(i,{span:12},{default:s(()=>[a(u,{title:"Users Sales",value:5201314,style:{position:"absolute"}})]),_:1}),a(i,{span:12},{default:s(()=>[a(u,{title:"Account Weekly Sales (CNY)",value:999999})]),_:1}),m]),_:1})])}return v({render:c},{})}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:a,withCtx:s,openBlock:o,createElementBlock:r}=w;function d(c,f){const l=e("d-icon"),p=e("d-statistic"),u=e("d-card"),i=e("d-col"),k=e("d-row");return o(),r("div",null,[a(k,{gutter:16},{default:s(()=>[a(i,{span:12},{default:s(()=>[a(u,null,{default:s(()=>[a(p,{title:"Growth Rate",value:68.28,precision:3,suffix:"%","content-style":{color:"#3f8600"}},{prefix:s(()=>[a(l,{name:"experice-new"})]),_:1},8,["value"])]),_:1})]),_:1}),a(i,{span:12},{default:s(()=>[a(u,null,{default:s(()=>[a(p,{title:"Decline Rate",value:38.3,suffix:"%",class:"demo-class","content-style":{color:"#cf1322"}},{prefix:s(()=>[a(l,{name:"bold"})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])}return v({render:d},{})}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:a,withCtx:s,createTextVNode:o,openBlock:r,createElementBlock:d}=w,m=o("Start");function c(l,p){const u=e("d-statistic"),i=e("d-card"),k=e("d-col"),x=e("d-button"),q=e("d-row");return r(),d("div",null,[a(q,{gutter:16},{default:s(()=>[a(k,{span:12},{default:s(()=>[a(i,null,{default:s(()=>[a(u,{title:"Animation Growth Rate",value:88.265,suffix:"%","content-style":{color:"#3f8600"},"value-from":0,start:l.start,"animation-duration":5e3,animation:""},null,8,["value","start"])]),_:1})]),_:1}),a(k,{span:12},{default:s(()=>[a(i,null,{default:s(()=>[a(u,{title:"Animation Decline Rate",value:"53.333",precision:0,suffix:"%",class:"demo-class","content-style":{color:"#cf1322"},"value-from":0,start:l.controlStart,animation:""},null,8,["start"]),a(x,{onClick:p[0]||(p[0]=I=>l.controlStart=!0)},{default:s(()=>[m]),_:1})]),_:1})]),_:1})]),_:1})])}return v({render:c},{data(){return{start:!0,controlStart:!1}}})}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:a,withCtx:s,createVNode:o,createElementVNode:r,openBlock:d,createElementBlock:m}=w,c=e(" % "),f=r("span",null,"/ 100",-1);function l(u,i){const k=a("d-statistic"),x=a("d-col"),q=a("d-row");return d(),m("div",null,[o(q,{gutter:16},{default:s(()=>[o(x,{span:12},{default:s(()=>[o(k,{title:"Active User Number",value:1128,showGroupSeparator:!0,style:{"margin-right":"50px"}},{suffix:s(()=>[c]),_:1})]),_:1}),o(x,{span:12},{default:s(()=>[o(k,{title:"Scale",value:"93"},{suffix:s(()=>[f]),_:1})]),_:1})]),_:1})])}return v({render:l},{})}()}},L='{"title":"Statistic","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Use in card","slug":"use-in-card"},{"level":3,"title":"Numerical animation","slug":"numerical-animation"},{"level":3,"title":"Use of slots","slug":"use-of-slots"},{"level":3,"title":"d-statistic","slug":"d-statistic"}],"relativePath":"en-US/components/statistic/index.md","lastUpdated":1638458212329}',R=S('<h1 id="statistic" tabindex="-1">Statistic <a class="header-anchor" href="#statistic" aria-hidden="true">#</a></h1><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used when it is necessary to display statistical data with description</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),D=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),T=t("h3",{id:"use-in-card",tabindex:"-1"},[n("Use in card "),t("a",{class:"header-anchor",href:"#use-in-card","aria-hidden":"true"},"#")],-1),G=t("p",null,"Display statistics in cards.",-1),W=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),$=t("h3",{id:"numerical-animation",tabindex:"-1"},[n("Numerical animation "),t("a",{class:"header-anchor",href:"#numerical-animation","aria-hidden":"true"},"#")],-1),Y=t("p",null,"We can start numerical animation by setting the animation attribute. You can start the animation when the page loads, or you can control it manually",-1),j=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),P=t("h3",{id:"use-of-slots",tabindex:"-1"},[n("Use of slots "),t("a",{class:"header-anchor",href:"#use-of-slots","aria-hidden":"true"},"#")],-1),O=t("p",null,"Prefix and suffix slots",-1),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),F=S('<h3 id="d-statistic" tabindex="-1">d-statistic <a class="header-anchor" href="#d-statistic" aria-hidden="true">#</a></h3><table><thead><tr><th>parameter</th><th>type</th><th>default</th><th>introduce</th></tr></thead><tbody><tr><td>title</td><td><code>string | v-slot</code></td><td>-</td><td>Title of value</td></tr><tr><td>extra</td><td><code>string | v-slot</code></td><td>-</td><td>Extra content</td></tr><tr><td>value</td><td><code>number | string</code></td><td>-</td><td>Value content</td></tr><tr><td>group-separator</td><td><code>string</code></td><td>,</td><td>Set group-separator</td></tr><tr><td>precision</td><td><code>number</code></td><td>-</td><td>Set numeric precision</td></tr><tr><td>suffix</td><td><code>string | v-slot</code></td><td>-</td><td>Sets the suffix of the value</td></tr><tr><td>prefix</td><td><code>string | v-slot</code></td><td>-</td><td>Sets the prefix of the value</td></tr><tr><td>title-style</td><td><code>style</code></td><td>-</td><td>Title Style</td></tr><tr><td>content-style</td><td><code>style</code></td><td>-</td><td>Content style</td></tr><tr><td>animation-duration</td><td><code>number</code></td><td>2000</td><td>Animation duration</td></tr><tr><td>delay</td><td><code>number</code></td><td>0</td><td>Delay animation time</td></tr><tr><td>value-from</td><td><code>number</code></td><td>0</td><td>Animation initial value</td></tr><tr><td>animation</td><td><code>boolean</code></td><td>false</td><td>Turn on animation</td></tr><tr><td>easing</td><td><code>string</code></td><td>quartOut</td><td>Digital animation effect</td></tr><tr><td>start</td><td><code>boolean</code></td><td>false</td><td>Start animation</td></tr></tbody></table>',2);function H(e,a,s,o,r,d){const m=h("render-demo-0"),c=h("demo"),f=h("render-demo-1"),l=h("render-demo-2"),p=h("render-demo-3");return U(),E("div",null,[R,g(c,{sourceCode:`<template>
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
`},{highlight:_(()=>[D]),default:_(()=>[g(m)]),_:1}),T,G,g(c,{sourceCode:`<template>
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
`},{highlight:_(()=>[W]),default:_(()=>[g(f)]),_:1}),$,Y,g(c,{sourceCode:`<template>
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
`},{highlight:_(()=>[j]),default:_(()=>[g(l)]),_:1}),P,O,g(c,{sourceCode:`<template>
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
`},{highlight:_(()=>[z]),default:_(()=>[g(p)]),_:1}),F])}var M=B(A,[["render",H]]);export{L as __pageData,M as default};
