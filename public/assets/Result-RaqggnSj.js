import{B as e,Bt as t,C as n,Et as r,H as i,K as a,Kt as o,L as s,S as c,V as l,W as u,X as d,Y as f,_n as p,_t as m,b as h,bn as g,dt as _,fn as v,gn as y,hn as b,ht as x,kn as S,mn as C,mt as w,nt as T,ot as E,pn as D,q as O,qt as k,rt as A,tt as j,vn as M,wn as N,x as P,z as F}from"./rue-runtime-CwEGJ854.js";import{t as I}from"./Code-DUvGro8N.js";import{t as L}from"./button-BlvcsWE0.js";import{t as ee}from"./tabs-DUviBzjL.js";import{t as R}from"./badge-Lxy6ry0O.js";import{r as z}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var B=p(`<div><div aria-hidden="true"></div><div class="relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner"><div aria-hidden="true" class="absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70"></div><div aria-hidden="true" class="absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75"></div><div class="relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]"><div class="flex items-center justify-between gap-3"><span><!--rue:text-hole:0--></span><span class="text-[0.68rem] uppercase tracking-[0.28em] opacity-50">Rue Result</span></div><div class="mt-5 flex items-end justify-between gap-4"><div class="min-w-0"><div><!--rue:text-hole:1--></div><div class="mt-2 max-w-[13rem] text-xs leading-5 opacity-60"><!--rue:text-hole:2--></div></div><div><!--rue:opaque-hole:3--></div></div></div></div></div>`),V=p(`<div data-rue-result-icon="true"><!--rue:opaque-hole:0--></div>`),te=p(`<section><div aria-hidden="true"></div><div><!--rue:text-hole:0--><!--rue:text-hole:1--><!--rue:text-hole:2--><!--rue:text-hole:3--></div></section>`),H=(e,t)=>t?`${e} ${t}`:e,ne=e=>e==null||e===!1||e===``?!1:!Array.isArray(e)||e.some(e=>ne(e)),re=e=>e==null?`info`:`${e}`,ie=e=>e===`403`||e===`404`||e===`500`,ae=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,oe=(e,t)=>{let n=``;return n+=e===`soft`?` bg-base-200/60 shadow-inner`:e===`outline`?` bg-base-100/70 shadow-none`:` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,n+=e===`outline`?` border-2 border-base-300/80`:t?` border border-base-300/70`:` border border-transparent`,n.trim()},se=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},U=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},W=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},ce=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},le=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},ue=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},G=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},de={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},K=t=>{let n=u(t.className),r=u(t.status);return O(e(()=>r.get()===`success`?{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>x(e=>{let t=A(`svg`,e);E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),N(()=>{s(t,n.get())}),E(t,`data-rue-result-glyph`,`success`);let r=A(`circle`,t);d(t,r),E(r,`cx`,`12`),E(r,`cy`,`12`),E(r,`r`,`9`);let i=A(`path`,t);return d(t,i),E(i,`strokeLinecap`,`round`),E(i,`strokeLinejoin`,`round`),E(i,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),t})}:r.get()===`warning`?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>x(e=>{let t=A(`svg`,e);E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),N(()=>{s(t,n.get())}),E(t,`data-rue-result-glyph`,`warning`);let r=A(`path`,t);d(t,r),E(r,`strokeLinecap`,`round`),E(r,`strokeLinejoin`,`round`),E(r,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let i=A(`path`,t);d(t,i),E(i,`strokeLinecap`,`round`),E(i,`d`,`M12 9.5v4.8`);let a=A(`circle`,t);return d(t,a),E(a,`cx`,`12`),E(a,`cy`,`16.9`),E(a,`r`,`0.9`),E(a,`fill`,`currentColor`),E(a,`stroke`,`none`),t})}:r.get()===`error`?{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>x(e=>{let t=A(`svg`,e);E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),N(()=>{s(t,n.get())}),E(t,`data-rue-result-glyph`,`error`);let r=A(`circle`,t);d(t,r),E(r,`cx`,`12`),E(r,`cy`,`12`),E(r,`r`,`9`);let i=A(`path`,t);return d(t,i),E(i,`strokeLinecap`,`round`),E(i,`d`,`m9 9 6 6M15 9l-6 6`),t})}:{__rue_compiled_branch_key:3,__rue_compiled_branch_refresh:!0,create:()=>x(e=>{let t=A(`svg`,e);E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),N(()=>{s(t,n.get())}),E(t,`data-rue-result-glyph`,`info`);let r=A(`circle`,t);d(t,r),E(r,`cx`,`12`),E(r,`cy`,`12`),E(r,`r`,`9`);let i=A(`path`,t);d(t,i),E(i,`strokeLinecap`,`round`),E(i,`d`,`M12 10.2v5.2`);let a=A(`circle`,t);return d(t,a),E(a,`cx`,`12`),E(a,`cy`,`7.4`),E(a,`r`,`0.9`),E(a,`fill`,`currentColor`),E(a,`stroke`,`none`),t})}),e=>F(()=>{n.set(e.className),r.set(e.status)}),()=>t)},q=e=>{let t=u(e.className),n=u(e.size),r=u(e.status),i=u(e.style),o=u(e.tone),c=de[r.get()];return O(x(()=>{let e=T(),l=B().content.cloneNode(!0),u=l.firstChild,d=u,p=u.childNodes[0],m=u.childNodes[1].childNodes[2].childNodes[0].childNodes[0],h=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0],g=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1],v=u.childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0],y=v.parentNode,b=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0],x=b.parentNode,w=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[0],D=w.parentNode,O=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],k=O.parentNode;e.appendChild(l),N(()=>{s(d,H(`relative mx-auto w-full ${G(n.get()===void 0?`md`:n.get())}`,t.get()))}),N(()=>{let e=i.get();_(d,e)}),N(()=>{E(d,`data-rue-result-illustration`,String(r.get()))}),E(p,`aria-hidden`,`true`),N(()=>{s(p,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${se(o.get())}`)}),N(()=>{s(m,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${W(o.get())}`)}),N(()=>{s(h,`text-[4rem] font-black leading-none tracking-[-0.1em] ${U(o.get())}`)}),N(()=>{s(g,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${W(o.get())}`)}),N(()=>{let e=c.label;S(()=>f(e,y,v))}),N(()=>{let e=r.get();S(()=>f(e,x,b))}),N(()=>{let e=c.scene;S(()=>f(e,D,w))});let A=C(k);return a(A,K,()=>({status:o.get(),className:`size-7`})),k.insertBefore(A,O),e},!0),e=>F(()=>{t.set(e.className),n.set(e.size),r.set(e.status),i.set(e.style),o.set(e.tone)}),()=>e)},fe=o((e,t,n)=>ie(e)?i(q,()=>({status:e,tone:t,size:n})):r(Object.assign(e=>{let r=V().content.cloneNode(!0).firstChild,i=r,o=r.childNodes[0],s=o.parentNode,c;N(()=>{let e=`grid place-items-center border ${W(t)} ${ue(n)}`,r=e==null?``:String(e);Object.is(c,r)||(c=r,i.className=r)}),i.setAttribute(`data-rue-result-icon`,`true`);let l=C(s);return a(l,K,()=>({status:t,className:le(n)})),s.insertBefore(l,o),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),J=o(e=>i(q,()=>({...e,status:`403`,tone:`warning`}))),pe=o(e=>i(q,()=>({...e,status:`404`,tone:`info`}))),Y=o(e=>i(q,()=>({...e,status:`500`,tone:`error`}))),X=Object.assign(e=>{let t=u(e.align),n=u(e.bodyClassName),i=u(e.bodyStyle),a=u(e.bordered),o=u(e.children),c=u(e.className),p=u(e.contentClassName),m=u(e.contentStyle),C=u(e.extra),k=u(e.extraClassName),P=u(e.extraStyle),I=u(e.icon),L=u(e.iconClassName),ee=u(e.iconStyle),R=u(e.role),z=u(e.showIcon),B=u(e.size),V=u(e.status),U=u(e.style),W=u(e.subTitle),le=u(e.subTitleClassName),ue=u(e.subTitleStyle),G=u(e.title),K=u(e.titleClassName),q=u(e.titleStyle),J=u(e.variant),pe=u(M(e,`align.bodyClassName.bodyStyle.bordered.children.className.contentClassName.contentStyle.extra.extraClassName.extraStyle.icon.iconClassName.iconStyle.role.showIcon.size.status.style.subTitle.subTitleClassName.subTitleStyle.title.titleClassName.titleStyle.variant`.split(`.`))),Y=re(V.get()===void 0?`info`:V.get()),X=ae(Y),me=ie(Y)?de[Y]:void 0,Z=G.get()??me?.title,Q=W.get()??me?.subTitle,he=(z.get()===void 0||z.get())===!1||I.get()===null||I.get()===!1,ge=(t.get()===void 0?`center`:t.get())===`start`?`items-start text-left`:`items-center text-center`,_e=(t.get()===void 0?`center`:t.get())===`start`?`items-start text-left`:`items-center text-center`,ve=(t.get()===void 0?`center`:t.get())===`start`?`justify-start`:`justify-center`,ye=ne(o.get());return O(x(()=>{let e=T(),u=te().content.cloneNode(!0),O=u.firstChild,M=O,F=O.childNodes[0],z=O.childNodes[1],V=O.childNodes[1].childNodes[0],ne=V.parentNode,re=O.childNodes[1].childNodes[1],ie=re.parentNode,ae=O.childNodes[1].childNodes[2],W=ae.parentNode,G=O.childNodes[1].childNodes[3],de=G.parentNode;return e.appendChild(u),N(()=>{E(M,`role`,String(R.get()===void 0?`status`:R.get()))}),N(()=>{s(M,H(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(t.get()===void 0?`center`:t.get())===`start`?`text-left`:`text-center`} ${oe(J.get()===void 0?`surface`:J.get(),a.get()===void 0||a.get())}`,c.get()))}),N(()=>{let e=U.get();_(M,e)}),N(()=>{E(M,`data-rue-status`,String(Y))}),N(()=>{E(M,`data-rue-tone`,String(X))}),N(()=>{w(M,pe.get(),[])}),E(F,`aria-hidden`,`true`),N(()=>{s(F,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${se(X)}`)}),N(()=>{s(z,H(`relative flex w-full flex-col gap-5 ${ge}`,p.get()))}),N(()=>{let e=m.get();_(z,e)}),N(()=>{let e=he?``:x(()=>{let e=T(),t=A(`div`,e);d(e,t),N(()=>{s(t,L.get())}),N(()=>{let e=ee.get();_(t,e)}),E(t,`data-rue-result-icon-slot`,`true`);let n=j(`rue:slot:anchor`);return d(t,n),N(()=>{let e=I.get()!==void 0&&I.get()!==null&&I.get()!==!1?I.get():fe(Y,X,B.get()===void 0?`md`:B.get());S(()=>f(e,t,n))}),e},!0);S(()=>f(e,ne,V))}),N(()=>{let e=Z!=null||Q!=null?x(()=>{let e=T(),t=A(`div`,e);d(e,t),N(()=>{s(t,`flex w-full max-w-3xl flex-col gap-2 ${_e}`)});let n=j(`rue:slot:anchor`);d(t,n),N(()=>{let e=Z==null?``:x(()=>{let e=T(),t=A(`div`,e);d(e,t),N(()=>{s(t,H(`${ce(B.get()===void 0?`md`:B.get())} font-semibold leading-tight tracking-[-0.02em]`,K.get()))}),N(()=>{let e=q.get();_(t,e)});let n=j(`rue:slot:anchor`);return d(t,n),N(()=>{let e=Z;S(()=>f(e,t,n))}),e},!0);S(()=>f(e,t,n))});let r=j(`rue:slot:anchor`);return d(t,r),N(()=>{let e=Q==null?``:x(()=>{let e=T(),t=A(`div`,e);d(e,t),N(()=>{s(t,H(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,le.get()))}),N(()=>{let e=ue.get();_(t,e)});let n=j(`rue:slot:anchor`);return d(t,n),N(()=>{let e=Q;S(()=>f(e,t,n))}),e},!0);S(()=>f(e,t,r))}),e},!0):``;S(()=>f(e,ie,re))}),l(W,ae,()=>C.get()==null?{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=b(`div`,e),n;N(()=>{let e=H(`flex w-full flex-wrap gap-3 ${ve}`,k.get()),r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let r;N(()=>{let e=P.get();Object.is(r,e)||(r=e,_(t,e))}),t.setAttribute(`data-rue-result-extra`,`true`);let i=y(``);return v(t,i),g(i,()=>C.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),l(de,G,()=>ye?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=b(`div`,e),r;N(()=>{let e=H(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,n.get()),i=e==null?``:String(e);Object.is(r,i)||(r=i,t.className=i)});let a;N(()=>{let e=i.get();Object.is(a,e)||(a=e,_(t,e))}),t.setAttribute(`data-rue-result-body`,`true`);let s=D(`rue:compiled-slot`);return v(t,s),h({parent:t,before:s},()=>o.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0),e=>F(()=>{t.set(e.align),n.set(e.bodyClassName),i.set(e.bodyStyle),a.set(e.bordered),o.set(e.children),c.set(e.className),p.set(e.contentClassName),m.set(e.contentStyle),C.set(e.extra),k.set(e.extraClassName),P.set(e.extraStyle),I.set(e.icon),L.set(e.iconClassName),ee.set(e.iconStyle),R.set(e.role),z.set(e.showIcon),B.set(e.size),V.set(e.status),U.set(e.style),W.set(e.subTitle),le.set(e.subTitleClassName),ue.set(e.subTitleStyle),G.set(e.title),K.set(e.titleClassName),q.set(e.titleStyle),J.set(e.variant),pe.set(M(e,`align.bodyClassName.bodyStyle.bordered.children.className.contentClassName.contentStyle.extra.extraClassName.extraStyle.icon.iconClassName.iconStyle.role.showIcon.size.status.style.subTitle.subTitleClassName.subTitleStyle.title.titleClassName.titleStyle.variant`.split(`.`)))}),()=>e)},{PRESENTED_IMAGE_403:J,PRESENTED_IMAGE_404:pe,PRESENTED_IMAGE_500:Y}),me=p(`<div class="grid gap-4 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),Z=p(`<div class="grid gap-5"><!--rue:opaque-hole:0--><div class="grid gap-5 xl:grid-cols-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div></div>`),Q=p(`<div class="grid gap-3 md:grid-cols-3"><div class="rounded-2xl border border-base-300 bg-base-100 p-4"><div class="text-xs uppercase tracking-[0.22em] opacity-55">实例规格</div><div class="mt-2 text-lg font-semibold">4C8G / 华东 2</div><div class="mt-1 text-sm opacity-65">自动扩容策略已启用</div></div><div class="rounded-2xl border border-base-300 bg-base-100 p-4"><div class="text-xs uppercase tracking-[0.22em] opacity-55">公网访问</div><div class="mt-2 flex items-center gap-2 text-lg font-semibold">已开启 <!--rue:opaque-hole:0--></div><div class="mt-1 text-sm opacity-65">默认指向 preview.rue.dev</div></div><div class="rounded-2xl border border-base-300 bg-base-100 p-4"><div class="text-xs uppercase tracking-[0.22em] opacity-55">提醒</div><ul class="mt-2 m-0 pl-5 text-sm leading-7 opacity-80"><li>建议补充管理员手机号</li><li>七天后会触发成本周报</li></ul></div></div>`),he=p(`<div class="grid gap-5 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ge=p(`<div class="grid gap-4 md:grid-cols-3"><div class="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center"><!--rue:opaque-hole:0--><div class="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_403</div></div><div class="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center"><!--rue:opaque-hole:1--><div class="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_404</div></div><div class="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center"><!--rue:opaque-hole:2--><div class="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_500</div></div></div>`),_e=p(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),ve=p(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ye=p(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Result 结果页</h1><p class="text-sm mt-3 mb-3">Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。</p><p class="text-sm opacity-75">Result 参考成熟结果页组件的能力面，视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><h2 class="mt-10">API</h2><!--rue:opaque-hole:6--><p class="text-sm opacity-70 mt-4">除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。</p></div>`),$=e=>x(t=>{let n=_e().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],u=c.parentNode,d=n.childNodes[1],p=d.parentNode,m=n.childNodes[2],g=m.parentNode;h({parent:s,before:o},()=>e.title,()=>({})),l(u,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let n=b(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=D(`rue:compiled-slot`);return v(n,r),h({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let _=C(p);return a(_,ee,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),p.insertBefore(_,d),N(()=>{let t=e.tab.value===`preview`?e.preview():i(I,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));S(()=>f(t,g,m))}),n}),be=e=>{let t=u(e.rows);return O(r(Object.assign(e=>{let i=ve().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return N(()=>{let e=t.get()||[];s=n(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=u(e),i=u(t);return c((e,t,i)=>P(e,i,()=>r(Object.assign(e=>{let t=b(`tr`,e),r=b(`td`,t);v(t,r);let i=b(`code`,r);v(r,i);let a=y(``);v(i,a),g(a,()=>n.get().prop);let o=b(`td`,t);v(t,o);let s=y(``);v(o,s),g(s,()=>n.get().description);let c=b(`td`,t);v(t,c);let l=b(`code`,c);v(c,l);let u=y(``);v(l,u),g(u,()=>n.get().type);let d=b(`td`,t);v(t,d);let f=b(`code`,d);v(d,f);let p=y(``);return v(f,p),g(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>F(()=>{t.set(e.rows)}),()=>e)},xe=()=>O(x(()=>{let e=T(),t=A(`svg`,e);d(e,t),E(t,`xmlns`,`http://www.w3.org/2000/svg`),E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),s(t,`size-10`);let n=A(`path`,t);d(t,n),E(n,`strokeLinecap`,`round`),E(n,`strokeLinejoin`,`round`),E(n,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let r=A(`path`,t);d(t,r),E(r,`strokeLinecap`,`round`),E(r,`strokeLinejoin`,`round`),E(r,`d`,`M13.3 5.7 18.2 10.6`);let i=A(`path`,t);d(t,i),E(i,`strokeLinecap`,`round`),E(i,`strokeLinejoin`,`round`),E(i,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let a=A(`circle`,t);return d(t,a),E(a,`cx`,`14.6`),E(a,`cy`,`9.4`),E(a,`r`,`1.3`),e},!0),e=>F(()=>{})),Se=()=>O(x(()=>{let e=T(),t=A(`svg`,e);d(e,t),E(t,`xmlns`,`http://www.w3.org/2000/svg`),E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),s(t,`size-10`);let n=A(`circle`,t);d(t,n),E(n,`cx`,`12`),E(n,`cy`,`12`),E(n,`r`,`8.5`);let r=A(`path`,t);return d(t,r),E(r,`strokeLinecap`,`round`),E(r,`strokeLinejoin`,`round`),E(r,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),e},!0),e=>F(()=>{})),Ce=()=>O(x(()=>{let e=T(),t=A(`svg`,e);d(e,t),E(t,`xmlns`,`http://www.w3.org/2000/svg`),E(t,`viewBox`,`0 0 24 24`),E(t,`fill`,`none`),E(t,`stroke`,`currentColor`),E(t,`strokeWidth`,`1.8`),s(t,`size-10`);let n=A(`path`,t);d(t,n),E(n,`strokeLinecap`,`round`),E(n,`strokeLinejoin`,`round`),E(n,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let r=A(`path`,t);d(t,r),E(r,`strokeLinecap`,`round`),E(r,`strokeLinejoin`,`round`),E(r,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let i=A(`path`,t);return d(t,i),E(i,`strokeLinecap`,`round`),E(i,`strokeLinejoin`,`round`),E(i,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),e},!0),e=>F(()=>{})),we=`const RocketIcon = () => (
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
)`,Te=`const CompassIcon = () => (
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
)`,Ee=`const ShieldWaveIcon = () => (
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
)`,De=k(`ref:1:0`,()=>t(`preview`)),Oe=k(`ref:1:1`,()=>t(`preview`)),ke=k(`ref:1:2`,()=>t(`preview`)),Ae=k(`ref:1:3`,()=>t(`preview`)),je=k(`ref:1:4`,()=>t(`preview`)),Me=k(`ref:1:5`,()=>t(`preview`)),Ne=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保持边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，支持操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],Pe=()=>O((()=>{let e=x(()=>{let e=T(),t=ye().content.cloneNode(!0),n=t.firstChild,s=n.childNodes[3],c=s.parentNode,l=n.childNodes[4],u=l.parentNode,d=n.childNodes[5],p=d.parentNode,h=n.childNodes[6],g=h.parentNode,_=n.childNodes[7],x=_.parentNode,w=n.childNodes[8],E=w.parentNode,D=n.childNodes[10],O=D.parentNode;e.appendChild(t),N(()=>{let e=m($,()=>({title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:De,preview:o(()=>r(Object.assign(e=>{let t=me().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=t.childNodes[1],o=i.parentNode,s=t.childNodes[2],c=s.parentNode,l=t.childNodes[3],u=l.parentNode,d=C(r);a(d,X,()=>({size:`sm`,status:`success`,title:`发布成功`,subTitle:`当前本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`})),r.insertBefore(d,n);let f=C(o);a(f,X,()=>({size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`})),o.insertBefore(f,i);let p=C(c);a(p,X,()=>({size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`})),c.insertBefore(p,s);let m=C(u);return a(m,X,()=>({size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})),u.insertBefore(m,l),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Result } from '@rue-js/design'

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
`}));S(()=>f(e,c,s))}),N(()=>{let e=m($,()=>({title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:Oe,preview:o(()=>r(Object.assign(e=>{let t=Z().content.cloneNode(!0).firstChild,n=t.childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[1].childNodes[1],u=l.parentNode,d=C(o);a(d,X,()=>({status:403,extra:i(L,()=>({color:`primary`,children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T();return v(t,y(`申请访问`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),className:`min-h-[26rem]`})),o.insertBefore(d,n);let f=C(c);a(f,X,()=>({status:404,size:`sm`,extra:[m(L,()=>({color:`primary`,key:`home`,children:`返回首页`})),m(L,()=>({type:`outlined`,key:`search`,children:`搜索文档`}))]})),c.insertBefore(f,s);let p=C(u);return a(p,X,()=>({status:500,size:`sm`,extra:[m(L,()=>({color:`primary`,key:`retry`,children:`重试请求`})),m(L,()=>({type:`text`,key:`log`,children:`查看日志`}))]})),u.insertBefore(p,l),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Button, Result } from '@rue-js/design'

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
`}));S(()=>f(e,u,l))}),N(()=>{let e=m($,()=>({title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:ke,preview:o(()=>i(X,()=>({status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[m(L,()=>({color:`primary`,key:`console`,children:`前往控制台`})),m(L,()=>({type:`outlined`,key:`snapshot`,children:`配置快照`}))],children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T(),n=Q().content.cloneNode(!0),i=n.firstChild.childNodes[1].childNodes[1].childNodes[1],o=i.parentNode;t.appendChild(n);let s=C(o);return a(s,R,()=>({color:`success`,children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T();return v(t,y(`HTTPS`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(s,i),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))),code:`import { Badge, Button, Result } from '@rue-js/design'

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
`}));S(()=>f(e,p,d))}),N(()=>{let e=m($,()=>({title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保持标题、动作和补充文案。`,tab:Ae,preview:o(()=>r(Object.assign(e=>{let t=he().content.cloneNode(!0).firstChild,n=t.childNodes[0],o=n.parentNode,s=t.childNodes[1],c=s.parentNode,l=C(o);a(l,X,()=>({status:`info`,icon:i(xe,()=>({})),title:`归档任务已排定`,subTitle:`冷数据会在凌晨窗口期分批归档到对象存储，预计耗时 18 分钟。`,extra:i(L,()=>({color:`primary`,children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T();return v(t,y(`查看任务看板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),variant:`soft`})),o.insertBefore(l,n);let u=C(c);return a(u,X,()=>({status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[m(L,()=>({type:`outlined`,key:`branch`,children:`切换分支`})),m(L,()=>({type:`text`,key:`sandbox`,children:`申请沙箱`}))],variant:`outline`})),c.insertBefore(u,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Button, Result } from '@rue-js/design'

${we}

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
`}));S(()=>f(e,g,h))}),N(()=>{let e=m($,()=>({title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:je,preview:o(()=>r(Object.assign(e=>{let t=Z().content.cloneNode(!0).firstChild,n=t.childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[1].childNodes[1],u=l.parentNode,d=C(o);a(d,X,()=>({status:`success`,icon:i(Ce,()=>({})),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`})),o.insertBefore(d,n);let f=C(c);a(f,X,()=>({status:`info`,size:`sm`,variant:`soft`,icon:i(Se,()=>({})),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:i(L,()=>({color:`primary`,children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T();return v(t,y(`查看接入清单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))})),c.insertBefore(f,s);let p=C(u);return a(p,X,()=>({status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:i(L,()=>({type:`outlined`,children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T();return v(t,y(`打开故障时间线`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),children:(e,t,n)=>P(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`div`,t);v(t,n),n.className=`grid gap-2 text-sm leading-7 opacity-80`;let r=b(`div`,n);v(n,r),v(r,y(`node-sh-02: checksum mismatch`));let i=b(`div`,n);return v(n,i),v(i,y(`node-bj-05: waiting runtime restart`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(p,l),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Button, Result } from '@rue-js/design'

${Te}

${Ee}

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
`}));S(()=>f(e,x,_))}),N(()=>{let e=m($,()=>({title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Me,preview:o(()=>r(Object.assign(e=>{let t=ge().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,i=t.childNodes[1].childNodes[0],a=i.parentNode,o=t.childNodes[2].childNodes[0],s=o.parentNode,c=m(X.PRESENTED_IMAGE_403,()=>({size:`sm`}));f(c,r,n);let l=m(X.PRESENTED_IMAGE_404,()=>({size:`sm`}));f(l,a,i);let u=m(X.PRESENTED_IMAGE_500,()=>({size:`sm`}));return f(u,s,o),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Result } from '@rue-js/design'

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
`}));S(()=>f(e,E,w))});let k=C(O);return a(k,be,()=>({rows:Ne})),O.insertBefore(k,D),e});return m(z,()=>({children:e}))})(),e=>F(()=>{}));export{Pe as default};