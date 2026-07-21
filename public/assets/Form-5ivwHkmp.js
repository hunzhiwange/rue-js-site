import{At as e,Cn as t,Ct as n,Lt as r,Mt as i,Nt as a,Sn as o,T as s,Tt as c,dt as l,en as u,fn as d,ft as f,ht as p,ln as m,m as h,mt as g,pn as _,pt as v,s as y,st as b,tn as x,vn as S,wn as C}from"./context-8lXZvIn-.js";import{a as w,l as T,n as E,o as D,r as O,s as k,t as A}from"./vapor-runtime-ygJWVcNn.js";import{a as j,n as M,t as N}from"./vapor-helpers-vapor-CMwHgsXf.js";import{i as P}from"./persistentSidebarPlayground-B3vwD8_y.js";import{n as F,t as I}from"./src-CCTNpCXV.js";import{t as L}from"./button-CvwbmGA0.js";import{t as R}from"./checkbox-CSH_-zmH.js";import{t as z}from"./input-X8WmXKJB.js";import{r as B}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as V}from"./PreviewBlock-ARp---67.js";var H=`__rueFormContext`,U=0,W={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},G=(...e)=>e.filter(Boolean).join(` `),K=e=>!!e&&typeof e==`object`,q=e=>{if(Array.isArray(e))return e.map(e=>q(e));if(K(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=q(e[n])}),t}return e},J=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),te=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ne=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),Y=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},X=(e,t,n)=>{if(t.length===0)return q(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?q(n):X(o[r],i,n),o},re=(e,t)=>{if(t.length===0)return;if(!K(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=re(i[n],r),i)},ie=(e,t)=>{if(!K(t)&&!Array.isArray(t))return q(t);if(Array.isArray(t))return t.map(e=>q(e));let n=K(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=ie(n[e],t[e])}),n},ae=(e,t)=>X({},e,t),oe=e=>e?Array.isArray(e)?e:[e]:[`onChange`],se=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,ce=(e,t)=>{let n=se(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},Z=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,le=e=>{try{return new URL(e),!0}catch{return!1}},ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&le(e);default:return!0}},de=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??W.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??W.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??W.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??W.types?.[e.type??`string`]??"${label} 类型不正确";let a=se(t,e.type);return(r[a]??W[a]??{})[i??`len`]??"${label} 校验失败"},fe=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),pe=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},me=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,he=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=pe(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&Z(n,e.type)?i=de(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=de(e,n,l,o,`whitespace`):!Z(n,e.type)&&e.type&&!ue(n,e.type)?i=de(e,n,l,o,`type`):!Z(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=de(e,n,l,o,`pattern`):!Z(n,e.type)&&e.len!==void 0?ce(n,e.type)!==e.len&&(i=de(e,n,l,o,`len`)):!Z(n,e.type)&&e.min!==void 0?ce(n,e.type)<e.min&&(i=de(e,n,l,o,`min`)):!Z(n,e.type)&&e.max!==void 0&&ce(n,e.type)>e.max&&(i=de(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=fe(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},ge=(e,...t)=>{let[n,r]=t;if(e===`checked`)return K(r)&&typeof r.checked==`boolean`?r.checked:K(n)&&K(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(K(n)&&`target`in n))return n;if(K(n)&&K(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},_e=e=>e?T(e===`error`?e=>{let t=v(`span`,e);return c(t,`text-error`),b(t,g(`!`)),t}:e===`warning`?e=>{let t=v(`span`,e);return c(t,`text-warning`),b(t,g(`!`)),t}:e===`success`?e=>{let t=v(`span`,e);return c(t,`text-success`),b(t,g(`✓`)),t}:e=>{let t=v(`span`,e);return c(t,`loading loading-spinner loading-xs text-primary`),t}):null,ve=e=>{if(e?.span)return`${e.span/24*100}%`},ye=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,be=()=>{let e=j(`ref:1:0`,()=>_(0)),t=new Map,n=new Map,r=new Map,i=new Set,a=!1,o={},s={},c=!1,l=null,u={validateTrigger:[`onChange`],validateMessages:W},d=()=>{e.value+=1,i.forEach(e=>e())},f=()=>{a||(a=!0,queueMicrotask(()=>{a=!1,d()}))},p=e=>{let t=ee(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},m=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ee(t)}`:e.id},h=e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:q(ne(o,e))}},g=e=>{u.onFieldsChange?.([h(e)],D.getFieldsValue(!0))},v=(e,t,n=!0)=>{let r=p(e);Object.assign(r,t),n&&(g(e),d(),f())},y=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&te(t,e))return n}return null},b=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return v(n,{errors:[],warnings:[],validating:!1}),null;v(n,{validating:!0});let a=await he(n,ne(o,n),i,o,e.getLabel(),e.getMessageVariables(),u.validateMessages);return v(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},x=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||te(n,e)||t.getDependencies().some(t=>te(t,e))&&await b(t)}},S=async(e,t,n)=>{if(o=X(o,e,t),n?.touch){let t=p(e);t.touched=!0}d(),g(e),n?.emitValues!==!1&&u.onValuesChange?.(ae(e,t),D.getFieldsValue(!0));let r=y(e);r&&await b(r,n?.triggerName),await x(e),f()},C=e=>{let i=m(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let c=e.getNamePath();if(c&&c.length){let t=e.getInitialValue();!Y(s,c)&&t!==void 0&&(s=X(s,c,t)),!Y(o,c)&&t!==void 0&&(o=X(o,c,t)),p(c)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let s=e.getNamePath();!s||!s.length||ye(e,u.preserve)||(o=re(o,s),r.delete(ee(s)),d())}},w=e=>c?!1:(s=q(e??{}),o=q(e??{}),c=!0,!0),T=async e=>{let n=e?.map(e=>J(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=m(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>te(i,e)))continue;let o=await b(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:D.getFieldsValue(!0),errorFields:r,outOfDate:!1};return D.getFieldsValue(!0)},E=(e,t)=>{let n=J(e),r=u.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>l?.querySelector(`#${CSS.escape(e)}`)).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},D={getFieldValue(t){return e.value,q(ne(o,J(t)))},getFieldsValue(t){return e.value,t===!0||t==null?q(o):t.reduce((e,t)=>{let n=J(t);return X(e,n,ne(o,n))},{})},setFieldValue(e,t){S(J(e),t,{emitValues:!1})},setFieldsValue(e){o=ie(o,e),d()},resetFields(e){if(!e?.length){o=q(s),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),d();return}e.forEach(e=>{let t=J(e),n=ne(s,t);o=n===void 0?re(o,t):X(o,t,n);let r=p(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),d()},validateFields:T,submit(){T().then(e=>{u.onFinish?.(e)}).catch(e=>{if(u.onFinishFailed?.(e),u.scrollToFirstError&&e.errorFields[0]){let t=u.scrollToFirstError===!0?{block:`center`}:u.scrollToFirstError;E(e.errorFields[0].name,t)}})},scrollToField:E,isFieldTouched(e){return p(J(e)).touched},getFieldError(e){return[...p(J(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=m(t);return e.has(n)?!1:(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=J(e),n=p(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){u=e},ensureInitialized:w,registerField:C,getMeta:p,validateFieldByPath(e,t){let n=y(e);return n?b(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return S(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return S(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return u.validateTrigger},setRootElement(e){l=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){d()}}};return D},xe=(e,t,r)=>typeof r==`function`?r(e,{required:t}):r===`optional`&&!t?T(e=>{let t=v(`span`,e);return c(t,`ml-2 text-xs text-base-content/45`),n(t,`aria-hidden`,`true`),b(t,g(`optional`)),t}):r!==!1&&t?T(e=>{let t=v(`span`,e);return c(t,`ml-1 text-error`),n(t,`aria-hidden`,`true`),b(t,g(`*`)),t}):null,Q=Object.assign(e=>{let n=j(`useSetup:0:0:dup2`,()=>t(()=>{let{className:t,style:n,children:i,render:a,component:c,layout:l,initialValues:u,form:f,name:p,preserve:h,validateMessages:g,validateTrigger:_,scrollToFirstError:v,onValuesChange:b,onFieldsChange:x,onFinish:S,onFinishFailed:C,onSubmit:T,...E}=e,D=j(`computed:1:39`,()=>r(()=>m()?.propsRO??{children:e.children})),k=D,A=j(`useRef:1:40`,()=>o()),M=j(`useRef:1:41`,()=>o(null)),N=j(`useRef:1:42`,()=>o(null)),F=j(`useRef:1:43`,()=>o(void 0)),L=j(`useRef:1:44`,()=>o(null));A.current||=e.form??be();let R=j(`computed:1:45`,()=>r(()=>e.form??A.current)),z=R,B=j(`computed:1:46`,()=>r(()=>z.get().__INTERNAL__.ensureInitialized(e.initialValues))),V=B;z.get().__INTERNAL__.setRuntimeOptions({name:e.name,preserve:e.preserve,validateTrigger:oe(e.validateTrigger),validateMessages:{...W,...e.validateMessages},scrollToFirstError:e.scrollToFirstError,onValuesChange:e.onValuesChange,onFieldsChange:e.onFieldsChange,onFinish:e.onFinish,onFinishFailed:e.onFinishFailed}),F.current!==z.get()&&(L.current?.(),F.current=z.get(),L.current=z.get().__INTERNAL__.subscribe(()=>{queueMicrotask(J)}));let H=t=>{t.preventDefault(),e.onSubmit?.(t),z.get().submit()};O(()=>{J(),V.get()&&z.get().__INTERNAL__.emitUpdate()}),w(()=>{J()}),d(()=>{L.current?.(),L.current=null,F.current=void 0});let U=()=>typeof e.render==`function`?I(y,{children:e.render(z.get())}):typeof e.children==`function`&&e.children.kind!==`block-factory`?I(y,{children:e.children(z.get())}):I(P,{source:k.get()}),G=j(`computed:1:47`,()=>r(()=>typeof e.render==`function`||typeof e.children==`function`&&e.children.kind!==`block-factory`)),K=G,q=K.get()?U():void 0,J=()=>{N.current&&(s(q??U(),N.current),q=void 0)},ee=e=>{N.current=e,e&&J()};return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:c,__rue_rest_omit_5:l,__rue_rest_omit_6:u,__rue_rest_omit_7:f,__rue_rest_omit_8:p,__rue_rest_omit_9:h,__rue_rest_omit_10:g,__rue_rest_omit_11:_,__rue_rest_omit_12:v,__rue_rest_omit_13:b,__rue_rest_omit_14:x,__rue_rest_omit_15:S,__rue_rest_omit_16:C,__rue_rest_omit_17:T,rest:E,slotSource:D,internalFormRef:A,rootElementRef:M,contentHostRef:N,subscriptionFormRef:F,unsubscribeRenderRef:L,resolvedForm:R,initializedNow:B,handleNativeSubmit:H,resolveContent:U,hasRenderConsumer:G,renderManagedContent:J,assignContentHost:ee,content:j(`computed:1:48`,()=>r(()=>K.get()?I(`span`,{ref:ee,style:{display:`contents`}}):U())),pendingManagedContent:q}})),{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:p,__rue_rest_omit_4:g,__rue_rest_omit_5:_,__rue_rest_omit_6:C,__rue_rest_omit_7:E,__rue_rest_omit_8:k,__rue_rest_omit_9:M,__rue_rest_omit_10:N,__rue_rest_omit_11:F,__rue_rest_omit_12:L,__rue_rest_omit_13:R,__rue_rest_omit_14:z,__rue_rest_omit_15:B,__rue_rest_omit_16:V,__rue_rest_omit_17:H,rest:U,slotSource:K,internalFormRef:q,rootElementRef:J,contentHostRef:ee,subscriptionFormRef:te,unsubscribeRenderRef:ne,resolvedForm:Y,initializedNow:X,handleNativeSubmit:re,resolveContent:ie,hasRenderConsumer:ae,renderManagedContent:se,assignContentHost:ce,content:Z}=n,{pendingManagedContent:le}=n;if((e.component===void 0?`form`:e.component)===!1)return Z.get();let ue={...U,ref:e=>{J.current=e,Y.get().__INTERNAL__.setRootElement(e)},onSubmit:(e.component===void 0?`form`:e.component)===`form`?re:void 0,className:G(`rue-form`,(e.layout===void 0?`horizontal`:e.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,e.className),style:e.style,"data-rue-form":`true`};if((e.component===void 0?`form`:e.component)===`form`)return T(e=>{let t=v(`form`,e);x(()=>{a(t,ue)});let n=l(`rue:slot:anchor`);return b(t,n),x(()=>{let e=Z.get();S(()=>D(e,t,n))}),t});if((e.component===void 0?`form`:e.component)===`div`)return T(e=>{let t=v(`div`,e);x(()=>{a(t,ue)});let n=l(`rue:slot:anchor`);return b(t,n),x(()=>{let e=Z.get();S(()=>D(e,t,n))}),t});if((e.component===void 0?`form`:e.component)===`section`)return T(e=>{let t=v(`section`,e);x(()=>{a(t,ue)});let n=l(`rue:slot:anchor`);return b(t,n),x(()=>{let e=Z.get();S(()=>D(e,t,n))}),t});if(typeof(e.component===void 0?`form`:e.component)==`string`)return h(e.component===void 0?`form`:e.component,ue,Z.get());let de=e.component===void 0?`form`:e.component;return T(e=>{let t=f(),n=l(`rue:component:anchor`);return b(t,n),x(()=>{let e=A(de,{...ue,children:Z.get()});S(()=>D(e,t,n))}),t})},{Item:i=>{let{slotSource:a,formInstance:p,entityIdRef:h,unregisterRef:g,subscriptionFormRef:_,unsubscribeRenderRef:k,renderVersion:A,setRenderVersion:M,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:z,latestPropsRef:B,noStyleHostRef:V,controlHostRef:H,helpHostRef:W,feedbackHostRef:K,namePath:te,nameKey:ne,layout:Y,required:X,labelAlign:re,labelWrap:ie,labelCol:ae,wrapperCol:se,controlId:ce,getRenderState:Z,renderManagedContent:le,assignControlHost:ue}=j(`useSetup:0:0:dup1`,()=>t(()=>{let e=j(`computed:1:2`,()=>r(()=>m()?.propsRO??{children:i.children})),t=e,a=j(`computed:1:3`,()=>r(()=>i.form)),f=a,p=j(`useRef:1:4`,()=>o()),h=j(`useRef:1:5`,()=>o(null)),g=j(`useRef:1:6`,()=>o(void 0)),_=j(`useRef:1:7`,()=>o(null)),[E,k]=j(`useState:1:8`,()=>C(0,{kind:`ref`})),A=j(`useRef:1:9`,()=>o()),M=j(`useRef:1:10`,()=>o()),N=j(`useRef:1:11`,()=>o()),L=j(`useRef:1:12`,()=>o(i)),R=j(`useRef:1:13`,()=>o(null)),z=j(`useRef:1:14`,()=>o(null)),B=j(`useRef:1:15`,()=>o(null)),V=j(`useRef:1:16`,()=>o(null));if(L.current=i,p.current||=`rue-form-item-${U++}`,i.name!=null&&!f.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let H=j(`computed:1:17`,()=>r(()=>i.name==null?void 0:J(i.name))),W=H,G=j(`computed:1:18`,()=>r(()=>W.get()?ee(W.get()):void 0)),K=G,te=j(`computed:1:19`,()=>r(()=>i.layout??`horizontal`)),ne=j(`computed:1:20`,()=>r(()=>me(i.required,i.rules))),Y=j(`computed:1:21`,()=>r(()=>i.labelAlign??`right`)),X=j(`computed:1:22`,()=>r(()=>i.labelCol)),re=j(`computed:1:23`,()=>r(()=>i.wrapperCol)),ie=j(`computed:1:24`,()=>r(()=>i.htmlFor??(W.get()?W.get().map(e=>String(e)).join(`__`):void 0))),ae=ie;if(W.get()&&f.get()&&N.current!==K.get()){let e=L.current??i;h.current?.(),h.current=f.get().__INTERNAL__.registerField({id:p.current,kind:`item`,getNamePath:()=>W.get(),getRules:()=>e.rules??[],getRequired:()=>e.required,getLabel:()=>e.label,getMessageVariables:()=>e.messageVariables,getValidateTrigger:()=>oe(e.validateTrigger),getDependencies:()=>(e.dependencies??[]).map(e=>J(e)),getInitialValue:()=>e.initialValue,getPreserve:()=>e.preserve}),N.current=K.get()}let se=()=>{let e=f.get()?.getFieldsValue(!0)??{},t=W.get()&&f.get()?f.get().__INTERNAL__.getMeta(W.get()):null;return{allValues:e,meta:t,currentValue:W.get()&&f.get()?f.get().getFieldValue(W.get()):void 0,triggerName:i.trigger??`onChange`,validateTrigger:oe(i.validateTrigger),status:i.validateStatus??(t?.validating?`validating`:t?.errors.length?`error`:t?.warnings.length?`warning`:t?.touched&&(i.rules?.length??0)>0?`success`:void 0)}},ce=()=>{let{allValues:e,meta:r,currentValue:a,triggerName:o,validateTrigger:u,status:d}=se(),p=i.render??i.children,m;if(typeof p==`function`&&p.kind!==`block-factory`&&W.get()&&f.get()&&!i.shouldUpdate){let e={...i.getValueProps?i.getValueProps(a):{[i.valuePropName??`value`]:i.valuePropName===`checked`?!!a:a},id:ae.get()};e[o]=(...e)=>{let t=i.getValueFromEvent?i.getValueFromEvent(...e):ge(i.valuePropName??`value`,...e),n=i.normalize?i.normalize(t,a,f.get().getFieldsValue(!0)):t;f.get().__INTERNAL__.updateValueFromControl(W.get(),n,{touch:!0,triggerName:o})},u.filter(e=>e!==o).forEach(t=>{e[t]=(...e)=>{f.get().__INTERNAL__.validateFieldByPath(W.get(),t)}}),m=p(e,{value:a,touched:r?.touched??!1,validating:r?.validating??!1,errors:r?.errors??[],warnings:r?.warnings??[],status:d},f.get())}else typeof p==`function`&&p.kind!==`block-factory`&&(!W.get()||i.shouldUpdate)?(((typeof i.shouldUpdate==`function`?i.shouldUpdate(M.current??e,e):i.shouldUpdate===!0||A.current===void 0)||A.current===void 0)&&(A.current=p(e,f.get())),M.current=q(e),m=A.current):m=I(P,{source:t.get()});if(i.noStyle){R.current&&s(I(y,{children:m}),R.current);return}z.current&&s(I(y,{children:m}),z.current),B.current&&s(i.help===void 0?r&&(r.errors.length>0||r.warnings.length>0)?F(`ul`,{className:`mt-2 grid gap-1 text-xs`,children:[r.errors.map((e,t)=>T(r=>{let i=v(`li`,r);x(()=>{n(i,`key`,String(`error-${t}`))}),c(i,`text-error`);let a=l(`rue:slot:anchor`);return b(i,a),x(()=>{let t=e;S(()=>D(t,i,a))}),i})),r.warnings.map((e,t)=>T(r=>{let i=v(`li`,r);x(()=>{n(i,`key`,String(`warning-${t}`))}),c(i,`text-warning`);let a=l(`rue:slot:anchor`);return b(i,a),x(()=>{let t=e;S(()=>D(t,i,a))}),i}))]}):I(y,{}):I(y,{children:i.help}),B.current),V.current&&s(i.hasFeedback?I(y,{children:_e(d)}):I(y,{}),V.current)};return g.current!==f.get()&&(_.current?.(),g.current=f.get(),_.current=f.get()?f.get().__INTERNAL__.subscribe(()=>{k(E.value+1)}):null),j(`watch:1:25`,()=>u(()=>E.value,()=>{ce()},{immediate:!0})),d(()=>{h.current?.(),h.current=null,_.current?.(),_.current=null,g.current=void 0}),O(()=>{ce()}),w(()=>{ce()}),{slotSource:e,formInstance:a,entityIdRef:p,unregisterRef:h,subscriptionFormRef:g,unsubscribeRenderRef:_,renderVersion:E,setRenderVersion:k,renderCacheRef:A,previousValuesRef:M,lastRegisteredKeyRef:N,latestPropsRef:L,noStyleHostRef:R,controlHostRef:z,helpHostRef:B,feedbackHostRef:V,namePath:H,nameKey:G,layout:te,required:ne,labelAlign:Y,labelWrap:!1,labelCol:X,wrapperCol:re,controlId:ie,getRenderState:se,renderManagedContent:ce,assignControlHost:e=>{z.current=e,e&&queueMicrotask(()=>{ce()})}}}));if(i.noStyle)return T(t=>{let n=v(`div`,t),r=N(n,()=>V);return E(()=>{r()}),e(n,{display:`contents`}),n});let de=i.label===void 0?null:F(`label`,{className:G(`text-[0.95rem] leading-7 font-medium text-base-content/78`,re.get()===`left`?`text-left`:`text-right md:text-right`,ie?`whitespace-normal`:`md:whitespace-nowrap`),style:{width:Y.get()===`horizontal`?ve(ae.get()):void 0},for:ce.get(),children:[I(`span`,{children:i.label}),Y.get()===`horizontal`&&i.colon!==!1?I(`span`,{className:`ml-1 text-base-content/45`,children:`:`}):null,xe(i.label,X.get(),!0)]}),fe=Y.get()===`horizontal`&&se.get()?.offset?{marginLeft:`${se.get().offset/24*100}%`,width:ve(se.get())}:Y.get()===`horizontal`?{width:ve(se.get())}:void 0;return T(t=>{let r=v(`div`,t);x(()=>{c(r,G(`rue-form-item`,i.hidden?`hidden`:void 0,Y.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,i.className))}),x(()=>{let t=i.style;e(r,t)});let a=l(`rue:slot:anchor`);b(r,a),x(()=>{let e=de;S(()=>D(e,r,a))});let o=v(`div`,r);b(r,o),c(o,`min-w-0 flex-1`),x(()=>{e(o,fe)});let s=v(`div`,o);b(o,s),c(s,`flex items-start gap-3`);let u=v(`div`,s);b(s,u),x(()=>{n(u,`key`,String(ne.get()??`__rue_form_item_control__`))}),c(u,`min-w-0 flex-1`);let d=N(u,()=>ue);E(()=>{d()});let p=l(`rue:slot:anchor`);b(s,p),x(()=>{let e=i.hasFeedback?T(()=>{let e=f(),t=v(`span`,e);b(e,t),c(t,`mt-3 shrink-0`);let n=N(t,()=>K);return E(()=>{n()}),e}):``;S(()=>D(e,s,p))});let m=v(`div`,o);b(o,m),c(m,`mt-3`);let h=N(m,()=>W);E(()=>{h()});let g=l(`rue:slot:anchor`);return b(o,g),x(()=>{let e=i.extra==null?``:T(()=>{let e=f(),t=v(`div`,e);b(e,t),c(t,`mt-3 text-[0.8rem] leading-6 text-base-content/55`);let n=l(`rue:slot:anchor`);return b(t,n),x(()=>{let e=i.extra;S(()=>D(e,t,n))}),e});S(()=>D(e,o,g))}),r})},List:e=>{let{form:t,name:n,children:r,render:i,initialValue:a,rules:s}=e,c=t;if(!c)throw Error(`Form.List 需要显式传入 form`);let l=i??r;if(typeof l!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let u=J(n),f=j(`useRef:1:26`,()=>o()),p=j(`useRef:1:27`,()=>o(null)),m=j(`useRef:1:28`,()=>o(void 0)),h=j(`useRef:1:29`,()=>o(null)),[g,_]=j(`useState:1:30`,()=>C(0,{kind:`ref`})),v=j(`useRef:1:31`,()=>o(s)),y=j(`useRef:1:32`,()=>o(a)),b=j(`useRef:1:33`,()=>o([])),x=j(`useRef:1:34`,()=>o(0));return v.current=s,y.current=a,f.current||=`rue-form-list-${U++}`,p.current||=c.__INTERNAL__.registerField({id:f.current,kind:`list`,getNamePath:()=>u,getRules:()=>v.current??[],getRequired:()=>void 0,getLabel:()=>u[u.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>y.current,getPreserve:()=>!0}),m.current!==c&&(h.current?.(),m.current=c,h.current=c.__INTERNAL__.subscribe(()=>{_(g.value+1)})),d(()=>{p.current?.(),p.current=null,h.current?.(),h.current=null,m.current=void 0}),(()=>{g.value;let e=c.getFieldValue(u),t=Array.isArray(e)?e:[],n=c.__INTERNAL__.getMeta(u),r=b.current??[],i=x.current??0;b.current??=r,x.current??=i;let a=()=>{let e=x.current??0;return x.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(b.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),c.__INTERNAL__.updateListValue(u,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),c.__INTERNAL__.updateListValue(u,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),c.__INTERNAL__.updateListValue(u,i)}},s=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return I(`div`,{"data-rue-form-list-shell":`true`,children:l(s,o,{errors:n.errors,warnings:n.warnings})},s.map(e=>`${String(e.fieldKey)}:${e.name}`).join(`|`))})()},ErrorList:a=>{let{list:o}=j(`useSetup:0:0`,()=>t(()=>({list:j(`computed:1:1`,()=>r(()=>[...a.errors??[],...a.warnings??[]].filter(e=>e!=null)))})));return o.get().length?T(t=>{let r=v(`ul`,t);x(()=>{c(r,G(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,a.className))}),x(()=>{let t=a.style;e(r,t)});let o=l(`rue:list:start`),s=l(`rue:list:end`);b(r,o),b(r,s);let u=new Map;x(()=>{u=M({items:(a.errors??[])||[],getKey:(e,t)=>`error-${t}`,elements:u,parent:o.parentNode,before:s,singleRoot:!0,start:o,renderItem:(e,t,r,a,o)=>{D(T(()=>{let t=f(),r=v(`li`,t);b(t,r),x(()=>{n(r,`key`,String(`error-${o}`))}),c(r,`text-error`);let a=p(r);return b(r,a),x(()=>{i(a,e)}),t}),t,r)}})}),b(r,g(` `));let d=l(`rue:list:start`),m=l(`rue:list:end`);b(r,d),b(r,m);let h=new Map;return x(()=>{h=M({items:(a.warnings??[])||[],getKey:(e,t)=>`warning-${t}`,elements:h,parent:d.parentNode,before:m,singleRoot:!0,start:d,renderItem:(e,t,r,a,o)=>{D(T(()=>{let t=f(),r=v(`li`,t);b(t,r),x(()=>{n(r,`key`,String(`warning-${o}`))}),c(r,`text-warning`);let a=p(r);return b(r,a),x(()=>{i(a,e)}),t}),t,r)}})}),r}):null},useForm:e=>{let t=j(`useRef:1:38`,()=>o());return t.current||=e??be(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,t)=>{let n=m()?.propsRO?.[H],r=t??n?.form,[i,a]=j(`useState:1:35`,()=>C(0,{kind:`ref`})),s=j(`useRef:1:36`,()=>o(void 0)),c=j(`useRef:1:37`,()=>o(null));if(s.current!==r&&(c.current?.(),s.current=r,c.current=r?r.__INTERNAL__.subscribe(()=>{a(i.value+1)}):null),d(()=>{c.current?.(),c.current=null,s.current=void 0}),r)return i.value,r.getFieldValue(e)}}),Se=e=>T(t=>{let r=v(`div`,t);c(r,`not-prose my-6 lg:my-8`);let i=v(`h3`,r);b(r,i),c(i,`mt-0 mb-3 text-base font-semibold text-base-content`);let a=l(`rue:slot:anchor`);b(i,a),x(()=>{let t=e.title;S(()=>D(t,i,a))});let o=v(`div`,r);b(r,o),c(o,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=v(`table`,o);b(o,s),c(s,`table table-zebra`);let u=v(`thead`,s);b(s,u);let d=v(`tr`,u);b(u,d);let p=v(`th`,d);b(d,p),b(p,g(`属性`));let m=v(`th`,d);b(d,m),b(m,g(`说明`));let h=v(`th`,d);b(d,h),b(h,g(`类型`));let _=v(`th`,d);b(d,_),b(_,g(`默认值`));let y=v(`tbody`,s);b(s,y);let C=l(`rue:list:start`),w=l(`rue:list:end`);b(y,C),b(y,w);let E=new Map;return x(()=>{E=M({items:e.rows||[],getKey:(e,t)=>e.prop,elements:E,parent:y,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,a)=>{D(T(()=>{let t=f(),r=v(`tr`,t);b(t,r),x(()=>{n(r,`key`,String(e.prop))});let i=v(`td`,r);b(r,i);let a=v(`code`,i);b(i,a);let o=l(`rue:slot:anchor`);b(a,o),x(()=>{let t=e.prop;S(()=>D(t,a,o))});let s=v(`td`,r);b(r,s);let c=l(`rue:slot:anchor`);b(s,c),x(()=>{let t=e.description;S(()=>D(t,s,c))});let u=v(`td`,r);b(r,u);let d=v(`code`,u);b(u,d);let p=l(`rue:slot:anchor`);b(d,p),x(()=>{let t=e.type;S(()=>D(t,d,p))});let m=v(`td`,r);b(r,m);let h=v(`code`,m);b(m,h);let g=l(`rue:slot:anchor`);return b(h,g),x(()=>{let t=e.defaultValue;S(()=>D(t,h,g))}),t}),t,r)}})}),r}),Ce=e=>T(t=>{let r=v(`div`,t);c(r,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let a=l(`rue:slot:anchor`);b(r,a),x(()=>{let t=e.eyebrow?T(()=>{let t=f(),n=v(`div`,t);b(t,n),c(n,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let r=l(`rue:slot:anchor`);return b(n,r),x(()=>{let t=e.eyebrow;S(()=>D(t,n,r))}),t}):``;S(()=>D(t,r,a))});let o=v(`h3`,r);b(r,o),c(o,`mt-3 mb-0 text-lg font-semibold text-base-content`);let s=l(`rue:slot:anchor`);b(o,s),x(()=>{let t=e.title;S(()=>D(t,o,s))});let u=v(`p`,r);b(r,u),c(u,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let d=l(`rue:slot:anchor`);b(u,d),x(()=>{let t=e.description;S(()=>D(t,u,d))});let m=l(`rue:slot:anchor`);return b(r,m),x(()=>{let t=e.items?.length?T(()=>{let t=f(),r=v(`ul`,t);b(t,r),c(r,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let a=l(`rue:list:start`),o=l(`rue:list:end`);b(r,a),b(r,o);let s=new Map;return x(()=>{s=M({items:e.items||[],getKey:(e,t)=>e,elements:s,parent:r,before:o,singleRoot:!0,trackIndex:!1,start:a,renderItem:(e,t,r,a,o)=>{D(T(()=>{let t=f(),r=v(`li`,t);b(t,r),x(()=>{n(r,`key`,String(e))});let a=p(r);return b(r,a),x(()=>{i(a,e)}),t}),t,r)}})}),t}):``;S(()=>D(t,r,m))}),r}),$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},we=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Te=()=>{let{initialValues:e,draft:n,result:r}=j(`useSetup:0:0`,()=>t(()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0};return{initialValues:e,draft:j(`ref:1:0`,()=>_($(e))),result:j(`ref:1:1`,()=>_(`等待提交，右侧会展示 payload 或校验摘要。`))}}));return T(t=>{let a=v(`div`,t);c(a,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let o=l(`rue:component:anchor`);b(a,o),x(()=>{let t=A(Q,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:e,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{n.value=$(t)},onFinish:e=>{r.value=`提交成功
`+$(e)},onFinishFailed:e=>{r.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>F(y,{children:[I(Q.Item,{form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>I(z,{...e,placeholder:`输入项目名称`})}),I(Q.Item,{form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>I(z,{...e,placeholder:`team@rue.dev`})}),I(Q.Item,{form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>I(R,{...e,children:`允许直接覆盖 staging 配置`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`保存表单`}),I(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`重置`})]})]})});S(()=>D(t,a,o))});let s=v(`div`,a);b(a,s),c(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let u=v(`div`,s);b(s,u),c(u,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(u,g(`Submit result`));let d=v(`p`,s);b(s,d),c(d,`mt-3 mb-0 text-sm text-base-content/65`),b(d,g(`这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。`));let f=v(`div`,s);b(s,f),c(f,`mt-4 grid gap-4`);let m=v(`div`,f);b(f,m),c(m,`rounded-[1.25rem] bg-base-200/70 p-4`);let h=v(`div`,m);b(m,h),c(h,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(h,g(`Live draft`));let _=v(`pre`,m);b(m,_),c(_,`mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80`);let C=p(_);b(_,C),x(()=>{i(C,n.value)});let w=v(`div`,f);b(f,w),c(w,`rounded-[1.25rem] bg-neutral p-4 text-neutral-content`);let T=v(`div`,w);b(w,T),c(T,`text-xs uppercase tracking-[0.22em] text-neutral-content/60`),b(T,g(`Last submit`));let E=v(`pre`,w);b(w,E),c(E,`mt-3 whitespace-pre-wrap break-words text-xs leading-6`);let O=p(E);return b(E,O),x(()=>{i(O,r.value)}),a})},Ee=()=>{let{form:e,role:n,region:r,notes:a,activity:o}=j(`useSetup:0:0:dup1`,()=>t(()=>{let[e]=Q.useForm();return{form:e,role:Q.useWatch(`role`,e)??`viewer`,region:Q.useWatch(`region`,e)??`cn-hz`,notes:Q.useWatch(`notes`,e)??``,activity:j(`ref:1:2`,()=>_(`等待实例方法操作。`))}}));return T(t=>{let s=v(`div`,t);c(s,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let u=l(`rue:component:anchor`);b(s,u),x(()=>{let t=A(Q,{form:e,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{o.value=`submit()
`+$(e)},onFinishFailed:e=>{o.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>F(y,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>I(z,{...e,placeholder:`viewer / editor / admin`})}),I(Q.Item,{form:t,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>I(z,{...e,placeholder:`cn-hz`})})]}),I(Q.Item,{form:t,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>I(z,{...e,placeholder:`写入审批说明或 rollout 策略`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[I(L,{size:`sm`,onClick:()=>{e.setFieldValue(`role`,`editor`),o.value=`setFieldValue('role', 'editor')`},children:`设为 editor`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),o.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:`填充预设`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),o.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:`填入异常值`}),I(L,{size:`sm`,type:`text`,onClick:()=>{e.resetFields(),o.value=`resetFields()`},children:`恢复初始值`}),I(L,{size:`sm`,color:`primary`,onClick:()=>{e.submit()},children:`程序化提交`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>{e.validateFields().then(e=>{o.value=`validateFields()
`+$(e)}).catch(e=>{o.value=`validateFields() failed
`+$(e.errorFields)})},children:`validateFields`})]})]})});S(()=>D(t,s,u))});let d=v(`div`,s);b(s,d),c(d,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let f=v(`div`,d);b(d,f),c(f,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(f,g(`Reactive summary`));let m=v(`p`,d);b(d,m),c(m,`mt-3 mb-0 text-sm text-base-content/65`),b(m,g(`这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。`));let h=v(`div`,d);b(d,h),c(h,`mt-4 grid gap-3`);let _=v(`div`,h);b(h,_),c(_,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let C=v(`div`,_);b(_,C),c(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(C,g(`role`));let w=v(`div`,_);b(_,w),c(w,`mt-2 text-lg font-semibold text-base-content`);let T=p(w);b(w,T),x(()=>{i(T,String(n))});let E=v(`div`,h);b(h,E),c(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let O=v(`div`,E);b(E,O),c(O,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(O,g(`region`));let k=v(`div`,E);b(E,k),c(k,`mt-2 text-lg font-semibold text-base-content`);let j=p(k);b(k,j),x(()=>{i(j,String(r))});let M=v(`div`,h);b(h,M),c(M,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let N=v(`div`,M);b(M,N),c(N,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(N,g(`notes`));let P=v(`div`,M);b(M,P),c(P,`mt-2 text-sm leading-6 text-base-content/80`);let R=p(P);b(P,R),x(()=>{i(R,String(a)||`未填写`)});let B=v(`pre`,d);b(d,B),c(B,`mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6`);let V=p(B);return b(B,V),x(()=>{i(V,o.value)}),s})},De=()=>{let{form:e,password:n,confirm:r,website:a,status:o}=j(`useSetup:0:0:dup2`,()=>t(()=>{let[e]=Q.useForm();return{form:e,password:Q.useWatch(`password`,e)??``,confirm:Q.useWatch(`confirm`,e)??``,website:Q.useWatch(`website`,e)??``,status:j(`ref:1:3`,()=>_(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`))}}));return T(t=>{let s=v(`div`,t);c(s,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let u=l(`rue:component:anchor`);b(s,u),x(()=>{let t=A(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{o.value=`提交成功
`+$(e)},onFinishFailed:e=>{o.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>F(y,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>I(z,{...e,placeholder:`release-admin`})}),I(Q.Item,{form:t,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>I(z,{...e,placeholder:`https://prod.rue.dev`})})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>I(z,{...e,placeholder:`至少 8 位`})}),I(Q.Item,{form:t,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>I(z,{...e,placeholder:`再次输入密码`})})]}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`执行校验`}),I(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`清空状态`})]})]})});S(()=>D(t,s,u))});let d=v(`div`,s);b(s,d),c(d,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let f=v(`div`,d);b(d,f),c(f,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(f,g(`Validation notes`));let m=v(`p`,d);b(d,m),c(m,`mt-3 mb-0 text-sm text-base-content/65`),b(m,g("这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。"));let h=v(`div`,d);b(d,h),c(h,`mt-4 grid gap-3`);let _=v(`div`,h);b(h,_),c(_,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let C=v(`div`,_);b(_,C),c(C,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(C,g(`Password match`));let w=v(`div`,_);b(_,w),c(w,`mt-2 text-base font-semibold text-base-content`);let T=p(w);b(w,T),x(()=>{i(T,n&&r?n===r?`已匹配`:`未匹配`:`等待输入`)});let E=v(`div`,h);b(h,E),c(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let O=v(`div`,E);b(E,O),c(O,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(O,g(`Website warning`));let k=v(`div`,E);b(E,k),c(k,`mt-2 text-base font-semibold text-base-content`);let j=p(k);b(k,j),x(()=>{i(j,a?String(a).startsWith(`https://`)?`格式建议通过`:`建议补上 https://`:`未填写`)});let M=v(`pre`,d);b(d,M),c(M,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let N=p(M);return b(M,N),x(()=>{i(N,o.value)}),s})},Oe=()=>{let{form:e,initialValues:n,issueId:r,slug:a,branch:o,snapshot:s}=j(`useSetup:0:0:dup3`,()=>t(()=>{let[e]=Q.useForm(),t={issueId:`2048`,slug:`release-planning`,branch:`main`};return{form:e,initialValues:t,issueId:Q.useWatch(`issueId`,e)??``,slug:Q.useWatch(`slug`,e)??``,branch:Q.useWatch(`branch`,e)??``,snapshot:j(`ref:1:4`,()=>_($(t)))}}));return T(t=>{let u=v(`div`,t);c(u,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=l(`rue:component:anchor`);b(u,d),x(()=>{let t=A(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:n,onValuesChange:(e,t)=>{s.value=$(t)},onFinish:e=>{s.value=`提交成功
`+$(e)},render:t=>F(y,{children:[I(Q.Item,{form:t,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>I(z,{...e,placeholder:`#2048`})}),I(Q.Item,{form:t,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>I(z,{...e,placeholder:`release-planning`})}),I(Q.Item,{form:t,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>I(z,{...e,placeholder:`main / release/v1-2`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`应用转换`}),I(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:`填充示例`})]})]})});S(()=>D(t,u,d))});let f=v(`div`,u);b(u,f),c(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=v(`div`,f);b(f,m),c(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(m,g(`Store snapshot`));let h=v(`p`,f);b(f,h),c(h,`mt-3 mb-0 text-sm text-base-content/65`),b(h,g("这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。"));let _=v(`div`,f);b(f,_),c(_,`mt-4 grid gap-3`);let C=v(`div`,_);b(_,C),c(C,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let w=v(`div`,C);b(C,w),c(w,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(w,g(`issueId`));let T=v(`div`,C);b(C,T),c(T,`mt-2 text-lg font-semibold text-base-content`);let E=p(T);b(T,E),x(()=>{i(E,String(r)||`空`)});let O=v(`div`,_);b(_,O),c(O,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=v(`div`,O);b(O,k),c(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(k,g(`slug`));let j=v(`div`,O);b(O,j),c(j,`mt-2 text-lg font-semibold text-base-content`);let M=p(j);b(j,M),x(()=>{i(M,String(a)||`空`)});let N=v(`div`,_);b(_,N),c(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let P=v(`div`,N);b(N,P),c(P,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(P,g(`branch`));let R=v(`div`,N);b(N,R),c(R,`mt-2 text-lg font-semibold text-base-content`);let B=p(R);b(R,B),x(()=>{i(B,String(o)||`空`)});let V=v(`pre`,f);b(f,V),c(V,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let H=p(V);return b(V,H),x(()=>{i(H,s.value)}),u})},ke=()=>{let{form:e,enableCanary:n,publishMode:r,batchSize:a,approveBy:o,result:s}=j(`useSetup:0:0:dup4`,()=>t(()=>{let[e]=Q.useForm();return{form:e,enableCanary:!!Q.useWatch(`enableCanary`,e),publishMode:Q.useWatch(`publishMode`,e)??`manual`,batchSize:Q.useWatch(`batchSize`,e)??``,approveBy:Q.useWatch(`approveBy`,e)??``,result:j(`ref:1:5`,()=>_(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`))}}));return T(t=>{let u=v(`div`,t);c(u,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=l(`rue:component:anchor`);b(u,d),x(()=>{let t=A(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{s.value=`提交成功
`+$(e)},render:t=>F(y,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`gateway`})}),I(Q.Item,{form:t,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`manual / auto`})})]}),I(Q.Item,{form:t,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>I(R,{...e,children:`开启 canary rollout`})}),I(Q.Item,{shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:e=>e.enableCanary?F(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5`,children:[I(`div`,{className:`mb-4 text-sm font-medium text-base-content`,children:`Canary settings`}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:t,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`10%`})}),I(Q.Item,{form:t,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`release-ops`})})]}),e.publishMode===`auto`?I(`div`,{className:`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,children:`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`}):null]}):I(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,children:`未开启灰度发布，额外字段不会挂载，也不会参与校验。`})}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`保存发布策略`}),I(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:`套用 canary 模板`})]})]})});S(()=>D(t,u,d))});let f=v(`div`,u);b(u,f),c(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=v(`div`,f);b(f,m),c(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(m,g(`Conditional summary`));let h=v(`p`,f);b(f,h),c(h,`mt-3 mb-0 text-sm text-base-content/65`),b(h,g("这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。"));let _=v(`div`,f);b(f,_),c(_,`mt-4 grid gap-3`);let C=v(`div`,_);b(_,C),c(C,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let w=v(`div`,C);b(C,w),c(w,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(w,g(`enableCanary`));let T=v(`div`,C);b(C,T),c(T,`mt-2 text-lg font-semibold text-base-content`);let E=p(T);b(T,E),x(()=>{i(E,n?`true`:`false`)});let O=v(`div`,_);b(_,O),c(O,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=v(`div`,O);b(O,k),c(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(k,g(`publishMode`));let j=v(`div`,O);b(O,j),c(j,`mt-2 text-lg font-semibold text-base-content`);let M=p(j);b(j,M),x(()=>{i(M,String(r))});let N=v(`div`,_);b(_,N),c(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let P=v(`div`,N);b(N,P),c(P,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(P,g(`Conditional fields`));let B=v(`div`,N);b(N,B),c(B,`mt-2 text-sm leading-6 text-base-content/80`),b(B,g(`batchSize: `));let V=p(B);b(B,V),x(()=>{i(V,String(a)||`未挂载`)}),b(B,v(`br`,B)),b(B,g(`approveBy: `));let H=p(B);b(B,H),x(()=>{i(H,String(o)||`未挂载`)});let U=v(`pre`,f);b(f,U),c(U,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let W=p(U);return b(U,W),x(()=>{i(W,s.value)}),u})},Ae=()=>{let{form:e,host:n,path:r,saveLog:a,normalizedPath:o,previewUrl:s}=j(`useSetup:0:0:dup5`,()=>t(()=>{let[e]=Q.useForm(),t=String(Q.useWatch(`host`,e)??`api.rue.dev`),n=String(Q.useWatch(`path`,e)??`release-hooks`),r=j(`ref:1:6`,()=>_(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`)),i=n?n.replace(/^\/+/,``):``;return{form:e,host:t,path:n,saveLog:r,normalizedPath:i,previewUrl:`https://${t}:443/hooks/${i}`}}));return T(t=>{let n=v(`div`,t);c(n,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let r=l(`rue:component:anchor`);b(n,r),x(()=>{let t=A(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{a.value=`保存复合控件
`+$(e)},render:t=>F(y,{children:[F(`div`,{className:`grid gap-6`,children:[F(`div`,{className:`grid gap-3`,children:[I(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`回调地址`}),F(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[I(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`https://`}),I(Q.Item,{form:t,name:`host`,noStyle:!0,render:e=>I(`div`,{className:`min-w-0`,children:I(z,{...e,placeholder:`api.rue.dev`})})}),I(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`:443`})]}),I(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。`})]}),F(`div`,{className:`grid gap-3`,children:[I(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`资源路径`}),F(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[I(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`/hooks/`}),I(Q.Item,{form:t,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>I(`div`,{className:`min-w-0`,children:I(z,{...e,placeholder:`release-hooks`})})}),I(`span`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`POST target`})]}),I(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。`})]})]}),F(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`保存复合地址`}),I(L,{type:`outlined`,onClick:()=>{e.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:`填入 staging`})]})]})});S(()=>D(t,n,r))});let o=v(`div`,n);b(n,o),c(o,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let u=v(`div`,o);b(o,u),c(u,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(u,g(`Composite preview`));let d=v(`p`,o);b(o,d),c(d,`mt-3 mb-0 text-sm text-base-content/65`),b(d,g(`这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。`));let f=v(`div`,o);b(o,f),c(f,`mt-4 rounded-[1.25rem] bg-base-200/70 p-4`);let m=v(`div`,f);b(f,m),c(m,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(m,g(`Resolved URL`));let h=v(`div`,f);b(f,h),c(h,`mt-3 break-all text-lg font-semibold text-base-content`);let _=l(`rue:slot:anchor`);b(h,_),x(()=>{let e=s;S(()=>D(e,h,_))});let C=v(`div`,o);b(o,C),c(C,`mt-4 grid gap-3 text-sm text-base-content/75`);let w=v(`div`,C);b(C,w),c(w,`rounded-[1.25rem] bg-base-200/70 p-4`),b(w,g("`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。"));let T=v(`div`,C);b(C,T),c(T,`rounded-[1.25rem] bg-base-200/70 p-4`),b(T,g(`外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。`));let E=v(`div`,C);b(C,E),c(E,`rounded-[1.25rem] bg-base-200/70 p-4`),b(E,g(`如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。`));let O=v(`pre`,o);b(o,O),c(O,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let k=p(O);return b(O,k),x(()=>{i(k,a.value)}),n})},je=()=>{let{form:n,activity:r,jumpToField:a}=j(`useSetup:0:0:dup6`,()=>t(()=>{let[e]=Q.useForm(),t=j(`ref:1:7`,()=>_(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`));return{form:e,activity:t,jumpToField:(n,r)=>{e.scrollToField(n,{block:`center`,focus:!0}),t.value=`scrollToField -> ${r}`}}}));return T(t=>{let o=v(`div`,t);c(o,`grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]`);let s=v(`div`,o);b(o,s),c(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let u=v(`div`,s);b(s,u),c(u,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(u,g(`Scroll actions`));let d=v(`p`,s);b(s,d),c(d,`mt-3 mb-0 text-sm text-base-content/65`),b(d,g(`这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。`));let f=v(`div`,s);b(s,f),c(f,`mt-4 grid gap-2`);let m=l(`rue:component:anchor`);b(f,m),D(A(L,{size:`sm`,onClick:()=>a(`releaseName`,`发布名称`),children:`滚到发布名称`}),f,m);let h=l(`rue:component:anchor`);b(f,h),D(A(L,{size:`sm`,type:`outlined`,onClick:()=>a([`strategy`,`batchSize`],`灰度批次`),children:`滚到灰度批次`}),f,h);let _=l(`rue:component:anchor`);b(f,_),D(A(L,{size:`sm`,type:`outlined`,onClick:()=>a([`observability`,`dashboard`],`监控看板`),children:`滚到监控看板`}),f,_);let C=l(`rue:component:anchor`);b(f,C),D(A(L,{size:`sm`,type:`outlined`,onClick:()=>a([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),f,C);let w=v(`pre`,s);b(s,w),c(w,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let T=p(w);b(w,T),x(()=>{i(T,r.value)});let E=v(`div`,o);b(o,E),c(E,`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5`);let O=v(`div`,E);b(E,O),c(O,`overflow-y-auto overscroll-contain pr-2`),e(O,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let k=l(`rue:component:anchor`);return b(O,k),x(()=>{let e=A(Q,{form:n,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{r.value=`提交成功
`+$(e)},onFinishFailed:e=>{r.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>F(y,{children:[F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 1`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`基础信息`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`2026.05 release`})}),I(Q.Item,{form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`rue-design`})}),I(Q.Item,{form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`staging`})}),I(Q.Item,{form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`release-captain`})})]})]}),F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 2`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`发布策略`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`10%`})}),I(Q.Item,{form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`15m`})}),I(Q.Item,{form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`error rate > 2%`})}),I(Q.Item,{form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`30m`})})]})]}),F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 3`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`观测与审批`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`Grafana release board`})}),I(Q.Item,{form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`#release-alerts`})}),I(Q.Item,{form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`ops-squad`})}),I(Q.Item,{form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`qa-squad`})})]})]}),F(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[F(`div`,{className:`mb-4`,children:[I(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 4`}),I(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`回滚预案`})]}),F(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[I(Q.Item,{form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>I(z,{...e,placeholder:`RB-2026-0514`})}),I(Q.Item,{form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`rollback-owner`})}),I(Q.Item,{form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`20m`})}),I(Q.Item,{form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`platform / qa / support`})})]})]}),I(`div`,{className:`sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur`,children:F(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[I(`div`,{className:`text-sm text-base-content/65`,children:`留空深层字段后点击提交，会自动滚到首个错误项。`}),F(`div`,{className:`flex flex-wrap gap-2`,children:[I(L,{type:`outlined`,onClick:()=>a([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),I(L,{color:`primary`,htmlType:`submit`,children:`提交长表单`})]})]})})]})});S(()=>D(e,O,k))}),o})},Me=()=>{let{form:e,members:r}=j(`useSetup:0:0:dup7`,()=>t(()=>{let[e]=Q.useForm();return{form:e,members:Q.useWatch(`members`,e)??[]}}));return T(t=>{let a=v(`div`,t);c(a,`grid gap-6`);let o=v(`div`,a);b(a,o),c(o,`grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]`);let s=l(`rue:component:anchor`);b(o,s),x(()=>{let t=A(Q,{form:e,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>I(Q.List,{form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(t,n,r)=>F(`div`,{className:`grid gap-4`,children:[t.length===0?I(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,children:`暂无成员，点击下方按钮即可追加一组字段。`}):null,t.map((r,i)=>F(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`,children:[F(`div`,{className:`mb-4 flex flex-wrap items-center justify-between gap-3`,children:[F(`div`,{children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:[`Member `,i+1]}),F(`div`,{className:`mt-1 text-sm font-medium text-base-content`,children:[`审批成员 `,i+1]})]}),F(`div`,{className:`flex flex-wrap gap-2`,children:[i>0?I(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name-1),children:`上移`}):null,i<t.length-1?I(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name+1),children:`下移`}):null,I(L,{size:`sm`,type:`text`,onClick:()=>n.remove(r.name),children:`删除`})]})]}),F(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[I(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`输入成员名称`})}),I(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>I(z,{...e,placeholder:`Owner / Reviewer / QA`})})]})]},r.key)),F(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[I(L,{size:`sm`,color:`primary`,onClick:()=>{n.add({name:`新成员 `+String(t.length+1),role:`QA`})},children:`新增成员`}),I(L,{size:`sm`,type:`outlined`,onClick:()=>n.add({name:`Head reviewer`,role:`QA`},0),children:`头部插入`})]}),r.errors.length>0||r.warnings.length>0?I(Q.ErrorList,{errors:r.errors,warnings:r.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}):null]})})});S(()=>D(t,o,s))});let u=v(`div`,o);b(o,u),c(u,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=v(`div`,u);b(u,d),c(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(d,g(`List snapshot`));let m=v(`div`,u);b(u,m),c(m,`mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65`);let h=l(`rue:slot:anchor`);b(m,h),x(()=>{let e=r.length;S(()=>D(e,m,h))}),b(m,g(` members`));let _=v(`div`,u);b(u,_),c(_,`mt-4 grid gap-3`);let y=l(`rue:slot:anchor`);b(_,y),x(()=>{let e=r.length>0?T(()=>{let e=f(),t=l(`rue:list:start`),a=l(`rue:list:end`);b(e,t),b(e,a);let o=new Map;return x(()=>{o=M({items:r||[],getKey:(e,t)=>String(t),elements:o,parent:t.parentNode,before:a,singleRoot:!0,start:t,renderItem:(e,t,r,a,o)=>{D(T(()=>{let t=f(),r=v(`div`,t);b(t,r),x(()=>{n(r,`key`,String(String(o)))}),c(r,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let a=v(`div`,r);b(r,a),c(a,`text-xs uppercase tracking-[0.22em] text-base-content/45`),b(a,g(`成员 `));let s=p(a);b(a,s),x(()=>{i(s,o+1)});let l=v(`div`,r);b(r,l),c(l,`mt-2 text-base font-medium text-base-content`);let u=p(l);b(l,u),x(()=>{i(u,e?.name?String(e.name):`未命名成员`)});let d=v(`div`,r);b(r,d),c(d,`mt-1 text-xs text-base-content/55`);let m=p(d);return b(d,m),x(()=>{i(m,e?.role?String(e.role):`未分配职责`)}),t}),t,r)}})}),e}):T(()=>{let e=f(),t=v(`div`,e);return b(e,t),c(t,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),b(t,g(`当前列表为空。`)),e});S(()=>D(e,_,y))});let C=v(`div`,a);b(a,C),c(C,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let w=v(`div`,C);b(C,w),c(w,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(w,g(`List behavior`));let E=v(`div`,C);b(C,E),c(E,`mt-4 grid gap-4 md:grid-cols-3`);let O=v(`div`,E);b(E,O),c(O,`rounded-[1.25rem] bg-base-200/70 p-4`);let k=v(`div`,O);b(O,k),c(k,`text-sm font-semibold text-base-content`),b(k,g(`列表级规则`));let j=v(`p`,O);b(O,j),c(j,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),b(j,g(`rules 挂在 Form.List 上，校验整个 members 数组。`));let N=v(`div`,E);b(E,N),c(N,`rounded-[1.25rem] bg-base-200/70 p-4`);let P=v(`div`,N);b(N,P),c(P,`text-sm font-semibold text-base-content`),b(P,g(`重排操作`));let R=v(`p`,N);b(N,R),c(R,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),b(R,g(`operation.move 保持字段状态跟随成员顺序移动。`));let B=v(`div`,E);b(E,B),c(B,`rounded-[1.25rem] bg-base-200/70 p-4`);let V=v(`div`,B);b(B,V),c(V,`text-sm font-semibold text-base-content`),b(V,g(`错误出口`));let H=v(`p`,B);return b(B,H),c(H,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),b(H,g(`Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。`)),a})},Ne=()=>{let{form:e,keyword:n,assignee:r,repository:a,reviewer:o,includeDrafts:s,submitted:u}=j(`useSetup:0:0:dup8`,()=>t(()=>{let[e]=Q.useForm();return{form:e,keyword:Q.useWatch(`keyword`,e)??``,assignee:Q.useWatch(`assignee`,e)??``,repository:Q.useWatch(`repository`,e)??``,reviewer:Q.useWatch(`reviewer`,e)??``,includeDrafts:!!Q.useWatch(`includeDrafts`,e),submitted:j(`ref:1:8`,()=>_(`尚未执行检索。`))}}));return T(t=>{let d=v(`div`,t);c(d,`grid gap-6`);let f=l(`rue:component:anchor`);b(d,f),x(()=>{let t=A(Q,{form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{u.value=$(e)},render:t=>F(y,{children:[F(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:[I(Q.Item,{form:t,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>I(z,{...e,placeholder:`搜索 issue / 页面 / API`})}),I(Q.Item,{form:t,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>I(z,{...e,placeholder:`rue-design`})}),I(Q.Item,{form:t,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>I(z,{...e,placeholder:`team-design`})}),I(Q.Item,{form:t,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>I(z,{...e,placeholder:`infra`})})]}),F(`div`,{className:`mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4`,children:[I(Q.Item,{form:t,name:`includeDrafts`,valuePropName:`checked`,render:e=>I(R,{...e,children:`包含草稿和实验分支`})}),F(`div`,{className:`flex flex-wrap gap-2`,children:[I(L,{color:`primary`,htmlType:`submit`,children:`执行搜索`}),I(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`清空条件`}),I(L,{type:`text`,onClick:()=>{e.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:`填入示例`})]})]})]})});S(()=>D(t,d,f))});let m=v(`div`,d);b(d,m),c(m,`grid gap-4 lg:grid-cols-2`);let h=v(`div`,m);b(m,h),c(h,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let _=v(`div`,h);b(h,_),c(_,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(_,g(`Query preview`));let C=v(`p`,h);b(h,C),c(C,`mt-3 mb-0 text-sm text-base-content/65`),b(C,g(`这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。`));let w=v(`pre`,h);b(h,w),c(w,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let T=l(`rue:slot:anchor`);b(w,T),x(()=>{let e=we({keyword:String(n),repository:String(a),assignee:String(r),reviewer:String(o),includeDrafts:s})||`暂无 query string`;S(()=>D(e,w,T))});let E=v(`div`,h);b(h,E),c(E,`mt-4 grid gap-3 text-sm text-base-content/80`);let O=v(`div`,E);b(E,O),c(O,`rounded-[1.25rem] bg-base-200/70 p-4`),b(O,g(`关键词：`));let k=p(O);b(O,k),x(()=>{i(k,String(n)||`未填写`)});let j=v(`div`,E);b(E,j),c(j,`rounded-[1.25rem] bg-base-200/70 p-4`),b(j,g(`仓库：`));let M=p(j);b(j,M),x(()=>{i(M,String(a)||`未填写`)});let N=v(`div`,E);b(E,N),c(N,`rounded-[1.25rem] bg-base-200/70 p-4`),b(N,g(`负责人 / 评审人：`));let P=p(N);b(N,P),x(()=>{i(P,String(r)||`未填写`)}),b(N,g(` / `));let B=p(N);b(N,B),x(()=>{i(B,String(o)||`未填写`)});let V=v(`div`,E);b(E,V),c(V,`rounded-[1.25rem] bg-base-200/70 p-4`),b(V,g(`包含草稿：`));let H=p(V);b(V,H),x(()=>{i(H,s?`是`:`否`)});let U=v(`div`,m);b(m,U),c(U,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let W=v(`div`,U);b(U,W),c(W,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),b(W,g(`Last submit`));let G=v(`pre`,U);b(U,G),c(G,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let K=p(G);return b(G,K),x(()=>{i(K,u.value)}),d})},Pe=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Fe=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ie=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Le=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],Re=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],ze=()=>{let{tabBasic:e,tabInstance:r,tabValidation:a,tabNormalize:o,tabConditional:s,tabNoStyle:u,tabList:d,tabScroll:m,tabInline:h}=j(`useSetup:0:0:dup9`,()=>t(()=>({tabBasic:j(`ref:1:9`,()=>_(`preview`)),tabInstance:j(`ref:1:10`,()=>_(`preview`)),tabValidation:j(`ref:1:11`,()=>_(`preview`)),tabNormalize:j(`ref:1:12`,()=>_(`preview`)),tabConditional:j(`ref:1:13`,()=>_(`preview`)),tabNoStyle:j(`ref:1:14`,()=>_(`preview`)),tabList:j(`ref:1:15`,()=>_(`preview`)),tabScroll:j(`ref:1:16`,()=>_(`preview`)),tabInline:j(`ref:1:17`,()=>_(`preview`))})));return T(t=>{let _=f(),y=l(`rue:component:anchor`);return b(_,y),D(A(B,{children:T(()=>{let t=f(),_=v(`div`,t);b(t,_),c(_,`max-w-none prose prose-sm md:prose-base`);let y=v(`h1`,_);b(_,y),c(y,`mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content`),b(y,g(`Form 表单`));let C=v(`p`,_);b(_,C),c(C,`mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72`),b(C,g(`这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。`));let w=v(`h2`,_);b(_,w),b(w,g(`何时使用`));let T=v(`ul`,_);b(_,T);let E=v(`li`,T);b(T,E),b(E,g(`需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。`));let O=v(`li`,T);b(T,O),b(O,g(`需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。`));let j=v(`li`,T);b(T,j),b(j,g(`需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。`));let N=v(`section`,_);b(_,N),c(N,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let P=l(`rue:list:start`),F=l(`rue:list:end`);b(N,P),b(N,F);let L=new Map;x(()=>{L=M({items:Le||[],getKey:(e,t)=>e.title,elements:L,parent:N,before:F,start:P,renderItem:(e,t,n,r,i)=>{k(A(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description,items:e.items}),t,n,r)}})});let R=v(`div`,_);b(_,R),c(R,`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm`),b(R,g(`当前 Rue runtime 下，推荐通过`));let z=v(`code`,R);b(R,z),b(z,g(`Form.useForm()`)),b(R,g(`或`));let B=p(R);b(R,B),i(B,` `);let H=v(`code`,R);b(R,H);let U=p(H);b(H,U),i(U,`render={form => <Form.Item form={form} name="title" />}`),b(R,g(`显式持有并传递`));let W=p(R);b(R,W),i(W,` `);let G=v(`code`,R);b(R,G),b(G,g(`form`)),b(R,g("。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。"));let K=l(`rue:component:anchor`);b(_,K),x(()=>{let t=A(V,{title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:e,preview:()=>I(Te,{}),code:`<Form
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
`});S(()=>D(t,_,K))});let q=l(`rue:component:anchor`);b(_,q),x(()=>{let e=A(V,{title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:r,preview:()=>I(Ee,{}),code:`const InstanceMethodsShowcase: FC = () => {
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
`});S(()=>D(e,_,q))});let J=l(`rue:component:anchor`);b(_,J),x(()=>{let e=A(V,{title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:a,preview:()=>I(De,{}),code:`const [form] = Form.useForm()

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
`});S(()=>D(e,_,J))});let ee=l(`rue:component:anchor`);b(_,ee),x(()=>{let e=A(V,{title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:o,preview:()=>I(Oe,{}),code:`<Form.Item
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
`});S(()=>D(e,_,ee))});let te=l(`rue:component:anchor`);b(_,te),x(()=>{let e=A(V,{title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:s,preview:()=>I(ke,{}),code:`<Form.Item
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
`});S(()=>D(e,_,te))});let ne=l(`rue:component:anchor`);b(_,ne),x(()=>{let e=A(V,{title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:u,preview:()=>I(Ae,{}),code:`const [form] = Form.useForm()

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
`});S(()=>D(e,_,ne))});let Y=l(`rue:component:anchor`);b(_,Y),x(()=>{let e=A(V,{title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:d,preview:()=>I(Me,{}),code:`const DynamicListShowcase: FC = () => {
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
`});S(()=>D(e,_,Y))});let X=l(`rue:component:anchor`);b(_,X),x(()=>{let e=A(V,{title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:m,preview:()=>I(je,{}),code:`const LongFormScrollShowcase: FC = () => {
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
`});S(()=>D(e,_,X))});let re=l(`rue:component:anchor`);b(_,re),x(()=>{let e=A(V,{title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:h,preview:()=>I(Ne,{}),code:`const [form] = Form.useForm()

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
`});S(()=>D(e,_,re))});let ie=v(`h2`,_);b(_,ie),b(ie,g(`使用说明`));let ae=v(`p`,_);b(_,ae),b(ae,g(`下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。`));let oe=v(`section`,_);b(_,oe),c(oe,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let se=l(`rue:list:start`),ce=l(`rue:list:end`);b(oe,se),b(oe,ce);let Z=new Map;x(()=>{Z=M({items:Re||[],getKey:(e,t)=>e.title,elements:Z,parent:oe,before:ce,start:se,renderItem:(e,t,n,r,i)=>{k(A(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description}),t,n,r)}})});let le=v(`h2`,_);b(_,le),n(le,`id`,`form-api`),b(le,g(`API`));let ue=v(`p`,_);b(_,ue),b(ue,g(`Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。`));let de=l(`rue:component:anchor`);b(_,de),x(()=>{let e=A(Se,{title:`Form`,rows:Pe});S(()=>D(e,_,de))});let fe=l(`rue:component:anchor`);b(_,fe),x(()=>{let e=A(Se,{title:`Form.Item`,rows:Fe});S(()=>D(e,_,fe))});let pe=l(`rue:component:anchor`);return b(_,pe),x(()=>{let e=A(Se,{title:`Form.List and Hooks`,rows:Ie});S(()=>D(e,_,pe))}),t})}),_,y),_})};export{ze as default};