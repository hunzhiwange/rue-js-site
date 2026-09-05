import{Bt as e,Et as t,H as n,I as r,K as i,L as a,Lt as o,W as s,Wt as c,Y as l,_n as u,b as d,bn as f,fn as p,gn as m,hn as h,kn as g,l as _,mn as v,nt as y,ot as b,q as x,qt as S,wn as C,x as w,z as T}from"./rue-runtime-CwEGJ854.js";import{t as E}from"./Code-B3jCYMAr.js";import{r as D}from"./SidebarPlaygroundExample-EGR0CyDT.js";var O=u(`<article><div class="text-xs uppercase tracking-[0.22em] opacity-60"><!--rue:text-hole:0--></div><div class="mt-2 text-3xl font-semibold"><!--rue:text-hole:1--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:2--></div><div class="mt-4"><!--rue:text-hole:3--></div></article>`),k=u(`<section class="rounded-box border border-info/25 bg-info/10 p-4 shadow-sm"><div class="flex items-center justify-between gap-3"><div><div class="font-semibold"><!--rue:text-hole:0--></div><div class="text-sm opacity-75"><!--rue:text-hole:1--></div></div><span class="status status-info status-lg"></span></div><div class="mt-4"><!--rue:text-hole:2--></div></section>`),A=u(`<article class="rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:2--></div><div class="mt-4"><!--rue:text-hole:3--></div></article>`),j=u(`<section class="rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm"><div class="font-semibold"><!--rue:text-hole:0--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:1--></div><div class="mt-4"><!--rue:text-hole:2--></div></section>`),M=u(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">动态组件（Component）</h1>`),N=u(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=u(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">1. 直接切换原生标签和组件定义</h2><p class="text-sm opacity-75">这里显式导入并使用 &lt;Component&gt;，is 可以在字符串标签名和函数组件之间来回切换。</p></div><div class="flex flex-wrap gap-3"><div class="join"><button>原生 article</button><button>SalesCard</button><button>StatusStrip</button></div><div class="join"><button>primary</button><button>accent</button></div></div></div><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-44"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div><strong>当前 is</strong>： <!--rue:text-hole:1--></div><div><strong>验证点</strong>：native element、直接组件定义、children 透传。</div><div><strong>说明</strong>：切到 SalesCard 时，tone 也会跟着透传给目标组件。</div></div></div></section><section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">2. 运行时注册字符串组件名</h2><p class="text-sm opacity-75">下面这个小区域直接在当前页面里使用导出的 &lt;Component&gt;，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。</p></div><div class="join"><button>RegisteredMetric</button><button>RegisteredNotice</button></div></div><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-40"><!--rue:opaque-hole:2--></div><div class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div>这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染 &lt;Component&gt;。</div><div>因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。</div><div>这也顺带验证了字符串名路径下的 children 透传。</div></div></div></section><div role="alert" class="alert alert-warning alert-soft"><span>注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在 &lt;Component&gt; 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。</span></div></div></div></div>`),F=u(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),I={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},L=e=>{let n=s(e.children),r=s(e.detail),i=s(e.title),a=s(e.tone),o=s(e.value);return x(t(Object.assign(e=>{let t=O().content.cloneNode(!0).firstChild,s=t,c=t.childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[1].childNodes[0],p=u.parentNode,h=t.childNodes[2].childNodes[0],g=h.parentNode,_=t.childNodes[3].childNodes[0],v=_.parentNode,y;C(()=>{let e=`rounded-box border p-4 shadow-sm ${I[a.get()??`primary`]}`,t=e==null?``:String(e);Object.is(y,t)||(y=t,s.className=t)});let b=m(``);l.insertBefore(b,c),l.removeChild(c),f(b,()=>i.get());let x=m(``);p.insertBefore(x,u),p.removeChild(u),f(x,()=>o.get());let S=m(``);return g.insertBefore(S,h),g.removeChild(h),f(S,()=>r.get()),d({parent:v,before:_},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{n.set(e.children),r.set(e.detail),i.set(e.title),a.set(e.tone),o.set(e.value)}),()=>e)},R=e=>{let n=s(e.children),r=s(e.detail),i=s(e.title);return x(t(Object.assign(e=>{let t=k().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[0].childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[1].childNodes[0],u=l.parentNode,p=m(``);o.insertBefore(p,a),o.removeChild(a),f(p,()=>i.get());let h=m(``);return c.insertBefore(h,s),c.removeChild(s),f(h,()=>r.get()),d({parent:u,before:l},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{n.set(e.children),r.set(e.detail),i.set(e.title)}),()=>e)},z=e=>{let n=s(e.children),r=s(e.detail),i=s(e.title),a=s(e.value);return x(t(Object.assign(e=>{let t=A().content.cloneNode(!0).firstChild,o=t.childNodes[0].childNodes[0],s=o.parentNode,c=t.childNodes[1].childNodes[0],l=c.parentNode,u=t.childNodes[2].childNodes[0],p=u.parentNode,h=t.childNodes[3].childNodes[0],g=h.parentNode,_=m(``);s.insertBefore(_,o),s.removeChild(o),f(_,()=>i.get());let v=m(``);l.insertBefore(v,c),l.removeChild(c),f(v,()=>a.get()??`Registered`);let y=m(``);return p.insertBefore(y,u),p.removeChild(u),f(y,()=>r.get()),d({parent:g,before:h},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{n.set(e.children),r.set(e.detail),i.set(e.title),a.set(e.value)}),()=>e)},B=e=>{let n=s(e.children),r=s(e.detail),i=s(e.title);return x(t(Object.assign(e=>{let t=j().content.cloneNode(!0).firstChild,a=t.childNodes[0].childNodes[0],o=a.parentNode,s=t.childNodes[1].childNodes[0],c=s.parentNode,l=t.childNodes[2].childNodes[0],u=l.parentNode,p=m(``);o.insertBefore(p,a),o.removeChild(a),f(p,()=>i.get());let h=m(``);return c.insertBefore(h,s),c.removeChild(s),f(h,()=>r.get()),d({parent:u,before:l},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{n.set(e.children),r.set(e.detail),i.set(e.title)}),()=>e)},V=!1,H=()=>{V||=(r(()=>null).component(`RegisteredMetric`,z).component(`RegisteredNotice`,B),!0)},U=`import {
  Component,
  type FC,
  ref,
  useApp,
} from '@rue-js/rue';

