var q=Object.defineProperty;var D=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var A=(s,o,a)=>o in s?q(s,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[o]=a,b=(s,o)=>{for(var a in o||(o={}))H.call(o,a)&&A(s,a,o[a]);if(D)for(var a of D(o))j.call(o,a)&&A(s,a,o[a]);return s};import{_ as O,V as v,r as T,c as S,a as f,w as E,b as M,d as n,e as t,o as U}from"./app.1c78646e.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:o,createVNode:a,openBlock:k,createElementBlock:r}=v,F=s("h4",{class:"my-10"},"basic",-1),d=s("h4",{class:"my-10"},"default open",-1),i=s("h4",{class:"my-10"},"disabled",-1);function m(p,u){const c=o("d-time-picker");return k(),r("div",null,[s("div",null,[F,a(c,{placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"})]),s("div",null,[d,a(c,{modelValue:p.vModelValue,"onUpdate:modelValue":u[0]||(u[0]=l=>p.vModelValue=l),"time-picker-width":300,autoOpen:!0},null,8,["modelValue"])]),s("div",null,[i,a(c,{disabled:""})])])}const{ref:g,defineComponent:h,nextTick:w}=v,C=h({setup(p,u){return{vModelValue:g("12:30:40")}}});return b({render:m},C)}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:o,createVNode:a,openBlock:k,createElementBlock:r}=v,F=s("h4",{class:"my-10"},"minTime",-1),d=s("h4",{class:"my-10"},"maxTime",-1),i=s("h4",{class:"my-10"},"maxTime && minTime",-1);function m(p,u){const c=o("d-time-picker");return k(),r("div",null,[s("div",null,[F,a(c,{"min-time":"01:04:30"})]),s("div",null,[d,a(c,{"max-time":"22:30:30",modelValue:p.vModelValues,"onUpdate:modelValue":u[0]||(u[0]=l=>p.vModelValues=l)},null,8,["modelValue"])]),s("div",null,[i,a(c,{"min-time":"02:04:40","max-time":"22:30:30"})])])}const{ref:g,defineComponent:h,watch:w}=v,C=h({setup(p,u){return{vModelValues:g("23:30:20")}}});return b({render:m},C)}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:o,createVNode:a,openBlock:k,createElementBlock:r}=v,F=s("h4",{class:"my-10"},"hh:mm:ss",-1),d=s("h4",{class:"my-10"},"mm:HH:ss",-1),i=s("h4",{class:"my-10"},"hh:mm",-1),m=s("h4",{class:"my-10"},"MM:ss",-1);function g(u,c){const l=o("d-time-picker");return k(),r("div",null,[s("div",null,[F,a(l,{"min-time":"01:04:30"})]),s("div",null,[d,a(l,{format:"mm:HH:ss",modelValue:u.vModelValueFirst,"onUpdate:modelValue":c[0]||(c[0]=V=>u.vModelValueFirst=V)},null,8,["modelValue"])]),s("div",null,[i,a(l,{format:"hh:mm"})]),s("div",null,[m,a(l,{format:"MM:ss"})])])}const{ref:h,defineComponent:w,watch:C}=v,p=w({setup(u,c){let l=h("23:10:20");return C(l,(V,e)=>{console.log(V,e)}),{vModelValueFirst:l}}});return b({render:g},p)}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:o,withCtx:a,createVNode:k,openBlock:r,createElementBlock:F}=v,d=s("h4",{class:"my-10"},"\u81EA\u5B9A\u4E49 customViewTemplate",-1),i={class:"slot-box"};function m(p,u){const c=o("d-time-picker");return r(),F("div",null,[s("div",null,[d,k(c,{ref:"slotDemo"},{customViewTemplate:a(()=>[s("div",i,[s("div",{class:"slot-bottom",onClick:u[0]||(u[0]=(...l)=>p.chooseNowFun&&p.chooseNowFun(...l))},"choose now"),s("div",{class:"slot-bottom",onClick:u[1]||(u[1]=(...l)=>p.chooseTime&&p.chooseTime(...l))},"choose 23:00")])]),_:1},512)])])}const{ref:g,defineComponent:h,nextTick:w}=v,C=h({setup(p,u){let c=g(null);return{chooseNowFun:()=>{let e=new Date,_=e.getHours()>9?e.getHours():"0"+e.getHours(),B=e.getMinutes()>9?e.getMinutes():"0"+e.getMinutes(),y=e.getSeconds()>9?e.getSeconds():"0"+e.getSeconds(),x={time:_+":"+B+":"+y};c.value.chooseTime(x)},chooseTime:()=>{let e={time:"23",type:"mm"};c.value.chooseTime(e)},slotDemo:c}}});return b({render:m},C)}(),"render-demo-4":function(){const{createElementVNode:s,resolveComponent:o,createVNode:a,toDisplayString:k,createTextVNode:r,openBlock:F,createElementBlock:d}=v,i=s("h4",{class:"my-10"},"selectedTimeChage",-1),m=s("br",null,null,-1),g=r(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A"),h=s("h4",{class:"my-10"},"v-model",-1),w=s("br",null,null,-1),C=r(" \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A");function p(e,_){const B=o("d-time-picker");return F(),d("div",null,[s("div",null,[i,a(B,{onSelectedTimeChage:e.selectedTimeChage},null,8,["onSelectedTimeChage"]),m,g,s("button",{onClick:_[0]||(_[0]=(...y)=>e.getNewTimeFun&&e.getNewTimeFun(...y))},k(e.time1),1)]),s("div",null,[h,a(B,{modelValue:e.time2,"onUpdate:modelValue":_[1]||(_[1]=y=>e.time2=y)},null,8,["modelValue"]),w,C,s("button",{onClick:_[2]||(_[2]=(...y)=>e.getNewTimeFun&&e.getNewTimeFun(...y))},k(e.time2),1)])])}const{ref:u,defineComponent:c,nextTick:l}=v,V=c({setup(e,_){let B=u(""),y=u("");return{selectedTimeChage:N=>{B.value=N},time1:B,time2:y}}});return b({render:p},V)}()}},tn='{"title":"TimePicker\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u65F6\u95F4\u533A\u95F4\u9650\u5236","slug":"\u65F6\u95F4\u533A\u95F4\u9650\u5236"},{"level":3,"title":"\u683C\u5F0F\u5316","slug":"\u683C\u5F0F\u5316"},{"level":3,"title":"\u4F20\u5165\u6A21\u677F","slug":"\u4F20\u5165\u6A21\u677F"},{"level":3,"title":"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F","slug":"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F"},{"level":3,"title":"d-time-picker","slug":"d-time-picker"}],"relativePath":"components/time-picker/index.md","lastUpdated":1637423632778}',$=M('<h1 id="timepicker\u7EC4\u4EF6" tabindex="-1">TimePicker\u7EC4\u4EF6 <a class="header-anchor" href="#timepicker\u7EC4\u4EF6" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u9009\u62E9\u5668\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65F6\u95F4\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u9762\u677F\u8FDB\u884C\u9009\u62E9</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("basic"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("\u8BF7\u9009\u62E9\u65F6\u95F4"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("default open"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("vModelValue"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},":time-picker-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("300"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},":autoOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("true"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t("defineComponent"),n("span",{class:"token punctuation"},","),t("nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"let"),t(" vModelValue "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'12:30:40'"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},"{"),t(`
          vModelValue
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".my-10"),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t("10px 0px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"\u65F6\u95F4\u533A\u95F4\u9650\u5236",tabindex:"-1"},[t("\u65F6\u95F4\u533A\u95F4\u9650\u5236 "),n("a",{class:"header-anchor",href:"#\u65F6\u95F4\u533A\u95F4\u9650\u5236","aria-hidden":"true"},"#")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("minTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("01:04:30"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("maxTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("22:30:30"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("vModelValues"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("maxTime && minTime"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("02:04:40"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"max-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("22:30:30"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t("defineComponent"),n("span",{class:"token punctuation"},","),t("watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"let"),t(" vModelValues "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'23:30:20'"),n("span",{class:"token punctuation"},")"),t(`

        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},"{"),t(`
          vModelValues
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),G=n("h3",{id:"\u683C\u5F0F\u5316",tabindex:"-1"},[t("\u683C\u5F0F\u5316 "),n("a",{class:"header-anchor",href:"#\u683C\u5F0F\u5316","aria-hidden":"true"},"#")],-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("hh:mm:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"min-time"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("01:04:30"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("mm:HH:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("mm:HH:ss"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vModelValueFirst"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("hh:mm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("hh:mm"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("MM:ss"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("MM:ss"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
  `),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t("defineComponent"),n("span",{class:"token punctuation"},","),t("watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"let"),t(" vModelValueFirst "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'23:10:20'"),n("span",{class:"token punctuation"},")"),t(`


        `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("vModelValueFirst"),n("span",{class:"token punctuation"},","),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("newValue"),n("span",{class:"token punctuation"},","),t("oldValue")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("newValue"),n("span",{class:"token punctuation"},","),t("oldValue"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},"{"),t(`
          vModelValueFirst
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u4F20\u5165\u6A21\u677F",tabindex:"-1"},[t("\u4F20\u5165\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u4F20\u5165\u6A21\u677F","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49 customViewTemplate"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("slotDemo"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("customViewTemplate")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("slot-box"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("slot-bottom"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("chooseNowFun"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("choose now"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("slot-bottom"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("chooseTime"),n("span",{class:"token punctuation"},"'")]),t(),n("span",{class:"token punctuation"},">")]),t("choose 23:00"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-time-picker")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t("defineComponent"),n("span",{class:"token punctuation"},","),t("nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"let"),t(" slotDemo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"chooseTime"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"let"),t(" timeObj "),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),t(`
                time`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},","),t(`
                type`),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'mm'"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
            slotDemo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chooseTime"),n("span",{class:"token punctuation"},"("),t("timeObj"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`

        `),n("span",{class:"token comment"},"// \u63D2\u69FD\u5185\u65B9\u6CD5  --  \u9009\u62E9\u5F53\u524D\u65F6\u95F4"),t(`
        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"chooseNowFun"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"let"),t(" date "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token keyword"},"let"),t(" hour "),n("span",{class:"token operator"},"="),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"9"),n("span",{class:"token operator"},"?"),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'0'"),n("span",{class:"token operator"},"+"),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getHours"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token keyword"},"let"),t(" minute "),n("span",{class:"token operator"},"="),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"9"),n("span",{class:"token operator"},"?"),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'0'"),n("span",{class:"token operator"},"+"),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMinutes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token keyword"},"let"),t(" second "),n("span",{class:"token operator"},"="),t(" date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},">"),n("span",{class:"token number"},"9"),n("span",{class:"token operator"},"?"),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),n("span",{class:"token string"},"'0'"),n("span",{class:"token operator"},"+"),t("date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getSeconds"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token keyword"},"let"),t(" timeObj "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
                time`),n("span",{class:"token operator"},":"),t(" hour"),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},"':'"),n("span",{class:"token operator"},"+"),t("minute"),n("span",{class:"token operator"},"+"),n("span",{class:"token string"},"':'"),n("span",{class:"token operator"},"+"),t(`second
            `),n("span",{class:"token punctuation"},"}"),t(`
            slotDemo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"chooseTime"),n("span",{class:"token punctuation"},"("),t("timeObj"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},"{"),t(`
            chooseNowFun`),n("span",{class:"token punctuation"},","),t(`
            chooseTime`),n("span",{class:"token punctuation"},","),t(`
            slotDemo
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".slot-box"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t("hidden"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t("100%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".slot-bottom"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t("14px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".slot-bottom:hover"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #7693f5"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),L=n("h3",{id:"\u83B7\u53D6\u6570\u636E\u65B9\u5F0F",tabindex:"-1"},[t("\u83B7\u53D6\u6570\u636E\u65B9\u5F0F "),n("a",{class:"header-anchor",href:"#\u83B7\u53D6\u6570\u636E\u65B9\u5F0F","aria-hidden":"true"},"#")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("selectedTimeChage"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"@selectedTimeChage"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("selectedTimeChage"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),n("span",{class:"token punctuation"},">")]),t(`
          \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("getNewTimeFun"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("{{time1}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("my-10"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("v-model"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-time-picker")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("time2"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),n("span",{class:"token punctuation"},">")]),t(`
          \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("getNewTimeFun"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t("{{time2}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t("defineComponent"),n("span",{class:"token punctuation"},","),t("nextTick "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" time1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" time2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`

      `),n("span",{class:"token comment"},"// \u8FD4\u56DE\u9009\u4E2D\u7684\u65F6\u95F4"),t(`
      `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"selectedTimeChage"),t(),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"timeValue"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
        time1`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` timeValue
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},"{"),t(`
          selectedTimeChage`),n("span",{class:"token punctuation"},","),t(`
          time1`),n("span",{class:"token punctuation"},","),t(`time2
      `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=M('<h3 id="d-time-picker" tabindex="-1">d-time-picker <a class="header-anchor" href="#d-time-picker" aria-hidden="true">#</a></h3><p>d-time-picker \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>disabled</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u7981\u7528\u9009\u62E9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>timePickerWidth / time-picker-width</td><td>number</td><td>---</td><td>\u53EF\u9009\uFF0C\u4E0B\u62C9\u6846\u7684\u5BBD\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>autoOpen</td><td>boolean</td><td>false</td><td>\u53EF\u9009\uFF0C\u521D\u59CB\u5316\u662F\u5426\u76F4\u63A5\u5C55\u5F00</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>format</td><td>string</td><td>&#39;hh:mm:ss&#39;</td><td>\u53EF\u9009\uFF0C\u4F20\u5165\u683C\u5F0F\u5316\uFF0C\u63A7\u5236\u65F6\u95F4\u683C\u5F0F</td><td><a href="#%E6%A0%BC%E5%BC%8F%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td>minTime / min-time</td><td>string</td><td>&#39;00:00:00&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236\u6700\u5C0F\u53EF\u9009\u65F6\u95F4</td><td><a href="#%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td>maxTime / max-time</td><td>string</td><td>&#39;23:59:59&#39;</td><td>\u53EF\u9009\uFF0C\u9650\u5236\u6700\u5927\u53EF\u9009\u65F6\u95F4</td><td><a href="#%E6%97%B6%E9%97%B4%E5%8C%BA%E9%97%B4%E9%99%90%E5%88%B6">\u683C\u5F0F\u5316</a></td></tr><tr><td>customViewTemplate</td><td>TemplateRef</td><td>--</td><td>\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u5FEB\u6377\u8BBE\u7F6E\u65F6\u95F4\u6216\u81EA\u5B9A\u4E49\u64CD\u4F5C\u533A\u5185\u5BB9</td><td><a href="#%E4%BC%A0%E5%85%A5%E6%A8%A1%E6%9D%BF">\u4F20\u5165\u6A21\u677F</a></td></tr><tr><td>showAnimation</td><td>boolean</td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td>\u2714</td></tr></tbody></table><p>d-time-picker \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>selectedTimeChange</td><td>EventEmitter</td><td>\u53EF\u9009\uFF0C\u786E\u5B9A\u7684\u65F6\u5019\u4F1A\u53D1\u51FA\u65B0\u6FC0\u6D3B\u7684\u5B50\u9879\u7684\u6570\u636E</td><td><a href="#%E8%8E%B7%E5%8F%96%E6%95%B0%E6%8D%AE%E6%96%B9%E5%BC%8F">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',5);function Y(s,o,a,k,r,F){const d=T("render-demo-0"),i=T("demo"),m=T("render-demo-1"),g=T("render-demo-2"),h=T("render-demo-3"),w=T("render-demo-4");return U(),S("div",null,[$,f(i,{sourceCode:`<template>
    <div>
      <h4 class='my-10'>basic</h4>
      <d-time-picker placeholder='\u8BF7\u9009\u62E9\u65F6\u95F4'/>
    </div>
    <div>
      <h4 class='my-10'>default open</h4>
      <d-time-picker v-model='vModelValue' :time-picker-width='300' :autoOpen='true'/>
    </div>
    <div>
      <h4 class='my-10'>disabled</h4>
      <d-time-picker disabled/>
    </div>
</template>

<script>
  import { ref,defineComponent,nextTick } from 'vue'
  export default defineComponent({
      setup(props,ctx){
        let vModelValue = ref('12:30:40')
        return{
          vModelValue
        }
      }
  })
<\/script>

<style>
.my-10{ margin:10px 0px;}
</style>
`},{highlight:E(()=>[z]),default:E(()=>[f(d)]),_:1}),R,f(i,{sourceCode:`<template>
    <div>
        <h4 class='my-10'>minTime</h4>
        <d-time-picker min-time='01:04:30'/>
    </div>
    <div>
        <h4 class='my-10'>maxTime</h4>
        <d-time-picker max-time='22:30:30' v-model='vModelValues'/>
    </div>
    <div>
        <h4 class='my-10'>maxTime && minTime</h4>
        <d-time-picker min-time='02:04:40' max-time='22:30:30' />
    </div>
</template>

<script>
  import { ref,defineComponent,watch } from 'vue'
  export default defineComponent({
      setup(props,ctx){
        let vModelValues = ref('23:30:20')

        return{
          vModelValues
        }
      }
  })
<\/script>

`},{highlight:E(()=>[W]),default:E(()=>[f(m)]),_:1}),G,f(i,{sourceCode:`<template>
    <div>
        <h4 class='my-10'>hh:mm:ss</h4>
        <d-time-picker min-time='01:04:30' />
    </div>
    <div>
        <h4 class='my-10'>mm:HH:ss</h4>
        <d-time-picker format='mm:HH:ss' v-model="vModelValueFirst"/>
    </div>
    <div>
        <h4 class='my-10'>hh:mm</h4>
        <d-time-picker format='hh:mm'/>
    </div>
    <div>
        <h4 class='my-10'>MM:ss</h4>
        <d-time-picker format='MM:ss'/>
    </div>
</template>
<script>
  import { ref,defineComponent,watch } from 'vue'
  export default defineComponent({
      setup(props,ctx){
        let vModelValueFirst = ref('23:10:20')


        watch(vModelValueFirst,(newValue,oldValue)=>{
          console.log(newValue,oldValue)
        })

        return{
          vModelValueFirst
        }
      }
  })
<\/script>
`},{highlight:E(()=>[I]),default:E(()=>[f(g)]),_:1}),J,f(i,{sourceCode:`<template>
    <div>
        <h4 class='my-10'>\u81EA\u5B9A\u4E49 customViewTemplate</h4>
        <d-time-picker ref='slotDemo'>
            <template v-slot:customViewTemplate>
                <div class='slot-box'>
                    <div class='slot-bottom' @click='chooseNowFun'>choose now</div>
                    <div class='slot-bottom' @click='chooseTime' >choose 23:00</div>
                </div>
            </template>
        </d-time-picker>
    </div>
</template>

<script>
import { ref,defineComponent,nextTick } from 'vue'

export default defineComponent({
    setup(props,ctx){
        let slotDemo = ref(null)

        const chooseTime = ()=>{
            let timeObj ={
                time:'23',
                type:'mm'
            }
            slotDemo.value.chooseTime(timeObj)
        }

        // \u63D2\u69FD\u5185\u65B9\u6CD5  --  \u9009\u62E9\u5F53\u524D\u65F6\u95F4
        const chooseNowFun = ()=>{
            let date = new Date()
            let hour = date.getHours()>9?date.getHours():'0'+date.getHours()
            let minute = date.getMinutes()>9?date.getMinutes():'0'+date.getMinutes()
            let second = date.getSeconds()>9?date.getSeconds():'0'+date.getSeconds()
            let timeObj = {
                time: hour+':'+minute+':'+second
            }
            slotDemo.value.chooseTime(timeObj)
        }
        
        return{
            chooseNowFun,
            chooseTime,
            slotDemo
        }
    }
})
<\/script>

<style>
.slot-box{
    overflow:hidden;
    height:100%;
}
.slot-bottom{
    font-size:14px;
    cursor: pointer;
}
.slot-bottom:hover{
    color: #7693f5;
    text-decoration: underline;
}
</style>
`},{highlight:E(()=>[K]),default:E(()=>[f(h)]),_:1}),L,f(i,{sourceCode:`<template>
    <div>
        <h4 class='my-10'>selectedTimeChage</h4>
          <d-time-picker @selectedTimeChage='selectedTimeChage'/>
        <br>
          \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button @click='getNewTimeFun'>{{time1}}</button>
    </div>
    <div>
        <h4 class='my-10'>v-model</h4>
          <d-time-picker v-model='time2'/>
        <br>
          \u5F53\u524D\u9009\u4E2D\u65F6\u95F4\uFF1A<button @click='getNewTimeFun'>{{time2}}</button>
    </div>
</template>

<script>
import { ref,defineComponent,nextTick } from 'vue'

export default defineComponent({
  setup(props,ctx){
      let time1 = ref('')
      let time2 = ref('')

      // \u8FD4\u56DE\u9009\u4E2D\u7684\u65F6\u95F4
      const selectedTimeChage =(timeValue)=>{
        time1.value = timeValue
      }

      return{
          selectedTimeChage,
          time1,time2
      }
  }
})
<\/script>
`},{highlight:E(()=>[Q]),default:E(()=>[f(w)]),_:1}),X])}var sn=O(P,[["render",Y]]);export{tn as __pageData,sn as default};
