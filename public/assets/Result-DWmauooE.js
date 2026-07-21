import{At as e,Cn as t,Ct as n,Lt as r,Nt as i,Tt as a,dt as o,ft as s,mt as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{n as b,t as x}from"./src-CCTNpCXV.js";import{t as S}from"./button-CvwbmGA0.js";import{t as C}from"./tabs-B1XdBEJF.js";import{t as w}from"./badge-B-YHGclR.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>e==null||e===!1||e===``?!1:!Array.isArray(e)||e.some(e=>D(e)),O=e=>e==null?`info`:`${e}`,k=e=>e===`403`||e===`404`||e===`500`,A=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,j=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},M=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},N=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},P=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},F=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},I=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},L=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},R=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},z={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},B=e=>e.status===`success`?m(t=>{let r=u(`svg`,t);n(r,`viewBox`,`0 0 24 24`),n(r,`fill`,`none`),n(r,`stroke`,`currentColor`),n(r,`strokeWidth`,`1.8`),f(()=>{a(r,e.className)}),n(r,`data-rue-result-glyph`,`success`);let i=u(`circle`,r);d(r,i),n(i,`cx`,`12`),n(i,`cy`,`12`),n(i,`r`,`9`);let o=u(`path`,r);return d(r,o),n(o,`strokeLinecap`,`round`),n(o,`strokeLinejoin`,`round`),n(o,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),r}):e.status===`warning`?m(t=>{let r=u(`svg`,t);n(r,`viewBox`,`0 0 24 24`),n(r,`fill`,`none`),n(r,`stroke`,`currentColor`),n(r,`strokeWidth`,`1.8`),f(()=>{a(r,e.className)}),n(r,`data-rue-result-glyph`,`warning`);let i=u(`path`,r);d(r,i),n(i,`strokeLinecap`,`round`),n(i,`strokeLinejoin`,`round`),n(i,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let o=u(`path`,r);d(r,o),n(o,`strokeLinecap`,`round`),n(o,`d`,`M12 9.5v4.8`);let s=u(`circle`,r);return d(r,s),n(s,`cx`,`12`),n(s,`cy`,`16.9`),n(s,`r`,`0.9`),n(s,`fill`,`currentColor`),n(s,`stroke`,`none`),r}):e.status===`error`?m(t=>{let r=u(`svg`,t);n(r,`viewBox`,`0 0 24 24`),n(r,`fill`,`none`),n(r,`stroke`,`currentColor`),n(r,`strokeWidth`,`1.8`),f(()=>{a(r,e.className)}),n(r,`data-rue-result-glyph`,`error`);let i=u(`circle`,r);d(r,i),n(i,`cx`,`12`),n(i,`cy`,`12`),n(i,`r`,`9`);let o=u(`path`,r);return d(r,o),n(o,`strokeLinecap`,`round`),n(o,`d`,`m9 9 6 6M15 9l-6 6`),r}):m(t=>{let r=u(`svg`,t);n(r,`viewBox`,`0 0 24 24`),n(r,`fill`,`none`),n(r,`stroke`,`currentColor`),n(r,`strokeWidth`,`1.8`),f(()=>{a(r,e.className)}),n(r,`data-rue-result-glyph`,`info`);let i=u(`circle`,r);d(r,i),n(i,`cx`,`12`),n(i,`cy`,`12`),n(i,`r`,`9`);let o=u(`path`,r);d(r,o),n(o,`strokeLinecap`,`round`),n(o,`d`,`M12 10.2v5.2`);let s=u(`circle`,r);return d(r,s),n(s,`cx`,`12`),n(s,`cy`,`7.4`),n(s,`r`,`0.9`),n(s,`fill`,`currentColor`),n(s,`stroke`,`none`),r}),V=r=>{let{meta:i}=_(`useSetup:0:0`,()=>t(()=>({meta:z[r.status]})));return m(t=>{let s=u(`div`,t);f(()=>{a(s,E(`relative mx-auto w-full ${R(r.size===void 0?`md`:r.size)}`,r.className))}),f(()=>{let t=r.style;e(s,t)}),f(()=>{n(s,`data-rue-result-illustration`,String(r.status))});let l=u(`div`,s);d(s,l),n(l,`aria-hidden`,`true`),f(()=>{a(l,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${M(r.tone)}`)});let m=u(`div`,s);d(s,m),a(m,`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`);let _=u(`div`,m);d(m,_),n(_,`aria-hidden`,`true`),a(_,`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`);let v=u(`div`,m);d(m,v),n(v,`aria-hidden`,`true`),a(v,`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`);let y=u(`div`,m);d(m,y),a(y,`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`);let b=u(`div`,y);d(y,b),a(b,`flex items-center justify-between gap-3`);let x=u(`span`,b);d(b,x),f(()=>{a(x,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${P(r.tone)}`)});let S=o(`rue:slot:anchor`);d(x,S),f(()=>{let e=i.label;p(()=>h(e,x,S))});let C=u(`span`,b);d(b,C),a(C,`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`),d(C,c(`Rue Result`));let w=u(`div`,y);d(y,w),a(w,`mt-5 flex items-end justify-between gap-4`);let T=u(`div`,w);d(w,T),a(T,`min-w-0`);let D=u(`div`,T);d(T,D),f(()=>{a(D,`text-[4rem] font-black leading-none tracking-[-0.1em] ${N(r.tone)}`)});let O=o(`rue:slot:anchor`);d(D,O),f(()=>{let e=r.status;p(()=>h(e,D,O))});let k=u(`div`,T);d(T,k),a(k,`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`);let A=o(`rue:slot:anchor`);d(k,A),f(()=>{let e=i.scene;p(()=>h(e,k,A))});let j=u(`div`,w);d(w,j),f(()=>{a(j,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${P(r.tone)}`)});let F=o(`rue:component:anchor`);return d(j,F),f(()=>{let e=g(B,{status:r.tone,className:`size-7`});p(()=>h(e,j,F))}),s})},ee=(e,t,r)=>k(e)?m(n=>{let i=s(),a=o(`rue:component:anchor`);return d(i,a),f(()=>{let n=g(V,{status:e,tone:t,size:r});p(()=>h(n,i,a))}),i}):m(e=>{let i=u(`div`,e);f(()=>{a(i,`grid place-items-center border ${P(t)} ${L(r)}`)}),n(i,`data-rue-result-icon`,`true`);let s=o(`rue:component:anchor`);return d(i,s),f(()=>{let e=g(B,{status:t,className:I(r)});p(()=>h(e,i,s))}),i}),H=Object.assign(l=>{let{__rue_rest_omit_0:g,__rue_rest_omit_1:v,__rue_rest_omit_2:y,__rue_rest_omit_3:b,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,__rue_rest_omit_9:N,__rue_rest_omit_10:P,__rue_rest_omit_11:I,__rue_rest_omit_12:L,__rue_rest_omit_13:R,__rue_rest_omit_14:B,__rue_rest_omit_15:V,__rue_rest_omit_16:H,__rue_rest_omit_17:U,__rue_rest_omit_18:W,__rue_rest_omit_19:G,__rue_rest_omit_20:K,__rue_rest_omit_21:q,__rue_rest_omit_22:te,__rue_rest_omit_23:ne,__rue_rest_omit_24:re,__rue_rest_omit_25:ie,rest:J,normalizedStatus:Y,tone:X,exceptionMeta:ae,resolvedTitle:Z,resolvedSubTitle:Q,isIconHidden:$,contentAlignmentClass:oe,titleAlignmentClass:se,extraAlignmentClass:ce,hasBody:le}=_(`useSetup:0:0:dup1`,()=>t(()=>{let{status:e,icon:t,title:n,subTitle:i,extra:a,children:o,variant:s,size:c,align:u,showIcon:d,bordered:f,role:p,className:m,style:h,iconClassName:g,iconStyle:v,contentClassName:y,contentStyle:b,titleClassName:x,titleStyle:S,subTitleClassName:C,subTitleStyle:w,extraClassName:T,extraStyle:E,bodyClassName:j,bodyStyle:M,...N}=l,P=_(`computed:1:0`,()=>r(()=>O(l.status===void 0?`info`:l.status))),F=P,I=_(`computed:1:1`,()=>r(()=>A(F.get()))),L=_(`computed:1:2`,()=>r(()=>k(F.get())?z[F.get()]:void 0)),R=L;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:g,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:w,__rue_rest_omit_22:T,__rue_rest_omit_23:E,__rue_rest_omit_24:j,__rue_rest_omit_25:M,rest:N,normalizedStatus:P,tone:I,exceptionMeta:L,resolvedTitle:_(`computed:1:3`,()=>r(()=>l.title??R.get()?.title)),resolvedSubTitle:_(`computed:1:4`,()=>r(()=>l.subTitle??R.get()?.subTitle)),isIconHidden:_(`computed:1:5`,()=>r(()=>(l.showIcon===void 0||l.showIcon)===!1||l.icon===null||l.icon===!1)),contentAlignmentClass:_(`computed:1:6`,()=>r(()=>(l.align===void 0?`center`:l.align)===`start`?`items-start text-left`:`items-center text-center`)),titleAlignmentClass:_(`computed:1:7`,()=>r(()=>(l.align===void 0?`center`:l.align)===`start`?`items-start text-left`:`items-center text-center`)),extraAlignmentClass:_(`computed:1:8`,()=>r(()=>(l.align===void 0?`center`:l.align)===`start`?`justify-start`:`justify-center`)),hasBody:_(`computed:1:9`,()=>r(()=>D(l.children)))}}));return m(t=>{let r=u(`section`,t);f(()=>{n(r,`role`,String(l.role===void 0?`status`:l.role))}),f(()=>{a(r,E(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(l.align===void 0?`center`:l.align)===`start`?`text-left`:`text-center`} ${j(l.variant===void 0?`surface`:l.variant,l.bordered===void 0||l.bordered)}`,l.className))}),f(()=>{let t=l.style;e(r,t)}),f(()=>{n(r,`data-rue-status`,String(Y.get()))}),f(()=>{n(r,`data-rue-tone`,String(X.get()))}),f(()=>{i(r,J)});let g=u(`div`,r);d(r,g),n(g,`aria-hidden`,`true`),f(()=>{a(g,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${M(X.get())}`)});let _=u(`div`,r);d(r,_),f(()=>{a(_,E(`relative flex w-full flex-col gap-5 ${oe.get()}`,l.contentClassName))}),f(()=>{let t=l.contentStyle;e(_,t)});let v=o(`rue:slot:anchor`);d(_,v),f(()=>{let t=$.get()?``:m(()=>{let t=s(),r=u(`div`,t);d(t,r),f(()=>{a(r,l.iconClassName)}),f(()=>{let t=l.iconStyle;e(r,t)}),n(r,`data-rue-result-icon-slot`,`true`);let i=o(`rue:slot:anchor`);return d(r,i),f(()=>{let e=l.icon!==void 0&&l.icon!==null&&l.icon!==!1?l.icon:ee(Y.get(),X.get(),l.size===void 0?`md`:l.size);p(()=>h(e,r,i))}),t});p(()=>h(t,_,v))}),d(_,c(` `));let y=o(`rue:slot:anchor`);d(_,y),f(()=>{let t=Z.get()!=null||Q.get()!=null?m(()=>{let t=s(),n=u(`div`,t);d(t,n),f(()=>{a(n,`flex w-full max-w-3xl flex-col gap-2 ${se.get()}`)});let r=o(`rue:slot:anchor`);d(n,r),f(()=>{let t=Z.get()==null?``:m(()=>{let t=s(),n=u(`div`,t);d(t,n),f(()=>{a(n,E(`${F(l.size===void 0?`md`:l.size)} font-semibold leading-tight tracking-[-0.02em]`,l.titleClassName))}),f(()=>{let t=l.titleStyle;e(n,t)});let r=o(`rue:slot:anchor`);return d(n,r),f(()=>{let e=Z.get();p(()=>h(e,n,r))}),t});p(()=>h(t,n,r))}),d(n,c(` `));let i=o(`rue:slot:anchor`);return d(n,i),f(()=>{let t=Q.get()==null?``:m(()=>{let t=s(),n=u(`div`,t);d(t,n),f(()=>{a(n,E(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,l.subTitleClassName))}),f(()=>{let t=l.subTitleStyle;e(n,t)});let r=o(`rue:slot:anchor`);return d(n,r),f(()=>{let e=Q.get();p(()=>h(e,n,r))}),t});p(()=>h(t,n,i))}),t}):``;p(()=>h(t,_,y))}),d(_,c(` `));let b=o(`rue:slot:anchor`);d(_,b),f(()=>{let t=l.extra==null?``:m(()=>{let t=s(),r=u(`div`,t);d(t,r),f(()=>{a(r,E(`flex w-full flex-wrap gap-3 ${ce.get()}`,l.extraClassName))}),f(()=>{let t=l.extraStyle;e(r,t)}),n(r,`data-rue-result-extra`,`true`);let i=o(`rue:slot:anchor`);return d(r,i),f(()=>{let e=l.extra;p(()=>h(e,r,i))}),t});p(()=>h(t,_,b))}),d(_,c(` `));let x=o(`rue:slot:anchor`);return d(_,x),f(()=>{let t=le.get()?m(()=>{let t=s(),r=u(`div`,t);d(t,r),f(()=>{a(r,E(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,l.bodyClassName))}),f(()=>{let t=l.bodyStyle;e(r,t)}),n(r,`data-rue-result-body`,`true`);let i=o(`rue:children:anchor`);return d(r,i),f(()=>{let e=l.children;p(()=>h(e,r,i))}),t}):``;p(()=>h(t,_,x))}),r})},{PRESENTED_IMAGE_403:e=>m(t=>{let n=s(),r=o(`rue:component:anchor`);return d(n,r),f(()=>{let t=g(V,{...e,status:`403`,tone:`warning`});p(()=>h(t,n,r))}),n}),PRESENTED_IMAGE_404:e=>m(t=>{let n=s(),r=o(`rue:component:anchor`);return d(n,r),f(()=>{let t=g(V,{...e,status:`404`,tone:`info`});p(()=>h(t,n,r))}),n}),PRESENTED_IMAGE_500:e=>m(t=>{let n=s(),r=o(`rue:component:anchor`);return d(n,r),f(()=>{let t=g(V,{...e,status:`500`,tone:`error`});p(()=>h(t,n,r))}),n})}),U=e=>m(t=>{let n=u(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=u(`div`,n);d(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=u(`div`,r);d(r,i);let l=u(`h2`,i);d(i,l),a(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(l,c(`# `));let _=o(`rue:slot:anchor`);d(l,_),f(()=>{let t=e.title;p(()=>h(t,l,_))});let v=o(`rue:slot:anchor`);d(i,v),f(()=>{let t=e.summary?m(()=>{let t=s(),n=u(`p`,t);d(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return d(n,r),f(()=>{let t=e.summary;p(()=>h(t,n,r))}),t}):``;p(()=>h(t,i,v))});let b=o(`rue:component:anchor`);d(n,b),f(()=>{let t=g(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>h(t,n,b))});let x=o(`rue:slot:anchor`);return d(n,x),f(()=>{let t=e.tab.value===`preview`?e.preview():m(()=>{let t=s(),n=o(`rue:component:anchor`);return d(t,n),f(()=>{let r=g(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>h(r,t,n))}),t});p(()=>h(t,n,x))}),n}),W=e=>m(t=>{let r=u(`div`,t);a(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=u(`table`,r);d(r,i),a(i,`table table-zebra`);let l=u(`thead`,i);d(i,l);let g=u(`tr`,l);d(l,g);let _=u(`th`,g);d(g,_),d(_,c(`属性`));let y=u(`th`,g);d(g,y),d(y,c(`说明`));let b=u(`th`,g);d(g,b),d(b,c(`类型`));let x=u(`th`,g);d(g,x),d(x,c(`默认值`));let S=u(`tbody`,i);d(i,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);d(S,C),d(S,w);let T=new Map;return f(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,a)=>{h(m(()=>{let t=s(),r=u(`tr`,t);d(t,r),f(()=>{n(r,`key`,String(e.prop))});let i=u(`td`,r);d(r,i);let a=u(`code`,i);d(i,a);let c=o(`rue:slot:anchor`);d(a,c),f(()=>{let t=e.prop;p(()=>h(t,a,c))});let l=u(`td`,r);d(r,l);let m=o(`rue:slot:anchor`);d(l,m),f(()=>{let t=e.description;p(()=>h(t,l,m))});let g=u(`td`,r);d(r,g);let _=u(`code`,g);d(g,_);let v=o(`rue:slot:anchor`);d(_,v),f(()=>{let t=e.type;p(()=>h(t,_,v))});let y=u(`td`,r);d(r,y);let b=u(`code`,y);d(y,b);let x=o(`rue:slot:anchor`);return d(b,x),f(()=>{let t=e.defaultValue;p(()=>h(t,b,x))}),t}),t,r)}})}),r}),G=()=>m(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`viewBox`,`0 0 24 24`),n(t,`fill`,`none`),n(t,`stroke`,`currentColor`),n(t,`strokeWidth`,`1.8`),a(t,`size-10`);let r=u(`path`,t);d(t,r),n(r,`strokeLinecap`,`round`),n(r,`strokeLinejoin`,`round`),n(r,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let i=u(`path`,t);d(t,i),n(i,`strokeLinecap`,`round`),n(i,`strokeLinejoin`,`round`),n(i,`d`,`M13.3 5.7 18.2 10.6`);let o=u(`path`,t);d(t,o),n(o,`strokeLinecap`,`round`),n(o,`strokeLinejoin`,`round`),n(o,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let s=u(`circle`,t);return d(t,s),n(s,`cx`,`14.6`),n(s,`cy`,`9.4`),n(s,`r`,`1.3`),t}),K=()=>m(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`viewBox`,`0 0 24 24`),n(t,`fill`,`none`),n(t,`stroke`,`currentColor`),n(t,`strokeWidth`,`1.8`),a(t,`size-10`);let r=u(`circle`,t);d(t,r),n(r,`cx`,`12`),n(r,`cy`,`12`),n(r,`r`,`8.5`);let i=u(`path`,t);return d(t,i),n(i,`strokeLinecap`,`round`),n(i,`strokeLinejoin`,`round`),n(i,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),t}),q=()=>m(e=>{let t=u(`svg`,e);n(t,`xmlns`,`http://www.w3.org/2000/svg`),n(t,`viewBox`,`0 0 24 24`),n(t,`fill`,`none`),n(t,`stroke`,`currentColor`),n(t,`strokeWidth`,`1.8`),a(t,`size-10`);let r=u(`path`,t);d(t,r),n(r,`strokeLinecap`,`round`),n(r,`strokeLinejoin`,`round`),n(r,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let i=u(`path`,t);d(t,i),n(i,`strokeLinecap`,`round`),n(i,`strokeLinejoin`,`round`),n(i,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let o=u(`path`,t);return d(t,o),n(o,`strokeLinecap`,`round`),n(o,`strokeLinejoin`,`round`),n(o,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),t}),te=`const RocketIcon = () => (
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
)`,ie=_(`ref:1:0`,()=>l(`preview`)),J=_(`ref:1:1`,()=>l(`preview`)),Y=_(`ref:1:2`,()=>l(`preview`)),X=_(`ref:1:3`,()=>l(`preview`)),ae=_(`ref:1:4`,()=>l(`preview`)),Z=_(`ref:1:5`,()=>l(`preview`)),Q=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保持边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，支持操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],$=()=>m(e=>{let t=s(),n=o(`rue:component:anchor`);return d(t,n),h(g(T,{children:m(()=>{let e=s(),t=u(`div`,e);d(e,t),a(t,`max-w-none prose prose-sm md:prose-base`);let n=u(`h1`,t);d(t,n),d(n,c(`Result 结果页`));let r=u(`p`,t);d(t,r),a(r,`text-sm mt-3 mb-3`),d(r,c(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let i=u(`p`,t);d(t,i),a(i,`text-sm opacity-75`),d(i,c(`Result 参考成熟结果页组件的能力面，视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let l=o(`rue:component:anchor`);d(t,l),f(()=>{let e=g(U,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:ie,preview:()=>b(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[x(H,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`当前本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),x(H,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),x(H,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),x(H,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

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
`});p(()=>h(e,t,l))});let m=o(`rue:component:anchor`);d(t,m),f(()=>{let e=g(U,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:J,preview:()=>b(`div`,{className:`grid gap-5`,children:[x(H,{status:403,extra:x(S,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),b(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[x(H,{status:404,size:`sm`,extra:[x(S,{color:`primary`,children:`返回首页`},`home`),x(S,{type:`outlined`,children:`搜索文档`},`search`)]}),x(H,{status:500,size:`sm`,extra:[x(S,{color:`primary`,children:`重试请求`},`retry`),x(S,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});p(()=>h(e,t,m))});let _=o(`rue:component:anchor`);d(t,_),f(()=>{let e=g(U,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:Y,preview:()=>x(H,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[x(S,{color:`primary`,children:`前往控制台`},`console`),x(S,{type:`outlined`,children:`配置快照`},`snapshot`)],children:b(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),x(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),x(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),b(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,x(w,{color:`success`,children:`HTTPS`})]}),x(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),b(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[x(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),b(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[x(`li`,{children:`建议补充管理员手机号`}),x(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

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
`});p(()=>h(e,t,_))});let v=o(`rue:component:anchor`);d(t,v),f(()=>{let e=g(U,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保持标题、动作和补充文案。`,tab:X,preview:()=>b(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[x(H,{status:`info`,icon:x(G,{}),title:`归档任务已排定`,subTitle:`冷数据会在凌晨窗口期分批归档到对象存储，预计耗时 18 分钟。`,extra:x(S,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),x(H,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[x(S,{type:`outlined`,children:`切换分支`},`branch`),x(S,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});p(()=>h(e,t,v))});let y=o(`rue:component:anchor`);d(t,y),f(()=>{let e=g(U,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:ae,preview:()=>b(`div`,{className:`grid gap-5`,children:[x(H,{status:`success`,icon:x(q,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),b(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[x(H,{status:`info`,size:`sm`,variant:`soft`,icon:x(K,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:x(S,{color:`primary`,children:`查看接入清单`})}),x(H,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:x(S,{type:`outlined`,children:`打开故障时间线`}),children:b(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[x(`div`,{children:`node-sh-02: checksum mismatch`}),x(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});p(()=>h(e,t,y))});let C=o(`rue:component:anchor`);d(t,C),f(()=>{let e=g(U,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Z,preview:()=>b(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[x(H.PRESENTED_IMAGE_403,{size:`sm`}),x(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[x(H.PRESENTED_IMAGE_404,{size:`sm`}),x(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),b(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[x(H.PRESENTED_IMAGE_500,{size:`sm`}),x(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

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
`});p(()=>h(e,t,C))});let T=u(`h2`,t);d(t,T),a(T,`mt-10`),d(T,c(`API`));let E=o(`rue:component:anchor`);d(t,E),f(()=>{let e=g(W,{rows:Q});p(()=>h(e,t,E))});let D=u(`p`,t);return d(t,D),a(D,`text-sm opacity-70 mt-4`),d(D,c(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),e})}),t,n),t});export{$ as default};