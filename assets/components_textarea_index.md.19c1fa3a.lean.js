var A=Object.defineProperty;var x=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var v=(s,e,a)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,F=(s,e)=>{for(var a in e||(e={}))y.call(e,a)&&v(s,a,e[a]);if(x)for(var a of x(e))f.call(e,a)&&v(s,a,e[a]);return s};import{_ as D,r as E,c as q,a as k,w as i,b as _,d as n,e as t,o as w,V as C}from"./app.1c78646e.js";const b={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,openBlock:l,createElementBlock:r}=C,d=s("h4",{style:{margin:"10px 0"}},"Default",-1),u=s("h4",{style:{margin:"10px 0"}},"Disabled",-1),c=s("h4",{style:{margin:"10px 0"}},"Error",-1);function p(o,m){const B=e("d-textarea");return l(),r("div",null,[d,a(B,{value:"\u6211\u662F\u9ED8\u8BA4\u503C",autofocus:!0,id:"textArea",cssClass:"my-text-area"}),u,a(B,{placeholder:"\u6211\u662F\u88AB\u7981\u7528\u72B6\u6001",disabled:!0}),c,a(B,{placeholder:"\u6211\u662F\u51FA\u9519\u72B6\u6001",error:!0})])}return F({render:p},{})}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,openBlock:l,createElementBlock:r}=C,d=s("h4",{style:{margin:"10px 0"}},"vertical",-1),u=s("h4",{style:{margin:"10px 0"}},"horizontal",-1),c=s("h4",{style:{margin:"10px 0"}},"both",-1),p=s("h4",{style:{margin:"10px 0"}},"none",-1),h=s("h4",{style:{margin:"10px 0"}},"inherit",-1);function o(B,I){const g=e("d-textarea");return l(),r("div",null,[d,a(g,{placeholder:"\u6211\u53EF\u4EE5\u7F29\u653E",resize:"vertical"}),u,a(g,{resize:"horizontal",placeholder:"\u8BF7\u8F93\u5165"}),c,a(g,{resize:"both",placeholder:"\u8BF7\u8F93\u5165"}),p,a(g,{resize:"none",placeholder:"\u8BF7\u8F93\u5165"}),h,a(g,{resize:"inherit",placeholder:"\u8BF7\u8F93\u5165"})])}return F({render:o},{})}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:e,createVNode:a,openBlock:l,createElementBlock:r}=C,d=s("h4",{style:{margin:"10px 0"}},"\u9ED8\u8BA4",-1),u=s("h4",{style:{margin:"10px 0"}},"\u663E\u793A\u6700\u5927\u5B57\u6570",-1);function c(h,o){const m=e("d-textarea");return l(),r("div",null,[d,a(m,{showCount:!0,placeholder:"\u8BF7\u8F93\u5165"}),u,a(m,{showCount:!0,maxLength:20,placeholder:"\u8BF7\u8F93\u5165"})])}return F({render:c},{})}(),"render-demo-3":function(){const{resolveComponent:s,createVNode:e,openBlock:a,createElementBlock:l}=C;function r(u,c){const p=s("d-textarea");return a(),l("div",null,[e(p,{showCount:!0,maxLength:20,placeholder:"\u6253\u5F00\u63A7\u5236\u53F0\u8F93\u5165\u6587\u5B57\u770B\u770B","onUpdate:value":u.onUpdate,onChange:u.onChange,onFocus:u.onFocus,onKeydown:u.onKeydown},null,8,["onUpdate:value","onChange","onFocus","onKeydown"])])}return F({render:r},{setup(){return{onUpdate:o=>{console.log("\u3010d-textarea update value\u3011\uFF1A ",o)},onChange:o=>{console.log("\u3010d-textarea change value\u3011\uFF1A",o)},onFocus:o=>{console.log("\u3010d-textarea onFocus\u3011:",o)},onKeydown:o=>{console.log("\u3010d-textarea onKeydown:",o)}}}})}()}},H='{"title":"Textarea \u591A\u884C\u6587\u672C\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8C03\u6574\u5927\u5C0F","slug":"\u8C03\u6574\u5927\u5C0F"},{"level":3,"title":"\u663E\u793A\u5B57\u6570","slug":"\u663E\u793A\u5B57\u6570"},{"level":3,"title":"\u4E8B\u4EF6\u54CD\u5E94","slug":"\u4E8B\u4EF6\u54CD\u5E94"},{"level":3,"title":"d-textarea API","slug":"d-textarea-api"}],"relativePath":"components/textarea/index.md","lastUpdated":1636901380150}',z=_('<h1 id="textarea-\u591A\u884C\u6587\u672C\u6846" tabindex="-1">Textarea \u591A\u884C\u6587\u672C\u6846 <a class="header-anchor" href="#textarea-\u591A\u884C\u6587\u672C\u6846" aria-hidden="true">#</a></h1><p>\u6587\u672C\u8F93\u5165\u533A\u57DF\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u9700\u8981\u624B\u52A8\u8F93\u5165\u6587\u5B57\uFF0C\u5E76\u4E14\u6587\u5B57\u5185\u5BB9\u8F83\u591A\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(`
    `),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6211\u662F\u9ED8\u8BA4\u503C"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":autofocus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("textArea"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"cssClass"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my-text-area"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6211\u662F\u88AB\u7981\u7528\u72B6\u6001"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6211\u662F\u51FA\u9519\u72B6\u6001"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".dinput"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),N=n("h3",{id:"\u8C03\u6574\u5927\u5C0F",tabindex:"-1"},[t("\u8C03\u6574\u5927\u5C0F "),n("a",{class:"header-anchor",href:"#\u8C03\u6574\u5927\u5C0F","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("vertical"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6211\u53EF\u4EE5\u7F29\u653E"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("horizontal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("horizontal"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("both"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("both"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("none"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("none"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("inherit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},"resize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("inherit"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u663E\u793A\u5B57\u6570",tabindex:"-1"},[t("\u663E\u793A\u5B57\u6570 "),n("a",{class:"header-anchor",href:"#\u663E\u793A\u5B57\u6570","aria-hidden":"true"},"#")],-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u9ED8\u8BA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(),n("span",{class:"token attr-name"},":showCount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 10px 0")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u663E\u793A\u6700\u5927\u5B57\u6570"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(`
    `),n("span",{class:"token attr-name"},":showCount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":maxLength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u8BF7\u8F93\u5165"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".dinput"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),$=n("h3",{id:"\u4E8B\u4EF6\u54CD\u5E94",tabindex:"-1"},[t("\u4E8B\u4EF6\u54CD\u5E94 "),n("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\u54CD\u5E94","aria-hidden":"true"},"#")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-textarea")]),t(`
    `),n("span",{class:"token attr-name"},":showCount"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":maxLength"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u6253\u5F00\u63A7\u5236\u53F0\u8F93\u5165\u6587\u5B57\u770B\u770B"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"@update:"),t("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onUpdate"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@focus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onFocus"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@keydown"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onKeydown"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-textarea")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onUpdate"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u3010d-textarea update value\u3011\uFF1A "'),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u3010d-textarea change value\u3011\uFF1A"'),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onFocus"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u3010d-textarea onFocus\u3011:"'),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onKeydown"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"\u3010d-textarea onKeydown:"'),n("span",{class:"token punctuation"},","),t(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      onUpdate`),n("span",{class:"token punctuation"},","),t(`
      onChange`),n("span",{class:"token punctuation"},","),t(`
      onFocus`),n("span",{class:"token punctuation"},","),t(`
      onKeydown`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=_('<h3 id="d-textarea-api" tabindex="-1">d-textarea API <a class="header-anchor" href="#d-textarea-api" aria-hidden="true">#</a></h3><p>d-textarea \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td>id</td><td>string</td><td><code>-</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846 id</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>placeholder</td><td>string</td><td><code>-</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846 placeholder</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>value</td><td>string</td><td><code>-</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846\u9ED8\u8BA4\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>disabled</td><td>boolean</td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u88AB\u7981\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>autoFocus</td><td>boolean</td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u81EA\u52A8\u83B7\u5F97\u7126\u70B9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>error</td><td>boolean</td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u51FA\u73B0\u8F93\u5165\u9519\u8BEF</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td>resize</td><td><code>&#39;none&#39; |&#39;vertical&#39; |&#39;horizontal&#39; |&#39;both&#39; |&#39;inherit&#39;</code></td><td><code>&#39;none&#39;</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u53EF\u8C03\u6574\u5927\u5C0F\uFF0C\u53EF\u9009\u9879\uFF1A\u4E0D\u53EF\u8C03\u6574\uFF0C\u6C34\u5E73\u8C03\u6574\uFF0C\u5782\u76F4\u8C03\u6574\uFF0C\u81EA\u7531\u8C03\u6574\uFF0C\u9ED8\u8BA4\u7EE7\u627F</td><td><a href="#%E8%B0%83%E6%95%B4%E5%A4%A7%E5%B0%8F">\u8C03\u6574\u5927\u5C0F</a></td><td></td></tr><tr><td>showCount</td><td>boolean</td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u6587\u672C\u6846\u662F\u5426\u662F\u5426\u5C55\u793A\u5B57\u6570</td><td><a href="#%E6%98%BE%E7%A4%BA%E5%AD%97%E6%95%B0">\u663E\u793A\u5B57\u6570</a></td><td></td></tr></tbody></table><p>d-textarea \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>update</td><td><code>EventEmitter&lt;string&gt;</code></td><td>\u6587\u672C\u6846\u5185\u5BB9\u53D8\u5316\uFF08\u5B9E\u65F6\u89E6\u53D1\uFF09</td><td><a href="#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94">\u4E8B\u4EF6\u54CD\u5E94</a></td></tr><tr><td>focus</td><td><code>EventEmitter&lt;Event&gt;</code></td><td>\u6587\u672C\u6846\u83B7\u5F97\u7126\u70B9</td><td><a href="#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94">\u4E8B\u4EF6\u54CD\u5E94</a></td></tr><tr><td>blur</td><td><code>EventEmitter&lt;Event&gt;</code></td><td>\u6587\u672C\u6846\u5931\u53BB\u7126\u70B9</td><td><a href="#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94">\u4E8B\u4EF6\u54CD\u5E94</a></td></tr><tr><td>change</td><td><code>EventEmitter&lt;string&gt;</code></td><td>\u6587\u672C\u6846\u5185\u5BB9\u53D8\u5316\uFF08\u5931\u53BB\u7126\u70B9\u89E6\u53D1\uFF09</td><td><a href="#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94">\u4E8B\u4EF6\u54CD\u5E94</a></td></tr><tr><td>keydown</td><td><code>EventEmitter&lt;Event&gt;</code></td><td>\u6587\u672C\u6846\u6309\u4E0B\u952E\u76D8</td><td><a href="#%E4%BA%8B%E4%BB%B6%E5%93%8D%E5%BA%94">\u4E8B\u4EF6\u54CD\u5E94</a></td></tr></tbody></table>',5);function j(s,e,a,l,r,d){const u=E("render-demo-0"),c=E("demo"),p=E("render-demo-1"),h=E("render-demo-2"),o=E("render-demo-3");return w(),q("div",null,[z,k(c,{sourceCode:`<template>
  <h4 style="margin: 10px 0">Default</h4>

  <d-textarea
    value="\u6211\u662F\u9ED8\u8BA4\u503C"
    :autofocus="true"
    id="textArea"
    cssClass="my-text-area"
  ></d-textarea>

  <h4 style="margin: 10px 0">Disabled</h4>

  <d-textarea placeholder="\u6211\u662F\u88AB\u7981\u7528\u72B6\u6001" :disabled="true"></d-textarea>

  <h4 style="margin: 10px 0">Error</h4>

  <d-textarea placeholder="\u6211\u662F\u51FA\u9519\u72B6\u6001" :error="true"></d-textarea>
</template>
<style>
.dinput {
  width: 200px;
}
</style>
`},{highlight:i(()=>[V]),default:i(()=>[k(u)]),_:1}),N,k(c,{sourceCode:`<template>
  <h4 style="margin: 10px 0">vertical</h4>
  <d-textarea placeholder="\u6211\u53EF\u4EE5\u7F29\u653E" resize="vertical"></d-textarea>

  <h4 style="margin: 10px 0">horizontal</h4>

  <d-textarea resize="horizontal" placeholder="\u8BF7\u8F93\u5165"></d-textarea>

  <h4 style="margin: 10px 0">both</h4>

  <d-textarea resize="both" placeholder="\u8BF7\u8F93\u5165"></d-textarea>

  <h4 style="margin: 10px 0">none</h4>

  <d-textarea resize="none" placeholder="\u8BF7\u8F93\u5165"></d-textarea>

  <h4 style="margin: 10px 0">inherit</h4>

  <d-textarea resize="inherit" placeholder="\u8BF7\u8F93\u5165"></d-textarea>
</template>
`},{highlight:i(()=>[K]),default:i(()=>[k(p)]),_:1}),U,k(c,{sourceCode:`<template>
  <h4 style="margin: 10px 0">\u9ED8\u8BA4</h4>
  <d-textarea :showCount="true" placeholder="\u8BF7\u8F93\u5165"></d-textarea>
  <h4 style="margin: 10px 0">\u663E\u793A\u6700\u5927\u5B57\u6570</h4>
  <d-textarea
    :showCount="true"
    :maxLength="20"
    placeholder="\u8BF7\u8F93\u5165"
  ></d-textarea>
</template>
<style>
.dinput {
  width: 200px;
}
</style>
`},{highlight:i(()=>[L]),default:i(()=>[k(h)]),_:1}),$,k(c,{sourceCode:`<template>
  <d-textarea
    :showCount="true"
    :maxLength="20"
    placeholder="\u6253\u5F00\u63A7\u5236\u53F0\u8F93\u5165\u6587\u5B57\u770B\u770B"
    @update:value="onUpdate"
    @change="onChange"
    @focus="onFocus"
    @keydown="onKeydown"
  ></d-textarea>
</template>
<script>
export default {
  setup() {
    const onUpdate = (value) => {
      console.log("\u3010d-textarea update value\u3011\uFF1A ", value);
    };
    const onChange = (value) => {
      console.log("\u3010d-textarea change value\u3011\uFF1A", value);
    };
    const onFocus = (e) => {
      console.log("\u3010d-textarea onFocus\u3011:", e);
    };
    const onKeydown = (e) => {
      console.log("\u3010d-textarea onKeydown:", e);
    };
    return {
      onUpdate,
      onChange,
      onFocus,
      onKeydown,
    };
  },
};
<\/script>
`},{highlight:i(()=>[P]),default:i(()=>[k(o)]),_:1}),T])}var J=D(b,[["render",j]]);export{H as __pageData,J as default};