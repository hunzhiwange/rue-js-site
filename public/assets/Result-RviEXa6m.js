import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,gt as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,yt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as x}from"./Code-4SUSUwRg.js";import{t as S}from"./button-COZLI6MM.js";import{t as C}from"./tabs-Duzh3URW.js";import{t as w}from"./badge-rO8-umnf.js";import{r as T}from"./SidebarPlaygroundDesign-EU389JDE.js";var E=(e,t)=>t?`${e} ${t}`:e,D=e=>e==null||e===!1||e===``?!1:Array.isArray(e)?e.some(e=>D(e)):!0,O=e=>e==null?`info`:`${e}`,k=e=>e===`403`||e===`404`||e===`500`,A=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,j=(e,t)=>{let n=``;return e===`soft`?n+=` bg-base-200/60 shadow-inner`:e===`outline`?n+=` bg-base-100/70 shadow-none`:n+=` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,e===`outline`?n+=` border-2 border-base-300/80`:t?n+=` border border-base-300/70`:n+=` border border-transparent`,n.trim()},M=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},N=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},P=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},F=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},I=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},L=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},R=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},z={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},B=e=>e.status===`success`?c(t=>{let r=u(`svg`,t);l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`1.8`),g(()=>{i(r,e.className)}),l(r,`data-rue-result-glyph`,`success`);let a=u(`circle`,r);n(r,a),l(a,`cx`,`12`),l(a,`cy`,`12`),l(a,`r`,`9`);let o=u(`path`,r);return n(r,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),r}):e.status===`warning`?c(t=>{let r=u(`svg`,t);l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`1.8`),g(()=>{i(r,e.className)}),l(r,`data-rue-result-glyph`,`warning`);let a=u(`path`,r);n(r,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let o=u(`path`,r);n(r,o),l(o,`strokeLinecap`,`round`),l(o,`d`,`M12 9.5v4.8`);let s=u(`circle`,r);return n(r,s),l(s,`cx`,`12`),l(s,`cy`,`16.9`),l(s,`r`,`0.9`),l(s,`fill`,`currentColor`),l(s,`stroke`,`none`),r}):e.status===`error`?c(t=>{let r=u(`svg`,t);l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`1.8`),g(()=>{i(r,e.className)}),l(r,`data-rue-result-glyph`,`error`);let a=u(`circle`,r);n(r,a),l(a,`cx`,`12`),l(a,`cy`,`12`),l(a,`r`,`9`);let o=u(`path`,r);return n(r,o),l(o,`strokeLinecap`,`round`),l(o,`d`,`m9 9 6 6M15 9l-6 6`),r}):c(t=>{let r=u(`svg`,t);l(r,`viewBox`,`0 0 24 24`),l(r,`fill`,`none`),l(r,`stroke`,`currentColor`),l(r,`strokeWidth`,`1.8`),g(()=>{i(r,e.className)}),l(r,`data-rue-result-glyph`,`info`);let a=u(`circle`,r);n(r,a),l(a,`cx`,`12`),l(a,`cy`,`12`),l(a,`r`,`9`);let o=u(`path`,r);n(r,o),l(o,`strokeLinecap`,`round`),l(o,`d`,`M12 10.2v5.2`);let s=u(`circle`,r);return n(r,s),l(s,`cx`,`12`),l(s,`cy`,`7.4`),l(s,`r`,`0.9`),l(s,`fill`,`currentColor`),l(s,`stroke`,`none`),r}),V=t=>{let{meta:r}=_(`useSetup:0:0`,()=>s(()=>({meta:z[t.status]})));return c(s=>{let c=u(`div`,s);g(()=>{i(c,E(`relative mx-auto w-full ${R(t.size===void 0?`md`:t.size)}`,t.className))}),g(()=>{let e=t.style;o(c,e)}),g(()=>{l(c,`data-rue-result-illustration`,String(t.status))});let m=u(`div`,c);n(c,m),l(m,`aria-hidden`,`true`),g(()=>{i(m,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${M(t.tone)}`)});let h=u(`div`,c);n(c,h),i(h,`relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner`);let _=u(`div`,h);n(h,_),l(_,`aria-hidden`,`true`),i(_,`absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70`);let v=u(`div`,h);n(h,v),l(v,`aria-hidden`,`true`),i(v,`absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75`);let y=u(`div`,h);n(h,y),i(y,`relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]`);let b=u(`div`,y);n(y,b),i(b,`flex items-center justify-between gap-3`);let x=u(`span`,b);n(b,x),g(()=>{i(x,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${P(t.tone)}`)});let S=a(`rue:slot:anchor`);n(x,S),g(()=>{let t=r.label;e(()=>d(t,x,S))});let C=u(`span`,b);n(b,C),i(C,`text-[0.68rem] uppercase tracking-[0.28em] opacity-50`),n(C,f(`Rue Result`));let w=u(`div`,y);n(y,w),i(w,`mt-5 flex items-end justify-between gap-4`);let T=u(`div`,w);n(w,T),i(T,`min-w-0`);let D=u(`div`,T);n(T,D),g(()=>{i(D,`text-[4rem] font-black leading-none tracking-[-0.1em] ${N(t.tone)}`)});let O=a(`rue:slot:anchor`);n(D,O),g(()=>{let n=t.status;e(()=>d(n,D,O))});let k=u(`div`,T);n(T,k),i(k,`mt-2 max-w-[13rem] text-xs leading-5 opacity-60`);let A=a(`rue:slot:anchor`);n(k,A),g(()=>{let t=r.scene;e(()=>d(t,k,A))});let j=u(`div`,w);n(w,j),g(()=>{i(j,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${P(t.tone)}`)});let F=a(`rue:component:anchor`);return n(j,F),g(()=>{let n=p(B,{status:t.tone,className:`size-7`});e(()=>d(n,j,F))}),c})},ee=(t,r,o)=>k(t)?c(i=>{let s=m(),c=a(`rue:component:anchor`);return n(s,c),g(()=>{let n=p(V,{status:t,tone:r,size:o});e(()=>d(n,s,c))}),s}):c(t=>{let s=u(`div`,t);g(()=>{i(s,`grid place-items-center border ${P(r)} ${L(o)}`)}),l(s,`data-rue-result-icon`,`true`);let c=a(`rue:component:anchor`);return n(s,c),g(()=>{let t=p(B,{status:r,className:I(o)});e(()=>d(t,s,c))}),s}),H=Object.assign(t=>{let{__rue_rest_omit_0:p,__rue_rest_omit_1:v,__rue_rest_omit_2:y,__rue_rest_omit_3:b,__rue_rest_omit_4:x,__rue_rest_omit_5:S,__rue_rest_omit_6:C,__rue_rest_omit_7:w,__rue_rest_omit_8:T,__rue_rest_omit_9:N,__rue_rest_omit_10:P,__rue_rest_omit_11:I,__rue_rest_omit_12:L,__rue_rest_omit_13:R,__rue_rest_omit_14:B,__rue_rest_omit_15:V,__rue_rest_omit_16:H,__rue_rest_omit_17:U,__rue_rest_omit_18:W,__rue_rest_omit_19:G,__rue_rest_omit_20:K,__rue_rest_omit_21:q,__rue_rest_omit_22:te,__rue_rest_omit_23:ne,__rue_rest_omit_24:re,__rue_rest_omit_25:ie,rest:J,normalizedStatus:Y,tone:X,exceptionMeta:ae,resolvedTitle:Z,resolvedSubTitle:Q,isIconHidden:$,contentAlignmentClass:oe,titleAlignmentClass:se,extraAlignmentClass:ce,hasBody:le}=_(`useSetup:0:0:dup1`,()=>s(()=>{let{status:e,icon:n,title:i,subTitle:a,extra:o,children:s,variant:c,size:l,align:u,showIcon:d,bordered:f,role:p,className:m,style:h,iconClassName:g,iconStyle:v,contentClassName:y,contentStyle:b,titleClassName:x,titleStyle:S,subTitleClassName:C,subTitleStyle:w,extraClassName:T,extraStyle:E,bodyClassName:j,bodyStyle:M,...N}=t,P=_(`computed:1:0`,()=>r(()=>O(t.status===void 0?`info`:t.status))),F=P,I=_(`computed:1:1`,()=>r(()=>A(F.get()))),L=_(`computed:1:2`,()=>r(()=>k(F.get())?z[F.get()]:void 0)),R=L;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,__rue_rest_omit_11:p,__rue_rest_omit_12:m,__rue_rest_omit_13:h,__rue_rest_omit_14:g,__rue_rest_omit_15:v,__rue_rest_omit_16:y,__rue_rest_omit_17:b,__rue_rest_omit_18:x,__rue_rest_omit_19:S,__rue_rest_omit_20:C,__rue_rest_omit_21:w,__rue_rest_omit_22:T,__rue_rest_omit_23:E,__rue_rest_omit_24:j,__rue_rest_omit_25:M,rest:N,normalizedStatus:P,tone:I,exceptionMeta:L,resolvedTitle:_(`computed:1:3`,()=>r(()=>t.title??R.get()?.title)),resolvedSubTitle:_(`computed:1:4`,()=>r(()=>t.subTitle??R.get()?.subTitle)),isIconHidden:_(`computed:1:5`,()=>r(()=>(t.showIcon===void 0?!0:t.showIcon)===!1||t.icon===null||t.icon===!1)),contentAlignmentClass:_(`computed:1:6`,()=>r(()=>(t.align===void 0?`center`:t.align)===`start`?`items-start text-left`:`items-center text-center`)),titleAlignmentClass:_(`computed:1:7`,()=>r(()=>(t.align===void 0?`center`:t.align)===`start`?`items-start text-left`:`items-center text-center`)),extraAlignmentClass:_(`computed:1:8`,()=>r(()=>(t.align===void 0?`center`:t.align)===`start`?`justify-start`:`justify-center`)),hasBody:_(`computed:1:9`,()=>r(()=>D(t.children)))}}));return c(r=>{let s=u(`section`,r);g(()=>{l(s,`role`,String(t.role===void 0?`status`:t.role))}),g(()=>{i(s,E(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(t.align===void 0?`center`:t.align)===`start`?`text-left`:`text-center`} ${j(t.variant===void 0?`surface`:t.variant,t.bordered===void 0?!0:t.bordered)}`,t.className))}),g(()=>{let e=t.style;o(s,e)}),g(()=>{l(s,`data-rue-status`,String(Y.get()))}),g(()=>{l(s,`data-rue-tone`,String(X.get()))}),g(()=>{h(s,J)});let p=u(`div`,s);n(s,p),l(p,`aria-hidden`,`true`),g(()=>{i(p,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${M(X.get())}`)});let _=u(`div`,s);n(s,_),g(()=>{i(_,E(`relative flex w-full flex-col gap-5 ${oe.get()}`,t.contentClassName))}),g(()=>{let e=t.contentStyle;o(_,e)});let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let r=$.get()?``:c(()=>{let r=m(),s=u(`div`,r);n(r,s),g(()=>{i(s,t.iconClassName)}),g(()=>{let e=t.iconStyle;o(s,e)}),l(s,`data-rue-result-icon-slot`,`true`);let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let n=t.icon!==void 0&&t.icon!==null&&t.icon!==!1?t.icon:ee(Y.get(),X.get(),t.size===void 0?`md`:t.size);e(()=>d(n,s,c))}),r});e(()=>d(r,_,v))}),n(_,f(` `));let y=a(`rue:slot:anchor`);n(_,y),g(()=>{let r=Z.get()!=null||Q.get()!=null?c(()=>{let r=m(),s=u(`div`,r);n(r,s),g(()=>{i(s,`flex w-full max-w-3xl flex-col gap-2 ${se.get()}`)});let l=a(`rue:slot:anchor`);n(s,l),g(()=>{let r=Z.get()==null?``:c(()=>{let r=m(),s=u(`div`,r);n(r,s),g(()=>{i(s,E(`${F(t.size===void 0?`md`:t.size)} font-semibold leading-tight tracking-[-0.02em]`,t.titleClassName))}),g(()=>{let e=t.titleStyle;o(s,e)});let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let t=Z.get();e(()=>d(t,s,c))}),r});e(()=>d(r,s,l))}),n(s,f(` `));let p=a(`rue:slot:anchor`);return n(s,p),g(()=>{let r=Q.get()==null?``:c(()=>{let r=m(),s=u(`div`,r);n(r,s),g(()=>{i(s,E(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,t.subTitleClassName))}),g(()=>{let e=t.subTitleStyle;o(s,e)});let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let t=Q.get();e(()=>d(t,s,c))}),r});e(()=>d(r,s,p))}),r}):``;e(()=>d(r,_,y))}),n(_,f(` `));let b=a(`rue:slot:anchor`);n(_,b),g(()=>{let r=t.extra==null?``:c(()=>{let r=m(),s=u(`div`,r);n(r,s),g(()=>{i(s,E(`flex w-full flex-wrap gap-3 ${ce.get()}`,t.extraClassName))}),g(()=>{let e=t.extraStyle;o(s,e)}),l(s,`data-rue-result-extra`,`true`);let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let n=t.extra;e(()=>d(n,s,c))}),r});e(()=>d(r,_,b))}),n(_,f(` `));let x=a(`rue:slot:anchor`);return n(_,x),g(()=>{let r=le.get()?c(()=>{let r=m(),s=u(`div`,r);n(r,s),g(()=>{i(s,E(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,t.bodyClassName))}),g(()=>{let e=t.bodyStyle;o(s,e)}),l(s,`data-rue-result-body`,`true`);let c=a(`rue:children:anchor`);return n(s,c),g(()=>{let n=t.children;e(()=>d(n,s,c))}),r}):``;e(()=>d(r,_,x))}),s})},{PRESENTED_IMAGE_403:t=>c(r=>{let i=m(),o=a(`rue:component:anchor`);return n(i,o),g(()=>{let n=p(V,{...t,status:`403`,tone:`warning`});e(()=>d(n,i,o))}),i}),PRESENTED_IMAGE_404:t=>c(r=>{let i=m(),o=a(`rue:component:anchor`);return n(i,o),g(()=>{let n=p(V,{...t,status:`404`,tone:`info`});e(()=>d(n,i,o))}),i}),PRESENTED_IMAGE_500:t=>c(r=>{let i=m(),o=a(`rue:component:anchor`);return n(i,o),g(()=>{let n=p(V,{...t,status:`500`,tone:`error`});e(()=>d(n,i,o))}),i})}),U=t=>c(r=>{let o=u(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,s);n(s,l);let h=u(`h2`,l);n(l,h),i(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(h,f(`# `));let _=a(`rue:slot:anchor`);n(h,_),g(()=>{let n=t.title;e(()=>d(n,h,_))});let v=a(`rue:slot:anchor`);n(l,v),g(()=>{let r=t.summary?c(()=>{let r=m(),o=u(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),g(()=>{let n=t.summary;e(()=>d(n,o,s))}),r}):``;e(()=>d(r,l,v))});let y=a(`rue:component:anchor`);n(o,y),g(()=>{let n=p(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,o,y))});let b=a(`rue:slot:anchor`);return n(o,b),g(()=>{let r=t.tab.value===`preview`?t.preview():c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),g(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,i))}),r});e(()=>d(r,o,b))}),o}),W=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let h=u(`tr`,p);n(p,h);let _=u(`th`,h);n(h,_),n(_,f(`属性`));let y=u(`th`,h);n(h,y),n(y,f(`说明`));let b=u(`th`,h);n(h,b),n(b,f(`类型`));let x=u(`th`,h);n(h,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),g(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>d(n,f,p))});let h=u(`td`,i);n(i,h);let _=u(`code`,h);n(h,_);let v=a(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),G=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`1.8`),i(t,`size-10`);let r=u(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let a=u(`path`,t);n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M13.3 5.7 18.2 10.6`);let o=u(`path`,t);n(t,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let s=u(`circle`,t);return n(t,s),l(s,`cx`,`14.6`),l(s,`cy`,`9.4`),l(s,`r`,`1.3`),t}),K=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`1.8`),i(t,`size-10`);let r=u(`circle`,t);n(t,r),l(r,`cx`,`12`),l(r,`cy`,`12`),l(r,`r`,`8.5`);let a=u(`path`,t);return n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),t}),q=()=>c(e=>{let t=u(`svg`,e);l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`1.8`),i(t,`size-10`);let r=u(`path`,t);n(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let a=u(`path`,t);n(t,a),l(a,`strokeLinecap`,`round`),l(a,`strokeLinejoin`,`round`),l(a,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let o=u(`path`,t);return n(t,o),l(o,`strokeLinecap`,`round`),l(o,`strokeLinejoin`,`round`),l(o,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),t}),te=`const RocketIcon = () => (
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
)`,ie=_(`ref:1:0`,()=>t(`preview`)),J=_(`ref:1:1`,()=>t(`preview`)),Y=_(`ref:1:2`,()=>t(`preview`)),X=_(`ref:1:3`,()=>t(`preview`)),ae=_(`ref:1:4`,()=>t(`preview`)),Z=_(`ref:1:5`,()=>t(`preview`)),Q=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保持边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，支持操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],$=()=>c(t=>{let r=m(),o=a(`rue:component:anchor`);return n(r,o),d(p(T,{children:c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`max-w-none prose prose-sm md:prose-base`);let o=u(`h1`,r);n(r,o),n(o,f(`Result 结果页`));let s=u(`p`,r);n(r,s),i(s,`text-sm mt-3 mb-3`),n(s,f(`Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。`));let c=u(`p`,r);n(r,c),i(c,`text-sm opacity-75`),n(c,f(`Result 参考成熟结果页组件的能力面，视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。`));let l=a(`rue:component:anchor`);n(r,l),g(()=>{let t=p(U,{title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:ie,preview:()=>y(`div`,{className:`grid gap-4 xl:grid-cols-2`,children:[b(H,{size:`sm`,status:`success`,title:`发布成功`,subTitle:`当前本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`}),b(H,{size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`}),b(H,{size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`}),b(H,{size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})]}),code:`import { Result } from '@rue-js/design'

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
`});e(()=>d(t,r,l))});let h=a(`rue:component:anchor`);n(r,h),g(()=>{let t=p(U,{title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:J,preview:()=>y(`div`,{className:`grid gap-5`,children:[b(H,{status:403,extra:b(S,{color:`primary`,children:`申请访问`}),className:`min-h-[26rem]`}),y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:404,size:`sm`,extra:[b(S,{color:`primary`,children:`返回首页`},`home`),b(S,{type:`outlined`,children:`搜索文档`},`search`)]}),b(H,{status:500,size:`sm`,extra:[b(S,{color:`primary`,children:`重试请求`},`retry`),b(S,{type:`text`,children:`查看日志`},`log`)]})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});e(()=>d(t,r,h))});let _=a(`rue:component:anchor`);n(r,_),g(()=>{let t=p(U,{title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:Y,preview:()=>b(H,{status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[b(S,{color:`primary`,children:`前往控制台`},`console`),b(S,{type:`outlined`,children:`配置快照`},`snapshot`)],children:y(`div`,{className:`grid gap-3 md:grid-cols-3`,children:[y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`实例规格`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`4C8G / 华东 2`}),b(`div`,{className:`mt-1 text-sm opacity-65`,children:`自动扩容策略已启用`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`公网访问`}),y(`div`,{className:`mt-2 flex items-center gap-2 text-lg font-semibold`,children:[`已开启`,b(w,{color:`success`,children:`HTTPS`})]}),b(`div`,{className:`mt-1 text-sm opacity-65`,children:`默认指向 preview.rue.dev`})]}),y(`div`,{className:`rounded-2xl border border-base-300 bg-base-100 p-4`,children:[b(`div`,{className:`text-xs uppercase tracking-[0.22em] opacity-55`,children:`提醒`}),y(`ul`,{className:`mt-2 m-0 pl-5 text-sm leading-7 opacity-80`,children:[b(`li`,{children:`建议补充管理员手机号`}),b(`li`,{children:`七天后会触发成本周报`})]})]})]})}),code:`import { Badge, Button, Result } from '@rue-js/design'

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
`});e(()=>d(t,r,_))});let v=a(`rue:component:anchor`);n(r,v),g(()=>{let t=p(U,{title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保持标题、动作和补充文案。`,tab:X,preview:()=>y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:`info`,icon:b(G,{}),title:`归档任务已排定`,subTitle:`冷数据会在凌晨窗口期分批归档到对象存储，预计耗时 18 分钟。`,extra:b(S,{color:`primary`,children:`查看任务看板`}),variant:`soft`}),b(H,{status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[b(S,{type:`outlined`,children:`切换分支`},`branch`),b(S,{type:`text`,children:`申请沙箱`},`sandbox`)],variant:`outline`})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});e(()=>d(t,r,v))});let x=a(`rue:component:anchor`);n(r,x),g(()=>{let t=p(U,{title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:ae,preview:()=>y(`div`,{className:`grid gap-5`,children:[b(H,{status:`success`,icon:b(q,{}),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`}),y(`div`,{className:`grid gap-5 xl:grid-cols-2`,children:[b(H,{status:`info`,size:`sm`,variant:`soft`,icon:b(K,{}),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:b(S,{color:`primary`,children:`查看接入清单`})}),b(H,{status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:b(S,{type:`outlined`,children:`打开故障时间线`}),children:y(`div`,{className:`grid gap-2 text-sm leading-7 opacity-80`,children:[b(`div`,{children:`node-sh-02: checksum mismatch`}),b(`div`,{children:`node-bj-05: waiting runtime restart`})]})})]})]}),code:`import { Button, Result } from '@rue-js/design'

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
`});e(()=>d(t,r,x))});let C=a(`rue:component:anchor`);n(r,C),g(()=>{let t=p(U,{title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Z,preview:()=>y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_403,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_403`})]}),y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_404,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_404`})]}),y(`div`,{className:`rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center`,children:[b(H.PRESENTED_IMAGE_500,{size:`sm`}),b(`div`,{className:`mt-3 text-sm font-medium`,children:`Result.PRESENTED_IMAGE_500`})]})]}),code:`import { Result } from '@rue-js/design'

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
`});e(()=>d(t,r,C))});let T=u(`h2`,r);n(r,T),i(T,`mt-10`),n(T,f(`API`));let E=a(`rue:component:anchor`);n(r,E),g(()=>{let t=p(W,{rows:Q});e(()=>d(t,r,E))});let D=u(`p`,r);return n(r,D),i(D,`text-sm opacity-70 mt-4`),n(D,f(`除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。`)),t})}),r,o),r});export{$ as default};