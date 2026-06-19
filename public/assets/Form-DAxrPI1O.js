import{$ as e,Ft as t,Jt as n,Q as r,Qt as i,Rt as a,Wt as o,X as s,Xt as c,Yt as l,Zt as u,a as d,b as f,et as p,gt as m,ht as h,j as g,l as _,lt as v,n as y,nt as b,o as x,p as S,pt as C,r as w,s as T,st as E,t as D,tt as O,vt as k,zt as A}from"./vapor-runtime-CXIalONM.js";import{a as j,n as M,t as N}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as P,i as F,o as I}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as L}from"./button-CeShl0h_.js";import{t as R}from"./checkbox-C9LOuUpi.js";import{t as z}from"./input-DiGoZI6O.js";import{r as B}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as V}from"./PreviewBlock-RQJhyX9w.js";var H=`__rueFormContext`,U=0,W={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},G=(...e)=>e.filter(Boolean).join(` `),K=e=>!!e&&typeof e==`object`,q=e=>{if(Array.isArray(e))return e.map(e=>q(e));if(K(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=q(e[n])}),t}return e},J=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),te=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,ne=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),re=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},ie=(e,t,n)=>{if(t.length===0)return q(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?q(n):ie(o[r],i,n),o},ae=(e,t)=>{if(t.length===0)return;if(!K(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=ae(i[n],r),i)},Y=(e,t)=>{if(!K(t)&&!Array.isArray(t))return q(t);if(Array.isArray(t))return t.map(e=>q(e));let n=K(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Y(n[e],t[e])}),n},oe=(e,t)=>ie({},e,t),se=e=>e?Array.isArray(e)?e:[e]:[`onChange`],X=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,Z=(e,t)=>{let n=X(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},ce=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,le=e=>{try{return new URL(e),!0}catch{return!1}},ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&le(e);default:return!0}},de=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??W.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??W.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??W.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??W.types?.[e.type??`string`]??"${label} 类型不正确";let a=X(t,e.type);return(r[a]??W[a]??{})[i??`len`]??"${label} 校验失败"},fe=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),pe=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},me=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,he=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=pe(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&ce(n,e.type)?i=de(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=de(e,n,l,o,`whitespace`):!ce(n,e.type)&&e.type&&!ue(n,e.type)?i=de(e,n,l,o,`type`):!ce(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=de(e,n,l,o,`pattern`):!ce(n,e.type)&&e.len!==void 0?Z(n,e.type)!==e.len&&(i=de(e,n,l,o,`len`)):!ce(n,e.type)&&e.min!==void 0?Z(n,e.type)<e.min&&(i=de(e,n,l,o,`min`)):!ce(n,e.type)&&e.max!==void 0&&Z(n,e.type)>e.max&&(i=de(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=fe(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},ge=(e,...t)=>{let[n,r]=t;if(e===`checked`)return K(r)&&typeof r.checked==`boolean`?r.checked:K(n)&&K(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(K(n)&&`target`in n))return n;if(K(n)&&K(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},_e=e=>e?_(e===`error`?e=>{let t=p(`span`,e);return v(t,`text-error`),s(t,O(`!`)),t}:e===`warning`?e=>{let t=p(`span`,e);return v(t,`text-warning`),s(t,O(`!`)),t}:e===`success`?e=>{let t=p(`span`,e);return v(t,`text-success`),s(t,O(`✓`)),t}:e=>{let t=p(`span`,e);return v(t,`loading loading-spinner loading-xs text-primary`),t}):null,ve=e=>{if(e?.span)return`${e.span/24*100}%`},ye=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,be=()=>{let e=j(`ref:1:0`,()=>A(0)),t=new Map,n=new Map,r=new Map,i=new Set,a=!1,o={},s={},c=!1,l=null,u={validateTrigger:[`onChange`],validateMessages:W},d=()=>{e.value+=1,i.forEach(e=>e())},f=()=>{a||(a=!0,queueMicrotask(()=>{a=!1,d()}))},p=e=>{let t=ee(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},m=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ee(t)}`:e.id},h=e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:q(ne(o,e))}},g=e=>{u.onFieldsChange?.([h(e)],E.getFieldsValue(!0))},_=(e,t,n=!0)=>{let r=p(e);Object.assign(r,t),n&&(g(e),d(),f())},v=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&te(t,e))return n}return null},y=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return _(n,{errors:[],warnings:[],validating:!1}),null;_(n,{validating:!0});let a=await he(n,ne(o,n),i,o,e.getLabel(),e.getMessageVariables(),u.validateMessages);return _(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},b=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||te(n,e)||t.getDependencies().some(t=>te(t,e))&&await y(t)}},x=async(e,t,n)=>{if(o=ie(o,e,t),n?.touch){let t=p(e);t.touched=!0}d(),g(e),n?.emitValues!==!1&&u.onValuesChange?.(oe(e,t),E.getFieldsValue(!0));let r=v(e);r&&await y(r,n?.triggerName),await b(e),f()},S=e=>{let i=m(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let c=e.getNamePath();if(c&&c.length){let t=e.getInitialValue();!re(s,c)&&t!==void 0&&(s=ie(s,c,t)),!re(o,c)&&t!==void 0&&(o=ie(o,c,t)),p(c)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let s=e.getNamePath();!s||!s.length||ye(e,u.preserve)||(o=ae(o,s),r.delete(ee(s)),d())}},C=e=>c?!1:(s=q(e??{}),o=q(e??{}),c=!0,!0),w=async e=>{let n=e?.map(e=>J(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=m(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>te(i,e)))continue;let o=await y(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:E.getFieldsValue(!0),errorFields:r,outOfDate:!1};return E.getFieldsValue(!0)},T=(e,t)=>{let n=J(e),r=u.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>l?.querySelector(`#${CSS.escape(e)}`)).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},E={getFieldValue(t){return e.value,q(ne(o,J(t)))},getFieldsValue(t){return e.value,t===!0||t==null?q(o):t.reduce((e,t)=>{let n=J(t);return ie(e,n,ne(o,n))},{})},setFieldValue(e,t){x(J(e),t,{emitValues:!1})},setFieldsValue(e){o=Y(o,e),d()},resetFields(e){if(!e?.length){o=q(s),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),d();return}e.forEach(e=>{let t=J(e),n=ne(s,t);o=n===void 0?ae(o,t):ie(o,t,n);let r=p(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),d()},validateFields:w,submit(){w().then(e=>{u.onFinish?.(e)}).catch(e=>{if(u.onFinishFailed?.(e),u.scrollToFirstError&&e.errorFields[0]){let t=u.scrollToFirstError===!0?{block:`center`}:u.scrollToFirstError;T(e.errorFields[0].name,t)}})},scrollToField:T,isFieldTouched(e){return p(J(e)).touched},getFieldError(e){return[...p(J(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=m(t);return e.has(n)?!1:(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=J(e),n=p(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){u=e},ensureInitialized:C,registerField:S,getMeta:p,validateFieldByPath(e,t){let n=v(e);return n?y(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return x(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return x(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return u.validateTrigger},setRootElement(e){l=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){d()}}};return E},xe=(e,t,n)=>typeof n==`function`?n(e,{required:t}):n===`optional`&&!t?_(e=>{let t=p(`span`,e);return v(t,`ml-2 text-xs text-base-content/45`),E(t,`aria-hidden`,`true`),s(t,O(`optional`)),t}):n!==!1&&t?_(e=>{let t=p(`span`,e);return v(t,`ml-1 text-error`),E(t,`aria-hidden`,`true`),s(t,O(`*`)),t}):null,Q=Object.assign(u=>{let{__rue_rest_omit_0:d,__rue_rest_omit_1:h,__rue_rest_omit_2:g,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:C,__rue_rest_omit_7:T,__rue_rest_omit_8:E,__rue_rest_omit_9:O,__rue_rest_omit_10:A,__rue_rest_omit_11:M,__rue_rest_omit_12:N,__rue_rest_omit_13:P,__rue_rest_omit_14:L,__rue_rest_omit_15:R,__rue_rest_omit_16:z,__rue_rest_omit_17:B,rest:V,slotSource:H,internalFormRef:U,rootElementRef:K,subscriptionFormRef:q,unsubscribeRenderRef:J,renderVersion:ee,setRenderVersion:te,resolvedForm:ne,initializedNow:re,formVersionSnapshot:ie,handleNativeSubmit:ae,resolveContent:Y,content:oe}=j(`useSetup:0:0:dup3`,()=>l(()=>{let{className:e,style:r,children:i,render:o,component:s,layout:d,initialValues:f,form:p,name:m,preserve:h,validateMessages:g,validateTrigger:_,scrollToFirstError:v,onValuesChange:y,onFieldsChange:b,onFinish:x,onFinishFailed:C,onSubmit:T,...E}=u,D=j(`computed:1:39`,()=>k(()=>t()?.propsRO??{children:u.children})),O=D,A=j(`useRef:1:40`,()=>n()),M=j(`useRef:1:41`,()=>n(null)),N=j(`useRef:1:42`,()=>n(void 0)),P=j(`useRef:1:43`,()=>n(null)),[L,R]=j(`useState:1:44`,()=>c(0,{kind:`ref`}));A.current||=u.form??be();let z=j(`computed:1:45`,()=>k(()=>u.form??A.current)),B=z,V=j(`computed:1:46`,()=>k(()=>B.get().__INTERNAL__.ensureInitialized(u.initialValues))),H=V,U=j(`computed:1:47`,()=>k(()=>B.get().__INTERNAL__.version.value)),G=U;B.get().__INTERNAL__.setRuntimeOptions({name:u.name,preserve:u.preserve,validateTrigger:se(u.validateTrigger),validateMessages:{...W,...u.validateMessages},scrollToFirstError:u.scrollToFirstError,onValuesChange:u.onValuesChange,onFieldsChange:u.onFieldsChange,onFinish:u.onFinish,onFinishFailed:u.onFinishFailed}),N.current!==B.get()&&(P.current?.(),N.current=B.get(),P.current=B.get().__INTERNAL__.subscribe(()=>{R(L.value+1)}));let K=e=>{e.preventDefault(),u.onSubmit?.(e),B.get().submit()};w(()=>{H.get()&&B.get().__INTERNAL__.emitUpdate()}),a(()=>{P.current?.(),P.current=null,N.current=void 0});let q=()=>(j(`useSetup:0:0:dup2`,()=>l(()=>(G.get(),{}))),typeof u.render==`function`?F(S,{children:u.render(B.get())}):typeof u.children==`function`&&u.children.kind!==`block-factory`?F(S,{children:u.children(B.get())}):F(I,{source:O.get()}));return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:o,__rue_rest_omit_4:s,__rue_rest_omit_5:d,__rue_rest_omit_6:f,__rue_rest_omit_7:p,__rue_rest_omit_8:m,__rue_rest_omit_9:h,__rue_rest_omit_10:g,__rue_rest_omit_11:_,__rue_rest_omit_12:v,__rue_rest_omit_13:y,__rue_rest_omit_14:b,__rue_rest_omit_15:x,__rue_rest_omit_16:C,__rue_rest_omit_17:T,rest:E,slotSource:D,internalFormRef:A,rootElementRef:M,subscriptionFormRef:N,unsubscribeRenderRef:P,renderVersion:L,setRenderVersion:R,resolvedForm:z,initializedNow:V,formVersionSnapshot:U,handleNativeSubmit:K,resolveContent:q,content:q()}}));if((u.component===void 0?`form`:u.component)===!1)return oe;let X={...V,ref:e=>{K.current=e,ne.get().__INTERNAL__.setRootElement(e)},onSubmit:(u.component===void 0?`form`:u.component)===`form`?ae:void 0,className:G(`rue-form`,(u.layout===void 0?`horizontal`:u.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,u.className),style:u.style,"data-rue-form":`true`};if((u.component===void 0?`form`:u.component)===`form`)return _(e=>{let t=p(`form`,e);i(()=>{m(t,X)});let n=r(`rue:slot:anchor`);return s(t,n),i(()=>{let e=(ee.value,Y());o(()=>x(e,t,n))}),t});if((u.component===void 0?`form`:u.component)===`div`)return _(e=>{let t=p(`div`,e);i(()=>{m(t,X)});let n=r(`rue:slot:anchor`);return s(t,n),i(()=>{let e=(ee.value,Y());o(()=>x(e,t,n))}),t});if((u.component===void 0?`form`:u.component)===`section`)return _(e=>{let t=p(`section`,e);i(()=>{m(t,X)});let n=r(`rue:slot:anchor`);return s(t,n),i(()=>{let e=(ee.value,Y());o(()=>x(e,t,n))}),t});if(typeof(u.component===void 0?`form`:u.component)==`string`)return f(u.component===void 0?`form`:u.component,X,(ee.value,Y()));let Z=u.component===void 0?`form`:u.component;return _(t=>{let n=e(),a=r(`rue:component:anchor`);return s(n,a),i(()=>{let e=D(Z,{...X,children:(ee.value,Y())});o(()=>x(e,n,a))}),n})},{Item:f=>{let{slotSource:m,formInstance:h,entityIdRef:b,unregisterRef:T,subscriptionFormRef:D,unsubscribeRenderRef:O,renderVersion:A,setRenderVersion:M,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:z,latestPropsRef:B,noStyleHostRef:V,controlHostRef:H,helpHostRef:W,feedbackHostRef:K,namePath:te,nameKey:ne,layout:re,required:ie,labelAlign:ae,labelWrap:Y,labelCol:oe,wrapperCol:X,controlId:Z,getRenderState:ce,renderManagedContent:le,assignControlHost:ue}=j(`useSetup:0:0:dup1`,()=>l(()=>{let e=j(`computed:1:2`,()=>k(()=>t()?.propsRO??{children:f.children})),l=e,m=j(`computed:1:3`,()=>k(()=>f.form)),h=m,y=j(`useRef:1:4`,()=>n()),b=j(`useRef:1:5`,()=>n(null)),C=j(`useRef:1:6`,()=>n(void 0)),T=j(`useRef:1:7`,()=>n(null)),[D,O]=j(`useState:1:8`,()=>c(0,{kind:`ref`})),A=j(`useRef:1:9`,()=>n()),M=j(`useRef:1:10`,()=>n()),N=j(`useRef:1:11`,()=>n()),L=j(`useRef:1:12`,()=>n(f)),R=j(`useRef:1:13`,()=>n(null)),z=j(`useRef:1:14`,()=>n(null)),B=j(`useRef:1:15`,()=>n(null)),V=j(`useRef:1:16`,()=>n(null));if(L.current=f,y.current||=`rue-form-item-${U++}`,f.name!=null&&!h.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let H=j(`computed:1:17`,()=>k(()=>f.name==null?void 0:J(f.name))),W=H,G=j(`computed:1:18`,()=>k(()=>W.get()?ee(W.get()):void 0)),K=G,te=j(`computed:1:19`,()=>k(()=>f.layout??`horizontal`)),ne=j(`computed:1:20`,()=>k(()=>me(f.required,f.rules))),re=j(`computed:1:21`,()=>k(()=>f.labelAlign??`right`)),ie=j(`computed:1:22`,()=>k(()=>f.labelCol)),ae=j(`computed:1:23`,()=>k(()=>f.wrapperCol)),Y=j(`computed:1:24`,()=>k(()=>f.htmlFor??(W.get()?W.get().map(e=>String(e)).join(`__`):void 0))),oe=Y;if(W.get()&&h.get()&&N.current!==K.get()){let e=L.current??f;b.current?.(),b.current=h.get().__INTERNAL__.registerField({id:y.current,kind:`item`,getNamePath:()=>W.get(),getRules:()=>e.rules??[],getRequired:()=>e.required,getLabel:()=>e.label,getMessageVariables:()=>e.messageVariables,getValidateTrigger:()=>se(e.validateTrigger),getDependencies:()=>(e.dependencies??[]).map(e=>J(e)),getInitialValue:()=>e.initialValue,getPreserve:()=>e.preserve}),N.current=K.get()}let X=()=>{let e=h.get()?.getFieldsValue(!0)??{},t=W.get()&&h.get()?h.get().__INTERNAL__.getMeta(W.get()):null;return{allValues:e,meta:t,currentValue:W.get()&&h.get()?h.get().getFieldValue(W.get()):void 0,triggerName:f.trigger??`onChange`,validateTrigger:se(f.validateTrigger),status:f.validateStatus??(t?.validating?`validating`:t?.errors.length?`error`:t?.warnings.length?`warning`:t?.touched&&(f.rules?.length??0)>0?`success`:void 0)}},Z=()=>{let{allValues:e,meta:t,currentValue:n,triggerName:a,validateTrigger:c,status:u}=X(),d=f.render??f.children,m;if(typeof d==`function`&&d.kind!==`block-factory`&&W.get()&&h.get()&&!f.shouldUpdate){let e={...f.getValueProps?f.getValueProps(n):{[f.valuePropName??`value`]:f.valuePropName===`checked`?!!n:n},id:oe.get()};e[a]=(...e)=>{let t=f.getValueFromEvent?f.getValueFromEvent(...e):ge(f.valuePropName??`value`,...e),r=f.normalize?f.normalize(t,n,h.get().getFieldsValue(!0)):t;h.get().__INTERNAL__.updateValueFromControl(W.get(),r,{touch:!0,triggerName:a})},c.filter(e=>e!==a).forEach(t=>{e[t]=(...e)=>{h.get().__INTERNAL__.validateFieldByPath(W.get(),t)}}),m=d(e,{value:n,touched:t?.touched??!1,validating:t?.validating??!1,errors:t?.errors??[],warnings:t?.warnings??[],status:u},h.get())}else typeof d==`function`&&d.kind!==`block-factory`&&(!W.get()||f.shouldUpdate)?(((typeof f.shouldUpdate==`function`?f.shouldUpdate(M.current??e,e):f.shouldUpdate===!0||A.current===void 0)||A.current===void 0)&&(A.current=d(e,h.get())),M.current=q(e),m=A.current):m=F(I,{source:l.get()});if(f.noStyle){R.current&&g(F(S,{children:m}),R.current);return}z.current&&g(F(S,{children:m}),z.current),B.current&&g(f.help===void 0?t&&(t.errors.length>0||t.warnings.length>0)?P(`ul`,{className:`mt-2 grid gap-1 text-xs`,children:[t.errors.map((e,t)=>_(n=>{let a=p(`li`,n);i(()=>{E(a,`key`,String(`error-${t}`))}),v(a,`text-error`);let c=r(`rue:slot:anchor`);return s(a,c),i(()=>{let t=e;o(()=>x(t,a,c))}),a})),t.warnings.map((e,t)=>_(n=>{let a=p(`li`,n);i(()=>{E(a,`key`,String(`warning-${t}`))}),v(a,`text-warning`);let c=r(`rue:slot:anchor`);return s(a,c),i(()=>{let t=e;o(()=>x(t,a,c))}),a}))]}):F(S,{}):F(S,{children:f.help}),B.current),V.current&&g(f.hasFeedback?F(S,{children:_e(u)}):F(S,{}),V.current)};return C.current!==h.get()&&(T.current?.(),C.current=h.get(),T.current=h.get()?h.get().__INTERNAL__.subscribe(()=>{O(D.value+1)}):null),j(`watch:1:25`,()=>u(()=>D.value,()=>{Z()},{immediate:!0})),a(()=>{b.current?.(),b.current=null,T.current?.(),T.current=null,C.current=void 0}),w(()=>{Z()}),d(()=>{Z()}),{slotSource:e,formInstance:m,entityIdRef:y,unregisterRef:b,subscriptionFormRef:C,unsubscribeRenderRef:T,renderVersion:D,setRenderVersion:O,renderCacheRef:A,previousValuesRef:M,lastRegisteredKeyRef:N,latestPropsRef:L,noStyleHostRef:R,controlHostRef:z,helpHostRef:B,feedbackHostRef:V,namePath:H,nameKey:G,layout:te,required:ne,labelAlign:re,labelWrap:!1,labelCol:ie,wrapperCol:ae,controlId:Y,getRenderState:X,renderManagedContent:Z,assignControlHost:e=>{z.current=e,e&&queueMicrotask(()=>{Z()})}}}));if(f.noStyle)return _(e=>{let t=p(`div`,e),n=N(t,()=>V);return y(()=>{n()}),C(t,{display:`contents`}),t});let de=f.label===void 0?null:P(`label`,{className:G(`text-[0.95rem] leading-7 font-medium text-base-content/78`,ae.get()===`left`?`text-left`:`text-right md:text-right`,Y?`whitespace-normal`:`md:whitespace-nowrap`),style:{width:re.get()===`horizontal`?ve(oe.get()):void 0},for:Z.get(),children:[F(`span`,{children:f.label}),re.get()===`horizontal`&&f.colon!==!1?F(`span`,{className:`ml-1 text-base-content/45`,children:`:`}):null,xe(f.label,ie.get(),!0)]}),fe=re.get()===`horizontal`&&X.get()?.offset?{marginLeft:`${X.get().offset/24*100}%`,width:ve(X.get())}:re.get()===`horizontal`?{width:ve(X.get())}:void 0;return _(t=>{let n=p(`div`,t);i(()=>{v(n,G(`rue-form-item`,f.hidden?`hidden`:void 0,re.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,f.className))}),i(()=>{let e=f.style;C(n,e)});let a=r(`rue:slot:anchor`);s(n,a),i(()=>{let e=de;o(()=>x(e,n,a))});let c=p(`div`,n);s(n,c),v(c,`min-w-0 flex-1`),i(()=>{C(c,fe)});let l=p(`div`,c);s(c,l),v(l,`flex items-start gap-3`);let u=p(`div`,l);s(l,u),i(()=>{E(u,`key`,String(ne.get()??`__rue_form_item_control__`))}),v(u,`min-w-0 flex-1`);let d=N(u,()=>ue);y(()=>{d()});let m=r(`rue:slot:anchor`);s(l,m),i(()=>{let t=f.hasFeedback?_(()=>{let t=e(),n=p(`span`,t);s(t,n),v(n,`mt-3 shrink-0`);let r=N(n,()=>K);return y(()=>{r()}),t}):``;o(()=>x(t,l,m))});let h=p(`div`,c);s(c,h),v(h,`mt-3`);let g=N(h,()=>W);y(()=>{g()});let b=r(`rue:slot:anchor`);return s(c,b),i(()=>{let t=f.extra==null?``:_(()=>{let t=e(),n=p(`div`,t);s(t,n),v(n,`mt-3 text-[0.8rem] leading-6 text-base-content/55`);let a=r(`rue:slot:anchor`);return s(n,a),i(()=>{let e=f.extra;o(()=>x(e,n,a))}),t});o(()=>x(t,c,b))}),n})},List:e=>{let{form:t,name:r,children:i,render:o,initialValue:s,rules:l}=e,u=t;if(!u)throw Error(`Form.List 需要显式传入 form`);let d=o??i;if(typeof d!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let f=J(r),p=j(`useRef:1:26`,()=>n()),m=j(`useRef:1:27`,()=>n(null)),h=j(`useRef:1:28`,()=>n(void 0)),g=j(`useRef:1:29`,()=>n(null)),[_,v]=j(`useState:1:30`,()=>c(0,{kind:`ref`})),y=j(`useRef:1:31`,()=>n(l)),b=j(`useRef:1:32`,()=>n(s)),x=j(`useRef:1:33`,()=>n([])),S=j(`useRef:1:34`,()=>n(0));return y.current=l,b.current=s,p.current||=`rue-form-list-${U++}`,m.current||=u.__INTERNAL__.registerField({id:p.current,kind:`list`,getNamePath:()=>f,getRules:()=>y.current??[],getRequired:()=>void 0,getLabel:()=>f[f.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>b.current,getPreserve:()=>!0}),h.current!==u&&(g.current?.(),h.current=u,g.current=u.__INTERNAL__.subscribe(()=>{v(_.value+1)})),a(()=>{m.current?.(),m.current=null,g.current?.(),g.current=null,h.current=void 0}),(()=>{_.value;let e=u.getFieldValue(f),t=Array.isArray(e)?e:[],n=u.__INTERNAL__.getMeta(f),r=x.current??[],i=S.current??0;x.current??=r,S.current??=i;let a=()=>{let e=S.current??0;return S.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(x.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),u.__INTERNAL__.updateListValue(f,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),u.__INTERNAL__.updateListValue(f,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),u.__INTERNAL__.updateListValue(f,i)}},s=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return F(`div`,{"data-rue-form-list-shell":`true`,children:d(s,o,{errors:n.errors,warnings:n.warnings})},s.map(e=>`${String(e.fieldKey)}:${e.name}`).join(`|`))})()},ErrorList:t=>{let{list:n}=j(`useSetup:0:0`,()=>l(()=>({list:j(`computed:1:1`,()=>k(()=>[...t.errors??[],...t.warnings??[]].filter(e=>e!=null)))})));return n.get().length?_(n=>{let a=p(`ul`,n);i(()=>{v(a,G(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,t.className))}),i(()=>{let e=t.style;C(a,e)});let o=r(`rue:list:start`),c=r(`rue:list:end`);s(a,o),s(a,c);let l=new Map;i(()=>{l=M({items:(t.errors??[])||[],getKey:(e,t)=>`error-${t}`,elements:l,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,n,r,a,o)=>{x(_(()=>{let n=e(),r=p(`li`,n);s(n,r),i(()=>{E(r,`key`,String(`error-${o}`))}),v(r,`text-error`);let a=b(r);return s(r,a),i(()=>{h(a,t)}),n}),n,r)}})}),s(a,O(` `));let u=r(`rue:list:start`),d=r(`rue:list:end`);s(a,u),s(a,d);let f=new Map;return i(()=>{f=M({items:(t.warnings??[])||[],getKey:(e,t)=>`warning-${t}`,elements:f,parent:u.parentNode,before:d,singleRoot:!0,start:u,renderItem:(t,n,r,a,o)=>{x(_(()=>{let n=e(),r=p(`li`,n);s(n,r),i(()=>{E(r,`key`,String(`warning-${o}`))}),v(r,`text-warning`);let a=b(r);return s(r,a),i(()=>{h(a,t)}),n}),n,r)}})}),a}):null},useForm:e=>{let t=j(`useRef:1:38`,()=>n());return t.current||=e??be(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,r)=>{let i=t()?.propsRO?.[H],o=r??i?.form,[s,l]=j(`useState:1:35`,()=>c(0,{kind:`ref`})),u=j(`useRef:1:36`,()=>n(void 0)),d=j(`useRef:1:37`,()=>n(null));if(u.current!==o&&(d.current?.(),u.current=o,d.current=o?o.__INTERNAL__.subscribe(()=>{l(s.value+1)}):null),a(()=>{d.current?.(),d.current=null,u.current=void 0}),o)return s.value,o.getFieldValue(e)}}),Se=t=>_(n=>{let a=p(`div`,n);v(a,`not-prose my-6 lg:my-8`);let c=p(`h3`,a);s(a,c),v(c,`mt-0 mb-3 text-base font-semibold text-base-content`);let l=r(`rue:slot:anchor`);s(c,l),i(()=>{let e=t.title;o(()=>x(e,c,l))});let u=p(`div`,a);s(a,u),v(u,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=p(`table`,u);s(u,d),v(d,`table table-zebra`);let f=p(`thead`,d);s(d,f);let m=p(`tr`,f);s(f,m);let h=p(`th`,m);s(m,h),s(h,O(`属性`));let g=p(`th`,m);s(m,g),s(g,O(`说明`));let y=p(`th`,m);s(m,y),s(y,O(`类型`));let b=p(`th`,m);s(m,b),s(b,O(`默认值`));let S=p(`tbody`,d);s(d,S);let C=r(`rue:list:start`),w=r(`rue:list:end`);s(S,C),s(S,w);let T=new Map;return i(()=>{T=M({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,a,c,l)=>{x(_(()=>{let n=e(),a=p(`tr`,n);s(n,a),i(()=>{E(a,`key`,String(t.prop))});let c=p(`td`,a);s(a,c);let l=p(`code`,c);s(c,l);let u=r(`rue:slot:anchor`);s(l,u),i(()=>{let e=t.prop;o(()=>x(e,l,u))});let d=p(`td`,a);s(a,d);let f=r(`rue:slot:anchor`);s(d,f),i(()=>{let e=t.description;o(()=>x(e,d,f))});let m=p(`td`,a);s(a,m);let h=p(`code`,m);s(m,h);let g=r(`rue:slot:anchor`);s(h,g),i(()=>{let e=t.type;o(()=>x(e,h,g))});let _=p(`td`,a);s(a,_);let v=p(`code`,_);s(_,v);let y=r(`rue:slot:anchor`);return s(v,y),i(()=>{let e=t.defaultValue;o(()=>x(e,v,y))}),n}),n,a)}})}),a}),Ce=t=>_(n=>{let a=p(`div`,n);v(a,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let c=r(`rue:slot:anchor`);s(a,c),i(()=>{let n=t.eyebrow?_(()=>{let n=e(),a=p(`div`,n);s(n,a),v(a,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let c=r(`rue:slot:anchor`);return s(a,c),i(()=>{let e=t.eyebrow;o(()=>x(e,a,c))}),n}):``;o(()=>x(n,a,c))});let l=p(`h3`,a);s(a,l),v(l,`mt-3 mb-0 text-lg font-semibold text-base-content`);let u=r(`rue:slot:anchor`);s(l,u),i(()=>{let e=t.title;o(()=>x(e,l,u))});let d=p(`p`,a);s(a,d),v(d,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let f=r(`rue:slot:anchor`);s(d,f),i(()=>{let e=t.description;o(()=>x(e,d,f))});let m=r(`rue:slot:anchor`);return s(a,m),i(()=>{let n=t.items?.length?_(()=>{let n=e(),a=p(`ul`,n);s(n,a),v(a,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let o=r(`rue:list:start`),c=r(`rue:list:end`);s(a,o),s(a,c);let l=new Map;return i(()=>{l=M({items:t.items||[],getKey:(e,t)=>e,elements:l,parent:a,before:c,singleRoot:!0,trackIndex:!1,start:o,renderItem:(t,n,r,a,o)=>{x(_(()=>{let n=e(),r=p(`li`,n);s(n,r),i(()=>{E(r,`key`,String(t))});let a=b(r);return s(r,a),i(()=>{h(a,t)}),n}),n,r)}})}),n}):``;o(()=>x(n,a,m))}),a}),$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},we=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Te=()=>{let{initialValues:e,draft:t,result:n}=j(`useSetup:0:0`,()=>l(()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0};return{initialValues:e,draft:j(`ref:1:0`,()=>A($(e))),result:j(`ref:1:1`,()=>A(`等待提交，右侧会展示 payload 或校验摘要。`))}}));return _(a=>{let c=p(`div`,a);v(c,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let l=r(`rue:component:anchor`);s(c,l),i(()=>{let r=D(Q,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:e,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,n)=>{t.value=$(n)},onFinish:e=>{n.value=`提交成功
`+$(e)},onFinishFailed:e=>{n.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>P(S,{children:[F(Q.Item,{form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>F(z,{...e,placeholder:`输入项目名称`})}),F(Q.Item,{form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>F(z,{...e,placeholder:`team@rue.dev`})}),F(Q.Item,{form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>F(R,{...e,children:`允许直接覆盖 staging 配置`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存表单`}),F(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`重置`})]})]})});o(()=>x(r,c,l))});let u=p(`div`,c);s(c,u),v(u,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=p(`div`,u);s(u,d),v(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(d,O(`Submit result`));let f=p(`p`,u);s(u,f),v(f,`mt-3 mb-0 text-sm text-base-content/65`),s(f,O(`这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。`));let m=p(`div`,u);s(u,m),v(m,`mt-4 grid gap-4`);let g=p(`div`,m);s(m,g),v(g,`rounded-[1.25rem] bg-base-200/70 p-4`);let _=p(`div`,g);s(g,_),v(_,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(_,O(`Live draft`));let y=p(`pre`,g);s(g,y),v(y,`mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80`);let C=b(y);s(y,C),i(()=>{h(C,t.value)});let w=p(`div`,m);s(m,w),v(w,`rounded-[1.25rem] bg-neutral p-4 text-neutral-content`);let T=p(`div`,w);s(w,T),v(T,`text-xs uppercase tracking-[0.22em] text-neutral-content/60`),s(T,O(`Last submit`));let E=p(`pre`,w);s(w,E),v(E,`mt-3 whitespace-pre-wrap break-words text-xs leading-6`);let k=b(E);return s(E,k),i(()=>{h(k,n.value)}),c})},Ee=()=>{let{form:e,role:t,region:n,notes:a,activity:c}=j(`useSetup:0:0:dup1`,()=>l(()=>{let[e]=Q.useForm();return{form:e,role:Q.useWatch(`role`,e)??`viewer`,region:Q.useWatch(`region`,e)??`cn-hz`,notes:Q.useWatch(`notes`,e)??``,activity:j(`ref:1:2`,()=>A(`等待实例方法操作。`))}}));return _(l=>{let u=p(`div`,l);v(u,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=r(`rue:component:anchor`);s(u,d),i(()=>{let t=D(Q,{form:e,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{c.value=`submit()
`+$(e)},onFinishFailed:e=>{c.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:t,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`viewer / editor / admin`})}),F(Q.Item,{form:t,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`cn-hz`})})]}),F(Q.Item,{form:t,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>F(z,{...e,placeholder:`写入审批说明或 rollout 策略`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,onClick:()=>{e.setFieldValue(`role`,`editor`),c.value=`setFieldValue('role', 'editor')`},children:`设为 editor`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),c.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:`填充预设`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),c.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:`填入异常值`}),F(L,{size:`sm`,type:`text`,onClick:()=>{e.resetFields(),c.value=`resetFields()`},children:`恢复初始值`}),F(L,{size:`sm`,color:`primary`,onClick:()=>{e.submit()},children:`程序化提交`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{e.validateFields().then(e=>{c.value=`validateFields()
`+$(e)}).catch(e=>{c.value=`validateFields() failed
`+$(e.errorFields)})},children:`validateFields`})]})]})});o(()=>x(t,u,d))});let f=p(`div`,u);s(u,f),v(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=p(`div`,f);s(f,m),v(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(m,O(`Reactive summary`));let g=p(`p`,f);s(f,g),v(g,`mt-3 mb-0 text-sm text-base-content/65`),s(g,O(`这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。`));let _=p(`div`,f);s(f,_),v(_,`mt-4 grid gap-3`);let y=p(`div`,_);s(_,y),v(y,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let C=p(`div`,y);s(y,C),v(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(C,O(`role`));let w=p(`div`,y);s(y,w),v(w,`mt-2 text-lg font-semibold text-base-content`);let T=b(w);s(w,T),i(()=>{h(T,String(t))});let E=p(`div`,_);s(_,E),v(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=p(`div`,E);s(E,k),v(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(k,O(`region`));let A=p(`div`,E);s(E,A),v(A,`mt-2 text-lg font-semibold text-base-content`);let j=b(A);s(A,j),i(()=>{h(j,String(n))});let M=p(`div`,_);s(_,M),v(M,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let N=p(`div`,M);s(M,N),v(N,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(N,O(`notes`));let I=p(`div`,M);s(M,I),v(I,`mt-2 text-sm leading-6 text-base-content/80`);let R=b(I);s(I,R),i(()=>{h(R,String(a)||`未填写`)});let B=p(`pre`,f);s(f,B),v(B,`mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6`);let V=b(B);return s(B,V),i(()=>{h(V,c.value)}),u})},De=()=>{let{form:e,password:t,confirm:n,website:a,status:c}=j(`useSetup:0:0:dup2`,()=>l(()=>{let[e]=Q.useForm();return{form:e,password:Q.useWatch(`password`,e)??``,confirm:Q.useWatch(`confirm`,e)??``,website:Q.useWatch(`website`,e)??``,status:j(`ref:1:3`,()=>A(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`))}}));return _(l=>{let u=p(`div`,l);v(u,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=r(`rue:component:anchor`);s(u,d),i(()=>{let t=D(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{c.value=`提交成功
`+$(e)},onFinishFailed:e=>{c.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:t,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`release-admin`})}),F(Q.Item,{form:t,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>F(z,{...e,placeholder:`https://prod.rue.dev`})})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:t,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>F(z,{...e,placeholder:`至少 8 位`})}),F(Q.Item,{form:t,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>F(z,{...e,placeholder:`再次输入密码`})})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行校验`}),F(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`清空状态`})]})]})});o(()=>x(t,u,d))});let f=p(`div`,u);s(u,f),v(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=p(`div`,f);s(f,m),v(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(m,O(`Validation notes`));let g=p(`p`,f);s(f,g),v(g,`mt-3 mb-0 text-sm text-base-content/65`),s(g,O("这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。"));let _=p(`div`,f);s(f,_),v(_,`mt-4 grid gap-3`);let y=p(`div`,_);s(_,y),v(y,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let C=p(`div`,y);s(y,C),v(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(C,O(`Password match`));let w=p(`div`,y);s(y,w),v(w,`mt-2 text-base font-semibold text-base-content`);let T=b(w);s(w,T),i(()=>{h(T,t&&n?t===n?`已匹配`:`未匹配`:`等待输入`)});let E=p(`div`,_);s(_,E),v(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=p(`div`,E);s(E,k),v(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(k,O(`Website warning`));let A=p(`div`,E);s(E,A),v(A,`mt-2 text-base font-semibold text-base-content`);let j=b(A);s(A,j),i(()=>{h(j,a?String(a).startsWith(`https://`)?`格式建议通过`:`建议补上 https://`:`未填写`)});let M=p(`pre`,f);s(f,M),v(M,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let N=b(M);return s(M,N),i(()=>{h(N,c.value)}),u})},Oe=()=>{let{form:e,initialValues:t,issueId:n,slug:a,branch:c,snapshot:u}=j(`useSetup:0:0:dup3`,()=>l(()=>{let[e]=Q.useForm(),t={issueId:`2048`,slug:`release-planning`,branch:`main`};return{form:e,initialValues:t,issueId:Q.useWatch(`issueId`,e)??``,slug:Q.useWatch(`slug`,e)??``,branch:Q.useWatch(`branch`,e)??``,snapshot:j(`ref:1:4`,()=>A($(t)))}}));return _(l=>{let d=p(`div`,l);v(d,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let f=r(`rue:component:anchor`);s(d,f),i(()=>{let n=D(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:t,onValuesChange:(e,t)=>{u.value=$(t)},onFinish:e=>{u.value=`提交成功
`+$(e)},render:t=>P(S,{children:[F(Q.Item,{form:t,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>F(z,{...e,placeholder:`#2048`})}),F(Q.Item,{form:t,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>F(z,{...e,placeholder:`release-planning`})}),F(Q.Item,{form:t,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>F(z,{...e,placeholder:`main / release/v1-2`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`应用转换`}),F(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:`填充示例`})]})]})});o(()=>x(n,d,f))});let m=p(`div`,d);s(d,m),v(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let g=p(`div`,m);s(m,g),v(g,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(g,O(`Store snapshot`));let _=p(`p`,m);s(m,_),v(_,`mt-3 mb-0 text-sm text-base-content/65`),s(_,O("这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。"));let y=p(`div`,m);s(m,y),v(y,`mt-4 grid gap-3`);let C=p(`div`,y);s(y,C),v(C,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let w=p(`div`,C);s(C,w),v(w,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(w,O(`issueId`));let T=p(`div`,C);s(C,T),v(T,`mt-2 text-lg font-semibold text-base-content`);let E=b(T);s(T,E),i(()=>{h(E,String(n)||`空`)});let k=p(`div`,y);s(y,k),v(k,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=p(`div`,k);s(k,A),v(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(A,O(`slug`));let j=p(`div`,k);s(k,j),v(j,`mt-2 text-lg font-semibold text-base-content`);let M=b(j);s(j,M),i(()=>{h(M,String(a)||`空`)});let N=p(`div`,y);s(y,N),v(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=p(`div`,N);s(N,I),v(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(I,O(`branch`));let R=p(`div`,N);s(N,R),v(R,`mt-2 text-lg font-semibold text-base-content`);let B=b(R);s(R,B),i(()=>{h(B,String(c)||`空`)});let V=p(`pre`,m);s(m,V),v(V,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let H=b(V);return s(V,H),i(()=>{h(H,u.value)}),d})},ke=()=>{let{form:e,enableCanary:t,publishMode:n,batchSize:a,approveBy:c,result:u}=j(`useSetup:0:0:dup4`,()=>l(()=>{let[e]=Q.useForm();return{form:e,enableCanary:!!Q.useWatch(`enableCanary`,e),publishMode:Q.useWatch(`publishMode`,e)??`manual`,batchSize:Q.useWatch(`batchSize`,e)??``,approveBy:Q.useWatch(`approveBy`,e)??``,result:j(`ref:1:5`,()=>A(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`))}}));return _(l=>{let d=p(`div`,l);v(d,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let f=r(`rue:component:anchor`);s(d,f),i(()=>{let t=D(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{u.value=`提交成功
`+$(e)},render:t=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:t,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`gateway`})}),F(Q.Item,{form:t,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`manual / auto`})})]}),F(Q.Item,{form:t,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>F(R,{...e,children:`开启 canary rollout`})}),F(Q.Item,{shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:e=>e.enableCanary?P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5`,children:[F(`div`,{className:`mb-4 text-sm font-medium text-base-content`,children:`Canary settings`}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:t,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:t,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-ops`})})]}),e.publishMode===`auto`?F(`div`,{className:`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,children:`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`}):null]}):F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,children:`未开启灰度发布，额外字段不会挂载，也不会参与校验。`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存发布策略`}),F(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:`套用 canary 模板`})]})]})});o(()=>x(t,d,f))});let m=p(`div`,d);s(d,m),v(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let g=p(`div`,m);s(m,g),v(g,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(g,O(`Conditional summary`));let _=p(`p`,m);s(m,_),v(_,`mt-3 mb-0 text-sm text-base-content/65`),s(_,O("这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。"));let y=p(`div`,m);s(m,y),v(y,`mt-4 grid gap-3`);let C=p(`div`,y);s(y,C),v(C,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let w=p(`div`,C);s(C,w),v(w,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(w,O(`enableCanary`));let T=p(`div`,C);s(C,T),v(T,`mt-2 text-lg font-semibold text-base-content`);let E=b(T);s(T,E),i(()=>{h(E,t?`true`:`false`)});let k=p(`div`,y);s(y,k),v(k,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=p(`div`,k);s(k,A),v(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(A,O(`publishMode`));let j=p(`div`,k);s(k,j),v(j,`mt-2 text-lg font-semibold text-base-content`);let M=b(j);s(j,M),i(()=>{h(M,String(n))});let N=p(`div`,y);s(y,N),v(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=p(`div`,N);s(N,I),v(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(I,O(`Conditional fields`));let B=p(`div`,N);s(N,B),v(B,`mt-2 text-sm leading-6 text-base-content/80`),s(B,O(`batchSize: `));let V=b(B);s(B,V),i(()=>{h(V,String(a)||`未挂载`)}),s(B,p(`br`,B)),s(B,O(`approveBy: `));let H=b(B);s(B,H),i(()=>{h(H,String(c)||`未挂载`)});let U=p(`pre`,m);s(m,U),v(U,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let W=b(U);return s(U,W),i(()=>{h(W,u.value)}),d})},Ae=()=>{let{form:e,host:t,path:n,saveLog:a,normalizedPath:c,previewUrl:u}=j(`useSetup:0:0:dup5`,()=>l(()=>{let[e]=Q.useForm(),t=String(Q.useWatch(`host`,e)??`api.rue.dev`),n=String(Q.useWatch(`path`,e)??`release-hooks`),r=j(`ref:1:6`,()=>A(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`)),i=n?n.replace(/^\/+/,``):``;return{form:e,host:t,path:n,saveLog:r,normalizedPath:i,previewUrl:`https://${t}:443/hooks/${i}`}}));return _(t=>{let n=p(`div`,t);v(n,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let c=r(`rue:component:anchor`);s(n,c),i(()=>{let t=D(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{a.value=`保存复合控件
`+$(e)},render:t=>P(S,{children:[P(`div`,{className:`grid gap-6`,children:[P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`回调地址`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`https://`}),F(Q.Item,{form:t,name:`host`,noStyle:!0,render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`api.rue.dev`})})}),F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`:443`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。`})]}),P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`资源路径`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`/hooks/`}),F(Q.Item,{form:t,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`release-hooks`})})}),F(`span`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`POST target`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。`})]})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存复合地址`}),F(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:`填入 staging`})]})]})});o(()=>x(t,n,c))});let l=p(`div`,n);s(n,l),v(l,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=p(`div`,l);s(l,d),v(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(d,O(`Composite preview`));let f=p(`p`,l);s(l,f),v(f,`mt-3 mb-0 text-sm text-base-content/65`),s(f,O(`这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。`));let m=p(`div`,l);s(l,m),v(m,`mt-4 rounded-[1.25rem] bg-base-200/70 p-4`);let g=p(`div`,m);s(m,g),v(g,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(g,O(`Resolved URL`));let _=p(`div`,m);s(m,_),v(_,`mt-3 break-all text-lg font-semibold text-base-content`);let y=r(`rue:slot:anchor`);s(_,y),i(()=>{let e=u;o(()=>x(e,_,y))});let C=p(`div`,l);s(l,C),v(C,`mt-4 grid gap-3 text-sm text-base-content/75`);let w=p(`div`,C);s(C,w),v(w,`rounded-[1.25rem] bg-base-200/70 p-4`),s(w,O("`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。"));let T=p(`div`,C);s(C,T),v(T,`rounded-[1.25rem] bg-base-200/70 p-4`),s(T,O(`外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。`));let E=p(`div`,C);s(C,E),v(E,`rounded-[1.25rem] bg-base-200/70 p-4`),s(E,O(`如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。`));let k=p(`pre`,l);s(l,k),v(k,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let A=b(k);return s(k,A),i(()=>{h(A,a.value)}),n})},je=()=>{let{form:e,activity:t,jumpToField:n}=j(`useSetup:0:0:dup6`,()=>l(()=>{let[e]=Q.useForm(),t=j(`ref:1:7`,()=>A(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`));return{form:e,activity:t,jumpToField:(n,r)=>{e.scrollToField(n,{block:`center`,focus:!0}),t.value=`scrollToField -> ${r}`}}}));return _(a=>{let c=p(`div`,a);v(c,`grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]`);let l=p(`div`,c);s(c,l),v(l,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let u=p(`div`,l);s(l,u),v(u,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(u,O(`Scroll actions`));let d=p(`p`,l);s(l,d),v(d,`mt-3 mb-0 text-sm text-base-content/65`),s(d,O(`这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。`));let f=p(`div`,l);s(l,f),v(f,`mt-4 grid gap-2`);let m=r(`rue:component:anchor`);s(f,m),x(D(L,{size:`sm`,onClick:()=>n(`releaseName`,`发布名称`),children:`滚到发布名称`}),f,m);let g=r(`rue:component:anchor`);s(f,g),x(D(L,{size:`sm`,type:`outlined`,onClick:()=>n([`strategy`,`batchSize`],`灰度批次`),children:`滚到灰度批次`}),f,g);let _=r(`rue:component:anchor`);s(f,_),x(D(L,{size:`sm`,type:`outlined`,onClick:()=>n([`observability`,`dashboard`],`监控看板`),children:`滚到监控看板`}),f,_);let y=r(`rue:component:anchor`);s(f,y),x(D(L,{size:`sm`,type:`outlined`,onClick:()=>n([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),f,y);let w=p(`pre`,l);s(l,w),v(w,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let T=b(w);s(w,T),i(()=>{h(T,t.value)});let E=p(`div`,c);s(c,E),v(E,`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5`);let k=p(`div`,E);s(E,k),v(k,`overflow-y-auto overscroll-contain pr-2`),C(k,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let A=r(`rue:component:anchor`);return s(k,A),i(()=>{let r=D(Q,{form:e,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{t.value=`提交成功
`+$(e)},onFinishFailed:e=>{t.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>P(S,{children:[P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 1`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`基础信息`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`2026.05 release`})}),F(Q.Item,{form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`staging`})}),F(Q.Item,{form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-captain`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 2`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`发布策略`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`15m`})}),F(Q.Item,{form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`error rate > 2%`})}),F(Q.Item,{form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`30m`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 3`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`观测与审批`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Grafana release board`})}),F(Q.Item,{form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`#release-alerts`})}),F(Q.Item,{form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`ops-squad`})}),F(Q.Item,{form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`qa-squad`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 4`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`回滚预案`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>F(z,{...e,placeholder:`RB-2026-0514`})}),F(Q.Item,{form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rollback-owner`})}),F(Q.Item,{form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`20m`})}),F(Q.Item,{form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`platform / qa / support`})})]})]}),F(`div`,{className:`sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur`,children:P(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[F(`div`,{className:`text-sm text-base-content/65`,children:`留空深层字段后点击提交，会自动滚到首个错误项。`}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{type:`outlined`,onClick:()=>n([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),F(L,{color:`primary`,htmlType:`submit`,children:`提交长表单`})]})]})})]})});o(()=>x(r,k,A))}),c})},Me=()=>{let{form:t,members:n}=j(`useSetup:0:0:dup7`,()=>l(()=>{let[e]=Q.useForm();return{form:e,members:Q.useWatch(`members`,e)??[]}}));return _(a=>{let c=p(`div`,a);v(c,`grid gap-6`);let l=p(`div`,c);s(c,l),v(l,`grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]`);let u=r(`rue:component:anchor`);s(l,u),i(()=>{let e=D(Q,{form:t,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>F(Q.List,{form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保留 2 名审批成员，才适合真实协作流程。`}}],render:(t,n,r)=>P(`div`,{className:`grid gap-4`,children:[t.length===0?F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,children:`暂无成员，点击下方按钮即可追加一组字段。`}):null,t.map((r,i)=>P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`,children:[P(`div`,{className:`mb-4 flex flex-wrap items-center justify-between gap-3`,children:[P(`div`,{children:[P(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:[`Member `,i+1]}),P(`div`,{className:`mt-1 text-sm font-medium text-base-content`,children:[`审批成员 `,i+1]})]}),P(`div`,{className:`flex flex-wrap gap-2`,children:[i>0?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name-1),children:`上移`}):null,i<t.length-1?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name+1),children:`下移`}):null,F(L,{size:`sm`,type:`text`,onClick:()=>n.remove(r.name),children:`删除`})]})]}),P(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`输入成员名称`})}),F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Owner / Reviewer / QA`})})]})]},r.key)),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,color:`primary`,onClick:()=>{n.add({name:`新成员 `+String(t.length+1),role:`QA`})},children:`新增成员`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>n.add({name:`Head reviewer`,role:`QA`},0),children:`头部插入`})]}),r.errors.length>0||r.warnings.length>0?F(Q.ErrorList,{errors:r.errors,warnings:r.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}):null]})})});o(()=>x(e,l,u))});let d=p(`div`,l);s(l,d),v(d,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let f=p(`div`,d);s(d,f),v(f,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(f,O(`List snapshot`));let m=p(`div`,d);s(d,m),v(m,`mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65`);let g=r(`rue:slot:anchor`);s(m,g),i(()=>{let e=n.length;o(()=>x(e,m,g))}),s(m,O(` members`));let y=p(`div`,d);s(d,y),v(y,`mt-4 grid gap-3`);let S=r(`rue:slot:anchor`);s(y,S),i(()=>{let t=n.length>0?_(()=>{let t=e(),a=r(`rue:list:start`),o=r(`rue:list:end`);s(t,a),s(t,o);let c=new Map;return i(()=>{c=M({items:n||[],getKey:(e,t)=>String(t),elements:c,parent:a.parentNode,before:o,singleRoot:!0,start:a,renderItem:(t,n,r,a,o)=>{x(_(()=>{let n=e(),r=p(`div`,n);s(n,r),i(()=>{E(r,`key`,String(String(o)))}),v(r,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let a=p(`div`,r);s(r,a),v(a,`text-xs uppercase tracking-[0.22em] text-base-content/45`),s(a,O(`成员 `));let c=b(a);s(a,c),i(()=>{h(c,o+1)});let l=p(`div`,r);s(r,l),v(l,`mt-2 text-base font-medium text-base-content`);let u=b(l);s(l,u),i(()=>{h(u,t?.name?String(t.name):`未命名成员`)});let d=p(`div`,r);s(r,d),v(d,`mt-1 text-xs text-base-content/55`);let f=b(d);return s(d,f),i(()=>{h(f,t?.role?String(t.role):`未分配职责`)}),n}),n,r)}})}),t}):_(()=>{let t=e(),n=p(`div`,t);return s(t,n),v(n,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),s(n,O(`当前列表为空。`)),t});o(()=>x(t,y,S))});let C=p(`div`,c);s(c,C),v(C,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let w=p(`div`,C);s(C,w),v(w,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(w,O(`List behavior`));let T=p(`div`,C);s(C,T),v(T,`mt-4 grid gap-4 md:grid-cols-3`);let k=p(`div`,T);s(T,k),v(k,`rounded-[1.25rem] bg-base-200/70 p-4`);let A=p(`div`,k);s(k,A),v(A,`text-sm font-semibold text-base-content`),s(A,O(`列表级规则`));let j=p(`p`,k);s(k,j),v(j,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),s(j,O(`rules 挂在 Form.List 上，校验整个 members 数组。`));let N=p(`div`,T);s(T,N),v(N,`rounded-[1.25rem] bg-base-200/70 p-4`);let I=p(`div`,N);s(N,I),v(I,`text-sm font-semibold text-base-content`),s(I,O(`重排操作`));let R=p(`p`,N);s(N,R),v(R,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),s(R,O(`operation.move 保持字段状态跟随成员顺序移动。`));let B=p(`div`,T);s(T,B),v(B,`rounded-[1.25rem] bg-base-200/70 p-4`);let V=p(`div`,B);s(B,V),v(V,`text-sm font-semibold text-base-content`),s(V,O(`错误出口`));let H=p(`p`,B);return s(B,H),v(H,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),s(H,O(`Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。`)),c})},Ne=()=>{let{form:e,keyword:t,assignee:n,repository:a,reviewer:c,includeDrafts:u,submitted:d}=j(`useSetup:0:0:dup8`,()=>l(()=>{let[e]=Q.useForm();return{form:e,keyword:Q.useWatch(`keyword`,e)??``,assignee:Q.useWatch(`assignee`,e)??``,repository:Q.useWatch(`repository`,e)??``,reviewer:Q.useWatch(`reviewer`,e)??``,includeDrafts:!!Q.useWatch(`includeDrafts`,e),submitted:j(`ref:1:8`,()=>A(`尚未执行检索。`))}}));return _(l=>{let f=p(`div`,l);v(f,`grid gap-6`);let m=r(`rue:component:anchor`);s(f,m),i(()=>{let t=D(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{d.value=$(e)},render:t=>P(S,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:[F(Q.Item,{form:t,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>F(z,{...e,placeholder:`搜索 issue / 页面 / API`})}),F(Q.Item,{form:t,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:t,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>F(z,{...e,placeholder:`team-design`})}),F(Q.Item,{form:t,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>F(z,{...e,placeholder:`infra`})})]}),P(`div`,{className:`mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4`,children:[F(Q.Item,{form:t,name:`includeDrafts`,valuePropName:`checked`,render:e=>F(R,{...e,children:`包含草稿和实验分支`})}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行搜索`}),F(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`清空条件`}),F(L,{type:`text`,onClick:()=>{e.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:`填入示例`})]})]})]})});o(()=>x(t,f,m))});let g=p(`div`,f);s(f,g),v(g,`grid gap-4 lg:grid-cols-2`);let _=p(`div`,g);s(g,_),v(_,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let y=p(`div`,_);s(_,y),v(y,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(y,O(`Query preview`));let C=p(`p`,_);s(_,C),v(C,`mt-3 mb-0 text-sm text-base-content/65`),s(C,O(`这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。`));let w=p(`pre`,_);s(_,w),v(w,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let T=r(`rue:slot:anchor`);s(w,T),i(()=>{let e=we({keyword:String(t),repository:String(a),assignee:String(n),reviewer:String(c),includeDrafts:u})||`暂无 query string`;o(()=>x(e,w,T))});let E=p(`div`,_);s(_,E),v(E,`mt-4 grid gap-3 text-sm text-base-content/80`);let k=p(`div`,E);s(E,k),v(k,`rounded-[1.25rem] bg-base-200/70 p-4`),s(k,O(`关键词：`));let A=b(k);s(k,A),i(()=>{h(A,String(t)||`未填写`)});let j=p(`div`,E);s(E,j),v(j,`rounded-[1.25rem] bg-base-200/70 p-4`),s(j,O(`仓库：`));let M=b(j);s(j,M),i(()=>{h(M,String(a)||`未填写`)});let N=p(`div`,E);s(E,N),v(N,`rounded-[1.25rem] bg-base-200/70 p-4`),s(N,O(`负责人 / 评审人：`));let I=b(N);s(N,I),i(()=>{h(I,String(n)||`未填写`)}),s(N,O(` / `));let B=b(N);s(N,B),i(()=>{h(B,String(c)||`未填写`)});let V=p(`div`,E);s(E,V),v(V,`rounded-[1.25rem] bg-base-200/70 p-4`),s(V,O(`包含草稿：`));let H=b(V);s(V,H),i(()=>{h(H,u?`是`:`否`)});let U=p(`div`,g);s(g,U),v(U,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let W=p(`div`,U);s(U,W),v(W,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),s(W,O(`Last submit`));let G=p(`pre`,U);s(U,G),v(G,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let K=b(G);return s(G,K),i(()=>{h(K,d.value)}),f})},Pe=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保留值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Fe=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保留字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ie=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Le=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 继续传给 Item / List`,`不要依赖隐式祖先解析`]}],Re=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],ze=()=>{let{tabBasic:t,tabInstance:n,tabValidation:a,tabNormalize:c,tabConditional:u,tabNoStyle:d,tabList:f,tabScroll:m,tabInline:g}=j(`useSetup:0:0:dup9`,()=>l(()=>({tabBasic:j(`ref:1:9`,()=>A(`preview`)),tabInstance:j(`ref:1:10`,()=>A(`preview`)),tabValidation:j(`ref:1:11`,()=>A(`preview`)),tabNormalize:j(`ref:1:12`,()=>A(`preview`)),tabConditional:j(`ref:1:13`,()=>A(`preview`)),tabNoStyle:j(`ref:1:14`,()=>A(`preview`)),tabList:j(`ref:1:15`,()=>A(`preview`)),tabScroll:j(`ref:1:16`,()=>A(`preview`)),tabInline:j(`ref:1:17`,()=>A(`preview`))})));return _(l=>{let y=e(),S=r(`rue:component:anchor`);return s(y,S),x(D(B,{children:_(()=>{let l=e(),_=p(`div`,l);s(l,_),v(_,`max-w-none prose prose-sm md:prose-base`);let y=p(`h1`,_);s(_,y),v(y,`mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content`),s(y,O(`Form 表单`));let S=p(`p`,_);s(_,S),v(S,`mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72`),s(S,O(`这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。`));let C=p(`h2`,_);s(_,C),s(C,O(`何时使用`));let w=p(`ul`,_);s(_,w);let k=p(`li`,w);s(w,k),s(k,O(`需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。`));let A=p(`li`,w);s(w,A),s(A,O(`需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。`));let j=p(`li`,w);s(w,j),s(j,O(`需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。`));let N=p(`section`,_);s(_,N),v(N,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let P=r(`rue:list:start`),I=r(`rue:list:end`);s(N,P),s(N,I);let L=new Map;i(()=>{L=M({items:Le||[],getKey:(e,t)=>e.title,elements:L,parent:N,before:I,start:P,renderItem:(e,t,n,r,i)=>{T(D(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description,items:e.items}),t,n,r)}})});let R=p(`div`,_);s(_,R),v(R,`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm`),s(R,O(`当前 Rue runtime 下，推荐通过`));let z=p(`code`,R);s(R,z),s(z,O(`Form.useForm()`)),s(R,O(`或`));let B=b(R);s(R,B),h(B,` `);let H=p(`code`,R);s(R,H);let U=b(H);s(H,U),h(U,`render={form => <Form.Item form={form} name="title" />}`),s(R,O(`显式持有并传递`));let W=b(R);s(R,W),h(W,` `);let G=p(`code`,R);s(R,G),s(G,O(`form`)),s(R,O("。 下面所有 demo 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。"));let K=r(`rue:component:anchor`);s(_,K),i(()=>{let e=D(V,{title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:t,preview:()=>F(Te,{}),code:`<Form
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
`});o(()=>x(e,_,K))});let q=r(`rue:component:anchor`);s(_,q),i(()=>{let e=D(V,{title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:n,preview:()=>F(Ee,{}),code:`const InstanceMethodsShowcase: FC = () => {
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
`});o(()=>x(e,_,q))});let J=r(`rue:component:anchor`);s(_,J),i(()=>{let e=D(V,{title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:a,preview:()=>F(De,{}),code:`const [form] = Form.useForm()

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
`});o(()=>x(e,_,J))});let ee=r(`rue:component:anchor`);s(_,ee),i(()=>{let e=D(V,{title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:c,preview:()=>F(Oe,{}),code:`<Form.Item
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
`});o(()=>x(e,_,ee))});let te=r(`rue:component:anchor`);s(_,te),i(()=>{let e=D(V,{title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:u,preview:()=>F(ke,{}),code:`<Form.Item
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
`});o(()=>x(e,_,te))});let ne=r(`rue:component:anchor`);s(_,ne),i(()=>{let e=D(V,{title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:d,preview:()=>F(Ae,{}),code:`const [form] = Form.useForm()

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
`});o(()=>x(e,_,ne))});let re=r(`rue:component:anchor`);s(_,re),i(()=>{let e=D(V,{title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:f,preview:()=>F(Me,{}),code:`const DynamicListShowcase: FC = () => {
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
`});o(()=>x(e,_,re))});let ie=r(`rue:component:anchor`);s(_,ie),i(()=>{let e=D(V,{title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:m,preview:()=>F(je,{}),code:`const LongFormScrollShowcase: FC = () => {
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
`});o(()=>x(e,_,ie))});let ae=r(`rue:component:anchor`);s(_,ae),i(()=>{let e=D(V,{title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 版本：网格字段、独立按钮区、统一实例驱动。`,tab:g,preview:()=>F(Ne,{}),code:`const [form] = Form.useForm()

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
`});o(()=>x(e,_,ae))});let Y=p(`h2`,_);s(_,Y),s(Y,O(`使用说明`));let oe=p(`p`,_);s(_,oe),s(oe,O(`下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前实现强相关的部分抽出来。先看这些规则，再回头看上面的 demo，理解会快很多。`));let se=p(`section`,_);s(_,se),v(se,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let X=r(`rue:list:start`),Z=r(`rue:list:end`);s(se,X),s(se,Z);let ce=new Map;i(()=>{ce=M({items:Re||[],getKey:(e,t)=>e.title,elements:ce,parent:se,before:Z,start:X,renderItem:(e,t,n,r,i)=>{T(D(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description}),t,n,r)}})});let le=p(`h2`,_);s(_,le),E(le,`id`,`form-api`),s(le,O(`API`));let ue=p(`p`,_);s(_,ue),s(ue,O(`Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。`));let de=r(`rue:component:anchor`);s(_,de),i(()=>{let e=D(Se,{title:`Form`,rows:Pe});o(()=>x(e,_,de))});let fe=r(`rue:component:anchor`);s(_,fe),i(()=>{let e=D(Se,{title:`Form.Item`,rows:Fe});o(()=>x(e,_,fe))});let pe=r(`rue:component:anchor`);return s(_,pe),i(()=>{let e=D(Se,{title:`Form.List and Hooks`,rows:Ie});o(()=>x(e,_,pe))}),l})}),y,S),y})};export{ze as default};