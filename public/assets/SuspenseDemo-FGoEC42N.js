const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-DBPIa_Q2.js","assets/vapor-runtime-x7F5M-49.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-pJk_OBDn.js"])))=>i.map(i=>d[i]);
import{F as e,G as t,H as n,K as r,P as i,Q as a,Qt as o,R as s,U as c,Vt as l,W as u,Xt as d,Z as f,dt as p,it as m,l as h,nt as g,o as _,on as v,pt as y,rt as b,st as x,t as S,tn as C,tt as w,w as T,x as E,z as D}from"./vapor-runtime-x7F5M-49.js";import{a as O}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as k}from"./useComponent-BNhmDv_B.js";import{t as A}from"./preload-helper-Bf_JiD2A.js";import{t as ee}from"./Code-BoXKy3gJ.js";import{t as j}from"./src-Dlanwp1X.js";import{r as M}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var N=`__rue_is_server_rendering__`,P=`__rue_suspense_staging`,F=()=>{let e=globalThis[N];return typeof e==`number`&&e>0},I=e=>Array.isArray(e)?e.map(I):e,L=e=>({...e,children:I(e.children),fallback:I(e.fallback)}),R=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],z=e=>{if(e==null)return 0;let t=Number(e);return Number.isFinite(t)&&t>0?t:0},B=e=>{typeof e==`function`&&e()},V=c=>{if(F()){let e=R(c.children);return Array.isArray(e)?E(`fragment`,null,...e):E(`fragment`,null,e)}let d=v(()=>{let e=u(),t=b(`div`);t&&t.style&&typeof t.style==`object`&&(t.style.display=`contents`);let r=b(`div`);r&&r.style&&typeof r.style==`object`&&(r.style.display=`none`),r[P]=!0;let i=typeof r.attachShadow==`function`?r.attachShadow({mode:`open`})??r:r,s={id:Symbol(`rue-suspense-boundary`),register:()=>{}};t[n]=s;let l=w(`rue-suspense-start`),d=w(`rue-suspense-end`);a(t,r),a(t,l),a(t,d);let f=b(`div`);f&&f.style&&typeof f.style==`object`&&(f.style.display=`contents`),f[n]=s;let p=w(`rue-suspense-content-start`),m=w(`rue-suspense-content-end`);a(f,p),a(f,m),a(i,f);let h=b(`div`);h&&h.style&&typeof h.style==`object`&&(h.style.display=`contents`);let g=w(`rue-suspense-fallback-start`),_=w(`rue-suspense-fallback-end`);return a(h,g),a(h,_),a(i,h),{boundary:s,parentBoundary:e,container:t,stagingHost:r,startEl:l,endEl:d,contentContainer:f,contentStartEl:p,contentEndEl:m,fallbackContainer:h,fallbackStartEl:g,fallbackEndEl:_,propsSig:o(L(c),{},!0),lastProps:c,lastFallback:void 0,fallbackReady:!1,contentMounted:!1,contentVisible:!1,retrySig:o(0,{},!0),status:`initial`,pendingId:0,showId:0,hadPending:!1,hasResolvedContent:!1,showingFallback:!1,pendingThenables:new Set,fallbackTimer:null,effect:null}}),f=()=>{d.fallbackTimer&&=(clearTimeout(d.fallbackTimer),null)},p=()=>{d.retrySig.set(d.retrySig.get()+1)},m=()=>{let e=x(d.container);for(;e;){let t=e[n];if(t&&t!==d.boundary)return d.parentBoundary=t,t;e=x(e)}return d.parentBoundary&&d.parentBoundary!==d.boundary?d.parentBoundary:null},h=(e,t)=>{if(!t.suspensible)return;let n=m();if(n){n.register(e);return}queueMicrotask(()=>{!d.propsSig.get().suspensible||!d.pendingThenables.has(e)||m()?.register(e)})},g=t=>d.pendingThenables.has(t)?!1:(d.pendingThenables.add(t),Promise.resolve(t).then(()=>{d.pendingThenables.delete(t),p()},n=>{d.pendingThenables.delete(t),e.handleError?.(n,null),p()}),!0),_=(e,t,n)=>{let r=[],i=e.nextSibling;for(;i&&i!==t;){let e=i.nextSibling;n&&typeof i.cloneNode==`function`?r.push(i.cloneNode(!0)):r.push(i),i=e}return r},y=()=>_(d.fallbackStartEl,d.fallbackEndEl,!0),S=()=>_(d.contentStartEl,d.contentEndEl,!1),C=e=>{d.lastFallback!==e.fallback&&(d.lastFallback=e.fallback,d.fallbackReady=!1,i(R(e.fallback),d.fallbackContainer,d.fallbackStartEl,d.fallbackEndEl),queueMicrotask(()=>{d.fallbackReady=!0,d.status===`pending`&&D(d.propsSig.get(),d.pendingId)}))},D=(e,t)=>{if(d.status!==`pending`||d.pendingId!==t)return;d.showingFallback||(d.showingFallback=!0,B(e.onFallback));let n=d.fallbackReady?y():[];if(n.length>0){d.contentVisible=!1,i(n,d.container,d.startEl,d.endEl);return}if(!d.fallbackReady){queueMicrotask(()=>D(d.propsSig.get(),t));return}d.contentVisible=!1,i(R(e.fallback),d.container,d.startEl,d.endEl)},O=e=>{if(d.contentVisible||d.pendingThenables.size>0)return;f();let t=d.status===`pending`||d.hadPending;i(S(),d.container,d.startEl,d.endEl),d.status=`resolved`,d.hasResolvedContent=!0,d.showingFallback=!1,d.contentVisible=!0,d.hadPending=!1,t&&B(e.onResolve)},k=e=>{let t=++d.showId;queueMicrotask(()=>{queueMicrotask(()=>{d.showId===t&&O(e)})})},A=(e,t)=>{f();let n=z(e.timeout);if(d.hasResolvedContent&&n>0){d.fallbackTimer=setTimeout(()=>{d.fallbackTimer=null,D(d.propsSig.get(),t)},n);return}D(e,t)};return d.boundary.register=e=>{let t=g(e),n=d.propsSig.get();t&&h(e,n),!(!t&&d.status===`pending`)&&(d.status!==`pending`&&(d.status=`pending`,B(n.onPending)),d.hadPending=!0,d.showId+=1,d.pendingId+=1,A(n,d.pendingId))},d.effect||=l(()=>{d.retrySig.get();let n=d.propsSig.get();C(n);try{d.contentMounted||=(r(d.boundary,()=>{i(R(n.children),d.contentContainer,d.contentStartEl,d.contentEndEl)}),!0),k(n)}catch(r){if(!t(r))throw e.handleError?.(r,null),r;g(r)&&h(r,n),d.status!==`pending`&&(d.status=`pending`,B(n.onPending)),d.pendingId+=1,A(n,d.pendingId)}}),T(()=>{f(),delete d.container[n],delete d.contentContainer[n],d.effect?.dispose?.(),d.effect=null,d.pendingThenables.clear(),i([],d.container,d.startEl,d.endEl),i([],d.contentContainer,d.contentStartEl,d.contentEndEl),i([],d.fallbackContainer,d.fallbackStartEl,d.fallbackEndEl)}),s(()=>(d.lastProps!==c&&(d.lastProps=c,d.contentMounted=!1,d.contentVisible=!1,d.showId+=1,d.propsSig.set(L(c))),d.container))};Object.defineProperty(V,c,{configurable:!1,enumerable:!1,value:!0}),D(V,`Suspense`);var te=e=>new Promise(t=>setTimeout(t,e)),H=(e,t)=>te(t).then(e),ne=k(()=>H(()=>A(()=>import(`./AsyncRevenuePanel-DBPIa_Q2.js`),__vite__mapDeps([0,1,2])),900)),re=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-pJk_OBDn.js`),__vite__mapDeps([3,1,2])),1400)),ie=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-pJk_OBDn.js`),__vite__mapDeps([3,1,2])),2600)),ae=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-pJk_OBDn.js`),__vite__mapDeps([3,1,2])),2800)),oe=k(()=>H(()=>A(()=>import(`./AsyncActivityPanel-pJk_OBDn.js`),__vite__mapDeps([3,1,2])),3200),{loading:()=>h(e=>{let t=b(`div`,e);y(t,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let n=b(`span`,t);return a(t,n),y(n,`loading loading-spinner loading-sm mr-2`),a(t,m(`本地 loading：这个异步组件设置了 suspensible: false`)),t}),suspensible:!1}),U={primary:{root:`border-primary/35 bg-primary/10`,spinner:`text-primary`},accent:{root:`border-accent/35 bg-accent/10`,spinner:`text-accent`},warning:{root:`border-warning/45 bg-warning/10`,spinner:`text-warning`},info:{root:`border-info/40 bg-info/10`,spinner:`text-info`}},W=e=>{let{tone:t}=O(`useSetup:0:0`,()=>v(()=>({tone:U[e.tone??`primary`]})));return h(n=>{let r=b(`div`,n);l(()=>{y(r,`rounded-box border border-dashed p-4 ${t.root}`)});let i=b(`div`,r);a(r,i),y(i,`flex items-center gap-3`);let o=b(`span`,i);a(i,o),l(()=>{y(o,`loading loading-spinner loading-md ${t.spinner}`)});let s=b(`div`,i);a(i,s);let c=b(`div`,s);a(s,c),y(c,`font-semibold`);let u=w(`rue:slot:anchor`);a(c,u),l(()=>{let t=e.title;C(()=>_(t,c,u))});let d=b(`div`,s);a(s,d),y(d,`text-sm opacity-70`);let f=w(`rue:slot:anchor`);a(d,f),l(()=>{let t=e.detail;C(()=>_(t,d,f))});let p=b(`div`,r);a(r,p),y(p,`mt-4 grid gap-3 md:grid-cols-2`);let m=b(`div`,p);a(p,m),y(m,`skeleton h-24 rounded-box`);let h=b(`div`,p);return a(p,h),y(h,`skeleton h-24 rounded-box`),r})},se=e=>h(t=>{let n=b(`div`,t);y(n,`rounded-box border-2 border-warning/50 bg-warning/10 p-4`);let r=b(`div`,n);a(n,r),y(r,`mb-2 inline-flex rounded-field border border-warning/40 px-2 py-1 text-xs font-semibold text-warning`),a(r,m(`内层 fallback 可见`));let i=b(`div`,n);a(n,i),y(i,`flex items-center gap-3`);let o=b(`span`,i);a(i,o),y(o,`loading loading-dots loading-md text-warning`);let s=b(`div`,i);a(i,s);let c=b(`div`,s);a(s,c),y(c,`font-semibold`);let u=w(`rue:slot:anchor`);a(c,u),l(()=>{let t=e.title;C(()=>_(t,c,u))});let d=b(`div`,s);a(s,d),y(d,`text-sm opacity-70`);let f=w(`rue:slot:anchor`);return a(d,f),l(()=>{let t=e.detail;C(()=>_(t,d,f))}),n}),ce=e=>h(t=>{let n=b(`div`,t);y(n,`rounded-box border-2 border-success/45 bg-success/10 p-4`);let r=b(`div`,n);a(n,r),y(r,`mb-3 flex flex-wrap items-start justify-between gap-3`);let i=b(`div`,r);a(r,i);let o=b(`div`,i);a(i,o),y(o,`font-semibold`);let s=w(`rue:slot:anchor`);a(o,s),l(()=>{let t=e.title;C(()=>_(t,o,s))});let c=b(`div`,i);a(i,c),y(c,`text-sm opacity-70`),a(c,m(`这块绿色区域代表外层 children。是否被替换，是两个场景最明显的区别。`));let u=b(`span`,r);a(r,u),y(u,`badge badge-success badge-outline`);let d=w(`rue:slot:anchor`);a(u,d),l(()=>{let t=e.badge;C(()=>_(t,u,d))});let f=b(`div`,n);a(n,f),y(f,`rounded-box border border-base-300 bg-base-100/70 p-3`);let p=w(`rue:children:anchor`);return a(f,p),l(()=>{let t=e.children;C(()=>_(t,f,p))}),n}),le=`import { Suspense, type FC, useComponent } from '@rue-js/rue';

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
}`,G=()=>{let{activeTab:e}=O(`useSetup:0:0:dup1`,()=>v(()=>({activeTab:O(`ref:1:0`,()=>d(`preview`))})));return h(t=>{let n=g(),r=w(`rue:component:anchor`);return a(n,r),_(S(M,{children:h(()=>{let t=g(),n=b(`h1`,t);a(t,n),y(n,`mb-4 text-5xl font-semibold md:mb-4`),a(n,m(`Suspense 异步边界`));let r=b(`div`,t);a(t,r),p(r,`role`,`tablist`),y(r,`tabs tabs-box`);let i=b(`button`,r);a(r,i),p(i,`role`,`tab`),l(()=>{y(i,`tab ${e.value===`preview`?`tab-active`:``}`)}),f(i,`click`,()=>{e.value=`preview`}),a(i,m(`效果`));let o=b(`button`,r);a(r,o),p(o,`role`,`tab`),l(()=>{y(o,`tab ${e.value===`code`?`tab-active`:``}`)}),f(o,`click`,()=>{e.value=`code`}),a(o,m(`代码`));let s=b(`div`,t);a(t,s),l(()=>{y(s,`mt-4 grid gap-6 ${e.value===`preview`?``:`hidden`}`)});let c=b(`div`,s);a(s,c),y(c,`card bg-base-100 shadow`);let u=b(`div`,c);a(c,u),y(u,`card-body gap-6`);let d=b(`section`,u);a(u,d),y(d,`space-y-3`);let v=b(`div`,d);a(d,v);let x=b(`h2`,v);a(v,x),y(x,`text-xl font-semibold`),a(x,m(`1. 一个边界等待多个异步组件`));let T=b(`p`,v);a(v,T),y(T,`text-sm opacity-75`),a(T,m(`逻辑：useComponent 默认会把 pending promise 登记到最近的 Suspense；边界收集到任意 pending 后显示 fallback，等全部 resolve 后再恢复 children。`));let E=b(`div`,d);a(d,E),y(E,`rounded-box border border-dashed border-base-300 p-4`);let D=w(`rue:component:anchor`);a(E,D);let O=h(()=>{let e=g(),t=b(`div`,e);a(e,t),y(t,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`);let n=w(`rue:component:anchor`);a(t,n),_(S(ne,{period:`Q2`}),t,n);let r=w(`rue:component:anchor`);return a(t,r),_(S(re,{title:`统一边界内的活动流`}),t,r),e});l(()=>{let e=S(V,{fallback:j(W,{title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}),children:O});C(()=>_(e,E,D))});let k=b(`section`,u);a(u,k),y(k,`space-y-3`);let A=b(`div`,k);a(k,A);let M=b(`h2`,A);a(A,M),y(M,`text-xl font-semibold`),a(M,m(`2. 内层边界交给父 Suspense`));let N=b(`p`,A);a(A,N),y(N,`text-sm opacity-75`),a(N,m(`左边是默认嵌套：外层绿色框还在，只显示黄色的内层 fallback。右边开启 suspensible：内层 pending 被继续登记到父边界，绿色外层框会整块被父级 fallback 替换。`));let P=b(`div`,k);a(k,P),y(P,`grid gap-4 lg:grid-cols-2`);let F=b(`div`,P);a(P,F),y(F,`space-y-2`);let I=b(`div`,F);a(F,I),y(I,`flex flex-wrap items-center justify-between gap-2`);let L=b(`h3`,I);a(I,L),y(L,`font-semibold`),a(L,m(`默认：内层自己处理`));let R=b(`span`,I);a(I,R),y(R,`badge badge-warning badge-outline`),a(R,m(`外层框保持可见`));let z=w(`rue:component:anchor`);a(F,z);let B=S(ie,{title:`默认异步内容已解析`}),te=S(ce,{title:`默认嵌套边界`,badge:`外层 children 仍在`,children:S(V,{fallback:j(se,{title:`默认：内层 fallback 正在加载`,detail:`只有内部插槽被替换，绿色外层框没有消失`}),children:B})});l(()=>{let e=S(V,{fallback:j(W,{title:`默认父级 fallback`,detail:`这个 fallback 不会显示，因为内层边界已经接住 pending`,tone:`info`}),children:te});C(()=>_(e,F,z))});let H=b(`div`,P);a(P,H),y(H,`space-y-2`);let U=b(`div`,H);a(H,U),y(U,`flex flex-wrap items-center justify-between gap-2`);let G=b(`h3`,U);a(U,G),y(G,`font-semibold`),a(G,m(`开启：交给父级接管`));let K=b(`span`,U);a(U,K),y(K,`badge badge-accent badge-outline`),a(K,m(`外层框会被替换`));let ue=w(`rue:component:anchor`);a(H,ue);let de=S(ae,{title:`交给父边界的活动流`}),fe=S(ce,{title:`开启 suspensible 的嵌套边界`,badge:`resolved 后才出现`,children:S(V,{suspensible:!0,fallback:j(se,{title:`内层 fallback 会被父级覆盖`,detail:`开启 suspensible 后，这个黄色 fallback 不会出现在可见区域`}),children:de})});l(()=>{let e=S(V,{fallback:j(W,{title:`父级 fallback 接管整块外层内容`,detail:`右侧绿色外层框加载期间不可见，因为 pending 被转发给父边界`,tone:`accent`}),children:fe});C(()=>_(e,H,ue))});let q=b(`section`,u);a(u,q),y(q,`space-y-3`);let J=b(`div`,q);a(q,J);let pe=b(`h2`,J);a(J,pe),y(pe,`text-xl font-semibold`),a(pe,m(`3. 退出 Suspense 控制`));let me=b(`p`,J);a(J,me),y(me,`text-sm opacity-75`),a(me,m(`逻辑：这是组件级开关。useComponent 设置 suspensible: false 后不会向最近边界登记 pending，因此外层 fallback 不会显示，组件自己的 loading 负责占位。`));let Y=b(`div`,q);a(q,Y),y(Y,`rounded-box border border-dashed border-base-300 p-4`);let he=w(`rue:component:anchor`);a(Y,he);let ge=S(oe,{title:`本地 loading 控制的活动流`});l(()=>{let e=S(V,{fallback:j(W,{title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}),children:ge});C(()=>_(e,Y,he))});let X=b(`div`,u);a(u,X),p(X,`role`,`alert`),y(X,`alert alert-info alert-soft`);let _e=b(`span`,X);a(X,_e),a(_e,m(`提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。`));let Z=b(`div`,t);a(t,Z),l(()=>{y(Z,`mt-4 grid gap-6 ${e.value===`code`?``:`hidden`}`)});let Q=b(`div`,Z);a(Z,Q),y(Q,`card bg-base-100 shadow`);let $=b(`div`,Q);a(Q,$),y($,`card-body p-0`);let ve=w(`rue:component:anchor`);return a($,ve),l(()=>{let e=S(ee,{className:`h-full`,lang:`tsx`,code:le});C(()=>_(e,$,ve))}),t})}),n,r),n})};export{G as default};