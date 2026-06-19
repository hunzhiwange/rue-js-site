import{$ as e,$t as t,Bt as n,Gt as r,It as i,Qt as a,Xt as o,Yt as s,Z as c,Zt as l,_t as u,a as d,b as f,ct as p,et as m,gt as h,j as g,l as _,mt as v,n as y,nt as b,o as x,p as S,r as C,rt as w,s as T,t as E,tt as D,ut as O,yt as k,zt as A}from"./vapor-runtime-CKrmRMZX.js";import{a as j,n as M,t as N}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as P,i as F,o as I}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as L}from"./button-CiwrjbTY.js";import{t as R}from"./checkbox-C93ZUts8.js";import{t as z}from"./input-CRYoS0G3.js";import{r as B}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as V}from"./PreviewBlock-xsXk-Jrr.js";var H=`__rueFormContext`,U=0,W={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},G=(...e)=>e.filter(Boolean).join(` `),K=e=>!!e&&typeof e==`object`,q=e=>{if(Array.isArray(e))return e.map(e=>q(e));if(K(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=q(e[n])}),t}return e},J=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),te=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,ne=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),re=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},ie=(e,t,n)=>{if(t.length===0)return q(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?q(n):ie(o[r],i,n),o},ae=(e,t)=>{if(t.length===0)return;if(!K(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=ae(i[n],r),i)},Y=(e,t)=>{if(!K(t)&&!Array.isArray(t))return q(t);if(Array.isArray(t))return t.map(e=>q(e));let n=K(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Y(n[e],t[e])}),n},oe=(e,t)=>ie({},e,t),se=e=>e?Array.isArray(e)?e:[e]:[`onChange`],X=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,Z=(e,t)=>{let n=X(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},ce=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,le=e=>{try{return new URL(e),!0}catch{return!1}},ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&le(e);default:return!0}},de=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??W.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??W.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??W.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??W.types?.[e.type??`string`]??"${label} 类型不正确";let a=X(t,e.type);return(r[a]??W[a]??{})[i??`len`]??"${label} 校验失败"},fe=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),pe=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},me=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,he=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=pe(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&ce(n,e.type)?i=de(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=de(e,n,l,o,`whitespace`):!ce(n,e.type)&&e.type&&!ue(n,e.type)?i=de(e,n,l,o,`type`):!ce(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=de(e,n,l,o,`pattern`):!ce(n,e.type)&&e.len!==void 0?Z(n,e.type)!==e.len&&(i=de(e,n,l,o,`len`)):!ce(n,e.type)&&e.min!==void 0?Z(n,e.type)<e.min&&(i=de(e,n,l,o,`min`)):!ce(n,e.type)&&e.max!==void 0&&Z(n,e.type)>e.max&&(i=de(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=fe(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},ge=(e,...t)=>{let[n,r]=t;if(e===`checked`)return K(r)&&typeof r.checked==`boolean`?r.checked:K(n)&&K(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(K(n)&&`target`in n))return n;if(K(n)&&K(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},_e=e=>e?_(e===`error`?e=>{let t=D(`span`,e);return O(t,`text-error`),c(t,b(`!`)),t}:e===`warning`?e=>{let t=D(`span`,e);return O(t,`text-warning`),c(t,b(`!`)),t}:e===`success`?e=>{let t=D(`span`,e);return O(t,`text-success`),c(t,b(`✓`)),t}:e=>{let t=D(`span`,e);return O(t,`loading loading-spinner loading-xs text-primary`),t}):null,ve=e=>{if(e?.span)return`${e.span/24*100}%`},ye=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,be=()=>{let e=j(`ref:1:0`,()=>n(0)),t=new Map,r=new Map,i=new Map,a=new Set,o=!1,s={},c={},l=!1,u=null,d={validateTrigger:[`onChange`],validateMessages:W},f=()=>{e.value+=1,a.forEach(e=>e())},p=()=>{o||(o=!0,queueMicrotask(()=>{o=!1,f()}))},m=e=>{let t=ee(e),n=i.get(t);if(n)return n;let r={touched:!1,validating:!1,errors:[],warnings:[]};return i.set(t,r),r},h=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ee(t)}`:e.id},g=e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:q(ne(s,e))}},_=e=>{d.onFieldsChange?.([g(e)],D.getFieldsValue(!0))},v=(e,t,n=!0)=>{let r=m(e);Object.assign(r,t),n&&(_(e),f(),p())},y=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&te(t,e))return n}return null},b=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return v(n,{errors:[],warnings:[],validating:!1}),null;v(n,{validating:!0});let a=await he(n,ne(s,n),i,s,e.getLabel(),e.getMessageVariables(),d.validateMessages);return v(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},x=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||te(n,e)||t.getDependencies().some(t=>te(t,e))&&await b(t)}},S=async(e,t,n)=>{if(s=ie(s,e,t),n?.touch){let t=m(e);t.touched=!0}f(),_(e),n?.emitValues!==!1&&d.onValuesChange?.(oe(e,t),D.getFieldsValue(!0));let r=y(e);r&&await b(r,n?.triggerName),await x(e),p()},C=e=>{let n=h(e),a=r.get(n);a&&a!==e.id&&t.delete(a),t.set(e.id,e),r.set(n,e.id);let o=e.getNamePath();if(o&&o.length){let t=e.getInitialValue();!re(c,o)&&t!==void 0&&(c=ie(c,o,t)),!re(s,o)&&t!==void 0&&(s=ie(s,o,t)),m(o)}return()=>{let a=r.get(n)===e.id;if(t.delete(e.id),!a)return;r.delete(n);let o=e.getNamePath();!o||!o.length||ye(e,d.preserve)||(s=ae(s,o),i.delete(ee(o)),f())}},w=e=>l?!1:(c=q(e??{}),s=q(e??{}),l=!0,!0),T=async e=>{let n=e?.map(e=>J(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=h(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>te(i,e)))continue;let o=await b(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:D.getFieldsValue(!0),errorFields:r,outOfDate:!1};return D.getFieldsValue(!0)},E=(e,t)=>{let n=J(e),r=d.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>u?.querySelector(`#${CSS.escape(e)}`)).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},D={getFieldValue(t){return e.value,q(ne(s,J(t)))},getFieldsValue(t){return e.value,t===!0||t==null?q(s):t.reduce((e,t)=>{let n=J(t);return ie(e,n,ne(s,n))},{})},setFieldValue(e,t){S(J(e),t,{emitValues:!1})},setFieldsValue(e){s=Y(s,e),f()},resetFields(e){if(!e?.length){s=q(c),i.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),f();return}e.forEach(e=>{let t=J(e),n=ne(c,t);s=n===void 0?ae(s,t):ie(s,t,n);let r=m(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),f()},validateFields:T,submit(){T().then(e=>{d.onFinish?.(e)}).catch(e=>{if(d.onFinishFailed?.(e),d.scrollToFirstError&&e.errorFields[0]){let t=d.scrollToFirstError===!0?{block:`center`}:d.scrollToFirstError;E(e.errorFields[0].name,t)}})},scrollToField:E,isFieldTouched(e){return m(J(e)).touched},getFieldError(e){return[...m(J(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=h(t);return e.has(n)?!1:(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=J(e),n=m(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){d=e},ensureInitialized:w,registerField:C,getMeta:m,validateFieldByPath(e,t){let n=y(e);return n?b(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return S(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return S(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return d.validateTrigger},setRootElement(e){u=e},subscribe(e){return a.add(e),()=>{a.delete(e)}},emitUpdate(){f()}}};return D},xe=(e,t,n)=>typeof n==`function`?n(e,{required:t}):n===`optional`&&!t?_(e=>{let t=D(`span`,e);return O(t,`ml-2 text-xs text-base-content/45`),p(t,`aria-hidden`,`true`),c(t,b(`optional`)),t}):n!==!1&&t?_(e=>{let t=D(`span`,e);return O(t,`ml-1 text-error`),p(t,`aria-hidden`,`true`),c(t,b(`*`)),t}):null,Q=Object.assign(n=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:d,__rue_rest_omit_2:p,__rue_rest_omit_3:h,__rue_rest_omit_4:g,__rue_rest_omit_5:v,__rue_rest_omit_6:y,__rue_rest_omit_7:b,__rue_rest_omit_8:w,__rue_rest_omit_9:T,__rue_rest_omit_10:O,__rue_rest_omit_11:M,__rue_rest_omit_12:N,__rue_rest_omit_13:P,__rue_rest_omit_14:L,__rue_rest_omit_15:R,__rue_rest_omit_16:z,__rue_rest_omit_17:B,rest:V,slotSource:H,internalFormRef:U,rootElementRef:K,subscriptionFormRef:q,unsubscribeRenderRef:J,renderVersion:ee,setRenderVersion:te,resolvedForm:ne,initializedNow:re,formVersionSnapshot:ie,handleNativeSubmit:ae,resolveContent:Y,content:oe}=j(`useSetup:0:0:dup3`,()=>o(()=>{let{className:e,style:t,children:r,render:a,component:c,layout:u,initialValues:d,form:f,name:p,preserve:m,validateMessages:h,validateTrigger:g,scrollToFirstError:_,onValuesChange:v,onFieldsChange:y,onFinish:b,onFinishFailed:x,onSubmit:w,...T}=n,E=j(`computed:1:39`,()=>k(()=>i()?.propsRO??{children:n.children})),D=E,O=j(`useRef:1:40`,()=>s()),M=j(`useRef:1:41`,()=>s(null)),N=j(`useRef:1:42`,()=>s(void 0)),P=j(`useRef:1:43`,()=>s(null)),[L,R]=j(`useState:1:44`,()=>l(0,{kind:`ref`}));O.current||=n.form??be();let z=j(`computed:1:45`,()=>k(()=>n.form??O.current)),B=z,V=j(`computed:1:46`,()=>k(()=>B.get().__INTERNAL__.ensureInitialized(n.initialValues))),H=V,U=j(`computed:1:47`,()=>k(()=>B.get().__INTERNAL__.version.value)),G=U;B.get().__INTERNAL__.setRuntimeOptions({name:n.name,preserve:n.preserve,validateTrigger:se(n.validateTrigger),validateMessages:{...W,...n.validateMessages},scrollToFirstError:n.scrollToFirstError,onValuesChange:n.onValuesChange,onFieldsChange:n.onFieldsChange,onFinish:n.onFinish,onFinishFailed:n.onFinishFailed}),N.current!==B.get()&&(P.current?.(),N.current=B.get(),P.current=B.get().__INTERNAL__.subscribe(()=>{R(L.value+1)}));let K=e=>{e.preventDefault(),n.onSubmit?.(e),B.get().submit()};C(()=>{H.get()&&B.get().__INTERNAL__.emitUpdate()}),A(()=>{P.current?.(),P.current=null,N.current=void 0});let q=()=>(j(`useSetup:0:0:dup2`,()=>o(()=>(G.get(),{}))),typeof n.render==`function`?F(S,{children:n.render(B.get())}):typeof n.children==`function`&&n.children.kind!==`block-factory`?F(S,{children:n.children(B.get())}):F(I,{source:D.get()}));return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:a,__rue_rest_omit_4:c,__rue_rest_omit_5:u,__rue_rest_omit_6:d,__rue_rest_omit_7:f,__rue_rest_omit_8:p,__rue_rest_omit_9:m,__rue_rest_omit_10:h,__rue_rest_omit_11:g,__rue_rest_omit_12:_,__rue_rest_omit_13:v,__rue_rest_omit_14:y,__rue_rest_omit_15:b,__rue_rest_omit_16:x,__rue_rest_omit_17:w,rest:T,slotSource:E,internalFormRef:O,rootElementRef:M,subscriptionFormRef:N,unsubscribeRenderRef:P,renderVersion:L,setRenderVersion:R,resolvedForm:z,initializedNow:V,formVersionSnapshot:U,handleNativeSubmit:K,resolveContent:q,content:q()}}));if((n.component===void 0?`form`:n.component)===!1)return oe;let X={...V,ref:e=>{K.current=e,ne.get().__INTERNAL__.setRootElement(e)},onSubmit:(n.component===void 0?`form`:n.component)===`form`?ae:void 0,className:G(`rue-form`,(n.layout===void 0?`horizontal`:n.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,n.className),style:n.style,"data-rue-form":`true`};if((n.component===void 0?`form`:n.component)===`form`)return _(n=>{let i=D(`form`,n);t(()=>{u(i,X)});let a=e(`rue:slot:anchor`);return c(i,a),t(()=>{let e=(ee.value,Y());r(()=>x(e,i,a))}),i});if((n.component===void 0?`form`:n.component)===`div`)return _(n=>{let i=D(`div`,n);t(()=>{u(i,X)});let a=e(`rue:slot:anchor`);return c(i,a),t(()=>{let e=(ee.value,Y());r(()=>x(e,i,a))}),i});if((n.component===void 0?`form`:n.component)===`section`)return _(n=>{let i=D(`section`,n);t(()=>{u(i,X)});let a=e(`rue:slot:anchor`);return c(i,a),t(()=>{let e=(ee.value,Y());r(()=>x(e,i,a))}),i});if(typeof(n.component===void 0?`form`:n.component)==`string`)return f(n.component===void 0?`form`:n.component,X,(ee.value,Y()));let Z=n.component===void 0?`form`:n.component;return _(n=>{let i=m(),a=e(`rue:component:anchor`);return c(i,a),t(()=>{let e=E(Z,{...X,children:(ee.value,Y())});r(()=>x(e,i,a))}),i})},{Item:n=>{let{slotSource:u,formInstance:f,entityIdRef:h,unregisterRef:b,subscriptionFormRef:w,unsubscribeRenderRef:T,renderVersion:E,setRenderVersion:M,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:z,latestPropsRef:B,noStyleHostRef:V,controlHostRef:H,helpHostRef:W,feedbackHostRef:K,namePath:te,nameKey:ne,layout:re,required:ie,labelAlign:ae,labelWrap:Y,labelCol:oe,wrapperCol:X,controlId:Z,getRenderState:ce,renderManagedContent:le,assignControlHost:ue}=j(`useSetup:0:0:dup1`,()=>o(()=>{let o=j(`computed:1:2`,()=>k(()=>i()?.propsRO??{children:n.children})),u=o,f=j(`computed:1:3`,()=>k(()=>n.form)),m=f,h=j(`useRef:1:4`,()=>s()),v=j(`useRef:1:5`,()=>s(null)),y=j(`useRef:1:6`,()=>s(void 0)),b=j(`useRef:1:7`,()=>s(null)),[w,T]=j(`useState:1:8`,()=>l(0,{kind:`ref`})),E=j(`useRef:1:9`,()=>s()),M=j(`useRef:1:10`,()=>s()),N=j(`useRef:1:11`,()=>s()),L=j(`useRef:1:12`,()=>s(n)),R=j(`useRef:1:13`,()=>s(null)),z=j(`useRef:1:14`,()=>s(null)),B=j(`useRef:1:15`,()=>s(null)),V=j(`useRef:1:16`,()=>s(null));if(L.current=n,h.current||=`rue-form-item-${U++}`,n.name!=null&&!m.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let H=j(`computed:1:17`,()=>k(()=>n.name==null?void 0:J(n.name))),W=H,G=j(`computed:1:18`,()=>k(()=>W.get()?ee(W.get()):void 0)),K=G,te=j(`computed:1:19`,()=>k(()=>n.layout??`horizontal`)),ne=j(`computed:1:20`,()=>k(()=>me(n.required,n.rules))),re=j(`computed:1:21`,()=>k(()=>n.labelAlign??`right`)),ie=j(`computed:1:22`,()=>k(()=>n.labelCol)),ae=j(`computed:1:23`,()=>k(()=>n.wrapperCol)),Y=j(`computed:1:24`,()=>k(()=>n.htmlFor??(W.get()?W.get().map(e=>String(e)).join(`__`):void 0))),oe=Y;if(W.get()&&m.get()&&N.current!==K.get()){let e=L.current??n;v.current?.(),v.current=m.get().__INTERNAL__.registerField({id:h.current,kind:`item`,getNamePath:()=>W.get(),getRules:()=>e.rules??[],getRequired:()=>e.required,getLabel:()=>e.label,getMessageVariables:()=>e.messageVariables,getValidateTrigger:()=>se(e.validateTrigger),getDependencies:()=>(e.dependencies??[]).map(e=>J(e)),getInitialValue:()=>e.initialValue,getPreserve:()=>e.preserve}),N.current=K.get()}let X=()=>{let e=m.get()?.getFieldsValue(!0)??{},t=W.get()&&m.get()?m.get().__INTERNAL__.getMeta(W.get()):null;return{allValues:e,meta:t,currentValue:W.get()&&m.get()?m.get().getFieldValue(W.get()):void 0,triggerName:n.trigger??`onChange`,validateTrigger:se(n.validateTrigger),status:n.validateStatus??(t?.validating?`validating`:t?.errors.length?`error`:t?.warnings.length?`warning`:t?.touched&&(n.rules?.length??0)>0?`success`:void 0)}},Z=()=>{let{allValues:i,meta:a,currentValue:o,triggerName:s,validateTrigger:l,status:d}=X(),f=n.render??n.children,h;if(typeof f==`function`&&f.kind!==`block-factory`&&W.get()&&m.get()&&!n.shouldUpdate){let e={...n.getValueProps?n.getValueProps(o):{[n.valuePropName??`value`]:n.valuePropName===`checked`?!!o:o},id:oe.get()};e[s]=(...e)=>{let t=n.getValueFromEvent?n.getValueFromEvent(...e):ge(n.valuePropName??`value`,...e),r=n.normalize?n.normalize(t,o,m.get().getFieldsValue(!0)):t;m.get().__INTERNAL__.updateValueFromControl(W.get(),r,{touch:!0,triggerName:s})},l.filter(e=>e!==s).forEach(t=>{e[t]=(...e)=>{m.get().__INTERNAL__.validateFieldByPath(W.get(),t)}}),h=f(e,{value:o,touched:a?.touched??!1,validating:a?.validating??!1,errors:a?.errors??[],warnings:a?.warnings??[],status:d},m.get())}else typeof f==`function`&&f.kind!==`block-factory`&&(!W.get()||n.shouldUpdate)?(((typeof n.shouldUpdate==`function`?n.shouldUpdate(M.current??i,i):n.shouldUpdate===!0||E.current===void 0)||E.current===void 0)&&(E.current=f(i,m.get())),M.current=q(i),h=E.current):h=F(I,{source:u.get()});if(n.noStyle){R.current&&g(F(S,{children:h}),R.current);return}z.current&&g(F(S,{children:h}),z.current),B.current&&g(n.help===void 0?a&&(a.errors.length>0||a.warnings.length>0)?P(`ul`,{className:`mt-2 grid gap-1 text-xs`,children:[a.errors.map((n,i)=>_(a=>{let o=D(`li`,a);t(()=>{p(o,`key`,String(`error-${i}`))}),O(o,`text-error`);let s=e(`rue:slot:anchor`);return c(o,s),t(()=>{let e=n;r(()=>x(e,o,s))}),o})),a.warnings.map((n,i)=>_(a=>{let o=D(`li`,a);t(()=>{p(o,`key`,String(`warning-${i}`))}),O(o,`text-warning`);let s=e(`rue:slot:anchor`);return c(o,s),t(()=>{let e=n;r(()=>x(e,o,s))}),o}))]}):F(S,{}):F(S,{children:n.help}),B.current),V.current&&g(n.hasFeedback?F(S,{children:_e(d)}):F(S,{}),V.current)};return y.current!==m.get()&&(b.current?.(),y.current=m.get(),b.current=m.get()?m.get().__INTERNAL__.subscribe(()=>{T(w.value+1)}):null),j(`watch:1:25`,()=>a(()=>w.value,()=>{Z()},{immediate:!0})),A(()=>{v.current?.(),v.current=null,b.current?.(),b.current=null,y.current=void 0}),C(()=>{Z()}),d(()=>{Z()}),{slotSource:o,formInstance:f,entityIdRef:h,unregisterRef:v,subscriptionFormRef:y,unsubscribeRenderRef:b,renderVersion:w,setRenderVersion:T,renderCacheRef:E,previousValuesRef:M,lastRegisteredKeyRef:N,latestPropsRef:L,noStyleHostRef:R,controlHostRef:z,helpHostRef:B,feedbackHostRef:V,namePath:H,nameKey:G,layout:te,required:ne,labelAlign:re,labelWrap:!1,labelCol:ie,wrapperCol:ae,controlId:Y,getRenderState:X,renderManagedContent:Z,assignControlHost:e=>{z.current=e,e&&queueMicrotask(()=>{Z()})}}}));if(n.noStyle)return _(e=>{let t=D(`div`,e),n=N(t,()=>V);return y(()=>{n()}),v(t,{display:`contents`}),t});let de=n.label===void 0?null:P(`label`,{className:G(`text-[0.95rem] leading-7 font-medium text-base-content/78`,ae.get()===`left`?`text-left`:`text-right md:text-right`,Y?`whitespace-normal`:`md:whitespace-nowrap`),style:{width:re.get()===`horizontal`?ve(oe.get()):void 0},for:Z.get(),children:[F(`span`,{children:n.label}),re.get()===`horizontal`&&n.colon!==!1?F(`span`,{className:`ml-1 text-base-content/45`,children:`:`}):null,xe(n.label,ie.get(),!0)]}),fe=re.get()===`horizontal`&&X.get()?.offset?{marginLeft:`${X.get().offset/24*100}%`,width:ve(X.get())}:re.get()===`horizontal`?{width:ve(X.get())}:void 0;return _(i=>{let a=D(`div`,i);t(()=>{O(a,G(`rue-form-item`,n.hidden?`hidden`:void 0,re.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,n.className))}),t(()=>{let e=n.style;v(a,e)});let o=e(`rue:slot:anchor`);c(a,o),t(()=>{let e=de;r(()=>x(e,a,o))});let s=D(`div`,a);c(a,s),O(s,`min-w-0 flex-1`),t(()=>{v(s,fe)});let l=D(`div`,s);c(s,l),O(l,`flex items-start gap-3`);let u=D(`div`,l);c(l,u),t(()=>{p(u,`key`,String(ne.get()??`__rue_form_item_control__`))}),O(u,`min-w-0 flex-1`);let d=N(u,()=>ue);y(()=>{d()});let f=e(`rue:slot:anchor`);c(l,f),t(()=>{let e=n.hasFeedback?_(()=>{let e=m(),t=D(`span`,e);c(e,t),O(t,`mt-3 shrink-0`);let n=N(t,()=>K);return y(()=>{n()}),e}):``;r(()=>x(e,l,f))});let h=D(`div`,s);c(s,h),O(h,`mt-3`);let g=N(h,()=>W);y(()=>{g()});let b=e(`rue:slot:anchor`);return c(s,b),t(()=>{let i=n.extra==null?``:_(()=>{let i=m(),a=D(`div`,i);c(i,a),O(a,`mt-3 text-[0.8rem] leading-6 text-base-content/55`);let o=e(`rue:slot:anchor`);return c(a,o),t(()=>{let e=n.extra;r(()=>x(e,a,o))}),i});r(()=>x(i,s,b))}),a})},List:e=>{let{form:t,name:n,children:r,render:i,initialValue:a,rules:o}=e,c=t;if(!c)throw Error(`Form.List 需要显式传入 form`);let u=i??r;if(typeof u!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let d=J(n),f=j(`useRef:1:26`,()=>s()),p=j(`useRef:1:27`,()=>s(null)),m=j(`useRef:1:28`,()=>s(void 0)),h=j(`useRef:1:29`,()=>s(null)),[g,_]=j(`useState:1:30`,()=>l(0,{kind:`ref`})),v=j(`useRef:1:31`,()=>s(o)),y=j(`useRef:1:32`,()=>s(a)),b=j(`useRef:1:33`,()=>s([])),x=j(`useRef:1:34`,()=>s(0));return v.current=o,y.current=a,f.current||=`rue-form-list-${U++}`,p.current||=c.__INTERNAL__.registerField({id:f.current,kind:`list`,getNamePath:()=>d,getRules:()=>v.current??[],getRequired:()=>void 0,getLabel:()=>d[d.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>y.current,getPreserve:()=>!0}),m.current!==c&&(h.current?.(),m.current=c,h.current=c.__INTERNAL__.subscribe(()=>{_(g.value+1)})),A(()=>{p.current?.(),p.current=null,h.current?.(),h.current=null,m.current=void 0}),(()=>{g.value;let e=c.getFieldValue(d),t=Array.isArray(e)?e:[],n=c.__INTERNAL__.getMeta(d),r=b.current??[],i=x.current??0;b.current??=r,x.current??=i;let a=()=>{let e=x.current??0;return x.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(b.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),c.__INTERNAL__.updateListValue(d,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),c.__INTERNAL__.updateListValue(d,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),c.__INTERNAL__.updateListValue(d,i)}},s=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return F(`div`,{"data-rue-form-list-shell":`true`,children:u(s,o,{errors:n.errors,warnings:n.warnings})},s.map(e=>`${String(e.fieldKey)}:${e.name}`).join(`|`))})()},ErrorList:n=>{let{list:r}=j(`useSetup:0:0`,()=>o(()=>({list:j(`computed:1:1`,()=>k(()=>[...n.errors??[],...n.warnings??[]].filter(e=>e!=null)))})));return r.get().length?_(r=>{let i=D(`ul`,r);t(()=>{O(i,G(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,n.className))}),t(()=>{let e=n.style;v(i,e)});let a=e(`rue:list:start`),o=e(`rue:list:end`);c(i,a),c(i,o);let s=new Map;t(()=>{s=M({items:(n.errors??[])||[],getKey:(e,t)=>`error-${t}`,elements:s,parent:a.parentNode,before:o,singleRoot:!0,start:a,renderItem:(e,n,r,i,a)=>{x(_(()=>{let n=m(),r=D(`li`,n);c(n,r),t(()=>{p(r,`key`,String(`error-${a}`))}),O(r,`text-error`);let i=w(r);return c(r,i),t(()=>{h(i,e)}),n}),n,r)}})}),c(i,b(` `));let l=e(`rue:list:start`),u=e(`rue:list:end`);c(i,l),c(i,u);let d=new Map;return t(()=>{d=M({items:(n.warnings??[])||[],getKey:(e,t)=>`warning-${t}`,elements:d,parent:l.parentNode,before:u,singleRoot:!0,start:l,renderItem:(e,n,r,i,a)=>{x(_(()=>{let n=m(),r=D(`li`,n);c(n,r),t(()=>{p(r,`key`,String(`warning-${a}`))}),O(r,`text-warning`);let i=w(r);return c(r,i),t(()=>{h(i,e)}),n}),n,r)}})}),i}):null},useForm:e=>{let t=j(`useRef:1:38`,()=>s());return t.current||=e??be(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,t)=>{let n=i()?.propsRO?.[H],r=t??n?.form,[a,o]=j(`useState:1:35`,()=>l(0,{kind:`ref`})),c=j(`useRef:1:36`,()=>s(void 0)),u=j(`useRef:1:37`,()=>s(null));if(c.current!==r&&(u.current?.(),c.current=r,u.current=r?r.__INTERNAL__.subscribe(()=>{o(a.value+1)}):null),A(()=>{u.current?.(),u.current=null,c.current=void 0}),r)return a.value,r.getFieldValue(e)}}),Se=n=>_(i=>{let a=D(`div`,i);O(a,`not-prose my-6 lg:my-8`);let o=D(`h3`,a);c(a,o),O(o,`mt-0 mb-3 text-base font-semibold text-base-content`);let s=e(`rue:slot:anchor`);c(o,s),t(()=>{let e=n.title;r(()=>x(e,o,s))});let l=D(`div`,a);c(a,l),O(l,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=D(`table`,l);c(l,u),O(u,`table table-zebra`);let d=D(`thead`,u);c(u,d);let f=D(`tr`,d);c(d,f);let h=D(`th`,f);c(f,h),c(h,b(`属性`));let g=D(`th`,f);c(f,g),c(g,b(`说明`));let v=D(`th`,f);c(f,v),c(v,b(`类型`));let y=D(`th`,f);c(f,y),c(y,b(`默认值`));let S=D(`tbody`,u);c(u,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);c(S,C),c(S,w);let T=new Map;return t(()=>{T=M({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,a,o,s)=>{x(_(()=>{let i=m(),a=D(`tr`,i);c(i,a),t(()=>{p(a,`key`,String(n.prop))});let o=D(`td`,a);c(a,o);let s=D(`code`,o);c(o,s);let l=e(`rue:slot:anchor`);c(s,l),t(()=>{let e=n.prop;r(()=>x(e,s,l))});let u=D(`td`,a);c(a,u);let d=e(`rue:slot:anchor`);c(u,d),t(()=>{let e=n.description;r(()=>x(e,u,d))});let f=D(`td`,a);c(a,f);let h=D(`code`,f);c(f,h);let g=e(`rue:slot:anchor`);c(h,g),t(()=>{let e=n.type;r(()=>x(e,h,g))});let _=D(`td`,a);c(a,_);let v=D(`code`,_);c(_,v);let y=e(`rue:slot:anchor`);return c(v,y),t(()=>{let e=n.defaultValue;r(()=>x(e,v,y))}),i}),i,a)}})}),a}),Ce=n=>_(i=>{let a=D(`div`,i);O(a,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let o=e(`rue:slot:anchor`);c(a,o),t(()=>{let i=n.eyebrow?_(()=>{let i=m(),a=D(`div`,i);c(i,a),O(a,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let o=e(`rue:slot:anchor`);return c(a,o),t(()=>{let e=n.eyebrow;r(()=>x(e,a,o))}),i}):``;r(()=>x(i,a,o))});let s=D(`h3`,a);c(a,s),O(s,`mt-3 mb-0 text-lg font-semibold text-base-content`);let l=e(`rue:slot:anchor`);c(s,l),t(()=>{let e=n.title;r(()=>x(e,s,l))});let u=D(`p`,a);c(a,u),O(u,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let d=e(`rue:slot:anchor`);c(u,d),t(()=>{let e=n.description;r(()=>x(e,u,d))});let f=e(`rue:slot:anchor`);return c(a,f),t(()=>{let i=n.items?.length?_(()=>{let r=m(),i=D(`ul`,r);c(r,i),O(i,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let a=e(`rue:list:start`),o=e(`rue:list:end`);c(i,a),c(i,o);let s=new Map;return t(()=>{s=M({items:n.items||[],getKey:(e,t)=>e,elements:s,parent:i,before:o,singleRoot:!0,trackIndex:!1,start:a,renderItem:(e,n,r,i,a)=>{x(_(()=>{let n=m(),r=D(`li`,n);c(n,r),t(()=>{p(r,`key`,String(e))});let i=w(r);return c(r,i),t(()=>{h(i,e)}),n}),n,r)}})}),r}):``;r(()=>x(i,a,f))}),a}),$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},we=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Te=()=>{let{initialValues:i,draft:a,result:s}=j(`useSetup:0:0`,()=>o(()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0};return{initialValues:e,draft:j(`ref:1:0`,()=>n($(e))),result:j(`ref:1:1`,()=>n(`等待提交，右侧会展示 payload 或校验摘要。`))}}));return _(n=>{let o=D(`div`,n);O(o,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let l=e(`rue:component:anchor`);c(o,l),t(()=>{let e=E(Q,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:i,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{a.value=$(t)},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>P(S,{children:[F(Q.Item,{form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>F(z,{...e,placeholder:`输入项目名称`})}),F(Q.Item,{form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>F(z,{...e,placeholder:`team@rue.dev`})}),F(Q.Item,{form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>F(R,{...e,children:`允许直接覆盖 staging 配置`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存表单`}),F(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`重置`})]})]})});r(()=>x(e,o,l))});let u=D(`div`,o);c(o,u),O(u,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=D(`div`,u);c(u,d),O(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(d,b(`Submit result`));let f=D(`p`,u);c(u,f),O(f,`mt-3 mb-0 text-sm text-base-content/65`),c(f,b(`这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。`));let p=D(`div`,u);c(u,p),O(p,`mt-4 grid gap-4`);let m=D(`div`,p);c(p,m),O(m,`rounded-[1.25rem] bg-base-200/70 p-4`);let g=D(`div`,m);c(m,g),O(g,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(g,b(`Live draft`));let _=D(`pre`,m);c(m,_),O(_,`mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80`);let v=w(_);c(_,v),t(()=>{h(v,a.value)});let y=D(`div`,p);c(p,y),O(y,`rounded-[1.25rem] bg-neutral p-4 text-neutral-content`);let C=D(`div`,y);c(y,C),O(C,`text-xs uppercase tracking-[0.22em] text-neutral-content/60`),c(C,b(`Last submit`));let T=D(`pre`,y);c(y,T),O(T,`mt-3 whitespace-pre-wrap break-words text-xs leading-6`);let k=w(T);return c(T,k),t(()=>{h(k,s.value)}),o})},Ee=()=>{let{form:i,role:a,region:s,notes:l,activity:u}=j(`useSetup:0:0:dup1`,()=>o(()=>{let[e]=Q.useForm();return{form:e,role:Q.useWatch(`role`,e)??`viewer`,region:Q.useWatch(`region`,e)??`cn-hz`,notes:Q.useWatch(`notes`,e)??``,activity:j(`ref:1:2`,()=>n(`等待实例方法操作。`))}}));return _(n=>{let o=D(`div`,n);O(o,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=e(`rue:component:anchor`);c(o,d),t(()=>{let e=E(Q,{form:i,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{u.value=`submit()
`+$(e)},onFinishFailed:e=>{u.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`viewer / editor / admin`})}),F(Q.Item,{form:e,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`cn-hz`})})]}),F(Q.Item,{form:e,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>F(z,{...e,placeholder:`写入审批说明或 rollout 策略`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,onClick:()=>{i.setFieldValue(`role`,`editor`),u.value=`setFieldValue('role', 'editor')`},children:`设为 editor`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{i.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),u.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:`填充预设`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{i.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),u.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:`填入异常值`}),F(L,{size:`sm`,type:`text`,onClick:()=>{i.resetFields(),u.value=`resetFields()`},children:`恢复初始值`}),F(L,{size:`sm`,color:`primary`,onClick:()=>{i.submit()},children:`程序化提交`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{i.validateFields().then(e=>{u.value=`validateFields()
`+$(e)}).catch(e=>{u.value=`validateFields() failed
`+$(e.errorFields)})},children:`validateFields`})]})]})});r(()=>x(e,o,d))});let f=D(`div`,o);c(o,f),O(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let p=D(`div`,f);c(f,p),O(p,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(p,b(`Reactive summary`));let m=D(`p`,f);c(f,m),O(m,`mt-3 mb-0 text-sm text-base-content/65`),c(m,b(`这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。`));let g=D(`div`,f);c(f,g),O(g,`mt-4 grid gap-3`);let _=D(`div`,g);c(g,_),O(_,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let v=D(`div`,_);c(_,v),O(v,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(v,b(`role`));let y=D(`div`,_);c(_,y),O(y,`mt-2 text-lg font-semibold text-base-content`);let C=w(y);c(y,C),t(()=>{h(C,String(a))});let T=D(`div`,g);c(g,T),O(T,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=D(`div`,T);c(T,k),O(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(k,b(`region`));let A=D(`div`,T);c(T,A),O(A,`mt-2 text-lg font-semibold text-base-content`);let j=w(A);c(A,j),t(()=>{h(j,String(s))});let M=D(`div`,g);c(g,M),O(M,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let N=D(`div`,M);c(M,N),O(N,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(N,b(`notes`));let I=D(`div`,M);c(M,I),O(I,`mt-2 text-sm leading-6 text-base-content/80`);let R=w(I);c(I,R),t(()=>{h(R,String(l)||`未填写`)});let B=D(`pre`,f);c(f,B),O(B,`mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6`);let V=w(B);return c(B,V),t(()=>{h(V,u.value)}),o})},De=()=>{let{form:i,password:a,confirm:s,website:l,status:u}=j(`useSetup:0:0:dup2`,()=>o(()=>{let[e]=Q.useForm();return{form:e,password:Q.useWatch(`password`,e)??``,confirm:Q.useWatch(`confirm`,e)??``,website:Q.useWatch(`website`,e)??``,status:j(`ref:1:3`,()=>n(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`))}}));return _(n=>{let o=D(`div`,n);O(o,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=e(`rue:component:anchor`);c(o,d),t(()=>{let e=E(Q,{form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{u.value=`提交成功
`+$(e)},onFinishFailed:e=>{u.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`release-admin`})}),F(Q.Item,{form:e,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>F(z,{...e,placeholder:`https://prod.rue.dev`})})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>F(z,{...e,placeholder:`至少 8 位`})}),F(Q.Item,{form:e,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>F(z,{...e,placeholder:`再次输入密码`})})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行校验`}),F(L,{type:`outlined`,onClick:()=>i.resetFields(),children:`清空状态`})]})]})});r(()=>x(e,o,d))});let f=D(`div`,o);c(o,f),O(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let p=D(`div`,f);c(f,p),O(p,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(p,b(`Validation notes`));let m=D(`p`,f);c(f,m),O(m,`mt-3 mb-0 text-sm text-base-content/65`),c(m,b("这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。"));let g=D(`div`,f);c(f,g),O(g,`mt-4 grid gap-3`);let _=D(`div`,g);c(g,_),O(_,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let v=D(`div`,_);c(_,v),O(v,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(v,b(`Password match`));let y=D(`div`,_);c(_,y),O(y,`mt-2 text-base font-semibold text-base-content`);let C=w(y);c(y,C),t(()=>{h(C,a&&s?a===s?`已匹配`:`未匹配`:`等待输入`)});let T=D(`div`,g);c(g,T),O(T,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=D(`div`,T);c(T,k),O(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(k,b(`Website warning`));let A=D(`div`,T);c(T,A),O(A,`mt-2 text-base font-semibold text-base-content`);let j=w(A);c(A,j),t(()=>{h(j,l?String(l).startsWith(`https://`)?`格式建议通过`:`建议补上 https://`:`未填写`)});let M=D(`pre`,f);c(f,M),O(M,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let N=w(M);return c(M,N),t(()=>{h(N,u.value)}),o})},Oe=()=>{let{form:i,initialValues:a,issueId:s,slug:l,branch:u,snapshot:d}=j(`useSetup:0:0:dup3`,()=>o(()=>{let[e]=Q.useForm(),t={issueId:`2048`,slug:`release-planning`,branch:`main`};return{form:e,initialValues:t,issueId:Q.useWatch(`issueId`,e)??``,slug:Q.useWatch(`slug`,e)??``,branch:Q.useWatch(`branch`,e)??``,snapshot:j(`ref:1:4`,()=>n($(t)))}}));return _(n=>{let o=D(`div`,n);O(o,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let f=e(`rue:component:anchor`);c(o,f),t(()=>{let e=E(Q,{form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:a,onValuesChange:(e,t)=>{d.value=$(t)},onFinish:e=>{d.value=`提交成功
`+$(e)},render:e=>P(S,{children:[F(Q.Item,{form:e,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>F(z,{...e,placeholder:`#2048`})}),F(Q.Item,{form:e,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>F(z,{...e,placeholder:`release-planning`})}),F(Q.Item,{form:e,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>F(z,{...e,placeholder:`main / release/v1-2`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`应用转换`}),F(L,{type:`outlined`,onClick:()=>{i.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:`填充示例`})]})]})});r(()=>x(e,o,f))});let p=D(`div`,o);c(o,p),O(p,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=D(`div`,p);c(p,m),O(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(m,b(`Store snapshot`));let g=D(`p`,p);c(p,g),O(g,`mt-3 mb-0 text-sm text-base-content/65`),c(g,b("这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。"));let _=D(`div`,p);c(p,_),O(_,`mt-4 grid gap-3`);let v=D(`div`,_);c(_,v),O(v,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let y=D(`div`,v);c(v,y),O(y,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(y,b(`issueId`));let C=D(`div`,v);c(v,C),O(C,`mt-2 text-lg font-semibold text-base-content`);let T=w(C);c(C,T),t(()=>{h(T,String(s)||`空`)});let k=D(`div`,_);c(_,k),O(k,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=D(`div`,k);c(k,A),O(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(A,b(`slug`));let j=D(`div`,k);c(k,j),O(j,`mt-2 text-lg font-semibold text-base-content`);let M=w(j);c(j,M),t(()=>{h(M,String(l)||`空`)});let N=D(`div`,_);c(_,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=D(`div`,N);c(N,I),O(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(I,b(`branch`));let R=D(`div`,N);c(N,R),O(R,`mt-2 text-lg font-semibold text-base-content`);let B=w(R);c(R,B),t(()=>{h(B,String(u)||`空`)});let V=D(`pre`,p);c(p,V),O(V,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let H=w(V);return c(V,H),t(()=>{h(H,d.value)}),o})},ke=()=>{let{form:i,enableCanary:a,publishMode:s,batchSize:l,approveBy:u,result:d}=j(`useSetup:0:0:dup4`,()=>o(()=>{let[e]=Q.useForm();return{form:e,enableCanary:!!Q.useWatch(`enableCanary`,e),publishMode:Q.useWatch(`publishMode`,e)??`manual`,batchSize:Q.useWatch(`batchSize`,e)??``,approveBy:Q.useWatch(`approveBy`,e)??``,result:j(`ref:1:5`,()=>n(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`))}}));return _(n=>{let o=D(`div`,n);O(o,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let f=e(`rue:component:anchor`);c(o,f),t(()=>{let e=E(Q,{form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{d.value=`提交成功
`+$(e)},render:e=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`gateway`})}),F(Q.Item,{form:e,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`manual / auto`})})]}),F(Q.Item,{form:e,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>F(R,{...e,children:`开启 canary rollout`})}),F(Q.Item,{shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:t=>t.enableCanary?P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5`,children:[F(`div`,{className:`mb-4 text-sm font-medium text-base-content`,children:`Canary settings`}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-ops`})})]}),t.publishMode===`auto`?F(`div`,{className:`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,children:`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`}):null]}):F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,children:`未开启灰度发布，额外字段不会挂载，也不会参与校验。`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存发布策略`}),F(L,{type:`outlined`,onClick:()=>{i.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:`套用 canary 模板`})]})]})});r(()=>x(e,o,f))});let p=D(`div`,o);c(o,p),O(p,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=D(`div`,p);c(p,m),O(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(m,b(`Conditional summary`));let g=D(`p`,p);c(p,g),O(g,`mt-3 mb-0 text-sm text-base-content/65`),c(g,b("这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。"));let _=D(`div`,p);c(p,_),O(_,`mt-4 grid gap-3`);let v=D(`div`,_);c(_,v),O(v,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let y=D(`div`,v);c(v,y),O(y,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(y,b(`enableCanary`));let C=D(`div`,v);c(v,C),O(C,`mt-2 text-lg font-semibold text-base-content`);let T=w(C);c(C,T),t(()=>{h(T,a?`true`:`false`)});let k=D(`div`,_);c(_,k),O(k,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=D(`div`,k);c(k,A),O(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(A,b(`publishMode`));let j=D(`div`,k);c(k,j),O(j,`mt-2 text-lg font-semibold text-base-content`);let M=w(j);c(j,M),t(()=>{h(M,String(s))});let N=D(`div`,_);c(_,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=D(`div`,N);c(N,I),O(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(I,b(`Conditional fields`));let B=D(`div`,N);c(N,B),O(B,`mt-2 text-sm leading-6 text-base-content/80`),c(B,b(`batchSize: `));let V=w(B);c(B,V),t(()=>{h(V,String(l)||`未挂载`)}),c(B,D(`br`,B)),c(B,b(`approveBy: `));let H=w(B);c(B,H),t(()=>{h(H,String(u)||`未挂载`)});let U=D(`pre`,p);c(p,U),O(U,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let W=w(U);return c(U,W),t(()=>{h(W,d.value)}),o})},Ae=()=>{let{form:i,host:a,path:s,saveLog:l,normalizedPath:u,previewUrl:d}=j(`useSetup:0:0:dup5`,()=>o(()=>{let[e]=Q.useForm(),t=String(Q.useWatch(`host`,e)??`api.rue.dev`),r=String(Q.useWatch(`path`,e)??`release-hooks`),i=j(`ref:1:6`,()=>n(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`)),a=r?r.replace(/^\/+/,``):``;return{form:e,host:t,path:r,saveLog:i,normalizedPath:a,previewUrl:`https://${t}:443/hooks/${a}`}}));return _(n=>{let a=D(`div`,n);O(a,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let o=e(`rue:component:anchor`);c(a,o),t(()=>{let e=E(Q,{form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{l.value=`保存复合控件
`+$(e)},render:e=>P(S,{children:[P(`div`,{className:`grid gap-6`,children:[P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`回调地址`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`https://`}),F(Q.Item,{form:e,name:`host`,noStyle:!0,render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`api.rue.dev`})})}),F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`:443`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。`})]}),P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`资源路径`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`/hooks/`}),F(Q.Item,{form:e,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`release-hooks`})})}),F(`span`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`POST target`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。`})]})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存复合地址`}),F(L,{type:`outlined`,onClick:()=>{i.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:`填入 staging`})]})]})});r(()=>x(e,a,o))});let s=D(`div`,a);c(a,s),O(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let u=D(`div`,s);c(s,u),O(u,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(u,b(`Composite preview`));let f=D(`p`,s);c(s,f),O(f,`mt-3 mb-0 text-sm text-base-content/65`),c(f,b(`这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。`));let p=D(`div`,s);c(s,p),O(p,`mt-4 rounded-[1.25rem] bg-base-200/70 p-4`);let m=D(`div`,p);c(p,m),O(m,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(m,b(`Resolved URL`));let g=D(`div`,p);c(p,g),O(g,`mt-3 break-all text-lg font-semibold text-base-content`);let _=e(`rue:slot:anchor`);c(g,_),t(()=>{let e=d;r(()=>x(e,g,_))});let v=D(`div`,s);c(s,v),O(v,`mt-4 grid gap-3 text-sm text-base-content/75`);let y=D(`div`,v);c(v,y),O(y,`rounded-[1.25rem] bg-base-200/70 p-4`),c(y,b("`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。"));let C=D(`div`,v);c(v,C),O(C,`rounded-[1.25rem] bg-base-200/70 p-4`),c(C,b(`外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。`));let T=D(`div`,v);c(v,T),O(T,`rounded-[1.25rem] bg-base-200/70 p-4`),c(T,b(`如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。`));let k=D(`pre`,s);c(s,k),O(k,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let A=w(k);return c(k,A),t(()=>{h(A,l.value)}),a})},je=()=>{let{form:i,activity:a,jumpToField:s}=j(`useSetup:0:0:dup6`,()=>o(()=>{let[e]=Q.useForm(),t=j(`ref:1:7`,()=>n(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`));return{form:e,activity:t,jumpToField:(n,r)=>{e.scrollToField(n,{block:`center`,focus:!0}),t.value=`scrollToField -> ${r}`}}}));return _(n=>{let o=D(`div`,n);O(o,`grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]`);let l=D(`div`,o);c(o,l),O(l,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let u=D(`div`,l);c(l,u),O(u,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(u,b(`Scroll actions`));let d=D(`p`,l);c(l,d),O(d,`mt-3 mb-0 text-sm text-base-content/65`),c(d,b(`这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。`));let f=D(`div`,l);c(l,f),O(f,`mt-4 grid gap-2`);let p=e(`rue:component:anchor`);c(f,p),x(E(L,{size:`sm`,onClick:()=>s(`releaseName`,`发布名称`),children:`滚到发布名称`}),f,p);let m=e(`rue:component:anchor`);c(f,m),x(E(L,{size:`sm`,type:`outlined`,onClick:()=>s([`strategy`,`batchSize`],`灰度批次`),children:`滚到灰度批次`}),f,m);let g=e(`rue:component:anchor`);c(f,g),x(E(L,{size:`sm`,type:`outlined`,onClick:()=>s([`observability`,`dashboard`],`监控看板`),children:`滚到监控看板`}),f,g);let _=e(`rue:component:anchor`);c(f,_),x(E(L,{size:`sm`,type:`outlined`,onClick:()=>s([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),f,_);let y=D(`pre`,l);c(l,y),O(y,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let C=w(y);c(y,C),t(()=>{h(C,a.value)});let T=D(`div`,o);c(o,T),O(T,`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5`);let k=D(`div`,T);c(T,k),O(k,`overflow-y-auto overscroll-contain pr-2`),v(k,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let A=e(`rue:component:anchor`);return c(k,A),t(()=>{let e=E(Q,{form:i,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{a.value=`提交成功
`+$(e)},onFinishFailed:e=>{a.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>P(S,{children:[P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 1`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`基础信息`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`2026.05 release`})}),F(Q.Item,{form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`staging`})}),F(Q.Item,{form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-captain`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 2`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`发布策略`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`15m`})}),F(Q.Item,{form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`error rate > 2%`})}),F(Q.Item,{form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`30m`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 3`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`观测与审批`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Grafana release board`})}),F(Q.Item,{form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`#release-alerts`})}),F(Q.Item,{form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`ops-squad`})}),F(Q.Item,{form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`qa-squad`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 4`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`回滚预案`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>F(z,{...e,placeholder:`RB-2026-0514`})}),F(Q.Item,{form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rollback-owner`})}),F(Q.Item,{form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`20m`})}),F(Q.Item,{form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`platform / qa / support`})})]})]}),F(`div`,{className:`sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur`,children:P(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[F(`div`,{className:`text-sm text-base-content/65`,children:`留空深层字段后点击提交，会自动滚到首个错误项。`}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{type:`outlined`,onClick:()=>s([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),F(L,{color:`primary`,htmlType:`submit`,children:`提交长表单`})]})]})})]})});r(()=>x(e,k,A))}),o})},Me=()=>{let{form:n,members:i}=j(`useSetup:0:0:dup7`,()=>o(()=>{let[e]=Q.useForm();return{form:e,members:Q.useWatch(`members`,e)??[]}}));return _(a=>{let o=D(`div`,a);O(o,`grid gap-6`);let s=D(`div`,o);c(o,s),O(s,`grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]`);let l=e(`rue:component:anchor`);c(s,l),t(()=>{let e=E(Q,{form:n,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>F(Q.List,{form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保留 2 名审批成员，才适合真实协作流程。`}}],render:(t,n,r)=>P(`div`,{className:`grid gap-4`,children:[t.length===0?F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,children:`暂无成员，点击下方按钮即可追加一组字段。`}):null,t.map((r,i)=>P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`,children:[P(`div`,{className:`mb-4 flex flex-wrap items-center justify-between gap-3`,children:[P(`div`,{children:[P(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:[`Member `,i+1]}),P(`div`,{className:`mt-1 text-sm font-medium text-base-content`,children:[`审批成员 `,i+1]})]}),P(`div`,{className:`flex flex-wrap gap-2`,children:[i>0?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name-1),children:`上移`}):null,i<t.length-1?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name+1),children:`下移`}):null,F(L,{size:`sm`,type:`text`,onClick:()=>n.remove(r.name),children:`删除`})]})]}),P(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`输入成员名称`})}),F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Owner / Reviewer / QA`})})]})]},r.key)),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,color:`primary`,onClick:()=>{n.add({name:`新成员 `+String(t.length+1),role:`QA`})},children:`新增成员`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>n.add({name:`Head reviewer`,role:`QA`},0),children:`头部插入`})]}),r.errors.length>0||r.warnings.length>0?F(Q.ErrorList,{errors:r.errors,warnings:r.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}):null]})})});r(()=>x(e,s,l))});let u=D(`div`,s);c(s,u),O(u,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=D(`div`,u);c(u,d),O(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(d,b(`List snapshot`));let f=D(`div`,u);c(u,f),O(f,`mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65`);let g=e(`rue:slot:anchor`);c(f,g),t(()=>{let e=i.length;r(()=>x(e,f,g))}),c(f,b(` members`));let v=D(`div`,u);c(u,v),O(v,`mt-4 grid gap-3`);let y=e(`rue:slot:anchor`);c(v,y),t(()=>{let n=i.length>0?_(()=>{let n=m(),r=e(`rue:list:start`),a=e(`rue:list:end`);c(n,r),c(n,a);let o=new Map;return t(()=>{o=M({items:i||[],getKey:(e,t)=>String(t),elements:o,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(e,n,r,i,a)=>{x(_(()=>{let n=m(),r=D(`div`,n);c(n,r),t(()=>{p(r,`key`,String(String(a)))}),O(r,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let i=D(`div`,r);c(r,i),O(i,`text-xs uppercase tracking-[0.22em] text-base-content/45`),c(i,b(`成员 `));let o=w(i);c(i,o),t(()=>{h(o,a+1)});let s=D(`div`,r);c(r,s),O(s,`mt-2 text-base font-medium text-base-content`);let l=w(s);c(s,l),t(()=>{h(l,e?.name?String(e.name):`未命名成员`)});let u=D(`div`,r);c(r,u),O(u,`mt-1 text-xs text-base-content/55`);let d=w(u);return c(u,d),t(()=>{h(d,e?.role?String(e.role):`未分配职责`)}),n}),n,r)}})}),n}):_(()=>{let e=m(),t=D(`div`,e);return c(e,t),O(t,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),c(t,b(`当前列表为空。`)),e});r(()=>x(n,v,y))});let S=D(`div`,o);c(o,S),O(S,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let C=D(`div`,S);c(S,C),O(C,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(C,b(`List behavior`));let T=D(`div`,S);c(S,T),O(T,`mt-4 grid gap-4 md:grid-cols-3`);let k=D(`div`,T);c(T,k),O(k,`rounded-[1.25rem] bg-base-200/70 p-4`);let A=D(`div`,k);c(k,A),O(A,`text-sm font-semibold text-base-content`),c(A,b(`列表级规则`));let j=D(`p`,k);c(k,j),O(j,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),c(j,b(`rules 挂在 Form.List 上，校验整个 members 数组。`));let N=D(`div`,T);c(T,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4`);let I=D(`div`,N);c(N,I),O(I,`text-sm font-semibold text-base-content`),c(I,b(`重排操作`));let R=D(`p`,N);c(N,R),O(R,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),c(R,b(`operation.move 保持字段状态跟随成员顺序移动。`));let B=D(`div`,T);c(T,B),O(B,`rounded-[1.25rem] bg-base-200/70 p-4`);let V=D(`div`,B);c(B,V),O(V,`text-sm font-semibold text-base-content`),c(V,b(`错误出口`));let H=D(`p`,B);return c(B,H),O(H,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),c(H,b(`Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。`)),o})},Ne=()=>{let{form:i,keyword:a,assignee:s,repository:l,reviewer:u,includeDrafts:d,submitted:f}=j(`useSetup:0:0:dup8`,()=>o(()=>{let[e]=Q.useForm();return{form:e,keyword:Q.useWatch(`keyword`,e)??``,assignee:Q.useWatch(`assignee`,e)??``,repository:Q.useWatch(`repository`,e)??``,reviewer:Q.useWatch(`reviewer`,e)??``,includeDrafts:!!Q.useWatch(`includeDrafts`,e),submitted:j(`ref:1:8`,()=>n(`尚未执行检索。`))}}));return _(n=>{let o=D(`div`,n);O(o,`grid gap-6`);let p=e(`rue:component:anchor`);c(o,p),t(()=>{let e=E(Q,{form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{f.value=$(e)},render:e=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:[F(Q.Item,{form:e,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>F(z,{...e,placeholder:`搜索 issue / 页面 / API`})}),F(Q.Item,{form:e,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>F(z,{...e,placeholder:`team-design`})}),F(Q.Item,{form:e,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>F(z,{...e,placeholder:`infra`})})]}),P(`div`,{className:`mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4`,children:[F(Q.Item,{form:e,name:`includeDrafts`,valuePropName:`checked`,render:e=>F(R,{...e,children:`包含草稿和实验分支`})}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行搜索`}),F(L,{type:`outlined`,onClick:()=>i.resetFields(),children:`清空条件`}),F(L,{type:`text`,onClick:()=>{i.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:`填入示例`})]})]})]})});r(()=>x(e,o,p))});let m=D(`div`,o);c(o,m),O(m,`grid gap-4 lg:grid-cols-2`);let g=D(`div`,m);c(m,g),O(g,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let _=D(`div`,g);c(g,_),O(_,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(_,b(`Query preview`));let v=D(`p`,g);c(g,v),O(v,`mt-3 mb-0 text-sm text-base-content/65`),c(v,b(`这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。`));let y=D(`pre`,g);c(g,y),O(y,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let C=e(`rue:slot:anchor`);c(y,C),t(()=>{let e=we({keyword:String(a),repository:String(l),assignee:String(s),reviewer:String(u),includeDrafts:d})||`暂无 query string`;r(()=>x(e,y,C))});let T=D(`div`,g);c(g,T),O(T,`mt-4 grid gap-3 text-sm text-base-content/80`);let k=D(`div`,T);c(T,k),O(k,`rounded-[1.25rem] bg-base-200/70 p-4`),c(k,b(`关键词：`));let A=w(k);c(k,A),t(()=>{h(A,String(a)||`未填写`)});let j=D(`div`,T);c(T,j),O(j,`rounded-[1.25rem] bg-base-200/70 p-4`),c(j,b(`仓库：`));let M=w(j);c(j,M),t(()=>{h(M,String(l)||`未填写`)});let N=D(`div`,T);c(T,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4`),c(N,b(`负责人 / 评审人：`));let I=w(N);c(N,I),t(()=>{h(I,String(s)||`未填写`)}),c(N,b(` / `));let B=w(N);c(N,B),t(()=>{h(B,String(u)||`未填写`)});let V=D(`div`,T);c(T,V),O(V,`rounded-[1.25rem] bg-base-200/70 p-4`),c(V,b(`包含草稿：`));let H=w(V);c(V,H),t(()=>{h(H,d?`是`:`否`)});let U=D(`div`,m);c(m,U),O(U,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let W=D(`div`,U);c(U,W),O(W,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),c(W,b(`Last submit`));let G=D(`pre`,U);c(U,G),O(G,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let K=w(G);return c(G,K),t(()=>{h(K,f.value)}),o})},Pe=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保留值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Fe=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保留字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ie=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Le=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 继续传给 Item / List`,`不要依赖隐式祖先解析`]}],Re=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],ze=()=>{let{tabBasic:i,tabInstance:a,tabValidation:s,tabNormalize:l,tabConditional:u,tabNoStyle:d,tabList:f,tabScroll:g,tabInline:v}=j(`useSetup:0:0:dup9`,()=>o(()=>({tabBasic:j(`ref:1:9`,()=>n(`preview`)),tabInstance:j(`ref:1:10`,()=>n(`preview`)),tabValidation:j(`ref:1:11`,()=>n(`preview`)),tabNormalize:j(`ref:1:12`,()=>n(`preview`)),tabConditional:j(`ref:1:13`,()=>n(`preview`)),tabNoStyle:j(`ref:1:14`,()=>n(`preview`)),tabList:j(`ref:1:15`,()=>n(`preview`)),tabScroll:j(`ref:1:16`,()=>n(`preview`)),tabInline:j(`ref:1:17`,()=>n(`preview`))})));return _(n=>{let o=m(),y=e(`rue:component:anchor`);return c(o,y),x(E(B,{children:_(()=>{let n=m(),o=D(`div`,n);c(n,o),O(o,`max-w-none prose prose-sm md:prose-base`);let _=D(`h1`,o);c(o,_),O(_,`mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content`),c(_,b(`Form 表单`));let y=D(`p`,o);c(o,y),O(y,`mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72`),c(y,b(`这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。`));let S=D(`h2`,o);c(o,S),c(S,b(`何时使用`));let C=D(`ul`,o);c(o,C);let k=D(`li`,C);c(C,k),c(k,b(`需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。`));let A=D(`li`,C);c(C,A),c(A,b(`需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。`));let j=D(`li`,C);c(C,j),c(j,b(`需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。`));let N=D(`section`,o);c(o,N),O(N,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let P=e(`rue:list:start`),I=e(`rue:list:end`);c(N,P),c(N,I);let L=new Map;t(()=>{L=M({items:Le||[],getKey:(e,t)=>e.title,elements:L,parent:N,before:I,start:P,renderItem:(e,t,n,r,i)=>{T(E(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description,items:e.items}),t,n,r)}})});let R=D(`div`,o);c(o,R),O(R,`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm`),c(R,b(`当前 Rue runtime 下，推荐通过`));let z=D(`code`,R);c(R,z),c(z,b(`Form.useForm()`)),c(R,b(`或`));let B=w(R);c(R,B),h(B,` `);let H=D(`code`,R);c(R,H);let U=w(H);c(H,U),h(U,`render={form => <Form.Item form={form} name="title" />}`),c(R,b(`显式持有并传递`));let W=w(R);c(R,W),h(W,` `);let G=D(`code`,R);c(R,G),c(G,b(`form`)),c(R,b("。 下面所有 demo 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。"));let K=e(`rue:component:anchor`);c(o,K),t(()=>{let e=E(V,{title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:i,preview:()=>F(Te,{}),code:`<Form
  initialValues={{
    profile: { name: 'Rue Design', email: 'team@rue.dev' },
    agree: true,
  }}
  onFinish={values => {
    console.log(values)
  }}
  onFinishFailed={info => {
    console.log(info.errorFields)
  }}
  render={form => (
    <>
      <Form.Item
        form={form}
        name={['profile', 'name']}
        label="名称"
        rules={[{ required: true }]}
        render={control => <Input {...control} />}
      />

      <Form.Item
        form={form}
        name={['profile', 'email']}
        label="邮箱"
        rules={[{ required: true }, { type: 'email' }]}
        render={control => <Input {...control} />}
      />

      <Form.Item
        form={form}
        name="agree"
        label="发布确认"
        valuePropName="checked"
        render={control => <Checkbox {...control}>允许直接覆盖 staging 配置</Checkbox>}
      />

      <Button color="primary" htmlType="submit">保存表单</Button>
    </>
  )}
/>
`});r(()=>x(e,o,K))});let q=e(`rue:component:anchor`);c(o,q),t(()=>{let e=E(V,{title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:a,preview:()=>F(Ee,{}),code:`const InstanceMethodsShowcase: FC = () => {
  const [form] = Form.useForm()
  const role = Form.useWatch('role', form) ?? 'viewer'
  const region = Form.useWatch('region', form) ?? 'cn-hz'
  const notes = Form.useWatch('notes', form) ?? ''
  const activity = ref('等待实例方法操作。')

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <Form
        form={form}
        className="content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"
        initialValues={{
          role: 'viewer',
          region: 'cn-hz',
          notes: '仅开放只读权限',
        }}
        scrollToFirstError={true}
        validateMessages={{
          required: '请填写 \${label}',
        }}
        onFinish={values => {
          activity.value = 'submit()\\n' + formatJson(values)
        }}
        onFinishFailed={info => {
          activity.value =
            'submit() failed\\n' +
            formatJson(
              info.errorFields.map(field => ({
                name: field.name.join('.'),
                errors: field.errors,
                warnings: field.warnings,
              })),
            )
        }}
        render={formInstance => (
          <>
            <div className="grid gap-5 md:grid-cols-2">
              <Form.Item
                form={formInstance}
                name="role"
                label="角色"
                rules={[
                  { required: true },
                  {
                    pattern: /^(viewer|editor|admin)$/,
                    message: '角色只能是 viewer、editor 或 admin',
                  },
                ]}
                hasFeedback={true}
                render={control => <Input {...control} placeholder="viewer / editor / admin" />}
              />

              <Form.Item
                form={formInstance}
                name="region"
                label="区域"
                rules={[
                  { required: true },
                  {
                    pattern: /^(cn|us|eu)-[a-z]+$/,
                    message: '区域格式示例：cn-hz、us-east、eu-west',
                  },
                ]}
                hasFeedback={true}
                render={control => <Input {...control} placeholder="cn-hz" />}
              />
            </div>

            <Form.Item
              form={formInstance}
              name="notes"
              label="交付备注"
              rules={[{ required: true }, { min: 6 }]}
              render={control => <Input {...control} placeholder="写入审批说明或 rollout 策略" />}
            />

            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                size="sm"
                onClick={() => {
                  form.setFieldValue('role', 'editor')
                  activity.value = "setFieldValue('role', 'editor')"
                }}
              >
                设为 editor
              </Button>
              <Button
                size="sm"
                type="outlined"
                onClick={() => {
                  form.setFieldsValue({
                    region: 'us-east',
                    notes: '需要双人复核',
                  })
                  activity.value = 'setFieldsValue({ region: "us-east", notes: "需要双人复核" })'
                }}
              >
                填充预设
              </Button>
              <Button
                size="sm"
                type="outlined"
                onClick={() => {
                  form.setFieldsValue({
                    role: 'guest',
                    region: 'hangzhou',
                    notes: '',
                  })
                  activity.value = 'setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })'
                }}
              >
                填入异常值
              </Button>
              <Button
                size="sm"
                type="text"
                onClick={() => {
                  form.resetFields()
                  activity.value = 'resetFields()'
                }}
              >
                恢复初始值
              </Button>
              <Button
                size="sm"
                color="primary"
                onClick={() => {
                  form.submit()
                }}
              >
                程序化提交
              </Button>
              <Button
                size="sm"
                type="outlined"
                onClick={() => {
                  void form
                    .validateFields()
                    .then(values => {
                      activity.value = 'validateFields()\\n' + formatJson(values)
                    })
                    .catch(info => {
                      activity.value = 'validateFields() failed\\n' + formatJson(info.errorFields)
                    })
                }}
              >
                validateFields
              </Button>
            </div>
          </>
        )}
      />

      <div className="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
          Reactive summary
        </div>
        <p className="mt-3 mb-0 text-sm text-base-content/65">
          这里把表单实例方法和 Watch Hooks
          两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。
        </p>
        <div className="mt-4 grid gap-3">
          <div className="rounded-[1.25rem] bg-base-200/70 p-4 text-sm">
            <div className="text-xs uppercase tracking-[0.22em] text-base-content/45">role</div>
            <div className="mt-2 text-lg font-semibold text-base-content">{String(role)}</div>
          </div>
          <div className="rounded-[1.25rem] bg-base-200/70 p-4 text-sm">
            <div className="text-xs uppercase tracking-[0.22em] text-base-content/45">region</div>
            <div className="mt-2 text-lg font-semibold text-base-content">{String(region)}</div>
          </div>
          <div className="rounded-[1.25rem] bg-base-200/70 p-4 text-sm">
            <div className="text-xs uppercase tracking-[0.22em] text-base-content/45">notes</div>
            <div className="mt-2 text-sm leading-6 text-base-content/80">
              {String(notes) || '未填写'}
            </div>
          </div>
        </div>
        <pre className="mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6">
          {activity.value}
        </pre>
      </div>
    </div>
  )
}
`});r(()=>x(e,o,q))});let J=e(`rue:component:anchor`);c(o,J),t(()=>{let e=E(V,{title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:s,preview:()=>F(De,{}),code:`const [form] = Form.useForm()

<Form
  form={form}
  validateMessages={{ required: '请填写 \${label}' }}
  render={formInstance => (
    <>
      <Form.Item
        form={formInstance}
        name="password"
        label="密码"
        validateTrigger="onBlur"
        rules={[{ required: true }, { min: 8 }]}
        hasFeedback={true}
        render={control => <Input {...control} />}
      />

      <Form.Item
        form={formInstance}
        name="confirm"
        label="确认密码"
        dependencies={['password']}
        validateTrigger="onBlur"
        rules={[
          { required: true },
          {
            validator: (_rule, value, values) => {
              if (!value) return '请再次输入密码'
              if (value !== values.password) return '两次输入的密码不一致'
            },
          },
        ]}
        hasFeedback={true}
        render={control => <Input {...control} />}
      />

      <Form.Item
        form={formInstance}
        name="website"
        label="回调域名"
        rules={[{ warningOnly: true, pattern: /^https://.+/, message: '建议使用 https:// 前缀' }]}
        render={control => <Input {...control} />}
      />
    </>
  )}
/>
`});r(()=>x(e,o,J))});let ee=e(`rue:component:anchor`);c(o,ee),t(()=>{let e=E(V,{title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:l,preview:()=>F(Oe,{}),code:`<Form.Item
  form={form}
  name="issueId"
  label="Issue 编号"
  getValueProps={value => ({ value: value ? '#' + String(value) : '' })}
  normalize={value => String(value ?? '').replace(/^#/, '').replace(/D/g, '').slice(0, 6)}
  render={control => <Input {...control} />}
/>

<Form.Item
  form={form}
  name="slug"
  label="发布 slug"
  normalize={value =>
    String(value ?? '')
      .trim()
      .toLowerCase()
      .replace(/s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/--+/g, '-')
  }
  rules={[{ required: true }, { pattern: /^[a-z0-9-]+$/ }]}
  render={control => <Input {...control} />}
/>

<Form.Item
  form={form}
  name="branch"
  label="目标分支"
  messageVariables={{ label: '目标分支' }}
  rules={[{ pattern: /^(main|release/[a-z0-9-]+)$/i, message: '\${label} 需为 main 或 release/*' }]}
  render={control => <Input {...control} />}
/>
`});r(()=>x(e,o,ee))});let te=e(`rue:component:anchor`);c(o,te),t(()=>{let e=E(V,{title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:u,preview:()=>F(ke,{}),code:`<Form.Item
  shouldUpdate={(prev, next) => {
    return prev.enableCanary !== next.enableCanary || prev.publishMode !== next.publishMode
  }}
>
  {(allValues) =>
    allValues.enableCanary ? (
      <div>
        <Form.Item form={form} name="batchSize" label="首批流量" render={control => <Input {...control} />} />
        <Form.Item form={form} name="approveBy" label="审批人" render={control => <Input {...control} />} />
      </div>
    ) : (
      <div>未开启灰度发布，额外字段不会挂载。</div>
    )
  }
</Form.Item>
`});r(()=>x(e,o,te))});let ne=e(`rue:component:anchor`);c(o,ne),t(()=>{let e=E(V,{title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:d,preview:()=>F(Ae,{}),code:`const [form] = Form.useForm()

<Form form={form} render={formInstance => (
  <>
    <div className="grid gap-3">
      <div>回调地址</div>
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <span>https://</span>
        <Form.Item
          form={formInstance}
          name="host"
          noStyle
          render={control => (
            <div className="min-w-0">
              <Input {...control} />
            </div>
          )}
        />
        <span>:443</span>
      </div>
    </div>

    <div className="grid gap-3">
      <div>资源路径</div>
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3">
        <span>/hooks/</span>
        <Form.Item
          form={formInstance}
          name="path"
          noStyle
          render={control => (
            <div className="min-w-0">
              <Input {...control} />
            </div>
          )}
        />
        <span>POST target</span>
      </div>
    </div>
  </>
)} />
`});r(()=>x(e,o,ne))});let re=e(`rue:component:anchor`);c(o,re),t(()=>{let e=E(V,{title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:f,preview:()=>F(Me,{}),code:`const DynamicListShowcase: FC = () => {
  const [form] = Form.useForm()
  const members =
    (Form.useWatch('members', form) as Array<{ name?: string; role?: string }> | undefined) ?? []

  return (
    <div className="grid gap-6">
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
        <Form
          form={form}
          className="content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"
          initialValues={{
            members: [
              { name: 'Rue', role: 'Owner' },
              { name: 'Vapor', role: 'Reviewer' },
            ],
          }}
          render={formInstance => (
            <Form.List
              form={formInstance}
              name="members"
              rules={[
                {
                  validator: (_rule, value) => {
                    if (!Array.isArray(value) || value.length < 2) {
                      return '至少保留 2 名审批成员，才适合真实协作流程。'
                    }
                    return undefined
                  },
                },
              ]}
              render={(fields, operation, meta) => (
                <div className="grid gap-4">
                  {fields.length === 0 ? (
                    <div className="rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60">
                      暂无成员，点击下方按钮即可追加一组字段。
                    </div>
                  ) : null}

                  {fields.map((field, index) => (
                    <div
                      key={field.key}
                      className="rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5"
                    >
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
                            Member {index + 1}
                          </div>
                          <div className="mt-1 text-sm font-medium text-base-content">
                            审批成员 {index + 1}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {index > 0 ? (
                            <Button
                              size="sm"
                              type="outlined"
                              onClick={() => operation.move(field.name, field.name - 1)}
                            >
                              上移
                            </Button>
                          ) : null}
                          {index < fields.length - 1 ? (
                            <Button
                              size="sm"
                              type="outlined"
                              onClick={() => operation.move(field.name, field.name + 1)}
                            >
                              下移
                            </Button>
                          ) : null}
                          <Button size="sm" type="text" onClick={() => operation.remove(field.name)}>
                            删除
                          </Button>
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <Form.Item
                          form={formInstance}
                          layout="vertical"
                          name={['members', field.name, 'name']}
                          label="成员名称"
                          rules={[{ required: true }]}
                          render={control => <Input {...control} placeholder="输入成员名称" />}
                        />
                        <Form.Item
                          form={formInstance}
                          layout="vertical"
                          name={['members', field.name, 'role']}
                          label="职责"
                          rules={[{ required: true }]}
                          render={control => (
                            <Input {...control} placeholder="Owner / Reviewer / QA" />
                          )}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-3 pt-1">
                    <Button
                      size="sm"
                      color="primary"
                      onClick={() => {
                        operation.add({ name: '新成员 ' + String(fields.length + 1), role: 'QA' })
                      }}
                    >
                      新增成员
                    </Button>
                    <Button
                      size="sm"
                      type="outlined"
                      onClick={() => operation.add({ name: 'Head reviewer', role: 'QA' }, 0)}
                    >
                      头部插入
                    </Button>
                  </div>

                  {meta.errors.length > 0 || meta.warnings.length > 0 ? (
                    <Form.ErrorList
                      errors={meta.errors}
                      warnings={meta.warnings}
                      className="rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm"
                    />
                  ) : null}
                </div>
              )}
            />
          )}
        />

        <div className="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7">
          <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
            List snapshot
          </div>
          <div className="mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65">
            {members.length} members
          </div>
          <div className="mt-4 grid gap-3">
            {members.length > 0 ? (
              members.map((member, index) => (
                <div
                  key={String(index)}
                  className="rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80"
                >
                  <div className="text-xs uppercase tracking-[0.22em] text-base-content/45">
                    成员 {index + 1}
                  </div>
                  <div className="mt-2 text-base font-medium text-base-content">
                    {member?.name ? String(member.name) : '未命名成员'}
                  </div>
                  <div className="mt-1 text-xs text-base-content/55">
                    {member?.role ? String(member.role) : '未分配职责'}
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60">
                当前列表为空。
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
          List behavior
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-[1.25rem] bg-base-200/70 p-4">
            <div className="text-sm font-semibold text-base-content">列表级规则</div>
            <p className="mt-2 mb-0 text-sm leading-6 text-base-content/65">
              rules 挂在 Form.List 上，校验整个 members 数组。
            </p>
          </div>
          <div className="rounded-[1.25rem] bg-base-200/70 p-4">
            <div className="text-sm font-semibold text-base-content">重排操作</div>
            <p className="mt-2 mb-0 text-sm leading-6 text-base-content/65">
              operation.move 保持字段状态跟随成员顺序移动。
            </p>
          </div>
          <div className="rounded-[1.25rem] bg-base-200/70 p-4">
            <div className="text-sm font-semibold text-base-content">错误出口</div>
            <p className="mt-2 mb-0 text-sm leading-6 text-base-content/65">
              Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
`});r(()=>x(e,o,re))});let ie=e(`rue:component:anchor`);c(o,ie),t(()=>{let e=E(V,{title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:g,preview:()=>F(je,{}),code:`const LongFormScrollShowcase: FC = () => {
  const [form] = Form.useForm()
  const activity = ref(
    '点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。',
  )

  const jumpToField = (name: string | Array<string | number>, label: string) => {
    form.scrollToField(name, { block: 'center', focus: true })
    activity.value = \`scrollToField -> \${label}\`
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]">
      <div className="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm">
        <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
          Scroll actions
        </div>
        <p className="mt-3 mb-0 text-sm text-base-content/65">
          这个示例把手动 scrollToField
          和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。
        </p>
        <div className="mt-4 grid gap-2">
          <Button size="sm" onClick={() => jumpToField('releaseName', '发布名称')}>
            滚到发布名称
          </Button>
          <Button
            size="sm"
            type="outlined"
            onClick={() => jumpToField(['strategy', 'batchSize'], '灰度批次')}
          >
            滚到灰度批次
          </Button>
          <Button
            size="sm"
            type="outlined"
            onClick={() => jumpToField(['observability', 'dashboard'], '监控看板')}
          >
            滚到监控看板
          </Button>
          <Button
            size="sm"
            type="outlined"
            onClick={() => jumpToField(['rollback', 'ticket'], '回滚单号')}
          >
            滚到回滚单号
          </Button>
        </div>
        <pre className="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content">
          {activity.value}
        </pre>
      </div>

      <div className="rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5">
        <div
          className="overflow-y-auto overscroll-contain pr-2"
          style={{
            height: 'min(34rem, 72vh)',
            scrollBehavior: 'smooth',
            scrollbarGutter: 'stable',
          }}
        >
          <Form
            form={form}
            name="advanced-scroll-demo"
            className="pb-4"
            scrollToFirstError={{ block: 'center', focus: true }}
            initialValues={{
              application: 'rue-design',
              environment: 'staging',
              strategy: { batchSize: '10%', pauseWindow: '15m' },
              observability: { dashboard: '' },
            }}
            onFinish={values => {
              activity.value = '提交成功\\n' + formatJson(values)
            }}
            onFinishFailed={info => {
              activity.value =
                '校验失败，已定位到首个错误字段\\n' +
                formatJson({
                  firstError: info.errorFields[0]?.name.join('.'),
                  errorFields: info.errorFields,
                })
            }}
            render={formInstance => (
              <>
                <section className="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6">
                  <div className="mb-4">
                    <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
                      Section 1
                    </div>
                    <div className="mt-1 text-lg font-semibold text-base-content">基础信息</div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Form.Item
                      form={formInstance}
                      name="releaseName"
                      label="发布名称"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="2026.05 release" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name="application"
                      label="应用名"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="rue-design" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name="environment"
                      label="环境"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="staging" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name="owner"
                      label="发布负责人"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="release-captain" />}
                    />
                  </div>
                </section>

                <section className="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6">
                  <div className="mb-4">
                    <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
                      Section 2
                    </div>
                    <div className="mt-1 text-lg font-semibold text-base-content">发布策略</div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Form.Item
                      form={formInstance}
                      name={['strategy', 'batchSize']}
                      label="灰度批次"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="10%" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['strategy', 'pauseWindow']}
                      label="观察窗口"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="15m" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['strategy', 'rollbackThreshold']}
                      label="回滚阈值"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="error rate > 2%" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['strategy', 'approvalWindow']}
                      label="审批窗口"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="30m" />}
                    />
                  </div>
                </section>

                <section className="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6">
                  <div className="mb-4">
                    <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
                      Section 3
                    </div>
                    <div className="mt-1 text-lg font-semibold text-base-content">观测与审批</div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Form.Item
                      form={formInstance}
                      name={['observability', 'dashboard']}
                      label="监控看板"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="Grafana release board" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['observability', 'alertChannel']}
                      label="告警通道"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="#release-alerts" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['approval', 'owner']}
                      label="审批负责人"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="ops-squad" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['approval', 'qaOwner']}
                      label="QA 负责人"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="qa-squad" />}
                    />
                  </div>
                </section>

                <section className="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6">
                  <div className="mb-4">
                    <div className="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">
                      Section 4
                    </div>
                    <div className="mt-1 text-lg font-semibold text-base-content">回滚预案</div>
                  </div>
                  <div className="grid gap-5 md:grid-cols-2">
                    <Form.Item
                      form={formInstance}
                      name={['rollback', 'ticket']}
                      label="回滚单号"
                      rules={[{ required: true }]}
                      extra="这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。"
                      render={control => <Input {...control} placeholder="RB-2026-0514" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['rollback', 'owner']}
                      label="回滚负责人"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="rollback-owner" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['rollback', 'window']}
                      label="回滚窗口"
                      rules={[{ required: true }]}
                      render={control => <Input {...control} placeholder="20m" />}
                    />
                    <Form.Item
                      form={formInstance}
                      name={['rollback', 'watchers']}
                      label="通知对象"
                      rules={[{ required: true }]}
                      render={control => (
                        <Input {...control} placeholder="platform / qa / support" />
                      )}
                    />
                  </div>
                </section>

                <div className="sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-sm text-base-content/65">
                      留空深层字段后点击提交，会自动滚到首个错误项。
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        type="outlined"
                        onClick={() => jumpToField(['rollback', 'ticket'], '回滚单号')}
                      >
                        滚到回滚单号
                      </Button>
                      <Button color="primary" htmlType="submit">
                        提交长表单
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          />
        </div>
      </div>
    </div>
  )
}
`});r(()=>x(e,o,ie))});let ae=e(`rue:component:anchor`);c(o,ae),t(()=>{let e=E(V,{title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 版本：网格字段、独立按钮区、统一实例驱动。`,tab:v,preview:()=>F(Ne,{}),code:`const [form] = Form.useForm()

<Form
  form={form}
  initialValues={{
    keyword: 'runtime vapor',
    repository: 'rue-design',
    assignee: 'design',
    reviewer: 'infra',
    includeDrafts: false,
  }}
  onFinish={values => {
    console.log(values)
  }}
  render={formInstance => (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Form.Item form={formInstance} layout="vertical" name="keyword" label="关键词" render={control => <Input {...control} />} />
        <Form.Item form={formInstance} layout="vertical" name="repository" label="仓库" render={control => <Input {...control} />} />
        <Form.Item form={formInstance} layout="vertical" name="assignee" label="负责人" render={control => <Input {...control} />} />
        <Form.Item form={formInstance} layout="vertical" name="reviewer" label="评审人" render={control => <Input {...control} />} />
      </div>

      <Form.Item form={formInstance} name="includeDrafts" valuePropName="checked" render={control => <Checkbox {...control}>包含草稿和实验分支</Checkbox>} />

      <Button color="primary" htmlType="submit">执行搜索</Button>
      <Button type="outlined" onClick={() => form.resetFields()}>清空条件</Button>
    </>
  )}
/>
`});r(()=>x(e,o,ae))});let Y=D(`h2`,o);c(o,Y),c(Y,b(`使用说明`));let oe=D(`p`,o);c(o,oe),c(oe,b(`下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前实现强相关的部分抽出来。先看这些规则，再回头看上面的 demo，理解会快很多。`));let se=D(`section`,o);c(o,se),O(se,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let X=e(`rue:list:start`),Z=e(`rue:list:end`);c(se,X),c(se,Z);let ce=new Map;t(()=>{ce=M({items:Re||[],getKey:(e,t)=>e.title,elements:ce,parent:se,before:Z,start:X,renderItem:(e,t,n,r,i)=>{T(E(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description}),t,n,r)}})});let le=D(`h2`,o);c(o,le),p(le,`id`,`form-api`),c(le,b(`API`));let ue=D(`p`,o);c(o,ue),c(ue,b(`Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。`));let de=e(`rue:component:anchor`);c(o,de),t(()=>{let e=E(Se,{title:`Form`,rows:Pe});r(()=>x(e,o,de))});let fe=e(`rue:component:anchor`);c(o,fe),t(()=>{let e=E(Se,{title:`Form.Item`,rows:Fe});r(()=>x(e,o,fe))});let pe=e(`rue:component:anchor`);return c(o,pe),t(()=>{let e=E(Se,{title:`Form.List and Hooks`,rows:Ie});r(()=>x(e,o,pe))}),n})}),o,y),o})};export{ze as default};