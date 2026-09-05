import{B as e,Bt as t,C as n,Dn as r,E as i,En as a,Et as o,Gt as s,H as c,It as l,Jt as u,K as d,Kt as f,L as p,Mt as m,S as h,Sn as g,Ut as _,V as v,W as y,Wt as b,X as x,Y as S,Z as C,_n as w,_t as T,at as E,b as D,bn as O,dn as k,dt as A,fn as j,gn as M,hn as N,ht as P,it as F,kn as I,l as ee,mn as L,mt as R,nt as z,ot as te,pn as B,pt as V,q as H,qt as U,rt as W,tt as G,u as ne,wn as K,x as q,yn as re,z as J,zt as ie}from"./rue-runtime-CwEGJ854.js";import{t as Y}from"./button-BlvcsWE0.js";import{t as ae}from"./checkbox-DPE5R2Rt.js";import{t as X}from"./input-Bm2FiP-g.js";import{r as Z}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as oe}from"./PreviewBlock-Daz-jANt.js";var se=w(`<ul><!--rue:text-hole:0--><!--rue:text-hole:1--></ul>`),ce=w(`<ul class="mt-2 grid gap-1 text-xs"><!--rue:text-hole:0--><!--rue:text-hole:1--></ul>`),le=w(`<div></div>`),ue=w(`<label><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--><!--rue:text-hole:2--></label>`),de=w(`<div><!--rue:text-hole:0--><div class="min-w-0 flex-1"><div class="flex items-start gap-3"><div class="min-w-0 flex-1"></div><!--rue:text-hole:1--></div><div class="mt-3"></div><!--rue:text-hole:2--></div></div>`),fe=w(`<div data-rue-form-list-shell="true"><!--rue:text-hole:0--></div>`),pe=w(`<form><!--rue:text-hole:0--></form>`),me=w(`<div><!--rue:text-hole:0--></div>`),he=w(`<section><!--rue:text-hole:0--></section>`),ge=`__rueFormContext`,_e=`__rueFormOriginalDefaultSlot`,ve=`__rue_slots`,ye=0,be={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},xe=(...e)=>e.filter(Boolean).join(` `),Se=e=>!!e&&typeof e==`object`,Ce=e=>{if(Array.isArray(e))return e.map(e=>Ce(e));if(Se(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=Ce(e[n])}),t}return e},we=e=>e==null?[]:Array.isArray(e)?[...e]:[e],Te=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),Ee=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),De=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),Oe=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},ke=(e,t,n)=>{if(t.length===0)return Ce(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?Ce(n):ke(o[r],i,n),o},Ae=(e,t)=>{if(t.length===0)return;if(!Se(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=Ae(i[n],r),i)},je=(e,t)=>{if(!Se(t)&&!Array.isArray(t))return Ce(t);if(Array.isArray(t))return t.map(e=>Ce(e));let n=Se(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=je(n[e],t[e])}),n},Me=(e,t)=>ke({},e,t),Ne=e=>e?Array.isArray(e)?e:[e]:[`onChange`],Pe=(e,t)=>{let n=e[ve];if(n&&typeof n==`object`&&`default`in n){let e=n.default;return typeof e==`function`?e():e}return`children`in e?e.children:t},Fe=e=>typeof e==`function`&&e.kind===`block-factory`?e():e,Ie=e=>{let t=e[ve];return!!(t&&typeof t==`object`&&`default`in t)},Le=(e,t)=>{let n=e[ve];if(!n||typeof n!=`object`||!(`default`in n))return e;let r=n,i=r[_e]??r.default;return r[_e]=i,r.default=(...e)=>t(typeof i==`function`?i(...e):i),e};f((e,t,n)=>(f(),Ie(e)?c(ne,()=>({source:Le(e,e=>n(Fe(e)))})):n(Fe(Pe(e,t)))));var Re=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,ze=(e,t)=>{let n=Re(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},Be=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,Ve=e=>{try{return new URL(e),!0}catch{return!1}},He=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&Ve(e);default:return!0}},Ue=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??be.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??be.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??be.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??be.types?.[e.type??`string`]??"${label} 类型不正确";let a=Re(t,e.type);return(r[a]??be[a]??{})[i??`len`]??"${label} 校验失败"},We=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),Ge=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},Ke=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,qe=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=Ge(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&Be(n,e.type)?i=Ue(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=Ue(e,n,l,o,`whitespace`):!Be(n,e.type)&&e.type&&!He(n,e.type)?i=Ue(e,n,l,o,`type`):!Be(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=Ue(e,n,l,o,`pattern`):!Be(n,e.type)&&e.len!==void 0?ze(n,e.type)!==e.len&&(i=Ue(e,n,l,o,`len`)):!Be(n,e.type)&&e.min!==void 0?ze(n,e.type)<e.min&&(i=Ue(e,n,l,o,`min`)):!Be(n,e.type)&&e.max!==void 0&&ze(n,e.type)>e.max&&(i=Ue(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=We(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},Je=(e,...t)=>{let[n,r]=t;if(e===`checked`)return Se(r)&&typeof r.checked==`boolean`?r.checked:Se(n)&&Se(n.target)&&typeof n.target.checked==`boolean`?n.target.checked:typeof n==`boolean`?n:!!n;if(t.length>1&&n!==void 0&&!(Se(n)&&`target`in n))return n;if(Se(n)&&Se(n.target)){let t=n.target;if(e in t)return t[e];if(`value`in t)return t.value}return n},Ye=e=>e?o(Object.assign(e===`error`?e=>{let t=N(`span`,e);return t.className=`text-error`,j(t,M(`!`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}}:e===`warning`?e=>{let t=N(`span`,e);return t.className=`text-warning`,j(t,M(`!`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}}:e===`success`?e=>{let t=N(`span`,e);return t.className=`text-success`,j(t,M(`✓`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}}:e=>{let t=N(`span`,e);return t.className=`loading loading-spinner loading-xs text-primary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):null,Xe=e=>{if(e?.span)return`${e.span/24*100}%`},Ze=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,Qe=()=>{let e=U(`ref:1:0`,()=>t(0)),n=new Map,r=new Map,i=new Map,a=new Set,o=!1,s={},c={},l=!1,u=null,d={validateTrigger:[`onChange`],validateMessages:be},p=()=>{e.value+=1,Array.from(a).forEach(e=>e())},m=()=>{o||(o=!0,queueMicrotask(()=>{o=!1,p()}))},h=e=>{let t=Te(e),n=i.get(t);if(n)return n;let r={touched:!1,validating:!1,errors:[],warnings:[]};return i.set(t,r),r},g=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${Te(t)}`:e.id},_=e=>{let t=h(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:Ce(De(s,e))}},v=e=>{d.onFieldsChange?.([_(e)],O.getFieldsValue(!0))},y=(e,t,n=!0)=>{let r=h(e);Object.assign(r,t),n&&(v(e),p(),m())},b=e=>{for(let t of n.values()){let n=t.getNamePath();if(n&&Ee(n,e))return t}return null},x=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return y(n,{errors:[],warnings:[],validating:!1}),null;y(n,{validating:!0});let a=await qe(n,De(s,n),i,s,e.getLabel(),e.getMessageVariables(),d.validateMessages);return y(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},S=async e=>{let t=Array.from(n.values());for(let n of t){let t=n.getNamePath();!t||Ee(t,e)||n.getDependencies().some(t=>Ee(t,e))&&await x(n)}},C=async(e,t,n)=>{if(s=ke(s,e,t),n?.touch){let t=h(e);t.touched=!0}p(),v(e),n?.emitValues!==!1&&d.onValuesChange?.(Me(e,t),O.getFieldsValue(!0));let r=b(e);r&&await x(r,n?.triggerName),await S(e),m()},w=e=>{let t=g(e),a=r.get(t);a&&a!==e.id&&n.delete(a),n.set(e.id,e),r.set(t,e.id);let o=e.getNamePath();if(o&&o.length){let t=e.getInitialValue();!Oe(c,o)&&t!==void 0&&(c=ke(c,o,t)),!Oe(s,o)&&t!==void 0&&(s=ke(s,o,t)),h(o)}return()=>{let a=r.get(t)===e.id;if(n.delete(e.id),!a)return;r.delete(t);let o=e.getNamePath();!o||!o.length||Ze(e,d.preserve)||(s=Ae(s,o),i.delete(Te(o)),p())}},T=e=>!l&&(c=Ce(e??{}),s=Ce(e??{}),l=!0,!0),E=f(async e=>{f();let t=e?.map(e=>we(e)),r=[],i=Array.from(n.values()),a=new Set;for(let e of i){let n=g(e);if(a.has(n))continue;a.add(n);let i=e.getNamePath();if(!i||!i.length||t&&!t.some(e=>Ee(i,e)))continue;let o=await x(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:O.getFieldsValue(!0),errorFields:r,outOfDate:!1};return O.getFieldsValue(!0)}),D=(e,t)=>{let n=we(e),r=d.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>{let t=typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g,`\\$1`);return u?.querySelector(`#${t}`)}).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},O={getFieldValue(t){return e.value,Ce(De(s,we(t)))},getFieldsValue(t){return e.value,t===!0||t==null?Ce(s):t.reduce((e,t)=>{let n=we(t);return ke(e,n,De(s,n))},{})},setFieldValue(e,t){C(we(e),t,{emitValues:!1})},setFieldsValue(e){s=je(s,e),p()},resetFields(e){if(!e?.length){s=Ce(c),i.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),p();return}e.forEach(e=>{let t=we(e),n=De(c,t);s=n===void 0?Ae(s,t):ke(s,t,n);let r=h(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),p()},validateFields:E,submit(){E().then(e=>{d.onFinish?.(e)}).catch(e=>{if(d.onFinishFailed?.(e),d.scrollToFirstError&&e.errorFields[0]){let t=d.scrollToFirstError===!0?{block:`center`}:d.scrollToFirstError;D(e.errorFields[0].name,t)}})},scrollToField:D,isFieldTouched(e){return h(we(e)).touched},getFieldError(e){return[...h(we(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(n.values()).filter(t=>{let n=g(t);return!e.has(n)&&(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=h(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=we(e),n=h(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){d=e},ensureInitialized:T,registerField:w,getMeta:h,validateFieldByPath(e,t){let n=b(e);return n?x(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return C(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return C(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return d.validateTrigger},setRootElement(e){u=e},subscribe(e){return a.add(e),()=>{a.delete(e)}},emitUpdate(){p()}}};return O},$e=(e,t,n)=>typeof n==`function`?n(e,{required:t}):n===`optional`&&!t?o(Object.assign(e=>{let t=N(`span`,e);return t.className=`ml-2 text-xs text-base-content/45`,t.setAttribute(`aria-hidden`,`true`),j(t,M(`optional`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):n!==!1&&t?o(Object.assign(e=>{let t=N(`span`,e);return t.className=`ml-1 text-error`,t.setAttribute(`aria-hidden`,`true`),j(t,M(`*`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):null,et=t=>{let r=y(t.className),i=y(t.errors),a=y(t.style),s=y(t.warnings);return H(e(()=>[...i.get()??[],...s.get()??[]].filter(e=>e!=null).length?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>o(Object.assign(e=>{let t=se().content.cloneNode(!0).firstChild,c=t,l=t.childNodes[0],u=l.parentNode,d=t.childNodes[1],f=d.parentNode,p;K(()=>{let e=xe(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,r.get()),t=e==null?``:String(e);Object.is(p,t)||(p=t,c.className=t)});let m;K(()=>{let e=a.get();Object.is(m,e)||(m=e,A(c,e))});let g=[];K(()=>{let e=(i.get()??[])||[];g=n(u,l,g,e,(e,t)=>`error-${t}`,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>o(Object.assign(e=>{let t=N(`li`,e);t.className=`text-error`;let r=M(``);return j(t,r),O(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let _=[];return K(()=>{let e=(s.get()??[])||[];_=n(f,d,_,e,(e,t)=>`warning-${t}`,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>o(Object.assign(e=>{let t=N(`li`,e);t.className=`text-warning`;let r=M(``);return j(t,r),O(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>null}),e=>J(()=>{r.set(e.className),i.set(e.errors),a.set(e.style),s.set(e.warnings)}),()=>t)},tt=f(e=>{let{slotSource:t,__rue_phase2_slotSource:d,formInstance:f,__rue_phase2_formInstance:m,entityIdRef:b,unregisterRef:w,subscriptionFormRef:T,unsubscribeRenderRef:E,renderVersion:F,setRenderVersion:ee,renderCacheRef:L,previousValuesRef:R,lastRegisteredKeyRef:V,latestPropsRef:H,noStyleHostRef:W,controlHostRef:J,helpHostRef:Y,feedbackHostRef:ae}=re(`useSetup:0:0`,()=>{let t=g(()=>u()?.propsRO??{children:e.children});t.get();let n=t,r=g(()=>e.form);r.get();let i=r,a=_(),o=_(null),c=_(void 0),l=_(null),[d,f]=s(0,{kind:`ref`}),p=_(),m=_(),h=_(),v=_(e),y=_(null),b=_(null),x=_(null),S=_(null);return v.current=e,a.current||=`rue-form-item-${ye++}`,{slotSource:t,__rue_phase2_slotSource:n,formInstance:r,__rue_phase2_formInstance:i,entityIdRef:a,unregisterRef:o,subscriptionFormRef:c,unsubscribeRenderRef:l,renderVersion:d,setRenderVersion:f,renderCacheRef:p,previousValuesRef:m,lastRegisteredKeyRef:h,latestPropsRef:v,noStyleHostRef:y,controlHostRef:b,helpHostRef:x,feedbackHostRef:S}});if(e.name!=null&&!m.get())throw Error(`Form.Item 绑定字段时需要显式传入 form`);let X=U(`computed:1:16`,()=>g(()=>e.name==null?void 0:we(e.name)));X.get();let Z=X,oe=U(`computed:1:17`,()=>g(()=>Z.get()?Te(Z.get()):void 0));oe.get();let se=oe,fe=U(`computed:1:18`,()=>g(()=>e.layout??`horizontal`));fe.get();let pe=U(`computed:1:19`,()=>g(()=>Ke(e.required,e.rules)));pe.get();let me=U(`computed:1:20`,()=>g(()=>e.labelAlign??`right`));me.get();let he=U(`computed:1:21`,()=>g(()=>e.labelCol));he.get();let ge=U(`computed:1:22`,()=>g(()=>e.wrapperCol));ge.get();let _e=U(`computed:1:23`,()=>g(()=>e.htmlFor??(Z.get()?Z.get().map(e=>String(e)).join(`__`):void 0)));_e.get();let ve=_e;if(Z.get()&&m.get()&&V.current!==se.get()){let t=H.current??e;w.current?.(),w.current=m.get().__INTERNAL__.registerField({id:b.current,kind:`item`,getNamePath:()=>Z.get(),getRules:()=>t.rules??[],getRequired:()=>t.required,getLabel:()=>t.label,getMessageVariables:()=>t.messageVariables,getValidateTrigger:()=>Ne(t.validateTrigger),getDependencies:()=>(t.dependencies??[]).map(e=>we(e)),getInitialValue:()=>t.initialValue,getPreserve:()=>t.preserve}),V.current=se.get()}let be=()=>{let t=m.get()?.getFieldsValue(!0)??{},n=Z.get()&&m.get()?m.get().__INTERNAL__.getMeta(Z.get()):null;return{allValues:t,meta:n,currentValue:Z.get()&&m.get()?m.get().getFieldValue(Z.get()):void 0,triggerName:e.trigger??`onChange`,validateTrigger:Ne(e.validateTrigger),status:e.validateStatus??(n?.validating?`validating`:n?.errors.length?`error`:n?.warnings.length?`warning`:n?.touched&&(e.rules?.length??0)>0?`success`:void 0)}},Se=()=>{let{allValues:t,meta:r,currentValue:a,triggerName:s,validateTrigger:l,status:u}=be(),f=e.render??e.children,p;if(typeof f==`function`&&f.kind!==`block-factory`&&Z.get()&&m.get()&&!e.shouldUpdate){let t={...e.getValueProps?e.getValueProps(a):{[e.valuePropName??`value`]:e.valuePropName===`checked`?!!a:a},id:ve.get()};t[s]=(...t)=>{let n=e.getValueFromEvent?e.getValueFromEvent(...t):Je(e.valuePropName??`value`,...t),r=e.normalize?e.normalize(n,a,m.get().getFieldsValue(!0)):n;m.get().__INTERNAL__.updateValueFromControl(Z.get(),r,{touch:!0,triggerName:s})},l.filter(e=>e!==s).forEach(e=>{t[e]=(...t)=>{m.get().__INTERNAL__.validateFieldByPath(Z.get(),e)}}),p=f(t,{value:a,touched:r?.touched??!1,validating:r?.validating??!1,errors:r?.errors??[],warnings:r?.warnings??[],status:u},m.get())}else typeof f==`function`&&f.kind!==`block-factory`&&(!Z.get()||e.shouldUpdate)?(((typeof e.shouldUpdate==`function`?e.shouldUpdate(R.current??t,t):e.shouldUpdate===!0||L.current===void 0)||L.current===void 0)&&(L.current=f(t,m.get())),R.current=Ce(t),p=L.current):p=c(ne,()=>({source:d.get()}));if(e.noStyle){W.current&&i(P(()=>{let e=z(),t=G(`rue:slot:anchor`);return x(e,t),K(()=>{let n=p;I(()=>S(n,e,t))}),e},!0),W.current);return}J.current&&i(P(()=>{let e=z(),t=G(`rue:slot:anchor`);return x(e,t),K(()=>{let n=p;I(()=>S(n,e,t))}),e},!0),J.current),Y.current&&i(e.help===void 0?r&&(r.errors.length>0||r.warnings.length>0)?o(Object.assign(e=>{let t=ce().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,s=t.childNodes[1],c=s.parentNode,l=[];K(()=>{let e=r.errors||[];l=n(a,i,l,e,(e,t)=>`error-${t}`,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>o(Object.assign(e=>{let t=N(`li`,e);t.className=`text-error`;let r=M(``);return j(t,r),O(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let u=[];return K(()=>{let e=r.warnings||[];u=n(c,s,u,e,(e,t)=>`warning-${t}`,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>o(Object.assign(e=>{let t=N(`li`,e);t.className=`text-warning`;let r=M(``);return j(t,r),O(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):o(Object.assign(t=>{let n=z(),r=B(`rue:compiled-slot`);return j(n,r),D({parent:n,before:r},()=>e.help,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),Y.current),ae.current&&i(e.hasFeedback?P(()=>{let e=z(),t=G(`rue:slot:anchor`);return x(e,t),K(()=>{let n=Ye(u);I(()=>S(n,e,t))}),e},!0):o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),ae.current)},Ee=e=>{J.current=e,e&&queueMicrotask(()=>{Se()})};if(T.current!==m.get()&&(E.current?.(),T.current=m.get(),E.current=m.get()?m.get().__INTERNAL__.subscribe(()=>{ee(F.value+1)}):null),U(`watch:1:24`,()=>k(()=>F.value,()=>{Se()},{immediate:!0})),a(()=>{w.current?.(),w.current=null,E.current?.(),E.current=null,T.current=void 0}),l(()=>{Se()}),ie(()=>{Se()}),e.noStyle)return o(Object.assign(e=>{let t=le().content.cloneNode(!0).firstChild,n=t,i=W;return typeof i==`function`?i(n):i&&typeof i==`object`&&`current`in i&&(i.current=n),r(()=>{typeof i==`function`?i(null):i&&typeof i==`object`&&`current`in i&&(i.current=null)}),Object.assign(n.style,{display:`contents`}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));let De=e.label===void 0?null:P(()=>{let t=z(),n=ue().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[0].childNodes[0],s=a.parentNode,c=r.childNodes[1],l=c.parentNode,u=r.childNodes[2],d=u.parentNode;return t.appendChild(n),K(()=>{p(i,xe(`text-[0.95rem] leading-7 font-medium text-base-content/78`,me.get()===`left`?`text-left`:`text-right md:text-right`,`md:whitespace-nowrap`))}),K(()=>{let e={width:fe.get()===`horizontal`?Xe(he.get()):void 0};A(i,e)}),K(()=>{te(i,`for`,String(_e.get()))}),D({parent:s,before:a},()=>e.label,()=>({})),v(l,c,()=>fe.get()===`horizontal`&&e.colon!==!1?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=N(`span`,e);return t.className=`ml-1 text-base-content/45`,j(t,M(`:`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),K(()=>{let t=$e(e.label,pe.get(),!0);I(()=>S(t,d,u))}),t},!0),Oe=fe.get()===`horizontal`&&ge.get()?.offset?{marginLeft:`${ge.get().offset/24*100}%`,width:Xe(ge.get())}:fe.get()===`horizontal`?{width:Xe(ge.get())}:void 0;return P(t=>{let n=de().content.cloneNode(!0).firstChild,i=n,a=n.childNodes[1],s=n.childNodes[1].childNodes[0].childNodes[0],c=n.childNodes[1].childNodes[1],l=n.childNodes[0],u=l.parentNode,d=n.childNodes[1].childNodes[0].childNodes[1],f=d.parentNode,m=n.childNodes[1].childNodes[2],h=m.parentNode;return K(()=>{p(i,xe(`rue-form-item`,e.hidden?`hidden`:void 0,fe.get()===`horizontal`?`flex flex-col gap-3 md:flex-row md:items-start`:`grid gap-3`,e.className))}),K(()=>{let t=e.style;A(i,t)}),p(a,`min-w-0 flex-1`),K(()=>{A(a,Oe)}),p(s,`min-w-0 flex-1`),C(s,()=>Ee),p(c,`mt-3`),C(c,()=>Y),K(()=>{let e=De;I(()=>S(e,u,l))}),v(f,d,()=>e.hasFeedback?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=N(`span`,e);t.className=`mt-3 shrink-0`;let n=ae;return typeof n==`function`?n(t):n&&typeof n==`object`&&`current`in n&&(n.current=t),r(()=>{typeof n==`function`?n(null):n&&typeof n==`object`&&`current`in n&&(n.current=null)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),v(h,m,()=>e.extra==null?{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=N(`div`,t);n.className=`mt-3 text-[0.8rem] leading-6 text-base-content/55`;let r=B(`rue:compiled-slot`);return j(n,r),D({parent:n,before:r},()=>e.extra,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}),n})}),nt=f(e=>{f();let{form:t,name:n,children:r,render:i,initialValue:o,rules:c}=e,l=t;if(!l)throw Error(`Form.List 需要显式传入 form`);let u=i??r;if(typeof u!=`function`)throw Error(`Form.List 需要通过 render 提供列表内容`);let d=we(n),p=U(`useRef:1:25`,()=>_()),m=U(`useRef:1:26`,()=>_(null)),h=U(`useRef:1:27`,()=>_(void 0)),g=U(`useRef:1:28`,()=>_(null)),[v,y]=U(`useState:1:29`,()=>s(0,{kind:`ref`})),b=U(`useRef:1:30`,()=>_(c)),x=U(`useRef:1:31`,()=>_(o)),C=U(`useRef:1:32`,()=>_([])),w=U(`useRef:1:33`,()=>_(0));return b.current=c,x.current=o,p.current||=`rue-form-list-${ye++}`,m.current||=l.__INTERNAL__.registerField({id:p.current,kind:`list`,getNamePath:()=>d,getRules:()=>b.current??[],getRequired:()=>void 0,getLabel:()=>d[d.length-1],getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>x.current,getPreserve:()=>!0}),h.current!==l&&(g.current?.(),h.current=l,g.current=l.__INTERNAL__.subscribe(()=>{y(v.value+1)})),a(()=>{m.current?.(),m.current=null,g.current?.(),g.current=null,h.current=void 0}),(()=>{v.value;let e=l.getFieldValue(d),t=Array.isArray(e)?e:[],n=l.__INTERNAL__.getMeta(d),r=C.current??[],i=w.current??0;C.current??=r,w.current??=i;let a=()=>{let e=w.current??0;return w.current=e+1,e};if(r.length<t.length)for(;r.length<t.length;)r.push(a());r.length>t.length&&(C.current=r.slice(0,t.length));let o={add(e,n){let i=[...t],o=n==null?i.length:Math.max(0,Math.min(n,i.length));i.splice(o,0,e??null),r.splice(o,0,a()),l.__INTERNAL__.updateListValue(d,i)},remove(e){let n=(Array.isArray(e)?e:[e]).sort((e,t)=>t-e),i=[...t];n.forEach(e=>{e<0||e>=i.length||(i.splice(e,1),r.splice(e,1))}),l.__INTERNAL__.updateListValue(d,i)},move(e,n){if(e<0||n<0||e>=t.length||n>=t.length||e===n)return;let i=[...t],[a]=i.splice(e,1);i.splice(n,0,a);let[o]=r.splice(e,1);r.splice(n,0,o),l.__INTERNAL__.updateListValue(d,i)}},s=t.map((e,t)=>({key:r[t],name:t,fieldKey:r[t]}));return P(e=>{let t=fe().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode;return K(()=>{let e=u(s,o,{errors:n.errors,warnings:n.warnings});I(()=>S(e,i,r))}),t})})()}),Q=Object.assign(e=>{let{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:o,__rue_rest_omit_5:d,__rue_rest_omit_6:p,__rue_rest_omit_7:m,__rue_rest_omit_8:h,__rue_rest_omit_9:v,__rue_rest_omit_10:y,__rue_rest_omit_11:C,__rue_rest_omit_12:w,__rue_rest_omit_13:E,__rue_rest_omit_14:D,__rue_rest_omit_15:O,__rue_rest_omit_16:k,__rue_rest_omit_17:A,rest:j,slotSource:M,__rue_phase2_slotSource:N,internalFormRef:F,rootElementRef:L,subscriptionFormRef:te,unsubscribeRenderRef:B,renderVersion:V,setRenderVersion:H,resolvedForm:W,__rue_phase2_resolvedForm:q,initializedNow:J,__rue_phase2_initializedNow:ie,formVersionSnapshot:Y,__rue_phase2_formVersionSnapshot:ae,handleNativeSubmit:X,resolveContent:Z,content:oe}=U(`useSetup:0:0`,()=>b(()=>{let{className:t,style:n,children:r,render:i,component:o,layout:d,initialValues:p,form:m,name:h,preserve:v,validateMessages:y,validateTrigger:b,scrollToFirstError:C,onValuesChange:w,onFieldsChange:T,onFinish:E,onFinishFailed:D,onSubmit:O,...k}=e,A=g(()=>u()?.propsRO??{children:e.children});A.get();let j=A,M=_(),N=_(null),F=_(void 0),ee=_(null),[L,R]=s(0,{kind:`ref`});M.current||=e.form??Qe();let te=g(()=>e.form??M.current);te.get();let B=te,V=g(()=>B.get().__INTERNAL__.ensureInitialized(e.initialValues));V.get();let H=V,U=g(()=>B.get().__INTERNAL__.version.value);U.get();let W=U;B.get().__INTERNAL__.setRuntimeOptions({name:e.name,preserve:e.preserve,validateTrigger:Ne(e.validateTrigger),validateMessages:{...be,...e.validateMessages},scrollToFirstError:e.scrollToFirstError,onValuesChange:e.onValuesChange,onFieldsChange:e.onFieldsChange,onFinish:e.onFinish,onFinishFailed:e.onFinishFailed}),F.current!==B.get()&&(ee.current?.(),F.current=B.get(),ee.current=B.get().__INTERNAL__.subscribe(()=>{R(L.value+1)}));let q=t=>{t.preventDefault(),e.onSubmit?.(t),B.get().submit()};l(()=>{H.get()&&B.get().__INTERNAL__.emitUpdate()}),a(()=>{ee.current?.(),ee.current=null,F.current=void 0});let J=f(()=>(re(`useSetup:0:0`,()=>(W.get(),{})),typeof e.render==`function`?P(()=>{let t=z(),n=G(`rue:slot:anchor`);return x(t,n),K(()=>{let r=e.render(B.get());I(()=>S(r,t,n))}),t},!0):typeof e.children==`function`&&e.children.kind!==`block-factory`?P(()=>{let t=z(),n=G(`rue:slot:anchor`);return x(t,n),K(()=>{let r=e.children(B.get());I(()=>S(r,t,n))}),t},!0):c(ne,()=>({source:j.get()}))));return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:o,__rue_rest_omit_5:d,__rue_rest_omit_6:p,__rue_rest_omit_7:m,__rue_rest_omit_8:h,__rue_rest_omit_9:v,__rue_rest_omit_10:y,__rue_rest_omit_11:b,__rue_rest_omit_12:C,__rue_rest_omit_13:w,__rue_rest_omit_14:T,__rue_rest_omit_15:E,__rue_rest_omit_16:D,__rue_rest_omit_17:O,rest:k,slotSource:A,__rue_phase2_slotSource:j,internalFormRef:M,rootElementRef:N,subscriptionFormRef:F,unsubscribeRenderRef:ee,renderVersion:L,setRenderVersion:R,resolvedForm:te,__rue_phase2_resolvedForm:B,initializedNow:V,__rue_phase2_initializedNow:H,formVersionSnapshot:U,__rue_phase2_formVersionSnapshot:W,handleNativeSubmit:q,resolveContent:J,content:J()}}));if((e.component===void 0?`form`:e.component)===!1)return oe;let se={...j,ref:e=>{L.current=e,W.get().__INTERNAL__.setRootElement(e)},onSubmit:(e.component===void 0?`form`:e.component)===`form`?X:void 0,className:xe(`rue-form`,(e.layout===void 0?`horizontal`:e.layout)===`inline`?`flex flex-wrap items-start gap-5`:`grid content-start gap-6`,e.className),style:e.style,"data-rue-form":`true`};return(e.component===void 0?`form`:e.component)===`form`?P(e=>{let t=pe().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return K(()=>{R(n,se,[])}),K(()=>{let e=(V.value,Z());I(()=>S(e,i,r))}),t}):(e.component===void 0?`form`:e.component)===`div`?P(e=>{let t=me().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return K(()=>{R(n,se,[])}),K(()=>{let e=(V.value,Z());I(()=>S(e,i,r))}),t}):(e.component===void 0?`form`:e.component)===`section`?P(e=>{let t=he().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],i=r.parentNode;return K(()=>{R(n,se,[])}),K(()=>{let e=(V.value,Z());I(()=>S(e,i,r))}),t}):T(ee,()=>({is:e.component===void 0?`form`:e.component,...se,children:(V.value,Z())}))},{Item:tt,List:nt,ErrorList:et,useForm:e=>{let t=U(`useRef:1:37`,()=>_());return t.current||=e??Qe(),[t.current]},useFormInstance:()=>{throw Error(`当前运行时不支持自动解析祖先 Form，请显式持有并传递 form 实例`)},useWatch:(e,t)=>{let n=u()?.propsRO?.[ge],r=t??n?.form,[i,o]=U(`useState:1:34`,()=>s(0,{kind:`ref`})),c=U(`useRef:1:35`,()=>_(void 0)),l=U(`useRef:1:36`,()=>_(null));if(c.current!==r&&(l.current?.(),c.current=r,l.current=r?r.__INTERNAL__.subscribe(()=>{o(i.value+1)}):null),a(()=>{l.current?.(),l.current=null,c.current=void 0}),r)return i.value,r.getFieldValue(e)}}),rt=w(`<div class="rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5"><div class="mb-4 text-sm font-medium text-base-content">Canary settings</div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div><!--rue:text-hole:2--></div>`),it=w(`<div class="min-w-0"><!--rue:opaque-hole:0--></div>`),at=w(`<div class="grid gap-4"><!--rue:text-hole:0--><!--rue:text-hole:1--><div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><!--rue:text-hole:4--></div>`),ot=w(`<div class="flex flex-wrap gap-3 pt-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),st=w(`<div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ct=w(`<div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--></div>`),lt=w(`<div class="grid gap-6"><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">回调地址</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">https://</span><!--rue:opaque-hole:0--><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">:443</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。</div></div><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">资源路径</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">/hooks/</span><!--rue:opaque-hole:1--><span class="text-xs uppercase tracking-[0.18em] text-base-content/45">POST target</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。</div></div></div>`),ut=w(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 1</div><div class="mt-1 text-lg font-semibold text-base-content">基础信息</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),dt=w(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 2</div><div class="mt-1 text-lg font-semibold text-base-content">发布策略</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),ft=w(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 3</div><div class="mt-1 text-lg font-semibold text-base-content">观测与审批</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),pt=w(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 4</div><div class="mt-1 text-lg font-semibold text-base-content">回滚预案</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),mt=w(`<div class="sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur"><div class="flex flex-wrap items-center justify-between gap-3"><div class="text-sm text-base-content/65">留空深层字段后点击提交，会自动滚到首个错误项。</div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),ht=w(`<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),gt=w(`<div class="mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4"><!--rue:opaque-hole:0--><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),_t=w(`<div class="not-prose my-6 lg:my-8"><h3 class="mt-0 mb-3 text-base font-semibold text-base-content"><!--rue:text-hole:0--></h3><div class="overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:1--></tbody></table></div></div>`),vt=w(`<div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><!--rue:text-hole:0--><h3 class="mt-3 mb-0 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></h3><p class="mt-3 mb-0 text-sm leading-6 text-base-content/70"><!--rue:text-hole:2--></p><!--rue:text-hole:3--></div>`),yt=w(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Submit result</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。</p><div class="mt-4 grid gap-4"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Live draft</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre></div><div class="rounded-[1.25rem] bg-neutral p-4 text-neutral-content"><div class="text-xs uppercase tracking-[0.22em] text-neutral-content/60">Last submit</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6"><!--rue:text-hole:2--></pre></div></div></div></div>`),bt=w(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Reactive summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">role</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">region</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">notes</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6"><!--rue:text-hole:4--></pre></div></div>`),xt=w('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Validation notes</div><p class="mt-3 mb-0 text-sm text-base-content/65">这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Password match</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Website warning</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:2--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:3--></pre></div></div>'),St=w('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Store snapshot</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">issueId</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">slug</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">branch</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div></div>'),Ct=w('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Conditional summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">enableCanary</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">publishMode</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Conditional fields</div><div class="mt-2 text-sm leading-6 text-base-content/80">batchSize: <!--rue:text-hole:3--><br> approveBy: <!--rue:text-hole:4--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:5--></pre></div></div>'),wt=w('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Composite preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。</p><div class="mt-4 rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Resolved URL</div><div class="mt-3 break-all text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="mt-4 grid gap-3 text-sm text-base-content/75"><div class="rounded-[1.25rem] bg-base-200/70 p-4">`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。</div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:2--></pre></div></div>'),Tt=w(`<div class="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Scroll actions</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。</p><div class="mt-4 grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5"><div class="overflow-y-auto overscroll-contain pr-2"><!--rue:opaque-hole:5--></div></div></div>`),Et=w(`<div class="grid gap-6"><div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List snapshot</div><div class="mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65"><!--rue:text-hole:1--> members</div><div class="mt-4 grid gap-3"><!--rue:text-hole:2--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List behavior</div><div class="mt-4 grid gap-4 md:grid-cols-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">列表级规则</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">rules 挂在 Form.List 上，校验整个 members 数组。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">重排操作</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">operation.move 保持字段状态跟随成员顺序移动。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">错误出口</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。</p></div></div></div></div>`),Dt=w(`<div class="grid gap-6"><!--rue:opaque-hole:0--><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Query preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。</p><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre><div class="mt-4 grid gap-3 text-sm text-base-content/80"><div class="rounded-[1.25rem] bg-base-200/70 p-4">关键词：<!--rue:text-hole:2--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">仓库：<!--rue:text-hole:3--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">负责人 / 评审人：<!--rue:text-hole:4--> / <!--rue:text-hole:5--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">包含草稿：<!--rue:text-hole:6--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Last submit</div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:7--></pre></div></div></div>`),Ot=w('<div class="max-w-none prose prose-sm md:prose-base"><h1 class="mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content">Form 表单</h1><p class="mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72">这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。</p><h2>何时使用</h2><ul><li>需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。</li><li>需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。</li><li>需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。</li></ul><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></section><div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm">当前 Rue runtime 下，推荐通过 <code>Form.useForm()</code> 或 <code>render={form =&gt; &lt;Form.Item form={form} name="title" /&gt;}</code> 显式持有并传递 <code>form</code>。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。</div><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2>使用说明</h2><p>下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。</p><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:10--></section><h2 id="form-api">API</h2><p>Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。</p><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><!--rue:opaque-hole:13--></div>'),kt=e=>{let t=y(e.rows),r=y(e.title);return H(o(Object.assign(e=>{let i=_t().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],s=a.parentNode,c=i.childNodes[1].childNodes[0].childNodes[1].childNodes[0],l=c.parentNode,u=M(``);s.insertBefore(u,a),s.removeChild(a),O(u,()=>r.get());let d=[];return K(()=>{let e=t.get()||[];d=n(l,c,d,e,(e,t)=>e.prop,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>o(Object.assign(e=>{let t=N(`tr`,e),r=N(`td`,t);j(t,r);let i=N(`code`,r);j(r,i);let a=M(``);j(i,a),O(a,()=>n.get().prop);let o=N(`td`,t);j(t,o);let s=M(``);j(o,s),O(s,()=>n.get().description);let c=N(`td`,t);j(t,c);let l=N(`code`,c);j(c,l);let u=M(``);j(l,u),O(u,()=>n.get().type);let d=N(`td`,t);j(t,d);let f=N(`code`,d);j(d,f);let p=M(``);return j(f,p),O(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{t.set(e.rows),r.set(e.title)}),()=>e)},At=e=>{let t=y(e.description),r=y(e.eyebrow),i=y(e.items),a=y(e.title);return H(o(Object.assign(e=>{let s=vt().content.cloneNode(!0).firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1].childNodes[0],d=u.parentNode,f=s.childNodes[2].childNodes[0],p=f.parentNode,m=s.childNodes[3],g=m.parentNode;v(l,c,()=>r.get()?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=N(`div`,e);t.className=`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`;let n=M(``);return j(t,n),O(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let _=M(``);d.insertBefore(_,u),d.removeChild(u),O(_,()=>a.get());let b=M(``);return p.insertBefore(b,f),p.removeChild(f),O(b,()=>t.get()),v(g,m,()=>i.get()?.length?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=N(`ul`,e);t.className=`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`;let r=B(`rue:list:end`);j(t,r);let a=[];return K(()=>{let e=i.get()||[];a=n(r.parentNode,r,a,e,(e,t)=>e,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>o(Object.assign(e=>{let t=N(`li`,e),r=M(``);return j(t,r),O(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{t.set(e.description),r.set(e.eyebrow),i.set(e.items),a.set(e.title)}),()=>e)},$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},jt=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),Mt=()=>{let e={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0},n=t($(e)),r=t(`等待提交，右侧会展示 payload 或校验摘要。`);return m(()=>H(o(Object.assign(t=>{let i=yt().content.cloneNode(!0).firstChild,a=i.childNodes[0],s=a.parentNode,l=i.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,p=i.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],m=p.parentNode,h=L(s);d(h,Q,()=>({className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:e,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{n.value=$(t)},onFinish:e=>{r.value=`提交成功
`+$(e)},onFinishFailed:e=>{r.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:f(e=>P(t=>{let n=z(),r=G(`rue:component:anchor`);x(n,r),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>c(X,()=>({...e,placeholder:`输入项目名称`}))}));I(()=>S(t,n,r))});let i=G(`rue:component:anchor`);x(n,i),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>c(X,()=>({...e,placeholder:`team@rue.dev`}))}));I(()=>S(t,n,i))});let a=G(`rue:component:anchor`);x(n,a),K(()=>{let t=T(Q.Item,()=>({form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>c(ae,()=>({...e,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`允许直接覆盖 staging 配置`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}));I(()=>S(t,n,a))});let s=ot().content.cloneNode(!0),l=s.firstChild,u=l.childNodes[0],f=u.parentNode,p=l.childNodes[1],m=p.parentNode;n.appendChild(s);let h=L(f);d(h,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`保存表单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),f.insertBefore(h,u);let g=L(m);return d(g,Y,()=>({type:`outlined`,onClick:()=>e.resetFields(),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`重置`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),m.insertBefore(g,p),n}))})),s.insertBefore(h,a);let g=M(``);u.insertBefore(g,l),u.removeChild(l),O(g,()=>n.value);let _=M(``);return m.insertBefore(_,p),m.removeChild(p),O(_,()=>r.value),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{})))},Nt=()=>{let[e]=Q.useForm(),n=Q.useWatch(`role`,e)??`viewer`,r=Q.useWatch(`region`,e)??`cn-hz`,i=Q.useWatch(`notes`,e)??``,a=t(`等待实例方法操作。`);return m(()=>H(P(()=>{let t=z(),s=bt().content.cloneNode(!0),l=s.firstChild,u=l.childNodes[0],p=u.parentNode,m=l.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],h=m.parentNode,g=l.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],_=g.parentNode,y=l.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],b=y.parentNode,C=l.childNodes[1].childNodes[3].childNodes[0],w=C.parentNode;t.appendChild(s);let E=L(p);return d(E,Q,()=>({form:e,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{a.value=`submit()
`+$(e)},onFinishFailed:e=>{a.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:f(t=>P(n=>{let r=z(),i=st().content.cloneNode(!0),s=i.firstChild,l=s.childNodes[0],u=l.parentNode,f=s.childNodes[1],p=f.parentNode;r.appendChild(i),K(()=>{let e=T(Q.Item,()=>({form:t,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>c(X,()=>({...e,placeholder:`viewer / editor / admin`}))}));I(()=>S(e,u,l))}),K(()=>{let e=T(Q.Item,()=>({form:t,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>c(X,()=>({...e,placeholder:`cn-hz`}))}));I(()=>S(e,p,f))});let m=G(`rue:component:anchor`);x(r,m),K(()=>{let e=T(Q.Item,()=>({form:t,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>c(X,()=>({...e,placeholder:`写入审批说明或 rollout 策略`}))}));I(()=>S(e,r,m))});let h=ct().content.cloneNode(!0),g=h.firstChild,_=g.childNodes[0],v=_.parentNode,y=g.childNodes[1],b=y.parentNode,C=g.childNodes[2],w=C.parentNode,E=g.childNodes[3],D=E.parentNode,O=g.childNodes[4],k=O.parentNode,A=g.childNodes[5],N=A.parentNode;r.appendChild(h);let P=L(v);d(P,Y,()=>({size:`sm`,onClick:()=>{e.setFieldValue(`role`,`editor`),a.value=`setFieldValue('role', 'editor')`},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`设为 editor`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),v.insertBefore(P,_);let F=L(b);d(F,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),a.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`填充预设`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(F,y);let ee=L(w);d(ee,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>{e.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),a.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`填入异常值`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),w.insertBefore(ee,C);let R=L(D);d(R,Y,()=>({size:`sm`,type:`text`,onClick:()=>{e.resetFields(),a.value=`resetFields()`},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`恢复初始值`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),D.insertBefore(R,E);let te=L(k);d(te,Y,()=>({size:`sm`,color:`primary`,onClick:()=>{e.submit()},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`程序化提交`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),k.insertBefore(te,O);let B=L(N);return d(B,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>{e.validateFields().then(e=>{a.value=`validateFields()
`+$(e)}).catch(e=>{a.value=`validateFields() failed
`+$(e.errorFields)})},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`validateFields`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),N.insertBefore(B,A),r}))})),p.insertBefore(E,u),K(()=>{let e=String(n);I(()=>S(e,h,m))}),K(()=>{let e=String(r);I(()=>S(e,_,g))}),v(b,y,()=>{let e=String(i);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),K(()=>{let e=a.value;I(()=>S(e,w,C))}),t},!0),e=>J(()=>{})))},Pt=()=>{let[n]=Q.useForm(),r=Q.useWatch(`password`,n)??``,i=Q.useWatch(`confirm`,n)??``,a=Q.useWatch(`website`,n)??``,s=t(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`);return m(()=>H(o(Object.assign(t=>{let l=xt().content.cloneNode(!0).firstChild,u=l.childNodes[0],p=u.parentNode,m=l.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],h=m.parentNode,g=l.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],_=g.parentNode,y=l.childNodes[1].childNodes[3].childNodes[0],b=y.parentNode,x=L(p);d(x,Q,()=>({form:n,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:f(e=>P(t=>{let r=z(),i=st().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],l=s.parentNode,u=a.childNodes[1],f=u.parentNode;r.appendChild(i),K(()=>{let t=T(Q.Item,()=>({form:e,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>c(X,()=>({...e,placeholder:`release-admin`}))}));I(()=>S(t,l,s))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>c(X,()=>({...e,placeholder:`https://prod.rue.dev`}))}));I(()=>S(t,f,u))});let p=st().content.cloneNode(!0),m=p.firstChild,h=m.childNodes[0],g=h.parentNode,_=m.childNodes[1],v=_.parentNode;r.appendChild(p),K(()=>{let t=T(Q.Item,()=>({form:e,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>c(X,()=>({...e,placeholder:`至少 8 位`}))}));I(()=>S(t,g,h))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>c(X,()=>({...e,placeholder:`再次输入密码`}))}));I(()=>S(t,v,_))});let y=ot().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[0],C=x.parentNode,w=b.childNodes[1],E=w.parentNode;r.appendChild(y);let D=L(C);d(D,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`执行校验`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),C.insertBefore(D,x);let O=L(E);return d(O,Y,()=>({type:`outlined`,onClick:()=>n.resetFields(),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`清空状态`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),E.insertBefore(O,w),r}))})),p.insertBefore(x,u),v(h,m,()=>r&&i?{__rue_compiled_branch_key:!0,create:()=>e(()=>r===i?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=M(`已匹配`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未匹配`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`等待输入`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),v(_,g,()=>a?{__rue_compiled_branch_key:!0,create:()=>e(()=>String(a).startsWith(`https://`)?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=M(`格式建议通过`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`建议补上 https://`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))})}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let C=M(``);return b.insertBefore(C,y),b.removeChild(y),O(C,()=>s.value),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{})))},Ft=()=>{let[e]=Q.useForm(),n={issueId:`2048`,slug:`release-planning`,branch:`main`},r=Q.useWatch(`issueId`,e)??``,i=Q.useWatch(`slug`,e)??``,a=Q.useWatch(`branch`,e)??``,s=t($(n));return m(()=>H(o(Object.assign(t=>{let l=St().content.cloneNode(!0).firstChild,u=l.childNodes[0],p=u.parentNode,m=l.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],h=m.parentNode,g=l.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],_=g.parentNode,y=l.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],b=y.parentNode,C=l.childNodes[1].childNodes[3].childNodes[0],w=C.parentNode,E=L(p);d(E,Q,()=>({form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:n,onValuesChange:(e,t)=>{s.value=$(t)},onFinish:e=>{s.value=`提交成功
`+$(e)},render:f(t=>P(n=>{let r=z(),i=G(`rue:component:anchor`);x(r,i),K(()=>{let e=T(Q.Item,()=>({form:t,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>c(X,()=>({...e,placeholder:`#2048`}))}));I(()=>S(e,r,i))});let a=G(`rue:component:anchor`);x(r,a),K(()=>{let e=T(Q.Item,()=>({form:t,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>c(X,()=>({...e,placeholder:`release-planning`}))}));I(()=>S(e,r,a))});let s=G(`rue:component:anchor`);x(r,s),K(()=>{let e=T(Q.Item,()=>({form:t,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>c(X,()=>({...e,placeholder:`main / release/v1-2`}))}));I(()=>S(e,r,s))});let l=ot().content.cloneNode(!0),u=l.firstChild,f=u.childNodes[0],p=f.parentNode,m=u.childNodes[1],h=m.parentNode;r.appendChild(l);let g=L(p);d(g,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`应用转换`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(g,f);let _=L(h);return d(_,Y,()=>({type:`outlined`,onClick:()=>{e.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`填充示例`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),h.insertBefore(_,m),r}))})),p.insertBefore(E,u),v(h,m,()=>{let e=String(r);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(_,g,()=>{let e=String(i);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(b,y,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`空`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}});let D=M(``);return w.insertBefore(D,C),w.removeChild(C),O(D,()=>s.value),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{})))},It=()=>{let[e]=Q.useForm(),n=!!Q.useWatch(`enableCanary`,e),r=Q.useWatch(`publishMode`,e)??`manual`,i=Q.useWatch(`batchSize`,e)??``,a=Q.useWatch(`approveBy`,e)??``,s=t(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`);return m(()=>H(P(()=>{let t=z(),l=Ct().content.cloneNode(!0),u=l.firstChild,p=u.childNodes[0],m=p.parentNode,h=u.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],g=h.parentNode,_=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],y=_.parentNode,b=u.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[1],C=b.parentNode,w=u.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[4],E=w.parentNode,D=u.childNodes[1].childNodes[3].childNodes[0],O=D.parentNode;t.appendChild(l);let k=L(m);return d(k,Q,()=>({form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{s.value=`提交成功
`+$(e)},render:f(t=>P(n=>{let r=z(),i=st().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],l=s.parentNode,u=a.childNodes[1],f=u.parentNode;r.appendChild(i),K(()=>{let e=T(Q.Item,()=>({form:t,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`gateway`}))}));I(()=>S(e,l,s))}),K(()=>{let e=T(Q.Item,()=>({form:t,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`manual / auto`}))}));I(()=>S(e,f,u))});let p=G(`rue:component:anchor`);x(r,p),K(()=>{let e=T(Q.Item,()=>({form:t,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>c(ae,()=>({...e,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`开启 canary rollout`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}));I(()=>S(e,r,p))});let m=G(`rue:component:anchor`);x(r,m);let h=T(Q.Item,()=>({shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:e=>e.enableCanary?P(()=>{let n=z(),r=rt().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[1].childNodes[0],s=a.parentNode,l=i.childNodes[1].childNodes[1],u=l.parentNode,d=i.childNodes[2],f=d.parentNode;return n.appendChild(r),K(()=>{let e=T(Q.Item,()=>({form:t,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`10%`}))}));I(()=>S(e,s,a))}),K(()=>{let e=T(Q.Item,()=>({form:t,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`release-ops`}))}));I(()=>S(e,u,l))}),v(f,d,()=>e.publishMode===`auto`?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=N(`div`,e);return t.className=`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`,j(t,M(`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),n},!0):o(Object.assign(e=>{let t=N(`div`,e);return t.className=`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`,j(t,M(`未开启灰度发布，额外字段不会挂载，也不会参与校验。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}));S(h,r,m);let g=ot().content.cloneNode(!0),_=g.firstChild,y=_.childNodes[0],b=y.parentNode,C=_.childNodes[1],w=C.parentNode;r.appendChild(g);let E=L(b);d(E,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`保存发布策略`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(E,y);let D=L(w);return d(D,Y,()=>({type:`outlined`,onClick:()=>{e.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`套用 canary 模板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),w.insertBefore(D,C),r}))})),m.insertBefore(k,p),v(g,h,()=>n?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=M(`true`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`false`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),K(()=>{let e=String(r);I(()=>S(e,y,_))}),v(C,b,()=>{let e=String(i);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未挂载`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(E,w,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未挂载`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),K(()=>{let e=s.value;I(()=>S(e,O,D))}),t},!0),e=>J(()=>{})))},Lt=()=>{let[e]=Q.useForm(),n=String(Q.useWatch(`host`,e)??`api.rue.dev`),r=String(Q.useWatch(`path`,e)??`release-hooks`),i=t(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`),a=`https://${n}:443/hooks/${r?r.replace(/^\/+/,``):``}`;return m(()=>H(P(()=>{let t=z(),n=wt().content.cloneNode(!0),r=n.firstChild,s=r.childNodes[0],c=s.parentNode,l=r.childNodes[1].childNodes[2].childNodes[1].childNodes[0],u=l.parentNode,p=r.childNodes[1].childNodes[4].childNodes[0],m=p.parentNode;t.appendChild(n);let h=L(c);return d(h,Q,()=>({form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{i.value=`保存复合控件
`+$(e)},render:f(t=>P(n=>{let r=z(),i=lt().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0].childNodes[1].childNodes[1],c=s.parentNode,l=a.childNodes[1].childNodes[1].childNodes[1],u=l.parentNode;r.appendChild(i),K(()=>{let e=T(Q.Item,()=>({form:t,name:`host`,noStyle:!0,render:e=>o(Object.assign(t=>{let n=it().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=L(i);return d(a,X,()=>({...e,placeholder:`api.rue.dev`})),i.insertBefore(a,r),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}));I(()=>S(e,c,s))}),K(()=>{let e=T(Q.Item,()=>({form:t,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>o(Object.assign(t=>{let n=it().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode,a=L(i);return d(a,X,()=>({...e,placeholder:`release-hooks`})),i.insertBefore(a,r),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}));I(()=>S(e,u,l))});let f=ot().content.cloneNode(!0),p=f.firstChild,m=p.childNodes[0],h=m.parentNode,g=p.childNodes[1],_=g.parentNode;r.appendChild(f);let v=L(h);d(v,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`保存复合地址`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),h.insertBefore(v,m);let y=L(_);return d(y,Y,()=>({type:`outlined`,onClick:()=>{e.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`填入 staging`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),_.insertBefore(y,g),r}))})),c.insertBefore(h,s),K(()=>{let e=a;I(()=>S(e,u,l))}),K(()=>{let e=i.value;I(()=>S(e,m,p))}),t},!0),e=>J(()=>{})))},Rt=()=>{let[e]=Q.useForm(),n=t(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`),r=(t,r)=>{e.scrollToField(t,{block:`center`,focus:!0}),n.value=`scrollToField -> ${r}`};return m(()=>H(o(Object.assign(t=>{let i=Tt().content.cloneNode(!0).firstChild,a=i.childNodes[1].childNodes[0],s=i.childNodes[0].childNodes[2].childNodes[0],l=s.parentNode,u=i.childNodes[0].childNodes[2].childNodes[1],p=u.parentNode,m=i.childNodes[0].childNodes[2].childNodes[2],h=m.parentNode,g=i.childNodes[0].childNodes[2].childNodes[3],_=g.parentNode,v=i.childNodes[0].childNodes[3].childNodes[0],y=v.parentNode,b=i.childNodes[1].childNodes[0].childNodes[0],x=b.parentNode;a.className=`overflow-y-auto overscroll-contain pr-2`,Object.assign(a.style,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let C=L(l);d(C,Y,()=>({size:`sm`,onClick:()=>r(`releaseName`,`发布名称`),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`滚到发布名称`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(C,s);let w=L(p);d(w,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>r([`strategy`,`batchSize`],`灰度批次`),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`滚到灰度批次`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(w,u);let E=L(h);d(E,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>r([`observability`,`dashboard`],`监控看板`),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`滚到监控看板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),h.insertBefore(E,m);let D=L(_);d(D,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>r([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`滚到回滚单号`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),_.insertBefore(D,g);let k=M(``);y.insertBefore(k,v),y.removeChild(v),O(k,()=>n.value);let A=L(x);return d(A,Q,()=>({form:e,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{n.value=`提交成功
`+$(e)},onFinishFailed:e=>{n.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:f(e=>P(t=>{let n=z(),i=ut().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[1].childNodes[0],l=s.parentNode,u=a.childNodes[1].childNodes[1],f=u.parentNode,p=a.childNodes[1].childNodes[2],m=p.parentNode,h=a.childNodes[1].childNodes[3],g=h.parentNode;n.appendChild(i),K(()=>{let t=T(Q.Item,()=>({form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`2026.05 release`}))}));I(()=>S(t,l,s))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`rue-design`}))}));I(()=>S(t,f,u))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`staging`}))}));I(()=>S(t,m,p))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`release-captain`}))}));I(()=>S(t,g,h))});let _=dt().content.cloneNode(!0),v=_.firstChild,y=v.childNodes[1].childNodes[0],b=y.parentNode,x=v.childNodes[1].childNodes[1],C=x.parentNode,w=v.childNodes[1].childNodes[2],E=w.parentNode,D=v.childNodes[1].childNodes[3],O=D.parentNode;n.appendChild(_),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`10%`}))}));I(()=>S(t,b,y))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`15m`}))}));I(()=>S(t,C,x))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`error rate > 2%`}))}));I(()=>S(t,E,w))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`30m`}))}));I(()=>S(t,O,D))});let k=ft().content.cloneNode(!0),A=k.firstChild,N=A.childNodes[1].childNodes[0],P=N.parentNode,F=A.childNodes[1].childNodes[1],ee=F.parentNode,R=A.childNodes[1].childNodes[2],te=R.parentNode,B=A.childNodes[1].childNodes[3],V=B.parentNode;n.appendChild(k),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`Grafana release board`}))}));I(()=>S(t,P,N))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`#release-alerts`}))}));I(()=>S(t,ee,F))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`ops-squad`}))}));I(()=>S(t,te,R))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`qa-squad`}))}));I(()=>S(t,V,B))});let H=pt().content.cloneNode(!0),U=H.firstChild,W=U.childNodes[1].childNodes[0],G=W.parentNode,ne=U.childNodes[1].childNodes[1],re=ne.parentNode,J=U.childNodes[1].childNodes[2],ie=J.parentNode,ae=U.childNodes[1].childNodes[3],Z=ae.parentNode;n.appendChild(H),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>c(X,()=>({...e,placeholder:`RB-2026-0514`}))}));I(()=>S(t,G,W))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`rollback-owner`}))}));I(()=>S(t,re,ne))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`20m`}))}));I(()=>S(t,ie,J))}),K(()=>{let t=T(Q.Item,()=>({form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`platform / qa / support`}))}));I(()=>S(t,Z,ae))});let oe=mt().content.cloneNode(!0),se=oe.firstChild,ce=se.childNodes[0].childNodes[1].childNodes[0],le=ce.parentNode,ue=se.childNodes[0].childNodes[1].childNodes[1],de=ue.parentNode;n.appendChild(oe);let fe=L(le);d(fe,Y,()=>({type:`outlined`,onClick:()=>r([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`滚到回滚单号`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),le.insertBefore(fe,ce);let pe=L(de);return d(pe,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`提交长表单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),de.insertBefore(pe,ue),n}))})),x.insertBefore(A,b),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{})))},zt=()=>{let[t]=Q.useForm(),n=Q.useWatch(`members`,t)??[];return H(P(()=>{let r=z(),i=Et().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0].childNodes[0],l=s.parentNode,u=a.childNodes[0].childNodes[1].childNodes[1].childNodes[0],m=u.parentNode,h=a.childNodes[0].childNodes[1].childNodes[2].childNodes[0],g=h.parentNode;r.appendChild(i);let _=L(l);return d(_,Q,()=>({form:t,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:f(t=>T(Q.List,()=>({form:t,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(n,r,i)=>P(a=>{let s=at().content.cloneNode(!0).firstChild,l=s.childNodes[0],u=l.parentNode,f=s.childNodes[1],m=f.parentNode,h=s.childNodes[2].childNodes[0],g=h.parentNode,_=s.childNodes[2].childNodes[1],y=_.parentNode,b=s.childNodes[3],C=b.parentNode;v(u,l,()=>n.length===0?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=N(`div`,e);return t.className=`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`,j(t,M(`暂无成员，点击下方按钮即可追加一组字段。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),K(()=>{let i=n.map((i,a)=>P(()=>{let s=z(),l=W(`div`,s);x(s,l),p(l,`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`);let u=W(`div`,l);x(l,u),p(u,`mb-4 flex flex-wrap items-center justify-between gap-3`);let f=W(`div`,u);x(u,f);let m=W(`div`,f);x(f,m),p(m,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),x(m,F(`Member `));let h=E(m);x(m,h),K(()=>{V(h,a+1)});let g=W(`div`,f);x(f,g),p(g,`mt-1 text-sm font-medium text-base-content`),x(g,F(`审批成员 `));let _=E(g);x(g,_),K(()=>{V(_,a+1)});let v=W(`div`,u);x(u,v),p(v,`flex flex-wrap gap-2`),e(()=>a>0?{__rue_compiled_branch_key:!0,create:()=>c(Y,()=>({size:`sm`,type:`outlined`,onClick:()=>r.move(i.name,i.name-1),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`上移`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(v),e(()=>a<n.length-1?{__rue_compiled_branch_key:!0,create:()=>c(Y,()=>({size:`sm`,type:`outlined`,onClick:()=>r.move(i.name,i.name+1),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`下移`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=z();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(v),d(v,Y,()=>({size:`sm`,type:`text`,onClick:()=>r.remove(i.name),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`删除`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}));let y=W(`div`,l);x(l,y),p(y,`grid gap-4 md:grid-cols-2`);let b=G(`rue:component:anchor`);x(y,b),K(()=>{let e=T(Q.Item,()=>({form:t,layout:`vertical`,name:[`members`,i.name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`输入成员名称`}))}));I(()=>S(e,y,b))});let C=G(`rue:component:anchor`);return x(y,C),K(()=>{let e=T(Q.Item,()=>({form:t,layout:`vertical`,name:[`members`,i.name,`role`],label:`职责`,rules:[{required:!0}],render:e=>c(X,()=>({...e,placeholder:`Owner / Reviewer / QA`}))}));I(()=>S(e,y,C))}),s},!0));I(()=>S(i,m,f))});let w=L(g);d(w,Y,()=>({size:`sm`,color:`primary`,onClick:()=>{r.add({name:`新成员 `+String(n.length+1),role:`QA`})},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`新增成员`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),g.insertBefore(w,h);let D=L(y);return d(D,Y,()=>({size:`sm`,type:`outlined`,onClick:()=>r.add({name:`Head reviewer`,role:`QA`},0),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`头部插入`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),y.insertBefore(D,_),K(()=>{let e=i.errors.length>0||i.warnings.length>0?T(Q.ErrorList,()=>({errors:i.errors,warnings:i.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`})):``;I(()=>S(e,C,b))}),s})})))})),l.insertBefore(_,s),K(()=>{let e=n.length;I(()=>S(e,m,u))}),K(()=>{let e=n.length>0?n.map((e,t)=>P(()=>{let n=z(),r=W(`div`,n);x(n,r),p(r,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let i=W(`div`,r);x(r,i),p(i,`text-xs uppercase tracking-[0.22em] text-base-content/45`),x(i,F(`成员 `));let a=E(i);x(i,a),K(()=>{V(a,t+1)});let o=W(`div`,r);x(r,o),p(o,`mt-2 text-base font-medium text-base-content`);let s=E(o);x(o,s),K(()=>{V(s,e?.name?String(e.name):`未命名成员`)});let c=W(`div`,r);x(r,c),p(c,`mt-1 text-xs text-base-content/55`);let l=E(c);return x(c,l),K(()=>{V(l,e?.role?String(e.role):`未分配职责`)}),n},!0)):o(Object.assign(e=>{let t=N(`div`,e);return t.className=`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`,j(t,M(`当前列表为空。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}));I(()=>S(e,g,h))}),r},!0),e=>J(()=>{}))},Bt=()=>{let[e]=Q.useForm(),n=Q.useWatch(`keyword`,e)??``,r=Q.useWatch(`assignee`,e)??``,i=Q.useWatch(`repository`,e)??``,a=Q.useWatch(`reviewer`,e)??``,s=!!Q.useWatch(`includeDrafts`,e),l=t(`尚未执行检索。`);return m(()=>H(o(Object.assign(t=>{let u=Dt().content.cloneNode(!0).firstChild,p=u.childNodes[0],m=p.parentNode,h=u.childNodes[1].childNodes[0].childNodes[2].childNodes[0],g=h.parentNode,_=u.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],y=_.parentNode,b=u.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],x=b.parentNode,C=u.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],w=C.parentNode,E=u.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[3],D=E.parentNode,k=u.childNodes[1].childNodes[0].childNodes[3].childNodes[3].childNodes[1],A=k.parentNode,N=u.childNodes[1].childNodes[1].childNodes[1].childNodes[0],F=N.parentNode,ee=L(m);d(ee,Q,()=>({form:e,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{l.value=$(e)},render:f(t=>P(n=>{let r=z(),i=ht().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],l=s.parentNode,u=a.childNodes[1],f=u.parentNode,p=a.childNodes[2],m=p.parentNode,h=a.childNodes[3],g=h.parentNode;r.appendChild(i),K(()=>{let e=T(Q.Item,()=>({form:t,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>c(X,()=>({...e,placeholder:`搜索 issue / 页面 / API`}))}));I(()=>S(e,l,s))}),K(()=>{let e=T(Q.Item,()=>({form:t,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>c(X,()=>({...e,placeholder:`rue-design`}))}));I(()=>S(e,f,u))}),K(()=>{let e=T(Q.Item,()=>({form:t,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>c(X,()=>({...e,placeholder:`team-design`}))}));I(()=>S(e,m,p))}),K(()=>{let e=T(Q.Item,()=>({form:t,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>c(X,()=>({...e,placeholder:`infra`}))}));I(()=>S(e,g,h))});let _=gt().content.cloneNode(!0),v=_.firstChild,y=v.childNodes[0],b=y.parentNode,x=v.childNodes[1].childNodes[0],C=x.parentNode,w=v.childNodes[1].childNodes[1],E=w.parentNode,D=v.childNodes[1].childNodes[2],O=D.parentNode;r.appendChild(_),K(()=>{let e=T(Q.Item,()=>({form:t,name:`includeDrafts`,valuePropName:`checked`,render:e=>c(ae,()=>({...e,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`包含草稿和实验分支`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}));I(()=>S(e,b,y))});let k=L(C);d(k,Y,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`执行搜索`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),C.insertBefore(k,x);let A=L(E);d(A,Y,()=>({type:`outlined`,onClick:()=>e.resetFields(),children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`清空条件`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),E.insertBefore(A,w);let N=L(O);return d(N,Y,()=>({type:`text`,onClick:()=>{e.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:(e,t,n)=>q(e,n,()=>o(Object.assign(e=>{let t=z();return j(t,M(`填入示例`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),O.insertBefore(N,D),r}))})),m.insertBefore(ee,p),v(g,h,()=>{let e=jt({keyword:String(n),repository:String(i),assignee:String(r),reviewer:String(a),includeDrafts:s});return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`暂无 query string`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(y,_,()=>{let e=String(n);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(x,b,()=>{let e=String(i);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(w,C,()=>{let e=String(r);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(D,E,()=>{let e=String(a);return e?{__rue_compiled_branch_key:e,create:()=>o(Object.assign(t=>{let n=M(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`未填写`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),v(A,k,()=>s?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=M(`是`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=M(`否`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let R=M(``);return F.insertBefore(R,N),F.removeChild(N),O(R,()=>l.value),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>J(()=>{})))},Vt=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Ht=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],Ut=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],Wt=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],Gt=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],Kt=()=>{let e=t(`preview`),r=t(`preview`),i=t(`preview`),a=t(`preview`),s=t(`preview`),l=t(`preview`),u=t(`preview`),p=t(`preview`),g=t(`preview`);return m(()=>H(c(Z,()=>({children:(t,m,_)=>q(t,_,()=>o(Object.assign(t=>{let o=z(),m=Ot().content.cloneNode(!0),_=m.firstChild,v=_.childNodes[4].childNodes[0],b=v.parentNode,x=_.childNodes[6],S=x.parentNode,C=_.childNodes[7],w=C.parentNode,T=_.childNodes[8],E=T.parentNode,D=_.childNodes[9],O=D.parentNode,k=_.childNodes[10],A=k.parentNode,j=_.childNodes[11],M=j.parentNode,N=_.childNodes[12],P=N.parentNode,F=_.childNodes[13],I=F.parentNode,ee=_.childNodes[14],R=ee.parentNode,te=_.childNodes[17].childNodes[0],B=te.parentNode,V=_.childNodes[20],H=V.parentNode,U=_.childNodes[21],W=U.parentNode,G=_.childNodes[22],ne=G.parentNode;o.appendChild(m);let re=[];K(()=>{re=n(b,v,re,Wt||[],(e,t)=>e.title,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>c(At,()=>({eyebrow:n.get().eyebrow,title:n.get().title,description:n.get().description,items:n.get().items}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let J=L(S);d(J,oe,()=>({title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:e,preview:f(()=>c(Mt,()=>({}))),code:`<Form
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
`})),S.insertBefore(J,x);let ie=L(w);d(ie,oe,()=>({title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:r,preview:f(()=>c(Nt,()=>({}))),code:`const InstanceMethodsShowcase: FC = () => {
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
`})),w.insertBefore(ie,C);let Y=L(E);d(Y,oe,()=>({title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:i,preview:f(()=>c(Pt,()=>({}))),code:`const [form] = Form.useForm()

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
`})),E.insertBefore(Y,T);let ae=L(O);d(ae,oe,()=>({title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:a,preview:f(()=>c(Ft,()=>({}))),code:`<Form.Item
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
`})),O.insertBefore(ae,D);let X=L(A);d(X,oe,()=>({title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:s,preview:f(()=>c(It,()=>({}))),code:`<Form.Item
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
`})),A.insertBefore(X,k);let Z=L(M);d(Z,oe,()=>({title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:l,preview:f(()=>c(Lt,()=>({}))),code:`const [form] = Form.useForm()

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
`})),M.insertBefore(Z,j);let se=L(P);d(se,oe,()=>({title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:u,preview:f(()=>c(zt,()=>({}))),code:`const DynamicListShowcase: FC = () => {
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
`})),P.insertBefore(se,N);let ce=L(I);d(ce,oe,()=>({title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:p,preview:f(()=>c(Rt,()=>({}))),code:`const LongFormScrollShowcase: FC = () => {
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
`})),I.insertBefore(ce,F);let le=L(R);d(le,oe,()=>({title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:g,preview:f(()=>c(Bt,()=>({}))),code:`const [form] = Form.useForm()

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
`})),R.insertBefore(le,ee);let ue=[];K(()=>{ue=n(B,te,ue,Gt||[],(e,t)=>e.title,(e,t)=>{let n=y(e),r=y(t);return h((e,t,r)=>q(e,r,()=>c(At,()=>({eyebrow:n.get().eyebrow,title:n.get().title,description:n.get().description}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let de=L(H);d(de,kt,()=>({title:`Form`,rows:Vt})),H.insertBefore(de,V);let fe=L(W);d(fe,kt,()=>({title:`Form.Item`,rows:Ht})),W.insertBefore(fe,U);let pe=L(ne);return d(pe,kt,()=>({title:`Form.List and Hooks`,rows:Ut})),ne.insertBefore(pe,G),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})))})),e=>J(()=>{})))};export{Kt as default};