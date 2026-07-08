import{Bt as e,Kt as t,M as n,Q as r,Vt as i,Xt as a,Yt as o,a as s,an as c,at as l,bt as u,dt as d,it as f,l as p,m,n as h,nt as g,o as _,on as v,pt as y,r as b,rt as x,s as S,sn as C,t as w,tn as T,tt as E,vt as D,wt as O,x as k,xt as A}from"./vapor-runtime-x7F5M-49.js";import{a as j,n as M,t as N}from"./vapor-helpers-vapor-D1LP4JjK.js";import{i as P}from"./persistentSidebarPlayground-BeUAutTV.js";import{n as F,t as I}from"./src-Dlanwp1X.js";import{t as L}from"./button-BaOJ_LfE.js";import{t as R}from"./checkbox-XVTwgLxj.js";import{t as z}from"./input-D7_ql2o3.js";import{r as B}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as V}from"./PreviewBlock-CCAV1yb7.js";var H=`__rueFormContext`,U=0,W={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},G=(...e)=>e.filter(Boolean).join(` `),K=e=>!!e&&typeof e==`object`,q=e=>{if(Array.isArray(e))return e.map(e=>q(e));if(K(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=q(e[n])}),t}return e},J=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),te=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,ne=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),re=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},ie=(e,t,n)=>{if(t.length===0)return q(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?q(n):ie(o[r],i,n),o},ae=(e,t)=>{if(t.length===0)return;if(!K(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=ae(i[n],r),i)},Y=(e,t)=>{if(!K(t)&&!Array.isArray(t))return q(t);if(Array.isArray(t))return t.map(e=>q(e));let n=K(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Y(n[e],t[e])}),n},oe=(e,t)=>ie({},e,t),se=e=>e?Array.isArray(e)?e:[e]:[`onChange`],X=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,Z=(e,t)=>{let n=X(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},ce=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,le=e=>{try{return new URL(e),!0}catch{return!1}},ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&le(e);default:return!0}},de=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??W.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??W.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??W.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??W.types?.[e.type??`string`]??"${label} 类型不正确";let a=X(t,e.type);return(r[a]??W[a]??{})[i??`len`]??"${label} 校验失败"},fe=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),pe=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},me=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,he=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=pe(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&ce(n,e.type)?i=de(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=de(e,n,l,o,`whitespace`):!ce(n,e.type)&&e.type&&!ue(n,e.type)?i=de(e,n,l,o,`type`):!ce(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=de(e,n,l,o,`pattern`):!ce(n,e.type)&&e.len!==void 0?Z(n,e.type)!==e.len&&(i=de(e,n,l,o,`len`)):!ce(n,e.type)&&e.min!==void 0?Z(n,e.type)<e.min&&(i=de(e,n,l,o,`min`)):!ce(n,e.type)&&e.max!==void 0&&Z(n,e.type)>e.max&&(i=de(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=fe(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},ge=(e,...t)=>{let[n,r]=t;if(e===`checked`)return K(r)&&typeof r.checked==`boolean`?r.checked:K(n)&&K(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(K(n)&&`target`in n))return n;if(K(n)&&K(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},_e=e=>e?p(e===`error`?e=>{let t=x(`span`,e);return y(t,`text-error`),r(t,f(`!`)),t}:e===`warning`?e=>{let t=x(`span`,e);return y(t,`text-warning`),r(t,f(`!`)),t}:e===`success`?e=>{let t=x(`span`,e);return y(t,`text-success`),r(t,f(`✓`)),t}:e=>{let t=x(`span`,e);return y(t,`loading loading-spinner loading-xs text-primary`),t}):null,ve=e=>{if(e?.span)return`${e.span/24*100}%`},ye=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,be=()=>{let e=j(`ref:1:0`,()=>a(0)),t=new Map,n=new Map,r=new Map,i=new Set,o=!1,s={},c={},l=!1,u=null,d={validateTrigger:[`onChange`],validateMessages:W},f=()=>{e.value+=1,i.forEach(e=>e())},p=()=>{o||(o=!0,queueMicrotask(()=>{o=!1,f()}))},m=e=>{let t=ee(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},h=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ee(t)}`:e.id},g=e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:q(ne(s,e))}},_=e=>{d.onFieldsChange?.([g(e)],D.getFieldsValue(!0))},v=(e,t,n=!0)=>{let r=m(e);Object.assign(r,t),n&&(_(e),f(),p())},y=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&te(t,e))return n}return null},b=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return v(n,{errors:[],warnings:[],validating:!1}),null;v(n,{validating:!0});let a=await he(n,ne(s,n),i,s,e.getLabel(),e.getMessageVariables(),d.validateMessages);return v(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},x=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||te(n,e)||t.getDependencies().some(t=>te(t,e))&&await b(t)}},S=async(e,t,n)=>{if(s=ie(s,e,t),n?.touch){let t=m(e);t.touched=!0}f(),_(e),n?.emitValues!==!1&&d.onValuesChange?.(oe(e,t),D.getFieldsValue(!0));let r=y(e);r&&await b(r,n?.triggerName),await x(e),p()},C=e=>{let i=h(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let o=e.getNamePath();if(o&&o.length){let t=e.getInitialValue();!re(c,o)&&t!==void 0&&(c=ie(c,o,t)),!re(s,o)&&t!==void 0&&(s=ie(s,o,t)),m(o)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let o=e.getNamePath();!o||!o.length||ye(e,d.preserve)||(s=ae(s,o),r.delete(ee(o)),f())}},w=e=>l?!1:(c=q(e??{}),s=q(e??{}),l=!0,!0),T=async e=>{let n=e?.map(e=>J(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=h(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>te(i,e)))continue;let o=await b(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:D.getFieldsValue(!0),errorFields:r,outOfDate:!1};return D.getFieldsValue(!0)},E=(e,t)=>{let n=J(e),r=d.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>u?.querySelector(`#${CSS.escape(e)}`)).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},D={getFieldValue(t){return e.value,q(ne(s,J(t)))},getFieldsValue(t){return e.value,t===!0||t==null?q(s):t.reduce((e,t)=>{let n=J(t);return ie(e,n,ne(s,n))},{})},setFieldValue(e,t){S(J(e),t,{emitValues:!1})},setFieldsValue(e){s=Y(s,e),f()},resetFields(e){if(!e?.length){s=q(c),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),f();return}e.forEach(e=>{let t=J(e),n=ne(c,t);s=n===void 0?ae(s,t):ie(s,t,n);let r=m(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),f()},validateFields:T,submit(){T().then(e=>{d.onFinish?.(e)}).catch(e=>{if(d.onFinishFailed?.(e),d.scrollToFirstError&&e.errorFields[0]){let t=d.scrollToFirstError===!0?{block:`center`}:d.scrollToFirstError;E(e.errorFields[0].name,t)}})},scrollToField:E,isFieldTouched(e){return m(J(e)).touched},getFieldError(e){return[...m(J(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=h(t);return e.has(n)?!1:(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=J(e),n=m(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){d=e},ensureInitialized:w,registerField:C,getMeta:m,validateFieldByPath(e,t){let n=y(e);return n?b(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return S(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return S(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return d.validateTrigger},setRootElement(e){u=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){f()}}};return D},xe=(e,t,n)=>typeof n==`function`?n(e,{required:t}):n===`optional`&&!t?p(e=>{let t=x(`span`,e);return y(t,`ml-2 text-xs text-base-content/45`),d(t,`aria-hidden`,`true`),r(t,f(`optional`)),t}):n!==!1&&t?p(e=>{let t=x(`span`,e);return y(t,`ml-1 text-error`),d(t,`aria-hidden`,`true`),r(t,f(`*`)),t}):null,Q=Object.assign(e=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:a,__rue_rest_omit_2:s,__rue_rest_omit_3:l,__rue_rest_omit_4:u,__rue_rest_omit_5:d,__rue_rest_omit_6:f,__rue_rest_omit_7:h,__rue_rest_omit_8:y,__rue_rest_omit_9:S,__rue_rest_omit_10:D,__rue_rest_omit_11:M,__rue_rest_omit_12:N,__rue_rest_omit_13:F,__rue_rest_omit_14:L,__rue_rest_omit_15:R,__rue_rest_omit_16:z,__rue_rest_omit_17:B,rest:V,slotSource:H,internalFormRef:U,rootElementRef:K,subscriptionFormRef:q,unsubscribeRenderRef:J,renderVersion:ee,setRenderVersion:te,resolvedForm:ne,initializedNow:re,formVersionSnapshot:ie,handleNativeSubmit:ae,resolveContent:Y,content:oe}=j(`useSetup:0:0:dup3`,()=>v(()=>{let{className:n,style:r,children:i,render:a,component:s,layout:l,initialValues:u,form:d,name:f,preserve:p,validateMessages:h,validateTrigger:g,scrollToFirstError:_,onValuesChange:y,onFieldsChange:x,onFinish:S,onFinishFailed:w,onSubmit:T,...E}=e,D=j(`computed:1:39`,()=>O(()=>t()?.propsRO??{children:e.children})),k=D,A=j(`useRef:1:40`,()=>c()),M=j(`useRef:1:41`,()=>c(null)),N=j(`useRef:1:42`,()=>c(void 0)),F=j(`useRef:1:43`,()=>c(null)),[L,R]=j(`useState:1:44`,()=>C(0,{kind:`ref`}));A.current||=e.form??be();let z=j(`computed:1:45`,()=>O(()=>e.form??A.current)),B=z,V=j(`computed:1:46`,()=>O(()=>B.get().__INTERNAL__.ensureInitialized(e.initialValues))),H=V,U=j(`computed:1:47`,()=>O(()=>B.get().__INTERNAL__.version.value)),G=U;B.get().__INTERNAL__.setRuntimeOptions({name:e.name,preserve:e.preserve,validateTrigger:se(e.validateTrigger),validateMessages:{...W,...e.validateMessages},scrollToFirstError:e.scrollToFirstError,onValuesChange:e.onValuesChange,onFieldsChange:e.onFieldsChange,onFinish:e.onFinish,onFinishFailed:e.onFinishFailed}),N.current!==B.get()&&(F.current?.(),N.current=B.get(),F.current=B.get().__INTERNAL__.subscribe(()=>{R(L.value+1)}));let K=t=>{t.preventDefault(),e.onSubmit?.(t),B.get().submit()};b(()=>{H.get()&&B.get().__INTERNAL__.emitUpdate()}),o(()=>{F.current?.(),F.current=null,N.current=void 0});let q=()=>(j(`useSetup:0:0:dup2`,()=>v(()=>(G.get(),{}))),typeof e.render==`function`?I(m,{children:e.render(B.get())}):typeof e.children==`function`&&e.children.kind!==`block-factory`?I(m,{children:e.children(B.get())}):I(P,{source:k.get()}));return{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:s,__rue_rest_omit_5:l,__rue_rest_omit_6:u,__rue_rest_omit_7:d,__rue_rest_omit_8:f,__rue_rest_omit_9:p,__rue_rest_omit_10:h,__rue_rest_omit_11:g,__rue_rest_omit_12:_,__rue_rest_omit_13:y,__rue_rest_omit_14:x,__rue_rest_omit_15:S,__rue_rest_omit_16:w,__rue_rest_omit_17:T,rest:E,slotSource:D,internalFormRef:A,rootElementRef:M,subscriptionFormRef:N,unsubscribeRenderRef:F,renderVersion:L,setRenderVersion:R,resolvedForm:z,initializedNow:V,formVersionSnapshot:U,handleNativeSubmit:K,resolveContent:q,content:q()}}));if((e.component===void 0?`form`:e.component)===!1)return oe;let X={...V,ref:e=>{K.current=e,ne.get().__INTERNAL__.setRootElement(e)},onSubmit:(e.component===void 0?`form`:e.component)===`form`?ae:void 0,className:G(`rue-form`,(e.layout===void 0?`horizontal`:e.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,e.className),style:e.style,"data-rue-form":`true`};if((e.component===void 0?`form`:e.component)===`form`)return p(e=>{let t=x(`form`,e);i(()=>{A(t,X)});let n=E(`rue:slot:anchor`);return r(t,n),i(()=>{let e=(ee.value,Y());T(()=>_(e,t,n))}),t});if((e.component===void 0?`form`:e.component)===`div`)return p(e=>{let t=x(`div`,e);i(()=>{A(t,X)});let n=E(`rue:slot:anchor`);return r(t,n),i(()=>{let e=(ee.value,Y());T(()=>_(e,t,n))}),t});if((e.component===void 0?`form`:e.component)===`section`)return p(e=>{let t=x(`section`,e);i(()=>{A(t,X)});let n=E(`rue:slot:anchor`);return r(t,n),i(()=>{let e=(ee.value,Y());T(()=>_(e,t,n))}),t});if(typeof(e.component===void 0?`form`:e.component)==`string`)return k(e.component===void 0?`form`:e.component,X,(ee.value,Y()));let Z=e.component===void 0?`form`:e.component;return p(e=>{let t=g(),n=E(`rue:component:anchor`);return r(t,n),i(()=>{let e=w(Z,{...X,children:(ee.value,Y())});T(()=>_(e,t,n))}),t})},{Item:a=>{let{slotSource:l,formInstance:u,entityIdRef:f,unregisterRef:S,subscriptionFormRef:w,unsubscribeRenderRef:k,renderVersion:A,setRenderVersion:M,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:z,latestPropsRef:B,noStyleHostRef:V,controlHostRef:H,helpHostRef:W,feedbackHostRef:K,namePath:te,nameKey:ne,layout:re,required:ie,labelAlign:ae,labelWrap:Y,labelCol:oe,wrapperCol:X,controlId:Z,getRenderState:ce,renderManagedContent:le,assignControlHost:ue}=j(`useSetup:0:0:dup1`,()=>v(()=>{let l=j(`computed:1:2`,()=>O(()=>t()?.propsRO??{children:a.children})),u=l,f=j(`computed:1:3`,()=>O(()=>a.form)),h=f,g=j(`useRef:1:4`,()=>c()),v=j(`useRef:1:5`,()=>c(null)),S=j(`useRef:1:6`,()=>c(void 0)),w=j(`useRef:1:7`,()=>c(null)),[D,k]=j(`useState:1:8`,()=>C(0,{kind:`ref`})),A=j(`useRef:1:9`,()=>c()),M=j(`useRef:1:10`,()=>c()),N=j(`useRef:1:11`,()=>c()),L=j(`useRef:1:12`,()=>c(a)),R=j(`useRef:1:13`,()=>c(null)),z=j(`useRef:1:14`,()=>c(null)),B=j(`useRef:1:15`,()=>c(null)),V=j(`useRef:1:16`,()=>c(null));if(L.current=a,g.current||=`rue-form-item-${U++}`,a.name!=null&&!h.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let H=j(`computed:1:17`,()=>O(()=>a.name==null?void 0:J(a.name))),W=H,G=j(`computed:1:18`,()=>O(()=>W.get()?ee(W.get()):void 0)),K=G,te=j(`computed:1:19`,()=>O(()=>a.layout??`horizontal`)),ne=j(`computed:1:20`,()=>O(()=>me(a.required,a.rules))),re=j(`computed:1:21`,()=>O(()=>a.labelAlign??`right`)),ie=j(`computed:1:22`,()=>O(()=>a.labelCol)),ae=j(`computed:1:23`,()=>O(()=>a.wrapperCol)),Y=j(`computed:1:24`,()=>O(()=>a.htmlFor??(W.get()?W.get().map(e=>String(e)).join(`__`):void 0))),oe=Y;if(W.get()&&h.get()&&N.current!==K.get()){let e=L.current??a;v.current?.(),v.current=h.get().__INTERNAL__.registerField({id:g.current,kind:`item`,getNamePath:()=>W.get(),getRules:()=>e.rules??[],getRequired:()=>e.required,getLabel:()=>e.label,getMessageVariables:()=>e.messageVariables,getValidateTrigger:()=>se(e.validateTrigger),getDependencies:()=>(e.dependencies??[]).map(e=>J(e)),getInitialValue:()=>e.initialValue,getPreserve:()=>e.preserve}),N.current=K.get()}let X=()=>{let e=h.get()?.getFieldsValue(!0)??{},t=W.get()&&h.get()?h.get().__INTERNAL__.getMeta(W.get()):null;return{allValues:e,meta:t,currentValue:W.get()&&h.get()?h.get().getFieldValue(W.get()):void 0,triggerName:a.trigger??`onChange`,validateTrigger:se(a.validateTrigger),status:a.validateStatus??(t?.validating?`validating`:t?.errors.length?`error`:t?.warnings.length?`warning`:t?.touched&&(a.rules?.length??0)>0?`success`:void 0)}},Z=()=>{let{allValues:e,meta:t,currentValue:o,triggerName:s,validateTrigger:c,status:l}=X(),f=a.render??a.children,g;if(typeof f==`function`&&f.kind!==`block-factory`&&W.get()&&h.get()&&!a.shouldUpdate){let e={...a.getValueProps?a.getValueProps(o):{[a.valuePropName??`value`]:a.valuePropName===`checked`?!!o:o},id:oe.get()};e[s]=(...e)=>{let t=a.getValueFromEvent?a.getValueFromEvent(...e):ge(a.valuePropName??`value`,...e),n=a.normalize?a.normalize(t,o,h.get().getFieldsValue(!0)):t;h.get().__INTERNAL__.updateValueFromControl(W.get(),n,{touch:!0,triggerName:s})},c.filter(e=>e!==s).forEach(t=>{e[t]=(...e)=>{h.get().__INTERNAL__.validateFieldByPath(W.get(),t)}}),g=f(e,{value:o,touched:t?.touched??!1,validating:t?.validating??!1,errors:t?.errors??[],warnings:t?.warnings??[],status:l},h.get())}else typeof f==`function`&&f.kind!==`block-factory`&&(!W.get()||a.shouldUpdate)?(((typeof a.shouldUpdate==`function`?a.shouldUpdate(M.current??e,e):a.shouldUpdate===!0||A.current===void 0)||A.current===void 0)&&(A.current=f(e,h.get())),M.current=q(e),g=A.current):g=I(P,{source:u.get()});if(a.noStyle){R.current&&n(I(m,{children:g}),R.current);return}z.current&&n(I(m,{children:g}),z.current),B.current&&n(a.help===void 0?t&&(t.errors.length>0||t.warnings.length>0)?F(`ul`,{className:`mt-2 grid gap-1 text-xs`,children:[t.errors.map((e,t)=>p(n=>{let a=x(`li`,n);i(()=>{d(a,`key`,String(`error-${t}`))}),y(a,`text-error`);let o=E(`rue:slot:anchor`);return r(a,o),i(()=>{let t=e;T(()=>_(t,a,o))}),a})),t.warnings.map((e,t)=>p(n=>{let a=x(`li`,n);i(()=>{d(a,`key`,String(`warning-${t}`))}),y(a,`text-warning`);let o=E(`rue:slot:anchor`);return r(a,o),i(()=>{let t=e;T(()=>_(t,a,o))}),a}))]}):I(m,{}):I(m,{children:a.help}),B.current),V.current&&n(a.hasFeedback?I(m,{children:_e(l)}):I(m,{}),V.current)};return S.current!==h.get()&&(w.current?.(),S.current=h.get(),w.current=h.get()?h.get().__INTERNAL__.subscribe(()=>{k(D.value+1)}):null),j(`watch:1:25`,()=>e(()=>D.value,()=>{Z()},{immediate:!0})),o(()=>{v.current?.(),v.current=null,w.current?.(),w.current=null,S.current=void 0}),b(()=>{Z()}),s(()=>{Z()}),{slotSource:l,formInstance:f,entityIdRef:g,unregisterRef:v,subscriptionFormRef:S,unsubscribeRenderRef:w,renderVersion:D,setRenderVersion:k,renderCacheRef:A,previousValuesRef:M,lastRegisteredKeyRef:N,latestPropsRef:L,noStyleHostRef:R,controlHostRef:z,helpHostRef:B,feedbackHostRef:V,namePath:H,nameKey:G,layout:te,required:ne,labelAlign:re,labelWrap:!1,labelCol:ie,wrapperCol:ae,controlId:Y,getRenderState:X,renderManagedContent:Z,assignControlHost:e=>{z.current=e,e&&queueMicrotask(()=>{Z()})}}}));if(a.noStyle)return p(e=>{let t=x(`div`,e),n=N(t,()=>V);return h(()=>{n()}),D(t,{display:`contents`}),t});let de=a.label===void 0?null:F(`label`,{className:G(`text-[0.95rem] leading-7 font-medium text-base-content/78`,ae.get()===`left`?`text-left`:`text-right md:text-right`,Y?`whitespace-normal`:`md:whitespace-nowrap`),style:{width:re.get()===`horizontal`?ve(oe.get()):void 0},for:Z.get(),children:[I(`span`,{children:a.label}),re.get()===`horizontal`&&a.colon!==!1?I(`span`,{className:`ml-1 text-base-content/45`,children:`:`}):null,xe(a.label,ie.get(),!0)]}),fe=re.get()===`horizontal`&&X.get()?.offset?{marginLeft:`${X.get().offset/24*100}%`,width:ve(X.get())}:re.get()===`horizontal`?{width:ve(X.get())}:void 0;return p(e=>{let t=x(`div`,e);i(()=>{y(t,G(`rue-form-item`,a.hidden?`hidden`:void 0,re.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,a.className))}),i(()=>{let e=a.style;D(t,e)});let n=E(`rue:slot:anchor`);r(t,n),i(()=>{let e=de;T(()=>_(e,t,n))});let o=x(`div`,t);r(t,o),y(o,`min-w-0 flex-1`),i(()=>{D(o,fe)});let s=x(`div`,o);r(o,s),y(s,`flex items-start gap-3`);let c=x(`div`,s);r(s,c),i(()=>{d(c,`key`,String(ne.get()??`__rue_form_item_control__`))}),y(c,`min-w-0 flex-1`);let l=N(c,()=>ue);h(()=>{l()});let u=E(`rue:slot:anchor`);r(s,u),i(()=>{let e=a.hasFeedback?p(()=>{let e=g(),t=x(`span`,e);r(e,t),y(t,`mt-3 shrink-0`);let n=N(t,()=>K);return h(()=>{n()}),e}):``;T(()=>_(e,s,u))});let f=x(`div`,o);r(o,f),y(f,`mt-3`);let m=N(f,()=>W);h(()=>{m()});let v=E(`rue:slot:anchor`);return r(o,v),i(()=>{let e=a.extra==null?``:p(()=>{let e=g(),t=x(`div`,e);r(e,t),y(t,`mt-3 text-[0.8rem] leading-6 text-base-content/55`);let n=E(`rue:slot:anchor`);return r(t,n),i(()=>{let e=a.extra;T(()=>_(e,t,n))}),e});T(()=>_(e,o,v))}),t})},List:e=>{let{form:t,name:n,children:r,render:i,initialValue:a,rules:s}=e,l=t;if(!l)throw Error(`Form.List 需要显式传入 form`);let u=i??r;if(typeof u!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let d=J(n),f=j(`useRef:1:26`,()=>c()),p=j(`useRef:1:27`,()=>c(null)),m=j(`useRef:1:28`,()=>c(void 0)),h=j(`useRef:1:29`,()=>c(null)),[g,_]=j(`useState:1:30`,()=>C(0,{kind:`ref`})),v=j(`useRef:1:31`,()=>c(s)),y=j(`useRef:1:32`,()=>c(a)),b=j(`useRef:1:33`,()=>c([])),x=j(`useRef:1:34`,()=>c(0));return v.current=s,y.current=a,f.current||=`rue-form-list-${U++}`,p.current||=l.__INTERNAL__.registerField({id:f.current,kind:`list`,getNamePath:()=>d,getRules:()=>v.current??[],getRequired:()=>void 0,getLabel:()=>d[d.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>y.current,getPreserve:()=>!0}),m.current!==l&&(h.current?.(),m.current=l,h.current=l.__INTERNAL__.subscribe(()=>{_(g.value+1)})),o(()=>{p.current?.(),p.current=null,h.current?.(),h.current=null,m.current=void 0}),(()=>{g.value;let e=l.getFieldValue(d),t=Array.isArray(e)?e:[],n=l.__INTERNAL__.getMeta(d),r=b.current??[],i=x.current??0;b.current??=r,x.current??=i;let a=()=>{let e=x.current??0;return x.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(b.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),l.__INTERNAL__.updateListValue(d,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),l.__INTERNAL__.updateListValue(d,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),l.__INTERNAL__.updateListValue(d,i)}},s=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return I(`div`,{"data-rue-form-list-shell":`true`,children:u(s,o,{errors:n.errors,warnings:n.warnings})},s.map(e=>`${String(e.fieldKey)}:${e.name}`).join(`|`))})()},ErrorList:e=>{let{list:t}=j(`useSetup:0:0`,()=>v(()=>({list:j(`computed:1:1`,()=>O(()=>[...e.errors??[],...e.warnings??[]].filter(e=>e!=null)))})));return t.get().length?p(t=>{let n=x(`ul`,t);i(()=>{y(n,G(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,e.className))}),i(()=>{let t=e.style;D(n,t)});let a=E(`rue:list:start`),o=E(`rue:list:end`);r(n,a),r(n,o);let s=new Map;i(()=>{s=M({items:(e.errors??[])||[],getKey:(e,t)=>`error-${t}`,elements:s,parent:a.parentNode,before:o,singleRoot:!0,start:a,renderItem:(e,t,n,a,o)=>{_(p(()=>{let t=g(),n=x(`li`,t);r(t,n),i(()=>{d(n,`key`,String(`error-${o}`))}),y(n,`text-error`);let a=l(n);return r(n,a),i(()=>{u(a,e)}),t}),t,n)}})}),r(n,f(` `));let c=E(`rue:list:start`),m=E(`rue:list:end`);r(n,c),r(n,m);let h=new Map;return i(()=>{h=M({items:(e.warnings??[])||[],getKey:(e,t)=>`warning-${t}`,elements:h,parent:c.parentNode,before:m,singleRoot:!0,start:c,renderItem:(e,t,n,a,o)=>{_(p(()=>{let t=g(),n=x(`li`,t);r(t,n),i(()=>{d(n,`key`,String(`warning-${o}`))}),y(n,`text-warning`);let a=l(n);return r(n,a),i(()=>{u(a,e)}),t}),t,n)}})}),n}):null},useForm:e=>{let t=j(`useRef:1:38`,()=>c());return t.current||=e??be(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,n)=>{let r=t()?.propsRO?.[H],i=n??r?.form,[a,s]=j(`useState:1:35`,()=>C(0,{kind:`ref`})),l=j(`useRef:1:36`,()=>c(void 0)),u=j(`useRef:1:37`,()=>c(null));if(l.current!==i&&(u.current?.(),l.current=i,u.current=i?i.__INTERNAL__.subscribe(()=>{s(a.value+1)}):null),o(()=>{u.current?.(),u.current=null,l.current=void 0}),i)return a.value,i.getFieldValue(e)}}),Se=e=>p(t=>{let n=x(`div`,t);y(n,`not-prose my-6 lg:my-8`);let a=x(`h3`,n);r(n,a),y(a,`mt-0 mb-3 text-base font-semibold text-base-content`);let o=E(`rue:slot:anchor`);r(a,o),i(()=>{let t=e.title;T(()=>_(t,a,o))});let s=x(`div`,n);r(n,s),y(s,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=x(`table`,s);r(s,c),y(c,`table table-zebra`);let l=x(`thead`,c);r(c,l);let u=x(`tr`,l);r(l,u);let m=x(`th`,u);r(u,m),r(m,f(`属性`));let h=x(`th`,u);r(u,h),r(h,f(`说明`));let v=x(`th`,u);r(u,v),r(v,f(`类型`));let b=x(`th`,u);r(u,b),r(b,f(`默认值`));let S=x(`tbody`,c);r(c,S);let C=E(`rue:list:start`),w=E(`rue:list:end`);r(S,C),r(S,w);let D=new Map;return i(()=>{D=M({items:e.rows||[],getKey:(e,t)=>e.prop,elements:D,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,n,a,o)=>{_(p(()=>{let t=g(),n=x(`tr`,t);r(t,n),i(()=>{d(n,`key`,String(e.prop))});let a=x(`td`,n);r(n,a);let o=x(`code`,a);r(a,o);let s=E(`rue:slot:anchor`);r(o,s),i(()=>{let t=e.prop;T(()=>_(t,o,s))});let c=x(`td`,n);r(n,c);let l=E(`rue:slot:anchor`);r(c,l),i(()=>{let t=e.description;T(()=>_(t,c,l))});let u=x(`td`,n);r(n,u);let f=x(`code`,u);r(u,f);let p=E(`rue:slot:anchor`);r(f,p),i(()=>{let t=e.type;T(()=>_(t,f,p))});let m=x(`td`,n);r(n,m);let h=x(`code`,m);r(m,h);let v=E(`rue:slot:anchor`);return r(h,v),i(()=>{let t=e.defaultValue;T(()=>_(t,h,v))}),t}),t,n)}})}),n}),Ce=e=>p(t=>{let n=x(`div`,t);y(n,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let a=E(`rue:slot:anchor`);r(n,a),i(()=>{let t=e.eyebrow?p(()=>{let t=g(),n=x(`div`,t);r(t,n),y(n,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let a=E(`rue:slot:anchor`);return r(n,a),i(()=>{let t=e.eyebrow;T(()=>_(t,n,a))}),t}):``;T(()=>_(t,n,a))});let o=x(`h3`,n);r(n,o),y(o,`mt-3 mb-0 text-lg font-semibold text-base-content`);let s=E(`rue:slot:anchor`);r(o,s),i(()=>{let t=e.title;T(()=>_(t,o,s))});let c=x(`p`,n);r(n,c),y(c,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let f=E(`rue:slot:anchor`);r(c,f),i(()=>{let t=e.description;T(()=>_(t,c,f))});let m=E(`rue:slot:anchor`);return r(n,m),i(()=>{let t=e.items?.length?p(()=>{let t=g(),n=x(`ul`,t);r(t,n),y(n,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let a=E(`rue:list:start`),o=E(`rue:list:end`);r(n,a),r(n,o);let s=new Map;return i(()=>{s=M({items:e.items||[],getKey:(e,t)=>e,elements:s,parent:n,before:o,singleRoot:!0,trackIndex:!1,start:a,renderItem:(e,t,n,a,o)=>{_(p(()=>{let t=g(),n=x(`li`,t);r(t,n),i(()=>{d(n,`key`,String(e))});let a=l(n);return r(n,a),i(()=>{u(a,e)}),t}),t,n)}})}),t}):``;T(()=>_(t,n,m))}),n}),$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},we=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Te=()=>{let{initialValues:e,draft:t,result:n}=j(`useSetup:0:0`,()=>v(()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0};return{initialValues:e,draft:j(`ref:1:0`,()=>a($(e))),result:j(`ref:1:1`,()=>a(`等待提交，右侧会展示 payload 或校验摘要。`))}}));return p(a=>{let o=x(`div`,a);y(o,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let s=E(`rue:component:anchor`);r(o,s),i(()=>{let r=w(Q,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:e,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,n)=>{t.value=$(n)},onFinish:e=>{n.value=`提交成功
`+$(e)},onFinishFailed:e=>{n.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>F(m,{children:[I(Q.Item,{form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>I(z,{...e,placeholder:`输入项目名称`})}),I(Q.Item,{form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>I(z,{...e,placeholder:`team@rue.dev`})}),I(Q.Item,{form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>I(R,{...e,children:`允许直接覆盖 staging 配置`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`保存表单`}),I(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`重置`})]})]})});T(()=>_(r,o,s))});let c=x(`div`,o);r(o,c),y(c,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=x(`div`,c);r(c,d),y(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(d,f(`Submit result`));let p=x(`p`,c);r(c,p),y(p,`mt-3 mb-0 text-sm text-base-content/65`),r(p,f(`这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。`));let h=x(`div`,c);r(c,h),y(h,`mt-4 grid gap-4`);let g=x(`div`,h);r(h,g),y(g,`rounded-[1.25rem] bg-base-200/70 p-4`);let v=x(`div`,g);r(g,v),y(v,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(v,f(`Live draft`));let b=x(`pre`,g);r(g,b),y(b,`mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80`);let S=l(b);r(b,S),i(()=>{u(S,t.value)});let C=x(`div`,h);r(h,C),y(C,`rounded-[1.25rem] bg-neutral p-4 text-neutral-content`);let D=x(`div`,C);r(C,D),y(D,`text-xs uppercase tracking-[0.22em] text-neutral-content/60`),r(D,f(`Last submit`));let O=x(`pre`,C);r(C,O),y(O,`mt-3 whitespace-pre-wrap break-words text-xs leading-6`);let k=l(O);return r(O,k),i(()=>{u(k,n.value)}),o})},Ee=()=>{let{form:e,role:t,region:n,notes:o,activity:s}=j(`useSetup:0:0:dup1`,()=>v(()=>{let[e]=Q.useForm();return{form:e,role:Q.useWatch(`role`,e)??`viewer`,region:Q.useWatch(`region`,e)??`cn-hz`,notes:Q.useWatch(`notes`,e)??``,activity:j(`ref:1:2`,()=>a(`等待实例方法操作。`))}}));return p(a=>{let c=x(`div`,a);y(c,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=E(`rue:component:anchor`);r(c,d),i(()=>{let t=w(Q,{form:e,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`submit()
`+$(e)},onFinishFailed:e=>{s.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>F(m,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>I(z,{...e,placeholder:`viewer / editor / admin`})}),I(Q.Item,{form:t,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>I(z,{...e,placeholder:`cn-hz`})})]}),I(Q.Item,{form:t,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>I(z,{...e,placeholder:`写入审批说明或 rollout 策略`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[I(L,{size:`sm`,onClick:()=>{e.setFieldValue(`role`,`editor`),s.value=`setFieldValue('role', 'editor')`},children:`设为 editor`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),s.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:`填充预设`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),s.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:`填入异常值`}),I(L,{size:`sm`,type:`text`,onClick:()=>{e.resetFields(),s.value=`resetFields()`},children:`恢复初始值`}),I(L,{size:`sm`,color:`primary`,onClick:()=>{e.submit()},children:`程序化提交`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>{e.validateFields().then(e=>{s.value=`validateFields()
`+$(e)}).catch(e=>{s.value=`validateFields() failed
`+$(e.errorFields)})},children:`validateFields`})]})]})});T(()=>_(t,c,d))});let p=x(`div`,c);r(c,p),y(p,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=x(`div`,p);r(p,h),y(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,f(`Reactive summary`));let g=x(`p`,p);r(p,g),y(g,`mt-3 mb-0 text-sm text-base-content/65`),r(g,f(`这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。`));let v=x(`div`,p);r(p,v),y(v,`mt-4 grid gap-3`);let b=x(`div`,v);r(v,b),y(b,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let S=x(`div`,b);r(b,S),y(S,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(S,f(`role`));let C=x(`div`,b);r(b,C),y(C,`mt-2 text-lg font-semibold text-base-content`);let D=l(C);r(C,D),i(()=>{u(D,String(t))});let O=x(`div`,v);r(v,O),y(O,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=x(`div`,O);r(O,k),y(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(k,f(`region`));let A=x(`div`,O);r(O,A),y(A,`mt-2 text-lg font-semibold text-base-content`);let j=l(A);r(A,j),i(()=>{u(j,String(n))});let M=x(`div`,v);r(v,M),y(M,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let N=x(`div`,M);r(M,N),y(N,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(N,f(`notes`));let P=x(`div`,M);r(M,P),y(P,`mt-2 text-sm leading-6 text-base-content/80`);let R=l(P);r(P,R),i(()=>{u(R,String(o)||`未填写`)});let B=x(`pre`,p);r(p,B),y(B,`mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6`);let V=l(B);return r(B,V),i(()=>{u(V,s.value)}),c})},De=()=>{let{form:e,password:t,confirm:n,website:o,status:s}=j(`useSetup:0:0:dup2`,()=>v(()=>{let[e]=Q.useForm();return{form:e,password:Q.useWatch(`password`,e)??``,confirm:Q.useWatch(`confirm`,e)??``,website:Q.useWatch(`website`,e)??``,status:j(`ref:1:3`,()=>a(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`))}}));return p(a=>{let c=x(`div`,a);y(c,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=E(`rue:component:anchor`);r(c,d),i(()=>{let t=w(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>F(m,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>I(z,{...e,placeholder:`release-admin`})}),I(Q.Item,{form:t,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>I(z,{...e,placeholder:`https://prod.rue.dev`})})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>I(z,{...e,placeholder:`至少 8 位`})}),I(Q.Item,{form:t,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>I(z,{...e,placeholder:`再次输入密码`})})]}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`执行校验`}),I(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`清空状态`})]})]})});T(()=>_(t,c,d))});let p=x(`div`,c);r(c,p),y(p,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=x(`div`,p);r(p,h),y(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,f(`Validation notes`));let g=x(`p`,p);r(p,g),y(g,`mt-3 mb-0 text-sm text-base-content/65`),r(g,f("这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。"));let v=x(`div`,p);r(p,v),y(v,`mt-4 grid gap-3`);let b=x(`div`,v);r(v,b),y(b,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let S=x(`div`,b);r(b,S),y(S,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(S,f(`Password match`));let C=x(`div`,b);r(b,C),y(C,`mt-2 text-base font-semibold text-base-content`);let D=l(C);r(C,D),i(()=>{u(D,t&&n?t===n?`已匹配`:`未匹配`:`等待输入`)});let O=x(`div`,v);r(v,O),y(O,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=x(`div`,O);r(O,k),y(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(k,f(`Website warning`));let A=x(`div`,O);r(O,A),y(A,`mt-2 text-base font-semibold text-base-content`);let j=l(A);r(A,j),i(()=>{u(j,o?String(o).startsWith(`https://`)?`格式建议通过`:`建议补上 https://`:`未填写`)});let M=x(`pre`,p);r(p,M),y(M,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let N=l(M);return r(M,N),i(()=>{u(N,s.value)}),c})},Oe=()=>{let{form:e,initialValues:t,issueId:n,slug:o,branch:s,snapshot:c}=j(`useSetup:0:0:dup3`,()=>v(()=>{let[e]=Q.useForm(),t={issueId:`2048`,slug:`release-planning`,branch:`main`};return{form:e,initialValues:t,issueId:Q.useWatch(`issueId`,e)??``,slug:Q.useWatch(`slug`,e)??``,branch:Q.useWatch(`branch`,e)??``,snapshot:j(`ref:1:4`,()=>a($(t)))}}));return p(a=>{let d=x(`div`,a);y(d,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let p=E(`rue:component:anchor`);r(d,p),i(()=>{let n=w(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:t,onValuesChange:(e,t)=>{c.value=$(t)},onFinish:e=>{c.value=`提交成功
`+$(e)},render:t=>F(m,{children:[I(Q.Item,{form:t,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>I(z,{...e,placeholder:`#2048`})}),I(Q.Item,{form:t,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>I(z,{...e,placeholder:`release-planning`})}),I(Q.Item,{form:t,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>I(z,{...e,placeholder:`main / release/v1-2`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`应用转换`}),I(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:`填充示例`})]})]})});T(()=>_(n,d,p))});let h=x(`div`,d);r(d,h),y(h,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let g=x(`div`,h);r(h,g),y(g,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(g,f(`Store snapshot`));let v=x(`p`,h);r(h,v),y(v,`mt-3 mb-0 text-sm text-base-content/65`),r(v,f("这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。"));let b=x(`div`,h);r(h,b),y(b,`mt-4 grid gap-3`);let S=x(`div`,b);r(b,S),y(S,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let C=x(`div`,S);r(S,C),y(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(C,f(`issueId`));let D=x(`div`,S);r(S,D),y(D,`mt-2 text-lg font-semibold text-base-content`);let O=l(D);r(D,O),i(()=>{u(O,String(n)||`空`)});let k=x(`div`,b);r(b,k),y(k,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=x(`div`,k);r(k,A),y(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(A,f(`slug`));let j=x(`div`,k);r(k,j),y(j,`mt-2 text-lg font-semibold text-base-content`);let M=l(j);r(j,M),i(()=>{u(M,String(o)||`空`)});let N=x(`div`,b);r(b,N),y(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let P=x(`div`,N);r(N,P),y(P,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(P,f(`branch`));let R=x(`div`,N);r(N,R),y(R,`mt-2 text-lg font-semibold text-base-content`);let B=l(R);r(R,B),i(()=>{u(B,String(s)||`空`)});let V=x(`pre`,h);r(h,V),y(V,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let H=l(V);return r(V,H),i(()=>{u(H,c.value)}),d})},ke=()=>{let{form:e,enableCanary:t,publishMode:n,batchSize:o,approveBy:s,result:c}=j(`useSetup:0:0:dup4`,()=>v(()=>{let[e]=Q.useForm();return{form:e,enableCanary:!!Q.useWatch(`enableCanary`,e),publishMode:Q.useWatch(`publishMode`,e)??`manual`,batchSize:Q.useWatch(`batchSize`,e)??``,approveBy:Q.useWatch(`approveBy`,e)??``,result:j(`ref:1:5`,()=>a(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`))}}));return p(a=>{let d=x(`div`,a);y(d,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let p=E(`rue:component:anchor`);r(d,p),i(()=>{let t=w(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{c.value=`提交成功
`+$(e)},render:t=>F(m,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`gateway`})}),I(Q.Item,{form:t,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`manual / auto`})})]}),I(Q.Item,{form:t,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>I(R,{...e,children:`开启 canary rollout`})}),I(Q.Item,{shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:e=>e.enableCanary?F(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5`,children:[I(`div`,{className:`mb-4 text-sm font-medium text-base-content`,children:`Canary settings`}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`10%`})}),I(Q.Item,{form:t,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`release-ops`})})]}),e.publishMode===`auto`?I(`div`,{className:`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,children:`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`}):null]}):I(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,children:`未开启灰度发布，额外字段不会挂载，也不会参与校验。`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`保存发布策略`}),I(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:`套用 canary 模板`})]})]})});T(()=>_(t,d,p))});let h=x(`div`,d);r(d,h),y(h,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let g=x(`div`,h);r(h,g),y(g,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(g,f(`Conditional summary`));let v=x(`p`,h);r(h,v),y(v,`mt-3 mb-0 text-sm text-base-content/65`),r(v,f("这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。"));let b=x(`div`,h);r(h,b),y(b,`mt-4 grid gap-3`);let S=x(`div`,b);r(b,S),y(S,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let C=x(`div`,S);r(S,C),y(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(C,f(`enableCanary`));let D=x(`div`,S);r(S,D),y(D,`mt-2 text-lg font-semibold text-base-content`);let O=l(D);r(D,O),i(()=>{u(O,t?`true`:`false`)});let k=x(`div`,b);r(b,k),y(k,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let A=x(`div`,k);r(k,A),y(A,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(A,f(`publishMode`));let j=x(`div`,k);r(k,j),y(j,`mt-2 text-lg font-semibold text-base-content`);let M=l(j);r(j,M),i(()=>{u(M,String(n))});let N=x(`div`,b);r(b,N),y(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let P=x(`div`,N);r(N,P),y(P,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(P,f(`Conditional fields`));let B=x(`div`,N);r(N,B),y(B,`mt-2 text-sm leading-6 text-base-content/80`),r(B,f(`batchSize: `));let V=l(B);r(B,V),i(()=>{u(V,String(o)||`未挂载`)}),r(B,x(`br`,B)),r(B,f(`approveBy: `));let H=l(B);r(B,H),i(()=>{u(H,String(s)||`未挂载`)});let U=x(`pre`,h);r(h,U),y(U,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let W=l(U);return r(U,W),i(()=>{u(W,c.value)}),d})},Ae=()=>{let{form:e,host:t,path:n,saveLog:o,normalizedPath:s,previewUrl:c}=j(`useSetup:0:0:dup5`,()=>v(()=>{let[e]=Q.useForm(),t=String(Q.useWatch(`host`,e)??`api.rue.dev`),n=String(Q.useWatch(`path`,e)??`release-hooks`),r=j(`ref:1:6`,()=>a(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`)),i=n?n.replace(/^\/+/,``):``;return{form:e,host:t,path:n,saveLog:r,normalizedPath:i,previewUrl:`https://${t}:443/hooks/${i}`}}));return p(t=>{let n=x(`div`,t);y(n,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let a=E(`rue:component:anchor`);r(n,a),i(()=>{let t=w(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{o.value=`保存复合控件
`+$(e)},render:t=>F(m,{children:[F(`div`,{className:`grid gap-6`,children:[F(`div`,{className:`grid gap-3`,children:[I(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`回调地址`}),F(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[I(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`https://`}),I(Q.Item,{form:t,name:`host`,noStyle:!0,render:e=>I(`div`,{className:`min-w-0`,children:I(z,{...e,placeholder:`api.rue.dev`})})}),I(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`:443`})]}),I(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。`})]}),F(`div`,{className:`grid gap-3`,children:[I(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`资源路径`}),F(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[I(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`/hooks/`}),I(Q.Item,{form:t,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>I(`div`,{className:`min-w-0`,children:I(z,{...e,placeholder:`release-hooks`})})}),I(`span`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`POST target`})]}),I(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。`})]})]}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`保存复合地址`}),I(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:`填入 staging`})]})]})});T(()=>_(t,n,a))});let s=x(`div`,n);r(n,s),y(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=x(`div`,s);r(s,d),y(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(d,f(`Composite preview`));let p=x(`p`,s);r(s,p),y(p,`mt-3 mb-0 text-sm text-base-content/65`),r(p,f(`这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。`));let h=x(`div`,s);r(s,h),y(h,`mt-4 rounded-[1.25rem] bg-base-200/70 p-4`);let g=x(`div`,h);r(h,g),y(g,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(g,f(`Resolved URL`));let v=x(`div`,h);r(h,v),y(v,`mt-3 break-all text-lg font-semibold text-base-content`);let b=E(`rue:slot:anchor`);r(v,b),i(()=>{let e=c;T(()=>_(e,v,b))});let S=x(`div`,s);r(s,S),y(S,`mt-4 grid gap-3 text-sm text-base-content/75`);let C=x(`div`,S);r(S,C),y(C,`rounded-[1.25rem] bg-base-200/70 p-4`),r(C,f("`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。"));let D=x(`div`,S);r(S,D),y(D,`rounded-[1.25rem] bg-base-200/70 p-4`),r(D,f(`外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。`));let O=x(`div`,S);r(S,O),y(O,`rounded-[1.25rem] bg-base-200/70 p-4`),r(O,f(`如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。`));let k=x(`pre`,s);r(s,k),y(k,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let A=l(k);return r(k,A),i(()=>{u(A,o.value)}),n})},je=()=>{let{form:e,activity:t,jumpToField:n}=j(`useSetup:0:0:dup6`,()=>v(()=>{let[e]=Q.useForm(),t=j(`ref:1:7`,()=>a(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`));return{form:e,activity:t,jumpToField:(n,r)=>{e.scrollToField(n,{block:`center`,focus:!0}),t.value=`scrollToField -> ${r}`}}}));return p(a=>{let o=x(`div`,a);y(o,`grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]`);let s=x(`div`,o);r(o,s),y(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let c=x(`div`,s);r(s,c),y(c,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(c,f(`Scroll actions`));let d=x(`p`,s);r(s,d),y(d,`mt-3 mb-0 text-sm text-base-content/65`),r(d,f(`这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。`));let p=x(`div`,s);r(s,p),y(p,`mt-4 grid gap-2`);let h=E(`rue:component:anchor`);r(p,h),_(w(L,{size:`sm`,onClick:()=>n(`releaseName`,`发布名称`),children:`滚到发布名称`}),p,h);let g=E(`rue:component:anchor`);r(p,g),_(w(L,{size:`sm`,type:`outlined`,onClick:()=>n([`strategy`,`batchSize`],`灰度批次`),children:`滚到灰度批次`}),p,g);let v=E(`rue:component:anchor`);r(p,v),_(w(L,{size:`sm`,type:`outlined`,onClick:()=>n([`observability`,`dashboard`],`监控看板`),children:`滚到监控看板`}),p,v);let b=E(`rue:component:anchor`);r(p,b),_(w(L,{size:`sm`,type:`outlined`,onClick:()=>n([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),p,b);let S=x(`pre`,s);r(s,S),y(S,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let C=l(S);r(S,C),i(()=>{u(C,t.value)});let O=x(`div`,o);r(o,O),y(O,`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5`);let k=x(`div`,O);r(O,k),y(k,`overflow-y-auto overscroll-contain pr-2`),D(k,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let A=E(`rue:component:anchor`);return r(k,A),i(()=>{let r=w(Q,{form:e,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{t.value=`提交成功
`+$(e)},onFinishFailed:e=>{t.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>F(m,{children:[F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 1`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`基础信息`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`2026.05 release`})}),I(Q.Item,{form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`rue-design`})}),I(Q.Item,{form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`staging`})}),I(Q.Item,{form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`release-captain`})})]})]}),F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 2`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`发布策略`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`10%`})}),I(Q.Item,{form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`15m`})}),I(Q.Item,{form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`error rate > 2%`})}),I(Q.Item,{form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`30m`})})]})]}),F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 3`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`观测与审批`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`Grafana release board`})}),I(Q.Item,{form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`#release-alerts`})}),I(Q.Item,{form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`ops-squad`})}),I(Q.Item,{form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`qa-squad`})})]})]}),F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 4`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`回滚预案`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>I(z,{...e,placeholder:`RB-2026-0514`})}),I(Q.Item,{form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`rollback-owner`})}),I(Q.Item,{form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`20m`})}),I(Q.Item,{form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`platform / qa / support`})})]})]}),I(`div`,{className:`sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur`,children:F(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[I(`div`,{className:`text-sm text-base-content/65`,children:`留空深层字段后点击提交，会自动滚到首个错误项。`}),F(`div`,{className:`flex flex-wrap gap-2`,children:[I(L,{type:`outlined`,onClick:()=>n([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),I(L,{color:`primary`,htmlType:`submit`,children:`提交长表单`})]})]})})]})});T(()=>_(r,k,A))}),o})},Me=()=>{let{form:e,members:t}=j(`useSetup:0:0:dup7`,()=>v(()=>{let[e]=Q.useForm();return{form:e,members:Q.useWatch(`members`,e)??[]}}));return p(n=>{let a=x(`div`,n);y(a,`grid gap-6`);let o=x(`div`,a);r(a,o),y(o,`grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]`);let s=E(`rue:component:anchor`);r(o,s),i(()=>{let t=w(Q,{form:e,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>I(Q.List,{form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(t,n,r)=>F(`div`,{className:`grid gap-4`,children:[t.length===0?I(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,children:`暂无成员，点击下方按钮即可追加一组字段。`}):null,t.map((r,i)=>F(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`,children:[F(`div`,{className:`mb-4 flex flex-wrap items-center justify-between gap-3`,children:[F(`div`,{children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:[`Member `,i+1]}),F(`div`,{className:`mt-1 text-sm font-medium text-base-content`,children:[`审批成员 `,i+1]})]}),F(`div`,{className:`flex flex-wrap gap-2`,children:[i>0?I(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name-1),children:`上移`}):null,i<t.length-1?I(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name+1),children:`下移`}):null,I(L,{size:`sm`,type:`text`,onClick:()=>n.remove(r.name),children:`删除`})]})]}),F(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[I(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`输入成员名称`})}),I(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`Owner / Reviewer / QA`})})]})]},r.key)),F(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[I(L,{size:`sm`,color:`primary`,onClick:()=>{n.add({name:`新成员 `+String(t.length+1),role:`QA`})},children:`新增成员`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>n.add({name:`Head reviewer`,role:`QA`},0),children:`头部插入`})]}),r.errors.length>0||r.warnings.length>0?I(Q.ErrorList,{errors:r.errors,warnings:r.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}):null]})})});T(()=>_(t,o,s))});let c=x(`div`,o);r(o,c),y(c,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=x(`div`,c);r(c,m),y(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(m,f(`List snapshot`));let h=x(`div`,c);r(c,h),y(h,`mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65`);let v=E(`rue:slot:anchor`);r(h,v),i(()=>{let e=t.length;T(()=>_(e,h,v))}),r(h,f(` members`));let b=x(`div`,c);r(c,b),y(b,`mt-4 grid gap-3`);let S=E(`rue:slot:anchor`);r(b,S),i(()=>{let e=t.length>0?p(()=>{let e=g(),n=E(`rue:list:start`),a=E(`rue:list:end`);r(e,n),r(e,a);let o=new Map;return i(()=>{o=M({items:t||[],getKey:(e,t)=>String(t),elements:o,parent:n.parentNode,before:a,singleRoot:!0,start:n,renderItem:(e,t,n,a,o)=>{_(p(()=>{let t=g(),n=x(`div`,t);r(t,n),i(()=>{d(n,`key`,String(String(o)))}),y(n,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let a=x(`div`,n);r(n,a),y(a,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(a,f(`成员 `));let s=l(a);r(a,s),i(()=>{u(s,o+1)});let c=x(`div`,n);r(n,c),y(c,`mt-2 text-base font-medium text-base-content`);let p=l(c);r(c,p),i(()=>{u(p,e?.name?String(e.name):`未命名成员`)});let m=x(`div`,n);r(n,m),y(m,`mt-1 text-xs text-base-content/55`);let h=l(m);return r(m,h),i(()=>{u(h,e?.role?String(e.role):`未分配职责`)}),t}),t,n)}})}),e}):p(()=>{let e=g(),t=x(`div`,e);return r(e,t),y(t,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),r(t,f(`当前列表为空。`)),e});T(()=>_(e,b,S))});let C=x(`div`,a);r(a,C),y(C,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let D=x(`div`,C);r(C,D),y(D,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(D,f(`List behavior`));let O=x(`div`,C);r(C,O),y(O,`mt-4 grid gap-4 md:grid-cols-3`);let k=x(`div`,O);r(O,k),y(k,`rounded-[1.25rem] bg-base-200/70 p-4`);let A=x(`div`,k);r(k,A),y(A,`text-sm font-semibold text-base-content`),r(A,f(`列表级规则`));let j=x(`p`,k);r(k,j),y(j,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(j,f(`rules 挂在 Form.List 上，校验整个 members 数组。`));let N=x(`div`,O);r(O,N),y(N,`rounded-[1.25rem] bg-base-200/70 p-4`);let P=x(`div`,N);r(N,P),y(P,`text-sm font-semibold text-base-content`),r(P,f(`重排操作`));let R=x(`p`,N);r(N,R),y(R,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(R,f(`operation.move 保持字段状态跟随成员顺序移动。`));let B=x(`div`,O);r(O,B),y(B,`rounded-[1.25rem] bg-base-200/70 p-4`);let V=x(`div`,B);r(B,V),y(V,`text-sm font-semibold text-base-content`),r(V,f(`错误出口`));let H=x(`p`,B);return r(B,H),y(H,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(H,f(`Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。`)),a})},Ne=()=>{let{form:e,keyword:t,assignee:n,repository:o,reviewer:s,includeDrafts:c,submitted:d}=j(`useSetup:0:0:dup8`,()=>v(()=>{let[e]=Q.useForm();return{form:e,keyword:Q.useWatch(`keyword`,e)??``,assignee:Q.useWatch(`assignee`,e)??``,repository:Q.useWatch(`repository`,e)??``,reviewer:Q.useWatch(`reviewer`,e)??``,includeDrafts:!!Q.useWatch(`includeDrafts`,e),submitted:j(`ref:1:8`,()=>a(`尚未执行检索。`))}}));return p(a=>{let p=x(`div`,a);y(p,`grid gap-6`);let h=E(`rue:component:anchor`);r(p,h),i(()=>{let t=w(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{d.value=$(e)},render:t=>F(m,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:[I(Q.Item,{form:t,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>I(z,{...e,placeholder:`搜索 issue / 页面 / API`})}),I(Q.Item,{form:t,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>I(z,{...e,placeholder:`rue-design`})}),I(Q.Item,{form:t,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>I(z,{...e,placeholder:`team-design`})}),I(Q.Item,{form:t,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>I(z,{...e,placeholder:`infra`})})]}),F(`div`,{className:`mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4`,children:[I(Q.Item,{form:t,name:`includeDrafts`,valuePropName:`checked`,render:e=>I(R,{...e,children:`包含草稿和实验分支`})}),F(`div`,{className:`flex flex-wrap gap-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`执行搜索`}),I(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`清空条件`}),I(L,{type:`text`,onClick:()=>{e.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:`填入示例`})]})]})]})});T(()=>_(t,p,h))});let g=x(`div`,p);r(p,g),y(g,`grid gap-4 lg:grid-cols-2`);let v=x(`div`,g);r(g,v),y(v,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let b=x(`div`,v);r(v,b),y(b,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(b,f(`Query preview`));let S=x(`p`,v);r(v,S),y(S,`mt-3 mb-0 text-sm text-base-content/65`),r(S,f(`这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。`));let C=x(`pre`,v);r(v,C),y(C,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let D=E(`rue:slot:anchor`);r(C,D),i(()=>{let e=we({keyword:String(t),repository:String(o),assignee:String(n),reviewer:String(s),includeDrafts:c})||`暂无 query string`;T(()=>_(e,C,D))});let O=x(`div`,v);r(v,O),y(O,`mt-4 grid gap-3 text-sm text-base-content/80`);let k=x(`div`,O);r(O,k),y(k,`rounded-[1.25rem] bg-base-200/70 p-4`),r(k,f(`关键词：`));let A=l(k);r(k,A),i(()=>{u(A,String(t)||`未填写`)});let j=x(`div`,O);r(O,j),y(j,`rounded-[1.25rem] bg-base-200/70 p-4`),r(j,f(`仓库：`));let M=l(j);r(j,M),i(()=>{u(M,String(o)||`未填写`)});let N=x(`div`,O);r(O,N),y(N,`rounded-[1.25rem] bg-base-200/70 p-4`),r(N,f(`负责人 / 评审人：`));let P=l(N);r(N,P),i(()=>{u(P,String(n)||`未填写`)}),r(N,f(` / `));let B=l(N);r(N,B),i(()=>{u(B,String(s)||`未填写`)});let V=x(`div`,O);r(O,V),y(V,`rounded-[1.25rem] bg-base-200/70 p-4`),r(V,f(`包含草稿：`));let H=l(V);r(V,H),i(()=>{u(H,c?`是`:`否`)});let U=x(`div`,g);r(g,U),y(U,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let W=x(`div`,U);r(U,W),y(W,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(W,f(`Last submit`));let G=x(`pre`,U);r(U,G),y(G,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let K=l(G);return r(G,K),i(()=>{u(K,d.value)}),p})},Pe=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Fe=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ie=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Le=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],Re=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],ze=()=>{let{tabBasic:e,tabInstance:t,tabValidation:n,tabNormalize:o,tabConditional:s,tabNoStyle:c,tabList:m,tabScroll:h,tabInline:b}=j(`useSetup:0:0:dup9`,()=>v(()=>({tabBasic:j(`ref:1:9`,()=>a(`preview`)),tabInstance:j(`ref:1:10`,()=>a(`preview`)),tabValidation:j(`ref:1:11`,()=>a(`preview`)),tabNormalize:j(`ref:1:12`,()=>a(`preview`)),tabConditional:j(`ref:1:13`,()=>a(`preview`)),tabNoStyle:j(`ref:1:14`,()=>a(`preview`)),tabList:j(`ref:1:15`,()=>a(`preview`)),tabScroll:j(`ref:1:16`,()=>a(`preview`)),tabInline:j(`ref:1:17`,()=>a(`preview`))})));return p(a=>{let v=g(),C=E(`rue:component:anchor`);return r(v,C),_(w(B,{children:p(()=>{let a=g(),p=x(`div`,a);r(a,p),y(p,`max-w-none prose prose-sm md:prose-base`);let v=x(`h1`,p);r(p,v),y(v,`mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content`),r(v,f(`Form 表单`));let C=x(`p`,p);r(p,C),y(C,`mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72`),r(C,f(`这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。`));let D=x(`h2`,p);r(p,D),r(D,f(`何时使用`));let O=x(`ul`,p);r(p,O);let k=x(`li`,O);r(O,k),r(k,f(`需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。`));let A=x(`li`,O);r(O,A),r(A,f(`需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。`));let j=x(`li`,O);r(O,j),r(j,f(`需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。`));let N=x(`section`,p);r(p,N),y(N,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let P=E(`rue:list:start`),F=E(`rue:list:end`);r(N,P),r(N,F);let L=new Map;i(()=>{L=M({items:Le||[],getKey:(e,t)=>e.title,elements:L,parent:N,before:F,start:P,renderItem:(e,t,n,r,i)=>{S(w(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description,items:e.items}),t,n,r)}})});let R=x(`div`,p);r(p,R),y(R,`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm`),r(R,f(`当前 Rue runtime 下，推荐通过`));let z=x(`code`,R);r(R,z),r(z,f(`Form.useForm()`)),r(R,f(`或`));let B=l(R);r(R,B),u(B,` `);let H=x(`code`,R);r(R,H);let U=l(H);r(H,U),u(U,`render={form => <Form.Item form={form} name="title" />}`),r(R,f(`显式持有并传递`));let W=l(R);r(R,W),u(W,` `);let G=x(`code`,R);r(R,G),r(G,f(`form`)),r(R,f("。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。"));let K=E(`rue:component:anchor`);r(p,K),i(()=>{let t=w(V,{title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:e,preview:()=>I(Te,{}),code:`<Form
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
`});T(()=>_(t,p,K))});let q=E(`rue:component:anchor`);r(p,q),i(()=>{let e=w(V,{title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:t,preview:()=>I(Ee,{}),code:`const InstanceMethodsShowcase: FC = () => {
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
`});T(()=>_(e,p,q))});let J=E(`rue:component:anchor`);r(p,J),i(()=>{let e=w(V,{title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:n,preview:()=>I(De,{}),code:`const [form] = Form.useForm()

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
`});T(()=>_(e,p,J))});let ee=E(`rue:component:anchor`);r(p,ee),i(()=>{let e=w(V,{title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:o,preview:()=>I(Oe,{}),code:`<Form.Item
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
`});T(()=>_(e,p,ee))});let te=E(`rue:component:anchor`);r(p,te),i(()=>{let e=w(V,{title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:s,preview:()=>I(ke,{}),code:`<Form.Item
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
`});T(()=>_(e,p,te))});let ne=E(`rue:component:anchor`);r(p,ne),i(()=>{let e=w(V,{title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:c,preview:()=>I(Ae,{}),code:`const [form] = Form.useForm()

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
`});T(()=>_(e,p,ne))});let re=E(`rue:component:anchor`);r(p,re),i(()=>{let e=w(V,{title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:m,preview:()=>I(Me,{}),code:`const DynamicListShowcase: FC = () => {
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
                      return '至少保持 2 名审批成员，才适合真实协作流程。'
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
`});T(()=>_(e,p,re))});let ie=E(`rue:component:anchor`);r(p,ie),i(()=>{let e=w(V,{title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:h,preview:()=>I(je,{}),code:`const LongFormScrollShowcase: FC = () => {
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
`});T(()=>_(e,p,ie))});let ae=E(`rue:component:anchor`);r(p,ae),i(()=>{let e=w(V,{title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:b,preview:()=>I(Ne,{}),code:`const [form] = Form.useForm()

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
`});T(()=>_(e,p,ae))});let Y=x(`h2`,p);r(p,Y),r(Y,f(`使用说明`));let oe=x(`p`,p);r(p,oe),r(oe,f(`下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。`));let se=x(`section`,p);r(p,se),y(se,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let X=E(`rue:list:start`),Z=E(`rue:list:end`);r(se,X),r(se,Z);let ce=new Map;i(()=>{ce=M({items:Re||[],getKey:(e,t)=>e.title,elements:ce,parent:se,before:Z,start:X,renderItem:(e,t,n,r,i)=>{S(w(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description}),t,n,r)}})});let le=x(`h2`,p);r(p,le),d(le,`id`,`form-api`),r(le,f(`API`));let ue=x(`p`,p);r(p,ue),r(ue,f(`Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。`));let de=E(`rue:component:anchor`);r(p,de),i(()=>{let e=w(Se,{title:`Form`,rows:Pe});T(()=>_(e,p,de))});let fe=E(`rue:component:anchor`);r(p,fe),i(()=>{let e=w(Se,{title:`Form.Item`,rows:Fe});T(()=>_(e,p,fe))});let pe=E(`rue:component:anchor`);return r(p,pe),i(()=>{let e=w(Se,{title:`Form.List and Hooks`,rows:Ie});T(()=>_(e,p,pe))}),a})}),v,C),v})};export{ze as default};