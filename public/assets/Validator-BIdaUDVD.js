import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,_t as s,ct as c,et as l,gt as u,l as d,nt as f,o as p,rt as m,t as h,tt as g,ut as _,yt as v}from"./vapor-runtime-CKrmRMZX.js";import{a as y,n as b}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as x,i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./Code-D5UqTwV6.js";import{t as w}from"./button-CiwrjbTY.js";import{t as T}from"./tabs-DRfs918f.js";import{r as E}from"./SidebarPlaygroundDesign-CWudvLqE.js";var D=[`input`,`select`,`textarea`,`checkbox`,`toggle`],O=(...e)=>e.filter(Boolean).join(` `),k=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),A=e=>{let t=k(e);return D.find(e=>t.has(e))},j=(e,t,n)=>{if(t)return t;let r=A(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},M=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),N=(e,t,n,r)=>{let i=k(r);return O(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},P=n=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:f,__rue_rest_omit_5:m,rest:h,resolvedAppearance:b,resolvedHost:x,cls:S}=y(`useSetup:0:0`,()=>a(()=>{let{as:e,appearance:t,size:r,status:i,className:a,children:o,...s}=n,c=y(`computed:1:0`,()=>v(()=>j(n.as,n.appearance,n.className))),l=c;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedAppearance:c,resolvedHost:y(`computed:1:1`,()=>v(()=>M(n.as,l.get()))),cls:y(`computed:1:2`,()=>v(()=>N(l.get(),n.size,n.status,n.className)))}}));return x.get()===`select`?d(i=>{let a=g(`select`,i);t(()=>{s(a,h)}),t(()=>{_(a,S.get())});let c=e(`rue:children:anchor`);return o(a,c),t(()=>{let e=n.children;r(()=>p(e,a,c))}),a}):x.get()===`textarea`?d(i=>{let a=g(`textarea`,i);t(()=>{s(a,h)}),t(()=>{_(a,S.get())});let c=e(`rue:children:anchor`);return o(a,c),t(()=>{let e=n.children;r(()=>p(e,a,c))}),a}):d(e=>{let n=g(`input`,e);return t(()=>{s(n,h)}),t(()=>{_(n,S.get())}),n})},F=n=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:f,__rue_rest_omit_2:h,__rue_rest_omit_3:x,__rue_rest_omit_4:S,rest:C,cls:w,hasLines:T}=y(`useSetup:0:0:dup1`,()=>a(()=>{let{as:e,className:t,children:r,hideUntilInvalid:i,lines:a,...o}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,cls:y(`computed:1:3`,()=>v(()=>O(`validator-hint`,n.hideUntilInvalid?`hidden`:void 0,n.className))),hasLines:!!n.lines?.length}}));return(n.as===void 0?`p`:n.as)===`div`?d(i=>{let a=g(`div`,i);t(()=>{s(a,C)}),t(()=>{_(a,w.get())});let f=e(`rue:slot:anchor`);return o(a,f),t(()=>{let i=T?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:(n.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.children;r(()=>p(i,a,f))}),a}):(n.as===void 0?`p`:n.as)===`span`?d(i=>{let a=g(`span`,i);t(()=>{s(a,C)}),t(()=>{_(a,w.get())});let f=e(`rue:slot:anchor`);return o(a,f),t(()=>{let i=T?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:(n.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.children;r(()=>p(i,a,f))}),a}):d(i=>{let a=g(`p`,i);t(()=>{s(a,C)}),t(()=>{_(a,w.get())});let f=e(`rue:slot:anchor`);return o(a,f),t(()=>{let i=T?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:(n.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.children;r(()=>p(i,a,f))}),a})},I=(e,t)=>O(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),L=Object.assign(P,{Hint:F,Field:n=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:s,__rue_rest_omit_2:x,__rue_rest_omit_3:S,__rue_rest_omit_4:C,__rue_rest_omit_5:w,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:D,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,rest:L,controlId:R,generatedHintId:z,describedBy:B,showRequiredMark:V,fieldCls:H}=y(`useSetup:0:0:dup2`,()=>a(()=>{let{fieldAs:e,className:t,controlClassName:r,label:i,labelClassName:a,hint:o,hintAs:s,hintClassName:c,hideHintWhenValid:l,extra:u,extraClassName:d,requiredMark:f,id:p,children:m,...h}=n,g=y(`computed:1:4`,()=>v(()=>typeof n.id==`string`&&n.id.trim()?n.id:void 0)),_=g,b=y(`computed:1:5`,()=>v(()=>_.get()&&n.hint!=null&&h[`aria-describedby`]==null?`${_.get()}-hint`:void 0)),x=b;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,rest:h,controlId:g,generatedHintId:b,describedBy:y(`computed:1:6`,()=>v(()=>h[`aria-describedby`]??x.get())),showRequiredMark:y(`computed:1:7`,()=>v(()=>n.requiredMark??h.required===!0)),fieldCls:y(`computed:1:8`,()=>v(()=>I(n.fieldAs===void 0?`fieldset`:n.fieldAs,n.className)))}}));return(n.fieldAs===void 0?`fieldset`:n.fieldAs)===`div`?d(i=>{let a=g(`div`,i);t(()=>{_(a,H.get())});let s=e(`rue:slot:anchor`);o(a,s),t(()=>{let i=n.label==null?``:d(()=>{let i=l(),a=g(`label`,i);o(i,a),t(()=>{_(a,O(`label`,n.labelClassName))}),t(()=>{c(a,`for`,String(R.get()))});let s=g(`span`,a);o(a,s);let u=e(`rue:slot:anchor`);o(s,u),t(()=>{let e=n.label;r(()=>p(e,s,u))});let m=e(`rue:slot:anchor`);return o(a,m),t(()=>{let e=V.get()?d(()=>{let e=l(),t=g(`span`,e);return o(e,t),_(t,`text-error`),c(t,`aria-hidden`,`true`),o(t,f(`*`)),e}):``;r(()=>p(e,a,m))}),i});r(()=>p(i,a,s))});let v=e(`rue:component:anchor`);o(a,v),t(()=>{let e=h(P,{...L,id:R.get(),"aria-describedby":B.get(),className:n.controlClassName,children:n.children});r(()=>p(e,a,v))});let y=e(`rue:slot:anchor`);o(a,y),t(()=>{let i=n.hint==null?``:d(()=>{let i=l(),a=e(`rue:component:anchor`);o(i,a);let s=d(()=>{let i=l(),a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let s=Array.isArray(n.hint)?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:n.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.hint;r(()=>p(s,i,a))}),i});return t(()=>{let e=h(F,{id:z.get(),as:n.hintAs===void 0?`p`:n.hintAs,className:n.hintClassName,hideUntilInvalid:n.hideHintWhenValid,children:s});r(()=>p(e,i,a))}),i});r(()=>p(i,a,y))}),o(a,f(` `));let x=e(`rue:slot:anchor`);return o(a,x),t(()=>{let i=n.extra==null?``:d(()=>{let i=l(),a=g(`p`,i);o(i,a),t(()=>{_(a,O(`label text-xs opacity-70`,n.extraClassName))});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let i=Array.isArray(n.extra)?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:n.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.extra;r(()=>p(i,a,s))}),i});r(()=>p(i,a,x))}),a}):d(i=>{let a=g(`fieldset`,i);t(()=>{_(a,H.get())});let s=e(`rue:slot:anchor`);o(a,s),t(()=>{let i=n.label==null?``:d(()=>{let i=l(),a=g(`label`,i);o(i,a),t(()=>{_(a,O(`label`,n.labelClassName))}),t(()=>{c(a,`for`,String(R.get()))});let s=g(`span`,a);o(a,s);let u=e(`rue:slot:anchor`);o(s,u),t(()=>{let e=n.label;r(()=>p(e,s,u))});let m=e(`rue:slot:anchor`);return o(a,m),t(()=>{let e=V.get()?d(()=>{let e=l(),t=g(`span`,e);return o(e,t),_(t,`text-error`),c(t,`aria-hidden`,`true`),o(t,f(`*`)),e}):``;r(()=>p(e,a,m))}),i});r(()=>p(i,a,s))});let v=e(`rue:component:anchor`);o(a,v),t(()=>{let e=h(P,{...L,id:R.get(),"aria-describedby":B.get(),className:n.controlClassName,children:n.children});r(()=>p(e,a,v))});let y=e(`rue:slot:anchor`);o(a,y),t(()=>{let i=n.hint==null?``:d(()=>{let i=l(),a=e(`rue:component:anchor`);o(i,a);let s=d(()=>{let i=l(),a=e(`rue:slot:anchor`);return o(i,a),t(()=>{let s=Array.isArray(n.hint)?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:n.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.hint;r(()=>p(s,i,a))}),i});return t(()=>{let e=h(F,{id:z.get(),as:n.hintAs===void 0?`p`:n.hintAs,className:n.hintClassName,hideUntilInvalid:n.hideHintWhenValid,children:s});r(()=>p(e,i,a))}),i});r(()=>p(i,a,y))}),o(a,f(` `));let x=e(`rue:slot:anchor`);return o(a,x),t(()=>{let i=n.extra==null?``:d(()=>{let i=l(),a=g(`p`,i);o(i,a),t(()=>{_(a,O(`label text-xs opacity-70`,n.extraClassName))});let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let i=Array.isArray(n.extra)?d(()=>{let r=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(r,i),o(r,a);let s=new Map;return t(()=>{s=b({items:n.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:s,parent:i.parentNode,before:a,singleRoot:!0,start:i,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=l(),r=g(`span`,n);o(n,r),t(()=>{c(r,`key`,String(`validator-line-${a}`))}),_(r,`block`);let i=m(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),r}):n.extra;r(()=>p(i,a,s))}),i});r(()=>p(i,a,x))}),a})}}),R=n=>d(i=>{let a=g(`div`,i);_(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=g(`div`,a);o(a,s),_(s,`flex flex-wrap items-start justify-between gap-3`);let c=g(`div`,s);o(s,c);let u=g(`h2`,c);o(c,u),_(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(u,f(`# `));let m=e(`rue:slot:anchor`);o(u,m),t(()=>{let e=n.title;r(()=>p(e,u,m))});let v=e(`rue:slot:anchor`);o(c,v),t(()=>{let i=n.summary?d(()=>{let i=l(),a=g(`p`,i);o(i,a),_(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>p(e,a,s))}),i}):``;r(()=>p(i,c,v))});let y=e(`rue:component:anchor`);o(a,y),t(()=>{let e=h(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>p(e,a,y))});let b=e(`rue:slot:anchor`);return o(a,b),t(()=>{let i=n.tab.value===`preview`?n.preview():d(()=>{let i=l(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>p(e,i,a))}),i});r(()=>p(i,a,b))}),a}),z=n=>d(i=>{let a=g(`div`,i);_(a,`not-prose my-6 lg:my-8`);let s=g(`h3`,a);o(a,s),_(s,`mt-0 mb-3 text-base font-semibold text-base-content`);let u=e(`rue:slot:anchor`);o(s,u),t(()=>{let e=n.title;r(()=>p(e,s,u))});let m=g(`div`,a);o(a,m),_(m,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let h=g(`table`,m);o(m,h),_(h,`table table-zebra`);let v=g(`thead`,h);o(h,v);let y=g(`tr`,v);o(v,y);let x=g(`th`,y);o(y,x),o(x,f(`属性`));let S=g(`th`,y);o(y,S),o(S,f(`说明`));let C=g(`th`,y);o(y,C),o(C,f(`类型`));let w=g(`th`,y);o(y,w),o(w,f(`默认值`));let T=g(`tbody`,h);o(h,T);let E=e(`rue:list:start`),D=e(`rue:list:end`);o(T,E),o(T,D);let O=new Map;return t(()=>{O=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(n,i,a,s,u)=>{p(d(()=>{let i=l(),a=g(`tr`,i);o(i,a),t(()=>{c(a,`key`,String(n.prop))});let s=g(`td`,a);o(a,s);let u=g(`code`,s);o(s,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>p(e,u,d))});let f=g(`td`,a);o(a,f);let m=e(`rue:slot:anchor`);o(f,m),t(()=>{let e=n.description;r(()=>p(e,f,m))});let h=g(`td`,a);o(a,h);let _=g(`code`,h);o(h,_);let v=e(`rue:slot:anchor`);o(_,v),t(()=>{let e=n.type;r(()=>p(e,_,v))});let y=g(`td`,a);o(a,y);let b=g(`code`,y);o(y,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>p(e,b,x))}),i}),i,a)}})}),a}),B=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,t.checkValidity()?`false`:`true`)},V=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,`true`)},H=e=>{e.preventDefault()},U=()=>d(n=>{let a=g(`form`,n);_(a,`grid gap-2`),i(a,`submit`,H);let s=e(`rue:component:anchor`);o(a,s),p(h(L,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),a,s);let c=e(`rue:component:anchor`);o(a,c),t(()=>{let e=h(L.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});r(()=>p(e,a,c))});let l=e(`rue:component:anchor`);return o(a,l),p(h(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),a,l),a}),ee=()=>d(n=>{let a=g(`form`,n);_(a,`grid gap-2`),i(a,`submit`,H);let s=e(`rue:component:anchor`);o(a,s),p(h(L,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),a,s);let c=e(`rue:component:anchor`);o(a,c),t(()=>{let e=h(L.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});r(()=>p(e,a,c))});let l=e(`rue:component:anchor`);return o(a,l),p(h(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),a,l),a}),te=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],W=()=>{let{tabBasic:i,tabHosts:s,tabRules:c,tabStatus:u,tabField:m,tabForm:v}=y(`useSetup:0:0`,()=>a(()=>({tabBasic:y(`ref:1:0`,()=>n(`preview`)),tabHosts:y(`ref:1:1`,()=>n(`preview`)),tabRules:y(`ref:1:2`,()=>n(`preview`)),tabStatus:y(`ref:1:3`,()=>n(`preview`)),tabField:y(`ref:1:4`,()=>n(`preview`)),tabForm:y(`ref:1:5`,()=>n(`preview`))})));return d(n=>{let a=l(),y=e(`rue:component:anchor`);return o(a,y),p(h(E,{children:d(()=>{let n=l(),a=g(`div`,n);o(n,a),_(a,`max-w-none prose prose-sm md:prose-base`);let d=g(`h1`,a);o(a,d),o(d,f(`Validator 校验辅助`));let y=g(`p`,a);o(a,y),_(y,`text-sm mt-3 mb-3`),o(y,f(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let b=g(`code`,y);o(y,b),o(b,f(`className="input validator"`)),o(y,f(`写法继续可用，但现在也可以直接通过`));let C=g(`code`,y);o(y,C),o(C,f(`appearance`)),o(y,f(`、`));let T=g(`code`,y);o(y,T),o(T,f(`size`)),o(y,f(`、`));let E=g(`code`,y);o(y,E),o(E,f(`status`)),o(y,f(`和`));let D=g(`code`,y);o(y,D),o(D,f(`Field`)),o(y,f(`组合件来组织更完整的表单场景。`));let O=g(`div`,a);o(a,O),_(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=g(`div`,O);o(O,k);let A=g(`div`,k);o(k,A),_(A,`font-medium text-base-content`),o(A,f(`原生校验优先`));let j=g(`div`,k);o(k,j),_(j,`mt-1 opacity-70`),o(j,f(`继续依赖 required、pattern、minLength 等原生约束。`));let M=g(`div`,O);o(O,M);let N=g(`div`,M);o(M,N),_(N,`font-medium text-base-content`),o(N,f(`语义外观补齐`));let P=g(`div`,M);o(M,P),_(P,`mt-1 opacity-70`),o(P,f(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let F=g(`div`,O);o(O,F);let I=g(`div`,F);o(F,I),_(I,`font-medium text-base-content`),o(I,f(`表单结构复用`));let B=g(`div`,F);o(F,B),_(B,`mt-1 opacity-70`),o(B,f(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=e(`rue:component:anchor`);o(a,V),t(()=>{let e=h(R,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:i,preview:()=>x(`form`,{className:`grid w-full max-w-xs gap-2`,children:[S(L,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),S(L.Hint,{children:`Enter valid email address`}),S(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});r(()=>p(e,a,V))});let H=e(`rue:component:anchor`);o(a,H),t(()=>{let e=h(R,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:s,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[x(`div`,{className:`grid gap-2`,children:[x(L,{as:`select`,appearance:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`tabs`,children:`Tabs`}),S(`option`,{value:`spaces`,children:`Spaces`})]}),S(L.Hint,{children:`Required`})]}),x(`div`,{className:`grid gap-2`,children:[S(L,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),S(L.Hint,{children:`Required`})]}),x(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(L,{appearance:`checkbox`,type:`checkbox`,required:!0}),S(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),x(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),S(L,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});r(()=>p(e,a,H))});let W=e(`rue:component:anchor`);o(a,W),t(()=>{let e=h(R,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:c,preview:()=>x(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[S(U,{}),S(ee,{})]}),code:`const syncNativeValidity = (event: Event) => {
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
</form>`});r(()=>p(e,a,W))});let G=e(`rue:component:anchor`);o(a,G),t(()=>{let e=h(R,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:u,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[S(L.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),S(L.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),x(L.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[S(`option`,{children:`Stable`}),S(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});r(()=>p(e,a,G))});let K=e(`rue:component:anchor`);o(a,K),t(()=>{let e=h(R,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:m,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[S(L.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),x(L.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`utc+8`,children:`UTC +8`}),S(`option`,{value:`utc`,children:`UTC`})]}),S(L.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});r(()=>p(e,a,K))});let q=e(`rue:component:anchor`);o(a,q),t(()=>{let e=h(R,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:v,preview:()=>x(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[S(L.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),S(L.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),x(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[S(w,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),S(w,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});r(()=>p(e,a,q))});let J=g(`div`,a);o(a,J),_(J,`my-8 lg:my-12`);let Y=g(`h2`,J);o(J,Y),o(Y,f(`API`));let X=g(`p`,J);o(J,X),_(X,`text-sm opacity-80`),o(X,f(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=e(`rue:component:anchor`);o(J,Z),t(()=>{let e=h(z,{title:`Validator`,rows:te});r(()=>p(e,J,Z))});let Q=e(`rue:component:anchor`);o(J,Q),t(()=>{let e=h(z,{title:`Validator.Hint`,rows:ne});r(()=>p(e,J,Q))});let $=e(`rue:component:anchor`);return o(J,$),t(()=>{let e=h(z,{title:`Validator.Field`,rows:re});r(()=>p(e,J,$))}),n})}),a,y),a})};export{W as default};