const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-DaCv983B.js","assets/rue-runtime-Cv6BZekS.js","assets/AsyncActivityPanel-VZzpcQwx.js"])))=>i.map(i=>d[i]);
import{Bt as e,C as t,Ht as n,S as r,U as i,V as a,Vt as o,Wt as s,Y as c,_t as l,b as u,en as d,fn as f,gn as p,gt as m,hn as h,in as g,mn as _,pn as v,sn as y,st as b,u as x,vt as S,w as C,x as w,yn as T,yt as E,z as D,zt as O}from"./rue-runtime-Cv6BZekS.js";import{t as k}from"./preload-helper-Czpn1I53.js";import{t as A}from"./Code-BzFVdc3U.js";import{r as j}from"./SidebarPlaygroundExample-rFyhXfC_.js";var M=T(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">异步组件懒水合</h1>`),N=T(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=T(`<div><div class="grid gap-4 xl:grid-cols-2"><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Idle</h2><p class="text-sm opacity-70">适合首屏不关键、但希望尽早接管的组件。</p></div><!--rue:opaque-hole:0--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Media Query</h2><p class="text-sm opacity-70">宽屏才需要的区域可以等媒体查询命中后再激活。</p></div><!--rue:opaque-hole:1--></section><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Interaction</h2><p class="text-sm opacity-70">用户真的要操作时，再下载并挂载交互组件。</p></div><!--rue:opaque-hole:2--></section></div><div class="min-h-[45vh] rounded-box border border-dashed border-base-300 bg-base-200/60 p-6 text-sm opacity-70">继续向下滚动，下面的 visible 面板会在接近视口时触发。</div><section class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="mb-4"><h2 class="text-xl font-semibold">Visible</h2><p class="text-sm opacity-70">适合图表、推荐流、评论区等靠近视口才需要的组件。</p></div><!--rue:opaque-hole:3--></section></div>`),F=T(`<div><div class="card bg-base-100 shadow"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),I=e=>new Promise(t=>setTimeout(t,e)),L=(e,t)=>I(t).then(e),R=(t,r,a)=>{let o=S(m(t,`action`)),c=S(m(t,`detail`)),u=S(m(t,`title`));return i(s(t=>{let r=h(`div`,t);r.setAttribute(`class`,`rounded-box border border-dashed border-base-300 bg-base-200/70 p-4`);let i=h(`div`,r);f(r,i),i.setAttribute(`class`,`flex items-start gap-3`);let a=h(`span`,i);f(i,a),a.setAttribute(`class`,`loading loading-spinner loading-sm mt-1 text-primary`);let l=h(`div`,i);f(i,l);let d=h(`h3`,l);f(l,d),d.setAttribute(`class`,`font-semibold`);let m=v(`rue:compiled-slot`);f(d,m),e({parent:d,before:m},()=>O(u.get()),()=>({}));let g=h(`p`,l);f(l,g),g.setAttribute(`class`,`mt-1 text-sm opacity-70`);let y=v(`rue:compiled-slot`);return f(g,y),e({parent:g,before:y},()=>O(c.get()),()=>({})),n(()=>{let t=o.get();return t?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let n=h(`p`,t);n.setAttribute(`class`,`mt-3 text-sm font-medium text-primary`);let r=v(`rue:compiled-slot`);return f(n,r),e({parent:n,before:r},()=>O(o.get()),()=>({})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>E(e=>{let n=p(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>E(e=>{let t=_();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(l),[r,r]}),e=>d(()=>{o.set(e.action),c.set(e.detail),u.set(e.title)}),()=>l(t))},z=(e,t,n)=>E(e=>{let t=h(`button`,e);t.setAttribute(`type`,`button`),t.setAttribute(`class`,`btn btn-outline btn-primary h-auto min-h-28 w-full justify-start rounded-box p-5 text-left`);let n=h(`span`,t);f(t,n),n.setAttribute(`class`,`loading loading-spinner loading-sm`);let r=h(`span`,t);f(t,r);let i=h(`span`,r);f(r,i),i.setAttribute(`class`,`block font-semibold`),f(i,p(`点击加载交互面板`));let a=h(`span`,r);return f(r,a),a.setAttribute(`class`,`mt-1 block text-sm font-normal opacity-70`),f(a,p(`hydrateOnInteraction(['click', 'focus']) 会在这次交互后启动 loader。`)),[t,t]}),B=C({loader:()=>L(()=>k(()=>import(`./AsyncRevenuePanel-DaCv983B.js`),__vite__mapDeps([0,1])),700),hydrate:u(2e3),loadingComponent:()=>a(R,()=>({title:`等待浏览器空闲`,detail:`hydrateOnIdle 会把非关键面板延后到 idle callback。`}))}),V=C({loader:()=>L(()=>k(()=>import(`./AsyncActivityPanel-VZzpcQwx.js`),__vite__mapDeps([2,1])),700),hydrate:t({rootMargin:`120px`}),loadingComponent:()=>a(R,()=>({title:`滚动接近后加载`,detail:`hydrateOnVisible 使用 IntersectionObserver 监听组件根节点。`}))}),H=C({loader:()=>L(()=>k(()=>import(`./AsyncRevenuePanel-DaCv983B.js`),__vite__mapDeps([0,1])),700),hydrate:r(`(min-width: 768px)`),loadingComponent:()=>a(R,()=>({title:`等待媒体查询命中`,detail:`当前示例在视口宽度达到 768px 后激活。`}))}),U=C({loader:()=>L(()=>k(()=>import(`./AsyncActivityPanel-VZzpcQwx.js`),__vite__mapDeps([2,1])),700),hydrate:w([`click`,`focus`]),loadingComponent:z,delay:0}),W=`import {
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

export default AsyncHydrationExample;`,G=(t,n,r)=>{let i=b(`preview`);return c(()=>a(j,()=>({children:(t,n,r)=>{let c=()=>s(t=>{let n=_();n.appendChild(M().content.cloneNode(!0));let r=N().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[0],l=s.childNodes[1];n.appendChild(r),c.setAttribute(`role`,`tab`);let u;g(()=>{let e=`tab ${i.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,c.setAttribute(`class`,t))}),y(x(t,c,`click`,()=>()=>{i.value=`preview`})),l.setAttribute(`role`,`tab`);let d;g(()=>{let e=`tab ${i.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,l.setAttribute(`class`,t))}),y(x(t,l,`click`,()=>()=>{i.value=`code`}));let f=P().content.cloneNode(!0),m=f.firstChild,h=m,v=m.childNodes[0].childNodes[0].childNodes[1],b=v.parentNode,S=m.childNodes[0].childNodes[1].childNodes[1],C=S.parentNode,w=m.childNodes[0].childNodes[2].childNodes[1],T=w.parentNode,E=m.childNodes[2].childNodes[1],O=E.parentNode;n.appendChild(f);let k;g(()=>{let e=`mt-4 grid gap-6 ${i.value===`preview`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,h.setAttribute(`class`,t))}),e({parent:b,before:v},()=>(e,t,n)=>o(e,n,()=>D(B,()=>({period:`空闲后`}))),()=>({})),e({parent:C,before:S},()=>(e,t,n)=>o(e,n,()=>D(H,()=>({period:`宽屏`}))),()=>({})),e({parent:T,before:w},()=>(e,t,n)=>o(e,n,()=>D(U,()=>({title:`交互触发的活动流`}))),()=>({})),e({parent:O,before:E},()=>(e,t,n)=>o(e,n,()=>D(V,()=>({title:`可见后加载的活动流`}))),()=>({}));let j=F().content.cloneNode(!0),I=j.firstChild,L=I,R=I.childNodes[0].childNodes[0].childNodes[0],z=R.parentNode;n.appendChild(j);let G;g(()=>{let e=`mt-4 grid gap-6 ${i.value===`code`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(G,t)||(G=t,L.setAttribute(`class`,t))});let K=(e,t,n)=>{let r=()=>a(A,()=>({className:`h-full`,lang:`tsx`,code:W,title:`完整可复制示例`}));return e==null?r():o(e,n,r)},q=R.nextSibling;z.removeChild(R),e({parent:z,before:q},()=>K,()=>({}));let J=p(``),Y=p(``);return n.insertBefore(J,n.firstChild),n.appendChild(Y),[n.firstChild,n.lastChild]});return t==null?c():o(t,r,c)}})))};export{G as default};