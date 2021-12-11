var H=Object.defineProperty;var T=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var U=(o,s,a)=>s in o?H(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a,q=(o,s)=>{for(var a in s||(s={}))J.call(s,a)&&U(o,a,s[a]);if(T)for(var a of T(s))K.call(s,a)&&U(o,a,s[a]);return o};import{_ as M,V as A,r as V,c as O,a as F,w as h,b as j,d as t,e as n,o as Q}from"./app.1c78646e.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{renderList:o,Fragment:s,openBlock:a,createElementBlock:e,toDisplayString:u,createTextVNode:d,resolveComponent:c,withCtx:p,createBlock:k,createVNode:r,createElementVNode:g}=A;function v(l,m){const _=c("d-radio"),f=c("d-radio-group"),y=c("d-time-axis-item"),w=c("d-time-axis");return a(),e("div",null,[g("div",null,[r(f,{"css-style":"row",modelValue:l.choose,"onUpdate:modelValue":m[0]||(m[0]=i=>l.choose=i)},{default:p(()=>[(a(!0),e(s,null,o(l.list,i=>(a(),k(_,{key:i,value:i},{default:p(()=>[d(u(i),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"]),r(w,{direction:l.choose,center:""},{default:p(()=>[(a(!0),e(s,null,o(l.timeAxisList,(i,b)=>(a(),k(y,{center:"",key:b,time:i.time,"dot-color":i.dotColor},{default:p(()=>[d(u(i.text),1)]),_:2},1032,["time","dot-color"]))),128))]),_:1},8,["direction"])])])}const{defineComponent:B,ref:x}=A,C=B({setup(){const l=x(["vertical","horizontal"]),m=x("vertical");return{timeAxisList:x([{text:"Download",time:"2021-10-1"},{text:"Check",time:"2021-10-2",dotColor:"var(--devui-success)"},{text:"Build",time:"2021-10-3",dotColor:"var(--devui-danger)"},{text:"Depoy",time:"2021-10-4",dotColor:"var(--devui-warning)"},{text:"End",time:"2021-10-5",dotColor:"var(--devui-waiting)"}]),list:l,choose:m}}});return q({render:v},C)}(),"render-demo-1":function(){const{renderList:o,Fragment:s,openBlock:a,createElementBlock:e,toDisplayString:u,createElementVNode:d,resolveComponent:c,createVNode:p,createTextVNode:k,withCtx:r,createSlots:g,createBlock:v}=A;function B(m,_){const f=c("d-icon"),y=c("d-time-axis-item"),w=c("d-time-axis");return a(),e("div",null,[p(w,{direction:"horizontal",center:""},{default:r(()=>[(a(!0),e(s,null,o(m.timeAxisList,(i,b)=>(a(),v(y,{key:b,"dot-color":i.dotColor,"line-style":i.lineStyle,"line-color":i.lineColor},g({time:r(()=>[d("div",null,u(i.time),1)]),default:r(()=>[k(" "+u(i.text),1)]),_:2},[i.dot?{name:"dot",fn:r(()=>[p(f,{name:i.dot},null,8,["name"])])}:void 0]),1032,["dot-color","line-style","line-color"]))),128))]),_:1})])}const{defineComponent:x,ref:C}=A,l=x({setup(){return{timeAxisList:C([{text:"Start",time:"2021-10-1",lineStyle:"solid",dot:"cancel-forbidden"},{text:"Check",time:"2021-10-2",dotColor:"var(--devui-success)",lineStyle:"dashed",lineColor:"var(--devui-success)",dot:"classroom-approve"},{text:"Debug",time:"2021-10-3",dotColor:"var(--devui-info)",lineStyle:"dotted",lineColor:"var(--devui-info)",dot:"add-bug"},{text:"Build",time:"2021-10-4",dotColor:"var(--devui-warning)",lineStyle:"none",lineColor:"var(--devui-warning)",dot:"build-with-tool"},{text:"Display",time:"2021-10-5",dotColor:"var(--devui-danger)",dot:"go-chart"}])}}});return q({render:B},l)}(),"render-demo-2":function(){const{renderList:o,Fragment:s,openBlock:a,createElementBlock:e,createCommentVNode:u,toDisplayString:d,createElementVNode:c,createTextVNode:p,resolveComponent:k,withCtx:r,createVNode:g,normalizeStyle:v,createSlots:B,createBlock:x}=A,C={style:{position:"relative"}},l={key:0,style:{"margin-bottom":"4px",position:"relative",left:"4px",width:"2px",height:"40px","background-color":"#dfe1e6"}},m={style:{"padding-bottom":"8px","font-size":"14px","font-weight":"bold"}},_={style:{"padding-bottom":"8px"}},f={style:{"padding-bottom":"8px"}},y=p("\u7248\u672C\u72B6\u6001\uFF1A "),w={key:1,style:{"margin-top":"4px",position:"relative",left:"4px",width:"2px",height:"40px","background-color":"#dfe1e6"}},i=c("div",{style:{"text-align":"center",width:"36px",height:"36px","border-radius":"18px",border:"2px solid #dfe1e6",background:"white"}},[c("span",{style:{"line-height":"32px"}},"2020")],-1);function b(L,it){const I=k("d-tag"),P=k("d-time-axis-item"),G=k("d-time-axis");return a(),e("div",null,[g(G,{direction:"horizontal",mode:"alternative"},{default:r(()=>[(a(!0),e(s,null,o(L.timeAxisList,(D,S)=>(a(),x(P,{key:S,"dot-color":D.dotColor,"line-style":"dashed"},B({default:r(z=>[c("div",C,[z.position==="bottom"?(a(),e("div",l)):u("v-if",!0),c("div",{style:v({"border-left":"4px solid","box-shadow":"0 2px 4px 0 rgba(0, 0, 0, 0.1)",padding:"12px 8px",borderColor:D.dotColor,backgroundColor:D.backgroundColor})},[c("div",m,d(D.title),1),c("div",_,"\u53D1\u5E03\u65E5\u671F\uFF1A"+d(D.date),1),c("div",f,[y,g(I,{color:D.dotColor},{default:r(()=>[p(d(D.status),1)]),_:2},1032,["color"])])],4),z.position==="top"?(a(),e("div",w)):u("v-if",!0)])]),_:2},[S===0?{name:"extra",fn:r(()=>[i])}:void 0]),1032,["dot-color"]))),128))]),_:1})])}const{defineComponent:E,ref:N}=A,$=E({setup(){return{timeAxisList:N([{text:"hello",dotColor:"var(--devui-success)",extraElement:{},title:"\u7B2C\u56DB\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0",date:"2019/11/01",status:"\u5DF2\u53D1\u5E03"},{text:"world",dotColor:"var(--devui-danger)",title:"\u7B2C\u4E00\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C2.0",date:"2020/03/01",backgroundColor:"rgba(255, 230, 230, 0.2)",status:"\u672A\u5F00\u59CB"},{text:"nihao",dotColor:"var(--devui-warning)",title:"\u7B2C\u4E8C\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0",date:"2020/05/01",status:"\u8FDB\u884C\u4E2D"},{text:"DevUI",dotColor:"var(--devui-danger)",title:"\u7B2C\u4E09\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0",date:"2020/09/01",status:"\u672A\u5F00\u59CB"},{text:"Awesome",dotColor:"var(--devui-success)",title:"\u7B2C\u4E09\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0",date:"2020/11/01",status:"\u5DF2\u53D1\u5E03"}])}}});return q({render:b},$)}(),"render-demo-3":function(){const{createElementVNode:o,createTextVNode:s,resolveComponent:a,withCtx:e,createVNode:u,openBlock:d,createElementBlock:c}=A,p=o("h5",null,[o("p",null,"\u5F53 direction \u4E3A horizontal \u65F6 position \u9ED8\u8BA4 bottom")],-1),k=s("Download"),r=s("Check"),g=s("Build"),v=s("Depoy"),B=s("End"),x=o("h5",null,[o("p",null,"\u5F53 direction \u4E3A vertical \u65F6 position \u9ED8\u8BA4 right")],-1),C=s("Download"),l=s("Check"),m=s("Build"),_=s("Depoy"),f=s("End");function y(i,b){const E=a("d-time-axis-item"),N=a("d-time-axis");return d(),c("div",null,[p,u(N,{direction:"horizontal",center:""},{default:e(()=>[u(E,{position:"top","dot-color":"chocolate"},{default:e(()=>[k]),_:1}),u(E,{"dot-color":"var(--devui-success)"},{default:e(()=>[r]),_:1}),u(E,{position:"top","dot-color":"var(--devui-danger)"},{default:e(()=>[g]),_:1}),u(E,{"dot-color":"var(--devui-warning)"},{default:e(()=>[v]),_:1}),u(E,{position:"top","dot-color":"var(--devui-waiting)"},{default:e(()=>[B]),_:1})]),_:1}),x,u(N,{direction:"vertical"},{default:e(()=>[u(E,{position:"left","dot-color":"chocolate"},{default:e(()=>[C]),_:1}),u(E,{position:"right","dot-color":"var(--devui-success)"},{default:e(()=>[l]),_:1}),u(E,{position:"left","dot-color":"var(--devui-danger)"},{default:e(()=>[m]),_:1}),u(E,{position:"right","dot-color":"var(--devui-warning)"},{default:e(()=>[_]),_:1}),u(E,{position:"left","dot-color":"var(--devui-waiting)"},{default:e(()=>[f]),_:1})]),_:1})])}return q({render:y},{})}(),"render-demo-4":function(){const{createTextVNode:o,resolveComponent:s,withCtx:a,createVNode:e,openBlock:u,createElementBlock:d}=A,c=o("Download"),p=o("Check"),k=o("Build"),r=o("Depoy"),g=o("End");function v(x,C){const l=s("d-time-axis-item"),m=s("d-time-axis");return u(),d("div",null,[e(m,{"time-position":"bottom"},{default:a(()=>[e(l,{time:"2019","time-position":"left"},{default:a(()=>[c]),_:1}),e(l,{time:"11-2",type:"success"},{default:a(()=>[p]),_:1}),e(l,{time:"2020",type:"warning","time-position":"left"},{default:a(()=>[k]),_:1}),e(l,{time:"11-4",type:"error"},{default:a(()=>[r]),_:1}),e(l,{time:"2021",type:"primary","time-position":"left"},{default:a(()=>[g]),_:1})]),_:1})])}return q({render:v},{})}()}},kt='{"title":"TimeAxis \u65F6\u95F4\u8F74","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9\u4F4D\u7F6E","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9\u4F4D\u7F6E"},{"level":3,"title":"\u8BBE\u7F6E\u65F6\u95F4\u4F4D\u7F6E","slug":"\u8BBE\u7F6E\u65F6\u95F4\u4F4D\u7F6E"},{"level":3,"title":"d-time-axis","slug":"d-time-axis"},{"level":3,"title":"d-time-axis-item","slug":"d-time-axis-item"},{"level":3,"title":"d-time-axis-item\u63D2\u69FD","slug":"d-time-axis-item\u63D2\u69FD"}],"relativePath":"components/time-axis/index.md","lastUpdated":1636904246403}',W=j('<h1 id="timeaxis-\u65F6\u95F4\u8F74" tabindex="-1">TimeAxis \u65F6\u95F4\u8F74 <a class="header-anchor" href="#timeaxis-\u65F6\u95F4\u8F74" aria-hidden="true">#</a></h1><p>\u65F6\u95F4\u8F74\u5C55\u793A\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5411\u7528\u6237\u5C55\u793A\u65F6\u95F4\u8FDB\u5EA6\u548C\u6BCF\u4E2A\u65F6\u95F4\u70B9\u7684\u4E8B\u4EF6\u72B6\u6001\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 <code>direction</code> \u5C5E\u6027\u914D\u7F6E\u65F6\u95F4\u7EBF\u6392\u5217\u65B9\u5411\uFF0C\u9ED8\u8BA4\u503C\u4E3A<code>vertical</code>\u3002</p>',6),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio-group")]),n(),t("span",{class:"token attr-name"},"css-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("row"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("choose"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-radio")]),n(),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item in list"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        {{ item }}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis")]),n(),t("span",{class:"token attr-name"},":direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("choose"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"center"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(`
          `),t("span",{class:"token attr-name"},"center"),n(`
          `),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("(item,index) in timeAxisList"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("index"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":time"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.time"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.dotColor"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        {{item.text}}
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n("defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" list "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'vertical'"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"'horizontal'"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" choose "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'vertical'"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" timeAxisList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Download'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-1'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Check'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-2'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-success)'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Build'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-3'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-danger)'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Depoy'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-4'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-warning)'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'End'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-5'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-waiting)'"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n("timeAxisList"),t("span",{class:"token punctuation"},","),n(" list"),t("span",{class:"token punctuation"},","),n(" choose"),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Y=t("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u6837\u5F0F "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),Z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("horizontal"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"center"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(`
        `),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("(item,index) in timeAxisList"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("index"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.dotColor"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":line-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.lineStyle"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":line-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.lineColor"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#time"),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("{{item.time}}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#dot"),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.dot"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},":name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.dot"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-icon")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      {{item.text}}
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n("defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" timeAxisList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Start'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-1'"),t("span",{class:"token punctuation"},","),n(`
        lineStyle`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"solid"'),t("span",{class:"token punctuation"},","),n(`
        dot`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'cancel-forbidden'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Check'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-2'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-success)'"),t("span",{class:"token punctuation"},","),n(`
        lineStyle`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"dashed"'),t("span",{class:"token punctuation"},","),n(`
        lineColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-success)'"),t("span",{class:"token punctuation"},","),n(`
        dot`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'classroom-approve'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Debug'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-3'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-info)'"),t("span",{class:"token punctuation"},","),n(`
        lineStyle`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"dotted"'),t("span",{class:"token punctuation"},","),n(`
        lineColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-info)'"),t("span",{class:"token punctuation"},","),n(`
        dot`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'add-bug'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Build'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-4'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-warning)'"),t("span",{class:"token punctuation"},","),n(`
        lineStyle`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"none"'),t("span",{class:"token punctuation"},","),n(`
        lineColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-warning)'"),t("span",{class:"token punctuation"},","),n(`
        dot`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'build-with-tool'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Display'"),t("span",{class:"token punctuation"},","),n(`
        time`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2021-10-5'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-danger)'"),t("span",{class:"token punctuation"},","),n(`
        dot`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'go-chart'"),n(`
      `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n("timeAxisList"),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),tt=t("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),nt=t("p",null,[n("\u53EF\u4EE5\u4F7F\u7528 mode \u4E3A "),t("code",null,"alternative"),n(" \u8BBE\u7F6E\u5185\u5BB9\u4EA4\u66FF\u5C55\u793A")],-1),at=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("horizontal"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mode"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("alternative"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(`
        `),t("span",{class:"token attr-name"},"v-for"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("(item,index) in timeAxisList"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("index"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.dotColor"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"line-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("dashed"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`

      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#default"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" relative")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(`
              `),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data.position === "),t("span",{class:"token punctuation"},"'"),n("bottom"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" relative"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"left"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 2px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 40px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" #dfe1e6")]),t("span",{class:"token punctuation"},'"')])]),n(`
          `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(`
              `),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{"),t("span",{class:"token punctuation"},"'"),n("border-left"),t("span",{class:"token punctuation"},"'"),n(": "),t("span",{class:"token punctuation"},"'"),n("4px solid"),t("span",{class:"token punctuation"},"'"),n(", "),t("span",{class:"token punctuation"},"'"),n("box-shadow"),t("span",{class:"token punctuation"},"'"),n(": "),t("span",{class:"token punctuation"},"'"),n("0 2px 4px 0 rgba(0, 0, 0, 0.1)"),t("span",{class:"token punctuation"},"'"),n(", padding: "),t("span",{class:"token punctuation"},"'"),n("12px 8px"),t("span",{class:"token punctuation"},"'"),n(",borderColor:item.dotColor,backgroundColor:item.backgroundColor}"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"padding-bottom"),t("span",{class:"token punctuation"},":"),n(" 8px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"font-size"),t("span",{class:"token punctuation"},":"),n(" 14px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"font-weight"),t("span",{class:"token punctuation"},":"),n(" bold")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("{{ item.title }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"padding-bottom"),t("span",{class:"token punctuation"},":"),n(" 8px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("\u53D1\u5E03\u65E5\u671F\uFF1A{{ item.date }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"padding-bottom"),t("span",{class:"token punctuation"},":"),n(" 8px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`\u7248\u672C\u72B6\u6001\uFF1A
              `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tag")]),n(),t("span",{class:"token attr-name"},":color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("item.dotColor"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("{{item.status}}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tag")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(`
              `),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data.position === "),t("span",{class:"token punctuation"},"'"),n("top"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-top"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" relative"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"left"),t("span",{class:"token punctuation"},":"),n(" 4px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 2px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 40px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" #dfe1e6")]),t("span",{class:"token punctuation"},'"')])]),n(`
          `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("index===0"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(`
            `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"text-align"),t("span",{class:"token punctuation"},":"),n(" center"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 36px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 36px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"border-radius"),t("span",{class:"token punctuation"},":"),n(" 18px"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),n(" 2px solid #dfe1e6"),t("span",{class:"token punctuation"},";"),n(),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),n(" white")]),t("span",{class:"token punctuation"},'"')])]),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"line-height"),t("span",{class:"token punctuation"},":"),n(" 32px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n("2020"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n("defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" timeAxisList "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'hello'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-success)'"),t("span",{class:"token punctuation"},","),n(`
        extraElement`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
        title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7B2C\u56DB\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0'"),t("span",{class:"token punctuation"},","),n(" date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2019/11/01'"),t("span",{class:"token punctuation"},","),n(` 
        status`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5DF2\u53D1\u5E03'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'world'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-danger)'"),t("span",{class:"token punctuation"},","),n(`
        title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7B2C\u4E00\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C2.0'"),t("span",{class:"token punctuation"},","),n(" date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2020/03/01'"),t("span",{class:"token punctuation"},","),n(`
        backgroundColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'rgba(255, 230, 230, 0.2)'"),t("span",{class:"token punctuation"},","),n(` 
        status`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u672A\u5F00\u59CB'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'nihao'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-warning)'"),t("span",{class:"token punctuation"},","),n(`
        title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7B2C\u4E8C\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0'"),t("span",{class:"token punctuation"},","),n(" date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2020/05/01'"),t("span",{class:"token punctuation"},","),n(` 
        status`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u8FDB\u884C\u4E2D'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'DevUI'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-danger)'"),t("span",{class:"token punctuation"},","),n(`
        title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7B2C\u4E09\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0'"),t("span",{class:"token punctuation"},","),n(" date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2020/09/01'"),t("span",{class:"token punctuation"},","),n(` 
        status`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u672A\u5F00\u59CB'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"{"),n(`
        text`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'Awesome'"),t("span",{class:"token punctuation"},","),n(`
        dotColor`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'var(--devui-success)'"),t("span",{class:"token punctuation"},","),n(`
        title`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u7B2C\u4E09\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0'"),t("span",{class:"token punctuation"},","),n(" date"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'2020/11/01'"),t("span",{class:"token punctuation"},","),n(` 
        status`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'\u5DF2\u53D1\u5E03'"),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n("timeAxisList"),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),st=t("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u4F4D\u7F6E",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u5185\u5BB9\u4F4D\u7F6E "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),et=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h5")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("\u5F53 direction \u4E3A horizontal \u65F6 position \u9ED8\u8BA4 bottom"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h5")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("horizontal"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"center"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("chocolate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Download"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-success)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Check"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-danger)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Build"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-warning)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Depoy"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("top"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-waiting)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("End"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("h5")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("p")]),t("span",{class:"token punctuation"},">")]),n("\u5F53 direction \u4E3A vertical \u65F6 position \u9ED8\u8BA4 right"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("p")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("h5")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("chocolate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Download"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-success)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Check"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-danger)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Build"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("right"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-warning)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Depoy"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"dot-color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("var(--devui-waiting)"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("End"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ot=t("h3",{id:"\u8BBE\u7F6E\u65F6\u95F4\u4F4D\u7F6E",tabindex:"-1"},[n("\u8BBE\u7F6E\u65F6\u95F4\u4F4D\u7F6E "),t("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u65F6\u95F4\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),ut=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis")]),n(),t("span",{class:"token attr-name"},"time-position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bottom"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"time"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2019"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"time-position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Download"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"time"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("11-2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Check"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"time"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2020"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"time-position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Build"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"time"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("11-4"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("error"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Depoy"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-time-axis-item")]),n(),t("span",{class:"token attr-name"},"time"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2021"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"time-position"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("left"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("End"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis-item")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-time-axis")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ct=j('<h3 id="d-time-axis" tabindex="-1">d-time-axis <a class="header-anchor" href="#d-time-axis" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>direction</td><td><code>&#39;vertical&#39;|&#39;horizontal&#39;</code></td><td><code>vertical</code></td><td>\u8BBE\u7F6E\u65F6\u95F4\u8F74\u65B9\u5411</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>center</td><td><code>boolean</code></td><td><code>false</code></td><td>\u5F53\u65B9\u5411\u4E3A<code>horizontal</code>\u65F6\uFF0C\u662F\u5426\u5C06\u5185\u5BB9\u8BBE\u7F6E\u5C45\u4E2D</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>mode</td><td><code>&#39;normal&#39;|&#39;alternative&#39;</code></td><td><code>normal</code></td><td>\u53EF\u9009\uFF0C<code>normal</code>\u6A21\u5F0F\u4E0B\u5185\u5BB9\u6309\u9ED8\u8BA4\u65B9\u5411\u6392\u5E03\uFF0C <code>alternative</code>\u6A21\u5F0F\u4E0B\u5185\u5BB9\u4EA4\u66FF\u6392\u5E03</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr><tr><td>time-position</td><td><code>&#39;left&#39;|&#39;bottom&#39;</code></td><td><code>left</code></td><td>\u53EF\u9009\uFF0C\u4EC5\u5F53<code>direction</code> \u4E3A <code>vertical</code> \u65F6\u5B9A\u4E49\u65F6\u95F4\u53C2\u6570\u4F4D\u7F6E(\u5168\u5C40\u8BBE\u7F6E\uFF0C\u5F53\u4E0E<code>mode</code>\u5C5E\u6027\u51B2\u7A81\u65F6\u4EE5<code>mode</code>\u4E3A\u51C6)</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr></tbody></table><h3 id="d-time-axis-item" tabindex="-1">d-time-axis-item <a class="header-anchor" href="#d-time-axis-item" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>time</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u65F6\u95F4</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>text</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u6587\u672C\u5185\u5BB9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dot-color</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u65F6\u95F4\u5708\u989C\u8272</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>line-style</td><td><code>&#39;solid&#39;|&#39;dashed&#39;|&#39;dotted&#39;|&#39;none&#39;</code></td><td><code>solid</code></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u7EBF\u6761\u6837\u5F0F\uFF08\u82E5\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u9ED8\u8BA4\u65F6\u95F4\u8F74\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u4E3A<code>none</code>\uFF09</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td>line-color</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u7EBF\u6761\u989C\u8272</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td>position</td><td><code>&#39;top&#39;|&#39;bottom&#39;|&#39;left&#39;|&#39;right&#39;</code></td><td>\u5F53<code>direction</code>\u4E3A<code>vertical</code>\u65F6\u9ED8\u8BA4\uFF1A<code>right</code>\uFF0C\u5F53<code>direction</code>\u4E3A<code>horizontal</code>\u65F6\uFF0C\u9ED8\u8BA4\uFF1A<code>bottom</code></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5185\u5BB9\u5B58\u5728\u7684\u4F4D\u7F6E\uFF0C\u82E5\u6709time\u5219time\u5904\u5728\u76F8\u53CD\u7684\u4F4D\u7F6E</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%E4%BD%8D%E7%BD%AE">\u81EA\u5B9A\u4E49\u5185\u5BB9\u4F4D\u7F6E</a></td></tr><tr><td>time-position</td><td><code>&#39;left&#39;|&#39;bottom&#39;</code></td><td><code>left</code></td><td>\u53EF\u9009\uFF0C\u4EC5\u5F53<code>direction</code> \u4E3A <code>vertical</code> \u65F6\u5B9A\u4E49\u65F6\u95F4\u53C2\u6570\u4F4D\u7F6E(\u5168\u5C40\u8BBE\u7F6E\uFF0C\u5F53\u4E0E<code>position</code>\u5C5E\u6027\u51B2\u7A81\u65F6\u4EE5<code>position</code>\u4E3A\u51C6)</td><td><a href="#%E8%AE%BE%E7%BD%AE%E6%97%B6%E9%97%B4%E4%BD%8D%E7%BD%AE">\u8BBE\u7F6E\u65F6\u95F4\u4F4D\u7F6E</a></td></tr><tr><td>type</td><td><code>&#39;primary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;error&#39;</code></td><td><code>primary</code></td><td>\u53EF\u9009\uFF0C\u65F6\u95F4\u70B9\u7C7B\u578B</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr></tbody></table><h3 id="d-time-axis-item\u63D2\u69FD" tabindex="-1">d-time-axis-item\u63D2\u69FD <a class="header-anchor" href="#d-time-axis-item\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr><tr><td>dot</td><td>\u81EA\u5B9A\u4E49\u65F6\u95F4\u8F74\u70B9</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td>time</td><td>\u81EA\u5B9A\u4E49\u65F6\u95F4</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td>extra</td><td>\u81EA\u5B9A\u4E49\u4E24\u4E2A\u65F6\u95F4\u70B9\u95F4\u9644\u52A0\u5143\u7D20</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr></tbody></table>',6);function pt(o,s,a,e,u,d){const c=V("render-demo-0"),p=V("demo"),k=V("render-demo-1"),r=V("render-demo-2"),g=V("render-demo-3"),v=V("render-demo-4");return Q(),O("div",null,[W,F(p,{sourceCode:`<template>
  <div>
    <d-radio-group css-style="row" v-model="choose">
      <d-radio v-for="item in list" :key="item" :value="item">
        {{ item }}
      </d-radio>
    </d-radio-group>
    <d-time-axis :direction="choose" center>
      <d-time-axis-item
          center
          v-for="(item,index) in timeAxisList"
          :key="index"
          :time="item.time"
          :dot-color="item.dotColor"
      >
        {{item.text}}
      </d-time-axis-item>
    </d-time-axis>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const list = ref(['vertical', 'horizontal'])
    const choose = ref('vertical')
    const timeAxisList = ref([
      {
        text: 'Download',
        time: '2021-10-1'
      },
      {
        text: 'Check',
        time: '2021-10-2',
        dotColor: 'var(--devui-success)'
      },
      {
        text: 'Build',
        time: '2021-10-3',
        dotColor: 'var(--devui-danger)'
      },
      {
        text: 'Depoy',
        time: '2021-10-4',
        dotColor: 'var(--devui-warning)'
      },
      {
        text: 'End',
        time: '2021-10-5',
        dotColor: 'var(--devui-waiting)'
      }
    ])
    return {timeAxisList, list, choose}
  }
})
<\/script>
`},{highlight:h(()=>[X]),default:h(()=>[F(c)]),_:1}),Y,F(p,{sourceCode:`<template>
  <d-time-axis direction="horizontal" center>
    <d-time-axis-item
        v-for="(item,index) in timeAxisList"
        :key="index"
        :dot-color="item.dotColor"
        :line-style="item.lineStyle"
        :line-color="item.lineColor"
    >
      <template #time>
        <div>{{item.time}}</div>
      </template>
      <template #dot v-if="item.dot">
        <d-icon :name="item.dot"></d-icon>
      </template>
      {{item.text}}
    </d-time-axis-item>
  </d-time-axis>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const timeAxisList = ref([
      {
        text: 'Start',
        time: '2021-10-1',
        lineStyle: "solid",
        dot: 'cancel-forbidden'
      },
      {
        text: 'Check',
        time: '2021-10-2',
        dotColor: 'var(--devui-success)',
        lineStyle: "dashed",
        lineColor: 'var(--devui-success)',
        dot: 'classroom-approve'
      },
      {
        text: 'Debug',
        time: '2021-10-3',
        dotColor: 'var(--devui-info)',
        lineStyle: "dotted",
        lineColor: 'var(--devui-info)',
        dot: 'add-bug'
      },
      {
        text: 'Build',
        time: '2021-10-4',
        dotColor: 'var(--devui-warning)',
        lineStyle: "none",
        lineColor: 'var(--devui-warning)',
        dot: 'build-with-tool'
      },
      {
        text: 'Display',
        time: '2021-10-5',
        dotColor: 'var(--devui-danger)',
        dot: 'go-chart'
      }
    ])
    return {timeAxisList}
  }
})
<\/script>
`},{highlight:h(()=>[Z]),default:h(()=>[F(k)]),_:1}),tt,nt,F(p,{sourceCode:`<template>
  <d-time-axis direction="horizontal" mode="alternative">
    <d-time-axis-item
        v-for="(item,index) in timeAxisList"
        :key="index"
        :dot-color="item.dotColor"
        line-style="dashed"
    >

      <template #default="data">
        <div style="position: relative">
          <div
              v-if="data.position === 'bottom'"
              style="margin-bottom: 4px; position: relative; left: 4px; width: 2px; height: 40px; background-color: #dfe1e6"
          ></div>
          <div
              :style="{'border-left': '4px solid', 'box-shadow': '0 2px 4px 0 rgba(0, 0, 0, 0.1)', padding: '12px 8px',borderColor:item.dotColor,backgroundColor:item.backgroundColor}"
          >
            <div style="padding-bottom: 8px; font-size: 14px; font-weight: bold">{{ item.title }}</div>
            <div style="padding-bottom: 8px">\u53D1\u5E03\u65E5\u671F\uFF1A{{ item.date }}</div>
            <div style="padding-bottom: 8px">\u7248\u672C\u72B6\u6001\uFF1A
              <d-tag :color="item.dotColor">{{item.status}}</d-tag>
            </div>
          </div>
          <div
              v-if="data.position === 'top'"
              style="margin-top: 4px; position: relative; left: 4px; width: 2px; height: 40px; background-color: #dfe1e6"
          ></div>
        </div>
      </template>
      <template #extra v-if="index===0">
        <div
            style="text-align: center; width: 36px; height: 36px; border-radius: 18px; border: 2px solid #dfe1e6; background: white"
        >
          <span style="line-height: 32px">2020</span>
        </div>
      </template>
    </d-time-axis-item>
  </d-time-axis>
