const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-CDEsK9YL.js","assets/vapor-runtime-DsQWl-IB.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-C1GR2qdd.js"])))=>i.map(i=>d[i]);
import{$t as e,F as t,G as n,H as r,Jt as i,K as a,P as o,Q as s,R as c,U as l,W as u,Xt as d,Z as f,at as p,dt as m,et as h,in as g,l as _,lt as v,nt as y,o as b,rt as x,t as S,tt as C,w,z as T,zt as E}from"./vapor-runtime-DsQWl-IB.js";import{a as D}from"./vapor-helpers-vapor-Dg64FcpK.js";import{i as O}from"./persistentSidebarPlayground-6jqnvaEa.js";import{a as k}from"./useComponent-DrVOwDCl.js";import{t as A}from"./preload-helper-Bf_JiD2A.js";import{t as ee}from"./Code-4SUSUwRg.js";import{r as j}from"./SidebarPlaygroundExample-BEWYUWOl.js";var M=`__rue_is_server_rendering__`,N=`__rue_suspense_staging`,P=()=>{let e=globalThis[M];return typeof e==`number`&&e>0},F=e=>Array.isArray(e)?e.map(F):e,I=e=>({...e,children:F(e.children),fallback:F(e.fallback)}),L=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],R=e=>{if(e==null)return 0;let t=Number(e);return Number.isFinite(t)&&t>0?t:0},z=e=>{typeof e==`function`&&e()},B=e=>{let i=g(()=>{let t=u(),n=y(`div`);n&&n.style&&typeof n.style==`object`&&(n.style.display=`contents`);let i=y(`div`);i&&i.style&&typeof i.style==`object`&&(i.style.display=`none`),i[N]=!0;let a=typeof i.attachShadow==`function`?i.attachShadow({mode:`open`})??i:i,o={id:Symbol(`rue-suspense-boundary`),register:()=>{}};n[r]=o;let c=h(`rue-suspense-start`),l=h(`rue-suspense-end`);s(n,i),s(n,c),s(n,l);let f=y(`div`);f&&f.style&&typeof f.style==`object`&&(f.style.display=`contents`),f[r]=o;let p=h(`rue-suspense-content-start`),m=h(`rue-suspense-content-end`);s(f,p),s(f,m),s(a,f);let g=y(`div`);g&&g.style&&typeof g.style==`object`&&(g.style.display=`contents`);let _=h(`rue-suspense-fallback-start`),v=h(`rue-suspense-fallback-end`);return s(g,_),s(g,v),s(a,g),{boundary:o,parentBoundary:t,container:n,stagingHost:i,startEl:c,endEl:l,contentContainer:f,contentStartEl:p,contentEndEl:m,fallbackContainer:g,fallbackStartEl:_,fallbackEndEl:v,propsSig:d(I(e),{},!0),lastProps:e,lastFallback:void 0,fallbackReady:!1,contentMounted:!1,contentVisible:!1,retrySig:d(0,{},!0),status:`initial`,pendingId:0,showId:0,hadPending:!1,hasResolvedContent:!1,showingFallback:!1,pendingThenables:new Set,fallbackTimer:null,effect:null}}),l=()=>{i.fallbackTimer&&=(clearTimeout(i.fallbackTimer),null)},f=()=>{i.retrySig.set(i.retrySig.get()+1)},m=()=>{let e=p(i.container);for(;e;){let t=e[r];if(t&&t!==i.boundary)return i.parentBoundary=t,t;e=p(e)}return i.parentBoundary&&i.parentBoundary!==i.boundary?i.parentBoundary:null},_=(e,t)=>{if(!t.suspensible)return;let n=m();if(n){n.register(e);return}queueMicrotask(()=>{!i.propsSig.get().suspensible||!i.pendingThenables.has(e)||m()?.register(e)})},v=e=>i.pendingThenables.has(e)?!1:(i.pendingThenables.add(e),Promise.resolve(e).then(()=>{i.pendingThenables.delete(e),f()},n=>{i.pendingThenables.delete(e),t.handleError?.(n,null),f()}),!0),b=(e,t,n)=>{let r=[],i=e.nextSibling;for(;i&&i!==t;){let e=i.nextSibling;n&&typeof i.cloneNode==`function`?r.push(i.cloneNode(!0)):r.push(i),i=e}return r},x=()=>b(i.fallbackStartEl,i.fallbackEndEl,!0),S=()=>b(i.contentStartEl,i.contentEndEl,!1),C=e=>{i.lastFallback!==e.fallback&&(i.lastFallback=e.fallback,i.fallbackReady=!1,o(L(e.fallback),i.fallbackContainer,i.fallbackStartEl,i.fallbackEndEl),queueMicrotask(()=>{i.fallbackReady=!0,i.status===`pending`&&T(i.propsSig.get(),i.pendingId)}))},T=(e,t)=>{if(i.status!==`pending`||i.pendingId!==t)return;i.showingFallback||(i.showingFallback=!0,z(e.onFallback));let n=i.fallbackReady?x():[];if(n.length>0){i.contentVisible=!1,o(n,i.container,i.startEl,i.endEl);return}if(!i.fallbackReady){queueMicrotask(()=>T(i.propsSig.get(),t));return}i.contentVisible=!1,o(L(e.fallback),i.container,i.startEl,i.endEl)},D=e=>{if(i.contentVisible||i.pendingThenables.size>0)return;l();let t=i.status===`pending`||i.hadPending;o(S(),i.container,i.startEl,i.endEl),i.status=`resolved`,i.hasResolvedContent=!0,i.showingFallback=!1,i.contentVisible=!0,i.hadPending=!1,t&&z(e.onResolve)},O=e=>{let t=++i.showId;queueMicrotask(()=>{queueMicrotask(()=>{i.showId===t&&D(e)})})},k=(e,t)=>{l();let n=R(e.timeout);if(i.hasResolvedContent&&n>0){i.fallbackTimer=setTimeout(()=>{i.fallbackTimer=null,T(i.propsSig.get(),t)},n);return}T(e,t)};return i.boundary.register=e=>{let t=v(e),n=i.propsSig.get();t&&_(e,n),!(!t&&i.status===`pending`)&&(i.status!==`pending`&&(i.status=`pending`,z(n.onPending)),i.hadPending=!0,i.showId+=1,i.pendingId+=1,k(n,i.pendingId))},i.effect||=E(()=>{i.retrySig.get();let e=i.propsSig.get();C(e);try{i.contentMounted||=(a(i.boundary,()=>{o(L(e.children),i.contentContainer,i.contentStartEl,i.contentEndEl)}),!0),O(e)}catch(r){if(!n(r))throw t.handleError?.(r,null),r;v(r)&&_(r,e),i.status!==`pending`&&(i.status=`pending`,z(e.onPending)),i.pendingId+=1,k(e,i.pendingId)}}),w(()=>{l(),delete i.container[r],delete i.contentContainer[r],i.effect?.dispose?.(),i.effect=null,i.pendingThenables.clear(),o([],i.container,i.startEl,i.endEl),o([],i.contentContainer,i.contentStartEl,i.contentEndEl),o([],i.fallbackContainer,i.fallbackStartEl,i.fallbackEndEl)}),P()?i.container:c(()=>(i.lastProps!==e&&(i.lastProps=e,i.contentMounted=!1,i.contentVisible=!1,i.showId+=1,i.propsSig.set(I(e))),i.container))};Object.defineProperty(B,l,{configurable:!1,enumerable:!1,value:!0}),T(B,`Suspense`);var te=e=>new Promise(t=>setTimeout(t,e)),V=(e,t)=>te(t).then(e),ne=k(()=>V(()=>A(()=>import(`./AsyncRevenuePanel-CDEsK9YL.js`),__vite__mapDeps([0,1,2])),900)),re=k(()=>V(()=>A(()=>import(`./AsyncActivityPanel-C1GR2qdd.js`),__vite__mapDeps([3,1,2])),1400)),ie=k(()=>V(()=>A(()=>import(`./AsyncActivityPanel-C1GR2qdd.js`),__vite__mapDeps([3,1,2])),2600)),ae=k(()=>V(()=>A(()=>import(`./AsyncActivityPanel-C1GR2qdd.js`),__vite__mapDeps([3,1,2])),2800)),oe=k(()=>V(()=>A(()=>import(`./AsyncActivityPanel-C1GR2qdd.js`),__vite__mapDeps([3,1,2])),3200),{loading:()=>_(e=>{let t=y(`div`,e);m(t,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let n=y(`span`,t);return s(t,n),m(n,`loading loading-spinner loading-sm mr-2`),s(t,x(`本地 loading：这个异步组件设置了 suspensible: false`)),t}),suspensible:!1}),H={primary:{root:`border-primary/35 bg-primary/10`,spinner:`text-primary`},accent:{root:`border-accent/35 bg-accent/10`,spinner:`text-accent`},warning:{root:`border-warning/45 bg-warning/10`,spinner:`text-warning`},info:{root:`border-info/40 bg-info/10`,spinner:`text-info`}},U=t=>{let{tone:n}=D(`useSetup:0:0`,()=>g(()=>({tone:H[t.tone??`primary`]})));return _(r=>{let i=y(`div`,r);E(()=>{m(i,`rounded-box border border-dashed p-4 ${n.root}`)});let a=y(`div`,i);s(i,a),m(a,`flex items-center gap-3`);let o=y(`span`,a);s(a,o),E(()=>{m(o,`loading loading-spinner loading-md ${n.spinner}`)});let c=y(`div`,a);s(a,c);let l=y(`div`,c);s(c,l),m(l,`font-semibold`);let u=h(`rue:slot:anchor`);s(l,u),E(()=>{let n=t.title;e(()=>b(n,l,u))});let d=y(`div`,c);s(c,d),m(d,`text-sm opacity-70`);let f=h(`rue:slot:anchor`);s(d,f),E(()=>{let n=t.detail;e(()=>b(n,d,f))});let p=y(`div`,i);s(i,p),m(p,`mt-4 grid gap-3 md:grid-cols-2`);let g=y(`div`,p);s(p,g),m(g,`skeleton h-24 rounded-box`);let _=y(`div`,p);return s(p,_),m(_,`skeleton h-24 rounded-box`),i})},se=t=>_(n=>{let r=y(`div`,n);m(r,`rounded-box border-2 border-warning/50 bg-warning/10 p-4`);let i=y(`div`,r);s(r,i),m(i,`mb-2 inline-flex rounded-field border border-warning/40 px-2 py-1 text-xs font-semibold text-warning`),s(i,x(`内层 fallback 可见`));let a=y(`div`,r);s(r,a),m(a,`flex items-center gap-3`);let o=y(`span`,a);s(a,o),m(o,`loading loading-dots loading-md text-warning`);let c=y(`div`,a);s(a,c);let l=y(`div`,c);s(c,l),m(l,`font-semibold`);let u=h(`rue:slot:anchor`);s(l,u),E(()=>{let n=t.title;e(()=>b(n,l,u))});let d=y(`div`,c);s(c,d),m(d,`text-sm opacity-70`);let f=h(`rue:slot:anchor`);return s(d,f),E(()=>{let n=t.detail;e(()=>b(n,d,f))}),r}),ce=t=>_(n=>{let r=y(`div`,n);m(r,`rounded-box border-2 border-success/45 bg-success/10 p-4`);let i=y(`div`,r);s(r,i),m(i,`mb-3 flex flex-wrap items-start justify-between gap-3`);let a=y(`div`,i);s(i,a);let o=y(`div`,a);s(a,o),m(o,`font-semibold`);let c=h(`rue:slot:anchor`);s(o,c),E(()=>{let n=t.title;e(()=>b(n,o,c))});let l=y(`div`,a);s(a,l),m(l,`text-sm opacity-70`),s(l,x(`这块绿色区域代表外层 children。是否被替换，是两个场景最明显的区别。`));let u=y(`span`,i);s(i,u),m(u,`badge badge-success badge-outline`);let d=h(`rue:slot:anchor`);s(u,d),E(()=>{let n=t.badge;e(()=>b(n,u,d))});let f=y(`div`,r);s(r,f),m(f,`rounded-box border border-base-300 bg-base-100/70 p-3`);let p=h(`rue:children:anchor`);return s(f,p),E(()=>{let n=t.children;e(()=>b(n,f,p))}),r}),le=`import { Suspense, type FC, useComponent } from '@rue-js/rue';

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
}`,W=()=>{let{activeTab:t}=D(`useSetup:0:0:dup1`,()=>g(()=>({activeTab:D(`ref:1:0`,()=>i(`preview`))})));return _(n=>{let r=C(),i=h(`rue:component:anchor`);return s(r,i),b(S(j,{children:_(()=>{let n=C(),r=y(`h1`,n);s(n,r),m(r,`mb-4 text-5xl font-semibold md:mb-4`),s(r,x(`Suspense 异步边界`));let i=y(`div`,n);s(n,i),v(i,`role`,`tablist`),m(i,`tabs tabs-box`);let a=y(`button`,i);s(i,a),v(a,`role`,`tab`),E(()=>{m(a,`tab ${t.value===`preview`?`tab-active`:``}`)}),f(a,`click`,()=>{t.value=`preview`}),s(a,x(`效果`));let o=y(`button`,i);s(i,o),v(o,`role`,`tab`),E(()=>{m(o,`tab ${t.value===`code`?`tab-active`:``}`)}),f(o,`click`,()=>{t.value=`code`}),s(o,x(`代码`));let c=y(`div`,n);s(n,c),E(()=>{m(c,`mt-4 grid gap-6 ${t.value===`preview`?``:`hidden`}`)});let l=y(`div`,c);s(c,l),m(l,`card bg-base-100 shadow`);let u=y(`div`,l);s(l,u),m(u,`card-body gap-6`);let d=y(`section`,u);s(u,d),m(d,`space-y-3`);let p=y(`div`,d);s(d,p);let g=y(`h2`,p);s(p,g),m(g,`text-xl font-semibold`),s(g,x(`1. 一个边界等待多个异步组件`));let w=y(`p`,p);s(p,w),m(w,`text-sm opacity-75`),s(w,x(`逻辑：useComponent 默认会把 pending promise 登记到最近的 Suspense；边界收集到任意 pending 后显示 fallback，等全部 resolve 后再恢复 children。`));let T=y(`div`,d);s(d,T),m(T,`rounded-box border border-dashed border-base-300 p-4`);let D=h(`rue:component:anchor`);s(T,D);let k=_(()=>{let e=C(),t=y(`div`,e);s(e,t),m(t,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let n=h(`rue:component:anchor`);s(t,n),b(S(ne,{period:`Q2`}),t,n);let r=h(`rue:component:anchor`);return s(t,r),b(S(re,{title:`统一边界内的活动流`}),t,r),e});E(()=>{let t=S(B,{fallback:O(U,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:k});e(()=>b(t,T,D))});let A=y(`section`,u);s(u,A),m(A,`space-y-3`);let j=y(`div`,A);s(A,j);let M=y(`h2`,j);s(j,M),m(M,`text-xl font-semibold`),s(M,x(`2. 内层边界交给父 Suspense`));let N=y(`p`,j);s(j,N),m(N,`text-sm opacity-75`),s(N,x(`左边是默认嵌套：外层绿色框还在，只显示黄色的内层 fallback。右边开启 suspensible：内层 pending 被继续登记到父边界，绿色外层框会整块被父级 fallback 替换。`));let P=y(`div`,A);s(A,P),m(P,`grid gap-4 lg:grid-cols-2`);let F=y(`div`,P);s(P,F),m(F,`space-y-2`);let I=y(`div`,F);s(F,I),m(I,`flex flex-wrap items-center justify-between gap-2`);let L=y(`h3`,I);s(I,L),m(L,`font-semibold`),s(L,x(`默认：内层自己处理`));let R=y(`span`,I);s(I,R),m(R,`badge badge-warning badge-outline`),s(R,x(`外层框保持可见`));let z=h(`rue:component:anchor`);s(F,z);let te=S(ie,{title:`默认异步内容已解析`}),V=S(ce,{title:`默认嵌套边界`,badge:`外层 children 仍在`,children:S(B,{fallback:O(se,{title:`默认：内层 fallback 正在加载`,detail:`只有内部插槽被替换，绿色外层框没有消失`}),children:te})});E(()=>{let t=S(B,{fallback:O(U,{title:`默认父级 fallback`,detail:`这个 fallback 不会显示，因为内层边界已经接住 pending`,tone:`info`}),children:V});e(()=>b(t,F,z))});let H=y(`div`,P);s(P,H),m(H,`space-y-2`);let W=y(`div`,H);s(H,W),m(W,`flex flex-wrap items-center justify-between gap-2`);let G=y(`h3`,W);s(W,G),m(G,`font-semibold`),s(G,x(`开启：交给父级接管`));let ue=y(`span`,W);s(W,ue),m(ue,`badge badge-accent badge-outline`),s(ue,x(`外层框会被替换`));let de=h(`rue:component:anchor`);s(H,de);let fe=S(ae,{title:`交给父边界的活动流`}),pe=S(ce,{title:`开启 suspensible 的嵌套边界`,badge:`resolved 后才出现`,children:S(B,{suspensible:!0,fallback:O(se,{title:`内层 fallback 会被父级覆盖`,detail:`开启 suspensible 后，这个黄色 fallback 不会出现在可见区域`}),children:fe})});E(()=>{let t=S(B,{fallback:O(U,{title:`父级 fallback 接管整块外层内容`,detail:`右侧绿色外层框加载期间不可见，因为 pending 被转发给父边界`,tone:`accent`}),children:pe});e(()=>b(t,H,de))});let K=y(`section`,u);s(u,K),m(K,`space-y-3`);let q=y(`div`,K);s(K,q);let me=y(`h2`,q);s(q,me),m(me,`text-xl font-semibold`),s(me,x(`3. 退出 Suspense 控制`));let J=y(`p`,q);s(q,J),m(J,`text-sm opacity-75`),s(J,x(`逻辑：这是组件级开关。useComponent 设置 suspensible: false 后不会向最近边界登记 pending，因此外层 fallback 不会显示，组件自己的 loading 负责占位。`));let Y=y(`div`,K);s(K,Y),m(Y,`rounded-box border border-dashed border-base-300 p-4`);let he=h(`rue:component:anchor`);s(Y,he);let ge=S(oe,{title:`本地 loading 控制的活动流`});E(()=>{let t=S(B,{fallback:O(U,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:ge});e(()=>b(t,Y,he))});let X=y(`div`,u);s(u,X),v(X,`role`,`alert`),m(X,`alert alert-info alert-soft`);let _e=y(`span`,X);s(X,_e),s(_e,x(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let Z=y(`div`,n);s(n,Z),E(()=>{m(Z,`mt-4 grid gap-6 ${t.value===`code`?``:`hidden`}`)});let Q=y(`div`,Z);s(Z,Q),m(Q,`card bg-base-100 shadow`);let $=y(`div`,Q);s(Q,$),m($,`card-body p-0`);let ve=h(`rue:component:anchor`);return s($,ve),E(()=>{let t=S(ee,{className:`h-full`,lang:`tsx`,code:le});e(()=>b(t,$,ve))}),n})}),r,i),r})};export{W as default};