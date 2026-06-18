import{$ as e,Ht as t,It as n,J as r,Jt as i,Kt as a,Lt as o,Nt as s,Q as c,X as l,Xt as u,Yt as d,Z as f,at as p,c as m,dt as h,et as g,gt as _,i as v,j as y,l as b,mt as x,o as S,p as C,pt as w,qt as T,r as E,s as D,st as O,t as k,x as A}from"./vapor-runtime-iQZthBPQ.js";import{a as j,n as M,t as N}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as P,i as F,o as I}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as L}from"./button-CyhsFe_V.js";import{t as R}from"./checkbox-CZBIp8od.js";import{t as z}from"./input-2bBycoUP.js";import{r as B}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as V}from"./PreviewBlock-DJFn4Hia.js";var H=`__rueFormContext`,U=0,W={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},G=(...e)=>e.filter(Boolean).join(` `),K=e=>!!e&&typeof e==`object`,q=e=>{if(Array.isArray(e))return e.map(e=>q(e));if(K(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=q(e[n])}),t}return e},J=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),te=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,ne=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),re=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},ie=(e,t,n)=>{if(t.length===0)return q(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?q(n):ie(o[r],i,n),o},ae=(e,t)=>{if(t.length===0)return;if(!K(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=ae(i[n],r),i)},Y=(e,t)=>{if(!K(t)&&!Array.isArray(t))return q(t);if(Array.isArray(t))return t.map(e=>q(e));let n=K(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Y(n[e],t[e])}),n},oe=(e,t)=>ie({},e,t),se=e=>e?Array.isArray(e)?e:[e]:[`onChange`],X=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,Z=(e,t)=>{let n=X(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},ce=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,le=e=>{try{return new URL(e),!0}catch{return!1}},ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&le(e);default:return!0}},de=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??W.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??W.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??W.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??W.types?.[e.type??`string`]??"${label} 类型不正确";let a=X(t,e.type);return(r[a]??W[a]??{})[i??`len`]??"${label} 校验失败"},fe=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),pe=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},me=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,he=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=pe(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&ce(n,e.type)?i=de(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=de(e,n,l,o,`whitespace`):!ce(n,e.type)&&e.type&&!ue(n,e.type)?i=de(e,n,l,o,`type`):!ce(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=de(e,n,l,o,`pattern`):!ce(n,e.type)&&e.len!==void 0?Z(n,e.type)!==e.len&&(i=de(e,n,l,o,`len`)):!ce(n,e.type)&&e.min!==void 0?Z(n,e.type)<e.min&&(i=de(e,n,l,o,`min`)):!ce(n,e.type)&&e.max!==void 0&&Z(n,e.type)>e.max&&(i=de(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=fe(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},ge=(e,...t)=>{let[n,r]=t;if(e===`checked`)return K(r)&&typeof r.checked==`boolean`?r.checked:K(n)&&K(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(K(n)&&`target`in n))return n;if(K(n)&&K(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},_e=t=>t?b(t===`error`?t=>{let n=c(`span`,t);return O(n,`text-error`),r(n,e(`!`)),n}:t===`warning`?t=>{let n=c(`span`,t);return O(n,`text-warning`),r(n,e(`!`)),n}:t===`success`?t=>{let n=c(`span`,t);return O(n,`text-success`),r(n,e(`✓`)),n}:e=>{let t=c(`span`,e);return O(t,`loading loading-spinner loading-xs text-primary`),t}):null,ve=e=>{if(e?.span)return`${e.span/24*100}%`},ye=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,be=()=>{let e=j(`ref:1:0`,()=>o(0)),t=new Map,n=new Map,r=new Map,i=new Set,a=!1,s={},c={},l=!1,u=null,d={validateTrigger:[`onChange`],validateMessages:W},f=()=>{e.value+=1,i.forEach(e=>e())},p=()=>{a||(a=!0,queueMicrotask(()=>{a=!1,f()}))},m=e=>{let t=ee(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},h=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ee(t)}`:e.id},g=e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:q(ne(s,e))}},_=e=>{d.onFieldsChange?.([g(e)],D.getFieldsValue(!0))},v=(e,t,n=!0)=>{let r=m(e);Object.assign(r,t),n&&(_(e),f(),p())},y=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&te(t,e))return n}return null},b=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return v(n,{errors:[],warnings:[],validating:!1}),null;v(n,{validating:!0});let a=await he(n,ne(s,n),i,s,e.getLabel(),e.getMessageVariables(),d.validateMessages);return v(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},x=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||te(n,e)||t.getDependencies().some(t=>te(t,e))&&await b(t)}},S=async(e,t,n)=>{if(s=ie(s,e,t),n?.touch){let t=m(e);t.touched=!0}f(),_(e),n?.emitValues!==!1&&d.onValuesChange?.(oe(e,t),D.getFieldsValue(!0));let r=y(e);r&&await b(r,n?.triggerName),await x(e),p()},C=e=>{let i=h(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let o=e.getNamePath();if(o&&o.length){let t=e.getInitialValue();!re(c,o)&&t!==void 0&&(c=ie(c,o,t)),!re(s,o)&&t!==void 0&&(s=ie(s,o,t)),m(o)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let o=e.getNamePath();!o||!o.length||ye(e,d.preserve)||(s=ae(s,o),r.delete(ee(o)),f())}},w=e=>l?!1:(c=q(e??{}),s=q(e??{}),l=!0,!0),T=async e=>{let n=e?.map(e=>J(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=h(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>te(i,e)))continue;let o=await b(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:D.getFieldsValue(!0),errorFields:r,outOfDate:!1};return D.getFieldsValue(!0)},E=(e,t)=>{let n=J(e),r=d.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>u?.querySelector(`#${CSS.escape(e)}`)).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},D={getFieldValue(t){return e.value,q(ne(s,J(t)))},getFieldsValue(t){return e.value,t===!0||t==null?q(s):t.reduce((e,t)=>{let n=J(t);return ie(e,n,ne(s,n))},{})},setFieldValue(e,t){S(J(e),t,{emitValues:!1})},setFieldsValue(e){s=Y(s,e),f()},resetFields(e){if(!e?.length){s=q(c),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),f();return}e.forEach(e=>{let t=J(e),n=ne(c,t);s=n===void 0?ae(s,t):ie(s,t,n);let r=m(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),f()},validateFields:T,submit(){T().then(e=>{d.onFinish?.(e)}).catch(e=>{if(d.onFinishFailed?.(e),d.scrollToFirstError&&e.errorFields[0]){let t=d.scrollToFirstError===!0?{block:`center`}:d.scrollToFirstError;E(e.errorFields[0].name,t)}})},scrollToField:E,isFieldTouched(e){return m(J(e)).touched},getFieldError(e){return[...m(J(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=h(t);return e.has(n)?!1:(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=J(e),n=m(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){d=e},ensureInitialized:w,registerField:C,getMeta:m,validateFieldByPath(e,t){let n=y(e);return n?b(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return S(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return S(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return d.validateTrigger},setRootElement(e){u=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){f()}}};return D},xe=(t,n,i)=>typeof i==`function`?i(t,{required:n}):i===`optional`&&!n?b(t=>{let n=c(`span`,t);return O(n,`ml-2 text-xs text-base-content/45`),p(n,`aria-hidden`,`true`),r(n,e(`optional`)),n}):i!==!1&&n?b(t=>{let n=c(`span`,t);return O(n,`ml-1 text-error`),p(n,`aria-hidden`,`true`),r(n,e(`*`)),n}):null,Q=Object.assign(e=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:d,__rue_rest_omit_2:p,__rue_rest_omit_3:m,__rue_rest_omit_4:h,__rue_rest_omit_5:g,__rue_rest_omit_6:y,__rue_rest_omit_7:S,__rue_rest_omit_8:w,__rue_rest_omit_9:E,__rue_rest_omit_10:O,__rue_rest_omit_11:M,__rue_rest_omit_12:N,__rue_rest_omit_13:P,__rue_rest_omit_14:L,__rue_rest_omit_15:R,__rue_rest_omit_16:z,__rue_rest_omit_17:B,rest:V,slotSource:H,internalFormRef:U,rootElementRef:K,subscriptionFormRef:q,unsubscribeRenderRef:J,renderVersion:ee,setRenderVersion:te,resolvedForm:ne,initializedNow:re,formVersionSnapshot:ie,handleNativeSubmit:ae,resolveContent:Y,content:oe}=j(`useSetup:0:0:dup3`,()=>T(()=>{let{className:t,style:r,children:o,render:c,component:l,layout:u,initialValues:d,form:f,name:p,preserve:m,validateMessages:h,validateTrigger:g,scrollToFirstError:y,onValuesChange:b,onFieldsChange:x,onFinish:S,onFinishFailed:w,onSubmit:E,...D}=e,O=j(`computed:1:39`,()=>_(()=>s()?.propsRO??{children:e.children})),k=O,A=j(`useRef:1:40`,()=>a()),M=j(`useRef:1:41`,()=>a(null)),N=j(`useRef:1:42`,()=>a(void 0)),P=j(`useRef:1:43`,()=>a(null)),[L,R]=j(`useState:1:44`,()=>i(0,{kind:`ref`}));A.current||=e.form??be();let z=j(`computed:1:45`,()=>_(()=>e.form??A.current)),B=z,V=j(`computed:1:46`,()=>_(()=>B.get().__INTERNAL__.ensureInitialized(e.initialValues))),H=V,U=j(`computed:1:47`,()=>_(()=>B.get().__INTERNAL__.version.value)),G=U;B.get().__INTERNAL__.setRuntimeOptions({name:e.name,preserve:e.preserve,validateTrigger:se(e.validateTrigger),validateMessages:{...W,...e.validateMessages},scrollToFirstError:e.scrollToFirstError,onValuesChange:e.onValuesChange,onFieldsChange:e.onFieldsChange,onFinish:e.onFinish,onFinishFailed:e.onFinishFailed}),N.current!==B.get()&&(P.current?.(),N.current=B.get(),P.current=B.get().__INTERNAL__.subscribe(()=>{R(L.value+1)}));let K=t=>{t.preventDefault(),e.onSubmit?.(t),B.get().submit()};v(()=>{H.get()&&B.get().__INTERNAL__.emitUpdate()}),n(()=>{P.current?.(),P.current=null,N.current=void 0});let q=()=>(j(`useSetup:0:0:dup2`,()=>T(()=>(G.get(),{}))),typeof e.render==`function`?F(C,{children:e.render(B.get())}):typeof e.children==`function`&&e.children.kind!==`block-factory`?F(C,{children:e.children(B.get())}):F(I,{source:k.get()}));return{__rue_rest_omit_0:t,__rue_rest_omit_1:r,__rue_rest_omit_2:o,__rue_rest_omit_3:c,__rue_rest_omit_4:l,__rue_rest_omit_5:u,__rue_rest_omit_6:d,__rue_rest_omit_7:f,__rue_rest_omit_8:p,__rue_rest_omit_9:m,__rue_rest_omit_10:h,__rue_rest_omit_11:g,__rue_rest_omit_12:y,__rue_rest_omit_13:b,__rue_rest_omit_14:x,__rue_rest_omit_15:S,__rue_rest_omit_16:w,__rue_rest_omit_17:E,rest:D,slotSource:O,internalFormRef:A,rootElementRef:M,subscriptionFormRef:N,unsubscribeRenderRef:P,renderVersion:L,setRenderVersion:R,resolvedForm:z,initializedNow:V,formVersionSnapshot:U,handleNativeSubmit:K,resolveContent:q,content:q()}}));if((e.component===void 0?`form`:e.component)===!1)return oe;let X={...V,ref:e=>{K.current=e,ne.get().__INTERNAL__.setRootElement(e)},onSubmit:(e.component===void 0?`form`:e.component)===`form`?ae:void 0,className:G(`rue-form`,(e.layout===void 0?`horizontal`:e.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,e.className),style:e.style,"data-rue-form":`true`};if((e.component===void 0?`form`:e.component)===`form`)return b(e=>{let n=c(`form`,e);u(()=>{x(n,X)});let i=l(`rue:slot:anchor`);return r(n,i),u(()=>{let e=(ee.value,Y());t(()=>D(e,n,i))}),n});if((e.component===void 0?`form`:e.component)===`div`)return b(e=>{let n=c(`div`,e);u(()=>{x(n,X)});let i=l(`rue:slot:anchor`);return r(n,i),u(()=>{let e=(ee.value,Y());t(()=>D(e,n,i))}),n});if((e.component===void 0?`form`:e.component)===`section`)return b(e=>{let n=c(`section`,e);u(()=>{x(n,X)});let i=l(`rue:slot:anchor`);return r(n,i),u(()=>{let e=(ee.value,Y());t(()=>D(e,n,i))}),n});if(typeof(e.component===void 0?`form`:e.component)==`string`)return A(e.component===void 0?`form`:e.component,X,(ee.value,Y()));let Z=e.component===void 0?`form`:e.component;return b(e=>{let n=f(),i=l(`rue:component:anchor`);return r(n,i),u(()=>{let e=k(Z,{...X,children:(ee.value,Y())});t(()=>D(e,n,i))}),n})},{Item:e=>{let{slotSource:o,formInstance:m,entityIdRef:g,unregisterRef:x,subscriptionFormRef:w,unsubscribeRenderRef:k,renderVersion:A,setRenderVersion:M,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:z,latestPropsRef:B,noStyleHostRef:V,controlHostRef:H,helpHostRef:W,feedbackHostRef:K,namePath:te,nameKey:ne,layout:re,required:ie,labelAlign:ae,labelWrap:Y,labelCol:oe,wrapperCol:X,controlId:Z,getRenderState:ce,renderManagedContent:le,assignControlHost:ue}=j(`useSetup:0:0:dup1`,()=>T(()=>{let o=j(`computed:1:2`,()=>_(()=>s()?.propsRO??{children:e.children})),f=o,m=j(`computed:1:3`,()=>_(()=>e.form)),h=m,g=j(`useRef:1:4`,()=>a()),x=j(`useRef:1:5`,()=>a(null)),w=j(`useRef:1:6`,()=>a(void 0)),T=j(`useRef:1:7`,()=>a(null)),[E,k]=j(`useState:1:8`,()=>i(0,{kind:`ref`})),A=j(`useRef:1:9`,()=>a()),M=j(`useRef:1:10`,()=>a()),N=j(`useRef:1:11`,()=>a()),L=j(`useRef:1:12`,()=>a(e)),R=j(`useRef:1:13`,()=>a(null)),z=j(`useRef:1:14`,()=>a(null)),B=j(`useRef:1:15`,()=>a(null)),V=j(`useRef:1:16`,()=>a(null));if(L.current=e,g.current||=`rue-form-item-${U++}`,e.name!=null&&!h.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let H=j(`computed:1:17`,()=>_(()=>e.name==null?void 0:J(e.name))),W=H,G=j(`computed:1:18`,()=>_(()=>W.get()?ee(W.get()):void 0)),K=G,te=j(`computed:1:19`,()=>_(()=>e.layout??`horizontal`)),ne=j(`computed:1:20`,()=>_(()=>me(e.required,e.rules))),re=j(`computed:1:21`,()=>_(()=>e.labelAlign??`right`)),ie=j(`computed:1:22`,()=>_(()=>e.labelCol)),ae=j(`computed:1:23`,()=>_(()=>e.wrapperCol)),Y=j(`computed:1:24`,()=>_(()=>e.htmlFor??(W.get()?W.get().map(e=>String(e)).join(`__`):void 0))),oe=Y;if(W.get()&&h.get()&&N.current!==K.get()){let t=L.current??e;x.current?.(),x.current=h.get().__INTERNAL__.registerField({id:g.current,kind:`item`,getNamePath:()=>W.get(),getRules:()=>t.rules??[],getRequired:()=>t.required,getLabel:()=>t.label,getMessageVariables:()=>t.messageVariables,getValidateTrigger:()=>se(t.validateTrigger),getDependencies:()=>(t.dependencies??[]).map(e=>J(e)),getInitialValue:()=>t.initialValue,getPreserve:()=>t.preserve}),N.current=K.get()}let X=()=>{let t=h.get()?.getFieldsValue(!0)??{},n=W.get()&&h.get()?h.get().__INTERNAL__.getMeta(W.get()):null;return{allValues:t,meta:n,currentValue:W.get()&&h.get()?h.get().getFieldValue(W.get()):void 0,triggerName:e.trigger??`onChange`,validateTrigger:se(e.validateTrigger),status:e.validateStatus??(n?.validating?`validating`:n?.errors.length?`error`:n?.warnings.length?`warning`:n?.touched&&(e.rules?.length??0)>0?`success`:void 0)}},Z=()=>{let{allValues:n,meta:i,currentValue:a,triggerName:o,validateTrigger:s,status:d}=X(),m=e.render??e.children,g;if(typeof m==`function`&&m.kind!==`block-factory`&&W.get()&&h.get()&&!e.shouldUpdate){let t={...e.getValueProps?e.getValueProps(a):{[e.valuePropName??`value`]:e.valuePropName===`checked`?!!a:a},id:oe.get()};t[o]=(...t)=>{let n=e.getValueFromEvent?e.getValueFromEvent(...t):ge(e.valuePropName??`value`,...t),r=e.normalize?e.normalize(n,a,h.get().getFieldsValue(!0)):n;h.get().__INTERNAL__.updateValueFromControl(W.get(),r,{touch:!0,triggerName:o})},s.filter(e=>e!==o).forEach(e=>{t[e]=(...t)=>{h.get().__INTERNAL__.validateFieldByPath(W.get(),e)}}),g=m(t,{value:a,touched:i?.touched??!1,validating:i?.validating??!1,errors:i?.errors??[],warnings:i?.warnings??[],status:d},h.get())}else typeof m==`function`&&m.kind!==`block-factory`&&(!W.get()||e.shouldUpdate)?(((typeof e.shouldUpdate==`function`?e.shouldUpdate(M.current??n,n):e.shouldUpdate===!0||A.current===void 0)||A.current===void 0)&&(A.current=m(n,h.get())),M.current=q(n),g=A.current):g=F(I,{source:f.get()});if(e.noStyle){R.current&&y(F(C,{children:g}),R.current);return}z.current&&y(F(C,{children:g}),z.current),B.current&&y(e.help===void 0?i&&(i.errors.length>0||i.warnings.length>0)?P(`ul`,{className:`mt-2 grid gap-1 text-xs`,children:[i.errors.map((e,n)=>b(i=>{let a=c(`li`,i);u(()=>{p(a,`key`,String(`error-${n}`))}),O(a,`text-error`);let o=l(`rue:slot:anchor`);return r(a,o),u(()=>{let n=e;t(()=>D(n,a,o))}),a})),i.warnings.map((e,n)=>b(i=>{let a=c(`li`,i);u(()=>{p(a,`key`,String(`warning-${n}`))}),O(a,`text-warning`);let o=l(`rue:slot:anchor`);return r(a,o),u(()=>{let n=e;t(()=>D(n,a,o))}),a}))]}):F(C,{}):F(C,{children:e.help}),B.current),V.current&&y(e.hasFeedback?F(C,{children:_e(d)}):F(C,{}),V.current)};return w.current!==h.get()&&(T.current?.(),w.current=h.get(),T.current=h.get()?h.get().__INTERNAL__.subscribe(()=>{k(E.value+1)}):null),j(`watch:1:25`,()=>d(()=>E.value,()=>{Z()},{immediate:!0})),n(()=>{x.current?.(),x.current=null,T.current?.(),T.current=null,w.current=void 0}),v(()=>{Z()}),S(()=>{Z()}),{slotSource:o,formInstance:m,entityIdRef:g,unregisterRef:x,subscriptionFormRef:w,unsubscribeRenderRef:T,renderVersion:E,setRenderVersion:k,renderCacheRef:A,previousValuesRef:M,lastRegisteredKeyRef:N,latestPropsRef:L,noStyleHostRef:R,controlHostRef:z,helpHostRef:B,feedbackHostRef:V,namePath:H,nameKey:G,layout:te,required:ne,labelAlign:re,labelWrap:!1,labelCol:ie,wrapperCol:ae,controlId:Y,getRenderState:X,renderManagedContent:Z,assignControlHost:e=>{z.current=e,e&&queueMicrotask(()=>{Z()})}}}));if(e.noStyle)return b(e=>{let t=c(`div`,e),n=N(t,()=>V);return E(()=>{n()}),h(t,{display:`contents`}),t});let de=e.label===void 0?null:P(`label`,{className:G(`text-[0.95rem] leading-7 font-medium text-base-content/78`,ae.get()===`left`?`text-left`:`text-right md:text-right`,Y?`whitespace-normal`:`md:whitespace-nowrap`),style:{width:re.get()===`horizontal`?ve(oe.get()):void 0},for:Z.get(),children:[F(`span`,{children:e.label}),re.get()===`horizontal`&&e.colon!==!1?F(`span`,{className:`ml-1 text-base-content/45`,children:`:`}):null,xe(e.label,ie.get(),!0)]}),fe=re.get()===`horizontal`&&X.get()?.offset?{marginLeft:`${X.get().offset/24*100}%`,width:ve(X.get())}:re.get()===`horizontal`?{width:ve(X.get())}:void 0;return b(n=>{let i=c(`div`,n);u(()=>{O(i,G(`rue-form-item`,e.hidden?`hidden`:void 0,re.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,e.className))}),u(()=>{let t=e.style;h(i,t)});let a=l(`rue:slot:anchor`);r(i,a),u(()=>{let e=de;t(()=>D(e,i,a))});let o=c(`div`,i);r(i,o),O(o,`min-w-0 flex-1`),u(()=>{h(o,fe)});let s=c(`div`,o);r(o,s),O(s,`flex items-start gap-3`);let d=c(`div`,s);r(s,d),u(()=>{p(d,`key`,String(ne.get()??`__rue_form_item_control__`))}),O(d,`min-w-0 flex-1`);let m=N(d,()=>ue);E(()=>{m()});let g=l(`rue:slot:anchor`);r(s,g),u(()=>{let n=e.hasFeedback?b(()=>{let e=f(),t=c(`span`,e);r(e,t),O(t,`mt-3 shrink-0`);let n=N(t,()=>K);return E(()=>{n()}),e}):``;t(()=>D(n,s,g))});let _=c(`div`,o);r(o,_),O(_,`mt-3`);let v=N(_,()=>W);E(()=>{v()});let y=l(`rue:slot:anchor`);return r(o,y),u(()=>{let n=e.extra==null?``:b(()=>{let n=f(),i=c(`div`,n);r(n,i),O(i,`mt-3 text-[0.8rem] leading-6 text-base-content/55`);let a=l(`rue:slot:anchor`);return r(i,a),u(()=>{let n=e.extra;t(()=>D(n,i,a))}),n});t(()=>D(n,o,y))}),i})},List:e=>{let{form:t,name:r,children:o,render:s,initialValue:c,rules:l}=e,u=t;if(!u)throw Error(`Form.List 需要显式传入 form`);let d=s??o;if(typeof d!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let f=J(r),p=j(`useRef:1:26`,()=>a()),m=j(`useRef:1:27`,()=>a(null)),h=j(`useRef:1:28`,()=>a(void 0)),g=j(`useRef:1:29`,()=>a(null)),[_,v]=j(`useState:1:30`,()=>i(0,{kind:`ref`})),y=j(`useRef:1:31`,()=>a(l)),b=j(`useRef:1:32`,()=>a(c)),x=j(`useRef:1:33`,()=>a([])),S=j(`useRef:1:34`,()=>a(0));return y.current=l,b.current=c,p.current||=`rue-form-list-${U++}`,m.current||=u.__INTERNAL__.registerField({id:p.current,kind:`list`,getNamePath:()=>f,getRules:()=>y.current??[],getRequired:()=>void 0,getLabel:()=>f[f.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>b.current,getPreserve:()=>!0}),h.current!==u&&(g.current?.(),h.current=u,g.current=u.__INTERNAL__.subscribe(()=>{v(_.value+1)})),n(()=>{m.current?.(),m.current=null,g.current?.(),g.current=null,h.current=void 0}),(()=>{_.value;let e=u.getFieldValue(f),t=Array.isArray(e)?e:[],n=u.__INTERNAL__.getMeta(f),r=x.current??[],i=S.current??0;x.current??=r,S.current??=i;let a=()=>{let e=S.current??0;return S.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(x.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),u.__INTERNAL__.updateListValue(f,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),u.__INTERNAL__.updateListValue(f,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),u.__INTERNAL__.updateListValue(f,i)}},s=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return F(`div`,{"data-rue-form-list-shell":`true`,children:d(s,o,{errors:n.errors,warnings:n.warnings})},s.map(e=>`${String(e.fieldKey)}:${e.name}`).join(`|`))})()},ErrorList:t=>{let{list:n}=j(`useSetup:0:0`,()=>T(()=>({list:j(`computed:1:1`,()=>_(()=>[...t.errors??[],...t.warnings??[]].filter(e=>e!=null)))})));return n.get().length?b(n=>{let i=c(`ul`,n);u(()=>{O(i,G(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,t.className))}),u(()=>{let e=t.style;h(i,e)});let a=l(`rue:list:start`),o=l(`rue:list:end`);r(i,a),r(i,o);let s=new Map;u(()=>{s=M({items:(t.errors??[])||[],getKey:(e,t)=>`error-${t}`,elements:s,parent:a.parentNode,before:o,singleRoot:!0,start:a,renderItem:(e,t,n,i,a)=>{D(b(()=>{let t=f(),n=c(`li`,t);r(t,n),u(()=>{p(n,`key`,String(`error-${a}`))}),O(n,`text-error`);let i=g(n);return r(n,i),u(()=>{w(i,e)}),t}),t,n)}})}),r(i,e(` `));let d=l(`rue:list:start`),m=l(`rue:list:end`);r(i,d),r(i,m);let _=new Map;return u(()=>{_=M({items:(t.warnings??[])||[],getKey:(e,t)=>`warning-${t}`,elements:_,parent:d.parentNode,before:m,singleRoot:!0,start:d,renderItem:(e,t,n,i,a)=>{D(b(()=>{let t=f(),n=c(`li`,t);r(t,n),u(()=>{p(n,`key`,String(`warning-${a}`))}),O(n,`text-warning`);let i=g(n);return r(n,i),u(()=>{w(i,e)}),t}),t,n)}})}),i}):null},useForm:e=>{let t=j(`useRef:1:38`,()=>a());return t.current||=e??be(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,t)=>{let r=s()?.propsRO?.[H],o=t??r?.form,[c,l]=j(`useState:1:35`,()=>i(0,{kind:`ref`})),u=j(`useRef:1:36`,()=>a(void 0)),d=j(`useRef:1:37`,()=>a(null));if(u.current!==o&&(d.current?.(),u.current=o,d.current=o?o.__INTERNAL__.subscribe(()=>{l(c.value+1)}):null),n(()=>{d.current?.(),d.current=null,u.current=void 0}),o)return c.value,o.getFieldValue(e)}}),Se=n=>b(i=>{let a=c(`div`,i);O(a,`not-prose my-6 lg:my-8`);let o=c(`h3`,a);r(a,o),O(o,`mt-0 mb-3 text-base font-semibold text-base-content`);let s=l(`rue:slot:anchor`);r(o,s),u(()=>{let e=n.title;t(()=>D(e,o,s))});let d=c(`div`,a);r(a,d),O(d,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=c(`table`,d);r(d,m),O(m,`table table-zebra`);let h=c(`thead`,m);r(m,h);let g=c(`tr`,h);r(h,g);let _=c(`th`,g);r(g,_),r(_,e(`属性`));let v=c(`th`,g);r(g,v),r(v,e(`说明`));let y=c(`th`,g);r(g,y),r(y,e(`类型`));let x=c(`th`,g);r(g,x),r(x,e(`默认值`));let S=c(`tbody`,m);r(m,S);let C=l(`rue:list:start`),w=l(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return u(()=>{T=M({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,a,o)=>{D(b(()=>{let n=f(),i=c(`tr`,n);r(n,i),u(()=>{p(i,`key`,String(e.prop))});let a=c(`td`,i);r(i,a);let o=c(`code`,a);r(a,o);let s=l(`rue:slot:anchor`);r(o,s),u(()=>{let n=e.prop;t(()=>D(n,o,s))});let d=c(`td`,i);r(i,d);let m=l(`rue:slot:anchor`);r(d,m),u(()=>{let n=e.description;t(()=>D(n,d,m))});let h=c(`td`,i);r(i,h);let g=c(`code`,h);r(h,g);let _=l(`rue:slot:anchor`);r(g,_),u(()=>{let n=e.type;t(()=>D(n,g,_))});let v=c(`td`,i);r(i,v);let y=c(`code`,v);r(v,y);let b=l(`rue:slot:anchor`);return r(y,b),u(()=>{let n=e.defaultValue;t(()=>D(n,y,b))}),n}),n,i)}})}),a}),Ce=e=>b(n=>{let i=c(`div`,n);O(i,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let a=l(`rue:slot:anchor`);r(i,a),u(()=>{let n=e.eyebrow?b(()=>{let n=f(),i=c(`div`,n);r(n,i),O(i,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let a=l(`rue:slot:anchor`);return r(i,a),u(()=>{let n=e.eyebrow;t(()=>D(n,i,a))}),n}):``;t(()=>D(n,i,a))});let o=c(`h3`,i);r(i,o),O(o,`mt-3 mb-0 text-lg font-semibold text-base-content`);let s=l(`rue:slot:anchor`);r(o,s),u(()=>{let n=e.title;t(()=>D(n,o,s))});let d=c(`p`,i);r(i,d),O(d,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let m=l(`rue:slot:anchor`);r(d,m),u(()=>{let n=e.description;t(()=>D(n,d,m))});let h=l(`rue:slot:anchor`);return r(i,h),u(()=>{let n=e.items?.length?b(()=>{let t=f(),n=c(`ul`,t);r(t,n),O(n,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let i=l(`rue:list:start`),a=l(`rue:list:end`);r(n,i),r(n,a);let o=new Map;return u(()=>{o=M({items:e.items||[],getKey:(e,t)=>e,elements:o,parent:n,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,n,i,a)=>{D(b(()=>{let t=f(),n=c(`li`,t);r(t,n),u(()=>{p(n,`key`,String(e))});let i=g(n);return r(n,i),u(()=>{w(i,e)}),t}),t,n)}})}),t}):``;t(()=>D(n,i,h))}),i}),$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},we=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Te=()=>{let{initialValues:n,draft:i,result:a}=j(`useSetup:0:0`,()=>T(()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0};return{initialValues:e,draft:j(`ref:1:0`,()=>o($(e))),result:j(`ref:1:1`,()=>o(`等待提交，右侧会展示 payload 或校验摘要。`))}}));return b(o=>{let s=c(`div`,o);O(s,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=l(`rue:component:anchor`);r(s,d),u(()=>{let e=k(Q,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:n,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{i.value=$(t)},onFinish:e=>{a.value=`提交成功
`+$(e)},onFinishFailed:e=>{a.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>P(C,{children:[F(Q.Item,{form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>F(z,{...e,placeholder:`输入项目名称`})}),F(Q.Item,{form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>F(z,{...e,placeholder:`team@rue.dev`})}),F(Q.Item,{form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>F(R,{...e,children:`允许直接覆盖 staging 配置`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存表单`}),F(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`重置`})]})]})});t(()=>D(e,s,d))});let f=c(`div`,s);r(s,f),O(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let p=c(`div`,f);r(f,p),O(p,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(p,e(`Submit result`));let m=c(`p`,f);r(f,m),O(m,`mt-3 mb-0 text-sm text-base-content/65`),r(m,e(`这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。`));let h=c(`div`,f);r(f,h),O(h,`mt-4 grid gap-4`);let _=c(`div`,h);r(h,_),O(_,`rounded-[1.25rem] bg-base-200/70 p-4`);let v=c(`div`,_);r(_,v),O(v,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(v,e(`Live draft`));let y=c(`pre`,_);r(_,y),O(y,`mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80`);let b=g(y);r(y,b),u(()=>{w(b,i.value)});let x=c(`div`,h);r(h,x),O(x,`rounded-[1.25rem] bg-neutral p-4 text-neutral-content`);let S=c(`div`,x);r(x,S),O(S,`text-xs uppercase tracking-[0.22em] text-neutral-content/60`),r(S,e(`Last submit`));let T=c(`pre`,x);r(x,T),O(T,`mt-3 whitespace-pre-wrap break-words text-xs leading-6`);let E=g(T);return r(T,E),u(()=>{w(E,a.value)}),s})},Ee=()=>{let{form:n,role:i,region:a,notes:s,activity:d}=j(`useSetup:0:0:dup1`,()=>T(()=>{let[e]=Q.useForm();return{form:e,role:Q.useWatch(`role`,e)??`viewer`,region:Q.useWatch(`region`,e)??`cn-hz`,notes:Q.useWatch(`notes`,e)??``,activity:j(`ref:1:2`,()=>o(`等待实例方法操作。`))}}));return b(o=>{let f=c(`div`,o);O(f,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let p=l(`rue:component:anchor`);r(f,p),u(()=>{let e=k(Q,{form:n,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{d.value=`submit()
`+$(e)},onFinishFailed:e=>{d.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>P(C,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`viewer / editor / admin`})}),F(Q.Item,{form:e,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`cn-hz`})})]}),F(Q.Item,{form:e,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>F(z,{...e,placeholder:`写入审批说明或 rollout 策略`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,onClick:()=>{n.setFieldValue(`role`,`editor`),d.value=`setFieldValue('role', 'editor')`},children:`设为 editor`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{n.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),d.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:`填充预设`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{n.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),d.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:`填入异常值`}),F(L,{size:`sm`,type:`text`,onClick:()=>{n.resetFields(),d.value=`resetFields()`},children:`恢复初始值`}),F(L,{size:`sm`,color:`primary`,onClick:()=>{n.submit()},children:`程序化提交`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{n.validateFields().then(e=>{d.value=`validateFields()
`+$(e)}).catch(e=>{d.value=`validateFields() failed
`+$(e.errorFields)})},children:`validateFields`})]})]})});t(()=>D(e,f,p))});let m=c(`div`,f);r(f,m),O(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=c(`div`,m);r(m,h),O(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,e(`Reactive summary`));let _=c(`p`,m);r(m,_),O(_,`mt-3 mb-0 text-sm text-base-content/65`),r(_,e(`这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。`));let v=c(`div`,m);r(m,v),O(v,`mt-4 grid gap-3`);let y=c(`div`,v);r(v,y),O(y,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let b=c(`div`,y);r(y,b),O(b,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(b,e(`role`));let x=c(`div`,y);r(y,x),O(x,`mt-2 text-lg font-semibold text-base-content`);let S=g(x);r(x,S),u(()=>{w(S,String(i))});let T=c(`div`,v);r(v,T),O(T,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let E=c(`div`,T);r(T,E),O(E,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(E,e(`region`));let A=c(`div`,T);r(T,A),O(A,`mt-2 text-lg font-semibold text-base-content`);let j=g(A);r(A,j),u(()=>{w(j,String(a))});let M=c(`div`,v);r(v,M),O(M,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let N=c(`div`,M);r(M,N),O(N,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(N,e(`notes`));let I=c(`div`,M);r(M,I),O(I,`mt-2 text-sm leading-6 text-base-content/80`);let R=g(I);r(I,R),u(()=>{w(R,String(s)||`未填写`)});let B=c(`pre`,m);r(m,B),O(B,`mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6`);let V=g(B);return r(B,V),u(()=>{w(V,d.value)}),f})},De=()=>{let{form:n,password:i,confirm:a,website:s,status:d}=j(`useSetup:0:0:dup2`,()=>T(()=>{let[e]=Q.useForm();return{form:e,password:Q.useWatch(`password`,e)??``,confirm:Q.useWatch(`confirm`,e)??``,website:Q.useWatch(`website`,e)??``,status:j(`ref:1:3`,()=>o(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`))}}));return b(o=>{let f=c(`div`,o);O(f,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let p=l(`rue:component:anchor`);r(f,p),u(()=>{let e=k(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{d.value=`提交成功
`+$(e)},onFinishFailed:e=>{d.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>P(C,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`release-admin`})}),F(Q.Item,{form:e,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>F(z,{...e,placeholder:`https://prod.rue.dev`})})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>F(z,{...e,placeholder:`至少 8 位`})}),F(Q.Item,{form:e,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>F(z,{...e,placeholder:`再次输入密码`})})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行校验`}),F(L,{type:`outlined`,onClick:()=>n.resetFields(),children:`清空状态`})]})]})});t(()=>D(e,f,p))});let m=c(`div`,f);r(f,m),O(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=c(`div`,m);r(m,h),O(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,e(`Validation notes`));let _=c(`p`,m);r(m,_),O(_,`mt-3 mb-0 text-sm text-base-content/65`),r(_,e("这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。"));let v=c(`div`,m);r(m,v),O(v,`mt-4 grid gap-3`);let y=c(`div`,v);r(v,y),O(y,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let b=c(`div`,y);r(y,b),O(b,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(b,e(`Password match`));let x=c(`div`,y);r(y,x),O(x,`mt-2 text-base font-semibold text-base-content`);let S=g(x);r(x,S),u(()=>{w(S,i&&a?i===a?`已匹配`:`未匹配`:`等待输入`)});let T=c(`div`,v);r(v,T),O(T,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let E=c(`div`,T);r(T,E),O(E,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(E,e(`Website warning`));let A=c(`div`,T);r(T,A),O(A,`mt-2 text-base font-semibold text-base-content`);let j=g(A);r(A,j),u(()=>{w(j,s?String(s).startsWith(`https://`)?`格式建议通过`:`建议补上 https://`:`未填写`)});let M=c(`pre`,m);r(m,M),O(M,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let N=g(M);return r(M,N),u(()=>{w(N,d.value)}),f})},Oe=()=>{let{form:n,initialValues:i,issueId:a,slug:s,branch:d,snapshot:f}=j(`useSetup:0:0:dup3`,()=>T(()=>{let[e]=Q.useForm(),t={issueId:`2048`,slug:`release-planning`,branch:`main`};return{form:e,initialValues:t,issueId:Q.useWatch(`issueId`,e)??``,slug:Q.useWatch(`slug`,e)??``,branch:Q.useWatch(`branch`,e)??``,snapshot:j(`ref:1:4`,()=>o($(t)))}}));return b(o=>{let p=c(`div`,o);O(p,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let m=l(`rue:component:anchor`);r(p,m),u(()=>{let e=k(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:i,onValuesChange:(e,t)=>{f.value=$(t)},onFinish:e=>{f.value=`提交成功
`+$(e)},render:e=>P(C,{children:[F(Q.Item,{form:e,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>F(z,{...e,placeholder:`#2048`})}),F(Q.Item,{form:e,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>F(z,{...e,placeholder:`release-planning`})}),F(Q.Item,{form:e,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>F(z,{...e,placeholder:`main / release/v1-2`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`应用转换`}),F(L,{type:`outlined`,onClick:()=>{n.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:`填充示例`})]})]})});t(()=>D(e,p,m))});let h=c(`div`,p);r(p,h),O(h,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let _=c(`div`,h);r(h,_),O(_,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(_,e(`Store snapshot`));let v=c(`p`,h);r(h,v),O(v,`mt-3 mb-0 text-sm text-base-content/65`),r(v,e("这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。"));let y=c(`div`,h);r(h,y),O(y,`mt-4 grid gap-3`);let b=c(`div`,y);r(y,b),O(b,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let x=c(`div`,b);r(b,x),O(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(x,e(`issueId`));let S=c(`div`,b);r(b,S),O(S,`mt-2 text-lg font-semibold text-base-content`);let T=g(S);r(S,T),u(()=>{w(T,String(a)||`空`)});let E=c(`div`,y);r(y,E),O(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=c(`div`,E);r(E,A),O(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(A,e(`slug`));let j=c(`div`,E);r(E,j),O(j,`mt-2 text-lg font-semibold text-base-content`);let M=g(j);r(j,M),u(()=>{w(M,String(s)||`空`)});let N=c(`div`,y);r(y,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=c(`div`,N);r(N,I),O(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(I,e(`branch`));let R=c(`div`,N);r(N,R),O(R,`mt-2 text-lg font-semibold text-base-content`);let B=g(R);r(R,B),u(()=>{w(B,String(d)||`空`)});let V=c(`pre`,h);r(h,V),O(V,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let H=g(V);return r(V,H),u(()=>{w(H,f.value)}),p})},ke=()=>{let{form:n,enableCanary:i,publishMode:a,batchSize:s,approveBy:d,result:f}=j(`useSetup:0:0:dup4`,()=>T(()=>{let[e]=Q.useForm();return{form:e,enableCanary:!!Q.useWatch(`enableCanary`,e),publishMode:Q.useWatch(`publishMode`,e)??`manual`,batchSize:Q.useWatch(`batchSize`,e)??``,approveBy:Q.useWatch(`approveBy`,e)??``,result:j(`ref:1:5`,()=>o(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`))}}));return b(o=>{let p=c(`div`,o);O(p,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let m=l(`rue:component:anchor`);r(p,m),u(()=>{let e=k(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{f.value=`提交成功
`+$(e)},render:e=>P(C,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`gateway`})}),F(Q.Item,{form:e,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`manual / auto`})})]}),F(Q.Item,{form:e,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>F(R,{...e,children:`开启 canary rollout`})}),F(Q.Item,{shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:t=>t.enableCanary?P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5`,children:[F(`div`,{className:`mb-4 text-sm font-medium text-base-content`,children:`Canary settings`}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-ops`})})]}),t.publishMode===`auto`?F(`div`,{className:`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,children:`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`}):null]}):F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,children:`未开启灰度发布，额外字段不会挂载，也不会参与校验。`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存发布策略`}),F(L,{type:`outlined`,onClick:()=>{n.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:`套用 canary 模板`})]})]})});t(()=>D(e,p,m))});let h=c(`div`,p);r(p,h),O(h,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let _=c(`div`,h);r(h,_),O(_,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(_,e(`Conditional summary`));let v=c(`p`,h);r(h,v),O(v,`mt-3 mb-0 text-sm text-base-content/65`),r(v,e("这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。"));let y=c(`div`,h);r(h,y),O(y,`mt-4 grid gap-3`);let b=c(`div`,y);r(y,b),O(b,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let x=c(`div`,b);r(b,x),O(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(x,e(`enableCanary`));let S=c(`div`,b);r(b,S),O(S,`mt-2 text-lg font-semibold text-base-content`);let T=g(S);r(S,T),u(()=>{w(T,i?`true`:`false`)});let E=c(`div`,y);r(y,E),O(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=c(`div`,E);r(E,A),O(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(A,e(`publishMode`));let j=c(`div`,E);r(E,j),O(j,`mt-2 text-lg font-semibold text-base-content`);let M=g(j);r(j,M),u(()=>{w(M,String(a))});let N=c(`div`,y);r(y,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=c(`div`,N);r(N,I),O(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(I,e(`Conditional fields`));let B=c(`div`,N);r(N,B),O(B,`mt-2 text-sm leading-6 text-base-content/80`),r(B,e(`batchSize: `));let V=g(B);r(B,V),u(()=>{w(V,String(s)||`未挂载`)}),r(B,c(`br`,B)),r(B,e(`approveBy: `));let H=g(B);r(B,H),u(()=>{w(H,String(d)||`未挂载`)});let U=c(`pre`,h);r(h,U),O(U,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let W=g(U);return r(U,W),u(()=>{w(W,f.value)}),p})},Ae=()=>{let{form:n,host:i,path:a,saveLog:s,normalizedPath:d,previewUrl:f}=j(`useSetup:0:0:dup5`,()=>T(()=>{let[e]=Q.useForm(),t=String(Q.useWatch(`host`,e)??`api.rue.dev`),n=String(Q.useWatch(`path`,e)??`release-hooks`),r=j(`ref:1:6`,()=>o(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`)),i=n?n.replace(/^\/+/,``):``;return{form:e,host:t,path:n,saveLog:r,normalizedPath:i,previewUrl:`https://${t}:443/hooks/${i}`}}));return b(i=>{let a=c(`div`,i);O(a,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let o=l(`rue:component:anchor`);r(a,o),u(()=>{let e=k(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{s.value=`保存复合控件
`+$(e)},render:e=>P(C,{children:[P(`div`,{className:`grid gap-6`,children:[P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`回调地址`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`https://`}),F(Q.Item,{form:e,name:`host`,noStyle:!0,render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`api.rue.dev`})})}),F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`:443`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。`})]}),P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`资源路径`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`/hooks/`}),F(Q.Item,{form:e,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`release-hooks`})})}),F(`span`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`POST target`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。`})]})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存复合地址`}),F(L,{type:`outlined`,onClick:()=>{n.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:`填入 staging`})]})]})});t(()=>D(e,a,o))});let d=c(`div`,a);r(a,d),O(d,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let p=c(`div`,d);r(d,p),O(p,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(p,e(`Composite preview`));let m=c(`p`,d);r(d,m),O(m,`mt-3 mb-0 text-sm text-base-content/65`),r(m,e(`这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。`));let h=c(`div`,d);r(d,h),O(h,`mt-4 rounded-[1.25rem] bg-base-200/70 p-4`);let _=c(`div`,h);r(h,_),O(_,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(_,e(`Resolved URL`));let v=c(`div`,h);r(h,v),O(v,`mt-3 break-all text-lg font-semibold text-base-content`);let y=l(`rue:slot:anchor`);r(v,y),u(()=>{let e=f;t(()=>D(e,v,y))});let b=c(`div`,d);r(d,b),O(b,`mt-4 grid gap-3 text-sm text-base-content/75`);let x=c(`div`,b);r(b,x),O(x,`rounded-[1.25rem] bg-base-200/70 p-4`),r(x,e("`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。"));let S=c(`div`,b);r(b,S),O(S,`rounded-[1.25rem] bg-base-200/70 p-4`),r(S,e(`外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。`));let T=c(`div`,b);r(b,T),O(T,`rounded-[1.25rem] bg-base-200/70 p-4`),r(T,e(`如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。`));let E=c(`pre`,d);r(d,E),O(E,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let A=g(E);return r(E,A),u(()=>{w(A,s.value)}),a})},je=()=>{let{form:n,activity:i,jumpToField:a}=j(`useSetup:0:0:dup6`,()=>T(()=>{let[e]=Q.useForm(),t=j(`ref:1:7`,()=>o(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`));return{form:e,activity:t,jumpToField:(n,r)=>{e.scrollToField(n,{block:`center`,focus:!0}),t.value=`scrollToField -> ${r}`}}}));return b(o=>{let s=c(`div`,o);O(s,`grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]`);let d=c(`div`,s);r(s,d),O(d,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let f=c(`div`,d);r(d,f),O(f,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(f,e(`Scroll actions`));let p=c(`p`,d);r(d,p),O(p,`mt-3 mb-0 text-sm text-base-content/65`),r(p,e(`这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。`));let m=c(`div`,d);r(d,m),O(m,`mt-4 grid gap-2`);let _=l(`rue:component:anchor`);r(m,_),D(k(L,{size:`sm`,onClick:()=>a(`releaseName`,`发布名称`),children:`滚到发布名称`}),m,_);let v=l(`rue:component:anchor`);r(m,v),D(k(L,{size:`sm`,type:`outlined`,onClick:()=>a([`strategy`,`batchSize`],`灰度批次`),children:`滚到灰度批次`}),m,v);let y=l(`rue:component:anchor`);r(m,y),D(k(L,{size:`sm`,type:`outlined`,onClick:()=>a([`observability`,`dashboard`],`监控看板`),children:`滚到监控看板`}),m,y);let b=l(`rue:component:anchor`);r(m,b),D(k(L,{size:`sm`,type:`outlined`,onClick:()=>a([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),m,b);let x=c(`pre`,d);r(d,x),O(x,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let S=g(x);r(x,S),u(()=>{w(S,i.value)});let T=c(`div`,s);r(s,T),O(T,`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5`);let E=c(`div`,T);r(T,E),O(E,`overflow-y-auto overscroll-contain pr-2`),h(E,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let A=l(`rue:component:anchor`);return r(E,A),u(()=>{let e=k(Q,{form:n,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{i.value=`提交成功
`+$(e)},onFinishFailed:e=>{i.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>P(C,{children:[P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 1`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`基础信息`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`2026.05 release`})}),F(Q.Item,{form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`staging`})}),F(Q.Item,{form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-captain`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 2`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`发布策略`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`15m`})}),F(Q.Item,{form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`error rate > 2%`})}),F(Q.Item,{form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`30m`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 3`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`观测与审批`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Grafana release board`})}),F(Q.Item,{form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`#release-alerts`})}),F(Q.Item,{form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`ops-squad`})}),F(Q.Item,{form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`qa-squad`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 4`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`回滚预案`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>F(z,{...e,placeholder:`RB-2026-0514`})}),F(Q.Item,{form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rollback-owner`})}),F(Q.Item,{form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`20m`})}),F(Q.Item,{form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`platform / qa / support`})})]})]}),F(`div`,{className:`sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur`,children:P(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[F(`div`,{className:`text-sm text-base-content/65`,children:`留空深层字段后点击提交，会自动滚到首个错误项。`}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{type:`outlined`,onClick:()=>a([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),F(L,{color:`primary`,htmlType:`submit`,children:`提交长表单`})]})]})})]})});t(()=>D(e,E,A))}),s})},Me=()=>{let{form:n,members:i}=j(`useSetup:0:0:dup7`,()=>T(()=>{let[e]=Q.useForm();return{form:e,members:Q.useWatch(`members`,e)??[]}}));return b(a=>{let o=c(`div`,a);O(o,`grid gap-6`);let s=c(`div`,o);r(o,s),O(s,`grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]`);let d=l(`rue:component:anchor`);r(s,d),u(()=>{let e=k(Q,{form:n,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>F(Q.List,{form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保留 2 名审批成员，才适合真实协作流程。`}}],render:(t,n,r)=>P(`div`,{className:`grid gap-4`,children:[t.length===0?F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,children:`暂无成员，点击下方按钮即可追加一组字段。`}):null,t.map((r,i)=>P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`,children:[P(`div`,{className:`mb-4 flex flex-wrap items-center justify-between gap-3`,children:[P(`div`,{children:[P(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:[`Member `,i+1]}),P(`div`,{className:`mt-1 text-sm font-medium text-base-content`,children:[`审批成员 `,i+1]})]}),P(`div`,{className:`flex flex-wrap gap-2`,children:[i>0?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name-1),children:`上移`}):null,i<t.length-1?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name+1),children:`下移`}):null,F(L,{size:`sm`,type:`text`,onClick:()=>n.remove(r.name),children:`删除`})]})]}),P(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`输入成员名称`})}),F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Owner / Reviewer / QA`})})]})]},r.key)),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,color:`primary`,onClick:()=>{n.add({name:`新成员 `+String(t.length+1),role:`QA`})},children:`新增成员`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>n.add({name:`Head reviewer`,role:`QA`},0),children:`头部插入`})]}),r.errors.length>0||r.warnings.length>0?F(Q.ErrorList,{errors:r.errors,warnings:r.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}):null]})})});t(()=>D(e,s,d))});let m=c(`div`,s);r(s,m),O(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=c(`div`,m);r(m,h),O(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,e(`List snapshot`));let _=c(`div`,m);r(m,_),O(_,`mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65`);let v=l(`rue:slot:anchor`);r(_,v),u(()=>{let e=i.length;t(()=>D(e,_,v))}),r(_,e(` members`));let y=c(`div`,m);r(m,y),O(y,`mt-4 grid gap-3`);let x=l(`rue:slot:anchor`);r(y,x),u(()=>{let n=i.length>0?b(()=>{let t=f(),n=l(`rue:list:start`),a=l(`rue:list:end`);r(t,n),r(t,a);let o=new Map;return u(()=>{o=M({items:i||[],getKey:(e,t)=>String(t),elements:o,parent:n.parentNode,before:a,singleRoot:!0,start:n,renderItem:(t,n,i,a,o)=>{D(b(()=>{let n=f(),i=c(`div`,n);r(n,i),u(()=>{p(i,`key`,String(String(o)))}),O(i,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let a=c(`div`,i);r(i,a),O(a,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(a,e(`成员 `));let s=g(a);r(a,s),u(()=>{w(s,o+1)});let l=c(`div`,i);r(i,l),O(l,`mt-2 text-base font-medium text-base-content`);let d=g(l);r(l,d),u(()=>{w(d,t?.name?String(t.name):`未命名成员`)});let m=c(`div`,i);r(i,m),O(m,`mt-1 text-xs text-base-content/55`);let h=g(m);return r(m,h),u(()=>{w(h,t?.role?String(t.role):`未分配职责`)}),n}),n,i)}})}),t}):b(()=>{let t=f(),n=c(`div`,t);return r(t,n),O(n,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),r(n,e(`当前列表为空。`)),t});t(()=>D(n,y,x))});let S=c(`div`,o);r(o,S),O(S,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let C=c(`div`,S);r(S,C),O(C,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(C,e(`List behavior`));let T=c(`div`,S);r(S,T),O(T,`mt-4 grid gap-4 md:grid-cols-3`);let E=c(`div`,T);r(T,E),O(E,`rounded-[1.25rem] bg-base-200/70 p-4`);let A=c(`div`,E);r(E,A),O(A,`text-sm font-semibold text-base-content`),r(A,e(`列表级规则`));let j=c(`p`,E);r(E,j),O(j,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(j,e(`rules 挂在 Form.List 上，校验整个 members 数组。`));let N=c(`div`,T);r(T,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4`);let I=c(`div`,N);r(N,I),O(I,`text-sm font-semibold text-base-content`),r(I,e(`重排操作`));let R=c(`p`,N);r(N,R),O(R,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(R,e(`operation.move 保持字段状态跟随成员顺序移动。`));let B=c(`div`,T);r(T,B),O(B,`rounded-[1.25rem] bg-base-200/70 p-4`);let V=c(`div`,B);r(B,V),O(V,`text-sm font-semibold text-base-content`),r(V,e(`错误出口`));let H=c(`p`,B);return r(B,H),O(H,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(H,e(`Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。`)),o})},Ne=()=>{let{form:n,keyword:i,assignee:a,repository:s,reviewer:d,includeDrafts:f,submitted:p}=j(`useSetup:0:0:dup8`,()=>T(()=>{let[e]=Q.useForm();return{form:e,keyword:Q.useWatch(`keyword`,e)??``,assignee:Q.useWatch(`assignee`,e)??``,repository:Q.useWatch(`repository`,e)??``,reviewer:Q.useWatch(`reviewer`,e)??``,includeDrafts:!!Q.useWatch(`includeDrafts`,e),submitted:j(`ref:1:8`,()=>o(`尚未执行检索。`))}}));return b(o=>{let m=c(`div`,o);O(m,`grid gap-6`);let h=l(`rue:component:anchor`);r(m,h),u(()=>{let e=k(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{p.value=$(e)},render:e=>P(C,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:[F(Q.Item,{form:e,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>F(z,{...e,placeholder:`搜索 issue / 页面 / API`})}),F(Q.Item,{form:e,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>F(z,{...e,placeholder:`team-design`})}),F(Q.Item,{form:e,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>F(z,{...e,placeholder:`infra`})})]}),P(`div`,{className:`mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4`,children:[F(Q.Item,{form:e,name:`includeDrafts`,valuePropName:`checked`,render:e=>F(R,{...e,children:`包含草稿和实验分支`})}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行搜索`}),F(L,{type:`outlined`,onClick:()=>n.resetFields(),children:`清空条件`}),F(L,{type:`text`,onClick:()=>{n.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:`填入示例`})]})]})]})});t(()=>D(e,m,h))});let _=c(`div`,m);r(m,_),O(_,`grid gap-4 lg:grid-cols-2`);let v=c(`div`,_);r(_,v),O(v,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let y=c(`div`,v);r(v,y),O(y,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(y,e(`Query preview`));let b=c(`p`,v);r(v,b),O(b,`mt-3 mb-0 text-sm text-base-content/65`),r(b,e(`这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。`));let x=c(`pre`,v);r(v,x),O(x,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let S=l(`rue:slot:anchor`);r(x,S),u(()=>{let e=we({keyword:String(i),repository:String(s),assignee:String(a),reviewer:String(d),includeDrafts:f})||`暂无 query string`;t(()=>D(e,x,S))});let T=c(`div`,v);r(v,T),O(T,`mt-4 grid gap-3 text-sm text-base-content/80`);let E=c(`div`,T);r(T,E),O(E,`rounded-[1.25rem] bg-base-200/70 p-4`),r(E,e(`关键词：`));let A=g(E);r(E,A),u(()=>{w(A,String(i)||`未填写`)});let j=c(`div`,T);r(T,j),O(j,`rounded-[1.25rem] bg-base-200/70 p-4`),r(j,e(`仓库：`));let M=g(j);r(j,M),u(()=>{w(M,String(s)||`未填写`)});let N=c(`div`,T);r(T,N),O(N,`rounded-[1.25rem] bg-base-200/70 p-4`),r(N,e(`负责人 / 评审人：`));let I=g(N);r(N,I),u(()=>{w(I,String(a)||`未填写`)}),r(N,e(` / `));let B=g(N);r(N,B),u(()=>{w(B,String(d)||`未填写`)});let V=c(`div`,T);r(T,V),O(V,`rounded-[1.25rem] bg-base-200/70 p-4`),r(V,e(`包含草稿：`));let H=g(V);r(V,H),u(()=>{w(H,f?`是`:`否`)});let U=c(`div`,_);r(_,U),O(U,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let W=c(`div`,U);r(U,W),O(W,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(W,e(`Last submit`));let G=c(`pre`,U);r(U,G),O(G,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let K=g(G);return r(G,K),u(()=>{w(K,p.value)}),m})},Pe=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保留值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Fe=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保留字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ie=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Le=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 继续传给 Item / List`,`不要依赖隐式祖先解析`]}],Re=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],ze=()=>{let{tabBasic:n,tabInstance:i,tabValidation:a,tabNormalize:s,tabConditional:d,tabNoStyle:h,tabList:_,tabScroll:v,tabInline:y}=j(`useSetup:0:0:dup9`,()=>T(()=>({tabBasic:j(`ref:1:9`,()=>o(`preview`)),tabInstance:j(`ref:1:10`,()=>o(`preview`)),tabValidation:j(`ref:1:11`,()=>o(`preview`)),tabNormalize:j(`ref:1:12`,()=>o(`preview`)),tabConditional:j(`ref:1:13`,()=>o(`preview`)),tabNoStyle:j(`ref:1:14`,()=>o(`preview`)),tabList:j(`ref:1:15`,()=>o(`preview`)),tabScroll:j(`ref:1:16`,()=>o(`preview`)),tabInline:j(`ref:1:17`,()=>o(`preview`))})));return b(o=>{let x=f(),S=l(`rue:component:anchor`);return r(x,S),D(k(B,{children:b(()=>{let o=f(),b=c(`div`,o);r(o,b),O(b,`max-w-none prose prose-sm md:prose-base`);let x=c(`h1`,b);r(b,x),O(x,`mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content`),r(x,e(`Form 表单`));let S=c(`p`,b);r(b,S),O(S,`mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72`),r(S,e(`这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。`));let C=c(`h2`,b);r(b,C),r(C,e(`何时使用`));let T=c(`ul`,b);r(b,T);let E=c(`li`,T);r(T,E),r(E,e(`需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。`));let A=c(`li`,T);r(T,A),r(A,e(`需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。`));let j=c(`li`,T);r(T,j),r(j,e(`需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。`));let N=c(`section`,b);r(b,N),O(N,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let P=l(`rue:list:start`),I=l(`rue:list:end`);r(N,P),r(N,I);let L=new Map;u(()=>{L=M({items:Le||[],getKey:(e,t)=>e.title,elements:L,parent:N,before:I,start:P,renderItem:(e,t,n,r,i)=>{m(k(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description,items:e.items}),t,n,r)}})});let R=c(`div`,b);r(b,R),O(R,`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm`),r(R,e(`当前 Rue runtime 下，推荐通过`));let z=c(`code`,R);r(R,z),r(z,e(`Form.useForm()`)),r(R,e(`或`));let B=g(R);r(R,B),w(B,` `);let H=c(`code`,R);r(R,H);let U=g(H);r(H,U),w(U,`render={form => <Form.Item form={form} name="title" />}`),r(R,e(`显式持有并传递`));let W=g(R);r(R,W),w(W,` `);let G=c(`code`,R);r(R,G),r(G,e(`form`)),r(R,e("。 下面所有 demo 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。"));let K=l(`rue:component:anchor`);r(b,K),u(()=>{let e=k(V,{title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:n,preview:()=>F(Te,{}),code:`<Form
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
`});t(()=>D(e,b,K))});let q=l(`rue:component:anchor`);r(b,q),u(()=>{let e=k(V,{title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:i,preview:()=>F(Ee,{}),code:`const InstanceMethodsShowcase: FC = () => {
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
`});t(()=>D(e,b,q))});let J=l(`rue:component:anchor`);r(b,J),u(()=>{let e=k(V,{title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:a,preview:()=>F(De,{}),code:`const [form] = Form.useForm()

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
`});t(()=>D(e,b,J))});let ee=l(`rue:component:anchor`);r(b,ee),u(()=>{let e=k(V,{title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:s,preview:()=>F(Oe,{}),code:`<Form.Item
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
`});t(()=>D(e,b,ee))});let te=l(`rue:component:anchor`);r(b,te),u(()=>{let e=k(V,{title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:d,preview:()=>F(ke,{}),code:`<Form.Item
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
`});t(()=>D(e,b,te))});let ne=l(`rue:component:anchor`);r(b,ne),u(()=>{let e=k(V,{title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:h,preview:()=>F(Ae,{}),code:`const [form] = Form.useForm()

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
`});t(()=>D(e,b,ne))});let re=l(`rue:component:anchor`);r(b,re),u(()=>{let e=k(V,{title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:_,preview:()=>F(Me,{}),code:`const DynamicListShowcase: FC = () => {
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
`});t(()=>D(e,b,re))});let ie=l(`rue:component:anchor`);r(b,ie),u(()=>{let e=k(V,{title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:v,preview:()=>F(je,{}),code:`const LongFormScrollShowcase: FC = () => {
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
`});t(()=>D(e,b,ie))});let ae=l(`rue:component:anchor`);r(b,ae),u(()=>{let e=k(V,{title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 版本：网格字段、独立按钮区、统一实例驱动。`,tab:y,preview:()=>F(Ne,{}),code:`const [form] = Form.useForm()

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
`});t(()=>D(e,b,ae))});let Y=c(`h2`,b);r(b,Y),r(Y,e(`使用说明`));let oe=c(`p`,b);r(b,oe),r(oe,e(`下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前实现强相关的部分抽出来。先看这些规则，再回头看上面的 demo，理解会快很多。`));let se=c(`section`,b);r(b,se),O(se,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let X=l(`rue:list:start`),Z=l(`rue:list:end`);r(se,X),r(se,Z);let ce=new Map;u(()=>{ce=M({items:Re||[],getKey:(e,t)=>e.title,elements:ce,parent:se,before:Z,start:X,renderItem:(e,t,n,r,i)=>{m(k(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description}),t,n,r)}})});let le=c(`h2`,b);r(b,le),p(le,`id`,`form-api`),r(le,e(`API`));let ue=c(`p`,b);r(b,ue),r(ue,e(`Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。`));let de=l(`rue:component:anchor`);r(b,de),u(()=>{let e=k(Se,{title:`Form`,rows:Pe});t(()=>D(e,b,de))});let fe=l(`rue:component:anchor`);r(b,fe),u(()=>{let e=k(Se,{title:`Form.Item`,rows:Fe});t(()=>D(e,b,fe))});let pe=l(`rue:component:anchor`);return r(b,pe),u(()=>{let e=k(Se,{title:`Form.List and Hooks`,rows:Ie});t(()=>D(e,b,pe))}),o})}),x,S),x})};export{ze as default};