import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,gt as c,ht as l,l as u,lt as d,nt as f,o as p,st as m,t as h,tt as g,vt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as b}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as x,i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./Code-BIscIyEp.js";import{t as w}from"./button-CeShl0h_.js";import{t as T}from"./tabs-CZWMQq5i.js";import{r as E}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var D=[`input`,`select`,`textarea`,`checkbox`,`toggle`],O=(...e)=>e.filter(Boolean).join(` `),k=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),A=e=>{let t=k(e);return D.find(e=>t.has(e))},j=(e,t,n)=>{if(t)return t;let r=A(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},M=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),N=(e,t,n,r)=>{let i=k(r);return O(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},P=e=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:l,__rue_rest_omit_2:f,__rue_rest_omit_3:m,__rue_rest_omit_4:h,__rue_rest_omit_5:g,rest:v,resolvedAppearance:b,resolvedHost:x,cls:S}=y(`useSetup:0:0`,()=>o(()=>{let{as:t,appearance:n,size:r,status:i,className:a,children:o,...s}=e,c=y(`computed:1:0`,()=>_(()=>j(e.as,e.appearance,e.className))),l=c;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedAppearance:c,resolvedHost:y(`computed:1:1`,()=>_(()=>M(e.as,l.get()))),cls:y(`computed:1:2`,()=>_(()=>N(l.get(),e.size,e.status,e.className)))}}));return x.get()===`select`?u(a=>{let o=s(`select`,a);n(()=>{c(o,v)}),n(()=>{d(o,S.get())});let l=t(`rue:children:anchor`);return i(o,l),n(()=>{let t=e.children;r(()=>p(t,o,l))}),o}):x.get()===`textarea`?u(a=>{let o=s(`textarea`,a);n(()=>{c(o,v)}),n(()=>{d(o,S.get())});let l=t(`rue:children:anchor`);return i(o,l),n(()=>{let t=e.children;r(()=>p(t,o,l))}),o}):u(e=>{let t=s(`input`,e);return n(()=>{c(t,v)}),n(()=>{d(t,S.get())}),t})},F=a=>{let{__rue_rest_omit_0:h,__rue_rest_omit_1:g,__rue_rest_omit_2:v,__rue_rest_omit_3:x,__rue_rest_omit_4:S,rest:C,cls:w,hasLines:T}=y(`useSetup:0:0:dup1`,()=>o(()=>{let{as:e,className:t,children:n,hideUntilInvalid:r,lines:i,...o}=a;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,rest:o,cls:y(`computed:1:3`,()=>_(()=>O(`validator-hint`,a.hideUntilInvalid?`hidden`:void 0,a.className))),hasLines:!!a.lines?.length}}));return(a.as===void 0?`p`:a.as)===`div`?u(o=>{let h=s(`div`,o);n(()=>{c(h,C)}),n(()=>{d(h,w.get())});let g=t(`rue:slot:anchor`);return i(h,g),n(()=>{let o=T?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:(a.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.children;r(()=>p(o,h,g))}),h}):(a.as===void 0?`p`:a.as)===`span`?u(o=>{let h=s(`span`,o);n(()=>{c(h,C)}),n(()=>{d(h,w.get())});let g=t(`rue:slot:anchor`);return i(h,g),n(()=>{let o=T?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:(a.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.children;r(()=>p(o,h,g))}),h}):u(o=>{let h=s(`p`,o);n(()=>{c(h,C)}),n(()=>{d(h,w.get())});let g=t(`rue:slot:anchor`);return i(h,g),n(()=>{let o=T?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:(a.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.children;r(()=>p(o,h,g))}),h})},I=(e,t)=>O(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),L=Object.assign(P,{Hint:F,Field:a=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:v,__rue_rest_omit_2:x,__rue_rest_omit_3:S,__rue_rest_omit_4:C,__rue_rest_omit_5:w,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:D,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,rest:L,controlId:R,generatedHintId:z,describedBy:B,showRequiredMark:V,fieldCls:H}=y(`useSetup:0:0:dup2`,()=>o(()=>{let{fieldAs:e,className:t,controlClassName:n,label:r,labelClassName:i,hint:o,hintAs:s,hintClassName:c,hideHintWhenValid:l,extra:u,extraClassName:d,requiredMark:f,id:p,children:m,...h}=a,g=y(`computed:1:4`,()=>_(()=>typeof a.id==`string`&&a.id.trim()?a.id:void 0)),v=g,b=y(`computed:1:5`,()=>_(()=>v.get()&&a.hint!=null&&h[`aria-describedby`]==null?`${v.get()}-hint`:void 0)),x=b;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,rest:h,controlId:g,generatedHintId:b,describedBy:y(`computed:1:6`,()=>_(()=>h[`aria-describedby`]??x.get())),showRequiredMark:y(`computed:1:7`,()=>_(()=>a.requiredMark??h.required===!0)),fieldCls:y(`computed:1:8`,()=>_(()=>I(a.fieldAs===void 0?`fieldset`:a.fieldAs,a.className)))}}));return(a.fieldAs===void 0?`fieldset`:a.fieldAs)===`div`?u(o=>{let c=s(`div`,o);n(()=>{d(c,H.get())});let _=t(`rue:slot:anchor`);i(c,_),n(()=>{let o=a.label==null?``:u(()=>{let o=e(),c=s(`label`,o);i(o,c),n(()=>{d(c,O(`label`,a.labelClassName))}),n(()=>{m(c,`for`,String(R.get()))});let l=s(`span`,c);i(c,l);let f=t(`rue:slot:anchor`);i(l,f),n(()=>{let e=a.label;r(()=>p(e,l,f))});let h=t(`rue:slot:anchor`);return i(c,h),n(()=>{let t=V.get()?u(()=>{let t=e(),n=s(`span`,t);return i(t,n),d(n,`text-error`),m(n,`aria-hidden`,`true`),i(n,g(`*`)),t}):``;r(()=>p(t,c,h))}),o});r(()=>p(o,c,_))});let v=t(`rue:component:anchor`);i(c,v),n(()=>{let e=h(P,{...L,id:R.get(),"aria-describedby":B.get(),className:a.controlClassName,children:a.children});r(()=>p(e,c,v))});let y=t(`rue:slot:anchor`);i(c,y),n(()=>{let o=a.hint==null?``:u(()=>{let o=e(),c=t(`rue:component:anchor`);i(o,c);let g=u(()=>{let o=e(),c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let h=Array.isArray(a.hint)?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:a.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.hint;r(()=>p(h,o,c))}),o});return n(()=>{let e=h(F,{id:z.get(),as:a.hintAs===void 0?`p`:a.hintAs,className:a.hintClassName,hideUntilInvalid:a.hideHintWhenValid,children:g});r(()=>p(e,o,c))}),o});r(()=>p(o,c,y))}),i(c,g(` `));let x=t(`rue:slot:anchor`);return i(c,x),n(()=>{let o=a.extra==null?``:u(()=>{let o=e(),c=s(`p`,o);i(o,c),n(()=>{d(c,O(`label text-xs opacity-70`,a.extraClassName))});let h=t(`rue:slot:anchor`);return i(c,h),n(()=>{let o=Array.isArray(a.extra)?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:a.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.extra;r(()=>p(o,c,h))}),o});r(()=>p(o,c,x))}),c}):u(o=>{let c=s(`fieldset`,o);n(()=>{d(c,H.get())});let _=t(`rue:slot:anchor`);i(c,_),n(()=>{let o=a.label==null?``:u(()=>{let o=e(),c=s(`label`,o);i(o,c),n(()=>{d(c,O(`label`,a.labelClassName))}),n(()=>{m(c,`for`,String(R.get()))});let l=s(`span`,c);i(c,l);let f=t(`rue:slot:anchor`);i(l,f),n(()=>{let e=a.label;r(()=>p(e,l,f))});let h=t(`rue:slot:anchor`);return i(c,h),n(()=>{let t=V.get()?u(()=>{let t=e(),n=s(`span`,t);return i(t,n),d(n,`text-error`),m(n,`aria-hidden`,`true`),i(n,g(`*`)),t}):``;r(()=>p(t,c,h))}),o});r(()=>p(o,c,_))});let v=t(`rue:component:anchor`);i(c,v),n(()=>{let e=h(P,{...L,id:R.get(),"aria-describedby":B.get(),className:a.controlClassName,children:a.children});r(()=>p(e,c,v))});let y=t(`rue:slot:anchor`);i(c,y),n(()=>{let o=a.hint==null?``:u(()=>{let o=e(),c=t(`rue:component:anchor`);i(o,c);let g=u(()=>{let o=e(),c=t(`rue:slot:anchor`);return i(o,c),n(()=>{let h=Array.isArray(a.hint)?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:a.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.hint;r(()=>p(h,o,c))}),o});return n(()=>{let e=h(F,{id:z.get(),as:a.hintAs===void 0?`p`:a.hintAs,className:a.hintClassName,hideUntilInvalid:a.hideHintWhenValid,children:g});r(()=>p(e,o,c))}),o});r(()=>p(o,c,y))}),i(c,g(` `));let x=t(`rue:slot:anchor`);return i(c,x),n(()=>{let o=a.extra==null?``:u(()=>{let o=e(),c=s(`p`,o);i(o,c),n(()=>{d(c,O(`label text-xs opacity-70`,a.extraClassName))});let h=t(`rue:slot:anchor`);return i(c,h),n(()=>{let o=Array.isArray(a.extra)?u(()=>{let r=e(),o=t(`rue:list:start`),c=t(`rue:list:end`);i(r,o),i(r,c);let h=new Map;return n(()=>{h=b({items:a.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:h,parent:o.parentNode,before:c,singleRoot:!0,start:o,renderItem:(t,r,a,o,c)=>{p(u(()=>{let r=e(),a=s(`span`,r);i(r,a),n(()=>{m(a,`key`,String(`validator-line-${c}`))}),d(a,`block`);let o=f(a);return i(a,o),n(()=>{l(o,t)}),r}),r,a)}})}),r}):a.extra;r(()=>p(o,c,h))}),o});r(()=>p(o,c,x))}),c})}}),R=a=>u(o=>{let c=s(`div`,o);d(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=s(`div`,c);i(c,l),d(l,`flex flex-wrap items-start justify-between gap-3`);let f=s(`div`,l);i(l,f);let m=s(`h2`,f);i(f,m),d(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,g(`# `));let _=t(`rue:slot:anchor`);i(m,_),n(()=>{let e=a.title;r(()=>p(e,m,_))});let v=t(`rue:slot:anchor`);i(f,v),n(()=>{let o=a.summary?u(()=>{let o=e(),c=s(`p`,o);i(o,c),d(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>p(e,c,l))}),o}):``;r(()=>p(o,f,v))});let y=t(`rue:component:anchor`);i(c,y),n(()=>{let e=h(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>p(e,c,y))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?a.preview():u(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=h(C,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>p(e,o,s))}),o});r(()=>p(o,c,b))}),c}),z=a=>u(o=>{let c=s(`div`,o);d(c,`not-prose my-6 lg:my-8`);let l=s(`h3`,c);i(c,l),d(l,`mt-0 mb-3 text-base font-semibold text-base-content`);let f=t(`rue:slot:anchor`);i(l,f),n(()=>{let e=a.title;r(()=>p(e,l,f))});let h=s(`div`,c);i(c,h),d(h,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let _=s(`table`,h);i(h,_),d(_,`table table-zebra`);let v=s(`thead`,_);i(_,v);let y=s(`tr`,v);i(v,y);let x=s(`th`,y);i(y,x),i(x,g(`属性`));let S=s(`th`,y);i(y,S),i(S,g(`说明`));let C=s(`th`,y);i(y,C),i(C,g(`类型`));let w=s(`th`,y);i(y,w),i(w,g(`默认值`));let T=s(`tbody`,_);i(_,T);let E=t(`rue:list:start`),D=t(`rue:list:end`);i(T,E),i(T,D);let O=new Map;return n(()=>{O=b({items:a.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(a,o,c,l,d)=>{p(u(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{m(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>p(e,u,d))});let f=s(`td`,c);i(c,f);let h=t(`rue:slot:anchor`);i(f,h),n(()=>{let e=a.description;r(()=>p(e,f,h))});let g=s(`td`,c);i(c,g);let _=s(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>p(e,_,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>p(e,b,x))}),o}),o,c)}})}),c}),B=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,t.checkValidity()?`false`:`true`)},V=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,`true`)},H=e=>{e.preventDefault()},U=()=>u(e=>{let o=s(`form`,e);d(o,`grid gap-2`),a(o,`submit`,H);let c=t(`rue:component:anchor`);i(o,c),p(h(L,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),o,c);let l=t(`rue:component:anchor`);i(o,l),n(()=>{let e=h(L.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});r(()=>p(e,o,l))});let u=t(`rue:component:anchor`);return i(o,u),p(h(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),o,u),o}),ee=()=>u(e=>{let o=s(`form`,e);d(o,`grid gap-2`),a(o,`submit`,H);let c=t(`rue:component:anchor`);i(o,c),p(h(L,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),o,c);let l=t(`rue:component:anchor`);i(o,l),n(()=>{let e=h(L.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});r(()=>p(e,o,l))});let u=t(`rue:component:anchor`);return i(o,u),p(h(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),o,u),o}),te=[{prop:`appearance`,description:`自动补齐 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，旧写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],W=()=>{let{tabBasic:a,tabHosts:c,tabRules:l,tabStatus:f,tabField:m,tabForm:_}=y(`useSetup:0:0`,()=>o(()=>({tabBasic:y(`ref:1:0`,()=>v(`preview`)),tabHosts:y(`ref:1:1`,()=>v(`preview`)),tabRules:y(`ref:1:2`,()=>v(`preview`)),tabStatus:y(`ref:1:3`,()=>v(`preview`)),tabField:y(`ref:1:4`,()=>v(`preview`)),tabForm:y(`ref:1:5`,()=>v(`preview`))})));return u(o=>{let v=e(),y=t(`rue:component:anchor`);return i(v,y),p(h(E,{children:u(()=>{let o=e(),u=s(`div`,o);i(o,u),d(u,`max-w-none prose prose-sm md:prose-base`);let v=s(`h1`,u);i(u,v),i(v,g(`Validator 校验辅助`));let y=s(`p`,u);i(u,y),d(y,`text-sm mt-3 mb-3`),i(y,g(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。原有的`));let b=s(`code`,y);i(y,b),i(b,g(`className="input validator"`)),i(y,g(`写法继续可用，但现在也可以直接通过`));let C=s(`code`,y);i(y,C),i(C,g(`appearance`)),i(y,g(`、`));let T=s(`code`,y);i(y,T),i(T,g(`size`)),i(y,g(`、`));let E=s(`code`,y);i(y,E),i(E,g(`status`)),i(y,g(`和`));let D=s(`code`,y);i(y,D),i(D,g(`Field`)),i(y,g(`组合件来组织更完整的表单场景。`));let O=s(`div`,u);i(u,O),d(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=s(`div`,O);i(O,k);let A=s(`div`,k);i(k,A),d(A,`font-medium text-base-content`),i(A,g(`原生校验优先`));let j=s(`div`,k);i(k,j),d(j,`mt-1 opacity-70`),i(j,g(`继续依赖 required、pattern、minLength 等原生约束。`));let M=s(`div`,O);i(O,M);let N=s(`div`,M);i(M,N),d(N,`font-medium text-base-content`),i(N,g(`语义外观补齐`));let P=s(`div`,M);i(M,P),d(P,`mt-1 opacity-70`),i(P,g(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let F=s(`div`,O);i(O,F);let I=s(`div`,F);i(F,I),d(I,`font-medium text-base-content`),i(I,g(`表单结构复用`));let B=s(`div`,F);i(F,B),d(B,`mt-1 opacity-70`),i(B,g(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=t(`rue:component:anchor`);i(u,V),n(()=>{let e=h(R,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:a,preview:()=>x(`form`,{className:`grid w-full max-w-xs gap-2`,children:[S(L,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),S(L.Hint,{children:`Enter valid email address`}),S(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});r(()=>p(e,u,V))});let H=t(`rue:component:anchor`);i(u,H),n(()=>{let e=h(R,{title:`Different validator hosts`,summary:`保留原有 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:c,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[x(`div`,{className:`grid gap-2`,children:[x(L,{as:`select`,appearance:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`tabs`,children:`Tabs`}),S(`option`,{value:`spaces`,children:`Spaces`})]}),S(L.Hint,{children:`Required`})]}),x(`div`,{className:`grid gap-2`,children:[S(L,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),S(L.Hint,{children:`Required`})]}),x(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(L,{appearance:`checkbox`,type:`checkbox`,required:!0}),S(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),x(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[S(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),S(L,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});r(()=>p(e,u,H))});let W=t(`rue:component:anchor`);i(u,W),n(()=>{let e=h(R,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:l,preview:()=>x(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[S(U,{}),S(ee,{})]}),code:`const syncNativeValidity = (event: Event) => {
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
</form>`});r(()=>p(e,u,W))});let G=t(`rue:component:anchor`);i(u,G),n(()=>{let e=h(R,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:f,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[S(L.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),S(L.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),x(L.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[S(`option`,{children:`Stable`}),S(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});r(()=>p(e,u,G))});let K=t(`rue:component:anchor`);i(u,K),n(()=>{let e=h(R,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:m,preview:()=>x(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[S(L.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),x(L.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[S(`option`,{value:``,children:`Choose:`}),S(`option`,{value:`utc+8`,children:`UTC +8`}),S(`option`,{value:`utc`,children:`UTC`})]}),S(L.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});r(()=>p(e,u,K))});let q=t(`rue:component:anchor`);i(u,q),n(()=>{let e=h(R,{title:`Form recipe`,summary:`把原有散装 demo 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:_,preview:()=>x(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[S(L.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),S(L.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),x(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[S(w,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),S(w,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});r(()=>p(e,u,q))});let J=s(`div`,u);i(u,J),d(J,`my-8 lg:my-12`);let Y=s(`h2`,J);i(J,Y),i(Y,g(`API`));let X=s(`p`,J);i(J,X),d(X,`text-sm opacity-80`),i(X,g(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=t(`rue:component:anchor`);i(J,Z),n(()=>{let e=h(z,{title:`Validator`,rows:te});r(()=>p(e,J,Z))});let Q=t(`rue:component:anchor`);i(J,Q),n(()=>{let e=h(z,{title:`Validator.Hint`,rows:ne});r(()=>p(e,J,Q))});let $=t(`rue:component:anchor`);return i(J,$),n(()=>{let e=h(z,{title:`Validator.Field`,rows:re});r(()=>p(e,J,$))}),o})}),v,y),v})};export{W as default};