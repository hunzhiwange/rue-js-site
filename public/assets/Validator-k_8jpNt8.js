import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,wt as _,xt as v}from"./vapor-runtime-x7F5M-49.js";import{a as y,n as b}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./Code-BoXKy3gJ.js";import{n as S,t as C}from"./src-Dlanwp1X.js";import{t as w}from"./button-BaOJ_LfE.js";import{t as T}from"./tabs-C7cPs47_.js";import{r as E}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";var D=[`input`,`select`,`textarea`,`checkbox`,`toggle`],O=(...e)=>e.filter(Boolean).join(` `),k=e=>new Set((e??``).split(/\s+/).map(e=>e.trim()).filter(Boolean)),A=e=>{let t=k(e);return D.find(e=>t.has(e))},j=(e,t,n)=>{if(t)return t;let r=A(n);if(r)return r;if(e===`select`)return`select`;if(e===`textarea`)return`textarea`},M=(e,t)=>e||(t===`select`?`select`:t===`textarea`?`textarea`:`input`),N=(e,t,n,r)=>{let i=k(r);return O(`validator`,e&&!i.has(e)?e:void 0,e&&t&&!i.has(`${e}-${t}`)?`${e}-${t}`:void 0,e&&n&&!i.has(`${e}-${n}`)?`${e}-${n}`:void 0,r)},P=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:s,__rue_rest_omit_5:l,rest:m,resolvedAppearance:b,resolvedHost:x,cls:S}=y(`useSetup:0:0`,()=>d(()=>{let{as:e,appearance:t,size:r,status:i,className:a,children:o,...s}=n,c=y(`computed:1:0`,()=>_(()=>j(n.as,n.appearance,n.className))),l=c;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,rest:s,resolvedAppearance:c,resolvedHost:y(`computed:1:1`,()=>_(()=>M(n.as,l.get()))),cls:y(`computed:1:2`,()=>_(()=>N(l.get(),n.size,n.status,n.className)))}}));return x.get()===`select`?c(r=>{let i=p(`select`,r);t(()=>{v(i,m)}),t(()=>{f(i,S.get())});let a=g(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;h(()=>u(e,i,a))}),i}):x.get()===`textarea`?c(r=>{let i=p(`textarea`,r);t(()=>{v(i,m)}),t(()=>{f(i,S.get())});let a=g(`rue:children:anchor`);return e(i,a),t(()=>{let e=n.children;h(()=>u(e,i,a))}),i}):c(e=>{let n=p(`input`,e);return t(()=>{v(n,m)}),t(()=>{f(n,S.get())}),n})},F=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:m,__rue_rest_omit_3:x,__rue_rest_omit_4:S,rest:C,cls:w,hasLines:T}=y(`useSetup:0:0:dup1`,()=>d(()=>{let{as:e,className:t,children:r,hideUntilInvalid:i,lines:a,...o}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,rest:o,cls:y(`computed:1:3`,()=>_(()=>O(`validator-hint`,n.hideUntilInvalid?`hidden`:void 0,n.className))),hasLines:!!n.lines?.length}}));return(n.as===void 0?`p`:n.as)===`div`?c(r=>{let s=p(`div`,r);t(()=>{v(s,C)}),t(()=>{f(s,w.get())});let d=g(`rue:slot:anchor`);return e(s,d),t(()=>{let r=T?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:(n.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.children;h(()=>u(r,s,d))}),s}):(n.as===void 0?`p`:n.as)===`span`?c(r=>{let s=p(`span`,r);t(()=>{v(s,C)}),t(()=>{f(s,w.get())});let d=g(`rue:slot:anchor`);return e(s,d),t(()=>{let r=T?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:(n.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.children;h(()=>u(r,s,d))}),s}):c(r=>{let s=p(`p`,r);t(()=>{v(s,C)}),t(()=>{f(s,w.get())});let d=g(`rue:slot:anchor`);return e(s,d),t(()=>{let r=T?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:(n.lines??[])||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.children;h(()=>u(r,s,d))}),s})},I=(e,t)=>O(e===`fieldset`?`fieldset gap-2`:`grid gap-2`,t),L=Object.assign(P,{Hint:F,Field:n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:v,__rue_rest_omit_2:x,__rue_rest_omit_3:S,__rue_rest_omit_4:C,__rue_rest_omit_5:w,__rue_rest_omit_6:T,__rue_rest_omit_7:E,__rue_rest_omit_8:D,__rue_rest_omit_9:k,__rue_rest_omit_10:A,__rue_rest_omit_11:j,__rue_rest_omit_12:M,__rue_rest_omit_13:N,rest:L,controlId:R,generatedHintId:z,describedBy:B,showRequiredMark:V,fieldCls:H}=y(`useSetup:0:0:dup2`,()=>d(()=>{let{fieldAs:e,className:t,controlClassName:r,label:i,labelClassName:a,hint:o,hintAs:s,hintClassName:c,hideHintWhenValid:l,extra:u,extraClassName:d,requiredMark:f,id:p,children:m,...h}=n,g=y(`computed:1:4`,()=>_(()=>typeof n.id==`string`&&n.id.trim()?n.id:void 0)),v=g,b=y(`computed:1:5`,()=>_(()=>v.get()&&n.hint!=null&&h[`aria-describedby`]==null?`${v.get()}-hint`:void 0)),x=b;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,rest:h,controlId:g,generatedHintId:b,describedBy:y(`computed:1:6`,()=>_(()=>h[`aria-describedby`]??x.get())),showRequiredMark:y(`computed:1:7`,()=>_(()=>n.requiredMark??h.required===!0)),fieldCls:y(`computed:1:8`,()=>_(()=>I(n.fieldAs===void 0?`fieldset`:n.fieldAs,n.className)))}}));return(n.fieldAs===void 0?`fieldset`:n.fieldAs)===`div`?c(r=>{let d=p(`div`,r);t(()=>{f(d,H.get())});let _=g(`rue:slot:anchor`);e(d,_),t(()=>{let r=n.label==null?``:c(()=>{let r=l(),i=p(`label`,r);e(r,i),t(()=>{f(i,O(`label`,n.labelClassName))}),t(()=>{o(i,`for`,String(R.get()))});let a=p(`span`,i);e(i,a);let d=g(`rue:slot:anchor`);e(a,d),t(()=>{let e=n.label;h(()=>u(e,a,d))});let m=g(`rue:slot:anchor`);return e(i,m),t(()=>{let t=V.get()?c(()=>{let t=l(),n=p(`span`,t);return e(t,n),f(n,`text-error`),o(n,`aria-hidden`,`true`),e(n,s(`*`)),t}):``;h(()=>u(t,i,m))}),r});h(()=>u(r,d,_))});let v=g(`rue:component:anchor`);e(d,v),t(()=>{let e=m(P,{...L,id:R.get(),"aria-describedby":B.get(),className:n.controlClassName,children:n.children});h(()=>u(e,d,v))});let y=g(`rue:slot:anchor`);e(d,y),t(()=>{let r=n.hint==null?``:c(()=>{let r=l(),s=g(`rue:component:anchor`);e(r,s);let d=c(()=>{let r=l(),s=g(`rue:slot:anchor`);return e(r,s),t(()=>{let d=Array.isArray(n.hint)?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:n.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.hint;h(()=>u(d,r,s))}),r});return t(()=>{let e=m(F,{id:z.get(),as:n.hintAs===void 0?`p`:n.hintAs,className:n.hintClassName,hideUntilInvalid:n.hideHintWhenValid,children:d});h(()=>u(e,r,s))}),r});h(()=>u(r,d,y))}),e(d,s(` `));let x=g(`rue:slot:anchor`);return e(d,x),t(()=>{let r=n.extra==null?``:c(()=>{let r=l(),s=p(`p`,r);e(r,s),t(()=>{f(s,O(`label text-xs opacity-70`,n.extraClassName))});let d=g(`rue:slot:anchor`);return e(s,d),t(()=>{let r=Array.isArray(n.extra)?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:n.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.extra;h(()=>u(r,s,d))}),r});h(()=>u(r,d,x))}),d}):c(r=>{let d=p(`fieldset`,r);t(()=>{f(d,H.get())});let _=g(`rue:slot:anchor`);e(d,_),t(()=>{let r=n.label==null?``:c(()=>{let r=l(),i=p(`label`,r);e(r,i),t(()=>{f(i,O(`label`,n.labelClassName))}),t(()=>{o(i,`for`,String(R.get()))});let a=p(`span`,i);e(i,a);let d=g(`rue:slot:anchor`);e(a,d),t(()=>{let e=n.label;h(()=>u(e,a,d))});let m=g(`rue:slot:anchor`);return e(i,m),t(()=>{let t=V.get()?c(()=>{let t=l(),n=p(`span`,t);return e(t,n),f(n,`text-error`),o(n,`aria-hidden`,`true`),e(n,s(`*`)),t}):``;h(()=>u(t,i,m))}),r});h(()=>u(r,d,_))});let v=g(`rue:component:anchor`);e(d,v),t(()=>{let e=m(P,{...L,id:R.get(),"aria-describedby":B.get(),className:n.controlClassName,children:n.children});h(()=>u(e,d,v))});let y=g(`rue:slot:anchor`);e(d,y),t(()=>{let r=n.hint==null?``:c(()=>{let r=l(),s=g(`rue:component:anchor`);e(r,s);let d=c(()=>{let r=l(),s=g(`rue:slot:anchor`);return e(r,s),t(()=>{let d=Array.isArray(n.hint)?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:n.hint||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.hint;h(()=>u(d,r,s))}),r});return t(()=>{let e=m(F,{id:z.get(),as:n.hintAs===void 0?`p`:n.hintAs,className:n.hintClassName,hideUntilInvalid:n.hideHintWhenValid,children:d});h(()=>u(e,r,s))}),r});h(()=>u(r,d,y))}),e(d,s(` `));let x=g(`rue:slot:anchor`);return e(d,x),t(()=>{let r=n.extra==null?``:c(()=>{let r=l(),s=p(`p`,r);e(r,s),t(()=>{f(s,O(`label text-xs opacity-70`,n.extraClassName))});let d=g(`rue:slot:anchor`);return e(s,d),t(()=>{let r=Array.isArray(n.extra)?c(()=>{let r=l(),s=g(`rue:list:start`),d=g(`rue:list:end`);e(r,s),e(r,d);let m=new Map;return t(()=>{m=b({items:n.extra||[],getKey:(e,t)=>`validator-line-${t}`,elements:m,parent:s.parentNode,before:d,singleRoot:!0,start:s,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`span`,r);e(r,s),t(()=>{o(s,`key`,String(`validator-line-${m}`))}),f(s,`block`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),r}):n.extra;h(()=>u(r,s,d))}),r});h(()=>u(r,d,x))}),d})}}),R=n=>c(r=>{let i=p(`div`,r);f(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=p(`div`,i);e(i,a),f(a,`flex flex-wrap items-start justify-between gap-3`);let o=p(`div`,a);e(a,o);let d=p(`h2`,o);e(o,d),f(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(d,s(`# `));let _=g(`rue:slot:anchor`);e(d,_),t(()=>{let e=n.title;h(()=>u(e,d,_))});let v=g(`rue:slot:anchor`);e(o,v),t(()=>{let r=n.summary?c(()=>{let r=l(),i=p(`p`,r);e(r,i),f(i,`m-0 text-sm opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;h(()=>u(e,i,a))}),r}):``;h(()=>u(r,o,v))});let y=g(`rue:component:anchor`);e(i,y),t(()=>{let e=m(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});h(()=>u(e,i,y))});let b=g(`rue:slot:anchor`);return e(i,b),t(()=>{let r=n.tab.value===`preview`?n.preview():c(()=>{let r=l(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(x,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>u(e,r,i))}),r});h(()=>u(r,i,b))}),i}),z=n=>c(r=>{let i=p(`div`,r);f(i,`not-prose my-6 lg:my-8`);let a=p(`h3`,i);e(i,a),f(a,`mt-0 mb-3 text-base font-semibold text-base-content`);let d=g(`rue:slot:anchor`);e(a,d),t(()=>{let e=n.title;h(()=>u(e,a,d))});let m=p(`div`,i);e(i,m),f(m,`overflow-x-auto rounded-box border border-base-300 bg-base-100`);let _=p(`table`,m);e(m,_),f(_,`table table-zebra`);let v=p(`thead`,_);e(_,v);let y=p(`tr`,v);e(v,y);let x=p(`th`,y);e(y,x),e(x,s(`属性`));let S=p(`th`,y);e(y,S),e(S,s(`说明`));let C=p(`th`,y);e(y,C),e(C,s(`类型`));let w=p(`th`,y);e(y,w),e(w,s(`默认值`));let T=p(`tbody`,_);e(_,T);let E=g(`rue:list:start`),D=g(`rue:list:end`);e(T,E),e(T,D);let O=new Map;return t(()=>{O=b({items:n.rows||[],getKey:(e,t)=>e.prop,elements:O,parent:T,before:D,singleRoot:!0,trackIndex:!1,start:E,renderItem:(n,r,i,a,s)=>{u(c(()=>{let r=l(),i=p(`tr`,r);e(r,i),t(()=>{o(i,`key`,String(n.prop))});let a=p(`td`,i);e(i,a);let s=p(`code`,a);e(a,s);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.prop;h(()=>u(e,s,c))});let d=p(`td`,i);e(i,d);let f=g(`rue:slot:anchor`);e(d,f),t(()=>{let e=n.description;h(()=>u(e,d,f))});let m=p(`td`,i);e(i,m);let _=p(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>u(e,_,v))});let y=p(`td`,i);e(i,y);let b=p(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),r}),r,i)}})}),i}),B=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,t.checkValidity()?`false`:`true`)},V=e=>{let t=e.currentTarget;t&&t.setAttribute(`aria-invalid`,`true`)},H=e=>{e.preventDefault()},U=()=>c(n=>{let i=p(`form`,n);f(i,`grid gap-2`),r(i,`submit`,H);let a=g(`rue:component:anchor`);e(i,a),u(m(L,{appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}`,title:`Must include number, lowercase and uppercase letters`,placeholder:`Password`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),i,a);let o=g(`rue:component:anchor`);e(i,o),t(()=>{let e=m(L.Hint,{hideUntilInvalid:!0,lines:[`Must be at least 8 characters`,`Must include number, lowercase and uppercase letters`]});h(()=>u(e,i,o))});let s=g(`rue:component:anchor`);return e(i,s),u(m(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check password`}),i,s),i}),ee=()=>c(n=>{let i=p(`form`,n);f(i,`grid gap-2`),r(i,`submit`,H);let a=g(`rue:component:anchor`);e(i,a),u(m(L,{appearance:`input`,type:`text`,required:!0,minLength:3,maxLength:30,pattern:`[A-Za-z0-9-]+`,title:`Only letters, numbers or dash`,placeholder:`Username`,"aria-invalid":`false`,onInvalid:V,onInput:B,onBlur:B}),i,a);let o=g(`rue:component:anchor`);e(i,o),t(()=>{let e=m(L.Hint,{hideUntilInvalid:!0,lines:[`Must be 3 to 30 characters`,`Only letters, numbers or dash`]});h(()=>u(e,i,o))});let s=g(`rue:component:anchor`);return e(i,s),u(m(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check username`}),i,s),i}),te=[{prop:`appearance`,description:`自动补充 input、select、textarea、checkbox、toggle 这些宿主类名`,type:`'input' | 'select' | 'textarea' | 'checkbox' | 'toggle'`,defaultValue:`-`},{prop:`as`,description:`指定渲染标签，select 和 textarea 会自动推断对应外观`,type:`'input' | 'select' | 'textarea'`,defaultValue:`'input'`},{prop:`className`,description:`追加自定义类名，基础写法仍可继续手动传入 input / select / textarea`,type:`string`,defaultValue:`-`},{prop:`size`,description:`按宿主类型拼接尺寸类，例如 input-lg、checkbox-sm`,type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,defaultValue:`-`},{prop:`status`,description:`手动追加状态类，适合服务端校验或异步反馈场景`,type:`'error' | 'success' | 'warning'`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`className`,description:`追加 hint 的自定义类名`,type:`string`,defaultValue:`-`},{prop:`hideUntilInvalid`,description:`自动追加 hidden 类，让 hint 在无效前不占布局空间`,type:`boolean`,defaultValue:`false`},{prop:`lines`,description:`按多行规则渲染 hint 内容，每一项会单独包成一行`,type:`any[]`,defaultValue:`-`}],re=[{prop:`className`,description:`Field 外层容器类名`,type:`string`,defaultValue:`-`},{prop:`controlClassName`,description:`内部 Validator 控件的类名`,type:`string`,defaultValue:`-`},{prop:`extra`,description:`底部补充说明，会以 label 风格文本渲染`,type:`any`,defaultValue:`-`},{prop:`extraClassName`,description:`extra 区域的类名`,type:`string`,defaultValue:`-`},{prop:`fieldAs`,description:`外层容器标签，默认是 fieldset，也可切到 div`,type:`'fieldset' | 'div'`,defaultValue:`'fieldset'`},{prop:`hint`,description:`快捷生成 Validator.Hint`,type:`any`,defaultValue:`-`},{prop:`hintAs`,description:`快捷生成的 hint 标签`,type:`'div' | 'p' | 'span'`,defaultValue:`'p'`},{prop:`hintClassName`,description:`快捷生成的 hint 类名`,type:`string`,defaultValue:`-`},{prop:`hideHintWhenValid`,description:`等价于给快捷 hint 开启 hideUntilInvalid`,type:`boolean`,defaultValue:`false`},{prop:`label`,description:`快捷生成字段标题，并在传入 id 时自动关联到控件`,type:`any`,defaultValue:`-`},{prop:`labelClassName`,description:`字段标题类名`,type:`string`,defaultValue:`-`},{prop:`requiredMark`,description:`强制展示必填星号，未设置时会跟随 required`,type:`boolean`,defaultValue:`根据 required 推断`}],W=()=>{let{tabBasic:r,tabHosts:i,tabRules:a,tabStatus:o,tabField:_,tabForm:v}=y(`useSetup:0:0`,()=>d(()=>({tabBasic:y(`ref:1:0`,()=>n(`preview`)),tabHosts:y(`ref:1:1`,()=>n(`preview`)),tabRules:y(`ref:1:2`,()=>n(`preview`)),tabStatus:y(`ref:1:3`,()=>n(`preview`)),tabField:y(`ref:1:4`,()=>n(`preview`)),tabForm:y(`ref:1:5`,()=>n(`preview`))})));return c(n=>{let d=l(),y=g(`rue:component:anchor`);return e(d,y),u(m(E,{children:c(()=>{let n=l(),c=p(`div`,n);e(n,c),f(c,`max-w-none prose prose-sm md:prose-base`);let d=p(`h1`,c);e(c,d),e(d,s(`Validator 校验辅助`));let y=p(`p`,c);e(c,y),f(y,`text-sm mt-3 mb-3`),e(y,s(`Validator 仍然只负责把浏览器原生校验结果映射成 Rue 当前的表单视觉，不引入额外校验引擎。基础的`));let b=p(`code`,y);e(y,b),e(b,s(`className="input validator"`)),e(y,s(`写法继续可用，但现在也可以直接通过`));let x=p(`code`,y);e(y,x),e(x,s(`appearance`)),e(y,s(`、`));let T=p(`code`,y);e(y,T),e(T,s(`size`)),e(y,s(`、`));let E=p(`code`,y);e(y,E),e(E,s(`status`)),e(y,s(`和`));let D=p(`code`,y);e(y,D),e(D,s(`Field`)),e(y,s(`组合件来组织更完整的表单场景。`));let O=p(`div`,c);e(c,O),f(O,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-200/70 p-4 text-sm sm:grid-cols-3`);let k=p(`div`,O);e(O,k);let A=p(`div`,k);e(k,A),f(A,`font-medium text-base-content`),e(A,s(`原生校验优先`));let j=p(`div`,k);e(k,j),f(j,`mt-1 opacity-70`),e(j,s(`继续依赖 required、pattern、minLength 等原生约束。`));let M=p(`div`,O);e(O,M);let N=p(`div`,M);e(M,N),f(N,`font-medium text-base-content`),e(N,s(`语义外观补充`));let P=p(`div`,M);e(M,P),f(P,`mt-1 opacity-70`),e(P,s(`用 appearance 直接映射 input、select、toggle 等宿主风格。`));let F=p(`div`,O);e(O,F);let I=p(`div`,F);e(F,I),f(I,`font-medium text-base-content`),e(I,s(`表单结构复用`));let B=p(`div`,F);e(F,B),f(B,`mt-1 opacity-70`),e(B,s(`Field 统一 label、hint、extra 和基础可访问性连线。`));let V=g(`rue:component:anchor`);e(c,V),t(()=>{let e=m(R,{title:`Validator and validator-hint`,summary:`最基础的邮箱校验示例，点击按钮即可触发浏览器原生 required / email 校验和 hint 展示。`,tab:r,preview:()=>S(`form`,{className:`grid w-full max-w-xs gap-2`,children:[C(L,{appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`}),C(L.Hint,{children:`Enter valid email address`}),C(w,{htmlType:`submit`,size:`sm`,className:`w-fit`,children:`Check email`})]}),code:`<form className="grid w-full max-w-xs gap-2">
  <Validator appearance="input" type="email" required={true} placeholder="mail@site.com" />
  <Validator.Hint>Enter valid email address</Validator.Hint>
  <Button htmlType="submit" size="sm" className="w-fit">
    Check email
  </Button>
</form>`});h(()=>u(e,c,V))});let H=g(`rue:component:anchor`);e(c,H),t(()=>{let e=m(R,{title:`Different validator hosts`,summary:`展示基础 select 和 textarea 场景，并补上 checkbox / toggle 这种同样依赖 validator 的宿主。`,tab:i,preview:()=>S(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[S(`div`,{className:`grid gap-2`,children:[S(L,{as:`select`,appearance:`select`,required:!0,children:[C(`option`,{value:``,children:`Choose:`}),C(`option`,{value:`tabs`,children:`Tabs`}),C(`option`,{value:`spaces`,children:`Spaces`})]}),C(L.Hint,{children:`Required`})]}),S(`div`,{className:`grid gap-2`,children:[C(L,{as:`textarea`,appearance:`textarea`,rows:4,placeholder:`Project notes`,required:!0}),C(L.Hint,{children:`Required`})]}),S(`label`,{className:`flex items-center gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[C(L,{appearance:`checkbox`,type:`checkbox`,required:!0}),C(`span`,{className:`text-sm text-base-content`,children:`Accept release checklist`})]}),S(`label`,{className:`flex items-center justify-between gap-3 rounded-box border border-base-300 bg-base-100 px-4 py-3`,children:[C(`span`,{className:`text-sm text-base-content`,children:`Enable deploy gate`}),C(L,{appearance:`toggle`,type:`checkbox`,required:!0})]})]}),code:`<Validator as="select" appearance="select" required={true}>
  <option value="">Choose:</option>
  <option value="tabs">Tabs</option>
  <option value="spaces">Spaces</option>
</Validator>
<Validator.Hint>Required</Validator.Hint>

<Validator as="textarea" appearance="textarea" rows={4} placeholder="Project notes" required={true} />
<Validator.Hint>Required</Validator.Hint>

<Validator appearance="checkbox" type="checkbox" required={true} />
<Validator appearance="toggle" type="checkbox" required={true} />`});h(()=>u(e,c,H))});let W=g(`rue:component:anchor`);e(c,W),t(()=>{let e=m(R,{title:`Hidden hint and rule list`,summary:`提交、失焦或输入时都会同步原生 invalid 状态，隐藏 hint 和多行规则列表现在会在首次校验失败后正确出现。`,tab:a,preview:()=>S(`div`,{className:`grid w-full max-w-3xl gap-4 md:grid-cols-2`,children:[C(U,{}),C(ee,{})]}),code:`const syncNativeValidity = (event: Event) => {
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
</form>`});h(()=>u(e,c,W))});let G=g(`rue:component:anchor`);e(c,G),t(()=>{let e=m(R,{title:`Manual status and size`,summary:`status 适合展示服务端或异步校验反馈；size 则让同一套 Validator 能直接落到不同密度的表单里。`,tab:o,preview:()=>S(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-3`,children:[C(L.Field,{id:`validator-status-error`,label:`Workspace slug`,hint:`Already taken on the edge cluster`,appearance:`input`,size:`sm`,status:`error`,defaultValue:`rue-design`}),C(L.Field,{id:`validator-status-warning`,label:`Notification email`,hint:`MX record is still being verified`,appearance:`input`,status:`warning`,defaultValue:`team@rue.dev`}),S(L.Field,{id:`validator-status-success`,label:`Release channel`,hint:`Synced with the latest deployment policy`,appearance:`select`,as:`select`,size:`lg`,status:`success`,children:[C(`option`,{children:`Stable`}),C(`option`,{children:`Canary`})]})]}),code:`<Validator.Field
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
</Validator.Field>`});h(()=>u(e,c,G))});let K=g(`rue:component:anchor`);e(c,K),t(()=>{let e=m(R,{title:`Field composition`,summary:`Field 适合搭建单个表单项：label、hint、extra 和 aria-describedby 都能一起就位。`,tab:_,preview:()=>S(`div`,{className:`grid w-full max-w-4xl gap-4 md:grid-cols-2`,children:[C(L.Field,{id:`validator-field-email`,label:`Project email`,hint:`Use your workspace mailbox`,extra:`This address is used for deployment notifications.`,appearance:`input`,type:`email`,required:!0,placeholder:`release@rue.dev`,hideHintWhenValid:!0}),S(L.Field,{id:`validator-field-timezone`,label:`Timezone`,hint:`Required`,appearance:`select`,as:`select`,required:!0,children:[C(`option`,{value:``,children:`Choose:`}),C(`option`,{value:`utc+8`,children:`UTC +8`}),C(`option`,{value:`utc`,children:`UTC`})]}),C(L.Field,{id:`validator-field-bio`,label:`Deployment note`,hint:[`Keep it under 140 characters`,`Mention rollback owner if needed`],appearance:`textarea`,as:`textarea`,rows:4,placeholder:`What changed in this release?`,fieldAs:`div`,className:`rounded-box border border-base-300 bg-base-100 p-4`,controlClassName:`w-full`})]}),code:`<Validator.Field
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
`});h(()=>u(e,c,K))});let q=g(`rue:component:anchor`);e(c,q),t(()=>{let e=m(R,{title:`Form recipe`,summary:`把基础散装示例 融合成一个更接近真实业务的登录表单，同时保持 Validator 只负责视觉反馈。`,tab:v,preview:()=>S(`form`,{autocomplete:`off`,className:`grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5`,onSubmit:e=>e.preventDefault(),children:[C(L.Field,{id:`validator-login-email`,label:`Email`,hint:`Required`,appearance:`input`,type:`email`,required:!0,placeholder:`mail@site.com`,hideHintWhenValid:!0}),C(L.Field,{id:`validator-login-password`,label:`Password`,hint:[`At least 8 characters`,`Contains uppercase, lowercase and a number`],appearance:`input`,type:`password`,required:!0,minLength:8,pattern:`(?=.*\\\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}`,placeholder:`Password`,hideHintWhenValid:!0}),S(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:[C(w,{color:`primary`,htmlType:`submit`,block:!0,children:`Login`}),C(w,{type:`text`,htmlType:`reset`,block:!0,children:`Reset`})]})]}),code:`<form className="grid w-full max-w-sm gap-4 rounded-box border border-base-300 bg-base-200 p-5">
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
</form>`});h(()=>u(e,c,q))});let J=p(`div`,c);e(c,J),f(J,`my-8 lg:my-12`);let Y=p(`h2`,J);e(J,Y),e(Y,s(`API`));let X=p(`p`,J);e(J,X),f(X,`text-sm opacity-80`),e(X,s(`Validator 本体负责控件本身的宿主类和状态类，Hint 管理提示文案，Field 则把常见表单项的结构和可访问性连线收敛到一处。`));let Z=g(`rue:component:anchor`);e(J,Z),t(()=>{let e=m(z,{title:`Validator`,rows:te});h(()=>u(e,J,Z))});let Q=g(`rue:component:anchor`);e(J,Q),t(()=>{let e=m(z,{title:`Validator.Hint`,rows:ne});h(()=>u(e,J,Q))});let $=g(`rue:component:anchor`);return e(J,$),t(()=>{let e=m(z,{title:`Validator.Field`,rows:re});h(()=>u(e,J,$))}),n})}),d,y),d})};export{W as default};