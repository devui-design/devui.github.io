var v=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var B=(o,s,e)=>s in o?v(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,h=(o,s)=>{for(var e in s||(s={}))A.call(s,e)&&B(o,e,s[e]);if(y)for(var e of y(s))x.call(s,e)&&B(o,e,s[e]);return o};import{_ as L,V as k,r as C,c as _,a as E,w as m,b as f,d as t,e as n,o as D}from"./app.1c78646e.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:s,openBlock:e,createElementBlock:i}=k;function r(a,u){const g=o("d-tag-input");return e(),i("div",null,[s(g,{tags:a.state.tags,"onUpdate:tags":[u[0]||(u[0]=c=>a.state.tags=c),a.changeTags],suggestionList:a.state.suggestionList,"onUpdate:suggestionList":[u[1]||(u[1]=c=>a.state.suggestionList=c),a.changeSuggestionList],displayProperty:"name",placeholder:"Add a tag","no-data":"\u6682\u65E0\u6570\u636E",minLength:1,caseSensitivity:!0,onValueChange:a.changeValue},null,8,["tags","suggestionList","onValueChange","onUpdate:tags","onUpdate:suggestionList"])])}const{defineComponent:d,reactive:p}=k,l=d({setup(){return{state:p({tags:[{name:"123"}],suggestionList:[{name:"item1"}]}),changeTags:F=>{console.log(F)},changeSuggestionList:F=>{console.log(F)},changeValue:F=>{console.log(F)}}}});return h({render:r},l)}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:s,openBlock:e,createElementBlock:i}=k;function r(a,u){const g=o("d-tag-input");return e(),i("div",null,[s(g,{tags:a.state.tags,"onUpdate:tags":u[0]||(u[0]=c=>a.state.tags=c),suggestionList:a.state.suggestionList,"onUpdate:suggestionList":u[1]||(u[1]=c=>a.state.suggestionList=c),disabled:!0},null,8,["tags","suggestionList"])])}const{defineComponent:d,reactive:p}=k,l=d({setup(){return{state:p({tags:[{name:"123"}],suggestionList:[{name:"item1"}]})}}});return h({render:r},l)}(),"render-demo-2":function(){const{resolveComponent:o,createVNode:s,openBlock:e,createElementBlock:i}=k;function r(a,u){const g=o("d-tag-input");return e(),i("div",null,[s(g,{tags:a.state.tags,"onUpdate:tags":u[0]||(u[0]=c=>a.state.tags=c),suggestionList:a.state.suggestionList,"onUpdate:suggestionList":u[1]||(u[1]=c=>a.state.suggestionList=c),minLength:3,maxTags:5},null,8,["tags","suggestionList"])])}const{defineComponent:d,reactive:p}=k,l=d({setup(){return{state:p({tags:[{name:"123"}],suggestionList:[{name:"item1"}]})}}});return h({render:r},l)}()}},$='{"title":"TagInput \u6807\u7B7E\u8F93\u5165\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"disabled","slug":"disabled"},{"level":3,"title":"\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6&\u6700\u5927\u6807\u7B7E\u6570","slug":"\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6-\u6700\u5927\u6807\u7B7E\u6570"},{"level":3,"title":"d-tag-input \u53C2\u6570","slug":"d-tag-input-\u53C2\u6570"},{"level":3,"title":"d-tags-input \u4E8B\u4EF6","slug":"d-tags-input-\u4E8B\u4EF6"}],"relativePath":"components/tag-input/index.md","lastUpdated":1636901380149}',w=f('<h1 id="taginput-\u6807\u7B7E\u8F93\u5165\u6846" tabindex="-1">TagInput \u6807\u7B7E\u8F93\u5165\u6846 <a class="header-anchor" href="#taginput-\u6807\u7B7E\u8F93\u5165\u6846" aria-hidden="true">#</a></h1><p>\u8F93\u5165\u6807\u7B7E\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u591A\u4E2A\u6807\u7B7E\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),V=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tag-input")]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("tags")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.tags"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("suggestionList")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.suggestionList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"displayProperty"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("name"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"placeholder"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Add a tag"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"no-data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("\u6682\u65E0\u6570\u636E"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":minLength"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},"'"),n("1"),t("span",{class:"token punctuation"},"'")]),n(`
    `),t("span",{class:"token attr-name"},":caseSensitivity"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"@valueChange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("changeValue"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"@update:"),n("tags")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("changeTags"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"@update:"),n("suggestionList")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("changeSuggestionList"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tag-input")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" reactive "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" state "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      tags`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"123"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      suggestionList`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"item1"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"changeTags"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("val"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"changeSuggestionList"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("val"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"changeValue"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"val"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),n("val"),t("span",{class:"token punctuation"},")"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      state`),t("span",{class:"token punctuation"},","),n(`
      changeTags`),t("span",{class:"token punctuation"},","),n(`
      changeSuggestionList`),t("span",{class:"token punctuation"},","),n(`
      changeValue
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),T=t("h3",{id:"disabled",tabindex:"-1"},[n("disabled "),t("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tag-input")]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("tags")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.tags"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("suggestionList")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.suggestionList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tag-input")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" reactive "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" state "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      tags`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"123"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      suggestionList`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"item1"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      state
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),S=t("h3",{id:"\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6-\u6700\u5927\u6807\u7B7E\u6570",tabindex:"-1"},[n("\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6&\u6700\u5927\u6807\u7B7E\u6570 "),t("a",{class:"header-anchor",href:"#\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6-\u6700\u5927\u6807\u7B7E\u6570","aria-hidden":"true"},"#")],-1),N=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-tag-input")]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("tags")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.tags"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("suggestionList")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("state.suggestionList"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":minLength"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":maxTags"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-tag-input")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" reactive "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" state "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"reactive"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
      tags`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"123"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),n(`
      suggestionList`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"{"),n(" name"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},'"item1"'),n(),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},"]"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      state
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),U=f('<h3 id="d-tag-input-\u53C2\u6570" tabindex="-1">d-tag-input \u53C2\u6570 <a class="header-anchor" href="#d-tag-input-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td style="text-align:center;">tags</td><td style="text-align:center;"><code>Array</code></td><td style="text-align:center;">[]</td><td style="text-align:center;">\u5FC5\u9009\uFF0C\u8BB0\u5F55\u8F93\u5165\u7684\u6807\u7B7E\u548C\u9009\u62E9\u7684\u6807\u7B7E\u5217\u8868</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">suggestionList</td><td style="text-align:center;"><code>Array</code></td><td style="text-align:center;">[]</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u4E0B\u62C9\u9009\u9879\uFF0C\u9ED8\u8BA4\u53EF\u9009\u62E9\u7684\u6807\u7B7E\u5217\u8868</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">displayProperty</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;name&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5217\u8868\u9879\u4F7F\u7528\u7684\u5C5E\u6027\u540D</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684 placeholder</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">noData</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u65E0\u6570\u636E\u63D0\u793A</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">maxTags</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">Number.MAX_SAFE_INTEGER</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EF\u8F93\u5165\u6807\u7B7E\u7684\u6700\u5927\u4E2A\u6570</td><td style="text-align:left;"><a href="#%E6%A0%87%E7%AD%BE%E6%9C%80%E5%B0%8F%E9%95%BF%E5%BA%A6-%E6%9C%80%E5%A4%A7%E6%A0%87%E7%AD%BE%E6%95%B0">\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6&amp;\u6700\u5927\u6807\u7B7E\u6570</a></td><td></td></tr><tr><td style="text-align:center;">minLength</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>3</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EF\u8F93\u5165\u6807\u7B7E\u7684\u6700\u5927\u4E2A\u6570</td><td style="text-align:left;"><a href="#%E6%A0%87%E7%AD%BE%E6%9C%80%E5%B0%8F%E9%95%BF%E5%BA%A6-%E6%9C%80%E5%A4%A7%E6%A0%87%E7%AD%BE%E6%95%B0">\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6&amp;\u6700\u5927\u6807\u7B7E\u6570</a></td><td></td></tr><tr><td style="text-align:center;">maxLength</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">Number.MAX_SAFE_INTEGER</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EF\u8F93\u5165\u6807\u7B7E\u7684\u6700\u5927\u4E2A\u6570</td><td style="text-align:left;"><a href="#%E6%A0%87%E7%AD%BE%E6%9C%80%E5%B0%8F%E9%95%BF%E5%BA%A6-%E6%9C%80%E5%A4%A7%E6%A0%87%E7%AD%BE%E6%95%B0">\u6807\u7B7E\u6700\u5C0F\u957F\u5EA6&amp;\u6700\u5927\u6807\u7B7E\u6570</a></td><td></td></tr><tr><td style="text-align:center;">caseSensitivity</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5927\u5C0F\u5199\u654F\u611F\uFF0C\u9ED8\u8BA4\u5FFD\u7565\u5927\u5C0F\u5199</td><td style="text-align:left;"></td><td></td></tr><tr><td style="text-align:center;">spellcheck</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0Cinput \u8F93\u5165\u6846\u662F\u5426\u5F00\u542F\u62FC\u5199\u68C0\u67E5\u7684</td><td style="text-align:left;"></td><td></td></tr><tr><td style="text-align:center;">isAddBySpace</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u7A7A\u683C\u952E\u8F93\u5165\u6807\u7B7E</td><td style="text-align:left;"></td><td></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0Cdisabled \u7070\u5316\u72B6\u6001</td><td style="text-align:left;"><a href="#disabled">disabled</a></td><td></td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td style="text-align:left;"></td><td>\u2714</td></tr></tbody></table><h3 id="d-tags-input-\u4E8B\u4EF6" tabindex="-1">d-tags-input \u4E8B\u4EF6 <a class="header-anchor" href="#d-tags-input-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">valueChange</td><td style="text-align:left;">\u5F53\u9009\u4E2D\u67D0\u4E2A\u9009\u9879\u9879\u540E\uFF0C\u5C06\u4F1A\u8C03\u7528\u6B64\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u9009\u62E9\u9879\u7684\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">update:tags</td><td style="text-align:left;">\u5F53\u9009\u9879\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\uFF0C\u8FD4\u56DE\u65B0\u7684\u6807\u7B7E\u5217\u8868</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">update:suggestionList</td><td style="text-align:left;">\u5F53\u9009\u9879\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u8FD4\u56DE\u65B0\u7684\u53EF\u9009\u62E9\u6807\u7B7E\u5217\u8868</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',4);function P(o,s,e,i,r,d){const p=C("render-demo-0"),l=C("demo"),a=C("render-demo-1"),u=C("render-demo-2");return D(),_("div",null,[w,E(l,{sourceCode:`<template>
  <d-tag-input
    v-model:tags="state.tags"
    v-model:suggestionList="state.suggestionList"
    displayProperty="name"
    placeholder="Add a tag"
    no-data="\u6682\u65E0\u6570\u636E"
    :minLength='1'
    :caseSensitivity="true"
    @valueChange="changeValue"
    @update:tags="changeTags"
    @update:suggestionList="changeSuggestionList"
  ></d-tag-input>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      tags: [{ name: "123" }],
      suggestionList: [{ name: "item1" }]
    })
    const changeTags = (val) => {
      console.log(val)
    }
    const changeSuggestionList = (val) => {
      console.log(val)
    }
    const changeValue = (val) => {
      console.log(val)
    }

    return {
      state,
      changeTags,
      changeSuggestionList,
      changeValue
    }
  }
})
<\/script>
`},{highlight:m(()=>[V]),default:m(()=>[E(p)]),_:1}),T,E(l,{sourceCode:`<template>
  <d-tag-input
    v-model:tags="state.tags"
    v-model:suggestionList="state.suggestionList"
    :disabled="true"
  ></d-tag-input>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      tags: [{ name: "123" }],
      suggestionList: [{ name: "item1" }]
    })

    return {
      state
    }
  }
})
<\/script>
`},{highlight:m(()=>[q]),default:m(()=>[E(a)]),_:1}),S,E(l,{sourceCode:`<template>
  <d-tag-input
    v-model:tags="state.tags"
    v-model:suggestionList="state.suggestionList"
    :minLength="3"
    :maxTags="5"
  ></d-tag-input>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      tags: [{ name: "123" }],
      suggestionList: [{ name: "item1" }]
    })

    return {
      state
    }
  }
})
<\/script>
`},{highlight:m(()=>[N]),default:m(()=>[E(u)]),_:1}),U])}var G=L(b,[["render",P]]);export{$ as __pageData,G as default};
