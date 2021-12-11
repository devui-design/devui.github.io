var J=Object.defineProperty;var q=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var R=(s,e,a)=>e in s?J(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,w=(s,e)=>{for(var a in e||(e={}))P.call(e,a)&&R(s,a,e[a]);if(q)for(var a of q(e))F.call(e,a)&&R(s,a,e[a]);return s};import{_ as Y,r as x,c as z,a as _,w as y,b as I,d as n,e as t,o as j,V as C}from"./app.1c78646e.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:e,withCtx:a,createVNode:i,openBlock:o,createElementBlock:h}=C,u=s("h1",null,"Let's see how to use ReadTip",-1),p=s("p",{class:"readtip-content"},"Set selector to display readtip",-1),r=s("p",null,"The following is the target you want to show readtip",-1),k=s("span",{class:"readtip-target"},"@Jack",-1);function d(g,m){const c=e("d-read-tip");return o(),h("div",null,[i(c,{readTipOptions:g.readTipOptions},{default:a(()=>[u,p,r,k]),_:1},8,["readTipOptions"])])}return w({render:d},{setup(g,{expose:m}){m();const l={readTipOptions:{trigger:"hover",rules:{trigger:"hover",position:"top",selector:".readtip-target",title:"Name: Jack",content:"This is Jack's profile"}}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}})}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:e,withCtx:a,createVNode:i,openBlock:o,createElementBlock:h}=C,u=s("h1",null,"Multiple Readtips",-1),p=s("h2",{class:"introduction"},"You can pass in multiple rules to display different readtips",-1),r=s("p",{class:"first-content"},"Click here to display first content",-1),k=s("p",{class:"second-content"},"Click here to display second content",-1),d=s("h3",{class:"third-content"},"Hover here to display third content",-1),b=s("h3",{class:"third-content"},"Hover here to display third content",-1);function g(c,l){const v=e("d-read-tip");return o(),h("div",null,[i(v,{readTipOptions:c.readTipOptions},{default:a(()=>[u,p,r,k,d,b]),_:1},8,["readTipOptions"])])}return w({render:g},{setup(c,{expose:l}){l();const T={readTipOptions:{trigger:"click",showAnimate:!1,mouseenterTime:100,mouseleaveTime:100,position:"top",overlayClassName:"read-tip-container",appendToBody:!1,rules:[{selector:".first-content",position:"top",title:"This Is the First Title",content:"Lorem ipsum dolor sit amet, consectetur ad.",overlayClassName:"red"},{selector:".second-content",position:"left",title:"This Is the Second Title",content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra",overlayClassName:"child-class",overlayClassName:"red"},{trigger:"hover",selector:".third-content",position:"bottom",title:"This Is the Third Title",content:"Aenean libero urna, scelerisque tincidunt"},{trigger:"hover",selector:".four-content",position:"right",title:"This Is the Third Title",content:"Aenean libero urna, scelerisque tincidunt"}]}};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}})}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,createTextVNode:i,withCtx:o,openBlock:h,createElementBlock:u}=C,p=s("h1",null,"You can also pass in template",-1),r=s("p",{class:"readtip-content"},"Write your own template",-1),k=s("p",null,"The following is the target you want to show readtip",-1),d=s("h3",{class:"readtip-target2"},"DEVUI Course",-1),b=s("h3",{class:"readtip-target2"},"Another DEVUI Course with same class name",-1),g=i(" DEVUI Course "),m=s("span",null,"DevUI",-1),c=i(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),l={class:"card-block"},v=s("span",null,"12",-1),T={class:"card-block"},O=s("span",null,"8",-1),V={class:"card-block"},B=s("span",null,"8",-1);function U(D,N){const E=e("d-avatar"),f=e("d-icon"),S=e("d-card"),A=e("d-read-tip");return h(),u("div",null,[a(A,{readTipOptions:D.readTipOptions},{contentTemplate:o(()=>[a(S,{class:"d-card"},{cardAvatar:o(()=>[a(E,{name:"DevUI"})]),cardTitle:o(()=>[g]),cardSubtitle:o(()=>[a(f,{name:"company-member"}),m]),cardContent:o(()=>[c]),cardActions:o(()=>[s("div",l,[a(f,{name:"like"}),v]),s("div",T,[a(f,{name:"star-o"}),O]),s("div",V,[a(f,{name:"message"}),B])]),_:1})]),default:o(()=>[p,r,k,d,b]),_:1},8,["readTipOptions"])])}return w({render:U},{setup(D,{expose:N}){N();const f={readTipOptions:{trigger:"click",rules:{trigger:"click",position:"top",selector:".readtip-target2",title:"Name: Jack",content:"This is Jack's profile"}}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}})}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:e,withCtx:a,createVNode:i,openBlock:o,createElementBlock:h}=C,u=s("h1",null,"You can pass data asynchronously",-1),p=s("p",{class:"readtip-content"},"Using function fullElement to pass data",-1),r=s("p",null,"The following is the target you want to show readtip",-1),k=s("h4",{class:"readtip-target"},"Display readtip",-1);function d(g,m){const c=e("d-read-tip");return o(),h("div",null,[i(c,{readTipOptions:g.readTipOptions},{default:a(()=>[u,p,r,k]),_:1},8,["readTipOptions"])])}return w({render:d},{setup(g,{expose:m}){m();const c={trigger:"click",rules:{selector:"h4",trigger:"click",dataFn:l,key:"GetData"}};function l({element:T,rule:O}){return{content:T.innerHTML,title:O.key}}const v={readTipOptions:c,getDataFromDB:l};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}})}()}},pn='{"title":"ReadTip reading tips","description":"","frontmatter":{},"headers":[{"level":3,"title":"When To Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Include Multiple Readtip","slug":"include-multiple-readtip"},{"level":3,"title":"Display Content with Template","slug":"display-content-with-template"},{"level":3,"title":"Get Data Asynchronous","slug":"get-data-asynchronous"},{"level":3,"title":"d-read-tip","slug":"d-read-tip"}],"relativePath":"en-US/components/read-tip/index.md","lastUpdated":1638540903826}',L=I('<h1 id="readtip-reading-tips" tabindex="-1">ReadTip reading tips <a class="header-anchor" href="#readtip-reading-tips" aria-hidden="true">#</a></h1><p>Reading notification component.</p><h3 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>When you need to prompt for specific content in the html document.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Set selector to select the element to be displayed in the readtip, and transfer title and content to set the content to be displayed.</p>',6),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":readTipOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("Let's see how to use ReadTip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Set selector to display readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("The following is the target you want to show readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("@Jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),t(),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t("  "),n("span",{class:"token punctuation"},"{"),t(`
    trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
    rules`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
      position`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
      selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.readtip-target'"),n("span",{class:"token punctuation"},","),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name: Jack'"),n("span",{class:"token punctuation"},","),t(`
      content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is Jack\\'s profile'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".source"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" visible"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".readtip-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"include-multiple-readtip",tabindex:"-1"},[t("Include Multiple Readtip "),n("a",{class:"header-anchor",href:"#include-multiple-readtip","aria-hidden":"true"},"#")],-1),G=n("p",null,"Set the readtip display mode for different elements when multiple rules are transferred.",-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":readTipOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("Multiple Readtips"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("introduction"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("You can pass in multiple rules to display different readtips"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("first-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Click here to display first content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("second-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Click here to display second content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("third-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Hover here to display third content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("third-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Hover here to display third content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),t(),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t("  "),n("span",{class:"token punctuation"},"{"),t(`
    trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
    showAnimate`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
    mouseenterTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(`
    mouseleaveTime`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(`
    position`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
    overlayClassName`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'read-tip-container'"),n("span",{class:"token punctuation"},","),t(`
    appendToBody`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
    rules`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.first-content'"),n("span",{class:"token punctuation"},","),t(`
        position`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the First Title'"),n("span",{class:"token punctuation"},","),t(`
        content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lorem ipsum dolor sit amet, consectetur ad.'"),n("span",{class:"token punctuation"},","),t(`
        overlayClassName`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.second-content'"),n("span",{class:"token punctuation"},","),t(`
        position`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the Second Title'"),n("span",{class:"token punctuation"},","),t(`
        content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Class aptent taciti sociosqu ad litora torquent per conubia nostra'"),n("span",{class:"token punctuation"},","),t(`
        overlayClassName`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'child-class'"),n("span",{class:"token punctuation"},","),t(`
        overlayClassName`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
        selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.third-content'"),n("span",{class:"token punctuation"},","),t(`
        position`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the Third Title'"),n("span",{class:"token punctuation"},","),t(`
        content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Aenean libero urna, scelerisque tincidunt'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(` 
      `),n("span",{class:"token punctuation"},"{"),t(`
        trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
        selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.four-content'"),n("span",{class:"token punctuation"},","),t(`
        position`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the Third Title'"),n("span",{class:"token punctuation"},","),t(`
        content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Aenean libero urna, scelerisque tincidunt'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".source"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" visible"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".readtip-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".first-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 4px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".second-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".third-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".red"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(` red
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"display-content-with-template",tabindex:"-1"},[t("Display Content with Template "),n("a",{class:"header-anchor",href:"#display-content-with-template","aria-hidden":"true"},"#")],-1),Q=n("p",null,"You can specify the content to be displayed by importing template. When importing template, you do not need to specify title and content.",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":readTipOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("You can also pass in template"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Write your own template"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("The following is the target you want to show readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DEVUI Course"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Another DEVUI Course with same class name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#contentTemplate"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-card")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("d-card"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardAvatar"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-avatar")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("DevUI"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-avatar")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardTitle"),n("span",{class:"token punctuation"},">")]),t(`
          DEVUI Course
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardSubtitle"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("company-member"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("DevUI"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardContent"),n("span",{class:"token punctuation"},">")]),t(`
          DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon...
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#cardActions"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("like"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),t(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("12"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("star-o"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),t(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("message"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),t(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-card")]),n("span",{class:"token punctuation"},">")]),t(`  
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),t(),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t("  "),n("span",{class:"token punctuation"},"{"),t(`
    trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`    
    rules`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
      trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
      position`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
      selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.readtip-target2'"),n("span",{class:"token punctuation"},","),t(`
      title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name: Jack'"),n("span",{class:"token punctuation"},","),t(`
      content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This is Jack\\'s profile'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`

`),n("span",{class:"token selector"},".icon"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".icon + span"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".card-block"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token selector"},"i"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},"i + span"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".d-card"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transition"),n("span",{class:"token punctuation"},":"),t(`
    box-shadow .3s `),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t(".645"),n("span",{class:"token punctuation"},","),t(".045"),n("span",{class:"token punctuation"},","),t(".355"),n("span",{class:"token punctuation"},","),t("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    transform .3s `),n("span",{class:"token function"},"cubic-bezier"),n("span",{class:"token punctuation"},"("),t(".645"),n("span",{class:"token punctuation"},","),t(".045"),n("span",{class:"token punctuation"},","),t(".355"),n("span",{class:"token punctuation"},","),t("1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token selector"},"&:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"box-shadow"),n("span",{class:"token punctuation"},":"),t(" 0 4px 16px 0 "),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},","),t("0"),n("span",{class:"token punctuation"},","),t("0"),n("span",{class:"token punctuation"},","),t(".1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-5px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".card-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 350px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".action-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8a8e99"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("h3",{id:"get-data-asynchronous",tabindex:"-1"},[t("Get Data Asynchronous "),n("a",{class:"header-anchor",href:"#get-data-asynchronous","aria-hidden":"true"},"#")],-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":readTipOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("You can pass data asynchronously"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Using function fullElement to pass data"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("The following is the target you want to show readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Display readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t("   "),n("span",{class:"token punctuation"},"{"),t(`
    trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
    rules`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(` 
      selector`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'h4'"),n("span",{class:"token punctuation"},","),t(`
      trigger`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(` 
      dataFn`),n("span",{class:"token operator"},":"),t(" getDataFromDB"),n("span",{class:"token punctuation"},","),t(`
      key`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'GetData'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getDataFromDB"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" element"),n("span",{class:"token punctuation"},","),t(" rule "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" content"),n("span",{class:"token operator"},":"),t(" element"),n("span",{class:"token punctuation"},"."),t("innerHTML"),n("span",{class:"token punctuation"},","),t(" title"),n("span",{class:"token operator"},":"),t(" rule"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".readtip-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".red"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(` red
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),tn=I(`<h3 id="d-read-tip" tabindex="-1">d-read-tip <a class="header-anchor" href="#d-read-tip" aria-hidden="true">#</a></h3><p>d-read-tip parameters</p><table><thead><tr><th>Parameter</th><th>Parameter</th><th>Parameter</th><th>Parameter</th><th>Jump to Demo</th><th>Global Config</th></tr></thead><tbody><tr><td>readTipOptions</td><td>ReadTipOptions</td><td>--</td><td>Required. Set readtip options.</td><td><a href="#basic-usage">Basic Usage</a></td><td>--</td></tr><tr><td>readTipOptions.rules</td><td>ReadTipRules</td><td>--</td><td>Option. Set the content of readtip</td><td><a href="#include-multiple-readtip">Include Multiple Readtip</a></td><td>--</td></tr><tr><td>contentTemplate</td><td><code>TemplateRef&lt;any&gt;</code></td><td>--</td><td>Options. Using template to customize content</td><td><a href="#display-content-with-template">Display Content with Template</a></td><td>--</td></tr></tbody></table><div class="language-"><pre><code>export interface ReadTipOptions {
  trigger?: &#39;hover&#39; | &#39;click&#39;; // default is hover
  showAnimate?: boolean; // default is false
  mouseenterTime?: number; // default is 100
  mouseleaveTime?: number; // default is 100
  position?: PositionType | PositionType[]; // default is &#39;top&#39;
  overlayClassName?: string; // default is &#39;&#39;
  appendToBody?: boolean; // defualt is true
  rules: ReadTipRules;
}
export type ReadTipRules = ReadTipRule | ReadTipRule[];

export interface ReadTipRule {
  key?: string;
  selector: string;
  trigger?: &#39;hover&#39; | &#39;click&#39;; // can inherit from ReadTipOptions
  title?: string;
  content?: string;
  showAnimate?: boolean; // can inherit from ReadTipOptions
  mouseenterTime?: number; // can inherit from ReadTipOptions
  mouseleaveTime?: number; // can inherit from ReadTipOptions
  position?: PositionType | PositionType[]; // can inherit from ReadTipOptions
  overlayClassName?: string; // can inherit from ReadTipOptions
  appendToBody?: boolean; // can inherit from ReadTipOptions
  //customData should be used with template. The context of template is customData so that you can customize your template
  dataFn?: ({
    element,
    rule: ReadTipRule,
  }) =&gt; Observable&lt;{ title?: string; content?: string; template?: TemplateRef&lt;any&gt;; customData?: any }&gt;;
}
</code></pre></div>`,4);function sn(s,e,a,i,o,h){const u=x("render-demo-0"),p=x("demo"),r=x("render-demo-1"),k=x("render-demo-2"),d=x("render-demo-3");return j(),z("div",null,[L,_(p,{sourceCode:`<template>
  <d-read-tip :readTipOptions="readTipOptions" >
    <h1>Let's see how to use ReadTip</h1>
    <p class="readtip-content">Set selector to display readtip</p>
    <p>The following is the target you want to show readtip</p>
    <span class="readtip-target">@Jack</span>
  </d-read-tip >
</template>

<script setup>
const readTipOptions =  {
    trigger: 'hover',
    rules: {
      trigger: 'hover',
      position:'top',
      selector: '.readtip-target',
      title: 'Name: Jack',
      content: 'This is Jack\\'s profile',
    },
  };
<\/script>

<style>
.source{
  overflow: visible;
}
.readtip-container {
  padding: 12px;
}

.readtip-target {
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.readtip-target:hover {
  text-decoration: underline;
}

</style>
`},{highlight:y(()=>[M]),default:y(()=>[_(u)]),_:1}),W,G,_(p,{sourceCode:`<template>
  <d-read-tip :readTipOptions="readTipOptions" >
    <h1>Multiple Readtips</h1>
    <h2 class="introduction">You can pass in multiple rules to display different readtips</h2>
    <p class="first-content">Click here to display first content</p>
    <p class="second-content">Click here to display second content</p>
    <h3 class="third-content">Hover here to display third content</h3>
    <h3 class="third-content">Hover here to display third content</h3>
  </d-read-tip >
</template>

<script setup>
const readTipOptions =  {
    trigger: 'click',
    showAnimate: false,
    mouseenterTime: 100,
    mouseleaveTime: 100,
    position: 'top',
    overlayClassName: 'read-tip-container',
    appendToBody: false,
    rules: [
      {
        selector: '.first-content',
        position: 'top',
        title: 'This Is the First Title',
        content: 'Lorem ipsum dolor sit amet, consectetur ad.',
        overlayClassName:'red',
      },
      {
        selector: '.second-content',
        position: 'left',
        title: 'This Is the Second Title',
        content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra',
        overlayClassName: 'child-class',
        overlayClassName:'red',
      },
      {
        trigger: 'hover',
        selector: '.third-content',
        position: 'bottom',
        title: 'This Is the Third Title',
        content: 'Aenean libero urna, scelerisque tincidunt',
      }, 
      {
        trigger: 'hover',
        selector: '.four-content',
        position: 'right',
        title: 'This Is the Third Title',
        content: 'Aenean libero urna, scelerisque tincidunt',
      },
    ],
  };

<\/script>

<style>
.source{
  overflow: visible;
}
.readtip-container {
  padding: 12px;
}

.readtip-target {
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.readtip-target:hover {
  text-decoration: underline;
}

.first-content {
  font-weight: bold;
  margin-bottom: 4px;
  cursor: pointer;
}

.second-content {
  font-weight: bold;
  cursor: pointer;
}

.third-content {
  cursor: pointer;
}

.red {
  color: red
}
</style>
`},{highlight:y(()=>[$]),default:y(()=>[_(r)]),_:1}),K,Q,_(p,{sourceCode:`<template>
  <d-read-tip :readTipOptions="readTipOptions" >
    <h1>You can also pass in template</h1>
    <p class="readtip-content">Write your own template</p>
    <p>The following is the target you want to show readtip</p>
    <h3 class="readtip-target2">DEVUI Course</h3>
    <h3 class="readtip-target2">Another DEVUI Course with same class name</h3>
    <template #contentTemplate>
      <d-card class="d-card">
        <template #cardAvatar>
          <d-avatar name="DevUI"></d-avatar>
        </template>
        <template #cardTitle>
          DEVUI Course
        </template>
        <template #cardSubtitle class="icon">
          <d-icon name="company-member"></d-icon><span>DevUI</span>
        </template>
        <template #cardContent>
          DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon...
        </template>
        <template #cardActions>
          <div class="card-block">
            <d-icon name="like"></d-icon ><span>12</span>
          </div>
          <div class="card-block">
            <d-icon name="star-o"></d-icon ><span>8</span>
          </div>
          <div class="card-block">
            <d-icon name="message"></d-icon ><span>8</span>
          </div>
        </template>
      </d-card>  
    </template>
  </d-read-tip >
</template>

<script setup>
const readTipOptions =  {
    trigger: 'click',    
    rules: {
      trigger: 'click',
      position:'top',
      selector: '.readtip-target2',
      title: 'Name: Jack',
      content: 'This is Jack\\'s profile',
    },
  };
<\/script>

<style>

.icon {
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  vertical-align: middle;
}
.icon + span {
  vertical-align: middle;
}
.card-block {
  margin-right: 16px;
  i{
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  i + span {
    vertical-align: middle;
  }
}
.d-card {
  cursor: pointer;
  transition:
    box-shadow .3s cubic-bezier(.645,.045,.355,1),
    transform .3s cubic-bezier(.645,.045,.355,1);
  &:hover {
    box-shadow: 0 4px 16px 0 rgba(0,0,0,.1);
    transform: translateY(-5px);
  }
}
.card-container {
  width: 350px;
}
.action-text {
  color: #8a8e99;
}
</style>
`},{highlight:y(()=>[X]),default:y(()=>[_(k)]),_:1}),Z,_(p,{sourceCode:`<template>
  <d-read-tip :readTipOptions="readTipOptions" >
    <h1>You can pass data asynchronously</h1>
  <p class="readtip-content">Using function fullElement to pass data</p>
  <p>The following is the target you want to show readtip</p>
  <h4 class="readtip-target">Display readtip</h4>
  </d-read-tip>
</template>

<script setup>
const readTipOptions =   {
    trigger: 'click',
    rules: { 
      selector: 'h4',
      trigger: 'click', 
      dataFn: getDataFromDB,
      key: 'GetData' },
  };
function getDataFromDB ({ element, rule }) {
    return { content: element.innerHTML, title: rule.key }
  }
<\/script>

<style>
.readtip-container {
  padding: 12px;
}

.readtip-target {
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.readtip-target:hover {
  text-decoration: underline;
}
.red {
  color: red
}
</style>
`},{highlight:y(()=>[nn]),default:y(()=>[_(d)]),_:1}),tn])}var cn=Y(H,[["render",sn]]);export{pn as __pageData,cn as default};
