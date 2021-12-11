var M=Object.defineProperty;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var V=(o,u,a)=>u in o?M(o,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[u]=a,b=(o,u)=>{for(var a in u||(u={}))I.call(u,a)&&V(o,a,u[a]);if(w)for(var a of w(u))j.call(u,a)&&V(o,a,u[a]);return o};import{_ as L,V as F,r as v,c as R,a as m,w as h,b as O,d as n,e as t,o as G}from"./app.1c78646e.js";const K={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:u,withCtx:a,createVNode:l,openBlock:i,createElementBlock:k}=F,r=o("\u6253\u5F00 modal");function p(c,y){const e=u("d-button");return i(),k("div",null,[l(e,{onClick:c.open},{default:a(()=>[r]),_:1},8,["onClick"])])}const{ref:C,defineComponent:d,inject:g,onMounted:E,h:s}=F,f=d({setup(){const c=g("DIALOG_SERVICE_TOKEN");return{open:()=>{const e=c.open({title:"Start Snapshot Version",content:()=>s("div",{},["Modal Content",s("div",{},["name: Tom"]),s("div",{},["age: 10"]),s("div",{},["address: Chengdu"])]),buttons:[{btnStyle:"primary",text:"Ok",handler:()=>e.hide()},{btnStyle:"common",text:"Cancel",handler:()=>e.hide()}]})}}}});return b({render:p},f)}(),"render-demo-1":function(){const{createElementVNode:o,openBlock:u,createElementBlock:a}=F,i=[o("div",null,"\u{1F477}\u65BD\u5DE5\u4E2D",-1)];function k(s,f){return u(),a("div",null,i)}const{ref:r,defineComponent:p,inject:C,onMounted:d,h:g}=F,E=p({setup(){}});return b({render:k},E)}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:u,withCtx:a,createVNode:l,openBlock:i,createElementBlock:k}=F,r=o("click me!");function p(c,y){const e=u("d-button");return i(),k("div",null,[l(e,{btnStyle:"common",onClick:c.open},{default:a(()=>[r]),_:1},8,["onClick"])])}const{ref:C,defineComponent:d,inject:g,onMounted:E,h:s}=F,f=d({setup(){const c=g("DIALOG_SERVICE_TOKEN"),y=()=>{const _=c.open({title:"Start Snapshot Version",content:()=>s("div",{},["Modal Content",s("div",{},["name: Tom"]),s("div",{},["age: 10"]),s("div",{},["address: Chengdu"])]),dialogtype:"standard",beforeHidden:e,backdropCloseable:!0,buttons:[{btnStyle:"primary",text:"Save",handler:()=>_.hide()}]})},e=()=>new Promise(_=>{const S=c.open({width:"300px",maxHeight:"600px",title:"",content:()=>"Do you want to save the modification before closing the page?",backdropCloseable:!1,dialogtype:"warning",buttons:[{btnStyle:"primary",text:"Save",handler(){S.hide(),_(!0)}},{btnStyle:"common",text:"Cancel",handler(){S.hide(),_(!0)}}]})});return{open:y}}});return b({render:p},f)}(),"render-demo-3":function(){const{createTextVNode:o,resolveComponent:u,withCtx:a,createVNode:l,createElementVNode:i,openBlock:k,createElementBlock:r}=F,p={class:"btn-group"},C=o("success"),d=o("fail"),g=o("warning"),E=o("info");function s(B,x){const A=u("d-button");return k(),r("div",null,[i("div",p,[l(A,{btnStyle:"common",onClick:x[0]||(x[0]=D=>B.open("success","\u6210\u529F","Delete [Git] repository successfully."))},{default:a(()=>[C]),_:1}),l(A,{btnStyle:"common",onClick:x[1]||(x[1]=D=>B.open("failed","\u9519\u8BEF","It is failed. if you want to resolve it,please contact the supportor."))},{default:a(()=>[d]),_:1}),l(A,{btnStyle:"common",onClick:x[2]||(x[2]=D=>B.open("warning","\u8B66\u544A","Leaving this page!"))},{default:a(()=>[g]),_:1}),l(A,{btnStyle:"common",onClick:x[3]||(x[3]=D=>B.open("info","\u63D0\u793A","You signed in with another tab or window. Reload to refresh your session."))},{default:a(()=>[E]),_:1})])])}const{ref:f,defineComponent:c,inject:y,onMounted:e,h:_}=F,S=c({setup(){const B=y("DIALOG_SERVICE_TOKEN");return{open:(A,D,N)=>{const T=B.open({title:D,content:()=>_("span",{style:{fontSize:"12px"}},N),dialogType:A,backdropCloseable:!0,buttons:[{btnStyle:"primary",text:"Save",handler:()=>T.hide()}]})}}}});return b({render:s},S)}(),"render-demo-4":function(){const{createTextVNode:o,resolveComponent:u,withCtx:a,createVNode:l,openBlock:i,createElementBlock:k}=F,r=o("\u6253\u5F00 modal");function p(c,y){const e=u("d-button");return i(),k("div",null,[l(e,{onClick:c.open},{default:a(()=>[r]),_:1},8,["onClick"])])}const{ref:C,defineComponent:d,inject:g,onMounted:E,h:s}=F,f=d({setup(){const c=g("DIALOG_SERVICE_TOKEN");return{open:()=>{const e=c.open({title:"Start Snapshot Version",content:()=>s("div",{onMouseover(){e.updateButtonOptions([{disabled:!0}])}},["Modal Content",s("div",{},["name: Tom"]),s("div",{},["age: 10"]),s("div",{},["address: Chengdu"])]),buttons:[{btnStyle:"primary",text:"Ok",handler:()=>e.hide()},{btnStyle:"common",text:"Cancel",handler:()=>e.hide()}]})}}}});return b({render:p},f)}(),"render-demo-5":function(){const{createTextVNode:o,resolveComponent:u,withCtx:a,createVNode:l,openBlock:i,createElementBlock:k}=F,r=o("\u6253\u5F00 modal");function p(c,y){const e=u("d-button");return i(),k("div",null,[l(e,{onClick:c.open},{default:a(()=>[r]),_:1},8,["onClick"])])}const{ref:C,defineComponent:d,inject:g,onMounted:E,h:s}=F,f=d({setup(){const c=g("DIALOG_SERVICE_TOKEN");return{open:()=>{const e=c.open({title:"Start Snapshot Version",content:()=>s("div",{onMouseover(){e.updateButtonOptions([{disabled:!0}])}},["Modal Content",s("div",{},["name: Tom"]),s("div",{},["age: 10"]),s("div",{},["address: Chengdu"])]),buttons:[{btnStyle:"primary",text:"Ok",autofocus:!0,handler:()=>e.hide()},{btnStyle:"common",text:"Cancel",handler:()=>e.hide()}]})}}}});return b({render:p},f)}(),"render-demo-6":function(){const{createTextVNode:o,resolveComponent:u,withCtx:a,createVNode:l,openBlock:i,createElementBlock:k}=F,r=o("\u6253\u5F00 modal");function p(c,y){const e=u("d-button");return i(),k("div",null,[l(e,{onClick:c.open},{default:a(()=>[r]),_:1},8,["onClick"])])}const{ref:C,defineComponent:d,inject:g,onMounted:E,h:s}=F,f=d({setup(){const c=g("DIALOG_SERVICE_TOKEN");return{open:()=>{const e=c.open({bodyScrollable:!1,title:"Start Snapshot Version",content:()=>s("div",{},["Modal Content",s("div",{},["name: Tom"]),s("div",{},["age: 10"]),s("div",{},["address: Chengdu"])]),buttons:[{btnStyle:"primary",text:"Ok",handler:()=>e.hide()},{btnStyle:"common",text:"Cancel",handler:()=>e.hide()}]})}}}});return b({render:p},f)}()}},dn='{"title":"Modal \u6A21\u6001\u5F39\u7A97","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Other","slug":"other"}],"relativePath":"components/modal/index.md","lastUpdated":1636901380141}',q=O('<h1 id="modal-\u6A21\u6001\u5F39\u7A97" tabindex="-1">Modal \u6A21\u6001\u5F39\u7A97 <a class="header-anchor" href="#modal-\u6A21\u6001\u5F39\u7A97" aria-hidden="true">#</a></h1><p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>1.\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 Modal \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002</p><p>2.\u5F39\u7A97\u8D77\u5230\u4E0E\u7528\u6237\u8FDB\u884C\u4EA4\u4E92\u7684\u4F5C\u7528\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u5BF9\u8BDD\u6846\u4E2D\u8F93\u5165\u4FE1\u606F\u3001\u9605\u8BFB\u63D0\u793A\u3001\u8BBE\u7F6E\u9009\u9879\u7B49\u64CD\u4F5C\u3002</p><h4 id="\u6807\u51C6\u5BF9\u8BDD\u6846" tabindex="-1">\u6807\u51C6\u5BF9\u8BDD\u6846 <a class="header-anchor" href="#\u6807\u51C6\u5BF9\u8BDD\u6846" aria-hidden="true">#</a></h4><p>\u4F7F\u7528dialogService\u53EF\u62D6\u62FD\u7684\u6807\u51C6\u5BF9\u8BDD\u6846\u3002</p>',7),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalservice "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DIALOG_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" modalservice"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token string"},"'Modal Content'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Ok'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'common'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h4",{id:"\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u4F7F\u7528modalService\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5BF9\u8BDD\u6846\u5185\u7684\u6240\u6709\u5185\u5BB9\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u{1F477}\u65BD\u5DE5\u4E2D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),Y=n("h4",{id:"\u62E6\u622A\u5BF9\u8BDD\u6846\u5173\u95ED",tabindex:"-1"},[t("\u62E6\u622A\u5BF9\u8BDD\u6846\u5173\u95ED "),n("a",{class:"header-anchor",href:"#\u62E6\u622A\u5BF9\u8BDD\u6846\u5173\u95ED","aria-hidden":"true"},"#")],-1),X=n("p",null,"\u901A\u8FC7 beforeHidden \u8BBE\u7F6E\u5728\u5173\u95ED\u5F39\u51FA\u6846\u65F6\u7684\u62E6\u622A\u65B9\u6CD5\u3002",-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("click me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dialogService "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DIALOG_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" dialogService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token string"},"'Modal Content'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        dialogtype`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'standard'"),n("span",{class:"token punctuation"},","),t(`
        beforeHidden`),n("span",{class:"token operator"},":"),t(" beforeHidden"),n("span",{class:"token punctuation"},","),t(`
        backdropCloseable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Save'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeHidden"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" results "),n("span",{class:"token operator"},"="),t(" dialogService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'300px'"),n("span",{class:"token punctuation"},","),t(`
          maxHeight`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'600px'"),n("span",{class:"token punctuation"},","),t(`
          title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token string"},"'Do you want to save the modification before closing the page?'"),n("span",{class:"token punctuation"},","),t(`
          backdropCloseable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
          dialogtype`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'warning'"),n("span",{class:"token punctuation"},","),t(`
          buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
            text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Save'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"handler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              results`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
              `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'common'"),n("span",{class:"token punctuation"},","),t(`
            text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"handler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              results`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
              `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" open "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),U=n("h4",{id:"\u4FE1\u606F\u63D0\u793A",tabindex:"-1"},[t("\u4FE1\u606F\u63D0\u793A "),n("a",{class:"header-anchor",href:"#\u4FE1\u606F\u63D0\u793A","aria-hidden":"true"},"#")],-1),J=n("p",null,"\u5404\u79CD\u7C7B\u578B\u7684\u4FE1\u606F\u63D0\u793A\u6846\u3002",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("btn-group"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open("),n("span",{class:"token punctuation"},"'"),t("success"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("\u6210\u529F"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("Delete [Git] repository successfully."),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open("),n("span",{class:"token punctuation"},"'"),t("failed"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("\u9519\u8BEF"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("It is failed. if you want to resolve it,please contact the supportor."),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("fail"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open("),n("span",{class:"token punctuation"},"'"),t("warning"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("\u8B66\u544A"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("Leaving this page!"),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"btnStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("common"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open("),n("span",{class:"token punctuation"},"'"),t("info"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("\u63D0\u793A"),n("span",{class:"token punctuation"},"'"),t(", "),n("span",{class:"token punctuation"},"'"),t("You signed in with another tab or window. Reload to refresh your session."),n("span",{class:"token punctuation"},"'"),t(")"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" dialogService "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DIALOG_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("type"),n("span",{class:"token punctuation"},","),t(" title"),n("span",{class:"token punctuation"},","),t(" content")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" dialogService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'span'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t("style"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t("fontSize"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'12px'"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(" content"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        dialogType`),n("span",{class:"token operator"},":"),t(" type"),n("span",{class:"token punctuation"},","),t(`
        backdropCloseable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Save'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" open "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
  `),n("span",{class:"token selector"},".btn-group > *"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h4",{id:"\u66F4\u65B0\u6807\u51C6\u5F39\u51FA\u6846\u6309\u94AE\u72B6\u6001",tabindex:"-1"},[t("\u66F4\u65B0\u6807\u51C6\u5F39\u51FA\u6846\u6309\u94AE\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u66F4\u65B0\u6807\u51C6\u5F39\u51FA\u6846\u6309\u94AE\u72B6\u6001","aria-hidden":"true"},"#")],-1),nn=n("p",null,"\u901A\u8FC7update\u65B9\u6CD5\u6765\u66F4\u65B0dialog\u914D\u7F6E\u7684buttons\u914D\u7F6E\u3002",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalservice "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DIALOG_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" modalservice"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"onMouseover"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"updateButtonOptions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t("disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token string"},"'Modal Content'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Ok'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'common'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),sn=n("h4",{id:"\u914D\u7F6E\u6309\u94AE\u81EA\u52A8\u83B7\u5F97\u7126\u70B9",tabindex:"-1"},[t("\u914D\u7F6E\u6309\u94AE\u81EA\u52A8\u83B7\u5F97\u7126\u70B9 "),n("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6309\u94AE\u81EA\u52A8\u83B7\u5F97\u7126\u70B9","aria-hidden":"true"},"#")],-1),an=n("p",null,"\u914D\u7F6EdialogService\u7684buttons\u4E2D\u7684autofocus\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u6309\u94AE\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\uFF0C\u53EF\u4EE5\u901A\u8FC7\u56DE\u8F66\u76F4\u63A5\u89E6\u53D1\u6309\u94AE\u70B9\u51FB\u3002",-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalservice "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DIALOG_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" modalservice"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"onMouseover"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
              result`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"updateButtonOptions"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t("disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token string"},"'Modal Content'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Ok'"),n("span",{class:"token punctuation"},","),t(`
          autofocus`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'common'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=n("h4",{id:"\u901A\u8FC7\u5916\u5C42fixed\u540C\u65F6\u907F\u514D\u6EDA\u52A8\u548C\u6296\u52A8",tabindex:"-1"},[t("\u901A\u8FC7\u5916\u5C42fixed\u540C\u65F6\u907F\u514D\u6EDA\u52A8\u548C\u6296\u52A8 "),n("a",{class:"header-anchor",href:"#\u901A\u8FC7\u5916\u5C42fixed\u540C\u65F6\u907F\u514D\u6EDA\u52A8\u548C\u6296\u52A8","aria-hidden":"true"},"#")],-1),un=n("p",null,"\u901A\u8FC7\u5916\u5C42fixed\u540C\u65F6\u907F\u514D\u6EDA\u52A8\u548C\u6296\u52A8\uFF0C\u5728\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u65F6\uFF0C\u9875\u9762\u5185\u6240\u6709fixed\u5143\u7D20\u9700\u8981\u7ED9\u5B9A\u5177\u4F53\u7684\u4F4D\u7F6E\u503C\uFF0C\u4F7F\u7528\u9ED8\u8BA4\u5B9A\u4F4D\u503C\u4F1A\u5BFC\u81F4\u4F4D\u7F6E\u504F\u79FB\u3002",-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u6253\u5F00 modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t("ref"),n("span",{class:"token punctuation"},","),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" inject"),n("span",{class:"token punctuation"},","),t(" onMounted"),n("span",{class:"token punctuation"},","),t(" h"),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" modalservice "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"inject"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'DIALOG_SERVICE_TOKEN'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"open"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" result "),n("span",{class:"token operator"},"="),t(" modalservice"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        bodyScrollable`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
        title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Start Snapshot Version'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token string"},"'Modal Content'"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name: Tom'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'age: 10'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'address: Chengdu'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        buttons`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'primary'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Ok'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
          btnStyle`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'common'"),n("span",{class:"token punctuation"},","),t(`
          text`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Cancel'"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"handler"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" result"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),pn=O(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>Modal \u548C Dialog \u5747\u4EE5 service \u65B9\u5F0F\u6765\u6784\u9020\u3002</p><p>\u4ED6\u4EEC\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\u5F15\u5165\uFF1A</p><div class="language-vue"><pre><code>
{
  setup() {
    const modalService = inject(&#39;MODAL_SERVICE_TOKEN&#39;);
    const dialogService = inject(&#39;DIALOG_SERVICE_TOKEN&#39;);
  }
}
</code></pre></div><h4 id="modal" tabindex="-1">Modal <a class="header-anchor" href="#modal" aria-hidden="true">#</a></h4><p>ModalService.open(props: ModalOptions)</p><p>ModalOptions \u5C5E\u6027</p><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u5BBD\u5EA6(e.g &#39;300px&#39;)</td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">1050</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846 z-index \u503C</td></tr><tr><td style="text-align:center;">backdropZIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">1049</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5982\u679C\u4E3A true\uFF0C\u80CC\u666F\u4E0D\u80FD\u6EDA\u52A8</td></tr><tr><td style="text-align:center;">placement</td><td style="text-align:center;"><code>&#39;center&#39; | &#39;top&#39; | &#39;bottom&#39;</code></td><td style="text-align:center;">&#39;center&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u51FA\u73B0\u7684\u4F4D\u7F6E</td></tr><tr><td style="text-align:center;">offsetX</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;0px&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7EB5\u5411\u504F\u79FB</td></tr><tr><td style="text-align:center;">offsetY</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;0px&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u6A2A\u5411\u504F\u79FB</td></tr><tr><td style="text-align:center;">bodyScrollable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0Cmodal \u6253\u5F00\u540E\uFF0Cbody\u662F\u5426\u53EF\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u53EF\u6EDA\u52A8\u3002</td></tr><tr><td style="text-align:center;">backdropCloseable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u662F\u5426\u80FD\u5173\u95ED\u5F39\u51FA\u6846</td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u52A8\u753B</td></tr><tr><td style="text-align:center;">escapable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u80CC\u666F\u89E6\u53D1\u7684\u4E8B\u4EF6</td></tr><tr><td style="text-align:center;">content</td><td style="text-align:center;"><code>Slot</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u5185\u5BB9</td></tr><tr><td style="text-align:center;">onClose</td><td style="text-align:center;"><code>() =&gt; void</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u5173\u95ED\u4E4B\u540E\u56DE\u8C03\u7684\u51FD\u6570</td></tr><tr><td style="text-align:center;">beforeHidden</td><td style="text-align:center;"><code>(() =&gt; Promise&lt;boolean&gt; | boolean) | Promise&lt;boolean&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u7A97\u53E3\u4E4B\u524D\u7684\u56DE\u8C03</td></tr></tbody></table><h4 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-hidden="true">#</a></h4><p>DialogService.open(props: DialogOptions)</p><p>DialogOptions \u5C5E\u6027</p><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u5BBD\u5EA6(e.g &#39;300px&#39;)</td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">1050</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846 z-index \u503C</td></tr><tr><td style="text-align:center;">backdropZIndex</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">1049</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5982\u679C\u4E3A true\uFF0C\u80CC\u666F\u4E0D\u80FD\u6EDA\u52A8</td></tr><tr><td style="text-align:center;">placement</td><td style="text-align:center;"><code>&#39;center&#39; | &#39;top&#39; | &#39;bottom&#39;</code></td><td style="text-align:center;">&#39;center&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u51FA\u73B0\u7684\u4F4D\u7F6E</td></tr><tr><td style="text-align:center;">offsetX</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;0px&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7EB5\u5411\u504F\u79FB</td></tr><tr><td style="text-align:center;">offsetY</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;0px&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u6A2A\u5411\u504F\u79FB</td></tr><tr><td style="text-align:center;">bodyScrollable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0Cmodal \u6253\u5F00\u540E\uFF0Cbody\u662F\u5426\u53EF\u6EDA\u52A8\uFF0C\u9ED8\u8BA4\u53EF\u6EDA\u52A8\u3002</td></tr><tr><td style="text-align:center;">backdropCloseable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u662F\u5426\u80FD\u5173\u95ED\u5F39\u51FA\u6846</td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u52A8\u753B</td></tr><tr><td style="text-align:center;">escapable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u80CC\u666F\u89E6\u53D1\u7684\u4E8B\u4EF6</td></tr><tr><td style="text-align:center;">draggable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u662F\u5426\u53EF\u62D6\u62FD</td></tr><tr><td style="text-align:center;">dialogType</td><td style="text-align:center;"><code>&#39;standard&#39;|&#39;success&#39;|&#39;failed&#39;|&#39;warning&#39;|&#39;info&#39;</code></td><td style="text-align:center;">&#39;standard&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7C7B\u578B\uFF0C\u6709\u56DB\u79CD\u9009\u62E9</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846 title</td></tr><tr><td style="text-align:center;">content</td><td style="text-align:center;"><code>Slot</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u5185\u5BB9\uFF0C\u652F\u6301\u5B57\u7B26\u4E32\u548C\u7EC4\u4EF6</td></tr><tr><td style="text-align:center;">buttons</td><td style="text-align:center;"><code>ButtonOptions[]</code></td><td style="text-align:center;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u6309\u94AE\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49\u6587\u672C\u3001\u6837\u5F0F\u3001\u7981\u7528\u3001\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td style="text-align:center;">onClose</td><td style="text-align:center;"><code>() =&gt; void</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u5173\u95ED\u4E4B\u540E\u56DE\u8C03\u7684\u51FD\u6570</td></tr><tr><td style="text-align:center;">beforeHidden</td><td style="text-align:center;"><code>(() =&gt; Promise&lt;boolean&gt; | boolean) | Promise&lt;boolean&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u7A97\u53E3\u4E4B\u524D\u7684\u56DE\u8C03</td></tr></tbody></table><h3 id="other" tabindex="-1">Other <a class="header-anchor" href="#other" aria-hidden="true">#</a></h3><p>ButtonOptions \u5B9A\u4E49</p><table><thead><tr><th style="text-align:center;">\u5C5E\u6027</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">text</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6309\u94AE\u6587\u672C\u5185\u5BB9</td></tr><tr><td style="text-align:center;">handler</td><td style="text-align:center;"><code>($event: Event) =&gt; void</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6</td></tr><tr><td style="text-align:center;">autofocus</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u52A8\u805A\u7126</td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7981\u7528\u6309\u94AE</td></tr></tbody></table>`,15);function ln(o,u,a,l,i,k){const r=v("render-demo-0"),p=v("demo"),C=v("render-demo-1"),d=v("render-demo-2"),g=v("render-demo-3"),E=v("render-demo-4"),s=v("render-demo-5"),f=v("render-demo-6");return G(),R("div",null,[q,m(p,{sourceCode:`<template>
  <d-button @click="open">\u6253\u5F00 modal</d-button>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
    const modalservice = inject('DIALOG_SERVICE_TOKEN');
    const open = () => {
      const result = modalservice.open({
        title: 'Start Snapshot Version',
        content: () => (
          h('div', {}, [
            'Modal Content',
            h('div', {}, ['name: Tom']),
            h('div', {}, ['age: 10']),
            h('div', {}, ['address: Chengdu']),
          ])
        ),
        buttons: [{
          btnStyle: 'primary',
          text: 'Ok',
          handler: () => result.hide(),
        }, {
          btnStyle: 'common',
          text: 'Cancel',
          handler: () => result.hide()
        }]
      });
    }
    return {
      open,
    }
  }
})
<\/script>
`},{highlight:h(()=>[H]),default:h(()=>[m(r)]),_:1}),P,$,m(p,{sourceCode:`<template>
  <div>\u{1F477}\u65BD\u5DE5\u4E2D</div>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
  }
})
<\/script>

`},{highlight:h(()=>[z]),default:h(()=>[m(C)]),_:1}),Y,X,m(p,{sourceCode:`<template>
  <d-button btnStyle="common" @click="open">click me!</d-button>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
    const dialogService = inject('DIALOG_SERVICE_TOKEN');
    const open = () => {
      const result = dialogService.open({
        title: 'Start Snapshot Version',
        content: () => (
          h('div', {}, [
            'Modal Content',
            h('div', {}, ['name: Tom']),
            h('div', {}, ['age: 10']),
            h('div', {}, ['address: Chengdu']),
          ])
        ),
        dialogtype: 'standard',
        beforeHidden: beforeHidden,
        backdropCloseable: true,
        buttons: [{
          btnStyle: 'primary',
          text: 'Save',
          handler: () => result.hide(),
        }]
      });
    }

    const beforeHidden = () => {
      return new Promise((resolve) => {
        const results = dialogService.open({
          width: '300px',
          maxHeight: '600px',
          title: '',
          content: () => 'Do you want to save the modification before closing the page?',
          backdropCloseable: false,
          dialogtype: 'warning',
          buttons: [{
            btnStyle: 'primary',
            text: 'Save',
            handler() {
              results.hide();
              resolve(true);
            }
          }, {
            btnStyle: 'common',
            text: 'Cancel',
            handler() {
              results.hide();
              resolve(true);
            }
          }]
        });
      });
    }

    return { open };
  }
})
<\/script>

`},{highlight:h(()=>[Z]),default:h(()=>[m(d)]),_:1}),U,J,m(p,{sourceCode:`<template>
  <div class="btn-group">
    <d-button btnStyle="common" @click="open('success', '\u6210\u529F', 'Delete [Git] repository successfully.')">success</d-button>
    <d-button btnStyle="common" @click="open('failed', '\u9519\u8BEF', 'It is failed. if you want to resolve it,please contact the supportor.')">fail</d-button>
    <d-button btnStyle="common" @click="open('warning', '\u8B66\u544A', 'Leaving this page!')">warning</d-button>
    <d-button btnStyle="common" @click="open('info', '\u63D0\u793A', 'You signed in with another tab or window. Reload to refresh your session.')">info</d-button>
  </div>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
    const dialogService = inject('DIALOG_SERVICE_TOKEN');
    const open = (type, title, content) => {
      const result = dialogService.open({
        title,
        content: () => h('span', {style: {fontSize: '12px'} }, content),
        dialogType: type,
        backdropCloseable: true,
        buttons: [{
          btnStyle: 'primary',
          text: 'Save',
          handler: () => result.hide(),
        }]
      });
    }

    return { open };
  }
})
<\/script>
<style>
  .btn-group > * {
    margin-right: 8px;
  }
</style>
`},{highlight:h(()=>[Q]),default:h(()=>[m(g)]),_:1}),W,nn,m(p,{sourceCode:`<template>
  <d-button @click="open">\u6253\u5F00 modal</d-button>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
    const modalservice = inject('DIALOG_SERVICE_TOKEN');
    const open = () => {
      const result = modalservice.open({
        title: 'Start Snapshot Version',
        content: () => (
          h('div', {
            onMouseover() {
              result.updateButtonOptions([{disabled: true}]);
            }
          }, [
            'Modal Content',
            h('div', {}, ['name: Tom']),
            h('div', {}, ['age: 10']),
            h('div', {}, ['address: Chengdu']),
          ])
        ),
        buttons: [{
          btnStyle: 'primary',
          text: 'Ok',
          handler: () => result.hide(),
        }, {
          btnStyle: 'common',
          text: 'Cancel',
          handler: () => result.hide()
        }]
      });
    }
    return {
      open,
    }
  }
})
<\/script>
`},{highlight:h(()=>[tn]),default:h(()=>[m(E)]),_:1}),sn,an,m(p,{sourceCode:`<template>
  <d-button @click="open">\u6253\u5F00 modal</d-button>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
    const modalservice = inject('DIALOG_SERVICE_TOKEN');
    const open = () => {
      const result = modalservice.open({
        title: 'Start Snapshot Version',
        content: () => (
          h('div', {
            onMouseover() {
              result.updateButtonOptions([{disabled: true}]);
            }
          }, [
            'Modal Content',
            h('div', {}, ['name: Tom']),
            h('div', {}, ['age: 10']),
            h('div', {}, ['address: Chengdu']),
          ])
        ),
        buttons: [{
          btnStyle: 'primary',
          text: 'Ok',
          autofocus: true,
          handler: () => result.hide(),
        }, {
          btnStyle: 'common',
          text: 'Cancel',
          handler: () => result.hide()
        }]
      });
    }
    return {
      open,
    }
  }
})
<\/script>
`},{highlight:h(()=>[en]),default:h(()=>[m(s)]),_:1}),on,un,m(p,{sourceCode:`<template>
  <d-button @click="open">\u6253\u5F00 modal</d-button>
</template>
<script>
import {ref, defineComponent, inject, onMounted, h} from 'vue';
export default defineComponent({
  setup() {
    const modalservice = inject('DIALOG_SERVICE_TOKEN');
    const open = () => {
      const result = modalservice.open({
        bodyScrollable: false,
        title: 'Start Snapshot Version',
        content: () => (
          h('div', {}, [
            'Modal Content',
            h('div', {}, ['name: Tom']),
            h('div', {}, ['age: 10']),
            h('div', {}, ['address: Chengdu']),
          ])
        ),
        buttons: [{
          btnStyle: 'primary',
          text: 'Ok',
          handler: () => result.hide(),
        }, {
          btnStyle: 'common',
          text: 'Cancel',
          handler: () => result.hide()
        }]
      });
    }
    return {
      open,
    }
  }
})
<\/script>
`},{highlight:h(()=>[cn]),default:h(()=>[m(f)]),_:1}),pn])}var gn=L(K,[["render",ln]]);export{dn as __pageData,gn as default};
