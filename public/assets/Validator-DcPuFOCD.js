import{Cn as e,Ct as t,Lt as n,Mt as r,Nt as i,Tt as a,dt as o,ft as s,ht as c,mt as l,ot as u,pn as d,pt as f,st as p,tn as m,vn as h}from"./context-8lXZvIn-.js";import{l as g,o as _,t as v}from"./vapor-runtime-ygJWVcNn.js";import{a as y,n as b}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as x}from"./Code-DhoWkRkB.js";import{n as S,t as C}from"./src-CCTNpCXV.js";import{t as w}from"./button-CvwbmGA0.js";import{t as T}from"./tabs-B1XdBEJF.js";import{r as E}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var D=[`input`,`select`,`textarea`,`checkbox`,`toggle`],O=(...e)=>e.filter(Boolean).join(` `),k=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),A=e=>{let t=k(e);return D.find(e=>t.has(e))},j=(e,t,n)=>{if(t)return t;let r=A(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},M=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),N=(e,t,n,r)=>{let i=k(r);return O(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},P=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:u,__rue_rest_omit_5:d,rest:v,resolvedAppearance:b,resolvedHost:x,cls:S}=y(`useSetup:0:0`,()=>e(()=>{let{as:e,appearance:r,size:i,status:a,className:o,children:s,...c}=t,l=y(`computed:1:0`,()=>n(()=>j(t.as,t.appearance,t.className))),u=l;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,rest:c,resolvedAppearance:l,resolvedHost:y(`computed:1:1`,()=>n(()=>M(t.as,u.get()))),cls:y(`computed:1:2`,()=>n(()=>N(u.get(),t.size,t.status,t.className)))}}));return x.get()===`select`?g(e=>{let n=f(`select`,e);m(()=>{i(n,v)}),m(()=>{a(n,S.get())});let r=o(`rue:children:anchor`);return p(n,r),m(()=>{let e=t.children;h(()=>_(e,n,r))}),n}):x.get()===`textarea`?g(e=>{let n=f(`textarea`,e);m(()=>{i(n,v)}),m(()=>{a(n,S.get())});let r=o(`rue:children:anchor`);return p(n,r),m(()=>{let e=t.children;h(()=>_(e,n,r))}),n}):g(e=>{let t=f(`input`,e);return m(()=>{i(t,v)}),m(()=>{a(t,S.get())}),t})},F=l=>{let{__rue_rest_omit_0:u,__rue_rest_omit_1:d,__rue_rest_omit_2:v,__rue_rest_omit_3:x,__rue_rest_omit_4:S,rest:C,cls:w,hasLines:T}=y(`useSetup:0:0:dup1`,()=>e(()=>{let{as:e,className:t,children:r,hideUntilInvalid:i,lines:a,...o}=l;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,cls:y(`computed:1:3`,()=>n(()=>O(`validator-hint`,l.hideUntilInvalid?`hidden`:void 0,l.className))),hasLines:!!l.lines?.length}}));return(l.as===void 0?`p`:l.as)===`div`?g(e=>{let n=f(`div`,e);m(()=>{i(n,C)}),m(()=>{a(n,w.get())});let u=o(`rue:slot:anchor`);return p(n,u),m(()=>{let e=T?g(()=>{let e=s(),n=o(`rue:list:start`),i=o(`rue:list:end`);p(e,n),p(e,i);let u=new Map;return m(()=>{u=b({items:(l.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:i,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):l.children;h(()=>_(e,n,u))}),n}):(l.as===void 0?`p`:l.as)===`span`?g(e=>{let n=f(`span`,e);m(()=>{i(n,C)}),m(()=>{a(n,w.get())});let u=o(`rue:slot:anchor`);return p(n,u),m(()=>{let e=T?g(()=>{let e=s(),n=o(`rue:list:start`),i=o(`rue:list:end`);p(e,n),p(e,i);let u=new Map;return m(()=>{u=b({items:(l.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:i,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):l.children;h(()=>_(e,n,u))}),n}):g(e=>{let n=f(`p`,e);m(()=>{i(n,C)}),m(()=>{a(n,w.get())});let u=o(`rue:slot:anchor`);return p(n,u),m(()=>{let e=T?g(()=>{let e=s(),n=o(`rue:list:start`),i=o(`rue:list:end`);p(e,n),p(e,i);let u=new Map;return m(()=>{u=b({items:(l.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:i,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):l.children;h(()=>_(e,n,u))}),n})},I=(e,t)=>O(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),L=Object.assign(P,{Hint:F,Field:i=>{let{__rue_rest_omit_0:u,__rue_rest_omit_1:d,__rue_rest_omit_2:x,__rue_rest_omit_3:S,__rue_rest_omit_4:C,__rue_rest_omit_5:w,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:D,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,rest:L,controlId:R,generatedHintId:z,describedBy:B,showRequiredMark:V,fieldCls:H}=y(`useSetup:0:0:dup2`,()=>e(()=>{let{fieldAs:e,className:t,controlClassName:r,label:a,labelClassName:o,hint:s,hintAs:c,hintClassName:l,hideHintWhenValid:u,extra:d,extraClassName:f,requiredMark:p,id:m,children:h,...g}=i,_=y(`computed:1:4`,()=>n(()=>typeof i.id==`string`&&i.id.trim()?i.id:void 0)),v=_,b=y(`computed:1:5`,()=>n(()=>v.get()&&i.hint!=null&&g[`aria-describedby`]==null?`${v.get()}-hint`:void 0)),x=b;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,rest:g,controlId:_,generatedHintId:b,describedBy:y(`computed:1:6`,()=>n(()=>g[`aria-describedby`]??x.get())),showRequiredMark:y(`computed:1:7`,()=>n(()=>i.requiredMark??g.required===!0)),fieldCls:y(`computed:1:8`,()=>n(()=>I(i.fieldAs===void 0?`fieldset`:i.fieldAs,i.className)))}}));return(i.fieldAs===void 0?`fieldset`:i.fieldAs)===`div`?g(e=>{let n=f(`div`,e);m(()=>{a(n,H.get())});let u=o(`rue:slot:anchor`);p(n,u),m(()=>{let e=i.label==null?``:g(()=>{let e=s(),n=f(`label`,e);p(e,n),m(()=>{a(n,O(`label`,i.labelClassName))}),m(()=>{t(n,`for`,String(R.get()))});let r=f(`span`,n);p(n,r);let c=o(`rue:slot:anchor`);p(r,c),m(()=>{let e=i.label;h(()=>_(e,r,c))});let u=o(`rue:slot:anchor`);return p(n,u),m(()=>{let e=V.get()?g(()=>{let e=s(),n=f(`span`,e);return p(e,n),a(n,`text-error`),t(n,`aria-hidden`,`true`),p(n,l(`*`)),e}):``;h(()=>_(e,n,u))}),e});h(()=>_(e,n,u))});let d=o(`rue:component:anchor`);p(n,d),m(()=>{let e=v(P,{...L,id:R.get(),"aria-describedby":B.get(),className:i.controlClassName,children:i.children});h(()=>_(e,n,d))});let y=o(`rue:slot:anchor`);p(n,y),m(()=>{let e=i.hint==null?``:g(()=>{let e=s(),n=o(`rue:component:anchor`);p(e,n);let l=g(()=>{let e=s(),n=o(`rue:slot:anchor`);return p(e,n),m(()=>{let l=Array.isArray(i.hint)?g(()=>{let e=s(),n=o(`rue:list:start`),l=o(`rue:list:end`);p(e,n),p(e,l);let u=new Map;return m(()=>{u=b({items:i.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:l,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):i.hint;h(()=>_(l,e,n))}),e});return m(()=>{let t=v(F,{id:z.get(),as:i.hintAs===void 0?`p`:i.hintAs,className:i.hintClassName,hideUntilInvalid:i.hideHintWhenValid,children:l});h(()=>_(t,e,n))}),e});h(()=>_(e,n,y))}),p(n,l(` `));let x=o(`rue:slot:anchor`);return p(n,x),m(()=>{let e=i.extra==null?``:g(()=>{let e=s(),n=f(`p`,e);p(e,n),m(()=>{a(n,O(`label text-xs opacity-70`,i.extraClassName))});let l=o(`rue:slot:anchor`);return p(n,l),m(()=>{let e=Array.isArray(i.extra)?g(()=>{let e=s(),n=o(`rue:list:start`),l=o(`rue:list:end`);p(e,n),p(e,l);let u=new Map;return m(()=>{u=b({items:i.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:l,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):i.extra;h(()=>_(e,n,l))}),e});h(()=>_(e,n,x))}),n}):g(e=>{let n=f(`fieldset`,e);m(()=>{a(n,H.get())});let u=o(`rue:slot:anchor`);p(n,u),m(()=>{let e=i.label==null?``:g(()=>{let e=s(),n=f(`label`,e);p(e,n),m(()=>{a(n,O(`label`,i.labelClassName))}),m(()=>{t(n,`for`,String(R.get()))});let r=f(`span`,n);p(n,r);let c=o(`rue:slot:anchor`);p(r,c),m(()=>{let e=i.label;h(()=>_(e,r,c))});let u=o(`rue:slot:anchor`);return p(n,u),m(()=>{let e=V.get()?g(()=>{let e=s(),n=f(`span`,e);return p(e,n),a(n,`text-error`),t(n,`aria-hidden`,`true`),p(n,l(`*`)),e}):``;h(()=>_(e,n,u))}),e});h(()=>_(e,n,u))});let d=o(`rue:component:anchor`);p(n,d),m(()=>{let e=v(P,{...L,id:R.get(),"aria-describedby":B.get(),className:i.controlClassName,children:i.children});h(()=>_(e,n,d))});let y=o(`rue:slot:anchor`);p(n,y),m(()=>{let e=i.hint==null?``:g(()=>{let e=s(),n=o(`rue:component:anchor`);p(e,n);let l=g(()=>{let e=s(),n=o(`rue:slot:anchor`);return p(e,n),m(()=>{let l=Array.isArray(i.hint)?g(()=>{let e=s(),n=o(`rue:list:start`),l=o(`rue:list:end`);p(e,n),p(e,l);let u=new Map;return m(()=>{u=b({items:i.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:l,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):i.hint;h(()=>_(l,e,n))}),e});return m(()=>{let t=v(F,{id:z.get(),as:i.hintAs===void 0?`p`:i.hintAs,className:i.hintClassName,hideUntilInvalid:i.hideHintWhenValid,children:l});h(()=>_(t,e,n))}),e});h(()=>_(e,n,y))}),p(n,l(` `));let x=o(`rue:slot:anchor`);return p(n,x),m(()=>{let e=i.extra==null?``:g(()=>{let e=s(),n=f(`p`,e);p(e,n),m(()=>{a(n,O(`label text-xs opacity-70`,i.extraClassName))});let l=o(`rue:slot:anchor`);return p(n,l),m(()=>{let e=Array.isArray(i.extra)?g(()=>{let e=s(),n=o(`rue:list:start`),l=o(`rue:list:end`);p(e,n),p(e,l);let u=new Map;return m(()=>{u=b({items:i.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:u,parent:n.parentNode,before:l,singleRoot:!0,start:n,renderItem:(e,n,i,o,l)=>{_(g(()=>{let n=s(),i=f(`span`,n);p(n,i),m(()=>{t(i,`key`,String(`validator-line-${l}`))}),a(i,`block`);let o=c(i);return p(i,o),m(()=>{r(o,e)}),n}),n,i)}})}),e}):i.extra;h(()=>_(e,n,l))}),e});h(()=>_(e,n,x))}),n})}}),R=e=>g(t=>{let n=f(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=f(`div`,n);p(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=f(`div`,r);p(r,i);let c=f(`h2`,i);p(i,c),a(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),p(c,l(`# `));let u=o(`rue:slot:anchor`);p(c,u),m(()=>{let t=e.title;h(()=>_(t,c,u))});let d=o(`rue:slot:anchor`);p(i,d),m(()=>{let t=e.summary?g(()=>{let t=s(),n=f(`p`,t);p(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return p(n,r),m(()=>{let t=e.summary;h(()=>_(t,n,r))}),t}):``;h(()=>_(t,i,d))});let y=o(`rue:component:anchor`);p(n,y),m(()=>{let t=v(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>_(t,n,y))});let b=o(`rue:slot:anchor`);return p(n,b),m(()=>{let t=e.tab.value===`preview`?e.preview():g(()=>{let t=s(),n=o(`rue:component:anchor`);return p(t,n),m(()=>{let r=v(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>_(r,t,n))}),t});h(()=>_(t,n,b))}),n}),z=e=>g(n=>{let r=f(`div`,n);a(r,`not-prose my-6 lg:my-8`);let i=f(`h3`,r);p(r,i),a(i,`mt-0 mb-3 text-base font-semibold text-base-content`);let c=o(`rue:slot:anchor`);p(i,c),m(()=>{let t=e.title;h(()=>_(t,i,c))});let u=f(`div`,r);p(r,u),a(u,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=f(`table`,u);p(u,d),a(d,`table table-zebra`);let v=f(`thead`,d);p(d,v);let y=f(`tr`,v);p(v,y);let x=f(`th`,y);p(y,x),p(x,l(`属性`));let S=f(`th`,y);p(y,S),p(S,l(`说明`));let C=f(`th`,y);p(y,C),p(C,l(`类型`));let w=f(`th`,y);p(y,w),p(w,l(`默认值`));let T=f(`tbody`,d);p(d,T);let E=o(`rue:list:start`),D=o(`rue:list:end`);p(T,E),p(T,D);let O=new Map;return m(()=>{O=b({items:e.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(e,n,r,i,a)=>{_(g(()=>{let n=s(),r=f(`tr`,n);p(n,r),m(()=>{t(r,`key`,String(e.prop))});let i=f(`td`,r);p(r,i);let a=f(`code`,i);p(i,a);let c=o(`rue:slot:anchor`);p(a,c),m(()=>{let t=e.prop;h(()=>_(t,a,c))});let l=f(`td`,r);p(r,l);let u=o(`rue:slot:anchor`);p(l,u),m(()=>{let t=e.description;h(()=>_(t,l,u))});let d=f(`td`,r);p(r,d);let g=f(`code`,d);p(d,g);let v=o(`rue:slot:anchor`);p(g,v),m(()=>{let t=e.type;h(()=>_(t,g,v))});let y=f(`td`,r);p(r,y);let b=f(`code`,y);p(y,b);let x=o(`rue:slot:anchor`);return p(b,x),m(()=>{let t=e.defaultValue;h(()=>_(t,b,x))}),n}),n,r)}})}),r}),B=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,t.checkValidity()?`false`:`true`)},V=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,`true`)},H=e=>{e.preventDefault()},U=()=>g(e=>{let t=f(`form`,e);a(t,`grid gap-2`),u(t,`submit`,H);let n=o(`rue:component:anchor`);p(t,n),_(v(L,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),t,n);let r=o(`rue:component:anchor`);p(t,r),m(()=>{let e=v(L.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});h(()=>_(e,t,r))});let i=o(`rue:component:anchor`);return p(t,i),_(v(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),t,i),t}),ee=()=>g(e=>{let t=f(`form`,e);a(t,`grid gap-2`),u(t,`submit`,H);let n=o(`rue:component:anchor`);p(t,n),_(v(L,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),t,n);let r=o(`rue:component:anchor`);p(t,r),m(()=>{let e=v(L.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});h(()=>_(e,t,r))});let i=o(`rue:component:anchor`);return p(t,i),_(v(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),t,i),t}),te=[{prop:`appearance`,description:`自动补充 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，基础写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],W=()=>{let{tabBasic:t,tabHosts:n,tabRules:r,tabStatus:i,tabField:c,tabForm:u}=y(`useSetup:0:0`,()=>e(()=>({tabBasic:y(`ref:1:0`,()=>d(`preview`)),tabHosts:y(`ref:1:1`,()=>d(`preview`)),tabRules:y(`ref:1:2`,()=>d(`preview`)),tabStatus:y(`ref:1:3`,()=>d(`preview`)),tabField:y(`ref:1:4`,()=>d(`preview`)),tabForm:y(`ref:1:5`,()=>d(`preview`))})));return g(e=>{let d=s(),y=o(`rue:component:anchor`);return p(d,y),_(v(E,{children:g(()=>{let e=s(),d=f(`div`,e);p(e,d),a(d,`max-w-none prose prose-sm md:prose-base`);let g=f(`h1`,d);p(d,g),p(g,l(`Validator 校验辅助`));let y=f(`p`,d);p(d,y),a(y,`text-sm mt-3 mb-3`),p(y,l(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。基础的`));let b=f(`code`,y);p(y,b),p(b,l(`className="input validator"`)),p(y,l(`写法继续可用，但现在也可以直接通过`));let x=f(`code`,y);p(y,x),p(x,l(`appearance`)),p(y,l(`、`));let T=f(`code`,y);p(y,T),p(T,l(`size`)),p(y,l(`、`));let E=f(`code`,y);p(y,E),p(E,l(`status`)),p(y,l(`和`));let D=f(`code`,y);p(y,D),p(D,l(`Field`)),p(y,l(`组合件来组织更完整的表单场景。`));let O=f(`div`,d);p(d,O),a(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=f(`div`,O);p(O,k);let A=f(`div`,k);p(k,A),a(A,`font-medium text-base-content`),p(A,l(`原生校验优先`));let j=f(`div`,k);p(k,j),a(j,`mt-1 opacity-70`),p(j,l(`继续依赖 required、pattern、minLength 等原生约束。`));let M=f(`div`,O);p(O,M);let N=f(`div`,M);p(M,N),a(N,`font-medium text-base-content`),p(N,l(`语义外观补充`));let P=f(`div`,M);p(M,P),a(P,`mt-1 opacity-70`),p(P,l(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let F=f(`div`,O);p(O,F);let I=f(`div`,F);p(F,I),a(I,`font-medium text-base-content`),p(I,l(`表单结构复用`));let B=f(`div`,F);p(F,B),a(B,`mt-1 opacity-70`),p(B,l(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=o(`rue:component:anchor`);p(d,V),m(()=>{let e=v(R,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:t,preview:()=>S(`form`,{className:`grid w-full max-w-xs gap-2`,children:[C(L,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),C(L.Hint,{children:`Enter valid email address`}),C(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});h(()=>_(e,d,V))});let H=o(`rue:component:anchor`);p(d,H),m(()=>{let e=v(R,{title:`Different validator hosts`,summary:`展示基础 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:n,preview:()=>S(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[S(`div`,{className:`grid gap-2`,children:[S(L,{as:`select`,appearance:`select`,required:!0,children:[C(`option`,{value:``,children:`Choose:`}),C(`option`,{value:`tabs`,children:`Tabs`}),C(`option`,{value:`spaces`,children:`Spaces`})]}),C(L.Hint,{children:`Required`})]}),S(`div`,{className:`grid gap-2`,children:[C(L,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),C(L.Hint,{children:`Required`})]}),S(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[C(L,{appearance:`checkbox`,type:`checkbox`,required:!0}),C(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),S(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[C(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),C(L,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});h(()=>_(e,d,H))});let W=o(`rue:component:anchor`);p(d,W),m(()=>{let e=v(R,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:r,preview:()=>S(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[C(U,{}),C(ee,{})]}),code:`const syncNativeValidity = (event: Event) => {
  const field = event.currentTarget as HTMLInputElement | null
  if (!field) return
  field.setAttribute('aria-invalid', field.checkValidity() ? 'false' : 'true')
}

const syncNativeInvalid = (event: Event) => {
  const field = event.currentTarget as HTMLInputElement | null
  if (!field) return
  field.setAttribute('aria-invalid', 'true')
}

<form className="grid gap-2" onSubmit={event => event.preventDefault()}>
  <Validator
    appearance="input"
    type="password"
    required={true}
    minLength={8}
    pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}"
    title="Must include number, lowercase and uppercase letters"
    placeholder="Password"
    aria-invalid="false"
    onInvalid={syncNativeInvalid}
    onInput={syncNativeValidity}
    onBlur={syncNativeValidity}
  />
  <Validator.Hint
    hideUntilInvalid={true}
    lines={['Must be at least 8 characters', 'Must include number, lowercase and uppercase letters']}
  />
  <Button htmlType="submit" size="sm" className="w-fit">
    Check password
  </Button>
</form>

<form className="grid gap-2" onSubmit={event => event.preventDefault()}>
  <Validator
    appearance="input"
    type="text"
    required={true}
    minLength={3}
    maxLength={30}
    pattern="[A-Za-z0-9-]+"
    title="Only letters, numbers or dash"
    placeholder="Username"
    aria-invalid="false"
    onInvalid={syncNativeInvalid}
    onInput={syncNativeValidity}
    onBlur={syncNativeValidity}
  />
  <Validator.Hint
    hideUntilInvalid={true}
    lines={['Must be 3 to 30 characters', 'Only letters, numbers or dash']}
  />
  <Button htmlType="submit" size="sm" className="w-fit">
    Check username
  </Button>
</form>`});h(()=>_(e,d,W))});let G=o(`rue:component:anchor`);p(d,G),m(()=>{let e=v(R,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:i,preview:()=>S(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[C(L.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),C(L.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),S(L.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[C(`option`,{children:`Stable`}),C(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
  id="validator-status-error"
  label="Workspace slug"
  hint="Already taken on the edge cluster"
  appearance="input"
  size="sm"
  status="error"
  defaultValue="rue-design"
/>

<Validator.Field
  id="validator-status-warning"
  label="Notification email"
  hint="MX record is still being verified"
  appearance="input"
  status="warning"
  defaultValue="team@rue.dev"
/>

<Validator.Field
  id="validator-status-success"
  label="Release channel"
  hint="Synced with the latest deployment policy"
  appearance="select"
  as="select"
  size="lg"
  status="success"
>
  <option>Stable</option>
  <option>Canary</option>
</Validator.Field>`});h(()=>_(e,d,G))});let K=o(`rue:component:anchor`);p(d,K),m(()=>{let e=v(R,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:c,preview:()=>S(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[C(L.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),S(L.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[C(`option`,{value:``,children:`Choose:`}),C(`option`,{value:`utc+8`,children:`UTC +8`}),C(`option`,{value:`utc`,children:`UTC`})]}),C(L.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
  id="validator-field-email"
  label="Project email"
  hint="Use your workspace mailbox"
  extra="This address is used for deployment notifications."
  appearance="input"
  type="email"
  required={true}
  placeholder="release@rue.dev"
  hideHintWhenValid={true}
/>

<Validator.Field
  id="validator-field-timezone"
  label="Timezone"
  hint="Required"
  appearance="select"
  as="select"
  required={true}
>
  <option value="">Choose:</option>
  <option value="utc+8">UTC +8</option>
  <option value="utc">UTC</option>
</Validator.Field>

<Validator.Field
  id="validator-field-bio"
  label="Deployment note"
  hint={['Keep it under 140 characters', 'Mention rollback owner if needed']}
  appearance="textarea"
  as="textarea"
  rows={4}
  placeholder="What changed in this release?"
  fieldAs="div"
  className="rounded-box border border-base-300 bg-base-100 p-4"
  controlClassName="w-full"
/>
`});h(()=>_(e,d,K))});let q=o(`rue:component:anchor`);p(d,q),m(()=>{let e=v(R,{title:`Form recipe`,summary:`把基础散装示例 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:u,preview:()=>S(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[C(L.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),C(L.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),S(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[C(w,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),C(w,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
  <Validator.Field
    id="validator-login-email"
    label="Email"
    hint="Required"
    appearance="input"
    type="email"
    required={true}
    placeholder="mail@site.com"
    hideHintWhenValid={true}
  />

  <Validator.Field
    id="validator-login-password"
    label="Password"
    hint={['At least 8 characters', 'Contains uppercase, lowercase and a number']}
    appearance="input"
    type="password"
    required={true}
    minLength={8}
    pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
    placeholder="Password"
    hideHintWhenValid={true}
  />

  <div className="grid gap-2 sm:grid-cols-2">
    <Button color="primary" htmlType="submit" block={true}>Login</Button>
    <Button type="text" htmlType="reset" block={true}>Reset</Button>
  </div>
</form>`});h(()=>_(e,d,q))});let J=f(`div`,d);p(d,J),a(J,`my-8 lg:my-12`);let Y=f(`h2`,J);p(J,Y),p(Y,l(`API`));let X=f(`p`,J);p(J,X),a(X,`text-sm opacity-80`),p(X,l(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=o(`rue:component:anchor`);p(J,Z),m(()=>{let e=v(z,{title:`Validator`,rows:te});h(()=>_(e,J,Z))});let Q=o(`rue:component:anchor`);p(J,Q),m(()=>{let e=v(z,{title:`Validator.Hint`,rows:ne});h(()=>_(e,J,Q))});let $=o(`rue:component:anchor`);return p(J,$),m(()=>{let e=v(z,{title:`Validator.Field`,rows:re});h(()=>_(e,J,$))}),e})}),d,y),d})};export{W as default};