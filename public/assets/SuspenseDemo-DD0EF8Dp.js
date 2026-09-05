const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-DSKSkONR.js","assets/rue-runtime-CwEGJ854.js","assets/AsyncActivityPanel-jayxkmb2.js"])))=>i.map(i=>d[i]);
import{Bt as e,Et as t,H as n,K as r,L as i,Lt as a,Mt as o,W as s,_n as c,_t as l,b as u,bn as d,fn as f,gn as p,gt as m,h,hn as g,mn as _,nt as v,ot as y,q as b,s as x,wn as S,x as C,z as w}from"./rue-runtime-CwEGJ854.js";import{t as T}from"./preload-helper-Czpn1I53.js";import{t as E}from"./Code-B3jCYMAr.js";import{r as D}from"./SidebarPlaygroundExample-EGR0CyDT.js";var O=c(`<div><div class="flex items-center gap-3"><span></span><div><div class="font-semibold"><!--rue:text-hole:0--></div><div class="text-sm opacity-70"><!--rue:text-hole:1--></div></div></div><div class="mt-4 grid gap-3 md:grid-cols-2"><div class="skeleton h-24 rounded-box"></div><div class="skeleton h-24 rounded-box"></div></div></div>`),k=c(`<div class="rounded-box border-2 border-warning/50 bg-warning/10 p-4"><div class="mb-2 inline-flex rounded-field border border-warning/40 px-2 py-1 text-xs font-semibold text-warning">内层 fallback 可见</div><div class="flex items-center gap-3"><span class="loading loading-dots loading-md text-warning"></span><div><div class="font-semibold"><!--rue:text-hole:0--></div><div class="text-sm opacity-70"><!--rue:text-hole:1--></div></div></div></div>`),A=c(`<div class="rounded-box border-2 border-success/45 bg-success/10 p-4"><div class="mb-3 flex flex-wrap items-start justify-between gap-3"><div><div class="font-semibold"><!--rue:text-hole:0--></div><div class="text-sm opacity-70">这块绿色区域代表外层 children。是否被替换，是两个场景最明显的区别。</div></div><span class="badge badge-success badge-outline"><!--rue:text-hole:1--></span></div><div class="rounded-box border border-base-300 bg-base-100/70 p-3"><!--rue:text-hole:2--></div></div>`),j=c(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Suspense 异步边界</h1>`),M=c(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=c(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="space-y-3"><div><h2 class="text-xl font-semibold">1. 一个边界等待多个异步组件</h2><p class="text-sm opacity-75">逻辑：useComponent 默认会把 pending promise 登记到最近的 Suspense；边界收集到任意 pending 后显示 fallback，等全部 resolve 后再恢复 children。</p></div><div class="rounded-box border border-dashed border-base-300 p-4"><!--rue:opaque-hole:0--></div></section><section class="space-y-3"><div><h2 class="text-xl font-semibold">2. 内层边界交给父 Suspense</h2><p class="text-sm opacity-75">左边是默认嵌套：外层绿色框还在，只显示黄色的内层 fallback。右边开启 suspensible：内层 pending 被继续登记到父边界，绿色外层框会整块被父级 fallback 替换。</p></div><div class="grid gap-4 lg:grid-cols-2"><div class="space-y-2"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="font-semibold">默认：内层自己处理</h3><span class="badge badge-warning badge-outline">外层框保持可见</span></div><!--rue:opaque-hole:1--></div><div class="space-y-2"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="font-semibold">开启：交给父级接管</h3><span class="badge badge-accent badge-outline">外层框会被替换</span></div><!--rue:opaque-hole:2--></div></div></section><section class="space-y-3"><div><h2 class="text-xl font-semibold">3. 退出 Suspense 控制</h2><p class="text-sm opacity-75">逻辑：这是组件级开关。useComponent 设置 suspensible: false 后不会向最近边界登记 pending，因此外层 fallback 不会显示，组件自己的 loading 负责占位。</p></div><div class="rounded-box border border-dashed border-base-300 p-4"><!--rue:opaque-hole:3--></div></section><div role="alert" class="alert alert-info alert-soft"><span>提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。</span></div></div></div></div>`),P=c(`<div><div class="card bg-base-100 shadow"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),F=e=>new Promise(t=>setTimeout(t,e)),I=(e,t)=>F(t).then(e),L=x(()=>I(()=>T(()=>import(`./AsyncRevenuePanel-DSKSkONR.js`),__vite__mapDeps([0,1])),900)),R=x(()=>I(()=>T(()=>import(`./AsyncActivityPanel-jayxkmb2.js`),__vite__mapDeps([2,1])),1400)),z=x(()=>I(()=>T(()=>import(`./AsyncActivityPanel-jayxkmb2.js`),__vite__mapDeps([2,1])),2600)),B=x(()=>I(()=>T(()=>import(`./AsyncActivityPanel-jayxkmb2.js`),__vite__mapDeps([2,1])),2800)),V=x(()=>I(()=>T(()=>import(`./AsyncActivityPanel-jayxkmb2.js`),__vite__mapDeps([2,1])),3200),{loading:()=>t(Object.assign(e=>{let t=g(`div`,e);t.className=`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`;let n=g(`span`,t);return f(t,n),n.className=`loading loading-spinner loading-sm mr-2`,f(t,p(` 本地 loading：这个异步组件设置了 suspensible: false`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),suspensible:!1}),H={primary:{root:`border-primary/35 bg-primary/10`,spinner:`text-primary`},accent:{root:`border-accent/35 bg-accent/10`,spinner:`text-accent`},warning:{root:`border-warning/45 bg-warning/10`,spinner:`text-warning`},info:{root:`border-info/40 bg-info/10`,spinner:`text-info`}},U=e=>{let n=s(e.detail),r=s(e.title),i=s(e.tone),a=H[i.get()??`primary`];return b(t(Object.assign(e=>{let t=O().content.cloneNode(!0).firstChild,i=t,o=t.childNodes[0].childNodes[0],s=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],c=s.parentNode,l=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],u=l.parentNode,f;S(()=>{let e=`rounded-box border border-dashed p-4 ${a.root}`,t=e==null?``:String(e);Object.is(f,t)||(f=t,i.className=t)});let m;S(()=>{let e=`loading loading-spinner loading-md ${a.spinner}`,t=e==null?``:String(e);Object.is(m,t)||(m=t,o.className=t)});let h=p(``);c.insertBefore(h,s),c.removeChild(s),d(h,()=>r.get());let g=p(``);return u.insertBefore(g,l),u.removeChild(l),d(g,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{n.set(e.detail),r.set(e.title),i.set(e.tone)}),()=>e)},W=e=>{let n=s(e.detail),r=s(e.title);return b(t(Object.assign(e=>{let t=k().content.cloneNode(!0).firstChild,i=t.childNodes[1].childNodes[1].childNodes[0].childNodes[0],a=i.parentNode,o=t.childNodes[1].childNodes[1].childNodes[1].childNodes[0],s=o.parentNode,c=p(``);a.insertBefore(c,i),a.removeChild(i),d(c,()=>r.get());let l=p(``);return s.insertBefore(l,o),s.removeChild(o),d(l,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{n.set(e.detail),r.set(e.title)}),()=>e)},G=e=>{let n=s(e.badge),r=s(e.children),i=s(e.title);return b(t(Object.assign(e=>{let t=A().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[1].childNodes[0],f=l.parentNode,m=p(``);o.insertBefore(m,a),o.removeChild(a),d(m,()=>i.get());let h=p(``);return c.insertBefore(h,s),c.removeChild(s),d(h,()=>n.get()),u({parent:f,before:l},()=>r.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>w(()=>{n.set(e.badge),r.set(e.children),i.set(e.title)}),()=>e)},K=`import { Suspense, type FC, useComponent } from '@rue-js/rue';

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
}`,q=()=>{let s=e(`preview`);return o(()=>b(n(D,()=>({children:[(e,n,r)=>C(e,r,()=>t(Object.assign(e=>{let t=v();return t.appendChild(j().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,r)=>C(e,r,()=>t(Object.assign(e=>{let t=v(),n=M().content.cloneNode(!0),r=n.firstChild,o=r.childNodes[0],c=r.childNodes[1];t.appendChild(n),y(o,`role`,`tab`),S(()=>{i(o,`tab ${s.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{s.value=`preview`};typeof t==`function`&&t(e)};o.addEventListener(`click`,l),a(()=>o.removeEventListener(`click`,l)),y(c,`role`,`tab`),S(()=>{i(c,`tab ${s.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{s.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),a(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,a,o)=>C(e,o,()=>t(Object.assign(e=>{let a=v(),o=N().content.cloneNode(!0),c=o.firstChild,u=c,d=c.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],p=d.parentNode,y=c.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1],b=y.parentNode,x=c.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1],w=x.parentNode,T=c.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],E=T.parentNode;a.appendChild(o),S(()=>{i(u,`mt-4 grid gap-6 ${s.value===`preview`?``:`hidden`}`)});let D=_(p);r(D,h,()=>({fallback:n(U,()=>({title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`})),children:(e,n,r)=>C(e,r,()=>t(Object.assign(e=>{let t=v(),n=g(`div`,t);return f(t,n),n.className=`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`,m(()=>l(L,()=>({period:`Q2`}))).__rue_compiled_mount(n),m(()=>l(R,()=>({title:`统一边界内的活动流`}))).__rue_compiled_mount(n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(D,d);let O=_(b);r(O,h,()=>({fallback:n(U,()=>({title:`默认父级 fallback`,detail:`这个 fallback 不会显示，因为内层边界已经接住 pending`,tone:`info`})),children:(e,i,a)=>C(e,a,()=>t(Object.assign(e=>{let i=v();return r(i,G,()=>({title:`默认嵌套边界`,badge:`外层 children 仍在`,children:(e,i,a)=>C(e,a,()=>t(Object.assign(e=>{let i=v();return r(i,h,()=>({fallback:n(W,()=>({title:`默认：内层 fallback 正在加载`,detail:`只有内部插槽被替换，绿色外层框没有消失`})),children:(e,n,r)=>C(e,r,()=>t(Object.assign(e=>{let t=v();return m(()=>l(z,()=>({title:`默认异步内容已解析`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),b.insertBefore(O,y);let k=_(w);r(k,h,()=>({fallback:n(U,()=>({title:`父级 fallback 接管整块外层内容`,detail:`右侧绿色外层框加载期间不可见，因为 pending 被转发给父边界`,tone:`accent`})),children:(e,i,a)=>C(e,a,()=>t(Object.assign(e=>{let i=v();return r(i,G,()=>({title:`开启 suspensible 的嵌套边界`,badge:`resolved 后才出现`,children:(e,i,a)=>C(e,a,()=>t(Object.assign(e=>{let i=v();return r(i,h,()=>({suspensible:!0,fallback:n(W,()=>({title:`内层 fallback 会被父级覆盖`,detail:`开启 suspensible 后，这个黄色 fallback 不会出现在可见区域`})),children:(e,n,r)=>C(e,r,()=>t(Object.assign(e=>{let t=v();return m(()=>l(B,()=>({title:`交给父边界的活动流`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))})),w.insertBefore(k,x);let A=_(E);return r(A,h,()=>({fallback:n(U,()=>({title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`})),children:(e,n,r)=>C(e,r,()=>t(Object.assign(e=>{let t=v();return m(()=>l(V,()=>({title:`本地 loading 控制的活动流`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),E.insertBefore(A,T),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))),(e,n,a)=>C(e,a,()=>t(Object.assign(e=>{let t=v(),n=P().content.cloneNode(!0),a=n.firstChild,o=a,c=a.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode;t.appendChild(n),S(()=>{i(o,`mt-4 grid gap-6 ${s.value===`code`?``:`hidden`}`)});let u=_(l);return r(u,E,()=>({className:`h-full`,lang:`tsx`,code:K})),l.insertBefore(u,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),e=>w(()=>{})))};export{q as default};