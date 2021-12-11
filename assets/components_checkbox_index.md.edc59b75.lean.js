var N=Object.defineProperty;var G=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var H=(u,o,c)=>o in u?N(u,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):u[o]=c,w=(u,o)=>{for(var c in o||(o={}))U.call(o,c)&&H(u,c,o[c]);if(G)for(var c of G(o))I.call(o,c)&&H(u,c,o[c]);return u};import{_ as R,V as F,r as A,c as $,a as E,w as y,b as _,d as n,e as a,o as j}from"./app.1c78646e.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:o,createElementVNode:c,withCtx:b,openBlock:v,createElementBlock:x}=F,f={class:"checkbox-basic-demo"},h={class:"inline-row",style:{display:"inline-flex"}},C=c("span",null,"Custom label template",-1);function d(t,s){const i=u("d-checkbox"),l=u("d-select");return v(),x("div",null,[c("div",f,[o(i,{label:"Checked",isShowTitle:!1,modelValue:t.checked,"onUpdate:modelValue":s[0]||(s[0]=e=>t.checked=e)},null,8,["modelValue"]),o(i,{label:"Not checked",isShowTitle:!1,modelValue:t.unchecked,"onUpdate:modelValue":s[1]||(s[1]=e=>t.unchecked=e)},null,8,["modelValue"]),o(i,{label:"Custom title",isShowTitle:!0,title:"my title",modelValue:t.unchecked2,"onUpdate:modelValue":s[2]||(s[2]=e=>t.unchecked2=e)},null,8,["modelValue"]),o(i,{label:"No Animation",isShowTitle:!1,modelValue:t.checked2,"onUpdate:modelValue":s[3]||(s[3]=e=>t.checked2=e),showAnimation:!1},null,8,["modelValue"]),o(i,{label:"Disabled",isShowTitle:!1,modelValue:t.checked,"onUpdate:modelValue":s[4]||(s[4]=e=>t.checked=e),disabled:!0},null,8,["modelValue"]),o(i,{label:"Disabled",isShowTitle:!1,modelValue:t.unchecked,"onUpdate:modelValue":s[5]||(s[5]=e=>t.unchecked=e),disabled:!0},null,8,["modelValue"]),o(i,{label:"Half-checked",isShowTitle:!1,halfchecked:t.halfCheck,modelValue:t.allCheck,"onUpdate:modelValue":s[6]||(s[6]=e=>t.allCheck=e),onChange:t.onHalfCheckboxChange},null,8,["halfchecked","modelValue","onChange"]),o(i,{label:"Half-checked",isShowTitle:!1,halfchecked:t.halfCheck,modelValue:t.allCheck,"onUpdate:modelValue":s[7]||(s[7]=e=>t.allCheck=e),onChange:t.onHalfCheckboxChange,disabled:!0},null,8,["halfchecked","modelValue","onChange"]),o(i,{label:"Custom color",isShowTitle:!1,modelValue:t.customCheck,"onUpdate:modelValue":s[8]||(s[8]=e=>t.customCheck=e),color:"RGB(255, 193, 7)"},null,8,["modelValue"]),o(i,{label:"Half-checked",isShowTitle:!1,halfchecked:t.halfCheck2,modelValue:t.allCheck2,"onUpdate:modelValue":s[9]||(s[9]=e=>t.allCheck2=e),onChange:t.onHalfCheckboxChange2,color:"RGB(255, 193, 7)"},null,8,["halfchecked","modelValue","onChange"]),o(i,{isShowTitle:!1,modelValue:t.unchecked3,"onUpdate:modelValue":s[11]||(s[11]=e=>t.unchecked3=e)},{default:b(()=>[c("div",h,[o(l,{modelValue:t.value1,"onUpdate:modelValue":s[10]||(s[10]=e=>t.value1=e),options:[1,2,3,4],size:"sm",onClick:t.handleChange},null,8,["modelValue","onClick"]),C])]),_:1},8,["modelValue"])])])}const{defineComponent:k,ref:p}=F,m=k({setup(){const t=p(!0),s=p(!0),i=p(!1),l=p(!1),e=p(!1),g=p(!0),r=p(!0),q=p(!1),D=p(!1),V=p(!0),S=p(null);return{checked:t,checked2:s,unchecked:i,unchecked2:l,unchecked3:e,halfCheck:g,halfCheck2:r,allCheck:q,allCheck2:D,onHalfCheckboxChange:B=>{g.value=!q.value,console.log("halfCheckbox checked:",B)},customCheck:V,onHalfCheckboxChange2:B=>{r.value=!D.value,console.log("halfCheckbox checked:",B)},handleChange:B=>{B.preventDefault(),B.stopPropagation()},value1:S}}});return w({render:d},m)}(),"render-demo-1":function(){const{createElementVNode:u,resolveComponent:o,createVNode:c,openBlock:b,createElementBlock:v}=F,x={class:"checkbox-group-demo"},f=u("h4",{class:"title"},"Input Object Array",-1),h=u("h4",{class:"title"},"Input String Array",-1),C=u("h4",{class:"title"},"Disabled Group",-1),d=u("h4",{class:"title"},"Custom Selected Color",-1),k=u("h4",{class:"title"},"Set showAnimation false",-1),p=u("h4",{class:"title"},"Multi-line Checkbox",-1);function m(l,e){const g=o("d-checkbox-group");return b(),v("div",null,[u("div",x,[f,c(g,{modelValue:l.values1,"onUpdate:modelValue":e[0]||(e[0]=r=>l.values1=r),options:l.options1,direction:"row"},null,8,["modelValue","options"]),h,c(g,{modelValue:l.values2,"onUpdate:modelValue":e[1]||(e[1]=r=>l.values2=r),options:l.options2,isShowTitle:!1,direction:"row"},null,8,["modelValue","options"]),C,c(g,{modelValue:l.values2,"onUpdate:modelValue":e[2]||(e[2]=r=>l.values2=r),options:l.options2,isShowTitle:!1,direction:"row",disabled:!0},null,8,["modelValue","options"]),d,c(g,{modelValue:l.values3,"onUpdate:modelValue":e[3]||(e[3]=r=>l.values3=r),options:l.options3,isShowTitle:!1,direction:"row",color:"RGB(255, 193, 7)"},null,8,["modelValue","options"]),k,c(g,{modelValue:l.values4,"onUpdate:modelValue":e[4]||(e[4]=r=>l.values4=r),options:l.options3,isShowTitle:!1,direction:"row",showAnimation:!1},null,8,["modelValue","options"]),p,c(g,{modelValue:l.values5,"onUpdate:modelValue":e[5]||(e[5]=r=>l.values5=r),options:l.options5,isShowTitle:!1,direction:"row",itemWidth:94},null,8,["modelValue","options"])])])}const{defineComponent:t,ref:s}=F,i=t({setup(){const l=s([{name:"data1",disabled:!0,value:"1",id:1},{name:"data2",value:"2",id:2},{name:"data3",value:"3",id:3}]),e=s([{name:"data2",value:"2",id:2}]),g=s(["data1","data2","data3","data4","data5","data6","data7"]),r=s(["data1","data2"]),q=s(["data1","data2","data3","data4","data5","data6","data7"]),D=s(["data1","data2"]),V=s(["data2","data3"]),S=s(["data00000000000000001","data2","data3","data4","data5","data6","data7","data8","data9","data10","data11","data12","data13","data14","data15"]),T=s(["data2","data3"]);return{options1:l,values1:e,options2:g,values2:r,options3:q,values3:D,values4:V,options5:S,values5:T}}});return w({render:m},i)}(),"render-demo-2":function(){const{resolveComponent:u,createVNode:o,createElementVNode:c,openBlock:b,createElementBlock:v}=F,x={style:{"margin-bottom":"10px"}};function f(k,p){const m=u("d-checkbox");return b(),v("div",null,[c("div",x,[o(m,{label:"Conditional Callback Allowed",isShowTitle:!1,modelValue:k.checked1,"onUpdate:modelValue":p[0]||(p[0]=t=>k.checked1=t),onChange:k.onCheckbox1Change,beforeChange:k.beforeChange},null,8,["modelValue","onChange","beforeChange"])]),c("div",null,[o(m,{label:"Conditional Judgment Callback Interception Selected",isShowTitle:!1,modelValue:k.checked2,"onUpdate:modelValue":p[1]||(p[1]=t=>k.checked2=t),onChange:k.onCheckbox1Change,beforeChange:k.beforeChange},null,8,["modelValue","onChange","beforeChange"])])])}const{defineComponent:h,ref:C}=F,d=h({setup(){const k=C(!0),p=C(!1);return{checked1:k,checked2:p,onCheckbox1Change:s=>{console.log("checkbox1 checked:",s)},beforeChange:(s,i)=>i==="Conditional Callback Allowed"}}});return w({render:f},d)}(),"render-demo-3":function(){const{resolveComponent:u,createVNode:o,createElementVNode:c,openBlock:b,createElementBlock:v}=F;function x(d,k){const p=u("d-checkbox-group");return b(),v("div",null,[c("div",null,[o(p,{modelValue:d.values,"onUpdate:modelValue":k[0]||(k[0]=m=>d.values=m),options:d.options,isShowTitle:!1,direction:"row",onChange:d.onCheckbox1Change,beforeChange:d.beforeChange},null,8,["modelValue","options","onChange","beforeChange"])])])}const{defineComponent:f,ref:h}=F,C=f({setup(){const d=h(["data1","data2","intercept","intercept2","data5","data6","data7"]),k=h(["data2","intercept"]);return{options:d,values:k,onCheckbox1Change:t=>{console.log("checkbox1 checked:",t)},beforeChange:(t,s)=>!s.includes("intercept")}}});return w({render:x},C)}()}},on='{"title":"CheckBox \u590D\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4F7F\u7528CheckBoxGroup","slug":"\u4F7F\u7528checkboxgroup"},{"level":3,"title":"checkbox\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","slug":"checkbox\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001"},{"level":3,"title":"checkbox-group\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","slug":"checkbox-group\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/checkbox/index.md","lastUpdated":1638458212323}',W=_('<h1 id="checkbox-\u590D\u9009\u6846" tabindex="-1">CheckBox \u590D\u9009\u6846 <a class="header-anchor" href="#checkbox-\u590D\u9009\u6846" aria-hidden="true">#</a></h1><p>\u591A\u9009\u6846\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u5728\u4E00\u7EC4\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\uFF1B</li><li>\u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u5728\u4E24\u4E2A\u72B6\u6001\u4E4B\u95F4\u5207\u6362\uFF0C\u53EF\u4EE5\u548C\u63D0\u4EA4\u64CD\u4F5C\u7ED3\u5408\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox-basic-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Checked"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Not checked"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("unchecked"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Custom title"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("my title"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("unchecked2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("No Animation"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Disabled"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Disabled"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("unchecked"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Half-checked"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":halfchecked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("halfCheck"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("allCheck"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onHalfCheckboxChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Half-checked"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":halfchecked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("halfCheck"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("allCheck"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onHalfCheckboxChange"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Custom color"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("customCheck"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("RGB(255, 193, 7)"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Half-checked"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":halfchecked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("halfCheck2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("allCheck2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onHalfCheckboxChange2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("RGB(255, 193, 7)"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("unchecked3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inline-row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" inline-flex")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(`
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[1, 2, 3, 4]"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sm"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleChange"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-select")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Custom label template"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checked "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checked2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" unchecked "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" unchecked2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" unchecked3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" halfCheck "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" halfCheck2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" allCheck "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" allCheck2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" customCheck "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onHalfCheckboxChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      halfCheck`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("allCheck"),n("span",{class:"token punctuation"},"."),a(`value
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'halfCheckbox checked:'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onHalfCheckboxChange2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      halfCheck2`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token operator"},"!"),a("allCheck2"),n("span",{class:"token punctuation"},"."),a(`value
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'halfCheckbox checked:'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"$event"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      $event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"preventDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
      $event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopPropagation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      checked`),n("span",{class:"token punctuation"},","),a(`
      checked2`),n("span",{class:"token punctuation"},","),a(`
      unchecked`),n("span",{class:"token punctuation"},","),a(`
      unchecked2`),n("span",{class:"token punctuation"},","),a(`
      unchecked3`),n("span",{class:"token punctuation"},","),a(`
      halfCheck`),n("span",{class:"token punctuation"},","),a(`
      halfCheck2`),n("span",{class:"token punctuation"},","),a(`
      allCheck`),n("span",{class:"token punctuation"},","),a(`
      allCheck2`),n("span",{class:"token punctuation"},","),a(`
      onHalfCheckboxChange`),n("span",{class:"token punctuation"},","),a(`
      customCheck`),n("span",{class:"token punctuation"},","),a(`
      onHalfCheckboxChange2`),n("span",{class:"token punctuation"},","),a(`
      handleChange`),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".checkbox-basic-demo .devui-checkbox"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".checkbox-basic-demo .inline-row .devui-select"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 150px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),J=n("h3",{id:"\u4F7F\u7528checkboxgroup",tabindex:"-1"},[a("\u4F7F\u7528CheckBoxGroup "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528checkboxgroup","aria-hidden":"true"},"#")],-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkbox-group-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Input Object Array"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Input String Array"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Disabled Group"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Custom Selected Color"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("RGB(255, 193, 7)"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Set showAnimation false"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values4"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options3"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Multi-line Checkbox"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values5"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options5"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":itemWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("94"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),a(" disabled"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(" id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(" id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(" id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" values1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(" id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data4'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" values2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data4'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" values3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" values4 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options5 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'data00000000000000001'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data4'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data8'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data9'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data10'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data11'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data15'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" values5 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options1`),n("span",{class:"token punctuation"},","),a(`
      values1`),n("span",{class:"token punctuation"},","),a(`
      options2`),n("span",{class:"token punctuation"},","),a(`
      values2`),n("span",{class:"token punctuation"},","),a(`
      options3`),n("span",{class:"token punctuation"},","),a(`
      values3`),n("span",{class:"token punctuation"},","),a(`
      values4`),n("span",{class:"token punctuation"},","),a(`
      options5`),n("span",{class:"token punctuation"},","),a(`
      values5`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".checkbox-group-demo .title"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 20px 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),O=n("h3",{id:"checkbox\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001",tabindex:"-1"},[a("checkbox\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#checkbox\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","aria-hidden":"true"},"#")],-1),K=n("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0Clabel \u4E3A'\u6761\u4EF6\u5224\u65AD\u56DE\u8C03\u7981\u6B62\u9009\u4E2D'\u7684 checkbox \u7EC8\u6B62\u5207\u6362\u72B6\u6001\u3002",-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 10px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Conditional Callback Allowed"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked1"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCheckbox1Change"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Conditional Judgment Callback Interception Selected"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checked2"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCheckbox1Change"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checked1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checked2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onCheckbox1Change"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkbox1 checked:'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("isChecked"),n("span",{class:"token punctuation"},","),a(" label")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" label "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'Conditional Callback Allowed'"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      checked1`),n("span",{class:"token punctuation"},","),a(`
      checked2`),n("span",{class:"token punctuation"},","),a(`
      onCheckbox1Change`),n("span",{class:"token punctuation"},","),a(`
      beforeChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Q=n("h3",{id:"checkbox-group\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001",tabindex:"-1"},[a("checkbox-group\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#checkbox-group\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u9009\u9879\u5305\u542B'\u62E6\u622A'\u5B57\u6BB5\u7684 checkbox \u65E0\u6CD5\u5207\u6362\u72B6\u6001\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("values"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCheckbox1Change"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'intercept'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'intercept2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" values "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'intercept'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onCheckbox1Change"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkbox1 checked:'"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("isChecked"),n("span",{class:"token punctuation"},","),a(" label")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token operator"},"!"),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'intercept'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      values`),n("span",{class:"token punctuation"},","),a(`
      onCheckbox1Change`),n("span",{class:"token punctuation"},","),a(`
      beforeChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Z=_('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-checkbox \u53C2\u6570</p><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u57DF\u540D\uFF0Cinput \u539F\u751F name \u5C5E\u6027</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">label</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u6807\u7B7E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">halfchecked</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u534A\u9009\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">isShowTitle</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A title \u63D0\u793A\uFF0C\u9ED8\u8BA4\u663E\u793A\u53C2\u6570<code>label</code>\u7684\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u81EA\u5B9A\u4E49 title \u63D0\u793A\u5185\u5BB9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u590D\u9009\u6846\u989C\u8272</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">beforeChange</td><td style="text-align:center;"><code>Function|Promise&lt;boolean&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Ccheckbox \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE boolean \u7C7B\u578B\uFF0C\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 checkbox \u5207\u6362</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-checkbox \u4E8B\u4EF6</p><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">onChange</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">\u590D\u9009\u6846\u7684\u503C\u6539\u53D8\u65F6\u53D1\u51FA\u7684\u4E8B\u4EF6\uFF0C\u503C\u662F\u5F53\u524D\u72B6\u6001</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-checkbox-group \u53C2\u6570</p><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u57DF\u540D\uFF0Cinput \u539F\u751F name \u5C5E\u6027</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">direction</td><td style="text-align:center;">&#39;row&#39;|&#39;column&#39;</td><td style="text-align:center;">&#39;column&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u65B9\u5411</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">itemWidth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u793A\u6BCF\u4E00\u9879 checkbox \u7684\u5BBD\u5EA6\uFF08<code>px</code>\uFF09</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">options</td><td style="text-align:center;"><code>array</code></td><td style="text-align:center;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u590D\u9009\u6846\u9009\u9879\u6570\u7EC4</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">halfchecked</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u534A\u9009\u72B6\u6001</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">isShowTitle</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A title \u63D0\u793A\uFF0C\u9ED8\u8BA4\u663E\u793A\u53C2\u6570<code>label</code>\u7684\u503C</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u590D\u9009\u6846\u989C\u8272</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">beforeChange</td><td style="text-align:center;"><code>Function|Promise&lt;boolean&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Ccheckbox \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE boolean \u7C7B\u578B\uFF0C\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 checkbox \u5207\u6362</td><td><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr></tbody></table><p>d-checkbox-group \u4E8B\u4EF6</p><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">onChange</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">checkbox \u503C\u6539\u53D8\u4E8B\u4EF6</td><td style="text-align:center;"><a href="#%E4%BD%BF%E7%94%A8CheckBoxGroup">\u4F7F\u7528CheckBoxGroup</a></td></tr></tbody></table>',9);function nn(u,o,c,b,v,x){const f=A("render-demo-0"),h=A("demo"),C=A("render-demo-1"),d=A("render-demo-2"),k=A("render-demo-3");return j(),$("div",null,[W,E(h,{sourceCode:`<template>
  <div class="checkbox-basic-demo">
    <d-checkbox label="Checked" :isShowTitle="false" v-model="checked" />
    <d-checkbox label="Not checked" :isShowTitle="false" v-model="unchecked" />
    <d-checkbox
      label="Custom title"
      :isShowTitle="true"
      title="my title"
      v-model="unchecked2"
    />
    <d-checkbox
      label="No Animation"
      :isShowTitle="false"
      v-model="checked2"
      :showAnimation="false"
    />
    <d-checkbox
      label="Disabled"
      :isShowTitle="false"
      v-model="checked"
      :disabled="true"
    />
    <d-checkbox
      label="Disabled"
      :isShowTitle="false"
      v-model="unchecked"
      :disabled="true"
    />
    <d-checkbox
      label="Half-checked"
      :isShowTitle="false"
      :halfchecked="halfCheck"
      v-model="allCheck"
      @change="onHalfCheckboxChange"
    />
    <d-checkbox
      label="Half-checked"
      :isShowTitle="false"
      :halfchecked="halfCheck"
      v-model="allCheck"
      @change="onHalfCheckboxChange"
      :disabled="true"
    />
    <d-checkbox
      label="Custom color"
      :isShowTitle="false"
      v-model="customCheck"
      color="RGB(255, 193, 7)"
    />
    <d-checkbox
      label="Half-checked"
      :isShowTitle="false"
      :halfchecked="halfCheck2"
      v-model="allCheck2"
      @change="onHalfCheckboxChange2"
      color="RGB(255, 193, 7)"
    />
    <d-checkbox :isShowTitle="false" v-model="unchecked3">
      <div class="inline-row" style="display: inline-flex">
        <d-select
          v-model="value1"
          :options="[1, 2, 3, 4]"
          size="sm"
          @click="handleChange"
        ></d-select>
        <span>Custom label template</span>
      </div>
    </d-checkbox>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked = ref(true)
    const checked2 = ref(true)
    const unchecked = ref(false)
    const unchecked2 = ref(false)
    const unchecked3 = ref(false)
    const halfCheck = ref(true)
    const halfCheck2 = ref(true)
    const allCheck = ref(false)
    const allCheck2 = ref(false)
    const customCheck = ref(true)
    const value1 = ref(null)

    const onHalfCheckboxChange = (value) => {
      halfCheck.value = !allCheck.value
      console.log('halfCheckbox checked:', value)
    }
    const onHalfCheckboxChange2 = (value) => {
      halfCheck2.value = !allCheck2.value
      console.log('halfCheckbox checked:', value)
    }
    const handleChange = ($event) => {
      $event.preventDefault()
      $event.stopPropagation()
    }
    return {
      checked,
      checked2,
      unchecked,
      unchecked2,
      unchecked3,
      halfCheck,
      halfCheck2,
      allCheck,
      allCheck2,
      onHalfCheckboxChange,
      customCheck,
      onHalfCheckboxChange2,
      handleChange,
      value1,
    }
  },
})
<\/script>
<style>
.checkbox-basic-demo .devui-checkbox {
  margin-bottom: 10px;
}
.checkbox-basic-demo .inline-row .devui-select {
  width: 150px;
  margin-right: 10px;
}
</style>
`},{highlight:y(()=>[z]),default:y(()=>[E(f)]),_:1}),J,E(h,{sourceCode:`<template>
  <div class="checkbox-group-demo">
    <h4 class="title">Input Object Array</h4>
    <d-checkbox-group
      v-model="values1"
      :options="options1"
      direction="row"
    ></d-checkbox-group>

    <h4 class="title">Input String Array</h4>
    <d-checkbox-group
      v-model="values2"
      :options="options2"
      :isShowTitle="false"
      direction="row"
    ></d-checkbox-group>

    <h4 class="title">Disabled Group</h4>
    <d-checkbox-group
      v-model="values2"
      :options="options2"
      :isShowTitle="false"
      direction="row"
      :disabled="true"
    ></d-checkbox-group>

    <h4 class="title">Custom Selected Color</h4>
    <d-checkbox-group
      v-model="values3"
      :options="options3"
      :isShowTitle="false"
      direction="row"
      color="RGB(255, 193, 7)"
    ></d-checkbox-group>

    <h4 class="title">Set showAnimation false</h4>
    <d-checkbox-group
      v-model="values4"
      :options="options3"
      :isShowTitle="false"
      direction="row"
      :showAnimation="false"
    ></d-checkbox-group>

    <h4 class="title">Multi-line Checkbox</h4>
    <d-checkbox-group
      v-model="values5"
      :options="options5"
      :isShowTitle="false"
      direction="row"
      :itemWidth="94"
    ></d-checkbox-group>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options1 = ref([
      { name: 'data1', disabled: true, value: '1', id: 1 },
      { name: 'data2', value: '2', id: 2 },
      { name: 'data3', value: '3', id: 3 },
    ])
    const values1 = ref([{ name: 'data2', value: '2', id: 2 }])
    const options2 = ref([
      'data1',
      'data2',
      'data3',
      'data4',
      'data5',
      'data6',
      'data7',
    ])
    const values2 = ref(['data1', 'data2'])
    const options3 = ref([
      'data1',
      'data2',
      'data3',
      'data4',
      'data5',
      'data6',
      'data7',
    ])
    const values3 = ref(['data1', 'data2'])
    const values4 = ref(['data2', 'data3'])
    const options5 = ref([
      'data00000000000000001',
      'data2',
      'data3',
      'data4',
      'data5',
      'data6',
      'data7',
      'data8',
      'data9',
      'data10',
      'data11',
      'data12',
      'data13',
      'data14',
      'data15',
    ])
    const values5 = ref(['data2', 'data3'])
    return {
      options1,
      values1,
      options2,
      values2,
      options3,
      values3,
      values4,
      options5,
      values5,
    }
  },
})
<\/script>
<style>
.checkbox-group-demo .title {
  margin: 20px 0;
}
</style>
`},{highlight:y(()=>[M]),default:y(()=>[E(C)]),_:1}),O,K,E(h,{sourceCode:`<template>
  <div style="margin-bottom: 10px">
    <d-checkbox
      label="Conditional Callback Allowed"
      :isShowTitle="false"
      v-model="checked1"
      @change="onCheckbox1Change"
      :beforeChange="beforeChange"
    />
  </div>
  <div>
    <d-checkbox
      label="Conditional Judgment Callback Interception Selected"
      :isShowTitle="false"
      v-model="checked2"
      @change="onCheckbox1Change"
      :beforeChange="beforeChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(false)

    const onCheckbox1Change = (value) => {
      console.log('checkbox1 checked:', value)
    }

    const beforeChange = (isChecked, label) => {
      return label === 'Conditional Callback Allowed'
    }
    return {
      checked1,
      checked2,
      onCheckbox1Change,
      beforeChange,
    }
  },
})
<\/script>
`},{highlight:y(()=>[L]),default:y(()=>[E(d)]),_:1}),Q,X,E(h,{sourceCode:`<template>
  <div>
    <d-checkbox-group
      v-model="values"
      :options="options"
      :isShowTitle="false"
      direction="row"
      @change="onCheckbox1Change"
      :beforeChange="beforeChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const options = ref([
      'data1',
      'data2',
      'intercept',
      'intercept2',
      'data5',
      'data6',
      'data7',
    ])
    const values = ref(['data2', 'intercept'])
    const onCheckbox1Change = (value) => {
      console.log('checkbox1 checked:', value)
    }

    const beforeChange = (isChecked, label) => {
      return !label.includes('intercept')
    }

    return {
      options,
      values,
      onCheckbox1Change,
      beforeChange,
    }
  },
})
<\/script>
`},{highlight:y(()=>[Y]),default:y(()=>[E(k)]),_:1}),Z])}var cn=R(P,[["render",nn]]);export{on as __pageData,cn as default};
