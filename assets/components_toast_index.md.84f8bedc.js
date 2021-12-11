var M=Object.defineProperty;var N=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var $=(e,s,a)=>s in e?M(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,q=(e,s)=>{for(var a in s||(s={}))W.call(s,a)&&$(e,a,s[a]);if(N)for(var a of N(s))P.call(s,a)&&$(e,a,s[a]);return e};import{_ as j,V as b,r as V,c as H,a as w,w as B,b as I,d as n,e as t,o as z}from"./app.1c78646e.js";const R={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:e,createElementVNode:s,resolveComponent:a,withCtx:u,createVNode:c,createTextVNode:l,openBlock:F,createElementBlock:d}=b,f={class:"toast-common-demo"},E={class:"devui-link",href:"http://devui.huawei.com",target:"_blank"},T=l("Success"),C=l("Warning"),y=l("Error"),m=l("Multiple"),h=l("link"),_=l("pure text"),k=l("common"),g=l("no title");function x(o,p){const S=a("d-toast"),v=a("d-button");return F(),d("div",null,[s("section",f,[c(S,{value:o.msgs},{customTemplate:u(A=>[s("a",E,"Back to "+e(A.myInfo)+" Home Page",1)]),_:1},8,["value"]),c(v,{bsStyle:"success",onClick:p[0]||(p[0]=A=>o.showToast("success"))},{default:u(()=>[T]),_:1}),c(v,{bsStyle:"warning",onClick:p[1]||(p[1]=A=>o.showToast("warn"))},{default:u(()=>[C]),_:1}),c(v,{bsStyle:"danger",onClick:p[2]||(p[2]=A=>o.showToast("error"))},{default:u(()=>[y]),_:1}),c(v,{bsStyle:"primary",onClick:p[3]||(p[3]=A=>o.showToast("multiple"))},{default:u(()=>[m]),_:1}),c(v,{bsStyle:"common",onClick:p[4]||(p[4]=A=>o.showToast("link"))},{default:u(()=>[h]),_:1}),c(v,{bsStyle:"common",onClick:p[5]||(p[5]=A=>o.showToast("plainText"))},{default:u(()=>[_]),_:1}),c(v,{bsStyle:"common",onClick:p[6]||(p[6]=A=>o.showToast("common"))},{default:u(()=>[k]),_:1}),c(v,{bsStyle:"warning",onClick:p[7]||(p[7]=A=>o.showToast("noTitle"))},{default:u(()=>[g]),_:1})])])}const{defineComponent:r,ref:i}=b,D=r({setup(){const o=i([]);function p(S){switch(S){case"link":o.value=[{severity:"info",summary:"Relative",detail:'<a href="/home" target="_blank">Back to Home Page</a>'},{severity:"info",summary:"Absolute",content:"slot:customTemplate",myInfo:"Devui"}];break;case"multiple":o.value=[{severity:"info",summary:"Summary",content:"This is a test text. This is a test text. This is a test text."},{severity:"info",summary:"Summary",content:"This is a test text. This is a test text. This is a test text."}];break;case"noTitle":o.value=[{severity:"warning",content:"This is a test text. This is a test text. This is a test text."}];break;case"plainText":o.value=[{severity:"info",content:"data\uFF1A<id:gc5aa71bfd86943db9e3e8f34dc347a15><label:content>"}];break;default:o.value=[{severity:S,summary:"Summary",content:"This is a test text. This is a test text. This is a test text."}]}}return{msgs:o,showToast:p}}});return q({render:x},D)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:s,createTextVNode:a,withCtx:u,createElementVNode:c,openBlock:l,createElementBlock:F}=b,d={class:"toast-timeout-demo"},f=a("Success"),E=a("Warning"),T=a("Error"),C=a("common");function y(k,g){const x=e("d-toast"),r=e("d-button");return l(),F("div",null,[c("section",d,[s(x,{life:5e3,value:k.msgs2},null,8,["value"]),s(r,{bsStyle:"success",onClick:g[0]||(g[0]=i=>k.showToast2("success"))},{default:u(()=>[f]),_:1}),s(r,{bsStyle:"warning",onClick:g[1]||(g[1]=i=>k.showToast2("warning"))},{default:u(()=>[E]),_:1}),s(r,{bsStyle:"danger",onClick:g[2]||(g[2]=i=>k.showToast2("error"))},{default:u(()=>[T]),_:1}),s(r,{bsStyle:"common",onClick:g[3]||(g[3]=i=>k.showToast2("common"))},{default:u(()=>[C]),_:1})])])}const{defineComponent:m,ref:h}=b,_=m({setup(){const k=h([]);function g(x){switch(x){case"error":k.value=[{severity:x,content:"This is a test text. This is a test text. This is a test text."}];break;case"common":k.value=[{severity:x,content:"This is a test text. This is a test text. This is a test text."}];break;default:k.value=[{severity:x,summary:"Summary",content:"This is a test text. This is a test text. This is a test text."}]}}return{msgs2:k,showToast2:g}}});return q({render:y},_)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:s,createTextVNode:a,withModifiers:u,withCtx:c,createElementVNode:l,openBlock:F,createElementBlock:d}=b,f=a("Custom Style");function E(m,h){const _=e("d-toast"),k=e("d-button");return F(),d("div",null,[l("section",null,[s(_,{value:m.msgs3,sticky:!0,style:{top:"20px"},styleClass:"custom-class"},null,8,["value"]),s(k,{bsStyle:"common",onClick:h[0]||(h[0]=u(g=>m.showToast3(),["stop"]))},{default:c(()=>[f]),_:1})])])}const{defineComponent:T,ref:C}=b,y=T({setup(){const m=C([]);function h(){m.value=[{severity:"success",summary:"Success",content:"This is a test text. This is a test text. This is a test text."}]}return{msgs3:m,showToast3:h}}});return q({render:E},y)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,createTextVNode:a,withCtx:u,createElementVNode:c,openBlock:l,createElementBlock:F}=b,d=a("Single");function f(y,m){const h=e("d-toast"),_=e("d-button");return l(),F("div",null,[c("section",null,[s(h,{lifeMode:"single",value:y.msgs4},null,8,["value"]),s(_,{bsStyle:"common",onClick:m[0]||(m[0]=k=>y.showToast4())},{default:u(()=>[d]),_:1})])])}const{defineComponent:E,ref:T}=b,C=E({setup(){const y=T([]);function m(){y.value=[{life:3e3,summary:"Summary",content:"This is a test text. This is a test text. This is a test text."},{life:6e3,severity:"info",summary:"Summary",content:"This is a test text. This is a test text. This is a test text."},{severity:"success",summary:"Success",content:"This is a test text. This is a test text. This is a test text."},{severity:"warning",summary:"Warning",content:"This is a test text. This is a test text. This is a test text."}]}return{msgs4:y,showToast4:m}}});return q({render:f},C)}(),"render-demo-4":function(){const{createTextVNode:e,resolveComponent:s,withCtx:a,createVNode:u,openBlock:c,createBlock:l,createCommentVNode:F,createElementVNode:d,createElementBlock:f}=b,E={class:"toast-service-demo"},T=e("click me show simplest toast!"),C=e("click me show customer toast!"),y=e("click me close customer toast!"),m=e("only close first customer toast!");function h(r,i){const D=s("d-button");return c(),f("div",null,[d("div",E,[u(D,{onClick:i[0]||(i[0]=o=>r.openToast())},{default:a(()=>[T]),_:1}),r.isShow?F("v-if",!0):(c(),l(D,{key:0,onClick:i[1]||(i[1]=o=>r.openToast2()),bsStyle:"common"},{default:a(()=>[C]),_:1})),r.isShow?(c(),l(D,{key:1,onClick:i[2]||(i[2]=o=>r.closeToast2())},{default:a(()=>[y]),_:1})):F("v-if",!0),r.isShow?(c(),l(D,{key:2,onClick:i[3]||(i[3]=o=>r.closeToast3()),bsStyle:"common"},{default:a(()=>[m]),_:1})):F("v-if",!0)])])}const{defineComponent:_,ref:k,h:g}=b,x=_({setup(){const r=k(!1),i=k();function D(){const v=this.$toastService.open({value:[{severity:"info",summary:"summary",content:()=>g("p",2132131)}]});console.log("results",v)}function o(){i.value=this.$toastService.open({value:[{severity:"info",summary:"summary",content:"1. I am content"},{severity:"error",summary:"summary",content:"2. I am content"},{severity:"error",summary:"summary",content:"3. I am content"}],sticky:!0,style:{width:"600px",color:"red"},styleClass:"myCustom-toast",life:5e3,lifeMode:"global",onCloseEvent(v){console.log("closeEvent",v)},onValueChange(v){console.log("valueChange",v)}}),console.log("results",i.value),r.value=!0}function p(){i.value.toastInstance.close(),r.value=!1}function S(){i.value.toastInstance.close({severity:"info",summary:"summary",content:"1. I am content"})}return{isShow:r,openToast:D,openToast2:o,closeToast2:p,closeToast3:S}}});return q({render:h},x)}()}},cn='{"title":"Toast \u5168\u5C40\u901A\u77E5","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8D85\u65F6\u65F6\u95F4","slug":"\u8D85\u65F6\u65F6\u95F4"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u5355\u72EC\u7684\u8D85\u65F6\u65F6\u95F4","slug":"\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u5355\u72EC\u7684\u8D85\u65F6\u65F6\u95F4"},{"level":3,"title":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","slug":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"Toast Api","slug":"toast-api"},{"level":3,"title":"Toast Event","slug":"toast-event"},{"level":3,"title":"\u63A5\u53E3 & \u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"Service \u5F15\u5165\u65B9\u5F0F","slug":"service-\u5F15\u5165\u65B9\u5F0F"},{"level":3,"title":"Service \u4F7F\u7528","slug":"service-\u4F7F\u7528"}],"relativePath":"components/toast/index.md","lastUpdated":1638874284461}',U=I('<h1 id="toast-\u5168\u5C40\u901A\u77E5" tabindex="-1">Toast \u5168\u5C40\u901A\u77E5 <a class="header-anchor" href="#toast-\u5168\u5C40\u901A\u77E5" aria-hidden="true">#</a></h1><p>\u5168\u5C40\u4FE1\u606F\u63D0\u793A\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5411\u7528\u6237\u5168\u5C40\u5C55\u793A\u63D0\u793A\u4FE1\u606F\u65F6\u4F7F\u7528\uFF0C\u663E\u793A\u6570\u79D2\u540E\u6D88\u5931\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>common \u65F6\u4E0D\u5C55\u793A\u56FE\u6807\u3002</p>',6),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toast-common-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-toast")]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("msgs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("customTemplate")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("msg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-link"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("http://devui.huawei.com"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"target"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("_blank"),n("span",{class:"token punctuation"},'"')]),t(`
          `),n("span",{class:"token punctuation"},">")]),t("Back to {{ msg.myInfo }} Home Page"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-toast")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("success"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("warn"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("error"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("multiple"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Multiple"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("link"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("link"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("plainText"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("pure text"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("common"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("common"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast("),n("span",{class:"token punctuation"},"'"),t("noTitle"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("no title"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" msgs "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"type"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"switch"),t(),n("span",{class:"token punctuation"},"("),t("type"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"case"),t(),n("span",{class:"token string"},"'link'"),n("span",{class:"token operator"},":"),t(`
          msgs`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
              summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Relative'"),n("span",{class:"token punctuation"},","),t(`
              detail`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},'<a href="/home" target="_blank">Back to Home Page</a>'),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
              summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Absolute'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'slot:customTemplate'"),n("span",{class:"token punctuation"},","),t(`
              myInfo`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Devui'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token keyword"},"break"),t(`
        `),n("span",{class:"token keyword"},"case"),t(),n("span",{class:"token string"},"'multiple'"),n("span",{class:"token operator"},":"),t(`
          msgs`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
              summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summary'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
              summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summary'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token keyword"},"break"),t(`
        `),n("span",{class:"token keyword"},"case"),t(),n("span",{class:"token string"},"'noTitle'"),n("span",{class:"token operator"},":"),t(`
          msgs`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token keyword"},"break"),t(`
        `),n("span",{class:"token keyword"},"case"),t(),n("span",{class:"token string"},"'plainText'"),n("span",{class:"token operator"},":"),t(`
          msgs`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'data\uFF1A<id:gc5aa71bfd86943db9e3e8f34dc347a15><label:content>'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token keyword"},"break"),t(`
        `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(`
          msgs`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(" type"),n("span",{class:"token punctuation"},","),t(`
              summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summary'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      msgs`),n("span",{class:"token punctuation"},","),t(`
      showToast`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".toast-common-demo .devui-btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u8D85\u65F6\u65F6\u95F4",tabindex:"-1"},[t("\u8D85\u65F6\u65F6\u95F4 "),n("a",{class:"header-anchor",href:"#\u8D85\u65F6\u65F6\u95F4","aria-hidden":"true"},"#")],-1),K=n("p",null,"\u5F53\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u3001\u6CA1\u6709\u6807\u9898\u65F6\uFF0C\u5219\u4E0D\u5C55\u793A\u6807\u9898\u548C\u5173\u95ED\u6309\u94AE\u3002",-1),L=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toast-timeout-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-toast")]),t(),n("span",{class:"token attr-name"},":life"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("5000"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("msgs2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-toast")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast2("),n("span",{class:"token punctuation"},"'"),t("success"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast2("),n("span",{class:"token punctuation"},"'"),t("warning"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast2("),n("span",{class:"token punctuation"},"'"),t("error"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast2("),n("span",{class:"token punctuation"},"'"),t("common"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("common"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" msgs2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showToast2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"type"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"switch"),t(),n("span",{class:"token punctuation"},"("),t("type"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"case"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token operator"},":"),t(`
          msgs2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(" type"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token keyword"},"break"),t(`
        `),n("span",{class:"token keyword"},"case"),t(),n("span",{class:"token string"},"'common'"),n("span",{class:"token operator"},":"),t(`
          msgs2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(" type"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token keyword"},"break"),t(`
        `),n("span",{class:"token keyword"},"default"),n("span",{class:"token operator"},":"),t(`
          msgs2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(`
              severity`),n("span",{class:"token operator"},":"),t(" type"),n("span",{class:"token punctuation"},","),t(`
              summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summary'"),n("span",{class:"token punctuation"},","),t(`
              content`),n("span",{class:"token operator"},":"),t(`
                `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      msgs2`),n("span",{class:"token punctuation"},","),t(`
      showToast2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".toast-timeout-demo .devui-btn"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-toast")]),t(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("msgs3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":sticky"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ top: "),n("span",{class:"token punctuation"},"'"),t("20px"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":styleClass"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token punctuation"},"'"),t("custom-class"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-toast")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.stop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast3()"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("Custom Style"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" msgs3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showToast3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      msgs3`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(`
          summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Success'"),n("span",{class:"token punctuation"},","),t(`
          content`),n("span",{class:"token operator"},":"),t(`
            `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      msgs3`),n("span",{class:"token punctuation"},","),t(`
      showToast3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".custom-class"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".devui-toast-item-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #252b3a"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #ffffff"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token selector"},".devui-toast-icon-close"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" 13px"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token selector"},"& i.icon"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #252b3a "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token selector"},".devui-toast-image"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 15px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token selector"},".devui-toast-message"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 23px"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token selector"},".devui-toast-title"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token selector"},"p"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 14px"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=n("h3",{id:"\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u5355\u72EC\u7684\u8D85\u65F6\u65F6\u95F4",tabindex:"-1"},[t("\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u5355\u72EC\u7684\u8D85\u65F6\u65F6\u95F4 "),n("a",{class:"header-anchor",href:"#\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u5355\u72EC\u7684\u8D85\u65F6\u65F6\u95F4","aria-hidden":"true"},"#")],-1),Y=n("p",null,"\u5F53\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\u6A21\u5F0F\u4E3A single \u65F6\uFF0C\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u81EA\u8EAB\u7684 life \u4F5C\u4E3A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5982\u679C\u672A\u8BBE\u7F6E\u5219\u6309 severity \u5224\u65AD\uFF0Cseverity \u4E5F\u672A\u8BBE\u7F6E\u65F6\u9ED8\u8BA4\u8D85\u65F6\u65F6\u95F4\u4E3A 5000 \u6BEB\u79D2\u3002",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-toast")]),t(),n("span",{class:"token attr-name"},"lifeMode"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("single"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("msgs4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-toast")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showToast4()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Single"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" msgs4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"showToast4"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      msgs4`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          life`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},","),t(`
          summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summary'"),n("span",{class:"token punctuation"},","),t(`
          content`),n("span",{class:"token operator"},":"),t(`
            `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          life`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"6000"),n("span",{class:"token punctuation"},","),t(`
          severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
          summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summary'"),n("span",{class:"token punctuation"},","),t(`
          content`),n("span",{class:"token operator"},":"),t(`
            `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(`
          summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Success'"),n("span",{class:"token punctuation"},","),t(`
          content`),n("span",{class:"token operator"},":"),t(`
            `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),t(`
          summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Warning'"),n("span",{class:"token punctuation"},","),t(`
          content`),n("span",{class:"token operator"},":"),t(`
            `),n("span",{class:"token string"},"'This is a test text. This is a test text. This is a test text.'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"]"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      msgs4`),n("span",{class:"token punctuation"},","),t(`
      showToast4`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=n("h3",{id:"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u670D\u52A1\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),tn=n("p",null,"\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u521B\u5EFA toast \u5168\u5C40\u901A\u77E5\u3002",-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("toast-service-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("openToast()"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("click me show simplest toast!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("!isShow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("openToast2()"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("click me show customer toast!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closeToast2()"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("click me close customer toast!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click.native"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closeToast3()"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token punctuation"},">")]),t("only close first customer toast!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" isShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" results "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"openToast"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" results "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$toastService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(`
            severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
            summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'summary'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2132131"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'results'"),n("span",{class:"token punctuation"},","),t(" results"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"openToast2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      results`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$toastService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" severity"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(" summary"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'summary'"),n("span",{class:"token punctuation"},","),t(" content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1. I am content'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" severity"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(" summary"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'summary'"),n("span",{class:"token punctuation"},","),t(" content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2. I am content'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"{"),t(" severity"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(" summary"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'summary'"),n("span",{class:"token punctuation"},","),t(" content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3. I am content'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
        sticky`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        style`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(" width"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'600px'"),n("span",{class:"token punctuation"},","),t(" color"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'red'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        styleClass`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'myCustom-toast'"),n("span",{class:"token punctuation"},","),t(`
        life`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},","),t(`
        lifeMode`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'global'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token comment"},`/*
          \u63A5\u6536\u53D1\u5C04\u8FC7\u6765\u7684\u6570\u636E
        */`),t(`
        `),n("span",{class:"token function"},"onCloseEvent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'closeEvent'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function"},"onValueChange"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'valueChange'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`

      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'results'"),n("span",{class:"token punctuation"},","),t(" results"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},")"),t(`

      isShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"closeToast2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      results`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("toastInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      isShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"closeToast3"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token comment"},`/*
        1.\u53EF\u4EE5\u6839\u636E\u6307\u5B9A\u4E0B\u6807\u5173\u95ED results.value.toastInstance.close(0);
        2.\u53EF\u4EE5\u6839\u636Evalue\u5BF9\u8C61\u53BB\u5173\u95ED\uFF0C\u4F5C\u7528\u8DDF1\u662F\u7B49\u540C\u7684\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A
      */`),t(`
      results`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),t("toastInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        severity`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'info'"),n("span",{class:"token punctuation"},","),t(`
        summary`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'summary'"),n("span",{class:"token punctuation"},","),t(`
        content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1. I am content'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isShow`),n("span",{class:"token punctuation"},","),t(`
      openToast`),n("span",{class:"token punctuation"},","),t(`
      openToast2`),n("span",{class:"token punctuation"},","),t(`
      closeToast2`),n("span",{class:"token punctuation"},","),t(`
      closeToast3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".toast-service-demo .devui-btn-host"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=I(`<h3 id="toast-api" tabindex="-1">Toast Api <a class="header-anchor" href="#toast-api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>Array&lt;Message&gt;</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u6D88\u606F\u5185\u5BB9\u6570\u7EC4\uFF0CMessage \u5BF9\u8C61\u5B9A\u4E49\u89C1\u4E0B\u6587</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">life</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">5000</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8D85\u65F6\u65F6\u95F4\uFF0C\u8D85\u65F6\u540E\u81EA\u52A8\u6D88\u5931\uFF0C\u9F20\u6807\u60AC\u505C\u53EF\u4EE5\u963B\u6B62\u6D88\u5931\uFF0C\u5355\u4F4D\u6BEB\u79D2\u3002\u666E\u901A\u3001\u6210\u529F\u3001\u63D0\u793A\u7C7B\u9ED8\u8BA4\u4E3A 5000 \u6BEB\u79D2\uFF0C\u9519\u8BEF\u3001\u8B66\u544A\u7C7B\u9ED8\u8BA4\u4E3A 10000 \u6BEB\u79D2</td><td style="text-align:left;"><a href="#%E8%B6%85%E6%97%B6%E6%97%B6%E9%97%B4">\u8D85\u65F6\u65F6\u95F4</a></td></tr><tr><td style="text-align:left;">lifeMode</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">global</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8D85\u65F6\u65F6\u95F4\u6A21\u5F0F\uFF0C\u9884\u8BBE\u503C\u4E3A global \u548C single \u3002\u9ED8\u8BA4\u4E3A global\uFF0C\u6240\u6709\u6D88\u606F\u4F7F\u7528 life \u6216\u7FA4\u7EC4\u7B2C\u4E00\u4E2A\u6D88\u606F\u7684\u9884\u8BBE\u8D85\u65F6\u65F6\u95F4\uFF1B \u8BBE\u7F6E\u4E3A single \u65F6\uFF0C \u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u81EA\u8EAB\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u53C2\u89C1 Message \u4E2D\u7684 life \u5B9A\u4E49</td><td style="text-align:left;"><a href="#%E6%AF%8F%E4%B8%AA%E6%B6%88%E6%81%AF%E4%BD%BF%E7%94%A8%E5%8D%95%E7%8B%AC%E7%9A%84%E8%B6%85%E6%97%B6%E6%97%B6%E9%97%B4">\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u5355\u72EC\u7684\u8D85\u65F6\u65F6\u95F4</a></td></tr><tr><td style="text-align:left;">sticky</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5E38\u9A7B\uFF0C\u9ED8\u8BA4\u81EA\u52A8\u5173\u95ED</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">style</td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6837\u5F0F</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">styleClass</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7C7B\u540D</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr></tbody></table><h3 id="toast-event" tabindex="-1">Toast Event <a class="header-anchor" href="#toast-event" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C</th></tr></thead><tbody><tr><td style="text-align:left;">closeEvent</td><td style="text-align:left;"><code>(message: Message) =&gt; void</code></td><td style="text-align:left;">\u6D88\u606F\u5173\u95ED\u56DE\u8C03</td><td style="text-align:left;"><a href="#%E6%9C%8D%E5%8A%A1%E6%96%B9%E5%BC%8F%E8%B0%83%E7%94%A8">\u670D\u52A1\u65B9\u5F0F\u8C03\u7528</a></td></tr><tr><td style="text-align:left;">valueChange</td><td style="text-align:left;"><code>(messages: Message[]) =&gt; void</code></td><td style="text-align:left;">\u6D88\u606F\u5173\u95ED\u540E\u5269\u4F59\u6D88\u606F\u56DE\u8C03</td><td style="text-align:left;"><a href="#%E6%9C%8D%E5%8A%A1%E6%96%B9%E5%BC%8F%E8%B0%83%E7%94%A8">\u670D\u52A1\u65B9\u5F0F\u8C03\u7528</a></td></tr></tbody></table><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Message</span> <span class="token punctuation">{</span>
  severity<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u9884\u8BBE\u503C\u6709 common\u3001success\u3001error\u3001warn\u3001info\uFF0C\u8D85\u65F6\u65F6\u95F4\u53C2\u89C1 life \u8BF4\u660E\uFF0C\u672A\u8BBE\u7F6E\u6216\u975E\u9884\u8BBE\u503C\u65F6\u8D85\u65F6\u65F6\u95F4\u4E3A 5000 \u6BEB\u79D2\uFF0Cwarn \u548C error \u4E3A 10000 \u6BEB\u79D2</span>
  summary<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u6D88\u606F\u6807\u9898\u3002\u5F53\u8BBE\u7F6E\u8D85\u65F6\u65F6\u95F4\uFF0C\u672A\u8BBE\u7F6E\u6807\u9898\u65F6\uFF0C\u4E0D\u5C55\u793A\u6807\u9898\u548C\u5173\u95ED\u6309\u94AE</span>
  detail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">// \u6D88\u606F\u5185\u5BB9\uFF0C\u63A8\u8350\u4F7F\u7528content\u66FF\u6362</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">slot:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token builtin">string</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token operator">|</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> h<span class="token operator">&gt;</span> <span class="token comment">// \u6D88\u606F\u5185\u5BB9\uFF0C\u652F\u6301\u7EAF\u6587\u672C\u548C\u63D2\u69FD\uFF0C\u63A8\u8350\u4F7F\u7528</span>
  life<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token comment">// \u5355\u4E2A\u6D88\u606F\u8D85\u65F6\u65F6\u95F4\uFF0C\u9700\u8BBE\u7F6E lifeMode \u4E3A single \u3002\u6BCF\u4E2A\u6D88\u606F\u4F7F\u7528\u81EA\u5DF1\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5F00\u542F\u8BE5\u6A21\u5F0F\u5374\u672A\u8BBE\u7F6E\u65F6\u6309 severity \u5224\u65AD\u8D85\u65F6\u65F6\u95F4</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// \u6D88\u606FID</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="service-\u5F15\u5165\u65B9\u5F0F" tabindex="-1">Service \u5F15\u5165\u65B9\u5F0F <a class="header-anchor" href="#service-\u5F15\u5165\u65B9\u5F0F" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ToastService <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;devui&#39;</span>
</code></pre></div><h3 id="service-\u4F7F\u7528" tabindex="-1">Service \u4F7F\u7528 <a class="header-anchor" href="#service-\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token comment">// \u65B9\u5F0F 1\uFF0C\u5C40\u90E8\u5F15\u5165 ToastService</span>
ToastService<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> xxx <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u65B9\u5F0F2\uFF0C\u5168\u5C40\u5C5E\u6027</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$toastService<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span> xxx <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,10);function en(e,s,a,u,c,l){const F=V("render-demo-0"),d=V("demo"),f=V("render-demo-1"),E=V("render-demo-2"),T=V("render-demo-3"),C=V("render-demo-4");return z(),H("div",null,[U,w(d,{sourceCode:`<template>
  <section class="toast-common-demo">
    <d-toast :value="msgs">
      <template v-slot:customTemplate="msg">
        <a class="devui-link" href="http://devui.huawei.com" target="_blank"
          >Back to {{ msg.myInfo }} Home Page</a
        >
      </template>
    </d-toast>
    <d-button bsStyle="success" @click.native="showToast('success')"
      >Success</d-button
    >
    <d-button bsStyle="warning" @click.native="showToast('warn')"
      >Warning</d-button
    >
    <d-button bsStyle="danger" @click.native="showToast('error')"
      >Error</d-button
    >
    <d-button bsStyle="primary" @click.native="showToast('multiple')"
      >Multiple</d-button
    >
    <d-button bsStyle="common" @click.native="showToast('link')">link</d-button>
    <d-button bsStyle="common" @click.native="showToast('plainText')"
      >pure text</d-button
    >
    <d-button bsStyle="common" @click.native="showToast('common')"
      >common</d-button
    >
    <d-button bsStyle="warning" @click.native="showToast('noTitle')"
      >no title</d-button
    >
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const msgs = ref([])

    function showToast(type) {
      switch (type) {
        case 'link':
          msgs.value = [
            {
              severity: 'info',
              summary: 'Relative',
              detail: \`<a href="/home" target="_blank">Back to Home Page</a>\`,
            },
            {
              severity: 'info',
              summary: 'Absolute',
              content: 'slot:customTemplate',
              myInfo: 'Devui',
            },
          ]
          break
        case 'multiple':
          msgs.value = [
            {
              severity: 'info',
              summary: 'Summary',
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
            {
              severity: 'info',
              summary: 'Summary',
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
          ]
          break
        case 'noTitle':
          msgs.value = [
            {
              severity: 'warning',
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
          ]
          break
        case 'plainText':
          msgs.value = [
            {
              severity: 'info',
              content:
                'data\uFF1A<id:gc5aa71bfd86943db9e3e8f34dc347a15><label:content>',
            },
          ]
          break
        default:
          msgs.value = [
            {
              severity: type,
              summary: 'Summary',
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
          ]
      }
    }

    return {
      msgs,
      showToast,
    }
  },
})
<\/script>
<style>
.toast-common-demo .devui-btn {
  margin-right: 10px;
}
</style>
`},{highlight:B(()=>[G]),default:B(()=>[w(F)]),_:1}),J,K,w(d,{sourceCode:`<template>
  <section class="toast-timeout-demo">
    <d-toast :life="5000" :value="msgs2"></d-toast>
    <d-button bsStyle="success" @click.native="showToast2('success')"
      >Success</d-button
    >
    <d-button bsStyle="warning" @click.native="showToast2('warning')"
      >Warning</d-button
    >
    <d-button bsStyle="danger" @click.native="showToast2('error')"
      >Error</d-button
    >
    <d-button bsStyle="common" @click.native="showToast2('common')"
      >common</d-button
    >
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const msgs2 = ref([])

    function showToast2(type) {
      switch (type) {
        case 'error':
          msgs2.value = [
            {
              severity: type,
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
          ]
          break
        case 'common':
          msgs2.value = [
            {
              severity: type,
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
          ]
          break
        default:
          msgs2.value = [
            {
              severity: type,
              summary: 'Summary',
              content:
                'This is a test text. This is a test text. This is a test text.',
            },
          ]
      }
    }

    return {
      msgs2,
      showToast2,
    }
  },
})
<\/script>
<style>
.toast-timeout-demo .devui-btn {
  margin-right: 10px;
}
</style>
`},{highlight:B(()=>[L]),default:B(()=>[w(f)]),_:1}),O,w(d,{sourceCode:`<template>
  <section>
    <d-toast
      :value="msgs3"
      :sticky="true"
      :style="{ top: '20px' }"
      :styleClass="'custom-class'"
    ></d-toast>
    <d-button bsStyle="common" @click.stop="showToast3()"
      >Custom Style</d-button
    >
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const msgs3 = ref([])

    function showToast3() {
      msgs3.value = [
        {
          severity: 'success',
          summary: 'Success',
          content:
            'This is a test text. This is a test text. This is a test text.',
        },
      ]
    }

    return {
      msgs3,
      showToast3,
    }
  },
})
<\/script>
<style lang="scss">
.custom-class {
  .devui-toast-item-container {
    color: #252b3a;
    background-color: #ffffff;

    .devui-toast-icon-close {
      top: 10px;
      right: 13px;

      & i.icon {
        color: #252b3a !important;
      }
    }

    .devui-toast-image {
      top: 15px;
    }

    .devui-toast-message {
      line-height: 23px;

      .devui-toast-title {
        font-size: 16px;
      }

      p {
        font-size: 14px;
      }
    }
  }
}
</style>
`},{highlight:B(()=>[Q]),default:B(()=>[w(E)]),_:1}),X,Y,w(d,{sourceCode:`<template>
  <section>
    <d-toast lifeMode="single" :value="msgs4"></d-toast>
    <d-button bsStyle="common" @click.native="showToast4()">Single</d-button>
  </section>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const msgs4 = ref([])

    function showToast4() {
      msgs4.value = [
        {
          life: 3000,
          summary: 'Summary',
          content:
            'This is a test text. This is a test text. This is a test text.',
        },
        {
          life: 6000,
          severity: 'info',
          summary: 'Summary',
          content:
            'This is a test text. This is a test text. This is a test text.',
        },
        {
          severity: 'success',
          summary: 'Success',
          content:
            'This is a test text. This is a test text. This is a test text.',
        },
        {
          severity: 'warning',
          summary: 'Warning',
          content:
            'This is a test text. This is a test text. This is a test text.',
        },
      ]
    }

    return {
      msgs4,
      showToast4,
    }
  },
})
<\/script>
`},{highlight:B(()=>[Z]),default:B(()=>[w(T)]),_:1}),nn,tn,w(d,{sourceCode:`<template>
  <div class="toast-service-demo">
    <d-button @click.native="openToast()"
      >click me show simplest toast!</d-button
    >
    <d-button v-if="!isShow" @click.native="openToast2()" bsStyle="common"
      >click me show customer toast!</d-button
    >
    <d-button v-if="isShow" @click.native="closeToast2()"
      >click me close customer toast!</d-button
    >
    <d-button v-if="isShow" @click.native="closeToast3()" bsStyle="common"
      >only close first customer toast!</d-button
    >
  </div>
</template>
<script>
import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  setup() {
    const isShow = ref(false)
    const results = ref()
    function openToast() {
      const results = this.$toastService.open({
        value: [
          {
            severity: 'info',
            summary: 'summary',
            content: () => h('p', 2132131),
          },
        ],
      })
      console.log('results', results)
    }
    function openToast2() {
      results.value = this.$toastService.open({
        value: [
          { severity: 'info', summary: 'summary', content: '1. I am content' },
          { severity: 'error', summary: 'summary', content: '2. I am content' },
          { severity: 'error', summary: 'summary', content: '3. I am content' },
        ],
        sticky: true,
        style: { width: '600px', color: 'red' },
        styleClass: 'myCustom-toast',
        life: 5000,
        lifeMode: 'global',
        /*
          \u63A5\u6536\u53D1\u5C04\u8FC7\u6765\u7684\u6570\u636E
        */
        onCloseEvent(value) {
          console.log('closeEvent', value)
        },
        onValueChange(value) {
          console.log('valueChange', value)
        },
      })

      console.log('results', results.value)

      isShow.value = true
    }

    function closeToast2() {
      results.value.toastInstance.close()
      isShow.value = false
    }

    function closeToast3() {
      /*
        1.\u53EF\u4EE5\u6839\u636E\u6307\u5B9A\u4E0B\u6807\u5173\u95ED results.value.toastInstance.close(0);
        2.\u53EF\u4EE5\u6839\u636Evalue\u5BF9\u8C61\u53BB\u5173\u95ED\uFF0C\u4F5C\u7528\u8DDF1\u662F\u7B49\u540C\u7684\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A
      */
      results.value.toastInstance.close({
        severity: 'info',
        summary: 'summary',
        content: '1. I am content',
      })
    }

    return {
      isShow,
      openToast,
      openToast2,
      closeToast2,
      closeToast3,
    }
  },
})
<\/script>
<style>
.toast-service-demo .devui-btn-host {
  margin-right: 10px;
}
</style>
`},{highlight:B(()=>[sn]),default:B(()=>[w(C)]),_:1}),an])}var pn=j(R,[["render",en]]);export{cn as __pageData,pn as default};
