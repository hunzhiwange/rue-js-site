import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,gt as s,l as c,lt as l,o as u,pt as d,st as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./Code-BIscIyEp.js";import{t as S}from"./button-CeShl0h_.js";import{t as C}from"./tabs-CZWMQq5i.js";import{t as w}from"./badge-yUyMWmRO.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=e=>e==null?`info`:`${e}`,k=e=>e===`403`||e===`404`||e===`500`,A=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,j=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},M=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},N=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},P=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},F=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},I=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},L=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},R=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},z={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},B=e=>e.status===`success`?c(t=>{let r=o(`svg`,t);f(r,`viewBox`,`0 0 24 24`),f(r,`fill`,`none`),f(r,`stroke`,`currentColor`),f(r,`strokeWidth`,`1.8`),n(()=>{l(r,e.className)}),f(r,`data-rue-result-glyph`,`success`);let a=o(`circle`,r);i(r,a),f(a,`cx`,`12`),f(a,`cy`,`12`),f(a,`r`,`9`);let s=o(`path`,r);return i(r,s),f(s,`strokeLinecap`,`round`),f(s,`strokeLinejoin`,`round`),f(s,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),r}):e.status===`warning`?c(t=>{let r=o(`svg`,t);f(r,`viewBox`,`0 0 24 24`),f(r,`fill`,`none`),f(r,`stroke`,`currentColor`),f(r,`strokeWidth`,`1.8`),n(()=>{l(r,e.className)}),f(r,`data-rue-result-glyph`,`warning`);let a=o(`path`,r);i(r,a),f(a,`strokeLinecap`,`round`),f(a,`strokeLinejoin`,`round`),f(a,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let s=o(`path`,r);i(r,s),f(s,`strokeLinecap`,`round`),f(s,`d`,`M12 9.5v4.8`);let c=o(`circle`,r);return i(r,c),f(c,`cx`,`12`),f(c,`cy`,`16.9`),f(c,`r`,`0.9`),f(c,`fill`,`currentColor`),f(c,`stroke`,`none`),r}):e.status===`error`?c(t=>{let r=o(`svg`,t);f(r,`viewBox`,`0 0 24 24`),f(r,`fill`,`none`),f(r,`stroke`,`currentColor`),f(r,`strokeWidth`,`1.8`),n(()=>{l(r,e.className)}),f(r,`data-rue-result-glyph`,`error`);let a=o(`circle`,r);i(r,a),f(a,`cx`,`12`),f(a,`cy`,`12`),f(a,`r`,`9`);let s=o(`path`,r);return i(r,s),f(s,`strokeLinecap`,`round`),f(s,`d`,`m9 9 6 6M15 9l-6 6`),r}):c(t=>{let r=o(`svg`,t);f(r,`viewBox`,`0 0 24 24`),f(r,`fill`,`none`),f(r,`stroke`,`currentColor`),f(r,`strokeWidth`,`1.8`),n(()=>{l(r,e.className)}),f(r,`data-rue-result-glyph`,`info`);let a=o(`circle`,r);i(r,a),f(a,`cx`,`12`),f(a,`cy`,`12`),f(a,`r`,`9`);let s=o(`path`,r);i(r,s),f(s,`strokeLinecap`,`round`),f(s,`d`,`M12 10.2v5.2`);let c=o(`circle`,r);return i(r,c),f(c,`cx`,`12`),f(c,`cy`,`7.4`),f(c,`r`,`0.9`),f(c,`fill`,`currentColor`),f(c,`stroke`,`none`),r}),V=e=>{let{meta:s}=_(`useSetup:0:0`,()=>a(()=>({meta:z[e.status]})));return c(a=>{let c=o(`div`,a);n(()=>{l(c,E(`relative mx-auto w-full ${R(e.size===void 0?`md`:e.size)}`,e.className))}),n(()=>{let t=e.style;d(c,t)}),n(()=>{f(c,`data-rue-result-illustration`,String(e.status))});let h=o(`div`,c);i(c,h),f(h,`aria-hidden`,`true`),n(()=>{l(h,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${M(e.tone)}`)});let g=o(`div`,c);i(c,g),l(g,`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`);let _=o(`div`,g);i(g,_),f(_,`aria-hidden`,`true`),l(_,`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`);let v=o(`div`,g);i(g,v),f(v,`aria-hidden`,`true`),l(v,`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`);let y=o(`div`,g);i(g,y),l(y,`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`);let b=o(`div`,y);i(y,b),l(b,`flex items-center justify-between gap-3`);let x=o(`span`,b);i(b,x),n(()=>{l(x,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${P(e.tone)}`)});let S=t(`rue:slot:anchor`);i(x,S),n(()=>{let e=s.label;r(()=>u(e,x,S))});let C=o(`span`,b);i(b,C),l(C,`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`),i(C,m(`Rue Result`));let w=o(`div`,y);i(y,w),l(w,`mt-5 flex items-end justify-between gap-4`);let T=o(`div`,w);i(w,T),l(T,`min-w-0`);let D=o(`div`,T);i(T,D),n(()=>{l(D,`text-[4rem] font-black leading-none tracking-[-0.1em] ${N(e.tone)}`)});let O=t(`rue:slot:anchor`);i(D,O),n(()=>{let t=e.status;r(()=>u(t,D,O))});let k=o(`div`,T);i(T,k),l(k,`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`);let A=t(`rue:slot:anchor`);i(k,A),n(()=>{let e=s.scene;r(()=>u(e,k,A))});let j=o(`div`,w);i(w,j),n(()=>{l(j,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${P(e.tone)}`)});let F=t(`rue:component:anchor`);return i(j,F),n(()=>{let t=p(B,{status:e.tone,className:`size-7`});r(()=>u(t,j,F))}),c})},ee=(a,s,d)=>k(a)?c(o=>{let c=e(),l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=p(V,{status:a,tone:s,size:d});r(()=>u(e,c,l))}),c}):c(e=>{let a=o(`div`,e);n(()=>{l(a,`grid place-items-center border ${P(s)} ${L(d)}`)}),f(a,`data-rue-result-icon`,`true`);let c=t(`rue:component:anchor`);return i(a,c),n(()=>{let e=p(B,{status:s,className:I(d)});r(()=>u(e,a,c))}),a}),H=Object.assign(p=>{let{__rue_rest_omit_0:g,__rue_rest_omit_1:v,__rue_rest_omit_2:y,__rue_rest_omit_3:b,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,__rue_rest_omit_9:N,__rue_rest_omit_10:P,__rue_rest_omit_11:I,__rue_rest_omit_12:L,__rue_rest_omit_13:R,__rue_rest_omit_14:B,__rue_rest_omit_15:V,__rue_rest_omit_16:H,__rue_rest_omit_17:U,__rue_rest_omit_18:W,__rue_rest_omit_19:G,__rue_rest_omit_20:K,__rue_rest_omit_21:q,__rue_rest_omit_22:te,__rue_rest_omit_23:ne,__rue_rest_omit_24:re,__rue_rest_omit_25:ie,rest:J,normalizedStatus:Y,tone:X,exceptionMeta:ae,resolvedTitle:Z,resolvedSubTitle:Q,isIconHidden:$,contentAlignmentClass:oe,titleAlignmentClass:se,extraAlignmentClass:ce,hasBody:le}=_(`useSetup:0:0:dup1`,()=>a(()=>{let{status:e,icon:t,title:n,subTitle:r,extra:i,children:a,variant:o,size:s,align:c,showIcon:l,bordered:u,role:d,className:f,style:m,iconClassName:g,iconStyle:v,contentClassName:y,contentStyle:b,titleClassName:x,titleStyle:S,subTitleClassName:C,subTitleStyle:w,extraClassName:T,extraStyle:E,bodyClassName:j,bodyStyle:M,...N}=p,P=_(`computed:1:0`,()=>h(()=>O(p.status===void 0?`info`:p.status))),F=P,I=_(`computed:1:1`,()=>h(()=>A(F.get()))),L=_(`computed:1:2`,()=>h(()=>k(F.get())?z[F.get()]:void 0)),R=L;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:o,__rue_rest_omit_7:s,__rue_rest_omit_8:c,__rue_rest_omit_9:l,__rue_rest_omit_10:u,__rue_rest_omit_11:d,__rue_rest_omit_12:f,__rue_rest_omit_13:m,__rue_rest_omit_14:g,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:w,__rue_rest_omit_22:T,__rue_rest_omit_23:E,__rue_rest_omit_24:j,__rue_rest_omit_25:M,rest:N,normalizedStatus:P,tone:I,exceptionMeta:L,resolvedTitle:_(`computed:1:3`,()=>h(()=>p.title??R.get()?.title)),resolvedSubTitle:_(`computed:1:4`,()=>h(()=>p.subTitle??R.get()?.subTitle)),isIconHidden:_(`computed:1:5`,()=>h(()=>(p.showIcon===void 0?!0:p.showIcon)===!1||p.icon===null||p.icon===!1)),contentAlignmentClass:_(`computed:1:6`,()=>h(()=>(p.align===void 0?`center`:p.align)===`start`?`items-start text-left`:`items-center text-center`)),titleAlignmentClass:_(`computed:1:7`,()=>h(()=>(p.align===void 0?`center`:p.align)===`start`?`items-start text-left`:`items-center text-center`)),extraAlignmentClass:_(`computed:1:8`,()=>h(()=>(p.align===void 0?`center`:p.align)===`start`?`justify-start`:`justify-center`)),hasBody:_(`computed:1:9`,()=>h(()=>D(p.children)))}}));return c(a=>{let h=o(`section`,a);n(()=>{f(h,`role`,String(p.role===void 0?`status`:p.role))}),n(()=>{l(h,E(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(p.align===void 0?`center`:p.align)===`start`?`text-left`:`text-center`} ${j(p.variant===void 0?`surface`:p.variant,p.bordered===void 0?!0:p.bordered)}`,p.className))}),n(()=>{let e=p.style;d(h,e)}),n(()=>{f(h,`data-rue-status`,String(Y.get()))}),n(()=>{f(h,`data-rue-tone`,String(X.get()))}),n(()=>{s(h,J)});let g=o(`div`,h);i(h,g),f(g,`aria-hidden`,`true`),n(()=>{l(g,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${M(X.get())}`)});let _=o(`div`,h);i(h,_),n(()=>{l(_,E(`relative flex w-full flex-col gap-5 ${oe.get()}`,p.contentClassName))}),n(()=>{let e=p.contentStyle;d(_,e)});let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let a=$.get()?``:c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,p.iconClassName)}),n(()=>{let e=p.iconStyle;d(s,e)}),f(s,`data-rue-result-icon-slot`,`true`);let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=p.icon!==void 0&&p.icon!==null&&p.icon!==!1?p.icon:ee(Y.get(),X.get(),p.size===void 0?`md`:p.size);r(()=>u(e,s,c))}),a});r(()=>u(a,_,v))}),i(_,m(` `));let y=t(`rue:slot:anchor`);i(_,y),n(()=>{let a=Z.get()!=null||Q.get()!=null?c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,`flex w-full max-w-3xl flex-col gap-2 ${se.get()}`)});let f=t(`rue:slot:anchor`);i(s,f),n(()=>{let a=Z.get()==null?``:c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,E(`${F(p.size===void 0?`md`:p.size)} font-semibold leading-tight tracking-[-0.02em]`,p.titleClassName))}),n(()=>{let e=p.titleStyle;d(s,e)});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=Z.get();r(()=>u(e,s,c))}),a});r(()=>u(a,s,f))}),i(s,m(` `));let h=t(`rue:slot:anchor`);return i(s,h),n(()=>{let a=Q.get()==null?``:c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,E(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,p.subTitleClassName))}),n(()=>{let e=p.subTitleStyle;d(s,e)});let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=Q.get();r(()=>u(e,s,c))}),a});r(()=>u(a,s,h))}),a}):``;r(()=>u(a,_,y))}),i(_,m(` `));let b=t(`rue:slot:anchor`);i(_,b),n(()=>{let a=p.extra==null?``:c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,E(`flex w-full flex-wrap gap-3 ${ce.get()}`,p.extraClassName))}),n(()=>{let e=p.extraStyle;d(s,e)}),f(s,`data-rue-result-extra`,`true`);let c=t(`rue:slot:anchor`);return i(s,c),n(()=>{let e=p.extra;r(()=>u(e,s,c))}),a});r(()=>u(a,_,b))}),i(_,m(` `));let x=t(`rue:slot:anchor`);return i(_,x),n(()=>{let a=le.get()?c(()=>{let a=e(),s=o(`div`,a);i(a,s),n(()=>{l(s,E(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,p.bodyClassName))}),n(()=>{let e=p.bodyStyle;d(s,e)}),f(s,`data-rue-result-body`,`true`);let c=t(`rue:children:anchor`);return i(s,c),n(()=>{let e=p.children;r(()=>u(e,s,c))}),a}):``;r(()=>u(a,_,x))}),h})},{PRESENTED_IMAGE_403:a=>c(o=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=p(V,{...a,status:`403`,tone:`warning`});r(()=>u(e,s,c))}),s}),PRESENTED_IMAGE_404:a=>c(o=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=p(V,{...a,status:`404`,tone:`info`});r(()=>u(e,s,c))}),s}),PRESENTED_IMAGE_500:a=>c(o=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=p(V,{...a,status:`500`,tone:`error`});r(()=>u(e,s,c))}),s})}),U=a=>c(s=>{let d=o(`div`,s);l(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=o(`div`,d);i(d,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,f);i(f,h);let g=o(`h2`,h);i(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,m(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>u(e,g,_))});let v=t(`rue:slot:anchor`);i(h,v),n(()=>{let s=a.summary?c(()=>{let s=e(),c=o(`p`,s);i(s,c),l(c,`m-0 text-sm opacity-70`);let d=t(`rue:slot:anchor`);return i(c,d),n(()=>{let e=a.summary;r(()=>u(e,c,d))}),s}):``;r(()=>u(s,h,v))});let y=t(`rue:component:anchor`);i(d,y),n(()=>{let e=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>u(e,d,y))});let b=t(`rue:slot:anchor`);return i(d,b),n(()=>{let o=a.tab.value===`preview`?a.preview():c(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>u(e,o,s))}),o});r(()=>u(o,d,b))}),d}),W=a=>c(s=>{let d=o(`div`,s);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=o(`table`,d);i(d,p),l(p,`table table-zebra`);let h=o(`thead`,p);i(p,h);let g=o(`tr`,h);i(h,g);let _=o(`th`,g);i(g,_),i(_,m(`属性`));let y=o(`th`,g);i(g,y),i(y,m(`说明`));let b=o(`th`,g);i(g,b),i(b,m(`类型`));let x=o(`th`,g);i(g,x),i(x,m(`默认值`));let S=o(`tbody`,p);i(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,d,p)=>{u(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{f(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let d=o(`code`,l);i(l,d);let p=t(`rue:slot:anchor`);i(d,p),n(()=>{let e=a.prop;r(()=>u(e,d,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>u(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>u(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>u(e,b,x))}),s}),s,l)}})}),d}),G=()=>c(e=>{let t=o(`svg`,e);f(t,`xmlns`,`http://www.w3.org/2000/svg`),f(t,`viewBox`,`0 0 24 24`),f(t,`fill`,`none`),f(t,`stroke`,`currentColor`),f(t,`strokeWidth`,`1.8`),l(t,`size-10`);let n=o(`path`,t);i(t,n),f(n,`strokeLinecap`,`round`),f(n,`strokeLinejoin`,`round`),f(n,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let r=o(`path`,t);i(t,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M13.3 5.7 18.2 10.6`);let a=o(`path`,t);i(t,a),f(a,`strokeLinecap`,`round`),f(a,`strokeLinejoin`,`round`),f(a,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let s=o(`circle`,t);return i(t,s),f(s,`cx`,`14.6`),f(s,`cy`,`9.4`),f(s,`r`,`1.3`),t}),K=()=>c(e=>{let t=o(`svg`,e);f(t,`xmlns`,`http://www.w3.org/2000/svg`),f(t,`viewBox`,`0 0 24 24`),f(t,`fill`,`none`),f(t,`stroke`,`currentColor`),f(t,`strokeWidth`,`1.8`),l(t,`size-10`);let n=o(`circle`,t);i(t,n),f(n,`cx`,`12`),f(n,`cy`,`12`),f(n,`r`,`8.5`);let r=o(`path`,t);return i(t,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),t}),q=()=>c(e=>{let t=o(`svg`,e);f(t,`xmlns`,`http://www.w3.org/2000/svg`),f(t,`viewBox`,`0 0 24 24`),f(t,`fill`,`none`),f(t,`stroke`,`currentColor`),f(t,`strokeWidth`,`1.8`),l(t,`size-10`);let n=o(`path`,t);i(t,n),f(n,`strokeLinecap`,`round`),f(n,`strokeLinejoin`,`round`),f(n,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let r=o(`path`,t);i(t,r),f(r,`strokeLinecap`,`round`),f(r,`strokeLinejoin`,`round`),f(r,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let a=o(`path`,t);return i(t,a),f(a,`strokeLinecap`,`round`),f(a,`strokeLinejoin`,`round`),f(a,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),t}),te=`const RocketIcon = () => (
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
)`,ie=_(`ref:1:0`,()=>g(`preview`)),J=_(`ref:1:1`,()=>g(`preview`)),Y=_(`ref:1:2`,()=>g(`preview`)),X=_(`ref:1:3`,()=>g(`preview`)),ae=_(`ref:1:4`,()=>g(`preview`)),Z=_(`ref:1:5`,()=>g(`preview`)),Q=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保留边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，兼容操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],$=()=>c(a=>{let s=e(),d=t(`rue:component:anchor`);return i(s,d),u(p(T,{children:c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`max-w-none prose prose-sm md:prose-base`);let c=o(`h1`,s);i(s,c),i(c,m(`Result 结果页`));let d=o(`p`,s);i(s,d),l(d,`text-sm mt-3 mb-3`),i(d,m(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let f=o(`p`,s);i(s,f),l(f,`text-sm opacity-75`),i(f,m(`这次补齐参考了成熟结果页组件的能力面，但视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let h=t(`rue:component:anchor`);i(s,h),n(()=>{let e=p(U,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:ie,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(H,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`新版本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),b(H,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),b(H,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),b(H,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

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
`});r(()=>u(e,s,h))});let g=t(`rue:component:anchor`);i(s,g),n(()=>{let e=p(U,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:J,preview:()=>y(`div`,{className:`grid gap-5`,children:[b(H,{status:403,extra:b(S,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:404,size:`sm`,extra:[b(S,{color:`primary`,children:`返回首页`},`home`),b(S,{type:`outlined`,children:`搜索文档`},`search`)]}),b(H,{status:500,size:`sm`,extra:[b(S,{color:`primary`,children:`重试请求`},`retry`),b(S,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});r(()=>u(e,s,g))});let _=t(`rue:component:anchor`);i(s,_),n(()=>{let e=p(U,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:Y,preview:()=>b(H,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[b(S,{color:`primary`,children:`前往控制台`},`console`),b(S,{type:`outlined`,children:`配置快照`},`snapshot`)],children:y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),b(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),y(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,b(w,{color:`success`,children:`HTTPS`})]}),b(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),y(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[b(`li`,{children:`建议补充管理员手机号`}),b(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

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
`});r(()=>u(e,s,_))});let v=t(`rue:component:anchor`);i(s,v),n(()=>{let e=p(U,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保留标题、动作和补充文案。`,tab:X,preview:()=>y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:`info`,icon:b(G,{}),title:`迁移任务已排定`,subTitle:`冷数据会在凌晨窗口期分批迁移到对象存储，预计耗时 18 分钟。`,extra:b(S,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),b(H,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[b(S,{type:`outlined`,children:`切换分支`},`branch`),b(S,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});r(()=>u(e,s,v))});let x=t(`rue:component:anchor`);i(s,x),n(()=>{let e=p(U,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:ae,preview:()=>y(`div`,{className:`grid gap-5`,children:[b(H,{status:`success`,icon:b(q,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:`info`,size:`sm`,variant:`soft`,icon:b(K,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:b(S,{color:`primary`,children:`查看接入清单`})}),b(H,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚旧版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:b(S,{type:`outlined`,children:`打开故障时间线`}),children:y(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[b(`div`,{children:`node-sh-02: checksum mismatch`}),b(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});r(()=>u(e,s,x))});let C=t(`rue:component:anchor`);i(s,C),n(()=>{let e=p(U,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Z,preview:()=>y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_403,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_404,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_500,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

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
`});r(()=>u(e,s,C))});let T=o(`h2`,s);i(s,T),l(T,`mt-10`),i(T,m(`API`));let E=t(`rue:component:anchor`);i(s,E),n(()=>{let e=p(W,{rows:Q});r(()=>u(e,s,E))});let D=o(`p`,s);return i(s,D),l(D,`text-sm opacity-70 mt-4`),i(D,m(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),a})}),s,d),s});export{$ as default};