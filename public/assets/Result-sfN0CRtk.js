import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p,vt as m,wt as h,xt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as y,o as b}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as x}from"./Code-C5NjdoiC.js";import{t as S}from"./button-CgV0EoO3.js";import{t as C}from"./tabs-C4UF43sZ.js";import{t as w}from"./badge-DmAwNfkt.js";import{r as T}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=e=>e==null?`info`:`${e}`,k=e=>e===`403`||e===`404`||e===`500`,A=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,j=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},M=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},N=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},P=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},F=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},I=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},L=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},R=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},z={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},B=n=>n.status===`success`?a(i=>{let a=u(`svg`,i);r(a,`viewBox`,`0 0 24 24`),r(a,`fill`,`none`),r(a,`stroke`,`currentColor`),r(a,`strokeWidth`,`1.8`),t(()=>{l(a,n.className)}),r(a,`data-rue-result-glyph`,`success`);let o=u(`circle`,a);e(a,o),r(o,`cx`,`12`),r(o,`cy`,`12`),r(o,`r`,`9`);let s=u(`path`,a);return e(a,s),r(s,`strokeLinecap`,`round`),r(s,`strokeLinejoin`,`round`),r(s,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),a}):n.status===`warning`?a(i=>{let a=u(`svg`,i);r(a,`viewBox`,`0 0 24 24`),r(a,`fill`,`none`),r(a,`stroke`,`currentColor`),r(a,`strokeWidth`,`1.8`),t(()=>{l(a,n.className)}),r(a,`data-rue-result-glyph`,`warning`);let o=u(`path`,a);e(a,o),r(o,`strokeLinecap`,`round`),r(o,`strokeLinejoin`,`round`),r(o,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let s=u(`path`,a);e(a,s),r(s,`strokeLinecap`,`round`),r(s,`d`,`M12 9.5v4.8`);let c=u(`circle`,a);return e(a,c),r(c,`cx`,`12`),r(c,`cy`,`16.9`),r(c,`r`,`0.9`),r(c,`fill`,`currentColor`),r(c,`stroke`,`none`),a}):n.status===`error`?a(i=>{let a=u(`svg`,i);r(a,`viewBox`,`0 0 24 24`),r(a,`fill`,`none`),r(a,`stroke`,`currentColor`),r(a,`strokeWidth`,`1.8`),t(()=>{l(a,n.className)}),r(a,`data-rue-result-glyph`,`error`);let o=u(`circle`,a);e(a,o),r(o,`cx`,`12`),r(o,`cy`,`12`),r(o,`r`,`9`);let s=u(`path`,a);return e(a,s),r(s,`strokeLinecap`,`round`),r(s,`d`,`m9 9 6 6M15 9l-6 6`),a}):a(i=>{let a=u(`svg`,i);r(a,`viewBox`,`0 0 24 24`),r(a,`fill`,`none`),r(a,`stroke`,`currentColor`),r(a,`strokeWidth`,`1.8`),t(()=>{l(a,n.className)}),r(a,`data-rue-result-glyph`,`info`);let o=u(`circle`,a);e(a,o),r(o,`cx`,`12`),r(o,`cy`,`12`),r(o,`r`,`9`);let s=u(`path`,a);e(a,s),r(s,`strokeLinecap`,`round`),r(s,`d`,`M12 10.2v5.2`);let c=u(`circle`,a);return e(a,c),r(c,`cx`,`12`),r(c,`cy`,`7.4`),r(c,`r`,`0.9`),r(c,`fill`,`currentColor`),r(c,`stroke`,`none`),a}),V=n=>{let{meta:o}=_(`useSetup:0:0`,()=>c(()=>({meta:z[n.status]})));return a(a=>{let c=u(`div`,a);t(()=>{l(c,E(`relative mx-auto w-full ${R(n.size===void 0?`md`:n.size)}`,n.className))}),t(()=>{let e=n.style;m(c,e)}),t(()=>{r(c,`data-rue-result-illustration`,String(n.status))});let h=u(`div`,c);e(c,h),r(h,`aria-hidden`,`true`),t(()=>{l(h,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${M(n.tone)}`)});let g=u(`div`,c);e(c,g),l(g,`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`);let _=u(`div`,g);e(g,_),r(_,`aria-hidden`,`true`),l(_,`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`);let v=u(`div`,g);e(g,v),r(v,`aria-hidden`,`true`),l(v,`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`);let y=u(`div`,g);e(g,y),l(y,`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`);let b=u(`div`,y);e(y,b),l(b,`flex items-center justify-between gap-3`);let x=u(`span`,b);e(b,x),t(()=>{l(x,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${P(n.tone)}`)});let S=p(`rue:slot:anchor`);e(x,S),t(()=>{let e=o.label;f(()=>s(e,x,S))});let C=u(`span`,b);e(b,C),l(C,`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`),e(C,i(`Rue Result`));let w=u(`div`,y);e(y,w),l(w,`mt-5 flex items-end justify-between gap-4`);let T=u(`div`,w);e(w,T),l(T,`min-w-0`);let D=u(`div`,T);e(T,D),t(()=>{l(D,`text-[4rem] font-black leading-none tracking-[-0.1em] ${N(n.tone)}`)});let O=p(`rue:slot:anchor`);e(D,O),t(()=>{let e=n.status;f(()=>s(e,D,O))});let k=u(`div`,T);e(T,k),l(k,`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`);let A=p(`rue:slot:anchor`);e(k,A),t(()=>{let e=o.scene;f(()=>s(e,k,A))});let j=u(`div`,w);e(w,j),t(()=>{l(j,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${P(n.tone)}`)});let F=p(`rue:component:anchor`);return e(j,F),t(()=>{let e=d(B,{status:n.tone,className:`size-7`});f(()=>s(e,j,F))}),c})},ee=(n,i,c)=>k(n)?a(r=>{let a=o(),l=p(`rue:component:anchor`);return e(a,l),t(()=>{let e=d(V,{status:n,tone:i,size:c});f(()=>s(e,a,l))}),a}):a(n=>{let a=u(`div`,n);t(()=>{l(a,`grid place-items-center border ${P(i)} ${L(c)}`)}),r(a,`data-rue-result-icon`,`true`);let o=p(`rue:component:anchor`);return e(a,o),t(()=>{let e=d(B,{status:i,className:I(c)});f(()=>s(e,a,o))}),a}),H=Object.assign(n=>{let{__rue_rest_omit_0:d,__rue_rest_omit_1:v,__rue_rest_omit_2:y,__rue_rest_omit_3:b,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,__rue_rest_omit_9:N,__rue_rest_omit_10:P,__rue_rest_omit_11:I,__rue_rest_omit_12:L,__rue_rest_omit_13:R,__rue_rest_omit_14:B,__rue_rest_omit_15:V,__rue_rest_omit_16:H,__rue_rest_omit_17:U,__rue_rest_omit_18:W,__rue_rest_omit_19:G,__rue_rest_omit_20:K,__rue_rest_omit_21:q,__rue_rest_omit_22:te,__rue_rest_omit_23:ne,__rue_rest_omit_24:re,__rue_rest_omit_25:ie,rest:J,normalizedStatus:Y,tone:X,exceptionMeta:ae,resolvedTitle:Z,resolvedSubTitle:Q,isIconHidden:$,contentAlignmentClass:oe,titleAlignmentClass:se,extraAlignmentClass:ce,hasBody:le}=_(`useSetup:0:0:dup1`,()=>c(()=>{let{status:e,icon:t,title:r,subTitle:i,extra:a,children:o,variant:s,size:c,align:l,showIcon:u,bordered:d,role:f,className:p,style:m,iconClassName:g,iconStyle:v,contentClassName:y,contentStyle:b,titleClassName:x,titleStyle:S,subTitleClassName:C,subTitleStyle:w,extraClassName:T,extraStyle:E,bodyClassName:j,bodyStyle:M,...N}=n,P=_(`computed:1:0`,()=>h(()=>O(n.status===void 0?`info`:n.status))),F=P,I=_(`computed:1:1`,()=>h(()=>A(F.get()))),L=_(`computed:1:2`,()=>h(()=>k(F.get())?z[F.get()]:void 0)),R=L;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,__rue_rest_omit_14:g,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:w,__rue_rest_omit_22:T,__rue_rest_omit_23:E,__rue_rest_omit_24:j,__rue_rest_omit_25:M,rest:N,normalizedStatus:P,tone:I,exceptionMeta:L,resolvedTitle:_(`computed:1:3`,()=>h(()=>n.title??R.get()?.title)),resolvedSubTitle:_(`computed:1:4`,()=>h(()=>n.subTitle??R.get()?.subTitle)),isIconHidden:_(`computed:1:5`,()=>h(()=>(n.showIcon===void 0?!0:n.showIcon)===!1||n.icon===null||n.icon===!1)),contentAlignmentClass:_(`computed:1:6`,()=>h(()=>(n.align===void 0?`center`:n.align)===`start`?`items-start text-left`:`items-center text-center`)),titleAlignmentClass:_(`computed:1:7`,()=>h(()=>(n.align===void 0?`center`:n.align)===`start`?`items-start text-left`:`items-center text-center`)),extraAlignmentClass:_(`computed:1:8`,()=>h(()=>(n.align===void 0?`center`:n.align)===`start`?`justify-start`:`justify-center`)),hasBody:_(`computed:1:9`,()=>h(()=>D(n.children)))}}));return a(c=>{let d=u(`section`,c);t(()=>{r(d,`role`,String(n.role===void 0?`status`:n.role))}),t(()=>{l(d,E(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(n.align===void 0?`center`:n.align)===`start`?`text-left`:`text-center`} ${j(n.variant===void 0?`surface`:n.variant,n.bordered===void 0?!0:n.bordered)}`,n.className))}),t(()=>{let e=n.style;m(d,e)}),t(()=>{r(d,`data-rue-status`,String(Y.get()))}),t(()=>{r(d,`data-rue-tone`,String(X.get()))}),t(()=>{g(d,J)});let h=u(`div`,d);e(d,h),r(h,`aria-hidden`,`true`),t(()=>{l(h,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${M(X.get())}`)});let _=u(`div`,d);e(d,_),t(()=>{l(_,E(`relative flex w-full flex-col gap-5 ${oe.get()}`,n.contentClassName))}),t(()=>{let e=n.contentStyle;m(_,e)});let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let i=$.get()?``:a(()=>{let i=o(),a=u(`div`,i);e(i,a),t(()=>{l(a,n.iconClassName)}),t(()=>{let e=n.iconStyle;m(a,e)}),r(a,`data-rue-result-icon-slot`,`true`);let c=p(`rue:slot:anchor`);return e(a,c),t(()=>{let e=n.icon!==void 0&&n.icon!==null&&n.icon!==!1?n.icon:ee(Y.get(),X.get(),n.size===void 0?`md`:n.size);f(()=>s(e,a,c))}),i});f(()=>s(i,_,v))}),e(_,i(` `));let y=p(`rue:slot:anchor`);e(_,y),t(()=>{let r=Z.get()!=null||Q.get()!=null?a(()=>{let r=o(),c=u(`div`,r);e(r,c),t(()=>{l(c,`flex w-full max-w-3xl flex-col gap-2 ${se.get()}`)});let d=p(`rue:slot:anchor`);e(c,d),t(()=>{let r=Z.get()==null?``:a(()=>{let r=o(),i=u(`div`,r);e(r,i),t(()=>{l(i,E(`${F(n.size===void 0?`md`:n.size)} font-semibold leading-tight tracking-[-0.02em]`,n.titleClassName))}),t(()=>{let e=n.titleStyle;m(i,e)});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=Z.get();f(()=>s(e,i,a))}),r});f(()=>s(r,c,d))}),e(c,i(` `));let h=p(`rue:slot:anchor`);return e(c,h),t(()=>{let r=Q.get()==null?``:a(()=>{let r=o(),i=u(`div`,r);e(r,i),t(()=>{l(i,E(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,n.subTitleClassName))}),t(()=>{let e=n.subTitleStyle;m(i,e)});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=Q.get();f(()=>s(e,i,a))}),r});f(()=>s(r,c,h))}),r}):``;f(()=>s(r,_,y))}),e(_,i(` `));let b=p(`rue:slot:anchor`);e(_,b),t(()=>{let i=n.extra==null?``:a(()=>{let i=o(),a=u(`div`,i);e(i,a),t(()=>{l(a,E(`flex w-full flex-wrap gap-3 ${ce.get()}`,n.extraClassName))}),t(()=>{let e=n.extraStyle;m(a,e)}),r(a,`data-rue-result-extra`,`true`);let c=p(`rue:slot:anchor`);return e(a,c),t(()=>{let e=n.extra;f(()=>s(e,a,c))}),i});f(()=>s(i,_,b))}),e(_,i(` `));let x=p(`rue:slot:anchor`);return e(_,x),t(()=>{let i=le.get()?a(()=>{let i=o(),a=u(`div`,i);e(i,a),t(()=>{l(a,E(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,n.bodyClassName))}),t(()=>{let e=n.bodyStyle;m(a,e)}),r(a,`data-rue-result-body`,`true`);let c=p(`rue:children:anchor`);return e(a,c),t(()=>{let e=n.children;f(()=>s(e,a,c))}),i}):``;f(()=>s(i,_,x))}),d})},{PRESENTED_IMAGE_403:n=>a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(V,{...n,status:`403`,tone:`warning`});f(()=>s(e,i,a))}),i}),PRESENTED_IMAGE_404:n=>a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(V,{...n,status:`404`,tone:`info`});f(()=>s(e,i,a))}),i}),PRESENTED_IMAGE_500:n=>a(r=>{let i=o(),a=p(`rue:component:anchor`);return e(i,a),t(()=>{let e=d(V,{...n,status:`500`,tone:`error`});f(()=>s(e,i,a))}),i})}),U=n=>a(r=>{let c=u(`div`,r);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=u(`div`,c);e(c,m),l(m,`flex flex-wrap items-start justify-between gap-3`);let h=u(`div`,m);e(m,h);let g=u(`h2`,h);e(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,i(`# `));let _=p(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;f(()=>s(e,g,_))});let v=p(`rue:slot:anchor`);e(h,v),t(()=>{let r=n.summary?a(()=>{let r=o(),i=u(`p`,r);e(r,i),l(i,`m-0 text-sm opacity-70`);let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;f(()=>s(e,i,a))}),r}):``;f(()=>s(r,h,v))});let y=p(`rue:component:anchor`);e(c,y),t(()=>{let e=d(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});f(()=>s(e,c,y))});let b=p(`rue:slot:anchor`);return e(c,b),t(()=>{let r=n.tab.value===`preview`?n.preview():a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(x,{className:`mt-2`,lang:`tsx`,code:n.code});f(()=>s(e,r,i))}),r});f(()=>s(r,c,b))}),c}),W=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let h=u(`thead`,m);e(m,h);let g=u(`tr`,h);e(h,g);let _=u(`th`,g);e(g,_),e(_,i(`属性`));let y=u(`th`,g);e(g,y),e(y,i(`说明`));let b=u(`th`,g);e(g,b),e(b,i(`类型`));let x=u(`th`,g);e(g,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),G=()=>a(t=>{let n=u(`svg`,t);r(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`viewBox`,`0 0 24 24`),r(n,`fill`,`none`),r(n,`stroke`,`currentColor`),r(n,`strokeWidth`,`1.8`),l(n,`size-10`);let i=u(`path`,n);e(n,i),r(i,`strokeLinecap`,`round`),r(i,`strokeLinejoin`,`round`),r(i,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let a=u(`path`,n);e(n,a),r(a,`strokeLinecap`,`round`),r(a,`strokeLinejoin`,`round`),r(a,`d`,`M13.3 5.7 18.2 10.6`);let o=u(`path`,n);e(n,o),r(o,`strokeLinecap`,`round`),r(o,`strokeLinejoin`,`round`),r(o,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let s=u(`circle`,n);return e(n,s),r(s,`cx`,`14.6`),r(s,`cy`,`9.4`),r(s,`r`,`1.3`),n}),K=()=>a(t=>{let n=u(`svg`,t);r(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`viewBox`,`0 0 24 24`),r(n,`fill`,`none`),r(n,`stroke`,`currentColor`),r(n,`strokeWidth`,`1.8`),l(n,`size-10`);let i=u(`circle`,n);e(n,i),r(i,`cx`,`12`),r(i,`cy`,`12`),r(i,`r`,`8.5`);let a=u(`path`,n);return e(n,a),r(a,`strokeLinecap`,`round`),r(a,`strokeLinejoin`,`round`),r(a,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),n}),q=()=>a(t=>{let n=u(`svg`,t);r(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`viewBox`,`0 0 24 24`),r(n,`fill`,`none`),r(n,`stroke`,`currentColor`),r(n,`strokeWidth`,`1.8`),l(n,`size-10`);let i=u(`path`,n);e(n,i),r(i,`strokeLinecap`,`round`),r(i,`strokeLinejoin`,`round`),r(i,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let a=u(`path`,n);e(n,a),r(a,`strokeLinecap`,`round`),r(a,`strokeLinejoin`,`round`),r(a,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let o=u(`path`,n);return e(n,o),r(o,`strokeLinecap`,`round`),r(o,`strokeLinejoin`,`round`),r(o,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),n}),te=`const RocketIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.3 5.7 18.2 10.6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4" />
    <circle cx="14.6" cy="9.4" r="1.3" />
  </svg>
)`,ne=`const CompassIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <circle cx="12" cy="12" r="8.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z" />
  </svg>
)`,re=`const ShieldWaveIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="size-10"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5" />
  </svg>
)`,ie=_(`ref:1:0`,()=>n(`preview`)),J=_(`ref:1:1`,()=>n(`preview`)),Y=_(`ref:1:2`,()=>n(`preview`)),X=_(`ref:1:3`,()=>n(`preview`)),ae=_(`ref:1:4`,()=>n(`preview`)),Z=_(`ref:1:5`,()=>n(`preview`)),Q=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保持边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，支持操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],$=()=>a(n=>{let r=o(),c=p(`rue:component:anchor`);return e(r,c),s(d(T,{children:a(()=>{let n=o(),r=u(`div`,n);e(n,r),l(r,`max-w-none prose prose-sm md:prose-base`);let a=u(`h1`,r);e(r,a),e(a,i(`Result 结果页`));let c=u(`p`,r);e(r,c),l(c,`text-sm mt-3 mb-3`),e(c,i(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let m=u(`p`,r);e(r,m),l(m,`text-sm opacity-75`),e(m,i(`Result 参考成熟结果页组件的能力面，视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let h=p(`rue:component:anchor`);e(r,h),t(()=>{let e=d(U,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:ie,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[y(H,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`当前本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),y(H,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),y(H,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),y(H,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 xl:grid-cols-2">
  <Result
    size="sm"
    status="success"
    title="发布成功"
    subTitle="当前本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。"
  />
  <Result
    size="sm"
    status="info"
    title="等待同步"
    subTitle="任务已经入队，系统会在资源空闲时继续处理。"
  />
  <Result
    size="sm"
    status="warning"
    title="仍需人工确认"
    subTitle="检测到配置变更涉及生产环境，请由值班同学完成最终审核。"
  />
  <Result
    size="sm"
    status="error"
    title="校验失败"
    subTitle="依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。"
  />
</div>
`});f(()=>s(e,r,h))});let g=p(`rue:component:anchor`);e(r,g),t(()=>{let e=d(U,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:J,preview:()=>b(`div`,{className:`grid gap-5`,children:[y(H,{status:403,extra:y(S,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),b(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[y(H,{status:404,size:`sm`,extra:[y(S,{color:`primary`,children:`返回首页`},`home`),y(S,{type:`outlined`,children:`搜索文档`},`search`)]}),y(H,{status:500,size:`sm`,extra:[y(S,{color:`primary`,children:`重试请求`},`retry`),y(S,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

<div className="grid gap-5">
  <Result
    status={403}
    extra={<Button color="primary">申请访问</Button>}
    className="min-h-[26rem]"
  />
  <div className="grid gap-5 xl:grid-cols-2">
    <Result
      status={404}
      size="sm"
      extra={[
        <Button color="primary" key="home">返回首页</Button>,
        <Button type="outlined" key="search">搜索文档</Button>,
      ]}
    />
    <Result
      status={500}
      size="sm"
      extra={[
        <Button color="primary" key="retry">重试请求</Button>,
        <Button type="text" key="log">查看日志</Button>,
      ]}
    />
  </div>
</div>
`});f(()=>s(e,r,g))});let _=p(`rue:component:anchor`);e(r,_),t(()=>{let e=d(U,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:Y,preview:()=>y(H,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[y(S,{color:`primary`,children:`前往控制台`},`console`),y(S,{type:`outlined`,children:`配置快照`},`snapshot`)],children:b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),y(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),b(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,y(w,{color:`success`,children:`HTTPS`})]}),y(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[y(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),b(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[y(`li`,{children:`建议补充管理员手机号`}),y(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

<Result
  status="success"
  title="云主机已开通"
  subTitle="订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。"
  extra={[
    <Button color="primary" key="console">前往控制台</Button>,
    <Button type="outlined" key="snapshot">配置快照</Button>,
  ]}
>
  <div className="grid gap-3 md:grid-cols-3">
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">实例规格</div>
      <div className="mt-2 text-lg font-semibold">4C8G / 华东 2</div>
      <div className="mt-1 text-sm opacity-65">自动扩容策略已启用</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">公网访问</div>
      <div className="mt-2 flex items-center gap-2 text-lg font-semibold">
        已开启
        <Badge color="success">HTTPS</Badge>
      </div>
      <div className="mt-1 text-sm opacity-65">默认指向 preview.rue.dev</div>
    </div>
    <div className="rounded-2xl border border-base-300 bg-base-100 p-4">
      <div className="text-xs uppercase tracking-[0.22em] opacity-55">提醒</div>
      <ul className="mt-2 m-0 pl-5 text-sm leading-7 opacity-80">
        <li>建议补充管理员手机号</li>
        <li>七天后会触发成本周报</li>
      </ul>
    </div>
  </div>
</Result>
`});f(()=>s(e,r,_))});let v=p(`rue:component:anchor`);e(r,v),t(()=>{let e=d(U,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保持标题、动作和补充文案。`,tab:X,preview:()=>b(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[y(H,{status:`info`,icon:y(G,{}),title:`归档任务已排定`,subTitle:`冷数据会在凌晨窗口期分批归档到对象存储，预计耗时 18 分钟。`,extra:y(S,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),y(H,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[y(S,{type:`outlined`,children:`切换分支`},`branch`),y(S,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

${te}

<div className="grid gap-5 xl:grid-cols-2">
  <Result
    status="info"
    icon={<RocketIcon />}
    title="归档任务已排定"
    subTitle="冷数据会在凌晨窗口期分批归档到对象存储，预计耗时 18 分钟。"
    extra={<Button color="primary">查看任务看板</Button>}
    variant="soft"
  />
  <Result
    status="warning"
    showIcon={false}
    title="你正在使用只读副本"
    subTitle="当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。"
    extra={[
      <Button type="outlined" key="branch">切换分支</Button>,
      <Button type="text" key="sandbox">申请沙箱</Button>,
    ]}
    variant="outline"
  />
</div>
`});f(()=>s(e,r,v))});let x=p(`rue:component:anchor`);e(r,x),t(()=>{let e=d(U,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:ae,preview:()=>b(`div`,{className:`grid gap-5`,children:[y(H,{status:`success`,icon:y(q,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),b(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[y(H,{status:`info`,size:`sm`,variant:`soft`,icon:y(K,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:y(S,{color:`primary`,children:`查看接入清单`})}),y(H,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:y(S,{type:`outlined`,children:`打开故障时间线`}),children:b(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[y(`div`,{children:`node-sh-02: checksum mismatch`}),y(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

${ne}

${re}

<div className="grid gap-5">
  <Result
    status="success"
    icon={<ShieldWaveIcon />}
    title="安全基线已更新"
    subTitle="所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。"
    variant="surface"
  />
  <div className="grid gap-5 xl:grid-cols-2">
    <Result
      status="info"
      size="sm"
      variant="soft"
      icon={<CompassIcon />}
      title="推荐下一步：整理路由入口"
      subTitle="新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。"
      align="start"
      extra={<Button color="primary">查看接入清单</Button>}
    />
    <Result
      status="error"
      size="sm"
      variant="outline"
      title="回滚未完成"
      subTitle="2 个节点仍在回滚版本，建议先暂停流量切换，待日志完全一致后再继续。"
      align="start"
      extra={<Button type="outlined">打开故障时间线</Button>}
    >
      <div className="grid gap-2 text-sm leading-7 opacity-80">
        <div>node-sh-02: checksum mismatch</div>
        <div>node-bj-05: waiting runtime restart</div>
      </div>
    </Result>
  </div>
</div>
`});f(()=>s(e,r,x))});let C=p(`rue:component:anchor`);e(r,C),t(()=>{let e=d(U,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Z,preview:()=>b(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[y(H.PRESENTED_IMAGE_403,{size:`sm`}),y(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[y(H.PRESENTED_IMAGE_404,{size:`sm`}),y(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[y(H.PRESENTED_IMAGE_500,{size:`sm`}),y(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 md:grid-cols-3">
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_403 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_403</div>
  </div>
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_404 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_404</div>
  </div>
  <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center">
    <Result.PRESENTED_IMAGE_500 size="sm" />
    <div className="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_500</div>
  </div>
</div>
`});f(()=>s(e,r,C))});let T=u(`h2`,r);e(r,T),l(T,`mt-10`),e(T,i(`API`));let E=p(`rue:component:anchor`);e(r,E),t(()=>{let e=d(W,{rows:Q});f(()=>s(e,r,E))});let D=u(`p`,r);return e(r,D),l(D,`text-sm opacity-70 mt-4`),e(D,i(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),n})}),r,c),r});export{$ as default};