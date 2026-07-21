const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-CMi418Ed.js","assets/context-8lXZvIn-.js","assets/rolldown-runtime-aKtaBQYM.js","assets/vapor-runtime-ygJWVcNn.js","assets/AsyncActivityPanel-JPU3QaWx.js"])))=>i.map(i=>d[i]);
import{Cn as e,Ct as t,Tt as n,dt as r,ft as i,mt as a,ot as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,t as m}from"./vapor-runtime-ygJWVcNn.js";import{a as h}from"./vapor-helpers-vapor-CMwHgsXf.js";import{a as g,i as _,n as v,r as y,t as b}from"./useComponent-gGaQDIJI.js";import{t as x}from"./preload-helper-Czpn1I53.js";import{t as S}from"./Code-DhoWkRkB.js";import{r as C}from"./SidebarPlaygroundExample-B78jsvoF.js";var w=e=>new Promise(t=>setTimeout(t,e)),T=(e,t)=>w(t).then(e),E=e=>f(t=>{let a=c(`div`,t);n(a,`rounded-box border border-dashed border-base-300 bg-base-200/70 p-4`);let o=c(`div`,a);l(a,o),n(o,`flex items-start gap-3`);let s=c(`span`,o);l(o,s),n(s,`loading loading-spinner loading-sm mt-1 text-primary`);let m=c(`div`,o);l(o,m);let h=c(`h3`,m);l(m,h),n(h,`font-semibold`);let g=r(`rue:slot:anchor`);l(h,g),u(()=>{let t=e.title;d(()=>p(t,h,g))});let _=c(`p`,m);l(m,_),n(_,`mt-1 text-sm opacity-70`);let v=r(`rue:slot:anchor`);l(_,v),u(()=>{let t=e.detail;d(()=>p(t,_,v))});let y=r(`rue:slot:anchor`);return l(m,y),u(()=>{let t=e.action?f(()=>{let t=i(),a=c(`p`,t);l(t,a),n(a,`mt-3 text-sm font-medium text-primary`);let o=r(`rue:slot:anchor`);return l(a,o),u(()=>{let t=e.action;d(()=>p(t,a,o))}),t}):``;d(()=>p(t,m,y))}),a}),D=()=>f(e=>{let r=c(`button`,e);t(r,`type`,`button`),n(r,`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`);let i=c(`span`,r);l(r,i),n(i,`loading loading-spinner loading-sm`);let o=c(`span`,r);l(r,o);let s=c(`span`,o);l(o,s),n(s,`block font-semibold`),l(s,a(`点击加载交互面板`));let u=c(`span`,o);return l(o,u),n(u,`mt-1 block text-sm font-normal opacity-70`),l(u,a(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),r}),O=g({loader:()=>T(()=>x(()=>import(`./AsyncRevenuePanel-CMi418Ed.js`),__vite__mapDeps([0,1,2,3])),700),hydrate:b(2e3),loadingComponent:()=>f(e=>{let t=i(),n=r(`rue:component:anchor`);return l(t,n),p(m(E,{title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}),t,n),t})}),k=g({loader:()=>T(()=>x(()=>import(`./AsyncActivityPanel-JPU3QaWx.js`),__vite__mapDeps([4,1,2,3])),700),hydrate:_({rootMargin:`120px`}),loadingComponent:()=>f(e=>{let t=i(),n=r(`rue:component:anchor`);return l(t,n),p(m(E,{title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}),t,n),t})}),A=g({loader:()=>T(()=>x(()=>import(`./AsyncRevenuePanel-CMi418Ed.js`),__vite__mapDeps([0,1,2,3])),700),hydrate:y(`(min-width: 768px)`),loadingComponent:()=>f(e=>{let t=i(),n=r(`rue:component:anchor`);return l(t,n),p(m(E,{title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}),t,n),t})}),j=g({loader:()=>T(()=>x(()=>import(`./AsyncActivityPanel-JPU3QaWx.js`),__vite__mapDeps([4,1,2,3])),700),hydrate:v([`click`,`focus`]),loadingComponent:D,delay:0}),M=`import {
  hydrateOnIdle,
  hydrateOnInteraction,
  hydrateOnMediaQuery,
  hydrateOnVisible,
  useComponent,
  type FC,
} from '@rue-js/rue';

type PanelProps = {
  title?: string;
  period?: string;
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const lazyModule = <P,>(component: FC<P>, ms = 700) =>
  wait(ms).then(() => ({ default: component }));

const Placeholder: FC<{ title: string; detail: string; action?: string }> = props => (
  <div className="rounded-box border border-dashed border-base-300 bg-base-200/70 p-4">
    <div className="flex items-start gap-3">
      <span className="loading loading-spinner loading-sm mt-1 text-primary" />
      <div>
        <h3 className="font-semibold">{props.title}</h3>
        <p className="mt-1 text-sm opacity-70">{props.detail}</p>
        {props.action ? (
          <p className="mt-3 text-sm font-medium text-primary">{props.action}</p>
        ) : null}
      </div>
    </div>
  </div>
);

const InteractionPlaceholder: FC = () => (
  <button
    type="button"
    className="btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left"
  >
    <span className="loading loading-spinner loading-sm" />
    <span>
      <span className="block font-semibold">点击加载交互面板</span>
      <span className="mt-1 block text-sm font-normal opacity-70">
        hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。
      </span>
    </span>
  </button>
);

const RevenuePanel: FC<PanelProps> = props => (
  <div className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
    <p className="text-sm opacity-70">{props.period || '当前'}收入</p>
    <strong className="mt-2 block text-3xl">$48,320</strong>
    <p className="mt-2 text-sm text-success">较上期增长 12.4%</p>
  </div>
);

const ActivityPanel: FC<PanelProps> = props => (
  <div className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
    <h3 className="font-semibold">{props.title || '活动流'}</h3>
    <ul className="mt-3 grid gap-2 text-sm">
      <li>完成首屏渲染</li>
      <li>加载异步组件 chunk</li>
      <li>接管组件交互</li>
    </ul>
  </div>
);

const AsyncIdlePanel = useComponent({
  loader: () => lazyModule(RevenuePanel),
  hydrate: hydrateOnIdle(2000),
  loadingComponent: () => (
    <Placeholder
      title="等待浏览器空闲"
      detail="hydrateOnIdle 会把非关键面板延后到 idle callback。"
    />
  ),
});

const AsyncVisiblePanel = useComponent({
  loader: () => lazyModule(ActivityPanel),
  hydrate: hydrateOnVisible({ rootMargin: '120px' }),
  loadingComponent: () => (
    <Placeholder
      title="滚动接近后加载"
      detail="hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。"
    />
  ),
});

const AsyncMediaPanel = useComponent({
  loader: () => lazyModule(RevenuePanel),
  hydrate: hydrateOnMediaQuery('(min-width: 768px)'),
  loadingComponent: () => (
    <Placeholder
      title="等待媒体查询命中"
      detail="当前示例在视口宽度达到 768px 后激活。"
    />
  ),
});

const AsyncInteractionPanel = useComponent({
  loader: () => lazyModule(ActivityPanel),
  hydrate: hydrateOnInteraction(['click', 'focus']),
  loadingComponent: InteractionPlaceholder,
  delay: 0,
});

const AsyncHydrationExample: FC = () => (
  <main className="mx-auto grid max-w-5xl gap-6 p-6">
    <header>
      <h1 className="text-4xl font-semibold">异步组件懒水合</h1>
      <p className="mt-2 text-sm opacity-70">
        loader 会等到对应策略触发后才开始执行，SSR 时仍会立即参与服务端渲染。
      </p>
    </header>

    <div className="grid gap-4 xl:grid-cols-2">
      <section className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Idle</h2>
        <AsyncIdlePanel period="空闲后" />
      </section>

      <section className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Media Query</h2>
        <AsyncMediaPanel period="宽屏" />
      </section>

      <section className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Interaction</h2>
        <AsyncInteractionPanel title="交互触发的活动流" />
      </section>
    </div>

    <div className="min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70">
      继续向下滚动，下面的 visible 面板会在接近视口时触发。
    </div>

    <section className="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">Visible</h2>
      <AsyncVisiblePanel title="可见后加载的活动流" />
    </section>
  </main>
);

export default AsyncHydrationExample;`,N=()=>{let{activeTab:g}=h(`useSetup:0:0`,()=>e(()=>({activeTab:h(`ref:1:0`,()=>s(`preview`))})));return f(e=>{let s=i(),h=r(`rue:component:anchor`);return l(s,h),p(m(C,{children:f(()=>{let e=i(),s=c(`h1`,e);l(e,s),n(s,`mb-4 text-5xl font-semibold md:mb-4`),l(s,a(`异步组件懒水合`));let f=c(`div`,e);l(e,f),t(f,`role`,`tablist`),n(f,`tabs tabs-box`);let h=c(`button`,f);l(f,h),t(h,`role`,`tab`),u(()=>{n(h,`tab ${g.value===`preview`?`tab-active`:``}`)}),o(h,`click`,()=>{g.value=`preview`}),l(h,a(`效果`));let _=c(`button`,f);l(f,_),t(_,`role`,`tab`),u(()=>{n(_,`tab ${g.value===`code`?`tab-active`:``}`)}),o(_,`click`,()=>{g.value=`code`}),l(_,a(`代码`));let v=c(`div`,e);l(e,v),u(()=>{n(v,`mt-4 grid gap-6 ${g.value===`preview`?``:`hidden`}`)});let y=c(`div`,v);l(v,y),n(y,`grid gap-4 xl:grid-cols-2`);let b=c(`section`,y);l(y,b),n(b,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let x=c(`div`,b);l(b,x),n(x,`mb-4`);let C=c(`h2`,x);l(x,C),n(C,`text-xl font-semibold`),l(C,a(`Idle`));let w=c(`p`,x);l(x,w),n(w,`text-sm opacity-70`),l(w,a(`适合首屏不关键、但希望尽早接管的组件。`));let T=r(`rue:component:anchor`);l(b,T),p(m(O,{period:`空闲后`}),b,T);let E=c(`section`,y);l(y,E),n(E,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let D=c(`div`,E);l(E,D),n(D,`mb-4`);let N=c(`h2`,D);l(D,N),n(N,`text-xl font-semibold`),l(N,a(`Media Query`));let P=c(`p`,D);l(D,P),n(P,`text-sm opacity-70`),l(P,a(`宽屏才需要的区域可以等媒体查询命中后再激活。`));let F=r(`rue:component:anchor`);l(E,F),p(m(A,{period:`宽屏`}),E,F);let I=c(`section`,y);l(y,I),n(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=c(`div`,I);l(I,L),n(L,`mb-4`);let R=c(`h2`,L);l(L,R),n(R,`text-xl font-semibold`),l(R,a(`Interaction`));let z=c(`p`,L);l(L,z),n(z,`text-sm opacity-70`),l(z,a(`用户真的要操作时，再下载并挂载交互组件。`));let B=r(`rue:component:anchor`);l(I,B),p(m(j,{title:`交互触发的活动流`}),I,B);let V=c(`div`,v);l(v,V),n(V,`min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70`),l(V,a(`继续向下滚动，下面的 visible 面板会在接近视口时触发。`));let H=c(`section`,v);l(v,H),n(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=c(`div`,H);l(H,U),n(U,`mb-4`);let W=c(`h2`,U);l(U,W),n(W,`text-xl font-semibold`),l(W,a(`Visible`));let G=c(`p`,U);l(U,G),n(G,`text-sm opacity-70`),l(G,a(`适合图表、推荐流、评论区等靠近视口才需要的组件。`));let K=r(`rue:component:anchor`);l(H,K),p(m(k,{title:`可见后加载的活动流`}),H,K);let q=c(`div`,e);l(e,q),u(()=>{n(q,`mt-4 grid gap-6 ${g.value===`code`?``:`hidden`}`)});let J=c(`div`,q);l(q,J),n(J,`card bg-base-100 shadow`);let Y=c(`div`,J);l(J,Y),n(Y,`card-body p-0`);let X=r(`rue:component:anchor`);return l(Y,X),u(()=>{let e=m(S,{className:`h-full`,lang:`tsx`,code:M,title:`完整可复制示例`});d(()=>p(e,Y,X))}),e})}),s,h),s})};export{N as default};