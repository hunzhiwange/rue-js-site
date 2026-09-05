const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./AsyncRevenuePanel-DSKSkONR.js","./rue-runtime-CwEGJ854.js","./AsyncActivityPanel-jayxkmb2.js"])))=>i.map(i=>d[i]);
import{Bt as e,Et as t,H as n,K as r,L as i,Lt as a,Mt as o,V as s,W as c,Y as l,_n as u,_t as d,a as f,bn as p,fn as m,gn as h,hn as g,i as _,mn as v,nt as y,o as b,ot as x,q as S,r as C,s as w,wn as T,x as E,z as D}from"./rue-runtime-CwEGJ854.js";import{t as O}from"./preload-helper-HclGiUj8.js";import{t as k}from"./Code-DUvGro8N.js";import{r as A}from"./SidebarPlaygroundExample-EGR0CyDT.js";var j=u(`<div class="rounded-box border border-dashed border-base-300 bg-base-200/70 p-4"><div class="flex items-start gap-3"><span class="loading loading-spinner loading-sm mt-1 text-primary"></span><div><h3 class="font-semibold"><!--rue:text-hole:0--></h3><p class="mt-1 text-sm opacity-70"><!--rue:text-hole:1--></p><!--rue:text-hole:2--></div></div></div>`),M=u(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">异步组件懒水合</h1>`),N=u(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=u(`<div><div class="grid gap-4 xl:grid-cols-2"><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Idle</h2><p class="text-sm opacity-70">适合首屏不关键、但希望尽早接管的组件。</p></div><!--rue:opaque-hole:0--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Media Query</h2><p class="text-sm opacity-70">宽屏才需要的区域可以等媒体查询命中后再激活。</p></div><!--rue:opaque-hole:1--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Interaction</h2><p class="text-sm opacity-70">用户真的要操作时，再下载并挂载交互组件。</p></div><!--rue:opaque-hole:2--></section></div><div class="min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70">继续向下滚动，下面的 visible 面板会在接近视口时触发。</div><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Visible</h2><p class="text-sm opacity-70">适合图表、推荐流、评论区等靠近视口才需要的组件。</p></div><!--rue:opaque-hole:3--></section></div>`),F=u(`<div><div class="card bg-base-100 shadow"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),I=e=>new Promise(t=>setTimeout(t,e)),L=(e,t)=>I(t).then(e),R=e=>{let n=c(e.action),r=c(e.detail),i=c(e.title);return S(t(Object.assign(e=>{let a=j().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[1].childNodes[0].childNodes[0],c=o.parentNode,l=a.childNodes[0].childNodes[1].childNodes[1].childNodes[0],u=l.parentNode,d=a.childNodes[0].childNodes[1].childNodes[2],f=d.parentNode,_=h(``);c.insertBefore(_,o),c.removeChild(o),p(_,()=>i.get());let v=h(``);return u.insertBefore(v,l),u.removeChild(l),p(v,()=>r.get()),s(f,d,()=>{let e=n.get();return e?{__rue_compiled_branch_key:!0,create:()=>t(Object.assign(e=>{let t=g(`p`,e);t.className=`mt-3 text-sm font-medium text-primary`;let r=h(``);return m(t,r),p(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>t(Object.assign(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>t(Object.assign(e=>{let t=y();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{n.set(e.action),r.set(e.detail),i.set(e.title)}),()=>e)},z=()=>S(t(Object.assign(e=>{let t=g(`button`,e);t.setAttribute(`type`,`button`),t.className=`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`;let n=g(`span`,t);m(t,n),n.className=`loading loading-spinner loading-sm`;let r=g(`span`,t);m(t,r);let i=g(`span`,r);m(r,i),i.className=`block font-semibold`,m(i,h(`点击加载交互面板`));let a=g(`span`,r);return m(r,a),a.className=`mt-1 block text-sm font-normal opacity-70`,m(a,h(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})),B=w({loader:()=>L(()=>O(()=>import(`./AsyncRevenuePanel-DSKSkONR.js`),__vite__mapDeps([0,1]),import.meta.url),700),hydrate:C(2e3),loadingComponent:()=>n(R,()=>({title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}))}),V=w({loader:()=>L(()=>O(()=>import(`./AsyncActivityPanel-jayxkmb2.js`),__vite__mapDeps([2,1]),import.meta.url),700),hydrate:b({rootMargin:`120px`}),loadingComponent:()=>n(R,()=>({title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}))}),H=w({loader:()=>L(()=>O(()=>import(`./AsyncRevenuePanel-DSKSkONR.js`),__vite__mapDeps([0,1]),import.meta.url),700),hydrate:f(`(min-width: 768px)`),loadingComponent:()=>n(R,()=>({title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}))}),U=w({loader:()=>L(()=>O(()=>import(`./AsyncActivityPanel-jayxkmb2.js`),__vite__mapDeps([2,1]),import.meta.url),700),hydrate:_([`click`,`focus`]),loadingComponent:z,delay:0}),W=`import {
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

export default AsyncHydrationExample;`,G=()=>{let s=e(`preview`);return o(()=>S(n(A,()=>({children:[(e,n,r)=>E(e,r,()=>t(Object.assign(e=>{let t=y();return t.appendChild(M().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,r)=>E(e,r,()=>t(Object.assign(e=>{let t=y(),n=N().content.cloneNode(!0),r=n.firstChild,o=r.childNodes[0],c=r.childNodes[1];t.appendChild(n),x(o,`role`,`tab`),T(()=>{i(o,`tab ${s.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{s.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,l),a(()=>o.removeEventListener(`click`,l)),x(c,`role`,`tab`),T(()=>{i(c,`tab ${s.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{s.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),a(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,r)=>E(e,r,()=>t(Object.assign(e=>{let t=y(),n=P().content.cloneNode(!0),r=n.firstChild,a=r,o=r.childNodes[0].childNodes[0].childNodes[1],c=o.parentNode,u=r.childNodes[0].childNodes[1].childNodes[1],f=u.parentNode,p=r.childNodes[0].childNodes[2].childNodes[1],m=p.parentNode,h=r.childNodes[2].childNodes[1],g=h.parentNode;t.appendChild(n),T(()=>{i(a,`mt-4 grid gap-6 ${s.value===`preview`?``:`hidden`}`)});let _=d(B,()=>({period:`空闲后`}));l(_,c,o);let v=d(H,()=>({period:`宽屏`}));l(v,f,u);let b=d(U,()=>({title:`交互触发的活动流`}));l(b,m,p);let x=d(V,()=>({title:`可见后加载的活动流`}));return l(x,g,h),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,a)=>E(e,a,()=>t(Object.assign(e=>{let t=y(),n=F().content.cloneNode(!0),a=n.firstChild,o=a,c=a.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode;t.appendChild(n),T(()=>{i(o,`mt-4 grid gap-6 ${s.value===`code`?``:`hidden`}`)});let u=v(l);return r(u,k,()=>({className:`h-full`,lang:`tsx`,code:W,title:`完整可复制示例`})),l.insertBefore(u,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),e=>D(()=>{})))};export{G as default};