const SalesCard: FC<{ title: string; value: string; detail: string }> = (props) => (
  <article className="rounded-box border border-primary/25 bg-primary/10 p-4">
    <div className="text-xs uppercase tracking-[0.22em] opacity-60">{props.title}</div>
    <div className="mt-2 text-3xl font-semibold">{props.value}</div>
    <div className="mt-1 text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </article>
);

const StatusStrip: FC<{ title: string; detail: string }> = (props) => (
  <section className="rounded-box border border-info/25 bg-info/10 p-4">
    <div className="font-semibold">{props.title}</div>
    <div className="text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </section>
);

const RegisteredMetric: FC<{ title: string; value?: string; detail: string }> = (props) => (
  <article className="rounded-box border border-secondary/25 bg-secondary/10 p-4">
    <div className="text-xs uppercase tracking-[0.22em] opacity-60">{props.title}</div>
    <div className="mt-2 text-2xl font-semibold">{props.value ?? 'Registered'}</div>
    <div className="mt-1 text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </article>
);

const RegisteredNotice: FC<{ title: string; detail: string }> = (props) => (
  <section className="rounded-box border border-warning/35 bg-warning/15 p-4">
    <div className="font-semibold">{props.title}</div>
    <div className="mt-1 text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </section>
);

const Demo: FC = () => {
  const shell = ref<'native' | 'card' | 'notice'>('native');
  const registryMode = ref<'metric' | 'notice'>('metric');

  useApp(() => null)
    .component('RegisteredMetric', RegisteredMetric as FC<any>)
    .component('RegisteredNotice', RegisteredNotice as FC<any>);

  const resolveType = () =>
    shell.value === 'native'
      ? 'article'
      : shell.value === 'card'
        ? SalesCard
        : StatusStrip;

  const resolveProps = () =>
    shell.value === 'native'
      ? {
          className: 'rounded-box border border-base-300 bg-base-100 p-4 shadow-sm',
        }
      : shell.value === 'card'
        ? {
            title: '今日成交额',
            value: '¥ 128,400',
            detail: '比昨日 +8.2%',
          }
        : {
            title: '状态切换',
            detail: '当前目标由 is 决定',
          };

  return (
    <div className="grid gap-6">
      <Component is={resolveType()} {...resolveProps()}>
        <span className="badge badge-outline badge-sm">children 已透传</span>
      </Component>

      <Component
        is={registryMode.value === 'metric' ? 'RegisteredMetric' : 'RegisteredNotice'}
        title="运行时注册"
        value="CardView"
        detail="通过字符串名解析到已注册组件"
      >
        <span className="badge badge-outline badge-sm">children 一样会透传</span>
      </Component>
    </div>
  );
};

