import{At as e,C as t,Dn as n,E as r,En as i,Et as a,Mt as o,Ot as s,P as c,Q as l,T as u,Vt as d,Y as f,Zt as p,_n as m,_t as h,at as g,b as _,bn as v,bt as y,cn as b,ct as x,dt as S,en as C,et as w,ft as T,gn as E,gt as D,hn as O,in as k,k as A,kn as j,kt as M,mn as N,nt as P,on as F,pn as I,qt as L,rn as R,rt as z,sn as B,st as V,tn as H,tt as U,ut as W,v as ee,vn as G,vt as K,w as te,wn as q,x as ne,xn as J,xt as re,y as ie,yt as ae}from"./rue-runtime-HIMg8Lz8.js";import{t as Y}from"./button-wFg2EV7R.js";import{t as oe}from"./checkbox-B-kgk-aS.js";import{t as X}from"./input-BQw3YBwv.js";import{r as se}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as Z}from"./PreviewBlock-Dc0KnPUP.js";var ce=G(`<ul><!--rue:text-hole:0--><!--rue:text-hole:1--></ul>`),le=G(`<ul class="mt-2 grid gap-1 text-xs"><!--rue:text-hole:0--><!--rue:text-hole:1--></ul>`),ue=G(`<div></div>`),de=G(`<label><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--><!--rue:text-hole:2--></label>`),fe=G(`<div><!--rue:text-hole:0--><div class="min-w-0 flex-1"><div class="flex items-start gap-3"><div class="min-w-0 flex-1"></div><!--rue:text-hole:1--></div><div class="mt-3"></div><!--rue:text-hole:2--></div></div>`),pe=G(`<div data-rue-form-list-shell="true"><!--rue:text-hole:0--></div>`),me=G(`<form><!--rue:text-hole:0--></form>`),he=G(`<div><!--rue:text-hole:0--></div>`),ge=G(`<section><!--rue:text-hole:0--></section>`),_e=`__rueFormContext`,ve=`__rueFormOriginalDefaultSlot`,ye=`__rue_slots`,be=0,xe={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},Se=(...e)=>e.filter(Boolean).join(` `),Ce=e=>!!e&&typeof e==`object`,we=e=>{if(Array.isArray(e))return e.map(e=>we(e));if(Ce(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=we(e[n])}),t}return e},Te=e=>e==null?[]:Array.isArray(e)?[...e]:[e],Ee=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),De=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),Oe=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),ke=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},Ae=(e,t,n)=>{if(t.length===0)return we(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?we(n):Ae(o[r],i,n),o},je=(e,t)=>{if(t.length===0)return;if(!Ce(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=je(i[n],r),i)},Me=(e,t)=>{if(!Ce(t)&&!Array.isArray(t))return we(t);if(Array.isArray(t))return t.map(e=>we(e));let n=Ce(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Me(n[e],t[e])}),n},Ne=(e,t)=>Ae({},e,t),Pe=e=>e?Array.isArray(e)?e:[e]:[`onChange`],Fe=(e,t)=>{let n=e[ye];if(n&&typeof n==`object`&&`default`in n){let e=n.default;return typeof e==`function`?e():e}return`children`in e?e.children:t},Ie=e=>typeof e==`function`&&e.kind===`block-factory`?e():e,Le=e=>{let t=e[ye];return!!(t&&typeof t==`object`&&`default`in t)},Re=(e,t)=>{let n=e[ye];if(!n||typeof n!=`object`||!(`default`in n))return e;let r=n,i=r[ve]??r.default;return r[ve]=i,r.default=(...e)=>t(typeof i==`function`?i(...e):i),e};F((e,t,n)=>(F(),Le(e)?z(ie,()=>({source:Re(e,e=>n(Ie(e)))})):n(Ie(Fe(e,t)))));var ze=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,Be=(e,t)=>{let n=ze(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},Ve=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,He=e=>{try{return new URL(e),!0}catch{return!1}},Ue=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&He(e);default:return!0}},We=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??xe.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??xe.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??xe.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??xe.types?.[e.type??`string`]??"${label} 类型不正确";let a=ze(t,e.type);return(r[a]??xe[a]??{})[i??`len`]??"${label} 校验失败"},Ge=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),Ke=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},qe=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,Je=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=Ke(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&Ve(n,e.type)?i=We(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=We(e,n,l,o,`whitespace`):!Ve(n,e.type)&&e.type&&!Ue(n,e.type)?i=We(e,n,l,o,`type`):!Ve(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=We(e,n,l,o,`pattern`):!Ve(n,e.type)&&e.len!==void 0?Be(n,e.type)!==e.len&&(i=We(e,n,l,o,`len`)):!Ve(n,e.type)&&e.min!==void 0?Be(n,e.type)<e.min&&(i=We(e,n,l,o,`min`)):!Ve(n,e.type)&&e.max!==void 0&&Be(n,e.type)>e.max&&(i=We(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=Ge(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},Ye=(e,...t)=>{let[n,r]=t;if(e===`checked`)return Ce(r)&&typeof r.checked==`boolean`?r.checked:Ce(n)&&Ce(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(Ce(n)&&`target`in n))return n;if(Ce(n)&&Ce(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},Xe=e=>e?d(Object.assign(e===`error`?e=>{let t=E(`span`,e);return t.className=`text-error`,I(t,m(`!`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}}:e===`warning`?e=>{let t=E(`span`,e);return t.className=`text-warning`,I(t,m(`!`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}}:e===`success`?e=>{let t=E(`span`,e);return t.className=`text-success`,I(t,m(`✓`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}}:e=>{let t=E(`span`,e);return t.className=`loading loading-spinner loading-xs text-primary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):null,Ze=e=>{if(e?.span)return`${e.span/24*100}%`},Qe=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,$e=()=>{let e=B(`ref:1:0`,()=>H(0)),t=new Map,n=new Map,r=new Map,i=new Set,a=!1,o={},s={},c=!1,l=null,u={validateTrigger:[`onChange`],validateMessages:xe},d=()=>{e.value+=1,Array.from(i).forEach(e=>e())},f=()=>{a||(a=!0,queueMicrotask(()=>{a=!1,d()}))},p=e=>{let t=Ee(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},m=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${Ee(t)}`:e.id},h=e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:we(Oe(o,e))}},g=e=>{u.onFieldsChange?.([h(e)],E.getFieldsValue(!0))},_=(e,t,n=!0)=>{let r=p(e);Object.assign(r,t),n&&(g(e),d(),f())},v=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&De(t,e))return n}return null},y=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return _(n,{errors:[],warnings:[],validating:!1}),null;_(n,{validating:!0});let a=await Je(n,Oe(o,n),i,o,e.getLabel(),e.getMessageVariables(),u.validateMessages);return _(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},b=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||De(n,e)||t.getDependencies().some(t=>De(t,e))&&await y(t)}},x=async(e,t,n)=>{if(o=Ae(o,e,t),n?.touch){let t=p(e);t.touched=!0}d(),g(e),n?.emitValues!==!1&&u.onValuesChange?.(Ne(e,t),E.getFieldsValue(!0));let r=v(e);r&&await y(r,n?.triggerName),await b(e),f()},S=e=>{let i=m(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let c=e.getNamePath();if(c&&c.length){let t=e.getInitialValue();!ke(s,c)&&t!==void 0&&(s=Ae(s,c,t)),!ke(o,c)&&t!==void 0&&(o=Ae(o,c,t)),p(c)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let s=e.getNamePath();!s||!s.length||Qe(e,u.preserve)||(o=je(o,s),r.delete(Ee(s)),d())}},C=e=>!c&&(s=we(e??{}),o=we(e??{}),c=!0,!0),w=F(async e=>{F();let n=e?.map(e=>Te(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=m(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>De(i,e)))continue;let o=await y(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:E.getFieldsValue(!0),errorFields:r,outOfDate:!1};return E.getFieldsValue(!0)}),T=(e,t)=>{let n=Te(e),r=u.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>{let t=typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g,`\\$1`);return l?.querySelector(`#${t}`)}).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},E={getFieldValue(t){return e.value,we(Oe(o,Te(t)))},getFieldsValue(t){return e.value,t===!0||t==null?we(o):t.reduce((e,t)=>{let n=Te(t);return Ae(e,n,Oe(o,n))},{})},setFieldValue(e,t){x(Te(e),t,{emitValues:!1})},setFieldsValue(e){o=Me(o,e),d()},resetFields(e){if(!e?.length){o=we(s),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),d();return}e.forEach(e=>{let t=Te(e),n=Oe(s,t);o=n===void 0?je(o,t):Ae(o,t,n);let r=p(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),d()},validateFields:w,submit(){w().then(e=>{u.onFinish?.(e)}).catch(e=>{if(u.onFinishFailed?.(e),u.scrollToFirstError&&e.errorFields[0]){let t=u.scrollToFirstError===!0?{block:`center`}:u.scrollToFirstError;T(e.errorFields[0].name,t)}})},scrollToField:T,isFieldTouched(e){return p(Te(e)).touched},getFieldError(e){return[...p(Te(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=m(t);return!e.has(n)&&(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=Te(e),n=p(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){u=e},ensureInitialized:C,registerField:S,getMeta:p,validateFieldByPath(e,t){let n=v(e);return n?y(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return x(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return x(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return u.validateTrigger},setRootElement(e){l=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){d()}}};return E},et=(e,t,n)=>typeof n==`function`?n(e,{required:t}):n===`optional`&&!t?d(Object.assign(e=>{let t=E(`span`,e);return t.className=`ml-2 text-xs text-base-content/45`,t.setAttribute(`aria-hidden`,`true`),I(t,m(`optional`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):n!==!1&&t?d(Object.assign(e=>{let t=E(`span`,e);return t.className=`ml-1 text-error`,t.setAttribute(`aria-hidden`,`true`),I(t,m(`*`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):null,tt=e=>{let i=g(e.className),o=g(e.errors),s=g(e.style),c=g(e.warnings);return x(U(()=>[...o.get()??[],...c.get()??[]].filter(e=>e!=null).length?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>d(Object.assign(e=>{let l=ce().content.cloneNode(!0).firstChild,u=l,f=l.childNodes[0],p=f.parentNode,h=l.childNodes[1],v=h.parentNode,y;q(()=>{let e=Se(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,i.get()),t=e==null?``:String(e);Object.is(y,t)||(y=t,u.className=t)});let b;q(()=>{let e=s.get();Object.is(b,e)||(b=e,a(u,e))});let x=[];q(()=>{let e=(o.get()??[])||[];x=te(p,f,x,e,(e,t)=>`error-${t}`,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=E(`li`,e);t.className=`text-error`;let n=m(``);return I(t,n),J(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(x));let S=[];return q(()=>{let e=(c.get()??[])||[];S=te(v,h,S,e,(e,t)=>`warning-${t}`,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=E(`li`,e);t.className=`text-warning`;let n=m(``);return I(t,n),J(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(S)),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>null}),e=>w(()=>{i.set(e.className),o.set(e.errors),s.set(e.style),c.set(e.warnings)}),()=>e)},nt=F(o=>{let{slotSource:s,__rue_phase2_slotSource:y,formInstance:x,__rue_phase2_formInstance:w,entityIdRef:O,unregisterRef:k,subscriptionFormRef:M,unsubscribeRenderRef:F,renderVersion:L,renderCacheRef:V,previousValuesRef:U,lastRegisteredKeyRef:ee,latestPropsRef:G,noStyleHostRef:K,controlHostRef:ne,helpHostRef:ae,feedbackHostRef:Y}=v(`useSetup:0:0`,()=>{let e=c(()=>b()?.propsRO??{children:o.children});e.get();let t=e,n=c(()=>o.form);n.get();let r=n,i=R(),a=R(null),s=R(void 0),l=R(null),u=H(0),d=R(),f=R(),p=R(),m=R(o),h=R(null),g=R(null),_=R(null),v=R(null);return m.current=o,i.current||=`rue-form-item-${be++}`,{slotSource:e,__rue_phase2_slotSource:t,formInstance:n,__rue_phase2_formInstance:r,entityIdRef:i,unregisterRef:a,subscriptionFormRef:s,unsubscribeRenderRef:l,renderVersion:u,renderCacheRef:d,previousValuesRef:f,lastRegisteredKeyRef:p,latestPropsRef:m,noStyleHostRef:h,controlHostRef:g,helpHostRef:_,feedbackHostRef:v}});if(o.name!=null&&!w.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let oe=B(`computed:1:16`,()=>c(()=>o.name==null?void 0:Te(o.name)));oe.get();let X=oe,se=B(`computed:1:17`,()=>c(()=>X.get()?Ee(X.get()):void 0));se.get();let Z=se,ce=B(`computed:1:18`,()=>c(()=>o.layout??`horizontal`));ce.get();let pe=B(`computed:1:19`,()=>c(()=>qe(o.required,o.rules)));pe.get();let me=B(`computed:1:20`,()=>c(()=>o.labelAlign??`right`));me.get();let he=B(`computed:1:21`,()=>c(()=>o.labelCol));he.get();let ge=B(`computed:1:22`,()=>c(()=>o.wrapperCol));ge.get();let _e=B(`computed:1:23`,()=>c(()=>o.htmlFor??(X.get()?X.get().map(e=>String(e)).join(`__`):void 0)));_e.get();let ve=_e;if(X.get()&&w.get()&&ee.current!==Z.get()){let e=G.current??o;k.current?.(),k.current=w.get().__INTERNAL__.registerField({id:O.current,kind:`item`,getNamePath:()=>X.get(),getRules:()=>e.rules??[],getRequired:()=>e.required,getLabel:()=>e.label,getMessageVariables:()=>e.messageVariables,getValidateTrigger:()=>Pe(e.validateTrigger),getDependencies:()=>(e.dependencies??[]).map(e=>Te(e)),getInitialValue:()=>e.initialValue,getPreserve:()=>e.preserve}),ee.current=Z.get()}let ye=()=>{let e=w.get()?.getFieldsValue(!0)??{},t=X.get()&&w.get()?w.get().__INTERNAL__.getMeta(X.get()):null;return{allValues:e,meta:t,currentValue:X.get()&&w.get()?w.get().getFieldValue(X.get()):void 0,triggerName:o.trigger??`onChange`,validateTrigger:Pe(o.validateTrigger),status:o.validateStatus??(t?.validating?`validating`:t?.errors.length?`error`:t?.warnings.length?`warning`:t?.touched&&(o.rules?.length??0)>0?`success`:void 0)}},xe=()=>{let{allValues:i,meta:a,currentValue:s,triggerName:c,validateTrigger:l,status:f}=ye(),p=o.render??o.children,v;if(typeof p==`function`&&p.kind!==`block-factory`&&X.get()&&w.get()&&!o.shouldUpdate){let e={...o.getValueProps?o.getValueProps(s):{[o.valuePropName??`value`]:o.valuePropName===`checked`?!!s:s},id:ve.get()};e[c]=(...e)=>{let t=o.getValueFromEvent?o.getValueFromEvent(...e):Ye(o.valuePropName??`value`,...e),n=o.normalize?o.normalize(t,s,w.get().getFieldsValue(!0)):t;w.get().__INTERNAL__.updateValueFromControl(X.get(),n,{touch:!0,triggerName:c})},l.filter(e=>e!==c).forEach(t=>{e[t]=(...e)=>{w.get().__INTERNAL__.validateFieldByPath(X.get(),t)}}),v=p(e,{value:s,touched:a?.touched??!1,validating:a?.validating??!1,errors:a?.errors??[],warnings:a?.warnings??[],status:f},w.get())}else typeof p==`function`&&p.kind!==`block-factory`&&(!X.get()||o.shouldUpdate)?(((typeof o.shouldUpdate==`function`?o.shouldUpdate(U.current??i,i):o.shouldUpdate===!0||V.current===void 0)||V.current===void 0)&&(V.current=p(i,w.get())),U.current=we(i),v=V.current):v=z(ie,()=>({source:y.get()}));if(o.noStyle){K.current&&A(e(()=>{let e=h(),t=D(`rue:slot:anchor`);return S(e,t),q(()=>{let n=v;j(()=>W(n,e,t))}),e},!0),K.current);return}ne.current&&A(e(()=>{let e=h(),t=D(`rue:slot:anchor`);return S(e,t),q(()=>{let n=v;j(()=>W(n,e,t))}),e},!0),ne.current),ae.current&&A(o.help===void 0?a&&(a.errors.length>0||a.warnings.length>0)?d(Object.assign(e=>{let i=le().content.cloneNode(!0).firstChild,o=i.childNodes[0],s=o.parentNode,c=i.childNodes[1],l=c.parentNode,u=[];q(()=>{let e=a.errors||[];u=te(s,o,u,e,(e,t)=>`error-${t}`,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=E(`li`,e);t.className=`text-error`;let n=m(``);return I(t,n),J(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(u));let f=[];return q(()=>{let e=a.warnings||[];f=te(l,c,f,e,(e,t)=>`warning-${t}`,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=E(`li`,e);t.className=`text-warning`;let n=m(``);return I(t,n),J(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(f)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})):d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):d(Object.assign(e=>{let t=h(),n=N(`rue:compiled-slot`);return I(t,n),u({parent:t,before:n},()=>o.help,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),ae.current),Y.current&&A(o.hasFeedback?e(()=>{let e=h(),t=D(`rue:slot:anchor`);return S(e,t),q(()=>{let n=Xe(f);j(()=>W(n,e,t))}),e},!0):d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),Y.current)},Ce=e=>{ne.current=e,e&&queueMicrotask(()=>{xe()})};if(M.current!==w.get()&&(F.current?.(),M.current=w.get(),F.current=w.get()?w.get().__INTERNAL__.subscribe(()=>{L.value+=1}):null),B(`watch:1:24`,()=>f(()=>L.value,()=>{xe()},{immediate:!0})),i(()=>{k.current?.(),k.current=null,F.current?.(),F.current=null,M.current=void 0}),p(()=>{xe()}),C(()=>{xe()}),o.noStyle)return d(Object.assign(e=>{let t=ue().content.cloneNode(!0).firstChild,r=t,i=K;return typeof i==`function`?i(r):i&&typeof i==`object`&&`current`in i&&(i.current=r),n(()=>{typeof i==`function`?i(null):i&&typeof i==`object`&&`current`in i&&(i.current=null)}),Object.assign(r.style,{display:`contents`}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));let De=o.label===void 0?null:e(()=>{let e=h(),t=de().content.cloneNode(!0),n=t.firstChild,r=n,i=n.childNodes[0].childNodes[0],s=i.parentNode,c=n.childNodes[1],f=c.parentNode,p=n.childNodes[2],g=p.parentNode;return e.appendChild(t),q(()=>{l(r,Se(`text-[0.95rem] leading-7 font-medium text-base-content/78`,me.get()===`left`?`text-left`:`text-right md:text-right`,`md:whitespace-nowrap`))}),q(()=>{let e={width:ce.get()===`horizontal`?Ze(he.get()):void 0};a(r,e)}),q(()=>{re(r,`for`,String(_e.get()))}),u({parent:s,before:i},()=>o.label,()=>({})),P(f,c,()=>ce.get()===`horizontal`&&o.colon!==!1?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=E(`span`,e);return t.className=`ml-1 text-base-content/45`,I(t,m(`:`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),q(()=>{let e=et(o.label,pe.get(),!0);j(()=>W(e,g,p))}),e},!0),Oe=ce.get()===`horizontal`&&ge.get()?.offset?{marginLeft:`${ge.get().offset/24*100}%`,width:Ze(ge.get())}:ce.get()===`horizontal`?{width:Ze(ge.get())}:void 0;return e(e=>{let t=fe().content.cloneNode(!0).firstChild,r=t,i=t.childNodes[1],s=t.childNodes[1].childNodes[0].childNodes[0],c=t.childNodes[1].childNodes[1],f=t.childNodes[0],p=f.parentNode,m=t.childNodes[1].childNodes[0].childNodes[1],g=m.parentNode,_=t.childNodes[1].childNodes[2],v=_.parentNode;return q(()=>{l(r,Se(`rue-form-item`,o.hidden?`hidden`:void 0,ce.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,o.className))}),q(()=>{let e=o.style;a(r,e)}),l(i,`min-w-0 flex-1`),q(()=>{a(i,Oe)}),l(s,`min-w-0 flex-1`),T(s,()=>Ce),l(c,`mt-3`),T(c,()=>ae),q(()=>{let e=De;j(()=>W(e,p,f))}),P(g,m,()=>o.hasFeedback?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=E(`span`,e);t.className=`mt-3 shrink-0`;let r=Y;return typeof r==`function`?r(t):r&&typeof r==`object`&&`current`in r&&(r.current=t),n(()=>{typeof r==`function`?r(null):r&&typeof r==`object`&&`current`in r&&(r.current=null)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),P(v,_,()=>o.extra==null?{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=E(`div`,e);t.className=`mt-3 text-[0.8rem] leading-6 text-base-content/55`;let n=N(`rue:compiled-slot`);return I(t,n),u({parent:t,before:n},()=>o.extra,()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),t})}),rt=F(t=>{F();let{form:n,name:r,children:a,render:o,initialValue:s,rules:c}=t,l=n;if(!l)throw Error(`Form.List 需要显式传入 form`);let u=o??a;if(typeof u!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let d=Te(r),f=B(`useRef:1:25`,()=>R()),p=B(`useRef:1:26`,()=>R(null)),m=B(`useRef:1:27`,()=>R(void 0)),h=B(`useRef:1:28`,()=>R(null)),g=B(`ref:1:29`,()=>H(0)),_=B(`useRef:1:30`,()=>R(c)),v=B(`useRef:1:31`,()=>R(s)),y=B(`useRef:1:32`,()=>R([])),b=B(`useRef:1:33`,()=>R(0));return _.current=c,v.current=s,f.current||=`rue-form-list-${be++}`,p.current||=l.__INTERNAL__.registerField({id:f.current,kind:`list`,getNamePath:()=>d,getRules:()=>_.current??[],getRequired:()=>void 0,getLabel:()=>d[d.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>v.current,getPreserve:()=>!0}),m.current!==l&&(h.current?.(),m.current=l,h.current=l.__INTERNAL__.subscribe(()=>{g.value+=1})),i(()=>{p.current?.(),p.current=null,h.current?.(),h.current=null,m.current=void 0}),(()=>{g.value;let t=l.getFieldValue(d),n=Array.isArray(t)?t:[],r=l.__INTERNAL__.getMeta(d),i=y.current??[],a=b.current??0;y.current??=i,b.current??=a;let o=()=>{let e=b.current??0;return b.current=e+1,e};if(i.length<n.length)for(;i.length<n.length;)i.push(o());i.length>n.length&&(y.current=i.slice(0,n.length));let s={add(e,t){let r=[...n],a=t==null?r.length:Math.max(0,Math.min(t,r.length));r.splice(a,0,e??null),i.splice(a,0,o()),l.__INTERNAL__.updateListValue(d,r)},remove(e){let t=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),r=[...n];t.forEach(e=>{e<0||e>=r.length||(r.splice(e,1),i.splice(e,1))}),l.__INTERNAL__.updateListValue(d,r)},move(e,t){if(e<0||t<0||e>=n.length||t>=n.length||e===t)return;let r=[...n],[a]=r.splice(e,1);r.splice(t,0,a);let[o]=i.splice(e,1);i.splice(t,0,o),l.__INTERNAL__.updateListValue(d,r)}},c=n.map((e,t)=>({key:i[t],name:t,fieldKey:i[t]}));return e(e=>{let t=pe().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=n.parentNode;return q(()=>{let e=u(c,s,{errors:r.errors,warnings:r.warnings});j(()=>W(e,i,n))}),t})})()}),Q=Object.assign(t=>{let{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:a,__rue_rest_omit_3:s,__rue_rest_omit_4:l,__rue_rest_omit_5:u,__rue_rest_omit_6:d,__rue_rest_omit_7:f,__rue_rest_omit_8:m,__rue_rest_omit_9:g,__rue_rest_omit_10:_,__rue_rest_omit_11:y,__rue_rest_omit_12:x,__rue_rest_omit_13:C,__rue_rest_omit_14:w,__rue_rest_omit_15:T,__rue_rest_omit_16:E,__rue_rest_omit_17:O,rest:A,slotSource:N,__rue_phase2_slotSource:P,internalFormRef:I,rootElementRef:L,subscriptionFormRef:V,unsubscribeRenderRef:U,renderVersion:G,resolvedForm:K,__rue_phase2_resolvedForm:te,initializedNow:ne,__rue_phase2_initializedNow:J,formVersionSnapshot:re,__rue_phase2_formVersionSnapshot:ae,handleNativeSubmit:Y,resolveContent:oe,content:X}=B(`useSetup:0:0`,()=>k(()=>{let{className:n,style:r,children:a,render:o,component:s,layout:l,initialValues:u,form:d,name:f,preserve:m,validateMessages:g,validateTrigger:_,scrollToFirstError:y,onValuesChange:x,onFieldsChange:C,onFinish:w,onFinishFailed:T,onSubmit:E,...O}=t,k=c(()=>b()?.propsRO??{children:t.children});k.get();let A=k,M=R(),N=R(null),P=R(void 0),I=R(null),L=H(0);M.current||=t.form??$e();let B=c(()=>t.form??M.current);B.get();let V=B,U=c(()=>V.get().__INTERNAL__.ensureInitialized(t.initialValues));U.get();let ee=U,G=c(()=>V.get().__INTERNAL__.version.value);G.get();let K=G;V.get().__INTERNAL__.setRuntimeOptions({name:t.name,preserve:t.preserve,validateTrigger:Pe(t.validateTrigger),validateMessages:{...xe,...t.validateMessages},scrollToFirstError:t.scrollToFirstError,onValuesChange:t.onValuesChange,onFieldsChange:t.onFieldsChange,onFinish:t.onFinish,onFinishFailed:t.onFinishFailed}),P.current!==V.get()&&(I.current?.(),P.current=V.get(),I.current=V.get().__INTERNAL__.subscribe(()=>{L.value+=1}));let te=e=>{e.preventDefault(),t.onSubmit?.(e),V.get().submit()};p(()=>{ee.get()&&V.get().__INTERNAL__.emitUpdate()}),i(()=>{I.current?.(),I.current=null,P.current=void 0});let ne=F(()=>(v(`useSetup:0:0`,()=>(K.get(),{})),typeof t.render==`function`?e(()=>{let e=h(),n=D(`rue:slot:anchor`);return S(e,n),q(()=>{let r=t.render(V.get());j(()=>W(r,e,n))}),e},!0):typeof t.children==`function`&&t.children.kind!==`block-factory`?e(()=>{let e=h(),n=D(`rue:slot:anchor`);return S(e,n),q(()=>{let r=t.children(V.get());j(()=>W(r,e,n))}),e},!0):z(ie,()=>({source:A.get()}))));return{__rue_rest_omit_0:n,__rue_rest_omit_1:r,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:s,__rue_rest_omit_5:l,__rue_rest_omit_6:u,__rue_rest_omit_7:d,__rue_rest_omit_8:f,__rue_rest_omit_9:m,__rue_rest_omit_10:g,__rue_rest_omit_11:_,__rue_rest_omit_12:y,__rue_rest_omit_13:x,__rue_rest_omit_14:C,__rue_rest_omit_15:w,__rue_rest_omit_16:T,__rue_rest_omit_17:E,rest:O,slotSource:k,__rue_phase2_slotSource:A,internalFormRef:M,rootElementRef:N,subscriptionFormRef:P,unsubscribeRenderRef:I,renderVersion:L,resolvedForm:B,__rue_phase2_resolvedForm:V,initializedNow:U,__rue_phase2_initializedNow:ee,formVersionSnapshot:G,__rue_phase2_formVersionSnapshot:K,handleNativeSubmit:te,resolveContent:ne,content:ne()}}));if((t.component===void 0?`form`:t.component)===!1)return X;let se={...A,ref:e=>{L.current=e,K.get().__INTERNAL__.setRootElement(e)},onSubmit:(t.component===void 0?`form`:t.component)===`form`?Y:void 0,className:Se(`rue-form`,(t.layout===void 0?`horizontal`:t.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,t.className),style:t.style,"data-rue-form":`true`};return(t.component===void 0?`form`:t.component)===`form`?e(e=>{let t=me().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return q(()=>{M(n,se,[])}),q(()=>{let e=(G.value,oe());j(()=>W(e,i,r))}),t}):(t.component===void 0?`form`:t.component)===`div`?e(e=>{let t=he().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return q(()=>{M(n,se,[])}),q(()=>{let e=(G.value,oe());j(()=>W(e,i,r))}),t}):(t.component===void 0?`form`:t.component)===`section`?e(e=>{let t=ge().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return q(()=>{M(n,se,[])}),q(()=>{let e=(G.value,oe());j(()=>W(e,i,r))}),t}):o(ee,()=>({is:t.component===void 0?`form`:t.component,...se,children:(G.value,oe())}))},{Item:nt,List:rt,ErrorList:tt,useForm:e=>{let t=B(`useRef:1:37`,()=>R());return t.current||=e??$e(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,t)=>{let n=b()?.propsRO?.[_e],r=t??n?.form,a=B(`ref:1:34`,()=>H(0)),o=B(`useRef:1:35`,()=>R(void 0)),s=B(`useRef:1:36`,()=>R(null));if(o.current!==r&&(s.current?.(),o.current=r,s.current=r?r.__INTERNAL__.subscribe(()=>{a.value+=1}):null),i(()=>{s.current?.(),s.current=null,o.current=void 0}),r)return a.value,r.getFieldValue(e)}}),it=G(`<div class="rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5"><div class="mb-4 text-sm font-medium text-base-content">Canary settings</div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div><!--rue:text-hole:2--></div>`),at=G(`<div class="min-w-0"><!--rue:opaque-hole:0--></div>`),ot=G(`<div class="grid gap-4"><!--rue:text-hole:0--><!--rue:text-hole:1--><div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><!--rue:text-hole:4--></div>`),st=G(`<div class="flex flex-wrap gap-3 pt-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ct=G(`<div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),lt=G(`<div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--></div>`),ut=G(`<div class="grid gap-6"><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">回调地址</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">https://</span><!--rue:opaque-hole:0--><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">:443</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。</div></div><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">资源路径</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">/hooks/</span><!--rue:opaque-hole:1--><span class="text-xs uppercase tracking-[0.18em] text-base-content/45">POST target</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。</div></div></div>`),dt=G(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 1</div><div class="mt-1 text-lg font-semibold text-base-content">基础信息</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),ft=G(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 2</div><div class="mt-1 text-lg font-semibold text-base-content">发布策略</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),pt=G(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 3</div><div class="mt-1 text-lg font-semibold text-base-content">观测与审批</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),mt=G(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 4</div><div class="mt-1 text-lg font-semibold text-base-content">回滚预案</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),ht=G(`<div class="sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur"><div class="flex flex-wrap items-center justify-between gap-3"><div class="text-sm text-base-content/65">留空深层字段后点击提交，会自动滚到首个错误项。</div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),gt=G(`<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),_t=G(`<div class="mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4"><!--rue:opaque-hole:0--><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),vt=G(`<div class="not-prose my-6 lg:my-8"><h3 class="mt-0 mb-3 text-base font-semibold text-base-content"><!--rue:text-hole:0--></h3><div class="overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:1--></tbody></table></div></div>`),yt=G(`<div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><!--rue:text-hole:0--><h3 class="mt-3 mb-0 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></h3><p class="mt-3 mb-0 text-sm leading-6 text-base-content/70"><!--rue:text-hole:2--></p><!--rue:text-hole:3--></div>`),bt=G(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Submit result</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。</p><div class="mt-4 grid gap-4"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Live draft</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre></div><div class="rounded-[1.25rem] bg-neutral p-4 text-neutral-content"><div class="text-xs uppercase tracking-[0.22em] text-neutral-content/60">Last submit</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6"><!--rue:text-hole:2--></pre></div></div></div></div>`),xt=G(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Reactive summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">role</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">region</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">notes</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6"><!--rue:text-hole:4--></pre></div></div>`),St=G('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Validation notes</div><p class="mt-3 mb-0 text-sm text-base-content/65">这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Password match</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Website warning</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:2--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:3--></pre></div></div>'),Ct=G('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Store snapshot</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">issueId</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">slug</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">branch</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div></div>'),wt=G('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Conditional summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">enableCanary</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">publishMode</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Conditional fields</div><div class="mt-2 text-sm leading-6 text-base-content/80">batchSize: <!--rue:text-hole:3--><br> approveBy: <!--rue:text-hole:4--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:5--></pre></div></div>'),Tt=G('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Composite preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。</p><div class="mt-4 rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Resolved URL</div><div class="mt-3 break-all text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="mt-4 grid gap-3 text-sm text-base-content/75"><div class="rounded-[1.25rem] bg-base-200/70 p-4">`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。</div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:2--></pre></div></div>'),Et=G(`<div class="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Scroll actions</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。</p><div class="mt-4 grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5"><div class="overflow-y-auto overscroll-contain pr-2"><!--rue:opaque-hole:5--></div></div></div>`),Dt=G(`<div class="grid gap-6"><div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List snapshot</div><div class="mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65"><!--rue:text-hole:1--> members</div><div class="mt-4 grid gap-3"><!--rue:text-hole:2--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List behavior</div><div class="mt-4 grid gap-4 md:grid-cols-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">列表级规则</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">rules 挂在 Form.List 上，校验整个 members 数组。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">重排操作</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">operation.move 保持字段状态跟随成员顺序移动。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">错误出口</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。</p></div></div></div></div>`),Ot=G(`<div class="grid gap-6"><!--rue:opaque-hole:0--><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Query preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。</p><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre><div class="mt-4 grid gap-3 text-sm text-base-content/80"><div class="rounded-[1.25rem] bg-base-200/70 p-4">关键词：<!--rue:text-hole:2--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">仓库：<!--rue:text-hole:3--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">负责人 / 评审人：<!--rue:text-hole:4--> / <!--rue:text-hole:5--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">包含草稿：<!--rue:text-hole:6--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Last submit</div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:7--></pre></div></div></div>`),kt=G('<div class="max-w-none prose prose-sm md:prose-base"><h1 class="mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content">Form 表单</h1><p class="mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72">这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。</p><h2>何时使用</h2><ul><li>需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。</li><li>需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。</li><li>需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。</li></ul><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></section><div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm">当前 Rue runtime 下，推荐通过 <code>Form.useForm()</code> 或 <code>render={form =&gt; &lt;Form.Item form={form} name="title" /&gt;}</code> 显式持有并传递 <code>form</code>。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。</div><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2>使用说明</h2><p>下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。</p><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:10--></section><h2 id="form-api">API</h2><p>Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。</p><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><!--rue:opaque-hole:13--></div>'),At=e=>{let t=g(e.rows),r=g(e.title);return x(d(Object.assign(e=>{let i=vt().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[1].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=m(``);o.insertBefore(l,a),o.removeChild(a),J(l,()=>r.get());let u=G(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),d=[];return q(()=>{let e=t.get()||[];d=te(c,s,d,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return ne(e=>{let t=u().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.data=``,o.parentNode;let s=t.childNodes[2].childNodes[0].childNodes[0],c=s.parentNode,l=t.childNodes[3].childNodes[0].childNodes[0],d=l.parentNode,f=m(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(o.textContent=e,h=e)}let g=m(``);c.insertBefore(g,s),c.removeChild(s);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=m(``);d.insertBefore(v,l),d.removeChild(l);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(o.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>_(d)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{t.set(e.rows),r.set(e.title)}),()=>e)},jt=e=>{let i=g(e.description),a=g(e.eyebrow),o=g(e.items),s=g(e.title);return x(d(Object.assign(e=>{let c=yt().content.cloneNode(!0).firstChild,l=c.childNodes[0],u=l.parentNode,f=c.childNodes[1].childNodes[0],p=f.parentNode,v=c.childNodes[2].childNodes[0],y=v.parentNode,b=c.childNodes[3],x=b.parentNode;P(u,l,()=>a.get()?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=E(`div`,e);t.className=`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`;let n=m(``);return I(t,n),J(n,()=>a.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let S=m(``);p.insertBefore(S,f),p.removeChild(f),J(S,()=>s.get());let C=m(``);return y.insertBefore(C,v),y.removeChild(v),J(C,()=>i.get()),P(x,b,()=>o.get()?.length?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let i=E(`ul`,e);i.className=`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`;let a=N(`rue:list:end`);I(i,a);let s=[];return q(()=>{let e=o.get()||[];s=te(a.parentNode,a,s,e,(e,t)=>e,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=E(`li`,e),n=m(``);return I(t,n),J(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(s)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{i.set(e.description),a.set(e.eyebrow),o.set(e.items),s.set(e.title)}),()=>e)},$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Mt=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Nt=()=>{let t={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0},n=H($(t)),i=H(`等待提交，右侧会展示 payload 或校验摘要。`);return L(()=>x(d(Object.assign(a=>{let s=bt().content.cloneNode(!0).firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],f=u.parentNode,p=s.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],g=p.parentNode,_=O(l);V(_,Q,()=>({className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:t,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{n.value=$(t)},onFinish:e=>{i.value=`提交成功
`+$(e)},onFinishFailed:e=>{i.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:F(t=>e(e=>{let n=h(),i=D(`rue:component:anchor`);S(n,i),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>z(X,()=>({...e,placeholder:`输入项目名称`}))}));j(()=>W(e,n,i))});let a=D(`rue:component:anchor`);S(n,a),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>z(X,()=>({...e,placeholder:`team@rue.dev`}))}));j(()=>W(e,n,a))});let s=D(`rue:component:anchor`);S(n,s),q(()=>{let e=o(Q.Item,()=>({form:t,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>z(oe,()=>({...e,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`允许直接覆盖 staging 配置`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}));j(()=>W(e,n,s))});let c=st().content.cloneNode(!0),l=c.firstChild,u=l.childNodes[0],f=u.parentNode,p=l.childNodes[1],g=p.parentNode;n.appendChild(c);let _=O(f);V(_,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`保存表单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),f.insertBefore(_,u);let v=O(g);return V(v,Y,()=>({type:`outlined`,onClick:()=>t.resetFields(),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`重置`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),g.insertBefore(v,p),n}))})),l.insertBefore(_,c);let v=m(``);f.insertBefore(v,u),f.removeChild(u),J(v,()=>n.value);let y=m(``);return g.insertBefore(y,p),g.removeChild(p),J(y,()=>i.value),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},Pt=()=>{let[t]=Q.useForm(),n=Q.useWatch(`role`,t)??`viewer`,i=Q.useWatch(`region`,t)??`cn-hz`,a=Q.useWatch(`notes`,t)??``,s=H(`等待实例方法操作。`);return L(()=>x(e(()=>{let c=h(),l=xt().content.cloneNode(!0),u=l.firstChild,f=u.childNodes[0],p=f.parentNode,g=u.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],_=g.parentNode,v=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],y=v.parentNode,b=u.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],x=b.parentNode,C=u.childNodes[1].childNodes[3].childNodes[0],w=C.parentNode;c.appendChild(l);let T=O(p);return V(T,Q,()=>({form:t,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`submit()
`+$(e)},onFinishFailed:e=>{s.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:F(n=>e(e=>{let i=h(),a=ct().content.cloneNode(!0),c=a.firstChild,l=c.childNodes[0],u=l.parentNode,f=c.childNodes[1],p=f.parentNode;i.appendChild(a),q(()=>{let e=o(Q.Item,()=>({form:n,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>z(X,()=>({...e,placeholder:`viewer / editor / admin`}))}));j(()=>W(e,u,l))}),q(()=>{let e=o(Q.Item,()=>({form:n,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>z(X,()=>({...e,placeholder:`cn-hz`}))}));j(()=>W(e,p,f))});let g=D(`rue:component:anchor`);S(i,g),q(()=>{let e=o(Q.Item,()=>({form:n,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>z(X,()=>({...e,placeholder:`写入审批说明或 rollout 策略`}))}));j(()=>W(e,i,g))});let _=lt().content.cloneNode(!0),v=_.firstChild,y=v.childNodes[0],b=y.parentNode,x=v.childNodes[1],C=x.parentNode,w=v.childNodes[2],T=w.parentNode,E=v.childNodes[3],k=E.parentNode,A=v.childNodes[4],M=A.parentNode,N=v.childNodes[5],P=N.parentNode;i.appendChild(_);let F=O(b);V(F,Y,()=>({size:`sm`,onClick:()=>{t.setFieldValue(`role`,`editor`),s.value=`setFieldValue('role', 'editor')`},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`设为 editor`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(F,y);let L=O(C);V(L,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>{t.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),s.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`填充预设`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),C.insertBefore(L,x);let R=O(T);V(R,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>{t.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),s.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`填入异常值`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),T.insertBefore(R,w);let B=O(k);V(B,Y,()=>({size:`sm`,type:`text`,onClick:()=>{t.resetFields(),s.value=`resetFields()`},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`恢复初始值`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),k.insertBefore(B,E);let H=O(M);V(H,Y,()=>({size:`sm`,color:`primary`,onClick:()=>{t.submit()},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`程序化提交`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),M.insertBefore(H,A);let U=O(P);return V(U,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>{t.validateFields().then(e=>{s.value=`validateFields()
`+$(e)}).catch(e=>{s.value=`validateFields() failed
`+$(e.errorFields)})},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`validateFields`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),P.insertBefore(U,N),i}))})),p.insertBefore(T,f),q(()=>{let e=String(n);j(()=>W(e,_,g))}),q(()=>{let e=String(i);j(()=>W(e,y,v))}),P(x,b,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),q(()=>{let e=s.value;j(()=>W(e,w,C))}),c},!0),e=>w(()=>{})))},Ft=()=>{let[t]=Q.useForm(),n=Q.useWatch(`password`,t)??``,i=Q.useWatch(`confirm`,t)??``,a=Q.useWatch(`website`,t)??``,s=H(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`);return L(()=>x(d(Object.assign(c=>{let l=St().content.cloneNode(!0).firstChild,u=l.childNodes[0],f=u.parentNode,p=l.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],g=p.parentNode,_=l.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],v=_.parentNode,y=l.childNodes[1].childNodes[3].childNodes[0],b=y.parentNode,x=O(f);V(x,Q,()=>({form:t,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:F(n=>e(e=>{let i=h(),a=ct().content.cloneNode(!0),s=a.firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1],f=u.parentNode;i.appendChild(a),q(()=>{let e=o(Q.Item,()=>({form:n,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>z(X,()=>({...e,placeholder:`release-admin`}))}));j(()=>W(e,l,c))}),q(()=>{let e=o(Q.Item,()=>({form:n,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>z(X,()=>({...e,placeholder:`https://prod.rue.dev`}))}));j(()=>W(e,f,u))});let p=ct().content.cloneNode(!0),g=p.firstChild,_=g.childNodes[0],v=_.parentNode,y=g.childNodes[1],b=y.parentNode;i.appendChild(p),q(()=>{let e=o(Q.Item,()=>({form:n,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>z(X,()=>({...e,placeholder:`至少 8 位`}))}));j(()=>W(e,v,_))}),q(()=>{let e=o(Q.Item,()=>({form:n,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>z(X,()=>({...e,placeholder:`再次输入密码`}))}));j(()=>W(e,b,y))});let x=st().content.cloneNode(!0),S=x.firstChild,C=S.childNodes[0],w=C.parentNode,T=S.childNodes[1],E=T.parentNode;i.appendChild(x);let D=O(w);V(D,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`执行校验`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),w.insertBefore(D,C);let k=O(E);return V(k,Y,()=>({type:`outlined`,onClick:()=>t.resetFields(),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`清空状态`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),E.insertBefore(k,T),i}))})),f.insertBefore(x,u),P(g,p,()=>n&&i?{__rue_compiled_branch_key:!0,create:()=>U(()=>n===i?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=m(`已匹配`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未匹配`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`等待输入`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),P(v,_,()=>a?{__rue_compiled_branch_key:!0,create:()=>U(()=>String(a).startsWith(`https://`)?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=m(`格式建议通过`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`建议补上 https://`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let S=m(``);return b.insertBefore(S,y),b.removeChild(y),J(S,()=>s.value),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},It=()=>{let[t]=Q.useForm(),n={issueId:`2048`,slug:`release-planning`,branch:`main`},i=Q.useWatch(`issueId`,t)??``,a=Q.useWatch(`slug`,t)??``,s=Q.useWatch(`branch`,t)??``,c=H($(n));return L(()=>x(d(Object.assign(l=>{let u=Ct().content.cloneNode(!0).firstChild,f=u.childNodes[0],p=f.parentNode,g=u.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],_=g.parentNode,v=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],y=v.parentNode,b=u.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],x=b.parentNode,C=u.childNodes[1].childNodes[3].childNodes[0],w=C.parentNode,T=O(p);V(T,Q,()=>({form:t,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:n,onValuesChange:(e,t)=>{c.value=$(t)},onFinish:e=>{c.value=`提交成功
`+$(e)},render:F(n=>e(e=>{let i=h(),a=D(`rue:component:anchor`);S(i,a),q(()=>{let e=o(Q.Item,()=>({form:n,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>z(X,()=>({...e,placeholder:`#2048`}))}));j(()=>W(e,i,a))});let s=D(`rue:component:anchor`);S(i,s),q(()=>{let e=o(Q.Item,()=>({form:n,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>z(X,()=>({...e,placeholder:`release-planning`}))}));j(()=>W(e,i,s))});let c=D(`rue:component:anchor`);S(i,c),q(()=>{let e=o(Q.Item,()=>({form:n,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>z(X,()=>({...e,placeholder:`main / release/v1-2`}))}));j(()=>W(e,i,c))});let l=st().content.cloneNode(!0),u=l.firstChild,f=u.childNodes[0],p=f.parentNode,g=u.childNodes[1],_=g.parentNode;i.appendChild(l);let v=O(p);V(v,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`应用转换`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(v,f);let y=O(_);return V(y,Y,()=>({type:`outlined`,onClick:()=>{t.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`填充示例`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),_.insertBefore(y,g),i}))})),p.insertBefore(T,f),P(_,g,()=>{let e=String(i);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(y,v,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(x,b,()=>{let e=String(s);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let E=m(``);return w.insertBefore(E,C),w.removeChild(C),J(E,()=>c.value),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},Lt=()=>{let[t]=Q.useForm(),n=!!Q.useWatch(`enableCanary`,t),i=Q.useWatch(`publishMode`,t)??`manual`,a=Q.useWatch(`batchSize`,t)??``,s=Q.useWatch(`approveBy`,t)??``,c=H(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`);return L(()=>x(e(()=>{let l=h(),u=wt().content.cloneNode(!0),f=u.firstChild,p=f.childNodes[0],g=p.parentNode,_=f.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],v=_.parentNode,y=f.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],b=y.parentNode,x=f.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[1],C=x.parentNode,w=f.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[4],T=w.parentNode,k=f.childNodes[1].childNodes[3].childNodes[0],A=k.parentNode;l.appendChild(u);let M=O(g);return V(M,Q,()=>({form:t,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{c.value=`提交成功
`+$(e)},render:F(n=>e(i=>{let a=h(),s=ct().content.cloneNode(!0),c=s.firstChild,l=c.childNodes[0],u=l.parentNode,f=c.childNodes[1],p=f.parentNode;a.appendChild(s),q(()=>{let e=o(Q.Item,()=>({form:n,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`gateway`}))}));j(()=>W(e,u,l))}),q(()=>{let e=o(Q.Item,()=>({form:n,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`manual / auto`}))}));j(()=>W(e,p,f))});let g=D(`rue:component:anchor`);S(a,g),q(()=>{let e=o(Q.Item,()=>({form:n,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>z(oe,()=>({...e,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`开启 canary rollout`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}));j(()=>W(e,a,g))});let _=D(`rue:component:anchor`);S(a,_);let v=o(Q.Item,()=>({shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:t=>t.enableCanary?e(()=>{let e=h(),r=it().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[1].childNodes[0],s=a.parentNode,c=i.childNodes[1].childNodes[1],l=c.parentNode,u=i.childNodes[2],f=u.parentNode;return e.appendChild(r),q(()=>{let e=o(Q.Item,()=>({form:n,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`10%`}))}));j(()=>W(e,s,a))}),q(()=>{let e=o(Q.Item,()=>({form:n,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`release-ops`}))}));j(()=>W(e,l,c))}),P(f,u,()=>t.publishMode===`auto`?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=E(`div`,e);return t.className=`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,I(t,m(`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0):d(Object.assign(e=>{let t=E(`div`,e);return t.className=`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,I(t,m(`未开启灰度发布，额外字段不会挂载，也不会参与校验。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}));W(v,a,_);let y=st().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[0],C=x.parentNode,w=b.childNodes[1],T=w.parentNode;a.appendChild(y);let k=O(C);V(k,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`保存发布策略`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),C.insertBefore(k,x);let A=O(T);return V(A,Y,()=>({type:`outlined`,onClick:()=>{t.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`套用 canary 模板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),T.insertBefore(A,w),a}))})),g.insertBefore(M,p),P(v,_,()=>n?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=m(`true`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`false`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),q(()=>{let e=String(i);j(()=>W(e,b,y))}),P(C,x,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未挂载`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(T,w,()=>{let e=String(s);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未挂载`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),q(()=>{let e=c.value;j(()=>W(e,A,k))}),l},!0),e=>w(()=>{})))},Rt=()=>{let[t]=Q.useForm(),n=String(Q.useWatch(`host`,t)??`api.rue.dev`),i=String(Q.useWatch(`path`,t)??`release-hooks`),a=H(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`),s=`https://${n}:443/hooks/${i?i.replace(/^\/+/,``):``}`;return L(()=>x(e(()=>{let n=h(),i=Tt().content.cloneNode(!0),c=i.firstChild,l=c.childNodes[0],u=l.parentNode,f=c.childNodes[1].childNodes[2].childNodes[1].childNodes[0],p=f.parentNode,g=c.childNodes[1].childNodes[4].childNodes[0],_=g.parentNode;n.appendChild(i);let v=O(u);return V(v,Q,()=>({form:t,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{a.value=`保存复合控件
`+$(e)},render:F(n=>e(e=>{let i=h(),a=ut().content.cloneNode(!0),s=a.firstChild,c=s.childNodes[0].childNodes[1].childNodes[1],l=c.parentNode,u=s.childNodes[1].childNodes[1].childNodes[1],f=u.parentNode;i.appendChild(a),q(()=>{let e=o(Q.Item,()=>({form:n,name:`host`,noStyle:!0,render:e=>d(Object.assign(t=>{let n=at().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=O(i);return V(a,X,()=>({...e,placeholder:`api.rue.dev`})),i.insertBefore(a,r),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}));j(()=>W(e,l,c))}),q(()=>{let e=o(Q.Item,()=>({form:n,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>d(Object.assign(t=>{let n=at().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=O(i);return V(a,X,()=>({...e,placeholder:`release-hooks`})),i.insertBefore(a,r),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}));j(()=>W(e,f,u))});let p=st().content.cloneNode(!0),g=p.firstChild,_=g.childNodes[0],v=_.parentNode,y=g.childNodes[1],b=y.parentNode;i.appendChild(p);let x=O(v);V(x,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`保存复合地址`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),v.insertBefore(x,_);let S=O(b);return V(S,Y,()=>({type:`outlined`,onClick:()=>{t.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`填入 staging`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(S,y),i}))})),u.insertBefore(v,l),q(()=>{let e=s;j(()=>W(e,p,f))}),q(()=>{let e=a.value;j(()=>W(e,_,g))}),n},!0),e=>w(()=>{})))},zt=()=>{let[t]=Q.useForm(),n=H(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`),i=(e,r)=>{t.scrollToField(e,{block:`center`,focus:!0}),n.value=`scrollToField -> ${r}`};return L(()=>x(d(Object.assign(a=>{let s=Et().content.cloneNode(!0).firstChild,c=s.childNodes[1].childNodes[0],l=s.childNodes[0].childNodes[2].childNodes[0],u=l.parentNode,f=s.childNodes[0].childNodes[2].childNodes[1],p=f.parentNode,g=s.childNodes[0].childNodes[2].childNodes[2],_=g.parentNode,v=s.childNodes[0].childNodes[2].childNodes[3],y=v.parentNode,b=s.childNodes[0].childNodes[3].childNodes[0],x=b.parentNode,S=s.childNodes[1].childNodes[0].childNodes[0],C=S.parentNode;c.className=`overflow-y-auto overscroll-contain pr-2`,Object.assign(c.style,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let w=O(u);V(w,Y,()=>({size:`sm`,onClick:()=>i(`releaseName`,`发布名称`),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`滚到发布名称`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(w,l);let T=O(p);V(T,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>i([`strategy`,`batchSize`],`灰度批次`),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`滚到灰度批次`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(T,f);let E=O(_);V(E,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>i([`observability`,`dashboard`],`监控看板`),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`滚到监控看板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),_.insertBefore(E,g);let D=O(y);V(D,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>i([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`滚到回滚单号`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),y.insertBefore(D,v);let k=m(``);x.insertBefore(k,b),x.removeChild(b),J(k,()=>n.value);let A=O(C);return V(A,Q,()=>({form:t,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{n.value=`提交成功
`+$(e)},onFinishFailed:e=>{n.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:F(t=>e(e=>{let n=h(),a=dt().content.cloneNode(!0),s=a.firstChild,c=s.childNodes[1].childNodes[0],l=c.parentNode,u=s.childNodes[1].childNodes[1],f=u.parentNode,p=s.childNodes[1].childNodes[2],g=p.parentNode,_=s.childNodes[1].childNodes[3],v=_.parentNode;n.appendChild(a),q(()=>{let e=o(Q.Item,()=>({form:t,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`2026.05 release`}))}));j(()=>W(e,l,c))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`rue-design`}))}));j(()=>W(e,f,u))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`staging`}))}));j(()=>W(e,g,p))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`release-captain`}))}));j(()=>W(e,v,_))});let y=ft().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[1].childNodes[0],S=x.parentNode,C=b.childNodes[1].childNodes[1],w=C.parentNode,T=b.childNodes[1].childNodes[2],E=T.parentNode,D=b.childNodes[1].childNodes[3],k=D.parentNode;n.appendChild(y),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`10%`}))}));j(()=>W(e,S,x))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`15m`}))}));j(()=>W(e,w,C))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`error rate > 2%`}))}));j(()=>W(e,E,T))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`30m`}))}));j(()=>W(e,k,D))});let A=pt().content.cloneNode(!0),M=A.firstChild,N=M.childNodes[1].childNodes[0],P=N.parentNode,F=M.childNodes[1].childNodes[1],L=F.parentNode,R=M.childNodes[1].childNodes[2],B=R.parentNode,H=M.childNodes[1].childNodes[3],U=H.parentNode;n.appendChild(A),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`Grafana release board`}))}));j(()=>W(e,P,N))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`#release-alerts`}))}));j(()=>W(e,L,F))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`ops-squad`}))}));j(()=>W(e,B,R))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`qa-squad`}))}));j(()=>W(e,U,H))});let ee=mt().content.cloneNode(!0),G=ee.firstChild,K=G.childNodes[1].childNodes[0],te=K.parentNode,ne=G.childNodes[1].childNodes[1],J=ne.parentNode,re=G.childNodes[1].childNodes[2],ie=re.parentNode,ae=G.childNodes[1].childNodes[3],oe=ae.parentNode;n.appendChild(ee),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>z(X,()=>({...e,placeholder:`RB-2026-0514`}))}));j(()=>W(e,te,K))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`rollback-owner`}))}));j(()=>W(e,J,ne))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`20m`}))}));j(()=>W(e,ie,re))}),q(()=>{let e=o(Q.Item,()=>({form:t,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`platform / qa / support`}))}));j(()=>W(e,oe,ae))});let se=ht().content.cloneNode(!0),Z=se.firstChild,ce=Z.childNodes[0].childNodes[1].childNodes[0],le=ce.parentNode,ue=Z.childNodes[0].childNodes[1].childNodes[1],de=ue.parentNode;n.appendChild(se);let fe=O(le);V(fe,Y,()=>({type:`outlined`,onClick:()=>i([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`滚到回滚单号`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),le.insertBefore(fe,ce);let pe=O(de);return V(pe,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`提交长表单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),de.insertBefore(pe,ue),n}))})),C.insertBefore(A,S),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},Bt=()=>{let[t]=Q.useForm(),n=Q.useWatch(`members`,t)??[];return x(e(()=>{let i=h(),a=Dt().content.cloneNode(!0),c=a.firstChild,u=c.childNodes[0].childNodes[0],f=u.parentNode,p=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0],g=p.parentNode,_=c.childNodes[0].childNodes[1].childNodes[2].childNodes[0],v=_.parentNode;i.appendChild(a);let b=O(f);return V(b,Q,()=>({form:t,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:F(t=>o(Q.List,()=>({form:t,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(n,i,a)=>e(c=>{let u=ot().content.cloneNode(!0).firstChild,f=u.childNodes[0],p=f.parentNode,g=u.childNodes[1],_=g.parentNode,v=u.childNodes[2].childNodes[0],b=v.parentNode,x=u.childNodes[2].childNodes[1],C=x.parentNode,w=u.childNodes[3],T=w.parentNode;P(p,f,()=>n.length===0?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=E(`div`,e);return t.className=`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,I(t,m(`暂无成员，点击下方按钮即可追加一组字段。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),q(()=>{let a=n.map((a,c)=>e(()=>{let e=h(),u=K(`div`,e);S(e,u),l(u,`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`);let f=K(`div`,u);S(u,f),l(f,`mb-4 flex flex-wrap items-center justify-between gap-3`);let p=K(`div`,f);S(f,p);let g=K(`div`,p);S(p,g),l(g,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),S(g,ae(`Member `));let _=y(g);S(g,_),q(()=>{s(_,c+1)});let v=K(`div`,p);S(p,v),l(v,`mt-1 text-sm font-medium text-base-content`),S(v,ae(`审批成员 `));let b=y(v);S(v,b),q(()=>{s(b,c+1)});let x=K(`div`,f);S(f,x),l(x,`flex flex-wrap gap-2`),U(()=>c>0?{__rue_compiled_branch_key:!0,create:()=>z(Y,()=>({size:`sm`,type:`outlined`,onClick:()=>i.move(a.name,a.name-1),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`上移`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(x),U(()=>c<n.length-1?{__rue_compiled_branch_key:!0,create:()=>z(Y,()=>({size:`sm`,type:`outlined`,onClick:()=>i.move(a.name,a.name+1),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`下移`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(x),V(x,Y,()=>({size:`sm`,type:`text`,onClick:()=>i.remove(a.name),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`删除`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}));let C=K(`div`,u);S(u,C),l(C,`grid gap-4 md:grid-cols-2`);let w=D(`rue:component:anchor`);S(C,w),q(()=>{let e=o(Q.Item,()=>({form:t,layout:`vertical`,name:[`members`,a.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`输入成员名称`}))}));j(()=>W(e,C,w))});let T=D(`rue:component:anchor`);return S(C,T),q(()=>{let e=o(Q.Item,()=>({form:t,layout:`vertical`,name:[`members`,a.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>z(X,()=>({...e,placeholder:`Owner / Reviewer / QA`}))}));j(()=>W(e,C,T))}),e},!0));j(()=>W(a,_,g))});let k=O(b);V(k,Y,()=>({size:`sm`,color:`primary`,onClick:()=>{i.add({name:`新成员 `+String(n.length+1),role:`QA`})},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`新增成员`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(k,v);let A=O(C);return V(A,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>i.add({name:`Head reviewer`,role:`QA`},0),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`头部插入`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),C.insertBefore(A,x),q(()=>{let e=a.errors.length>0||a.warnings.length>0?o(Q.ErrorList,()=>({errors:a.errors,warnings:a.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`})):``;j(()=>W(e,T,w))}),u})})))})),f.insertBefore(b,u),q(()=>{let e=n.length;j(()=>W(e,g,p))}),q(()=>{let t=n.length>0?n.map((t,n)=>e(()=>{let e=h(),r=K(`div`,e);S(e,r),l(r,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let i=K(`div`,r);S(r,i),l(i,`text-xs uppercase tracking-[0.22em] text-base-content/45`),S(i,ae(`成员 `));let a=y(i);S(i,a),q(()=>{s(a,n+1)});let o=K(`div`,r);S(r,o),l(o,`mt-2 text-base font-medium text-base-content`);let c=y(o);S(o,c),q(()=>{s(c,t?.name?String(t.name):`未命名成员`)});let u=K(`div`,r);S(r,u),l(u,`mt-1 text-xs text-base-content/55`);let d=y(u);return S(u,d),q(()=>{s(d,t?.role?String(t.role):`未分配职责`)}),e},!0)):d(Object.assign(e=>{let t=E(`div`,e);return t.className=`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`,I(t,m(`当前列表为空。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));j(()=>W(t,v,_))}),i},!0),e=>w(()=>{}))},Vt=()=>{let[t]=Q.useForm(),n=Q.useWatch(`keyword`,t)??``,i=Q.useWatch(`assignee`,t)??``,a=Q.useWatch(`repository`,t)??``,s=Q.useWatch(`reviewer`,t)??``,c=!!Q.useWatch(`includeDrafts`,t),l=H(`尚未执行检索。`);return L(()=>x(d(Object.assign(u=>{let f=Ot().content.cloneNode(!0).firstChild,p=f.childNodes[0],g=p.parentNode,_=f.childNodes[1].childNodes[0].childNodes[2].childNodes[0],v=_.parentNode,y=f.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],b=y.parentNode,x=f.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],S=x.parentNode,C=f.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],w=C.parentNode,T=f.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[3],E=T.parentNode,D=f.childNodes[1].childNodes[0].childNodes[3].childNodes[3].childNodes[1],k=D.parentNode,A=f.childNodes[1].childNodes[1].childNodes[1].childNodes[0],M=A.parentNode,N=O(g);V(N,Q,()=>({form:t,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{l.value=$(e)},render:F(n=>e(e=>{let i=h(),a=gt().content.cloneNode(!0),s=a.firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1],f=u.parentNode,p=s.childNodes[2],g=p.parentNode,_=s.childNodes[3],v=_.parentNode;i.appendChild(a),q(()=>{let e=o(Q.Item,()=>({form:n,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>z(X,()=>({...e,placeholder:`搜索 issue / 页面 / API`}))}));j(()=>W(e,l,c))}),q(()=>{let e=o(Q.Item,()=>({form:n,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>z(X,()=>({...e,placeholder:`rue-design`}))}));j(()=>W(e,f,u))}),q(()=>{let e=o(Q.Item,()=>({form:n,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>z(X,()=>({...e,placeholder:`team-design`}))}));j(()=>W(e,g,p))}),q(()=>{let e=o(Q.Item,()=>({form:n,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>z(X,()=>({...e,placeholder:`infra`}))}));j(()=>W(e,v,_))});let y=_t().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[0],S=x.parentNode,C=b.childNodes[1].childNodes[0],w=C.parentNode,T=b.childNodes[1].childNodes[1],E=T.parentNode,D=b.childNodes[1].childNodes[2],k=D.parentNode;i.appendChild(y),q(()=>{let e=o(Q.Item,()=>({form:n,name:`includeDrafts`,valuePropName:`checked`,render:e=>z(oe,()=>({...e,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`包含草稿和实验分支`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}));j(()=>W(e,S,x))});let A=O(w);V(A,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`执行搜索`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),w.insertBefore(A,C);let M=O(E);V(M,Y,()=>({type:`outlined`,onClick:()=>t.resetFields(),children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`清空条件`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),E.insertBefore(M,T);let N=O(k);return V(N,Y,()=>({type:`text`,onClick:()=>{t.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return I(t,m(`填入示例`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),k.insertBefore(N,D),i}))})),g.insertBefore(N,p),P(v,_,()=>{let e=Mt({keyword:String(n),repository:String(a),assignee:String(i),reviewer:String(s),includeDrafts:c});return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`暂无 query string`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(b,y,()=>{let e=String(n);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(S,x,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(w,C,()=>{let e=String(i);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(E,T,()=>{let e=String(s);return e?{__rue_compiled_branch_key:e,create:()=>d(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),P(k,D,()=>c?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(e=>{let t=m(`是`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(`否`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let L=m(``);return M.insertBefore(L,A),M.removeChild(A),J(L,()=>l.value),{__rue_compiled_host:f,__rue_compiled_roots:[f]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{})))},Ht=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Ut=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Wt=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Gt=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],Kt=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],qt=()=>{let e=H(`preview`),i=H(`preview`),a=H(`preview`),o=H(`preview`),s=H(`preview`),c=H(`preview`),l=H(`preview`),u=H(`preview`),f=H(`preview`);return L(()=>x(z(se,()=>({children:(p,m,v)=>r(p,v,()=>d(Object.assign(d=>{let p=h(),m=kt().content.cloneNode(!0),v=m.firstChild,y=v.childNodes[4].childNodes[0],b=y.parentNode,x=v.childNodes[6],S=x.parentNode,C=v.childNodes[7],w=C.parentNode,T=v.childNodes[8],E=T.parentNode,D=v.childNodes[9],k=D.parentNode,A=v.childNodes[10],j=A.parentNode,M=v.childNodes[11],N=M.parentNode,P=v.childNodes[12],I=P.parentNode,L=v.childNodes[13],R=L.parentNode,B=v.childNodes[14],H=B.parentNode,U=v.childNodes[17].childNodes[0],W=U.parentNode,ee=v.childNodes[20],G=ee.parentNode,K=v.childNodes[21],ne=K.parentNode,J=v.childNodes[22],re=J.parentNode;p.appendChild(m);let ie=[];q(()=>{ie=te(b,y,ie,Gt||[],(e,t)=>e.title,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>z(jt,()=>({eyebrow:i.get().eyebrow,title:i.get().title,description:i.get().description,items:i.get().items}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(ie));let ae=O(S);V(ae,Z,()=>({title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:e,preview:F(()=>z(Nt,()=>({}))),code:`<Form
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
`})),S.insertBefore(ae,x);let Y=O(w);V(Y,Z,()=>({title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:i,preview:F(()=>z(Pt,()=>({}))),code:`const InstanceMethodsShowcase: FC = () => {
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
`})),w.insertBefore(Y,C);let oe=O(E);V(oe,Z,()=>({title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:a,preview:F(()=>z(Ft,()=>({}))),code:`const [form] = Form.useForm()

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
`})),E.insertBefore(oe,T);let X=O(k);V(X,Z,()=>({title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:o,preview:F(()=>z(It,()=>({}))),code:`<Form.Item
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
`})),k.insertBefore(X,D);let se=O(j);V(se,Z,()=>({title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:s,preview:F(()=>z(Lt,()=>({}))),code:`<Form.Item
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
`})),j.insertBefore(se,A);let ce=O(N);V(ce,Z,()=>({title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:c,preview:F(()=>z(Rt,()=>({}))),code:`const [form] = Form.useForm()

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
`})),N.insertBefore(ce,M);let le=O(I);V(le,Z,()=>({title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:l,preview:F(()=>z(Bt,()=>({}))),code:`const DynamicListShowcase: FC = () => {
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
`})),I.insertBefore(le,P);let ue=O(R);V(ue,Z,()=>({title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:u,preview:F(()=>z(zt,()=>({}))),code:`const LongFormScrollShowcase: FC = () => {
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
`})),R.insertBefore(ue,L);let de=O(H);V(de,Z,()=>({title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:f,preview:F(()=>z(Vt,()=>({}))),code:`const [form] = Form.useForm()

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
`})),H.insertBefore(de,B);let fe=[];q(()=>{fe=te(W,U,fe,Kt||[],(e,t)=>e.title,(e,n)=>{let i=g(e);return t((e,t,n)=>r(e,n,()=>z(jt,()=>({eyebrow:i.get().eyebrow,title:i.get().title,description:i.get().description}))),(t,r)=>{e=t,n=r,i.set(t)})})}),n(()=>_(fe));let pe=O(G);V(pe,At,()=>({title:`Form`,rows:Ht})),G.insertBefore(pe,ee);let me=O(ne);V(me,At,()=>({title:`Form.Item`,rows:Ut})),ne.insertBefore(me,K);let he=O(re);return V(he,At,()=>({title:`Form.List and Hooks`,rows:Wt})),re.insertBefore(he,J),{__rue_compiled_host:p,__rue_compiled_roots:[p]}},{__rue_compiled_explicit_roots:!0})))})),e=>w(()=>{})))};export{qt as default};