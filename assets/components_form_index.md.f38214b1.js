var Y=Object.defineProperty;var G=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable;var $=(u,o,s)=>o in u?Y(u,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[o]=s,R=(u,o)=>{for(var s in o||(o={}))nn.call(o,s)&&$(u,s,o[s]);if(G)for(var s of G(o))an.call(o,s)&&$(u,s,o[s]);return u};import{_ as tn,V as w,r as I,c as sn,a as x,w as S,b as J,d as n,e as a,o as on}from"./app.1c78646e.js";const en={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:A,createElementBlock:v}=w,F=u("Name"),p=u("Age"),M=u("City"),V=u("Love Fruits"),D=u("Sex"),q=u("\u7537"),h=u("\u5973"),E=u("Go off work, I nerver to be a Juan King!"),C=u("Which lady you would like to support?"),k=u("\u63D0\u4EA4"),i=u("\u91CD\u7F6E");function l(e,m){const B=o("d-form-label"),b=o("d-input"),f=o("d-form-control"),_=o("d-form-item"),Z=o("d-select"),W=o("d-tag-input"),P=o("d-radio"),z=o("d-switch"),L=o("d-checkbox"),j=o("d-checkbox-group"),H=o("d-button"),O=o("d-form-operation"),N=o("d-form");return A(),v("div",null,[t(N,{ref:"dFormBasic",formData:e.formModel,layout:"vertical",onSubmit:e.onSubmitForm},{default:s(()=>[t(_,{prop:"name"},{default:s(()=>[t(B,{required:"",hasHelp:"",helpTips:"\u540D\u5B57\u53EF\u4EE5\u968F\u610F\u586B"},{default:s(()=>[F]),_:1}),t(f,{extraInfo:"\u8FD9\u884C\u662F\u8BF4\u660E\u6587\u5B57\uFF0C\u53EF\u4EE5\u4E0D\u7528\u7406\uFF0C\u4F60\u5C3D\u7BA1\u586B\u4F60\u7684\u59D3\u540D\u3002"},{default:s(()=>[t(b,{modelValue:e.formModel.name,"onUpdate:modelValue":m[0]||(m[0]=T=>e.formModel.name=T)},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{prop:"age"},{default:s(()=>[t(B,null,{default:s(()=>[p]),_:1}),t(f,null,{default:s(()=>[t(b,{modelValue:e.formModel.age,"onUpdate:modelValue":m[1]||(m[1]=T=>e.formModel.age=T)},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{prop:"city"},{default:s(()=>[t(B,null,{default:s(()=>[M]),_:1}),t(f,null,{default:s(()=>[t(Z,{modelValue:e.formModel.city,"onUpdate:modelValue":m[2]||(m[2]=T=>e.formModel.city=T),options:e.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(_,{prop:"loveFruits"},{default:s(()=>[t(B,null,{default:s(()=>[V]),_:1}),t(f,null,{default:s(()=>[t(W,{tags:e.formModel.loveFruits,"onUpdate:tags":m[3]||(m[3]=T=>e.formModel.loveFruits=T),suggestionList:e.formModel.suggestionList,"onUpdate:suggestionList":m[4]||(m[4]=T=>e.formModel.suggestionList=T),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(_,{prop:"sex"},{default:s(()=>[t(B,null,{default:s(()=>[D]),_:1}),t(f,null,{default:s(()=>[t(P,{modelValue:e.formModel.sex,"onUpdate:modelValue":m[5]||(m[5]=T=>e.formModel.sex=T),value:"0"},{default:s(()=>[q]),_:1},8,["modelValue"]),t(P,{modelValue:e.formModel.sex,"onUpdate:modelValue":m[6]||(m[6]=T=>e.formModel.sex=T),value:"1"},{default:s(()=>[h]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(_,{prop:"goOffWork"},{default:s(()=>[t(B,null,{default:s(()=>[E]),_:1}),t(f,null,{default:s(()=>[t(z,{checked:e.formModel.goOffWork,"onUpdate:checked":m[7]||(m[7]=T=>e.formModel.goOffWork=T)},null,8,["checked"])]),_:1})]),_:1}),t(_,{prop:"ladySupport"},{default:s(()=>[t(B,null,{default:s(()=>[C]),_:1}),t(f,null,{default:s(()=>[t(j,{modelValue:e.formModel.ladySupport,"onUpdate:modelValue":m[8]||(m[8]=T=>e.formModel.ladySupport=T),label:"1818\u9EC4\u91D1\u773C"},{default:s(()=>[t(L,{label:"\u90D1\u5973\u58EB",value:"ladyZheng"}),t(L,{label:"\u5C0F\u6BDB",value:"ladyMao"}),t(L,{label:"\u5C0F\u5218",value:"ladyLiu"}),t(L,{label:"\u5C0F\u848B",value:"ladyJiang"}),t(L,{label:"\u5C0F\u6ED5",value:"ladyTeng"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(O,{class:"demo-form-operation"},{default:s(()=>[t(H,{type:"submit",class:"demo-btn"},{default:s(()=>[k]),_:1}),t(H,{bsStyle:"common",onClick:e.resetForm},{default:s(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:g,nextTick:y}=w,c=r({setup(e,m){const B=g(null);let b=d({name:"AlanLee",age:"24",city:"\u6DF1\u5733",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermalon"},{name:"peach"}],sex:"0",goOffWork:!0,ladySupport:["ladyZheng"]});const f=d(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]);return{dFormBasic:B,formModel:b,selectOptions:f,resetForm:()=>{console.log("formData reset before",B.value.formData),B.value.resetFormFields(),console.log("formData reset after",B.value.formData)},onSubmitForm:()=>{console.log("onSubmitForm formModel",b)}}}});return R({render:l},c)}(),"render-demo-1":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:A,createElementBlock:v}=w,F=u("Name"),p=u("Age"),M=u("City"),V=u("Love Fruits"),D=u("Sex"),q=u("\u7537"),h=u("\u5973"),E=u("Go off work"),C=u("Support lady"),k=u("\u63D0\u4EA4"),i=u("\u91CD\u7F6E");function l(c,e){const m=o("d-form-label"),B=o("d-input"),b=o("d-form-control"),f=o("d-form-item"),_=o("d-select"),Z=o("d-tag-input"),W=o("d-radio"),P=o("d-switch"),z=o("d-checkbox"),L=o("d-checkbox-group"),j=o("d-button"),H=o("d-form-operation"),O=o("d-form");return A(),v("div",null,[t(O,{ref:"dFormHorizontal",formData:c.formModel,layout:"horizontal",labelSize:"lg",onSubmit:c.onSubmitForm},{default:s(()=>[t(f,{prop:"name"},{default:s(()=>[t(m,{required:""},{default:s(()=>[F]),_:1}),t(b,null,{default:s(()=>[t(B,{modelValue:c.formModel.name,"onUpdate:modelValue":e[0]||(e[0]=N=>c.formModel.name=N)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"age"},{default:s(()=>[t(m,null,{default:s(()=>[p]),_:1}),t(b,null,{default:s(()=>[t(B,{modelValue:c.formModel.age,"onUpdate:modelValue":e[1]||(e[1]=N=>c.formModel.age=N)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"city"},{default:s(()=>[t(m,null,{default:s(()=>[M]),_:1}),t(b,null,{default:s(()=>[t(_,{modelValue:c.formModel.city,"onUpdate:modelValue":e[2]||(e[2]=N=>c.formModel.city=N),options:c.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(f,{prop:"loveFruits"},{default:s(()=>[t(m,null,{default:s(()=>[V]),_:1}),t(b,null,{default:s(()=>[t(Z,{tags:c.formModel.loveFruits,"onUpdate:tags":e[3]||(e[3]=N=>c.formModel.loveFruits=N),suggestionList:c.formModel.suggestionList,"onUpdate:suggestionList":e[4]||(e[4]=N=>c.formModel.suggestionList=N),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(f,{prop:"sex"},{default:s(()=>[t(m,null,{default:s(()=>[D]),_:1}),t(b,null,{default:s(()=>[t(W,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[5]||(e[5]=N=>c.formModel.sex=N),value:"0"},{default:s(()=>[q]),_:1},8,["modelValue"]),t(W,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[6]||(e[6]=N=>c.formModel.sex=N),value:"1"},{default:s(()=>[h]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"goOffWork"},{default:s(()=>[t(m,null,{default:s(()=>[E]),_:1}),t(b,null,{default:s(()=>[t(P,{checked:c.formModel.goOffWork,"onUpdate:checked":e[7]||(e[7]=N=>c.formModel.goOffWork=N)},null,8,["checked"])]),_:1})]),_:1}),t(f,{prop:"ladySupport"},{default:s(()=>[t(m,null,{default:s(()=>[C]),_:1}),t(b,null,{default:s(()=>[t(L,{modelValue:c.formModel.ladySupport,"onUpdate:modelValue":e[8]||(e[8]=N=>c.formModel.ladySupport=N),label:"1818\u9EC4\u91D1\u773C"},{default:s(()=>[t(z,{label:"\u90D1\u5973\u58EB",value:"ladyZheng"}),t(z,{label:"\u5C0F\u6BDB",value:"ladyMao"}),t(z,{label:"\u5C0F\u5218",value:"ladyLiu"}),t(z,{label:"\u5C0F\u848B",value:"ladyJiang"}),t(z,{label:"\u5C0F\u6ED5",value:"ladyTeng"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(H,{class:"demo-form-operation"},{default:s(()=>[t(j,{type:"submit",class:"demo-btn"},{default:s(()=>[k]),_:1}),t(j,{bsStyle:"common",onClick:c.resetForm},{default:s(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:g}=w,y=r({setup(c,e){const m=g(null);let B=d({name:"AlanLee",age:"24",city:"",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermalon"},{name:"peach"}],sex:"0",goOffWork:!0,ladySupport:["ladyZheng"]});const b=d(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]);return{dFormHorizontal:m,formModel:B,selectOptions:b,resetForm:()=>{console.log("dFormHorizontal",m.value),m.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",B)}}}});return R({render:l},y)}(),"render-demo-2":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,withModifiers:A,vShow:v,createElementVNode:F,withDirectives:p,openBlock:M,createElementBlock:V}=w,D=u("Open Modal"),q=u("Name"),h=u("Age"),E=u("City"),C=u("Love Fruits"),k=u("Sex"),i=u("\u7537"),l=u("\u5973"),r=u("Go off work"),d=u("Support lady"),g=u("\u63D0\u4EA4"),y=u("\u91CD\u7F6E");function c(f,_){const Z=o("d-button"),W=o("d-form-label"),P=o("d-input"),z=o("d-form-control"),L=o("d-form-item"),j=o("d-select"),H=o("d-tag-input"),O=o("d-radio"),N=o("d-switch"),T=o("d-checkbox"),K=o("d-checkbox-group"),Q=o("d-form-operation"),X=o("d-form");return M(),V("div",null,[t(Z,{onClick:f.openModal},{default:s(()=>[D]),_:1},8,["onClick"]),p(F("div",{class:"my-modal",onClick:_[10]||(_[10]=(...U)=>f.closeModal&&f.closeModal(...U))},[t(X,{ref:"dFormModal",formData:f.formModel,layout:"horizontal",labelSize:"lg",onSubmit:f.onSubmitForm,class:"my-form",onClick:_[9]||(_[9]=A(()=>{},["stop"]))},{default:s(()=>[t(L,{prop:"name"},{default:s(()=>[t(W,{required:""},{default:s(()=>[q]),_:1}),t(z,null,{default:s(()=>[t(P,{modelValue:f.formModel.name,"onUpdate:modelValue":_[0]||(_[0]=U=>f.formModel.name=U)},null,8,["modelValue"])]),_:1})]),_:1}),t(L,{prop:"age"},{default:s(()=>[t(W,null,{default:s(()=>[h]),_:1}),t(z,null,{default:s(()=>[t(P,{modelValue:f.formModel.age,"onUpdate:modelValue":_[1]||(_[1]=U=>f.formModel.age=U)},null,8,["modelValue"])]),_:1})]),_:1}),t(L,{prop:"city"},{default:s(()=>[t(W,null,{default:s(()=>[E]),_:1}),t(z,null,{default:s(()=>[t(j,{modelValue:f.formModel.city,"onUpdate:modelValue":_[2]||(_[2]=U=>f.formModel.city=U),options:f.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(L,{prop:"loveFruits"},{default:s(()=>[t(W,null,{default:s(()=>[C]),_:1}),t(z,null,{default:s(()=>[t(H,{tags:f.formModel.loveFruits,"onUpdate:tags":_[3]||(_[3]=U=>f.formModel.loveFruits=U),suggestionList:f.formModel.suggestionList,"onUpdate:suggestionList":_[4]||(_[4]=U=>f.formModel.suggestionList=U),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(L,{prop:"sex"},{default:s(()=>[t(W,null,{default:s(()=>[k]),_:1}),t(z,null,{default:s(()=>[t(O,{modelValue:f.formModel.sex,"onUpdate:modelValue":_[5]||(_[5]=U=>f.formModel.sex=U),value:"0"},{default:s(()=>[i]),_:1},8,["modelValue"]),t(O,{modelValue:f.formModel.sex,"onUpdate:modelValue":_[6]||(_[6]=U=>f.formModel.sex=U),value:"1"},{default:s(()=>[l]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(L,{prop:"goOffWork"},{default:s(()=>[t(W,null,{default:s(()=>[r]),_:1}),t(z,null,{default:s(()=>[t(N,{checked:f.formModel.goOffWork,"onUpdate:checked":_[7]||(_[7]=U=>f.formModel.goOffWork=U)},null,8,["checked"])]),_:1})]),_:1}),t(L,{prop:"ladySupport"},{default:s(()=>[t(W,null,{default:s(()=>[d]),_:1}),t(z,null,{default:s(()=>[t(K,{modelValue:f.formModel.ladySupport,"onUpdate:modelValue":_[8]||(_[8]=U=>f.formModel.ladySupport=U),label:"1818\u9EC4\u91D1\u773C"},{default:s(()=>[t(T,{label:"\u90D1\u5973\u58EB",value:"ladyZheng"}),t(T,{label:"\u5C0F\u6BDB",value:"ladyMao"}),t(T,{label:"\u5C0F\u5218",value:"ladyLiu"}),t(T,{label:"\u5C0F\u848B",value:"ladyJiang"}),t(T,{label:"\u5C0F\u6ED5",value:"ladyTeng"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(Q,{class:"demo-form-operation"},{default:s(()=>[t(Z,{type:"submit",class:"demo-btn"},{default:s(()=>[g]),_:1}),t(Z,{bsStyle:"common",onClick:f.resetForm},{default:s(()=>[y]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])],512),[[v,f.showModal]])])}const{defineComponent:e,reactive:m,ref:B}=w,b=e({setup(f,_){const Z=B(null);let W=m({name:"AlanLee",age:"24",city:"",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermalon"},{name:"peach"}],sex:"0",goOffWork:!0,ladySupport:["ladyZheng"]});const P=m(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]),z=()=>{console.log("dFormModal",Z.value),Z.value.resetFormFields()},L=()=>{console.log("onSubmitForm formModel",W)},j=B(!1);return{dFormModal:Z,formModel:W,selectOptions:P,resetForm:z,onSubmitForm:L,showModal:j,openModal:()=>{j.value=!0},closeModal:()=>{j.value=!1}}}});return R({render:c},b)}(),"render-demo-3":function(){const{renderList:u,Fragment:o,openBlock:s,createElementBlock:t,createTextVNode:A,resolveComponent:v,withCtx:F,createVNode:p}=w,M=A("Name"),V=A("Love Fruits"),D=A("Sex"),q=A("\u7537"),h=A("\u5973"),E=A("Go off work"),C=A("Support lady"),k=A("\u63D0\u4EA4"),i=A("\u91CD\u7F6E");function l(c,e){const m=v("d-form-label"),B=v("d-input"),b=v("d-form-control"),f=v("d-form-item"),_=v("d-tag-input"),Z=v("d-radio"),W=v("d-switch"),P=v("d-checkbox"),z=v("d-checkbox-group"),L=v("d-button"),j=v("d-form-operation"),H=v("d-form");return s(),t("div",null,[p(H,{ref:"dFormColumn",layout:"columns",columnsClass:"u-1-3",formData:c.formModel,onSubmit:c.onSubmitForm},{default:F(()=>[(s(),t(o,null,u(6,O=>p(f,{prop:"name",key:O,class:"column-item"},{default:F(()=>[p(m,{required:"",hasHelp:""},{default:F(()=>[M]),_:1}),p(b,null,{default:F(()=>[p(B)]),_:1})]),_:2},1024)),64)),p(f,{prop:"loveFruits",class:"column-item"},{default:F(()=>[p(m,null,{default:F(()=>[V]),_:1}),p(b,null,{default:F(()=>[p(_,{tags:c.formModel.loveFruits,"onUpdate:tags":e[0]||(e[0]=O=>c.formModel.loveFruits=O),suggestionList:c.formModel.suggestionList,"onUpdate:suggestionList":e[1]||(e[1]=O=>c.formModel.suggestionList=O),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),p(f,{prop:"sex",class:"column-item"},{default:F(()=>[p(m,null,{default:F(()=>[D]),_:1}),p(b,null,{default:F(()=>[p(Z,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[2]||(e[2]=O=>c.formModel.sex=O),value:"0"},{default:F(()=>[q]),_:1},8,["modelValue"]),p(Z,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[3]||(e[3]=O=>c.formModel.sex=O),value:"1"},{default:F(()=>[h]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(f,{prop:"goOffWork",class:"column-item"},{default:F(()=>[p(m,null,{default:F(()=>[E]),_:1}),p(b,null,{default:F(()=>[p(W,{checked:c.formModel.goOffWork,"onUpdate:checked":e[4]||(e[4]=O=>c.formModel.goOffWork=O)},null,8,["checked"])]),_:1})]),_:1}),p(f,{prop:"ladySupport",class:"column-item"},{default:F(()=>[p(m,null,{default:F(()=>[C]),_:1}),p(b,null,{default:F(()=>[p(z,{modelValue:c.formModel.ladySupport,"onUpdate:modelValue":e[5]||(e[5]=O=>c.formModel.ladySupport=O),label:"1818\u9EC4\u91D1\u773C"},{default:F(()=>[p(P,{label:"\u90D1\u5973\u58EB",value:"ladyZheng"}),p(P,{label:"\u5C0F\u6BDB",value:"ladyMao"}),p(P,{label:"\u5C0F\u5218",value:"ladyLiu"}),p(P,{label:"\u5C0F\u848B",value:"ladyJiang"}),p(P,{label:"\u5C0F\u6ED5",value:"ladyTeng"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(j,{class:"demo-form-operation"},{default:F(()=>[p(L,{type:"submit",class:"demo-btn"},{default:F(()=>[k]),_:1}),p(L,{bsStyle:"common",onClick:c.resetForm},{default:F(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:g}=w,y=r({setup(c,e){const m=g(null);let B=d({name:"AlanLee",age:"24",city:"",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermalon"},{name:"peach"}],sex:"0",goOffWork:!0,ladySupport:["ladyZheng"]});const b=d(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]);return{dFormColumn:m,formModel:B,selectOptions:b,resetForm:()=>{console.log("dFormColumn",m.value),m.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",B)}}}});return R({render:l},y)}(),"render-demo-4":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("Name");function V(C,k){const i=o("d-form-label"),l=o("d-input"),r=o("d-form-control"),d=o("d-form-item"),g=o("d-form"),y=A("d-validate-rules");return F(),p("div",null,[t(g,{ref:"dFormTemplateValidate1",formData:C.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"name"},{default:s(()=>[t(i,{required:""},{default:s(()=>[M]),_:1}),t(r,null,{default:s(()=>[v(t(l,{modelValue:C.formModel.name,"onUpdate:modelValue":k[0]||(k[0]=c=>C.formModel.name=c)},null,8,["modelValue"]),[[y,[{maxlength:8},{pattern:/^[a-zA-Z\d]+(\s+[a-zA-Z\d]+)*$/,message:{"zh-cn":"\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26","en-us":"The value cannot contain characters except uppercase and lowercase letters.",default:"\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26"}}]]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:D,reactive:q,ref:h}=w,E=D({setup(C,k){const i=h(null);let l=q({name:"AlanLee"});return{dFormTemplateValidate1:i,formModel:l}}});return R({render:V},E)}(),"render-demo-5":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),V=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09");function D(k,i){const l=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),y=o("d-form"),c=A("d-validate-rules");return F(),p("div",null,[t(y,{ref:"dFormTemplateValidate2",formData:k.formModel,labelSize:"lg"},{default:s(()=>[t(g,{prop:"sum"},{default:s(()=>[t(l,null,{default:s(()=>[M]),_:1}),t(d,null,{default:s(()=>[v(t(r,{modelValue:k.formModel.sum,"onUpdate:modelValue":i[0]||(i[0]=e=>k.formModel.sum=e)},null,8,["modelValue"]),[[c,{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:k.customValidator},{message:"\u7B54\u5BF9\u5566\uFF01",validator:k.customValidator2}]}]])]),_:1})]),_:1}),t(g,{prop:"asyncSum"},{default:s(()=>[t(l,null,{default:s(()=>[V]),_:1}),t(d,null,{default:s(()=>[v(t(r,{modelValue:k.formModel.asyncSum,"onUpdate:modelValue":i[1]||(i[1]=e=>k.formModel.asyncSum=e)},null,8,["modelValue"]),[[c,{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:k.customAsyncValidator},{message:"\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09",asyncValidator:k.customAsyncValidator2}]}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:q,reactive:h,ref:E}=w,C=q({setup(k,i){const l=E(null);let r=h({sum:"",asyncSum:""});return{dFormTemplateValidate2:l,formModel:r,customValidator:(e,m)=>m=="2",customValidator2:(e,m)=>m!="2",customAsyncValidator:(e,m)=>m=="3",customAsyncValidator2:(e,m)=>m!="3"}}});return R({render:D},C)}(),"render-demo-6":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),V=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),D=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F");function q(i,l){const r=o("d-form-label"),d=o("d-input"),g=o("d-form-control"),y=o("d-form-item"),c=o("d-form"),e=A("d-validate-rules");return F(),p("div",null,[t(c,{ref:"dFormTemplateValidate3",formData:i.formModel,labelSize:"lg"},{default:s(()=>[t(y,{prop:"sum"},{default:s(()=>[t(r,null,{default:s(()=>[M]),_:1}),t(g,{extraInfo:"updateOn\u4E3Achange\uFF0C\u5F53\u8F93\u5165\u5B8C\u6210\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"},{default:s(()=>[v(t(d,{modelValue:i.formModel.sum,"onUpdate:modelValue":l[0]||(l[0]=m=>i.formModel.sum=m)},null,8,["modelValue"]),[[e,{rules:{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:i.customValidator},{message:"\u7B54\u5BF9\u5566\uFF01",validator:i.customValidator2}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(y,{prop:"asyncSum"},{default:s(()=>[t(r,null,{default:s(()=>[V]),_:1}),t(g,{extraInfo:"updateOn\u4E3Ainput\uFF0C\u5F53\u6B63\u5728\u8F93\u5165\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"},{default:s(()=>[v(t(d,{modelValue:i.formModel.asyncSum,"onUpdate:modelValue":l[1]||(l[1]=m=>i.formModel.asyncSum=m)},null,8,["modelValue"]),[[e,{rules:{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:i.customAsyncValidator},{message:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57\uFF01",asyncValidator:i.customAsyncValidator2}]},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(y,{prop:"errorSum"},{default:s(()=>[t(r,null,{default:s(()=>[D]),_:1}),t(g,{extraInfo:"errorStrategy\u4E3Apristine\uFF0C\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"},{default:s(()=>[v(t(d,{modelValue:i.formModel.errorSum,"onUpdate:modelValue":l[2]||(l[2]=m=>i.formModel.errorSum=m)},null,8,["modelValue"]),[[e,{errorStrategy:"pristine",rules:{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:i.customValidator3}]},options:{updateOn:"input"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:h,reactive:E,ref:C}=w,k=h({setup(i,l){const r=C(null);let d=E({sum:"",asyncSum:"",errorSum:"3"});return{dFormTemplateValidate3:r,formModel:d,customValidator:(B,b)=>b=="2",customValidator2:(B,b)=>b!="2",customAsyncValidator:(B,b)=>b=="3",customAsyncValidator2:(B,b)=>/^[\d]+(\s+[\d]+)*$/.test(b),customValidator3:(B,b)=>b=="2"}}});return R({render:q},k)}(),"render-demo-7":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),V=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F");function D(k,i){const l=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),y=o("d-form"),c=A("d-validate-rules");return F(),p("div",null,[t(y,{ref:"dFormTemplateValidate4",formData:k.formModel,labelSize:"lg"},{default:s(()=>[t(g,{prop:"sum"},{default:s(()=>[t(l,null,{default:s(()=>[M]),_:1}),t(d,{extraInfo:"messageShowType\u4E3Anone\uFF0C\u4E0D\u663E\u793A\u63D0\u793A\u6587\u5B57"},{default:s(()=>[v(t(r,{modelValue:k.formModel.sum,"onUpdate:modelValue":i[0]||(i[0]=e=>k.formModel.sum=e)},null,8,["modelValue"]),[[c,{messageShowType:"none",rules:{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:k.customValidator}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(g,{prop:"asyncSum"},{default:s(()=>[t(l,null,{default:s(()=>[V]),_:1}),t(d,{extraInfo:"messageShowType\u4E3Apopover\uFF0C\u4F7F\u7528popover\u8FDB\u884C\u63D0\u793A"},{default:s(()=>[v(t(r,{modelValue:k.formModel.asyncSum,"onUpdate:modelValue":i[1]||(i[1]=e=>k.formModel.asyncSum=e)},null,8,["modelValue"]),[[c,{rules:{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:k.customAsyncValidator}]},options:{updateOn:"input",messageShowType:"popover",popPosition:"bottom"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:q,reactive:h,ref:E}=w,C=q({setup(k,i){const l=E(null);let r=h({sum:"",asyncSum:""});return{dFormTemplateValidate4:l,formModel:r,customValidator:(y,c)=>c=="2",customAsyncValidator:(y,c)=>c=="3"}}});return R({render:D},C)}(),"render-demo-8":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09");function V(C,k){const i=o("d-form-label"),l=o("d-input"),r=o("d-form-control"),d=o("d-form-item"),g=o("d-form"),y=A("d-validate-rules");return F(),p("div",null,[t(g,{ref:"dFormTemplateValidate5",formData:C.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"asyncSum"},{default:s(()=>[t(i,null,{default:s(()=>[M]),_:1}),t(r,{extraInfo:"asyncDebounceTime\u4E3A500"},{default:s(()=>[v(t(l,{modelValue:C.formModel.asyncSum,"onUpdate:modelValue":k[0]||(k[0]=c=>C.formModel.asyncSum=c)},null,8,["modelValue"]),[[y,{rules:{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:C.customAsyncValidator}]},options:{updateOn:"input",asyncDebounceTime:500}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:D,reactive:q,ref:h}=w,E=D({setup(C,k){const i=h(null);let l=q({asyncSum:""});return{dFormTemplateValidate5:i,formModel:l,customAsyncValidator:(d,g)=>g=="3"}}});return R({render:V},E)}(),"render-demo-9":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("Name"),V=u("Age"),D=u("\u63D0\u4EA4"),q=u("\u91CD\u7F6E");function h(l,r){const d=o("d-form-label"),g=o("d-input"),y=o("d-form-control"),c=o("d-form-item"),e=o("d-button"),m=o("d-form-operation"),B=o("d-form"),b=A("d-validate-rules");return F(),p("div",null,[t(B,{name:"userInfoForm",ref:"dFormTemplateValidate6",formData:l.formModel,labelSize:"lg",onSubmit:l.onSubmit},{default:s(()=>[t(c,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[M]),_:1}),t(y,null,{default:s(()=>[v(t(g,{modelValue:l.formModel.name,"onUpdate:modelValue":r[0]||(r[0]=f=>l.formModel.name=f)},null,8,["modelValue"]),[[b,{rules:{minlength:2,message:"\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(c,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[V]),_:1}),t(y,null,{default:s(()=>[v(t(g,{modelValue:l.formModel.age,"onUpdate:modelValue":r[1]||(r[1]=f=>l.formModel.age=f)},null,8,["modelValue"]),[[b,{rules:{min:1,message:"\u5E74\u9F84\u9700\u5927\u4E8E0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(m,{class:"demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"demo-btn"},{default:s(()=>[D]),_:1}),t(e,{bsStyle:"common",onClick:l.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:E,reactive:C,ref:k}=w,i=E({setup(l,r){const d=k(null);let g=C({name:"",age:""});return{dFormTemplateValidate6:d,formModel:g,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return R({render:h},i)}(),"render-demo-10":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("Name"),V=u("Age"),D=u("\u63D0\u4EA4"),q=u("\u91CD\u7F6E");function h(l,r){const d=o("d-form-label"),g=o("d-input"),y=o("d-form-control"),c=o("d-form-item"),e=o("d-button"),m=o("d-form-operation"),B=o("d-form"),b=A("d-validate-rules");return F(),p("div",null,[v(t(B,{name:"userInfoForm2",ref:"dFormTemplateValidate7",formData:l.formModel,labelSize:"lg",onSubmit:l.onSubmit,messageShowType:"text"},{default:s(()=>[t(c,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[M]),_:1}),t(y,null,{default:s(()=>[v(t(g,{modelValue:l.formModel.name,"onUpdate:modelValue":r[0]||(r[0]=f=>l.formModel.name=f)},null,8,["modelValue"]),[[b,{rules:{minlength:2,message:"\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(c,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[V]),_:1}),t(y,null,{default:s(()=>[v(t(g,{modelValue:l.formModel.age,"onUpdate:modelValue":r[1]||(r[1]=f=>l.formModel.age=f)},null,8,["modelValue"]),[[b,{rules:{min:1,message:"\u5E74\u9F84\u9700\u5927\u4E8E0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(m,{class:"demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"demo-btn"},{default:s(()=>[D]),_:1}),t(e,{bsStyle:"common",onClick:l.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"]),[[b,{rules:{message:"\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7"}}]])])}const{defineComponent:E,reactive:C,ref:k}=w,i=E({setup(l,r){const d=k(null);let g=C({name:"",age:""});return{dFormTemplateValidate7:d,formModel:g,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return R({render:h},i)}(),"render-demo-11":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:A,createElementBlock:v}=w,F=u("Name"),p=u("Age");function M(E,C){const k=o("d-form-label"),i=o("d-input"),l=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return A(),v("div",null,[t(d,{ref:"dFormReactiveValidate","form-data":E.validateFormModel,rules:E.rules},{default:s(()=>[t(r,{prop:"name"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[F]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:E.validateFormModel.name,"onUpdate:modelValue":C[0]||(C[0]=g=>E.validateFormModel.name=g)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{prop:"age"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[p]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:E.validateFormModel.age,"onUpdate:modelValue":C[1]||(C[1]=g=>E.validateFormModel.age=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data","rules"])])}const{defineComponent:V,reactive:D,ref:q}=w,h=V({setup(E,C){const k=q(null);let i=D({name:"AlanLee",age:"24"});const l=D({name:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],age:[{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E0",trigger:"blur",validator:(r,d)=>d>0},{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E120",trigger:"input",validator:(r,d)=>d<120}]});return{dFormReactiveValidate:k,rules:l,validateFormModel:i}}});return R({render:M},h)}(),"render-demo-12":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:A,createElementBlock:v}=w,F=u("Name"),p=u("Nickname"),M=u("Age"),V=u("Sex");function D(k,i){const l=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),y=o("d-select"),c=o("d-form");return A(),v("div",null,[t(c,{ref:"dFormFeedback","form-data":k.formModel},{default:s(()=>[t(g,{prop:"name"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[F]),_:1}),t(d,{feedbackStatus:"pending"},{default:s(()=>[t(r,{modelValue:k.formModel.name,"onUpdate:modelValue":i[0]||(i[0]=e=>k.formModel.name=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"nickname"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[p]),_:1}),t(d,{feedbackStatus:"success"},{default:s(()=>[t(r,{modelValue:k.formModel.nickname,"onUpdate:modelValue":i[1]||(i[1]=e=>k.formModel.nickname=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"age"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[M]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(r,{modelValue:k.formModel.age,"onUpdate:modelValue":i[2]||(i[2]=e=>k.formModel.age=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"sex"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[V]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(y,{modelValue:k.formModel.sex,"onUpdate:modelValue":i[3]||(i[3]=e=>k.formModel.sex=e),options:k.sexSelectOptions,placeholder:"Select your sex"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:q,reactive:h,ref:E}=w,C=q({setup(k,i){const l=E(null);let r=h({name:"AlanLee",nickname:"AlanLee97",age:"24",sex:"\u7537"});const d=h(["\u7537","\u5973"]);return{dFormFeedback:l,formModel:r,sexSelectOptions:d}}});return R({render:D},C)}(),"render-demo-13":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:A,createElementBlock:v}=w,F=u("Address");function p(h,E){const C=o("d-form-label"),k=o("d-input"),i=o("d-icon"),l=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return A(),v("div",null,[t(d,{ref:"dFormFeedback2","form-data":h.formModel},{default:s(()=>[t(r,{prop:"address"},{default:s(()=>[t(C,{required:!0},{default:s(()=>[F]),_:1}),t(l,null,{suffixTemplate:s(()=>[t(i,{name:"right-o",color:"rgb(61, 204, 166)"})]),default:s(()=>[t(k,{modelValue:h.formModel.address,"onUpdate:modelValue":E[0]||(E[0]=g=>h.formModel.address=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:M,reactive:V,ref:D}=w,q=M({setup(h,E){const C=D(null);let k=V({address:"\u6DF1\u5733\u5357\u5C71\u533A"});return{dFormFeedback2:C,formModel:k}}});return R({render:p},q)}(),"render-demo-14":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:A,withDirectives:v,openBlock:F,createElementBlock:p}=w,M=u("Username"),V=u("Password"),D=u("Confirm Password"),q=u("\u63D0\u4EA4"),h=u("\u91CD\u7F6E");function E(r,d){const g=o("d-form-label"),y=o("d-input"),c=o("d-form-control"),e=o("d-form-item"),m=o("d-button"),B=o("d-form-operation"),b=o("d-form"),f=A("d-validate-rules");return F(),p("div",null,[t(b,{name:"togetherValidateForm",ref:"dFormTogetherValidate","form-data":r.formModel,labelSize:"lg",onSubmit:r.onSubmit},{default:s(()=>[t(e,{prop:"username"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[M]),_:1}),t(c,null,{default:s(()=>[v(t(y,{modelValue:r.formModel.username,"onUpdate:modelValue":d[0]||(d[0]=_=>r.formModel.username=_)},null,8,["modelValue"]),[[f,r.formRules.userNameRule]])]),_:1})]),_:1}),t(e,{prop:"password"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[V]),_:1}),t(c,null,{default:s(()=>[v(t(y,{modelValue:r.formModel.password,"onUpdate:modelValue":d[1]||(d[1]=_=>r.formModel.password=_)},null,8,["modelValue"]),[[f,r.formRules.passwordRule]])]),_:1})]),_:1}),t(e,{prop:"confirmPassword"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[D]),_:1}),t(c,null,{default:s(()=>[v(t(y,{modelValue:r.formModel.confirmPassword,"onUpdate:modelValue":d[2]||(d[2]=_=>r.formModel.confirmPassword=_)},null,8,["modelValue"]),[[f,r.formRules.confirmPasswordRule]])]),_:1})]),_:1}),t(B,{class:"demo-form-operation"},{default:s(()=>[t(m,{type:"submit",class:"demo-btn"},{default:s(()=>[q]),_:1}),t(m,{bsStyle:"common",onClick:r.resetForm},{default:s(()=>[h]),_:1},8,["onClick"])]),_:1})]),_:1},8,["form-data","onSubmit"])])}const{defineComponent:C,reactive:k,ref:i}=w,l=C({setup(r,d){const g=i(null);let y=k({username:"",password:"",confirmPassword:""});return{dFormTogetherValidate:g,formModel:y,formRules:{userNameRule:{rules:{minlength:6,message:"\u6700\u5C0F6\u4E2A\u5B57\u7B26"}},passwordRule:{rules:{minlength:6,message:"\u6700\u5C0F6\u4E2A\u5B57\u7B26"}},confirmPasswordRule:{options:{updateOn:"input"},rules:{minlength:6,message:"\u6700\u5C0F6\u4E2A\u5B57\u7B26",validators:[{message:"\u786E\u8BA4\u5BC6\u7801\u4E0E\u5BC6\u7801\u4E0D\u76F8\u7B26",validator:(B,b)=>b===y.password}]}}},resetForm:()=>{g.value.resetFormFields()},onSubmit:B=>{console.log("@submit")}}}});return R({render:E},l)}(),"render-demo-15":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:A,createElementBlock:v}=w,F=u("Name"),p=u("Age");function M(E,C){const k=o("d-form-label"),i=o("d-input"),l=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return A(),v("div",null,[t(d,{ref:"dFormWithComponent","form-data":E.formModel},{default:s(()=>[t(r,{prop:"name"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[F]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:E.formModel.name,"onUpdate:modelValue":C[0]||(C[0]=g=>E.formModel.name=g)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{prop:"age"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[p]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:E.formModel.age,"onUpdate:modelValue":C[1]||(C[1]=g=>E.formModel.age=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:V,reactive:D,ref:q}=w,h=V({setup(E,C){const k=q(null);let i=D({name:"AlanLee",age:"24"});return{dFormWithComponent:k,formModel:i}}});return R({render:M},h)}()}},ra='{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6A2A\u5411\u6392\u5217","slug":"\u6A2A\u5411\u6392\u5217"},{"level":3,"title":"\u5F39\u6846\u8868\u5355","slug":"\u5F39\u6846\u8868\u5355"},{"level":3,"title":"\u591A\u5217\u8868\u5355","slug":"\u591A\u5217\u8868\u5355"},{"level":3,"title":"\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1","slug":"\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1"},{"level":3,"title":"\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1","slug":"\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1"},{"level":3,"title":"\u6307\u5B9A\u8868\u5355Feedback\u72B6\u6001","slug":"\u6307\u5B9A\u8868\u5355feedback\u72B6\u6001"},{"level":3,"title":"\u8868\u5355\u534F\u540C\u9A8C\u8BC1","slug":"\u8868\u5355\u534F\u540C\u9A8C\u8BC1"},{"level":3,"title":"\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1","slug":"\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1"},{"level":3,"title":"Form Attributes","slug":"form-attributes"},{"level":3,"title":"Form Methods","slug":"form-methods"},{"level":3,"title":"Form-Item Attributes","slug":"form-item-attributes"},{"level":3,"title":"Form-Lable Attributes","slug":"form-lable-attributes"},{"level":3,"title":"Form-Control Attributes","slug":"form-control-attributes"},{"level":3,"title":"Directives","slug":"directives"}],"relativePath":"components/form/index.md","lastUpdated":1638282474063}',un=J('<h1 id="form-\u8868\u5355" tabindex="-1">Form \u8868\u5355 <a class="header-anchor" href="#form-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u8868\u5355\u7528\u4E8E\u6536\u96C6\u6570\u636E</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u9700\u8981\u8FDB\u884C\u6570\u636E\u6536\u96C6\u3001\u6570\u636E\u6821\u9A8C\u3001\u6570\u636E\u63D0\u4EA4\u529F\u80FD\u65F6\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3><blockquote><p>done</p></blockquote><p>\u57FA\u672C\u7528\u6CD5\u5F53\u4E2D\uFF0CLabel\u662F\u5728\u6570\u636E\u6846\u7684\u4E0A\u9762\u3002</p>',7),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormBasic"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),a(),n("span",{class:"token attr-name"},"hasHelp"),a(),n("span",{class:"token attr-name"},"helpTips"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u540D\u5B57\u53EF\u4EE5\u968F\u610F\u586B"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8FD9\u884C\u662F\u8BF4\u660E\u6587\u5B57\uFF0C\u53EF\u4EE5\u4E0D\u7528\u7406\uFF0C\u4F60\u5C3D\u7BA1\u586B\u4F60\u7684\u59D3\u540D\u3002"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("City"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Love Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Go off work, I nerver to be a Juan King!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladySupport"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Which lady you would like to support?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.ladySupport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1818\u9EC4\u91D1\u773C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u90D1\u5973\u58EB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyZheng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6BDB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyMao"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u5218"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyLiu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u848B"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyJiang"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6ED5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyTeng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormBasic "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermalon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      goOffWork`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      ladySupport`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ladyZheng'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formData reset before'"),n("span",{class:"token punctuation"},","),a(" dFormBasic"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("formData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormBasic`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formData reset after'"),n("span",{class:"token punctuation"},","),a(" dFormBasic"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("formData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormBasic`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),pn=n("h3",{id:"\u6A2A\u5411\u6392\u5217",tabindex:"-1"},[a("\u6A2A\u5411\u6392\u5217 "),n("a",{class:"header-anchor",href:"#\u6A2A\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),ln=n("blockquote",null,[n("p",null,"done")],-1),rn=n("p",null,"Label\u5DE6\u53F3\u5E03\u5C40\u65B9\u5F0F\u3002",-1),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormHorizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("City"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Love Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Go off work"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladySupport"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Support lady"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.ladySupport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1818\u9EC4\u91D1\u773C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u90D1\u5973\u58EB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyZheng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6BDB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyMao"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u5218"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyLiu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u848B"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyJiang"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6ED5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyTeng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormHorizontal "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermalon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      goOffWork`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      ladySupport`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ladyZheng'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dFormHorizontal'"),n("span",{class:"token punctuation"},","),a(" dFormHorizontal"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormHorizontal`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormHorizontal`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),dn=n("h3",{id:"\u5F39\u6846\u8868\u5355",tabindex:"-1"},[a("\u5F39\u6846\u8868\u5355 "),n("a",{class:"header-anchor",href:"#\u5F39\u6846\u8868\u5355","aria-hidden":"true"},"#")],-1),mn=n("blockquote",null,[n("p",null,[a("todo "),n("br"),a(" \u5F85\u66FF\u6362\u4E3AModal\u7EC4\u4EF6")])],-1),fn=n("p",null,"\u5F39\u6846\u8868\u5355\uFF0C\u5F39\u6846\u5EFA\u8BAE\u662F400px\uFF0C550px\uFF0C700px\uFF0C900px\uFF0C\u5EFA\u8BAE\u5BBD\u9AD8\u6BD4\u662F16: 9\u30013: 2\u3002",-1),gn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("openModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("my-modal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("my-form"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click.stop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("() => {}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("City"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Love Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
            `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Go off work"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladySupport"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Support lady"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.ladySupport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1818\u9EC4\u91D1\u773C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u90D1\u5973\u58EB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyZheng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6BDB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyMao"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u5218"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyLiu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u848B"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyJiang"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6ED5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyTeng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormModal "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermalon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      goOffWork`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      ladySupport`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ladyZheng'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dFormModal'"),n("span",{class:"token punctuation"},","),a(" dFormModal"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormModal`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" showModal "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"openModal"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showModal`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"closeModal"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showModal`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormModal`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm`),n("span",{class:"token punctuation"},","),a(`
      showModal`),n("span",{class:"token punctuation"},","),a(`
      openModal`),n("span",{class:"token punctuation"},","),a(`
      closeModal
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-modal"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" fixed"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100vw"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 100vh"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),a(" 10000"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" auto"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),a("0"),n("span",{class:"token punctuation"},","),a(" 0"),n("span",{class:"token punctuation"},","),a(" 0"),n("span",{class:"token punctuation"},","),a(" 0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".my-form"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #fff"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 60vw"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Fn=n("h3",{id:"\u591A\u5217\u8868\u5355",tabindex:"-1"},[a("\u591A\u5217\u8868\u5355 "),n("a",{class:"header-anchor",href:"#\u591A\u5217\u8868\u5355","aria-hidden":"true"},"#")],-1),vn=n("blockquote",null,[n("p",null,"done")],-1),Cn=n("p",null,[a("\u591A\u5217\u8868\u5355\u3002layout\u7684\u5C5E\u6027\u4E3A"),n("code",null,"columns"),a('\uFF0C\u540C\u65F6\u642D\u914DcolumnsClass\u5C5E\u6027\uFF0C\u503C\u4E3A"u-[row]-[col]"\uFF0C\u4F8B\u5982'),n("code",null,"u-1-3"),a("\u4E3A1\u884C3\u5217\u3002")],-1),En=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormColumn"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"columnsClass"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("u-1-3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item) in 6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),a(),n("span",{class:"token attr-name"},"hasHelp"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Love Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("goOffWork"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Go off work"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.goOffWork"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladySupport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Support lady"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.ladySupport"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1818\u9EC4\u91D1\u773C"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u90D1\u5973\u58EB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyZheng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6BDB"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyMao"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u5218"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyLiu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u848B"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyJiang"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5C0F\u6ED5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ladyTeng"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormColumn "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermalon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      goOffWork`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      ladySupport`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'ladyZheng'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dFormColumn'"),n("span",{class:"token punctuation"},","),a(" dFormColumn"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormColumn`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormColumn`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),bn=J('<h3 id="\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1" tabindex="-1">\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1 <a class="header-anchor" href="#\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1" aria-hidden="true">#</a></h3><blockquote><p>doing</p></blockquote><p>\u5728<code>d-form</code>\u3001<code>d-input</code>\u7B49\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E0A\u4F7F\u7528<code>v-d-validate-rules</code>\u6307\u4EE4\uFF0C\u914D\u7F6E\u6821\u9A8C\u89C4\u5219\u3002</p><h4 id="\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u4F7F\u7528\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u914D\u7F6Eerror-message" tabindex="-1">\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u4F7F\u7528\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u914D\u7F6Eerror message <a class="header-anchor" href="#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u4F7F\u7528\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u914D\u7F6Eerror-message" aria-hidden="true">#</a></h4><blockquote><p>done</p><p>\u5F85\u652F\u6301\u56FD\u9645\u5316\u8BCD\u6761\u914D\u7F6E</p></blockquote><p>\u5F53\u524DDevUI\u652F\u6301\u7684\u5185\u7F6E\u6821\u9A8C\u5668\u6709\uFF1A<code>required</code>\u3001<code>minlength</code>\u3001<code>maxlength</code>\u3001<code>min</code>\u3001<code>max</code>\u3001<code>requiredTrue</code>\u3001<code>email</code>\u3001<code>pattern</code>\u3001<code>whitespace</code>\u3002<br></p><ul><li>\u82E5\u9700\u9650\u5236\u7528\u6237\u8F93\u5165\u4E0D\u80FD\u5168\u4E3A\u7A7A\u683C\uFF0C\u53EF\u4F7F\u7528<code>whitespace</code>\u5185\u7F6E\u6821\u9A8C\u5668<br></li><li>\u82E5\u9700\u9650\u5236\u7528\u6237\u8F93\u5165\u957F\u5EA6\uFF0C\u5C06\u6700\u5927\u9650\u5236\u8BBE\u7F6E\u4E3A\u5B9E\u9645\u6821\u9A8C\u503C<code>+1</code>\u662F\u4E00\u4E2A\u597D\u7684\u529E\u6CD5\u3002<br></li><li>\u9664<code>pattern</code>\u5916\uFF0C\u5176\u4ED6\u5185\u7F6E\u6821\u9A8C\u5668\u6211\u4EEC\u4E5F\u63D0\u4F9B\u4E86\u5185\u7F6E\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5728\u4F60\u672A\u81EA\u5B9A\u4E49\u63D0\u793A\u6D88\u606F\u65F6\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u9ED8\u8BA4\u7684\u63D0\u793A\u4FE1\u606F\u3002<br></li><li>message\u914D\u7F6E\u652F\u6301string\u4E0Eobject\u4E24\u79CD\u5F62\u5F0F\uFF08\u652F\u6301\u56FD\u9645\u5316\u8BCD\u6761\u914D\u7F6E\uFF0C\u5982<code>&#39;zh-cn&#39;</code>\uFF0C\u9ED8\u8BA4\u5C06\u53D6<code>&#39;default&#39;</code>\uFF09\u3002</li></ul>',7),_n=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
          {
            maxlength: 8,
          },
          {
            pattern: /^[a-zA-Z\\d]+(\\s+[a-zA-Z\\d]+)*$/, 
            message: {
              `),n("span",{class:"token punctuation"},"'"),a("zh-cn"),n("span",{class:"token punctuation"},"'"),a(": "),n("span",{class:"token punctuation"},"'"),a("\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`, 
              `),n("span",{class:"token punctuation"},"'"),a("en-us"),n("span",{class:"token punctuation"},"'"),a(": "),n("span",{class:"token punctuation"},"'"),a("The value cannot contain characters except uppercase and lowercase letters."),n("span",{class:"token punctuation"},"'"),a(`, 
              default: `),n("span",{class:"token punctuation"},"'"),a("\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`
            }
          }
        ]`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate1`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),yn=n("h4",{id:"\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668",tabindex:"-1"},[a("\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668 "),n("a",{class:"header-anchor",href:"#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668","aria-hidden":"true"},"#")],-1),An=n("blockquote",null,[n("p",null,"done")],-1),Bn=n("p",null,[a("\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\uFF0C\u53EF\u4F20\u5165"),n("code",null,"validators"),a("\u5B57\u6BB5\u914D\u7F6E\u6821\u9A8C\u89C4\u5219\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u8FD4\u56DE"),n("code",null,"true | false "),a("\u6765\u6807\u8BC6\u5F53\u524D\u6821\u9A8C\u662F\u5426\u901A\u8FC7\uFF0C\u6765\u6807\u8BC6\u5F53\u524D\u662F\u5426\u9519\u8BEF\u5E76\u8FD4\u56DE\u9519\u8BEF\u6D88\u606F\uFF0C\u9002\u7528\u4E8E\u52A8\u6001\u9519\u8BEF\u63D0\u793A\u3002\u5982\u679C\u662F\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u53EF\u4F20\u5165"),n("code",null,"asyncValidators"),a("\u5B57\u6BB5\u914D\u7F6E\u6821\u9A8C\u89C4\u5219\u3002")],-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          validators: [
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator},
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u7B54\u5BF9\u5566\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator2}
          ]
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          asyncValidators: [
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator},
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator2}
          ]
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      sum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u4E0D\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate2`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customValidator`),n("span",{class:"token punctuation"},","),a(`
      customValidator2`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Dn=J('<h4 id="\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u914D\u7F6E\u9519\u8BEF\u66F4\u65B0\u7B56\u7565errorstrategy\u3001\u6821\u9A8C\u65F6\u673Aupdateon" tabindex="-1">\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u914D\u7F6E\u9519\u8BEF\u66F4\u65B0\u7B56\u7565errorStrategy\u3001\u6821\u9A8C\u65F6\u673AupdateOn <a class="header-anchor" href="#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u914D\u7F6E\u9519\u8BEF\u66F4\u65B0\u7B56\u7565errorstrategy\u3001\u6821\u9A8C\u65F6\u673Aupdateon" aria-hidden="true">#</a></h4><blockquote><p>done</p></blockquote><p>\u8BBE\u7F6E<code>errorStrategy</code>\u5C5E\u6027\u521D\u59CB\u5316\u65F6\u662F\u5426\u8FDB\u884C\u6821\u9A8C\uFF0C \u9ED8\u8BA4\u914D\u7F6E\u4E3A<code>dirty</code>\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u8FDB\u884C\u9519\u8BEF\u63D0\u793A\uFF1B\u82E5\u9700\u8981\u5728\u521D\u59CB\u5316\u65F6\u5C06\u9519\u8BEF\u629B\u51FA\uFF0C\u53EF\u914D\u7F6E\u4E3A<code>pristine</code>\u3002</p><p>\u8BBE\u7F6E<code>updateOn</code>\uFF0C\u6307\u5B9A\u6821\u9A8C\u7684\u65F6\u673A\u3002 \u6821\u9A8C\u5668<code>updateOn</code>\u57FA\u4E8E\u4F60\u7ED1\u5B9A\u7684\u6A21\u578B\u7684<code>updateOn</code>\u8BBE\u7F6E\uFF0C \u4F60\u53EF\u4EE5\u901A\u8FC7<code>options</code>\u6765\u6307\u5B9A\uFF0C \u9ED8\u8BA4\u4E3A<code>change</code>\uFF0C\u53EF\u9009\u503C\u8FD8\u6709<code>blur</code> \u3001<code>input</code>\u3001<code>submit</code>\u3001 \u8BBE\u7F6E\u4E3A<code>submit</code>\uFF0C\u5219\u5F53\u5143\u7D20\u6240\u5728\u8868\u5355\u8FDB\u884C\u63D0\u4EA4\u65F6\u5C06\u89E6\u53D1\u6821\u9A8C\u3002\uFF08\u5F85\u5B9E\u73B0submit\uFF09</p>',4),Mn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("updateOn\u4E3Achange\uFF0C\u5F53\u8F93\u5165\u5B8C\u6210\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator},
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u7B54\u5BF9\u5566\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator2}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("change"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("updateOn\u4E3Ainput\uFF0C\u5F53\u6B63\u5728\u8F93\u5165\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator},
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u53EA\u80FD\u8F93\u5165\u6570\u5B57\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator2}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("errorSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("errorStrategy\u4E3Apristine\uFF0C\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.errorSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          errorStrategy: `),n("span",{class:"token punctuation"},"'"),a("pristine"),n("span",{class:"token punctuation"},"'"),a(`,
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator3},
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      sum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      errorSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"let"),a(" reg "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^[\\d]+(\\s+[\\d]+)*$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" reg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(` 
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator3"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate3`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customValidator`),n("span",{class:"token punctuation"},","),a(`
      customValidator2`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator2`),n("span",{class:"token punctuation"},","),a(`
      customValidator3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Vn=J('<h4 id="\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u7BA1\u7406\u6D88\u606F\u63D0\u793A" tabindex="-1">\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u7BA1\u7406\u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u7BA1\u7406\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h4><blockquote><p>done</p></blockquote><p>\u914D\u7F6E<code>messageShowType</code>\u53EF\u9009\u62E9\u6D88\u606F\u81EA\u52A8\u63D0\u793A\u7684\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A<code>popover</code>\u3002</p><ul><li>\u8BBE\u7F6E\u4E3A<code>popover</code>\u9519\u8BEF\u4FE1\u606F\u5C06\u5728\u5143\u7D20\u805A\u7126\u65F6\u4EE5<code>popover</code>\u5F62\u5F0F\u5448\u73B0\u3002</li><li>\u8BBE\u7F6E\u4E3A<code>text</code>\u9519\u8BEF\u4FE1\u606F\u5C06\u81EA\u52A8\u4EE5\u6587\u672C\u65B9\u5F0F\u663E\u793A\u5728\u5143\u7D20\u4E0B\u65B9(\u9700\u8981\u4E0E\u8868\u5355\u63A7\u4EF6\u5BB9\u5668\u914D\u5408\u4F7F\u7528)\u3002</li><li>\u8BBE\u7F6E\u4E3A<code>none</code>\u9519\u8BEF\u4FE1\u606F\u5C06\u4E0D\u4F1A\u81EA\u52A8\u5448\u73B0\u5230\u89C6\u56FE\uFF0C \u53EF\u5728\u6A21\u677F\u4E2D\u83B7\u53D6<code>message</code>\u6216\u901A\u8FC7\u76D1\u542C<code>messageChange</code>\u4E8B\u4EF6\u83B7\u53D6\u9519\u8BEF<code>message</code>\uFF0C \u6216\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u901A\u8FC7\u5F15\u7528\u83B7\u53D6\u3002</li><li>\u5728 <code>options</code>\u4E2D\u914D\u7F6E <code>popPosition</code>\u53EF\u5728\u6D88\u606F\u63D0\u793A\u65B9\u5F0F\u4E3A<code>popover</code>\u65F6\uFF0C\u81EA\u5B9A\u4E49<code>popover</code>\u5185\u5BB9\u5F39\u51FA\u65B9\u5411\uFF0C \u9ED8\u8BA4\u4E3A<code>[&#39;right&#39;, &#39;bottom&#39;]</code>\u3002\u66F4\u591A\u53D6\u503C\u53C2\u8003popover\u7EC4\u4EF6\u3002</li></ul>',4),qn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("messageShowType\u4E3Anone\uFF0C\u4E0D\u663E\u793A\u63D0\u793A\u6587\u5B57"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          messageShowType: `),n("span",{class:"token punctuation"},"'"),a("none"),n("span",{class:"token punctuation"},"'"),a(`,
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("change"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("messageShowType\u4E3Apopover\uFF0C\u4F7F\u7528popover\u8FDB\u884C\u63D0\u793A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
            messageShowType: `),n("span",{class:"token punctuation"},"'"),a("popover"),n("span",{class:"token punctuation"},"'"),a(`,
            popPosition: `),n("span",{class:"token punctuation"},"'"),a("bottom"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate4 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      sum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate4`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customValidator`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),wn=n("h4",{id:"\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49asyncdebouncetime",tabindex:"-1"},[a("\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49asyncDebounceTime "),n("a",{class:"header-anchor",href:"#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49asyncdebouncetime","aria-hidden":"true"},"#")],-1),xn=n("blockquote",null,[n("p",null,"done")],-1),Sn=n("p",null,[a("\u5BF9\u4E8E\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u63D0\u4F9B\u9ED8\u8BA4300ms debounce time\u3002\u5728options\u4E2D\u8BBE\u7F6E"),n("code",null,"asyncDebounceTime"),a("\u663E\u793A\u8BBE\u7F6E\uFF08\u5355\u4F4Dms\uFF09\u3002")],-1),Tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncDebounceTime\u4E3A500"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
            asyncDebounceTime: 500
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate5 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate5`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),On=n("h4",{id:"form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4",tabindex:"-1"},[a("Form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4 "),n("a",{class:"header-anchor",href:"#form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4","aria-hidden":"true"},"#")],-1),Nn=n("blockquote",null,[n("p",null,"done")],-1),Ln=n("p",null,"\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9700\u6307\u5B9Aname\u5C5E\u6027\uFF0C\u5E76\u540C\u65F6\u7ED1\u5B9Ad-form\u6807\u7B7E\u7684submit\u4E8B\u4EF6\u624D\u80FD\u751F\u6548\u3002",-1),zn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("userInfoForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {minlength: 2, message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {min: 1, message: `),n("span",{class:"token punctuation"},"'"),a("\u5E74\u9F84\u9700\u5927\u4E8E0"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate6 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate6`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate6`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      onSubmit`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Un=n("h4",{id:"form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4\uFF0C\u7528\u6237\u6CE8\u518C\u573A\u666F",tabindex:"-1"},[a("Form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4\uFF0C\u7528\u6237\u6CE8\u518C\u573A\u666F "),n("a",{class:"header-anchor",href:"#form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4\uFF0C\u7528\u6237\u6CE8\u518C\u573A\u666F","aria-hidden":"true"},"#")],-1),Wn=n("blockquote",null,[n("p",null,"doing")],-1),Rn=n("p",null,[a("\u5BF9\u4E8E\u81EA\u52A8\u9519\u8BEF\u63D0\u793A\u7684\u65B9\u5F0F\uFF0C\u5728form\u4E2D\uFF0C \u5EFA\u8BAE\u5728dForm\u5C42\u7EDF\u4E00\u8BBE\u7F6E"),n("code",null,"messageShowType"),a("\uFF0C\u9700\u540C\u65F6\u8BBE\u7F6Eref\u5C5E\u6027\u624D\u80FD\u751F\u6548\u3002")],-1),In=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("userInfoForm2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate7"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {message: `),n("span",{class:"token punctuation"},"'"),a("\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7"),n("span",{class:"token punctuation"},"'"),a(`},
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"messageShowType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {minlength: 2, message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {min: 1, message: `),n("span",{class:"token punctuation"},"'"),a("\u5E74\u9F84\u9700\u5927\u4E8E0"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate7 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate7`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate7`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      onSubmit`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Zn=n("h3",{id:"\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1",tabindex:"-1"},[a("\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),Pn=n("blockquote",null,[n("p",null,"done")],-1),jn=n("p",null,[a("\u5728"),n("code",null,"d-form"),a("\u6807\u7B7E\u4E2D\u6307\u5B9A\u6821\u9A8C\u89C4\u5219rules\uFF0C\u540C\u65F6\u5728"),n("code",null,"d-form-item"),a("\u4E2D\u6307\u5B9A"),n("code",null,"prop"),a("\u7684\u503C\u4E3A\u6821\u9A8C\u5B57\u6BB5\u540D\u3002")],-1),Hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormReactiveValidate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rules"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormReactiveValidate "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" validateFormModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" rules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(" required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(" message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0D\u80FD\u4E3A\u7A7A'"),n("span",{class:"token punctuation"},","),a(" trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E0'"),n("span",{class:"token punctuation"},","),a(` 
          trigger`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" value "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"0"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E120'"),n("span",{class:"token punctuation"},","),a(` 
          trigger`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" value "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"120"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormReactiveValidate`),n("span",{class:"token punctuation"},","),a(`
      rules`),n("span",{class:"token punctuation"},","),a(`
      validateFormModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Jn=n("h3",{id:"\u6307\u5B9A\u8868\u5355feedback\u72B6\u6001",tabindex:"-1"},[a("\u6307\u5B9A\u8868\u5355Feedback\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u6307\u5B9A\u8868\u5355feedback\u72B6\u6001","aria-hidden":"true"},"#")],-1),Gn=n("blockquote",null,[n("p",null,"done")],-1),$n=n("p",null,[a("\u4F60\u53EF\u901A\u8FC7\u5BF9d-form-control\u8BBE\u7F6EfeedbackStatus\u624B\u52A8\u6307\u5B9A\u53CD\u9988\u72B6\u6001\u3002\u5F53\u524D\u5DF2\u652F\u6301\u72B6\u6001\uFF1A"),n("code",null,"success"),a("\u3001"),n("code",null,"error"),a("\u3001"),n("code",null,"pending"),a("\u3002")],-1),Kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormFeedback"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("pending"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nickname"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Nickname"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.nickname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sexSelectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select your sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-select")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormFeedback "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      nickname`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee97'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" sexSelectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5973'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormFeedback`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      sexSelectOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Qn=n("p",null,"\u53EF\u901A\u8FC7\u5BF9\u5177\u540D\u63D2\u69FDsuffixTemplate\u5728d-form-control\u4E2D\u81EA\u5B9A\u4E49\u53CD\u9988\u72B6\u6001icon\u3002",-1),Xn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormFeedback2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("address"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Address"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.address"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("suffixTemplate")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right-o"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rgb(61, 204, 166)"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormFeedback2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      address`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733\u5357\u5C71\u533A'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormFeedback2`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Yn=n("h3",{id:"\u8868\u5355\u534F\u540C\u9A8C\u8BC1",tabindex:"-1"},[a("\u8868\u5355\u534F\u540C\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u534F\u540C\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),na=n("blockquote",null,[n("p",null,"done")],-1),aa=n("p",null,"\u5728\u4E00\u4E9B\u573A\u666F\u4E0B\uFF0C\u4F60\u7684\u591A\u4E2A\u8868\u5355\u7EC4\u4EF6\u4E92\u76F8\u4F9D\u8D56\uFF0C\u9700\u5171\u540C\u6821\u9A8C\uFF08\u5982\u6CE8\u518C\u573A\u666F\u4E2D\u7684\u5BC6\u7801\u8F93\u5165\u4E0E\u786E\u8BA4\u5BC6\u7801\uFF09\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\u5B9E\u73B0\u6821\u9A8C\u89C4\u5219\uFF08\u5C06\u5BC6\u7801\u8F93\u5165\u4E0E\u786E\u8BA4\u5BC6\u7801\u7684\u503C\u8FDB\u884C\u6BD4\u8F83\uFF09\u3002",-1),ta=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("togetherValidateForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTogetherValidate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("username"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Username"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.username"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.userNameRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("password"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Password"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.password"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.passwordRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("confirmPassword"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Confirm Password"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.confirmPassword"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.confirmPasswordRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTogetherValidate "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      username`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      password`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      confirmPassword`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" formRules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      userNameRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6700\u5C0F6\u4E2A\u5B57\u7B26'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      passwordRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6700\u5C0F6\u4E2A\u5B57\u7B26'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      confirmPasswordRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          updateOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6700\u5C0F6\u4E2A\u5B57\u7B26'"),n("span",{class:"token punctuation"},","),a(`
          validators`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u786E\u8BA4\u5BC6\u7801\u4E0E\u5BC6\u7801\u4E0D\u76F8\u7B26'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"==="),a(" formModel"),n("span",{class:"token punctuation"},"."),a(`password
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTogetherValidate`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTogetherValidate`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      formRules`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmit`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),sa=n("h3",{id:"\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1",tabindex:"-1"},[a("\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),oa=n("blockquote",null,[n("p",null,"todo")],-1),ea=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormWithComponent"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormWithComponent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormWithComponent`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),ua=J(`<h3 id="form-attributes" tabindex="-1">Form Attributes <a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355name\u5C5E\u6027\uFF0C\u8FDB\u884C\u8868\u5355\u63D0\u4EA4\u9A8C\u8BC1\u65F6\u5FC5\u9009\u3002</td><td>string</td><td></td><td></td></tr><tr><td>formData</td><td>\u5FC5\u9009\uFF0C\u8868\u5355\u6570\u636E</td><td>object</td><td></td><td></td></tr><tr><td>layout</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355\u7684\u6392\u5217\u65B9\u5F0F</td><td>string</td><td><code>horizontal</code>\u3001<code>vertical</code>\u3001<code>columns</code></td><td><code>horizontal</code></td></tr><tr><td>labelSize</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E label \u7684\u5360\u5BBD\uFF0C\u672A\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A 100px\uFF0C&#39;sm&#39;\u5BF9\u5E94 80px\uFF0C&#39;lg&#39;\u5BF9\u5E94 150px</td><td>string</td><td><code>sm</code>\u3001<code>lg</code></td><td>--</td></tr><tr><td>labelAlign</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6C34\u5E73\u5E03\u5C40\u65B9\u5F0F\u4E0B\uFF0Clabel \u5BF9\u9F50\u65B9\u5F0F</td><td>string</td><td><code>start</code>\u3001<code>center</code>\u3001<code>end</code></td><td><code>start</code></td></tr><tr><td>columnsClass</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u591A\u5217\u8868\u5355\u6837\u5F0F</td><td>string</td><td></td><td></td></tr><tr><td>rules</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u89C4\u5219</td><td>object</td><td></td><td></td></tr></tbody></table><h3 id="form-methods" tabindex="-1">Form Methods <a class="header-anchor" href="#form-methods" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>submit</td><td>\u53EF\u9009\uFF0C\u63D0\u4EA4\u8868\u5355\u4E8B\u4EF6</td><td>--</td></tr></tbody></table><h3 id="form-item-attributes" tabindex="-1">Form-Item Attributes <a class="header-anchor" href="#form-item-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>prop</td><td>\u53EF\u9009\uFF0C\u6307\u5B9A\u9A8C\u8BC1\u8868\u5355\u9700\u9A8C\u8BC1\u7684\u5B57\u6BB5\uFF0C\u9A8C\u8BC1\u8868\u5355\u65F6\u5FC5\u9009\u8BE5\u5C5E\u6027</td><td></td><td></td><td></td></tr><tr><td>dHasFeedback</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5F53\u524D formControl \u662F\u5426\u663E\u793A\u53CD\u9988\u56FE\u6807</td><td>boolean</td><td><code>true</code>\u3001<code>false</code></td><td><code>false</code></td></tr></tbody></table><h3 id="form-lable-attributes" tabindex="-1">Form-Lable Attributes <a class="header-anchor" href="#form-lable-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>required</td><td>\u53EF\u9009\uFF0C\u8868\u5355\u9009\u9879\u662F\u5426\u5FC5\u586B</td><td>boolean</td><td><code>true</code>\u3001<code>false</code></td><td><code>false</code></td></tr><tr><td>hasHelp</td><td>\u53EF\u9009\uFF0C\u8868\u5355\u9879\u662F\u5426\u9700\u8981\u5E2E\u52A9\u6307\u5F15</td><td>boolean</td><td><code>true</code>\u3001<code>false</code></td><td><code>false</code></td></tr><tr><td>helpTips</td><td>\u53EF\u9009\uFF0C\u8868\u5355\u9879\u5E2E\u52A9\u6307\u5F15\u63D0\u793A\u5185\u5BB9\uFF0C\u9700\u914D\u5408 <code>hasHelp</code>\u4F7F\u7528\uFF0C\u4E14<code>helpTips</code>\u7684\u503C\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26\u4E32\u624D\u4F1A\u751F\u6548\u3002</td><td>string</td><td></td><td>--</td></tr></tbody></table><h3 id="form-control-attributes" tabindex="-1">Form-Control Attributes <a class="header-anchor" href="#form-control-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>extraInfo</td><td>\u53EF\u9009\uFF0C\u9644\u4EF6\u4FE1\u606F\uFF0C\u4E00\u822C\u7528\u4E8E\u8865\u5145\u8868\u5355\u9009\u9879\u7684\u8BF4\u660E</td><td>string</td><td></td><td>--</td></tr><tr><td>feedbackStatus</td><td>\u53EF\u9009\uFF0C\u624B\u52A8\u6307\u5B9A\u5F53\u524D control \u72B6\u6001\u53CD\u9988</td><td>boolean</td><td><code>true</code>\u3001<code>false</code></td><td><code>false</code></td></tr><tr><td>suffixTemplate</td><td>\u53EF\u9009\uFF0C\u53EF\u4F20\u5165\u56FE\u6807\u6A21\u677F\u4F5C\u4E3A\u8F93\u5165\u6846\u540E\u7F00\uFF08\u901A\u8FC7\u63D2\u69FD\u4F20\u5165icon\u7EC4\u4EF6\uFF09</td><td></td><td></td><td>--</td></tr></tbody></table><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h3><h4 id="v-d-validate-rules" tabindex="-1">v-d-validate-rules <a class="header-anchor" href="#v-d-validate-rules" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>rules</td><td>\u5FC5\u9009\uFF0C\u8868\u5355\u6821\u9A8C\u89C4\u5219</td><td>object</td><td></td><td>--</td></tr><tr><td>options</td><td>\u53EF\u9009\uFF0C\u914D\u7F6E\u9009\u9879</td><td>object</td><td><code>errorStrategy</code>\u3001<code>updateOn</code>\u3001<code>popPosition</code></td><td></td></tr></tbody></table><blockquote><p>\u8BE5\u6307\u4EE4\u4EC5\u5728<code>d-form</code>\u6807\u7B7E\u6216<code>d-input</code>\u7B49\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E0A\u4F7F\u7528\u6709\u6548\u3002</p></blockquote><ul><li>rules\u683C\u5F0F\u5982\u4E0B</li></ul><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token punctuation">[</span>validatorKey<span class="token punctuation">]</span><span class="token operator">:</span> validatorValue<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&#39;some tip messages.&#39;</span><span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u524DDevUI\u652F\u6301\u7684\u5185\u7F6E\u6821\u9A8C\u5668validatorKey\u6709\uFF1A<code>required</code>\u3001<code>minlength</code>\u3001<code>maxlength</code>\u3001<code>min</code>\u3001<code>max</code>\u3001<code>requiredTrue</code>\u3001<code>email</code>\u3001<code>pattern</code>\u3001<code>whitespace</code>\u3002<br></p><br><ul><li>options\u652F\u6301\u4EE5\u4E0B\u5B57\u6BB5 <ul><li>errorStrategy\uFF0C\u9519\u8BEF\u66F4\u65B0\u7B56\u7565\uFF1A<code>dirty</code>\uFF08\u9ED8\u8BA4\uFF09\u3001<code>prestine</code></li><li>updateOn\uFF0C\u6821\u9A8C\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u6709\uFF1A<code>change</code>\uFF08\u9ED8\u8BA4\uFF09\u3001 <code>blur</code>\u3001 <code>input</code></li><li>popPosition\uFF0C\u81EA\u5B9A\u4E49<code>popover</code>\u5185\u5BB9\u5F39\u51FA\u65B9\u5411\u3002 \u9ED8\u8BA4\u4E3A<code>[&#39;right&#39;, &#39;bottom&#39;]</code>\uFF0C\u66F4\u591A\u53D6\u503C\u53C2\u8003popover\u7EC4\u4EF6\u3002</li></ul></li></ul>`,19);function ca(u,o,s,t,A,v){const F=I("render-demo-0"),p=I("demo"),M=I("render-demo-1"),V=I("render-demo-2"),D=I("render-demo-3"),q=I("render-demo-4"),h=I("render-demo-5"),E=I("render-demo-6"),C=I("render-demo-7"),k=I("render-demo-8"),i=I("render-demo-9"),l=I("render-demo-10"),r=I("render-demo-11"),d=I("render-demo-12"),g=I("render-demo-13"),y=I("render-demo-14"),c=I("render-demo-15");return on(),sn("div",null,[un,x(p,{sourceCode:`<template>
  <d-form ref="dFormBasic" :formData="formModel" layout="vertical" @submit="onSubmitForm">
    <d-form-item prop="name">
      <d-form-label required hasHelp helpTips="\u540D\u5B57\u53EF\u4EE5\u968F\u610F\u586B">Name</d-form-label>
      <d-form-control extraInfo="\u8FD9\u884C\u662F\u8BF4\u660E\u6587\u5B57\uFF0C\u53EF\u4EE5\u4E0D\u7528\u7406\uFF0C\u4F60\u5C3D\u7BA1\u586B\u4F60\u7684\u59D3\u540D\u3002">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="city">
      <d-form-label>City</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.city" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits">
      <d-form-label>Love Fruits</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label>Sex</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
        <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="goOffWork">
      <d-form-label>Go off work, I nerver to be a Juan King!</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.goOffWork"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="ladySupport">
      <d-form-label>Which lady you would like to support?</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.ladySupport" label="1818\u9EC4\u91D1\u773C">
          <d-checkbox label="\u90D1\u5973\u58EB" value="ladyZheng" />
          <d-checkbox label="\u5C0F\u6BDB" value="ladyMao" />
          <d-checkbox label="\u5C0F\u5218" value="ladyLiu" />
          <d-checkbox label="\u5C0F\u848B" value="ladyJiang" />
          <d-checkbox label="\u5C0F\u6ED5" value="ladyTeng" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="demo-form-operation">
      <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref, nextTick} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormBasic = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '\u6DF1\u5733',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermalon'}, {name: 'peach'}],
      sex: '0',
      goOffWork: true,
      ladySupport: ['ladyZheng'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('formData reset before', dFormBasic.value.formData);
      dFormBasic.value.resetFormFields();
      console.log('formData reset after', dFormBasic.value.formData);
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    return {
      dFormBasic,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}

</style>

`},{highlight:S(()=>[cn]),default:S(()=>[x(F)]),_:1}),pn,ln,rn,x(p,{sourceCode:`<template>
  <d-form ref="dFormHorizontal" :formData="formModel" layout="horizontal" labelSize="lg" @submit="onSubmitForm">
    <d-form-item prop="name">
      <d-form-label required>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="city">
      <d-form-label>City</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.city" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits">
      <d-form-label>Love Fruits</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label>Sex</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
        <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="goOffWork">
      <d-form-label>Go off work</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.goOffWork"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="ladySupport">
      <d-form-label>Support lady</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.ladySupport" label="1818\u9EC4\u91D1\u773C">
          <d-checkbox label="\u90D1\u5973\u58EB" value="ladyZheng" />
          <d-checkbox label="\u5C0F\u6BDB" value="ladyMao" />
          <d-checkbox label="\u5C0F\u5218" value="ladyLiu" />
          <d-checkbox label="\u5C0F\u848B" value="ladyJiang" />
          <d-checkbox label="\u5C0F\u6ED5" value="ladyTeng" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="demo-form-operation">
      <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormHorizontal = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermalon'}, {name: 'peach'}],
      sex: '0',
      goOffWork: true,
      ladySupport: ['ladyZheng'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('dFormHorizontal', dFormHorizontal.value);
      dFormHorizontal.value.resetFormFields();
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    return {
      dFormHorizontal,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[kn]),default:S(()=>[x(M)]),_:1}),dn,mn,fn,x(p,{sourceCode:`<template>
  <d-button @click="openModal">Open Modal</d-button>
  <div class="my-modal" v-show="showModal" @click="closeModal">
    <d-form ref="dFormModal" :formData="formModel" layout="horizontal" labelSize="lg" @submit="onSubmitForm" class="my-form" @click.stop="() => {}">
      <d-form-item prop="name">
        <d-form-label required>Name</d-form-label>
        <d-form-control>
          <d-input v-model="formModel.name" />
        </d-form-control>
      </d-form-item>
      <d-form-item prop="age">
        <d-form-label>Age</d-form-label>
        <d-form-control>
          <d-input v-model="formModel.age" />
        </d-form-control>
      </d-form-item>
      <d-form-item prop="city">
        <d-form-label>City</d-form-label>
        <d-form-control>
          <d-select v-model="formModel.city" :options="selectOptions" />
        </d-form-control>
      </d-form-item>
      <d-form-item prop="loveFruits">
        <d-form-label>Love Fruits</d-form-label>
        <d-form-control>
          <d-tag-input
            v-model:tags="formModel.loveFruits"
            v-model:suggestionList="formModel.suggestionList"
            display-property="name"
            placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
            no-data="\u6682\u65E0\u6570\u636E"
          ></d-tag-input>
        </d-form-control>
      </d-form-item>
      <d-form-item prop="sex">
        <d-form-label>Sex</d-form-label>
        <d-form-control>
          <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
          <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
        </d-form-control>
      </d-form-item>
      <d-form-item prop="goOffWork">
        <d-form-label>Go off work</d-form-label>
        <d-form-control>
          <d-switch v-model:checked="formModel.goOffWork"></d-switch>
        </d-form-control>
      </d-form-item>
      <d-form-item prop="ladySupport">
        <d-form-label>Support lady</d-form-label>
        <d-form-control>
          <d-checkbox-group v-model="formModel.ladySupport" label="1818\u9EC4\u91D1\u773C">
            <d-checkbox label="\u90D1\u5973\u58EB" value="ladyZheng" />
            <d-checkbox label="\u5C0F\u6BDB" value="ladyMao" />
            <d-checkbox label="\u5C0F\u5218" value="ladyLiu" />
            <d-checkbox label="\u5C0F\u848B" value="ladyJiang" />
            <d-checkbox label="\u5C0F\u6ED5" value="ladyTeng" />
          </d-checkbox-group>
        </d-form-control>
      </d-form-item>
      <d-form-operation class="demo-form-operation">
        <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
        <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
      </d-form-operation>
    </d-form>
  </div>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormModal = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermalon'}, {name: 'peach'}],
      sex: '0',
      goOffWork: true,
      ladySupport: ['ladyZheng'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('dFormModal', dFormModal.value);
      dFormModal.value.resetFormFields();
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    const showModal = ref(false);
    const openModal = () => {
      showModal.value = true;
    }
    const closeModal = () => {
      showModal.value = false;
    }
    return {
      dFormModal,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm,
      showModal,
      openModal,
      closeModal
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}

.my-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.my-form {
  background-color: #fff;
  width: 60vw;
  padding: 20px;
}
</style>

`},{highlight:S(()=>[gn]),default:S(()=>[x(V)]),_:1}),Fn,vn,Cn,x(p,{sourceCode:`<template>
  <d-form ref="dFormColumn" layout="columns" columnsClass="u-1-3" :formData="formModel" @submit="onSubmitForm">
    <d-form-item prop="name" v-for="(item) in 6" :key="item" class="column-item">
      <d-form-label required hasHelp>Name</d-form-label>
      <d-form-control>
        <d-input />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits" class="column-item">
      <d-form-label>Love Fruits</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex" class="column-item">
      <d-form-label>Sex</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
        <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="goOffWork" class="column-item">
      <d-form-label>Go off work</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.goOffWork"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="ladySupport" class="column-item">
      <d-form-label>Support lady</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.ladySupport" label="1818\u9EC4\u91D1\u773C">
          <d-checkbox label="\u90D1\u5973\u58EB" value="ladyZheng" />
          <d-checkbox label="\u5C0F\u6BDB" value="ladyMao" />
          <d-checkbox label="\u5C0F\u5218" value="ladyLiu" />
          <d-checkbox label="\u5C0F\u848B" value="ladyJiang" />
          <d-checkbox label="\u5C0F\u6ED5" value="ladyTeng" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>

    <d-form-operation class="demo-form-operation">
      <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormColumn = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermalon'}, {name: 'peach'}],
      sex: '0',
      goOffWork: true,
      ladySupport: ['ladyZheng'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('dFormColumn', dFormColumn.value);
      dFormColumn.value.resetFormFields();
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    return {
      dFormColumn,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm
    }
  }
})
<\/script>

<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[En]),default:S(()=>[x(D)]),_:1}),bn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate1" :formData="formModel" labelSize="lg" >
    <d-form-item prop="name">
      <d-form-label required>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="[
          {
            maxlength: 8,
          },
          {
            pattern: /^[a-zA-Z\\d]+(\\s+[a-zA-Z\\d]+)*$/, 
            message: {
              'zh-cn': '\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26', 
              'en-us': 'The value cannot contain characters except uppercase and lowercase letters.', 
              default: '\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26'
            }
          }
        ]" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate1 = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
    });

    return {
      dFormTemplateValidate1,
      formModel,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[_n]),default:S(()=>[x(q)]),_:1}),yn,An,Bn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate2" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          validators: [
            {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator},
            {message: '\u7B54\u5BF9\u5566\uFF01', validator: customValidator2}
          ]
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          asyncValidators: [
            {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator},
            {message: '\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator2}
          ]
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate2 = ref(null);
    let formModel = reactive({
      sum: '',
      asyncSum: '',
    });

    const customValidator = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09
    }
    const customValidator2 = (rule, value) => {
      return value != "2"; // value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    const customAsyncValidator2 = (rule, value) => {
      return value != "3"; // value\u503C\u4E0D\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    return {
      dFormTemplateValidate2,
      formModel,
      customValidator,
      customValidator2,
      customAsyncValidator,
      customAsyncValidator2,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[hn]),default:S(()=>[x(h)]),_:1}),Dn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate3" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control extraInfo="updateOn\u4E3Achange\uFF0C\u5F53\u8F93\u5165\u5B8C\u6210\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219">
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          rules: {
            validators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator},
              {message: '\u7B54\u5BF9\u5566\uFF01', validator: customValidator2}
            ]
          },
          options: {
            updateOn: 'change'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09</d-form-label>
      <d-form-control extraInfo="updateOn\u4E3Ainput\uFF0C\u5F53\u6B63\u5728\u8F93\u5165\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator},
              {message: '\u53EA\u80FD\u8F93\u5165\u6570\u5B57\uFF01', asyncValidator: customAsyncValidator2}
            ]
          },
          options: {
            updateOn: 'input'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="errorSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control extraInfo="errorStrategy\u4E3Apristine\uFF0C\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219">
        <d-input v-model="formModel.errorSum" v-d-validate-rules="{
          errorStrategy: 'pristine',
          rules: {
            validators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator3},
            ]
          },
          options: {
            updateOn: 'input'
          }
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate3 = ref(null);
    let formModel = reactive({
      sum: '',
      asyncSum: '',
      errorSum: '3',
    });

    const customValidator = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09
    }
    const customValidator2 = (rule, value) => {
      return value != "2"; // value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    const customAsyncValidator2 = (rule, value) => {
      let reg = /^[\\d]+(\\s+[\\d]+)*$/;
      return reg.test(value); 
    }

    const customValidator3 = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message
    }
    return {
      dFormTemplateValidate3,
      formModel,
      customValidator,
      customValidator2,
      customAsyncValidator,
      customAsyncValidator2,
      customValidator3,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Mn]),default:S(()=>[x(E)]),_:1}),Vn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate4" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control extraInfo="messageShowType\u4E3Anone\uFF0C\u4E0D\u663E\u793A\u63D0\u793A\u6587\u5B57">
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          messageShowType: 'none',
          rules: {
            validators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator}
            ]
          },
          options: {
            updateOn: 'change'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F</d-form-label>
      <d-form-control extraInfo="messageShowType\u4E3Apopover\uFF0C\u4F7F\u7528popover\u8FDB\u884C\u63D0\u793A">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: 'input',
            messageShowType: 'popover',
            popPosition: 'bottom'
          }
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate4 = ref(null);
    let formModel = reactive({
      sum: '',
      asyncSum: '',
    });

    const customValidator = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }

    return {
      dFormTemplateValidate4,
      formModel,
      customValidator,
      customAsyncValidator,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[qn]),default:S(()=>[x(C)]),_:1}),wn,xn,Sn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate5" :formData="formModel" labelSize="lg" >
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09</d-form-label>
      <d-form-control extraInfo="asyncDebounceTime\u4E3A500">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: 'input',
            asyncDebounceTime: 500
          }
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate5 = ref(null);
    let formModel = reactive({
      asyncSum: '',
    });

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    return {
      dFormTemplateValidate5,
      formModel,
      customAsyncValidator,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Tn]),default:S(()=>[x(k)]),_:1}),On,Nn,Ln,x(p,{sourceCode:`<template>
  <d-form name="userInfoForm" ref="dFormTemplateValidate6" :formData="formModel" labelSize="lg" @submit="onSubmit">
    <d-form-item prop="name">
      <d-form-label>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="{
          rules: {minlength: 2, message: '\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" v-d-validate-rules="{
          rules: {min: 1, message: '\u5E74\u9F84\u9700\u5927\u4E8E0'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="demo-form-operation">
      <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate6 = ref(null);
    let formModel = reactive({
      name: '',
      age: '',
    });

    const resetForm = () => {
      dFormTemplateValidate6.value.resetFormFields();
    }

    const onSubmit = (e) => {
      console.log('@submit')
    }

    return {
      dFormTemplateValidate6,
      formModel,
      onSubmit,
      resetForm,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[zn]),default:S(()=>[x(i)]),_:1}),Un,Wn,Rn,x(p,{sourceCode:`<template>
  <d-form name="userInfoForm2" ref="dFormTemplateValidate7" :formData="formModel" labelSize="lg" @submit="onSubmit" v-d-validate-rules="{
          rules: {message: '\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7'},
        }" messageShowType="text">
    <d-form-item prop="name">
      <d-form-label>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="{
          rules: {minlength: 2, message: '\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" v-d-validate-rules="{
          rules: {min: 1, message: '\u5E74\u9F84\u9700\u5927\u4E8E0'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="demo-form-operation">
      <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate7 = ref(null);
    let formModel = reactive({
      name: '',
      age: '',
    });

    const resetForm = () => {
      dFormTemplateValidate7.value.resetFormFields();
    }

    const onSubmit = (e) => {
      console.log('@submit')
    }

    return {
      dFormTemplateValidate7,
      formModel,
      onSubmit,
      resetForm,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[In]),default:S(()=>[x(l)]),_:1}),Zn,Pn,jn,x(p,{sourceCode:`<template>
  <d-form ref="dFormReactiveValidate" :form-data="validateFormModel" :rules="rules">
    <d-form-item prop="name">
      <d-form-label :required="true" >Name</d-form-label>
      <d-form-control>
        <d-input v-model="validateFormModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >Age</d-form-label>
      <d-form-control>
        <d-input v-model="validateFormModel.age" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormReactiveValidate = ref(null);
    let validateFormModel = reactive({
      name: 'AlanLee',
      age: '24',
    });
    const rules = reactive({
      name: [{ required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A', trigger: 'blur'}],
      age: [
        { 
          required: true, 
          message: '\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E0', 
          trigger: 'blur',
          validator: (rule, value) => value > 0
        },
        { 
          required: true, 
          message: '\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E120', 
          trigger: 'input',
          validator: (rule, value) => value < 120
        }
      ],
    });

    return {
      dFormReactiveValidate,
      rules,
      validateFormModel,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Hn]),default:S(()=>[x(r)]),_:1}),Jn,Gn,$n,x(p,{sourceCode:`<template>
  <d-form ref="dFormFeedback" :form-data="formModel">
    <d-form-item prop="name">
      <d-form-label :required="true" >Name</d-form-label>
      <d-form-control feedbackStatus="pending">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="nickname">
      <d-form-label :required="true" >Nickname</d-form-label>
      <d-form-control feedbackStatus="success">
        <d-input v-model="formModel.nickname" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >Age</d-form-label>
      <d-form-control feedbackStatus="error">
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label :required="true">Sex</d-form-label>
      <d-form-control feedbackStatus="error">
        <d-select v-model="formModel.sex" :options="sexSelectOptions" placeholder="Select your sex"></d-select>
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormFeedback = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      nickname: 'AlanLee97',
      age: '24',
      sex: '\u7537',
    });

    const sexSelectOptions = reactive([
      '\u7537', '\u5973'
    ])
    
    return {
      dFormFeedback,
      formModel,
      sexSelectOptions,
    }
  }
})
<\/script>


<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Kn]),default:S(()=>[x(d)]),_:1}),Qn,x(p,{sourceCode:`<template>
  <d-form ref="dFormFeedback2" :form-data="formModel">
    <d-form-item prop="address">
      <d-form-label :required="true" >Address</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.address" />
        <template v-slot:suffixTemplate>
          <d-icon name="right-o" color="rgb(61, 204, 166)" />
        </template>
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormFeedback2 = ref(null);
    let formModel = reactive({
      address: '\u6DF1\u5733\u5357\u5C71\u533A',
    });

    return {
      dFormFeedback2,
      formModel,
    }
  }
})
<\/script>

`},{highlight:S(()=>[Xn]),default:S(()=>[x(g)]),_:1}),Yn,na,aa,x(p,{sourceCode:`<template>
  <d-form name="togetherValidateForm" ref="dFormTogetherValidate" :form-data="formModel" labelSize="lg" @submit="onSubmit">
    <d-form-item prop="username">
      <d-form-label :required="true" >Username</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.username" v-d-validate-rules="formRules.userNameRule" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="password">
      <d-form-label :required="true" >Password</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.password" v-d-validate-rules="formRules.passwordRule" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="confirmPassword">
      <d-form-label :required="true" >Confirm Password</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.confirmPassword" v-d-validate-rules="formRules.confirmPasswordRule" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="demo-form-operation">
      <d-button type="submit" class="demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTogetherValidate = ref(null);
    let formModel = reactive({
      username: '',
      password: '',
      confirmPassword: '',
    });

    const formRules = {
      userNameRule: {
        rules: {
          minlength: 6,
          message: '\u6700\u5C0F6\u4E2A\u5B57\u7B26'
        }
      },
      passwordRule: {
        rules: {
          minlength: 6,
          message: '\u6700\u5C0F6\u4E2A\u5B57\u7B26'
        }
      },
      confirmPasswordRule: {
        options: {
          updateOn: 'input',
        },
        rules: {
          minlength: 6,
          message: '\u6700\u5C0F6\u4E2A\u5B57\u7B26',
          validators: [
            {
              message: '\u786E\u8BA4\u5BC6\u7801\u4E0E\u5BC6\u7801\u4E0D\u76F8\u7B26',
              validator: (rule, value) => {
                return value === formModel.password
              }
            }
          ]
        }
      }
    }

    const resetForm = () => {
      dFormTogetherValidate.value.resetFormFields();
    }

    const onSubmit = (e) => {
      console.log('@submit')
    }

    return {
      dFormTogetherValidate,
      formModel,
      formRules,
      resetForm,
      onSubmit,
    }
  }
})
<\/script>

<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[ta]),default:S(()=>[x(y)]),_:1}),sa,oa,x(p,{sourceCode:`<template>
  <d-form ref="dFormWithComponent" :form-data="formModel">
    <d-form-item prop="name">
      <d-form-label :required="true" >Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormWithComponent = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
    });

    return {
      dFormWithComponent,
      formModel,
    }
  }
})
<\/script>

<style>
.demo-form-operation {
  display: flex;
  align-items: center;
}
.demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[ea]),default:S(()=>[x(c)]),_:1}),ua])}var ka=tn(en,[["render",ca]]);export{ra as __pageData,ka as default};