export default Demo;`,W=()=>{let{activeTab:r,renderTarget:s,tone:u,registryTarget:d,resolveDynamicType:f,resolveDynamicProps:x,resolveRegistryType:T}=S(`useSetup:0:0`,()=>c(()=>{H();let t=e(`preview`),n=e(`native`),r=e(`primary`),i=e(`metric`);return{activeTab:t,renderTarget:n,tone:r,registryTarget:i,resolveDynamicType:()=>n.value===`native`?`article`:n.value===`card`?L:R,resolveDynamicProps:()=>n.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:n.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:r.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`},resolveRegistryType:()=>i.value===`metric`?`RegisteredMetric`:`RegisteredNotice`}}));return n(D,()=>({children:[(e,n,r)=>w(e,r,()=>t(Object.assign(e=>{let t=y();return t.appendChild(M().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,i)=>w(e,i,()=>t(Object.assign(e=>{let t=y(),n=N().content.cloneNode(!0),i=n.firstChild,s=i.childNodes[0],c=i.childNodes[1];t.appendChild(n),b(s,`role`,`tab`),C(()=>{a(s,`tab ${r.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{r.value=`preview`};typeof t==`function`&&t(e)};s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),b(c,`role`,`tab`),C(()=>{a(c,`tab ${r.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{r.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),o(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,n,c)=>w(e,c,()=>t(Object.assign(e=>{let n=y(),c=P().content.cloneNode(!0),b=c.firstChild,S=b,E=b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],D=b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],O=b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2],k=b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],A=b.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],j=b.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],M=b.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1],N=b.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],F=N.parentNode,I=b.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2],L=I.parentNode,R=b.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0],z=R.parentNode;n.appendChild(c),C(()=>{a(S,`mt-4 grid md:grid-cols-1 gap-6 items-start ${r.value===`preview`?``:`hidden`}`)}),C(()=>{a(E,`btn btn-sm join-item ${s.value===`native`?`btn-primary`:``}`)});let B=e=>{let t=()=>{s.value=`native`};typeof t==`function`&&t(e)};E.addEventListener(`click`,B),o(()=>E.removeEventListener(`click`,B)),C(()=>{a(D,`btn btn-sm join-item ${s.value===`card`?`btn-primary`:``}`)});let V=e=>{let t=()=>{s.value=`card`};typeof t==`function`&&t(e)};D.addEventListener(`click`,V),o(()=>D.removeEventListener(`click`,V)),C(()=>{a(O,`btn btn-sm join-item ${s.value===`notice`?`btn-primary`:``}`)});let H=e=>{let t=()=>{s.value=`notice`};typeof t==`function`&&t(e)};O.addEventListener(`click`,H),o(()=>O.removeEventListener(`click`,H)),C(()=>{a(k,`btn btn-sm join-item ${u.value===`primary`?`btn-secondary`:``}`)});let U=e=>{let t=()=>{u.value=`primary`};typeof t==`function`&&t(e)};k.addEventListener(`click`,U),o(()=>k.removeEventListener(`click`,U)),C(()=>{a(A,`btn btn-sm join-item ${u.value===`accent`?`btn-secondary`:``}`)});let W=e=>{let t=()=>{u.value=`accent`};typeof t==`function`&&t(e)};A.addEventListener(`click`,W),o(()=>A.removeEventListener(`click`,W)),C(()=>{a(j,`btn btn-sm join-item ${d.value===`metric`?`btn-primary`:``}`)});let G=e=>{let t=()=>{d.value=`metric`};typeof t==`function`&&t(e)};j.addEventListener(`click`,G),o(()=>j.removeEventListener(`click`,G)),C(()=>{a(M,`btn btn-sm join-item ${d.value===`notice`?`btn-primary`:``}`)});let K=e=>{let t=()=>{d.value=`notice`};typeof t==`function`&&t(e)};M.addEventListener(`click`,K),o(()=>M.removeEventListener(`click`,K));let q=v(F);i(q,_,()=>({is:f(),...x(),children:(e,n,r)=>w(e,r,()=>t(Object.assign(e=>{let t=y(),n=h(`span`,t);return p(t,n),n.className=`badge badge-outline badge-sm`,p(n,m(`children 已透传`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),F.insertBefore(q,N),C(()=>{let e=s.value===`native`?`article`:s.value===`card`?`SalesCard`:`StatusStrip`;g(()=>l(e,L,I))});let J=v(z);return i(J,_,()=>({is:T(),title:`运行时注册`,value:`CardView`,detail:d.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:(e,n,r)=>w(e,r,()=>t(Object.assign(e=>{let t=y(),n=h(`span`,t);return p(t,n),n.className=`badge badge-outline badge-sm`,p(n,m(`children 一样会透传`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),z.insertBefore(J,R),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,n,o)=>w(e,o,()=>t(Object.assign(e=>{let t=y(),n=F().content.cloneNode(!0),o=n.firstChild,s=o,c=o.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode;t.appendChild(n),C(()=>{a(s,`mt-4 grid md:grid-cols-1 gap-6 items-start ${r.value===`code`?``:`hidden`}`)});let u=v(l);return i(u,E,()=>({className:`h-full`,lang:`tsx`,code:U})),l.insertBefore(u,c),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]}))};export{W as default};