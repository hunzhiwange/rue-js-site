import{B as e,Bt as t,Ct as n,Dt as r,F as i,Ht as a,I as o,It as s,Jt as c,Lt as l,P as u,Qt as d,Rt as f,St as p,Ut as m,V as h,Vt as g,W as _,Wt as v,X as y,Y as b,_n as x,at as S,ct as C,dn as w,dt as T,en as E,et as D,f as O,fn as k,g as A,gn as j,h as M,hn as N,in as P,m as F,mn as I,mt as L,nt as R,on as ee,p as z,pn as B,qt as V,sn as H,vn as te,yn as U,yt as ne,z as W,zt as G}from"./rue-runtime-BWbIfNT8.js";import{t as K}from"./button-ClgxZHRf.js";import{t as re}from"./checkbox-CUyCFrI7.js";import{t as q}from"./input-DaoBhQRM.js";import{r as ie}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as J}from"./PreviewBlock-B_T3fLnN.js";var ae=U(`<ul><!--rue:text-hole:0--><!--rue:text-hole:1--></ul>`),oe=U(`<input type="checkbox" class="checkbox">`),se=U(`<input class="input">`),ce=U(`<div><!--rue:text-hole:0--><div><div class="min-w-0 flex-1"><!--rue:opaque-hole:1--></div><!--rue:text-hole:2--></div><!--rue:text-hole:3--><!--rue:text-hole:4--></div>`),le=U(`<div><!--rue:text-hole:0--></div>`),ue=U(`<div data-rue-form-list-shell="true"><!--rue:text-hole:0--></div>`),de=U(`<div data-rue-form="true"><!--rue:text-hole:0--></div>`),fe=U(`<section data-rue-form="true"><!--rue:text-hole:0--></section>`),pe=U(`<form data-rue-form="true"><!--rue:text-hole:0--></form>`),me=0,he={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},ge=(...e)=>e.filter(Boolean).join(` `),_e=e=>!!e&&typeof e==`object`,Y=e=>{if(Array.isArray(e))return e.map(e=>Y(e));if(_e(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=Y(e[n])}),t}return e},X=e=>e==null?[]:Array.isArray(e)?[...e]:[e],ve=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),ye=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),be=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),xe=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},Z=(e,t,n)=>{if(t.length===0)return Y(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?Y(n):Z(o[r],i,n),o},Se=(e,t)=>{if(t.length===0)return;if(!_e(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=Se(i[n],r),i)},Ce=(e,t)=>{if(!_e(t)&&!Array.isArray(t))return Y(t);if(Array.isArray(t))return t.map(e=>Y(e));let n=_e(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Ce(n[e],t[e])}),n},we=(e,t)=>Z({},e,t),Te=e=>e?Array.isArray(e)?e:[e]:[`onChange`],Ee=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,De=(e,t)=>{let n=Ee(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},Oe=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,ke=e=>{try{return new URL(e),!0}catch{return!1}},Ae=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&ke(e);default:return!0}},je=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??he.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??he.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??he.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??he.types?.[e.type??`string`]??"${label} 类型不正确";let a=Ee(t,e.type);return(r[a]??he[a]??{})[i??`len`]??"${label} 校验失败"},Me=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),Ne=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},Pe=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,Fe=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=Ne(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&Oe(n,e.type)?i=je(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=je(e,n,l,o,`whitespace`):!Oe(n,e.type)&&e.type&&!Ae(n,e.type)?i=je(e,n,l,o,`type`):!Oe(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=je(e,n,l,o,`pattern`):!Oe(n,e.type)&&e.len!==void 0?De(n,e.type)!==e.len&&(i=je(e,n,l,o,`len`)):!Oe(n,e.type)&&e.min!==void 0?De(n,e.type)<e.min&&(i=je(e,n,l,o,`min`)):!Oe(n,e.type)&&e.max!==void 0&&De(n,e.type)>e.max&&(i=je(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=Me(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},Ie=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,Le=()=>{let e=L(0),t=new Map,n=new Map,r=new Map,i=new Set,a=!1,o={},s={},c=!1,l=null,u={validateTrigger:[`onChange`],validateMessages:he},d=()=>{e.value+=1,Array.from(i).forEach(e=>e())},f=()=>{a||(a=!0,queueMicrotask(()=>{a=!1,d()}))},p=e=>{let t=ve(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},m=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${ve(t)}`:e.id},h=e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:Y(be(o,e))}},g=e=>{u.onFieldsChange?.([h(e)],E.getFieldsValue(!0))},_=(e,t,n=!0)=>{let r=p(e);Object.assign(r,t),n&&(g(e),d(),f())},v=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&ye(t,e))return n}return null},y=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return _(n,{errors:[],warnings:[],validating:!1}),null;_(n,{validating:!0});let a=await Fe(n,be(o,n),i,o,e.getLabel(),e.getMessageVariables(),u.validateMessages);return _(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},b=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||ye(n,e)||t.getDependencies().some(t=>ye(t,e))&&await y(t)}},x=async(e,t,n)=>{if(o=Z(o,e,t),n?.touch){let t=p(e);t.touched=!0}d(),g(e),n?.emitValues!==!1&&u.onValuesChange?.(we(e,t),E.getFieldsValue(!0));let r=v(e);r&&await y(r,n?.triggerName),await b(e),f()},S=e=>{let i=m(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let c=e.getNamePath();if(c&&c.length){let t=e.getInitialValue();!xe(s,c)&&t!==void 0&&(s=Z(s,c,t)),!xe(o,c)&&t!==void 0&&(o=Z(o,c,t)),p(c)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let s=e.getNamePath();!s||!s.length||Ie(e,u.preserve)||(o=Se(o,s),r.delete(ve(s)),d())}},C=e=>!c&&(s=Y(e??{}),o=Y(e??{}),c=!0,!0),w=async e=>{let n=e?.map(e=>X(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=m(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>ye(i,e)))continue;let o=await y(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:E.getFieldsValue(!0),errorFields:r,outOfDate:!1};return E.getFieldsValue(!0)},T=(e,t)=>{let n=X(e),r=u.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>{let t=typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g,`\\$1`);return l?.querySelector(`#${t}`)}).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},E={getFieldValue(t){return e.value,Y(be(o,X(t)))},getFieldsValue(t){return e.value,t===!0||t==null?Y(o):t.reduce((e,t)=>{let n=X(t);return Z(e,n,be(o,n))},{})},setFieldValue(e,t){x(X(e),t,{emitValues:!1})},setFieldsValue(e){o=Ce(o,e),d()},resetFields(e){if(!e?.length){o=Y(s),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),d();return}e.forEach(e=>{let t=X(e),n=be(s,t);o=n===void 0?Se(o,t):Z(o,t,n);let r=p(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),d()},validateFields:w,submit(){w().then(e=>{u.onFinish?.(e)}).catch(e=>{if(u.onFinishFailed?.(e),u.scrollToFirstError&&e.errorFields[0]){let t=u.scrollToFirstError===!0?{block:`center`}:u.scrollToFirstError;T(e.errorFields[0].name,t)}})},scrollToField:T,isFieldTouched(e){return p(X(e)).touched},getFieldError(e){return[...p(X(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=m(t);return!e.has(n)&&(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=X(e),n=p(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){u=e},ensureInitialized:C,registerField:S,getMeta:p,validateFieldByPath(e,t){let n=v(e);return n?y(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return x(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return x(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return u.validateTrigger},setRootElement(e){l=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){d()}}};return E},Re=(t,n,r)=>{let i=_(W(t,`className`)),s=_(W(t,`errors`)),c=_(W(t,`style`)),l=_(W(t,`warnings`));return o(a(()=>{let e=C(()=>[...s.get()??[],...l.get()??[]].filter(e=>e!=null));return e.get(),e.get().length?{__rue_compiled_branch_key:1,create:()=>v(e=>{let t=ae().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],a=r.parentNode,o=t.childNodes[1],u=o.parentNode,d;P(()=>{let e=ge(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,i.get()),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,n.setAttribute(`class`,t))});let f;P(()=>{let e=c.get(),t=p(e);Object.is(f,t)||(f=t,n.style.cssText=t)});let m=[];V(()=>{let e=(s.get()??[])||[];m=M(a,r,m,e,(e,t)=>`error-${t}`,(e,t)=>{let n=_(e);return z((e,t,r)=>{let i=()=>b(e=>{let t=N(`li`,e);t.setAttribute(`class`,`text-error`);let r=j(``);return k(t,r),y(r,()=>n.get()),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),H(()=>O(m));let h=[];return V(()=>{let e=(l.get()??[])||[];h=M(u,o,h,e,(e,t)=>`warning-${t}`,(e,t)=>{let n=_(e);return z((e,t,r)=>{let i=()=>b(e=>{let t=N(`li`,e);t.setAttribute(`class`,`text-warning`);let r=j(``);return k(t,r),y(r,()=>n.get()),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),H(()=>O(h)),[t,t]})}:{__rue_compiled_branch_key:0,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}}),e=>E(()=>{i.set(e.className),s.set(e.errors),c.set(e.style),l.set(e.warnings)}),()=>e(t))},ze=s(void 0),Be=()=>{let e=f(ze);if(!e)throw Error(`A form instance or ancestor Form is required`);return e},Ve=e=>[S(e??Le()).current],He=(e,t)=>{let n=t??Be();return C(()=>(n.__INTERNAL__.version.value,n.getFieldValue(e)))},Ue=(r,i,s)=>{let c=_(W(r,`children`)),l=_(W(r,`className`)),d=_(W(r,`colon`)),y=_(W(r,`control`)),b=_(W(r,`controlProps`)),x=_(W(r,`dependencies`)),S=_(W(r,`extra`)),T=_(W(r,`form`)),D=_(W(r,`getValueFromEvent`)),O=_(W(r,`getValueProps`)),A=_(W(r,`hasFeedback`)),M=_(W(r,`help`)),F=_(W(r,`hidden`)),L=_(W(r,`htmlFor`)),z=_(W(r,`initialValue`)),V=_(W(r,`label`)),te=_(W(r,`messageVariables`)),U=_(W(r,`name`)),ne=_(W(r,`noStyle`)),K=_(W(r,`normalize`)),re=_(W(r,`preserve`)),q=_(W(r,`render`)),ie=_(W(r,`required`)),J=_(W(r,`rules`)),ae=_(W(r,`shouldUpdate`)),le=_(W(r,`style`)),ue=_(W(r,`trigger`)),de=_(W(r,`validateTrigger`)),fe=_(W(r,`valuePropName`));return R(()=>o(a(()=>{let e=C(()=>T.get()??f(ze));e.get();let r=e,i=C(()=>U.get()==null?void 0:X(U.get()));i.get();let o=i,s=C(()=>L.get()??o.get()?.map(String).join(`__`));s.get();let _=s;if(o.get()&&!r.get())throw Error(`A named FormItem requires a form`);if(o.get()&&r.get()){let e=r.get().__INTERNAL__.registerField({id:`rue-form-item-${me++}`,kind:`item`,getNamePath:()=>o.get(),getRules:()=>J.get()??[],getRequired:()=>ie.get(),getLabel:()=>V.get(),getMessageVariables:()=>te.get(),getValidateTrigger:()=>Te(de.get()),getDependencies:()=>(x.get()??[]).map(X),getInitialValue:()=>z.get(),getPreserve:()=>re.get()});ee(e)}let E=C(()=>{if(!(!r.get()||!o.get()))return r.get().__INTERNAL__.version.value,r.get().getFieldValue(o.get())}),R=C(()=>{if(!r.get()||!o.get())return{errors:[],warnings:[],validating:!1};r.get().__INTERNAL__.version.value;let e=r.get().__INTERNAL__.getMeta(o.get());return{...e,errors:[...e.errors],warnings:[...e.warnings]}}),W=e=>{if(!r.get()||!o.get())return;let t=e.target,n=D.get()?D.get()(e):y.get()===`checkbox`||fe.get()===`checked`?t.checked:t.value,i=K.get()?K.get()(n,E.value,r.get().getFieldsValue(!0)):n;r.get().__INTERNAL__.updateValueFromControl(o.get(),i,{touch:!0,triggerName:ue.get()??`onChange`})},pe=()=>{r.get()&&o.get()&&Te(de.get()).includes(`onBlur`)&&r.get().__INTERNAL__.validateFieldByPath(o.get(),`onBlur`)},he=C(()=>fe.get()??`value`);he.get();let _e=he,Y=C(()=>ue.get()??`onChange`);Y.get();let ve=Y,ye=C(()=>q.get()?O.get()?.(E.value)??{[_e.get()]:E.value}:{});w(()=>ye.get());let be=ye,xe={id:_.get(),[ve.get()]:W,onBlur:pe};ve.get()===`onChange`&&_e.get()===`value`&&(xe.onInput=W),Object.keys(be.get()).forEach(e=>{Object.defineProperty(xe,e,{enumerable:!0,configurable:!0,get:()=>O.get()?.(E.value)?.[e]??(e===_e.get()?E.value:be.get()[e])})}),_e.get()in xe||Object.defineProperty(xe,_e.get(),{enumerable:!0,configurable:!0,get:()=>E.value});let Z={get errors(){return{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>R.value.errors}},get warnings(){return{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>R.value.warnings}},get validating(){return{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>R.value.validating}}},Se={},Ce,we=!1,Ee=C(()=>!o.get()&&r.get()&&q.get()?C(()=>{r.get().__INTERNAL__.version.value;let e=r.get().getFieldsValue(!0);return(!we||ae.get()===!0||ae.get()==null||typeof ae.get()==`function`&&ae.get()(Se,e))&&(Ce=q.get()(e,Z,r.get()),we=!0),Se=e,Ce}):void 0);Ee.get();let De=Ee,Oe=C(()=>o.get()&&q.get()?q.get()(xe,Z,r.get()):void 0);Oe.get();let ke=Oe,Ae=(e,r,i)=>a(()=>De.get()?{__rue_compiled_branch_key:0,create:()=>v(e=>{let n=I(),r=B(`rue:slot:anchor`);k(n,r),t({parent:n,before:r},()=>G(De.get().value),()=>({}));let i=j(``),a=j(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>q.get()?v(()=>{let e=I(),n=B(`rue:slot:anchor`);k(e,n),t({parent:e,before:n},()=>G(ke.get()),()=>({}));let r=j(``),i=j(``);return e.insertBefore(r,e.firstChild),e.appendChild(i),[e.firstChild,e.lastChild]}):y.get()===`checkbox`?v(e=>{let t=oe().content.cloneNode(!0).firstChild,r=t;n(r,()=>b.get(),[`id`,`type`,`className`,`checked`,`onChange`,`onBlur`,`__rue_static_template_id__`]);let i;P(()=>{let e=_.get();Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`id`):r.setAttribute(`id`,String(e)))}),r.setAttribute(`type`,`checkbox`),r.setAttribute(`class`,`checkbox`);let a;P(()=>{let e=!!E.value;Object.is(a,e)||(a=e,r.checked=e)});let o=e=>{let t=W;typeof t==`function`&&t(e)};r.addEventListener(`change`,o),H(()=>r.removeEventListener(`change`,o));let s=e=>{let t=pe;typeof t==`function`&&t(e)};return r.addEventListener(`focusout`,s),H(()=>r.removeEventListener(`focusout`,s)),[t,t]}):y.get()===`textarea`?v(e=>{let t=N(`textarea`,e);n(t,()=>b.get(),[`id`,`className`,`value`,`onInput`,`onChange`,`onBlur`]);let r;P(()=>{let e=_.get();Object.is(r,e)||(r=e,e==null||e===!1?t.removeAttribute(`id`):t.setAttribute(`id`,String(e)))}),t.setAttribute(`class`,`textarea`);let i;P(()=>{let e=E.value??``,n=e==null?``:String(e);Object.is(i,n)||(i=n,t.value=n)});let a=e=>{let t=W;typeof t==`function`&&t(e)};t.addEventListener(`input`,a),H(()=>t.removeEventListener(`input`,a));let o=e=>{let t=W;typeof t==`function`&&t(e)};t.addEventListener(`change`,o),H(()=>t.removeEventListener(`change`,o));let s=e=>{let t=pe;typeof t==`function`&&t(e)};return t.addEventListener(`focusout`,s),H(()=>t.removeEventListener(`focusout`,s)),[t,t]}):y.get()===`input`?v(e=>{let t=se().content.cloneNode(!0).firstChild,r=t;n(r,()=>b.get(),[`id`,`className`,`value`,`onInput`,`onChange`,`onBlur`,`__rue_static_template_id__`]);let i;P(()=>{let e=_.get();Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`id`):r.setAttribute(`id`,String(e)))}),r.setAttribute(`class`,`input`);let a;P(()=>{let e=E.value??``,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.value=t)});let o=e=>{let t=W;typeof t==`function`&&t(e)};r.addEventListener(`input`,o),H(()=>r.removeEventListener(`input`,o));let s=e=>{let t=W;typeof t==`function`&&t(e)};r.addEventListener(`change`,s),H(()=>r.removeEventListener(`change`,s));let c=e=>{let t=pe;typeof t==`function`&&t(e)};return r.addEventListener(`focusout`,c),H(()=>r.removeEventListener(`focusout`,c)),[t,t]}):v(e=>{let n=I(),r=B(`rue:compiled-slot`);k(n,r),t({parent:n,before:r},()=>c.get(),()=>({}));let i=j(``),a=j(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})});return ne.get()?{__rue_compiled_branch_key:3,__rue_compiled_branch_refresh:!0,create:()=>u(Ae,()=>({}))}:{__rue_compiled_branch_key:4,__rue_compiled_branch_refresh:!0,create:()=>v(e=>{let n=ce().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[1],o=n.childNodes[0],c=o.parentNode,f=n.childNodes[1].childNodes[0].childNodes[0],_=f.parentNode,y=n.childNodes[1].childNodes[1],b=y.parentNode,x=n.childNodes[2],C=x.parentNode,w=n.childNodes[3],T=w.parentNode,E;P(()=>{let e=ge(`rue-form-item grid content-start self-start gap-3`,F.get()?`hidden`:void 0,l.get()),t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,r.setAttribute(`class`,t))});let D;P(()=>{let e=le.get(),t=p(e);Object.is(D,t)||(D=t,r.style.cssText=t)});let O;P(()=>{let e=ge(`min-w-0 flex-1`,A.get()?`flex items-center gap-2`:void 0),t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,i.setAttribute(`class`,t))}),m(c,o,()=>V.get()==null?{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!0,create:()=>v(e=>{let n=N(`label`,e),r;P(()=>{let e=s.get();Object.is(r,e)||(r=e,e==null||e===!1?n.removeAttribute(`for`):n.setAttribute(`for`,String(e)))}),n.setAttribute(`class`,`font-medium`);let i=N(`span`,n);k(n,i);let o=B(`rue:compiled-slot`);k(i,o),t({parent:i,before:o},()=>G(V.get()),()=>({}));let c=B(`rue:compiled-slot`);return k(n,c),t({parent:n,before:c},()=>d.get()===!1?(e,t,n)=>{let r=()=>h(e=>{let t=j(``);return[t,t]});return e==null?r():g(e,n,r)}:(e,t,n)=>{let r=()=>h(e=>{let t=j(`:`);return[t,t]});return e==null?r():g(e,n,r)},()=>({})),a(()=>Pe(ie.get(),J.get())?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=N(`span`,e);return t.setAttribute(`class`,`text-error`),k(t,j(`*`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]})});let L=(e,t,n)=>{let r=()=>u(Ae,()=>({}));return e==null?r():g(e,n,r)},ee=f.nextSibling;return _.removeChild(f),t({parent:_,before:ee},()=>L,()=>({})),m(b,y,()=>A.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(`span`,e);return t.setAttribute(`data-rue-form-feedback`,`true`),t.setAttribute(`aria-hidden`,`true`),t.setAttribute(`class`,`inline-flex h-5 w-5 shrink-0 items-center justify-center leading-none`),a(()=>R.value.validating?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=j(`…`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>R.value.errors.length?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=j(`×`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`✓`);return[t,t]})})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}),m(C,x,()=>M.get()==null?{__rue_compiled_branch_key:!1,create:()=>u(Re,()=>({errors:R.value.errors,warnings:R.value.warnings}))}:{__rue_compiled_branch_key:!0,create:()=>v(e=>{let n=N(`div`,e),r=B(`rue:compiled-slot`);return k(n,r),t({parent:n,before:r},()=>G(M.get()),()=>({})),[n,n]})}),m(T,w,()=>S.get()==null?{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!0,create:()=>v(e=>{let n=N(`div`,e);n.setAttribute(`class`,`text-xs`);let r=B(`rue:compiled-slot`);return k(n,r),t({parent:n,before:r},()=>G(S.get()),()=>({})),[n,n]})}),[n,n]})}}),e=>E(()=>{c.set(e.children),l.set(e.className),d.set(e.colon),y.set(e.control),b.set(e.controlProps),x.set(e.dependencies),S.set(e.extra),T.set(e.form),D.set(e.getValueFromEvent),O.set(e.getValueProps),A.set(e.hasFeedback),M.set(e.help),F.set(e.hidden),L.set(e.htmlFor),z.set(e.initialValue),V.set(e.label),te.set(e.messageVariables),U.set(e.name),ne.set(e.noStyle),K.set(e.normalize),re.set(e.preserve),q.set(e.render),ie.set(e.required),J.set(e.rules),ae.set(e.shouldUpdate),le.set(e.style),ue.set(e.trigger),de.set(e.validateTrigger),fe.set(e.valuePropName)}),()=>e(r)))};function We(e,t){let n=e,r=X(t),i=()=>{let t=e.getFieldValue(r);return Array.isArray(t)?[...t]:[]};return{add(e,t){let a=i();a.splice(t??a.length,0,e??null),n.__INTERNAL__.updateListValue(r,a)},remove(e){let t=i();for(let n of(Array.isArray(e)?e:[e]).sort((e,t)=>t-e))n>=0&&n<t.length&&t.splice(n,1);n.__INTERNAL__.updateListValue(r,t)},move(e,t){let a=i();if(e<0||t<0||e>=a.length||t>=a.length)return;let[o]=a.splice(e,1);a.splice(t,0,o),n.__INTERNAL__.updateListValue(r,a)}}}var Q=Object.assign((n,r,i)=>{let s=_(W(n,`children`)),u=_(W(n,`className`)),d=_(W(n,`component`)),f=_(W(n,`form`)),m=_(W(n,`initialValues`)),h=_(W(n,`name`)),g=_(W(n,`onFieldsChange`)),y=_(W(n,`onFinish`)),b=_(W(n,`onFinishFailed`)),x=_(W(n,`onSubmit`)),S=_(W(n,`onValuesChange`)),O=_(W(n,`preserve`)),A=_(W(n,`render`)),M=_(W(n,`scrollToFirstError`)),N=_(W(n,`style`)),F=_(W(n,`validateMessages`)),L=_(W(n,`validateTrigger`));return R(()=>o(a(()=>{let e=D(`FormRoot:hook:0`,f.get()??Le()).current,n=C(()=>e.__INTERNAL__.ensureInitialized(m.get()));w(()=>n.get());let r=n;l(ze,()=>e),c(`FormRoot:setup-effect:0:0`,()=>ne(()=>e.__INTERNAL__.setRuntimeOptions({name:h.get(),preserve:O.get(),validateTrigger:Te(L.get()),validateMessages:{...he,...F.get()},scrollToFirstError:M.get(),onValuesChange:S.get(),onFieldsChange:g.get(),onFinish:y.get(),onFinishFailed:b.get()}))),c(`FormRoot:setup-effect:0:1`,()=>T(()=>{r.get()&&queueMicrotask(()=>e.__INTERNAL__.emitUpdate())}));let i=t=>e.__INTERNAL__.setRootElement(t),a=A.get()?.(e),o=t=>{t.preventDefault(),x.get()?.(t),e.submit()};return d.get()===!1?{__rue_compiled_branch_key:0,create:()=>v(e=>{let n=I(),r=B(`rue:slot:anchor`);k(n,r),t({parent:n,before:r},()=>A.get()?G(a):s.get(),()=>({}));let i=j(``),o=j(``);return n.insertBefore(i,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:d.get()===`div`?{__rue_compiled_branch_key:1,create:()=>v(e=>{let n=de().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],c=o.parentNode,l=i;typeof l==`function`?l(r):l&&typeof l==`object`&&`current`in l&&(l.current=r),H(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)});let d;P(()=>{let e=ge(`rue-form grid gap-6`,u.get()),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,r.setAttribute(`class`,t))});let f;return P(()=>{let e=N.get(),t=p(e);Object.is(f,t)||(f=t,r.style.cssText=t)}),r.setAttribute(`data-rue-form`,`true`),t({parent:c,before:o},()=>A.get()?G(a):s.get(),()=>({})),[n,n]})}:d.get()===`section`?{__rue_compiled_branch_key:2,create:()=>v(e=>{let n=fe().content.cloneNode(!0).firstChild,r=n,o=n.childNodes[0],c=o.parentNode,l=i;typeof l==`function`?l(r):l&&typeof l==`object`&&`current`in l&&(l.current=r),H(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)});let d;P(()=>{let e=ge(`rue-form grid gap-6`,u.get()),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,r.setAttribute(`class`,t))});let f;return P(()=>{let e=N.get(),t=p(e);Object.is(f,t)||(f=t,r.style.cssText=t)}),r.setAttribute(`data-rue-form`,`true`),t({parent:c,before:o},()=>A.get()?G(a):s.get(),()=>({})),[n,n]})}:{__rue_compiled_branch_key:3,create:()=>v(e=>{let n=pe().content.cloneNode(!0).firstChild,r=n,c=n.childNodes[0],l=c.parentNode,d=i;typeof d==`function`?d(r):d&&typeof d==`object`&&`current`in d&&(d.current=r),H(()=>{typeof d==`function`?d(null):d&&typeof d==`object`&&`current`in d&&(d.current=null)});let f=e=>{let t=o;typeof t==`function`&&t(e)};r.addEventListener(`submit`,f),H(()=>r.removeEventListener(`submit`,f));let m;P(()=>{let e=ge(`rue-form grid gap-6`,u.get()),t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,r.setAttribute(`class`,t))});let h;return P(()=>{let e=N.get(),t=p(e);Object.is(h,t)||(h=t,r.style.cssText=t)}),r.setAttribute(`data-rue-form`,`true`),t({parent:l,before:c},()=>A.get()?G(a):s.get(),()=>({})),[n,n]})}}),e=>E(()=>{s.set(e.children),u.set(e.className),d.set(e.component),f.set(e.form),m.set(e.initialValues),h.set(e.name),g.set(e.onFieldsChange),y.set(e.onFinish),b.set(e.onFinishFailed),x.set(e.onSubmit),S.set(e.onValuesChange),O.set(e.preserve),A.set(e.render),M.set(e.scrollToFirstError),N.set(e.style),F.set(e.validateMessages),L.set(e.validateTrigger)}),()=>e(n)))},{Item:Ue,List:(n,r,i)=>{let{CompiledRow101:a,form:s,__rue_phase2_form:l,name:d,__rue_phase2_name:f,unregister:p,rows:m,operation:h,__rue_phase2_operation:y,renderContent:b,__rue_phase2_renderContent:x}=c(`useSetup:0:0`,()=>{let t=(t,r,a)=>{let l=_(W(t,`rowArg0`)),d=_(W(t,`rowArg1`)),{row:f,index:p,__rue_phase2_index:m}=c(`useSetup:0:0`,()=>{let e=l.get(),t=C(()=>d.get());return t.get(),{row:e,index:t,__rue_phase2_index:t}});return o(v(e=>{let t=le().content.cloneNode(!0).firstChild,r=t,a=t.childNodes[0],o=a.parentNode,c;P(()=>{let e=p.get();Object.is(c,e)||(c=e,e==null?r.removeAttribute(`data-rue-form-list-index`):r.setAttribute(`data-rue-form-list-index`,String(e)))});let l=[];return V(()=>{let e=(W(n,`fields`)??[])||[];l=M(o,a,l,e,(e,t)=>t,(e,t)=>{let n=_(e);return z((e,t,r)=>{let a=()=>u(Ue,()=>({...n.get(),form:i.get(),name:[...s.get(),p.get(),...X(n.get().name)]}));return e==null?a():g(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),H(()=>O(l)),[t,t]}),e=>E(()=>{l.set(e.rowArg0),d.set(e.rowArg1)}),()=>e(t))},r=C(()=>W(n,`form`)??Be());r.get();let i=r,a=C(()=>X(W(n,`name`)));a.get();let s=a,l=i.get().__INTERNAL__.registerField({id:`rue-form-list-${me++}`,kind:`list`,getNamePath:()=>s.get(),getRules:()=>W(n,`rules`)??[],getRequired:()=>void 0,getLabel:()=>s.get().at(-1),getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>W(n,`initialValue`),getPreserve:()=>!0});ee(l);let d=C(()=>{i.get().__INTERNAL__.version.value;let e=i.get().getFieldValue(s.get());return Array.isArray(e)?e:[]}),f=C(()=>We(i.get(),s.get()));f.get();let p=f,m=C(()=>W(n,`render`)?C(()=>{i.get().__INTERNAL__.version.value;let e=d.value.map((e,t)=>({key:t,name:t,fieldKey:t})),t=i.get().__INTERNAL__.getMeta(s.get());return W(n,`render`)(e,p.get(),{errors:[...t.errors],warnings:[...t.warnings]})}):void 0);return w(()=>m.get()),{CompiledRow101:t,form:r,__rue_phase2_form:i,name:a,__rue_phase2_name:s,unregister:l,rows:d,operation:f,__rue_phase2_operation:p,renderContent:m,__rue_phase2_renderContent:m}});return v(e=>{let n=ue().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=r.parentNode;return t({parent:i,before:r},()=>b.get()?G(b.get().value):G(m.value.map((e,t)=>u(a,()=>({rowArg0:e,rowArg1:t})))),()=>({})),[n,n]})},ErrorList:Re,useForm:Ve,useFormInstance:Be,useWatch:He}),Ge=U(`<div class="rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5"><div class="mb-4 text-sm font-medium text-base-content">Canary settings</div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div><!--rue:text-hole:2--></div>`),Ke=U(`<div class="min-w-0"><!--rue:opaque-hole:0--></div>`),qe=U(`<div class="grid gap-4"><!--rue:text-hole:0--><!--rue:text-hole:1--><div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><!--rue:text-hole:4--></div>`),Je=U(`<div class="flex flex-wrap gap-3 pt-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Ye=U(`<div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Xe=U(`<div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--></div>`),Ze=U(`<div class="grid gap-6"><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">回调地址</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">https://</span><!--rue:opaque-hole:0--><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">:443</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。</div></div><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">资源路径</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">/hooks/</span><!--rue:opaque-hole:1--><span class="text-xs uppercase tracking-[0.18em] text-base-content/45">POST target</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。</div></div></div>`),Qe=U(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 1</div><div class="mt-1 text-lg font-semibold text-base-content">基础信息</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),$e=U(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 2</div><div class="mt-1 text-lg font-semibold text-base-content">发布策略</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),et=U(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 3</div><div class="mt-1 text-lg font-semibold text-base-content">观测与审批</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),tt=U(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 4</div><div class="mt-1 text-lg font-semibold text-base-content">回滚预案</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),nt=U(`<div class="sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur"><div class="flex flex-wrap items-center justify-between gap-3"><div class="text-sm text-base-content/65">留空深层字段后点击提交，会自动滚到首个错误项。</div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),rt=U(`<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),it=U(`<div class="mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4"><!--rue:opaque-hole:0--><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),at=U(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Submit result</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。</p><div class="mt-4 grid gap-4"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Live draft</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre></div><div class="rounded-[1.25rem] bg-neutral p-4 text-neutral-content"><div class="text-xs uppercase tracking-[0.22em] text-neutral-content/60">Last submit</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6"><!--rue:text-hole:2--></pre></div></div></div></div>`),ot=U(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Reactive summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">role</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">region</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">notes</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6"><!--rue:text-hole:4--></pre></div></div>`),st=U('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Validation notes</div><p class="mt-3 mb-0 text-sm text-base-content/65">这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Password match</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Website warning</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:2--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:3--></pre></div></div>'),ct=U('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Store snapshot</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">issueId</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">slug</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">branch</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div></div>'),lt=U('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Conditional summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">enableCanary</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">publishMode</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Conditional fields</div><div class="mt-2 text-sm leading-6 text-base-content/80">batchSize: <!--rue:text-hole:3--><br> approveBy: <!--rue:text-hole:4--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:5--></pre></div></div>'),ut=U('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Composite preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。</p><div class="mt-4 rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Resolved URL</div><div class="mt-3 break-all text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="mt-4 grid gap-3 text-sm text-base-content/75"><div class="rounded-[1.25rem] bg-base-200/70 p-4">`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。</div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:2--></pre></div></div>'),dt=U(`<div class="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Scroll actions</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。</p><div class="mt-4 grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5"><div class="overflow-y-auto overscroll-contain pr-2"><!--rue:opaque-hole:5--></div></div></div>`),ft=U(`<div class="grid gap-6"><div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List snapshot</div><div class="mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65"><!--rue:text-hole:1--> members</div><div class="mt-4 grid gap-3"><!--rue:text-hole:2--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List behavior</div><div class="mt-4 grid gap-4 md:grid-cols-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">列表级规则</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">rules 挂在 Form.List 上，校验整个 members 数组。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">重排操作</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">operation.move 保持字段状态跟随成员顺序移动。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">错误出口</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。</p></div></div></div></div>`),pt=U(`<div class="grid gap-6"><!--rue:opaque-hole:0--><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Query preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。</p><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre><div class="mt-4 grid gap-3 text-sm text-base-content/80"><div class="rounded-[1.25rem] bg-base-200/70 p-4">关键词：<!--rue:text-hole:2--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">仓库：<!--rue:text-hole:3--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">负责人 / 评审人：<!--rue:text-hole:4--> / <!--rue:text-hole:5--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">包含草稿：<!--rue:text-hole:6--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Last submit</div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:7--></pre></div></div></div>`),mt=U('<div class="max-w-none prose prose-sm md:prose-base"><h1 class="mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content">Form 表单</h1><p class="mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72">这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。</p><h2>何时使用</h2><ul><li>需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。</li><li>需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。</li><li>需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。</li></ul><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></section><div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm">当前 Rue runtime 下，推荐通过 <code>Form.useForm()</code> 或 <code>render={form =&gt; &lt;Form.Item form={form} name="title" /&gt;}</code> 显式持有并传递 <code>form</code>。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。</div><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2>使用说明</h2><p>下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。</p><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:10--></section><h2 id="form-api">API</h2><p>Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。</p><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><!--rue:opaque-hole:13--></div>'),ht=(n,r,i)=>{let a=_(W(n,`rows`)),s=_(W(n,`title`));return o(v(e=>{let n=N(`div`,e);n.setAttribute(`class`,`not-prose my-6 lg:my-8`);let r=N(`h3`,n);k(n,r),r.setAttribute(`class`,`mt-0 mb-3 text-base font-semibold text-base-content`);let i=B(`rue:compiled-slot`);k(r,i),t({parent:r,before:i},()=>G(s.get()),()=>({}));let o=N(`div`,n);k(n,o),o.setAttribute(`class`,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=N(`table`,o);k(o,c),c.setAttribute(`class`,`table table-zebra`);let l=N(`thead`,c);k(c,l);let u=N(`tr`,l);k(l,u);let d=N(`th`,u);k(u,d),k(d,j(`属性`));let f=N(`th`,u);k(u,f),k(f,j(`说明`));let p=N(`th`,u);k(u,p),k(p,j(`类型`));let m=N(`th`,u);k(u,m),k(m,j(`默认值`));let h=N(`tbody`,c);k(c,h);let g=U(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),_=B(`rue:list:end`);k(h,_);let v=[];return V(()=>{let e=a.get()||[];v=A(h,_,v,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return F(e=>{let t=g().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let s=t.childNodes[2].childNodes[0].childNodes[0],c=s.parentNode,l=t.childNodes[3].childNodes[0].childNodes[0],u=l.parentNode,d=j(``);a.insertBefore(d,n),a.removeChild(n);let f=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);d.textContent=f;let p=r.description==null||typeof r.description==`boolean`?``:String(r.description);o.textContent=p;let m=j(``);c.insertBefore(m,s),c.removeChild(s);let h=r.type==null||typeof r.type==`boolean`?``:String(r.type);m.textContent=h;let _=j(``);u.insertBefore(_,l),u.removeChild(l);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(f,e)||(d.textContent=e,f=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(p,e)||(o.textContent=e,p=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(h,e)||(m.textContent=e,h=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),H(()=>O(v)),[n,n]}),e=>E(()=>{a.set(e.rows),s.set(e.title)}),()=>e(n))},gt=(n,r,i)=>{let s=_(W(n,`description`)),c=_(W(n,`eyebrow`)),l=_(W(n,`items`)),u=_(W(n,`title`));return o(v(e=>{let n=N(`div`,e);n.setAttribute(`class`,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`),a(()=>c.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let n=N(`div`,e);n.setAttribute(`class`,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let r=B(`rue:compiled-slot`);return k(n,r),t({parent:n,before:r},()=>G(c.get()),()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n);let r=N(`h3`,n);k(n,r),r.setAttribute(`class`,`mt-3 mb-0 text-lg font-semibold text-base-content`);let i=B(`rue:compiled-slot`);k(r,i),t({parent:r,before:i},()=>G(u.get()),()=>({}));let o=N(`p`,n);k(n,o),o.setAttribute(`class`,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let d=B(`rue:compiled-slot`);return k(o,d),t({parent:o,before:d},()=>G(s.get()),()=>({})),a(()=>l.get()?.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=N(`ul`,e);t.setAttribute(`class`,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let n=B(`rue:list:end`);k(t,n);let r=[];return V(()=>{let e=l.get()||[];r=M(n.parentNode,n,r,e,(e,t)=>e,(e,t)=>{let n=_(e);return z((e,t,r)=>{let i=()=>b(e=>{let t=N(`li`,e),r=j(``);return k(t,r),y(r,()=>n.get()),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),H(()=>O(r)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]}),e=>E(()=>{s.set(e.description),c.set(e.eyebrow),l.set(e.items),u.set(e.title)}),()=>e(n))},$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},_t=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),vt=(e,n,r)=>{let a={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0},o=L($(a)),s=L(`等待提交，右侧会展示 payload 或校验摘要。`);return R(()=>v(e=>{let n=at().content.cloneNode(!0).firstChild,r=n.childNodes[0],c=r.parentNode,l=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],f=l.parentNode,p=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],m=p.parentNode,_=(e,n,r)=>{let c=()=>u(Q,()=>({className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:a,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{o.value=$(t)},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:e=>v(n=>{let r=I();i(r,Q.Item,()=>({form:e,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>u(q,()=>({...e,placeholder:`输入项目名称`}))})),i(r,Q.Item,()=>({form:e,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>u(q,()=>({...e,placeholder:`team@rue.dev`}))})),i(r,Q.Item,()=>({form:e,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>u(re,()=>({...e,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`允许直接覆盖 staging 配置`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}))}));let a=Je().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[1],d=l.parentNode;r.appendChild(a);let f=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`保存表单`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},p=s.nextSibling;c.removeChild(s),t({parent:c,before:p},()=>f,()=>({}));let m=(t,n,r)=>{let i=()=>u(K,()=>({type:`outlined`,onClick:()=>e.resetFields(),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`重置`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return t==null?i():g(t,r,i)},_=l.nextSibling;d.removeChild(l),t({parent:d,before:_},()=>m,()=>({}));let v=j(``),y=j(``);return r.insertBefore(v,r.firstChild),r.appendChild(y),[r.firstChild,r.lastChild]})}));return e==null?c():g(e,r,c)},y=r.nextSibling;c.removeChild(r),t({parent:c,before:y},()=>_,()=>({}));let b=j(``);f.insertBefore(b,l),f.removeChild(l),d(b,()=>o.value);let x=j(``);return m.insertBefore(x,p),m.removeChild(p),d(x,()=>s.value),[n,n]}))},yt=(e,n,r)=>{let[a]=Q.useForm(),o=Q.useWatch(`role`,a),s=Q.useWatch(`region`,a),c=Q.useWatch(`notes`,a),l=L(`等待实例方法操作。`);return R(()=>v(e=>{let n=ot().content.cloneNode(!0).firstChild,r=n.childNodes[0],f=r.parentNode,p=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,_=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],y=_.parentNode,b=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],x=b.parentNode,S=n.childNodes[1].childNodes[3].childNodes[0],C=S.parentNode,w=(e,n,r)=>{let o=()=>u(Q,()=>({form:a,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{l.value=`submit()
`+$(e)},onFinishFailed:e=>{l.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>v(n=>{let r=I(),o=Ye().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],d=c.parentNode,f=s.childNodes[1],p=f.parentNode;r.appendChild(o);let m=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>u(q,()=>({...e,placeholder:`viewer / editor / admin`}))}));return t==null?i():g(t,r,i)},_=c.nextSibling;d.removeChild(c),t({parent:d,before:_},()=>m,()=>({}));let v=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>u(q,()=>({...e,placeholder:`cn-hz`}))}));return t==null?i():g(t,r,i)},y=f.nextSibling;p.removeChild(f),t({parent:p,before:y},()=>v,()=>({})),i(r,Q.Item,()=>({form:e,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>u(q,()=>({...e,placeholder:`写入审批说明或 rollout 策略`}))}));let b=Xe().content.cloneNode(!0),x=b.firstChild,S=x.childNodes[0],C=S.parentNode,w=x.childNodes[1],T=w.parentNode,E=x.childNodes[2],D=E.parentNode,O=x.childNodes[3],A=O.parentNode,M=x.childNodes[4],N=M.parentNode,P=x.childNodes[5],F=P.parentNode;r.appendChild(b);let L=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,onClick:()=>{a.setFieldValue(`role`,`editor`),l.value=`setFieldValue('role', 'editor')`},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`设为 editor`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},R=S.nextSibling;C.removeChild(S),t({parent:C,before:R},()=>L,()=>({}));let ee=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>{a.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),l.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`填充预设`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},z=w.nextSibling;T.removeChild(w),t({parent:T,before:z},()=>ee,()=>({}));let B=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>{a.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),l.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`填入异常值`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},V=E.nextSibling;D.removeChild(E),t({parent:D,before:V},()=>B,()=>({}));let H=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`text`,onClick:()=>{a.resetFields(),l.value=`resetFields()`},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`恢复初始值`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},te=O.nextSibling;A.removeChild(O),t({parent:A,before:te},()=>H,()=>({}));let U=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,color:`primary`,onClick:()=>{a.submit()},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`程序化提交`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},ne=M.nextSibling;N.removeChild(M),t({parent:N,before:ne},()=>U,()=>({}));let W=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>{a.validateFields().then(e=>{l.value=`validateFields()
`+$(e)}).catch(e=>{l.value=`validateFields() failed
`+$(e.errorFields)})},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`validateFields`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},G=P.nextSibling;F.removeChild(P),t({parent:F,before:G},()=>W,()=>({}));let re=j(``),ie=j(``);return r.insertBefore(re,r.firstChild),r.appendChild(ie),[r.firstChild,r.lastChild]})}));return e==null?o():g(e,r,o)},T=r.nextSibling;f.removeChild(r),t({parent:f,before:T},()=>w,()=>({}));let E=j(``);m.insertBefore(E,p),m.removeChild(p),d(E,()=>String(o.value??`viewer`));let D=j(``);y.insertBefore(D,_),y.removeChild(_),d(D,()=>String(s.value??`cn-hz`));let O=j(``);x.insertBefore(O,b),x.removeChild(b),d(O,()=>String(c.value??``)||`未填写`);let A=j(``);return C.insertBefore(A,S),C.removeChild(S),d(A,()=>l.value),[n,n]}))},bt=(e,n,r)=>{let[i]=Q.useForm(),o=Q.useWatch(`password`,i),s=Q.useWatch(`confirm`,i),c=Q.useWatch(`website`,i),l=L(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`);return R(()=>v(e=>{let n=st().content.cloneNode(!0).firstChild,r=n.childNodes[0],f=r.parentNode,p=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],_=p.parentNode,y=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],b=y.parentNode,x=n.childNodes[1].childNodes[3].childNodes[0],S=x.parentNode,C=(e,n,r)=>{let a=()=>u(Q,()=>({form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{l.value=`提交成功
`+$(e)},onFinishFailed:e=>{l.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:e=>v(n=>{let r=I(),a=Ye().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[1],d=l.parentNode;r.appendChild(a);let f=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>u(q,()=>({...e,placeholder:`release-admin`}))}));return t==null?i():g(t,r,i)},p=s.nextSibling;c.removeChild(s),t({parent:c,before:p},()=>f,()=>({}));let m=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>u(q,()=>({...e,placeholder:`https://prod.rue.dev`}))}));return t==null?i():g(t,r,i)},_=l.nextSibling;d.removeChild(l),t({parent:d,before:_},()=>m,()=>({}));let v=Ye().content.cloneNode(!0),y=v.firstChild,b=y.childNodes[0],x=b.parentNode,S=y.childNodes[1],C=S.parentNode;r.appendChild(v);let w=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>u(q,()=>({...e,placeholder:`至少 8 位`}))}));return t==null?i():g(t,r,i)},T=b.nextSibling;x.removeChild(b),t({parent:x,before:T},()=>w,()=>({}));let E=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>u(q,()=>({...e,placeholder:`再次输入密码`}))}));return t==null?i():g(t,r,i)},D=S.nextSibling;C.removeChild(S),t({parent:C,before:D},()=>E,()=>({}));let O=Je().content.cloneNode(!0),A=O.firstChild,M=A.childNodes[0],N=M.parentNode,P=A.childNodes[1],F=P.parentNode;r.appendChild(O);let L=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`执行校验`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},R=M.nextSibling;N.removeChild(M),t({parent:N,before:R},()=>L,()=>({}));let ee=(e,t,n)=>{let r=()=>u(K,()=>({type:`outlined`,onClick:()=>i.resetFields(),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`清空状态`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},z=P.nextSibling;F.removeChild(P),t({parent:F,before:z},()=>ee,()=>({}));let B=j(``),V=j(``);return r.insertBefore(B,r.firstChild),r.appendChild(V),[r.firstChild,r.lastChild]})}));return e==null?a():g(e,r,a)},w=r.nextSibling;f.removeChild(r),t({parent:f,before:w},()=>C,()=>({})),m(_,p,()=>o.value&&s.value?{__rue_compiled_branch_key:!0,create:()=>a(()=>o.value===s.value?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=j(`已匹配`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`未匹配`);return[t,t]})})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`等待输入`);return[t,t]})}),m(b,y,()=>c.value?{__rue_compiled_branch_key:!0,create:()=>a(()=>String(c.value).startsWith(`https://`)?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=j(`格式建议通过`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`建议补上 https://`);return[t,t]})})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`未填写`);return[t,t]})});let T=j(``);return S.insertBefore(T,x),S.removeChild(x),d(T,()=>l.value),[n,n]}))},xt=(e,n,r)=>{let[a]=Q.useForm(),o={issueId:`2048`,slug:`release-planning`,branch:`main`},s=Q.useWatch(`issueId`,a),c=Q.useWatch(`slug`,a),l=Q.useWatch(`branch`,a),f=L($(o));return R(()=>v(e=>{let n=ct().content.cloneNode(!0).firstChild,r=n.childNodes[0],p=r.parentNode,m=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],_=m.parentNode,y=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],b=y.parentNode,x=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],S=x.parentNode,C=n.childNodes[1].childNodes[3].childNodes[0],w=C.parentNode,T=(e,n,r)=>{let s=()=>u(Q,()=>({form:a,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:o,onValuesChange:(e,t)=>{f.value=$(t)},onFinish:e=>{f.value=`提交成功
`+$(e)},render:e=>v(n=>{let r=I();i(r,Q.Item,()=>({form:e,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>u(q,()=>({...e,placeholder:`#2048`}))})),i(r,Q.Item,()=>({form:e,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>u(q,()=>({...e,placeholder:`release-planning`}))})),i(r,Q.Item,()=>({form:e,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>u(q,()=>({...e,placeholder:`main / release/v1-2`}))}));let o=Je().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],l=c.parentNode,d=s.childNodes[1],f=d.parentNode;r.appendChild(o);let p=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`应用转换`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},m=c.nextSibling;l.removeChild(c),t({parent:l,before:m},()=>p,()=>({}));let _=(e,t,n)=>{let r=()=>u(K,()=>({type:`outlined`,onClick:()=>{a.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`填充示例`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},v=d.nextSibling;f.removeChild(d),t({parent:f,before:v},()=>_,()=>({}));let y=j(``),b=j(``);return r.insertBefore(y,r.firstChild),r.appendChild(b),[r.firstChild,r.lastChild]})}));return e==null?s():g(e,r,s)},E=r.nextSibling;p.removeChild(r),t({parent:p,before:E},()=>T,()=>({}));let D=j(``);_.insertBefore(D,m),_.removeChild(m),d(D,()=>String(s.value??``)||`空`);let O=j(``);b.insertBefore(O,y),b.removeChild(y),d(O,()=>String(c.value??``)||`空`);let A=j(``);S.insertBefore(A,x),S.removeChild(x),d(A,()=>String(l.value??``)||`空`);let M=j(``);return w.insertBefore(M,C),w.removeChild(C),d(M,()=>f.value),[n,n]}))},St=(e,n,r)=>{let[a]=Q.useForm(),o=Q.useWatch(`enableCanary`,a),s=Q.useWatch(`publishMode`,a),c=Q.useWatch(`batchSize`,a),l=Q.useWatch(`approveBy`,a),f=L(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`);return R(()=>v(e=>{let n=lt().content.cloneNode(!0).firstChild,r=n.childNodes[0],p=r.parentNode,_=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],y=_.parentNode,b=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],x=b.parentNode,S=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[1],C=S.parentNode,w=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[4],T=w.parentNode,E=n.childNodes[1].childNodes[3].childNodes[0],D=E.parentNode,O=(e,n,r)=>{let o=()=>u(Q,()=>({form:a,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{f.value=`提交成功
`+$(e)},render:e=>v(n=>{let r=I(),o=Ye().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],l=c.parentNode,d=s.childNodes[1],f=d.parentNode;r.appendChild(o);let p=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`gateway`}))}));return t==null?i():g(t,r,i)},_=c.nextSibling;l.removeChild(c),t({parent:l,before:_},()=>p,()=>({}));let y=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`manual / auto`}))}));return t==null?i():g(t,r,i)},b=d.nextSibling;f.removeChild(d),t({parent:f,before:b},()=>y,()=>({})),i(r,Q.Item,()=>({form:e,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>u(re,()=>({...e,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`开启 canary rollout`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}))})),i(r,Q.Item,()=>({shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:n=>n.enableCanary?v(r=>{let i=Ge().content.cloneNode(!0).firstChild,a=i.childNodes[1].childNodes[0],o=a.parentNode,s=i.childNodes[1].childNodes[1],c=s.parentNode,l=i.childNodes[2],d=l.parentNode,f=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`10%`}))}));return t==null?i():g(t,r,i)},p=a.nextSibling;o.removeChild(a),t({parent:o,before:p},()=>f,()=>({}));let _=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`release-ops`}))}));return t==null?i():g(t,r,i)},v=s.nextSibling;return c.removeChild(s),t({parent:c,before:v},()=>_,()=>({})),m(d,l,()=>n.publishMode===`auto`?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=N(`div`,e);return t.setAttribute(`class`,`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`),k(t,j(`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}),[i,i]}):h(e=>{let t=N(`div`,e);return t.setAttribute(`class`,`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`),k(t,j(`未开启灰度发布，额外字段不会挂载，也不会参与校验。`)),[t,t]})}));let x=Je().content.cloneNode(!0),S=x.firstChild,C=S.childNodes[0],w=C.parentNode,T=S.childNodes[1],E=T.parentNode;r.appendChild(x);let D=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`保存发布策略`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},O=C.nextSibling;w.removeChild(C),t({parent:w,before:O},()=>D,()=>({}));let A=(e,t,n)=>{let r=()=>u(K,()=>({type:`outlined`,onClick:()=>{a.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`套用 canary 模板`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},M=T.nextSibling;E.removeChild(T),t({parent:E,before:M},()=>A,()=>({}));let P=j(``),F=j(``);return r.insertBefore(P,r.firstChild),r.appendChild(F),[r.firstChild,r.lastChild]})}));return e==null?o():g(e,r,o)},A=r.nextSibling;p.removeChild(r),t({parent:p,before:A},()=>O,()=>({})),m(y,_,()=>o.value?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=j(`true`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`false`);return[t,t]})});let M=j(``);x.insertBefore(M,b),x.removeChild(b),d(M,()=>String(s.value??`manual`));let P=j(``);C.insertBefore(P,S),C.removeChild(S),d(P,()=>String(c.value??``)||`未挂载`);let F=j(``);T.insertBefore(F,w),T.removeChild(w),d(F,()=>String(l.value??``)||`未挂载`);let L=j(``);return D.insertBefore(L,E),D.removeChild(E),d(L,()=>f.value),[n,n]}))},Ct=(e,n,r)=>{let[i]=Q.useForm(),a=Q.useWatch(`host`,i),o=Q.useWatch(`path`,i),s=L(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`),c=C(()=>`https://${String(a.value??`api.rue.dev`)}:443/hooks/${String(o.value??`release-hooks`).replace(/^\/+/,``)}`);return R(()=>v(e=>{let n=ut().content.cloneNode(!0).firstChild,r=n.childNodes[0],a=r.parentNode,o=n.childNodes[1].childNodes[2].childNodes[1].childNodes[0],l=o.parentNode,f=n.childNodes[1].childNodes[4].childNodes[0],p=f.parentNode,m=(e,n,r)=>{let a=()=>u(Q,()=>({form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{s.value=`保存复合控件
`+$(e)},render:e=>v(n=>{let r=I(),a=Ze().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0].childNodes[1].childNodes[1],c=s.parentNode,l=o.childNodes[1].childNodes[1].childNodes[1],d=l.parentNode;r.appendChild(a);let f=(n,r,i)=>{let a=()=>u(Q.Item,()=>({form:e,name:`host`,noStyle:!0,render:e=>v(n=>{let r=Ke().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=(t,n,r)=>{let i=()=>u(q,()=>({...e,placeholder:`api.rue.dev`}));return t==null?i():g(t,r,i)},s=i.nextSibling;return a.removeChild(i),t({parent:a,before:s},()=>o,()=>({})),[r,r]})}));return n==null?a():g(n,i,a)},p=s.nextSibling;c.removeChild(s),t({parent:c,before:p},()=>f,()=>({}));let m=(n,r,i)=>{let a=()=>u(Q.Item,()=>({form:e,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:e=>v(n=>{let r=Ke().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=(t,n,r)=>{let i=()=>u(q,()=>({...e,placeholder:`release-hooks`}));return t==null?i():g(t,r,i)},s=i.nextSibling;return a.removeChild(i),t({parent:a,before:s},()=>o,()=>({})),[r,r]})}));return n==null?a():g(n,i,a)},_=l.nextSibling;d.removeChild(l),t({parent:d,before:_},()=>m,()=>({}));let y=Je().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[0],S=x.parentNode,C=b.childNodes[1],w=C.parentNode;r.appendChild(y);let T=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`保存复合地址`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},E=x.nextSibling;S.removeChild(x),t({parent:S,before:E},()=>T,()=>({}));let D=(e,t,n)=>{let r=()=>u(K,()=>({type:`outlined`,onClick:()=>{i.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`填入 staging`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},O=C.nextSibling;w.removeChild(C),t({parent:w,before:O},()=>D,()=>({}));let A=j(``),M=j(``);return r.insertBefore(A,r.firstChild),r.appendChild(M),[r.firstChild,r.lastChild]})}));return e==null?a():g(e,r,a)},_=r.nextSibling;a.removeChild(r),t({parent:a,before:_},()=>m,()=>({}));let y=j(``);l.insertBefore(y,o),l.removeChild(o),d(y,()=>c.value);let b=j(``);return p.insertBefore(b,f),p.removeChild(f),d(b,()=>s.value),[n,n]}))},wt=(e,n,r)=>{let[i]=Q.useForm(),a=L(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`),o=(e,t)=>{i.scrollToField(e,{block:`center`,focus:!0}),a.value=`scrollToField -> ${t}`};return R(()=>v(e=>{let n=dt().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],s=n.childNodes[0].childNodes[2].childNodes[0],c=s.parentNode,l=n.childNodes[0].childNodes[2].childNodes[1],f=l.parentNode,p=n.childNodes[0].childNodes[2].childNodes[2],m=p.parentNode,_=n.childNodes[0].childNodes[2].childNodes[3],y=_.parentNode,b=n.childNodes[0].childNodes[3].childNodes[0],x=b.parentNode,S=n.childNodes[1].childNodes[0].childNodes[0],C=S.parentNode;r.setAttribute(`class`,`overflow-y-auto overscroll-contain pr-2`),Object.assign(r.style,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let w=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,onClick:()=>o(`releaseName`,`发布名称`),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`滚到发布名称`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},T=s.nextSibling;c.removeChild(s),t({parent:c,before:T},()=>w,()=>({}));let E=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>o([`strategy`,`batchSize`],`灰度批次`),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`滚到灰度批次`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},D=l.nextSibling;f.removeChild(l),t({parent:f,before:D},()=>E,()=>({}));let O=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>o([`observability`,`dashboard`],`监控看板`),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`滚到监控看板`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},A=p.nextSibling;m.removeChild(p),t({parent:m,before:A},()=>O,()=>({}));let M=(e,t,n)=>{let r=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>o([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`滚到回滚单号`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},N=_.nextSibling;y.removeChild(_),t({parent:y,before:N},()=>M,()=>({}));let P=j(``);x.insertBefore(P,b),x.removeChild(b),d(P,()=>a.value);let F=(e,n,r)=>{let s=()=>u(Q,()=>({form:i,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{a.value=`提交成功
`+$(e)},onFinishFailed:e=>{a.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:e=>v(n=>{let r=I(),i=Qe().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[1].childNodes[0],c=s.parentNode,l=a.childNodes[1].childNodes[1],d=l.parentNode,f=a.childNodes[1].childNodes[2],p=f.parentNode,m=a.childNodes[1].childNodes[3],_=m.parentNode;r.appendChild(i);let v=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`2026.05 release`}))}));return t==null?i():g(t,r,i)},y=s.nextSibling;c.removeChild(s),t({parent:c,before:y},()=>v,()=>({}));let b=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`rue-design`}))}));return t==null?i():g(t,r,i)},x=l.nextSibling;d.removeChild(l),t({parent:d,before:x},()=>b,()=>({}));let S=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`staging`}))}));return t==null?i():g(t,r,i)},C=f.nextSibling;p.removeChild(f),t({parent:p,before:C},()=>S,()=>({}));let w=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`release-captain`}))}));return t==null?i():g(t,r,i)},T=m.nextSibling;_.removeChild(m),t({parent:_,before:T},()=>w,()=>({}));let E=$e().content.cloneNode(!0),D=E.firstChild,O=D.childNodes[1].childNodes[0],A=O.parentNode,M=D.childNodes[1].childNodes[1],N=M.parentNode,P=D.childNodes[1].childNodes[2],F=P.parentNode,L=D.childNodes[1].childNodes[3],R=L.parentNode;r.appendChild(E);let ee=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`10%`}))}));return t==null?i():g(t,r,i)},z=O.nextSibling;A.removeChild(O),t({parent:A,before:z},()=>ee,()=>({}));let B=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`15m`}))}));return t==null?i():g(t,r,i)},V=M.nextSibling;N.removeChild(M),t({parent:N,before:V},()=>B,()=>({}));let H=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`error rate > 2%`}))}));return t==null?i():g(t,r,i)},te=P.nextSibling;F.removeChild(P),t({parent:F,before:te},()=>H,()=>({}));let U=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`30m`}))}));return t==null?i():g(t,r,i)},ne=L.nextSibling;R.removeChild(L),t({parent:R,before:ne},()=>U,()=>({}));let W=et().content.cloneNode(!0),G=W.firstChild,re=G.childNodes[1].childNodes[0],ie=re.parentNode,J=G.childNodes[1].childNodes[1],ae=J.parentNode,oe=G.childNodes[1].childNodes[2],se=oe.parentNode,ce=G.childNodes[1].childNodes[3],le=ce.parentNode;r.appendChild(W);let ue=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`Grafana release board`}))}));return t==null?i():g(t,r,i)},de=re.nextSibling;ie.removeChild(re),t({parent:ie,before:de},()=>ue,()=>({}));let fe=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`#release-alerts`}))}));return t==null?i():g(t,r,i)},pe=J.nextSibling;ae.removeChild(J),t({parent:ae,before:pe},()=>fe,()=>({}));let me=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`ops-squad`}))}));return t==null?i():g(t,r,i)},he=oe.nextSibling;se.removeChild(oe),t({parent:se,before:he},()=>me,()=>({}));let ge=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`qa-squad`}))}));return t==null?i():g(t,r,i)},_e=ce.nextSibling;le.removeChild(ce),t({parent:le,before:_e},()=>ge,()=>({}));let Y=tt().content.cloneNode(!0),X=Y.firstChild,ve=X.childNodes[1].childNodes[0],ye=ve.parentNode,be=X.childNodes[1].childNodes[1],xe=be.parentNode,Z=X.childNodes[1].childNodes[2],Se=Z.parentNode,Ce=X.childNodes[1].childNodes[3],we=Ce.parentNode;r.appendChild(Y);let Te=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>u(q,()=>({...e,placeholder:`RB-2026-0514`}))}));return t==null?i():g(t,r,i)},Ee=ve.nextSibling;ye.removeChild(ve),t({parent:ye,before:Ee},()=>Te,()=>({}));let De=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`rollback-owner`}))}));return t==null?i():g(t,r,i)},Oe=be.nextSibling;xe.removeChild(be),t({parent:xe,before:Oe},()=>De,()=>({}));let ke=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`20m`}))}));return t==null?i():g(t,r,i)},Ae=Z.nextSibling;Se.removeChild(Z),t({parent:Se,before:Ae},()=>ke,()=>({}));let je=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`platform / qa / support`}))}));return t==null?i():g(t,r,i)},Me=Ce.nextSibling;we.removeChild(Ce),t({parent:we,before:Me},()=>je,()=>({}));let Ne=nt().content.cloneNode(!0),Pe=Ne.firstChild,Fe=Pe.childNodes[0].childNodes[1].childNodes[0],Ie=Fe.parentNode,Le=Pe.childNodes[0].childNodes[1].childNodes[1],Re=Le.parentNode;r.appendChild(Ne);let ze=(e,t,n)=>{let r=()=>u(K,()=>({type:`outlined`,onClick:()=>o([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`滚到回滚单号`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},Be=Fe.nextSibling;Ie.removeChild(Fe),t({parent:Ie,before:Be},()=>ze,()=>({}));let Ve=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`提交长表单`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},He=Le.nextSibling;Re.removeChild(Le),t({parent:Re,before:He},()=>Ve,()=>({}));let Ue=j(``),We=j(``);return r.insertBefore(Ue,r.firstChild),r.appendChild(We),[r.firstChild,r.lastChild]})}));return e==null?s():g(e,r,s)},L=S.nextSibling;return C.removeChild(S),t({parent:C,before:L},()=>F,()=>({})),[n,n]}))},Tt=(e,n,o)=>{let[s]=Q.useForm(),c=Q.useWatch(`members`,s);return v(e=>{let n=ft().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[0],l=o.parentNode,f=n.childNodes[0].childNodes[1].childNodes[1].childNodes[0],p=f.parentNode,y=n.childNodes[0].childNodes[1].childNodes[2].childNodes[0],b=y.parentNode,S=(e,n,r)=>{let o=()=>u(Q,()=>({form:s,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:e=>u(Q.List,()=>({form:e,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(n,r,o)=>v(s=>{let c=qe().content.cloneNode(!0).firstChild,l=c.childNodes[0],f=l.parentNode,p=c.childNodes[1],y=p.parentNode,b=c.childNodes[2].childNodes[0],x=b.parentNode,S=c.childNodes[2].childNodes[1],C=S.parentNode,w=c.childNodes[3],T=w.parentNode;m(f,l,()=>n.length===0?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=N(`div`,e);return t.setAttribute(`class`,`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`),k(t,j(`暂无成员，点击下方按钮即可追加一组字段。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})});let E=[];V(()=>{E=M(y,p,E,n||[],(e,t)=>e.key,(t,o)=>{let s=_(t),c=_(o);return z((t,o,l)=>{let f=()=>v(t=>{let o=N(`div`,t);o.setAttribute(`class`,`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`);let l=N(`div`,o);k(o,l),l.setAttribute(`class`,`mb-4 flex flex-wrap items-center justify-between gap-3`);let f=N(`div`,l);k(l,f);let p=N(`div`,f);k(f,p),p.setAttribute(`class`,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),k(p,j(`Member `));let m=j(``);k(p,m),d(m,()=>c.get()+1);let _=N(`div`,f);k(f,_),_.setAttribute(`class`,`mt-1 text-sm font-medium text-base-content`),k(_,j(`审批成员 `));let v=j(``);k(_,v),d(v,()=>c.get()+1);let y=N(`div`,l);k(l,y),y.setAttribute(`class`,`flex flex-wrap gap-2`),a(()=>c.get()>0?{__rue_compiled_branch_key:!0,create:()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>r.move(s.get().name,s.get().name-1),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`上移`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(y),a(()=>c.get()<n.length-1?{__rue_compiled_branch_key:!0,create:()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>r.move(s.get().name,s.get().name+1),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`下移`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(y),i(y,K,()=>({size:`sm`,type:`text`,onClick:()=>r.remove(s.get().name),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`删除`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));let b=N(`div`,o);return k(o,b),b.setAttribute(`class`,`grid gap-4 md:grid-cols-2`),i(b,Q.Item,()=>({form:e,layout:`vertical`,name:[`members`,s.get().name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`输入成员名称`}))})),i(b,Q.Item,()=>({form:e,layout:`vertical`,name:[`members`,s.get().name,`role`],label:`职责`,rules:[{required:!0}],render:e=>u(q,()=>({...e,placeholder:`Owner / Reviewer / QA`}))})),[o,o]});return t==null?f():g(t,l,f)},(e,n)=>{t=e,o=n,s.set(e),c.set(n)},void 0)},!0,!1)}),H(()=>O(E));let D=(e,t,i)=>{let a=()=>u(K,()=>({size:`sm`,color:`primary`,onClick:()=>{r.add({name:`新成员 `+String(n.length+1),role:`QA`})},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`新增成员`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?a():g(e,i,a)},A=b.nextSibling;x.removeChild(b),t({parent:x,before:A},()=>D,()=>({}));let P=(e,t,n)=>{let i=()=>u(K,()=>({size:`sm`,type:`outlined`,onClick:()=>r.add({name:`Head reviewer`,role:`QA`},0),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`头部插入`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?i():g(e,n,i)},F=S.nextSibling;return C.removeChild(S),t({parent:C,before:F},()=>P,()=>({})),m(T,w,()=>o.errors.length>0||o.warnings.length>0?{__rue_compiled_branch_key:!0,create:()=>u(Q.ErrorList,()=>({errors:o.errors,warnings:o.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}))}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=I();return[t.firstChild,t.lastChild]})}),[c,c]})}))}));return e==null?o():g(e,r,o)},C=o.nextSibling;return l.removeChild(o),t({parent:l,before:C},()=>S,()=>({})),t({parent:p,before:f},()=>G(c.value?.length??0),()=>({})),m(b,y,()=>Array.isArray(c.value)&&c.value.length>0?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=I(),n=B(`rue:list:end`);k(t,n);let i=[];V(()=>{let e=c.value||[];i=M(n.parentNode,n,i,e,(e,t)=>String(t),(e,t)=>{let n=_(e),i=_(t);return z((e,t,a)=>{let o=()=>v(()=>{let e=I(),t=N(`div`,e);k(e,t),r(t,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let a=N(`div`,t);k(t,a),r(a,`text-xs uppercase tracking-[0.22em] text-base-content/45`),k(a,j(`成员 `));let o=x(a);k(a,o),P(()=>{te(o,i.get()+1)});let s=N(`div`,t);k(t,s),r(s,`mt-2 text-base font-medium text-base-content`);let c=x(s);k(s,c),P(()=>{te(c,n.get()?.name?String(n.get().name):`未命名成员`)});let l=N(`div`,t);k(t,l),r(l,`mt-1 text-xs text-base-content/55`);let u=x(l);k(l,u),P(()=>{te(u,n.get()?.role?String(n.get().role):`未分配职责`)});let d=j(``),f=j(``);return e.insertBefore(d,e.firstChild),e.appendChild(f),[e.firstChild,e.lastChild]});return e==null?o():g(e,a,o)},(r,a)=>{e=r,t=a,n.set(r),i.set(a)},void 0)},!0,!1)}),H(()=>O(i));let a=j(``),o=j(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=N(`div`,e);return t.setAttribute(`class`,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),k(t,j(`当前列表为空。`)),[t,t]})}),[n,n]})},Et=(e,n,r)=>{let[i]=Q.useForm(),a=Q.useWatch(`keyword`,i),o=Q.useWatch(`assignee`,i),s=Q.useWatch(`repository`,i),c=Q.useWatch(`reviewer`,i),l=Q.useWatch(`includeDrafts`,i),f=L(`尚未执行检索。`);return R(()=>v(e=>{let n=pt().content.cloneNode(!0).firstChild,r=n.childNodes[0],p=r.parentNode,_=n.childNodes[1].childNodes[0].childNodes[2].childNodes[0],y=_.parentNode,b=n.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],x=b.parentNode,S=n.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],C=S.parentNode,w=n.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],T=w.parentNode,E=n.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[3],D=E.parentNode,O=n.childNodes[1].childNodes[0].childNodes[3].childNodes[3].childNodes[1],A=O.parentNode,M=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],N=M.parentNode,P=(e,n,r)=>{let a=()=>u(Q,()=>({form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{f.value=$(e)},render:e=>v(n=>{let r=I(),a=rt().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[1],d=l.parentNode,f=o.childNodes[2],p=f.parentNode,m=o.childNodes[3],_=m.parentNode;r.appendChild(a);let v=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>u(q,()=>({...e,placeholder:`搜索 issue / 页面 / API`}))}));return t==null?i():g(t,r,i)},y=s.nextSibling;c.removeChild(s),t({parent:c,before:y},()=>v,()=>({}));let b=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>u(q,()=>({...e,placeholder:`rue-design`}))}));return t==null?i():g(t,r,i)},x=l.nextSibling;d.removeChild(l),t({parent:d,before:x},()=>b,()=>({}));let S=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>u(q,()=>({...e,placeholder:`team-design`}))}));return t==null?i():g(t,r,i)},C=f.nextSibling;p.removeChild(f),t({parent:p,before:C},()=>S,()=>({}));let w=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>u(q,()=>({...e,placeholder:`infra`}))}));return t==null?i():g(t,r,i)},T=m.nextSibling;_.removeChild(m),t({parent:_,before:T},()=>w,()=>({}));let E=it().content.cloneNode(!0),D=E.firstChild,O=D.childNodes[0],A=O.parentNode,M=D.childNodes[1].childNodes[0],N=M.parentNode,P=D.childNodes[1].childNodes[1],F=P.parentNode,L=D.childNodes[1].childNodes[2],R=L.parentNode;r.appendChild(E);let ee=(t,n,r)=>{let i=()=>u(Q.Item,()=>({form:e,name:`includeDrafts`,valuePropName:`checked`,render:e=>u(re,()=>({...e,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`包含草稿和实验分支`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}))}));return t==null?i():g(t,r,i)},z=O.nextSibling;A.removeChild(O),t({parent:A,before:z},()=>ee,()=>({}));let B=(e,t,n)=>{let r=()=>u(K,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`执行搜索`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},V=M.nextSibling;N.removeChild(M),t({parent:N,before:V},()=>B,()=>({}));let H=(e,t,n)=>{let r=()=>u(K,()=>({type:`outlined`,onClick:()=>i.resetFields(),children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`清空条件`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},te=P.nextSibling;F.removeChild(P),t({parent:F,before:te},()=>H,()=>({}));let U=(e,t,n)=>{let r=()=>u(K,()=>({type:`text`,onClick:()=>{i.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:(e,t,n)=>{let r=()=>h(e=>{let t=I();k(t,j(`填入示例`));let n=j(``),r=j(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return e==null?r():g(e,n,r)},ne=L.nextSibling;R.removeChild(L),t({parent:R,before:ne},()=>U,()=>({}));let W=j(``),G=j(``);return r.insertBefore(W,r.firstChild),r.appendChild(G),[r.firstChild,r.lastChild]})}));return e==null?a():g(e,r,a)},F=r.nextSibling;p.removeChild(r),t({parent:p,before:F},()=>P,()=>({})),t({parent:y,before:_},()=>G(_t({keyword:String(a.value??``),repository:String(s.value??``),assignee:String(o.value??``),reviewer:String(c.value??``),includeDrafts:!!l.value})||`暂无 query string`),()=>({}));let L=j(``);x.insertBefore(L,b),x.removeChild(b),d(L,()=>String(a.value??``)||`未填写`);let R=j(``);C.insertBefore(R,S),C.removeChild(S),d(R,()=>String(s.value??``)||`未填写`);let ee=j(``);T.insertBefore(ee,w),T.removeChild(w),d(ee,()=>String(o.value??``)||`未填写`);let z=j(``);return D.insertBefore(z,E),D.removeChild(E),d(z,()=>String(c.value??``)||`未填写`),m(A,O,()=>l.value?{__rue_compiled_branch_key:!0,create:()=>h(e=>{let t=j(`是`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>h(e=>{let t=j(`否`);return[t,t]})}),t({parent:N,before:M},()=>G(f.value),()=>({})),[n,n]}))},Dt=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Ot=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],kt=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],At=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],jt=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],Mt=(e,n,r)=>{let i=L(`preview`),a=L(`preview`),o=L(`preview`),s=L(`preview`),c=L(`preview`),l=L(`preview`),d=L(`preview`),f=L(`preview`),p=L(`preview`);return R(()=>u(ie,()=>({children:(e,n,r)=>{let m=()=>v(e=>{let n=I(),r=mt().content.cloneNode(!0),m=r.firstChild,h=m.childNodes[4].childNodes[0],v=h.parentNode,y=m.childNodes[6],b=y.parentNode,x=m.childNodes[7],S=x.parentNode,C=m.childNodes[8],w=C.parentNode,T=m.childNodes[9],E=T.parentNode,D=m.childNodes[10],k=D.parentNode,A=m.childNodes[11],N=A.parentNode,P=m.childNodes[12],F=P.parentNode,L=m.childNodes[13],R=L.parentNode,ee=m.childNodes[14],B=ee.parentNode,te=m.childNodes[17].childNodes[0],U=te.parentNode,ne=m.childNodes[20],W=ne.parentNode,G=m.childNodes[21],K=G.parentNode,re=m.childNodes[22],q=re.parentNode;n.appendChild(r);let ie=[];V(()=>{ie=M(v,h,ie,At||[],(e,t)=>e.title,(e,t)=>{let n=_(e);return z((e,t,r)=>{let i=()=>u(gt,()=>({eyebrow:n.get().eyebrow,title:n.get().title,description:n.get().description,items:n.get().items}));return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),H(()=>O(ie));let ae=(e,t,n)=>{let r=()=>u(J,()=>({title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:i,preview:()=>u(vt,()=>({})),code:`<Form
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
`}));return e==null?r():g(e,n,r)},oe=y.nextSibling;b.removeChild(y),t({parent:b,before:oe},()=>ae,()=>({}));let se=(e,t,n)=>{let r=()=>u(J,()=>({title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:a,preview:()=>u(yt,()=>({})),code:`const InstanceMethodsShowcase: FC = () => {
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
`}));return e==null?r():g(e,n,r)},ce=x.nextSibling;S.removeChild(x),t({parent:S,before:ce},()=>se,()=>({}));let le=(e,t,n)=>{let r=()=>u(J,()=>({title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:o,preview:()=>u(bt,()=>({})),code:`const [form] = Form.useForm()

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
`}));return e==null?r():g(e,n,r)},ue=C.nextSibling;w.removeChild(C),t({parent:w,before:ue},()=>le,()=>({}));let de=(e,t,n)=>{let r=()=>u(J,()=>({title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:s,preview:()=>u(xt,()=>({})),code:`<Form.Item
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
`}));return e==null?r():g(e,n,r)},fe=T.nextSibling;E.removeChild(T),t({parent:E,before:fe},()=>de,()=>({}));let pe=(e,t,n)=>{let r=()=>u(J,()=>({title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:c,preview:()=>u(St,()=>({})),code:`<Form.Item
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
`}));return e==null?r():g(e,n,r)},me=D.nextSibling;k.removeChild(D),t({parent:k,before:me},()=>pe,()=>({}));let he=(e,t,n)=>{let r=()=>u(J,()=>({title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:l,preview:()=>u(Ct,()=>({})),code:`const [form] = Form.useForm()

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
`}));return e==null?r():g(e,n,r)},ge=A.nextSibling;N.removeChild(A),t({parent:N,before:ge},()=>he,()=>({}));let _e=(e,t,n)=>{let r=()=>u(J,()=>({title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:d,preview:()=>u(Tt,()=>({})),code:`const DynamicListShowcase: FC = () => {
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
`}));return e==null?r():g(e,n,r)},Y=P.nextSibling;F.removeChild(P),t({parent:F,before:Y},()=>_e,()=>({}));let X=(e,t,n)=>{let r=()=>u(J,()=>({title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:f,preview:()=>u(wt,()=>({})),code:`const LongFormScrollShowcase: FC = () => {
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
`}));return e==null?r():g(e,n,r)},ve=L.nextSibling;R.removeChild(L),t({parent:R,before:ve},()=>X,()=>({}));let ye=(e,t,n)=>{let r=()=>u(J,()=>({title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:p,preview:()=>u(Et,()=>({})),code:`const [form] = Form.useForm()

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
`}));return e==null?r():g(e,n,r)},be=ee.nextSibling;B.removeChild(ee),t({parent:B,before:be},()=>ye,()=>({}));let xe=[];V(()=>{xe=M(U,te,xe,jt||[],(e,t)=>e.title,(e,t)=>{let n=_(e);return z((e,t,r)=>{let i=()=>u(gt,()=>({eyebrow:n.get().eyebrow,title:n.get().title,description:n.get().description}));return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),H(()=>O(xe));let Z=(e,t,n)=>{let r=()=>u(ht,()=>({title:`Form`,rows:Dt}));return e==null?r():g(e,n,r)},Se=ne.nextSibling;W.removeChild(ne),t({parent:W,before:Se},()=>Z,()=>({}));let Ce=(e,t,n)=>{let r=()=>u(ht,()=>({title:`Form.Item`,rows:Ot}));return e==null?r():g(e,n,r)},we=G.nextSibling;K.removeChild(G),t({parent:K,before:we},()=>Ce,()=>({}));let Te=(e,t,n)=>{let r=()=>u(ht,()=>({title:`Form.List and Hooks`,rows:kt}));return e==null?r():g(e,n,r)},Ee=re.nextSibling;q.removeChild(re),t({parent:q,before:Ee},()=>Te,()=>({}));let De=j(``),Oe=j(``);return n.insertBefore(De,n.firstChild),n.appendChild(Oe),[n.firstChild,n.lastChild]});return e==null?m():g(e,r,m)}})))};export{Mt as default};