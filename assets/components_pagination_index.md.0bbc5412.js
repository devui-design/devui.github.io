var N=Object.defineProperty;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var T=(s,o,k)=>o in s?N(s,o,{enumerable:!0,configurable:!0,writable:!0,value:k}):s[o]=k,w=(s,o)=>{for(var k in o||(o={}))M.call(o,k)&&T(s,k,o[k]);if(D)for(var k of D(o))O.call(o,k)&&T(s,k,o[k]);return s};import{_,V as I,r as B,c as j,a as f,w as A,b as V,d as a,e as n,o as H}from"./app.1c78646e.js";const X={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:o,createVNode:k,openBlock:g,createElementBlock:m}=I,S=s("h5",{style:{padding:"20px 0 10px"}},"size = 'sm'",-1),C=s("h5",{style:{padding:"20px 0 10px"}},"size = 'md'",-1),h=s("h5",{style:{padding:"20px 0 10px"}},"size = 'lg'",-1),E=s("h5",{style:{padding:"20px 0 10px"}},"Custom Style",-1);function F(p,t){const r=o("d-pagination");return g(),m("div",null,[S,k(r,{size:"sm",total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[0]||(t[0]=l=>p.pager.pageSize=l),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[1]||(t[1]=l=>p.pager.pageIndex=l),canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,maxItems:5},null,8,["total","pageSize","pageIndex"]),C,k(r,{total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[2]||(t[2]=l=>p.pager.pageSize=l),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[3]||(t[3]=l=>p.pager.pageIndex=l),canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,maxItems:5},null,8,["total","pageSize","pageIndex"]),h,k(r,{size:"lg",total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[4]||(t[4]=l=>p.pager.pageSize=l),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[5]||(t[5]=l=>p.pager.pageIndex=l),canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,maxItems:5},null,8,["total","pageSize","pageIndex"]),E,k(r,{total:p.pager.total,pageSize:p.pager.pageSize,"onUpdate:pageSize":t[6]||(t[6]=l=>p.pager.pageSize=l),pageIndex:p.pager.pageIndex,"onUpdate:pageIndex":t[7]||(t[7]=l=>p.pager.pageIndex=l),canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,goToText:"Jump to",preLink:p.preLink,nextLink:p.nextLink},null,8,["total","pageSize","pageIndex","preLink","nextLink"])])}const{defineComponent:z,shallowReactive:y,h:u}=I,d=z({setup(){return{pager:y({total:306,pageIndex:5,pageSize:10,pageSizeOptions:[10,20,30,40,50]}),preLink:'<span class="icon-arrow-left"></span>',nextLink:'<span class="icon-arrow-right"></span>'}}});return w({render:F},d)}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:o,createVNode:k,withCtx:g,openBlock:m,createElementBlock:S}=I,C=s("h5",{style:{padding:"20px 0 10px"}},"Simple Mode",-1),h=s("h5",{style:{padding:"20px 0 10px"}},"Super Simple Mode",-1),E=s("h5",{style:{padding:"20px 0 10px"}},'haveConfigMenu = "true"',-1),F=s("div",{class:"pagination-config-item"},[s("div",{class:"config-item-title"},"show field"),s("div",{class:"config-item-words"},"setting")],-1),z=s("div",{class:"pagination-config-item"},[s("div",{class:"config-item-title"},"display method"),s("div",{style:{"padding-left":"8px","margin-top":"4px"}},[s("i",{class:"icon-list-view"}),s("i",{class:"icon-veIcon-briefcase"})])],-1);function y(t,r){const l=o("d-pagination");return m(),S("div",null,[C,k(l,{total:t.pager.total,pageSize:t.pager.pageSize,"onUpdate:pageSize":r[0]||(r[0]=v=>t.pager.pageSize=v),totalItemText:"Total",pageIndex:t.pager.pageIndex,"onUpdate:pageIndex":r[1]||(r[1]=v=>t.pager.pageIndex=v),canViewTotal:!0,canChangePageSize:!0,lite:!0},null,8,["total","pageSize","pageIndex"]),h,k(l,{size:"sm",total:t.pager.total,pageSize:t.pager.pageSize,"onUpdate:pageSize":r[2]||(r[2]=v=>t.pager.pageSize=v),showPageSelector:!1,pageIndex:t.pager.pageIndex,"onUpdate:pageIndex":r[3]||(r[3]=v=>t.pager.pageIndex=v),canChangePageSize:!0,lite:!0},null,8,["total","pageSize","pageIndex"]),E,k(l,{size:"sm",total:t.pager.total,pageSize:t.pager.pageSize,"onUpdate:pageSize":r[4]||(r[4]=v=>t.pager.pageSize=v),showPageSelector:!1,pageIndex:t.pager.pageIndex,"onUpdate:pageIndex":r[5]||(r[5]=v=>t.pager.pageIndex=v),canChangePageSize:!0,lite:!0,haveConfigMenu:!0},{default:g(()=>[F,z]),_:1},8,["total","pageSize","pageIndex"])])}const{defineComponent:u,shallowReactive:d}=I,p=u({setup(){return{pager:d({total:306,pageIndex:5,pageSize:10,pageSizeOptions:[10,20,30,40,50]})}}});return w({render:y},p)}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:o,createVNode:k,openBlock:g,createElementBlock:m}=I,S=s("div",{style:{padding:"20px 0 10px"}},null,-1),C=s("div",{style:{padding:"20px 0 10px"}},null,-1),h=s("div",{style:{padding:"20px 0 10px"}},null,-1);function E(u,d){const p=o("d-pagination");return g(),m("div",null,[S,k(p,{size:"sm",total:u.pager.total,pageSize:u.pager.pageSize,"onUpdate:pageSize":d[0]||(d[0]=t=>u.pager.pageSize=t),pageIndex:u.pager.pageIndex,"onUpdate:pageIndex":d[1]||(d[1]=t=>u.pager.pageIndex=t),maxItems:10,canViewTotal:!0,canJumpPage:!0,canChangePageSize:!0,onPageIndexChange:u.pageIndexChange,onPageSizeChange:u.pageSizeChange},null,8,["total","pageSize","pageIndex","onPageIndexChange","onPageSizeChange"]),C,k(p,{size:"sm",total:u.pager.total,pageSize:u.pager.pageSize,"onUpdate:pageSize":d[2]||(d[2]=t=>u.pager.pageSize=t),pageIndex:u.pager.pageIndex,"onUpdate:pageIndex":d[3]||(d[3]=t=>u.pager.pageIndex=t),maxItems:10,canViewTotal:!0,canJumpPage:!0,showJumpButton:!0,onPageIndexChange:u.pageIndexChange,onPageSizeChange:u.pageSizeChange},null,8,["total","pageSize","pageIndex","onPageIndexChange","onPageSizeChange"]),h,k(p,{size:"sm",total:u.pager.total,pageSize:u.pager.pageSize,"onUpdate:pageSize":d[4]||(d[4]=t=>u.pager.pageSize=t),pageIndex:u.pager.pageIndex,"onUpdate:pageIndex":d[5]||(d[5]=t=>u.pager.pageIndex=t),maxItems:10,canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,autoFixPageIndex:!1,autoHide:!1,onPageIndexChange:u.pageIndexChangeWithoutFix,onPageSizeChange:u.pageSizeChangeWithoutFix,pageSizeOptions:u.pager.pageSizeOptions,pageSizeDirection:["centerUp"]},null,8,["total","pageSize","pageIndex","onPageIndexChange","onPageSizeChange","pageSizeOptions"])])}const{defineComponent:F,shallowReactive:z}=I,y=F({setup(){const u=z({total:306,pageIndex:5,pageSize:10,pageSizeOptions:[10,20,30,40,50]});return{pager:u,pageSizeChange:l=>{u.pageIndex=1,console.log(l,"pageSizeChange")},pageIndexChange:l=>{console.log(l,"pageIndexChange")},pageIndexChangeWithoutFix:l=>{console.log(l,"pageIndexChangeWithoutFix")},pageSizeChangeWithoutFix:l=>{u.pageIndex=1,console.log(l,"pageSizeChangeWithoutFix")}}}});return w({render:E},y)}(),"render-demo-3":function(){const{createElementVNode:s,createTextVNode:o,resolveComponent:k,createVNode:g,withCtx:m,openBlock:S,createElementBlock:C}=I,h=s("h5",{style:{padding:"20px 0 10px"}},[o(" When the value of "),s("code",null,"pageIndex"),o(" exceeds the maximum page number, enable "),s("code",null,"showTruePageIndex"),o(" to display the value of "),s("code",null,"pageIndex")],-1),E=s("h5",{style:{padding:"20px 0 10px"}},[o(" When the value of "),s("code",null,"pageIndex"),o(" exceeds the maximum page number, the "),s("code",null,"showTruePageIndex"),o(" function is disabled and only the maximum page number is displayed. ")],-1),F=s("h5",{style:{padding:"20px 0 10px"}},"Default Mode",-1),z={style:{display:"flex","margin-top":"10px"}},y=o("total = 0"),u=o("total = 5"),d=o("total = 15"),p=s("h5",{style:{padding:"20px 0 10px"}},"Simple Mode",-1),t={style:{display:"flex","margin-top":"10px"}},r=o("total = 0"),l=o("total = 20"),v=o("total = 30000"),L=o("total = 100000"),J=o("index = 2"),U=o("index = 3");function W(c,e){const q=k("d-pagination"),x=k("d-button");return S(),C("div",null,[h,g(q,{size:"sm",total:c.pager1.total,pageSize:c.pager1.pageSize,"onUpdate:pageSize":e[0]||(e[0]=i=>c.pager1.pageSize=i),pageIndex:c.pager1.pageIndex,"onUpdate:pageIndex":e[1]||(e[1]=i=>c.pager1.pageIndex=i),maxItems:5,canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,showTruePageIndex:!0},null,8,["total","pageSize","pageIndex"]),E,g(q,{size:"sm",total:c.pager2.total,pageSize:c.pager2.pageSize,"onUpdate:pageSize":e[2]||(e[2]=i=>c.pager2.pageSize=i),pageIndex:c.pager2.pageIndex,"onUpdate:pageIndex":e[3]||(e[3]=i=>c.pager2.pageIndex=i),canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,maxItems:5,showTruePageIndex:!1},null,8,["total","pageSize","pageIndex"]),F,g(q,{size:"sm",total:c.defaultPager.total,pageSize:c.defaultPager.pageSize,"onUpdate:pageSize":e[4]||(e[4]=i=>c.defaultPager.pageSize=i),pageIndex:c.defaultPager.pageIndex,"onUpdate:pageIndex":e[5]||(e[5]=i=>c.defaultPager.pageIndex=i),canViewTotal:!0,canChangePageSize:!0,canJumpPage:!0,maxItems:5},null,8,["total","pageSize","pageIndex"]),s("div",z,[g(x,{bsStyle:"primary",circled:"true",size:"sm",onClick:e[6]||(e[6]=i=>c.setTotal(0)),width:"200"},{default:m(()=>[y]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[7]||(e[7]=i=>c.setTotal(5)),width:"200"},{default:m(()=>[u]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[8]||(e[8]=i=>c.setTotal(15)),width:"200"},{default:m(()=>[d]),_:1})]),p,g(q,{total:c.litePager.total,pageSize:c.litePager.pageSize,"onUpdate:pageSize":e[9]||(e[9]=i=>c.litePager.pageSize=i),totalItemText:"total",pageIndex:c.litePager.pageIndex,"onUpdate:pageIndex":e[10]||(e[10]=i=>c.litePager.pageIndex=i),canViewTotal:!0,canChangePageSize:!0,lite:!0},null,8,["total","pageSize","pageIndex"]),s("div",t,[g(x,{bsStyle:"primary",circled:"true",size:"sm",onClick:e[11]||(e[11]=i=>c.setLiteTotal(0)),width:"200"},{default:m(()=>[r]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[12]||(e[12]=i=>c.setLiteTotal(20)),width:"200"},{default:m(()=>[l]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[13]||(e[13]=i=>c.setLiteTotal(3e4)),width:"200"},{default:m(()=>[v]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[14]||(e[14]=i=>c.setLiteTotal(1e5)),width:"200"},{default:m(()=>[L]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[15]||(e[15]=i=>c.setIndex(2)),width:"200"},{default:m(()=>[J]),_:1}),g(x,{bsStyle:"common",circled:"true",size:"sm",onClick:e[16]||(e[16]=i=>c.setIndex(3)),width:"200"},{default:m(()=>[U]),_:1})])])}const{defineComponent:R,shallowReactive:P}=I,$=R({setup(){const c=P({total:10,pageIndex:3,pageSize:10}),e=P({total:10,pageIndex:3,pageSize:10}),q=P({total:0,pageIndex:1,pageSize:10}),x=b=>{q.total=b},i=P({total:0,pageIndex:1,pageSize:10});return{pager1:c,pager2:e,defaultPager:q,setTotal:x,litePager:i,setLiteTotal:b=>{i.total=b},setIndex:b=>{i.pageIndex=b}}}});return w({render:W},$)}()}},ra='{"title":"Pagination \u5206\u9875","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u6781\u7B80\u6A21\u5F0F","slug":"\u6781\u7B80\u6A21\u5F0F"},{"level":3,"title":"\u591A\u79CD\u914D\u7F6E","slug":"\u591A\u79CD\u914D\u7F6E"},{"level":3,"title":"\u7279\u6B8A\u60C5\u51B5","slug":"\u7279\u6B8A\u60C5\u51B5"},{"level":3,"title":"\u53C2\u6570","slug":"\u53C2\u6570"}],"relativePath":"components/pagination/index.md","lastUpdated":1638282474066}',Y=V('<h1 id="pagination-\u5206\u9875" tabindex="-1">Pagination \u5206\u9875 <a class="header-anchor" href="#pagination-\u5206\u9875" aria-hidden="true">#</a></h1><p>\u5206\u9875\u5668\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u52A0\u8F7D/\u6E32\u67D3\u6240\u6709\u6570\u636E\u5C06\u82B1\u8D39\u5F88\u591A\u65F6\u95F4\u65F6\uFF0C\u53EF\u4EE5\u5207\u6362\u9875\u7801\u6D4F\u89C8\u6570\u636E\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),G=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("size = 'sm'"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("size = 'md'"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("size = 'lg'"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("lg"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Custom Style"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"goToText"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Jump to"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":preLink"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("preLink"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":nextLink"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("nextLink"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive"),a("span",{class:"token punctuation"},","),n(" h "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"306"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      pageSizeOptions`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},"]"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" preLink "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},`'<span class="icon-arrow-left"></span>'`),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" nextLink "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token string"},`'<span class="icon-arrow-right"></span>'`),a("span",{class:"token punctuation"},";"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},","),n(`
      preLink`),a("span",{class:"token punctuation"},","),n(`
      nextLink
    `),a("span",{class:"token punctuation"},"}"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),K=a("h3",{id:"\u6781\u7B80\u6A21\u5F0F",tabindex:"-1"},[n("\u6781\u7B80\u6A21\u5F0F "),a("a",{class:"header-anchor",href:"#\u6781\u7B80\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),Q=a("p",null,"\u6781\u7B80\u6A21\u5F0F\u9002\u7528\u4E8E\u4E00\u4E9B\u6709\u5927\u91CF\u4FE1\u606F\u7684\u9875\u9762\uFF0C\u53EF\u4EE5\u7B80\u5316\u9875\u9762\u7684\u590D\u6742\u5EA6\u3002",-1),Z=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Simple Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"totalItemText"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("Total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Super Simple Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":showPageSelector"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n('haveConfigMenu = "true"'),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":showPageSelector"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":haveConfigMenu"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pagination-config-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("config-item-title"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("show field"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("config-item-words"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("setting"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pagination-config-item"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("config-item-title"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("display method"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding-left"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 4px")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("i")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon-list-view"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("i")]),a("span",{class:"token punctuation"},">")]),n(`
        `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("i")]),n(),a("span",{class:"token attr-name"},"class"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("icon-veIcon-briefcase"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("i")]),a("span",{class:"token punctuation"},">")]),n(`
      `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-pagination")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"306"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      pageSizeOptions`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},"]"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager
    `),a("span",{class:"token punctuation"},"}"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("style")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token style"},[a("span",{class:"token language-css"},[n(`
`),a("span",{class:"token comment"},"/* \u914D\u7F6E\u4E2D\u7684\u6BCF\u4E00\u9879\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */"),n(`
`),a("span",{class:"token selector"},".pagination-config-item"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"padding-bottom"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"padding-top"),a("span",{class:"token punctuation"},":"),n(" 4px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"border-bottom"),a("span",{class:"token punctuation"},":"),n(" 1px solid $devui-line"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token comment"},"/* \u914D\u7F6E\u4E2D\u6BCF\u4E00\u9879\u7684\u6807\u9898\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */"),n(`
`),a("span",{class:"token selector"},".config-item-title"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),n(" $devui-line"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"padding-left"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),n(" $devui-font-size"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),n(" 1.5"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".config-item-words"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"color"),a("span",{class:"token punctuation"},":"),n(" $devui-text"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"padding-left"),a("span",{class:"token punctuation"},":"),n(" 8px"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"font-size"),a("span",{class:"token punctuation"},":"),n(" $devui-font-size"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 4px"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`

`),a("span",{class:"token selector"},".config-item-words:hover"),n(),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token property"},"background-color"),a("span",{class:"token punctuation"},":"),n(" $devui-area"),a("span",{class:"token punctuation"},";"),n(`
  `),a("span",{class:"token property"},"cursor"),a("span",{class:"token punctuation"},":"),n(" pointer"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token punctuation"},"}"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("style")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),aa=a("h3",{id:"\u591A\u79CD\u914D\u7F6E",tabindex:"-1"},[n("\u591A\u79CD\u914D\u7F6E "),a("a",{class:"header-anchor",href:"#\u591A\u79CD\u914D\u7F6E","aria-hidden":"true"},"#")],-1),na=a("p",null,"\u652F\u6301\u8BBE\u7F6E\u8F93\u5165\u8DF3\u8F6C\u3001\u663E\u793A\u8DF3\u8F6C\u6309\u94AE\uFF1B\u8BBE\u7F6EpageSize\u7B49\u529F\u80FD\u3002",-1),ta=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@pageIndexChange"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageIndexChange"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@pageSizeChange"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageSizeChange"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":showJumpButton"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@pageIndexChange"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageIndexChange"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@pageSizeChange"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageSizeChange"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("10"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":autoFixPageIndex"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":autoHide"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@pageIndexChange"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageIndexChangeWithoutFix"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"@pageSizeChange"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pageSizeChangeWithoutFix"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":pageSizeOptions"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager.pageSizeOptions"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":pageSizeDirection"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("["),a("span",{class:"token punctuation"},"'"),n("centerUp"),a("span",{class:"token punctuation"},"'"),n("]"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"306"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"5"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      pageSizeOptions`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"20"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"30"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"40"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token number"},"50"),a("span",{class:"token punctuation"},"]"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageSizeChange"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},"."),n("pageIndex "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("val"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageSizeChange'"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageIndexChange"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("val"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageIndexChange'"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token punctuation"},"}"),n(`
    
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageIndexChangeWithoutFix"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"pageIndex"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("pageIndex"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageIndexChangeWithoutFix'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"pageSizeChangeWithoutFix"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"pageSize"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},"."),n("pageIndex "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},";"),n(`
      console`),a("span",{class:"token punctuation"},"."),a("span",{class:"token function"},"log"),a("span",{class:"token punctuation"},"("),n("pageSize"),a("span",{class:"token punctuation"},","),n(),a("span",{class:"token string"},"'pageSizeChangeWithoutFix'"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
    `),a("span",{class:"token punctuation"},"}"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager`),a("span",{class:"token punctuation"},","),n(`
      pageSizeChange`),a("span",{class:"token punctuation"},","),n(`
      pageIndexChange`),a("span",{class:"token punctuation"},","),n(`
      pageIndexChangeWithoutFix`),a("span",{class:"token punctuation"},","),n(`
      pageSizeChangeWithoutFix
    `),a("span",{class:"token punctuation"},"}"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),sa=a("h3",{id:"\u7279\u6B8A\u60C5\u51B5",tabindex:"-1"},[n("\u7279\u6B8A\u60C5\u51B5 "),a("a",{class:"header-anchor",href:"#\u7279\u6B8A\u60C5\u51B5","aria-hidden":"true"},"#")],-1),ea=a("p",null,"\u7279\u6B8A\u573A\u666F\u4E0B\u5206\u9875\u5668\u7684\u663E\u793A\u3002",-1),oa=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
  When the value of `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("pageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(" exceeds the maximum page number, enable "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("showTruePageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(" to display the value of  "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("pageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager1.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager1.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager1.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":showTruePageIndex"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
  When the value of `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("pageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(" exceeds the maximum page number, the "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("code")]),a("span",{class:"token punctuation"},">")]),n("showTruePageIndex"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("code")]),a("span",{class:"token punctuation"},">")]),n(` function is disabled and only the maximum page number is displayed.
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager2.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager2.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("pager2.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":showTruePageIndex"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("false"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Default Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("defaultPager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("defaultPager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("defaultPager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canJumpPage"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":maxItems"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("5"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),n(" flex"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("primary"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setTotal(0)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 0"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setTotal(5)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 5"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setTotal(15)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 15"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`

  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("h5")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"padding"),a("span",{class:"token punctuation"},":"),n(" 20px 0 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n("Simple Mode"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("h5")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-pagination")]),n(`
    `),a("span",{class:"token attr-name"},":total"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("litePager.total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageSize")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("litePager.pageSize"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},"totalItemText"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("total"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},[a("span",{class:"token namespace"},"v-model:"),n("pageIndex")]),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("litePager.pageIndex"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canViewTotal"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":canChangePageSize"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
    `),a("span",{class:"token attr-name"},":lite"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(`
  `),a("span",{class:"token punctuation"},"/>")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("div")]),n(),a("span",{class:"token special-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token value css language-css"},[a("span",{class:"token property"},"display"),a("span",{class:"token punctuation"},":"),n(" flex"),a("span",{class:"token punctuation"},";"),n(),a("span",{class:"token property"},"margin-top"),a("span",{class:"token punctuation"},":"),n(" 10px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("primary"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(0)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 0"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(20)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 20"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(30000)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 30000"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setLiteTotal(100000)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("total = 100000"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setIndex(2)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("index = 2"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
    `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("d-button")]),n(),a("span",{class:"token attr-name"},"bsStyle"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("common"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"circled"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("true"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"size"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("sm"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"@click"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("setIndex(3)"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"width"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("200"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),n("index = 3"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("d-button")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("div")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" defineComponent"),a("span",{class:"token punctuation"},","),n(" shallowReactive "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},"'vue'"),n(`

`),a("span",{class:"token keyword"},"export"),n(),a("span",{class:"token keyword"},"default"),n(),a("span",{class:"token function"},"defineComponent"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
  `),a("span",{class:"token function"},"setup"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token punctuation"},"{"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" pager1 "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token keyword"},"const"),n(" pager2 "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"3"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" defaultPager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"setTotal"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      defaultPager`),a("span",{class:"token punctuation"},"."),n("total "),a("span",{class:"token operator"},"="),n(` val
    `),a("span",{class:"token punctuation"},"}"),n(`

    `),a("span",{class:"token keyword"},"const"),n(" litePager "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"shallowReactive"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"{"),n(`
      total`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"0"),a("span",{class:"token punctuation"},","),n(`
      pageIndex`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"1"),a("span",{class:"token punctuation"},","),n(`
      pageSize`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token number"},"10"),n(`
    `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`

    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"setLiteTotal"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      litePager`),a("span",{class:"token punctuation"},"."),n("total "),a("span",{class:"token operator"},"="),n(` val
    `),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token keyword"},"const"),n(),a("span",{class:"token function-variable function"},"setIndex"),n(),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"("),a("span",{class:"token parameter"},"val"),a("span",{class:"token punctuation"},")"),n(),a("span",{class:"token operator"},"=>"),n(),a("span",{class:"token punctuation"},"{"),n(`
      litePager`),a("span",{class:"token punctuation"},"."),n("pageIndex "),a("span",{class:"token operator"},"="),n(` val
    `),a("span",{class:"token punctuation"},"}"),n(`

    `),a("span",{class:"token keyword"},"return"),n(),a("span",{class:"token punctuation"},"{"),n(`
      pager1`),a("span",{class:"token punctuation"},","),n(`
      pager2`),a("span",{class:"token punctuation"},","),n(`
      defaultPager`),a("span",{class:"token punctuation"},","),n(`
      setTotal`),a("span",{class:"token punctuation"},","),n(`
      litePager`),a("span",{class:"token punctuation"},","),n(`
      setLiteTotal`),a("span",{class:"token punctuation"},","),n(`
      setIndex
    `),a("span",{class:"token punctuation"},"}"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},")"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),pa=V(`<h3 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h3><p>d-pagination \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>pageSize</td><td><code>number</code></td><td>10</td><td>\u53EF\u9009\uFF0C\u6BCF\u9875\u663E\u793A\u6700\u5927\u6761\u76EE\u6570\u91CF</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>total</td><td><code>number</code></td><td>0</td><td>\u53EF\u9009\uFF0C\u663E\u793A\u7684\u603B\u6761\u76EE\u6570</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>pageSizeOptions</td><td><code>number[] </code></td><td>10</td><td>\u53EF\u9009\uFF0C\u5206\u9875\u6BCF\u9875\u6700\u5927\u6761\u76EE\u6570\u91CF\u7684\u4E0B\u62C9\u6846\u7684\u6570\u636E\u6E90\uFF0C\u9ED8\u8BA4\u6709\u56DB\u79CD\u9009\u62E9 5, 10, 20, 50</td><td><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td>pageSizeDirection</td><td><code>Array&lt;</code><a href="#appendtobodydirection"><code>AppendToBodyDirection</code></a> <code>|</code> <a href="#connectedposition"><code>ConnectedPosition</code></a><code>&gt;</code></td><td>[&#39;centerDown&#39;, &#39;centerUp&#39;]</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5206\u9875\u6BCF\u9875\u6761\u76EE\u7684\u4E0B\u62C9\u6846\u5C55\u793A\u7684\u65B9\u5411</td><td><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td>pageIndex</td><td><code>number</code></td><td>1</td><td>\u53EF\u9009\uFF0C\u521D\u59CB\u5316\u9875\u7801</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>maxItems</td><td><code>number</code></td><td>10</td><td>\u53EF\u9009\uFF0C\u5206\u9875\u6700\u591A\u663E\u793A\u51E0\u4E2A\u6309\u94AE</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>preLink</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u4E0A\u4E00\u9875\u6309\u94AE\u663E\u793A\u56FE\u6807,\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u5DE6\u7BAD\u5934\u56FE\u6807</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>nextLink</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C \u4E0B\u4E00\u9875\u6309\u94AE\u663E\u793A\u56FE\u6807,\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A\u53F3\u7BAD\u5934\u56FE\u6807</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>size</td><td><code>number</code></td><td>&#39;&#39;</td><td>\u53EF\u9009\uFF0C\u5206\u9875\u7EC4\u4EF6\u5C3A\u5BF8\uFF0C\u6709\u4E09\u79CD\u9009\u62E9 lg,\`\`,sm,\u5206\u522B\u4EE3\u8868\u5927\uFF0C\u4E2D\uFF0C\u5C0F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>canJumpPage</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u5206\u9875\u8F93\u5165\u8DF3\u8F6C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>canChangePageSize</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u7528\u4E8E\u9009\u62E9\u66F4\u6539\u5206\u9875\u6BCF\u9875\u6700\u5927\u6761\u76EE\u6570\u91CF\u7684\u4E0B\u62C9\u6846</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>canViewTotal</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u603B\u6761\u76EE</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>totalItemText</td><td><code>string</code></td><td>&#39;\u6240\u6709\u6761\u76EE&#39;</td><td>\u53EF\u9009\uFF0C\u603B\u6761\u76EE\u6587\u672C</td><td><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td>goToText</td><td><code>string</code></td><td>&#39;\u8DF3\u81F3&#39;</td><td>\u53EF\u9009\uFF0C\u603B\u6761\u76EE\u6587\u672C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>showJumpButton</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u8DF3\u8F6C\u6309\u94AE</td><td><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td>showTruePageIndex</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u9875\u7801\u8D85\u51FA\u5206\u9875\u8303\u56F4\u65F6\u5019\u4E5F\u663E\u793A\u5F53\u524D\u9875\u7801\u7684\u5F00\u5173</td><td><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td>lite</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u5207\u6362\u4E3A\u6781\u7B80\u6A21\u5F0F</td><td><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td>showPageSelector</td><td><code>boolean</code></td><td>true</td><td>\u53EF\u9009\uFF0C<code>\u6781\u7B80\u6A21\u5F0F</code>\u4E0B\u662F\u5426\u663E\u793A\u9875\u7801\u4E0B\u62C9</td><td><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td>haveConfigMenu</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C<code>\u6781\u7B80\u6A21\u5F0F</code>\u4E0B\u662F\u5426\u663E\u793A\u914D\u7F6E</td><td><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td>autoFixPageIndex</td><td><code>boolean</code></td><td>true</td><td>\u53EF\u9009\uFF0C\u6539\u53D8 pageSize \u65F6\u662F\u5426\u81EA\u52A8\u4FEE\u6B63\u9875\u7801\uFF0C\u82E5<code>pageSizeChange</code>\u4E8B\u4EF6\u4E2D\u4F1A\u5BF9<code>pageIndex</code>\u505A\u5904\u7406\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A<code>false</code></td><td><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr><tr><td>autoHide</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u9690\u85CF, autoHide\u4E3A true \u5E76\u4E14 pageSizeOptions\u6700\u5C0F\u503C &gt; total \u4E0D\u5C55\u793A\u5206\u9875</td><td><a href="#%E6%9E%81%E7%AE%80%E6%A8%A1%E5%BC%8F">\u6781\u7B80\u6A21\u5F0F</a></td></tr></tbody></table><p>d-pagination \u4E8B\u4EF6</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>pageIndexChange</td><td><code>EventEmitter&lt;number&gt;</code></td><td>\u53EF\u9009\uFF0C\u9875\u7801\u53D8\u5316\u7684\u56DE\u8C03,\u8FD4\u56DE\u5F53\u524D\u9875\u7801\u503C</td><td><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr><tr><td>pageSizeChange</td><td><code>EventEmitter&lt;number&gt;</code></td><td>\u53EF\u9009\uFF0C\u6BCF\u9875\u6700\u5927\u6761\u76EE\u6570\u91CF\u53D8\u66F4\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u5F53\u524D\u6BCF\u9875\u663E\u793A\u6761\u76EE\u6570</td><td><a href="#%E5%A4%9A%E7%A7%8D%E9%85%8D%E7%BD%AE">\u591A\u79CD\u914D\u7F6E</a></td></tr></tbody></table><p><strong>\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49</strong></p><h5 id="appendtobodydirection" tabindex="-1">AppendToBodyDirection <a class="header-anchor" href="#appendtobodydirection" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AppendToBodyDirection</span> <span class="token operator">=</span> <span class="token string">&#39;rightDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;rightUp&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;leftUp&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;leftDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;centerDown&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;centerUp&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h5 id="connectedposition" tabindex="-1">ConnectedPosition <a class="header-anchor" href="#connectedposition" aria-hidden="true">#</a></h5><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">ConnectedPosition</span> <span class="token punctuation">{</span>
  originX<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">;</span>
  originY<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>

  overlayX<span class="token operator">:</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">;</span>
  overlayY<span class="token operator">:</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span><span class="token punctuation">;</span>

  weight<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  offsetX<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  offsetY<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  panelClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function ua(s,o,k,g,m,S){const C=B("render-demo-0"),h=B("demo"),E=B("render-demo-1"),F=B("render-demo-2"),z=B("render-demo-3");return H(),j("div",null,[Y,f(h,{sourceCode:`<template>
  <h5 style="padding: 20px 0 10px;">size = 'sm'</h5>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :maxItems="5"
  />

  <h5 style="padding: 20px 0 10px;">size = 'md'</h5>
  <d-pagination
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :maxItems="5"
  />

  <h5 style="padding: 20px 0 10px;">size = 'lg'</h5>
  <d-pagination
    size="lg"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :maxItems="5"
  />

  <h5 style="padding: 20px 0 10px;">Custom Style</h5>
  <d-pagination
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    goToText="Jump to"
    :preLink="preLink"
    :nextLink="nextLink"
  />
</template>
<script>
import { defineComponent, shallowReactive, h } from 'vue'

export default defineComponent({
  setup() {
    const pager = shallowReactive({
      total: 306,
      pageIndex: 5,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40, 50]
    })

    const preLink = '<span class="icon-arrow-left"></span>';
    const nextLink = '<span class="icon-arrow-right"></span>';

    return {
      pager,
      preLink,
      nextLink
    }
  }
})
<\/script>
`},{highlight:A(()=>[G]),default:A(()=>[f(C)]),_:1}),K,Q,f(h,{sourceCode:`<template>
  <h5 style="padding: 20px 0 10px;">Simple Mode</h5>
  <d-pagination
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    totalItemText="Total"
    v-model:pageIndex="pager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :lite="true"
  />

  <h5 style="padding: 20px 0 10px;">Super Simple Mode</h5>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    :showPageSelector="false"
    v-model:pageIndex="pager.pageIndex"
    :canChangePageSize="true"
    :lite="true"
  />

  <h5 style="padding: 20px 0 10px;">haveConfigMenu = "true"</h5>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    :showPageSelector="false"
    v-model:pageIndex="pager.pageIndex"
    :canChangePageSize="true"
    :lite="true"
    :haveConfigMenu="true"
  >
    <div class="pagination-config-item">
      <div class="config-item-title">show field</div>
      <div class="config-item-words">setting</div>
    </div>
    <div class="pagination-config-item">
      <div class="config-item-title">display method</div>
      <div style="padding-left: 8px; margin-top: 4px">
        <i class="icon-list-view"></i>
        <i class="icon-veIcon-briefcase"></i>
      </div>
    </div>
  </d-pagination>
</template>
<script>
import { defineComponent, shallowReactive } from 'vue'

export default defineComponent({
  setup() {
    const pager = shallowReactive({
      total: 306,
      pageIndex: 5,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40, 50]
    })

    return {
      pager
    }
  }
})
<\/script>

<style>
/* \u914D\u7F6E\u4E2D\u7684\u6BCF\u4E00\u9879\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */
.pagination-config-item {
  padding-bottom: 8px;
  padding-top: 4px;
  border-bottom: 1px solid $devui-line;
}

/* \u914D\u7F6E\u4E2D\u6BCF\u4E00\u9879\u7684\u6807\u9898\u6837\u5F0F\uFF0C\u81EA\u5B9A\u4E49\u9879\u5EFA\u8BAE\u5E94\u7528\u6B64\u6837\u5F0F\u6216\u5728\u6B64\u57FA\u7840\u4E0A\u4FEE\u6539 */
.config-item-title {
  color: $devui-line;
  padding-left: 8px;
  font-size: $devui-font-size;
  line-height: 1.5;
}

.config-item-words {
  color: $devui-text;
  padding-left: 8px;
  font-size: $devui-font-size;
  margin-top: 4px;
}

.config-item-words:hover {
  background-color: $devui-area;
  cursor: pointer;
}
</style>
`},{highlight:A(()=>[Z]),default:A(()=>[f(E)]),_:1}),aa,na,f(h,{sourceCode:`<template>
  <div style="padding: 20px 0 10px;"></div>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :maxItems="10"
    :canViewTotal="true"
    :canJumpPage="true"
    :canChangePageSize="true"
    @pageIndexChange="pageIndexChange"
    @pageSizeChange="pageSizeChange"
  />

  <div style="padding: 20px 0 10px;"></div>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :maxItems="10"
    :canViewTotal="true"
    :canJumpPage="true"
    :showJumpButton="true"
    @pageIndexChange="pageIndexChange"
    @pageSizeChange="pageSizeChange"
  />

  <div style="padding: 20px 0 10px;"></div>
  <d-pagination
    size="sm"
    :total="pager.total"
    v-model:pageSize="pager.pageSize"
    v-model:pageIndex="pager.pageIndex"
    :maxItems="10"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :autoFixPageIndex="false"
    :autoHide="false"
    @pageIndexChange="pageIndexChangeWithoutFix"
    @pageSizeChange="pageSizeChangeWithoutFix"
    :pageSizeOptions="pager.pageSizeOptions"
    :pageSizeDirection="['centerUp']"
  />
</template>
<script>
import { defineComponent, shallowReactive } from 'vue'

export default defineComponent({
  setup() {
    const pager = shallowReactive({
      total: 306,
      pageIndex: 5,
      pageSize: 10,
      pageSizeOptions: [10, 20, 30, 40, 50]
    })

    const pageSizeChange = (val) => {
      pager.pageIndex = 1;
      console.log(val, 'pageSizeChange')
    }
    const pageIndexChange = (val) => {
      console.log(val, 'pageIndexChange')
    }
    
    const pageIndexChangeWithoutFix = (pageIndex) => {
      console.log(pageIndex, 'pageIndexChangeWithoutFix');
    }
    const pageSizeChangeWithoutFix = (pageSize) => {
      pager.pageIndex = 1;
      console.log(pageSize, 'pageSizeChangeWithoutFix');
    }

    return {
      pager,
      pageSizeChange,
      pageIndexChange,
      pageIndexChangeWithoutFix,
      pageSizeChangeWithoutFix
    }
  }
})
<\/script>
`},{highlight:A(()=>[ta]),default:A(()=>[f(F)]),_:1}),sa,ea,f(h,{sourceCode:`<template>
  <h5 style="padding: 20px 0 10px;">
  When the value of <code>pageIndex</code> exceeds the maximum page number, enable <code>showTruePageIndex</code> to display the value of  <code>pageIndex</code>
  </h5>
  <d-pagination
    size="sm"
    :total="pager1.total"
    v-model:pageSize="pager1.pageSize"
    v-model:pageIndex="pager1.pageIndex"
    :maxItems="5"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :showTruePageIndex="true"
  />

  <h5 style="padding: 20px 0 10px;">
  When the value of <code>pageIndex</code> exceeds the maximum page number, the <code>showTruePageIndex</code> function is disabled and only the maximum page number is displayed.
  </h5>
  <d-pagination
    size="sm"
    :total="pager2.total"
    v-model:pageSize="pager2.pageSize"
    v-model:pageIndex="pager2.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :maxItems="5"
    :showTruePageIndex="false"
  />

  <h5 style="padding: 20px 0 10px;">Default Mode</h5>
  <d-pagination
    size="sm"
    :total="defaultPager.total"
    v-model:pageSize="defaultPager.pageSize"
    v-model:pageIndex="defaultPager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :canJumpPage="true"
    :maxItems="5"
  />
  <div style="display: flex; margin-top: 10px;">
    <d-button bsStyle="primary" circled="true" size="sm" @click="setTotal(0)" width="200">total = 0</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setTotal(5)" width="200">total = 5</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setTotal(15)" width="200">total = 15</d-button>
  </div>

  <h5 style="padding: 20px 0 10px;">Simple Mode</h5>
  <d-pagination
    :total="litePager.total"
    v-model:pageSize="litePager.pageSize"
    totalItemText="total"
    v-model:pageIndex="litePager.pageIndex"
    :canViewTotal="true"
    :canChangePageSize="true"
    :lite="true"
  />
  <div style="display: flex; margin-top: 10px;">
    <d-button bsStyle="primary" circled="true" size="sm" @click="setLiteTotal(0)" width="200">total = 0</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setLiteTotal(20)" width="200">total = 20</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setLiteTotal(30000)" width="200">total = 30000</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setLiteTotal(100000)" width="200">total = 100000</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setIndex(2)" width="200">index = 2</d-button>
    <d-button bsStyle="common" circled="true" size="sm" @click="setIndex(3)" width="200">index = 3</d-button>
  </div>
</template>
<script>
import { defineComponent, shallowReactive } from 'vue'

export default defineComponent({
  setup() {

    const pager1 = shallowReactive({
      total: 10,
      pageIndex: 3,
      pageSize: 10
    })
    const pager2 = shallowReactive({
      total: 10,
      pageIndex: 3,
      pageSize: 10
    })

    const defaultPager = shallowReactive({
      total: 0,
      pageIndex: 1,
      pageSize: 10
    })
    const setTotal = (val) => {
      defaultPager.total = val
    }

    const litePager = shallowReactive({
      total: 0,
      pageIndex: 1,
      pageSize: 10
    })

    const setLiteTotal = (val) => {
      litePager.total = val
    }
    const setIndex = (val) => {
      litePager.pageIndex = val
    }

    return {
      pager1,
      pager2,
      defaultPager,
      setTotal,
      litePager,
      setLiteTotal,
      setIndex
    }
  }
})
<\/script>
`},{highlight:A(()=>[oa]),default:A(()=>[f(z)]),_:1}),pa])}var ga=_(X,[["render",ua]]);export{ra as __pageData,ga as default};
