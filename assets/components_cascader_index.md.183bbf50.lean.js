var y=Object.defineProperty;var C=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var A=(t,e,s)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,f=(t,e)=>{for(var s in e||(e={}))x.call(e,s)&&A(t,s,e[s]);if(C)for(var s of C(e))_.call(e,s)&&A(t,s,e[s]);return t};import{_ as w,V as v,r as F,c as D,a as h,w as g,b as L,d as n,e as a,o as q}from"./app.1c78646e.js";const V={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:t,resolveComponent:e,createVNode:s,openBlock:i,createElementBlock:r}=v,k=t("h4",null,"hover mode",-1),l=t("h4",null,"click mode",-1),p=t("h4",null,"data empty",-1),o=t("h4",null,"disabled",-1);function m(u,E){const c=e("d-cascader");return i(),r("div",null,[k,s(c,{options:u.options,placeholder:"\u8BF7\u9009\u62E9",style:{width:"200px"}},null,8,["options"]),l,s(c,{options:u.options2,value:u.value,showPath:"",trigger:"click",placeholder:"\u8BF7\u9009\u62E9",style:{width:"200px"}},null,8,["options","value"]),p,s(c,{options:[],trigger:"click",placeholder:"\u8BF7\u9009\u62E9",style:{width:"200px"}}),o,s(c,{options:[],disabled:"",trigger:"click",placeholder:"\u8BF7\u9009\u62E9",style:{width:"200px"}})])}const{defineComponent:d,reactive:b}=v,B=d({setup(){const u=b([{label:"option1",value:1,children:[{label:"option1-1",value:4,children:[{label:"option1-1-1",value:8,children:[]},{label:"option1-1-2",value:9,children:[{label:"option1-1-2-1",value:81,isLeaf:!0}]}]},{label:"option1-2",value:41,isLeaf:!0},{label:"option1-3",value:42,isLeaf:!0},{label:"option1-4",value:43,isLeaf:!0}]},{label:"option2",value:2,children:[{label:"option2-1",value:5,children:[{label:"option2-1-1",value:51,isLeaf:!0},{label:"option2-1-2",value:61,isLeaf:!0,disabled:!0}]},{label:"option2-2",value:6,children:[{label:"option2-2-1",value:512,isLeaf:!0},{label:"option2-2-2",value:611,isLeaf:!0}]},{label:"option2-3",value:712,isLeaf:!0}]},{label:"option3",value:3,children:[],isLeaf:!0,disabled:!0}]),E=b([{label:"option1.1",value:1,children:[{label:"option1.1-1",value:4,children:[{label:"option1.1-1-1",value:8,children:[]},{label:"option1.1-1-2",value:9,children:[{label:"option1.1-1-2-1",value:81,isLeaf:!0}]}]},{label:"option1.1-2",value:41,isLeaf:!0},{label:"option1.1-3",value:42,isLeaf:!0},{label:"option1.1-4",value:43,isLeaf:!0}]},{label:"option2.1",value:2,children:[{label:"option2.1-1",value:5,children:[{label:"option2.1-1-1",value:51,isLeaf:!0},{label:"option2.1-1-2",value:61,isLeaf:!0,disabled:!0}]},{label:"option2.1-2",value:6,children:[{label:"option2.1-2-1",value:512,isLeaf:!0},{label:"option2.1-2-2",value:611,isLeaf:!0}]},{label:"option2.1-3",value:712,isLeaf:!0}]},{label:"option3.1",value:3,children:[],isLeaf:!0,disabled:!0}]);return{options:u,options2:E,value:[1,4,9,81]}}});return f({render:m},B)}(),"render-demo-1":function(){const{resolveComponent:t,createVNode:e,openBlock:s,createElementBlock:i}=v;function r(o,m){const d=t("d-cascader");return s(),i("div",null,[e(d,{options:o.options,value:o.value1,placeholder:"\u8BF7\u9009\u62E9",trigger:"click",width:300,dropdownWidth:300,multiple:!0},null,8,["options","value"])])}const{defineComponent:k,reactive:l}=v,p=k({setup(){return{options:l([{label:"option1",value:1,children:[{label:"option1-1",value:4,children:[{label:"option1-1-1",value:8,children:[]},{label:"option1-1-2",value:9,children:[{label:"option1-1-2-1",value:81,isLeaf:!0}]}]},{label:"option1-2",value:41,isLeaf:!0},{label:"option1-3",value:42,isLeaf:!0},{label:"option1-4",value:43,isLeaf:!0}],icon:"folder"},{label:"option2",value:2,children:[{label:"option2-1",value:5,children:[{label:"option2-1-1",value:51,isLeaf:!0},{label:"option2-1-2",value:61,isLeaf:!0,disabled:!0}]},{label:"option2-2",value:6,children:[{label:"option2-2-1",value:512,isLeaf:!0},{label:"option2-2-2",value:611,isLeaf:!0}]},{label:"option2-3",value:712,isLeaf:!0}],icon:"folder"},{label:"option3",value:3,children:[],isLeaf:!0,disabled:!0,icon:"folder"}]),value1:[[1,4,8],[1,4,9,81],[1,41]],onToggleChange:b=>{console.log(b)}}}});return f({render:r},p)}()}},U='{"title":"Cascader \u7EA7\u8054\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u9009\u6A21\u5F0F","slug":"\u591A\u9009\u6A21\u5F0F"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"\u63A5\u53E3 & \u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/cascader/index.md","lastUpdated":1637423632775}',N=L('<h1 id="cascader-\u7EA7\u8054\u83DC\u5355" tabindex="-1">Cascader \u7EA7\u8054\u83DC\u5355 <a class="header-anchor" href="#cascader-\u7EA7\u8054\u83DC\u5355" aria-hidden="true">#</a></h1><p>\u4E0B\u62C9\u7EA7\u8054\u83DC\u5355\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u9700\u8981\u4ECE\u4E00\u7EC4\u76F8\u5173\u8054\u7684\u6570\u636E\u96C6\u5408\u8FDB\u884C\u9009\u62E9\uFF0C\u4F8B\u5982\u7701\u5E02\u533A\uFF0C\u516C\u53F8\u5C42\u7EA7\uFF0C\u4E8B\u7269\u5206\u7C7B\u7B49\u3002</li><li>\u4ECE\u4E00\u4E2A\u8F83\u5927\u7684\u6570\u636E\u96C6\u5408\u4E2D\u8FDB\u884C\u9009\u62E9\u65F6\uFF0C\u7528\u591A\u7EA7\u5206\u7C7B\u8FDB\u884C\u5206\u9694\uFF0C\u65B9\u4FBF\u9009\u62E9\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("hover mode"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("click mode"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"showPath"),a(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("click"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("data empty"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("click"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("h4")]),n("span",{class:"token punctuation"},">")]),a("disabled"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("h4")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-cascader")]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("click"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1-2-1'"),n("span",{class:"token punctuation"},","),a(`
                    value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),a(`
                    isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
                  `),n("span",{class:"token punctuation"},"}"),a(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-2'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"41"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-3'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-4'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-1'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-1-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-1-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"61"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
                disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-2'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-2-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"512"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-2-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"611"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-3'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"712"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option3'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-1'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-1-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-1-2-1'"),n("span",{class:"token punctuation"},","),a(`
                    value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),a(`
                    isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
                  `),n("span",{class:"token punctuation"},"}"),a(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-2'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"41"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-3'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1.1-4'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-1'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-1-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"61"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
                disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-2'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-2-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"512"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-2-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"611"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2.1-3'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"712"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option3.1'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      options2`),n("span",{class:"token punctuation"},","),a(`
      value
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),T=n("h3",{id:"\u591A\u9009\u6A21\u5F0F",tabindex:"-1"},[a("\u591A\u9009\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u591A\u9009\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-cascader")]),a(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u9009\u62E9"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("click"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("300"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":dropdownWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("300"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-cascader")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),a(`
                children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-1-2-1'"),n("span",{class:"token punctuation"},","),a(`
                    value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},","),a(`
                    isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
                  `),n("span",{class:"token punctuation"},"}"),a(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-2'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"41"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-3'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"42"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option1-4'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"43"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'folder'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-1'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-1-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"51"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-1-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"61"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
                disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-2'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
            children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-2-1'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"512"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-2-2'"),n("span",{class:"token punctuation"},","),a(`
                value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"611"),n("span",{class:"token punctuation"},","),a(`
                isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option2-3'"),n("span",{class:"token punctuation"},","),a(`
            value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"712"),n("span",{class:"token punctuation"},","),a(`
            isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'folder'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'option3'"),n("span",{class:"token punctuation"},","),a(`
        value `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(`
        children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
        isLeaf`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        disabled`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        icon`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'folder'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" value1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"8"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"81"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"41"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),a(`
    `),n("span",{class:"token comment"},"// const value1 = []"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onToggleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("event"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      value1`),n("span",{class:"token punctuation"},","),a(`
      onToggleChange
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),W=L(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th><th>\u5168\u5C40\u914D\u7F6E\u9879</th></tr></thead><tbody><tr><td style="text-align:center;">trigger</td><td style="text-align:center;"><code>&#39;hover&#39;|&#39;click&#39;</code></td><td style="text-align:center;">&#39;hover&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u5C55\u5F00\u6B21\u7EA7\u83DC\u5355\u7684\u65B9\u5F0F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">options</td><td style="text-align:center;"><a href="#CascaderItem"><code>CascaderItem[]</code></a></td><td style="text-align:center;">[]</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u7EA7\u8054\u5668\u7684\u83DC\u5355\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">placeholder</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6CA1\u6709\u9009\u62E9\u65F6\u7684\u8F93\u5165\u6846\u5C55\u793A\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7EA7\u8054\u5668\u662F\u5426\u7981\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;"><code>number[] | [number[]]</code></td><td style="text-align:center;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u9009\u65F6\u4E3A<code>number[]</code>\uFF0C\u591A\u9009\u65F6\u4E3A<code>[number[]]</code>\uFF0C\u9009\u4E2D\u9879\u7684value\u503C\u96C6\u5408</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">multiple</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7EA7\u8054\u5668\u662F\u5426\u5F00\u542F\u591A\u9009\u6A21\u5F0F\uFF0C\u5F00\u542F\u540E\u4E3A checkbox \u9009\u62E9</td><td><a href="#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;">200</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u4F4D px\uFF0C\u7528\u4E8E\u63A7\u5236\u7EC4\u4EF6\u8F93\u5165\u6846\u5BBD\u5EA6\u548C\u4E0B\u62C9\u7684\u5BBD\u5EA6</td><td><a href="#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr><tr><td style="text-align:center;">dropdownWidth</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;">200</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5355\u4F4D px\uFF0C\u63A7\u5236\u4E0B\u62C9\u5217\u8868\u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u548C\u7EC4\u4EF6\u8F93\u5165\u6846 width \u76F8\u7B49</td><td><a href="#%E5%A4%9A%E9%80%89%E6%A8%A1%E5%BC%8F">\u57FA\u672C\u7528\u6CD5</a></td><td></td></tr></tbody></table><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><ul><li></li></ul><h4 id="cascaderitem" tabindex="-1">CascaderItem <a class="header-anchor" href="#cascaderitem" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">CascaderItem</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> CascaderItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u7528\u6237\u53EF\u4EE5\u4F20\u5165\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5E76\u5728dropDownItemTemplate\u4E2D\u4F7F\u7528</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,6);function $(t,e,s,i,r,k){const l=F("render-demo-0"),p=F("demo"),o=F("render-demo-1");return q(),D("div",null,[N,h(p,{sourceCode:`<template>
  <h4>hover mode</h4>
  <d-cascader :options="options" placeholder="\u8BF7\u9009\u62E9" style="width: 200px"></d-cascader>
  <h4>click mode</h4>
  <d-cascader :options="options2" :value="value" showPath trigger="click" placeholder="\u8BF7\u9009\u62E9" style="width: 200px"></d-cascader>
  <h4>data empty</h4>
  <d-cascader :options="[]" trigger="click" placeholder="\u8BF7\u9009\u62E9" style="width: 200px"></d-cascader>
  <h4>disabled</h4>
  <d-cascader :options="[]" disabled trigger="click" placeholder="\u8BF7\u9009\u62E9" style="width: 200px"></d-cascader>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const options = reactive([
      {
        label: 'option1',
        value : 1,
        children: [
          {
            label: 'option1-1',
            value : 4,
            children: [
              {
                label: 'option1-1-1',
                value : 8,
                children: []
              },
              {
                label: 'option1-1-2',
                value : 9,
                children: [
                  {
                    label: 'option1-1-2-1',
                    value : 81,
                    isLeaf: true
                  }
                ],
              }
            ]
          },
          {
            label: 'option1-2',
            value : 41,
            isLeaf: true
          },
          {
            label: 'option1-3',
            value : 42,
            isLeaf: true
          },
          {
            label: 'option1-4',
            value : 43,
            isLeaf: true
          }
        ],
      },
      {
        label: 'option2',
        value : 2,
        children: [
          {
            label: 'option2-1',
            value : 5,
            children: [
              {
                label: 'option2-1-1',
                value : 51,
                isLeaf: true
              },
              {
                label: 'option2-1-2',
                value : 61,
                isLeaf: true,
                disabled: true
              }
            ]
          },
          {
            label: 'option2-2',
            value : 6,
            children: [
              {
                label: 'option2-2-1',
                value : 512,
                isLeaf: true
              },
              {
                label: 'option2-2-2',
                value : 611,
                isLeaf: true
              }
            ]
          },
          {
            label: 'option2-3',
            value : 712,
            isLeaf: true
          }
        ]
      },
      {
        label: 'option3',
        value : 3,
        children: [],
        isLeaf: true,
        disabled: true
      }
    ])
    const options2 = reactive([
      {
        label: 'option1.1',
        value : 1,
        children: [
          {
            label: 'option1.1-1',
            value : 4,
            children: [
              {
                label: 'option1.1-1-1',
                value : 8,
                children: []
              },
              {
                label: 'option1.1-1-2',
                value : 9,
                children: [
                  {
                    label: 'option1.1-1-2-1',
                    value : 81,
                    isLeaf: true
                  }
                ],
              }
            ]
          },
          {
            label: 'option1.1-2',
            value : 41,
            isLeaf: true
          },
          {
            label: 'option1.1-3',
            value : 42,
            isLeaf: true
          },
          {
            label: 'option1.1-4',
            value : 43,
            isLeaf: true
          }
        ],
      },
      {
        label: 'option2.1',
        value : 2,
        children: [
          {
            label: 'option2.1-1',
            value : 5,
            children: [
              {
                label: 'option2.1-1-1',
                value : 51,
                isLeaf: true
              },
              {
                label: 'option2.1-1-2',
                value : 61,
                isLeaf: true,
                disabled: true
              }
            ]
          },
          {
            label: 'option2.1-2',
            value : 6,
            children: [
              {
                label: 'option2.1-2-1',
                value : 512,
                isLeaf: true
              },
              {
                label: 'option2.1-2-2',
                value : 611,
                isLeaf: true
              }
            ]
          },
          {
            label: 'option2.1-3',
            value : 712,
            isLeaf: true
          }
        ]
      },
      {
        label: 'option3.1',
        value : 3,
        children: [],
        isLeaf: true,
        disabled: true
      }
    ])
    const value = [1, 4, 9, 81]
    return {
      options,
      options2,
      value
    }
  },
})
<\/script>
`},{highlight:g(()=>[I]),default:g(()=>[h(l)]),_:1}),T,h(p,{sourceCode:`<template>
  <d-cascader
    :options="options"
    :value="value1"
    placeholder="\u8BF7\u9009\u62E9"
    trigger="click"
    :width="300"
    :dropdownWidth="300"
    :multiple="true"
  ></d-cascader>
