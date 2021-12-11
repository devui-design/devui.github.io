var S=Object.defineProperty;var w=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var O=(s,e,a)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,F=(s,e)=>{for(var a in e||(e={}))J.call(e,a)&&O(s,a,e[a]);if(w)for(var a of w(e))Y.call(e,a)&&O(s,a,e[a]);return s};import{_ as j,r as A,c as H,a as _,w as E,b as N,d as n,e as t,o as L,V as C}from"./app.1c78646e.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:e,withCtx:a,createVNode:l,openBlock:o,createElementBlock:h}=C,i=s("h1",null,"Let's see how to use ReadTip",-1),p=s("p",{class:"readtip-content"},"Set selector to display readtip",-1),r=s("p",null,"The following is the target you want to show readtip",-1),k=s("span",{class:"readtip-target"},"@Jack",-1);function d(g,m){const c=e("d-read-tip");return o(),h("div",null,[l(c,{readTipOptions:g.readTipOptions},{default:a(()=>[i,p,r,k]),_:1},8,["readTipOptions"])])}return F({render:d},{setup(g,{expose:m}){m();const u={readTipOptions:{trigger:"hover",rules:{trigger:"hover",position:"top",selector:".readtip-target",title:"Name: Jack",content:"This is Jack's profile"}}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}})}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:e,withCtx:a,createVNode:l,openBlock:o,createElementBlock:h}=C,i=s("h1",null,"Multiple Readtips",-1),p=s("h2",{class:"introduction"},"You can pass in multiple rules to display different readtips",-1),r=s("p",{class:"first-content"},"Click here to display first content",-1),k=s("p",{class:"second-content"},"Click here to display second content",-1),d=s("h3",{class:"third-content"},"Hover here to display third content",-1),f=s("h3",{class:"third-content"},"Hover here to display third content",-1);function g(c,u){const v=e("d-read-tip");return o(),h("div",null,[l(v,{readTipOptions:c.readTipOptions},{default:a(()=>[i,p,r,k,d,f]),_:1},8,["readTipOptions"])])}return F({render:g},{setup(c,{expose:u}){u();const T={readTipOptions:{trigger:"click",showAnimate:!1,mouseenterTime:100,mouseleaveTime:100,position:"top",overlayClassName:"read-tip-container",appendToBody:!1,rules:[{selector:".first-content",position:"top",title:"This Is the First Title",content:"Lorem ipsum dolor sit amet, consectetur ad.",overlayClassName:"red"},{selector:".second-content",position:"left",title:"This Is the Second Title",content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra",overlayClassName:"child-class",overlayClassName:"red"},{trigger:"hover",selector:".third-content",position:"bottom",title:"This Is the Third Title",content:"Aenean libero urna, scelerisque tincidunt"},{trigger:"hover",selector:".four-content",position:"right",title:"This Is the Third Title",content:"Aenean libero urna, scelerisque tincidunt"}]}};return Object.defineProperty(T,"__isScriptSetup",{enumerable:!1,value:!0}),T}})}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,createTextVNode:l,withCtx:o,openBlock:h,createElementBlock:i}=C,p=s("h1",null,"You can also pass in template",-1),r=s("p",{class:"readtip-content"},"Write your own template",-1),k=s("p",null,"The following is the target you want to show readtip",-1),d=s("h3",{class:"readtip-target2"},"DEVUI Course",-1),f=s("h3",{class:"readtip-target2"},"Another DEVUI Course with same class name",-1),g=l(" DEVUI Course "),m=s("span",null,"DevUI",-1),c=l(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),u={class:"card-block"},v=s("span",null,"12",-1),T={class:"card-block"},B=s("span",null,"8",-1),q={class:"card-block"},V=s("span",null,"8",-1);function I(b,D){const x=e("d-avatar"),y=e("d-icon"),R=e("d-card"),U=e("d-read-tip");return h(),i("div",null,[a(U,{readTipOptions:b.readTipOptions},{contentTemplate:o(()=>[a(R,{class:"d-card"},{cardAvatar:o(()=>[a(x,{name:"DevUI"})]),cardTitle:o(()=>[g]),cardSubtitle:o(()=>[a(y,{name:"company-member"}),m]),cardContent:o(()=>[c]),cardActions:o(()=>[s("div",u,[a(y,{name:"like"}),v]),s("div",T,[a(y,{name:"star-o"}),B]),s("div",q,[a(y,{name:"message"}),V])]),_:1})]),default:o(()=>[p,r,k,d,f]),_:1},8,["readTipOptions"])])}return F({render:I},{setup(b,{expose:D}){D();const y={readTipOptions:{trigger:"click",rules:{trigger:"click",position:"top",selector:".readtip-target2",title:"Name: Jack",content:"This is Jack's profile"}}};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}})}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:e,withCtx:a,createVNode:l,openBlock:o,createElementBlock:h}=C,i=s("h1",null,"You can pass data asynchronously",-1),p=s("p",{class:"readtip-content"},"Using function fullElement to pass data",-1),r=s("p",null,"The following is the target you want to show readtip",-1),k=s("h4",{class:"readtip-target"},"Display readtip",-1);function d(g,m){const c=e("d-read-tip");return o(),h("div",null,[l(c,{readTipOptions:g.readTipOptions},{default:a(()=>[i,p,r,k]),_:1},8,["readTipOptions"])])}return F({render:d},{setup(g,{expose:m}){m();const c={trigger:"click",rules:{selector:"h4",trigger:"click",dataFn:u,key:"GetData"}};function u({element:T,rule:B}){return{content:T.innerHTML,title:B.key}}const v={readTipOptions:c,getDataFromDB:u};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}})}()}},pn='{"title":"ReadTip \u9605\u8BFB\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684readtip","slug":"\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684readtip"},{"level":3,"title":"\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9","slug":"\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9"},{"level":3,"title":"\u5F02\u6B65\u83B7\u53D6\u6570\u636E","slug":"\u5F02\u6B65\u83B7\u53D6\u6570\u636E"},{"level":3,"title":"d-read-tip","slug":"d-read-tip"}],"relativePath":"components/read-tip/index.md","lastUpdated":1638540903825}',z=N('<h1 id="readtip-\u9605\u8BFB\u63D0\u793A" tabindex="-1">ReadTip \u9605\u8BFB\u63D0\u793A <a class="header-anchor" href="#readtip-\u9605\u8BFB\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u9605\u8BFB\u63D0\u793A\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53html\u6587\u6863\u4E2D\u9700\u8981\u5BF9\u7279\u5B9A\u5185\u5BB9\u8FDB\u884C\u63D0\u793A\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u8BBE\u7F6Eselector\u9009\u62E9\u9700\u8981\u663E\u793Areadtip\u7684\u5143\u7D20\uFF0C\u4F20\u5165title\u548Ccontent\u8BBE\u7F6E\u663E\u793A\u7684\u5185\u5BB9\u3002</p>',6),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),$=n("h3",{id:"\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684readtip",tabindex:"-1"},[t("\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684readtip "),n("a",{class:"header-anchor",href:"#\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684readtip","aria-hidden":"true"},"#")],-1),G=n("p",null,"\u4F20\u5165\u591A\u4E2Arule\uFF0C\u8BBE\u7F6E\u4E0D\u540C\u5143\u7D20\u7684readtip\u663E\u793A\u6A21\u5F0F\u3002",-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),K=n("h3",{id:"\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9",tabindex:"-1"},[t("\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9","aria-hidden":"true"},"#")],-1),Q=n("p",null,"\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165template\u81EA\u5B9A\u4E49\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4F20\u5165template\u65F6\u4E0D\u5FC5\u518D\u4F20\u5165title\u548Ccontent\u3002",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),Z=n("h3",{id:"\u5F02\u6B65\u83B7\u53D6\u6570\u636E",tabindex:"-1"},[t("\u5F02\u6B65\u83B7\u53D6\u6570\u636E "),n("a",{class:"header-anchor",href:"#\u5F02\u6B65\u83B7\u53D6\u6570\u636E","aria-hidden":"true"},"#")],-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),tn=N(`<h3 id="d-read-tip" tabindex="-1">d-read-tip <a class="header-anchor" href="#d-read-tip" aria-hidden="true">#</a></h3><p>d-read-tip \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td>readTipOptions</td><td>ReadTipOptions</td><td>--</td><td>\u5FC5\u9009\uFF0C\u914D\u7F6E\u63D0\u793A\u9009\u9879</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td>--</td></tr><tr><td>readTipOptions.rules</td><td>ReadTipRules</td><td>--</td><td>\u5FC5\u9009\uFF0C\u914D\u7F6E readtip \u5185\u5BB9</td><td><a href="#%E5%8C%85%E6%8B%AC%E5%A4%9A%E4%B8%AA%E6%8F%90%E7%A4%BA%E7%9A%84readtip">\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684readtip</a></td><td>--</td></tr><tr><td>contentTemplate</td><td><code>TemplateRef&lt;any&gt;</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u4F20\u5165\u6A21\u677F\u663E\u793A readtip \u5185\u5BB9</td><td><a href="#%E4%BC%A0%E5%85%A5%E6%A8%A1%E6%9D%BF%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9">\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9</a></td><td>--</td></tr></tbody></table><div class="language-"><pre><code>export interface ReadTipOptions {
  trigger?: &#39;hover&#39; | &#39;click&#39;; // \u9ED8\u8BA4\u503C\u662F hover
  showAnimate?: boolean; // \u9ED8\u8BA4\u503C\u662F false
  mouseenterTime?: number; // \u9ED8\u8BA4\u503C\u662F 100
  mouseleaveTime?: number; // \u9ED8\u8BA4\u503C\u662F 100
  position?: PositionType | PositionType[]; // \u9ED8\u8BA4\u503C\u662F &#39;top&#39;
  overlayClassName?: string; // \u9ED8\u8BA4\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32
  appendToBody?: boolean; // \u9ED8\u8BA4\u503C\u4E3Atrue
  rules: ReadTipRules;
}
export type ReadTipRules = ReadTipRule | ReadTipRule[];

export interface ReadTipRule {
  key?: string;
  selector: string;
  trigger?: &#39;hover&#39; | &#39;click&#39;; // \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions
  title?: string;
  content?: string;
  showAnimate?: boolean; // \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions
  mouseenterTime?: number; // \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions
  mouseleaveTime?: number; // \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions
  position?: PositionType | PositionType[]; // \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions
  overlayClassName?: string; // \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions
  appendToBody?: boolean; //\u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOtions
  //customData\u4E0Etemplate\u642D\u914D\u4F7F\u7528\uFF0CcustomData\u4E3A\u4F20\u5165\u6A21\u677F\u7684\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6A21\u677F\u5185\u5BB9
  dataFn?: ({
    element,
    rule: ReadTipRule,
  }) =&gt; Observable&lt;{ title?: string; content?: string; template?: TemplateRef&lt;any&gt;; customData?: any }&gt;;
}
</code></pre></div>`,4);function sn(s,e,a,l,o,h){const i=A("render-demo-0"),p=A("demo"),r=A("render-demo-1"),k=A("render-demo-2"),d=A("render-demo-3");return L(),H("div",null,[z,_(p,{sourceCode:`<template>
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
`},{highlight:E(()=>[M]),default:E(()=>[_(i)]),_:1}),$,G,_(p,{sourceCode:`<template>
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
`},{highlight:E(()=>[W]),default:E(()=>[_(r)]),_:1}),K,Q,_(p,{sourceCode:`<template>
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
`},{highlight:E(()=>[X]),default:E(()=>[_(k)]),_:1}),Z,_(p,{sourceCode:`<template>
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
`},{highlight:E(()=>[nn]),default:E(()=>[_(d)]),_:1}),tn])}var cn=j(P,[["render",sn]]);export{pn as __pageData,cn as default};
