import{$t as e,An as t,At as n,C as r,Ct as i,Dn as a,Dt as o,E as s,Gt as c,P as l,Q as u,Qt as d,Vt as f,Zt as p,_n as m,_t as h,at as ee,b as g,ct as _,dt as v,et as y,gn as b,kn as x,mn as te,nt as S,on as C,pn as w,qt as ne,sn as T,tn as E,ut as D,vn as re,vt as O,w as k,wn as A,x as ie,xn as ae,xt as j,yt as M}from"./rue-runtime-HIMg8Lz8.js";import{n as N,s as oe}from"./rue-router-FD7rKeeM.js";import{t as P}from"./createHomeSplitExamplePage-DNdswIPW.js";import{a as F,i as I,n as L,o as R,r as z,s as B,t as V}from"./rue-store-DBA1LD_h.js";var se=re(`<div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3"><div class="space-y-2"><h2 class="text-2xl font-semibold">Store、Router、Query Sync 串联演示</h2><p class="max-w-3xl text-sm leading-6 text-base-content/75">搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router 控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。</p></div><div class="flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-base-200 px-3 py-1 font-medium">当前路由：<!--rue:text-hole:0--></span><span class="rounded-full bg-base-200 px-3 py-1 font-medium">预期 Query：<!--rue:text-hole:1--></span></div></div><div class="flex flex-wrap gap-2"><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><button class="btn btn-sm btn-ghost">清空 Query</button><button class="btn btn-sm btn-ghost">清理所有 URL 参数</button></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow"><div class="card-body gap-4"><label class="form-control gap-2"><span class="label-text font-medium">搜索（debounce 500ms）</span><input class="input input-bordered" placeholder="例如：router / sync / render"></label><div class="grid gap-2"><span class="label-text font-medium">分类（throttle 180ms + push）</span><div class="flex flex-wrap gap-2"><!--rue:text-hole:5--></div><p class="text-xs leading-5 text-base-content/60"><!--rue:text-hole:6--></p></div><div class="grid gap-2"><span class="label-text font-medium">分页（throttle 180ms + push）</span><div class="flex items-center gap-2"><button class="btn btn-sm btn-outline">上一页</button><span class="min-w-24 text-center text-sm font-medium">第 <!--rue:text-hole:7--> / <!--rue:text-hole:8--> 页</span><button class="btn btn-sm btn-outline">下一页</button></div></div><div class="rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70"><p>本地状态会立刻刷新卡片列表。</p><p>地址栏会按 debounce 或 throttle 的规则延后追上。</p><p>上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。</p><p>下方记录面板会直接捕获 pushState、replaceState 和 popstate，方便确认“下一页”是否真的入栈。</p></div><div class="grid gap-2"><div class="flex flex-wrap items-center justify-between gap-2"><span class="label-text font-medium">URL 写入记录</span><span class="text-xs text-base-content/60">分类 / 分页走 pushState，搜索走 replaceState。</span></div><!--rue:text-hole:9--></div></div></div><div class="card bg-base-100 shadow"><div class="card-body gap-4"><div class="flex flex-col gap-3"><div><h3 class="text-xl font-semibold">筛选结果</h3><p class="text-sm text-base-content/70">共 <!--rue:text-hole:10--> 条，当前展示 <!--rue:text-hole:11--> 条。</p></div><div class="flex flex-wrap gap-2 text-xs"><span class="rounded-full bg-base-200 px-3 py-1">search=<!--rue:text-hole:12--></span><span class="rounded-full bg-base-200 px-3 py-1">tab=<!--rue:text-hole:13--></span><span class="rounded-full bg-base-200 px-3 py-1">page=<!--rue:text-hole:14--></span></div></div><!--rue:text-hole:15--></div></div></div></div>`),H=3,U=6,W=[{id:`router-history`,title:`Router 历史模式拆解`,tab:`router`,teaser:`对比 Web History 与 Hash History 在路径同步上的差异。`,badge:`路由`},{id:`router-guards`,title:`导航守卫与重定向`,tab:`router`,teaser:`把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。`,badge:`守卫`},{id:`store-rue`,title:`defineStore 对象配置写法`,tab:`store`,teaser:`使用 state、getters、actions 组织集中式状态。`,badge:`Store`},{id:`store-query`,title:`Query Sync 字段映射`,tab:`store`,teaser:`把 search、tab、page 精确映射到 URL 查询参数。`,badge:`URL`},{id:`runtime-computed`,title:`computed 与 watchEffect 协作`,tab:`runtime`,teaser:`用细粒度依赖追踪驱动视图与副作用。`,badge:`响应式`},{id:`runtime-render`,title:`renderAnchor 更新链路`,tab:`runtime`,teaser:`观察 block/renderable 在局部更新时的最小 DOM 变更。`,badge:`渲染`}],ce=[{id:`all`,label:`全部`,hint:`默认值不会写入 URL。`},{id:`router`,label:`Router`,hint:`切换时走 throttle + history push。`},{id:`store`,label:`Store`,hint:`观察 defineStore 与 query sync 的配合。`},{id:`runtime`,label:`Runtime`,hint:`保持同一路径，只替换 search 状态。`}],G=0,K=I(`store-query-sync-demo`,{state:()=>({search:``,tab:`all`,page:1}),getters:{normalizedSearch(e){return String(e.search||``).trim().toLowerCase()}}}),le=e=>{let t=new URLSearchParams,n=String(e.search||``).trim();n&&t.set(`q`,n),e.tab!==`all`&&t.set(`tab`,e.tab),e.page!==1&&t.set(`page`,String(e.page));let r=t.toString();return r?`?${r}`:`(空)`},q=e=>{if(typeof window>`u`)return String(e||``);if(!e)return`${window.location.pathname}${window.location.search}${window.location.hash}`;let t=e instanceof URL?e:new URL(String(e),window.location.href);return`${t.pathname}${t.search}${t.hash}`},ue=e=>e===`push`?`pushState`:e===`replace`?`replaceState`:`popstate`,de=e=>{if(typeof window>`u`||!window.history)return()=>{};let t=window.history,n=t.pushState.bind(t),r=t.replaceState.bind(t);t.pushState=(...t)=>{n(...t),e(`push`,q(t[2]??null))},t.replaceState=(...t)=>{r(...t),e(`replace`,q(t[2]??null))};let i=()=>{e(`popstate`,q())};return window.addEventListener(`popstate`,i),()=>{t.pushState=n,t.replaceState=r,window.removeEventListener(`popstate`,i)}},J=()=>{let e=L();e.use(V({stores:{"store-query-sync-demo":{q:{path:`search`,parser:R.withDefault(``),limitUrlUpdates:z(500)},tab:{parser:R.withDefault(`all`),history:`push`,limitUrlUpdates:B(180)},page:{parser:F.withDefault(1),history:`push`,limitUrlUpdates:B(180)}}}}));let n=K(e),r=T(`computed:1:0`,()=>l(()=>{let e=n.normalizedSearch;return W.filter(t=>n.tab!==`all`&&t.tab!==n.tab?!1:!e||`${t.title} ${t.teaser} ${t.badge}`.toLowerCase().includes(e))})),i=T(`computed:1:1`,()=>l(()=>Math.max(1,Math.ceil(r.get().length/H))));return{root:e,store:n,filteredItems:r,visibleItems:T(`computed:1:2`,()=>l(()=>{let e=(Math.min(Math.max(1,n.page),i.get())-1)*H;return r.get().slice(e,e+H)})),totalPages:i,clampEffect:T(`watchEffect:1:3`,()=>t(()=>{let e=i.get();if(n.page<1){n.page=1;return}n.page>e&&(n.page=e)}))}},Y=()=>{let t=oe(),C=c(`StoreQuerySyncDemo:hook:0`,J),T=E([]),P=E(null),F=(e,t)=>{G+=1,T.value=[{id:G,kind:e,href:t},...T.value].slice(0,U)};p(()=>{P.value=de(F)}),e(()=>{P.value?.(),C.clampEffect.dispose(),C.root.dispose()});let I=t.get()?.path||`/examples/store-query-sync`,L=l(()=>Math.min(Math.max(1,C.store.page),C.totalPages.get())),R=l(()=>le(C.store)),z=()=>{C.store.search=``,C.store.tab=`all`,C.store.page=1},B=()=>{if(z(),typeof window>`u`||!window.history)return;let e=new URL(window.location.href);e.search=``,window.history.replaceState(window.history.state,``,`${e.pathname}${e.search}${e.hash}`)};return ne(()=>_(n(()=>{let e=h(),t=se().content.cloneNode(!0),n=t.firstChild,c=n.childNodes[0].childNodes[0].childNodes[1].childNodes[3],l=n.childNodes[0].childNodes[0].childNodes[1].childNodes[4],p=n.childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1],_=n.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],y=n.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[2],ne=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],E=ne.parentNode,oe=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],P=oe.parentNode,F=n.childNodes[0].childNodes[0].childNodes[1].childNodes[0],V=F.parentNode,H=n.childNodes[0].childNodes[0].childNodes[1].childNodes[1],U=H.parentNode,W=n.childNodes[0].childNodes[0].childNodes[1].childNodes[2],G=W.parentNode,K=n.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],le=K.parentNode,q=n.childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[0],de=q.parentNode,J=n.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[1],Y=J.parentNode,X=n.childNodes[1].childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[1].childNodes[3],fe=X.parentNode,pe=n.childNodes[1].childNodes[0].childNodes[0].childNodes[4].childNodes[1],me=pe.parentNode,he=n.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1],ge=he.parentNode,_e=n.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[3],ve=_e.parentNode,ye=n.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],be=ye.parentNode,xe=n.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],Se=xe.parentNode,Ce=n.childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1],we=Ce.parentNode,Te=n.childNodes[1].childNodes[1].childNodes[0].childNodes[1],Ee=Te.parentNode;e.appendChild(t),u(c,`btn btn-sm btn-ghost`);let De=e=>{let t=z;typeof t==`function`&&t(e)};c.addEventListener(`click`,De),d(()=>c.removeEventListener(`click`,De)),u(l,`btn btn-sm btn-ghost`);let Oe=e=>{let t=B;typeof t==`function`&&t(e)};l.addEventListener(`click`,Oe),d(()=>l.removeEventListener(`click`,Oe)),u(p,`input input-bordered`),A(()=>{o(p,C.store.search)});let ke=e=>{let t=e=>{C.store.search=e.target.value,C.store.page=1};typeof t==`function`&&t(e)};p.addEventListener(`input`,ke),d(()=>p.removeEventListener(`input`,ke)),j(p,`placeholder`,`例如：router / sync / render`),u(_,`btn btn-sm btn-outline`),A(()=>{i(_,L.get()<=1)});let Ae=e=>{let t=()=>{C.store.page=Math.max(1,L.get()-1)};typeof t==`function`&&t(e)};_.addEventListener(`click`,Ae),d(()=>_.removeEventListener(`click`,Ae)),u(y,`btn btn-sm btn-outline`),A(()=>{i(y,L.get()>=C.totalPages.get())});let je=e=>{let t=()=>{C.store.page=Math.min(C.totalPages.get(),L.get()+1)};typeof t==`function`&&t(e)};y.addEventListener(`click`,je),d(()=>y.removeEventListener(`click`,je)),A(()=>{let e=I;x(()=>D(e,E,ne))}),A(()=>{let e=R.get();x(()=>D(e,P,oe))});let Z=O(`a`,V);v(V,Z),V.insertBefore(Z,F),A(()=>{j(Z,`href`,String(N.__rueHref(`${I}?q=router&tab=router&page=1`)))});let Me=e=>{let t=e=>N.__rueOnClick(e,`${I}?q=router&tab=router&page=1`,!1);typeof t==`function`&&t(e)};Z.addEventListener(`click`,Me),d(()=>Z.removeEventListener(`click`,Me));let Ne=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`pointerenter`,Ne),d(()=>Z.removeEventListener(`pointerenter`,Ne));let Pe=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`focus`,Pe),d(()=>Z.removeEventListener(`focus`,Pe));let Fe=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`pointerdown`,Fe),d(()=>Z.removeEventListener(`pointerdown`,Fe));let Ie=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=router&tab=router&page=1`,`hover`);typeof t==`function`&&t(e)};Z.addEventListener(`touchstart`,Ie),d(()=>Z.removeEventListener(`touchstart`,Ie)),u(Z,`btn btn-sm btn-outline`),v(Z,M(`Router 预设`));let Q=O(`a`,U);v(U,Q),U.insertBefore(Q,H),A(()=>{j(Q,`href`,String(N.__rueHref(`${I}?q=sync&tab=store&page=1`)))});let Le=e=>{let t=e=>N.__rueOnClick(e,`${I}?q=sync&tab=store&page=1`,!1);typeof t==`function`&&t(e)};Q.addEventListener(`click`,Le),d(()=>Q.removeEventListener(`click`,Le));let Re=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Q.addEventListener(`pointerenter`,Re),d(()=>Q.removeEventListener(`pointerenter`,Re));let ze=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Q.addEventListener(`focus`,ze),d(()=>Q.removeEventListener(`focus`,ze));let Be=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Q.addEventListener(`pointerdown`,Be),d(()=>Q.removeEventListener(`pointerdown`,Be));let Ve=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=sync&tab=store&page=1`,`hover`);typeof t==`function`&&t(e)};Q.addEventListener(`touchstart`,Ve),d(()=>Q.removeEventListener(`touchstart`,Ve)),u(Q,`btn btn-sm btn-outline`),v(Q,M(`Store 预设`));let $=O(`a`,G);v(G,$),G.insertBefore($,W),A(()=>{j($,`href`,String(N.__rueHref(`${I}?q=render&tab=runtime&page=1`)))});let He=e=>{let t=e=>N.__rueOnClick(e,`${I}?q=render&tab=runtime&page=1`,!1);typeof t==`function`&&t(e)};$.addEventListener(`click`,He),d(()=>$.removeEventListener(`click`,He));let Ue=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`pointerenter`,Ue),d(()=>$.removeEventListener(`pointerenter`,Ue));let We=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`focus`,We),d(()=>$.removeEventListener(`focus`,We));let Ge=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`pointerdown`,Ge),d(()=>$.removeEventListener(`pointerdown`,Ge));let Ke=e=>{let t=e=>N.__rueOnPrefetch(e,`${I}?q=render&tab=runtime&page=1`,`hover`);typeof t==`function`&&t(e)};$.addEventListener(`touchstart`,Ke),d(()=>$.removeEventListener(`touchstart`,Ke)),u($,`btn btn-sm btn-outline`),v($,M(`Runtime 预设`));let qe=[];return A(()=>{qe=k(le,K,qe,ce||[],(e,t)=>e.id,(e,t)=>{let n=ee(e);return r((e,t,r)=>s(e,r,()=>f(Object.assign(e=>{let t=b(`button`,e),r;A(()=>{let e=`btn btn-sm ${C.store.tab===n.get().id?`btn-primary`:`btn-outline`}`,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.className=i)});let i=e=>{let t=()=>{C.store.tab=n.get().id,C.store.page=1};typeof t==`function`&&t(e)};t.addEventListener(`click`,i),a(()=>t.removeEventListener(`click`,i));let o=m(``);return w(t,o),ae(o,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>g(qe)),A(()=>{let e=ce.find(e=>e.id===C.store.tab)?.hint;x(()=>D(e,de,q))}),A(()=>{let e=L.get();x(()=>D(e,Y,J))}),A(()=>{let e=C.totalPages.get();x(()=>D(e,fe,X))}),S(me,pe,()=>T.value.length?{__rue_compiled_branch_key:!0,create:()=>f(Object.assign(e=>{let t=b(`ul`,e);t.className=`rounded-2xl border border-base-200 bg-base-100`;let n=te(`rue:list:end`);w(t,n);let i=[];return A(()=>{let e=T.value||[];i=k(n.parentNode,n,i,e,(e,t)=>e.id,(e,t)=>{let n=ee(e);return r((e,t,r)=>s(e,r,()=>f(Object.assign(e=>{let t=b(`li`,e);t.className=`flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0`;let r=b(`span`,t);w(t,r);let i;A(()=>{let e=`badge badge-sm ${n.get().kind===`push`?`badge-primary`:n.get().kind===`replace`?`badge-ghost`:`badge-outline`}`,t=e==null?``:String(e);Object.is(i,t)||(i=t,r.className=t)});let a=te(`rue:compiled-slot`);w(r,a),A(()=>{let e=ue(n.get().kind);x(()=>D(e,r,a))});let o=b(`span`,t);w(t,o),o.className=`font-mono text-xs text-base-content/70`;let s=m(``);return w(o,s),ae(s,()=>n.get().href),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>g(i)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=b(`div`,e);return t.className=`rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60`,w(t,m(`暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),A(()=>{let e=C.filteredItems.get().length;x(()=>D(e,ge,he))}),A(()=>{let e=C.visibleItems.get().length;x(()=>D(e,ve,_e))}),S(be,ye,()=>{let e=C.store.search;return e?{__rue_compiled_branch_key:e,create:()=>f(Object.assign(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=m(`(空)`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),A(()=>{let e=C.store.tab;x(()=>D(e,Se,xe))}),A(()=>{let e=L.get();x(()=>D(e,we,Ce))}),S(Ee,Te,()=>C.visibleItems.get().length?{__rue_compiled_branch_key:!0,create:()=>f(Object.assign(e=>{let t=b(`div`,e);t.className=`grid gap-3 md:grid-cols-2 xl:grid-cols-3`;let n=re(`<article class="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4"><div class="mb-3 flex items-center justify-between gap-3"><span class="badge badge-outline">rue:row-text</span><span class="text-xs text-base-content/50">rue:row-text</span></div><h4 class="text-base font-semibold leading-6"><!--rue:text-hole:2--></h4><p class="mt-2 text-sm leading-6 text-base-content/70">rue:row-text</p></article>`),r=te(`rue:list:end`);w(t,r);let i=[];return A(()=>{let e=C.visibleItems.get()||[];i=k(r.parentNode,r,i,e,(e,t)=>e.id,(e,t,r)=>{let i=e,a;return ie(e=>{let t=n().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0].childNodes[0];r.data=``,r.parentNode;let o=t.childNodes[0].childNodes[1].childNodes[0];o.data=``,o.parentNode;let s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[2].childNodes[0];l.data=``,l.parentNode;let u;{let e=i.badge==null||typeof i.badge==`boolean`?``:String(i.badge);Object.is(u,e)||(r.textContent=e,u=e)}let d;{let e=i.id==null||typeof i.id==`boolean`?``:String(i.id);Object.is(d,e)||(o.textContent=e,d=e)}let f=m(``);c.insertBefore(f,s),c.removeChild(s);let p;{let e=i.title==null||typeof i.title==`boolean`?``:String(i.title);Object.is(p,e)||(f.textContent=e,p=e)}let h;{let e=i.teaser==null||typeof i.teaser==`boolean`?``:String(i.teaser);Object.is(h,e)||(l.textContent=e,h=e)}return a=()=>{{let e=i.badge==null||typeof i.badge==`boolean`?``:String(i.badge);Object.is(u,e)||(r.textContent=e,u=e)}{let e=i.id==null||typeof i.id==`boolean`?``:String(i.id);Object.is(d,e)||(o.textContent=e,d=e)}{let e=i.title==null||typeof i.title==`boolean`?``:String(i.title);Object.is(p,e)||(f.textContent=e,p=e)}{let e=i.teaser==null||typeof i.teaser==`boolean`?``:String(i.teaser);Object.is(h,e)||(l.textContent=e,h=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,r)=>{e=n,t=r,i=n,a()},r)})}),a(()=>g(i)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>f(Object.assign(e=>{let t=b(`div`,e);return t.className=`rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60`,w(t,m(`当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0),e=>y(()=>{})))};C(Y);var X=P({title:`Store Query Sync 与 URL 状态`,source:`import { RouterLink, useRoute } from '@rue-js/router'
import {
  createQuerySync,
  createStore,
  debounce,
  defineStore,
  parseAsInteger,
  parseAsString,
  throttle,
} from '@rue-js/store'
import { type FC, computed, onMounted, onUnmounted, ref, useSetup, watchEffect } from '@rue-js/rue'

type DemoTab = 'all' | 'router' | 'store' | 'runtime'
type DemoItem = {
  id: string
  title: string
  tab: Exclude<DemoTab, 'all'>
  teaser: string
  badge: string
}

type HistoryRecordKind = 'push' | 'replace' | 'popstate'
type HistoryRecord = {
  id: number
  kind: HistoryRecordKind
  href: string
}

const PAGE_SIZE = 3
const MAX_HISTORY_RECORDS = 6
const DEMO_ITEMS: DemoItem[] = [
  {
    id: 'router-history',
    title: 'Router 历史模式拆解',
    tab: 'router',
    teaser: '对比 Web History 与 Hash History 在路径同步上的差异。',
    badge: '路由',
  },
  {
    id: 'router-guards',
    title: '导航守卫与重定向',
    tab: 'router',
    teaser: '把 beforeEach、beforeEnter 和 afterEach 串成一次真实导航。',
    badge: '守卫',
  },
  {
    id: 'store-rue',
    title: 'defineStore 对象配置写法',
    tab: 'store',
    teaser: '使用 state、getters、actions 组织集中式状态。',
    badge: 'Store',
  },
  {
    id: 'store-query',
    title: 'Query Sync 字段映射',
    tab: 'store',
    teaser: '把 search、tab、page 精确映射到 URL 查询参数。',
    badge: 'URL',
  },
  {
    id: 'runtime-computed',
    title: 'computed 与 watchEffect 协作',
    tab: 'runtime',
    teaser: '用细粒度依赖追踪驱动视图与副作用。',
    badge: '响应式',
  },
  {
    id: 'runtime-render',
    title: 'renderAnchor 更新链路',
    tab: 'runtime',
    teaser: '观察 block/renderable 在局部更新时的最小 DOM 变更。',
    badge: '渲染',
  },
]

const DEMO_TABS: Array<{ id: DemoTab; label: string; hint: string }> = [
  { id: 'all', label: '全部', hint: '默认值不会写入 URL。' },
  { id: 'router', label: 'Router', hint: '切换时走 throttle + history push。' },
  { id: 'store', label: 'Store', hint: '观察 defineStore 与 query sync 的配合。' },
  { id: 'runtime', label: 'Runtime', hint: '保持同一路径，只替换 search 状态。' },
]

let nextHistoryRecordId = 0

const useStoreQuerySyncDemoStore = defineStore('store-query-sync-demo', {
  state: () => ({
    search: '',
    tab: 'all' as DemoTab,
    page: 1,
  }),
  getters: {
    normalizedSearch(state: any) {
      return String(state.search || '')
        .trim()
        .toLowerCase()
    },
  },
})

const buildExpectedQuery = (store: any) => {
  const params = new URLSearchParams()
  const search = String(store.search || '').trim()
  if (search) {
    params.set('q', search)
  }
  if (store.tab !== 'all') {
    params.set('tab', store.tab)
  }
  if (store.page !== 1) {
    params.set('page', String(store.page))
  }
  const query = params.toString()
  return query ? \`?\${query}\` : '(空)'
}

const buildRecordedHref = (input?: string | URL | null) => {
  if (typeof window === 'undefined') {
    return String(input || '')
  }

  if (!input) {
    return \`\${window.location.pathname}\${window.location.search}\${window.location.hash}\`
  }

  const nextUrl = input instanceof URL ? input : new URL(String(input), window.location.href)
  return \`\${nextUrl.pathname}\${nextUrl.search}\${nextUrl.hash}\`
}

const getHistoryRecordLabel = (kind: HistoryRecordKind) => {
  if (kind === 'push') {
    return 'pushState'
  }

  if (kind === 'replace') {
    return 'replaceState'
  }

  return 'popstate'
}

const installHistoryRecorder = (appendRecord: (kind: HistoryRecordKind, href: string) => void) => {
  if (typeof window === 'undefined' || !window.history) {
    return () => {}
  }

  const historyApi = window.history
  const originalPushState = historyApi.pushState.bind(historyApi)
  const originalReplaceState = historyApi.replaceState.bind(historyApi)

  historyApi.pushState = ((...args: Parameters<History['pushState']>) => {
    originalPushState(...args)
    appendRecord('push', buildRecordedHref(args[2] ?? null))
  }) as History['pushState']

  historyApi.replaceState = ((...args: Parameters<History['replaceState']>) => {
    originalReplaceState(...args)
    appendRecord('replace', buildRecordedHref(args[2] ?? null))
  }) as History['replaceState']

  const handlePopState = () => {
    appendRecord('popstate', buildRecordedHref())
  }

  window.addEventListener('popstate', handlePopState)

  return () => {
    historyApi.pushState = originalPushState
    historyApi.replaceState = originalReplaceState
    window.removeEventListener('popstate', handlePopState)
  }
}

const createDemoState = () => {
  const root = createStore()
  root.use(
    createQuerySync({
      stores: {
        'store-query-sync-demo': {
          q: {
            path: 'search',
            parser: parseAsString.withDefault(''),
            limitUrlUpdates: debounce(500),
          },
          tab: {
            parser: parseAsString.withDefault('all'),
            history: 'push',
            limitUrlUpdates: throttle(180),
          },
          page: {
            parser: parseAsInteger.withDefault(1),
            history: 'push',
            limitUrlUpdates: throttle(180),
          },
        },
      },
    }),
  )

  const store = useStoreQuerySyncDemoStore(root)
  const filteredItems = computed(() => {
    const query = store.normalizedSearch
    return DEMO_ITEMS.filter(item => {
      const matchesTab = store.tab === 'all' || item.tab === store.tab
      if (!matchesTab) {
        return false
      }
      if (!query) {
        return true
      }
      return \`\${item.title} \${item.teaser} \${item.badge}\`.toLowerCase().includes(query)
    })
  })
  const totalPages = computed(() => Math.max(1, Math.ceil(filteredItems.get().length / PAGE_SIZE)))
  const visibleItems = computed(() => {
    const currentPage = Math.min(Math.max(1, store.page), totalPages.get())
    const start = (currentPage - 1) * PAGE_SIZE
    return filteredItems.get().slice(start, start + PAGE_SIZE)
  })
  const clampEffect = watchEffect(() => {
    const maxPage = totalPages.get()
    if (store.page < 1) {
      store.page = 1
      return
    }
    if (store.page > maxPage) {
      store.page = maxPage
    }
  })

  return {
    root,
    store,
    filteredItems,
    visibleItems,
    totalPages,
    clampEffect,
  }
}

const StoreQuerySyncDemo: FC = () => {
  const route = useRoute()
  const demo = useSetup(createDemoState)
  const historyRecords = ref<HistoryRecord[]>([])
  const historyRecorderCleanup = ref<(() => void) | null>(null)

  const appendHistoryRecord = (kind: HistoryRecordKind, href: string) => {
    nextHistoryRecordId += 1
    historyRecords.value = [
      {
        id: nextHistoryRecordId,
        kind,
        href,
      },
      ...historyRecords.value,
    ].slice(0, MAX_HISTORY_RECORDS)
  }

  onMounted(() => {
    historyRecorderCleanup.value = installHistoryRecorder(appendHistoryRecord)
  })

  onUnmounted(() => {
    historyRecorderCleanup.value?.()
    demo.clampEffect.dispose()
    demo.root.dispose()
  })

  const currentPath = route.get()?.path || '/examples/store-query-sync'
  const currentPage = computed(() => Math.min(Math.max(1, demo.store.page), demo.totalPages.get()))
  const expectedQuery = computed(() => buildExpectedQuery(demo.store))

  const resetStoreQuery = () => {
    demo.store.search = ''
    demo.store.tab = 'all'
    demo.store.page = 1
  }

  const clearAllUrlParams = () => {
    resetStoreQuery()

    if (typeof window === 'undefined' || !window.history) {
      return
    }

    const nextUrl = new URL(window.location.href)
    nextUrl.search = ''
    window.history.replaceState(
      window.history.state,
      '',
      \`\${nextUrl.pathname}\${nextUrl.search}\${nextUrl.hash}\`,
    )
  }

  return (
    <div className="grid gap-6">
      <div className="card bg-base-100 shadow">
        <div className="card-body gap-4">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Store、Router、Query Sync 串联演示</h2>
              <p className="max-w-3xl text-sm leading-6 text-base-content/75">
                搜索框走 500ms debounce，分类和分页走 throttle + history push。页面路径由 Router
                控制，查询参数由 Store Query Sync 控制，二者共享同一条可分享链接。
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-base-200 px-3 py-1 font-medium">
                当前路由：{currentPath}
              </span>
              <span className="rounded-full bg-base-200 px-3 py-1 font-medium">
                预期 Query：{expectedQuery.get()}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <RouterLink
              className="btn btn-sm btn-outline"
              to={\`\${currentPath}?q=router&tab=router&page=1\`}
            >
              Router 预设
            </RouterLink>
            <RouterLink
              className="btn btn-sm btn-outline"
              to={\`\${currentPath}?q=sync&tab=store&page=1\`}
            >
              Store 预设
            </RouterLink>
            <RouterLink
              className="btn btn-sm btn-outline"
              to={\`\${currentPath}?q=render&tab=runtime&page=1\`}
            >
              Runtime 预设
            </RouterLink>
            <button className="btn btn-sm btn-ghost" onClick={resetStoreQuery}>
              清空 Query
            </button>
            <button className="btn btn-sm btn-ghost" onClick={clearAllUrlParams}>
              清理所有 URL 参数
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="card bg-base-100 shadow">
          <div className="card-body gap-4">
            <label className="form-control gap-2">
              <span className="label-text font-medium">搜索（debounce 500ms）</span>
              <input
                className="input input-bordered"
                value={demo.store.search}
                onInput={(event: Event) => {
                  demo.store.search = (event.target as HTMLInputElement).value
                  demo.store.page = 1
                }}
                placeholder="例如：router / sync / render"
              />
            </label>

            <div className="grid gap-2">
              <span className="label-text font-medium">分类（throttle 180ms + push）</span>
              <div className="flex flex-wrap gap-2">
                {DEMO_TABS.map(tab => (
                  <button
                    key={tab.id}
                    className={\`btn btn-sm \${demo.store.tab === tab.id ? 'btn-primary' : 'btn-outline'}\`}
                    onClick={() => {
                      demo.store.tab = tab.id
                      demo.store.page = 1
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="text-xs leading-5 text-base-content/60">
                {DEMO_TABS.find(tab => tab.id === demo.store.tab)?.hint}
              </p>
            </div>

            <div className="grid gap-2">
              <span className="label-text font-medium">分页（throttle 180ms + push）</span>
              <div className="flex items-center gap-2">
                <button
                  className="btn btn-sm btn-outline"
                  disabled={currentPage.get() <= 1}
                  onClick={() => {
                    demo.store.page = Math.max(1, currentPage.get() - 1)
                  }}
                >
                  上一页
                </button>
                <span className="min-w-24 text-center text-sm font-medium">
                  第 {currentPage.get()} / {demo.totalPages.get()} 页
                </span>
                <button
                  className="btn btn-sm btn-outline"
                  disabled={currentPage.get() >= demo.totalPages.get()}
                  onClick={() => {
                    demo.store.page = Math.min(demo.totalPages.get(), currentPage.get() + 1)
                  }}
                >
                  下一页
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-base-200 bg-base-200/40 p-4 text-sm leading-6 text-base-content/70">
              <p>本地状态会立刻刷新卡片列表。</p>
              <p>地址栏会按 debounce 或 throttle 的规则延后追上。</p>
              <p>上面的预设链接会保持同一路由，只替换 query，用浏览器后退能看到 push 历史回放。</p>
              <p>
                下方记录面板会直接捕获 pushState、replaceState 和
                popstate，方便确认“下一页”是否真的入栈。
              </p>
            </div>

            <div className="grid gap-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="label-text font-medium">URL 写入记录</span>
                <span className="text-xs text-base-content/60">
                  分类 / 分页走 pushState，搜索走 replaceState。
                </span>
              </div>

              {historyRecords.value.length ? (
                <ul className="rounded-2xl border border-base-200 bg-base-100">
                  {historyRecords.value.map(record => (
                    <li
                      key={record.id}
                      className="flex flex-wrap items-center gap-2 border-b border-base-200 px-4 py-3 text-sm last:border-b-0"
                    >
                      <span
                        className={\`badge badge-sm \${record.kind === 'push' ? 'badge-primary' : record.kind === 'replace' ? 'badge-ghost' : 'badge-outline'}\`}
                      >
                        {getHistoryRecordLabel(record.kind)}
                      </span>
                      <span className="font-mono text-xs text-base-content/70">{record.href}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-2xl border border-dashed border-base-300 p-4 text-sm text-base-content/60">
                  暂无 URL 写入记录。点击“下一页”或切换分类后，会在这里看到入栈结果。
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body gap-4">
            <div className="flex flex-col gap-3">
              <div>
                <h3 className="text-xl font-semibold">筛选结果</h3>
                <p className="text-sm text-base-content/70">
                  共 {demo.filteredItems.get().length} 条，当前展示 {demo.visibleItems.get().length}{' '}
                  条。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-base-200 px-3 py-1">
                  search={demo.store.search || '(空)'}
                </span>
                <span className="rounded-full bg-base-200 px-3 py-1">tab={demo.store.tab}</span>
                <span className="rounded-full bg-base-200 px-3 py-1">page={currentPage.get()}</span>
              </div>
            </div>

            {demo.visibleItems.get().length ? (
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {demo.visibleItems.get().map(item => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-base-200 bg-gradient-to-br from-base-100 to-base-200/70 p-4"
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="badge badge-outline">{item.badge}</span>
                      <span className="text-xs text-base-content/50">{item.id}</span>
                    </div>
                    <h4 className="text-base font-semibold leading-6">{item.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-base-content/70">{item.teaser}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-base-300 p-8 text-center text-sm text-base-content/60">
                当前筛选没有命中结果。尝试清空搜索词，或者切回“全部”分类。
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoreQuerySyncDemo
`,Demo:Y,codeCardClassName:`h-[520px] md:h-[1220px]`});export{X as default};