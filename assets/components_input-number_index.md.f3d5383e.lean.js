var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var B=(o,s,u)=>s in o?y(o,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):o[s]=u,E=(o,s)=>{for(var u in s||(s={}))_.call(s,u)&&B(o,u,s[u]);if(v)for(var u of v(s))b.call(s,u)&&B(o,u,s[u]);return o};import{_ as A,V as F,r as f,c as V,a as C,w as r,b as x,d as n,e as t,o as D}from"./app.1c78646e.js";const w={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:s,createElementVNode:u,openBlock:k,createElementBlock:m}=F;function g(a,e){const p=o("d-input-number");return k(),m("div",null,[u("div",null,[s(p,{modelValue:a.num,"onUpdate:modelValue":e[0]||(e[0]=l=>a.num=l),onChange:a.onChange,max:10,min:1,placeholder:"\u8BF7\u8F93\u5165"},null,8,["modelValue","onChange"])])])}const{defineComponent:i,ref:c}=F,d=i({setup(a,e){return{num:c(0),onChange:h=>{console.log(h)}}}});return E({render:g},d)}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:s,createElementVNode:u,openBlock:k,createElementBlock:m}=F;function g(a,e){const p=o("d-input-number");return k(),m("div",null,[u("div",null,[s(p,{modelValue:a.num,"onUpdate:modelValue":e[0]||(e[0]=l=>a.num=l),disabled:!0},null,8,["modelValue"])])])}const{defineComponent:i,ref:c}=F,d=i({setup(a,e){return{num:c(0)}}});return E({render:g},d)}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:s,createElementVNode:u,openBlock:k,createElementBlock:m}=F;function g(a,e){const p=o("d-input-number");return k(),m("div",null,[u("div",null,[s(p,{modelValue:a.num,"onUpdate:modelValue":e[0]||(e[0]=l=>a.num=l),step:2},null,8,["modelValue"])])])}const{defineComponent:i,ref:c}=F,d=i({setup(a,e){return{num:c(3)}}});return E({render:g},d)}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:s,createElementVNode:u,openBlock:k,createElementBlock:m}=F;function g(a,e){const p=o("d-input-number");return k(),m("div",null,[u("div",null,[s(p,{modelValue:a.num1,"onUpdate:modelValue":e[0]||(e[0]=l=>a.num1=l),size:"lg"},null,8,["modelValue"]),s(p,{modelValue:a.num2,"onUpdate:modelValue":e[1]||(e[1]=l=>a.num2=l),size:"normal"},null,8,["modelValue"]),s(p,{modelValue:a.num3,"onUpdate:modelValue":e[2]||(e[2]=l=>a.num3=l),size:"sm"},null,8,["modelValue"])])])}const{defineComponent:i,ref:c}=F,d=i({setup(a,e){const p=c(1),l=c(2),h=c(3);return{num1:p,num2:l,num3:h}}});return E({render:g},d)}()}},O='{"title":"InputNumber \u6570\u5B57\u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":3,"title":"\u6B65\u6570","slug":"\u6B65\u6570"},{"level":3,"title":"\u5C3A\u5BF8","slug":"\u5C3A\u5BF8"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Events","slug":"events"}],"relativePath":"components/input-number/index.md","lastUpdated":1636901380140}',N=x('<h1 id="inputnumber-\u6570\u5B57\u8F93\u5165\u6846" tabindex="-1">InputNumber \u6570\u5B57\u8F93\u5165\u6846 <a class="header-anchor" href="#inputnumber-\u6570\u5B57\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><p>\u6570\u5B57\u8F93\u5165\u6846\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u83B7\u53D6\u6807\u51C6\u6570\u503C\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),q=n("div",null,"\u4F7F\u7528\u5B83\uFF0C\u53EA\u9700\u8981\u5728d-input-number\u5143\u7D20\u4E2D\u4F7F\u7528v-model\u7ED1\u5B9A\u53D8\u91CF\u5373\u53EF\uFF0C\u53D8\u91CF\u7684\u521D\u59CB\u503C\u5373\u4E3A\u9ED8\u8BA4\u503C\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("10"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        num`),n("span",{class:"token punctuation"},","),t(`
        onChange
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=n("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[t("\u7981\u7528\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),U=n("div",null,"disabled\u5C5E\u6027\u63A5\u53D7\u4E00\u4E2ABoolean\uFF0C\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF\u7981\u7528\u6574\u4E2A\u7EC4\u4EF6\uFF0C\u5982\u679C\u4F60\u53EA\u9700\u8981\u63A7\u5236\u6570\u503C\u5728\u67D0\u4E00\u8303\u56F4\u5185\uFF0C\u53EF\u4EE5\u8BBE\u7F6Emin\u5C5E\u6027\u548Cmax\u5C5E\u6027\uFF0C\u4E0D\u8BBE\u7F6Emin\u548Cmax\u65F6\uFF0C\u6700\u5C0F\u503C\u4E3A 0\u3002",-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        num
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=n("h3",{id:"\u6B65\u6570",tabindex:"-1"},[t("\u6B65\u6570 "),n("a",{class:"header-anchor",href:"#\u6B65\u6570","aria-hidden":"true"},"#")],-1),P=n("div",null,"\u8BBE\u7F6Estep\u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u6B65\u957F\uFF0C\u63A5\u53D7\u4E00\u4E2ANumber\u3002",-1),S=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" num "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        num
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u5C3A\u5BF8",tabindex:"-1"},[t("\u5C3A\u5BF8 "),n("a",{class:"header-anchor",href:"#\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),G=n("div",null,"\u989D\u5916\u63D0\u4F9B\u4E86 lg\u3001normal\u3001sm \u4E09\u79CD\u5C3A\u5BF8\u7684\u6570\u5B57\u8F93\u5165\u6846\u3002",-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("lg"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("normal"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input-number")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("num3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("sm"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input-number")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

  `),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t("ctx")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" num1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" num2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" num3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        num1`),n("span",{class:"token punctuation"},","),t(`
        num2`),n("span",{class:"token punctuation"},","),t(`
        num3
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=x('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">step</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6B65\u6570</td><td style="text-align:center;"><a href="#%E6%AD%A5%E6%95%B0">\u6B65\u6570</a></td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6587\u672C\u6846 placeholder</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">max</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u6700\u5927\u503Cmax</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">min</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u6700\u5C0F\u503Cmin</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u88AB\u7981\u7528</td><td style="text-align:center;"><a href="#%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81">\u7981\u7528\u72B6\u6001</a></td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u9ED8\u8BA4\u503C</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;"><code>&#39;lg&#39;|&#39;normal&#39;|&#39;sm&#39;</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6587\u672C\u6846\u5C3A\u5BF8\uFF0C\u6709\u4E09\u79CD\u9009\u62E9<code>&#39;lg&#39;</code>,<code>&#39;narmal&#39;</code>,<code>&#39;sm&#39;</code></td><td style="text-align:center;"><a href="#%E5%B0%BA%E5%AF%B8">\u5C3A\u5BF8</a></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6\u540D\u79F0</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u7ED1\u5B9A\u503C\u88AB\u6539\u53D8\u65F6\u89E6\u53D1</td><td style="text-align:center;">(currentValue)</td></tr><tr><td style="text-align:center;">blur</td><td style="text-align:center;">\u5728\u7EC4\u4EF6 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:center;">(event: Event)</td></tr><tr><td style="text-align:center;">focus</td><td style="text-align:center;">\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:center;">(event: Event)</td></tr><tr><td style="text-align:center;">input</td><td style="text-align:center;">\u5728\u7EC4\u4EF6 Input \u83B7\u5F97\u8F93\u5165\u65F6\u89E6\u53D1</td><td style="text-align:center;">(currentValue)</td></tr></tbody></table>',4);function K(o,s,u,k,m,g){const i=f("render-demo-0"),c=f("demo"),d=f("render-demo-1"),a=f("render-demo-2"),e=f("render-demo-3");return D(),V("div",null,[N,C(c,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" @change="onChange" :max="10" :min="1" :placeholder="'\u8BF7\u8F93\u5165'"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup(props,ctx){
      const num = ref(0)
      const onChange = (val) => {
        console.log(val)
      }
      return {
        num,
        onChange
      }
    }
  })
<\/script>
`},{description:r(()=>[q]),highlight:r(()=>[z]),default:r(()=>[C(i)]),_:1}),I,C(c,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" :disabled="true"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup(props,ctx){
      const num = ref(0)
      return {
        num
      }
    }
  })
<\/script>
`},{description:r(()=>[U]),highlight:r(()=>[j]),default:r(()=>[C(d)]),_:1}),$,C(c,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num" :step="2"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup(props,ctx){
      const num = ref(3)
      return {
        num
      }
    }
  })
<\/script>
`},{description:r(()=>[P]),highlight:r(()=>[S]),default:r(()=>[C(a)]),_:1}),T,C(c,{sourceCode:`<template>
  <div>
    <d-input-number v-model="num1" :size="'lg'"></d-input-number>
    <d-input-number v-model="num2" :size="'normal'"></d-input-number>
    <d-input-number v-model="num3" :size="'sm'"></d-input-number>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'

  export default defineComponent({
    setup(props,ctx){
      const num1 = ref(1)
      const num2 = ref(2)
      const num3 = ref(3)
      return {
        num1,
        num2,
        num3
      }
    }
  })
<\/script>
`},{description:r(()=>[G]),highlight:r(()=>[H]),default:r(()=>[C(e)]),_:1}),J])}var Q=A(w,[["render",K]]);export{O as __pageData,Q as default};
