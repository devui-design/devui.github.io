var U=Object.defineProperty;var F=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(o,a,s)=>a in o?U(o,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[a]=s,I=(o,a)=>{for(var s in a||(a={}))z.call(a,s)&&S(o,s,a[s]);if(F)for(var s of F(a))L.call(a,s)&&S(o,s,a[s]);return o};import{_ as P,r as E,c as W,a as y,w as v,b as B,d as n,e as t,o as H,V as D}from"./app.1c78646e.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveDirective:a,createElementVNode:s,withDirectives:e,resolveComponent:c,withCtx:p,createVNode:u,openBlock:l,createElementBlock:i}=D,r={class:"ripple-button"},k={class:"ripple-htmlElement"},_=[o("HTML element with v-ripple")],f={class:"ripple-button"},d={class:"ripple-htmlElement"},w=[o("HTML element with v-ripple")];function h(q,T){const C=c("d-col"),g=c("d-row"),x=a("ripple");return l(),i("div",null,[u(g,{gutter:50},{default:p(()=>[u(C,{span:12},{default:p(()=>[s("div",r,[e(s("div",k,_,512),[[x,{color:"#5e7ce0",duration:.3}]])])]),_:1}),u(C,{span:12},{default:p(()=>[s("div",f,[e(s("div",d,w,512),[[x,{duration:.8}]])])]),_:1})]),_:1})])}return I({render:h},{})}(),"render-demo-1":function(){const{renderList:o,Fragment:a,openBlock:s,createElementBlock:e,toDisplayString:c,createTextVNode:p,resolveDirective:u,createElementVNode:l,withDirectives:i,normalizeStyle:r,resolveComponent:k,withCtx:b,createVNode:_}=D,f={class:"ripple-changeTextColor"},d={class:"ripple-changeTextColor"};function m(h,V){const q=k("d-col"),T=k("d-row"),C=u("ripple");return s(),e("div",null,[_(T,null,{default:b(()=>[_(q,{span:12},{default:b(()=>[l("ul",null,[(s(),e(a,null,o([{color:"#409EFF",text:"Item with Primary ripple"},{color:"#67C23A",text:"Item with Success ripple"},{color:"#E6A23C",text:"Item with Warning ripple"},{color:"#F56C6C",text:"Item with Danger ripple"},{color:"#909399",text:"Item with Info ripple"}],g=>l("li",{style:r({color:g.color})},[i(l("div",f,[p(c(g.text),1)],512),[[C,{duration:.39}]])],4)),64))])]),_:1}),_(q,{span:12},{default:b(()=>[l("ul",null,[(s(),e(a,null,o([{color:"#409EFF",text:"Item with Primary ripple"},{color:"#67C23A",text:"Item with Success ripple"},{color:"#E6A23C",text:"Item with Warning ripple"},{color:"#F56C6C",text:"Item with Danger ripple"},{color:"#909399",text:"Item with Info ripple"}],(g,x)=>l("li",{style:r({color:g.color})},[i(l("div",d,[p(c(g.text),1)],512),[[C,{duration:.39,color:`${g.color.slice(0,4)}`}]])],4)),64))])]),_:1})]),_:1})])}return I({render:m},{})}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:a,resolveDirective:s,withCtx:e,createVNode:c,withDirectives:p,openBlock:u,createElementBlock:l}=D,i=o("Text"),r=o("Text dark");function k(_,f){const d=a("d-button"),m=a("d-col"),w=a("d-row"),h=s("ripple");return u(),l("div",null,[c(w,null,{default:e(()=>[c(m,{span:6},{default:e(()=>[p(c(d,{btnStyle:"text",style:{"margin-right":"20px"}},{default:e(()=>[i]),_:1},512),[[h,{duration:.5}]])]),_:1}),c(m,{span:6},{default:e(()=>[p(c(d,{btnStyle:"text-dark",style:{"margin-right":"20px"}},{default:e(()=>[r]),_:1},512),[[h,{duration:.5}]])]),_:1}),c(m,{span:6},{default:e(()=>[p(c(d,{icon:"add",btnStyle:"text-dark",title:"add"},null,512),[[h,{duration:.5}]])]),_:1}),c(m,{span:6},{default:e(()=>[p(c(d,{icon:"delete",btnStyle:"text-dark",title:"delete"},null,512),[[h,{duration:.5}]])]),_:1})]),_:1})])}return I({render:k},{})}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:a,createTextVNode:s,createElementVNode:e,resolveDirective:c,withCtx:p,withDirectives:u,openBlock:l,createElementBlock:i}=D,r=s(" DEVUI Course "),k=e("span",null,"DevUI",-1),b=s(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),_={class:"card-block"},f=e("span",null,"12",-1),d={class:"card-block"},m=e("span",null,"8",-1),w={class:"card-block"},h=e("span",null,"8",-1);function V(T,C){const g=o("d-avatar"),x=o("d-icon"),N=o("d-card"),A=c("ripple");return l(),i("div",null,[u(a(N,{class:"d-card",src:"https://devui.design/components/assets/image1.png"},{cardAvatar:p(()=>[a(g,{name:"DevUI"})]),cardTitle:p(()=>[r]),cardSubtitle:p(()=>[a(x,{name:"company-member"}),k]),cardContent:p(()=>[b]),cardActions:p(()=>[e("div",_,[a(x,{name:"like"}),f]),e("div",d,[a(x,{name:"star-o"}),m]),e("div",w,[a(x,{name:"message"}),h])]),_:1},8,["src"]),[[A]])])}return I({render:V},{})}()}},on='{"title":"RippleDirective","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to Use","slug":"when-to-use"},{"level":3,"title":"Custom color","slug":"custom-color"},{"level":3,"title":"Change the ripple color dynamically by changing the text color or the ripple color","slug":"change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color"},{"level":3,"title":"Ripple in components","slug":"ripple-in-components"},{"level":3,"title":"Some components provide the ripple prop that allows you to control the ripple effect.","slug":"some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect"},{"level":3,"title":"API","slug":"api"}],"relativePath":"en-US/components/ripple/index.md","lastUpdated":1638540903826}',$=B('<h1 id="rippledirective" tabindex="-1">RippleDirective <a class="header-anchor" href="#rippledirective" aria-hidden="true">#</a></h1><p><span color="#409EFF"><code>v-ripple</code></span>The v-ripple directive is used to show action from a user. It can be applied to any block level element.<span color="#409EFF"><code>tips: It can be applied to any block level element.</code></span></p><h3 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3>',3),R=n("div",null,[t("User can be use Basic ripple functionality can be enabled just by using v-ripple directive on a component or an HTML element "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t("Basic ripple functionality "),n("span",{color:"#409EFF"},[n("code",null,"v-ripple")]),t(" Directive "),n("code",null,"v-ripple"),t(" Accept an object")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),t(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-htmlElement"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: "),n("span",{class:"token punctuation"},"'"),t("#5e7ce0"),n("span",{class:"token punctuation"},"'"),t(",duration: 0.3 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML element with v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-button"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-htmlElement"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 0.8 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("HTML element with v-ripple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".ripple-button"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"custom-color",tabindex:"-1"},[t("Custom color "),n("a",{class:"header-anchor",href:"#custom-color","aria-hidden":"true"},"#")],-1),Y=n("h3",{id:"change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color",tabindex:"-1"},[t("Change the ripple color dynamically by changing the text color or the ripple color "),n("a",{class:"header-anchor",href:"#change-the-ripple-color-dynamically-by-changing-the-text-color-or-the-ripple-color","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`item in [
            { color: `),n("span",{class:"token punctuation"},"'"),t("#409EFF"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Primary ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#67C23A"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Success ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#E6A23C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Warning ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#F56C6C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Danger ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#909399"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Info ripple"),n("span",{class:"token punctuation"},"'"),t(` }
          ]`),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: item.color }"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-changeTextColor"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 0.39 }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.text }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(`(item, index) in [
            { color: `),n("span",{class:"token punctuation"},"'"),t("#409EFF"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Primary ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#67C23A"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Success ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#E6A23C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Warning ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#F56C6C"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Danger ripple"),n("span",{class:"token punctuation"},"'"),t(` },
            { color: `),n("span",{class:"token punctuation"},"'"),t("#909399"),n("span",{class:"token punctuation"},"'"),t(", text: "),n("span",{class:"token punctuation"},"'"),t("Item with Info ripple"),n("span",{class:"token punctuation"},"'"),t(` }
          ]`),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ color: item.color }"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ripple-changeTextColor"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ duration: 0.39, color: `${item.color.slice(0, 4)}` }"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t(`
            {{ item.text }}
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("ul")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"ripple-in-components",tabindex:"-1"},[t("Ripple in components "),n("a",{class:"header-anchor",href:"#ripple-in-components","aria-hidden":"true"},"#")],-1),K=n("h3",{id:"some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect",tabindex:"-1"},[t("Some components provide the ripple prop that allows you to control the ripple effect. "),n("a",{class:"header-anchor",href:"#some-components-provide-the-ripple-prop-that-allows-you-to-control-the-ripple-effect","aria-hidden":"true"},"#")],-1),Q=n("p",null,"Button Component",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Text"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Text dark"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-col")]),t(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-ripple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{duration: 0.5}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delete"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text-dark"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("delete"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-col")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-row")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("p",null,"Card Component",-1),nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-card")]),t(),n("span",{class:"token attr-name"},"v-ripple"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("d-card"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("https://devui.design/components/assets/image1.png"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
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
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
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
  `),n("span",{class:"token selector"},"img"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" none"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},".action-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8a8e99"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),tn=B('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>#00000050</code></td><td style="text-align:left;">Choose Default current text color</td></tr><tr><td style="text-align:center;">initial-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:left;">Choose Initial interaction Opacity size</td></tr><tr><td style="text-align:center;">final-opacity</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.1</code></td><td style="text-align:left;">Choose, end the interactive effect and press the Opacity size for a long time</td></tr><tr><td style="text-align:center;">duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0.4s</code></td><td style="text-align:left;">Choose, duration</td></tr><tr><td style="text-align:center;">easing</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>ease-out</code></td><td style="text-align:left;">Choose, animation easing</td></tr><tr><td style="text-align:center;">delay-time</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>75ms</code></td><td style="text-align:left;">Choose, slow animation is delayed after debouceTime time.</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">Choose, disabled ripple effect</td></tr></tbody></table>',2);function an(o,a,s,e,c,p){const u=E("render-demo-0"),l=E("demo"),i=E("render-demo-1"),r=E("render-demo-2"),k=E("render-demo-3");return H(),W("div",null,[$,y(l,{sourceCode:`<template>
  <d-row :gutter="50">
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ color: '#5e7ce0',duration: 0.3 }">HTML element with v-ripple</div>
      </div>
    </d-col>
    <d-col :span="12">
      <div class="ripple-button">
        <div class="ripple-htmlElement" v-ripple="{ duration: 0.8 }">HTML element with v-ripple</div>
      </div>
    </d-col>
  </d-row>
</template>
<style scoped>
.ripple-button {
  display: flex;
}
</style>
`},{description:v(()=>[R]),highlight:v(()=>[j]),default:v(()=>[y(u)]),_:1}),O,Y,y(l,{sourceCode:`<template>
  <d-row>
    <d-col :span="12">
      <ul>
        <li
          v-for="item in [
            { color: '#409EFF', text: 'Item with Primary ripple' },
            { color: '#67C23A', text: 'Item with Success ripple' },
            { color: '#E6A23C', text: 'Item with Warning ripple' },
            { color: '#F56C6C', text: 'Item with Danger ripple' },
            { color: '#909399', text: 'Item with Info ripple' }
          ]"
          :style="{ color: item.color }"
        >
          <div class="ripple-changeTextColor" v-ripple="{ duration: 0.39 }">
            {{ item.text }}
          </div>
        </li>
      </ul>
    </d-col>
    <d-col :span="12">
      <ul>
        <li
          v-for="(item, index) in [
            { color: '#409EFF', text: 'Item with Primary ripple' },
            { color: '#67C23A', text: 'Item with Success ripple' },
            { color: '#E6A23C', text: 'Item with Warning ripple' },
            { color: '#F56C6C', text: 'Item with Danger ripple' },
            { color: '#909399', text: 'Item with Info ripple' }
          ]"
          :style="{ color: item.color }"
        >
          <div
            class="ripple-changeTextColor"
            v-ripple="{ duration: 0.39, color: \`\${item.color.slice(0, 4)}\` }"
          >
            {{ item.text }}
          </div>
        </li>
      </ul>
    </d-col>
  </d-row>
</template>
`},{highlight:v(()=>[G]),default:v(()=>[y(i)]),_:1}),J,K,Q,y(l,{sourceCode:`<template>
  <d-row>
    <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" btnStyle="text" style="margin-right: 20px">Text</d-button>
    </d-col>
    <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" btnStyle="text-dark" style="margin-right: 20px">Text dark</d-button>
    </d-col>
        <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" icon="add" btnStyle="text-dark" title="add"></d-button>
    </d-col>
    <d-col :span="6">
      <d-button v-ripple="{duration: 0.5}" icon="delete" btnStyle="text-dark" title="delete"></d-button>
    </d-col>
  </d-row>
</template>
`},{highlight:v(()=>[X]),default:v(()=>[y(r)]),_:1}),Z,y(l,{sourceCode:`<template>
  <d-card v-ripple class="d-card" :src="'https://devui.design/components/assets/image1.png'">
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
<style lang="scss">
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
  img {
    max-width: none;
  }
  .action-text {
    color: #8a8e99;
  }
</style>
`},{highlight:v(()=>[nn]),default:v(()=>[y(k)]),_:1}),tn])}var cn=P(M,[["render",an]]);export{on as __pageData,cn as default};
