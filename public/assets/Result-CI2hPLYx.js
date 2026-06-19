import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,_t as o,ct as s,et as c,l,mt as u,nt as d,o as f,t as p,tt as m,ut as h,yt as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as x}from"./Code-D5UqTwV6.js";import{t as S}from"./button-CiwrjbTY.js";import{t as C}from"./tabs-DRfs918f.js";import{t as w}from"./badge-DhL0-cBn.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=e=>e==null?`info`:`${e}`,k=e=>e===`403`||e===`404`||e===`500`,A=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,j=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},M=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},N=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},P=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},F=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},I=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},L=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},R=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},z={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},B=e=>e.status===`success`?l(n=>{let r=m(`svg`,n);s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`1.8`),t(()=>{h(r,e.className)}),s(r,`data-rue-result-glyph`,`success`);let i=m(`circle`,r);a(r,i),s(i,`cx`,`12`),s(i,`cy`,`12`),s(i,`r`,`9`);let o=m(`path`,r);return a(r,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),r}):e.status===`warning`?l(n=>{let r=m(`svg`,n);s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`1.8`),t(()=>{h(r,e.className)}),s(r,`data-rue-result-glyph`,`warning`);let i=m(`path`,r);a(r,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let o=m(`path`,r);a(r,o),s(o,`strokeLinecap`,`round`),s(o,`d`,`M12 9.5v4.8`);let c=m(`circle`,r);return a(r,c),s(c,`cx`,`12`),s(c,`cy`,`16.9`),s(c,`r`,`0.9`),s(c,`fill`,`currentColor`),s(c,`stroke`,`none`),r}):e.status===`error`?l(n=>{let r=m(`svg`,n);s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`1.8`),t(()=>{h(r,e.className)}),s(r,`data-rue-result-glyph`,`error`);let i=m(`circle`,r);a(r,i),s(i,`cx`,`12`),s(i,`cy`,`12`),s(i,`r`,`9`);let o=m(`path`,r);return a(r,o),s(o,`strokeLinecap`,`round`),s(o,`d`,`m9 9 6 6M15 9l-6 6`),r}):l(n=>{let r=m(`svg`,n);s(r,`viewBox`,`0 0 24 24`),s(r,`fill`,`none`),s(r,`stroke`,`currentColor`),s(r,`strokeWidth`,`1.8`),t(()=>{h(r,e.className)}),s(r,`data-rue-result-glyph`,`info`);let i=m(`circle`,r);a(r,i),s(i,`cx`,`12`),s(i,`cy`,`12`),s(i,`r`,`9`);let o=m(`path`,r);a(r,o),s(o,`strokeLinecap`,`round`),s(o,`d`,`M12 10.2v5.2`);let c=m(`circle`,r);return a(r,c),s(c,`cx`,`12`),s(c,`cy`,`7.4`),s(c,`r`,`0.9`),s(c,`fill`,`currentColor`),s(c,`stroke`,`none`),r}),V=n=>{let{meta:o}=_(`useSetup:0:0`,()=>i(()=>({meta:z[n.status]})));return l(i=>{let c=m(`div`,i);t(()=>{h(c,E(`relative mx-auto w-full ${R(n.size===void 0?`md`:n.size)}`,n.className))}),t(()=>{let e=n.style;u(c,e)}),t(()=>{s(c,`data-rue-result-illustration`,String(n.status))});let l=m(`div`,c);a(c,l),s(l,`aria-hidden`,`true`),t(()=>{h(l,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${M(n.tone)}`)});let g=m(`div`,c);a(c,g),h(g,`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`);let _=m(`div`,g);a(g,_),s(_,`aria-hidden`,`true`),h(_,`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`);let v=m(`div`,g);a(g,v),s(v,`aria-hidden`,`true`),h(v,`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`);let y=m(`div`,g);a(g,y),h(y,`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`);let b=m(`div`,y);a(y,b),h(b,`flex items-center justify-between gap-3`);let x=m(`span`,b);a(b,x),t(()=>{h(x,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${P(n.tone)}`)});let S=e(`rue:slot:anchor`);a(x,S),t(()=>{let e=o.label;r(()=>f(e,x,S))});let C=m(`span`,b);a(b,C),h(C,`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`),a(C,d(`Rue Result`));let w=m(`div`,y);a(y,w),h(w,`mt-5 flex items-end justify-between gap-4`);let T=m(`div`,w);a(w,T),h(T,`min-w-0`);let D=m(`div`,T);a(T,D),t(()=>{h(D,`text-[4rem] font-black leading-none tracking-[-0.1em] ${N(n.tone)}`)});let O=e(`rue:slot:anchor`);a(D,O),t(()=>{let e=n.status;r(()=>f(e,D,O))});let k=m(`div`,T);a(T,k),h(k,`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`);let A=e(`rue:slot:anchor`);a(k,A),t(()=>{let e=o.scene;r(()=>f(e,k,A))});let j=m(`div`,w);a(w,j),t(()=>{h(j,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${P(n.tone)}`)});let F=e(`rue:component:anchor`);return a(j,F),t(()=>{let e=p(B,{status:n.tone,className:`size-7`});r(()=>f(e,j,F))}),c})},ee=(n,i,o)=>k(n)?l(s=>{let l=c(),u=e(`rue:component:anchor`);return a(l,u),t(()=>{let e=p(V,{status:n,tone:i,size:o});r(()=>f(e,l,u))}),l}):l(n=>{let c=m(`div`,n);t(()=>{h(c,`grid place-items-center border ${P(i)} ${L(o)}`)}),s(c,`data-rue-result-icon`,`true`);let l=e(`rue:component:anchor`);return a(c,l),t(()=>{let e=p(B,{status:i,className:I(o)});r(()=>f(e,c,l))}),c}),H=Object.assign(n=>{let{__rue_rest_omit_0:p,__rue_rest_omit_1:v,__rue_rest_omit_2:y,__rue_rest_omit_3:b,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,__rue_rest_omit_9:N,__rue_rest_omit_10:P,__rue_rest_omit_11:I,__rue_rest_omit_12:L,__rue_rest_omit_13:R,__rue_rest_omit_14:B,__rue_rest_omit_15:V,__rue_rest_omit_16:H,__rue_rest_omit_17:U,__rue_rest_omit_18:W,__rue_rest_omit_19:G,__rue_rest_omit_20:K,__rue_rest_omit_21:q,__rue_rest_omit_22:te,__rue_rest_omit_23:ne,__rue_rest_omit_24:re,__rue_rest_omit_25:ie,rest:J,normalizedStatus:Y,tone:X,exceptionMeta:ae,resolvedTitle:Z,resolvedSubTitle:Q,isIconHidden:$,contentAlignmentClass:oe,titleAlignmentClass:se,extraAlignmentClass:ce,hasBody:le}=_(`useSetup:0:0:dup1`,()=>i(()=>{let{status:e,icon:t,title:r,subTitle:i,extra:a,children:o,variant:s,size:c,align:l,showIcon:u,bordered:d,role:f,className:p,style:m,iconClassName:h,iconStyle:v,contentClassName:y,contentStyle:b,titleClassName:x,titleStyle:S,subTitleClassName:C,subTitleStyle:w,extraClassName:T,extraStyle:E,bodyClassName:j,bodyStyle:M,...N}=n,P=_(`computed:1:0`,()=>g(()=>O(n.status===void 0?`info`:n.status))),F=P,I=_(`computed:1:1`,()=>g(()=>A(F.get()))),L=_(`computed:1:2`,()=>g(()=>k(F.get())?z[F.get()]:void 0)),R=L;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,__rue_rest_omit_8:l,__rue_rest_omit_9:u,__rue_rest_omit_10:d,__rue_rest_omit_11:f,__rue_rest_omit_12:p,__rue_rest_omit_13:m,__rue_rest_omit_14:h,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:w,__rue_rest_omit_22:T,__rue_rest_omit_23:E,__rue_rest_omit_24:j,__rue_rest_omit_25:M,rest:N,normalizedStatus:P,tone:I,exceptionMeta:L,resolvedTitle:_(`computed:1:3`,()=>g(()=>n.title??R.get()?.title)),resolvedSubTitle:_(`computed:1:4`,()=>g(()=>n.subTitle??R.get()?.subTitle)),isIconHidden:_(`computed:1:5`,()=>g(()=>(n.showIcon===void 0?!0:n.showIcon)===!1||n.icon===null||n.icon===!1)),contentAlignmentClass:_(`computed:1:6`,()=>g(()=>(n.align===void 0?`center`:n.align)===`start`?`items-start text-left`:`items-center text-center`)),titleAlignmentClass:_(`computed:1:7`,()=>g(()=>(n.align===void 0?`center`:n.align)===`start`?`items-start text-left`:`items-center text-center`)),extraAlignmentClass:_(`computed:1:8`,()=>g(()=>(n.align===void 0?`center`:n.align)===`start`?`justify-start`:`justify-center`)),hasBody:_(`computed:1:9`,()=>g(()=>D(n.children)))}}));return l(i=>{let p=m(`section`,i);t(()=>{s(p,`role`,String(n.role===void 0?`status`:n.role))}),t(()=>{h(p,E(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(n.align===void 0?`center`:n.align)===`start`?`text-left`:`text-center`} ${j(n.variant===void 0?`surface`:n.variant,n.bordered===void 0?!0:n.bordered)}`,n.className))}),t(()=>{let e=n.style;u(p,e)}),t(()=>{s(p,`data-rue-status`,String(Y.get()))}),t(()=>{s(p,`data-rue-tone`,String(X.get()))}),t(()=>{o(p,J)});let g=m(`div`,p);a(p,g),s(g,`aria-hidden`,`true`),t(()=>{h(g,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${M(X.get())}`)});let _=m(`div`,p);a(p,_),t(()=>{h(_,E(`relative flex w-full flex-col gap-5 ${oe.get()}`,n.contentClassName))}),t(()=>{let e=n.contentStyle;u(_,e)});let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let i=$.get()?``:l(()=>{let i=c(),o=m(`div`,i);a(i,o),t(()=>{h(o,n.iconClassName)}),t(()=>{let e=n.iconStyle;u(o,e)}),s(o,`data-rue-result-icon-slot`,`true`);let l=e(`rue:slot:anchor`);return a(o,l),t(()=>{let e=n.icon!==void 0&&n.icon!==null&&n.icon!==!1?n.icon:ee(Y.get(),X.get(),n.size===void 0?`md`:n.size);r(()=>f(e,o,l))}),i});r(()=>f(i,_,v))}),a(_,d(` `));let y=e(`rue:slot:anchor`);a(_,y),t(()=>{let i=Z.get()!=null||Q.get()!=null?l(()=>{let i=c(),o=m(`div`,i);a(i,o),t(()=>{h(o,`flex w-full max-w-3xl flex-col gap-2 ${se.get()}`)});let s=e(`rue:slot:anchor`);a(o,s),t(()=>{let i=Z.get()==null?``:l(()=>{let i=c(),o=m(`div`,i);a(i,o),t(()=>{h(o,E(`${F(n.size===void 0?`md`:n.size)} font-semibold leading-tight tracking-[-0.02em]`,n.titleClassName))}),t(()=>{let e=n.titleStyle;u(o,e)});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=Z.get();r(()=>f(e,o,s))}),i});r(()=>f(i,o,s))}),a(o,d(` `));let p=e(`rue:slot:anchor`);return a(o,p),t(()=>{let i=Q.get()==null?``:l(()=>{let i=c(),o=m(`div`,i);a(i,o),t(()=>{h(o,E(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,n.subTitleClassName))}),t(()=>{let e=n.subTitleStyle;u(o,e)});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=Q.get();r(()=>f(e,o,s))}),i});r(()=>f(i,o,p))}),i}):``;r(()=>f(i,_,y))}),a(_,d(` `));let b=e(`rue:slot:anchor`);a(_,b),t(()=>{let i=n.extra==null?``:l(()=>{let i=c(),o=m(`div`,i);a(i,o),t(()=>{h(o,E(`flex w-full flex-wrap gap-3 ${ce.get()}`,n.extraClassName))}),t(()=>{let e=n.extraStyle;u(o,e)}),s(o,`data-rue-result-extra`,`true`);let l=e(`rue:slot:anchor`);return a(o,l),t(()=>{let e=n.extra;r(()=>f(e,o,l))}),i});r(()=>f(i,_,b))}),a(_,d(` `));let x=e(`rue:slot:anchor`);return a(_,x),t(()=>{let i=le.get()?l(()=>{let i=c(),o=m(`div`,i);a(i,o),t(()=>{h(o,E(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,n.bodyClassName))}),t(()=>{let e=n.bodyStyle;u(o,e)}),s(o,`data-rue-result-body`,`true`);let l=e(`rue:children:anchor`);return a(o,l),t(()=>{let e=n.children;r(()=>f(e,o,l))}),i}):``;r(()=>f(i,_,x))}),p})},{PRESENTED_IMAGE_403:n=>l(i=>{let o=c(),s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=p(V,{...n,status:`403`,tone:`warning`});r(()=>f(e,o,s))}),o}),PRESENTED_IMAGE_404:n=>l(i=>{let o=c(),s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=p(V,{...n,status:`404`,tone:`info`});r(()=>f(e,o,s))}),o}),PRESENTED_IMAGE_500:n=>l(i=>{let o=c(),s=e(`rue:component:anchor`);return a(o,s),t(()=>{let e=p(V,{...n,status:`500`,tone:`error`});r(()=>f(e,o,s))}),o})}),U=n=>l(i=>{let o=m(`div`,i);h(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=m(`div`,o);a(o,s),h(s,`flex flex-wrap items-start justify-between gap-3`);let u=m(`div`,s);a(s,u);let g=m(`h2`,u);a(u,g),h(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,d(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>f(e,g,_))});let v=e(`rue:slot:anchor`);a(u,v),t(()=>{let i=n.summary?l(()=>{let i=c(),o=m(`p`,i);a(i,o),h(o,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.summary;r(()=>f(e,o,s))}),i}):``;r(()=>f(i,u,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>f(e,o,y))});let b=e(`rue:slot:anchor`);return a(o,b),t(()=>{let i=n.tab.value===`preview`?n.preview():l(()=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>f(e,i,o))}),i});r(()=>f(i,o,b))}),o}),W=n=>l(i=>{let o=m(`div`,i);h(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=m(`table`,o);a(o,u),h(u,`table table-zebra`);let p=m(`thead`,u);a(u,p);let g=m(`tr`,p);a(p,g);let _=m(`th`,g);a(g,_),a(_,d(`属性`));let y=m(`th`,g);a(g,y),a(y,d(`说明`));let b=m(`th`,g);a(g,b),a(b,d(`类型`));let x=m(`th`,g);a(g,x),a(x,d(`默认值`));let S=m(`tbody`,u);a(u,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,u,d)=>{f(l(()=>{let i=c(),o=m(`tr`,i);a(i,o),t(()=>{s(o,`key`,String(n.prop))});let l=m(`td`,o);a(o,l);let u=m(`code`,l);a(l,u);let d=e(`rue:slot:anchor`);a(u,d),t(()=>{let e=n.prop;r(()=>f(e,u,d))});let p=m(`td`,o);a(o,p);let h=e(`rue:slot:anchor`);a(p,h),t(()=>{let e=n.description;r(()=>f(e,p,h))});let g=m(`td`,o);a(o,g);let _=m(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>f(e,_,v))});let y=m(`td`,o);a(o,y);let b=m(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>f(e,b,x))}),i}),i,o)}})}),o}),G=()=>l(e=>{let t=m(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`1.8`),h(t,`size-10`);let n=m(`path`,t);a(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let r=m(`path`,t);a(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M13.3 5.7 18.2 10.6`);let i=m(`path`,t);a(t,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let o=m(`circle`,t);return a(t,o),s(o,`cx`,`14.6`),s(o,`cy`,`9.4`),s(o,`r`,`1.3`),t}),K=()=>l(e=>{let t=m(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`1.8`),h(t,`size-10`);let n=m(`circle`,t);a(t,n),s(n,`cx`,`12`),s(n,`cy`,`12`),s(n,`r`,`8.5`);let r=m(`path`,t);return a(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),t}),q=()=>l(e=>{let t=m(`svg`,e);s(t,`xmlns`,`http://www.w3.org/2000/svg`),s(t,`viewBox`,`0 0 24 24`),s(t,`fill`,`none`),s(t,`stroke`,`currentColor`),s(t,`strokeWidth`,`1.8`),h(t,`size-10`);let n=m(`path`,t);a(t,n),s(n,`strokeLinecap`,`round`),s(n,`strokeLinejoin`,`round`),s(n,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let r=m(`path`,t);a(t,r),s(r,`strokeLinecap`,`round`),s(r,`strokeLinejoin`,`round`),s(r,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let i=m(`path`,t);return a(t,i),s(i,`strokeLinecap`,`round`),s(i,`strokeLinejoin`,`round`),s(i,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),t}),te=`const RocketIcon = () => (
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
)`,ie=_(`ref:1:0`,()=>n(`preview`)),J=_(`ref:1:1`,()=>n(`preview`)),Y=_(`ref:1:2`,()=>n(`preview`)),X=_(`ref:1:3`,()=>n(`preview`)),ae=_(`ref:1:4`,()=>n(`preview`)),Z=_(`ref:1:5`,()=>n(`preview`)),Q=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保留边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，兼容操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],$=()=>l(n=>{let i=c(),o=e(`rue:component:anchor`);return a(i,o),f(p(T,{children:l(()=>{let n=c(),i=m(`div`,n);a(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let o=m(`h1`,i);a(i,o),a(o,d(`Result 结果页`));let s=m(`p`,i);a(i,s),h(s,`text-sm mt-3 mb-3`),a(s,d(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let l=m(`p`,i);a(i,l),h(l,`text-sm opacity-75`),a(l,d(`这次补齐参考了成熟结果页组件的能力面，但视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let u=e(`rue:component:anchor`);a(i,u),t(()=>{let e=p(U,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:ie,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(H,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),b(H,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),b(H,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),b(H,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

<div className="grid gap-4 xl:grid-cols-2">
  <Result
    size="sm"
    status="success"
    title="发布成功"
    subTitle="新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。"
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
`});r(()=>f(e,i,u))});let g=e(`rue:component:anchor`);a(i,g),t(()=>{let e=p(U,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:J,preview:()=>y(`div`,{className:`grid gap-5`,children:[b(H,{status:403,extra:b(S,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:404,size:`sm`,extra:[b(S,{color:`primary`,children:`返回首页`},`home`),b(S,{type:`outlined`,children:`搜索文档`},`search`)]}),b(H,{status:500,size:`sm`,extra:[b(S,{color:`primary`,children:`重试请求`},`retry`),b(S,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});r(()=>f(e,i,g))});let _=e(`rue:component:anchor`);a(i,_),t(()=>{let e=p(U,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:Y,preview:()=>b(H,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[b(S,{color:`primary`,children:`前往控制台`},`console`),b(S,{type:`outlined`,children:`配置快照`},`snapshot`)],children:y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),b(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),y(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,b(w,{color:`success`,children:`HTTPS`})]}),b(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),y(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[b(`li`,{children:`建议补充管理员手机号`}),b(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

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
`});r(()=>f(e,i,_))});let v=e(`rue:component:anchor`);a(i,v),t(()=>{let e=p(U,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保留标题、动作和补充文案。`,tab:X,preview:()=>y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:`info`,icon:b(G,{}),title:`迁移任务已排定`,subTitle:`冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。`,extra:b(S,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),b(H,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[b(S,{type:`outlined`,children:`切换分支`},`branch`),b(S,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

${te}

<div className="grid gap-5 xl:grid-cols-2">
  <Result
    status="info"
    icon={<RocketIcon />}
    title="迁移任务已排定"
    subTitle="冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。"
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
`});r(()=>f(e,i,v))});let x=e(`rue:component:anchor`);a(i,x),t(()=>{let e=p(U,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:ae,preview:()=>y(`div`,{className:`grid gap-5`,children:[b(H,{status:`success`,icon:b(q,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:`info`,size:`sm`,variant:`soft`,icon:b(K,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:b(S,{color:`primary`,children:`查看接入清单`})}),b(H,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:b(S,{type:`outlined`,children:`打开故障时间线`}),children:y(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[b(`div`,{children:`node-sh-02: checksum mismatch`}),b(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
      subTitle="2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。"
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
`});r(()=>f(e,i,x))});let C=e(`rue:component:anchor`);a(i,C),t(()=>{let e=p(U,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Z,preview:()=>y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_403,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_404,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_500,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

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
`});r(()=>f(e,i,C))});let T=m(`h2`,i);a(i,T),h(T,`mt-10`),a(T,d(`API`));let E=e(`rue:component:anchor`);a(i,E),t(()=>{let e=p(W,{rows:Q});r(()=>f(e,i,E))});let D=m(`p`,i);return a(i,D),h(D,`text-sm opacity-70 mt-4`),a(D,d(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),n})}),i,o),i});export{$ as default};