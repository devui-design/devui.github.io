var P=Object.defineProperty;var w=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var A=(s,e,t)=>e in s?P(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,m=(s,e)=>{for(var t in e||(e={}))T.call(e,t)&&A(s,t,e[t]);if(w)for(var t of w(e))S.call(e,t)&&A(s,t,e[t]);return s};import{_ as z,V as d,r as v,c as $,a as b,w as p,d as n,e as a,o as W}from"./app.1c78646e.js";const X={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:s,createVNode:e,openBlock:t,createElementBlock:k}=d;function i(l,g){const u=s("d-tree");return t(),k("div",null,[e(u,{data:l.data},null,8,["data"])])}const{defineComponent:r,ref:c}=d,o=r({setup(){return{data:c([{label:"parent node 1 - expanded",open:!0,disabled:!0,level:1,children:[{label:"parent node 11 - folded",level:2,children:[{label:"leaf node 111",level:3},{label:"leaf node 112",level:3},{label:"leaf node 113",level:3},{label:"leaf node 114",level:3}]},{label:"parent node 12 - folded",disableToggle:!0,level:2,children:[{label:"leaf node 121",level:3},{label:"leaf node 122",level:3},{label:"leaf node 123",level:3},{label:"leaf node 124",level:3}]},{id:"dynamic 12",label:"parent node 13 - without children - dynamic loading",isParent:!0,level:2}]},{label:"parent node 2 - folded",level:1,children:[{label:"parent node 21 - expanded",open:!0,level:2,children:[{label:"leaf node 211",level:3},{label:"leaf node 212",level:3},{label:"leaf node 213",level:3},{label:"leaf node 214",level:3}]},{label:"parent node 22 - folded",level:2,children:[{label:"leaf node 221",level:3},{label:"leaf node 222",level:3},{label:"leaf node 223",level:3},{label:"leaf node 224",level:3}]},{label:"parent node 23 - folded",level:2,children:[{label:"leaf node 231",level:3},{label:"leaf node 232",level:3},{label:"leaf node 233",level:3},{label:"leaf node 234",level:3}]}]},{id:"dynamicNode",label:"parent node 3 - without children - dynamic loading",isParent:!0,level:1,data:{id:"newChildNode",name:"new child node"}}])}}});return m({render:i},o)}(),"render-demo-1":function(){const{resolveComponent:s,createVNode:e,openBlock:t,createElementBlock:k}=d;function i(l,g){const u=s("d-tree");return t(),k("div",null,[e(u,{data:l.data},null,8,["data"])])}const{defineComponent:r,ref:c}=d,o=r({setup(){return{data:c([{label:"parent node 1",level:1,children:[{label:"parent node 11",open:!0,level:2,children:[{label:"parent node 111",level:3,children:[{label:"parent node 1111",level:4,children:[{label:"leaf node 11111",level:5}]}]}]}]},{label:"parent node 2",level:1,children:[{label:"parent node 21",level:2,open:!0,children:[{label:"leaf node 211",level:3},{label:"leaf node 212",level:3},{label:"leaf node 213",level:3},{label:"leaf node 214",level:3},{label:"leaf node 215",level:3}]}]},{label:"parent node 3",level:1,children:[{label:"leaf node 31",level:2,children:[{label:"leaf node 311",level:3,children:[{label:"leaf node 3111",level:4}]}]},{label:"leaf node 32",level:2},{label:"leaf node 33",level:2}]}])}}});return m({render:i},o)}(),"render-demo-2":function(){const{createElementVNode:s,normalizeClass:e,toDisplayString:t,resolveComponent:k,withCtx:i,createVNode:r,openBlock:c,createElementBlock:o}=d,l={style:{width:"100%"}},g=s("div",{class:"tree-title"},[s("h4",null,"Node"),s("h4",null,"Status")],-1),u=s("span",{class:"my-icon-next"},null,-1),_={class:"op-title"},x=s("span",{class:"op-status"},null,-1),h=s("span",{class:"op-icons icon icon-add"},null,-1),F=s("span",{class:"op-icons icon icon-edit"},null,-1),y=s("span",{class:"op-icons icon icon-close"},null,-1),q={class:"op-right"};function N(B,un){const j=k("d-tree");return c(),o("div",null,[s("div",l,[g,r(j,{data:B.data},{default:i(({node:f})=>{var C,E;return[u,s("span",{class:e([((C=f==null?void 0:f.data)==null?void 0:C.type)&&"my-icon",(E=f==null?void 0:f.data)==null?void 0:E.type])},null,2),s("span",_,t(f.label),1),x,h,F,y,s("span",q,t(f.status),1)]}),_:1},8,["data"])])])}const{defineComponent:R,ref:V}=d,D=R({setup(){return{data:V([{label:"parent node 1",data:{type:"mix"},open:!0,status:"status1",children:[{label:"leaf node 1-112121212",data:{type:"mix"},open:!1,status:"status1",children:[{label:"leaf node 1-1-1",data:{type:"ppt"},status:"status2"},{label:"leaf node 1-1-2",data:{type:"xls"},status:"status2"}]},{label:"leaf node 1-2",data:{type:"mix"},open:!1,status:"status1",children:[{label:"leaf node 1-2-1",data:{type:"ppt"},status:"status2"},{label:"leaf node 1-2-2",data:{type:"doc"},status:"status2"}]}]},{label:"parent node 2",data:{type:"ppt"},open:!1,status:"status1",children:[{label:"leaf node 2-1",data:{type:"ppt"},status:"status1"},{label:"leaf node 2-2",data:{type:"ppt"},status:"status1"}]},{label:"parent node 3",data:{type:"xls"},open:!1,status:"status1",children:[{label:"leaf node 3-1",data:{type:"xls"},status:"status1"},{label:"leaf node 3-2",data:{type:"xls"},status:"status1"}]}])}}});return m({render:N},D)}(),"render-demo-3":function(){const{resolveComponent:s,createVNode:e,openBlock:t,createElementBlock:k}=d;function i(l,g){const u=s("d-tree");return t(),k("div",null,[e(u,{data:l.data,checkable:!0},null,8,["data"])])}const{defineComponent:r,ref:c}=d,o=r({setup(){return{data:c([{label:"parent node 1"},{label:"parent node 2",open:!0,children:[{label:"leaf node 2-1",children:[{label:"leaf node 2-1-1"},{label:"leaf node 2-1-2"}]},{label:"leaf node 2-2",open:!0,children:[{label:"leaf node 2-2-1",disabled:!0,isChecked:!0},{label:"leaf node 2-2-2",disableSelect:!0}]}]},{label:"parent node 3",disableToggle:!0,children:[{label:"leaf node 3-1"},{label:"leaf node 3-2"}]},{label:"parent node 4",children:[{label:"leaf node 4-1"},{label:"leaf node 4-2"}]},{label:"parent node 5",children:[{label:"leaf node 5-1"},{label:"leaf node 5-2"}]}])}}});return m({render:i},o)}(),"render-demo-4":function(){const{createElementVNode:s,resolveComponent:e,createVNode:t,openBlock:k,createElementBlock:i}=d,r=s("h6",null,[s("p",null,'checkableRelation = "both"')],-1),c=s("h6",null,[s("p",null,'checkableRelation = "upward"')],-1),o=s("h6",null,[s("p",null,'checkableRelation = "downward"')],-1),l=s("h6",null,[s("p",null,'checkableRelation = "none"')],-1);function g(h,F){const y=e("d-tree");return k(),i("div",null,[r,t(y,{data:h.data,checkable:!0,checkableRelation:"both"},null,8,["data"]),c,t(y,{data:h.data,checkable:!0,checkableRelation:"upward"},null,8,["data"]),o,t(y,{data:h.data,checkable:!0,checkableRelation:"downward"},null,8,["data"]),l,t(y,{data:h.data,checkable:!0,checkableRelation:"none"},null,8,["data"])])}const{defineComponent:u,ref:_}=d,x=u({setup(){return{data:_([{label:"parent node 1 - expanded",open:!0,children:[{label:"parent node 11 - folded",children:[{label:"leaf node 111"},{label:"leaf node 112"},{label:"leaf node 113"},{label:"leaf node 114"}]},{label:"parent node 12 - folded",children:[{label:"leaf node 121"},{label:"leaf node 122"},{label:"leaf node 123"},{label:"leaf node 124"}]},{label:"parent node 13 - without children",isparent:!0}]},{label:"parent node 2 - folded",children:[{label:"parent node 21 - expanded",open:!0,children:[{label:"leaf node 211"},{label:"leaf node 212"},{label:"leaf node 213"},{label:"leaf node 214"}]},{label:"parent node 22 - folded",children:[{label:"leaf node 221"},{label:"leaf node 222"},{label:"leaf node 223"},{label:"leaf node 224"}]},{label:"parent node 23 - folded",children:[{label:"leaf node 231"},{label:"leaf node 232"},{label:"leaf node 233"},{label:"leaf node 234"}]}]}])}}});return m({render:g},x)}(),"render-demo-5":function(){const{resolveComponent:s,createVNode:e,openBlock:t,createElementBlock:k}=d;function i(l,g){const u=s("d-tree");return t(),k("div",null,[e(u,{data:l.data},null,8,["data"])])}const{defineComponent:r,ref:c}=d,o=r({setup(){return{data:c([{label:"parent node 1 - expanded",open:!0,addable:"true",editable:"true",deletable:"true",children:[{label:"parent node 11 - folded",addable:"true",editable:"true",deletable:"true",children:[{label:"leaf node 111",editable:"true",deletable:"true"},{label:"leaf node 112",editable:"true",deletable:"true"},{label:"leaf node 113",editable:"true",deletable:"true"},{label:"leaf node 114",editable:"true",deletable:"true"}]},{label:"parent node 12 - folded",addable:"true",editable:"true",deletable:"true",children:[{label:"leaf node 121",editable:"true",deletable:"true"},{label:"leaf node 122",editable:"true",deletable:"true"},{label:"leaf node 123",editable:"true",deletable:"true"},{label:"leaf node 124",editable:"true",deletable:"true"}]},{label:"parent node 13 - without children",isparent:!0,addable:"true",editable:"true",deletable:"true"}]},{label:"parent node 2 - folded",addable:"true",editable:"true",deletable:"true",children:[{label:"parent node 21 - expanded",open:!0,addable:"true",editable:"true",deletable:"true",children:[{label:"leaf node 211",editable:"true",deletable:"true"},{label:"leaf node 212",editable:"true",deletable:"true"},{label:"leaf node 213",editable:"true",deletable:"true"},{label:"leaf node 214",editable:"true",deletable:"true"}]},{label:"parent node 22 - folded",addable:"true",editable:"true",deletable:"true",children:[{label:"leaf node 221",editable:"true",deletable:"true"},{label:"leaf node 222",editable:"true",deletable:"true"},{label:"leaf node 223",editable:"true",deletable:"true"},{label:"leaf node 224",editable:"true",deletable:"true"}]},{label:"parent node 23 - folded",addable:"true",editable:"true",deletable:"true",children:[{label:"leaf node 231",editable:"true",deletable:"true"},{label:"leaf node 232",editable:"true",deletable:"true"},{label:"leaf node 233",editable:"true",deletable:"true"},{label:"leaf node 234",editable:"true",deletable:"true"}]}]}])}}});return m({render:i},o)}()}},dn='{"title":"Tree \u6811","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u5408\u5E76\u8282\u70B9","slug":"\u5408\u5E76\u8282\u70B9"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u56FE\u6807","slug":"\u81EA\u5B9A\u4E49\u56FE\u6807"},{"level":3,"title":"\u53EF\u52FE\u9009\u6811","slug":"\u53EF\u52FE\u9009\u6811"},{"level":3,"title":"\u63A7\u5236\u7236\u5B50check\u5173\u7CFB","slug":"\u63A7\u5236\u7236\u5B50check\u5173\u7CFB"},{"level":3,"title":"\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u7F16\u8F91\u3001\u5220\u9664\u8282\u70B9","slug":"\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u7F16\u8F91\u3001\u5220\u9664\u8282\u70B9"}],"relativePath":"components/tree/index.md","lastUpdated":1638282474070}',U=n("h1",{id:"tree-\u6811",tabindex:"-1"},[a("Tree \u6811 "),n("a",{class:"header-anchor",href:"#tree-\u6811","aria-hidden":"true"},"#")],-1),G=n("p",null,"\u4E00\u79CD\u8868\u73B0\u5D4C\u5957\u7ED3\u6784\u7684\u7EC4\u4EF6\u3002",-1),H=n("h3",{id:"\u4F55\u65F6\u4F7F\u7528",tabindex:"-1"},[a("\u4F55\u65F6\u4F7F\u7528 "),n("a",{class:"header-anchor",href:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true"},"#")],-1),I=n("p",null,"\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\u6811\u63A7\u4EF6\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00\u6536\u8D77\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002",-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1 - expanded'"),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 11 - folded'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 111'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 112'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 113'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 114'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 12 - folded'"),n("span",{class:"token punctuation"},","),a(`
            disableToggle`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 121'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 122'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 123'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 124'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            id`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dynamic 12'"),n("span",{class:"token punctuation"},","),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 13 - without children - dynamic loading'"),n("span",{class:"token punctuation"},","),a(`
            isParent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 2 - folded'"),n("span",{class:"token punctuation"},","),a(`
        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 21 - expanded'"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 211'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 212'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 213'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 214'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 22 - folded'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 221'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 222'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 223'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 224'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 23 - folded'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 231'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 232'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 233'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 234'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        id`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dynamicNode'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 3 - without children - dynamic loading'"),n("span",{class:"token punctuation"},","),a(`
        isParent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          id`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'newChildNode'"),n("span",{class:"token punctuation"},","),a(`
          name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'new child node'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),K=n("h3",{id:"\u5408\u5E76\u8282\u70B9",tabindex:"-1"},[a("\u5408\u5E76\u8282\u70B9 "),n("a",{class:"header-anchor",href:"#\u5408\u5E76\u8282\u70B9","aria-hidden":"true"},"#")],-1),L=n("div",null,"\u5F53\u8282\u70B9\u4E0B\u53EA\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u65F6\uFF0C\u5408\u5E76\u8BE5\u8282\u70B9\u3002",-1),M=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 11'"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 111'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1111'"),n("span",{class:"token punctuation"},","),a(`
                    level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(`
                    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                      `),n("span",{class:"token punctuation"},"{"),a(`
                        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 11111'"),n("span",{class:"token punctuation"},","),a(`
                        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
                      `),n("span",{class:"token punctuation"},"}"),a(`
                    `),n("span",{class:"token punctuation"},"]"),a(`
                  `),n("span",{class:"token punctuation"},"}"),a(`
                `),n("span",{class:"token punctuation"},"]"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 2'"),n("span",{class:"token punctuation"},","),a(`
        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 21'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 211'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 212'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 213'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 214'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 215'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 3'"),n("span",{class:"token punctuation"},","),a(`
        level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 31'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 311'"),n("span",{class:"token punctuation"},","),a(`
                level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 3111'"),n("span",{class:"token punctuation"},","),a(`
                    level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(`
                  `),n("span",{class:"token punctuation"},"}"),a(`
                `),n("span",{class:"token punctuation"},"]"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 32'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 33'"),n("span",{class:"token punctuation"},","),a(`
            level`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),O=n("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u56FE\u6807 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u56FE\u6807","aria-hidden":"true"},"#")],-1),Q=n("div",null,"\u81EA\u5B9A\u4E49\u64CD\u4F5C\u6309\u94AE\u56FE\u6807\u3001\u8282\u70B9\u56FE\u6807\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tree-title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("Node"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("Status"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ node }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("my-icon-next"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},":class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[node?.data?.type && "),n("span",{class:"token punctuation"},"'"),a("my-icon"),n("span",{class:"token punctuation"},"'"),a(", node?.data?.type]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("op-title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ node.label }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("op-status"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("op-icons icon icon-add"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("op-icons icon icon-edit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("op-icons icon icon-close"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("op-right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ node.status }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 1"'),n("span",{class:"token punctuation"},","),a(`
        data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"mix"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 1-112121212"'),n("span",{class:"token punctuation"},","),a(`
            data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"mix"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
            status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 1-1-1"'),n("span",{class:"token punctuation"},","),a(`
                data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"ppt"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
                status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status2"'),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 1-1-2"'),n("span",{class:"token punctuation"},","),a(`
                data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"xls"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
                status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status2"'),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 1-2"'),n("span",{class:"token punctuation"},","),a(`
            data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"mix"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
            status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 1-2-1"'),n("span",{class:"token punctuation"},","),a(`
                data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"ppt"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
                status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status2"'),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 1-2-2"'),n("span",{class:"token punctuation"},","),a(`
                data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"doc"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
                status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status2"'),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 2"'),n("span",{class:"token punctuation"},","),a(`
        data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"ppt"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-1"'),n("span",{class:"token punctuation"},","),a(`
            data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"ppt"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-2"'),n("span",{class:"token punctuation"},","),a(`
            data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"ppt"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 3"'),n("span",{class:"token punctuation"},","),a(`
        data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"xls"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
        status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 3-1"'),n("span",{class:"token punctuation"},","),a(`
            data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"xls"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 3-2"'),n("span",{class:"token punctuation"},","),a(`
            data`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"xls"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            status`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"status1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`

`),n("span",{class:"token selector"},".my-icon::before"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),a(" italic"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(" 12px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),a(" 14px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" inline-block"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" #fff"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 2px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-icon.doc::before"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token string"},"'W'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #295396"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px #224488 solid"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-icon.pdf::before"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token string"},"'A'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #da0a0a"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px #dd0000 solid"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-icon.xls::before"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token string"},"'X'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #207044"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px #18683c solid"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-icon.ppt::before"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token string"},"'P'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #d14424"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px #dd4422 solid"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-icon.mix::before"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token string"},"'?'"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"font-style"),n("span",{class:"token punctuation"},":"),a(" normal"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #aaaaaa"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px #999999 solid"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".my-icon-next"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".op-title"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" space-between"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 0 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".op-icons"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" inline-block"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),a(" pointer"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" #575d6c"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".op-status"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 12px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 12px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 50%"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #50d4ab"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".op-right"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" absolute"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),a(" 25px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".status-position"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" absolute"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".tree-title"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" space-between"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),a(" 24px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding-right"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".op-icons:focus"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"outline"),n("span",{class:"token punctuation"},":"),a(" none"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".devui-tree-node__edit"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 0 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`


`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Z=n("h3",{id:"\u53EF\u52FE\u9009\u6811",tabindex:"-1"},[a("\u53EF\u52FE\u9009\u6811 "),n("a",{class:"header-anchor",href:"#\u53EF\u52FE\u9009\u6811","aria-hidden":"true"},"#")],-1),nn=n("div",null,"\u53EF\u4EE5\u8FDB\u884C\u52FE\u9009\u7684\u6811\u3002",-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 1"'),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 2"'),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-1"'),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-1-1"'),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-1-2"'),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-2"'),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-2-1"'),n("span",{class:"token punctuation"},","),a(`
                disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
                isChecked`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 2-2-2"'),n("span",{class:"token punctuation"},","),a(`
                disableSelect`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 3"'),n("span",{class:"token punctuation"},","),a(`
        disableToggle`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 3-1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 3-2"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 4"'),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 4-1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 4-2"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"parent node 5"'),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 5-1"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"leaf node 5-2"'),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),sn=n("h3",{id:"\u63A7\u5236\u7236\u5B50check\u5173\u7CFB",tabindex:"-1"},[a("\u63A7\u5236\u7236\u5B50check\u5173\u7CFB "),n("a",{class:"header-anchor",href:"#\u63A7\u5236\u7236\u5B50check\u5173\u7CFB","aria-hidden":"true"},"#")],-1),tn=n("div",null,"\u901A\u8FC7 checkableRelation \u63A7\u5236check\u65F6\u7236\u5B50\u8282\u70B9\u7684\u8868\u73B0\u3002",-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h6")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a('checkableRelation = "both"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h6")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"checkableRelation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("both"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h6")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a('checkableRelation = "upward"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h6")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"checkableRelation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upward"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h6")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a('checkableRelation = "downward"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h6")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"checkableRelation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("downward"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h6")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a('checkableRelation = "none"'),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h6")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"checkableRelation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("none"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1 - expanded'"),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 11 - folded'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 111'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 112'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 113'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 114'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 12 - folded'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 121'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 122'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 123'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 124'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 13 - without children'"),n("span",{class:"token punctuation"},","),a(`
            isparent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 2 - folded'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 21 - expanded'"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 211'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 212'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 213'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 214'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 22 - folded'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 221'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 222'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 223'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 224'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 23 - folded'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 231'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 232'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 233'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 234'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),on=n("h3",{id:"\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u7F16\u8F91\u3001\u5220\u9664\u8282\u70B9",tabindex:"-1"},[a("\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u7F16\u8F91\u3001\u5220\u9664\u8282\u70B9 "),n("a",{class:"header-anchor",href:"#\u6DFB\u52A0\u5B50\u8282\u70B9\uFF0C\u7F16\u8F91\u3001\u5220\u9664\u8282\u70B9","aria-hidden":"true"},"#")],-1),ln=n("div",null,"\u901A\u8FC7 checkableRelation \u63A7\u5236check\u65F6\u7236\u5B50\u8282\u70B9\u7684\u8868\u73B0\u3002",-1),pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1 - expanded'"),n("span",{class:"token punctuation"},","),a(`
        open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
        editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
        deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 11 - folded'"),n("span",{class:"token punctuation"},","),a(`
            addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 111'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 112'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 113'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 114'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 12 - folded'"),n("span",{class:"token punctuation"},","),a(`
            addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 121'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 122'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 123'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 124'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 13 - without children'"),n("span",{class:"token punctuation"},","),a(`
            isparent`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 2 - folded'"),n("span",{class:"token punctuation"},","),a(`
        addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
        editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
        deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 21 - expanded'"),n("span",{class:"token punctuation"},","),a(`
            open`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 211'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 212'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 213'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 214'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 22 - folded'"),n("span",{class:"token punctuation"},","),a(`
            addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 221'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 222'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 223'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 224'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 23 - folded'"),n("span",{class:"token punctuation"},","),a(`
            addable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 231'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 232'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 233'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 234'"),n("span",{class:"token punctuation"},","),a(`
                editable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
                deletable`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'true'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1);function cn(s,e,t,k,i,r){const c=v("render-demo-0"),o=v("demo"),l=v("render-demo-1"),g=v("render-demo-2"),u=v("render-demo-3"),_=v("render-demo-4"),x=v("render-demo-5");return W(),$("div",null,[U,G,H,I,b(o,{sourceCode:`<template>
  <d-tree :data="data"></d-tree>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'parent node 1 - expanded',
        open: true,
        disabled: true,
        level: 1,
        children: [
          {
            label: 'parent node 11 - folded',
            level: 2,
            children: [
              {
                label: 'leaf node 111',
                level: 3,
              },
              {
                label: 'leaf node 112',
                level: 3,
              },
              {
                label: 'leaf node 113',
                level: 3,
              },
              {
                label: 'leaf node 114',
                level: 3,
              }
            ]
          },
          {
            label: 'parent node 12 - folded',
            disableToggle: true,
            level: 2,
            children: [
              {
                label: 'leaf node 121',
                level: 3,
              },
              {
                label: 'leaf node 122',
                level: 3,
              },
              {
                label: 'leaf node 123',
                level: 3,
              },
              {
                label: 'leaf node 124',
                level: 3,
              }
            ]
          },
          {
            id: 'dynamic 12',
            label: 'parent node 13 - without children - dynamic loading',
            isParent: true,
            level: 2,
          }
        ]
      },
      {
        label: 'parent node 2 - folded',
        level: 1,
        children: [
          {
            label: 'parent node 21 - expanded',
            open: true,
            level: 2,
            children: [
              {
                label: 'leaf node 211',
                level: 3,
              },
              {
                label: 'leaf node 212',
                level: 3,
              },
              {
                label: 'leaf node 213',
                level: 3,
              },
              {
                label: 'leaf node 214',
                level: 3,
              }
            ]
          },
          {
            label: 'parent node 22 - folded',
            level: 2,
            children: [
              {
                label: 'leaf node 221',
                level: 3,
              },
              {
                label: 'leaf node 222',
                level: 3,
              },
              {
                label: 'leaf node 223',
                level: 3,
              },
              {
                label: 'leaf node 224',
                level: 3,
              }
            ]
          },
          {
            label: 'parent node 23 - folded',
            level: 2,
            children: [
              {
                label: 'leaf node 231',
                level: 3,
              },
              {
                label: 'leaf node 232',
                level: 3,
              },
              {
                label: 'leaf node 233',
                level: 3,
              },
              {
                label: 'leaf node 234',
                level: 3,
              }
            ]
          }
        ]
      },
      {
        id: 'dynamicNode',
        label: 'parent node 3 - without children - dynamic loading',
        isParent: true,
        level: 1,
        data: {
          id: 'newChildNode',
          name: 'new child node'
        }
      }
    ])

    return {
      data
    }
  }
})
<\/script>
`},{highlight:p(()=>[J]),default:p(()=>[b(c)]),_:1}),K,b(o,{sourceCode:`<template>
  <d-tree :data="data"></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {

    const data = ref([
      {
        label: 'parent node 1',
        level: 1,
        children: [
          {
            label: 'parent node 11',
            open: true,
            level: 2,
            children: [
              {
                label: 'parent node 111',
                level: 3,
                children: [
                  {
                    label: 'parent node 1111',
                    level: 4,
                    children: [
                      {
                        label: 'leaf node 11111',
                        level: 5,
                      }
                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        label: 'parent node 2',
        level: 1,
        children: [
          {
            label: 'parent node 21',
            level: 2,
            open: true,
            children: [
              {
                label: 'leaf node 211',
                level: 3,
              },
              {
                label: 'leaf node 212',
                level: 3,
              },
              {
                label: 'leaf node 213',
                level: 3,
              },
              {
                label: 'leaf node 214',
                level: 3,
              },
              {
                label: 'leaf node 215',
                level: 3,
              },
            ]
          },
        ]
      },
      {
        label: 'parent node 3',
        level: 1,
        children: [
          {
            label: 'leaf node 31',
            level: 2,
            children: [
              {
                label: 'leaf node 311',
                level: 3,
                children: [
                  {
                    label: 'leaf node 3111',
                    level: 4,
                  }
                ]
              }
            ]
          },
          {
            label: 'leaf node 32',
            level: 2,
          },
          {
            label: 'leaf node 33',
            level: 2,
          }
        ]
      }
    ]);
    
    return {
      data
    }
  }
})
<\/script>
`},{description:p(()=>[L]),highlight:p(()=>[M]),default:p(()=>[b(l)]),_:1}),O,b(o,{sourceCode:`<template>
  <div style="width: 100%">
    <div class="tree-title">
      <h4>Node</h4>
      <h4>Status</h4>
    </div>
    <d-tree :data="data">
      <template #default="{ node }">
        <span class="my-icon-next"></span>
        <span :class="[node?.data?.type && 'my-icon', node?.data?.type]" ></span>
        <span class="op-title">{{ node.label }}</span>
        <span class="op-status"></span>
        <span class="op-icons icon icon-add"></span>
        <span class="op-icons icon icon-edit"></span>
        <span class="op-icons icon icon-close"></span>
        <span class="op-right">{{ node.status }}</span>
      </template>
    </d-tree>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {

    const data = ref([
      {
        label: "parent node 1",
        data: { type: "mix" },
        open: true,
        status: "status1",
        children: [
          {
            label: "leaf node 1-112121212",
            data: { type: "mix" },
            open: false,
            status: "status1",
            children: [
              {
                label: "leaf node 1-1-1",
                data: { type: "ppt" },
                status: "status2",
              },
              {
                label: "leaf node 1-1-2",
                data: { type: "xls" },
                status: "status2",
              },
            ],
          },
          {
            label: "leaf node 1-2",
            data: { type: "mix" },
            open: false,
            status: "status1",
            children: [
              {
                label: "leaf node 1-2-1",
                data: { type: "ppt" },
                status: "status2",
              },
              {
                label: "leaf node 1-2-2",
                data: { type: "doc" },
                status: "status2",
              },
            ],
          },
        ],
      },
      {
        label: "parent node 2",
        data: { type: "ppt" },
        open: false,
        status: "status1",
        children: [
          {
            label: "leaf node 2-1",
            data: { type: "ppt" },
            status: "status1",
          },
          {
            label: "leaf node 2-2",
            data: { type: "ppt" },
            status: "status1",
          },
        ],
      },
      {
        label: "parent node 3",
        data: { type: "xls" },
        open: false,
        status: "status1",
        children: [
          {
            label: "leaf node 3-1",
            data: { type: "xls" },
            status: "status1",
          },
          {
            label: "leaf node 3-2",
            data: { type: "xls" },
            status: "status1",
          },
        ],
      },
    ]);
    
    return {
      data
    }
  }
})
<\/script>
<style>

.my-icon::before {
  width: 16px;
  height: 16px;
  font-style: italic;
  font-size: 12px;
  line-height: 14px;
  display: inline-block;
  text-align: center;
  color: #fff;
  border-radius: 2px;
}

.my-icon.doc::before {
  content: 'W';
  background-color: #295396;
  border: 1px #224488 solid;
}

.my-icon.pdf::before {
  content: 'A';
  background-color: #da0a0a;
  border: 1px #dd0000 solid;
}

.my-icon.xls::before {
  content: 'X';
  background-color: #207044;
  border: 1px #18683c solid;
}

.my-icon.ppt::before {
  content: 'P';
  background-color: #d14424;
  border: 1px #dd4422 solid;
}

.my-icon.mix::before {
  content: '?';
  font-style: normal;
  background-color: #aaaaaa;
  border: 1px #999999 solid;
}
.my-icon-next {
  margin-left: 8px;
}

.op-title {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}

.op-icons {
  display: inline-block;
  margin-left: 8px;
  cursor: pointer;
  color: #575d6c;
  font-size: 16px;
}

.op-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #50d4ab;
}

.op-right {
  position: absolute;
  right: 25px;
}

.status-position {
  position: absolute;
  right: 8px;
}

.tree-title {
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 16px;
}

.op-icons:focus {
  outline: none;
}

.devui-tree-node__edit {
  margin: 0 8px;
}


</style>
`},{description:p(()=>[Q]),highlight:p(()=>[Y]),default:p(()=>[b(g)]),_:1}),Z,b(o,{sourceCode:`<template>
  <d-tree :data="data" :checkable="true" ></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: "parent node 1",
      },
      {
        label: "parent node 2",
        open: true,
        children: [
          {
            label: "leaf node 2-1",
            children: [
              {
                label: "leaf node 2-1-1",
              },
              {
                label: "leaf node 2-1-2",
              },
            ],
          },
          {
            label: "leaf node 2-2",
            open: true,
            children: [
              {
                label: "leaf node 2-2-1",
                disabled: true,
                isChecked: true,
              },
              {
                label: "leaf node 2-2-2",
                disableSelect: true,
              },
            ],
          },
        ],
      },
      {
        label: "parent node 3",
        disableToggle: true,
        children: [
          {
            label: "leaf node 3-1",
          },
          {
            label: "leaf node 3-2",
          },
        ],
      },
      {
        label: "parent node 4",
        children: [
          {
            label: "leaf node 4-1",
          },
          {
            label: "leaf node 4-2",
          },
        ],
      },
      {
        label: "parent node 5",
        children: [
          {
            label: "leaf node 5-1",
          },
          {
            label: "leaf node 5-2",
          },
        ],
      },
    ]);
    
    return {
      data,
    }
  }
})
<\/script>
`},{description:p(()=>[nn]),highlight:p(()=>[an]),default:p(()=>[b(u)]),_:1}),sn,b(o,{sourceCode:`<template>
  <h6><p>checkableRelation = "both"</p></h6>
  <d-tree :data="data" :checkable="true" checkableRelation="both" ></d-tree>
  <h6><p>checkableRelation = "upward"</p></h6>
  <d-tree :data="data" :checkable="true" checkableRelation="upward" ></d-tree>
  <h6><p>checkableRelation = "downward"</p></h6>
  <d-tree :data="data" :checkable="true" checkableRelation="downward" ></d-tree>
  <h6><p>checkableRelation = "none"</p></h6>
  <d-tree :data="data" :checkable="true" checkableRelation="none" ></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'parent node 1 - expanded',
        open: true,
        children: [
          {
            label: 'parent node 11 - folded',
            children: [
              {
                label: 'leaf node 111',
              },
              {
                label: 'leaf node 112',
              },
              {
                label: 'leaf node 113',
              },
              {
                label: 'leaf node 114',
              },
            ],
          },
          {
            label: 'parent node 12 - folded',
            children: [
              {
                label: 'leaf node 121',
              },
              {
                label: 'leaf node 122',
              },
              {
                label: 'leaf node 123',
              },
              {
                label: 'leaf node 124',
              },
            ],
          },
          {
            label: 'parent node 13 - without children',
            isparent: true,
          },
        ],
      },
      {
        label: 'parent node 2 - folded',
        children: [
          {
            label: 'parent node 21 - expanded',
            open: true,
            children: [
              {
                label: 'leaf node 211',
              },
              {
                label: 'leaf node 212',
              },
              {
                label: 'leaf node 213',
              },
              {
                label: 'leaf node 214',
              },
            ],
          },
          {
            label: 'parent node 22 - folded',
            children: [
              {
                label: 'leaf node 221',
              },
              {
                label: 'leaf node 222',
              },
              {
                label: 'leaf node 223',
              },
              {
                label: 'leaf node 224',
              },
            ],
          },
          {
            label: 'parent node 23 - folded',
            children: [
              {
                label: 'leaf node 231',
              },
              {
                label: 'leaf node 232',
              },
              {
                label: 'leaf node 233',
              },
              {
                label: 'leaf node 234',
              },
            ],
          },
        ],
      },
    ]);
    
    return {
      data,
    }
  }
})
<\/script>
`},{description:p(()=>[tn]),highlight:p(()=>[en]),default:p(()=>[b(_)]),_:1}),on,b(o,{sourceCode:`<template>
  <d-tree :data="data" ></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'parent node 1 - expanded',
        open: true,
        addable: 'true',
        editable: 'true',
        deletable: 'true',
        children: [
          {
            label: 'parent node 11 - folded',
            addable: 'true',
            editable: 'true',
            deletable: 'true',
            children: [
              {
                label: 'leaf node 111',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 112',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 113',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 114',
                editable: 'true',
                deletable: 'true',
              },
            ],
          },
          {
            label: 'parent node 12 - folded',
            addable: 'true',
            editable: 'true',
            deletable: 'true',
            children: [
              {
                label: 'leaf node 121',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 122',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 123',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 124',
                editable: 'true',
                deletable: 'true',
              },
            ],
          },
          {
            label: 'parent node 13 - without children',
            isparent: true,
            addable: 'true',
            editable: 'true',
            deletable: 'true',
          },
        ],
      },
      {
        label: 'parent node 2 - folded',
        addable: 'true',
        editable: 'true',
        deletable: 'true',
        children: [
          {
            label: 'parent node 21 - expanded',
            open: true,
            addable: 'true',
            editable: 'true',
            deletable: 'true',
            children: [
              {
                label: 'leaf node 211',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 212',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 213',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 214',
                editable: 'true',
                deletable: 'true',
              },
            ],
          },
          {
            label: 'parent node 22 - folded',
            addable: 'true',
            editable: 'true',
            deletable: 'true',
            children: [
              {
                label: 'leaf node 221',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 222',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 223',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 224',
                editable: 'true',
                deletable: 'true',
              },
            ],
          },
          {
            label: 'parent node 23 - folded',
            addable: 'true',
            editable: 'true',
            deletable: 'true',
            children: [
              {
                label: 'leaf node 231',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 232',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 233',
                editable: 'true',
                deletable: 'true',
              },
              {
                label: 'leaf node 234',
                editable: 'true',
                deletable: 'true',
              },
            ],
          },
        ],
      },
    ]);
    
    return {
      data,
    }
  }
})
<\/script>
`},{description:p(()=>[ln]),highlight:p(()=>[pn]),default:p(()=>[b(x)]),_:1})])}var bn=z(X,[["render",cn]]);export{dn as __pageData,bn as default};
