import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,gt as u,l as d,mt as f,pt as p,q as m,qt as h,s as g,st as _,t as v}from"./vapor-runtime-iQZthBPQ.js";import{a as y,n as b}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as x,i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./Code-CZqShVUj.js";import{t as w}from"./button-CyhsFe_V.js";import{t as T}from"./tabs-BBuGEPV7.js";import{r as E}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var D=[`input`,`select`,`textarea`,`checkbox`,`toggle`],O=(...e)=>e.filter(Boolean).join(` `),k=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),A=e=>{let t=k(e);return D.find(e=>t.has(e))},j=(e,t,n)=>{if(t)return t;let r=A(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},M=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),N=(e,t,n,r)=>{let i=k(r);return O(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},P=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:p,__rue_rest_omit_5:m,rest:v,resolvedAppearance:b,resolvedHost:x,cls:S}=y(`useSetup:0:0`,()=>h(()=>{let{as:t,appearance:n,size:r,status:i,className:a,children:o,...s}=e,c=y(`computed:1:0`,()=>u(()=>j(e.as,e.appearance,e.className))),l=c;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedAppearance:c,resolvedHost:y(`computed:1:1`,()=>u(()=>M(e.as,l.get()))),cls:y(`computed:1:2`,()=>u(()=>N(l.get(),e.size,e.status,e.className)))}}));return x.get()===`select`?d(r=>{let s=i(`select`,r);o(()=>{f(s,v)}),o(()=>{_(s,S.get())});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}):x.get()===`textarea`?d(r=>{let s=i(`textarea`,r);o(()=>{f(s,v)}),o(()=>{_(s,S.get())});let c=a(`rue:children:anchor`);return n(s,c),o(()=>{let n=e.children;t(()=>g(n,s,c))}),s}):d(e=>{let t=i(`input`,e);return o(()=>{f(t,v)}),o(()=>{_(t,S.get())}),t})},F=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:m,__rue_rest_omit_2:v,__rue_rest_omit_3:x,__rue_rest_omit_4:S,rest:C,cls:w,hasLines:T}=y(`useSetup:0:0:dup1`,()=>h(()=>{let{as:t,className:n,children:r,hideUntilInvalid:i,lines:a,...o}=e;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,cls:y(`computed:1:3`,()=>u(()=>O(`validator-hint`,e.hideUntilInvalid?`hidden`:void 0,e.className))),hasLines:!!e.lines?.length}}));return(e.as===void 0?`p`:e.as)===`div`?d(r=>{let u=i(`div`,r);o(()=>{f(u,C)}),o(()=>{_(u,w.get())});let m=a(`rue:slot:anchor`);return n(u,m),o(()=>{let r=T?d(()=>{let t=s(),r=a(`rue:list:start`),u=a(`rue:list:end`);n(t,r),n(t,u);let f=new Map;return o(()=>{f=b({items:(e.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:r.parentNode,before:u,singleRoot:!0,start:r,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),t}):e.children;t(()=>g(r,u,m))}),u}):(e.as===void 0?`p`:e.as)===`span`?d(r=>{let u=i(`span`,r);o(()=>{f(u,C)}),o(()=>{_(u,w.get())});let m=a(`rue:slot:anchor`);return n(u,m),o(()=>{let r=T?d(()=>{let t=s(),r=a(`rue:list:start`),u=a(`rue:list:end`);n(t,r),n(t,u);let f=new Map;return o(()=>{f=b({items:(e.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:r.parentNode,before:u,singleRoot:!0,start:r,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),t}):e.children;t(()=>g(r,u,m))}),u}):d(r=>{let u=i(`p`,r);o(()=>{f(u,C)}),o(()=>{_(u,w.get())});let m=a(`rue:slot:anchor`);return n(u,m),o(()=>{let r=T?d(()=>{let t=s(),r=a(`rue:list:start`),u=a(`rue:list:end`);n(t,r),n(t,u);let f=new Map;return o(()=>{f=b({items:(e.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:r.parentNode,before:u,singleRoot:!0,start:r,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),t}):e.children;t(()=>g(r,u,m))}),u})},I=(e,t)=>O(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),L=Object.assign(P,{Hint:F,Field:r=>{let{__rue_rest_omit_0:f,__rue_rest_omit_1:m,__rue_rest_omit_2:x,__rue_rest_omit_3:S,__rue_rest_omit_4:C,__rue_rest_omit_5:w,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:D,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,rest:L,controlId:R,generatedHintId:z,describedBy:B,showRequiredMark:V,fieldCls:H}=y(`useSetup:0:0:dup2`,()=>h(()=>{let{fieldAs:e,className:t,controlClassName:n,label:i,labelClassName:a,hint:o,hintAs:s,hintClassName:c,hideHintWhenValid:l,extra:d,extraClassName:f,requiredMark:p,id:m,children:h,...g}=r,_=y(`computed:1:4`,()=>u(()=>typeof r.id==`string`&&r.id.trim()?r.id:void 0)),v=_,b=y(`computed:1:5`,()=>u(()=>v.get()&&r.hint!=null&&g[`aria-describedby`]==null?`${v.get()}-hint`:void 0)),x=b;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,rest:g,controlId:_,generatedHintId:b,describedBy:y(`computed:1:6`,()=>u(()=>g[`aria-describedby`]??x.get())),showRequiredMark:y(`computed:1:7`,()=>u(()=>r.requiredMark??g.required===!0)),fieldCls:y(`computed:1:8`,()=>u(()=>I(r.fieldAs===void 0?`fieldset`:r.fieldAs,r.className)))}}));return(r.fieldAs===void 0?`fieldset`:r.fieldAs)===`div`?d(u=>{let f=i(`div`,u);o(()=>{_(f,H.get())});let m=a(`rue:slot:anchor`);n(f,m),o(()=>{let l=r.label==null?``:d(()=>{let l=s(),u=i(`label`,l);n(l,u),o(()=>{_(u,O(`label`,r.labelClassName))}),o(()=>{c(u,`for`,String(R.get()))});let f=i(`span`,u);n(u,f);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=r.label;t(()=>g(e,f,p))});let m=a(`rue:slot:anchor`);return n(u,m),o(()=>{let r=V.get()?d(()=>{let t=s(),r=i(`span`,t);return n(t,r),_(r,`text-error`),c(r,`aria-hidden`,`true`),n(r,e(`*`)),t}):``;t(()=>g(r,u,m))}),l});t(()=>g(l,f,m))});let h=a(`rue:component:anchor`);n(f,h),o(()=>{let e=v(P,{...L,id:R.get(),"aria-describedby":B.get(),className:r.controlClassName,children:r.children});t(()=>g(e,f,h))});let y=a(`rue:slot:anchor`);n(f,y),o(()=>{let e=r.hint==null?``:d(()=>{let e=s(),u=a(`rue:component:anchor`);n(e,u);let f=d(()=>{let e=s(),u=a(`rue:slot:anchor`);return n(e,u),o(()=>{let f=Array.isArray(r.hint)?d(()=>{let e=s(),t=a(`rue:list:start`),u=a(`rue:list:end`);n(e,t),n(e,u);let f=new Map;return o(()=>{f=b({items:r.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:t.parentNode,before:u,singleRoot:!0,start:t,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),e}):r.hint;t(()=>g(f,e,u))}),e});return o(()=>{let n=v(F,{id:z.get(),as:r.hintAs===void 0?`p`:r.hintAs,className:r.hintClassName,hideUntilInvalid:r.hideHintWhenValid,children:f});t(()=>g(n,e,u))}),e});t(()=>g(e,f,y))}),n(f,e(` `));let x=a(`rue:slot:anchor`);return n(f,x),o(()=>{let e=r.extra==null?``:d(()=>{let e=s(),u=i(`p`,e);n(e,u),o(()=>{_(u,O(`label text-xs opacity-70`,r.extraClassName))});let f=a(`rue:slot:anchor`);return n(u,f),o(()=>{let e=Array.isArray(r.extra)?d(()=>{let e=s(),t=a(`rue:list:start`),u=a(`rue:list:end`);n(e,t),n(e,u);let f=new Map;return o(()=>{f=b({items:r.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:t.parentNode,before:u,singleRoot:!0,start:t,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),e}):r.extra;t(()=>g(e,u,f))}),e});t(()=>g(e,f,x))}),f}):d(u=>{let f=i(`fieldset`,u);o(()=>{_(f,H.get())});let m=a(`rue:slot:anchor`);n(f,m),o(()=>{let l=r.label==null?``:d(()=>{let l=s(),u=i(`label`,l);n(l,u),o(()=>{_(u,O(`label`,r.labelClassName))}),o(()=>{c(u,`for`,String(R.get()))});let f=i(`span`,u);n(u,f);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=r.label;t(()=>g(e,f,p))});let m=a(`rue:slot:anchor`);return n(u,m),o(()=>{let r=V.get()?d(()=>{let t=s(),r=i(`span`,t);return n(t,r),_(r,`text-error`),c(r,`aria-hidden`,`true`),n(r,e(`*`)),t}):``;t(()=>g(r,u,m))}),l});t(()=>g(l,f,m))});let h=a(`rue:component:anchor`);n(f,h),o(()=>{let e=v(P,{...L,id:R.get(),"aria-describedby":B.get(),className:r.controlClassName,children:r.children});t(()=>g(e,f,h))});let y=a(`rue:slot:anchor`);n(f,y),o(()=>{let e=r.hint==null?``:d(()=>{let e=s(),u=a(`rue:component:anchor`);n(e,u);let f=d(()=>{let e=s(),u=a(`rue:slot:anchor`);return n(e,u),o(()=>{let f=Array.isArray(r.hint)?d(()=>{let e=s(),t=a(`rue:list:start`),u=a(`rue:list:end`);n(e,t),n(e,u);let f=new Map;return o(()=>{f=b({items:r.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:t.parentNode,before:u,singleRoot:!0,start:t,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),e}):r.hint;t(()=>g(f,e,u))}),e});return o(()=>{let n=v(F,{id:z.get(),as:r.hintAs===void 0?`p`:r.hintAs,className:r.hintClassName,hideUntilInvalid:r.hideHintWhenValid,children:f});t(()=>g(n,e,u))}),e});t(()=>g(e,f,y))}),n(f,e(` `));let x=a(`rue:slot:anchor`);return n(f,x),o(()=>{let e=r.extra==null?``:d(()=>{let e=s(),u=i(`p`,e);n(e,u),o(()=>{_(u,O(`label text-xs opacity-70`,r.extraClassName))});let f=a(`rue:slot:anchor`);return n(u,f),o(()=>{let e=Array.isArray(r.extra)?d(()=>{let e=s(),t=a(`rue:list:start`),u=a(`rue:list:end`);n(e,t),n(e,u);let f=new Map;return o(()=>{f=b({items:r.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:f,parent:t.parentNode,before:u,singleRoot:!0,start:t,renderItem:(e,t,r,a,u)=>{g(d(()=>{let t=s(),r=i(`span`,t);n(t,r),o(()=>{c(r,`key`,String(`validator-line-${u}`))}),_(r,`block`);let a=l(r);return n(r,a),o(()=>{p(a,e)}),t}),t,r)}})}),e}):r.extra;t(()=>g(e,u,f))}),e});t(()=>g(e,f,x))}),f})}}),R=r=>d(c=>{let l=i(`div`,c);_(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),_(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let p=i(`h2`,f);n(f,p),_(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(p,e(`# `));let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let e=r.title;t(()=>g(e,p,m))});let h=a(`rue:slot:anchor`);n(f,h),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),_(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>g(e,c,l))}),e}):``;t(()=>g(e,f,h))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=v(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>g(e,l,y))});let b=a(`rue:slot:anchor`);return n(l,b),o(()=>{let e=r.tab.value===`preview`?r.preview():d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=v(C,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>g(n,e,i))}),e});t(()=>g(e,l,b))}),l}),z=r=>d(l=>{let u=i(`div`,l);_(u,`not-prose my-6 lg:my-8`);let f=i(`h3`,u);n(u,f),_(f,`mt-0 mb-3 text-base font-semibold text-base-content`);let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=r.title;t(()=>g(e,f,p))});let m=i(`div`,u);n(u,m),_(m,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let h=i(`table`,m);n(m,h),_(h,`table table-zebra`);let v=i(`thead`,h);n(h,v);let y=i(`tr`,v);n(v,y);let x=i(`th`,y);n(y,x),n(x,e(`属性`));let S=i(`th`,y);n(y,S),n(S,e(`说明`));let C=i(`th`,y);n(y,C),n(C,e(`类型`));let w=i(`th`,y);n(y,w),n(w,e(`默认值`));let T=i(`tbody`,h);n(h,T);let E=a(`rue:list:start`),D=a(`rue:list:end`);n(T,E),n(T,D);let O=new Map;return o(()=>{O=b({items:r.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(e,r,l,u,f)=>{g(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>g(n,d,f))});let p=i(`td`,l);n(l,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>g(n,p,m))});let h=i(`td`,l);n(l,h);let _=i(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>g(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>g(n,b,x))}),r}),r,l)}})}),u}),B=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,t.checkValidity()?`false`:`true`)},V=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,`true`)},H=e=>{e.preventDefault()},U=()=>d(e=>{let r=i(`form`,e);_(r,`grid gap-2`),m(r,`submit`,H);let s=a(`rue:component:anchor`);n(r,s),g(v(L,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),r,s);let c=a(`rue:component:anchor`);n(r,c),o(()=>{let e=v(L.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});t(()=>g(e,r,c))});let l=a(`rue:component:anchor`);return n(r,l),g(v(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),r,l),r}),ee=()=>d(e=>{let r=i(`form`,e);_(r,`grid gap-2`),m(r,`submit`,H);let s=a(`rue:component:anchor`);n(r,s),g(v(L,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),r,s);let c=a(`rue:component:anchor`);n(r,c),o(()=>{let e=v(L.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});t(()=>g(e,r,c))});let l=a(`rue:component:anchor`);return n(r,l),g(v(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),r,l),r}),te=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],W=()=>{let{tabBasic:c,tabHosts:l,tabRules:u,tabStatus:f,tabField:p,tabForm:m}=y(`useSetup:0:0`,()=>h(()=>({tabBasic:y(`ref:1:0`,()=>r(`preview`)),tabHosts:y(`ref:1:1`,()=>r(`preview`)),tabRules:y(`ref:1:2`,()=>r(`preview`)),tabStatus:y(`ref:1:3`,()=>r(`preview`)),tabField:y(`ref:1:4`,()=>r(`preview`)),tabForm:y(`ref:1:5`,()=>r(`preview`))})));return d(r=>{let h=s(),y=a(`rue:component:anchor`);return n(h,y),g(v(E,{children:d(()=>{let r=s(),d=i(`div`,r);n(r,d),_(d,`max-w-none prose prose-sm md:prose-base`);let h=i(`h1`,d);n(d,h),n(h,e(`Validator 校验辅助`));let y=i(`p`,d);n(d,y),_(y,`text-sm mt-3 mb-3`),n(y,e(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let b=i(`code`,y);n(y,b),n(b,e(`className="input validator"`)),n(y,e(`写法继续可用，但现在也可以直接通过`));let C=i(`code`,y);n(y,C),n(C,e(`appearance`)),n(y,e(`、`));let T=i(`code`,y);n(y,T),n(T,e(`size`)),n(y,e(`、`));let E=i(`code`,y);n(y,E),n(E,e(`status`)),n(y,e(`和`));let D=i(`code`,y);n(y,D),n(D,e(`Field`)),n(y,e(`组合件来组织更完整的表单场景。`));let O=i(`div`,d);n(d,O),_(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=i(`div`,O);n(O,k);let A=i(`div`,k);n(k,A),_(A,`font-medium text-base-content`),n(A,e(`原生校验优先`));let j=i(`div`,k);n(k,j),_(j,`mt-1 opacity-70`),n(j,e(`继续依赖 required、pattern、minLength 等原生约束。`));let M=i(`div`,O);n(O,M);let N=i(`div`,M);n(M,N),_(N,`font-medium text-base-content`),n(N,e(`语义外观补齐`));let P=i(`div`,M);n(M,P),_(P,`mt-1 opacity-70`),n(P,e(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let F=i(`div`,O);n(O,F);let I=i(`div`,F);n(F,I),_(I,`font-medium text-base-content`),n(I,e(`表单结构复用`));let B=i(`div`,F);n(F,B),_(B,`mt-1 opacity-70`),n(B,e(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=a(`rue:component:anchor`);n(d,V),o(()=>{let e=v(R,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:c,preview:()=>x(`form`,{className:`grid w-full max-w-xs gap-2`,children:[S(L,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),S(L.Hint,{children:`Enter valid email address`}),S(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});t(()=>g(e,d,V))});let H=a(`rue:component:anchor`);n(d,H),o(()=>{let e=v(R,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:l,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[x(`div`,{className:`grid gap-2`,children:[x(L,{as:`select`,appearance:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`tabs`,children:`Tabs`}),S(`option`,{value:`spaces`,children:`Spaces`})]}),S(L.Hint,{children:`Required`})]}),x(`div`,{className:`grid gap-2`,children:[S(L,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),S(L.Hint,{children:`Required`})]}),x(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(L,{appearance:`checkbox`,type:`checkbox`,required:!0}),S(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),x(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),S(L,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});t(()=>g(e,d,H))});let W=a(`rue:component:anchor`);n(d,W),o(()=>{let e=v(R,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:u,preview:()=>x(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[S(U,{}),S(ee,{})]}),code:`const syncNativeValidity = (event: Event) => {
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
</form>`});t(()=>g(e,d,W))});let G=a(`rue:component:anchor`);n(d,G),o(()=>{let e=v(R,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:f,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[S(L.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),S(L.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),x(L.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[S(`option`,{children:`Stable`}),S(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});t(()=>g(e,d,G))});let K=a(`rue:component:anchor`);n(d,K),o(()=>{let e=v(R,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:p,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[S(L.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),x(L.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`utc+8`,children:`UTC +8`}),S(`option`,{value:`utc`,children:`UTC`})]}),S(L.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});t(()=>g(e,d,K))});let q=a(`rue:component:anchor`);n(d,q),o(()=>{let e=v(R,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:m,preview:()=>x(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[S(L.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),S(L.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),x(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[S(w,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),S(w,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});t(()=>g(e,d,q))});let J=i(`div`,d);n(d,J),_(J,`my-8 lg:my-12`);let Y=i(`h2`,J);n(J,Y),n(Y,e(`API`));let X=i(`p`,J);n(J,X),_(X,`text-sm opacity-80`),n(X,e(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=a(`rue:component:anchor`);n(J,Z),o(()=>{let e=v(z,{title:`Validator`,rows:te});t(()=>g(e,J,Z))});let Q=a(`rue:component:anchor`);n(J,Q),o(()=>{let e=v(z,{title:`Validator.Hint`,rows:ne});t(()=>g(e,J,Q))});let $=a(`rue:component:anchor`);return n(J,$),o(()=>{let e=v(z,{title:`Validator.Field`,rows:re});t(()=>g(e,J,$))}),r})}),h,y),h})};export{W as default};