import{At as e,Dn as t,E as n,Et as r,Mt as i,Q as a,T as o,Vt as s,_n as c,_t as l,at as u,b as d,ct as f,dt as p,et as m,gn as h,gt as g,hn as _,kn as v,kt as y,mn as b,nt as x,on as S,pn as C,rt as w,sn as T,st as E,tn as D,tt as O,ut as k,vn as A,vt as j,w as M,wn as N,x as ee,xn as te,xt as P,yn as F}from"./rue-runtime-HIMg8Lz8.js";import{t as ne}from"./Code-DpH7u0gk.js";import{t as I}from"./button-wFg2EV7R.js";import{t as L}from"./tabs-C020zIXs.js";import{t as R}from"./badge-ho--XXs0.js";import{r as z}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var B=A(`<div><div aria-hidden="true"></div><div class="relative overflow-hidden rounded-[1.8rem] border border-base-300/70 bg-base-200/65 p-4 shadow-inner"><div aria-hidden="true" class="absolute left-4 top-4 h-3 w-20 rounded-full bg-base-100/70"></div><div aria-hidden="true" class="absolute right-4 top-4 size-10 rounded-full border border-base-100/70 bg-base-100/75"></div><div class="relative rounded-[1.45rem] border border-base-100/80 bg-base-100/90 p-5 shadow-[0_22px_50px_-36px_rgba(15,23,42,0.65)]"><div class="flex items-center justify-between gap-3"><span><!--rue:text-hole:0--></span><span class="text-[0.68rem] uppercase tracking-[0.28em] opacity-50">Rue Result</span></div><div class="mt-5 flex items-end justify-between gap-4"><div class="min-w-0"><div><!--rue:text-hole:1--></div><div class="mt-2 max-w-[13rem] text-xs leading-5 opacity-60"><!--rue:text-hole:2--></div></div><div><!--rue:opaque-hole:3--></div></div></div></div></div>`),V=A(`<div data-rue-result-icon="true"><!--rue:opaque-hole:0--></div>`),re=A(`<section><div aria-hidden="true"></div><div><!--rue:text-hole:0--><!--rue:text-hole:1--><!--rue:text-hole:2--><!--rue:text-hole:3--></div></section>`),H=(e,t)=>t?`${e} ${t}`:e,U=e=>e==null||e===!1||e===``?!1:!Array.isArray(e)||e.some(e=>U(e)),ie=e=>e==null?`info`:`${e}`,W=e=>e===`403`||e===`404`||e===`500`,ae=e=>e===`success`||e===`warning`||e===`error`?e:e===`403`?`warning`:e===`500`?`error`:`info`,oe=(e,t)=>{let n=``;return n+=e===`soft`?` bg-base-200/60 shadow-inner`:e===`outline`?` bg-base-100/70 shadow-none`:` bg-base-100 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.6)]`,n+=e===`outline`?` border-2 border-base-300/80`:t?` border border-base-300/70`:` border border-transparent`,n.trim()},se=e=>{switch(e){case`success`:return`bg-success/20`;case`warning`:return`bg-warning/20`;case`error`:return`bg-error/20`;default:return`bg-info/20`}},ce=e=>{switch(e){case`success`:return`text-success`;case`warning`:return`text-warning`;case`error`:return`text-error`;default:return`text-info`}},G=e=>{switch(e){case`success`:return`border-success/15 bg-success/10 text-success`;case`warning`:return`border-warning/15 bg-warning/10 text-warning`;case`error`:return`border-error/15 bg-error/10 text-error`;default:return`border-info/15 bg-info/10 text-info`}},le=e=>{switch(e){case`sm`:return`text-2xl sm:text-[1.8rem]`;case`lg`:return`text-4xl sm:text-[2.8rem]`;default:return`text-3xl sm:text-[2.25rem]`}},K=e=>{switch(e){case`sm`:return`size-9`;case`lg`:return`size-14`;default:return`size-11`}},ue=e=>{switch(e){case`sm`:return`size-20 rounded-[1.5rem]`;case`lg`:return`size-28 rounded-[2rem]`;default:return`size-24 rounded-[1.75rem]`}},de=e=>{switch(e){case`sm`:return`max-w-[16rem]`;case`lg`:return`max-w-[23rem]`;default:return`max-w-[19rem]`}},fe={403:{label:`访问受限`,title:`当前空间暂不可访问`,subTitle:`权限策略已拦截这次访问请求。请切换账号、申请权限，或返回上一级工作区。`,scene:`Permission rules blocked the current request.`},404:{label:`路径缺失`,title:`页面没有找到`,subTitle:`目标页面可能已移动、删除，或地址输入不完整。你可以返回首页重新定位内容。`,scene:`The requested route is no longer mapped.`},500:{label:`服务异常`,title:`系统刚刚开了个小差`,subTitle:`服务端返回了异常结果。建议稍后重试，或先把上下文信息发送给维护者。`,scene:`The backend returned an unexpected fault.`}},q=t=>{let n=u(t.className),r=u(t.status);return f(O(()=>r.get()===`success`?{__rue_compiled_branch_key:0,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=j(`svg`,e);P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),N(()=>{a(t,n.get())}),P(t,`data-rue-result-glyph`,`success`);let r=j(`circle`,t);p(t,r),P(r,`cx`,`12`),P(r,`cy`,`12`),P(r,`r`,`9`);let i=j(`path`,t);return p(t,i),P(i,`strokeLinecap`,`round`),P(i,`strokeLinejoin`,`round`),P(i,`d`,`m8.4 12.3 2.4 2.4 4.8-5.1`),t})}:r.get()===`warning`?{__rue_compiled_branch_key:1,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=j(`svg`,e);P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),N(()=>{a(t,n.get())}),P(t,`data-rue-result-glyph`,`warning`);let r=j(`path`,t);p(t,r),P(r,`strokeLinecap`,`round`),P(r,`strokeLinejoin`,`round`),P(r,`d`,`M12 4.5 20 18.5H4L12 4.5Z`);let i=j(`path`,t);p(t,i),P(i,`strokeLinecap`,`round`),P(i,`d`,`M12 9.5v4.8`);let o=j(`circle`,t);return p(t,o),P(o,`cx`,`12`),P(o,`cy`,`16.9`),P(o,`r`,`0.9`),P(o,`fill`,`currentColor`),P(o,`stroke`,`none`),t})}:r.get()===`error`?{__rue_compiled_branch_key:2,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=j(`svg`,e);P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),N(()=>{a(t,n.get())}),P(t,`data-rue-result-glyph`,`error`);let r=j(`circle`,t);p(t,r),P(r,`cx`,`12`),P(r,`cy`,`12`),P(r,`r`,`9`);let i=j(`path`,t);return p(t,i),P(i,`strokeLinecap`,`round`),P(i,`d`,`m9 9 6 6M15 9l-6 6`),t})}:{__rue_compiled_branch_key:3,__rue_compiled_branch_refresh:!0,create:()=>e(e=>{let t=j(`svg`,e);P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),N(()=>{a(t,n.get())}),P(t,`data-rue-result-glyph`,`info`);let r=j(`circle`,t);p(t,r),P(r,`cx`,`12`),P(r,`cy`,`12`),P(r,`r`,`9`);let i=j(`path`,t);p(t,i),P(i,`strokeLinecap`,`round`),P(i,`d`,`M12 10.2v5.2`);let o=j(`circle`,t);return p(t,o),P(o,`cx`,`12`),P(o,`cy`,`7.4`),P(o,`r`,`0.9`),P(o,`fill`,`currentColor`),P(o,`stroke`,`none`),t})}),e=>m(()=>{n.set(e.className),r.set(e.status)}),()=>t)},J=t=>{let n=u(t.className),i=u(t.size),o=u(t.status),s=u(t.style),c=u(t.tone),d=fe[o.get()];return f(e(()=>{let e=l(),t=B().content.cloneNode(!0),u=t.firstChild,f=u,p=u.childNodes[0],m=u.childNodes[1].childNodes[2].childNodes[0].childNodes[0],h=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0],g=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1],y=u.childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[0],b=y.parentNode,x=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[0].childNodes[0],S=x.parentNode,C=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[0],w=C.parentNode,T=u.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[0],D=T.parentNode;e.appendChild(t),N(()=>{a(f,H(`relative mx-auto w-full ${de(i.get()===void 0?`md`:i.get())}`,n.get()))}),N(()=>{let e=s.get();r(f,e)}),N(()=>{P(f,`data-rue-result-illustration`,String(o.get()))}),P(p,`aria-hidden`,`true`),N(()=>{a(p,`absolute inset-x-6 top-4 h-24 rounded-[2rem] blur-2xl opacity-75 ${se(c.get())}`)}),N(()=>{a(m,`rounded-full border px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.22em] ${G(c.get())}`)}),N(()=>{a(h,`text-[4rem] font-black leading-none tracking-[-0.1em] ${ce(c.get())}`)}),N(()=>{a(g,`grid size-16 shrink-0 place-items-center rounded-[1.35rem] border ${G(c.get())}`)}),N(()=>{let e=d.label;v(()=>k(e,b,y))}),N(()=>{let e=o.get();v(()=>k(e,S,x))}),N(()=>{let e=d.scene;v(()=>k(e,w,C))});let O=_(D);return E(O,q,()=>({status:c.get(),className:`size-7`})),D.insertBefore(O,T),e},!0),e=>m(()=>{n.set(e.className),i.set(e.size),o.set(e.status),s.set(e.style),c.set(e.tone)}),()=>t)},pe=S((e,t,n)=>W(e)?w(J,()=>({status:e,tone:t,size:n})):s(Object.assign(e=>{let r=V().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;N(()=>{let e=`grid place-items-center border ${G(t)} ${ue(n)}`,r=e==null?``:String(e);Object.is(s,r)||(s=r,i.className=r)}),i.setAttribute(`data-rue-result-icon`,`true`);let c=_(o);return E(c,q,()=>({status:t,className:K(n)})),o.insertBefore(c,a),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),Y=S(e=>w(J,()=>({...e,status:`403`,tone:`warning`}))),X=S(e=>w(J,()=>({...e,status:`404`,tone:`info`}))),me=S(e=>w(J,()=>({...e,status:`500`,tone:`error`}))),Z=Object.assign(t=>{let n=u(t.align),i=u(t.bodyClassName),d=u(t.bodyStyle),_=u(t.bordered),S=u(t.children),w=u(t.className),T=u(t.contentClassName),E=u(t.contentStyle),D=u(t.extra),O=u(t.extraClassName),A=u(t.extraStyle),M=u(t.icon),ee=u(t.iconClassName),ne=u(t.iconStyle),I=u(t.role),L=u(t.showIcon),R=u(t.size),z=u(t.status),B=u(t.style),V=u(t.subTitle),ce=u(t.subTitleClassName),G=u(t.subTitleStyle),K=u(t.title),ue=u(t.titleClassName),de=u(t.titleStyle),q=u(t.variant),J=u(F(t,`align.bodyClassName.bodyStyle.bordered.children.className.contentClassName.contentStyle.extra.extraClassName.extraStyle.icon.iconClassName.iconStyle.role.showIcon.size.status.style.subTitle.subTitleClassName.subTitleStyle.title.titleClassName.titleStyle.variant`.split(`.`))),Y=ie(z.get()===void 0?`info`:z.get()),X=ae(Y),me=W(Y)?fe[Y]:void 0,Z=K.get()??me?.title,Q=V.get()??me?.subTitle,he=(L.get()===void 0||L.get())===!1||M.get()===null||M.get()===!1,ge=(n.get()===void 0?`center`:n.get())===`start`?`items-start text-left`:`items-center text-center`,_e=(n.get()===void 0?`center`:n.get())===`start`?`items-start text-left`:`items-center text-center`,ve=(n.get()===void 0?`center`:n.get())===`start`?`justify-start`:`justify-center`,ye=U(S.get());return f(e(()=>{let t=l(),u=re().content.cloneNode(!0),f=u.firstChild,m=f,F=f.childNodes[0],L=f.childNodes[1],z=f.childNodes[1].childNodes[0],V=z.parentNode,U=f.childNodes[1].childNodes[1],ie=U.parentNode,W=f.childNodes[1].childNodes[2],ae=W.parentNode,K=f.childNodes[1].childNodes[3],fe=K.parentNode;return t.appendChild(u),N(()=>{P(m,`role`,String(I.get()===void 0?`status`:I.get()))}),N(()=>{a(m,H(`rue-result relative isolate overflow-hidden rounded-[2rem] px-6 py-7 sm:px-8 ${(n.get()===void 0?`center`:n.get())===`start`?`text-left`:`text-center`} ${oe(q.get()===void 0?`surface`:q.get(),_.get()===void 0||_.get())}`,w.get()))}),N(()=>{let e=B.get();r(m,e)}),N(()=>{P(m,`data-rue-status`,String(Y))}),N(()=>{P(m,`data-rue-tone`,String(X))}),N(()=>{y(m,J.get(),[])}),P(F,`aria-hidden`,`true`),N(()=>{a(F,`pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl opacity-50 ${se(X)}`)}),N(()=>{a(L,H(`relative flex w-full flex-col gap-5 ${ge}`,T.get()))}),N(()=>{let e=E.get();r(L,e)}),N(()=>{let t=he?``:e(()=>{let e=l(),t=j(`div`,e);p(e,t),N(()=>{a(t,ee.get())}),N(()=>{let e=ne.get();r(t,e)}),P(t,`data-rue-result-icon-slot`,`true`);let n=g(`rue:slot:anchor`);return p(t,n),N(()=>{let e=M.get()!==void 0&&M.get()!==null&&M.get()!==!1?M.get():pe(Y,X,R.get()===void 0?`md`:R.get());v(()=>k(e,t,n))}),e},!0);v(()=>k(t,V,z))}),N(()=>{let t=Z!=null||Q!=null?e(()=>{let t=l(),n=j(`div`,t);p(t,n),N(()=>{a(n,`flex w-full max-w-3xl flex-col gap-2 ${_e}`)});let i=g(`rue:slot:anchor`);p(n,i),N(()=>{let t=Z==null?``:e(()=>{let e=l(),t=j(`div`,e);p(e,t),N(()=>{a(t,H(`${le(R.get()===void 0?`md`:R.get())} font-semibold leading-tight tracking-[-0.02em]`,ue.get()))}),N(()=>{let e=de.get();r(t,e)});let n=g(`rue:slot:anchor`);return p(t,n),N(()=>{let e=Z;v(()=>k(e,t,n))}),e},!0);v(()=>k(t,n,i))});let o=g(`rue:slot:anchor`);return p(n,o),N(()=>{let t=Q==null?``:e(()=>{let e=l(),t=j(`div`,e);p(e,t),N(()=>{a(t,H(`max-w-2xl text-sm leading-7 text-base-content/70 sm:text-base`,ce.get()))}),N(()=>{let e=G.get();r(t,e)});let n=g(`rue:slot:anchor`);return p(t,n),N(()=>{let e=Q;v(()=>k(e,t,n))}),e},!0);v(()=>k(t,n,o))}),t},!0):``;v(()=>k(t,ie,U))}),x(ae,W,()=>D.get()==null?{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=h(`div`,e),n;N(()=>{let e=H(`flex w-full flex-wrap gap-3 ${ve}`,O.get()),r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let i;N(()=>{let e=A.get();Object.is(i,e)||(i=e,r(t,e))}),t.setAttribute(`data-rue-result-extra`,`true`);let a=c(``);return C(t,a),te(a,()=>D.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),x(fe,K,()=>ye?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=h(`div`,e),n;N(()=>{let e=H(`w-full max-w-4xl rounded-[1.5rem] border border-base-200/80 bg-base-100/70 p-5 text-left shadow-inner`,i.get()),r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let a;N(()=>{let e=d.get();Object.is(a,e)||(a=e,r(t,e))}),t.setAttribute(`data-rue-result-body`,`true`);let s=b(`rue:compiled-slot`);return C(t,s),o({parent:t,before:s},()=>S.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),t},!0),e=>m(()=>{n.set(e.align),i.set(e.bodyClassName),d.set(e.bodyStyle),_.set(e.bordered),S.set(e.children),w.set(e.className),T.set(e.contentClassName),E.set(e.contentStyle),D.set(e.extra),O.set(e.extraClassName),A.set(e.extraStyle),M.set(e.icon),ee.set(e.iconClassName),ne.set(e.iconStyle),I.set(e.role),L.set(e.showIcon),R.set(e.size),z.set(e.status),B.set(e.style),V.set(e.subTitle),ce.set(e.subTitleClassName),G.set(e.subTitleStyle),K.set(e.title),ue.set(e.titleClassName),de.set(e.titleStyle),q.set(e.variant),J.set(F(e,`align.bodyClassName.bodyStyle.bordered.children.className.contentClassName.contentStyle.extra.extraClassName.extraStyle.icon.iconClassName.iconStyle.role.showIcon.size.status.style.subTitle.subTitleClassName.subTitleStyle.title.titleClassName.titleStyle.variant`.split(`.`)))}),()=>t)},{PRESENTED_IMAGE_403:Y,PRESENTED_IMAGE_404:X,PRESENTED_IMAGE_500:me}),Q=A(`<div class="grid gap-4 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),he=A(`<div class="grid gap-5"><!--rue:opaque-hole:0--><div class="grid gap-5 xl:grid-cols-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div></div>`),ge=A(`<div class="grid gap-3 md:grid-cols-3"><div class="rounded-2xl border border-base-300 bg-base-100 p-4"><div class="text-xs uppercase tracking-[0.22em] opacity-55">实例规格</div><div class="mt-2 text-lg font-semibold">4C8G / 华东 2</div><div class="mt-1 text-sm opacity-65">自动扩容策略已启用</div></div><div class="rounded-2xl border border-base-300 bg-base-100 p-4"><div class="text-xs uppercase tracking-[0.22em] opacity-55">公网访问</div><div class="mt-2 flex items-center gap-2 text-lg font-semibold">已开启 <!--rue:opaque-hole:0--></div><div class="mt-1 text-sm opacity-65">默认指向 preview.rue.dev</div></div><div class="rounded-2xl border border-base-300 bg-base-100 p-4"><div class="text-xs uppercase tracking-[0.22em] opacity-55">提醒</div><ul class="mt-2 m-0 pl-5 text-sm leading-7 opacity-80"><li>建议补充管理员手机号</li><li>七天后会触发成本周报</li></ul></div></div>`),_e=A(`<div class="grid gap-5 xl:grid-cols-2"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--></div>`),ve=A(`<div class="grid gap-4 md:grid-cols-3"><div class="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center"><!--rue:opaque-hole:0--><div class="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_403</div></div><div class="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center"><!--rue:opaque-hole:1--><div class="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_404</div></div><div class="rounded-[1.75rem] border border-base-300 bg-base-100 p-4 text-center"><!--rue:opaque-hole:2--><div class="mt-3 text-sm font-medium">Result.PRESENTED_IMAGE_500</div></div></div>`),ye=A(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),be=A(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),xe=A(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Result 结果页</h1><p class="text-sm mt-3 mb-3">Result 用于承载关键操作后的反馈、异常页与阶段完成态。它比 Alert 更完整，也比空状态更适合承接下一步动作。</p><p class="text-sm opacity-75">Result 参考成熟结果页组件的能力面，视觉保持 Rue 自己的圆角面板、柔和光晕和较轻的插画结构；除了 success、info、warning、error 之外，也内置了 403、404、500 三种异常状态。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><h2 class="mt-10">API</h2><!--rue:opaque-hole:6--><p class="text-sm opacity-70 mt-4">除了上表 props，组件还暴露了 Result.PRESENTED_IMAGE_403、Result.PRESENTED_IMAGE_404 和 Result.PRESENTED_IMAGE_500 三个静态插画组件，便于你在更复杂的空壳页面里单独复用。</p></div>`),$=t=>e(e=>{let n=ye().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],c=a.parentNode,u=n.childNodes[1],d=u.parentNode,f=n.childNodes[2],p=f.parentNode;o({parent:i,before:r},()=>t.title,()=>({})),x(c,a,()=>t.summary?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let n=h(`p`,e);n.className=`m-0 text-sm opacity-70`;let r=b(`rue:compiled-slot`);return C(n,r),o({parent:n,before:r},()=>t.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let m=_(d);return E(m,L,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`})),d.insertBefore(m,u),N(()=>{let e=t.tab.value===`preview`?t.preview():w(ne,()=>({className:`mt-2`,lang:`tsx`,code:t.code}));v(()=>k(e,p,f))}),n}),Se=e=>{let n=u(e.rows);return f(s(Object.assign(e=>{let r=be().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=A(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return N(()=>{let e=n.get()||[];s=M(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return ee(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=c(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=c(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=c(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>d(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{n.set(e.rows)}),()=>e)},Ce=()=>f(e(()=>{let e=l(),t=j(`svg`,e);p(e,t),P(t,`xmlns`,`http://www.w3.org/2000/svg`),P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),a(t,`size-10`);let n=j(`path`,t);p(t,n),P(n,`strokeLinecap`,`round`),P(n,`strokeLinejoin`,`round`),P(n,`d`,`M14.5 4.5c-3 0-6 2.6-7.4 6.2l2.2 2.2c3.6-1.4 6.2-4.4 6.2-7.4Z`);let r=j(`path`,t);p(t,r),P(r,`strokeLinecap`,`round`),P(r,`strokeLinejoin`,`round`),P(r,`d`,`M13.3 5.7 18.2 10.6`);let i=j(`path`,t);p(t,i),P(i,`strokeLinecap`,`round`),P(i,`strokeLinejoin`,`round`),P(i,`d`,`m10.6 13.4-3.4 3.4a2.2 2.2 0 0 1-3.1 0l-.9-.9a2.2 2.2 0 0 1 0-3.1l3.4-3.4`);let o=j(`circle`,t);return p(t,o),P(o,`cx`,`14.6`),P(o,`cy`,`9.4`),P(o,`r`,`1.3`),e},!0),e=>m(()=>{})),we=()=>f(e(()=>{let e=l(),t=j(`svg`,e);p(e,t),P(t,`xmlns`,`http://www.w3.org/2000/svg`),P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),a(t,`size-10`);let n=j(`circle`,t);p(t,n),P(n,`cx`,`12`),P(n,`cy`,`12`),P(n,`r`,`8.5`);let r=j(`path`,t);return p(t,r),P(r,`strokeLinecap`,`round`),P(r,`strokeLinejoin`,`round`),P(r,`d`,`m15.7 8.3-2.8 6.3-6.3 2.8 2.8-6.3 6.3-2.8Z`),e},!0),e=>m(()=>{})),Te=()=>f(e(()=>{let e=l(),t=j(`svg`,e);p(e,t),P(t,`xmlns`,`http://www.w3.org/2000/svg`),P(t,`viewBox`,`0 0 24 24`),P(t,`fill`,`none`),P(t,`stroke`,`currentColor`),P(t,`strokeWidth`,`1.8`),a(t,`size-10`);let n=j(`path`,t);p(t,n),P(n,`strokeLinecap`,`round`),P(n,`strokeLinejoin`,`round`),P(n,`d`,`M12 3 5 6v5c0 4.3 2.6 8.3 7 10 4.4-1.7 7-5.7 7-10V6l-7-3Z`);let r=j(`path`,t);p(t,r),P(r,`strokeLinecap`,`round`),P(r,`strokeLinejoin`,`round`),P(r,`d`,`M8.5 12.5c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`);let i=j(`path`,t);return p(t,i),P(i,`strokeLinecap`,`round`),P(i,`strokeLinejoin`,`round`),P(i,`d`,`M8.5 9.8c1.2-1 2.3-1.5 3.5-1.5s2.3.5 3.5 1.5`),e},!0),e=>m(()=>{})),Ee=`const RocketIcon = () => (
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
)`,De=`const CompassIcon = () => (
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
)`,Oe=`const ShieldWaveIcon = () => (
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
)`,ke=T(`ref:1:0`,()=>D(`preview`)),Ae=T(`ref:1:1`,()=>D(`preview`)),je=T(`ref:1:2`,()=>D(`preview`)),Me=T(`ref:1:3`,()=>D(`preview`)),Ne=T(`ref:1:4`,()=>D(`preview`)),Pe=T(`ref:1:5`,()=>D(`preview`)),Fe=[{prop:`align`,description:`内容对齐方式，支持居中展示或左对齐的流程详情布局`,type:`'center' | 'start'`,defaultValue:`center`},{prop:`bodyClassName / bodyStyle`,description:`children 内容面板的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`bordered`,description:`是否显示边框；outline 变体会强制保持边框视觉`,type:`boolean`,defaultValue:`true`},{prop:`children`,description:`结果页下方的扩展说明区域，可放详情、表单或下一步信息`,type:`any`,defaultValue:`-`},{prop:`contentClassName / contentStyle`,description:`内部纵向布局容器的类名与样式`,type:`string / any`,defaultValue:`-`},{prop:`extra`,description:`操作区，可传单个节点或按钮数组`,type:`any`,defaultValue:`-`},{prop:`icon`,description:`自定义图标或插画；传 null / false 可隐藏图标区`,type:`any`,defaultValue:`按 status 自动生成`},{prop:`showIcon`,description:`显式控制默认图标区显隐`,type:`boolean`,defaultValue:`true`},{prop:`size`,description:`控制标题、图标和异常插画尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`md`},{prop:`status`,description:`语义状态，支持操作结果与 403/404/500 异常页`,type:`'success' | 'info' | 'warning' | 'error' | 403 | 404 | 500 | '403' | '404' | '500'`,defaultValue:`info`},{prop:`subTitle`,description:`辅助说明文案；403/404/500 未传时会自动补默认副标题`,type:`any`,defaultValue:`-`},{prop:`title`,description:`主标题；403/404/500 未传时会自动补默认标题`,type:`any`,defaultValue:`-`},{prop:`variant`,description:`Rue 风格外观，适配仪表盘、表单完成态与空页面`,type:`'surface' | 'soft' | 'outline'`,defaultValue:`surface`}],Ie=()=>f((()=>{let t=e(()=>{let e=l(),t=xe().content.cloneNode(!0),r=t.firstChild,a=r.childNodes[3],o=a.parentNode,u=r.childNodes[4],d=u.parentNode,f=r.childNodes[5],p=f.parentNode,m=r.childNodes[6],g=m.parentNode,y=r.childNodes[7],b=y.parentNode,x=r.childNodes[8],T=x.parentNode,D=r.childNodes[10],O=D.parentNode;e.appendChild(t),N(()=>{let e=i($,()=>({title:`基础状态`,summary:`覆盖最常见的操作结果场景。四种语义状态共享一套 Result 布局，但通过图标与色彩建立清晰区分。`,tab:ke,preview:S(()=>s(Object.assign(e=>{let t=Q().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=t.childNodes[1],a=i.parentNode,o=t.childNodes[2],s=o.parentNode,c=t.childNodes[3],l=c.parentNode,u=_(r);E(u,Z,()=>({size:`sm`,status:`success`,title:`发布成功`,subTitle:`当前本已推送到 12 个边缘节点，预计 40 秒内完成全量刷新。`})),r.insertBefore(u,n);let d=_(a);E(d,Z,()=>({size:`sm`,status:`info`,title:`等待同步`,subTitle:`任务已经入队，系统会在资源空闲时继续处理。`})),a.insertBefore(d,i);let f=_(s);E(f,Z,()=>({size:`sm`,status:`warning`,title:`仍需人工确认`,subTitle:`检测到配置变更涉及生产环境，请由值班同学完成最终审核。`})),s.insertBefore(f,o);let p=_(l);return E(p,Z,()=>({size:`sm`,status:`error`,title:`校验失败`,subTitle:`依赖清单中存在 2 个未解决的版本冲突，请修正后重新提交。`})),l.insertBefore(p,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Result } from '@rue-js/design'

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
`}));v(()=>k(e,o,a))}),N(()=>{let e=i($,()=>({title:`异常状态页`,summary:`403、404、500 内置默认标题、副标题和插画，适合直接作为独立页面或路由兜底页使用。`,tab:Ae,preview:S(()=>s(Object.assign(e=>{let t=he().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=t.childNodes[1].childNodes[0],u=o.parentNode,d=t.childNodes[1].childNodes[1],f=d.parentNode,p=_(a);E(p,Z,()=>({status:403,extra:w(I,()=>({color:`primary`,children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return C(t,c(`申请访问`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),className:`min-h-[26rem]`})),a.insertBefore(p,r);let m=_(u);E(m,Z,()=>({status:404,size:`sm`,extra:[i(I,()=>({color:`primary`,key:`home`,children:`返回首页`})),i(I,()=>({type:`outlined`,key:`search`,children:`搜索文档`}))]})),u.insertBefore(m,o);let h=_(f);return E(h,Z,()=>({status:500,size:`sm`,extra:[i(I,()=>({color:`primary`,key:`retry`,children:`重试请求`})),i(I,()=>({type:`text`,key:`log`,children:`查看日志`}))]})),f.insertBefore(h,d),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Button, Result } from '@rue-js/design'

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
`}));v(()=>k(e,d,u))}),N(()=>{let e=i($,()=>({title:`操作区与扩展内容`,summary:`extra 负责下一步动作，children 负责补充上下文或明细面板，适合复杂业务流收尾页。`,tab:je,preview:S(()=>w(Z,()=>({status:`success`,title:`云主机已开通`,subTitle:`订单号：RU20260510-0032。资源已完成基础检测，建议立即配置告警与自动快照策略。`,extra:[i(I,()=>({color:`primary`,key:`console`,children:`前往控制台`})),i(I,()=>({type:`outlined`,key:`snapshot`,children:`配置快照`}))],children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l(),r=ge().content.cloneNode(!0),i=r.firstChild.childNodes[1].childNodes[1].childNodes[1],a=i.parentNode;t.appendChild(r);let o=_(a);return E(o,R,()=>({color:`success`,children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return C(t,c(`HTTPS`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(o,i),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))),code:`import { Badge, Button, Result } from '@rue-js/design'

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
`}));v(()=>k(e,p,f))}),N(()=>{let e=i($,()=>({title:`自定义图标与无图标模式`,summary:`你可以把 Result 用成更品牌化的完成态，也可以完全拿掉 icon，仅保持标题、动作和补充文案。`,tab:Me,preview:S(()=>s(Object.assign(e=>{let t=_e().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,o=t.childNodes[1],u=o.parentNode,d=_(a);E(d,Z,()=>({status:`info`,icon:w(Ce,()=>({})),title:`归档任务已排定`,subTitle:`冷数据会在凌晨窗口期分批归档到对象存储，预计耗时 18 分钟。`,extra:w(I,()=>({color:`primary`,children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return C(t,c(`查看任务看板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),variant:`soft`})),a.insertBefore(d,r);let f=_(u);return E(f,Z,()=>({status:`warning`,showIcon:!1,title:`你正在使用只读副本`,subTitle:`当前环境不允许直接写入。若需要继续调试，请先切回可写分支或申请沙箱环境。`,extra:[i(I,()=>({type:`outlined`,key:`branch`,children:`切换分支`})),i(I,()=>({type:`text`,key:`sandbox`,children:`申请沙箱`}))],variant:`outline`})),u.insertBefore(f,o),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Button, Result } from '@rue-js/design'

${Ee}

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
`}));v(()=>k(e,g,m))}),N(()=>{let e=i($,()=>({title:`视觉变体与流程排布`,summary:`surface、soft、outline 适合不同密度的页面；align=start 更适合承载表单结果、审核流和运维说明。`,tab:Ne,preview:S(()=>s(Object.assign(e=>{let t=he().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=r.parentNode,a=t.childNodes[1].childNodes[0],o=a.parentNode,u=t.childNodes[1].childNodes[1],d=u.parentNode,f=_(i);E(f,Z,()=>({status:`success`,icon:w(Te,()=>({})),title:`安全基线已更新`,subTitle:`所有高危项已完成修复，系统会在下一轮巡检中重新生成合规快照。`,variant:`surface`})),i.insertBefore(f,r);let p=_(o);E(p,Z,()=>({status:`info`,size:`sm`,variant:`soft`,icon:w(we,()=>({})),title:`推荐下一步：整理路由入口`,subTitle:`新组件已经落地，建议同步补一条导航入口和使用示例，降低首次发现成本。`,align:`start`,extra:w(I,()=>({color:`primary`,children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return C(t,c(`查看接入清单`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))})),o.insertBefore(p,a);let m=_(d);return E(m,Z,()=>({status:`error`,size:`sm`,variant:`outline`,title:`回滚未完成`,subTitle:`2 个节点仍在回滚版本，建议先暂停流量切换，待日志完全一致后再继续。`,align:`start`,extra:w(I,()=>({type:`outlined`,children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l();return C(t,c(`打开故障时间线`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),children:(e,t,r)=>n(e,r,()=>s(Object.assign(e=>{let t=l(),n=h(`div`,t);C(t,n),n.className=`grid gap-2 text-sm leading-7 opacity-80`;let r=h(`div`,n);C(n,r),C(r,c(`node-sh-02: checksum mismatch`));let i=h(`div`,n);return C(n,i),C(i,c(`node-bj-05: waiting runtime restart`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),d.insertBefore(m,u),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Button, Result } from '@rue-js/design'

${De}

${Oe}

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
`}));v(()=>k(e,b,y))}),N(()=>{let e=i($,()=>({title:`预制异常插画`,summary:`Result 也暴露了可单独复用的异常插画，适合接到自定义页面或空状态外壳里。`,tab:Pe,preview:S(()=>s(Object.assign(e=>{let t=ve().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],r=n.parentNode,a=t.childNodes[1].childNodes[0],o=a.parentNode,s=t.childNodes[2].childNodes[0],c=s.parentNode,l=i(Z.PRESENTED_IMAGE_403,()=>({size:`sm`}));k(l,r,n);let u=i(Z.PRESENTED_IMAGE_404,()=>({size:`sm`}));k(u,o,a);let d=i(Z.PRESENTED_IMAGE_500,()=>({size:`sm`}));return k(d,c,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:`import { Result } from '@rue-js/design'

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
`}));v(()=>k(e,T,x))});let A=_(O);return E(A,Se,()=>({rows:Fe})),O.insertBefore(A,D),e});return i(z,()=>({children:t}))})(),e=>m(()=>{}));export{Ie as default};