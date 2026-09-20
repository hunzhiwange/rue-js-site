const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-zHMUP25Q.js","assets/rue-runtime-BWbIfNT8.js","assets/AsyncActivityPanel-0eveNmJt.js"])))=>i.map(i=>d[i]);
import{B as e,Bt as t,C as n,Ht as r,I as i,M as a,P as o,S as s,V as c,Vt as l,W as u,Wt as d,b as f,en as p,fn as m,gn as h,hn as g,in as _,mn as v,mt as y,nt as b,pn as x,sn as S,u as C,w,x as T,yn as E,z as D,zt as O}from"./rue-runtime-BWbIfNT8.js";import{t as k}from"./preload-helper-Czpn1I53.js";import{t as A}from"./Code-C5ZhIIr9.js";import{r as j}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var M=E(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">异步组件懒水合</h1>`),N=E(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=E(`<div><div class="grid gap-4 xl:grid-cols-2"><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Idle</h2><p class="text-sm opacity-70">适合首屏不关键、但希望尽早接管的组件。</p></div><!--rue:opaque-hole:0--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Media Query</h2><p class="text-sm opacity-70">宽屏才需要的区域可以等媒体查询命中后再激活。</p></div><!--rue:opaque-hole:1--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Interaction</h2><p class="text-sm opacity-70">用户真的要操作时，再下载并挂载交互组件。</p></div><!--rue:opaque-hole:2--></section></div><div class="min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70">继续向下滚动，下面的 visible 面板会在接近视口时触发。</div><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Visible</h2><p class="text-sm opacity-70">适合图表、推荐流、评论区等靠近视口才需要的组件。</p></div><!--rue:opaque-hole:3--></section></div>`),F=E(`<div><div class="card bg-base-100 shadow"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),I=e=>new Promise(t=>setTimeout(t,e)),L=(e,t)=>I(t).then(e),R=(n,a,o)=>{let s=u(D(n,`action`)),l=u(D(n,`detail`)),f=u(D(n,`title`));return i(d(e=>{let n=g(`div`,e);n.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-200/70 p-4`);let i=g(`div`,n);m(n,i),i.setAttribute(`class`,`flex items-start gap-3`);let a=g(`span`,i);m(i,a),a.setAttribute(`class`,`loading loading-spinner loading-sm mt-1 text-primary`);let o=g(`div`,i);m(i,o);let u=g(`h3`,o);m(o,u),u.setAttribute(`class`,`font-semibold`);let p=x(`rue:compiled-slot`);m(u,p),t({parent:u,before:p},()=>O(f.get()),()=>({}));let _=g(`p`,o);m(o,_),_.setAttribute(`class`,`mt-1 text-sm opacity-70`);let y=x(`rue:compiled-slot`);return m(_,y),t({parent:_,before:y},()=>O(l.get()),()=>({})),r(()=>{let e=s.get();return e?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let n=g(`p`,e);n.setAttribute(`class`,`mt-3 text-sm font-medium text-primary`);let r=x(`rue:compiled-slot`);return m(n,r),t({parent:n,before:r},()=>O(s.get()),()=>({})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>c(e=>{let t=v();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(o),[n,n]}),e=>p(()=>{s.set(e.action),l.set(e.detail),f.set(e.title)}),()=>e(n))},z=(e,t,n)=>c(e=>{let t=g(`button`,e);t.setAttribute(`type`,`button`),t.setAttribute(`class`,`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`);let n=g(`span`,t);m(t,n),n.setAttribute(`class`,`loading loading-spinner loading-sm`);let r=g(`span`,t);m(t,r);let i=g(`span`,r);m(r,i),i.setAttribute(`class`,`block font-semibold`),m(i,h(`点击加载交互面板`));let a=g(`span`,r);return m(r,a),a.setAttribute(`class`,`mt-1 block text-sm font-normal opacity-70`),m(a,h(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),[t,t]}),B=w({loader:()=>L(()=>k(()=>import(`./AsyncRevenuePanel-zHMUP25Q.js`),__vite__mapDeps([0,1])),700),hydrate:f(2e3),loadingComponent:()=>o(R,()=>({title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}))}),V=w({loader:()=>L(()=>k(()=>import(`./AsyncActivityPanel-0eveNmJt.js`),__vite__mapDeps([2,1])),700),hydrate:n({rootMargin:`120px`}),loadingComponent:()=>o(R,()=>({title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}))}),H=w({loader:()=>L(()=>k(()=>import(`./AsyncRevenuePanel-zHMUP25Q.js`),__vite__mapDeps([0,1])),700),hydrate:s(`(min-width: 768px)`),loadingComponent:()=>o(R,()=>({title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}))}),U=w({loader:()=>L(()=>k(()=>import(`./AsyncActivityPanel-0eveNmJt.js`),__vite__mapDeps([2,1])),700),hydrate:T([`click`,`focus`]),loadingComponent:z,delay:0}),W=`import {
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

export default AsyncHydrationExample;`,G=(e,n,r)=>{let i=y(`preview`);return b(()=>o(j,()=>({children:(e,n,r)=>{let s=()=>d(e=>{let n=v();n.appendChild(M().content.cloneNode(!0));let r=N().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[0],u=s.childNodes[1];n.appendChild(r),c.setAttribute(`role`,`tab`);let d;_(()=>{let e=`tab ${i.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,c.setAttribute(`class`,t))}),S(C(e,c,`click`,()=>()=>{i.value=`preview`})),u.setAttribute(`role`,`tab`);let f;_(()=>{let e=`tab ${i.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,u.setAttribute(`class`,t))}),S(C(e,u,`click`,()=>()=>{i.value=`code`}));let p=P().content.cloneNode(!0),m=p.firstChild,g=m,y=m.childNodes[0].childNodes[0].childNodes[1],b=y.parentNode,x=m.childNodes[0].childNodes[1].childNodes[1],w=x.parentNode,T=m.childNodes[0].childNodes[2].childNodes[1],E=T.parentNode,D=m.childNodes[2].childNodes[1],O=D.parentNode;n.appendChild(p);let k;_(()=>{let e=`mt-4 grid gap-6 ${i.value===`preview`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,g.setAttribute(`class`,t))}),t({parent:b,before:y},()=>(e,t,n)=>l(e,n,()=>a(B,()=>({period:`空闲后`}))),()=>({})),t({parent:w,before:x},()=>(e,t,n)=>l(e,n,()=>a(H,()=>({period:`宽屏`}))),()=>({})),t({parent:E,before:T},()=>(e,t,n)=>l(e,n,()=>a(U,()=>({title:`交互触发的活动流`}))),()=>({})),t({parent:O,before:D},()=>(e,t,n)=>l(e,n,()=>a(V,()=>({title:`可见后加载的活动流`}))),()=>({}));let j=F().content.cloneNode(!0),I=j.firstChild,L=I,R=I.childNodes[0].childNodes[0].childNodes[0],z=R.parentNode;n.appendChild(j);let G;_(()=>{let e=`mt-4 grid gap-6 ${i.value===`code`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(G,t)||(G=t,L.setAttribute(`class`,t))});let K=(e,t,n)=>{let r=()=>o(A,()=>({className:`h-full`,lang:`tsx`,code:W,title:`完整可复制示例`}));return e==null?r():l(e,n,r)},q=R.nextSibling;z.removeChild(R),t({parent:z,before:q},()=>K,()=>({}));let J=h(``),Y=h(``);return n.insertBefore(J,n.firstChild),n.appendChild(Y),[n.firstChild,n.lastChild]});return e==null?s():l(e,r,s)}})))};export{G as default};