</template>
<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    const options = reactive([
      {
        label: 'option1',
        value : 1,
        children: [
          {
            label: 'option1-1',
            value : 4,
            children: [
              {
                label: 'option1-1-1',
                value : 8,
                children: []
              },
              {
                label: 'option1-1-2',
                value : 9,
                children: [
                  {
                    label: 'option1-1-2-1',
                    value : 81,
                    isLeaf: true
                  }
                ],
              }
            ]
          },
          {
            label: 'option1-2',
            value : 41,
            isLeaf: true
          },
          {
            label: 'option1-3',
            value : 42,
            isLeaf: true
          },
          {
            label: 'option1-4',
            value : 43,
            isLeaf: true
          }
        ],
        icon: 'folder'
      },
      {
        label: 'option2',
        value : 2,
        children: [
          {
            label: 'option2-1',
            value : 5,
            children: [
              {
                label: 'option2-1-1',
                value : 51,
                isLeaf: true
              },
              {
                label: 'option2-1-2',
                value : 61,
                isLeaf: true,
                disabled: true
              }
            ]
          },
          {
            label: 'option2-2',
            value : 6,
            children: [
              {
                label: 'option2-2-1',
                value : 512,
                isLeaf: true
              },
              {
                label: 'option2-2-2',
                value : 611,
                isLeaf: true
              }
            ]
          },
          {
            label: 'option2-3',
            value : 712,
            isLeaf: true
          }
        ],
        icon: 'folder'
      },
      {
        label: 'option3',
        value : 3,
        children: [],
        isLeaf: true,
        disabled: true,
        icon: 'folder'
      }
    ])
    const value1 = [[1, 4, 8], [1, 4, 9, 81], [1, 41]]
    // const value1 = []
    const onToggleChange = (event) => {
      console.log(event)
    }
    return {
      options,
      value1,
      onToggleChange
    }
  }
})
<\/script>
`},{highlight:g(()=>[P]),default:g(()=>[h(o)]),_:1}),W])}var z=w(V,[["render",$]]);export{U as __pageData,z as default};
