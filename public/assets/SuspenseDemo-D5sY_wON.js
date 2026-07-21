const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-CMi418Ed.js","assets/context-8lXZvIn-.js","assets/rolldown-runtime-aKtaBQYM.js","assets/vapor-runtime-ygJWVcNn.js","assets/AsyncActivityPanel-JPU3QaWx.js"])))=>i.map(i=>d[i]);
import{Cn as e,Ct as t,D as n,H as r,J as i,O as a,Tt as o,X as s,Y as c,Z as l,_ as u,_t as d,dt as f,ft as p,hn as m,j as h,m as g,mt as _,ot as v,pn as y,pt as b,q as x,st as S,tn as C,vn as w}from"./context-8lXZvIn-.js";import{l as T,o as E,t as D}from"./vapor-runtime-ygJWVcNn.js";import{a as O}from"./vapor-helpers-vapor-CMwHgsXf.js";import{a as k}from"./useComponent-gGaQDIJI.js";import{t as A}from"./preload-helper-Czpn1I53.js";import{t as ee}from"./Code-DhoWkRkB.js";import{t as j}from"./src-CCTNpCXV.js";import{r as M}from"./SidebarPlaygroundExample-B78jsvoF.js";var N=`__rue_is_server_rendering__`,P=`__rue_suspense_staging`,F=()=>{let e=globalThis[N];return typeof e==`number`&&e>0},I=e=>Array.isArray(e)?e.map(I):e,L=e=>({...e,children:I(e.children),fallback:I(e.fallback)}),R=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],z=e=>{if(e==null)return 0;let t=Number(e);return Number.isFinite(t)&&t>0?t:0},B=e=>{typeof e==`function`&&e()},V=t=>{if(F()){let e=R(t.children);return Array.isArray(e)?g(`fragment`,null,...e):g(`fragment`,null,e)}let r=e(()=>{let e=c(),n=b(`div`);n&&n.style&&typeof n.style==`object`&&(n.style.display=`contents`);let r=b(`div`);r&&r.style&&typeof r.style==`object`&&(r.style.display=`none`),r[P]=!0;let i=typeof r.attachShadow==`function`?r.attachShadow({mode:`open`})??r:r,a={id:Symbol(`rue-suspense-boundary`),register:()=>{}};n[x]=a;let o=f(`rue-suspense-start`),s=f(`rue-suspense-end`);S(n,r),S(n,o),S(n,s);let l=b(`div`);l&&l.style&&typeof l.style==`object`&&(l.style.display=`contents`),l[x]=a;let u=f(`rue-suspense-content-start`),d=f(`rue-suspense-content-end`);S(l,u),S(l,d),S(i,l);let p=b(`div`);p&&p.style&&typeof p.style==`object`&&(p.style.display=`contents`);let h=f(`rue-suspense-fallback-start`),g=f(`rue-suspense-fallback-end`);return S(p,h),S(p,g),S(i,p),{boundary:a,parentBoundary:e,container:n,stagingHost:r,startEl:o,endEl:s,contentContainer:l,contentStartEl:u,contentEndEl:d,fallbackContainer:p,fallbackStartEl:h,fallbackEndEl:g,propsSig:m(L(t),{},!0),lastProps:t,lastFallback:void 0,fallbackReady:!1,contentMounted:!1,contentVisible:!1,retrySig:m(0,{},!0),status:`initial`,pendingId:0,showId:0,hadPending:!1,hasResolvedContent:!1,showingFallback:!1,pendingThenables:new Set,fallbackTimer:null,effect:null}}),i=()=>{r.fallbackTimer&&=(clearTimeout(r.fallbackTimer),null)},o=()=>{r.retrySig.set(r.retrySig.get()+1)},p=()=>{let e=d(r.container);for(;e;){let t=e[x];if(t&&t!==r.boundary)return r.parentBoundary=t,t;e=d(e)}return r.parentBoundary&&r.parentBoundary!==r.boundary?r.parentBoundary:null},_=(e,t)=>{if(!t.suspensible)return;let n=p();if(n){n.register(e);return}queueMicrotask(()=>{!r.propsSig.get().suspensible||!r.pendingThenables.has(e)||p()?.register(e)})},v=e=>r.pendingThenables.has(e)?!1:(r.pendingThenables.add(e),Promise.resolve(e).then(()=>{r.pendingThenables.delete(e),o()},t=>{r.pendingThenables.delete(e),a.handleError?.(t,null),o()}),!0),y=(e,t,n)=>{let r=[],i=e.nextSibling;for(;i&&i!==t;){let e=i.nextSibling;n&&typeof i.cloneNode==`function`?r.push(i.cloneNode(!0)):r.push(i),i=e}return r},w=()=>y(r.fallbackStartEl,r.fallbackEndEl,!0),T=()=>y(r.contentStartEl,r.contentEndEl,!1),E=e=>{r.lastFallback!==e.fallback&&(r.lastFallback=e.fallback,r.fallbackReady=!1,n(R(e.fallback),r.fallbackContainer,r.fallbackStartEl,r.fallbackEndEl),queueMicrotask(()=>{r.fallbackReady=!0,r.status===`pending`&&D(r.propsSig.get(),r.pendingId)}))},D=(e,t)=>{if(r.status!==`pending`||r.pendingId!==t)return;r.showingFallback||(r.showingFallback=!0,B(e.onFallback));let i=r.fallbackReady?w():[];if(i.length>0){r.contentVisible=!1,n(i,r.container,r.startEl,r.endEl);return}if(!r.fallbackReady){queueMicrotask(()=>D(r.propsSig.get(),t));return}r.contentVisible=!1,n(R(e.fallback),r.container,r.startEl,r.endEl)},O=e=>{if(r.contentVisible||r.pendingThenables.size>0)return;i();let t=r.status===`pending`||r.hadPending;n(T(),r.container,r.startEl,r.endEl),r.status=`resolved`,r.hasResolvedContent=!0,r.showingFallback=!1,r.contentVisible=!0,r.hadPending=!1,t&&B(e.onResolve)},k=e=>{let t=++r.showId;queueMicrotask(()=>{queueMicrotask(()=>{r.showId===t&&O(e)})})},A=(e,t)=>{i();let n=z(e.timeout);if(r.hasResolvedContent&&n>0){r.fallbackTimer=setTimeout(()=>{r.fallbackTimer=null,D(r.propsSig.get(),t)},n);return}D(e,t)};return r.boundary.register=e=>{let t=v(e),n=r.propsSig.get();t&&_(e,n),!(!t&&r.status===`pending`)&&(r.status!==`pending`&&(r.status=`pending`,B(n.onPending)),r.hadPending=!0,r.showId+=1,r.pendingId+=1,A(n,r.pendingId))},r.effect||=C(()=>{r.retrySig.get();let e=r.propsSig.get();E(e);try{r.contentMounted||=(l(r.boundary,()=>{n(R(e.children),r.contentContainer,r.contentStartEl,r.contentEndEl)}),!0),k(e)}catch(t){if(!s(t))throw a.handleError?.(t,null),t;v(t)&&_(t,e),r.status!==`pending`&&(r.status=`pending`,B(e.onPending)),r.pendingId+=1,A(e,r.pendingId)}}),u(()=>{i(),delete r.container[x],delete r.contentContainer[x],r.effect?.dispose?.(),r.effect=null,r.pendingThenables.clear(),n([],r.container,r.startEl,r.endEl),n([],r.contentContainer,r.contentStartEl,r.contentEndEl),n([],r.fallbackContainer,r.fallbackStartEl,r.fallbackEndEl)}),h(()=>(r.lastProps!==t&&(r.lastProps=t,r.contentMounted=!1,r.contentVisible=!1,r.showId+=1,r.propsSig.set(L(t))),r.container))};Object.defineProperty(V,i,{configurable:!1,enumerable:!1,value:!0}),r(V,`Suspense`);var te=e=>new Promise(t=>setTimeout(t,e)),H=(e,t)=>te(t).then(e),ne=k(()=>H(()=>A(()=>import(`./AsyncRevenuePanel-CMi418Ed.js`),__vite__mapDeps([0,1,2,3])),900)),re=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-JPU3QaWx.js`),__vite__mapDeps([4,1,2,3])),1400)),ie=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-JPU3QaWx.js`),__vite__mapDeps([4,1,2,3])),2600)),ae=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-JPU3QaWx.js`),__vite__mapDeps([4,1,2,3])),2800)),oe=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-JPU3QaWx.js`),__vite__mapDeps([4,1,2,3])),3200),{loading:()=>T(e=>{let t=b(`div`,e);o(t,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let n=b(`span`,t);return S(t,n),o(n,`loading loading-spinner loading-sm mr-2`),S(t,_(`本地 loading：这个异步组件设置了 suspensible: false`)),t}),suspensible:!1}),U={primary:{root:`border-primary/35 bg-primary/10`,spinner:`text-primary`},accent:{root:`border-accent/35 bg-accent/10`,spinner:`text-accent`},warning:{root:`border-warning/45 bg-warning/10`,spinner:`text-warning`},info:{root:`border-info/40 bg-info/10`,spinner:`text-info`}},W=t=>{let{tone:n}=O(`useSetup:0:0`,()=>e(()=>({tone:U[t.tone??`primary`]})));return T(e=>{let r=b(`div`,e);C(()=>{o(r,`rounded-box border border-dashed p-4 ${n.root}`)});let i=b(`div`,r);S(r,i),o(i,`flex items-center gap-3`);let a=b(`span`,i);S(i,a),C(()=>{o(a,`loading loading-spinner loading-md ${n.spinner}`)});let s=b(`div`,i);S(i,s);let c=b(`div`,s);S(s,c),o(c,`font-semibold`);let l=f(`rue:slot:anchor`);S(c,l),C(()=>{let e=t.title;w(()=>E(e,c,l))});let u=b(`div`,s);S(s,u),o(u,`text-sm opacity-70`);let d=f(`rue:slot:anchor`);S(u,d),C(()=>{let e=t.detail;w(()=>E(e,u,d))});let p=b(`div`,r);S(r,p),o(p,`mt-4 grid gap-3 md:grid-cols-2`);let m=b(`div`,p);S(p,m),o(m,`skeleton h-24 rounded-box`);let h=b(`div`,p);return S(p,h),o(h,`skeleton h-24 rounded-box`),r})},se=e=>T(t=>{let n=b(`div`,t);o(n,`rounded-box border-2 border-warning/50 bg-warning/10 p-4`);let r=b(`div`,n);S(n,r),o(r,`mb-2 inline-flex rounded-field border border-warning/40 px-2 py-1 text-xs font-semibold text-warning`),S(r,_(`内层 fallback 可见`));let i=b(`div`,n);S(n,i),o(i,`flex items-center gap-3`);let a=b(`span`,i);S(i,a),o(a,`loading loading-dots loading-md text-warning`);let s=b(`div`,i);S(i,s);let c=b(`div`,s);S(s,c),o(c,`font-semibold`);let l=f(`rue:slot:anchor`);S(c,l),C(()=>{let t=e.title;w(()=>E(t,c,l))});let u=b(`div`,s);S(s,u),o(u,`text-sm opacity-70`);let d=f(`rue:slot:anchor`);return S(u,d),C(()=>{let t=e.detail;w(()=>E(t,u,d))}),n}),ce=e=>T(t=>{let n=b(`div`,t);o(n,`rounded-box border-2 border-success/45 bg-success/10 p-4`);let r=b(`div`,n);S(n,r),o(r,`mb-3 flex flex-wrap items-start justify-between gap-3`);let i=b(`div`,r);S(r,i);let a=b(`div`,i);S(i,a),o(a,`font-semibold`);let s=f(`rue:slot:anchor`);S(a,s),C(()=>{let t=e.title;w(()=>E(t,a,s))});let c=b(`div`,i);S(i,c),o(c,`text-sm opacity-70`),S(c,_(`这块绿色区域代表外层 children。是否被替换，是两个场景最明显的区别。`));let l=b(`span`,r);S(r,l),o(l,`badge badge-success badge-outline`);let u=f(`rue:slot:anchor`);S(l,u),C(()=>{let t=e.badge;w(()=>E(t,l,u))});let d=b(`div`,n);S(n,d),o(d,`rounded-box border border-base-300 bg-base-100/70 p-3`);let p=f(`rue:children:anchor`);return S(d,p),C(()=>{let t=e.children;w(()=>E(t,d,p))}),n}),le=`import { Suspense, type FC, useComponent } from '@rue-js/rue';

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const resolveAfter = <P,>(component: FC<P>, ms: number) =>
  wait(ms).then(() => ({ default: component }));

const RevenuePanel: FC<{ period?: string }> = props => (
  <article className="rounded-box border border-primary/25 bg-primary/10 p-4">
    <div className="text-xs uppercase tracking-[0.22em] opacity-60">Revenue</div>
    <div className="mt-2 text-3xl font-semibold">¥ 342,800</div>
    <div className="mt-1 text-sm opacity-75">
      {props.period ?? '本周'} 转化收入，环比 +12.6%
    </div>
  </article>
);

const ActivityPanel: FC<{ title?: string }> = props => (
  <section className="rounded-box border border-accent/25 bg-accent/10 p-4">
    <div className="text-xs uppercase tracking-[0.22em] opacity-60">Activity</div>
    <h3 className="mt-2 text-xl font-semibold">{props.title ?? '异步活动流'}</h3>
    <ol className="mt-4 space-y-2 text-sm">
      <li>收入组件和活动流组件共享同一个 Suspense fallback。</li>
      <li>加载完成后，边界重新渲染 children 内容。</li>
    </ol>
  </section>
);

const AsyncRevenuePanel = useComponent(() =>
  resolveAfter(RevenuePanel, 900),
);

const AsyncActivityPanel = useComponent(() =>
  resolveAfter(ActivityPanel, 1400),
);

const AsyncNestedDefaultActivityPanel = useComponent(() =>
  resolveAfter(ActivityPanel, 2600),
);

const AsyncNestedSuspensibleActivityPanel = useComponent(() =>
  resolveAfter(ActivityPanel, 2800),
);

const AsyncLocalActivityPanel = useComponent(
  () => resolveAfter(ActivityPanel, 3200),
  {
    loading: () => <div>本地 loading</div>,
    suspensible: false,
  },
);

const NestedOuterFrame: FC<{ title: string; children?: unknown }> = props => (
  <div className="rounded-box border-2 border-success/45 bg-success/10 p-4">
    <strong>{props.title}</strong>
    <div>绿色外层区域是否还在，是两个嵌套场景最明显的区别。</div>
    <div className="mt-3">{props.children}</div>
  </div>
);

export default function Demo() {
  return (
    <>
      <Suspense fallback={<div>统一 fallback 正在加载</div>}>
        <AsyncRevenuePanel period="Q2" />
        <AsyncActivityPanel title="统一边界内的活动流" />
      </Suspense>

      <div className="grid gap-4 md:grid-cols-2">
        <Suspense fallback={<div>默认父级 fallback（不会显示）</div>}>
          <NestedOuterFrame title="默认：外层绿色框仍然可见">
            <Suspense fallback={<div>默认：内层 fallback 正在加载</div>}>
              <AsyncNestedDefaultActivityPanel title="默认异步内容已解析" />
            </Suspense>
          </NestedOuterFrame>
        </Suspense>

        <Suspense fallback={<div>父级 fallback 接管整块外层内容</div>}>
          <NestedOuterFrame title="开启 suspensible：加载时这块会被替换">
            <Suspense suspensible fallback={<div>内层 fallback 会被父级覆盖</div>}>
              <AsyncNestedSuspensibleActivityPanel title="交给父边界的活动流" />
            </Suspense>
          </NestedOuterFrame>
        </Suspense>
      </div>

      <Suspense fallback={<div>不会显示的外层 fallback</div>}>
        <AsyncLocalActivityPanel title="本地 loading 控制的活动流" />
      </Suspense>
    </>
  );
}`,G=()=>{let{activeTab:n}=O(`useSetup:0:0:dup1`,()=>e(()=>({activeTab:O(`ref:1:0`,()=>y(`preview`))})));return T(e=>{let r=p(),i=f(`rue:component:anchor`);return S(r,i),E(D(M,{children:T(()=>{let e=p(),r=b(`h1`,e);S(e,r),o(r,`mb-4 text-5xl font-semibold md:mb-4`),S(r,_(`Suspense 异步边界`));let i=b(`div`,e);S(e,i),t(i,`role`,`tablist`),o(i,`tabs tabs-box`);let a=b(`button`,i);S(i,a),t(a,`role`,`tab`),C(()=>{o(a,`tab ${n.value===`preview`?`tab-active`:``}`)}),v(a,`click`,()=>{n.value=`preview`}),S(a,_(`效果`));let s=b(`button`,i);S(i,s),t(s,`role`,`tab`),C(()=>{o(s,`tab ${n.value===`code`?`tab-active`:``}`)}),v(s,`click`,()=>{n.value=`code`}),S(s,_(`代码`));let c=b(`div`,e);S(e,c),C(()=>{o(c,`mt-4 grid gap-6 ${n.value===`preview`?``:`hidden`}`)});let l=b(`div`,c);S(c,l),o(l,`card bg-base-100 shadow`);let u=b(`div`,l);S(l,u),o(u,`card-body gap-6`);let d=b(`section`,u);S(u,d),o(d,`space-y-3`);let m=b(`div`,d);S(d,m);let h=b(`h2`,m);S(m,h),o(h,`text-xl font-semibold`),S(h,_(`1. 一个边界等待多个异步组件`));let g=b(`p`,m);S(m,g),o(g,`text-sm opacity-75`),S(g,_(`逻辑：useComponent 默认会把 pending promise 登记到最近的 Suspense；边界收集到任意 pending 后显示 fallback，等全部 resolve 后再恢复 children。`));let y=b(`div`,d);S(d,y),o(y,`rounded-box border border-dashed border-base-300 p-4`);let x=f(`rue:component:anchor`);S(y,x);let O=T(()=>{let e=p(),t=b(`div`,e);S(e,t),o(t,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let n=f(`rue:component:anchor`);S(t,n),E(D(ne,{period:`Q2`}),t,n);let r=f(`rue:component:anchor`);return S(t,r),E(D(re,{title:`统一边界内的活动流`}),t,r),e});C(()=>{let e=D(V,{fallback:j(W,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:O});w(()=>E(e,y,x))});let k=b(`section`,u);S(u,k),o(k,`space-y-3`);let A=b(`div`,k);S(k,A);let M=b(`h2`,A);S(A,M),o(M,`text-xl font-semibold`),S(M,_(`2. 内层边界交给父 Suspense`));let N=b(`p`,A);S(A,N),o(N,`text-sm opacity-75`),S(N,_(`左边是默认嵌套：外层绿色框还在，只显示黄色的内层 fallback。右边开启 suspensible：内层 pending 被继续登记到父边界，绿色外层框会整块被父级 fallback 替换。`));let P=b(`div`,k);S(k,P),o(P,`grid gap-4 lg:grid-cols-2`);let F=b(`div`,P);S(P,F),o(F,`space-y-2`);let I=b(`div`,F);S(F,I),o(I,`flex flex-wrap items-center justify-between gap-2`);let L=b(`h3`,I);S(I,L),o(L,`font-semibold`),S(L,_(`默认：内层自己处理`));let R=b(`span`,I);S(I,R),o(R,`badge badge-warning badge-outline`),S(R,_(`外层框保持可见`));let z=f(`rue:component:anchor`);S(F,z);let B=D(ie,{title:`默认异步内容已解析`}),te=D(ce,{title:`默认嵌套边界`,badge:`外层 children 仍在`,children:D(V,{fallback:j(se,{title:`默认：内层 fallback 正在加载`,detail:`只有内部插槽被替换，绿色外层框没有消失`}),children:B})});C(()=>{let e=D(V,{fallback:j(W,{title:`默认父级 fallback`,detail:`这个 fallback 不会显示，因为内层边界已经接住 pending`,tone:`info`}),children:te});w(()=>E(e,F,z))});let H=b(`div`,P);S(P,H),o(H,`space-y-2`);let U=b(`div`,H);S(H,U),o(U,`flex flex-wrap items-center justify-between gap-2`);let G=b(`h3`,U);S(U,G),o(G,`font-semibold`),S(G,_(`开启：交给父级接管`));let K=b(`span`,U);S(U,K),o(K,`badge badge-accent badge-outline`),S(K,_(`外层框会被替换`));let ue=f(`rue:component:anchor`);S(H,ue);let de=D(ae,{title:`交给父边界的活动流`}),fe=D(ce,{title:`开启 suspensible 的嵌套边界`,badge:`resolved 后才出现`,children:D(V,{suspensible:!0,fallback:j(se,{title:`内层 fallback 会被父级覆盖`,detail:`开启 suspensible 后，这个黄色 fallback 不会出现在可见区域`}),children:de})});C(()=>{let e=D(V,{fallback:j(W,{title:`父级 fallback 接管整块外层内容`,detail:`右侧绿色外层框加载期间不可见，因为 pending 被转发给父边界`,tone:`accent`}),children:fe});w(()=>E(e,H,ue))});let q=b(`section`,u);S(u,q),o(q,`space-y-3`);let J=b(`div`,q);S(q,J);let pe=b(`h2`,J);S(J,pe),o(pe,`text-xl font-semibold`),S(pe,_(`3. 退出 Suspense 控制`));let me=b(`p`,J);S(J,me),o(me,`text-sm opacity-75`),S(me,_(`逻辑：这是组件级开关。useComponent 设置 suspensible: false 后不会向最近边界登记 pending，因此外层 fallback 不会显示，组件自己的 loading 负责占位。`));let Y=b(`div`,q);S(q,Y),o(Y,`rounded-box border border-dashed border-base-300 p-4`);let he=f(`rue:component:anchor`);S(Y,he);let ge=D(oe,{title:`本地 loading 控制的活动流`});C(()=>{let e=D(V,{fallback:j(W,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:ge});w(()=>E(e,Y,he))});let X=b(`div`,u);S(u,X),t(X,`role`,`alert`),o(X,`alert alert-info alert-soft`);let _e=b(`span`,X);S(X,_e),S(_e,_(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let Z=b(`div`,e);S(e,Z),C(()=>{o(Z,`mt-4 grid gap-6 ${n.value===`code`?``:`hidden`}`)});let Q=b(`div`,Z);S(Z,Q),o(Q,`card bg-base-100 shadow`);let $=b(`div`,Q);S(Q,$),o($,`card-body p-0`);let ve=f(`rue:component:anchor`);return S($,ve),C(()=>{let e=D(ee,{className:`h-full`,lang:`tsx`,code:le});w(()=>E(e,$,ve))}),e})}),r,i),r})};export{G as default};