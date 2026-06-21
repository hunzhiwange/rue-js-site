import{$t as e,Jt as t,Q as n,St as r,Z as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,yt as _,zt as v}from"./vapor-runtime-DsQWl-IB.js";import{a as y,n as b}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as x,i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./Code-4SUSUwRg.js";import{t as w}from"./button-COZLI6MM.js";import{t as T}from"./tabs-Duzh3URW.js";import{r as E}from"./SidebarPlaygroundDesign-EU389JDE.js";var D=[`input`,`select`,`textarea`,`checkbox`,`toggle`],O=(...e)=>e.filter(Boolean).join(` `),k=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),A=e=>{let t=k(e);return D.find(e=>t.has(e))},j=(e,t,n)=>{if(t)return t;let r=A(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},M=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),N=(e,t,n,r)=>{let i=k(r);return O(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},P=t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:u,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:h,rest:g,resolvedAppearance:b,resolvedHost:x,cls:S}=y(`useSetup:0:0`,()=>s(()=>{let{as:e,appearance:n,size:i,status:a,className:o,children:s,...c}=t,l=y(`computed:1:0`,()=>r(()=>j(t.as,t.appearance,t.className))),u=l;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,rest:c,resolvedAppearance:l,resolvedHost:y(`computed:1:1`,()=>r(()=>M(t.as,u.get()))),cls:y(`computed:1:2`,()=>r(()=>N(u.get(),t.size,t.status,t.className)))}}));return x.get()===`select`?l(r=>{let i=d(`select`,r);v(()=>{_(i,g)}),v(()=>{a(i,S.get())});let s=o(`rue:children:anchor`);return n(i,s),v(()=>{let n=t.children;e(()=>f(n,i,s))}),i}):x.get()===`textarea`?l(r=>{let i=d(`textarea`,r);v(()=>{_(i,g)}),v(()=>{a(i,S.get())});let s=o(`rue:children:anchor`);return n(i,s),v(()=>{let n=t.children;e(()=>f(n,i,s))}),i}):l(e=>{let t=d(`input`,e);return v(()=>{_(t,g)}),v(()=>{a(t,S.get())}),t})},F=t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:p,__rue_rest_omit_2:m,__rue_rest_omit_3:x,__rue_rest_omit_4:S,rest:C,cls:w,hasLines:T}=y(`useSetup:0:0:dup1`,()=>s(()=>{let{as:e,className:n,children:i,hideUntilInvalid:a,lines:o,...s}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,rest:s,cls:y(`computed:1:3`,()=>r(()=>O(`validator-hint`,t.hideUntilInvalid?`hidden`:void 0,t.className))),hasLines:!!t.lines?.length}}));return(t.as===void 0?`p`:t.as)===`div`?l(r=>{let i=d(`div`,r);v(()=>{_(i,C)}),v(()=>{a(i,w.get())});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let r=T?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:(t.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.children;e(()=>f(r,i,s))}),i}):(t.as===void 0?`p`:t.as)===`span`?l(r=>{let i=d(`span`,r);v(()=>{_(i,C)}),v(()=>{a(i,w.get())});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let r=T?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:(t.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.children;e(()=>f(r,i,s))}),i}):l(r=>{let i=d(`p`,r);v(()=>{_(i,C)}),v(()=>{a(i,w.get())});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let r=T?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:(t.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.children;e(()=>f(r,i,s))}),i})},I=(e,t)=>O(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),L=Object.assign(P,{Hint:F,Field:t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:_,__rue_rest_omit_2:x,__rue_rest_omit_3:S,__rue_rest_omit_4:C,__rue_rest_omit_5:w,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:D,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,rest:L,controlId:R,generatedHintId:z,describedBy:B,showRequiredMark:V,fieldCls:H}=y(`useSetup:0:0:dup2`,()=>s(()=>{let{fieldAs:e,className:n,controlClassName:i,label:a,labelClassName:o,hint:s,hintAs:c,hintClassName:l,hideHintWhenValid:u,extra:d,extraClassName:f,requiredMark:p,id:m,children:h,...g}=t,_=y(`computed:1:4`,()=>r(()=>typeof t.id==`string`&&t.id.trim()?t.id:void 0)),v=_,b=y(`computed:1:5`,()=>r(()=>v.get()&&t.hint!=null&&g[`aria-describedby`]==null?`${v.get()}-hint`:void 0)),x=b;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,rest:g,controlId:_,generatedHintId:b,describedBy:y(`computed:1:6`,()=>r(()=>g[`aria-describedby`]??x.get())),showRequiredMark:y(`computed:1:7`,()=>r(()=>t.requiredMark??g.required===!0)),fieldCls:y(`computed:1:8`,()=>r(()=>I(t.fieldAs===void 0?`fieldset`:t.fieldAs,t.className)))}}));return(t.fieldAs===void 0?`fieldset`:t.fieldAs)===`div`?l(r=>{let i=d(`div`,r);v(()=>{a(i,H.get())});let s=o(`rue:slot:anchor`);n(i,s),v(()=>{let r=t.label==null?``:l(()=>{let r=h(),i=d(`label`,r);n(r,i),v(()=>{a(i,O(`label`,t.labelClassName))}),v(()=>{u(i,`for`,String(R.get()))});let s=d(`span`,i);n(i,s);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.label;e(()=>f(n,s,c))});let m=o(`rue:slot:anchor`);return n(i,m),v(()=>{let t=V.get()?l(()=>{let e=h(),t=d(`span`,e);return n(e,t),a(t,`text-error`),u(t,`aria-hidden`,`true`),n(t,p(`*`)),e}):``;e(()=>f(t,i,m))}),r});e(()=>f(r,i,s))});let _=o(`rue:component:anchor`);n(i,_),v(()=>{let n=m(P,{...L,id:R.get(),"aria-describedby":B.get(),className:t.controlClassName,children:t.children});e(()=>f(n,i,_))});let y=o(`rue:slot:anchor`);n(i,y),v(()=>{let r=t.hint==null?``:l(()=>{let r=h(),i=o(`rue:component:anchor`);n(r,i);let s=l(()=>{let r=h(),i=o(`rue:slot:anchor`);return n(r,i),v(()=>{let s=Array.isArray(t.hint)?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:t.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.hint;e(()=>f(s,r,i))}),r});return v(()=>{let n=m(F,{id:z.get(),as:t.hintAs===void 0?`p`:t.hintAs,className:t.hintClassName,hideUntilInvalid:t.hideHintWhenValid,children:s});e(()=>f(n,r,i))}),r});e(()=>f(r,i,y))}),n(i,p(` `));let x=o(`rue:slot:anchor`);return n(i,x),v(()=>{let r=t.extra==null?``:l(()=>{let r=h(),i=d(`p`,r);n(r,i),v(()=>{a(i,O(`label text-xs opacity-70`,t.extraClassName))});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let r=Array.isArray(t.extra)?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:t.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.extra;e(()=>f(r,i,s))}),r});e(()=>f(r,i,x))}),i}):l(r=>{let i=d(`fieldset`,r);v(()=>{a(i,H.get())});let s=o(`rue:slot:anchor`);n(i,s),v(()=>{let r=t.label==null?``:l(()=>{let r=h(),i=d(`label`,r);n(r,i),v(()=>{a(i,O(`label`,t.labelClassName))}),v(()=>{u(i,`for`,String(R.get()))});let s=d(`span`,i);n(i,s);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.label;e(()=>f(n,s,c))});let m=o(`rue:slot:anchor`);return n(i,m),v(()=>{let t=V.get()?l(()=>{let e=h(),t=d(`span`,e);return n(e,t),a(t,`text-error`),u(t,`aria-hidden`,`true`),n(t,p(`*`)),e}):``;e(()=>f(t,i,m))}),r});e(()=>f(r,i,s))});let _=o(`rue:component:anchor`);n(i,_),v(()=>{let n=m(P,{...L,id:R.get(),"aria-describedby":B.get(),className:t.controlClassName,children:t.children});e(()=>f(n,i,_))});let y=o(`rue:slot:anchor`);n(i,y),v(()=>{let r=t.hint==null?``:l(()=>{let r=h(),i=o(`rue:component:anchor`);n(r,i);let s=l(()=>{let r=h(),i=o(`rue:slot:anchor`);return n(r,i),v(()=>{let s=Array.isArray(t.hint)?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:t.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.hint;e(()=>f(s,r,i))}),r});return v(()=>{let n=m(F,{id:z.get(),as:t.hintAs===void 0?`p`:t.hintAs,className:t.hintClassName,hideUntilInvalid:t.hideHintWhenValid,children:s});e(()=>f(n,r,i))}),r});e(()=>f(r,i,y))}),n(i,p(` `));let x=o(`rue:slot:anchor`);return n(i,x),v(()=>{let r=t.extra==null?``:l(()=>{let r=h(),i=d(`p`,r);n(r,i),v(()=>{a(i,O(`label text-xs opacity-70`,t.extraClassName))});let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let r=Array.isArray(t.extra)?l(()=>{let e=h(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(e,r),n(e,i);let s=new Map;return v(()=>{s=b({items:t.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=h(),r=d(`span`,t);n(t,r),v(()=>{u(r,`key`,String(`validator-line-${o}`))}),a(r,`block`);let i=c(r);return n(r,i),v(()=>{g(i,e)}),t}),t,r)}})}),e}):t.extra;e(()=>f(r,i,s))}),r});e(()=>f(r,i,x))}),i})}}),R=t=>l(r=>{let i=d(`div`,r);a(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=d(`div`,i);n(i,s),a(s,`flex flex-wrap items-start justify-between gap-3`);let c=d(`div`,s);n(s,c);let u=d(`h2`,c);n(c,u),a(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(u,p(`# `));let g=o(`rue:slot:anchor`);n(u,g),v(()=>{let n=t.title;e(()=>f(n,u,g))});let _=o(`rue:slot:anchor`);n(c,_),v(()=>{let r=t.summary?l(()=>{let r=h(),i=d(`p`,r);n(r,i),a(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return n(i,s),v(()=>{let n=t.summary;e(()=>f(n,i,s))}),r}):``;e(()=>f(r,c,_))});let y=o(`rue:component:anchor`);n(i,y),v(()=>{let n=m(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>f(n,i,y))});let b=o(`rue:slot:anchor`);return n(i,b),v(()=>{let r=t.tab.value===`preview`?t.preview():l(()=>{let r=h(),i=o(`rue:component:anchor`);return n(r,i),v(()=>{let n=m(C,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>f(n,r,i))}),r});e(()=>f(r,i,b))}),i}),z=t=>l(r=>{let i=d(`div`,r);a(i,`not-prose my-6 lg:my-8`);let s=d(`h3`,i);n(i,s),a(s,`mt-0 mb-3 text-base font-semibold text-base-content`);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.title;e(()=>f(n,s,c))});let m=d(`div`,i);n(i,m),a(m,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let g=d(`table`,m);n(m,g),a(g,`table table-zebra`);let _=d(`thead`,g);n(g,_);let y=d(`tr`,_);n(_,y);let x=d(`th`,y);n(y,x),n(x,p(`属性`));let S=d(`th`,y);n(y,S),n(S,p(`说明`));let C=d(`th`,y);n(y,C),n(C,p(`类型`));let w=d(`th`,y);n(y,w),n(w,p(`默认值`));let T=d(`tbody`,g);n(g,T);let E=o(`rue:list:start`),D=o(`rue:list:end`);n(T,E),n(T,D);let O=new Map;return v(()=>{O=b({items:t.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(t,r,i,a,s)=>{f(l(()=>{let r=h(),i=d(`tr`,r);n(r,i),v(()=>{u(i,`key`,String(t.prop))});let a=d(`td`,i);n(i,a);let s=d(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),v(()=>{let n=t.prop;e(()=>f(n,s,c))});let l=d(`td`,i);n(i,l);let p=o(`rue:slot:anchor`);n(l,p),v(()=>{let n=t.description;e(()=>f(n,l,p))});let m=d(`td`,i);n(i,m);let g=d(`code`,m);n(m,g);let _=o(`rue:slot:anchor`);n(g,_),v(()=>{let n=t.type;e(()=>f(n,g,_))});let y=d(`td`,i);n(i,y);let b=d(`code`,y);n(y,b);let x=o(`rue:slot:anchor`);return n(b,x),v(()=>{let n=t.defaultValue;e(()=>f(n,b,x))}),r}),r,i)}})}),i}),B=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,t.checkValidity()?`false`:`true`)},V=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,`true`)},H=e=>{e.preventDefault()},U=()=>l(t=>{let r=d(`form`,t);a(r,`grid gap-2`),i(r,`submit`,H);let s=o(`rue:component:anchor`);n(r,s),f(m(L,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),r,s);let c=o(`rue:component:anchor`);n(r,c),v(()=>{let t=m(L.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});e(()=>f(t,r,c))});let l=o(`rue:component:anchor`);return n(r,l),f(m(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),r,l),r}),ee=()=>l(t=>{let r=d(`form`,t);a(r,`grid gap-2`),i(r,`submit`,H);let s=o(`rue:component:anchor`);n(r,s),f(m(L,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),r,s);let c=o(`rue:component:anchor`);n(r,c),v(()=>{let t=m(L.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});e(()=>f(t,r,c))});let l=o(`rue:component:anchor`);return n(r,l),f(m(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),r,l),r}),te=[{prop:`appearance`,description:`自动补充 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，基础写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],W=()=>{let{tabBasic:r,tabHosts:i,tabRules:c,tabStatus:u,tabField:g,tabForm:_}=y(`useSetup:0:0`,()=>s(()=>({tabBasic:y(`ref:1:0`,()=>t(`preview`)),tabHosts:y(`ref:1:1`,()=>t(`preview`)),tabRules:y(`ref:1:2`,()=>t(`preview`)),tabStatus:y(`ref:1:3`,()=>t(`preview`)),tabField:y(`ref:1:4`,()=>t(`preview`)),tabForm:y(`ref:1:5`,()=>t(`preview`))})));return l(t=>{let s=h(),y=o(`rue:component:anchor`);return n(s,y),f(m(E,{children:l(()=>{let t=h(),s=d(`div`,t);n(t,s),a(s,`max-w-none prose prose-sm md:prose-base`);let l=d(`h1`,s);n(s,l),n(l,p(`Validator 校验辅助`));let y=d(`p`,s);n(s,y),a(y,`text-sm mt-3 mb-3`),n(y,p(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。基础的`));let b=d(`code`,y);n(y,b),n(b,p(`className="input validator"`)),n(y,p(`写法继续可用，但现在也可以直接通过`));let C=d(`code`,y);n(y,C),n(C,p(`appearance`)),n(y,p(`、`));let T=d(`code`,y);n(y,T),n(T,p(`size`)),n(y,p(`、`));let E=d(`code`,y);n(y,E),n(E,p(`status`)),n(y,p(`和`));let D=d(`code`,y);n(y,D),n(D,p(`Field`)),n(y,p(`组合件来组织更完整的表单场景。`));let O=d(`div`,s);n(s,O),a(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=d(`div`,O);n(O,k);let A=d(`div`,k);n(k,A),a(A,`font-medium text-base-content`),n(A,p(`原生校验优先`));let j=d(`div`,k);n(k,j),a(j,`mt-1 opacity-70`),n(j,p(`继续依赖 required、pattern、minLength 等原生约束。`));let M=d(`div`,O);n(O,M);let N=d(`div`,M);n(M,N),a(N,`font-medium text-base-content`),n(N,p(`语义外观补充`));let P=d(`div`,M);n(M,P),a(P,`mt-1 opacity-70`),n(P,p(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let F=d(`div`,O);n(O,F);let I=d(`div`,F);n(F,I),a(I,`font-medium text-base-content`),n(I,p(`表单结构复用`));let B=d(`div`,F);n(F,B),a(B,`mt-1 opacity-70`),n(B,p(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=o(`rue:component:anchor`);n(s,V),v(()=>{let t=m(R,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:r,preview:()=>x(`form`,{className:`grid w-full max-w-xs gap-2`,children:[S(L,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),S(L.Hint,{children:`Enter valid email address`}),S(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});e(()=>f(t,s,V))});let H=o(`rue:component:anchor`);n(s,H),v(()=>{let t=m(R,{title:`Different validator hosts`,summary:`展示基础 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:i,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[x(`div`,{className:`grid gap-2`,children:[x(L,{as:`select`,appearance:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`tabs`,children:`Tabs`}),S(`option`,{value:`spaces`,children:`Spaces`})]}),S(L.Hint,{children:`Required`})]}),x(`div`,{className:`grid gap-2`,children:[S(L,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),S(L.Hint,{children:`Required`})]}),x(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(L,{appearance:`checkbox`,type:`checkbox`,required:!0}),S(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),x(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),S(L,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});e(()=>f(t,s,H))});let W=o(`rue:component:anchor`);n(s,W),v(()=>{let t=m(R,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:c,preview:()=>x(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[S(U,{}),S(ee,{})]}),code:`const syncNativeValidity = (event: Event) => {
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
</form>`});e(()=>f(t,s,W))});let G=o(`rue:component:anchor`);n(s,G),v(()=>{let t=m(R,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:u,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[S(L.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),S(L.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),x(L.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[S(`option`,{children:`Stable`}),S(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});e(()=>f(t,s,G))});let K=o(`rue:component:anchor`);n(s,K),v(()=>{let t=m(R,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:g,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[S(L.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),x(L.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`utc+8`,children:`UTC +8`}),S(`option`,{value:`utc`,children:`UTC`})]}),S(L.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});e(()=>f(t,s,K))});let q=o(`rue:component:anchor`);n(s,q),v(()=>{let t=m(R,{title:`Form recipe`,summary:`把基础散装示例 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:_,preview:()=>x(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[S(L.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),S(L.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),x(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[S(w,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),S(w,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});e(()=>f(t,s,q))});let J=d(`div`,s);n(s,J),a(J,`my-8 lg:my-12`);let Y=d(`h2`,J);n(J,Y),n(Y,p(`API`));let X=d(`p`,J);n(J,X),a(X,`text-sm opacity-80`),n(X,p(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=o(`rue:component:anchor`);n(J,Z),v(()=>{let t=m(z,{title:`Validator`,rows:te});e(()=>f(t,J,Z))});let Q=o(`rue:component:anchor`);n(J,Q),v(()=>{let t=m(z,{title:`Validator.Hint`,rows:ne});e(()=>f(t,J,Q))});let $=o(`rue:component:anchor`);return n(J,$),v(()=>{let t=m(z,{title:`Validator.Field`,rows:re});e(()=>f(t,J,$))}),t})}),s,y),s})};export{W as default};