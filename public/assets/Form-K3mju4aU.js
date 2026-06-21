import{$t as e,Jt as t,M as n,Q as r,Rt as i,St as a,Wt as o,a as s,an as c,dt as l,et as u,gt as d,in as f,it as p,l as m,lt as h,m as g,n as _,nt as v,o as y,qt as b,r as x,rn as S,rt as C,s as w,t as T,tt as E,vt as D,x as O,yt as k,zt as A}from"./vapor-runtime-DsQWl-IB.js";import{a as j,n as M,t as N}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as P,i as F,o as I}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as L}from"./button-COZLI6MM.js";import{t as R}from"./checkbox-Crm1Zj5M.js";import{t as z}from"./input-ey-wzC3N.js";import{r as B}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as V}from"./PreviewBlock-wHSyDiek.js";var H=`__rueFormContext`,U=0,W={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},G=(...e)=>e.filter(Boolean).join(` `),K=e=>!!e&&typeof e==`object`,q=e=>{if(Array.isArray(e))return e.map(e=>q(e));if(K(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=q(e[n])}),t}return e},J=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),te=(e,t)=>e.length===t.length?e.every((e,n)=>e===t[n]):!1,ne=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),re=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},ie=(e,t,n)=>{if(t.length===0)return q(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?q(n):ie(o[r],i,n),o},ae=(e,t)=>{if(t.length===0)return;if(!K(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=ae(i[n],r),i)},Y=(e,t)=>{if(!K(t)&&!Array.isArray(t))return q(t);if(Array.isArray(t))return t.map(e=>q(e));let n=K(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Y(n[e],t[e])}),n},oe=(e,t)=>ie({},e,t),se=e=>e?Array.isArray(e)?e:[e]:[`onChange`],X=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,Z=(e,t)=>{let n=X(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},ce=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,le=e=>{try{return new URL(e),!0}catch{return!1}},ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&le(e);default:return!0}},de=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??W.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??W.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??W.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??W.types?.[e.type??`string`]??"${label} 类型不正确";let a=X(t,e.type);return(r[a]??W[a]??{})[i??`len`]??"${label} 校验失败"},fe=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),pe=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},me=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,he=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=pe(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&ce(n,e.type)?i=de(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=de(e,n,l,o,`whitespace`):!ce(n,e.type)&&e.type&&!ue(n,e.type)?i=de(e,n,l,o,`type`):!ce(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=de(e,n,l,o,`pattern`):!ce(n,e.type)&&e.len!==void 0?Z(n,e.type)!==e.len&&(i=de(e,n,l,o,`len`)):!ce(n,e.type)&&e.min!==void 0?Z(n,e.type)<e.min&&(i=de(e,n,l,o,`min`)):!ce(n,e.type)&&e.max!==void 0&&Z(n,e.type)>e.max&&(i=de(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=fe(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},ge=(e,...t)=>{let[n,r]=t;if(e===`checked`)return K(r)&&typeof r.checked==`boolean`?r.checked:K(n)&&K(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(K(n)&&`target`in n))return n;if(K(n)&&K(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},_e=e=>e?m(e===`error`?e=>{let t=v(`span`,e);return l(t,`text-error`),r(t,C(`!`)),t}:e===`warning`?e=>{let t=v(`span`,e);return l(t,`text-warning`),r(t,C(`!`)),t}:e===`success`?e=>{let t=v(`span`,e);return l(t,`text-success`),r(t,C(`✓`)),t}:e=>{let t=v(`span`,e);return l(t,`loading loading-spinner loading-xs text-primary`),t}):null,ve=e=>{if(e?.span)return`${e.span/24*100}%`},ye=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,be=()=>{let e=j(`ref:1:0`,()=>t(0)),n=new Map,r=new Map,i=new Map,a=new Set,o=!1,s={},c={},l=!1,u=null,d={validateTrigger:[`onChange`],validateMessages:W},f=()=>{e.value+=1,a.forEach(e=>e())},p=()=>{o||(o=!0,queueMicrotask(()=>{o=!1,f()}))},m=e=>{let t=ee(e),n=i.get(t);if(n)return n;let r={touched:!1,validating:!1,errors:[],warnings:[]};return i.set(t,r),r},h=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ee(t)}`:e.id},g=e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:q(ne(s,e))}},_=e=>{d.onFieldsChange?.([g(e)],D.getFieldsValue(!0))},v=(e,t,n=!0)=>{let r=m(e);Object.assign(r,t),n&&(_(e),f(),p())},y=e=>{for(let t of n.values()){let n=t.getNamePath();if(n&&te(n,e))return t}return null},b=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return v(n,{errors:[],warnings:[],validating:!1}),null;v(n,{validating:!0});let a=await he(n,ne(s,n),i,s,e.getLabel(),e.getMessageVariables(),d.validateMessages);return v(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},x=async e=>{let t=Array.from(n.values());for(let n of t){let t=n.getNamePath();!t||te(t,e)||n.getDependencies().some(t=>te(t,e))&&await b(n)}},S=async(e,t,n)=>{if(s=ie(s,e,t),n?.touch){let t=m(e);t.touched=!0}f(),_(e),n?.emitValues!==!1&&d.onValuesChange?.(oe(e,t),D.getFieldsValue(!0));let r=y(e);r&&await b(r,n?.triggerName),await x(e),p()},C=e=>{let t=h(e),a=r.get(t);a&&a!==e.id&&n.delete(a),n.set(e.id,e),r.set(t,e.id);let o=e.getNamePath();if(o&&o.length){let t=e.getInitialValue();!re(c,o)&&t!==void 0&&(c=ie(c,o,t)),!re(s,o)&&t!==void 0&&(s=ie(s,o,t)),m(o)}return()=>{let a=r.get(t)===e.id;if(n.delete(e.id),!a)return;r.delete(t);let o=e.getNamePath();!o||!o.length||ye(e,d.preserve)||(s=ae(s,o),i.delete(ee(o)),f())}},w=e=>l?!1:(c=q(e??{}),s=q(e??{}),l=!0,!0),T=async e=>{let t=e?.map(e=>J(e)),r=[],i=Array.from(n.values()),a=new Set;for(let e of i){let n=h(e);if(a.has(n))continue;a.add(n);let i=e.getNamePath();if(!i||!i.length||t&&!t.some(e=>te(i,e)))continue;let o=await b(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:D.getFieldsValue(!0),errorFields:r,outOfDate:!1};return D.getFieldsValue(!0)},E=(e,t)=>{let n=J(e),r=d.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>u?.querySelector(`#${CSS.escape(e)}`)).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},D={getFieldValue(t){return e.value,q(ne(s,J(t)))},getFieldsValue(t){return e.value,t===!0||t==null?q(s):t.reduce((e,t)=>{let n=J(t);return ie(e,n,ne(s,n))},{})},setFieldValue(e,t){S(J(e),t,{emitValues:!1})},setFieldsValue(e){s=Y(s,e),f()},resetFields(e){if(!e?.length){s=q(c),i.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),f();return}e.forEach(e=>{let t=J(e),n=ne(c,t);s=n===void 0?ae(s,t):ie(s,t,n);let r=m(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),f()},validateFields:T,submit(){T().then(e=>{d.onFinish?.(e)}).catch(e=>{if(d.onFinishFailed?.(e),d.scrollToFirstError&&e.errorFields[0]){let t=d.scrollToFirstError===!0?{block:`center`}:d.scrollToFirstError;E(e.errorFields[0].name,t)}})},scrollToField:E,isFieldTouched(e){return m(J(e)).touched},getFieldError(e){return[...m(J(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(n.values()).filter(t=>{let n=h(t);return e.has(n)?!1:(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=m(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=J(e),n=m(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){d=e},ensureInitialized:w,registerField:C,getMeta:m,validateFieldByPath(e,t){let n=y(e);return n?b(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return S(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return S(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return d.validateTrigger},setRootElement(e){u=e},subscribe(e){return a.add(e),()=>{a.delete(e)}},emitUpdate(){f()}}};return D},xe=(e,t,n)=>typeof n==`function`?n(e,{required:t}):n===`optional`&&!t?m(e=>{let t=v(`span`,e);return l(t,`ml-2 text-xs text-base-content/45`),h(t,`aria-hidden`,`true`),r(t,C(`optional`)),t}):n!==!1&&t?m(e=>{let t=v(`span`,e);return l(t,`ml-1 text-error`),h(t,`aria-hidden`,`true`),r(t,C(`*`)),t}):null,Q=Object.assign(t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:i,__rue_rest_omit_2:s,__rue_rest_omit_3:l,__rue_rest_omit_4:d,__rue_rest_omit_5:p,__rue_rest_omit_6:h,__rue_rest_omit_7:_,__rue_rest_omit_8:C,__rue_rest_omit_9:w,__rue_rest_omit_10:D,__rue_rest_omit_11:M,__rue_rest_omit_12:N,__rue_rest_omit_13:P,__rue_rest_omit_14:L,__rue_rest_omit_15:R,__rue_rest_omit_16:z,__rue_rest_omit_17:B,rest:V,slotSource:H,internalFormRef:U,rootElementRef:K,subscriptionFormRef:q,unsubscribeRenderRef:J,renderVersion:ee,setRenderVersion:te,resolvedForm:ne,initializedNow:re,formVersionSnapshot:ie,handleNativeSubmit:ae,resolveContent:Y,content:oe}=j(`useSetup:0:0:dup3`,()=>f(()=>{let{className:e,style:n,children:r,render:i,component:s,layout:l,initialValues:u,form:d,name:p,preserve:m,validateMessages:h,validateTrigger:_,scrollToFirstError:v,onValuesChange:y,onFieldsChange:C,onFinish:w,onFinishFailed:T,onSubmit:E,...D}=t,O=j(`computed:1:39`,()=>a(()=>o()?.propsRO??{children:t.children})),k=O,A=j(`useRef:1:40`,()=>S()),M=j(`useRef:1:41`,()=>S(null)),N=j(`useRef:1:42`,()=>S(void 0)),P=j(`useRef:1:43`,()=>S(null)),[L,R]=j(`useState:1:44`,()=>c(0,{kind:`ref`}));A.current||=t.form??be();let z=j(`computed:1:45`,()=>a(()=>t.form??A.current)),B=z,V=j(`computed:1:46`,()=>a(()=>B.get().__INTERNAL__.ensureInitialized(t.initialValues))),H=V,U=j(`computed:1:47`,()=>a(()=>B.get().__INTERNAL__.version.value)),G=U;B.get().__INTERNAL__.setRuntimeOptions({name:t.name,preserve:t.preserve,validateTrigger:se(t.validateTrigger),validateMessages:{...W,...t.validateMessages},scrollToFirstError:t.scrollToFirstError,onValuesChange:t.onValuesChange,onFieldsChange:t.onFieldsChange,onFinish:t.onFinish,onFinishFailed:t.onFinishFailed}),N.current!==B.get()&&(P.current?.(),N.current=B.get(),P.current=B.get().__INTERNAL__.subscribe(()=>{R(L.value+1)}));let K=e=>{e.preventDefault(),t.onSubmit?.(e),B.get().submit()};x(()=>{H.get()&&B.get().__INTERNAL__.emitUpdate()}),b(()=>{P.current?.(),P.current=null,N.current=void 0});let q=()=>(j(`useSetup:0:0:dup2`,()=>f(()=>(G.get(),{}))),typeof t.render==`function`?F(g,{children:t.render(B.get())}):typeof t.children==`function`&&t.children.kind!==`block-factory`?F(g,{children:t.children(B.get())}):F(I,{source:k.get()}));return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:s,__rue_rest_omit_5:l,__rue_rest_omit_6:u,__rue_rest_omit_7:d,__rue_rest_omit_8:p,__rue_rest_omit_9:m,__rue_rest_omit_10:h,__rue_rest_omit_11:_,__rue_rest_omit_12:v,__rue_rest_omit_13:y,__rue_rest_omit_14:C,__rue_rest_omit_15:w,__rue_rest_omit_16:T,__rue_rest_omit_17:E,rest:D,slotSource:O,internalFormRef:A,rootElementRef:M,subscriptionFormRef:N,unsubscribeRenderRef:P,renderVersion:L,setRenderVersion:R,resolvedForm:z,initializedNow:V,formVersionSnapshot:U,handleNativeSubmit:K,resolveContent:q,content:q()}}));if((t.component===void 0?`form`:t.component)===!1)return oe;let X={...V,ref:e=>{K.current=e,ne.get().__INTERNAL__.setRootElement(e)},onSubmit:(t.component===void 0?`form`:t.component)===`form`?ae:void 0,className:G(`rue-form`,(t.layout===void 0?`horizontal`:t.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,t.className),style:t.style,"data-rue-form":`true`};if((t.component===void 0?`form`:t.component)===`form`)return m(t=>{let n=v(`form`,t);A(()=>{k(n,X)});let i=u(`rue:slot:anchor`);return r(n,i),A(()=>{let t=(ee.value,Y());e(()=>y(t,n,i))}),n});if((t.component===void 0?`form`:t.component)===`div`)return m(t=>{let n=v(`div`,t);A(()=>{k(n,X)});let i=u(`rue:slot:anchor`);return r(n,i),A(()=>{let t=(ee.value,Y());e(()=>y(t,n,i))}),n});if((t.component===void 0?`form`:t.component)===`section`)return m(t=>{let n=v(`section`,t);A(()=>{k(n,X)});let i=u(`rue:slot:anchor`);return r(n,i),A(()=>{let t=(ee.value,Y());e(()=>y(t,n,i))}),n});if(typeof(t.component===void 0?`form`:t.component)==`string`)return O(t.component===void 0?`form`:t.component,X,(ee.value,Y()));let Z=t.component===void 0?`form`:t.component;return m(t=>{let n=E(),i=u(`rue:component:anchor`);return r(n,i),A(()=>{let t=T(Z,{...X,children:(ee.value,Y())});e(()=>y(t,n,i))}),n})},{Item:t=>{let{slotSource:p,formInstance:C,entityIdRef:w,unregisterRef:T,subscriptionFormRef:D,unsubscribeRenderRef:O,renderVersion:k,setRenderVersion:M,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:z,latestPropsRef:B,noStyleHostRef:V,controlHostRef:H,helpHostRef:W,feedbackHostRef:K,namePath:te,nameKey:ne,layout:re,required:ie,labelAlign:ae,labelWrap:Y,labelCol:oe,wrapperCol:X,controlId:Z,getRenderState:ce,renderManagedContent:le,assignControlHost:ue}=j(`useSetup:0:0:dup1`,()=>f(()=>{let d=j(`computed:1:2`,()=>a(()=>o()?.propsRO??{children:t.children})),f=d,p=j(`computed:1:3`,()=>a(()=>t.form)),_=p,C=j(`useRef:1:4`,()=>S()),w=j(`useRef:1:5`,()=>S(null)),T=j(`useRef:1:6`,()=>S(void 0)),E=j(`useRef:1:7`,()=>S(null)),[D,O]=j(`useState:1:8`,()=>c(0,{kind:`ref`})),k=j(`useRef:1:9`,()=>S()),M=j(`useRef:1:10`,()=>S()),N=j(`useRef:1:11`,()=>S()),L=j(`useRef:1:12`,()=>S(t)),R=j(`useRef:1:13`,()=>S(null)),z=j(`useRef:1:14`,()=>S(null)),B=j(`useRef:1:15`,()=>S(null)),V=j(`useRef:1:16`,()=>S(null));if(L.current=t,C.current||=`rue-form-item-${U++}`,t.name!=null&&!_.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let H=j(`computed:1:17`,()=>a(()=>t.name==null?void 0:J(t.name))),W=H,G=j(`computed:1:18`,()=>a(()=>W.get()?ee(W.get()):void 0)),K=G,te=j(`computed:1:19`,()=>a(()=>t.layout??`horizontal`)),ne=j(`computed:1:20`,()=>a(()=>me(t.required,t.rules))),re=j(`computed:1:21`,()=>a(()=>t.labelAlign??`right`)),ie=j(`computed:1:22`,()=>a(()=>t.labelCol)),ae=j(`computed:1:23`,()=>a(()=>t.wrapperCol)),Y=j(`computed:1:24`,()=>a(()=>t.htmlFor??(W.get()?W.get().map(e=>String(e)).join(`__`):void 0))),oe=Y;if(W.get()&&_.get()&&N.current!==K.get()){let e=L.current??t;w.current?.(),w.current=_.get().__INTERNAL__.registerField({id:C.current,kind:`item`,getNamePath:()=>W.get(),getRules:()=>e.rules??[],getRequired:()=>e.required,getLabel:()=>e.label,getMessageVariables:()=>e.messageVariables,getValidateTrigger:()=>se(e.validateTrigger),getDependencies:()=>(e.dependencies??[]).map(e=>J(e)),getInitialValue:()=>e.initialValue,getPreserve:()=>e.preserve}),N.current=K.get()}let X=()=>{let e=_.get()?.getFieldsValue(!0)??{},n=W.get()&&_.get()?_.get().__INTERNAL__.getMeta(W.get()):null;return{allValues:e,meta:n,currentValue:W.get()&&_.get()?_.get().getFieldValue(W.get()):void 0,triggerName:t.trigger??`onChange`,validateTrigger:se(t.validateTrigger),status:t.validateStatus??(n?.validating?`validating`:n?.errors.length?`error`:n?.warnings.length?`warning`:n?.touched&&(t.rules?.length??0)>0?`success`:void 0)}},Z=()=>{let{allValues:i,meta:a,currentValue:o,triggerName:s,validateTrigger:c,status:d}=X(),p=t.render??t.children,b;if(typeof p==`function`&&p.kind!==`block-factory`&&W.get()&&_.get()&&!t.shouldUpdate){let e={...t.getValueProps?t.getValueProps(o):{[t.valuePropName??`value`]:t.valuePropName===`checked`?!!o:o},id:oe.get()};e[s]=(...e)=>{let n=t.getValueFromEvent?t.getValueFromEvent(...e):ge(t.valuePropName??`value`,...e),r=t.normalize?t.normalize(n,o,_.get().getFieldsValue(!0)):n;_.get().__INTERNAL__.updateValueFromControl(W.get(),r,{touch:!0,triggerName:s})},c.filter(e=>e!==s).forEach(t=>{e[t]=(...e)=>{_.get().__INTERNAL__.validateFieldByPath(W.get(),t)}}),b=p(e,{value:o,touched:a?.touched??!1,validating:a?.validating??!1,errors:a?.errors??[],warnings:a?.warnings??[],status:d},_.get())}else typeof p==`function`&&p.kind!==`block-factory`&&(!W.get()||t.shouldUpdate)?(((typeof t.shouldUpdate==`function`?t.shouldUpdate(M.current??i,i):t.shouldUpdate===!0||k.current===void 0)||k.current===void 0)&&(k.current=p(i,_.get())),M.current=q(i),b=k.current):b=F(I,{source:f.get()});if(t.noStyle){R.current&&n(F(g,{children:b}),R.current);return}z.current&&n(F(g,{children:b}),z.current),B.current&&n(t.help===void 0?a&&(a.errors.length>0||a.warnings.length>0)?P(`ul`,{className:`mt-2 grid gap-1 text-xs`,children:[a.errors.map((t,n)=>m(i=>{let a=v(`li`,i);A(()=>{h(a,`key`,String(`error-${n}`))}),l(a,`text-error`);let o=u(`rue:slot:anchor`);return r(a,o),A(()=>{let n=t;e(()=>y(n,a,o))}),a})),a.warnings.map((t,n)=>m(i=>{let a=v(`li`,i);A(()=>{h(a,`key`,String(`warning-${n}`))}),l(a,`text-warning`);let o=u(`rue:slot:anchor`);return r(a,o),A(()=>{let n=t;e(()=>y(n,a,o))}),a}))]}):F(g,{}):F(g,{children:t.help}),B.current),V.current&&n(t.hasFeedback?F(g,{children:_e(d)}):F(g,{}),V.current)};return T.current!==_.get()&&(E.current?.(),T.current=_.get(),E.current=_.get()?_.get().__INTERNAL__.subscribe(()=>{O(D.value+1)}):null),j(`watch:1:25`,()=>i(()=>D.value,()=>{Z()},{immediate:!0})),b(()=>{w.current?.(),w.current=null,E.current?.(),E.current=null,T.current=void 0}),x(()=>{Z()}),s(()=>{Z()}),{slotSource:d,formInstance:p,entityIdRef:C,unregisterRef:w,subscriptionFormRef:T,unsubscribeRenderRef:E,renderVersion:D,setRenderVersion:O,renderCacheRef:k,previousValuesRef:M,lastRegisteredKeyRef:N,latestPropsRef:L,noStyleHostRef:R,controlHostRef:z,helpHostRef:B,feedbackHostRef:V,namePath:H,nameKey:G,layout:te,required:ne,labelAlign:re,labelWrap:!1,labelCol:ie,wrapperCol:ae,controlId:Y,getRenderState:X,renderManagedContent:Z,assignControlHost:e=>{z.current=e,e&&queueMicrotask(()=>{Z()})}}}));if(t.noStyle)return m(e=>{let t=v(`div`,e),n=N(t,()=>V);return _(()=>{n()}),d(t,{display:`contents`}),t});let de=t.label===void 0?null:P(`label`,{className:G(`text-[0.95rem] leading-7 font-medium text-base-content/78`,ae.get()===`left`?`text-left`:`text-right md:text-right`,Y?`whitespace-normal`:`md:whitespace-nowrap`),style:{width:re.get()===`horizontal`?ve(oe.get()):void 0},for:Z.get(),children:[F(`span`,{children:t.label}),re.get()===`horizontal`&&t.colon!==!1?F(`span`,{className:`ml-1 text-base-content/45`,children:`:`}):null,xe(t.label,ie.get(),!0)]}),fe=re.get()===`horizontal`&&X.get()?.offset?{marginLeft:`${X.get().offset/24*100}%`,width:ve(X.get())}:re.get()===`horizontal`?{width:ve(X.get())}:void 0;return m(n=>{let i=v(`div`,n);A(()=>{l(i,G(`rue-form-item`,t.hidden?`hidden`:void 0,re.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,t.className))}),A(()=>{let e=t.style;d(i,e)});let a=u(`rue:slot:anchor`);r(i,a),A(()=>{let t=de;e(()=>y(t,i,a))});let o=v(`div`,i);r(i,o),l(o,`min-w-0 flex-1`),A(()=>{d(o,fe)});let s=v(`div`,o);r(o,s),l(s,`flex items-start gap-3`);let c=v(`div`,s);r(s,c),A(()=>{h(c,`key`,String(ne.get()??`__rue_form_item_control__`))}),l(c,`min-w-0 flex-1`);let f=N(c,()=>ue);_(()=>{f()});let p=u(`rue:slot:anchor`);r(s,p),A(()=>{let n=t.hasFeedback?m(()=>{let e=E(),t=v(`span`,e);r(e,t),l(t,`mt-3 shrink-0`);let n=N(t,()=>K);return _(()=>{n()}),e}):``;e(()=>y(n,s,p))});let g=v(`div`,o);r(o,g),l(g,`mt-3`);let b=N(g,()=>W);_(()=>{b()});let x=u(`rue:slot:anchor`);return r(o,x),A(()=>{let n=t.extra==null?``:m(()=>{let n=E(),i=v(`div`,n);r(n,i),l(i,`mt-3 text-[0.8rem] leading-6 text-base-content/55`);let a=u(`rue:slot:anchor`);return r(i,a),A(()=>{let n=t.extra;e(()=>y(n,i,a))}),n});e(()=>y(n,o,x))}),i})},List:e=>{let{form:t,name:n,children:r,render:i,initialValue:a,rules:o}=e,s=t;if(!s)throw Error(`Form.List 需要显式传入 form`);let l=i??r;if(typeof l!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let u=J(n),d=j(`useRef:1:26`,()=>S()),f=j(`useRef:1:27`,()=>S(null)),p=j(`useRef:1:28`,()=>S(void 0)),m=j(`useRef:1:29`,()=>S(null)),[h,g]=j(`useState:1:30`,()=>c(0,{kind:`ref`})),_=j(`useRef:1:31`,()=>S(o)),v=j(`useRef:1:32`,()=>S(a)),y=j(`useRef:1:33`,()=>S([])),x=j(`useRef:1:34`,()=>S(0));return _.current=o,v.current=a,d.current||=`rue-form-list-${U++}`,f.current||=s.__INTERNAL__.registerField({id:d.current,kind:`list`,getNamePath:()=>u,getRules:()=>_.current??[],getRequired:()=>void 0,getLabel:()=>u[u.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>v.current,getPreserve:()=>!0}),p.current!==s&&(m.current?.(),p.current=s,m.current=s.__INTERNAL__.subscribe(()=>{g(h.value+1)})),b(()=>{f.current?.(),f.current=null,m.current?.(),m.current=null,p.current=void 0}),(()=>{h.value;let e=s.getFieldValue(u),t=Array.isArray(e)?e:[],n=s.__INTERNAL__.getMeta(u),r=y.current??[],i=x.current??0;y.current??=r,x.current??=i;let a=()=>{let e=x.current??0;return x.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(y.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),s.__INTERNAL__.updateListValue(u,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),s.__INTERNAL__.updateListValue(u,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),s.__INTERNAL__.updateListValue(u,i)}},c=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return F(`div`,{"data-rue-form-list-shell":`true`,children:l(c,o,{errors:n.errors,warnings:n.warnings})},c.map(e=>`${String(e.fieldKey)}:${e.name}`).join(`|`))})()},ErrorList:e=>{let{list:t}=j(`useSetup:0:0`,()=>f(()=>({list:j(`computed:1:1`,()=>a(()=>[...e.errors??[],...e.warnings??[]].filter(e=>e!=null)))})));return t.get().length?m(t=>{let n=v(`ul`,t);A(()=>{l(n,G(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,e.className))}),A(()=>{let t=e.style;d(n,t)});let i=u(`rue:list:start`),a=u(`rue:list:end`);r(n,i),r(n,a);let o=new Map;A(()=>{o=M({items:(e.errors??[])||[],getKey:(e,t)=>`error-${t}`,elements:o,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,t,n,i,a)=>{y(m(()=>{let t=E(),n=v(`li`,t);r(t,n),A(()=>{h(n,`key`,String(`error-${a}`))}),l(n,`text-error`);let i=p(n);return r(n,i),A(()=>{D(i,e)}),t}),t,n)}})}),r(n,C(` `));let s=u(`rue:list:start`),c=u(`rue:list:end`);r(n,s),r(n,c);let f=new Map;return A(()=>{f=M({items:(e.warnings??[])||[],getKey:(e,t)=>`warning-${t}`,elements:f,parent:s.parentNode,before:c,singleRoot:!0,start:s,renderItem:(e,t,n,i,a)=>{y(m(()=>{let t=E(),n=v(`li`,t);r(t,n),A(()=>{h(n,`key`,String(`warning-${a}`))}),l(n,`text-warning`);let i=p(n);return r(n,i),A(()=>{D(i,e)}),t}),t,n)}})}),n}):null},useForm:e=>{let t=j(`useRef:1:38`,()=>S());return t.current||=e??be(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,t)=>{let n=o()?.propsRO?.[H],r=t??n?.form,[i,a]=j(`useState:1:35`,()=>c(0,{kind:`ref`})),s=j(`useRef:1:36`,()=>S(void 0)),l=j(`useRef:1:37`,()=>S(null));if(s.current!==r&&(l.current?.(),s.current=r,l.current=r?r.__INTERNAL__.subscribe(()=>{a(i.value+1)}):null),b(()=>{l.current?.(),l.current=null,s.current=void 0}),r)return i.value,r.getFieldValue(e)}}),Se=t=>m(n=>{let i=v(`div`,n);l(i,`not-prose my-6 lg:my-8`);let a=v(`h3`,i);r(i,a),l(a,`mt-0 mb-3 text-base font-semibold text-base-content`);let o=u(`rue:slot:anchor`);r(a,o),A(()=>{let n=t.title;e(()=>y(n,a,o))});let s=v(`div`,i);r(i,s),l(s,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=v(`table`,s);r(s,c),l(c,`table table-zebra`);let d=v(`thead`,c);r(c,d);let f=v(`tr`,d);r(d,f);let p=v(`th`,f);r(f,p),r(p,C(`属性`));let g=v(`th`,f);r(f,g),r(g,C(`说明`));let _=v(`th`,f);r(f,_),r(_,C(`类型`));let b=v(`th`,f);r(f,b),r(b,C(`默认值`));let x=v(`tbody`,c);r(c,x);let S=u(`rue:list:start`),w=u(`rue:list:end`);r(x,S),r(x,w);let T=new Map;return A(()=>{T=M({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,i,a,o)=>{y(m(()=>{let n=E(),i=v(`tr`,n);r(n,i),A(()=>{h(i,`key`,String(t.prop))});let a=v(`td`,i);r(i,a);let o=v(`code`,a);r(a,o);let s=u(`rue:slot:anchor`);r(o,s),A(()=>{let n=t.prop;e(()=>y(n,o,s))});let c=v(`td`,i);r(i,c);let l=u(`rue:slot:anchor`);r(c,l),A(()=>{let n=t.description;e(()=>y(n,c,l))});let d=v(`td`,i);r(i,d);let f=v(`code`,d);r(d,f);let p=u(`rue:slot:anchor`);r(f,p),A(()=>{let n=t.type;e(()=>y(n,f,p))});let m=v(`td`,i);r(i,m);let g=v(`code`,m);r(m,g);let _=u(`rue:slot:anchor`);return r(g,_),A(()=>{let n=t.defaultValue;e(()=>y(n,g,_))}),n}),n,i)}})}),i}),Ce=t=>m(n=>{let i=v(`div`,n);l(i,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let a=u(`rue:slot:anchor`);r(i,a),A(()=>{let n=t.eyebrow?m(()=>{let n=E(),i=v(`div`,n);r(n,i),l(i,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let a=u(`rue:slot:anchor`);return r(i,a),A(()=>{let n=t.eyebrow;e(()=>y(n,i,a))}),n}):``;e(()=>y(n,i,a))});let o=v(`h3`,i);r(i,o),l(o,`mt-3 mb-0 text-lg font-semibold text-base-content`);let s=u(`rue:slot:anchor`);r(o,s),A(()=>{let n=t.title;e(()=>y(n,o,s))});let c=v(`p`,i);r(i,c),l(c,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let d=u(`rue:slot:anchor`);r(c,d),A(()=>{let n=t.description;e(()=>y(n,c,d))});let f=u(`rue:slot:anchor`);return r(i,f),A(()=>{let n=t.items?.length?m(()=>{let e=E(),n=v(`ul`,e);r(e,n),l(n,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let i=u(`rue:list:start`),a=u(`rue:list:end`);r(n,i),r(n,a);let o=new Map;return A(()=>{o=M({items:t.items||[],getKey:(e,t)=>e,elements:o,parent:n,before:a,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,t,n,i,a)=>{y(m(()=>{let t=E(),n=v(`li`,t);r(t,n),A(()=>{h(n,`key`,String(e))});let i=p(n);return r(n,i),A(()=>{D(i,e)}),t}),t,n)}})}),e}):``;e(()=>y(n,i,f))}),i}),$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},we=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Te=()=>{let{initialValues:n,draft:i,result:a}=j(`useSetup:0:0`,()=>f(()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0};return{initialValues:e,draft:j(`ref:1:0`,()=>t($(e))),result:j(`ref:1:1`,()=>t(`等待提交，右侧会展示 payload 或校验摘要。`))}}));return m(t=>{let o=v(`div`,t);l(o,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let s=u(`rue:component:anchor`);r(o,s),A(()=>{let t=T(Q,{className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:n,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{i.value=$(t)},onFinish:e=>{a.value=`提交成功
`+$(e)},onFinishFailed:e=>{a.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>P(g,{children:[F(Q.Item,{form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>F(z,{...e,placeholder:`输入项目名称`})}),F(Q.Item,{form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>F(z,{...e,placeholder:`team@rue.dev`})}),F(Q.Item,{form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>F(R,{...e,children:`允许直接覆盖 staging 配置`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存表单`}),F(L,{type:`outlined`,onClick:()=>e.resetFields(),children:`重置`})]})]})});e(()=>y(t,o,s))});let c=v(`div`,o);r(o,c),l(c,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=v(`div`,c);r(c,d),l(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(d,C(`Submit result`));let f=v(`p`,c);r(c,f),l(f,`mt-3 mb-0 text-sm text-base-content/65`),r(f,C(`这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。`));let m=v(`div`,c);r(c,m),l(m,`mt-4 grid gap-4`);let h=v(`div`,m);r(m,h),l(h,`rounded-[1.25rem] bg-base-200/70 p-4`);let _=v(`div`,h);r(h,_),l(_,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(_,C(`Live draft`));let b=v(`pre`,h);r(h,b),l(b,`mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80`);let x=p(b);r(b,x),A(()=>{D(x,i.value)});let S=v(`div`,m);r(m,S),l(S,`rounded-[1.25rem] bg-neutral p-4 text-neutral-content`);let w=v(`div`,S);r(S,w),l(w,`text-xs uppercase tracking-[0.22em] text-neutral-content/60`),r(w,C(`Last submit`));let E=v(`pre`,S);r(S,E),l(E,`mt-3 whitespace-pre-wrap break-words text-xs leading-6`);let O=p(E);return r(E,O),A(()=>{D(O,a.value)}),o})},Ee=()=>{let{form:n,role:i,region:a,notes:o,activity:s}=j(`useSetup:0:0:dup1`,()=>f(()=>{let[e]=Q.useForm();return{form:e,role:Q.useWatch(`role`,e)??`viewer`,region:Q.useWatch(`region`,e)??`cn-hz`,notes:Q.useWatch(`notes`,e)??``,activity:j(`ref:1:2`,()=>t(`等待实例方法操作。`))}}));return m(t=>{let c=v(`div`,t);l(c,`grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=u(`rue:component:anchor`);r(c,d),A(()=>{let t=T(Q,{form:n,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`submit()
`+$(e)},onFinishFailed:e=>{s.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>P(g,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`viewer / editor / admin`})}),F(Q.Item,{form:e,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`cn-hz`})})]}),F(Q.Item,{form:e,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>F(z,{...e,placeholder:`写入审批说明或 rollout 策略`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,onClick:()=>{n.setFieldValue(`role`,`editor`),s.value=`setFieldValue('role', 'editor')`},children:`设为 editor`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{n.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),s.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:`填充预设`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{n.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),s.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:`填入异常值`}),F(L,{size:`sm`,type:`text`,onClick:()=>{n.resetFields(),s.value=`resetFields()`},children:`恢复初始值`}),F(L,{size:`sm`,color:`primary`,onClick:()=>{n.submit()},children:`程序化提交`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>{n.validateFields().then(e=>{s.value=`validateFields()
`+$(e)}).catch(e=>{s.value=`validateFields() failed
`+$(e.errorFields)})},children:`validateFields`})]})]})});e(()=>y(t,c,d))});let f=v(`div`,c);r(c,f),l(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=v(`div`,f);r(f,m),l(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(m,C(`Reactive summary`));let h=v(`p`,f);r(f,h),l(h,`mt-3 mb-0 text-sm text-base-content/65`),r(h,C(`这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。`));let _=v(`div`,f);r(f,_),l(_,`mt-4 grid gap-3`);let b=v(`div`,_);r(_,b),l(b,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let x=v(`div`,b);r(b,x),l(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(x,C(`role`));let S=v(`div`,b);r(b,S),l(S,`mt-2 text-lg font-semibold text-base-content`);let w=p(S);r(S,w),A(()=>{D(w,String(i))});let E=v(`div`,_);r(_,E),l(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let O=v(`div`,E);r(E,O),l(O,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(O,C(`region`));let k=v(`div`,E);r(E,k),l(k,`mt-2 text-lg font-semibold text-base-content`);let j=p(k);r(k,j),A(()=>{D(j,String(a))});let M=v(`div`,_);r(_,M),l(M,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let N=v(`div`,M);r(M,N),l(N,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(N,C(`notes`));let I=v(`div`,M);r(M,I),l(I,`mt-2 text-sm leading-6 text-base-content/80`);let R=p(I);r(I,R),A(()=>{D(R,String(o)||`未填写`)});let B=v(`pre`,f);r(f,B),l(B,`mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6`);let V=p(B);return r(B,V),A(()=>{D(V,s.value)}),c})},De=()=>{let{form:n,password:i,confirm:a,website:o,status:s}=j(`useSetup:0:0:dup2`,()=>f(()=>{let[e]=Q.useForm();return{form:e,password:Q.useWatch(`password`,e)??``,confirm:Q.useWatch(`confirm`,e)??``,website:Q.useWatch(`website`,e)??``,status:j(`ref:1:3`,()=>t(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`))}}));return m(t=>{let c=v(`div`,t);l(c,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let d=u(`rue:component:anchor`);r(c,d),A(()=>{let t=T(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>P(g,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>F(z,{...e,placeholder:`release-admin`})}),F(Q.Item,{form:e,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>F(z,{...e,placeholder:`https://prod.rue.dev`})})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>F(z,{...e,placeholder:`至少 8 位`})}),F(Q.Item,{form:e,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>F(z,{...e,placeholder:`再次输入密码`})})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行校验`}),F(L,{type:`outlined`,onClick:()=>n.resetFields(),children:`清空状态`})]})]})});e(()=>y(t,c,d))});let f=v(`div`,c);r(c,f),l(f,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let m=v(`div`,f);r(f,m),l(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(m,C(`Validation notes`));let h=v(`p`,f);r(f,h),l(h,`mt-3 mb-0 text-sm text-base-content/65`),r(h,C("这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。"));let _=v(`div`,f);r(f,_),l(_,`mt-4 grid gap-3`);let b=v(`div`,_);r(_,b),l(b,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let x=v(`div`,b);r(b,x),l(x,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(x,C(`Password match`));let S=v(`div`,b);r(b,S),l(S,`mt-2 text-base font-semibold text-base-content`);let w=p(S);r(S,w),A(()=>{D(w,i&&a?i===a?`已匹配`:`未匹配`:`等待输入`)});let E=v(`div`,_);r(_,E),l(E,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let O=v(`div`,E);r(E,O),l(O,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(O,C(`Website warning`));let k=v(`div`,E);r(E,k),l(k,`mt-2 text-base font-semibold text-base-content`);let j=p(k);r(k,j),A(()=>{D(j,o?String(o).startsWith(`https://`)?`格式建议通过`:`建议补上 https://`:`未填写`)});let M=v(`pre`,f);r(f,M),l(M,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let N=p(M);return r(M,N),A(()=>{D(N,s.value)}),c})},Oe=()=>{let{form:n,initialValues:i,issueId:a,slug:o,branch:s,snapshot:c}=j(`useSetup:0:0:dup3`,()=>f(()=>{let[e]=Q.useForm(),n={issueId:`2048`,slug:`release-planning`,branch:`main`};return{form:e,initialValues:n,issueId:Q.useWatch(`issueId`,e)??``,slug:Q.useWatch(`slug`,e)??``,branch:Q.useWatch(`branch`,e)??``,snapshot:j(`ref:1:4`,()=>t($(n)))}}));return m(t=>{let d=v(`div`,t);l(d,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let f=u(`rue:component:anchor`);r(d,f),A(()=>{let t=T(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:i,onValuesChange:(e,t)=>{c.value=$(t)},onFinish:e=>{c.value=`提交成功
`+$(e)},render:e=>P(g,{children:[F(Q.Item,{form:e,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>F(z,{...e,placeholder:`#2048`})}),F(Q.Item,{form:e,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>F(z,{...e,placeholder:`release-planning`})}),F(Q.Item,{form:e,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>F(z,{...e,placeholder:`main / release/v1-2`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`应用转换`}),F(L,{type:`outlined`,onClick:()=>{n.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:`填充示例`})]})]})});e(()=>y(t,d,f))});let m=v(`div`,d);r(d,m),l(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=v(`div`,m);r(m,h),l(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,C(`Store snapshot`));let _=v(`p`,m);r(m,_),l(_,`mt-3 mb-0 text-sm text-base-content/65`),r(_,C("这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。"));let b=v(`div`,m);r(m,b),l(b,`mt-4 grid gap-3`);let x=v(`div`,b);r(b,x),l(x,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let S=v(`div`,x);r(x,S),l(S,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(S,C(`issueId`));let w=v(`div`,x);r(x,w),l(w,`mt-2 text-lg font-semibold text-base-content`);let E=p(w);r(w,E),A(()=>{D(E,String(a)||`空`)});let O=v(`div`,b);r(b,O),l(O,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=v(`div`,O);r(O,k),l(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(k,C(`slug`));let j=v(`div`,O);r(O,j),l(j,`mt-2 text-lg font-semibold text-base-content`);let M=p(j);r(j,M),A(()=>{D(M,String(o)||`空`)});let N=v(`div`,b);r(b,N),l(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=v(`div`,N);r(N,I),l(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(I,C(`branch`));let R=v(`div`,N);r(N,R),l(R,`mt-2 text-lg font-semibold text-base-content`);let B=p(R);r(R,B),A(()=>{D(B,String(s)||`空`)});let V=v(`pre`,m);r(m,V),l(V,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let H=p(V);return r(V,H),A(()=>{D(H,c.value)}),d})},ke=()=>{let{form:n,enableCanary:i,publishMode:a,batchSize:o,approveBy:s,result:c}=j(`useSetup:0:0:dup4`,()=>f(()=>{let[e]=Q.useForm();return{form:e,enableCanary:!!Q.useWatch(`enableCanary`,e),publishMode:Q.useWatch(`publishMode`,e)??`manual`,batchSize:Q.useWatch(`batchSize`,e)??``,approveBy:Q.useWatch(`approveBy`,e)??``,result:j(`ref:1:5`,()=>t(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`))}}));return m(t=>{let d=v(`div`,t);l(d,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let f=u(`rue:component:anchor`);r(d,f),A(()=>{let t=T(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{c.value=`提交成功
`+$(e)},render:e=>P(g,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`gateway`})}),F(Q.Item,{form:e,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`manual / auto`})})]}),F(Q.Item,{form:e,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>F(R,{...e,children:`开启 canary rollout`})}),F(Q.Item,{shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:t=>t.enableCanary?P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5`,children:[F(`div`,{className:`mb-4 text-sm font-medium text-base-content`,children:`Canary settings`}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-ops`})})]}),t.publishMode===`auto`?F(`div`,{className:`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,children:`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`}):null]}):F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,children:`未开启灰度发布，额外字段不会挂载，也不会参与校验。`})}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存发布策略`}),F(L,{type:`outlined`,onClick:()=>{n.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:`套用 canary 模板`})]})]})});e(()=>y(t,d,f))});let m=v(`div`,d);r(d,m),l(m,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let h=v(`div`,m);r(m,h),l(h,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(h,C(`Conditional summary`));let _=v(`p`,m);r(m,_),l(_,`mt-3 mb-0 text-sm text-base-content/65`),r(_,C("这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。"));let b=v(`div`,m);r(m,b),l(b,`mt-4 grid gap-3`);let x=v(`div`,b);r(b,x),l(x,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let S=v(`div`,x);r(x,S),l(S,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(S,C(`enableCanary`));let w=v(`div`,x);r(x,w),l(w,`mt-2 text-lg font-semibold text-base-content`);let E=p(w);r(w,E),A(()=>{D(E,i?`true`:`false`)});let O=v(`div`,b);r(b,O),l(O,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let k=v(`div`,O);r(O,k),l(k,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(k,C(`publishMode`));let j=v(`div`,O);r(O,j),l(j,`mt-2 text-lg font-semibold text-base-content`);let M=p(j);r(j,M),A(()=>{D(M,String(a))});let N=v(`div`,b);r(b,N),l(N,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm`);let I=v(`div`,N);r(N,I),l(I,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(I,C(`Conditional fields`));let B=v(`div`,N);r(N,B),l(B,`mt-2 text-sm leading-6 text-base-content/80`),r(B,C(`batchSize: `));let V=p(B);r(B,V),A(()=>{D(V,String(o)||`未挂载`)}),r(B,v(`br`,B)),r(B,C(`approveBy: `));let H=p(B);r(B,H),A(()=>{D(H,String(s)||`未挂载`)});let U=v(`pre`,m);r(m,U),l(U,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let W=p(U);return r(U,W),A(()=>{D(W,c.value)}),d})},Ae=()=>{let{form:n,host:i,path:a,saveLog:o,normalizedPath:s,previewUrl:c}=j(`useSetup:0:0:dup5`,()=>f(()=>{let[e]=Q.useForm(),n=String(Q.useWatch(`host`,e)??`api.rue.dev`),r=String(Q.useWatch(`path`,e)??`release-hooks`),i=j(`ref:1:6`,()=>t(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`)),a=r?r.replace(/^\/+/,``):``;return{form:e,host:n,path:r,saveLog:i,normalizedPath:a,previewUrl:`https://${n}:443/hooks/${a}`}}));return m(t=>{let i=v(`div`,t);l(i,`grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]`);let a=u(`rue:component:anchor`);r(i,a),A(()=>{let t=T(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{o.value=`保存复合控件
`+$(e)},render:e=>P(g,{children:[P(`div`,{className:`grid gap-6`,children:[P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`回调地址`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`https://`}),F(Q.Item,{form:e,name:`host`,noStyle:!0,render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`api.rue.dev`})})}),F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`:443`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。`})]}),P(`div`,{className:`grid gap-3`,children:[F(`div`,{className:`text-[0.95rem] leading-7 font-medium text-base-content/78`,children:`资源路径`}),P(`div`,{className:`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3`,children:[F(`span`,{className:`rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55`,children:`/hooks/`}),F(Q.Item,{form:e,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>F(`div`,{className:`min-w-0`,children:F(z,{...e,placeholder:`release-hooks`})})}),F(`span`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/45`,children:`POST target`})]}),F(`div`,{className:`text-[0.8rem] leading-6 text-base-content/55`,children:`noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。`})]})]}),P(`div`,{className:`flex flex-wrap gap-3 pt-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`保存复合地址`}),F(L,{type:`outlined`,onClick:()=>{n.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:`填入 staging`})]})]})});e(()=>y(t,i,a))});let s=v(`div`,i);r(i,s),l(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=v(`div`,s);r(s,d),l(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(d,C(`Composite preview`));let f=v(`p`,s);r(s,f),l(f,`mt-3 mb-0 text-sm text-base-content/65`),r(f,C(`这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。`));let m=v(`div`,s);r(s,m),l(m,`mt-4 rounded-[1.25rem] bg-base-200/70 p-4`);let h=v(`div`,m);r(m,h),l(h,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(h,C(`Resolved URL`));let _=v(`div`,m);r(m,_),l(_,`mt-3 break-all text-lg font-semibold text-base-content`);let b=u(`rue:slot:anchor`);r(_,b),A(()=>{let t=c;e(()=>y(t,_,b))});let x=v(`div`,s);r(s,x),l(x,`mt-4 grid gap-3 text-sm text-base-content/75`);let S=v(`div`,x);r(x,S),l(S,`rounded-[1.25rem] bg-base-200/70 p-4`),r(S,C("`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。"));let w=v(`div`,x);r(x,w),l(w,`rounded-[1.25rem] bg-base-200/70 p-4`),r(w,C(`外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。`));let E=v(`div`,x);r(x,E),l(E,`rounded-[1.25rem] bg-base-200/70 p-4`),r(E,C(`如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。`));let O=v(`pre`,s);r(s,O),l(O,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let k=p(O);return r(O,k),A(()=>{D(k,o.value)}),i})},je=()=>{let{form:n,activity:i,jumpToField:a}=j(`useSetup:0:0:dup6`,()=>f(()=>{let[e]=Q.useForm(),n=j(`ref:1:7`,()=>t(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`));return{form:e,activity:n,jumpToField:(t,r)=>{e.scrollToField(t,{block:`center`,focus:!0}),n.value=`scrollToField -> ${r}`}}}));return m(t=>{let o=v(`div`,t);l(o,`grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]`);let s=v(`div`,o);r(o,s),l(s,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let c=v(`div`,s);r(s,c),l(c,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(c,C(`Scroll actions`));let f=v(`p`,s);r(s,f),l(f,`mt-3 mb-0 text-sm text-base-content/65`),r(f,C(`这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。`));let m=v(`div`,s);r(s,m),l(m,`mt-4 grid gap-2`);let h=u(`rue:component:anchor`);r(m,h),y(T(L,{size:`sm`,onClick:()=>a(`releaseName`,`发布名称`),children:`滚到发布名称`}),m,h);let _=u(`rue:component:anchor`);r(m,_),y(T(L,{size:`sm`,type:`outlined`,onClick:()=>a([`strategy`,`batchSize`],`灰度批次`),children:`滚到灰度批次`}),m,_);let b=u(`rue:component:anchor`);r(m,b),y(T(L,{size:`sm`,type:`outlined`,onClick:()=>a([`observability`,`dashboard`],`监控看板`),children:`滚到监控看板`}),m,b);let x=u(`rue:component:anchor`);r(m,x),y(T(L,{size:`sm`,type:`outlined`,onClick:()=>a([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),m,x);let S=v(`pre`,s);r(s,S),l(S,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content`);let w=p(S);r(S,w),A(()=>{D(w,i.value)});let E=v(`div`,o);r(o,E),l(E,`rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5`);let O=v(`div`,E);r(E,O),l(O,`overflow-y-auto overscroll-contain pr-2`),d(O,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let k=u(`rue:component:anchor`);return r(O,k),A(()=>{let t=T(Q,{form:n,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{i.value=`提交成功
`+$(e)},onFinishFailed:e=>{i.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>P(g,{children:[P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 1`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`基础信息`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`2026.05 release`})}),F(Q.Item,{form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`staging`})}),F(Q.Item,{form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`release-captain`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 2`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`发布策略`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`10%`})}),F(Q.Item,{form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`15m`})}),F(Q.Item,{form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`error rate > 2%`})}),F(Q.Item,{form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`30m`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 3`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`观测与审批`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Grafana release board`})}),F(Q.Item,{form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`#release-alerts`})}),F(Q.Item,{form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`ops-squad`})}),F(Q.Item,{form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`qa-squad`})})]})]}),P(`section`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6`,children:[P(`div`,{className:`mb-4`,children:[F(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:`Section 4`}),F(`div`,{className:`mt-1 text-lg font-semibold text-base-content`,children:`回滚预案`})]}),P(`div`,{className:`grid gap-5 md:grid-cols-2`,children:[F(Q.Item,{form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>F(z,{...e,placeholder:`RB-2026-0514`})}),F(Q.Item,{form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`rollback-owner`})}),F(Q.Item,{form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`20m`})}),F(Q.Item,{form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`platform / qa / support`})})]})]}),F(`div`,{className:`sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur`,children:P(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[F(`div`,{className:`text-sm text-base-content/65`,children:`留空深层字段后点击提交，会自动滚到首个错误项。`}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{type:`outlined`,onClick:()=>a([`rollback`,`ticket`],`回滚单号`),children:`滚到回滚单号`}),F(L,{color:`primary`,htmlType:`submit`,children:`提交长表单`})]})]})})]})});e(()=>y(t,O,k))}),o})},Me=()=>{let{form:t,members:n}=j(`useSetup:0:0:dup7`,()=>f(()=>{let[e]=Q.useForm();return{form:e,members:Q.useWatch(`members`,e)??[]}}));return m(i=>{let a=v(`div`,i);l(a,`grid gap-6`);let o=v(`div`,a);r(a,o),l(o,`grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]`);let s=u(`rue:component:anchor`);r(o,s),A(()=>{let n=T(Q,{form:t,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>F(Q.List,{form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(t,n,r)=>P(`div`,{className:`grid gap-4`,children:[t.length===0?F(`div`,{className:`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,children:`暂无成员，点击下方按钮即可追加一组字段。`}):null,t.map((r,i)=>P(`div`,{className:`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`,children:[P(`div`,{className:`mb-4 flex flex-wrap items-center justify-between gap-3`,children:[P(`div`,{children:[P(`div`,{className:`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`,children:[`Member `,i+1]}),P(`div`,{className:`mt-1 text-sm font-medium text-base-content`,children:[`审批成员 `,i+1]})]}),P(`div`,{className:`flex flex-wrap gap-2`,children:[i>0?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name-1),children:`上移`}):null,i<t.length-1?F(L,{size:`sm`,type:`outlined`,onClick:()=>n.move(r.name,r.name+1),children:`下移`}):null,F(L,{size:`sm`,type:`text`,onClick:()=>n.remove(r.name),children:`删除`})]})]}),P(`div`,{className:`grid gap-4 md:grid-cols-2`,children:[F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`输入成员名称`})}),F(Q.Item,{form:e,layout:`vertical`,name:[`members`,r.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>F(z,{...e,placeholder:`Owner / Reviewer / QA`})})]})]},r.key)),P(`div`,{className:`flex flex-wrap gap-3 pt-1`,children:[F(L,{size:`sm`,color:`primary`,onClick:()=>{n.add({name:`新成员 `+String(t.length+1),role:`QA`})},children:`新增成员`}),F(L,{size:`sm`,type:`outlined`,onClick:()=>n.add({name:`Head reviewer`,role:`QA`},0),children:`头部插入`})]}),r.errors.length>0||r.warnings.length>0?F(Q.ErrorList,{errors:r.errors,warnings:r.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}):null]})})});e(()=>y(n,o,s))});let c=v(`div`,o);r(o,c),l(c,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let d=v(`div`,c);r(c,d),l(d,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(d,C(`List snapshot`));let f=v(`div`,c);r(c,f),l(f,`mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65`);let g=u(`rue:slot:anchor`);r(f,g),A(()=>{let t=n.length;e(()=>y(t,f,g))}),r(f,C(` members`));let _=v(`div`,c);r(c,_),l(_,`mt-4 grid gap-3`);let b=u(`rue:slot:anchor`);r(_,b),A(()=>{let t=n.length>0?m(()=>{let e=E(),t=u(`rue:list:start`),i=u(`rue:list:end`);r(e,t),r(e,i);let a=new Map;return A(()=>{a=M({items:n||[],getKey:(e,t)=>String(t),elements:a,parent:t.parentNode,before:i,singleRoot:!0,start:t,renderItem:(e,t,n,i,a)=>{y(m(()=>{let t=E(),n=v(`div`,t);r(t,n),A(()=>{h(n,`key`,String(String(a)))}),l(n,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let i=v(`div`,n);r(n,i),l(i,`text-xs uppercase tracking-[0.22em] text-base-content/45`),r(i,C(`成员 `));let o=p(i);r(i,o),A(()=>{D(o,a+1)});let s=v(`div`,n);r(n,s),l(s,`mt-2 text-base font-medium text-base-content`);let c=p(s);r(s,c),A(()=>{D(c,e?.name?String(e.name):`未命名成员`)});let u=v(`div`,n);r(n,u),l(u,`mt-1 text-xs text-base-content/55`);let d=p(u);return r(u,d),A(()=>{D(d,e?.role?String(e.role):`未分配职责`)}),t}),t,n)}})}),e}):m(()=>{let e=E(),t=v(`div`,e);return r(e,t),l(t,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),r(t,C(`当前列表为空。`)),e});e(()=>y(t,_,b))});let x=v(`div`,a);r(a,x),l(x,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`);let S=v(`div`,x);r(x,S),l(S,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(S,C(`List behavior`));let w=v(`div`,x);r(x,w),l(w,`mt-4 grid gap-4 md:grid-cols-3`);let O=v(`div`,w);r(w,O),l(O,`rounded-[1.25rem] bg-base-200/70 p-4`);let k=v(`div`,O);r(O,k),l(k,`text-sm font-semibold text-base-content`),r(k,C(`列表级规则`));let j=v(`p`,O);r(O,j),l(j,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(j,C(`rules 挂在 Form.List 上，校验整个 members 数组。`));let N=v(`div`,w);r(w,N),l(N,`rounded-[1.25rem] bg-base-200/70 p-4`);let I=v(`div`,N);r(N,I),l(I,`text-sm font-semibold text-base-content`),r(I,C(`重排操作`));let R=v(`p`,N);r(N,R),l(R,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(R,C(`operation.move 保持字段状态跟随成员顺序移动。`));let B=v(`div`,w);r(w,B),l(B,`rounded-[1.25rem] bg-base-200/70 p-4`);let V=v(`div`,B);r(B,V),l(V,`text-sm font-semibold text-base-content`),r(V,C(`错误出口`));let H=v(`p`,B);return r(B,H),l(H,`mt-2 mb-0 text-sm leading-6 text-base-content/65`),r(H,C(`Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。`)),a})},Ne=()=>{let{form:n,keyword:i,assignee:a,repository:o,reviewer:s,includeDrafts:c,submitted:d}=j(`useSetup:0:0:dup8`,()=>f(()=>{let[e]=Q.useForm();return{form:e,keyword:Q.useWatch(`keyword`,e)??``,assignee:Q.useWatch(`assignee`,e)??``,repository:Q.useWatch(`repository`,e)??``,reviewer:Q.useWatch(`reviewer`,e)??``,includeDrafts:!!Q.useWatch(`includeDrafts`,e),submitted:j(`ref:1:8`,()=>t(`尚未执行检索。`))}}));return m(t=>{let f=v(`div`,t);l(f,`grid gap-6`);let m=u(`rue:component:anchor`);r(f,m),A(()=>{let t=T(Q,{form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{d.value=$(e)},render:e=>P(g,{children:[P(`div`,{className:`grid gap-5 md:grid-cols-2 xl:grid-cols-4`,children:[F(Q.Item,{form:e,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>F(z,{...e,placeholder:`搜索 issue / 页面 / API`})}),F(Q.Item,{form:e,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>F(z,{...e,placeholder:`rue-design`})}),F(Q.Item,{form:e,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>F(z,{...e,placeholder:`team-design`})}),F(Q.Item,{form:e,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>F(z,{...e,placeholder:`infra`})})]}),P(`div`,{className:`mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4`,children:[F(Q.Item,{form:e,name:`includeDrafts`,valuePropName:`checked`,render:e=>F(R,{...e,children:`包含草稿和实验分支`})}),P(`div`,{className:`flex flex-wrap gap-2`,children:[F(L,{color:`primary`,htmlType:`submit`,children:`执行搜索`}),F(L,{type:`outlined`,onClick:()=>n.resetFields(),children:`清空条件`}),F(L,{type:`text`,onClick:()=>{n.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:`填入示例`})]})]})]})});e(()=>y(t,f,m))});let h=v(`div`,f);r(f,h),l(h,`grid gap-4 lg:grid-cols-2`);let _=v(`div`,h);r(h,_),l(_,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let b=v(`div`,_);r(_,b),l(b,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(b,C(`Query preview`));let x=v(`p`,_);r(_,x),l(x,`mt-3 mb-0 text-sm text-base-content/65`),r(x,C(`这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。`));let S=v(`pre`,_);r(_,S),l(S,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let w=u(`rue:slot:anchor`);r(S,w),A(()=>{let t=we({keyword:String(i),repository:String(o),assignee:String(a),reviewer:String(s),includeDrafts:c})||`暂无 query string`;e(()=>y(t,S,w))});let E=v(`div`,_);r(_,E),l(E,`mt-4 grid gap-3 text-sm text-base-content/80`);let O=v(`div`,E);r(E,O),l(O,`rounded-[1.25rem] bg-base-200/70 p-4`),r(O,C(`关键词：`));let k=p(O);r(O,k),A(()=>{D(k,String(i)||`未填写`)});let j=v(`div`,E);r(E,j),l(j,`rounded-[1.25rem] bg-base-200/70 p-4`),r(j,C(`仓库：`));let M=p(j);r(j,M),A(()=>{D(M,String(o)||`未填写`)});let N=v(`div`,E);r(E,N),l(N,`rounded-[1.25rem] bg-base-200/70 p-4`),r(N,C(`负责人 / 评审人：`));let I=p(N);r(N,I),A(()=>{D(I,String(a)||`未填写`)}),r(N,C(` / `));let B=p(N);r(N,B),A(()=>{D(B,String(s)||`未填写`)});let V=v(`div`,E);r(E,V),l(V,`rounded-[1.25rem] bg-base-200/70 p-4`),r(V,C(`包含草稿：`));let H=p(V);r(V,H),A(()=>{D(H,c?`是`:`否`)});let U=v(`div`,h);r(h,U),l(U,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`);let W=v(`div`,U);r(U,W),l(W,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),r(W,C(`Last submit`));let G=v(`pre`,U);r(U,G),l(G,`mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80`);let K=p(G);return r(G,K),A(()=>{D(K,d.value)}),f})},Pe=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Fe=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ie=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Le=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],Re=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],ze=()=>{let{tabBasic:n,tabInstance:i,tabValidation:a,tabNormalize:o,tabConditional:s,tabNoStyle:c,tabList:d,tabScroll:g,tabInline:_}=j(`useSetup:0:0:dup9`,()=>f(()=>({tabBasic:j(`ref:1:9`,()=>t(`preview`)),tabInstance:j(`ref:1:10`,()=>t(`preview`)),tabValidation:j(`ref:1:11`,()=>t(`preview`)),tabNormalize:j(`ref:1:12`,()=>t(`preview`)),tabConditional:j(`ref:1:13`,()=>t(`preview`)),tabNoStyle:j(`ref:1:14`,()=>t(`preview`)),tabList:j(`ref:1:15`,()=>t(`preview`)),tabScroll:j(`ref:1:16`,()=>t(`preview`)),tabInline:j(`ref:1:17`,()=>t(`preview`))})));return m(t=>{let f=E(),b=u(`rue:component:anchor`);return r(f,b),y(T(B,{children:m(()=>{let t=E(),f=v(`div`,t);r(t,f),l(f,`max-w-none prose prose-sm md:prose-base`);let m=v(`h1`,f);r(f,m),l(m,`mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content`),r(m,C(`Form 表单`));let b=v(`p`,f);r(f,b),l(b,`mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72`),r(b,C(`这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。`));let x=v(`h2`,f);r(f,x),r(x,C(`何时使用`));let S=v(`ul`,f);r(f,S);let O=v(`li`,S);r(S,O),r(O,C(`需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。`));let k=v(`li`,S);r(S,k),r(k,C(`需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。`));let j=v(`li`,S);r(S,j),r(j,C(`需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。`));let N=v(`section`,f);r(f,N),l(N,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let P=u(`rue:list:start`),I=u(`rue:list:end`);r(N,P),r(N,I);let L=new Map;A(()=>{L=M({items:Le||[],getKey:(e,t)=>e.title,elements:L,parent:N,before:I,start:P,renderItem:(e,t,n,r,i)=>{w(T(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description,items:e.items}),t,n,r)}})});let R=v(`div`,f);r(f,R),l(R,`not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm`),r(R,C(`当前 Rue runtime 下，推荐通过`));let z=v(`code`,R);r(R,z),r(z,C(`Form.useForm()`)),r(R,C(`或`));let B=p(R);r(R,B),D(B,` `);let H=v(`code`,R);r(R,H);let U=p(H);r(H,U),D(U,`render={form => <Form.Item form={form} name="title" />}`),r(R,C(`显式持有并传递`));let W=p(R);r(R,W),D(W,` `);let G=v(`code`,R);r(R,G),r(G,C(`form`)),r(R,C("。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。"));let K=u(`rue:component:anchor`);r(f,K),A(()=>{let t=T(V,{title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:n,preview:()=>F(Te,{}),code:`<Form
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
`});e(()=>y(t,f,K))});let q=u(`rue:component:anchor`);r(f,q),A(()=>{let t=T(V,{title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:i,preview:()=>F(Ee,{}),code:`const InstanceMethodsShowcase: FC = () => {
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
`});e(()=>y(t,f,q))});let J=u(`rue:component:anchor`);r(f,J),A(()=>{let t=T(V,{title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:a,preview:()=>F(De,{}),code:`const [form] = Form.useForm()

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
`});e(()=>y(t,f,J))});let ee=u(`rue:component:anchor`);r(f,ee),A(()=>{let t=T(V,{title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:o,preview:()=>F(Oe,{}),code:`<Form.Item
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
`});e(()=>y(t,f,ee))});let te=u(`rue:component:anchor`);r(f,te),A(()=>{let t=T(V,{title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:s,preview:()=>F(ke,{}),code:`<Form.Item
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
`});e(()=>y(t,f,te))});let ne=u(`rue:component:anchor`);r(f,ne),A(()=>{let t=T(V,{title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:c,preview:()=>F(Ae,{}),code:`const [form] = Form.useForm()

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
`});e(()=>y(t,f,ne))});let re=u(`rue:component:anchor`);r(f,re),A(()=>{let t=T(V,{title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:d,preview:()=>F(Me,{}),code:`const DynamicListShowcase: FC = () => {
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
`});e(()=>y(t,f,re))});let ie=u(`rue:component:anchor`);r(f,ie),A(()=>{let t=T(V,{title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:g,preview:()=>F(je,{}),code:`const LongFormScrollShowcase: FC = () => {
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
`});e(()=>y(t,f,ie))});let ae=u(`rue:component:anchor`);r(f,ae),A(()=>{let t=T(V,{title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:_,preview:()=>F(Ne,{}),code:`const [form] = Form.useForm()

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
`});e(()=>y(t,f,ae))});let Y=v(`h2`,f);r(f,Y),r(Y,C(`使用说明`));let oe=v(`p`,f);r(f,oe),r(oe,C(`下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。`));let se=v(`section`,f);r(f,se),l(se,`not-prose my-8 grid gap-4 lg:grid-cols-2`);let X=u(`rue:list:start`),Z=u(`rue:list:end`);r(se,X),r(se,Z);let ce=new Map;A(()=>{ce=M({items:Re||[],getKey:(e,t)=>e.title,elements:ce,parent:se,before:Z,start:X,renderItem:(e,t,n,r,i)=>{w(T(Ce,{key:e.title,eyebrow:e.eyebrow,title:e.title,description:e.description}),t,n,r)}})});let le=v(`h2`,f);r(f,le),h(le,`id`,`form-api`),r(le,C(`API`));let ue=v(`p`,f);r(f,ue),r(ue,C(`Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。`));let de=u(`rue:component:anchor`);r(f,de),A(()=>{let t=T(Se,{title:`Form`,rows:Pe});e(()=>y(t,f,de))});let fe=u(`rue:component:anchor`);r(f,fe),A(()=>{let t=T(Se,{title:`Form.Item`,rows:Fe});e(()=>y(t,f,fe))});let pe=u(`rue:component:anchor`);return r(f,pe),A(()=>{let t=T(Se,{title:`Form.List and Hooks`,rows:Ie});e(()=>y(t,f,pe))}),t})}),f,b),f})};export{ze as default};