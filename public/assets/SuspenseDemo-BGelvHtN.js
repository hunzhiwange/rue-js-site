const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AsyncRevenuePanel-zHMUP25Q.js","assets/rue-runtime-BWbIfNT8.js","assets/AsyncActivityPanel-0eveNmJt.js"])))=>i.map(i=>d[i]);
import{B as e,Bt as t,F as n,I as r,M as i,P as a,V as o,Vt as s,W as c,Wt as l,en as u,fn as d,gn as f,hn as p,in as m,j as h,mn as g,mt as _,nt as v,pn as y,sn as b,t as x,u as S,w as C,yn as w,z as T,zt as E}from"./rue-runtime-BWbIfNT8.js";import{t as D}from"./preload-helper-Czpn1I53.js";import{t as O}from"./Code-C5ZhIIr9.js";import{r as k}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var A=w(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Suspense 异步边界</h1>`),j=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),ee=w(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="space-y-3"><div><h2 class="text-xl font-semibold">1. 一个边界等待多个异步组件</h2><p class="text-sm opacity-75">逻辑：useComponent 默认会把 pending promise 登记到最近的 Suspense；边界收集到任意 pending 后显示 fallback，等全部 resolve 后再恢复 children。</p></div><div class="rounded-box border border-dashed border-base-300 p-4"><!--rue:opaque-hole:0--></div></section><section class="space-y-3"><div><h2 class="text-xl font-semibold">2. 内层边界交给父 Suspense</h2><p class="text-sm opacity-75">左边是默认嵌套：外层绿色框还在，只显示黄色的内层 fallback。右边开启 suspensible：内层 pending 被继续登记到父边界，绿色外层框会整块被父级 fallback 替换。</p></div><div class="grid gap-4 lg:grid-cols-2"><div class="space-y-2"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="font-semibold">默认：内层自己处理</h3><span class="badge badge-warning badge-outline">外层框保持可见</span></div><!--rue:opaque-hole:1--></div><div class="space-y-2"><div class="flex flex-wrap items-center justify-between gap-2"><h3 class="font-semibold">开启：交给父级接管</h3><span class="badge badge-accent badge-outline">外层框会被替换</span></div><!--rue:opaque-hole:2--></div></div></section><section class="space-y-3"><div><h2 class="text-xl font-semibold">3. 退出 Suspense 控制</h2><p class="text-sm opacity-75">逻辑：这是组件级开关。useComponent 设置 suspensible: false 后不会向最近边界登记 pending，因此外层 fallback 不会显示，组件自己的 loading 负责占位。</p></div><div class="rounded-box border border-dashed border-base-300 p-4"><!--rue:opaque-hole:3--></div></section><div role="alert" class="alert alert-info alert-soft"><span>提示：useComponent 的 loader 会按函数引用缓存。刷新页面能重新看到首屏 fallback；同一页面内再次渲染已加载组件会直接命中缓存。</span></div></div></div></div>`),M=w(`<div><div class="card bg-base-100 shadow"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),N=e=>new Promise(t=>setTimeout(t,e)),P=(e,t)=>N(t).then(e),F=C(()=>P(()=>D(()=>import(`./AsyncRevenuePanel-zHMUP25Q.js`),__vite__mapDeps([0,1])),900)),I=C(()=>P(()=>D(()=>import(`./AsyncActivityPanel-0eveNmJt.js`),__vite__mapDeps([2,1])),1400)),L=C(()=>P(()=>D(()=>import(`./AsyncActivityPanel-0eveNmJt.js`),__vite__mapDeps([2,1])),2600)),R=C(()=>P(()=>D(()=>import(`./AsyncActivityPanel-0eveNmJt.js`),__vite__mapDeps([2,1])),2800)),z=C(()=>P(()=>D(()=>import(`./AsyncActivityPanel-0eveNmJt.js`),__vite__mapDeps([2,1])),3200),{loading:()=>o(e=>{let t=p(`div`,e);t.setAttribute(`class`,`rounded-box border border-dashed border-info/40 bg-info/10 p-4 text-sm`);let n=p(`span`,t);return d(t,n),n.setAttribute(`class`,`loading loading-spinner loading-sm mr-2`),d(t,f(` 本地 loading：这个异步组件设置了 suspensible: false`)),[t,t]}),suspensible:!1}),B={primary:{root:`border-primary/35 bg-primary/10`,spinner:`text-primary`},accent:{root:`border-accent/35 bg-accent/10`,spinner:`text-accent`},warning:{root:`border-warning/45 bg-warning/10`,spinner:`text-warning`},info:{root:`border-info/40 bg-info/10`,spinner:`text-info`}},V=(n,i,a)=>{let o=c(T(n,`detail`)),s=c(T(n,`title`)),f=c(T(n,`tone`)),h=B[f.get()??`primary`];return r(l(e=>{let n=p(`div`,e),r;m(()=>{let e=`rounded-box border border-dashed p-4 ${h.root}`,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i=p(`div`,n);d(n,i),i.setAttribute(`class`,`flex items-center gap-3`);let a=p(`span`,i);d(i,a);let c;m(()=>{let e=`loading loading-spinner loading-md ${h.spinner}`,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,a.setAttribute(`class`,t))});let l=p(`div`,i);d(i,l);let u=p(`div`,l);d(l,u),u.setAttribute(`class`,`font-semibold`);let f=y(`rue:compiled-slot`);d(u,f),t({parent:u,before:f},()=>E(s.get()),()=>({}));let g=p(`div`,l);d(l,g),g.setAttribute(`class`,`text-sm opacity-70`);let _=y(`rue:compiled-slot`);d(g,_),t({parent:g,before:_},()=>E(o.get()),()=>({}));let v=p(`div`,n);d(n,v),v.setAttribute(`class`,`mt-4 grid gap-3 md:grid-cols-2`);let b=p(`div`,v);d(v,b),b.setAttribute(`class`,`skeleton h-24 rounded-box`);let x=p(`div`,v);return d(v,x),x.setAttribute(`class`,`skeleton h-24 rounded-box`),[n,n]}),e=>u(()=>{o.set(e.detail),s.set(e.title),f.set(e.tone)}),()=>e(n))},H=(n,i,a)=>{let o=c(T(n,`detail`)),s=c(T(n,`title`));return r(l(e=>{let n=p(`div`,e);n.setAttribute(`class`,`rounded-box border-2 border-warning/50 bg-warning/10 p-4`);let r=p(`div`,n);d(n,r),r.setAttribute(`class`,`mb-2 inline-flex rounded-field border border-warning/40 px-2 py-1 text-xs font-semibold text-warning`),d(r,f(`内层 fallback 可见`));let i=p(`div`,n);d(n,i),i.setAttribute(`class`,`flex items-center gap-3`);let a=p(`span`,i);d(i,a),a.setAttribute(`class`,`loading loading-dots loading-md text-warning`);let c=p(`div`,i);d(i,c);let l=p(`div`,c);d(c,l),l.setAttribute(`class`,`font-semibold`);let u=y(`rue:compiled-slot`);d(l,u),t({parent:l,before:u},()=>E(s.get()),()=>({}));let m=p(`div`,c);d(c,m),m.setAttribute(`class`,`text-sm opacity-70`);let h=y(`rue:compiled-slot`);return d(m,h),t({parent:m,before:h},()=>E(o.get()),()=>({})),[n,n]}),e=>u(()=>{o.set(e.detail),s.set(e.title)}),()=>e(n))},U=(n,i,a)=>{let o=c(T(n,`badge`)),s=c(T(n,`children`)),m=c(T(n,`title`));return r(l(e=>{let n=p(`div`,e);n.setAttribute(`class`,`rounded-box border-2 border-success/45 bg-success/10 p-4`);let r=p(`div`,n);d(n,r),r.setAttribute(`class`,`mb-3 flex flex-wrap items-start justify-between gap-3`);let i=p(`div`,r);d(r,i);let a=p(`div`,i);d(i,a),a.setAttribute(`class`,`font-semibold`);let c=y(`rue:compiled-slot`);d(a,c),t({parent:a,before:c},()=>E(m.get()),()=>({}));let l=p(`div`,i);d(i,l),l.setAttribute(`class`,`text-sm opacity-70`),d(l,f(`这块绿色区域代表外层 children。是否被替换，是两个场景最明显的区别。`));let u=p(`span`,r);d(r,u),u.setAttribute(`class`,`badge badge-success badge-outline`);let h=y(`rue:compiled-slot`);d(u,h),t({parent:u,before:h},()=>E(o.get()),()=>({}));let g=p(`div`,n);d(n,g),g.setAttribute(`class`,`rounded-box border border-base-300 bg-base-100/70 p-3`);let _=y(`rue:compiled-slot`);return d(g,_),t({parent:g,before:_},()=>s.get(),()=>({})),[n,n]}),e=>u(()=>{o.set(e.badge),s.set(e.children),m.set(e.title)}),()=>e(n))},W=`import { Suspense, type FC, useComponent } from '@rue-js/rue';

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
}`,G=(e,r,o)=>{let c=_(`preview`);return v(()=>a(k,()=>({children:(e,r,o)=>{let u=()=>l(e=>{let r=g();r.appendChild(A().content.cloneNode(!0));let o=j().content.cloneNode(!0),u=o.firstChild,_=u.childNodes[0],v=u.childNodes[1];r.appendChild(o),_.setAttribute(`role`,`tab`);let y;m(()=>{let e=`tab ${c.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(y,t)||(y=t,_.setAttribute(`class`,t))}),b(S(e,_,`click`,()=>()=>{c.value=`preview`})),v.setAttribute(`role`,`tab`);let C;m(()=>{let e=`tab ${c.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,v.setAttribute(`class`,t))}),b(S(e,v,`click`,()=>()=>{c.value=`code`}));let w=ee().content.cloneNode(!0),T=w.firstChild,E=T,D=T.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],k=D.parentNode,N=T.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[1],P=N.parentNode,B=T.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[1],G=B.parentNode,K=T.childNodes[0].childNodes[0].childNodes[2].childNodes[1].childNodes[0],q=K.parentNode;r.appendChild(w);let J;m(()=>{let e=`mt-4 grid gap-6 ${c.value===`preview`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(J,t)||(J=t,E.setAttribute(`class`,t))}),x(()=>({fallback:(e,t,n)=>{let r=()=>a(V,()=>({title:`正在加载销售看板`,detail:`收入组件和活动流组件会一起由这个边界等待`}));return e==null?r():s(e,n,r)},children:(e,t,n)=>{let r=()=>l(e=>{let t=g(),n=p(`div`,t);d(t,n),n.setAttribute(`class`,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_24rem]`),h(()=>i(F,()=>({period:`Q2`}))).__rue_compiled_mount(n),h(()=>i(I,()=>({title:`统一边界内的活动流`}))).__rue_compiled_mount(n);let r=f(``),a=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})).__rue_compiled_mount(k,D),x(()=>({fallback:(e,t,n)=>{let r=()=>a(V,()=>({title:`默认父级 fallback`,detail:`这个 fallback 不会显示，因为内层边界已经接住 pending`,tone:`info`}));return e==null?r():s(e,n,r)},children:(e,t,r)=>{let o=()=>l(e=>{let t=g();n(t,U,()=>({title:`默认嵌套边界`,badge:`外层 children 仍在`,children:(e,t,n)=>{let r=()=>l(e=>{let t=g();x(()=>({fallback:(e,t,n)=>{let r=()=>a(H,()=>({title:`默认：内层 fallback 正在加载`,detail:`只有内部插槽被替换，绿色外层框没有消失`}));return e==null?r():s(e,n,r)},children:(e,t,n)=>{let r=()=>l(e=>{let t=g();h(()=>i(L,()=>({title:`默认异步内容已解析`}))).__rue_compiled_mount(t);let n=f(``),r=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})).__rue_compiled_mount(t,null);let n=f(``),r=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=f(``),o=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?o():s(e,r,o)}})).__rue_compiled_mount(P,N),x(()=>({fallback:(e,t,n)=>{let r=()=>a(V,()=>({title:`父级 fallback 接管整块外层内容`,detail:`右侧绿色外层框加载期间不可见，因为 pending 被转发给父边界`,tone:`accent`}));return e==null?r():s(e,n,r)},children:(e,t,r)=>{let o=()=>l(e=>{let t=g();n(t,U,()=>({title:`开启 suspensible 的嵌套边界`,badge:`resolved 后才出现`,children:(e,t,n)=>{let r=()=>l(e=>{let t=g();x(()=>({suspensible:!0,fallback:(e,t,n)=>{let r=()=>a(H,()=>({title:`内层 fallback 会被父级覆盖`,detail:`开启 suspensible 后，这个黄色 fallback 不会出现在可见区域`}));return e==null?r():s(e,n,r)},children:(e,t,n)=>{let r=()=>l(e=>{let t=g();h(()=>i(R,()=>({title:`交给父边界的活动流`}))).__rue_compiled_mount(t);let n=f(``),r=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})).__rue_compiled_mount(t,null);let n=f(``),r=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}}));let r=f(``),o=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?o():s(e,r,o)}})).__rue_compiled_mount(G,B),x(()=>({fallback:(e,t,n)=>{let r=()=>a(V,()=>({title:`这个 fallback 不会接管下面的组件`,detail:`子组件显式设置了 suspensible: false`}));return e==null?r():s(e,n,r)},children:(e,t,n)=>{let r=()=>l(e=>{let t=g();h(()=>i(z,()=>({title:`本地 loading 控制的活动流`}))).__rue_compiled_mount(t);let n=f(``),r=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():s(e,n,r)}})).__rue_compiled_mount(q,K);let Y=M().content.cloneNode(!0),X=Y.firstChild,te=X,Z=X.childNodes[0].childNodes[0].childNodes[0],Q=Z.parentNode;r.appendChild(Y);let $;m(()=>{let e=`mt-4 grid gap-6 ${c.value===`code`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is($,t)||($=t,te.setAttribute(`class`,t))});let ne=(e,t,n)=>{let r=()=>a(O,()=>({className:`h-full`,lang:`tsx`,code:W}));return e==null?r():s(e,n,r)},re=Z.nextSibling;Q.removeChild(Z),t({parent:Q,before:re},()=>ne,()=>({}));let ie=f(``),ae=f(``);return r.insertBefore(ie,r.firstChild),r.appendChild(ae),[r.firstChild,r.lastChild]});return e==null?u():s(e,o,u)}})))};export{G as default};