const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-Ftfj_o6p.js","assets/vapor-runtime-x7F5M-49.js","assets/chunk-62oNxeRG.js","assets/AsyncActivityPanel-B3AVA8w6.js"])))=>i.map(i=>d[i]);
import{Q as e,Vt as t,Xt as n,Z as r,dt as i,it as a,l as o,nt as s,o as c,on as l,pt as u,rt as d,t as f,tn as p,tt as m}from"./vapor-runtime-x7F5M-49.js";import{a as h}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as g,i as _,n as v,r as y,t as b}from"./useComponent-BNhmDv_B.js";import{t as x}from"./preload-helper-Bf_JiD2A.js";import{t as S}from"./Code-C5NjdoiC.js";import{r as C}from"./SidebarPlaygroundExample-DpItFif-.js";var w=e=>new Promise(t=>setTimeout(t,e)),T=(e,t)=>w(t).then(e),E=n=>o(r=>{let i=d(`div`,r);u(i,`rounded-box border border-dashed border-base-300 bg-base-200/70 p-4`);let a=d(`div`,i);e(i,a),u(a,`flex items-start gap-3`);let l=d(`span`,a);e(a,l),u(l,`loading loading-spinner loading-sm mt-1 text-primary`);let f=d(`div`,a);e(a,f);let h=d(`h3`,f);e(f,h),u(h,`font-semibold`);let g=m(`rue:slot:anchor`);e(h,g),t(()=>{let e=n.title;p(()=>c(e,h,g))});let _=d(`p`,f);e(f,_),u(_,`mt-1 text-sm opacity-70`);let v=m(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.detail;p(()=>c(e,_,v))});let y=m(`rue:slot:anchor`);return e(f,y),t(()=>{let r=n.action?o(()=>{let r=s(),i=d(`p`,r);e(r,i),u(i,`mt-3 text-sm font-medium text-primary`);let a=m(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.action;p(()=>c(e,i,a))}),r}):``;p(()=>c(r,f,y))}),i}),D=()=>o(t=>{let n=d(`button`,t);i(n,`type`,`button`),u(n,`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`);let r=d(`span`,n);e(n,r),u(r,`loading loading-spinner loading-sm`);let o=d(`span`,n);e(n,o);let s=d(`span`,o);e(o,s),u(s,`block font-semibold`),e(s,a(`点击加载交互面板`));let c=d(`span`,o);return e(o,c),u(c,`mt-1 block text-sm font-normal opacity-70`),e(c,a(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),n}),O=g({loader:()=>T(()=>x(()=>import(`./AsyncRevenuePanel-Ftfj_o6p.js`),__vite__mapDeps([0,1,2])),700),hydrate:b(2e3),loadingComponent:()=>o(t=>{let n=s(),r=m(`rue:component:anchor`);return e(n,r),c(f(E,{title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}),n,r),n})}),k=g({loader:()=>T(()=>x(()=>import(`./AsyncActivityPanel-B3AVA8w6.js`),__vite__mapDeps([3,1,2])),700),hydrate:_({rootMargin:`120px`}),loadingComponent:()=>o(t=>{let n=s(),r=m(`rue:component:anchor`);return e(n,r),c(f(E,{title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}),n,r),n})}),A=g({loader:()=>T(()=>x(()=>import(`./AsyncRevenuePanel-Ftfj_o6p.js`),__vite__mapDeps([0,1,2])),700),hydrate:y(`(min-width: 768px)`),loadingComponent:()=>o(t=>{let n=s(),r=m(`rue:component:anchor`);return e(n,r),c(f(E,{title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}),n,r),n})}),j=g({loader:()=>T(()=>x(()=>import(`./AsyncActivityPanel-B3AVA8w6.js`),__vite__mapDeps([3,1,2])),700),hydrate:v([`click`,`focus`]),loadingComponent:D,delay:0}),M=`import {
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

export default AsyncHydrationExample;`,N=()=>{let{activeTab:g}=h(`useSetup:0:0`,()=>l(()=>({activeTab:h(`ref:1:0`,()=>n(`preview`))})));return o(n=>{let l=s(),h=m(`rue:component:anchor`);return e(l,h),c(f(C,{children:o(()=>{let n=s(),o=d(`h1`,n);e(n,o),u(o,`mb-4 text-5xl font-semibold md:mb-4`),e(o,a(`异步组件懒水合`));let l=d(`div`,n);e(n,l),i(l,`role`,`tablist`),u(l,`tabs tabs-box`);let h=d(`button`,l);e(l,h),i(h,`role`,`tab`),t(()=>{u(h,`tab ${g.value===`preview`?`tab-active`:``}`)}),r(h,`click`,()=>{g.value=`preview`}),e(h,a(`效果`));let _=d(`button`,l);e(l,_),i(_,`role`,`tab`),t(()=>{u(_,`tab ${g.value===`code`?`tab-active`:``}`)}),r(_,`click`,()=>{g.value=`code`}),e(_,a(`代码`));let v=d(`div`,n);e(n,v),t(()=>{u(v,`mt-4 grid gap-6 ${g.value===`preview`?``:`hidden`}`)});let y=d(`div`,v);e(v,y),u(y,`grid gap-4 xl:grid-cols-2`);let b=d(`section`,y);e(y,b),u(b,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let x=d(`div`,b);e(b,x),u(x,`mb-4`);let C=d(`h2`,x);e(x,C),u(C,`text-xl font-semibold`),e(C,a(`Idle`));let w=d(`p`,x);e(x,w),u(w,`text-sm opacity-70`),e(w,a(`适合首屏不关键、但希望尽早接管的组件。`));let T=m(`rue:component:anchor`);e(b,T),c(f(O,{period:`空闲后`}),b,T);let E=d(`section`,y);e(y,E),u(E,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let D=d(`div`,E);e(E,D),u(D,`mb-4`);let N=d(`h2`,D);e(D,N),u(N,`text-xl font-semibold`),e(N,a(`Media Query`));let P=d(`p`,D);e(D,P),u(P,`text-sm opacity-70`),e(P,a(`宽屏才需要的区域可以等媒体查询命中后再激活。`));let F=m(`rue:component:anchor`);e(E,F),c(f(A,{period:`宽屏`}),E,F);let I=d(`section`,y);e(y,I),u(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=d(`div`,I);e(I,L),u(L,`mb-4`);let R=d(`h2`,L);e(L,R),u(R,`text-xl font-semibold`),e(R,a(`Interaction`));let z=d(`p`,L);e(L,z),u(z,`text-sm opacity-70`),e(z,a(`用户真的要操作时，再下载并挂载交互组件。`));let B=m(`rue:component:anchor`);e(I,B),c(f(j,{title:`交互触发的活动流`}),I,B);let V=d(`div`,v);e(v,V),u(V,`min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70`),e(V,a(`继续向下滚动，下面的 visible 面板会在接近视口时触发。`));let H=d(`section`,v);e(v,H),u(H,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let U=d(`div`,H);e(H,U),u(U,`mb-4`);let W=d(`h2`,U);e(U,W),u(W,`text-xl font-semibold`),e(W,a(`Visible`));let G=d(`p`,U);e(U,G),u(G,`text-sm opacity-70`),e(G,a(`适合图表、推荐流、评论区等靠近视口才需要的组件。`));let K=m(`rue:component:anchor`);e(H,K),c(f(k,{title:`可见后加载的活动流`}),H,K);let q=d(`div`,n);e(n,q),t(()=>{u(q,`mt-4 grid gap-6 ${g.value===`code`?``:`hidden`}`)});let J=d(`div`,q);e(q,J),u(J,`card bg-base-100 shadow`);let Y=d(`div`,J);e(J,Y),u(Y,`card-body p-0`);let X=m(`rue:component:anchor`);return e(Y,X),t(()=>{let e=f(S,{className:`h-full`,lang:`tsx`,code:M,title:`完整可复制示例`});p(()=>c(e,Y,X))}),n})}),l,h),l})};export{N as default};