</template>

<script>
import {defineComponent, ref} from 'vue'

export default defineComponent({
  setup() {
    const timeAxisList = ref([
      {
        text: 'hello',
        dotColor: 'var(--devui-success)',
        extraElement: {},
        title: '\u7B2C\u56DB\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0', date: '2019/11/01', 
        status: '\u5DF2\u53D1\u5E03'
      },
      {
        text: 'world',
        dotColor: 'var(--devui-danger)',
        title: '\u7B2C\u4E00\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C2.0', date: '2020/03/01',
        backgroundColor: 'rgba(255, 230, 230, 0.2)', 
        status: '\u672A\u5F00\u59CB'
      },
      {
        text: 'nihao',
        dotColor: 'var(--devui-warning)',
        title: '\u7B2C\u4E8C\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0', date: '2020/05/01', 
        status: '\u8FDB\u884C\u4E2D'
      },
      {
        text: 'DevUI',
        dotColor: 'var(--devui-danger)',
        title: '\u7B2C\u4E09\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0', date: '2020/09/01', 
        status: '\u672A\u5F00\u59CB'
      },
      {
        text: 'Awesome',
        dotColor: 'var(--devui-success)',
        title: '\u7B2C\u4E09\u5B63\u5EA6\u4EA4\u4ED8\u7248\u672C1.0', date: '2020/11/01', 
        status: '\u5DF2\u53D1\u5E03'
      },
    ])
    return {timeAxisList}
  }
})
<\/script>
`},{highlight:h(()=>[at]),default:h(()=>[F(r)]),_:1}),st,F(p,{sourceCode:`<template>
  <h5><p>\u5F53 direction \u4E3A horizontal \u65F6 position \u9ED8\u8BA4 bottom</p></h5>
  <d-time-axis direction="horizontal" center>
    <d-time-axis-item position="top" dot-color="chocolate">Download</d-time-axis-item>
    <d-time-axis-item dot-color="var(--devui-success)">Check</d-time-axis-item>
    <d-time-axis-item position="top" dot-color="var(--devui-danger)">Build</d-time-axis-item>
    <d-time-axis-item dot-color="var(--devui-warning)">Depoy</d-time-axis-item>
    <d-time-axis-item position="top" dot-color="var(--devui-waiting)">End</d-time-axis-item>
  </d-time-axis>
  <h5><p>\u5F53 direction \u4E3A vertical \u65F6 position \u9ED8\u8BA4 right</p></h5>
  <d-time-axis direction="vertical">
    <d-time-axis-item position="left" dot-color="chocolate">Download</d-time-axis-item>
    <d-time-axis-item position="right" dot-color="var(--devui-success)">Check</d-time-axis-item>
    <d-time-axis-item position="left" dot-color="var(--devui-danger)">Build</d-time-axis-item>
    <d-time-axis-item position="right" dot-color="var(--devui-warning)">Depoy</d-time-axis-item>
    <d-time-axis-item position="left" dot-color="var(--devui-waiting)">End</d-time-axis-item>
  </d-time-axis>
</template>
`},{highlight:h(()=>[et]),default:h(()=>[F(g)]),_:1}),ot,F(p,{sourceCode:`<template>
  <d-time-axis time-position="bottom">
    <d-time-axis-item time="2019" time-position="left">Download</d-time-axis-item>
    <d-time-axis-item time="11-2" type="success">Check</d-time-axis-item>
    <d-time-axis-item time="2020" type="warning" time-position="left">Build</d-time-axis-item>
    <d-time-axis-item time="11-4" type="error">Depoy</d-time-axis-item>
    <d-time-axis-item time="2021" type="primary" time-position="left">End</d-time-axis-item>
  </d-time-axis>
</template>
`},{highlight:h(()=>[ut]),default:h(()=>[F(v)]),_:1}),ct])}var dt=M(R,[["render",pt]]);export{kt as __pageData,dt as default};
