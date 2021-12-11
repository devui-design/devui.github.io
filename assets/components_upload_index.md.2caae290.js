var tn=Object.defineProperty;var W=Object.getOwnPropertySymbols;var on=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable;var X=(r,i,o)=>i in r?tn(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o,P=(r,i)=>{for(var o in i||(i={}))on.call(i,o)&&X(r,o,i[o]);if(W)for(var o of W(i))en.call(i,o)&&X(r,o,i[o]);return r};import{_ as pn,r as N,c as un,a as b,w as A,b as Y,d as n,e as s,o as ln,V as y}from"./app.1c78646e.js";const cn={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-single-upload");return o(),k("div",null,[i(e,{"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c)},null,8,["file-options","upload-options","uploaded-files"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a={name:"tom",age:11},t=p([]),e=l({accept:"",multiple:!1,webkitdirectory:!1}),c=l({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:a,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"});return{fileOptions:e,uploadedFiles:t,uploadOptions:c}}})}(),"render-demo-1":function(){const{resolveComponent:r,createVNode:i,createTextVNode:o,withCtx:k,createElementVNode:E,openBlock:l,createElementBlock:p}=y,u={style:{"margin-top":"8px"}},a=o("Upload");function t(F,S){const d=r("d-single-upload"),f=r("d-button");return l(),p("div",null,[i(d,{ref:"uploadRef","enable-drop":!0,"file-options":F.fileOptions,"upload-options":F.uploadOptions,"uploaded-files":F.uploadedFiles,"onUpdate:uploaded-files":S[0]||(S[0]=C=>F.uploadedFiles=C),"placeholder-text":"Drag files","without-btn":!0,"before-upload":F.beforeUpload,onSuccessEvent:F.onSuccess,onErrorEvent:F.onError,onFileDrop:F.fileDrop,onFileOver:F.fileOver},null,8,["file-options","upload-options","uploaded-files","before-upload","onSuccessEvent","onErrorEvent","onFileDrop","onFileOver"]),E("div",u,[i(f,{onClick:F.submit},{default:k(()=>[a]),_:1},8,["onClick"])])])}const{reactive:e,ref:c}=y;return P({render:t},{setup(){const F={name:"tom",age:11},S=c(null),d=c([]),f=e({accept:".png,.zip",multiple:!1,webkitdirectory:!1}),C=e({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:F,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"});return{fileOptions:f,uploadedFiles:d,uploadOptions:C,uploadedFiles:d,beforeUpload:x=>(console.log(x),!0),onSuccess:x=>{console.log("success",x)},onError:x=>{console.log(x)},fileDrop:x=>{console.log(x)},fileOver:x=>{console.log(x)},uploadRef:S,submit:()=>{S.value.fileUpload()}}}})}(),"render-demo-2":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-single-upload");return o(),k("div",null,[i(e,{"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c),"placeholder-text":"Upload","before-upload":a.beforeUpload,onSuccessEvent:a.onSuccess,onErrorEvent:a.onError,disabled:!0},null,8,["file-options","upload-options","uploaded-files","before-upload","onSuccessEvent","onErrorEvent"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a={name:"tom",age:11},t=p([]),e=l({accept:"",multiple:!1,webkitdirectory:!1}),c=l({uri:"/upload",headers:{},additionalParameter:a,maximumSize:.5,method:"POST",fileFieldName:"dFile",withCredentials:!0,responseType:"json"});return{fileOptions:e,uploadedFiles:t,uploadOptions:c,beforeUpload:d=>(console.log(d),!0),onSuccess:d=>{console.log("success",d)},onError:d=>{console.log(d)}}}})}(),"render-demo-3":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-multiple-upload");return o(),k("div",null,[i(e,{"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c),onSuccessEvent:a.onSuccess,onErrorEvent:a.onError,showTip:!0,onFileSelect:a.fileSelect},null,8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","onFileSelect"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a={name:"tom",age:11},t=p([]),e=l({accept:"image/png,image/jpeg",multiple:!0,webkitdirectory:!1}),c=l({uri:"http://localhost:4000/files/upload",additionalParameter:a,maximumSize:2,method:"POST",checkSameName:!0});return{fileOptions:e,uploadedFiles:t,uploadOptions:c,beforeUpload:C=>(console.log(C),!0),onSuccess:C=>{console.log("success",C)},onError:C=>{console.log(C)},fileSelect:C=>{console.log("fileSelect ",C)},deleteUploadedFile:C=>{console.log(`delete ${C}`)}}}})}(),"render-demo-4":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-multiple-upload");return o(),k("div",null,[i(e,{"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c),onSuccessEvent:a.onSuccess,onErrorEvent:a.onError,showTip:!0,onFileSelect:a.fileSelect},null,8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","onFileSelect"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a=p([]),t=l({multiple:!0,webkitdirectory:!0}),e=l({uri:"/upload",method:"post",maximumSize:20,checkSameName:!0});return{fileOptions:t,uploadedFiles:a,uploadOptions:e,beforeUpload:f=>(console.log(f),!0),onSuccess:f=>{console.log("success",f)},onError:f=>{console.log(f)},fileSelect:f=>{console.log("fileSelect ",f)},deleteUploadedFile:f=>{console.log(`delete ${f}`)}}}})}(),"render-demo-5":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-multiple-upload");return o(),k("div",null,[i(e,{"enable-drop":!0,"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c),onSuccessEvent:a.onSuccess,onErrorEvent:a.onError,showTip:!0,onFileSelect:a.fileSelect,"one-time-upload":!0,onFileDrop:a.fileDrop,onFileOver:a.fileOver,onDeleteUploadedFileEvent:a.deleteUploadedFile},null,8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","onFileSelect","onFileDrop","onFileOver","onDeleteUploadedFileEvent"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a={name:"tom",age:11},t=p([]),e=l({multiple:!0,accept:".xls,.xlsx,.pages,.mp3,.png",webkitdirectory:!0}),c=l({uri:"/upload",method:"post",additionalParameter:a,maximumSize:20,checkSameName:!0});return{fileOptions:e,uploadedFiles:t,uploadOptions:c,beforeUpload:_=>(console.log(_),!0),onSuccess:_=>{console.log("success",_)},onError:_=>{console.log(_)},fileSelect:_=>{console.log("fileSelect ",_)},deleteUploadedFile:_=>{console.log(`delete ${_}`)},fileDrop:_=>{console.log(_)},fileOver:_=>{console.log(_)}}}})}(),"render-demo-6":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-multiple-upload");return o(),k("div",null,[i(e,{"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c),"placeholder-text":"Upload","before-upload":a.beforeUpload,onSuccessEvent:a.onSuccess,onErrorEvent:a.onError,disabled:!0},null,8,["file-options","upload-options","uploaded-files","before-upload","onSuccessEvent","onErrorEvent"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a={name:"tom",age:11},t=p([]),e=l({accept:"",multiple:!1,webkitdirectory:!1}),c=l({uri:"/upload",headers:{},additionalParameter:a,maximumSize:.5,method:"POST",fileFieldName:"dFile",withCredentials:!0,responseType:"json"});return{fileOptions:e,uploadedFiles:t,uploadOptions:c,beforeUpload:d=>(console.log(d),!0),onSuccess:d=>{console.log("success",d)},onError:d=>{console.log(d)}}}})}(),"render-demo-7":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(t,e){const c=r("d-multiple-upload");return o(),k("div",null,[i(c,{"file-options":t.fileOptions,"upload-options":t.uploadOptions,"uploaded-files":t.uploadedFiles,"onUpdate:uploaded-files":e[0]||(e[0]=O=>t.uploadedFiles=O),"placeholder-text":"\u9009\u62E9\u6587\u4EF6",onSuccessEvent:t.onSuccess1,onErrorEvent:t.onError,onDeleteUploadedFileEvent:t.deleteUploadedFile,showTip:!0,uploadedFiles:t.uploadedFiles,"onUpdate:uploadedFiles":e[1]||(e[1]=O=>t.uploadedFiles=O),"auto-upload":!0},null,8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","onDeleteUploadedFileEvent","uploadedFiles"])])}const{reactive:l,ref:p,watch:u}=y;return P({render:E},{setup(){const t={name:"tom",age:11},e=p([]),c=l({multiple:!0,accept:".xls,.xlsx,.pages,.mp3,.png"}),O=l({uri:"http://localhost:4000/files/upload",method:"post",additionalParameter:t,maximumSize:20,checkSameName:!0}),F=f=>{console.log("success",f,e)},S=f=>{console.log(f)},d=f=>{console.log("deleteUploadedFile ",f)};return u(e,f=>{console.log("uploadedFiles ",f)}),{fileOptions:c,uploadedFiles:e,uploadOptions:O,onSuccess1:F,onError:S,deleteUploadedFile:d}}})}(),"render-demo-8":function(){const{renderList:r,Fragment:i,openBlock:o,createElementBlock:k,toDisplayString:E,createElementVNode:l,createCommentVNode:p,createTextVNode:u,resolveComponent:a,withCtx:t,createBlock:e,createVNode:c}=y,O={class:"upload-row"},F={class:"upload-body"},S={key:0,class:"table preload-files"},d={width:"50%"},f={width:"25%"},C={key:0},V={key:1},_={key:2},L={key:3},R=u(" Delete "),I={key:0,class:"table uploaded-files"},$={width:"50%"},x=l("td",{width:"25%"},[l("span",null,"Uploaded")],-1),J=u(" Delete "),H={class:"upload-btn"},j=u("\u81EA\u5B9A\u4E49\u4E0A\u4F20");function G(g,w){const h=a("d-button"),U=a("d-multiple-upload");return o(),k("div",null,[l("div",O,[l("div",F,[c(U,{"file-options":g.fileOptions,"upload-options":g.uploadOptions,"uploaded-files":g.uploadedFiles,"onUpdate:uploaded-files":w[0]||(w[0]=m=>g.uploadedFiles=m),"placeholder-text":"\u9009\u62E9\u6587\u4EF6",onSuccessEvent:g.onSuccess,onErrorEvent:g.onError,onDeleteUploadedFileEvent:g.deleteUploadedFile,uploadedFiles:g.uploadedFiles,"onUpdate:uploadedFiles":w[1]||(w[1]=m=>g.uploadedFiles=m),setCustomUploadOptions:g.setCustomUploadOptions,withoutBtn:!0,ref:"uploadRef"},{preloadFiles:t(m=>[m.fileUploaders.length>0?(o(),k("table",S,[(o(!0),k(i,null,r(m.fileUploaders,(v,q)=>(o(),k("tr",{key:q,class:"row"},[l("td",d,[l("span",null,E(v.file.name),1)]),l("td",f,[v.status===g.UploadStatus.preLoad?(o(),k("span",C,"preLoad")):p("v-if",!0),v.status===g.UploadStatus.uploading?(o(),k("span",V,"Uploading}")):p("v-if",!0),v.status===g.UploadStatus.uploaded?(o(),k("span",_,"Uploaded")):p("v-if",!0),v.status===g.UploadStatus.failed?(o(),k("span",L,"Upload Failed")):p("v-if",!0)]),l("td",null,[v.status!==g.UploadStatus.uploaded?(o(),e(h,{key:0,size:"xs",disabled:v.status===g.UploadStatus.uploading,onClick:M=>m.deleteFile(v.filePath)},{default:t(()=>[R]),_:2},1032,["disabled","onClick"])):p("v-if",!0)])]))),128))])):p("v-if",!0)]),uploadedFiles:t(m=>[m.uploadedFiles.length>0?(o(),k("table",I,[l("tbody",null,[(o(!0),k(i,null,r(m.uploadedFiles,(v,q)=>(o(),k("tr",{key:q,class:"row"},[l("td",$,[l("span",null,E(v.name),1)]),x,l("td",null,[c(h,{size:"xs",onClick:M=>m.deleteFile(v)},{default:t(()=>[J]),_:2},1032,["onClick"])])]))),128))])])):p("v-if",!0)]),_:1},8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","onDeleteUploadedFileEvent","uploadedFiles","setCustomUploadOptions"])]),l("div",H,[c(h,{type:"primary",onClick:g.submit},{default:t(()=>[j]),_:1},8,["onClick"])])])])}const{reactive:K,ref:D,watch:B}=y;return P({render:G},{setup(){const g={name:"tom",age:11},w=D({preLoad:0,uploading:1,uploaded:2,failed:3}),h=D(null),U=D([]),m=K({multiple:!0,accept:".xls,.xlsx,.pages,.mp3,.png"}),v=K({uri:"http://localhost:4000/files/upload",method:"post",additionalParameter:g,maximumSize:20,checkSameName:!0}),q=z=>{console.log("success",z,U)},M=z=>{console.log(z)},Z=z=>{console.log("deleteUploadedFile ",z)},nn=(z,an)=>{let Q=an;return z.type==="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"&&(Q={uri:"/upload",additionalParameter:g,maximumSize:.1,checkSameName:!0}),z.type==="image/png"&&(Q={uri:"http://localhost:4000/files/upload",additionalParameter:g,maximumSize:.5,checkSameName:!0}),Q},sn=()=>{console.log(h),h.value.fileUpload()};return B(U,z=>{console.log("uploadedFiles ",z)}),{fileOptions:m,uploadedFiles:U,uploadOptions:v,onSuccess:q,onError:M,deleteUploadedFile:Z,setCustomUploadOptions:nn,uploadRef:h,submit:sn,UploadStatus:w}}})}(),"render-demo-9":function(){const{resolveComponent:r,createVNode:i,openBlock:o,createElementBlock:k}=y;function E(a,t){const e=r("d-multiple-upload");return o(),k("div",null,[i(e,{"file-options":a.fileOptions,"upload-options":a.uploadOptions,"uploaded-files":a.uploadedFiles,"onUpdate:uploaded-files":t[0]||(t[0]=c=>a.uploadedFiles=c),"placeholder-text":"Upload",onSuccessEvent:a.onSuccess,onErrorEvent:a.onError,beforeUpload:a.beforeUpload},null,8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","beforeUpload"])])}const{reactive:l,ref:p}=y;return P({render:E},{setup(){const a={name:"tom",age:11},t=p([]),e=l({accept:"",multiple:!1,webkitdirectory:!1}),c=l({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:a,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"});return{fileOptions:e,uploadedFiles:t,uploadOptions:c,beforeUpload:d=>{if(!(!d||!d.length))return d[0].uploadOptions.uri="/upload2",console.log(d),!0},onSuccess:d=>{console.log("success",d)},onError:d=>{console.log(d)}}}})}(),"render-demo-10":function(){const{createTextVNode:r,resolveComponent:i,withCtx:o,createVNode:k,renderList:E,Fragment:l,openBlock:p,createElementBlock:u,toDisplayString:a,createElementVNode:t,createCommentVNode:e,createBlock:c}=y,O=r("\u9009\u53D6\u6587\u4EF6"),F={key:0,class:"table preload-files"},S={width:"50%"},d={width:"25%"},f={key:0},C={key:1},V={key:2},_={key:3},L=r(" Delete "),R={key:0,class:"table uploaded-files"},I={width:"50%"},$=t("td",{width:"25%"},[t("span",null,"Uploaded")],-1),x=r(" Delete ");function J(D,B){const T=i("d-button"),g=i("d-single-upload");return p(),u("div",null,[k(g,{"file-options":D.fileOptions,"upload-options":D.uploadOptions,"uploaded-files":D.uploadedFiles,"onUpdate:uploaded-files":B[0]||(B[0]=w=>D.uploadedFiles=w),"placeholder-text":"Upload",onSuccessEvent:D.onSuccess,onErrorEvent:D.onError,beforeUpload:D.beforeUpload,showTip:!0},{preloadFiles:o(w=>[w.fileUploaders.length>0?(p(),u("table",F,[(p(!0),u(l,null,E(w.fileUploaders,(h,U)=>(p(),u("tr",{key:U,class:"row"},[t("td",S,[t("span",null,a(h.file.name),1)]),t("td",d,[h.status===D.UploadStatus.preLoad?(p(),u("span",f,"preLoad")):e("v-if",!0),h.status===D.UploadStatus.uploading?(p(),u("span",C,"Uploading}")):e("v-if",!0),h.status===D.UploadStatus.uploaded?(p(),u("span",V,"Uploaded")):e("v-if",!0),h.status===D.UploadStatus.failed?(p(),u("span",_,"Upload Failed")):e("v-if",!0)]),t("td",null,[h.status!==D.UploadStatus.uploaded?(p(),c(T,{key:0,size:"xs",disabled:h.status===D.UploadStatus.uploading,onClick:m=>w.deleteFile(m)},{default:o(()=>[L]),_:2},1032,["disabled","onClick"])):e("v-if",!0)])]))),128))])):e("v-if",!0)]),uploadedFiles:o(w=>[w.uploadedFiles.length>0?(p(),u("table",R,[t("tbody",null,[(p(!0),u(l,null,E(w.uploadedFiles,(h,U)=>(p(),u("tr",{key:U,class:"row"},[t("td",I,[t("span",null,a(h.name),1)]),$,t("td",null,[k(T,{size:"xs",onClick:m=>w.deleteFile(h)},{default:o(()=>[x]),_:2},1032,["onClick"])])]))),128))])])):e("v-if",!0)]),default:o(()=>[k(T,{type:"primary"},{default:o(()=>[O]),_:1})]),_:1},8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","beforeUpload"])])}const{reactive:H,ref:j,watch:G}=y;return P({render:J},{setup(){const D={name:"tom",age:11},B=j({preLoad:0,uploading:1,uploaded:2,failed:3}),T=j([]),g=H({accept:".png",multiple:!1,webkitdirectory:!1}),w=H({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:D,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"}),h=v=>(console.log(v),!0),U=v=>{console.log("success",v)},m=v=>{console.log(v)};return G(T,(v,q)=>{console.log("uploadedFiles",{newValue:v,oldValue:q})}),{fileOptions:g,uploadedFiles:T,uploadOptions:w,beforeUpload:h,onSuccess:U,onError:m,UploadStatus:B}}})}(),"render-demo-11":function(){const{resolveComponent:r,createVNode:i,createElementVNode:o,createTextVNode:k,renderList:E,Fragment:l,openBlock:p,createElementBlock:u,toDisplayString:a,createCommentVNode:t,withCtx:e,createBlock:c}=y,O={class:"upload-trigger"},F=o("div",{style:{marginTop:"20px"}},[k(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),o("span",{class:"link"},"\u70B9\u51FB\u4E0A\u4F20")],-1),S={key:0,class:"table preload-files"},d={width:"50%"},f={width:"25%"},C={key:0},V={key:1},_={key:2},L={key:3},R=k(" Delete "),I={key:0,class:"table uploaded-files"},$={width:"50%"},x=o("td",{width:"25%"},[o("span",null,"Uploaded")],-1),J=k(" Delete ");function H(B,T){const g=r("d-icon"),w=r("d-button"),h=r("d-single-upload");return p(),u("div",null,[i(h,{"file-options":B.fileOptions,"upload-options":B.uploadOptions,"uploaded-files":B.uploadedFiles,"onUpdate:uploaded-files":T[0]||(T[0]=U=>B.uploadedFiles=U),"placeholder-text":"Upload",onSuccessEvent:B.onSuccess,onErrorEvent:B.onError,beforeUpload:B.beforeUpload,showTip:!0,withoutBtn:!0,class:"upload-demo",autoUpload:!0},{preloadFiles:e(U=>[U.fileUploaders.length>0?(p(),u("table",S,[(p(!0),u(l,null,E(U.fileUploaders,(m,v)=>(p(),u("tr",{key:v,class:"row"},[o("td",d,[o("span",null,a(m.file.name),1)]),o("td",f,[m.status===B.UploadStatus.preLoad?(p(),u("span",C,"preLoad")):t("v-if",!0),m.status===B.UploadStatus.uploading?(p(),u("span",V,"Uploading")):t("v-if",!0),m.status===B.UploadStatus.uploaded?(p(),u("span",_,"Uploaded")):t("v-if",!0),m.status===B.UploadStatus.failed?(p(),u("span",L,"Upload Failed")):t("v-if",!0)]),o("td",null,[m.status!==B.UploadStatus.uploaded?(p(),c(w,{key:0,size:"xs",disabled:m.status===B.UploadStatus.uploading,onClick:q=>U.deleteFile(q)},{default:e(()=>[R]),_:2},1032,["disabled","onClick"])):t("v-if",!0)])]))),128))])):t("v-if",!0)]),uploadedFiles:e(U=>[U.uploadedFiles.length>0?(p(),u("table",I,[o("tbody",null,[(p(!0),u(l,null,E(U.uploadedFiles,(m,v)=>(p(),u("tr",{key:v,class:"row"},[o("td",$,[o("span",null,a(m.name),1)]),x,o("td",null,[i(w,{size:"xs",onClick:q=>U.deleteFile(m)},{default:e(()=>[J]),_:2},1032,["onClick"])])]))),128))])])):t("v-if",!0)]),default:e(()=>[o("div",O,[o("div",null,[i(g,{name:"upload",size:"24px"})]),F])]),_:1},8,["file-options","upload-options","uploaded-files","onSuccessEvent","onErrorEvent","beforeUpload"])])}const{reactive:j,ref:G,watch:K}=y;return P({render:H},{setup(){const B={name:"tom",age:11},T=G({preLoad:0,uploading:1,uploaded:2,failed:3}),g=G([]),w=j({accept:".png",multiple:!1,webkitdirectory:!1}),h=j({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:B,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"}),U=q=>(console.log(q),!0),m=q=>{console.log("success",q)},v=q=>{console.log(q)};return K(g,(q,M)=>{console.log("uploadedFiles",{newValue:q,oldValue:M})}),{fileOptions:w,uploadedFiles:g,uploadOptions:h,beforeUpload:U,onSuccess:m,onError:v,UploadStatus:T}}})}()}},Gn='{"title":"Upload \u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u6587\u4EF6\u4E0A\u4F20","slug":"\u591A\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u81EA\u52A8\u4E0A\u4F20","slug":"\u81EA\u52A8\u4E0A\u4F20"},{"level":3,"title":"\u81EA\u5B9A\u4E49","slug":"\u81EA\u5B9A\u4E49"},{"level":3,"title":"\u52A8\u6001\u4E0A\u4F20\u53C2\u6570","slug":"\u52A8\u6001\u4E0A\u4F20\u53C2\u6570"},{"level":3,"title":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","slug":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"slot","slug":"slot"},{"level":3,"title":"\u63A5\u53E3 & \u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"IUploadOptions","slug":"iuploadoptions"},{"level":3,"title":"IFileOptions","slug":"ifileoptions"}],"relativePath":"components/upload/index.md","lastUpdated":1636901380154}',rn=Y('<h1 id="upload-\u4E0A\u4F20" tabindex="-1">Upload \u4E0A\u4F20 <a class="header-anchor" href="#upload-\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u540E\u7AEF\u670D\u52A1\u5668\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5355\u6587\u4EF6\u4E0A\u4F20\u3001\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20\u3001\u7981\u6B62\u4E0A\u4F20\u3002</p><h4>Basic Usage</h4>',7),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-single-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),dn=n("h4",null,"Dragdrop",-1),fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-single-upload")]),s(`
    `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadRef"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":enable-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Drag files"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":without-btn"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileDrop"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-over"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOver"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'.png,.zip'"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileDrop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("files"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileOver"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      uploadRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fileUpload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      fileDrop`),n("span",{class:"token punctuation"},","),s(`
      fileOver`),n("span",{class:"token punctuation"},","),s(`
      uploadRef`),n("span",{class:"token punctuation"},","),s(`
      submit`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),mn=n("h4",null,"Disabled",-1),gn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-single-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dFile'"),n("span",{class:"token punctuation"},","),s(`
      withCredentials`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Fn=n("h3",{id:"\u591A\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[s("\u591A\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u591A\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),En=n("p",null,"\u591A\u6587\u4EF6\u4E0A\u4F20\uFF0C\u652F\u6301\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20\u3001\u7981\u6B62\u4E0A\u4F20\u3002",-1),vn=n("h4",null,"Basic Usage",-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'image/png,image/jpeg'"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileSelect '"),n("span",{class:"token punctuation"},","),s(" files"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"filePath"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"delete "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("filePath"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      fileSelect`),n("span",{class:"token punctuation"},","),s(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),bn=n("h4",null,"Upload Directory",-1),An=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileSelect"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
      checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileSelect '"),n("span",{class:"token punctuation"},","),s(" files"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"filePath"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"delete "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("filePath"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      fileSelect`),n("span",{class:"token punctuation"},","),s(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),yn=n("h4",null,"Dragdrop",-1),wn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
    `),n("span",{class:"token attr-name"},":enable-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileSelect"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":one-time-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileDrop"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@file-over"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOver"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@delete-uploaded-file-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deleteUploadedFile"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'.xls,.xlsx,.pages,.mp3,.png'"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token operator"},":"),s(" additionalParameter"),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
      checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileSelect"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileSelect '"),n("span",{class:"token punctuation"},","),s(" files"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"filePath"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"delete "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("filePath"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileDrop"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("files"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"fileOver"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("event"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      fileSelect`),n("span",{class:"token punctuation"},","),s(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),s(`
      fileDrop`),n("span",{class:"token punctuation"},","),s(`
      fileOver`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Un=n("h4",null,"Disabled",-1),Cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'dFile'"),n("span",{class:"token punctuation"},","),s(`
      withCredentials`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Bn=n("h3",{id:"\u81EA\u52A8\u4E0A\u4F20",tabindex:"-1"},[s("\u81EA\u52A8\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u81EA\u52A8\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),Sn=n("p",null,"\u901A\u8FC7 autoUpload \u8BBE\u7F6E\u81EA\u52A8\u4E0A\u4F20\u3002",-1),On=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u9009\u62E9\u6587\u4EF6"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess1"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@delete-uploaded-file-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deleteUploadedFile"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":auto-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'.xls,.xlsx,.pages,.mp3,.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token operator"},":"),s(" additionalParameter"),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
      checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess1"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},","),s(" uploadedFiles"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deleteUploadedFile '"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("uploadedFiles"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles '"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      onSuccess1`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),_n=n("h3",{id:"\u81EA\u5B9A\u4E49",tabindex:"-1"},[s("\u81EA\u5B9A\u4E49 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49","aria-hidden":"true"},"#")],-1),Dn=n("p",null,"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u6309\u94AE\uFF0C\u901A\u8FC7 slot preloadFiles \u8BBE\u7F6E\u5DF2\u9009\u62E9\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u901A\u8FC7 slot uploadedFiles \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u6A21\u7248\u3002",-1),qn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
        `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u9009\u62E9\u6587\u4EF6"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"@delete-uploaded-file-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deleteUploadedFile"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},":setCustomUploadOptions"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("setCustomUploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},":withoutBtn"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadRef"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),s("preloadFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("table")]),s(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("table preload-files"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps.fileUploaders.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tr")]),s(`
              `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(fileUploader, index) in slotProps.fileUploaders"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ fileUploader.file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`

              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.preLoad"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token punctuation"},">")]),s("preLoad"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
                `),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token punctuation"},">")]),s("Uploading}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
                `),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token punctuation"},">")]),s("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
                `),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.failed"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token punctuation"},">")]),s("Upload Failed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
                `),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`

              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(`
                  `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("xs"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status !== UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(`
                    (event) => slotProps.deleteFile(fileUploader.filePath)
                  `),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token punctuation"},">")]),s(`
                  Delete
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tr")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("table")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),s("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("table")]),s(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("table uploaded-files"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps.uploadedFiles.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tbody")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tr")]),s(`
                `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(uploadedFile, index) in slotProps.uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ uploadedFile.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(`
                    `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("xs"),n("span",{class:"token punctuation"},'"')]),s(`
                    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),s(`
                  `),n("span",{class:"token punctuation"},">")]),s(`
                    Delete
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tr")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tbody")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("table")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-multiple-upload")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u81EA\u5B9A\u4E49\u4E0A\u4F20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" UploadStatus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      preLoad`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
      uploading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
      uploaded`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
      failed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadRef "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'.xls,.xlsx,.pages,.mp3,.png'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token operator"},":"),s(" additionalParameter"),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),s(`
      checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},","),s(" uploadedFiles"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deleteUploadedFile '"),n("span",{class:"token punctuation"},","),s(" file"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"setCustomUploadOptions"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("file"),n("span",{class:"token punctuation"},","),s(" options")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"let"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(` options
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(`
        file`),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(`
        `),n("span",{class:"token string"},"'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'"),s(`
      `),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        uploadOptions `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
          uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),s(`
          additionalParameter`),n("span",{class:"token operator"},":"),s(" additionalParameter"),n("span",{class:"token punctuation"},","),s(`
          maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.1"),n("span",{class:"token punctuation"},","),s(`
          checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},"."),s("type "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        uploadOptions `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
          uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
          additionalParameter`),n("span",{class:"token operator"},":"),s(" additionalParameter"),n("span",{class:"token punctuation"},","),s(`
          maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
          checkSameName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token keyword"},"return"),s(` uploadOptions
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"submit"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("uploadRef"),n("span",{class:"token punctuation"},")"),s(`
      uploadRef`),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fileUpload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("uploadedFiles"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles '"),n("span",{class:"token punctuation"},","),s(" val"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),s(`
      setCustomUploadOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadRef`),n("span",{class:"token punctuation"},","),s(`
      submit`),n("span",{class:"token punctuation"},","),s(`
      UploadStatus`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".upload-row"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-between"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-row .upload-body"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 65%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-row .upload-btn"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 30%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-self"),n("span",{class:"token punctuation"},":"),s(" baseline"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-row .table"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),s(" 100%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 8px 0 0 8px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" transparent"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-collapse"),n("span",{class:"token punctuation"},":"),s(" collapse"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-spacing"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-row .table .row"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-between"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),s(" 5px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-row .table tr"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-row .table td"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" none"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),xn=n("h3",{id:"\u52A8\u6001\u4E0A\u4F20\u53C2\u6570",tabindex:"-1"},[s("\u52A8\u6001\u4E0A\u4F20\u53C2\u6570 "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u4E0A\u4F20\u53C2\u6570","aria-hidden":"true"},"#")],-1),Pn=n("p",null,"\u7528\u6237\u53EF\u901A\u8FC7 beforeUpload \u52A8\u6001\u4FEE\u6539\u4E0A\u4F20\u53C2\u6570\u3002",-1),Nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-multiple-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":beforeUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("files "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("files"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      files`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("uploadOptions"),n("span",{class:"token punctuation"},"."),s("uri "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'/upload2'"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("files"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Tn=n("h3",{id:"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20",tabindex:"-1"},[s("\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),zn=n("p",null,"\u7528\u6237\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u652F\u6301\u6587\u4EF6\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20\u3002",-1),Vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-single-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":beforeUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u9009\u53D6\u6587\u4EF6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),s("preloadFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("table")]),s(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("table preload-files"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps.fileUploaders.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tr")]),s(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(fileUploader, index) in slotProps.fileUploaders"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ fileUploader.file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.preLoad"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("preLoad"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("Uploading}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.failed"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("Upload Failed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(`
              `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("xs"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status !== UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(event) => slotProps.deleteFile(event)"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
              Delete
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("table")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),s("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("table")]),s(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("table uploaded-files"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps.uploadedFiles.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tbody")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tr")]),s(`
            `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(uploadedFile, index) in slotProps.uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ uploadedFile.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(`
                `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("xs"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s(`
                Delete
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tr")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tbody")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("table")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-single-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" UploadStatus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      preLoad`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
      uploading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
      uploaded`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
      failed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'.png'"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("uploadedFiles"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("newValue"),n("span",{class:"token punctuation"},","),s(" oldValue")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        newValue`),n("span",{class:"token punctuation"},","),s(`
        oldValue`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      UploadStatus`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),jn=n("p",null,"\u81EA\u5B9A\u4E49\u9ED8\u8BA4 slot\uFF0C\u521D\u59CB\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u3002",-1),Ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-single-upload")]),s(`
    `),n("span",{class:"token attr-name"},":file-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadOptions"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),s("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Upload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@success-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onSuccess"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@error-event"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onError"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":beforeUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("beforeUpload"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":withoutBtn"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-demo"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":autoUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("true"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload-trigger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-icon")]),s(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("upload"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("24px"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"marginTop"),n("span",{class:"token punctuation"},":"),s(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),s(`
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("link"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u70B9\u51FB\u4E0A\u4F20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),s("preloadFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("table")]),s(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("table preload-files"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps.fileUploaders.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tr")]),s(`
          `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(fileUploader, index) in slotProps.fileUploaders"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ fileUploader.file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.preLoad"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("preLoad"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("Uploading"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.failed"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s("Upload Failed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(`
              `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("xs"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status !== UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(event) => slotProps.deleteFile(event)"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token punctuation"},">")]),s(`
              Delete
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tr")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("table")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),s("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("table")]),s(`
        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("table uploaded-files"),n("span",{class:"token punctuation"},'"')]),s(`
        `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("slotProps.uploadedFiles.length > 0"),n("span",{class:"token punctuation"},'"')]),s(`
      `),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tbody")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("tr")]),s(`
            `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(uploadedFile, index) in slotProps.uploadedFiles"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("index"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("row"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("{{ uploadedFile.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),s(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),n("span",{class:"token punctuation"},">")]),s("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-button")]),s(`
                `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("xs"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),s(`
              `),n("span",{class:"token punctuation"},">")]),s(`
                Delete
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-button")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("td")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tr")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("tbody")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("table")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-single-upload")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" additionalParameter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),s(" age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),s(),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" UploadStatus "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      preLoad`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
      uploading`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
      uploaded`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
      failed`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadedFiles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" fileOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      accept`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'.png'"),n("span",{class:"token punctuation"},","),s(`
      multiple`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      webkitdirectory`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" uploadOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      uri`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),s(`
      headers`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      additionalParameter`),n("span",{class:"token punctuation"},","),s(`
      maximumSize`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
      method`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),s(`
      fileFieldName`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),s(`
      responseType`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'json'"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"beforeUpload"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("file"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onSuccess"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),s(" result"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onError"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("error"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s("uploadedFiles"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("newValue"),n("span",{class:"token punctuation"},","),s(" oldValue")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
        newValue`),n("span",{class:"token punctuation"},","),s(`
        oldValue`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      fileOptions`),n("span",{class:"token punctuation"},","),s(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),s(`
      uploadOptions`),n("span",{class:"token punctuation"},","),s(`
      beforeUpload`),n("span",{class:"token punctuation"},","),s(`
      onSuccess`),n("span",{class:"token punctuation"},","),s(`
      onError`),n("span",{class:"token punctuation"},","),s(`
      UploadStatus`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".upload-demo .upload-trigger"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #fff"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px dashed #d9d9d9"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 6px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),s(" border-box"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 360px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 180px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),s(" pointer"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),s(" relative"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),s(" hidden"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),s(" column"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".upload-demo .upload-trigger .link"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),s(" blue"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Rn=Y(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-single-upload \u53C2\u6570</p><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th>\u8BF4\u660E</th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>fileOptions</td><td><a href="#ifileoptions">IFileOptions</a></td><td>--</td><td>\u5FC5\u9009\uFF0C\u5F85\u4E0A\u4F20\u6587\u4EF6\u914D\u7F6E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadOptions</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u5FC5\u9009\uFF0C\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>autoUpload</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>placeholderText</td><td><code>string</code></td><td>&#39;\u9009\u62E9\u6587\u4EF6&#39;</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u8F93\u5165\u6846\u4E2D\u7684 Placeholder \u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadText</td><td><code>string</code></td><td>&#39;\u4E0A\u4F20&#39;</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u6309\u94AE\u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadedFiles</td><td><code>Array&lt;Object&gt;</code></td><td>[]</td><td>\u53EF\u9009\uFF0C\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>withoutBtn</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u820D\u5F03\u6309\u94AE</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>enableDrop</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u62D6\u62FD</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>beforeUpload</td><td><code>boolean Promise&lt;boolean&gt; </code></td><td>--</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u524D\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u8FD4\u56DE<code>true</code> or <code>false</code> ,\u63A7\u5236\u6587\u4EF6\u662F\u5426\u4E0A\u4F20,\u53C2\u6570\u4E3A\u6587\u4EF6\u4FE1\u606F\u53CA\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>dynamicUploadOptionsFn</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u4E3A\u6587\u4EF6\u52A8\u6001\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u53C2\u6570, \u53C2\u6570\u4E3A\u5F53\u524D\u9009\u4E2D\u6587\u4EF6\u53CA<code>uploadOptions</code>\u7684\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u4E0A\u4F20\u7EC4\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>showTip</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u4E0A\u4F20\u63D0\u793A\u4FE1\u606F</td><td><a href="#%E8%87%AA%E5%8A%A8%E4%B8%8A%E4%BC%A0">\u81EA\u52A8\u4E0A\u4F20</a></td></tr></tbody></table><p>d-single-upload \u4E8B\u4EF6</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>fileOver</td><td><code>EventEmitter&lt;boolean&gt;</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u6587\u4EF6\u79FB\u52A8\u5230\u53EF\u62D6\u653E\u533A\u57DF\u89E6\u53D1\u4E8B\u4EF6,\u53EF\u62D6\u52A8\u7684\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>false</code>\uFF0C\u5143\u7D20\u6B63\u5728\u62D6\u52A8\u5230\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>true</code></td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>fileDrop</td><td><code>EventEmitter&lt;any&gt;</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u5F53\u524D\u62D6\u62FD\u7684\u6587\u4EF6\u5217\u8868\u56DE\u8C03\uFF0C\u5355\u6587\u4EF6\u4E0A\u4F20\u9ED8\u8BA4\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>successEvent</td><td><code>EventEmitter&lt;Array&lt;{file: File; response: any}&gt;&gt;</code></td><td>\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u56DE\u8C03\u51FD\u6570,\u8FD4\u56DE\u6587\u4EF6\u53CA xhr \u7684\u54CD\u5E94\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>errorEvent</td><td><code>EventEmitter&lt;{file: File; response: any}&gt;</code></td><td>\u4E0A\u4F20\u9519\u8BEF\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E0A\u4F20\u5931\u8D25\u7684\u9519\u8BEF\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>deleteUploadedFileEvent</td><td><code>EventEmitter&lt;string&gt;</code></td><td>\u5220\u9664\u4E0A\u4F20\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5220\u9664\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>fileSelect</td><td><code>EventEmitter&lt;File&gt;</code></td><td>\u6587\u4EF6\u9009\u62E9\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5DF2\u9009\u62E9\u6587\u4EF6\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-multiple-upload \u53C2\u6570</p><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th>\u8BF4\u660E</th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>fileOptions</td><td><a href="#ifileoptions">IFileOptions</a></td><td>--</td><td>\u5FC5\u9009\uFF0C\u5F85\u4E0A\u4F20\u6587\u4EF6\u914D\u7F6E</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>uploadOptions</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u5FC5\u9009\uFF0C\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>autoUpload</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td><td><a href="#%E8%87%AA%E5%8A%A8%E4%B8%8A%E4%BC%A0">\u81EA\u52A8\u4E0A\u4F20</a></td></tr><tr><td>placeholderText</td><td><code>string</code></td><td>&#39;\u9009\u62E9\u591A\u4E2A\u6587\u4EF6&#39;</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u8F93\u5165\u6846\u4E2D\u7684 Placeholder \u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadText</td><td><code>string</code></td><td>&#39;\u4E0A\u4F20&#39;</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u6309\u94AE\u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadedFiles</td><td><code>Array&lt;Object&gt;</code></td><td>[]</td><td>\u53EF\u9009\uFF0C\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>withoutBtn</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u820D\u5F03\u6309\u94AE</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr><tr><td>enableDrop</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u62D6\u62FD</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>beforeUpload</td><td><code>boolean Promise&lt;boolean&gt;</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u524D\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u8FD4\u56DE<code>true</code> or <code>false</code> ,\u63A7\u5236\u6587\u4EF6\u662F\u5426\u4E0A\u4F20,\u53C2\u6570\u4E3A\u6587\u4EF6\u4FE1\u606F\u53CA\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>dynamicUploadOptionsFn</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u4E3A\u6587\u4EF6\u52A8\u6001\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u53C2\u6570, \u53C2\u6570\u4E3A\u5F53\u524D\u9009\u4E2D\u6587\u4EF6\u53CA<code>uploadOptions</code>\u7684\u503C</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u4E0A\u4F20\u7EC4\u4EF6</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>showTip</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u4E0A\u4F20\u63D0\u793A\u4FE1\u606F</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>setCustomUploadOptions</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u4E3A\u6BCF\u4E2A\u6587\u4EF6\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u7684\u4E0A\u4F20\u53C2\u6570, \u53C2\u6570\u4E3A\u5F53\u524D\u9009\u4E2D\u6587\u4EF6\u53CA<code>uploadOptions</code>\u7684\u503C</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr></tbody></table><p>d-multiple-upload \u4E8B\u4EF6</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>fileOver</td><td><code>EventEmitter&lt;boolean&gt;</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u6587\u4EF6\u79FB\u52A8\u5230\u53EF\u62D6\u653E\u533A\u57DF\u89E6\u53D1\u4E8B\u4EF6,\u53EF\u62D6\u52A8\u7684\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>false</code>\uFF0C\u5143\u7D20\u6B63\u5728\u62D6\u52A8\u5230\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>true</code></td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>fileDrop</td><td><code>EventEmitter&lt;any&gt;</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u5F53\u524D\u62D6\u62FD\u7684\u6587\u4EF6\u5217\u8868\u56DE\u8C03\uFF0C\u5355\u6587\u4EF6\u4E0A\u4F20\u9ED8\u8BA4\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>successEvent</td><td><code>EventEmitter&lt;Array&lt;{file: File; response: any}&gt;&gt;</code></td><td>\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u56DE\u8C03\u51FD\u6570,\u8FD4\u56DE\u6587\u4EF6\u53CA xhr \u7684\u54CD\u5E94\u4FE1\u606F</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>errorEvent</td><td><code>EventEmitter&lt;{file: File; response: any}&gt;</code></td><td>\u4E0A\u4F20\u9519\u8BEF\u65F6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u4E0A\u4F20\u5931\u8D25\u7684\u9519\u8BEF\u4FE1\u606F</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>deleteUploadedFileEvent</td><td><code>EventEmitter&lt;string&gt;</code></td><td>\u5220\u9664\u4E0A\u4F20\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5220\u9664\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>fileSelect</td><td><code>EventEmitter&lt;File&gt;</code></td><td>\u6587\u4EF6\u9009\u62E9\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5DF2\u9009\u62E9\u6587\u4EF6\u4FE1\u606F</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="slot" tabindex="-1">slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h3><table><thead><tr><th>name</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>preloadFiles</td><td>--</td><td>\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49 \u5DF2\u9009\u62E9\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{fileUploaders, deleteFile}</code></td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr><tr><td>uploadedFiles</td><td>--</td><td>\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49 \u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{uploadedFiles, deleteFile}</code></td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr></tbody></table><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h3 id="iuploadoptions" tabindex="-1">IUploadOptions <a class="header-anchor" href="#iuploadoptions" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IUploadOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0A\u4F20\u63A5\u53E3\u5730\u5740</span>
  uri<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// http \u8BF7\u6C42\u65B9\u6CD5</span>
  method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236</span>
  maximumSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u8BF7\u6C42headers</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  <span class="token comment">// \u8BA4\u8BC1token</span>
  authToken<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u8BA4\u8BC1token header\u6807\u793A</span>
  authTokenHeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u4E0A\u4F20\u989D\u5916\u81EA\u5B9A\u4E49\u53C2\u6570</span>
  additionalParameter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u5B57\u6BB5\u540D\u79F0\uFF0C\u9ED8\u8BA4file</span>
  fileFieldName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u591A\u6587\u4EF6\u4E0A\u4F20,\u662F\u5426\u68C0\u67E5\u6587\u4EF6\u91CD\u540D\uFF0C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u91CD\u540D\u6587\u4EF6\u4E0D\u4F1A\u8986\u76D6\uFF0C\u5426\u5219\u4F1A\u8986\u76D6\u4E0A\u4F20</span>
  checkSameName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u6307\u793A\u4E86\u662F\u5426\u8BE5\u4F7F\u7528\u7C7B\u4F3Ccookies,authorization headers(\u5934\u90E8\u6388\u6743)\u6216\u8005TLS\u5BA2\u6237\u7AEF\u8BC1\u4E66\u8FD9\u4E00\u7C7B\u8D44\u683C\u8BC1\u4E66\u6765\u521B\u5EFA\u4E00\u4E2A\u8DE8\u7AD9\u70B9\u8BBF\u95EE\u63A7\u5236\uFF08cross-site Access-Control\uFF09\u8BF7\u6C42</span>
  withCredentials<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">//  \u624B\u52A8\u8BBE\u7F6E\u8FD4\u56DE\u6570\u636E\u7C7B\u578B</span>
  responseType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;arraybuffer&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;blob&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;json&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="ifileoptions" tabindex="-1">IFileOptions <a class="header-anchor" href="#ifileoptions" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IFileOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u89C4\u5B9A\u80FD\u591F\u901A\u8FC7\u6587\u4EF6\u4E0A\u4F20\u8FDB\u884C\u63D0\u4EA4\u7684\u6587\u4EF6\u7C7B\u578B,\u4F8B\u5982 accept: &#39;.xls,.xlsx,.pages,.mp3,.png&#39;</span>
  accept<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u8F93\u5165\u5B57\u6BB5\u53EF\u9009\u62E9\u591A\u4E2A\u503C</span>
  multiple<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u662F\u5426\u5141\u8BB8\u7528\u6237\u9009\u62E9\u6587\u4EF6\u76EE\u5F55\uFF0C\u800C\u4E0D\u662F\u6587\u4EF6</span>
  webkitdirectory<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16);function In(r,i,o,k,E,l){const p=N("render-demo-0"),u=N("demo"),a=N("render-demo-1"),t=N("render-demo-2"),e=N("render-demo-3"),c=N("render-demo-4"),O=N("render-demo-5"),F=N("render-demo-6"),S=N("render-demo-7"),d=N("render-demo-8"),f=N("render-demo-9"),C=N("render-demo-10"),V=N("render-demo-11");return ln(),un("div",null,[rn,b(u,{sourceCode:`<template>
  <d-single-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json',
    })
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
    }
  },
}
<\/script>
`},{highlight:A(()=>[kn]),default:A(()=>[b(p)]),_:1}),dn,b(u,{sourceCode:`<template>
  <d-single-upload
    ref="uploadRef"
    :enable-drop="true"
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Drag files"
    :without-btn="true"
    :before-upload="beforeUpload"
    @success-event="onSuccess"
    @error-event="onError"
    @file-drop="fileDrop"
    @file-over="fileOver"
  />
  <div style="margin-top: 8px">
    <d-button @click="submit">Upload</d-button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadRef = ref(null)
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '.png,.zip',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json',
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    const fileDrop = (files) => {
      console.log(files)
    }

    const fileOver = (event) => {
      console.log(event)
    }
    const submit = () => {
      uploadRef.value.fileUpload()
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      uploadedFiles,
      beforeUpload,
      onSuccess,
      onError,
      fileDrop,
      fileOver,
      uploadRef,
      submit,
    }
  },
}
<\/script>
`},{highlight:A(()=>[fn]),default:A(()=>[b(a)]),_:1}),mn,b(u,{sourceCode:`<template>
  <d-single-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    :before-upload="beforeUpload"
    @success-event="onSuccess"
    @error-event="onError"
    :disabled="true"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: '/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'dFile',
      withCredentials: true,
      responseType: 'json',
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
    }
  },
}
<\/script>
`},{highlight:A(()=>[gn]),default:A(()=>[b(t)]),_:1}),Fn,En,vn,b(u,{sourceCode:`<template>
  <d-multiple-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    @success-event="onSuccess"
    @error-event="onError"
    :showTip="true"
    @file-select="fileSelect"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: 'image/png,image/jpeg',
      multiple: true,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      additionalParameter,
      maximumSize: 2,
      method: 'POST',
      checkSameName: true,
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    const fileSelect = (files) => {
      console.log('fileSelect ', files)
    }
    const deleteUploadedFile = (filePath) => {
      console.log(\`delete \${filePath}\`)
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      fileSelect,
      deleteUploadedFile,
    }
  },
}
<\/script>
`},{highlight:A(()=>[hn]),default:A(()=>[b(e)]),_:1}),bn,b(u,{sourceCode:`<template>
  <d-multiple-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    @success-event="onSuccess"
    @error-event="onError"
    :showTip="true"
    @file-select="fileSelect"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      multiple: true,
      webkitdirectory: true,
    })
    const uploadOptions = reactive({
      uri: '/upload',
      method: 'post',
      maximumSize: 20,
      checkSameName: true,
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    const fileSelect = (files) => {
      console.log('fileSelect ', files)
    }
    const deleteUploadedFile = (filePath) => {
      console.log(\`delete \${filePath}\`)
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      fileSelect,
      deleteUploadedFile,
    }
  },
}
<\/script>
`},{highlight:A(()=>[An]),default:A(()=>[b(c)]),_:1}),yn,b(u,{sourceCode:`<template>
  <d-multiple-upload
    :enable-drop="true"
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    @success-event="onSuccess"
    @error-event="onError"
    :showTip="true"
    @file-select="fileSelect"
    :one-time-upload="true"
    @file-drop="fileDrop"
    @file-over="fileOver"
    @delete-uploaded-file-event="deleteUploadedFile"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      multiple: true,
      accept: '.xls,.xlsx,.pages,.mp3,.png',
      webkitdirectory: true,
    })
    const uploadOptions = reactive({
      uri: '/upload',
      method: 'post',
      additionalParameter: additionalParameter,
      maximumSize: 20,
      checkSameName: true,
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    const fileSelect = (files) => {
      console.log('fileSelect ', files)
    }
    const deleteUploadedFile = (filePath) => {
      console.log(\`delete \${filePath}\`)
    }
    const fileDrop = (files) => {
      console.log(files)
    }
    const fileOver = (event) => {
      console.log(event)
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      fileSelect,
      deleteUploadedFile,
      fileDrop,
      fileOver,
    }
  },
}
<\/script>
`},{highlight:A(()=>[wn]),default:A(()=>[b(O)]),_:1}),Un,b(u,{sourceCode:`<template>
  <d-multiple-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    :before-upload="beforeUpload"
    @success-event="onSuccess"
    @error-event="onError"
    :disabled="true"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: '/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'dFile',
      withCredentials: true,
      responseType: 'json',
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
    }
  },
}
<\/script>
`},{highlight:A(()=>[Cn]),default:A(()=>[b(F)]),_:1}),Bn,Sn,b(u,{sourceCode:`<template>
  <d-multiple-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="\u9009\u62E9\u6587\u4EF6"
    @success-event="onSuccess1"
    @error-event="onError"
    @delete-uploaded-file-event="deleteUploadedFile"
    :showTip="true"
    v-model:uploadedFiles="uploadedFiles"
    :auto-upload="true"
  />
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      multiple: true,
      accept: '.xls,.xlsx,.pages,.mp3,.png',
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      method: 'post',
      additionalParameter: additionalParameter,
      maximumSize: 20,
      checkSameName: true,
    })
    const onSuccess1 = (result) => {
      console.log('success', result, uploadedFiles)
    }
    const onError = (error) => {
      console.log(error)
    }
    const deleteUploadedFile = (file) => {
      console.log('deleteUploadedFile ', file)
    }
    watch(uploadedFiles, (val) => {
      console.log('uploadedFiles ', val)
    })
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      onSuccess1,
      onError,
      deleteUploadedFile,
    }
  },
}
<\/script>
`},{highlight:A(()=>[On]),default:A(()=>[b(S)]),_:1}),_n,Dn,b(u,{sourceCode:`<template>
  <div class="upload-row">
    <div class="upload-body">
      <d-multiple-upload
        :file-options="fileOptions"
        :upload-options="uploadOptions"
        v-model:uploaded-files="uploadedFiles"
        placeholder-text="\u9009\u62E9\u6587\u4EF6"
        @success-event="onSuccess"
        @error-event="onError"
        @delete-uploaded-file-event="deleteUploadedFile"
        v-model:uploadedFiles="uploadedFiles"
        :setCustomUploadOptions="setCustomUploadOptions"
        :withoutBtn="true"
        ref="uploadRef"
      >
        <template v-slot:preloadFiles="slotProps">
          <table
            class="table preload-files"
            v-if="slotProps.fileUploaders.length > 0"
          >
            <tr
              v-for="(fileUploader, index) in slotProps.fileUploaders"
              :key="index"
              class="row"
            >
              <td width="50%">
                <span>{{ fileUploader.file.name }}</span>
              </td>

              <td width="25%">
                <span v-if="fileUploader.status === UploadStatus.preLoad"
                  >preLoad</span
                >
                <span v-if="fileUploader.status === UploadStatus.uploading"
                  >Uploading}</span
                >
                <span v-if="fileUploader.status === UploadStatus.uploaded"
                  >Uploaded</span
                >
                <span v-if="fileUploader.status === UploadStatus.failed"
                  >Upload Failed</span
                >
              </td>

              <td>
                <d-button
                  size="xs"
                  v-if="fileUploader.status !== UploadStatus.uploaded"
                  :disabled="fileUploader.status === UploadStatus.uploading"
                  @click="
                    (event) => slotProps.deleteFile(fileUploader.filePath)
                  "
                >
                  Delete
                </d-button>
              </td>
            </tr>
          </table>
        </template>
        <template v-slot:uploadedFiles="slotProps">
          <table
            class="table uploaded-files"
            v-if="slotProps.uploadedFiles.length > 0"
          >
            <tbody>
              <tr
                v-for="(uploadedFile, index) in slotProps.uploadedFiles"
                :key="index"
                class="row"
              >
                <td width="50%">
                  <span>{{ uploadedFile.name }}</span>
                </td>
                <td width="25%">
                  <span>Uploaded</span>
                </td>
                <td>
                  <d-button
                    size="xs"
                    @click="(event) => slotProps.deleteFile(uploadedFile)"
                  >
                    Delete
                  </d-button>
                </td>
              </tr>
            </tbody>
          </table>
        </template>
      </d-multiple-upload>
    </div>
    <div class="upload-btn">
      <d-button type="primary" @click="submit">\u81EA\u5B9A\u4E49\u4E0A\u4F20</d-button>
    </div>
  </div>
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const UploadStatus = ref({
      preLoad: 0,
      uploading: 1,
      uploaded: 2,
      failed: 3,
    })
    const uploadRef = ref(null)
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      multiple: true,
      accept: '.xls,.xlsx,.pages,.mp3,.png',
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      method: 'post',
      additionalParameter: additionalParameter,
      maximumSize: 20,
      checkSameName: true,
    })
    const onSuccess = (result) => {
      console.log('success', result, uploadedFiles)
    }
    const onError = (error) => {
      console.log(error)
    }
    const deleteUploadedFile = (file) => {
      console.log('deleteUploadedFile ', file)
    }
    const setCustomUploadOptions = (file, options) => {
      let uploadOptions = options
      if (
        file.type ===
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        uploadOptions = {
          uri: '/upload',
          additionalParameter: additionalParameter,
          maximumSize: 0.1,
          checkSameName: true,
        }
      }
      if (file.type === 'image/png') {
        uploadOptions = {
          uri: 'http://localhost:4000/files/upload',
          additionalParameter: additionalParameter,
          maximumSize: 0.5,
          checkSameName: true,
        }
      }
      return uploadOptions
    }
    const submit = () => {
      console.log(uploadRef)
      uploadRef.value.fileUpload()
    }
    watch(uploadedFiles, (val) => {
      console.log('uploadedFiles ', val)
    })
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      onSuccess,
      onError,
      deleteUploadedFile,
      setCustomUploadOptions,
      uploadRef,
      submit,
      UploadStatus,
    }
  },
}
<\/script>
<style>
.upload-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.upload-row .upload-body {
  width: 65%;
}
.upload-row .upload-btn {
  width: 30%;
  align-self: baseline;
}
.upload-row .table {
  width: 100%;
  max-width: 100%;
  margin: 8px 0 0 8px;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
}
.upload-row .table .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
}
.upload-row .table tr {
  border: none;
}
.upload-row .table td {
  border: none;
  padding: 0;
}
</style>
`},{highlight:A(()=>[qn]),default:A(()=>[b(d)]),_:1}),xn,Pn,b(u,{sourceCode:`<template>
  <d-multiple-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    @success-event="onSuccess"
    @error-event="onError"
    :beforeUpload="beforeUpload"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json',
    })
    const beforeUpload = (files) => {
      if (!files || !files.length) {
        return
      }
      files[0].uploadOptions.uri = '/upload2'
      console.log(files)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
    }
  },
}
<\/script>
`},{highlight:A(()=>[Nn]),default:A(()=>[b(f)]),_:1}),Tn,zn,b(u,{sourceCode:`<template>
  <d-single-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    @success-event="onSuccess"
    @error-event="onError"
    :beforeUpload="beforeUpload"
    :showTip="true"
  >
    <d-button type="primary">\u9009\u53D6\u6587\u4EF6</d-button>
    <template v-slot:preloadFiles="slotProps">
      <table
        class="table preload-files"
        v-if="slotProps.fileUploaders.length > 0"
      >
        <tr
          v-for="(fileUploader, index) in slotProps.fileUploaders"
          :key="index"
          class="row"
        >
          <td width="50%">
            <span>{{ fileUploader.file.name }}</span>
          </td>

          <td width="25%">
            <span v-if="fileUploader.status === UploadStatus.preLoad"
              >preLoad</span
            >
            <span v-if="fileUploader.status === UploadStatus.uploading"
              >Uploading}</span
            >
            <span v-if="fileUploader.status === UploadStatus.uploaded"
              >Uploaded</span
            >
            <span v-if="fileUploader.status === UploadStatus.failed"
              >Upload Failed</span
            >
          </td>

          <td>
            <d-button
              size="xs"
              v-if="fileUploader.status !== UploadStatus.uploaded"
              :disabled="fileUploader.status === UploadStatus.uploading"
              @click="(event) => slotProps.deleteFile(event)"
            >
              Delete
            </d-button>
          </td>
        </tr>
      </table>
    </template>
    <template v-slot:uploadedFiles="slotProps">
      <table
        class="table uploaded-files"
        v-if="slotProps.uploadedFiles.length > 0"
      >
        <tbody>
          <tr
            v-for="(uploadedFile, index) in slotProps.uploadedFiles"
            :key="index"
            class="row"
          >
            <td width="50%">
              <span>{{ uploadedFile.name }}</span>
            </td>
            <td width="25%">
              <span>Uploaded</span>
            </td>
            <td>
              <d-button
                size="xs"
                @click="(event) => slotProps.deleteFile(uploadedFile)"
              >
                Delete
              </d-button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </d-single-upload>
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const UploadStatus = ref({
      preLoad: 0,
      uploading: 1,
      uploaded: 2,
      failed: 3,
    })
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '.png',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json',
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    watch(uploadedFiles, (newValue, oldValue) => {
      console.log('uploadedFiles', {
        newValue,
        oldValue,
      })
    })
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      UploadStatus,
    }
  },
}
<\/script>
`},{highlight:A(()=>[Vn]),default:A(()=>[b(C)]),_:1}),jn,b(u,{sourceCode:`<template>
  <d-single-upload
    :file-options="fileOptions"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    @success-event="onSuccess"
    @error-event="onError"
    :beforeUpload="beforeUpload"
    :showTip="true"
    :withoutBtn="true"
    class="upload-demo"
    :autoUpload="true"
  >
    <div class="upload-trigger">
      <div>
        <d-icon name="upload" size="24px" />
      </div>
      <div style="marginTop: 20px">
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        <span class="link">\u70B9\u51FB\u4E0A\u4F20</span>
      </div>
    </div>
    <template v-slot:preloadFiles="slotProps">
      <table
        class="table preload-files"
        v-if="slotProps.fileUploaders.length > 0"
      >
        <tr
          v-for="(fileUploader, index) in slotProps.fileUploaders"
          :key="index"
          class="row"
        >
          <td width="50%">
            <span>{{ fileUploader.file.name }}</span>
          </td>

          <td width="25%">
            <span v-if="fileUploader.status === UploadStatus.preLoad"
              >preLoad</span
            >
            <span v-if="fileUploader.status === UploadStatus.uploading"
              >Uploading</span
            >
            <span v-if="fileUploader.status === UploadStatus.uploaded"
              >Uploaded</span
            >
            <span v-if="fileUploader.status === UploadStatus.failed"
              >Upload Failed</span
            >
          </td>

          <td>
            <d-button
              size="xs"
              v-if="fileUploader.status !== UploadStatus.uploaded"
              :disabled="fileUploader.status === UploadStatus.uploading"
              @click="(event) => slotProps.deleteFile(event)"
            >
              Delete
            </d-button>
          </td>
        </tr>
      </table>
    </template>
    <template v-slot:uploadedFiles="slotProps">
      <table
        class="table uploaded-files"
        v-if="slotProps.uploadedFiles.length > 0"
      >
        <tbody>
          <tr
            v-for="(uploadedFile, index) in slotProps.uploadedFiles"
            :key="index"
            class="row"
          >
            <td width="50%">
              <span>{{ uploadedFile.name }}</span>
            </td>
            <td width="25%">
              <span>Uploaded</span>
            </td>
            <td>
              <d-button
                size="xs"
                @click="(event) => slotProps.deleteFile(uploadedFile)"
              >
                Delete
              </d-button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </d-single-upload>
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const UploadStatus = ref({
      preLoad: 0,
      uploading: 1,
      uploaded: 2,
      failed: 3,
    })
    const uploadedFiles = ref([])
    const fileOptions = reactive({
      accept: '.png',
      multiple: false,
      webkitdirectory: false,
    })
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json',
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    watch(uploadedFiles, (newValue, oldValue) => {
      console.log('uploadedFiles', {
        newValue,
        oldValue,
      })
    })
    return {
      fileOptions,
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      UploadStatus,
    }
  },
}
<\/script>
<style>
.upload-demo .upload-trigger {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  width: 360px;
  height: 180px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.upload-demo .upload-trigger .link {
  color: blue;
}
</style>
`},{highlight:A(()=>[Ln]),default:A(()=>[b(V)]),_:1}),Rn])}var Jn=pn(cn,[["render",In]]);export{Gn as __pageData,Jn as default};
