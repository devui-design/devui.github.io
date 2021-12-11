var A=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var y=(e,a,s)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,B=(e,a)=>{for(var s in a||(a={}))w.call(a,s)&&y(e,s,a[s]);if(x)for(var s of x(a))q.call(a,s)&&y(e,s,a[s]);return e};import{_ as V,V as g,r as h,c as N,a as m,w as E,b as f,d as t,e as n,o as T}from"./app.1c78646e.js";const H={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:e,resolveComponent:a,createVNode:s,withCtx:o,openBlock:k,createElementBlock:r}=g,c=e("div",null,"\u8FD9\u91CC\u770B\u4E0D\u5230\u6211\u563F\u563F\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5",-1);function u(C,v){const d=a("d-back-top"),i=a("d-icon");return k(),r("div",null,[e("div",null,[c,s(d),s(d,{bottom:"100px"},{default:o(()=>[s(i,{name:"chevron-up"})]),_:1})])])}const{defineComponent:p}=g,l=p({setup(){return{msg:"BackTop \u56DE\u5230\u9876\u90E8 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B"}}});return B({render:u},l)}(),"render-demo-1":function(){const{createElementVNode:e,resolveComponent:a,createVNode:s,withCtx:o,openBlock:k,createElementBlock:r}=g,c=e("div",null,"\u8FD9\u91CC\u770B\u4E0D\u5230\u6211\u563F\u563F\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5",-1);function u(C,v){const d=a("d-icon"),i=a("d-back-top");return k(),r("div",null,[e("div",null,[c,s(i,{bottom:"100px"},{default:o(()=>[s(d,{name:"chevron-up",color:"#fff"})]),_:1})])])}const{defineComponent:p}=g,l=p({setup(){}});return B({render:u},l)}(),"render-demo-2":function(){const{renderList:e,Fragment:a,openBlock:s,createElementBlock:o,toDisplayString:k,resolveComponent:r,createVNode:c,createElementVNode:u}=g,p={class:"devui-scroll-container"},l={class:"devui-scroll-content"};function C(i,_){const F=r("d-back-top");return s(),o("div",null,[u("div",p,[u("ul",l,[(s(!0),o(a,null,e(i.list,(D,b)=>(s(),o("li",{class:"backtop-demo-item",key:D},k(b+1+". "+D),1))),128)),c(F,{target:".devui-scroll-content",visibleHeight:100,bottom:"5px",right:"5px"})])])])}const{defineComponent:v}=g,d=v({setup(){const i="DevUI\u5021\u5BFC\u6C89\u6D78\u3001\u7075\u6D3B\u3001\u81F3\u7B80\u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2",_=[];for(let F=0;F<20;F++)_.push(i);return{list:_}}});return B({render:C},d)}()}},O='{"title":"BackTop \u56DE\u5230\u9876\u90E8","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49"},{"level":3,"title":"\u5D4C\u5165\u5BB9\u5668\u5185\u90E8","slug":"\u5D4C\u5165\u5BB9\u5668\u5185\u90E8"},{"level":3,"title":"d-back-top","slug":"d-back-top"}],"relativePath":"components/back-top/index.md","lastUpdated":1638105178115}',j=f('<h1 id="backtop-\u56DE\u5230\u9876\u90E8" tabindex="-1">BackTop \u56DE\u5230\u9876\u90E8 <a class="header-anchor" href="#backtop-\u56DE\u5230\u9876\u90E8" aria-hidden="true">#</a></h1><p>\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9875\u9762\u5185\u5BB9\u533A\u57DF\u6BD4\u8F83\u957F\u65F6\uFF1B\u5F53\u7528\u6237\u9700\u8981\u9891\u7E41\u8FD4\u56DE\u9876\u90E8\u67E5\u770B\u76F8\u5173\u5185\u5BB9\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u56DE\u5230\u9876\u90E8\u6309\u94AE\u7684\u9ED8\u8BA4\u6837\u5F0F\uFF0C\u8DDD\u79BB\u5E95\u90E8 50px\uFF0C\u53F3\u4FA7 30px\u3002</p>',6),U=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("\u8FD9\u91CC\u770B\u4E0D\u5230\u6211\u563F\u563F\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-back-top")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-back-top")]),n(),t("span",{class:"token attr-name"},"bottom"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100px"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("chevron-up"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-icon")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-back-top")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      msg`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'BackTop \u56DE\u5230\u9876\u90E8 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"}),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=t("h3",{id:"\u81EA\u5B9A\u4E49",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),I=t("p",null,"\u56DE\u5230\u9876\u90E8\u7EC4\u4EF6\u53EF\u81EA\u5B9A\u4E49\u6309\u94AE\u6837\u5F0F\uFF0C\u9650\u5236\u5BBD\u9AD8\uFF1A40px * 40px\u3002\u540C\u65F6\u53EF\u901A\u8FC7 class \u4E2A\u6027\u5316\u8BBE\u7F6E\u6309\u94AE\u6837\u5F0F\u3002",-1),S=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("\u8FD9\u91CC\u770B\u4E0D\u5230\u6211\u563F\u563F\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-back-top")]),n(),t("span",{class:"token attr-name"},"bottom"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100px"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("chevron-up"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#fff"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-icon")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-back-top")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".devui-back-top .devui-backtop-custom"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" #5e7ce0"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),L=t("h3",{id:"\u5D4C\u5165\u5BB9\u5668\u5185\u90E8",tabindex:"-1"},[n("\u5D4C\u5165\u5BB9\u5668\u5185\u90E8 "),t("a",{class:"header-anchor",href:"#\u5D4C\u5165\u5BB9\u5668\u5185\u90E8","aria-hidden":"true"},"#")],-1),P=t("p",null,"\u901A\u8FC7\u8BBE\u7F6E target \u53C2\u6570\uFF0C\u53EF\u5BF9\u7279\u5B9A\u5BB9\u5668\u8FDB\u884C\u8FD4\u56DE\u9876\u90E8\u64CD\u4F5C\u3002",-1),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("devui-scroll-container"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("devui-scroll-content"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("backtop-demo-item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("(item, index) of list"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        {{ index + 1 + '. ' + item }}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-back-top")]),n(`
        `),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(".devui-scroll-content"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":visibleHeight"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("100"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"bottom"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5px"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"right"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5px"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-back-top")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" msg "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"'DevUI\u5021\u5BFC\u6C89\u6D78\u3001\u7075\u6D3B\u3001\u81F3\u7B80\u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2'"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" list "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"20"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      list`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("msg"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      list
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".devui-scroll-container"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 600px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 300px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".devui-scroll-content"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 100%"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 100%"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"overflow-y"),t("span",{class:"token punctuation"},":"),n(" scroll"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"list-style-type"),t("span",{class:"token punctuation"},":"),n(" none"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".backtop-demo-item"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 35px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"border-bottom"),t("span",{class:"token punctuation"},":"),n(" 1px solid #dfe1e6"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),G=f('<h3 id="d-back-top" tabindex="-1">d-back-top <a class="header-anchor" href="#d-back-top" aria-hidden="true">#</a></h3><p>d-back-top \u53C2\u6570</p><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">bottom</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&quot;50px&quot;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6309\u94AE\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u4F4D\u7F6E</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u793A\u4F8B</a></td></tr><tr><td style="text-align:center;">right</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&quot;30px&quot;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6309\u94AE\u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u793A\u4F8B</a></td></tr><tr><td style="text-align:center;">visibleHeight</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">300</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230 visibleHeight \u6240\u8BBE\u503C\u540E\u5C55\u793A\u56DE\u5230\u9876\u90E8\u6309\u94AE\uFF0C\u5355\u4F4D\u4E3A<code>px</code></td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u793A\u4F8B</a></td></tr><tr><td style="text-align:center;">target</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;window&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u89E6\u53D1\u6EDA\u52A8\u7684\u5143\u7D20\u9009\u62E9\u5668</td><td style="text-align:center;"><a href="#%E5%B5%8C%E5%85%A5%E5%AE%B9%E5%99%A8%E5%86%85%E9%83%A8">\u793A\u4F8B</a></td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><p>d-back-top \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr></tbody></table>',5);function J(e,a,s,o,k,r){const c=h("render-demo-0"),u=h("demo"),p=h("render-demo-1"),l=h("render-demo-2");return T(),N("div",null,[j,m(u,{sourceCode:`<template>
  <div>
    <div>\u8FD9\u91CC\u770B\u4E0D\u5230\u6211\u563F\u563F\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5</div>
    <d-back-top />
    <d-back-top bottom="100px">
      <d-icon name="chevron-up"></d-icon>
    </d-back-top>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      msg: 'BackTop \u56DE\u5230\u9876\u90E8 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'
    }
  }
})
<\/script>

<style></style>
`},{highlight:E(()=>[U]),default:E(()=>[m(c)]),_:1}),$,I,m(u,{sourceCode:`<template>
  <div>
    <div>\u8FD9\u91CC\u770B\u4E0D\u5230\u6211\u563F\u563F\uFF0C\u4E0B\u6ED1\u8BD5\u8BD5</div>
    <d-back-top bottom="100px">
      <d-icon name="chevron-up" color="#fff"></d-icon>
    </d-back-top>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
<\/script>

<style>
.devui-back-top .devui-backtop-custom {
  background-color: #5e7ce0;
}
</style>
`},{highlight:E(()=>[S]),default:E(()=>[m(p)]),_:1}),L,P,m(u,{sourceCode:`<template>
  <div class="devui-scroll-container">
    <ul class="devui-scroll-content">
      <li class="backtop-demo-item" v-for="(item, index) of list" :key="item">
        {{ index + 1 + '. ' + item }}
      </li>
      <d-back-top
        target=".devui-scroll-content"
        :visibleHeight="100"
        bottom="5px"
        right="5px"
      ></d-back-top>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const msg = 'DevUI\u5021\u5BFC\u6C89\u6D78\u3001\u7075\u6D3B\u3001\u81F3\u7B80\u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2'
    const list = []
    for (let i = 0; i < 20; i++) {
      list.push(msg)
    }
    return {
      list
    }
  }
})
<\/script>

<style>
.devui-scroll-container {
  width: 600px;
  height: 300px;
  margin-top: 20px;
}

.devui-scroll-content {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  list-style-type: none;
}

.backtop-demo-item {
  line-height: 35px;
  border-bottom: 1px solid #dfe1e6;
}
</style>
`},{highlight:E(()=>[z]),default:E(()=>[m(l)]),_:1}),G])}var Q=V(H,[["render",J]]);export{O as __pageData,Q as default};
