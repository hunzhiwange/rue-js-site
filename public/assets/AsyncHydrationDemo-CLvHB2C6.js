const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-CDEsK9YL.js","assets/vapor-runtime-DsQWl-IB.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-C1GR2qdd.js"])))=>i.map(i=>d[i]);
import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,t as f,tt as p,zt as m}from"./vapor-runtime-DsQWl-IB.js";import{a as h}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as g,i as _,n as v,r as y,t as b}from"./useComponent-DrVOwDCl.js";import{t as x}from"./preload-helper-Bf_JiD2A.js";import{t as S}from"./Code-4SUSUwRg.js";import{r as C}from"./SidebarPlaygroundExample-BEWYUWOl.js";var w=e=>new Promise(t=>setTimeout(t,e)),T=(e,t)=>w(t).then(e),E=t=>s(r=>{let o=l(`div`,r);i(o,`rounded-box border border-dashed border-base-300 bg-base-200/70 p-4`);let c=l(`div`,o);n(o,c),i(c,`flex items-start gap-3`);let d=l(`span`,c);n(c,d),i(d,`loading loading-spinner loading-sm mt-1 text-primary`);let f=l(`div`,c);n(c,f);let h=l(`h3`,f);n(f,h),i(h,`font-semibold`);let g=a(`rue:slot:anchor`);n(h,g),m(()=>{let n=t.title;e(()=>u(n,h,g))});let _=l(`p`,f);n(f,_),i(_,`mt-1 text-sm opacity-70`);let v=a(`rue:slot:anchor`);n(_,v),m(()=>{let n=t.detail;e(()=>u(n,_,v))});let y=a(`rue:slot:anchor`);return n(f,y),m(()=>{let r=t.action?s(()=>{let r=p(),o=l(`p`,r);n(r,o),i(o,`mt-3 text-sm font-medium text-primary`);let s=a(`rue:slot:anchor`);return n(o,s),m(()=>{let n=t.action;e(()=>u(n,o,s))}),r}):``;e(()=>u(r,f,y))}),o}),D=()=>s(e=>{let t=l(`button`,e);c(t,`type`,`button`),i(t,`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`);let r=l(`span`,t);n(t,r),i(r,`loading loading-spinner loading-sm`);let a=l(`span`,t);n(t,a);let o=l(`span`,a);n(a,o),i(o,`block font-semibold`),n(o,d(`点击加载交互面板`));let s=l(`span`,a);return n(a,s),i(s,`mt-1 block text-sm font-normal opacity-70`),n(s,d(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),t}),O=g({loader:()=>T(()=>x(()=>import(`./AsyncRevenuePanel-CDEsK9YL.js`),__vite__mapDeps([0,1,2])),700),hydrate:b(2e3),loadingComponent:()=>s(e=>{let t=p(),r=a(`rue:component:anchor`);return n(t,r),u(f(E,{title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}),t,r),t})}),k=g({loader:()=>T(()=>x(()=>import(`./AsyncActivityPanel-C1GR2qdd.js`),__vite__mapDeps([3,1,2])),700),hydrate:_({rootMargin:`120px`}),loadingComponent:()=>s(e=>{let t=p(),r=a(`rue:component:anchor`);return n(t,r),u(f(E,{title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}),t,r),t})}),A=g({loader:()=>T(()=>x(()=>import(`./AsyncRevenuePanel-CDEsK9YL.js`),__vite__mapDeps([0,1,2])),700),hydrate:y(`(min-width: 768px)`),loadingComponent:()=>s(e=>{let t=p(),r=a(`rue:component:anchor`);return n(t,r),u(f(E,{title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}),t,r),t})}),j=g({loader:()=>T(()=>x(()=>import(`./AsyncActivityPanel-C1GR2qdd.js`),__vite__mapDeps([3,1,2])),700),hydrate:v([`click`,`focus`]),loadingComponent:D,delay:0}),M=`import {
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

export default AsyncHydrationExample;`,N=()=>{let{activeTab:g}=h(`useSetup:0:0`,()=>o(()=>({activeTab:h(`ref:1:0`,()=>t(`preview`))})));return s(t=>{let o=p(),h=a(`rue:component:anchor`);return n(o,h),u(f(C,{children:s(()=>{let t=p(),o=l(`h1`,t);n(t,o),i(o,`mb-4 text-5xl font-semibold md:mb-4`),n(o,d(`异步组件懒水合`));let s=l(`div`,t);n(t,s),c(s,`role`,`tablist`),i(s,`tabs tabs-box`);let h=l(`button`,s);n(s,h),c(h,`role`,`tab`),m(()=>{i(h,`tab ${g.value===`preview`?`tab-active`:``}`)}),r(h,`click`,()=>{g.value=`preview`}),n(h,d(`效果`));let _=l(`button`,s);n(s,_),c(_,`role`,`tab`),m(()=>{i(_,`tab ${g.value===`code`?`tab-active`:``}`)}),r(_,`click`,()=>{g.value=`code`}),n(_,d(`代码`));let v=l(`div`,t);n(t,v),m(()=>{i(v,`mt-4 grid gap-6 ${g.value===`preview`?``:`hidden`}`)});let y=l(`div`,v);n(v,y),i(y,`grid gap-4 xl:grid-cols-2`);let b=l(`section`,y);n(y,b),i(b,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let x=l(`div`,b);n(b,x),i(x,`mb-4`);let C=l(`h2`,x);n(x,C),i(C,`text-xl font-semibold`),n(C,d(`Idle`));let w=l(`p`,x);n(x,w),i(w,`text-sm opacity-70`),n(w,d(`适合首屏不关键、但希望尽早接管的组件。`));let T=a(`rue:component:anchor`);n(b,T),u(f(O,{period:`空闲后`}),b,T);let E=l(`section`,y);n(y,E),i(E,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let D=l(`div`,E);n(E,D),i(D,`mb-4`);let N=l(`h2`,D);n(D,N),i(N,`text-xl font-semibold`),n(N,d(`Media Query`));let P=l(`p`,D);n(D,P),i(P,`text-sm opacity-70`),n(P,d(`宽屏才需要的区域可以等媒体查询命中后再激活。`));let F=a(`rue:component:anchor`);n(E,F),u(f(A,{period:`宽屏`}),E,F);let I=l(`section`,y);n(y,I),i(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=l(`div`,I);n(I,L),i(L,`mb-4`);let R=l(`h2`,L);n(L,R),i(R,`text-xl font-semibold`),n(R,d(`Interaction`));let z=l(`p`,L);n(L,z),i(z,`text-sm opacity-70`),n(z,d(`用户真的要操作时，再下载并挂载交互组件。`));let B=a(`rue:component:anchor`);n(I,B),u(f(j,{title:`交互触发的活动流`}),I,B);let V=l(`div`,v);n(v,V),i(V,`min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70`),n(V,d(`继续向下滚动，下面的 visible 面板会在接近视口时触发。`));let H=l(`section`,v);n(v,H),i(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=l(`div`,H);n(H,U),i(U,`mb-4`);let W=l(`h2`,U);n(U,W),i(W,`text-xl font-semibold`),n(W,d(`Visible`));let G=l(`p`,U);n(U,G),i(G,`text-sm opacity-70`),n(G,d(`适合图表、推荐流、评论区等靠近视口才需要的组件。`));let K=a(`rue:component:anchor`);n(H,K),u(f(k,{title:`可见后加载的活动流`}),H,K);let q=l(`div`,t);n(t,q),m(()=>{i(q,`mt-4 grid gap-6 ${g.value===`code`?``:`hidden`}`)});let J=l(`div`,q);n(q,J),i(J,`card bg-base-100 shadow`);let Y=l(`div`,J);n(J,Y),i(Y,`card-body p-0`);let X=a(`rue:component:anchor`);return n(Y,X),m(()=>{let t=f(S,{className:`h-full`,lang:`tsx`,code:M,title:`完整可复制示例`});e(()=>u(t,Y,X))}),t})}),o,h),o})};export{N as default};