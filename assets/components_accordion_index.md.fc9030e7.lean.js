var O=Object.defineProperty;var h=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var F=(e,s,a)=>s in e?O(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,g=(e,s)=>{for(var a in s||(s={}))T.call(s,a)&&F(e,a,s[a]);if(h)for(var a of h(s))V.call(s,a)&&F(e,a,s[a]);return e};import{_ as N,V as f,r as E,c as q,a as v,w as y,b as $,o as L,d as n,e as t}from"./app.1c78646e.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,createElementVNode:a,createCommentVNode:p,createTextVNode:l,openBlock:d,createElementBlock:i}=f,k={class:"menu"},b={class:"option"},D=l(" Only one level-1 menu can be expanded."),_={class:"option"},w=l(" Embedded menu (no shadow)");function A(o,c){const C=e("d-accordion"),m=e("d-switch");return d(),i("div",null,[a("div",k,[s(C,{data:o.menu,accordionType:o.accordionTypeEmbed?"embed":"normal"},null,8,["data","accordionType"])]),a("div",b,[s(m,{checked:o.restrictOneOpen,"onUpdate:checked":c[0]||(c[0]=r=>o.restrictOneOpen=r)},null,8,["checked"]),D,p("\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355")]),a("div",_,[s(m,{checked:o.accordionTypeEmbed,"onUpdate:checked":c[1]||(c[1]=r=>o.accordionTypeEmbed=r)},null,8,["checked"]),w,p("\u5185\u5D4C\u83DC\u5355\u5F62\u5F0F\uFF08\u65E0\u9634\u5F71\uFF09")])])}const{defineComponent:B,ref:u}=f,x=B({name:"accordion",setup(){u(!1);const o=u(!1),c=u(!1);return{menu:u([{title:"Content 1",children:[{title:"Child Content 1"},{title:"Child Content 2"},{title:"Child Content "}]},{title:"Content 2\uFF08This is a long sentence for option display.\uFF09",children:[{title:"Child Content 1 (This is a long sentence for option display.)"},{title:"Child Content 2"},{title:"Child Content 3"}]},{title:"Content 3 (Default Open)",open:!0,children:[{title:"Child Content 1 (Disabled)",disabled:!0},{title:"Child Content 2 (Default Active)",active:!0},{title:"Child Content 3"}]},{title:"Content 4 (No Child)",children:[]},{title:"Content 5 (Disabled)",disabled:!0,children:[]},{title:"Content 6 (Dynamic Content)",needLoadChildren:!0,loading:!1,children:[]}]),restrictOneOpen:o,accordionTypeEmbed:c}}});return g({render:A},x)}()}},G='{"title":"Accordion \u624B\u98CE\u7434","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"}],"relativePath":"components/accordion/index.md","lastUpdated":1637423632774}',j=$('<h1 id="accordion-\u624B\u98CE\u7434" tabindex="-1">Accordion \u624B\u98CE\u7434 <a class="header-anchor" href="#accordion-\u624B\u98CE\u7434" aria-hidden="true">#</a></h1><p>\u4E3A\u9875\u9762\u63D0\u4F9B\u5BFC\u822A\u7684\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u9700\u8981\u901A\u8FC7\u5206\u7EC4\u7EC4\u7EC7\u83DC\u5355\u7684\u65F6\u5019\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u4F20\u5165\u83DC\u5355\uFF0C\u76D1\u542C\u542B\u5B50\u9879\u7684\u53EF\u5C55\u5F00\u83DC\u5355\u7684\u5F00\u5408\u4E8B\u4EF6(menuToggle)\u6216\u53EF\u70B9\u51FB\u83DC\u5355\u7684\u70B9\u51FB\u4E8B\u4EF6(itemClick)\u3002\u53EF\u5C55\u5F00\u83DC\u5355\u9ED8\u8BA4\u5C55\u5F00\u4F7F\u7528\u5C5E\u6027open\uFF0C\u53EF\u70B9\u51FB\u83DC\u5355\u9ED8\u8BA4\u6FC0\u6D3B\u4F7F\u7528\u5C5E\u6027active\uFF0C\u7981\u7528\u9879\u4F7F\u7528disabled\u3002\u901A\u8FC7restrictOneOpen\u8BBE\u7F6E\u662F\u5426\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355\u3002</p>',6),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-accordion")]),t(`
            `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":accordionType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accordionTypeEmbed ? "),n("span",{class:"token punctuation"},"'"),t("embed"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("normal"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-accordion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("restrictOneOpen"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-switch")]),n("span",{class:"token punctuation"},">")]),t(" Only one level-1 menu can be expanded."),n("span",{class:"token comment"},"<!--\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355-->"),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accordionTypeEmbed"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-switch")]),n("span",{class:"token punctuation"},">")]),t(" Embedded menu (no shadow)"),n("span",{class:"token comment"},"<!--\u5185\u5D4C\u83DC\u5355\u5F62\u5F0F\uFF08\u65E0\u9634\u5F71\uFF09-->"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"accordion"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" flag "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" restrictOneOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" accordionTypeEmbed "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 1'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content '"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 2\uFF08This is a long sentence for option display.\uFF09'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (This is a long sentence for option display.)'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 3 (Default Open)'"),n("span",{class:"token punctuation"},","),t(`
            open`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (Disabled)'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2 (Default Active)'"),n("span",{class:"token punctuation"},","),t(" active"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 4 (No Child)'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 5 (Disabled)'"),n("span",{class:"token punctuation"},","),t(`
            disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 6 (Dynamic Content)'"),n("span",{class:"token punctuation"},","),t(`
            needLoadChildren`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            loading`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"changV"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'v'"),n("span",{class:"token punctuation"},","),t("value"),n("span",{class:"token punctuation"},")"),t(`
            flag`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` value
        `),n("span",{class:"token punctuation"},"}"),t(`


        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menu`),n("span",{class:"token punctuation"},","),t(`
            restrictOneOpen`),n("span",{class:"token punctuation"},","),t(`
            accordionTypeEmbed`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".option"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".option > d-toggle"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("3px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 250px"),n("span",{class:"token punctuation"},")")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},"ul"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"list-style"),n("span",{class:"token punctuation"},":"),t(` none
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1);function P(e,s,a,p,l,d){const i=E("render-demo-0"),k=E("demo");return L(),q("div",null,[j,v(k,{sourceCode:`<template>
    <div class="menu">
        <d-accordion
            :data="menu"
            :accordionType="accordionTypeEmbed ? 'embed' : 'normal'"
        ></d-accordion>
    </div>
    
    <div class="option">
        <d-switch v-model:checked="restrictOneOpen"></d-switch> Only one level-1 menu can be expanded.<!--\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355-->
    </div>
    <div class="option"><d-switch v-model:checked="accordionTypeEmbed"></d-switch> Embedded menu (no shadow)<!--\u5185\u5D4C\u83DC\u5355\u5F62\u5F0F\uFF08\u65E0\u9634\u5F71\uFF09--></div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "accordion",
    setup() {
        const flag = ref(false)
        const restrictOneOpen = ref(false)
        const accordionTypeEmbed = ref(false)
        const menu = ref([{
            title: 'Content 1',
            children: [
            {title: 'Child Content 1'},
            {title: 'Child Content 2'},
            {title: 'Child Content '},
            ]
        }, {
            title: 'Content 2\uFF08This is a long sentence for option display.\uFF09',
            children: [
            {title: 'Child Content 1 (This is a long sentence for option display.)'},
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 3 (Default Open)',
            open: true,
            children: [
            {title: 'Child Content 1 (Disabled)', disabled: true},
            {title: 'Child Content 2 (Default Active)', active: true},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 4 (No Child)',
            children: []
        }, {
            title: 'Content 5 (Disabled)',
            disabled: true,
            children: [
            ]
        }, {
            title: 'Content 6 (Dynamic Content)',
            needLoadChildren: true,
            loading: false,
            children: [
            ]
        }])

        const changV = (value) => {
            console.log('v',value)
            flag.value = value
        }


        return {
            menu,
            restrictOneOpen,
            accordionTypeEmbed,
        }
    }
})
<\/script>
<style>
.menu {
  width: 200px;
}

.option {
  line-height: 20px;
  vertical-align: middle;
  margin-top: 20px;
}

.option > d-toggle {
  display: inline-block;
  transform: translateY(3px);
}

@media (max-width: 250px) {
  .menu {
    width: 80%;
  }
}
ul {
    list-style: none
}
</style>
`},{highlight:y(()=>[Y]),default:y(()=>[v(i)]),_:1})])}var H=N(U,[["render",P]]);export{G as __pageData,H as default};
