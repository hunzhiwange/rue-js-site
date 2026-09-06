import{E as e,Q as t,Qt as n,T as r,Vt as i,Z as a,_n as o,_t as s,at as c,ct as l,et as u,gn as d,hn as f,in as p,kn as m,pn as h,rt as g,sn as _,st as v,tn as y,ut as b,v as x,vn as S,wn as C,xn as w,xt as T}from"./rue-runtime-HIMg8Lz8.js";import{t as E}from"./Code-DpH7u0gk.js";import{r as D}from"./SidebarPlaygroundExample-BCPRe0hA.js";var O=S(`<article><div class="text-xs uppercase tracking-[0.22em] opacity-60"><!--rue:text-hole:0--></div><div class="mt-2 text-3xl font-semibold"><!--rue:text-hole:1--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:2--></div><div class="mt-4"><!--rue:text-hole:3--></div></article>`),k=S(`<section class="rounded-box border border-info/25 bg-info/10 p-4 shadow-sm"><div class="flex items-center justify-between gap-3"><div><div class="font-semibold"><!--rue:text-hole:0--></div><div class="text-sm opacity-75"><!--rue:text-hole:1--></div></div><span class="status status-info status-lg"></span></div><div class="mt-4"><!--rue:text-hole:2--></div></section>`),A=S(`<article class="rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60"><!--rue:text-hole:0--></div><div class="mt-2 text-2xl font-semibold"><!--rue:text-hole:1--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:2--></div><div class="mt-4"><!--rue:text-hole:3--></div></article>`),j=S(`<section class="rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm"><div class="font-semibold"><!--rue:text-hole:0--></div><div class="mt-1 text-sm opacity-75"><!--rue:text-hole:1--></div><div class="mt-4"><!--rue:text-hole:2--></div></section>`),M=S(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">动态组件（Component）</h1>`),N=S(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),P=S(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">1. 直接切换原生标签和组件定义</h2><p class="text-sm opacity-75">这里显式导入并使用 &lt;Component&gt;，is 可以在字符串标签名和函数组件之间来回切换。</p></div><div class="flex flex-wrap gap-3"><div class="join"><button>原生 article</button><button>SalesCard</button><button>StatusStrip</button></div><div class="join"><button>primary</button><button>accent</button></div></div></div><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-44"><!--rue:opaque-hole:0--></div><div class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div><strong>当前 is</strong>： <!--rue:text-hole:1--></div><div><strong>验证点</strong>：native element、直接组件定义、children 透传。</div><div><strong>说明</strong>：切到 SalesCard 时，tone 也会跟着透传给目标组件。</div></div></div></section><section class="space-y-3"><div class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">2. 运行时注册字符串组件名</h2><p class="text-sm opacity-75">下面这个小区域直接在当前页面里使用导出的 &lt;Component&gt;，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。</p></div><div class="join"><button>RegisteredMetric</button><button>RegisteredNotice</button></div></div><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-40"><!--rue:opaque-hole:2--></div><div class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div>这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染 &lt;Component&gt;。</div><div>因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。</div><div>这也顺带验证了字符串名路径下的 children 透传。</div></div></div></section><div role="alert" class="alert alert-warning alert-soft"><span>注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在 &lt;Component&gt; 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。</span></div></div></div></div>`),F=S(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),I={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},L=e=>{let t=c(e.children),n=c(e.detail),a=c(e.title),s=c(e.tone),d=c(e.value);return l(i(Object.assign(e=>{let i=O().content.cloneNode(!0).firstChild,c=i,l=i.childNodes[0].childNodes[0],u=l.parentNode,f=i.childNodes[1].childNodes[0],p=f.parentNode,m=i.childNodes[2].childNodes[0],h=m.parentNode,g=i.childNodes[3].childNodes[0],_=g.parentNode,v;C(()=>{let e=`rounded-box border p-4 shadow-sm ${I[s.get()??`primary`]}`,t=e==null?``:String(e);Object.is(v,t)||(v=t,c.className=t)});let y=o(``);u.insertBefore(y,l),u.removeChild(l),w(y,()=>a.get());let b=o(``);p.insertBefore(b,f),p.removeChild(f),w(b,()=>d.get());let x=o(``);return h.insertBefore(x,m),h.removeChild(m),w(x,()=>n.get()),r({parent:_,before:g},()=>t.get(),()=>({})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{t.set(e.children),n.set(e.detail),a.set(e.title),s.set(e.tone),d.set(e.value)}),()=>e)},R=e=>{let t=c(e.children),n=c(e.detail),a=c(e.title);return l(i(Object.assign(e=>{let i=k().content.cloneNode(!0).firstChild,s=i.childNodes[0].childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[0].childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,d=i.childNodes[1].childNodes[0],f=d.parentNode,p=o(``);c.insertBefore(p,s),c.removeChild(s),w(p,()=>a.get());let m=o(``);return u.insertBefore(m,l),u.removeChild(l),w(m,()=>n.get()),r({parent:f,before:d},()=>t.get(),()=>({})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{t.set(e.children),n.set(e.detail),a.set(e.title)}),()=>e)},z=e=>{let t=c(e.children),n=c(e.detail),a=c(e.title),s=c(e.value);return l(i(Object.assign(e=>{let i=A().content.cloneNode(!0).firstChild,c=i.childNodes[0].childNodes[0],l=c.parentNode,u=i.childNodes[1].childNodes[0],d=u.parentNode,f=i.childNodes[2].childNodes[0],p=f.parentNode,m=i.childNodes[3].childNodes[0],h=m.parentNode,g=o(``);l.insertBefore(g,c),l.removeChild(c),w(g,()=>a.get());let _=o(``);d.insertBefore(_,u),d.removeChild(u),w(_,()=>s.get()??`Registered`);let v=o(``);return p.insertBefore(v,f),p.removeChild(f),w(v,()=>n.get()),r({parent:h,before:m},()=>t.get(),()=>({})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{t.set(e.children),n.set(e.detail),a.set(e.title),s.set(e.value)}),()=>e)},B=e=>{let t=c(e.children),n=c(e.detail),a=c(e.title);return l(i(Object.assign(e=>{let i=j().content.cloneNode(!0).firstChild,s=i.childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[1].childNodes[0],u=l.parentNode,d=i.childNodes[2].childNodes[0],f=d.parentNode,p=o(``);c.insertBefore(p,s),c.removeChild(s),w(p,()=>a.get());let m=o(``);return u.insertBefore(m,l),u.removeChild(l),w(m,()=>n.get()),r({parent:f,before:d},()=>t.get(),()=>({})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>u(()=>{t.set(e.children),n.set(e.detail),a.set(e.title)}),()=>e)},V=!1,H=()=>{V||=(a(()=>null).component(`RegisteredMetric`,z).component(`RegisteredNotice`,B),!0)},U=`import {
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

export default Demo;`,W=()=>{let{activeTab:r,renderTarget:a,tone:c,registryTarget:l,resolveDynamicType:u,resolveDynamicProps:S,resolveRegistryType:w}=_(`useSetup:0:0`,()=>p(()=>{H();let e=y(`preview`),t=y(`native`),n=y(`primary`),r=y(`metric`);return{activeTab:e,renderTarget:t,tone:n,registryTarget:r,resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?L:R,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`},resolveRegistryType:()=>r.value===`metric`?`RegisteredMetric`:`RegisteredNotice`}}));return g(D,()=>({children:[(t,n,r)=>e(t,r,()=>i(Object.assign(e=>{let t=s();return t.appendChild(M().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(a,o,c)=>e(a,c,()=>i(Object.assign(e=>{let i=s(),a=N().content.cloneNode(!0),o=a.firstChild,c=o.childNodes[0],l=o.childNodes[1];i.appendChild(a),T(c,`role`,`tab`),C(()=>{t(c,`tab ${r.value===`preview`?`tab-active`:``}`)});let u=e=>{let t=()=>{r.value=`preview`};typeof t==`function`&&t(e)};c.addEventListener(`click`,u),n(()=>c.removeEventListener(`click`,u)),T(l,`role`,`tab`),C(()=>{t(l,`tab ${r.value===`code`?`tab-active`:``}`)});let d=e=>{let t=()=>{r.value=`code`};typeof t==`function`&&t(e)};return l.addEventListener(`click`,d),n(()=>l.removeEventListener(`click`,d)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),(p,g,_)=>e(p,_,()=>i(Object.assign(p=>{let g=s(),_=P().content.cloneNode(!0),y=_.firstChild,T=y,E=y.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],D=y.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1],O=y.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2],k=y.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],A=y.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],j=y.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],M=y.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[1],N=y.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],F=N.parentNode,I=y.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2],L=I.parentNode,R=y.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0],z=R.parentNode;g.appendChild(_),C(()=>{t(T,`mt-4 grid md:grid-cols-1 gap-6 items-start ${r.value===`preview`?``:`hidden`}`)}),C(()=>{t(E,`btn btn-sm join-item ${a.value===`native`?`btn-primary`:``}`)});let B=e=>{let t=()=>{a.value=`native`};typeof t==`function`&&t(e)};E.addEventListener(`click`,B),n(()=>E.removeEventListener(`click`,B)),C(()=>{t(D,`btn btn-sm join-item ${a.value===`card`?`btn-primary`:``}`)});let V=e=>{let t=()=>{a.value=`card`};typeof t==`function`&&t(e)};D.addEventListener(`click`,V),n(()=>D.removeEventListener(`click`,V)),C(()=>{t(O,`btn btn-sm join-item ${a.value===`notice`?`btn-primary`:``}`)});let H=e=>{let t=()=>{a.value=`notice`};typeof t==`function`&&t(e)};O.addEventListener(`click`,H),n(()=>O.removeEventListener(`click`,H)),C(()=>{t(k,`btn btn-sm join-item ${c.value===`primary`?`btn-secondary`:``}`)});let U=e=>{let t=()=>{c.value=`primary`};typeof t==`function`&&t(e)};k.addEventListener(`click`,U),n(()=>k.removeEventListener(`click`,U)),C(()=>{t(A,`btn btn-sm join-item ${c.value===`accent`?`btn-secondary`:``}`)});let W=e=>{let t=()=>{c.value=`accent`};typeof t==`function`&&t(e)};A.addEventListener(`click`,W),n(()=>A.removeEventListener(`click`,W)),C(()=>{t(j,`btn btn-sm join-item ${l.value===`metric`?`btn-primary`:``}`)});let G=e=>{let t=()=>{l.value=`metric`};typeof t==`function`&&t(e)};j.addEventListener(`click`,G),n(()=>j.removeEventListener(`click`,G)),C(()=>{t(M,`btn btn-sm join-item ${l.value===`notice`?`btn-primary`:``}`)});let K=e=>{let t=()=>{l.value=`notice`};typeof t==`function`&&t(e)};M.addEventListener(`click`,K),n(()=>M.removeEventListener(`click`,K));let q=f(F);v(q,x,()=>({is:u(),...S(),children:(t,n,r)=>e(t,r,()=>i(Object.assign(e=>{let t=s(),n=d(`span`,t);return h(t,n),n.className=`badge badge-outline badge-sm`,h(n,o(`children 已透传`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),F.insertBefore(q,N),C(()=>{let e=a.value===`native`?`article`:a.value===`card`?`SalesCard`:`StatusStrip`;m(()=>b(e,L,I))});let J=f(z);return v(J,x,()=>({is:w(),title:`运行时注册`,value:`CardView`,detail:l.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:(t,n,r)=>e(t,r,()=>i(Object.assign(e=>{let t=s(),n=d(`span`,t);return h(t,n),n.className=`badge badge-outline badge-sm`,h(n,o(`children 一样会透传`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),z.insertBefore(J,R),{__rue_compiled_host:g,__rue_compiled_roots:[g]}},{__rue_compiled_explicit_roots:!0}))),(n,a,o)=>e(n,o,()=>i(Object.assign(e=>{let n=s(),i=F().content.cloneNode(!0),a=i.firstChild,o=a,c=a.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode;n.appendChild(i),C(()=>{t(o,`mt-4 grid md:grid-cols-1 gap-6 items-start ${r.value===`code`?``:`hidden`}`)});let u=f(l);return v(u,E,()=>({className:`h-full`,lang:`tsx`,code:U})),l.insertBefore(u,c),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]}))};export{W as default};