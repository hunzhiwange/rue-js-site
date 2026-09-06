const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-H4B1aqCH.js","assets/rue-runtime-HIMg8Lz8.js","assets/AsyncActivityPanel-xTM50LvH.js"])))=>i.map(i=>d[i]);
import{E as e,Mt as t,Q as n,Qt as r,Vt as i,_n as a,_t as o,a as s,at as c,ct as l,et as u,gn as d,hn as f,i as p,nt as m,o as h,pn as g,qt as _,r as v,rt as y,s as b,st as x,tn as S,ut as C,vn as w,wn as T,xn as E,xt as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./preload-helper-Czpn1I53.js";import{t as k}from"./Code-DpH7u0gk.js";import{r as A}from"./SidebarPlaygroundExample-BCPRe0hA.js";var j=w(`<div class="rounded-box border border-dashed border-base-300 bg-base-200/70 p-4"><div class="flex items-start gap-3"><span class="loading loading-spinner loading-sm mt-1 text-primary"></span><div><h3 class="font-semibold"><!--rue:text-hole:0--></h3><p class="mt-1 text-sm opacity-70"><!--rue:text-hole:1--></p><!--rue:text-hole:2--></div></div></div>`),M=w(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">异步组件懒水合</h1>`),N=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=w(`<div><div class="grid gap-4 xl:grid-cols-2"><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Idle</h2><p class="text-sm opacity-70">适合首屏不关键、但希望尽早接管的组件。</p></div><!--rue:opaque-hole:0--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Media Query</h2><p class="text-sm opacity-70">宽屏才需要的区域可以等媒体查询命中后再激活。</p></div><!--rue:opaque-hole:1--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Interaction</h2><p class="text-sm opacity-70">用户真的要操作时，再下载并挂载交互组件。</p></div><!--rue:opaque-hole:2--></section></div><div class="min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70">继续向下滚动，下面的 visible 面板会在接近视口时触发。</div><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Visible</h2><p class="text-sm opacity-70">适合图表、推荐流、评论区等靠近视口才需要的组件。</p></div><!--rue:opaque-hole:3--></section></div>`),F=w(`<div><div class="card bg-base-100 shadow"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),I=e=>new Promise(t=>setTimeout(t,e)),L=(e,t)=>I(t).then(e),R=e=>{let t=c(e.action),n=c(e.detail),r=c(e.title);return l(i(Object.assign(e=>{let s=j().content.cloneNode(!0).firstChild,c=s.childNodes[0].childNodes[1].childNodes[0].childNodes[0],l=c.parentNode,u=s.childNodes[0].childNodes[1].childNodes[1].childNodes[0],f=u.parentNode,p=s.childNodes[0].childNodes[1].childNodes[2],h=p.parentNode,_=a(``);l.insertBefore(_,c),l.removeChild(c),E(_,()=>r.get());let v=a(``);return f.insertBefore(v,u),f.removeChild(u),E(v,()=>n.get()),m(h,p,()=>{let e=t.get();return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let n=d(`p`,e);n.className=`mt-3 text-sm font-medium text-primary`;let r=a(``);return g(n,r),E(r,()=>t.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=a(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{t.set(e.action),n.set(e.detail),r.set(e.title)}),()=>e)},z=()=>l(i(Object.assign(e=>{let t=d(`button`,e);t.setAttribute(`type`,`button`),t.className=`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`;let n=d(`span`,t);g(t,n),n.className=`loading loading-spinner loading-sm`;let r=d(`span`,t);g(t,r);let i=d(`span`,r);g(r,i),i.className=`block font-semibold`,g(i,a(`点击加载交互面板`));let o=d(`span`,r);return g(r,o),o.className=`mt-1 block text-sm font-normal opacity-70`,g(o,a(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{})),B=b({loader:()=>L(()=>O(()=>import(`./AsyncRevenuePanel-H4B1aqCH.js`),__vite__mapDeps([0,1])),700),hydrate:v(2e3),loadingComponent:()=>y(R,()=>({title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}))}),V=b({loader:()=>L(()=>O(()=>import(`./AsyncActivityPanel-xTM50LvH.js`),__vite__mapDeps([2,1])),700),hydrate:h({rootMargin:`120px`}),loadingComponent:()=>y(R,()=>({title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}))}),H=b({loader:()=>L(()=>O(()=>import(`./AsyncRevenuePanel-H4B1aqCH.js`),__vite__mapDeps([0,1])),700),hydrate:s(`(min-width: 768px)`),loadingComponent:()=>y(R,()=>({title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}))}),U=b({loader:()=>L(()=>O(()=>import(`./AsyncActivityPanel-xTM50LvH.js`),__vite__mapDeps([2,1])),700),hydrate:p([`click`,`focus`]),loadingComponent:z,delay:0}),W=`import {
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

export default AsyncHydrationExample;`,G=()=>{let a=S(`preview`);return _(()=>l(y(A,()=>({children:[(t,n,r)=>e(t,r,()=>i(Object.assign(e=>{let t=o();return t.appendChild(M().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,s,c)=>e(t,c,()=>i(Object.assign(e=>{let t=o(),i=N().content.cloneNode(!0),s=i.firstChild,c=s.childNodes[0],l=s.childNodes[1];t.appendChild(i),D(c,`role`,`tab`),T(()=>{n(c,`tab ${a.value===`preview`?`tab-active`:``}`)});let u=e=>{let t=()=>{a.value=`preview`};typeof t==`function`&&t(e)};c.addEventListener(`click`,u),r(()=>c.removeEventListener(`click`,u)),D(l,`role`,`tab`),T(()=>{n(l,`tab ${a.value===`code`?`tab-active`:``}`)});let d=e=>{let t=()=>{a.value=`code`};typeof t==`function`&&t(e)};return l.addEventListener(`click`,d),r(()=>l.removeEventListener(`click`,d)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,s,c)=>e(r,c,()=>i(Object.assign(e=>{let r=o(),i=P().content.cloneNode(!0),s=i.firstChild,c=s,l=s.childNodes[0].childNodes[0].childNodes[1],u=l.parentNode,d=s.childNodes[0].childNodes[1].childNodes[1],f=d.parentNode,p=s.childNodes[0].childNodes[2].childNodes[1],m=p.parentNode,h=s.childNodes[2].childNodes[1],g=h.parentNode;r.appendChild(i),T(()=>{n(c,`mt-4 grid gap-6 ${a.value===`preview`?``:`hidden`}`)});let _=t(B,()=>({period:`空闲后`}));C(_,u,l);let v=t(H,()=>({period:`宽屏`}));C(v,f,d);let y=t(U,()=>({title:`交互触发的活动流`}));C(y,m,p);let b=t(V,()=>({title:`可见后加载的活动流`}));return C(b,g,h),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),(t,r,s)=>e(t,s,()=>i(Object.assign(e=>{let t=o(),r=F().content.cloneNode(!0),i=r.firstChild,s=i,c=i.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode;t.appendChild(r),T(()=>{n(s,`mt-4 grid gap-6 ${a.value===`code`?``:`hidden`}`)});let u=f(l);return x(u,k,()=>({className:`h-full`,lang:`tsx`,code:W,title:`完整可复制示例`})),l.insertBefore(u,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),e=>u(()=>{})))};export{G as default};