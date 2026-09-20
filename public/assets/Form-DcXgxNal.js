import{Bt as e,Ct as t,Dt as n,F as r,H as i,Ht as a,I as o,It as s,Jt as c,Lt as l,Q as u,Qt as d,Rt as f,St as p,U as m,Ut as h,V as g,Vt as _,Wt as v,Y as y,_n as b,_t as x,dn as S,en as C,f as w,fn as T,ft as E,g as D,gn as O,gt as k,h as A,hn as j,in as M,it as N,m as P,mn as F,on as I,p as L,pn as R,q as ee,qt as z,sn as B,st as V,tt as H,vn as te,vt as U,yn as W,yt as G,zt as K}from"./rue-runtime-Cv6BZekS.js";import{t as q}from"./button-CA4Ckf85.js";import{t as ne}from"./checkbox-DvBPSewf.js";import{t as J}from"./input-CWLqFwIt.js";import{r as re}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as Y}from"./PreviewBlock-CeK_jzYH.js";var ie=W(`<ul><!--rue:text-hole:0--><!--rue:text-hole:1--></ul>`),ae=W(`<input type="checkbox" class="checkbox">`),oe=W(`<input class="input">`),se=W(`<div><!--rue:text-hole:0--><div><div class="min-w-0 flex-1"><!--rue:opaque-hole:1--></div><!--rue:text-hole:2--></div><!--rue:text-hole:3--><!--rue:text-hole:4--></div>`),ce=W(`<div><!--rue:text-hole:0--></div>`),le=W(`<div data-rue-form-list-shell="true"><!--rue:text-hole:0--></div>`),ue=W(`<div data-rue-form="true"><!--rue:text-hole:0--></div>`),de=W(`<section data-rue-form="true"><!--rue:text-hole:0--></section>`),fe=W(`<form data-rue-form="true"><!--rue:text-hole:0--></form>`),pe=0,me={required:"${label} 为必填项",whitespace:"${label} 不能只包含空白字符",pattern:"${label} 格式不正确",types:{string:"${label} 不是合法文本",number:"${label} 不是合法数字",boolean:"${label} 不是合法布尔值",array:"${label} 不是合法数组",email:"${label} 不是合法邮箱",url:"${label} 不是合法链接"},string:{len:"${label} 需为 ${len} 个字符",min:"${label} 至少 ${min} 个字符",max:"${label} 最多 ${max} 个字符"},number:{len:"${label} 需等于 ${len}",min:"${label} 不能小于 ${min}",max:"${label} 不能大于 ${max}"},array:{len:"${label} 需包含 ${len} 项",min:"${label} 至少包含 ${min} 项",max:"${label} 最多包含 ${max} 项"}},he=(...e)=>e.filter(Boolean).join(` `),ge=e=>!!e&&typeof e==`object`,X=e=>{if(Array.isArray(e))return e.map(e=>X(e));if(ge(e)){let t={};return Object.keys(e).forEach(n=>{t[n]=X(e[n])}),t}return e},Z=e=>e==null?[]:Array.isArray(e)?[...e]:[e],_e=e=>e.map(e=>`${typeof e}:${String(e)}`).join(`__rue_form_path__`),ve=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),ye=(e,t)=>t.reduce((e,t)=>{if(e!=null)return e[t]},e),be=(e,t)=>{if(t.length===0)return e!==void 0;let n=e;for(let e of t){if(n==null||!(e in Object(n)))return!1;n=n[e]}return!0},xe=(e,t,n)=>{if(t.length===0)return X(n);let[r,...i]=t,a=e??(typeof r==`number`?[]:{}),o=Array.isArray(a)?[...a]:{...a};return o[r]=i.length===0?X(n):xe(o[r],i,n),o},Se=(e,t)=>{if(t.length===0)return;if(!ge(e)&&!Array.isArray(e))return e;let[n,...r]=t,i=Array.isArray(e)?[...e]:{...e};return r.length===0?(Array.isArray(i)&&typeof n==`number`?i.splice(n,1):delete i[n],i):(i[n]=Se(i[n],r),i)},Ce=(e,t)=>{if(!ge(t)&&!Array.isArray(t))return X(t);if(Array.isArray(t))return t.map(e=>X(e));let n=ge(e)?{...e}:{};return Object.keys(t).forEach(e=>{n[e]=Ce(n[e],t[e])}),n},we=(e,t)=>xe({},e,t),Te=e=>e?Array.isArray(e)?e:[e]:[`onChange`],Ee=(e,t)=>t===`number`?`number`:Array.isArray(e)?`array`:typeof e==`number`?`number`:`string`,De=(e,t)=>{let n=Ee(e,t);return n===`array`?Array.isArray(e)?e.length:0:n===`number`?Number(e):e==null?0:String(e).length},Oe=(e,t)=>e==null?!0:t===`array`?!Array.isArray(e)||e.length===0:typeof e==`string`?e===``:Array.isArray(e)?e.length===0:!1,ke=e=>{try{return new URL(e),!0}catch{return!1}},Ae=(e,t)=>{if(!t)return!0;switch(t){case`string`:return typeof e==`string`;case`number`:return typeof e==`number`&&!Number.isNaN(e);case`boolean`:return typeof e==`boolean`;case`array`:return Array.isArray(e);case`email`:return typeof e==`string`&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);case`url`:return typeof e==`string`&&ke(e);default:return!0}},je=(e,t,n,r,i)=>{if(e.message)return e.message;if(i===`required`)return r.required??me.required??"${label} 为必填项";if(i===`whitespace`)return r.whitespace??me.whitespace??"${label} 不能为空";if(i===`pattern`)return r.pattern??me.pattern??"${label} 格式不正确";if(i===`type`)return r.types?.[e.type??`string`]??me.types?.[e.type??`string`]??"${label} 类型不正确";let a=Ee(t,e.type);return(r[a]??me[a]??{})[i??`len`]??"${label} 校验失败"},Me=(e,t)=>e.replace(/\$\{(.*?)\}/g,(e,n)=>{let r=String(n).trim();return t[r]==null?``:String(t[r])}),Ne=(e,t)=>{if(typeof e==`string`||typeof e==`number`)return String(e);let n=t[t.length-1];return n==null?`字段`:String(n)},Pe=(e,t)=>e===void 0?!!t?.some(e=>e.required&&!e.warningOnly):e,Fe=async(e,t,n,r,i,a,o)=>{let s=[],c=[],l=Ne(a?.label??i,e);for(let e of n){let n=typeof e.transform==`function`?e.transform(t):t,i=null;if(e.required&&Oe(n,e.type)?i=je(e,n,l,o,`required`):e.whitespace&&typeof n==`string`&&n.trim()===``?i=je(e,n,l,o,`whitespace`):!Oe(n,e.type)&&e.type&&!Ae(n,e.type)?i=je(e,n,l,o,`type`):!Oe(n,e.type)&&e.pattern&&!e.pattern.test(String(n))?i=je(e,n,l,o,`pattern`):!Oe(n,e.type)&&e.len!==void 0?De(n,e.type)!==e.len&&(i=je(e,n,l,o,`len`)):!Oe(n,e.type)&&e.min!==void 0?De(n,e.type)<e.min&&(i=je(e,n,l,o,`min`)):!Oe(n,e.type)&&e.max!==void 0&&De(n,e.type)>e.max&&(i=je(e,n,l,o,`max`)),!i&&typeof e.validator==`function`)try{let t=await e.validator(e,n,r);typeof t==`string`&&t.trim()&&(i=t)}catch(e){i=e instanceof Error?e.message:String(e)}if(!i)continue;let u=Me(i,{label:l,name:l,min:e.min,max:e.max,len:e.len,...a});e.warningOnly?c.push(u):s.push(u)}return{errors:s,warnings:c}},Ie=(e,t)=>e.getPreserve()===void 0?t!==!1:e.getPreserve()!==!1,Le=()=>{let e=V(0),t=new Map,n=new Map,r=new Map,i=new Set,a=!1,o={},s={},c=!1,l=null,u={validateTrigger:[`onChange`],validateMessages:me},d=()=>{e.value+=1,Array.from(i).forEach(e=>e())},f=()=>{a||(a=!0,queueMicrotask(()=>{a=!1,d()}))},p=e=>{let t=_e(e),n=r.get(t);if(n)return n;let i={touched:!1,validating:!1,errors:[],warnings:[]};return r.set(t,i),i},m=e=>{let t=e.getNamePath();return t&&t.length?`${e.kind}:${_e(t)}`:e.id},h=e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings],touched:t.touched,validating:t.validating,value:X(ye(o,e))}},g=e=>{u.onFieldsChange?.([h(e)],E.getFieldsValue(!0))},_=(e,t,n=!0)=>{let r=p(e);Object.assign(r,t),n&&(g(e),d(),f())},v=e=>{for(let n of t.values()){let t=n.getNamePath();if(t&&ve(t,e))return n}return null},y=async(e,t)=>{let n=e.getNamePath();if(!n||n.length===0)return null;let r=e.getValidateTrigger();if(t&&r.length>0&&!r.includes(t))return null;let i=e.getRules();if(!i.length)return _(n,{errors:[],warnings:[],validating:!1}),null;_(n,{validating:!0});let a=await Fe(n,ye(o,n),i,o,e.getLabel(),e.getMessageVariables(),u.validateMessages);return _(n,{validating:!1,errors:a.errors,warnings:a.warnings}),!a.errors.length&&!a.warnings.length?null:{name:[...n],errors:[...a.errors],warnings:[...a.warnings]}},b=async e=>{let n=Array.from(t.values());for(let t of n){let n=t.getNamePath();!n||ve(n,e)||t.getDependencies().some(t=>ve(t,e))&&await y(t)}},x=async(e,t,n)=>{if(o=xe(o,e,t),n?.touch){let t=p(e);t.touched=!0}d(),g(e),n?.emitValues!==!1&&u.onValuesChange?.(we(e,t),E.getFieldsValue(!0));let r=v(e);r&&await y(r,n?.triggerName),await b(e),f()},S=e=>{let i=m(e),a=n.get(i);a&&a!==e.id&&t.delete(a),t.set(e.id,e),n.set(i,e.id);let c=e.getNamePath();if(c&&c.length){let t=e.getInitialValue();!be(s,c)&&t!==void 0&&(s=xe(s,c,t)),!be(o,c)&&t!==void 0&&(o=xe(o,c,t)),p(c)}return()=>{let a=n.get(i)===e.id;if(t.delete(e.id),!a)return;n.delete(i);let s=e.getNamePath();!s||!s.length||Ie(e,u.preserve)||(o=Se(o,s),r.delete(_e(s)),d())}},C=e=>!c&&(s=X(e??{}),o=X(e??{}),c=!0,!0),w=async e=>{let n=e?.map(e=>Z(e)),r=[],i=Array.from(t.values()),a=new Set;for(let e of i){let t=m(e);if(a.has(t))continue;a.add(t);let i=e.getNamePath();if(!i||!i.length||n&&!n.some(e=>ve(i,e)))continue;let o=await y(e);o&&o.errors.length>0&&r.push(o)}if(r.length>0)throw{values:E.getFieldsValue(!0),errorFields:r,outOfDate:!1};return E.getFieldsValue(!0)},T=(e,t)=>{let n=Z(e),r=u.name?.trim(),i=n.map(e=>String(e)).join(`__`),a=r?[`${r}__${i}`,i]:[i],o=a.map(e=>{let t=typeof CSS<`u`&&typeof CSS.escape==`function`?CSS.escape(e):e.replace(/([ #;?%&,.+*~':"!^$[\]()=>|/@])/g,`\\$1`);return l?.querySelector(`#${t}`)}).find(Boolean)??a.map(e=>typeof document>`u`?null:document.getElementById(e)).find(Boolean);o&&(o.scrollIntoView(t),t?.focus&&`focus`in o&&typeof o.focus==`function`&&o.focus())},E={getFieldValue(t){return e.value,X(ye(o,Z(t)))},getFieldsValue(t){return e.value,t===!0||t==null?X(o):t.reduce((e,t)=>{let n=Z(t);return xe(e,n,ye(o,n))},{})},setFieldValue(e,t){x(Z(e),t,{emitValues:!1})},setFieldsValue(e){o=Ce(o,e),d()},resetFields(e){if(!e?.length){o=X(s),r.forEach(e=>{e.touched=!1,e.validating=!1,e.errors=[],e.warnings=[]}),d();return}e.forEach(e=>{let t=Z(e),n=ye(s,t);o=n===void 0?Se(o,t):xe(o,t,n);let r=p(t);r.touched=!1,r.validating=!1,r.errors=[],r.warnings=[]}),d()},validateFields:w,submit(){w().then(e=>{u.onFinish?.(e)}).catch(e=>{if(u.onFinishFailed?.(e),u.scrollToFirstError&&e.errorFields[0]){let t=u.scrollToFirstError===!0?{block:`center`}:u.scrollToFirstError;T(e.errorFields[0].name,t)}})},scrollToField:T,isFieldTouched(e){return p(Z(e)).touched},getFieldError(e){return[...p(Z(e)).errors]},getFieldsError(e){if(!e?.length){let e=new Set;return Array.from(t.values()).filter(t=>{let n=m(t);return!e.has(n)&&(e.add(n),!0)}).map(e=>e.getNamePath()).filter(e=>!!e&&e.length>0).map(e=>{let t=p(e);return{name:[...e],errors:[...t.errors],warnings:[...t.warnings]}})}return e.map(e=>{let t=Z(e),n=p(t);return{name:[...t],errors:[...n.errors],warnings:[...n.warnings]}})},__INTERNAL__:{version:e,setRuntimeOptions(e){u=e},ensureInitialized:C,registerField:S,getMeta:p,validateFieldByPath(e,t){let n=v(e);return n?y(n,t):Promise.resolve(null)},updateValueFromControl(e,t,n){return x(e,t,{touch:n.touch,triggerName:n.triggerName})},updateListValue(e,t){return x(e,t,{touch:!0,emitValues:!1})},getDefaultValidateTrigger(){return u.validateTrigger},setRootElement(e){l=e},subscribe(e){return i.add(e),()=>{i.delete(e)}},emitUpdate(){d()}}};return E},Re=(e,t,n)=>{let i=U(k(e,`className`)),s=U(k(e,`errors`)),c=U(k(e,`style`)),l=U(k(e,`warnings`));return m(a(()=>{let e=H(()=>[...s.get()??[],...l.get()??[]].filter(e=>e!=null));return e.get(),e.get().length?{__rue_compiled_branch_key:1,create:()=>v(e=>{let t=ie().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0],u=a.parentNode,d=t.childNodes[1],f=d.parentNode,m;M(()=>{let e=he(`mt-3 grid gap-1.5 text-[0.8rem] leading-6`,i.get()),t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,n.setAttribute(`class`,t))});let h;M(()=>{let e=c.get(),t=p(e);Object.is(h,t)||(h=t,n.style.cssText=t)});let g=[];z(()=>{let e=(s.get()??[])||[];g=A(u,a,g,e,(e,t)=>`error-${t}`,(e,t)=>{let n=U(e);return L((e,t,i)=>{let a=()=>r(e=>{let t=j(`li`,e);t.setAttribute(`class`,`text-error`);let r=O(``);return T(t,r),o(r,()=>n.get()),[t,t]});return e==null?a():_(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(g));let v=[];return z(()=>{let e=(l.get()??[])||[];v=A(f,d,v,e,(e,t)=>`warning-${t}`,(e,t)=>{let n=U(e);return L((e,t,i)=>{let a=()=>r(e=>{let t=j(`li`,e);t.setAttribute(`class`,`text-warning`);let r=O(``);return T(t,r),o(r,()=>n.get()),[t,t]});return e==null?a():_(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(v)),[t,t]})}:{__rue_compiled_branch_key:0,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}}),e=>C(()=>{i.set(e.className),s.set(e.errors),c.set(e.style),l.set(e.warnings)}),()=>x(e))},ze=s(void 0),Be=()=>{let e=f(ze);if(!e)throw Error(`A form instance or ancestor Form is required`);return e},Ve=e=>[u(e??Le()).current],He=(e,t)=>{let n=t??Be();return H(()=>(n.__INTERNAL__.version.value,n.getFieldValue(e)))},Ue=(n,r,i)=>{let o=U(k(n,`children`)),s=U(k(n,`className`)),c=U(k(n,`colon`)),l=U(k(n,`control`)),u=U(k(n,`controlProps`)),d=U(k(n,`dependencies`)),b=U(k(n,`extra`)),w=U(k(n,`form`)),E=U(k(n,`getValueFromEvent`)),D=U(k(n,`getValueProps`)),A=U(k(n,`hasFeedback`)),N=U(k(n,`help`)),P=U(k(n,`hidden`)),L=U(k(n,`htmlFor`)),ee=U(k(n,`initialValue`)),z=U(k(n,`label`)),V=U(k(n,`messageVariables`)),te=U(k(n,`name`)),W=U(k(n,`noStyle`)),q=U(k(n,`normalize`)),ne=U(k(n,`preserve`)),J=U(k(n,`render`)),re=U(k(n,`required`)),Y=U(k(n,`rules`)),ie=U(k(n,`shouldUpdate`)),ce=U(k(n,`style`)),le=U(k(n,`trigger`)),ue=U(k(n,`validateTrigger`)),de=U(k(n,`valuePropName`));return y(()=>m(a(()=>{let n=H(()=>w.get()??f(ze));n.get();let r=n,i=H(()=>te.get()==null?void 0:Z(te.get()));i.get();let m=i,y=H(()=>L.get()??m.get()?.map(String).join(`__`));y.get();let x=y;if(m.get()&&!r.get())throw Error(`A named FormItem requires a form`);if(m.get()&&r.get()){let e=r.get().__INTERNAL__.registerField({id:`rue-form-item-${pe++}`,kind:`item`,getNamePath:()=>m.get(),getRules:()=>Y.get()??[],getRequired:()=>re.get(),getLabel:()=>z.get(),getMessageVariables:()=>V.get(),getValidateTrigger:()=>Te(ue.get()),getDependencies:()=>(d.get()??[]).map(Z),getInitialValue:()=>ee.get(),getPreserve:()=>ne.get()});I(e)}let C=H(()=>{if(!(!r.get()||!m.get()))return r.get().__INTERNAL__.version.value,r.get().getFieldValue(m.get())}),k=H(()=>{if(!r.get()||!m.get())return{errors:[],warnings:[],validating:!1};r.get().__INTERNAL__.version.value;let e=r.get().__INTERNAL__.getMeta(m.get());return{...e,errors:[...e.errors],warnings:[...e.warnings]}}),U=e=>{if(!r.get()||!m.get())return;let t=e.target,n=E.get()?E.get()(e):l.get()===`checkbox`||de.get()===`checked`?t.checked:t.value,i=q.get()?q.get()(n,C.value,r.get().getFieldsValue(!0)):n;r.get().__INTERNAL__.updateValueFromControl(m.get(),i,{touch:!0,triggerName:le.get()??`onChange`})},fe=()=>{r.get()&&m.get()&&Te(ue.get()).includes(`onBlur`)&&r.get().__INTERNAL__.validateFieldByPath(m.get(),`onBlur`)},me=H(()=>de.get()??`value`);me.get();let ge=me,X=H(()=>le.get()??`onChange`);X.get();let _e=X,ve=H(()=>J.get()?D.get()?.(C.value)??{[ge.get()]:C.value}:{});S(()=>ve.get());let ye=ve,be={id:x.get(),[_e.get()]:U,onBlur:fe};_e.get()===`onChange`&&ge.get()===`value`&&(be.onInput=U),Object.keys(ye.get()).forEach(e=>{Object.defineProperty(be,e,{enumerable:!0,configurable:!0,get:()=>D.get()?.(C.value)?.[e]??(e===ge.get()?C.value:ye.get()[e])})}),ge.get()in be||Object.defineProperty(be,ge.get(),{enumerable:!0,configurable:!0,get:()=>C.value});let xe={get errors(){return{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>k.value.errors}},get warnings(){return{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>k.value.warnings}},get validating(){return{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>k.value.validating}}},Se={},Ce,we=!1,Ee=H(()=>!m.get()&&r.get()&&J.get()?H(()=>{r.get().__INTERNAL__.version.value;let e=r.get().getFieldsValue(!0);return(!we||ie.get()===!0||ie.get()==null||typeof ie.get()==`function`&&ie.get()(Se,e))&&(Ce=J.get()(e,xe,r.get()),we=!0),Se=e,Ce}):void 0);Ee.get();let De=Ee,Oe=H(()=>m.get()&&J.get()?J.get()(be,xe,r.get()):void 0);Oe.get();let ke=Oe,Ae=(n,r,i)=>a(()=>De.get()?{__rue_compiled_branch_key:0,create:()=>v(t=>{let n=F(),r=R(`rue:slot:anchor`);T(n,r),e({parent:n,before:r},()=>K(De.get().value),()=>({}));let i=O(``),a=O(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:1,create:()=>J.get()?v(()=>{let t=F(),n=R(`rue:slot:anchor`);T(t,n),e({parent:t,before:n},()=>K(ke.get()),()=>({}));let r=O(``),i=O(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]}):l.get()===`checkbox`?v(e=>{let n=ae().content.cloneNode(!0).firstChild,r=n;t(r,()=>u.get(),[`id`,`type`,`className`,`checked`,`onChange`,`onBlur`,`__rue_static_template_id__`]);let i;M(()=>{let e=x.get();Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`id`):r.setAttribute(`id`,String(e)))}),r.setAttribute(`type`,`checkbox`),r.setAttribute(`class`,`checkbox`);let a;M(()=>{let e=!!C.value;Object.is(a,e)||(a=e,r.checked=e)});let o=e=>{let t=U;typeof t==`function`&&t(e)};r.addEventListener(`change`,o),B(()=>r.removeEventListener(`change`,o));let s=e=>{let t=fe;typeof t==`function`&&t(e)};return r.addEventListener(`focusout`,s),B(()=>r.removeEventListener(`focusout`,s)),[n,n]}):l.get()===`textarea`?v(e=>{let n=j(`textarea`,e);t(n,()=>u.get(),[`id`,`className`,`value`,`onInput`,`onChange`,`onBlur`]);let r;M(()=>{let e=x.get();Object.is(r,e)||(r=e,e==null||e===!1?n.removeAttribute(`id`):n.setAttribute(`id`,String(e)))}),n.setAttribute(`class`,`textarea`);let i;M(()=>{let e=C.value??``,t=e==null?``:String(e);Object.is(i,t)||(i=t,n.value=t)});let a=e=>{let t=U;typeof t==`function`&&t(e)};n.addEventListener(`input`,a),B(()=>n.removeEventListener(`input`,a));let o=e=>{let t=U;typeof t==`function`&&t(e)};n.addEventListener(`change`,o),B(()=>n.removeEventListener(`change`,o));let s=e=>{let t=fe;typeof t==`function`&&t(e)};return n.addEventListener(`focusout`,s),B(()=>n.removeEventListener(`focusout`,s)),[n,n]}):l.get()===`input`?v(e=>{let n=oe().content.cloneNode(!0).firstChild,r=n;t(r,()=>u.get(),[`id`,`className`,`value`,`onInput`,`onChange`,`onBlur`,`__rue_static_template_id__`]);let i;M(()=>{let e=x.get();Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`id`):r.setAttribute(`id`,String(e)))}),r.setAttribute(`class`,`input`);let a;M(()=>{let e=C.value??``,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.value=t)});let o=e=>{let t=U;typeof t==`function`&&t(e)};r.addEventListener(`input`,o),B(()=>r.removeEventListener(`input`,o));let s=e=>{let t=U;typeof t==`function`&&t(e)};r.addEventListener(`change`,s),B(()=>r.removeEventListener(`change`,s));let c=e=>{let t=fe;typeof t==`function`&&t(e)};return r.addEventListener(`focusout`,c),B(()=>r.removeEventListener(`focusout`,c)),[n,n]}):v(t=>{let n=F(),r=R(`rue:compiled-slot`);T(n,r),e({parent:n,before:r},()=>o.get(),()=>({}));let i=O(``),a=O(``);return n.insertBefore(i,n.firstChild),n.appendChild(a),[n.firstChild,n.lastChild]})});return W.get()?{__rue_compiled_branch_key:3,__rue_compiled_branch_refresh:!0,create:()=>g(Ae,()=>({}))}:{__rue_compiled_branch_key:4,__rue_compiled_branch_refresh:!0,create:()=>v(t=>{let n=se().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[1],o=n.childNodes[0],l=o.parentNode,u=n.childNodes[1].childNodes[0].childNodes[0],d=u.parentNode,f=n.childNodes[1].childNodes[1],m=f.parentNode,x=n.childNodes[2],S=x.parentNode,C=n.childNodes[3],w=C.parentNode,E;M(()=>{let e=he(`rue-form-item grid content-start self-start gap-3`,P.get()?`hidden`:void 0,s.get()),t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,r.setAttribute(`class`,t))});let D;M(()=>{let e=ce.get(),t=p(e);Object.is(D,t)||(D=t,r.style.cssText=t)});let I;M(()=>{let e=he(`min-w-0 flex-1`,A.get()?`flex items-center gap-2`:void 0),t=e===!1||e==null?``:String(e);Object.is(I,t)||(I=t,i.setAttribute(`class`,t))}),h(l,o,()=>z.get()==null?{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!0,create:()=>v(t=>{let n=j(`label`,t),r;M(()=>{let e=y.get();Object.is(r,e)||(r=e,e==null||e===!1?n.removeAttribute(`for`):n.setAttribute(`for`,String(e)))}),n.setAttribute(`class`,`font-medium`);let i=j(`span`,n);T(n,i);let o=R(`rue:compiled-slot`);T(i,o),e({parent:i,before:o},()=>K(z.get()),()=>({}));let s=R(`rue:compiled-slot`);return T(n,s),e({parent:n,before:s},()=>c.get()===!1?(e,t,n)=>{let r=()=>G(e=>{let t=O(``);return[t,t]});return e==null?r():_(e,n,r)}:(e,t,n)=>{let r=()=>G(e=>{let t=O(`:`);return[t,t]});return e==null?r():_(e,n,r)},()=>({})),a(()=>Pe(re.get(),Y.get())?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=j(`span`,e);return t.setAttribute(`class`,`text-error`),T(t,O(`*`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]})});let L=(e,t,n)=>{let r=()=>g(Ae,()=>({}));return e==null?r():_(e,n,r)},ee=u.nextSibling;return d.removeChild(u),e({parent:d,before:ee},()=>L,()=>({})),h(m,f,()=>A.get()?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=j(`span`,e);return t.setAttribute(`data-rue-form-feedback`,`true`),t.setAttribute(`aria-hidden`,`true`),t.setAttribute(`class`,`inline-flex h-5 w-5 shrink-0 items-center justify-center leading-none`),a(()=>k.value.validating?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=O(`…`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>a(()=>k.value.errors.length?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=O(`×`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`✓`);return[t,t]})})}).__rue_compiled_mount(t),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}),h(S,x,()=>N.get()==null?{__rue_compiled_branch_key:!1,create:()=>g(Re,()=>({errors:k.value.errors,warnings:k.value.warnings}))}:{__rue_compiled_branch_key:!0,create:()=>v(t=>{let n=j(`div`,t),r=R(`rue:compiled-slot`);return T(n,r),e({parent:n,before:r},()=>K(N.get()),()=>({})),[n,n]})}),h(w,C,()=>b.get()==null?{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!0,create:()=>v(t=>{let n=j(`div`,t);n.setAttribute(`class`,`text-xs`);let r=R(`rue:compiled-slot`);return T(n,r),e({parent:n,before:r},()=>K(b.get()),()=>({})),[n,n]})}),[n,n]})}}),e=>C(()=>{o.set(e.children),s.set(e.className),c.set(e.colon),l.set(e.control),u.set(e.controlProps),d.set(e.dependencies),b.set(e.extra),w.set(e.form),E.set(e.getValueFromEvent),D.set(e.getValueProps),A.set(e.hasFeedback),N.set(e.help),P.set(e.hidden),L.set(e.htmlFor),ee.set(e.initialValue),z.set(e.label),V.set(e.messageVariables),te.set(e.name),W.set(e.noStyle),q.set(e.normalize),ne.set(e.preserve),J.set(e.render),re.set(e.required),Y.set(e.rules),ie.set(e.shouldUpdate),ce.set(e.style),le.set(e.trigger),ue.set(e.validateTrigger),de.set(e.valuePropName)}),()=>x(n)))};function We(e,t){let n=e,r=Z(t),i=()=>{let t=e.getFieldValue(r);return Array.isArray(t)?[...t]:[]};return{add(e,t){let a=i();a.splice(t??a.length,0,e??null),n.__INTERNAL__.updateListValue(r,a)},remove(e){let t=i();for(let n of(Array.isArray(e)?e:[e]).sort((e,t)=>t-e))n>=0&&n<t.length&&t.splice(n,1);n.__INTERNAL__.updateListValue(r,t)},move(e,t){let a=i();if(e<0||t<0||e>=a.length||t>=a.length)return;let[o]=a.splice(e,1);a.splice(t,0,o),n.__INTERNAL__.updateListValue(r,a)}}}var Q=Object.assign((t,n,r)=>{let i=U(k(t,`children`)),o=U(k(t,`className`)),s=U(k(t,`component`)),u=U(k(t,`form`)),d=U(k(t,`initialValues`)),f=U(k(t,`name`)),h=U(k(t,`onFieldsChange`)),g=U(k(t,`onFinish`)),_=U(k(t,`onFinishFailed`)),b=U(k(t,`onSubmit`)),w=U(k(t,`onValuesChange`)),D=U(k(t,`preserve`)),A=U(k(t,`render`)),j=U(k(t,`scrollToFirstError`)),P=U(k(t,`style`)),I=U(k(t,`validateMessages`)),L=U(k(t,`validateTrigger`));return y(()=>m(a(()=>{let t=ee(`FormRoot:hook:0`,u.get()??Le()).current,n=H(()=>t.__INTERNAL__.ensureInitialized(d.get()));S(()=>n.get());let r=n;l(ze,()=>t),c(`FormRoot:setup-effect:0:0`,()=>E(()=>t.__INTERNAL__.setRuntimeOptions({name:f.get(),preserve:D.get(),validateTrigger:Te(L.get()),validateMessages:{...me,...I.get()},scrollToFirstError:j.get(),onValuesChange:w.get(),onFieldsChange:h.get(),onFinish:g.get(),onFinishFailed:_.get()}))),c(`FormRoot:setup-effect:0:1`,()=>N(()=>{r.get()&&queueMicrotask(()=>t.__INTERNAL__.emitUpdate())}));let a=e=>t.__INTERNAL__.setRootElement(e),m=A.get()?.(t),y=e=>{e.preventDefault(),b.get()?.(e),t.submit()};return s.get()===!1?{__rue_compiled_branch_key:0,create:()=>v(t=>{let n=F(),r=R(`rue:slot:anchor`);T(n,r),e({parent:n,before:r},()=>A.get()?K(m):i.get(),()=>({}));let a=O(``),o=O(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:s.get()===`div`?{__rue_compiled_branch_key:1,create:()=>v(t=>{let n=ue().content.cloneNode(!0).firstChild,r=n,s=n.childNodes[0],c=s.parentNode,l=a;typeof l==`function`?l(r):l&&typeof l==`object`&&`current`in l&&(l.current=r),B(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)});let u;M(()=>{let e=he(`rue-form grid gap-6`,o.get()),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,r.setAttribute(`class`,t))});let d;return M(()=>{let e=P.get(),t=p(e);Object.is(d,t)||(d=t,r.style.cssText=t)}),r.setAttribute(`data-rue-form`,`true`),e({parent:c,before:s},()=>A.get()?K(m):i.get(),()=>({})),[n,n]})}:s.get()===`section`?{__rue_compiled_branch_key:2,create:()=>v(t=>{let n=de().content.cloneNode(!0).firstChild,r=n,s=n.childNodes[0],c=s.parentNode,l=a;typeof l==`function`?l(r):l&&typeof l==`object`&&`current`in l&&(l.current=r),B(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)});let u;M(()=>{let e=he(`rue-form grid gap-6`,o.get()),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,r.setAttribute(`class`,t))});let d;return M(()=>{let e=P.get(),t=p(e);Object.is(d,t)||(d=t,r.style.cssText=t)}),r.setAttribute(`data-rue-form`,`true`),e({parent:c,before:s},()=>A.get()?K(m):i.get(),()=>({})),[n,n]})}:{__rue_compiled_branch_key:3,create:()=>v(t=>{let n=fe().content.cloneNode(!0).firstChild,r=n,s=n.childNodes[0],c=s.parentNode,l=a;typeof l==`function`?l(r):l&&typeof l==`object`&&`current`in l&&(l.current=r),B(()=>{typeof l==`function`?l(null):l&&typeof l==`object`&&`current`in l&&(l.current=null)});let u=e=>{let t=y;typeof t==`function`&&t(e)};r.addEventListener(`submit`,u),B(()=>r.removeEventListener(`submit`,u));let d;M(()=>{let e=he(`rue-form grid gap-6`,o.get()),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,r.setAttribute(`class`,t))});let f;return M(()=>{let e=P.get(),t=p(e);Object.is(f,t)||(f=t,r.style.cssText=t)}),r.setAttribute(`data-rue-form`,`true`),e({parent:c,before:s},()=>A.get()?K(m):i.get(),()=>({})),[n,n]})}}),e=>C(()=>{i.set(e.children),o.set(e.className),s.set(e.component),u.set(e.form),d.set(e.initialValues),f.set(e.name),h.set(e.onFieldsChange),g.set(e.onFinish),_.set(e.onFinishFailed),b.set(e.onSubmit),w.set(e.onValuesChange),D.set(e.preserve),A.set(e.render),j.set(e.scrollToFirstError),P.set(e.style),I.set(e.validateMessages),L.set(e.validateTrigger)}),()=>x(t)))},{Item:Ue,List:(t,n,r)=>{let{CompiledRow101:i,form:a,__rue_phase2_form:o,name:s,__rue_phase2_name:l,unregister:u,rows:d,operation:f,__rue_phase2_operation:p,renderContent:h,__rue_phase2_renderContent:y}=c(`useSetup:0:0`,()=>{let e=(e,n,i)=>{let o=U(k(e,`rowArg0`)),s=U(k(e,`rowArg1`)),{row:l,index:u,__rue_phase2_index:d}=c(`useSetup:0:0`,()=>{let e=o.get(),t=H(()=>s.get());return t.get(),{row:e,index:t,__rue_phase2_index:t}});return m(v(e=>{let n=ce().content.cloneNode(!0).firstChild,i=n,o=n.childNodes[0],s=o.parentNode,c;M(()=>{let e=u.get();Object.is(c,e)||(c=e,e==null?i.removeAttribute(`data-rue-form-list-index`):i.setAttribute(`data-rue-form-list-index`,String(e)))});let l=[];return z(()=>{let e=(k(t,`fields`)??[])||[];l=A(s,o,l,e,(e,t)=>t,(e,t)=>{let n=U(e);return L((e,t,i)=>{let o=()=>g(Ue,()=>({...n.get(),form:r.get(),name:[...a.get(),u.get(),...Z(n.get().name)]}));return e==null?o():_(e,i,o)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(l)),[n,n]}),e=>C(()=>{o.set(e.rowArg0),s.set(e.rowArg1)}),()=>x(e))},n=H(()=>k(t,`form`)??Be());n.get();let r=n,i=H(()=>Z(k(t,`name`)));i.get();let a=i,o=r.get().__INTERNAL__.registerField({id:`rue-form-list-${pe++}`,kind:`list`,getNamePath:()=>a.get(),getRules:()=>k(t,`rules`)??[],getRequired:()=>void 0,getLabel:()=>a.get().at(-1),getMessageVariables:()=>void 0,getValidateTrigger:()=>[`onChange`],getDependencies:()=>[],getInitialValue:()=>k(t,`initialValue`),getPreserve:()=>!0});I(o);let s=H(()=>{r.get().__INTERNAL__.version.value;let e=r.get().getFieldValue(a.get());return Array.isArray(e)?e:[]}),l=H(()=>We(r.get(),a.get()));l.get();let u=l,d=H(()=>k(t,`render`)?H(()=>{r.get().__INTERNAL__.version.value;let e=s.value.map((e,t)=>({key:t,name:t,fieldKey:t})),n=r.get().__INTERNAL__.getMeta(a.get());return k(t,`render`)(e,u.get(),{errors:[...n.errors],warnings:[...n.warnings]})}):void 0);return S(()=>d.get()),{CompiledRow101:e,form:n,__rue_phase2_form:r,name:i,__rue_phase2_name:a,unregister:o,rows:s,operation:l,__rue_phase2_operation:u,renderContent:d,__rue_phase2_renderContent:d}});return v(t=>{let n=le().content.cloneNode(!0).firstChild,r=n.childNodes[0],a=r.parentNode;return e({parent:a,before:r},()=>h.get()?K(h.get().value):K(d.value.map((e,t)=>g(i,()=>({rowArg0:e,rowArg1:t})))),()=>({})),[n,n]})},ErrorList:Re,useForm:Ve,useFormInstance:Be,useWatch:He}),Ge=W(`<div class="rounded-[1.25rem] border border-base-300 bg-base-200/30 p-5"><div class="mb-4 text-sm font-medium text-base-content">Canary settings</div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div><!--rue:text-hole:2--></div>`),Ke=W(`<div class="min-w-0"><!--rue:opaque-hole:0--></div>`),qe=W(`<div class="grid gap-4"><!--rue:text-hole:0--><!--rue:text-hole:1--><div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><!--rue:text-hole:4--></div>`),Je=W(`<div class="flex flex-wrap gap-3 pt-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Ye=W(`<div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),Xe=W(`<div class="flex flex-wrap gap-3 pt-1"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--></div>`),Ze=W(`<div class="grid gap-6"><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">回调地址</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">https://</span><!--rue:opaque-hole:0--><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">:443</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">这一整行是自定义布局，真正接收 Form 注入值和事件的只有内部 noStyle Item。</div></div><div class="grid gap-3"><div class="text-[0.95rem] leading-7 font-medium text-base-content/78">资源路径</div><div class="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3"><span class="rounded-full bg-base-200 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-base-content/55">/hooks/</span><!--rue:opaque-hole:1--><span class="text-xs uppercase tracking-[0.18em] text-base-content/45">POST target</span></div><div class="text-[0.8rem] leading-6 text-base-content/55">noStyle 很适合把字段嵌进带前缀、后缀和静态说明文本的复合行，而不用重复套一层完整的 Form.Item 样式壳。</div></div></div>`),Qe=W(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 1</div><div class="mt-1 text-lg font-semibold text-base-content">基础信息</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),$e=W(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 2</div><div class="mt-1 text-lg font-semibold text-base-content">发布策略</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),et=W(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 3</div><div class="mt-1 text-lg font-semibold text-base-content">观测与审批</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),tt=W(`<section class="rounded-[1.25rem] border border-base-300 bg-base-50/50 p-5 lg:p-6"><div class="mb-4"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Section 4</div><div class="mt-1 text-lg font-semibold text-base-content">回滚预案</div></div><div class="grid gap-5 md:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></section>`),nt=W(`<div class="sticky bottom-0 rounded-[1.25rem] border border-base-300 bg-base-100/95 p-4 shadow-sm backdrop-blur"><div class="flex flex-wrap items-center justify-between gap-3"><div class="text-sm text-base-content/65">留空深层字段后点击提交，会自动滚到首个错误项。</div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div></div></div>`),rt=W(`<div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),it=W(`<div class="mt-2 flex flex-wrap items-end justify-between gap-4 border-t border-base-300 pt-4"><!--rue:opaque-hole:0--><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),at=W(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Submit result</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例覆盖基础提交路径：基础收集、规则校验、Checkbox 的 checked 绑定，以及失败时滚到错误字段。</p><div class="mt-4 grid gap-4"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Live draft</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre></div><div class="rounded-[1.25rem] bg-neutral p-4 text-neutral-content"><div class="text-xs uppercase tracking-[0.22em] text-neutral-content/60">Last submit</div><pre class="mt-3 whitespace-pre-wrap break-words text-xs leading-6"><!--rue:text-hole:2--></pre></div></div></div></div>`),ot=W(`<div class="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Reactive summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这里把表单实例方法和 Watch Hooks 两类示例：同一个实例被按钮、摘要卡片和提交流程共享，字段变化会同步反映到右侧。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">role</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">region</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">notes</div><div class="mt-2 text-sm leading-6 text-base-content/80"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-box bg-neutral text-neutral-content p-4 text-xs leading-6"><!--rue:text-hole:4--></pre></div></div>`),st=W('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Validation notes</div><p class="mt-3 mb-0 text-sm text-base-content/65">这组示例把最常用的跨字段模式放到一起：`validateTrigger` 控制时机，`dependencies` 负责联动校验，`warningOnly` 用于规范提醒。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Password match</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Website warning</div><div class="mt-2 text-base font-semibold text-base-content"><!--rue:text-hole:2--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:3--></pre></div></div>'),ct=W('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Store snapshot</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `getValueProps + normalize` 思路：显示层和存储层可以不同，但写入 Form store 前必须同步归一化。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">issueId</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">slug</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">branch</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:3--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div></div>'),lt=W('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Conditional summary</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示 `shouldUpdate` 使用方式：字段本身负责绑定，条件区域负责根据全表单值决定是否渲染额外内容。</p><div class="mt-4 grid gap-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">enableCanary</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">publishMode</div><div class="mt-2 text-lg font-semibold text-base-content"><!--rue:text-hole:2--></div></div><div class="rounded-[1.25rem] bg-base-200/70 p-4 text-sm"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Conditional fields</div><div class="mt-2 text-sm leading-6 text-base-content/80">batchSize: <!--rue:text-hole:3--><br> approveBy: <!--rue:text-hole:4--></div></div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:5--></pre></div></div>'),ut=W('<div class="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Composite preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例演示复合表单控件的常见组织方式 思路：一个视觉行可以包含多个真实字段，但绑定必须落在内部 noStyle Item 上。</p><div class="mt-4 rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-xs uppercase tracking-[0.22em] text-base-content/45">Resolved URL</div><div class="mt-3 break-all text-lg font-semibold text-base-content"><!--rue:text-hole:1--></div></div><div class="mt-4 grid gap-3 text-sm text-base-content/75"><div class="rounded-[1.25rem] bg-base-200/70 p-4">`https://`、`:443` 和 `/hooks/` 都是布局文本，真正绑定的字段只有 host 和 path。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">外层 label、说明文案和静态修饰可以完全手写，不需要为每个子字段重复渲染一整行 Form.Item。</div><div class="rounded-[1.25rem] bg-base-200/70 p-4">如果你需要更细粒度的错误落点，通常要手动设计这些 noStyle 子字段的错误承载位置。</div></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:2--></pre></div></div>'),dt=W(`<div class="grid gap-6 xl:grid-cols-[18rem_minmax(0,1fr)]"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Scroll actions</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例把手动 scrollToField 和提交失败自动滚动放进同一个长表单容器里，方便直接比较两种行为。</p><div class="mt-4 grid gap-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-neutral p-4 text-xs leading-6 text-neutral-content"><!--rue:text-hole:4--></pre></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-4 shadow-sm lg:p-5"><div class="overflow-y-auto overscroll-contain pr-2"><!--rue:opaque-hole:5--></div></div></div>`),ft=W(`<div class="grid gap-6"><div class="grid items-start gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]"><!--rue:opaque-hole:0--><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List snapshot</div><div class="mt-3 inline-flex rounded-full bg-base-200 px-3 py-1 text-xs font-medium text-base-content/65"><!--rue:text-hole:1--> members</div><div class="mt-4 grid gap-3"><!--rue:text-hole:2--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">List behavior</div><div class="mt-4 grid gap-4 md:grid-cols-3"><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">列表级规则</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">rules 挂在 Form.List 上，校验整个 members 数组。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">重排操作</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">operation.move 保持字段状态跟随成员顺序移动。</p></div><div class="rounded-[1.25rem] bg-base-200/70 p-4"><div class="text-sm font-semibold text-base-content">错误出口</div><p class="mt-2 mb-0 text-sm leading-6 text-base-content/65">Form.ErrorList 只展示列表自身的错误，不和单个字段提示混在一起。</p></div></div></div></div>`),pt=W(`<div class="grid gap-6"><!--rue:opaque-hole:0--><div class="grid gap-4 lg:grid-cols-2"><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Query preview</div><p class="mt-3 mb-0 text-sm text-base-content/65">这个示例更接近常见的高级搜索表单：字段采用网格布局，按钮区保持独立，search 和 reset 仍由同一实例驱动。</p><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:1--></pre><div class="mt-4 grid gap-3 text-sm text-base-content/80"><div class="rounded-[1.25rem] bg-base-200/70 p-4">关键词：<!--rue:text-hole:2--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">仓库：<!--rue:text-hole:3--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">负责人 / 评审人：<!--rue:text-hole:4--> / <!--rue:text-hole:5--></div><div class="rounded-[1.25rem] bg-base-200/70 p-4">包含草稿：<!--rue:text-hole:6--></div></div></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm"><div class="text-xs font-medium uppercase tracking-[0.22em] text-base-content/45">Last submit</div><pre class="mt-4 whitespace-pre-wrap break-words rounded-[1.25rem] bg-base-200/70 p-4 text-xs leading-6 text-base-content/80"><!--rue:text-hole:7--></pre></div></div></div>`),mt=W('<div class="max-w-none prose prose-sm md:prose-base"><h1 class="mt-4 mb-0 text-4xl font-semibold tracking-tight text-base-content">Form 表单</h1><p class="mt-4 mb-0 max-w-3xl text-sm leading-7 text-base-content/72">这个页面不再只给你一个“能跑”的表单，而是把表单最关键的使用思路补进 Rue 当前稳定实现：基础提交、命令式实例、跨字段依赖、条件区域、动态列表、搜索表单，以及它们背后的使用约束。</p><h2>何时使用</h2><ul><li>需要把多个输入控件组织成一个稳定的提交单元，并统一收集 values、errors 和 touched 状态。</li><li>需要显式拿到 form 实例，在按钮、摘要面板、列表操作和业务动作之间共享同一份状态。</li><li>需要处理动态数组字段，例如成员名单、规则条目、白名单或批量配置项。</li></ul><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:0--></section><div class="not-prose rounded-[1.5rem] border border-base-300 bg-base-100 p-6 text-sm leading-7 text-base-content/75 shadow-sm">当前 Rue runtime 下，推荐通过 <code>Form.useForm()</code> 或 <code>render={form =&gt; &lt;Form.Item form={form} name="title" /&gt;}</code> 显式持有并传递 <code>form</code>。 下面所有示例 都按这个稳定路径组织，不再依赖隐式祖先解析；你也会在示例里反复看到几条关键规则： `initialValues` 优先于子字段默认值，`Checkbox` 要切到 `checked` 语义，`dependencies` 和 `shouldUpdate` 分工不同。</div><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><h2>使用说明</h2><p>下面这些说明不是泛泛而谈，而是把表单里最容易踩坑、同时又和 Rue 当前组件强相关的部分抽出来。先看这些规则，再回头看上面的示例，理解会快很多。</p><section class="not-prose my-8 grid gap-4 lg:grid-cols-2"><!--rue:text-hole:10--></section><h2 id="form-api">API</h2><p>Form 当前推荐的心智模型仍然是显式实例驱动：页面或业务组件持有实例，Form 负责布局与校验，Item / List 通过同一实例绑定字段。下表只列出 Rue 当前最稳定、最值得依赖的那一层 API。</p><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><!--rue:opaque-hole:13--></div>'),ht=(t,n,r)=>{let i=U(k(t,`rows`)),a=U(k(t,`title`));return m(v(t=>{let n=j(`div`,t);n.setAttribute(`class`,`not-prose my-6 lg:my-8`);let r=j(`h3`,n);T(n,r),r.setAttribute(`class`,`mt-0 mb-3 text-base font-semibold text-base-content`);let o=R(`rue:compiled-slot`);T(r,o),e({parent:r,before:o},()=>K(a.get()),()=>({}));let s=j(`div`,n);T(n,s),s.setAttribute(`class`,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=j(`table`,s);T(s,c),c.setAttribute(`class`,`table table-zebra`);let l=j(`thead`,c);T(c,l);let u=j(`tr`,l);T(l,u);let d=j(`th`,u);T(u,d),T(d,O(`属性`));let f=j(`th`,u);T(u,f),T(f,O(`说明`));let p=j(`th`,u);T(u,p),T(p,O(`类型`));let m=j(`th`,u);T(u,m),T(m,O(`默认值`));let h=j(`tbody`,c);T(c,h);let g=W(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),_=R(`rue:list:end`);T(h,_);let v=[];return z(()=>{let e=i.get()||[];v=D(h,_,v,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return P(e=>{let t=g().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let s=t.childNodes[2].childNodes[0].childNodes[0],c=s.parentNode,l=t.childNodes[3].childNodes[0].childNodes[0],u=l.parentNode,d=O(``);a.insertBefore(d,n),a.removeChild(n);let f=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);d.textContent=f;let p=r.description==null||typeof r.description==`boolean`?``:String(r.description);o.textContent=p;let m=O(``);c.insertBefore(m,s),c.removeChild(s);let h=r.type==null||typeof r.type==`boolean`?``:String(r.type);m.textContent=h;let _=O(``);u.insertBefore(_,l),u.removeChild(l);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(f,e)||(d.textContent=e,f=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(p,e)||(o.textContent=e,p=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(h,e)||(m.textContent=e,h=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),B(()=>w(v)),[n,n]}),e=>C(()=>{i.set(e.rows),a.set(e.title)}),()=>x(t))},gt=(t,n,i)=>{let s=U(k(t,`description`)),c=U(k(t,`eyebrow`)),l=U(k(t,`items`)),u=U(k(t,`title`));return m(v(t=>{let n=j(`div`,t);n.setAttribute(`class`,`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm`),a(()=>c.get()?{__rue_compiled_branch_key:!0,create:()=>v(t=>{let n=j(`div`,t);n.setAttribute(`class`,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`);let r=R(`rue:compiled-slot`);return T(n,r),e({parent:n,before:r},()=>K(c.get()),()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n);let i=j(`h3`,n);T(n,i),i.setAttribute(`class`,`mt-3 mb-0 text-lg font-semibold text-base-content`);let d=R(`rue:compiled-slot`);T(i,d),e({parent:i,before:d},()=>K(u.get()),()=>({}));let f=j(`p`,n);T(n,f),f.setAttribute(`class`,`mt-3 mb-0 text-sm leading-6 text-base-content/70`);let p=R(`rue:compiled-slot`);return T(f,p),e({parent:f,before:p},()=>K(s.get()),()=>({})),a(()=>l.get()?.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=j(`ul`,e);t.setAttribute(`class`,`mt-4 grid gap-2 pl-5 text-sm leading-6 text-base-content/75`);let n=R(`rue:list:end`);T(t,n);let i=[];return z(()=>{let e=l.get()||[];i=A(n.parentNode,n,i,e,(e,t)=>e,(e,t)=>{let n=U(e);return L((e,t,i)=>{let a=()=>r(e=>{let t=j(`li`,e),r=O(``);return T(t,r),o(r,()=>n.get()),[t,t]});return e==null?a():_(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(i)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]}),e=>C(()=>{s.set(e.description),c.set(e.eyebrow),l.set(e.items),u.set(e.title)}),()=>x(t))},$=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},_t=e=>Object.entries(e).filter(([,e])=>e!==``&&e!==!1).map(([e,t])=>`${e}=${encodeURIComponent(String(t))}`).join(`&`),vt=(t,n,r)=>{let a={profile:{name:`Rue Design`,email:`team@rue.dev`},agree:!0},o=V($(a)),s=V(`等待提交，右侧会展示 payload 或校验摘要。`);return y(()=>v(t=>{let n=at().content.cloneNode(!0).firstChild,r=n.childNodes[0],c=r.parentNode,l=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,f=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],p=f.parentNode,m=(t,n,r)=>{let c=()=>g(Q,()=>({className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:a,scrollToFirstError:!0,validateMessages:{required:"请先填写 ${label}"},onValuesChange:(e,t)=>{o.value=$(t)},onFinish:e=>{s.value=`提交成功
`+$(e)},onFinishFailed:e=>{s.value=`校验失败
`+$({values:e.values,errorFields:e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors}))})},render:t=>v(n=>{let r=F();i(r,Q.Item,()=>({form:t,name:[`profile`,`name`],label:`名称`,rules:[{required:!0}],extra:`名称字段会直接参与 submit payload。`,render:e=>g(J,()=>({...e,placeholder:`输入项目名称`}))})),i(r,Q.Item,()=>({form:t,name:[`profile`,`email`],label:`邮箱`,rules:[{required:!0},{type:`email`}],hasFeedback:!0,extra:`这里演示 Rue Form 当前支持的校验消息、反馈图标和 scrollToFirstError 行为。`,render:e=>g(J,()=>({...e,placeholder:`team@rue.dev`}))})),i(r,Q.Item,()=>({form:t,name:`agree`,label:`发布确认`,valuePropName:`checked`,render:e=>g(ne,()=>({...e,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`允许直接覆盖 staging 配置`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}))}));let a=Je().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[1],u=l.parentNode;r.appendChild(a);let d=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`保存表单`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},f=s.nextSibling;c.removeChild(s),e({parent:c,before:f},()=>d,()=>({}));let p=(e,n,r)=>{let i=()=>g(q,()=>({type:`outlined`,onClick:()=>t.resetFields(),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`重置`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?i():_(e,r,i)},m=l.nextSibling;u.removeChild(l),e({parent:u,before:m},()=>p,()=>({}));let h=O(``),v=O(``);return r.insertBefore(h,r.firstChild),r.appendChild(v),[r.firstChild,r.lastChild]})}));return t==null?c():_(t,r,c)},h=r.nextSibling;c.removeChild(r),e({parent:c,before:h},()=>m,()=>({}));let y=O(``);u.insertBefore(y,l),u.removeChild(l),d(y,()=>o.value);let b=O(``);return p.insertBefore(b,f),p.removeChild(f),d(b,()=>s.value),[n,n]}))},yt=(t,n,r)=>{let[a]=Q.useForm(),o=Q.useWatch(`role`,a),s=Q.useWatch(`region`,a),c=Q.useWatch(`notes`,a),l=V(`等待实例方法操作。`);return y(()=>v(t=>{let n=ot().content.cloneNode(!0).firstChild,r=n.childNodes[0],u=r.parentNode,f=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],p=f.parentNode,m=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],h=m.parentNode,y=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],b=y.parentNode,x=n.childNodes[1].childNodes[3].childNodes[0],S=x.parentNode,C=(t,n,r)=>{let o=()=>g(Q,()=>({form:a,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{role:`viewer`,region:`cn-hz`,notes:`仅开放只读权限`},scrollToFirstError:!0,validateMessages:{required:"请填写 ${label}"},onFinish:e=>{l.value=`submit()
`+$(e)},onFinishFailed:e=>{l.value=`submit() failed
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>v(n=>{let r=F(),o=Ye().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],u=c.parentNode,d=s.childNodes[1],f=d.parentNode;r.appendChild(o);let p=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`role`,label:`角色`,rules:[{required:!0},{pattern:/^(viewer|editor|admin)$/,message:`角色只能是 viewer、editor 或 admin`}],hasFeedback:!0,render:e=>g(J,()=>({...e,placeholder:`viewer / editor / admin`}))}));return e==null?i():_(e,r,i)},m=c.nextSibling;u.removeChild(c),e({parent:u,before:m},()=>p,()=>({}));let h=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`region`,label:`区域`,rules:[{required:!0},{pattern:/^(cn|us|eu)-[a-z]+$/,message:`区域格式示例：cn-hz、us-east、eu-west`}],hasFeedback:!0,render:e=>g(J,()=>({...e,placeholder:`cn-hz`}))}));return e==null?i():_(e,r,i)},v=d.nextSibling;f.removeChild(d),e({parent:f,before:v},()=>h,()=>({})),i(r,Q.Item,()=>({form:t,name:`notes`,label:`交付备注`,rules:[{required:!0},{min:6}],render:e=>g(J,()=>({...e,placeholder:`写入审批说明或 rollout 策略`}))}));let y=Xe().content.cloneNode(!0),b=y.firstChild,x=b.childNodes[0],S=x.parentNode,C=b.childNodes[1],w=C.parentNode,E=b.childNodes[2],D=E.parentNode,k=b.childNodes[3],A=k.parentNode,j=b.childNodes[4],M=j.parentNode,N=b.childNodes[5],P=N.parentNode;r.appendChild(y);let I=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,onClick:()=>{a.setFieldValue(`role`,`editor`),l.value=`setFieldValue('role', 'editor')`},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`设为 editor`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},L=x.nextSibling;S.removeChild(x),e({parent:S,before:L},()=>I,()=>({}));let R=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>{a.setFieldsValue({region:`us-east`,notes:`需要双人复核`}),l.value=`setFieldsValue({ region: "us-east", notes: "需要双人复核" })`},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`填充预设`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},ee=C.nextSibling;w.removeChild(C),e({parent:w,before:ee},()=>R,()=>({}));let z=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>{a.setFieldsValue({role:`guest`,region:`hangzhou`,notes:``}),l.value=`setFieldsValue({ role: "guest", region: "hangzhou", notes: "" })`},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`填入异常值`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},B=E.nextSibling;D.removeChild(E),e({parent:D,before:B},()=>z,()=>({}));let V=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`text`,onClick:()=>{a.resetFields(),l.value=`resetFields()`},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`恢复初始值`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},H=k.nextSibling;A.removeChild(k),e({parent:A,before:H},()=>V,()=>({}));let te=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,color:`primary`,onClick:()=>{a.submit()},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`程序化提交`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},U=j.nextSibling;M.removeChild(j),e({parent:M,before:U},()=>te,()=>({}));let W=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>{a.validateFields().then(e=>{l.value=`validateFields()
`+$(e)}).catch(e=>{l.value=`validateFields() failed
`+$(e.errorFields)})},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`validateFields`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},K=N.nextSibling;P.removeChild(N),e({parent:P,before:K},()=>W,()=>({}));let ne=O(``),re=O(``);return r.insertBefore(ne,r.firstChild),r.appendChild(re),[r.firstChild,r.lastChild]})}));return t==null?o():_(t,r,o)},w=r.nextSibling;u.removeChild(r),e({parent:u,before:w},()=>C,()=>({}));let E=O(``);p.insertBefore(E,f),p.removeChild(f),d(E,()=>String(o.value??`viewer`));let D=O(``);h.insertBefore(D,m),h.removeChild(m),d(D,()=>String(s.value??`cn-hz`));let k=O(``);b.insertBefore(k,y),b.removeChild(y),d(k,()=>String(c.value??``)||`未填写`);let A=O(``);return S.insertBefore(A,x),S.removeChild(x),d(A,()=>l.value),[n,n]}))},bt=(t,n,r)=>{let[i]=Q.useForm(),o=Q.useWatch(`password`,i),s=Q.useWatch(`confirm`,i),c=Q.useWatch(`website`,i),l=V(`试试先输入密码，再修改确认密码，观察依赖字段的重新校验。`);return y(()=>v(t=>{let n=st().content.cloneNode(!0).firstChild,r=n.childNodes[0],u=r.parentNode,f=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],p=f.parentNode,m=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],y=m.parentNode,b=n.childNodes[1].childNodes[3].childNodes[0],x=b.parentNode,S=(t,n,r)=>{let a=()=>g(Q,()=>({form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{account:`release-admin`,website:`http://staging.rue.dev`},validateMessages:{required:"请填写 ${label}"},onFinish:e=>{l.value=`提交成功
`+$(e)},onFinishFailed:e=>{l.value=`校验失败
`+$(e.errorFields.map(e=>({name:e.name.join(`.`),errors:e.errors,warnings:e.warnings})))},render:t=>v(n=>{let r=F(),a=Ye().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[1],u=l.parentNode;r.appendChild(a);let d=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`account`,label:`账号`,rules:[{required:!0},{whitespace:!0}],hasFeedback:!0,render:e=>g(J,()=>({...e,placeholder:`release-admin`}))}));return e==null?i():_(e,r,i)},f=s.nextSibling;c.removeChild(s),e({parent:c,before:f},()=>d,()=>({}));let p=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`website`,label:`回调域名`,validateTrigger:`onBlur`,rules:[{warningOnly:!0,pattern:/^https:\/\/.+/,message:`建议使用 https:// 前缀`}],extra:`warningOnly 会持续提示格式，但不会阻塞 submit。`,render:e=>g(J,()=>({...e,placeholder:`https://prod.rue.dev`}))}));return e==null?i():_(e,r,i)},m=l.nextSibling;u.removeChild(l),e({parent:u,before:m},()=>p,()=>({}));let h=Ye().content.cloneNode(!0),v=h.firstChild,y=v.childNodes[0],b=y.parentNode,x=v.childNodes[1],S=x.parentNode;r.appendChild(h);let C=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`password`,label:`密码`,validateTrigger:`onBlur`,rules:[{required:!0},{min:8}],hasFeedback:!0,extra:`这里用 onBlur 展示 validateTrigger 的常见用法。`,render:e=>g(J,()=>({...e,placeholder:`至少 8 位`}))}));return e==null?i():_(e,r,i)},w=y.nextSibling;b.removeChild(y),e({parent:b,before:w},()=>C,()=>({}));let E=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`confirm`,label:`确认密码`,dependencies:[`password`],validateTrigger:`onBlur`,rules:[{required:!0},{validator:(e,t,n)=>{if(!t)return`请再次输入密码`;if(t!==n.password)return`两次输入的密码不一致`}}],hasFeedback:!0,extra:`dependencies 会在 password 变化后重新触发这里的校验。`,render:e=>g(J,()=>({...e,placeholder:`再次输入密码`}))}));return e==null?i():_(e,r,i)},D=x.nextSibling;S.removeChild(x),e({parent:S,before:D},()=>E,()=>({}));let k=Je().content.cloneNode(!0),A=k.firstChild,j=A.childNodes[0],M=j.parentNode,N=A.childNodes[1],P=N.parentNode;r.appendChild(k);let I=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`执行校验`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},L=j.nextSibling;M.removeChild(j),e({parent:M,before:L},()=>I,()=>({}));let R=(e,t,n)=>{let r=()=>g(q,()=>({type:`outlined`,onClick:()=>i.resetFields(),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`清空状态`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},ee=N.nextSibling;P.removeChild(N),e({parent:P,before:ee},()=>R,()=>({}));let z=O(``),B=O(``);return r.insertBefore(z,r.firstChild),r.appendChild(B),[r.firstChild,r.lastChild]})}));return t==null?a():_(t,r,a)},C=r.nextSibling;u.removeChild(r),e({parent:u,before:C},()=>S,()=>({})),h(p,f,()=>o.value&&s.value?{__rue_compiled_branch_key:!0,create:()=>a(()=>o.value===s.value?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=O(`已匹配`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`未匹配`);return[t,t]})})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`等待输入`);return[t,t]})}),h(y,m,()=>c.value?{__rue_compiled_branch_key:!0,create:()=>a(()=>String(c.value).startsWith(`https://`)?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=O(`格式建议通过`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`建议补上 https://`);return[t,t]})})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`未填写`);return[t,t]})});let w=O(``);return x.insertBefore(w,b),x.removeChild(b),d(w,()=>l.value),[n,n]}))},xt=(t,n,r)=>{let[a]=Q.useForm(),o={issueId:`2048`,slug:`release-planning`,branch:`main`},s=Q.useWatch(`issueId`,a),c=Q.useWatch(`slug`,a),l=Q.useWatch(`branch`,a),u=V($(o));return y(()=>v(t=>{let n=ct().content.cloneNode(!0).firstChild,r=n.childNodes[0],f=r.parentNode,p=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,h=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],y=h.parentNode,b=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[0],x=b.parentNode,S=n.childNodes[1].childNodes[3].childNodes[0],C=S.parentNode,w=(t,n,r)=>{let s=()=>g(Q,()=>({form:a,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:o,onValuesChange:(e,t)=>{u.value=$(t)},onFinish:e=>{u.value=`提交成功
`+$(e)},render:t=>v(n=>{let r=F();i(r,Q.Item,()=>({form:t,name:`issueId`,label:`Issue 编号`,rules:[{required:!0}],getValueProps:e=>({value:e?`#${String(e)}`:``}),normalize:e=>String(e??``).replace(/^#/,``).replace(/\D/g,``).slice(0,6),extra:`getValueProps 负责把 store 里的纯数字映射成带 # 的输入框表现。`,render:e=>g(J,()=>({...e,placeholder:`#2048`}))})),i(r,Q.Item,()=>({form:t,name:`slug`,label:`发布 slug`,rules:[{required:!0},{pattern:/^[a-z0-9-]+$/}],normalize:e=>String(e??``).trim().toLowerCase().replace(/\s+/g,`-`).replace(/[^a-z0-9-]/g,``).replace(/--+/g,`-`),extra:`normalize 会在写入 store 前统一 trim、lowercase 和 kebab-case。`,render:e=>g(J,()=>({...e,placeholder:`release-planning`}))})),i(r,Q.Item,()=>({form:t,name:`branch`,label:`目标分支`,messageVariables:{label:`目标分支`},rules:[{required:!0},{pattern:/^(main|release\/[a-z0-9-]+)$/i,message:"${label} 需为 main 或 release/*"}],render:e=>g(J,()=>({...e,placeholder:`main / release/v1-2`}))}));let o=Je().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1],d=u.parentNode;r.appendChild(o);let f=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`应用转换`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},p=c.nextSibling;l.removeChild(c),e({parent:l,before:p},()=>f,()=>({}));let m=(e,t,n)=>{let r=()=>g(q,()=>({type:`outlined`,onClick:()=>{a.setFieldsValue({issueId:`4096`,slug:`release notes`,branch:`release/v2-0`})},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`填充示例`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},h=u.nextSibling;d.removeChild(u),e({parent:d,before:h},()=>m,()=>({}));let v=O(``),y=O(``);return r.insertBefore(v,r.firstChild),r.appendChild(y),[r.firstChild,r.lastChild]})}));return t==null?s():_(t,r,s)},E=r.nextSibling;f.removeChild(r),e({parent:f,before:E},()=>w,()=>({}));let D=O(``);m.insertBefore(D,p),m.removeChild(p),d(D,()=>String(s.value??``)||`空`);let k=O(``);y.insertBefore(k,h),y.removeChild(h),d(k,()=>String(c.value??``)||`空`);let A=O(``);x.insertBefore(A,b),x.removeChild(b),d(A,()=>String(l.value??``)||`空`);let j=O(``);return C.insertBefore(j,S),C.removeChild(S),d(j,()=>u.value),[n,n]}))},St=(t,n,r)=>{let[a]=Q.useForm(),o=Q.useWatch(`enableCanary`,a),s=Q.useWatch(`publishMode`,a),c=Q.useWatch(`batchSize`,a),l=Q.useWatch(`approveBy`,a),u=V(`开启灰度发布后，额外字段会由 shouldUpdate 动态挂载。`);return y(()=>v(t=>{let n=lt().content.cloneNode(!0).firstChild,r=n.childNodes[0],f=r.parentNode,p=n.childNodes[1].childNodes[2].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,y=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],b=y.parentNode,x=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[1],S=x.parentNode,C=n.childNodes[1].childNodes[2].childNodes[2].childNodes[1].childNodes[4],w=C.parentNode,E=n.childNodes[1].childNodes[3].childNodes[0],D=E.parentNode,k=(t,n,r)=>{let o=()=>g(Q,()=>({form:a,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{service:`gateway`,publishMode:`manual`,enableCanary:!1},onFinish:e=>{u.value=`提交成功
`+$(e)},render:t=>v(n=>{let r=F(),o=Ye().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],l=c.parentNode,u=s.childNodes[1],d=u.parentNode;r.appendChild(o);let f=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`service`,label:`服务名`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`gateway`}))}));return e==null?i():_(e,r,i)},p=c.nextSibling;l.removeChild(c),e({parent:l,before:p},()=>f,()=>({}));let m=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`publishMode`,label:`发布模式`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`manual / auto`}))}));return e==null?i():_(e,r,i)},y=u.nextSibling;d.removeChild(u),e({parent:d,before:y},()=>m,()=>({})),i(r,Q.Item,()=>({form:t,name:`enableCanary`,label:`灰度发布`,valuePropName:`checked`,extra:`这个字段变化时，下面的 shouldUpdate 区域会按需挂载或卸载额外输入。`,render:e=>g(ne,()=>({...e,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`开启 canary rollout`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}))})),i(r,Q.Item,()=>({shouldUpdate:(e,t)=>e.enableCanary!==t.enableCanary||e.publishMode!==t.publishMode,render:n=>n.enableCanary?v(r=>{let i=Ge().content.cloneNode(!0).firstChild,a=i.childNodes[1].childNodes[0],o=a.parentNode,s=i.childNodes[1].childNodes[1],c=s.parentNode,l=i.childNodes[2],u=l.parentNode,d=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`batchSize`,label:`首批流量`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`10%`}))}));return e==null?i():_(e,r,i)},f=a.nextSibling;o.removeChild(a),e({parent:o,before:f},()=>d,()=>({}));let p=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`approveBy`,label:`审批人`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`release-ops`}))}));return e==null?i():_(e,r,i)},m=s.nextSibling;return c.removeChild(s),e({parent:c,before:m},()=>p,()=>({})),h(u,l,()=>n.publishMode===`auto`?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=j(`div`,e);return t.setAttribute(`class`,`rounded-[1rem] bg-base-100 p-4 text-sm leading-6 text-base-content/70`),T(t,O(`自动模式下建议把首批流量控制在 10% 以内，这就是 shouldUpdate 适合承载的“条件区域”。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}),[i,i]}):G(e=>{let t=j(`div`,e);return t.setAttribute(`class`,`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-5 text-sm text-base-content/60`),T(t,O(`未开启灰度发布，额外字段不会挂载，也不会参与校验。`)),[t,t]})}));let b=Je().content.cloneNode(!0),x=b.firstChild,S=x.childNodes[0],C=S.parentNode,w=x.childNodes[1],E=w.parentNode;r.appendChild(b);let D=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`保存发布策略`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},k=S.nextSibling;C.removeChild(S),e({parent:C,before:k},()=>D,()=>({}));let A=(e,t,n)=>{let r=()=>g(q,()=>({type:`outlined`,onClick:()=>{a.setFieldsValue({enableCanary:!0,publishMode:`auto`,batchSize:`10%`,approveBy:`ops-squad`})},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`套用 canary 模板`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},M=w.nextSibling;E.removeChild(w),e({parent:E,before:M},()=>A,()=>({}));let N=O(``),P=O(``);return r.insertBefore(N,r.firstChild),r.appendChild(P),[r.firstChild,r.lastChild]})}));return t==null?o():_(t,r,o)},A=r.nextSibling;f.removeChild(r),e({parent:f,before:A},()=>k,()=>({})),h(m,p,()=>o.value?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=O(`true`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`false`);return[t,t]})});let M=O(``);b.insertBefore(M,y),b.removeChild(y),d(M,()=>String(s.value??`manual`));let N=O(``);S.insertBefore(N,x),S.removeChild(x),d(N,()=>String(c.value??``)||`未挂载`);let P=O(``);w.insertBefore(P,C),w.removeChild(C),d(P,()=>String(l.value??``)||`未挂载`);let I=O(``);return D.insertBefore(I,E),D.removeChild(E),d(I,()=>u.value),[n,n]}))},Ct=(t,n,r)=>{let[i]=Q.useForm(),a=Q.useWatch(`host`,i),o=Q.useWatch(`path`,i),s=V(`noStyle 更适合把字段绑定嵌进自定义布局，而不是单独承担一整行表单结构。`),c=H(()=>`https://${String(a.value??`api.rue.dev`)}:443/hooks/${String(o.value??`release-hooks`).replace(/^\/+/,``)}`);return y(()=>v(t=>{let n=ut().content.cloneNode(!0).firstChild,r=n.childNodes[0],a=r.parentNode,o=n.childNodes[1].childNodes[2].childNodes[1].childNodes[0],l=o.parentNode,u=n.childNodes[1].childNodes[4].childNodes[0],f=u.parentNode,p=(t,n,r)=>{let a=()=>g(Q,()=>({form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{host:`api.rue.dev`,path:`release-hooks`},onFinish:e=>{s.value=`保存复合控件
`+$(e)},render:t=>v(n=>{let r=F(),a=Ze().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0].childNodes[1].childNodes[1],c=s.parentNode,l=o.childNodes[1].childNodes[1].childNodes[1],u=l.parentNode;r.appendChild(a);let d=(n,r,i)=>{let a=()=>g(Q.Item,()=>({form:t,name:`host`,noStyle:!0,render:t=>v(n=>{let r=Ke().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=(e,n,r)=>{let i=()=>g(J,()=>({...t,placeholder:`api.rue.dev`}));return e==null?i():_(e,r,i)},s=i.nextSibling;return a.removeChild(i),e({parent:a,before:s},()=>o,()=>({})),[r,r]})}));return n==null?a():_(n,i,a)},f=s.nextSibling;c.removeChild(s),e({parent:c,before:f},()=>d,()=>({}));let p=(n,r,i)=>{let a=()=>g(Q.Item,()=>({form:t,name:`path`,noStyle:!0,normalize:e=>String(e??``).trim().replace(/^\/+/,``),render:t=>v(n=>{let r=Ke().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,o=(e,n,r)=>{let i=()=>g(J,()=>({...t,placeholder:`release-hooks`}));return e==null?i():_(e,r,i)},s=i.nextSibling;return a.removeChild(i),e({parent:a,before:s},()=>o,()=>({})),[r,r]})}));return n==null?a():_(n,i,a)},m=l.nextSibling;u.removeChild(l),e({parent:u,before:m},()=>p,()=>({}));let h=Je().content.cloneNode(!0),y=h.firstChild,b=y.childNodes[0],x=b.parentNode,S=y.childNodes[1],C=S.parentNode;r.appendChild(h);let w=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`保存复合地址`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},E=b.nextSibling;x.removeChild(b),e({parent:x,before:E},()=>w,()=>({}));let D=(e,t,n)=>{let r=()=>g(q,()=>({type:`outlined`,onClick:()=>{i.setFieldsValue({host:`staging.rue.dev`,path:`preview-hook`})},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`填入 staging`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},k=S.nextSibling;C.removeChild(S),e({parent:C,before:k},()=>D,()=>({}));let A=O(``),j=O(``);return r.insertBefore(A,r.firstChild),r.appendChild(j),[r.firstChild,r.lastChild]})}));return t==null?a():_(t,r,a)},m=r.nextSibling;a.removeChild(r),e({parent:a,before:m},()=>p,()=>({}));let h=O(``);l.insertBefore(h,o),l.removeChild(o),d(h,()=>c.value);let y=O(``);return f.insertBefore(y,u),f.removeChild(u),d(y,()=>s.value),[n,n]}))},wt=(t,n,r)=>{let[i]=Q.useForm(),a=V(`点击左侧按钮可调用 scrollToField；提交时会用 scrollToFirstError 自动滚到首个错误字段。`),o=(e,t)=>{i.scrollToField(e,{block:`center`,focus:!0}),a.value=`scrollToField -> ${t}`};return y(()=>v(t=>{let n=dt().content.cloneNode(!0).firstChild,r=n.childNodes[1].childNodes[0],s=n.childNodes[0].childNodes[2].childNodes[0],c=s.parentNode,l=n.childNodes[0].childNodes[2].childNodes[1],u=l.parentNode,f=n.childNodes[0].childNodes[2].childNodes[2],p=f.parentNode,m=n.childNodes[0].childNodes[2].childNodes[3],h=m.parentNode,y=n.childNodes[0].childNodes[3].childNodes[0],b=y.parentNode,x=n.childNodes[1].childNodes[0].childNodes[0],S=x.parentNode;r.setAttribute(`class`,`overflow-y-auto overscroll-contain pr-2`),Object.assign(r.style,{height:`min(34rem, 72vh)`,scrollBehavior:`smooth`,scrollbarGutter:`stable`});let C=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,onClick:()=>o(`releaseName`,`发布名称`),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`滚到发布名称`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},w=s.nextSibling;c.removeChild(s),e({parent:c,before:w},()=>C,()=>({}));let E=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>o([`strategy`,`batchSize`],`灰度批次`),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`滚到灰度批次`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},D=l.nextSibling;u.removeChild(l),e({parent:u,before:D},()=>E,()=>({}));let k=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>o([`observability`,`dashboard`],`监控看板`),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`滚到监控看板`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},A=f.nextSibling;p.removeChild(f),e({parent:p,before:A},()=>k,()=>({}));let j=(e,t,n)=>{let r=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>o([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`滚到回滚单号`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},M=m.nextSibling;h.removeChild(m),e({parent:h,before:M},()=>j,()=>({}));let N=O(``);b.insertBefore(N,y),b.removeChild(y),d(N,()=>a.value);let P=(t,n,r)=>{let s=()=>g(Q,()=>({form:i,name:`advanced-scroll-demo`,className:`pb-4`,scrollToFirstError:{block:`center`,focus:!0},initialValues:{application:`rue-design`,environment:`staging`,strategy:{batchSize:`10%`,pauseWindow:`15m`},observability:{dashboard:``}},onFinish:e=>{a.value=`提交成功
`+$(e)},onFinishFailed:e=>{a.value=`校验失败，已定位到首个错误字段
`+$({firstError:e.errorFields[0]?.name.join(`.`),errorFields:e.errorFields})},render:t=>v(n=>{let r=F(),i=Qe().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[1].childNodes[0],c=s.parentNode,l=a.childNodes[1].childNodes[1],u=l.parentNode,d=a.childNodes[1].childNodes[2],f=d.parentNode,p=a.childNodes[1].childNodes[3],m=p.parentNode;r.appendChild(i);let h=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`releaseName`,label:`发布名称`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`2026.05 release`}))}));return e==null?i():_(e,r,i)},v=s.nextSibling;c.removeChild(s),e({parent:c,before:v},()=>h,()=>({}));let y=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`application`,label:`应用名`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`rue-design`}))}));return e==null?i():_(e,r,i)},b=l.nextSibling;u.removeChild(l),e({parent:u,before:b},()=>y,()=>({}));let x=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`environment`,label:`环境`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`staging`}))}));return e==null?i():_(e,r,i)},S=d.nextSibling;f.removeChild(d),e({parent:f,before:S},()=>x,()=>({}));let C=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`owner`,label:`发布负责人`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`release-captain`}))}));return e==null?i():_(e,r,i)},w=p.nextSibling;m.removeChild(p),e({parent:m,before:w},()=>C,()=>({}));let E=$e().content.cloneNode(!0),D=E.firstChild,k=D.childNodes[1].childNodes[0],A=k.parentNode,j=D.childNodes[1].childNodes[1],M=j.parentNode,N=D.childNodes[1].childNodes[2],P=N.parentNode,I=D.childNodes[1].childNodes[3],L=I.parentNode;r.appendChild(E);let R=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`strategy`,`batchSize`],label:`灰度批次`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`10%`}))}));return e==null?i():_(e,r,i)},ee=k.nextSibling;A.removeChild(k),e({parent:A,before:ee},()=>R,()=>({}));let z=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`strategy`,`pauseWindow`],label:`观察窗口`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`15m`}))}));return e==null?i():_(e,r,i)},B=j.nextSibling;M.removeChild(j),e({parent:M,before:B},()=>z,()=>({}));let V=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`strategy`,`rollbackThreshold`],label:`回滚阈值`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`error rate > 2%`}))}));return e==null?i():_(e,r,i)},H=N.nextSibling;P.removeChild(N),e({parent:P,before:H},()=>V,()=>({}));let te=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`strategy`,`approvalWindow`],label:`审批窗口`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`30m`}))}));return e==null?i():_(e,r,i)},U=I.nextSibling;L.removeChild(I),e({parent:L,before:U},()=>te,()=>({}));let W=et().content.cloneNode(!0),K=W.firstChild,ne=K.childNodes[1].childNodes[0],re=ne.parentNode,Y=K.childNodes[1].childNodes[1],ie=Y.parentNode,ae=K.childNodes[1].childNodes[2],oe=ae.parentNode,se=K.childNodes[1].childNodes[3],ce=se.parentNode;r.appendChild(W);let le=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`observability`,`dashboard`],label:`监控看板`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`Grafana release board`}))}));return e==null?i():_(e,r,i)},ue=ne.nextSibling;re.removeChild(ne),e({parent:re,before:ue},()=>le,()=>({}));let de=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`observability`,`alertChannel`],label:`告警通道`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`#release-alerts`}))}));return e==null?i():_(e,r,i)},fe=Y.nextSibling;ie.removeChild(Y),e({parent:ie,before:fe},()=>de,()=>({}));let pe=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`approval`,`owner`],label:`审批负责人`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`ops-squad`}))}));return e==null?i():_(e,r,i)},me=ae.nextSibling;oe.removeChild(ae),e({parent:oe,before:me},()=>pe,()=>({}));let he=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`approval`,`qaOwner`],label:`QA 负责人`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`qa-squad`}))}));return e==null?i():_(e,r,i)},ge=se.nextSibling;ce.removeChild(se),e({parent:ce,before:ge},()=>he,()=>({}));let X=tt().content.cloneNode(!0),Z=X.firstChild,_e=Z.childNodes[1].childNodes[0],ve=_e.parentNode,ye=Z.childNodes[1].childNodes[1],be=ye.parentNode,xe=Z.childNodes[1].childNodes[2],Se=xe.parentNode,Ce=Z.childNodes[1].childNodes[3],we=Ce.parentNode;r.appendChild(X);let Te=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`rollback`,`ticket`],label:`回滚单号`,rules:[{required:!0}],extra:`这里故意放在长表单靠后的位置，方便观察 scrollToFirstError。`,render:e=>g(J,()=>({...e,placeholder:`RB-2026-0514`}))}));return e==null?i():_(e,r,i)},Ee=_e.nextSibling;ve.removeChild(_e),e({parent:ve,before:Ee},()=>Te,()=>({}));let De=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`rollback`,`owner`],label:`回滚负责人`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`rollback-owner`}))}));return e==null?i():_(e,r,i)},Oe=ye.nextSibling;be.removeChild(ye),e({parent:be,before:Oe},()=>De,()=>({}));let ke=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`rollback`,`window`],label:`回滚窗口`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`20m`}))}));return e==null?i():_(e,r,i)},Ae=xe.nextSibling;Se.removeChild(xe),e({parent:Se,before:Ae},()=>ke,()=>({}));let je=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:[`rollback`,`watchers`],label:`通知对象`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`platform / qa / support`}))}));return e==null?i():_(e,r,i)},Me=Ce.nextSibling;we.removeChild(Ce),e({parent:we,before:Me},()=>je,()=>({}));let Ne=nt().content.cloneNode(!0),Pe=Ne.firstChild,Fe=Pe.childNodes[0].childNodes[1].childNodes[0],Ie=Fe.parentNode,Le=Pe.childNodes[0].childNodes[1].childNodes[1],Re=Le.parentNode;r.appendChild(Ne);let ze=(e,t,n)=>{let r=()=>g(q,()=>({type:`outlined`,onClick:()=>o([`rollback`,`ticket`],`回滚单号`),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`滚到回滚单号`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},Be=Fe.nextSibling;Ie.removeChild(Fe),e({parent:Ie,before:Be},()=>ze,()=>({}));let Ve=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`提交长表单`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},He=Le.nextSibling;Re.removeChild(Le),e({parent:Re,before:He},()=>Ve,()=>({}));let Ue=O(``),We=O(``);return r.insertBefore(Ue,r.firstChild),r.appendChild(We),[r.firstChild,r.lastChild]})}));return t==null?s():_(t,r,s)},I=x.nextSibling;return S.removeChild(x),e({parent:S,before:I},()=>P,()=>({})),[n,n]}))},Tt=(t,r,o)=>{let[s]=Q.useForm(),c=Q.useWatch(`members`,s);return v(t=>{let r=ft().content.cloneNode(!0).firstChild,o=r.childNodes[0].childNodes[0],l=o.parentNode,u=r.childNodes[0].childNodes[1].childNodes[1].childNodes[0],f=u.parentNode,p=r.childNodes[0].childNodes[1].childNodes[2].childNodes[0],m=p.parentNode,y=(t,n,r)=>{let o=()=>g(Q,()=>({form:s,className:`content-start gap-5 rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{members:[{name:`Rue`,role:`Owner`},{name:`Vapor`,role:`Reviewer`}]},render:t=>g(Q.List,()=>({form:t,name:`members`,rules:[{validator:(e,t)=>{if(!Array.isArray(t)||t.length<2)return`至少保持 2 名审批成员，才适合真实协作流程。`}}],render:(n,r,o)=>v(s=>{let c=qe().content.cloneNode(!0).firstChild,l=c.childNodes[0],u=l.parentNode,f=c.childNodes[1],p=f.parentNode,m=c.childNodes[2].childNodes[0],y=m.parentNode,b=c.childNodes[2].childNodes[1],x=b.parentNode,S=c.childNodes[3],C=S.parentNode;h(u,l,()=>n.length===0?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=j(`div`,e);return t.setAttribute(`class`,`rounded-[1.25rem] border border-dashed border-base-300 bg-base-200/40 p-4 text-sm text-base-content/60`),T(t,O(`暂无成员，点击下方按钮即可追加一组字段。`)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})});let E=[];z(()=>{E=A(p,f,E,n||[],(e,t)=>e.key,(e,o)=>{let s=U(e),c=U(o);return L((e,o,l)=>{let u=()=>v(e=>{let o=j(`div`,e);o.setAttribute(`class`,`rounded-[1.25rem] border border-base-300 bg-base-50/60 p-4 lg:p-5`);let l=j(`div`,o);T(o,l),l.setAttribute(`class`,`mb-4 flex flex-wrap items-center justify-between gap-3`);let u=j(`div`,l);T(l,u);let f=j(`div`,u);T(u,f),f.setAttribute(`class`,`text-xs font-medium uppercase tracking-[0.22em] text-base-content/45`),T(f,O(`Member `));let p=O(``);T(f,p),d(p,()=>c.get()+1);let m=j(`div`,u);T(u,m),m.setAttribute(`class`,`mt-1 text-sm font-medium text-base-content`),T(m,O(`审批成员 `));let h=O(``);T(m,h),d(h,()=>c.get()+1);let v=j(`div`,l);T(l,v),v.setAttribute(`class`,`flex flex-wrap gap-2`),a(()=>c.get()>0?{__rue_compiled_branch_key:!0,create:()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>r.move(s.get().name,s.get().name-1),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`上移`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(v),a(()=>c.get()<n.length-1?{__rue_compiled_branch_key:!0,create:()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>r.move(s.get().name,s.get().name+1),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`下移`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}))}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(v),i(v,q,()=>({size:`sm`,type:`text`,onClick:()=>r.remove(s.get().name),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`删除`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));let y=j(`div`,o);return T(o,y),y.setAttribute(`class`,`grid gap-4 md:grid-cols-2`),i(y,Q.Item,()=>({form:t,layout:`vertical`,name:[`members`,s.get().name,`name`],label:`成员名称`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`输入成员名称`}))})),i(y,Q.Item,()=>({form:t,layout:`vertical`,name:[`members`,s.get().name,`role`],label:`职责`,rules:[{required:!0}],render:e=>g(J,()=>({...e,placeholder:`Owner / Reviewer / QA`}))})),[o,o]});return e==null?u():_(e,l,u)},(t,n)=>{e=t,o=n,s.set(t),c.set(n)},void 0)},!0,!1)}),B(()=>w(E));let D=(e,t,i)=>{let a=()=>g(q,()=>({size:`sm`,color:`primary`,onClick:()=>{r.add({name:`新成员 `+String(n.length+1),role:`QA`})},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`新增成员`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?a():_(e,i,a)},k=m.nextSibling;y.removeChild(m),e({parent:y,before:k},()=>D,()=>({}));let M=(e,t,n)=>{let i=()=>g(q,()=>({size:`sm`,type:`outlined`,onClick:()=>r.add({name:`Head reviewer`,role:`QA`},0),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`头部插入`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?i():_(e,n,i)},N=b.nextSibling;return x.removeChild(b),e({parent:x,before:N},()=>M,()=>({})),h(C,S,()=>o.errors.length>0||o.warnings.length>0?{__rue_compiled_branch_key:!0,create:()=>g(Q.ErrorList,()=>({errors:o.errors,warnings:o.warnings,className:`rounded-[1.25rem] border border-error/15 bg-error/5 p-4 text-sm`}))}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=F();return[t.firstChild,t.lastChild]})}),[c,c]})}))}));return t==null?o():_(t,r,o)},x=o.nextSibling;return l.removeChild(o),e({parent:l,before:x},()=>y,()=>({})),e({parent:f,before:u},()=>K(c.value?.length??0),()=>({})),h(m,p,()=>Array.isArray(c.value)&&c.value.length>0?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=F(),r=R(`rue:list:end`);T(t,r);let i=[];z(()=>{let e=c.value||[];i=A(r.parentNode,r,i,e,(e,t)=>String(t),(e,t)=>{let r=U(e),i=U(t);return L((e,t,a)=>{let o=()=>v(()=>{let e=F(),t=j(`div`,e);T(e,t),n(t,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/80`);let a=j(`div`,t);T(t,a),n(a,`text-xs uppercase tracking-[0.22em] text-base-content/45`),T(a,O(`成员 `));let o=b(a);T(a,o),M(()=>{te(o,i.get()+1)});let s=j(`div`,t);T(t,s),n(s,`mt-2 text-base font-medium text-base-content`);let c=b(s);T(s,c),M(()=>{te(c,r.get()?.name?String(r.get().name):`未命名成员`)});let l=j(`div`,t);T(t,l),n(l,`mt-1 text-xs text-base-content/55`);let u=b(l);T(l,u),M(()=>{te(u,r.get()?.role?String(r.get().role):`未分配职责`)});let d=O(``),f=O(``);return e.insertBefore(d,e.firstChild),e.appendChild(f),[e.firstChild,e.lastChild]});return e==null?o():_(e,a,o)},(n,a)=>{e=n,t=a,r.set(n),i.set(a)},void 0)},!0,!1)}),B(()=>w(i));let a=O(``),o=O(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=j(`div`,e);return t.setAttribute(`class`,`rounded-[1.25rem] bg-base-200/70 p-4 text-sm text-base-content/60`),T(t,O(`当前列表为空。`)),[t,t]})}),[r,r]})},Et=(t,n,r)=>{let[i]=Q.useForm(),a=Q.useWatch(`keyword`,i),o=Q.useWatch(`assignee`,i),s=Q.useWatch(`repository`,i),c=Q.useWatch(`reviewer`,i),l=Q.useWatch(`includeDrafts`,i),u=V(`尚未执行检索。`);return y(()=>v(t=>{let n=pt().content.cloneNode(!0).firstChild,r=n.childNodes[0],f=r.parentNode,p=n.childNodes[1].childNodes[0].childNodes[2].childNodes[0],m=p.parentNode,y=n.childNodes[1].childNodes[0].childNodes[3].childNodes[0].childNodes[1],b=y.parentNode,x=n.childNodes[1].childNodes[0].childNodes[3].childNodes[1].childNodes[1],S=x.parentNode,C=n.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[1],w=C.parentNode,E=n.childNodes[1].childNodes[0].childNodes[3].childNodes[2].childNodes[3],D=E.parentNode,k=n.childNodes[1].childNodes[0].childNodes[3].childNodes[3].childNodes[1],A=k.parentNode,j=n.childNodes[1].childNodes[1].childNodes[1].childNodes[0],M=j.parentNode,N=(t,n,r)=>{let a=()=>g(Q,()=>({form:i,className:`rounded-[1.5rem] border border-base-300 bg-base-100 p-6 shadow-sm lg:p-7`,initialValues:{keyword:`runtime vapor`,repository:`rue-design`,assignee:`design`,reviewer:`infra`,includeDrafts:!1},onFinish:e=>{u.value=$(e)},render:t=>v(n=>{let r=F(),a=rt().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],c=s.parentNode,l=o.childNodes[1],u=l.parentNode,d=o.childNodes[2],f=d.parentNode,p=o.childNodes[3],m=p.parentNode;r.appendChild(a);let h=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,layout:`vertical`,name:`keyword`,label:`关键词`,render:e=>g(J,()=>({...e,placeholder:`搜索 issue / 页面 / API`}))}));return e==null?i():_(e,r,i)},v=s.nextSibling;c.removeChild(s),e({parent:c,before:v},()=>h,()=>({}));let y=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,layout:`vertical`,name:`repository`,label:`仓库`,render:e=>g(J,()=>({...e,placeholder:`rue-design`}))}));return e==null?i():_(e,r,i)},b=l.nextSibling;u.removeChild(l),e({parent:u,before:b},()=>y,()=>({}));let x=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,layout:`vertical`,name:`assignee`,label:`负责人`,render:e=>g(J,()=>({...e,placeholder:`team-design`}))}));return e==null?i():_(e,r,i)},S=d.nextSibling;f.removeChild(d),e({parent:f,before:S},()=>x,()=>({}));let C=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,layout:`vertical`,name:`reviewer`,label:`评审人`,render:e=>g(J,()=>({...e,placeholder:`infra`}))}));return e==null?i():_(e,r,i)},w=p.nextSibling;m.removeChild(p),e({parent:m,before:w},()=>C,()=>({}));let E=it().content.cloneNode(!0),D=E.firstChild,k=D.childNodes[0],A=k.parentNode,j=D.childNodes[1].childNodes[0],M=j.parentNode,N=D.childNodes[1].childNodes[1],P=N.parentNode,I=D.childNodes[1].childNodes[2],L=I.parentNode;r.appendChild(E);let R=(e,n,r)=>{let i=()=>g(Q.Item,()=>({form:t,name:`includeDrafts`,valuePropName:`checked`,render:e=>g(ne,()=>({...e,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`包含草稿和实验分支`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}))}));return e==null?i():_(e,r,i)},ee=k.nextSibling;A.removeChild(k),e({parent:A,before:ee},()=>R,()=>({}));let z=(e,t,n)=>{let r=()=>g(q,()=>({color:`primary`,htmlType:`submit`,children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`执行搜索`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},B=j.nextSibling;M.removeChild(j),e({parent:M,before:B},()=>z,()=>({}));let V=(e,t,n)=>{let r=()=>g(q,()=>({type:`outlined`,onClick:()=>i.resetFields(),children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`清空条件`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},H=N.nextSibling;P.removeChild(N),e({parent:P,before:H},()=>V,()=>({}));let te=(e,t,n)=>{let r=()=>g(q,()=>({type:`text`,onClick:()=>{i.setFieldsValue({keyword:`design tokens`,repository:`app`,assignee:`ui-platform`,reviewer:`release`})},children:(e,t,n)=>{let r=()=>G(e=>{let t=F();T(t,O(`填入示例`));let n=O(``),r=O(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():_(e,n,r)}}));return e==null?r():_(e,n,r)},U=I.nextSibling;L.removeChild(I),e({parent:L,before:U},()=>te,()=>({}));let W=O(``),K=O(``);return r.insertBefore(W,r.firstChild),r.appendChild(K),[r.firstChild,r.lastChild]})}));return t==null?a():_(t,r,a)},P=r.nextSibling;f.removeChild(r),e({parent:f,before:P},()=>N,()=>({})),e({parent:m,before:p},()=>K(_t({keyword:String(a.value??``),repository:String(s.value??``),assignee:String(o.value??``),reviewer:String(c.value??``),includeDrafts:!!l.value})||`暂无 query string`),()=>({}));let I=O(``);b.insertBefore(I,y),b.removeChild(y),d(I,()=>String(a.value??``)||`未填写`);let L=O(``);S.insertBefore(L,x),S.removeChild(x),d(L,()=>String(s.value??``)||`未填写`);let R=O(``);w.insertBefore(R,C),w.removeChild(C),d(R,()=>String(o.value??``)||`未填写`);let ee=O(``);return D.insertBefore(ee,E),D.removeChild(E),d(ee,()=>String(c.value??``)||`未填写`),h(A,k,()=>l.value?{__rue_compiled_branch_key:!0,create:()=>G(e=>{let t=O(`是`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>G(e=>{let t=O(`否`);return[t,t]})}),e({parent:M,before:j},()=>K(u.value),()=>({})),[n,n]}))},Dt=[{prop:`form`,description:`显式注入 Form 实例，在当前 Rue runtime 下这是最稳定的共享方式。`,type:`FormInstance`,defaultValue:`-`},{prop:`initialValues`,description:`挂载时写入初始值；后续可通过实例方法重置回该快照。`,type:`Record<string, any>`,defaultValue:`-`},{prop:`layout`,description:`设置整体布局，可选 horizontal、vertical、inline。`,type:`horizontal | vertical | inline`,defaultValue:`horizontal`},{prop:`component`,description:`指定根节点标签，默认渲染为 form。`,type:`string | false`,defaultValue:`form`},{prop:`name`,description:`设置 Form 名称，会参与字段 id 生成以及 scrollToField 定位。`,type:`string`,defaultValue:`-`},{prop:`validateMessages`,description:`覆盖默认校验模板，适合做团队统一文案或本地化。`,type:`FormValidateMessages`,defaultValue:`-`},{prop:`validateTrigger`,description:`全局校验触发时机，可由 Form.Item 单独覆盖。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`scrollToFirstError`,description:`提交失败后滚动到第一个错误字段，适合长表单。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`false`},{prop:`preserve`,description:`字段卸载后是否保持值，常用于条件区域和分页表单。`,type:`boolean`,defaultValue:`true`},{prop:`render`,description:`通过 render(form) 直接拿到实例并组织表单内容。`,type:`(form: FormInstance) => any`,defaultValue:`-`},{prop:`onValuesChange`,description:`任意字段变化时触发，返回变更值和全量值。`,type:`(changedValues, allValues) => void`,defaultValue:`-`},{prop:`onFinish / onFinishFailed`,description:`提交成功或失败时触发，便于保存 payload 或回显错误摘要。`,type:`(values) => void / (info) => void`,defaultValue:`-`}],Ot=[{prop:`name`,description:`字段路径，支持字符串或数组路径。`,type:`NamePath`,defaultValue:`-`},{prop:`label`,description:`字段标签，水平布局下默认追加冒号。`,type:`any`,defaultValue:`-`},{prop:`rules`,description:`声明式校验规则，支持 required、type、pattern、自定义 validator。`,type:`FormRule[]`,defaultValue:`-`},{prop:`render`,description:`最推荐的字段渲染方式，可拿到 controlProps、meta 与 form。`,type:`(controlProps, meta, form) => any`,defaultValue:`-`},{prop:`dependencies`,description:`声明上游依赖字段，上游变化时会重新触发当前项校验。`,type:`NamePath[]`,defaultValue:`-`},{prop:`validateTrigger`,description:`覆盖单字段校验时机，例如 onBlur。`,type:`string | string[]`,defaultValue:`onChange`},{prop:`valuePropName`,description:`把字段值映射到 checked 等非 value 属性，适合 Checkbox。`,type:`string`,defaultValue:`value`},{prop:`getValueProps / normalize`,description:`分别控制“store -> 控件”和“控件 -> store”的值转换。`,type:`function / function`,defaultValue:`-`},{prop:`extra / help`,description:`额外说明和帮助信息；未显式传 help 时会展示校验消息。`,type:`any`,defaultValue:`-`},{prop:`messageVariables`,description:`修改校验模板中的占位变量，适合自定义 label 文案。`,type:`Record<string, string>`,defaultValue:`-`},{prop:`hasFeedback`,description:`显示校验状态反馈图标，通常与 Input 联用。`,type:`boolean`,defaultValue:`false`},{prop:`shouldUpdate`,description:`把 Item 作为 render consumer 使用，按条件响应全表单变化。`,type:`boolean | (prev, next) => boolean`,defaultValue:`-`},{prop:`noStyle`,description:`只保持字段绑定能力，不输出额外布局壳层。`,type:`boolean`,defaultValue:`false`}],kt=[{prop:`Form.List name`,description:`声明数组字段路径，驱动动态条目渲染。`,type:`NamePath`,defaultValue:`-`},{prop:`Form.List render`,description:`render(fields, operation, meta) 返回列表 UI。`,type:`(fields, operation, meta) => any`,defaultValue:`-`},{prop:`Form.List rules`,description:`为整个列表声明规则，通常与 Form.ErrorList 一起使用。`,type:`FormRule[]`,defaultValue:`-`},{prop:`operation.add / remove / move`,description:`列表操作对象，负责增删改顺序。`,type:`FormListOperation`,defaultValue:`-`},{prop:`Form.ErrorList`,description:`渲染列表级错误与警告，适合最小数量、重复值等规则。`,type:`FC<FormErrorListProps>`,defaultValue:`-`},{prop:`Form.useForm()`,description:`创建或复用显式实例，适合跨按钮、摘要卡片和表单主体共享。`,type:`() => [FormInstance]`,defaultValue:`-`},{prop:`Form.useWatch(name, form)`,description:`订阅某个字段并在当前组件内响应式读取它。`,type:`(name, form?) => any`,defaultValue:`-`},{prop:`form.validateFields()`,description:`在命令式流程中提前执行一次校验。`,type:`() => Promise<any>`,defaultValue:`-`},{prop:`form.getFieldsError()`,description:`读取当前错误和警告快照，适合摘要面板。`,type:`() => FieldError[]`,defaultValue:`-`},{prop:`form.scrollToField(name)`,description:`手动滚动到指定字段，适合长表单和分步表单。`,type:`(name, options?) => void`,defaultValue:`-`},{prop:`form.submit()`,description:`从外部按钮或命令式操作触发一次提交流程。`,type:`() => void`,defaultValue:`-`}],At=[{eyebrow:`先记住`,title:`默认值放在 Form 上`,description:`字段被 Form.Item 接管后会进入受控模式。需要初始值时，优先放到 initialValues，而不是给 Input 传 defaultValue。`,items:[`单字段初始化优先级低于 Form initialValues`,`动态列表默认值放到 Form 或 Form.List`,`resetFields 会回到 initialValues 快照`]},{eyebrow:`先记住`,title:`Checkbox 不是 value`,description:`Checkbox、Toggle 这类组件的值语义不是 value，而是 checked。需要通过 valuePropName 切换绑定属性。`,items:[`Checkbox / Switch 类组件使用 checked`,`否则会出现“值变了但控件没联动”的错觉`]},{eyebrow:`先记住`,title:`dependencies 和 shouldUpdate 分工不同`,description:`dependencies 更适合“某个字段依赖另一个字段重新校验”，shouldUpdate 更适合“根据整张表的值决定是否渲染一个区域”。`,items:[`确认密码用 dependencies`,`条件区域和 JSON 预览用 shouldUpdate`,`不要在同一职责上混用两者`]},{eyebrow:`先记住`,title:`显式传 form 更稳定`,description:`Rue 当前 runtime 下，推荐始终显式持有并传递 form 实例。页面级按钮、摘要卡片、提交动作也都围绕这一个实例展开。`,items:[`优先 Form.useForm()`,`render(form) 里把 form 可以传给 Item / List`,`不要依赖隐式祖先解析`]}],jt=[{eyebrow:`FAQ`,title:`为什么推荐显式传 form？`,description:`因为 Rue 当前 runtime 还不支持稳定地自动解析最近 Form 实例。显式传递是当前最稳的写法。`},{eyebrow:`FAQ`,title:`为什么 Checkbox 不跟值同步？`,description:`大多数时候是忘了把 Form.Item 的 valuePropName 改成 checked。Form 默认只会往 value 上注入值。`},{eyebrow:`FAQ`,title:`为什么 defaultValue 不生效？`,description:`字段一旦被 Form.Item 接管，就会进入受控模式。应改用 Form 的 initialValues，或者通过 setFieldsValue 更新。`},{eyebrow:`FAQ`,title:`为什么 Form.List 里的 Item initialValue 不推荐？`,description:`动态列表的初始结构应放在 Form 或 Form.List 上，而不是子 Item 上。`},{eyebrow:`FAQ`,title:`什么时候用 getValueProps + normalize？`,description:`当显示值和存储值不一致时，例如 #2048、百分比、单位后缀、kebab-case slug，推荐一进一出都显式写出来。`},{eyebrow:`FAQ`,title:`scrollToFirstError 为什么可能失效？`,description:`如果你包装了自定义控件，需要确保 Form 注入的 id 最终落到真实 DOM 输入节点上，否则无法精确定位。`}],Mt=(t,n,r)=>{let i=V(`preview`),a=V(`preview`),o=V(`preview`),s=V(`preview`),c=V(`preview`),l=V(`preview`),u=V(`preview`),d=V(`preview`),f=V(`preview`);return y(()=>g(re,()=>({children:(t,n,r)=>{let p=()=>v(t=>{let n=F(),r=mt().content.cloneNode(!0),p=r.firstChild,m=p.childNodes[4].childNodes[0],h=m.parentNode,v=p.childNodes[6],y=v.parentNode,b=p.childNodes[7],x=b.parentNode,S=p.childNodes[8],C=S.parentNode,T=p.childNodes[9],E=T.parentNode,D=p.childNodes[10],k=D.parentNode,j=p.childNodes[11],M=j.parentNode,N=p.childNodes[12],P=N.parentNode,I=p.childNodes[13],R=I.parentNode,ee=p.childNodes[14],V=ee.parentNode,H=p.childNodes[17].childNodes[0],te=H.parentNode,W=p.childNodes[20],G=W.parentNode,K=p.childNodes[21],q=K.parentNode,ne=p.childNodes[22],J=ne.parentNode;n.appendChild(r);let re=[];z(()=>{re=A(h,m,re,At||[],(e,t)=>e.title,(e,t)=>{let n=U(e);return L((e,t,r)=>{let i=()=>g(gt,()=>({eyebrow:n.get().eyebrow,title:n.get().title,description:n.get().description,items:n.get().items}));return e==null?i():_(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(re));let ie=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Basic submit and validation`,summary:`基础提交、规则校验与 Checkbox 的 checked 绑定。`,tab:i,preview:()=>g(vt,()=>({})),code:`<Form
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
`}));return e==null?r():_(e,n,r)},ae=v.nextSibling;y.removeChild(v),e({parent:y,before:ae},()=>ie,()=>({}));let oe=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Form instance and reactive summary`,summary:`用 Form.useForm 和 Form.useWatch 把同一个表单实例共享给按钮和摘要面板。`,tab:a,preview:()=>g(yt,()=>({})),code:`const InstanceMethodsShowcase: FC = () => {
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
`}));return e==null?r():_(e,n,r)},se=b.nextSibling;x.removeChild(b),e({parent:x,before:se},()=>oe,()=>({}));let ce=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Validation timing and dependencies`,summary:`把 validateTrigger、dependencies 和 warningOnly 放进一个更贴近注册/发布配置场景的表单里。`,tab:o,preview:()=>g(bt,()=>({})),code:`const [form] = Form.useForm()

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
`}));return e==null?r():_(e,n,r)},le=S.nextSibling;C.removeChild(S),e({parent:C,before:le},()=>ce,()=>({}));let ue=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Normalize and value mapping`,summary:`演示 getValueProps、normalize 和 messageVariables 在实际业务表单里的配合方式。`,tab:s,preview:()=>g(xt,()=>({})),code:`<Form.Item
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
`}));return e==null?r():_(e,n,r)},de=T.nextSibling;E.removeChild(T),e({parent:E,before:de},()=>ue,()=>({}));let fe=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Conditional fields with shouldUpdate`,summary:`用 shouldUpdate 按需挂载额外区域，而不是让每个字段都承担条件渲染职责。`,tab:c,preview:()=>g(St,()=>({})),code:`<Form.Item
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
`}));return e==null?r():_(e,n,r)},pe=D.nextSibling;k.removeChild(D),e({parent:k,before:pe},()=>fe,()=>({}));let me=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Composite controls with noStyle`,summary:`一个视觉行里组合多个字段时，用外层 Item 负责排版，内部 noStyle Item 只做字段绑定。`,tab:l,preview:()=>g(Ct,()=>({})),code:`const [form] = Form.useForm()

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
`}));return e==null?r():_(e,n,r)},he=j.nextSibling;M.removeChild(j),e({parent:M,before:he},()=>me,()=>({}));let ge=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Dynamic list`,summary:`用 Form.List 组织动态数组字段，并补上列表级规则、重排操作和 ErrorList。`,tab:u,preview:()=>g(Tt,()=>({})),code:`const DynamicListShowcase: FC = () => {
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
`}));return e==null?r():_(e,n,r)},X=N.nextSibling;P.removeChild(N),e({parent:P,before:X},()=>ge,()=>({}));let Z=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Long form scrolling`,summary:`在可滚动长表单里同时展示 scrollToField 和 scrollToFirstError 的定位行为。`,tab:d,preview:()=>g(wt,()=>({})),code:`const LongFormScrollShowcase: FC = () => {
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
`}));return e==null?r():_(e,n,r)},_e=I.nextSibling;R.removeChild(I),e({parent:R,before:_e},()=>Z,()=>({}));let ve=(e,t,n)=>{let r=()=>g(Y,()=>({title:`Advanced search`,summary:`把高级搜索表单整理成 Rue 实现：网格字段、独立按钮区、统一实例驱动。`,tab:f,preview:()=>g(Et,()=>({})),code:`const [form] = Form.useForm()

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
`}));return e==null?r():_(e,n,r)},ye=ee.nextSibling;V.removeChild(ee),e({parent:V,before:ye},()=>ve,()=>({}));let be=[];z(()=>{be=A(te,H,be,jt||[],(e,t)=>e.title,(e,t)=>{let n=U(e);return L((e,t,r)=>{let i=()=>g(gt,()=>({eyebrow:n.get().eyebrow,title:n.get().title,description:n.get().description}));return e==null?i():_(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(be));let xe=(e,t,n)=>{let r=()=>g(ht,()=>({title:`Form`,rows:Dt}));return e==null?r():_(e,n,r)},Se=W.nextSibling;G.removeChild(W),e({parent:G,before:Se},()=>xe,()=>({}));let Ce=(e,t,n)=>{let r=()=>g(ht,()=>({title:`Form.Item`,rows:Ot}));return e==null?r():_(e,n,r)},we=K.nextSibling;q.removeChild(K),e({parent:q,before:we},()=>Ce,()=>({}));let Te=(e,t,n)=>{let r=()=>g(ht,()=>({title:`Form.List and Hooks`,rows:kt}));return e==null?r():_(e,n,r)},Ee=ne.nextSibling;J.removeChild(ne),e({parent:J,before:Ee},()=>Te,()=>({}));let De=O(``),Oe=O(``);return n.insertBefore(De,n.firstChild),n.appendChild(Oe),[n.firstChild,n.lastChild]});return t==null?p():_(t,r,p)}})))};export{Mt as default};