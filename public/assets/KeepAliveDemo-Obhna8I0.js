import{C as e,Dn as t,Dt as n,E as r,Kt as i,Mt as a,Q as o,Qt as s,Vt as c,_n as l,_t as u,at as d,b as f,ct as p,et as m,f as h,gn as g,hn as _,kn as v,mn as y,pn as b,qt as x,rt as S,st as C,tn as w,ut as T,v as E,vn as D,w as O,wn as k,xn as A,xt as j}from"./rue-runtime-HIMg8Lz8.js";import{t as M}from"./Code-DpH7u0gk.js";import{r as N}from"./SidebarPlaygroundExample-BCPRe0hA.js";var P=D(`<article class="rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">CounterPanel</div><div class="mt-2 text-3xl font-semibold"><!--rue:text-hole:0--></div><button class="btn btn-primary btn-sm mt-4">增加</button></article>`),F=D(`<article class="rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">DraftPanel</div><label class="form-control mt-3"><span class="label-text">标题</span><input class="input input-bordered mt-1"></label><div class="mt-3 text-sm opacity-75">当前草稿：<!--rue:text-hole:0--></div></article>`),I=D(`<article class="rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">FeedPanel</div><button class="btn btn-accent btn-sm mt-3">添加记录</button><ul class="mt-4 space-y-2 text-sm"><!--rue:text-hole:0--></ul></article>`),L=D(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">KeepAlive 缓存组件</h1>`),R=D(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),z=D(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">Component + KeepAlive</h2><p class="text-sm opacity-75">这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。</p></div><div class="flex flex-wrap gap-3"><div class="join"><!--rue:text-hole:0--></div><div class="join"><button>全部缓存</button><button>排除草稿</button><button>max=2</button></div></div></section><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-64"><!--rue:opaque-hole:1--></div><aside class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div><strong>当前视图</strong>：<!--rue:text-hole:2--></div><div><strong>缓存模式</strong>： <!--rue:text-hole:3--></div><div>先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。</div></aside></div></div></div></div>`),B=D(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),V={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},H={CounterPanel:()=>{let[e,n]=i(`CounterPanel:hook:0`,0);return x(()=>p(c(Object.assign(r=>{let i=P().content.cloneNode(!0).firstChild,a=i.childNodes[2],o=i.childNodes[1].childNodes[0],s=o.parentNode;a.className=`btn btn-primary btn-sm mt-4`;let c=e=>{let t=()=>{n(e=>e+1)};typeof t==`function`&&t(e)};a.addEventListener(`click`,c),t(()=>a.removeEventListener(`click`,c));let u=l(``);return s.insertBefore(u,o),s.removeChild(o),A(u,()=>e.get()),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{})))},DraftPanel:()=>{let[e,r]=i(`DraftPanel:hook:0`,`未提交草稿`);return x(()=>p(c(Object.assign(i=>{let a=F().content.cloneNode(!0).firstChild,o=a.childNodes[1].childNodes[1],s=a.childNodes[2].childNodes[1],c=s.parentNode;o.className=`input input-bordered mt-1`;let u;k(()=>{let t=e.get(),r=t==null?``:String(t);Object.is(u,r)||(u=r,n(o,r))});let d=e=>{let t=e=>{r(e.target.value)};typeof t==`function`&&t(e)};o.addEventListener(`input`,d),t(()=>o.removeEventListener(`input`,d));let f=l(``);return c.insertBefore(f,s),c.removeChild(s),A(f,()=>e.get()),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{})))},FeedPanel:()=>{let[n,a]=i(`FeedPanel:hook:0`,[`初始化记录`]);return x(()=>p(c(Object.assign(i=>{let o=I().content.cloneNode(!0).firstChild,s=o.childNodes[1],u=o.childNodes[2].childNodes[0],p=u.parentNode;s.className=`btn btn-accent btn-sm mt-3`;let m=e=>{let t=()=>{a(e=>[`记录 ${e.length+1}`,...e])};typeof t==`function`&&t(e)};s.addEventListener(`click`,m),t(()=>s.removeEventListener(`click`,m));let h=[];return k(()=>{let t=n.get()||[];h=O(p,u,h,t,(e,t)=>e,(t,n)=>{let i=d(t);return e((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=g(`li`,e);t.className=`rounded-box bg-base-100/80 px-3 py-2`;let n=l(``);return b(t,n),A(n,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r)=>{t=e,n=r,i.set(e)})})}),t(()=>f(h)),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{})))}},U=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

type ViewName = 'CounterPanel' | 'DraftPanel' | 'FeedPanel';

const CounterPanel: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(value => value + 1)}>
      CounterPanel: {count}
    </button>
  );
};

const DraftPanel: FC = () => {
  const [title, setTitle] = useState('未提交草稿');
  return (
    <input
      value={title}
      onInput={(event: Event) => setTitle((event.target as HTMLInputElement).value)}
    />
  );
};

const FeedPanel: FC = () => {
  const [items, setItems] = useState<string[]>(['初始化记录']);
  return (
    <div>
      <button onClick={() => setItems(value => [\`记录 \${value.length + 1}\`, ...value])}>
        添加记录
      </button>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const views: Record<ViewName, FC> = { CounterPanel, DraftPanel, FeedPanel };

const Demo: FC = () => {
  const activeView = ref<ViewName>('CounterPanel');

  return (
    <KeepAlive max={2}>
      <Component
        is={views[activeView.value]}
        key={activeView.value}
      />
    </KeepAlive>
  );
};

export default Demo;`,W=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},G=e=>{let t=d(e.activeView),n=d(e.cacheMode);return p((()=>{let e=a(E,()=>({is:H[t.get().value],key:t.get().value}));return a(h,()=>({...W(n.get().value),cacheKey:t.get().value,cacheName:H[t.get().value].name,children:e}))})(),e=>m(()=>{t.set(e.activeView),n.set(e.cacheMode)}),()=>e)},K=()=>{let n=w(`preview`),i=w(`CounterPanel`),a=w(`all`);return x(()=>p(S(N,()=>({children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return t.appendChild(L().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,i)=>r(e,i,()=>c(Object.assign(e=>{let t=u(),r=R().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0],c=i.childNodes[1];t.appendChild(r),j(a,`role`,`tab`),k(()=>{o(a,`tab ${n.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{n.value=`preview`};typeof t==`function`&&t(e)};a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),j(c,`role`,`tab`),k(()=>{o(c,`tab ${n.value===`code`?`tab-active`:``}`)});let d=e=>{let t=()=>{n.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,d),s(()=>c.removeEventListener(`click`,d)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(l,p,m)=>r(l,m,()=>c(Object.assign(l=>{let p=u(),m=z().content.cloneNode(!0),h=m.firstChild,x=h,S=h.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],w=h.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],E=h.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2],D=h.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],A=D.parentNode,j=h.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],M=j.parentNode,N=h.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2],P=N.parentNode,F=h.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[2],I=F.parentNode;p.appendChild(m),k(()=>{o(x,`mt-4 grid gap-6 ${n.value===`preview`?``:`hidden`}`)}),k(()=>{o(S,`btn btn-sm join-item ${a.value===`all`?`btn-secondary`:``}`)});let L=e=>{let t=()=>{a.value=`all`};typeof t==`function`&&t(e)};S.addEventListener(`click`,L),s(()=>S.removeEventListener(`click`,L)),k(()=>{o(w,`btn btn-sm join-item ${a.value===`excludeDraft`?`btn-secondary`:``}`)});let R=e=>{let t=()=>{a.value=`excludeDraft`};typeof t==`function`&&t(e)};w.addEventListener(`click`,R),s(()=>w.removeEventListener(`click`,R)),k(()=>{o(E,`btn btn-sm join-item ${a.value===`maxTwo`?`btn-secondary`:``}`)});let B=e=>{let t=()=>{a.value=`maxTwo`};typeof t==`function`&&t(e)};E.addEventListener(`click`,B),s(()=>E.removeEventListener(`click`,B));let U=[];k(()=>{let n=Object.keys(H)||[];U=O(A,D,U,n,(e,t)=>e,(n,a)=>{let o=d(n);return e((e,n,a)=>r(e,a,()=>c(Object.assign(e=>{let n=g(`button`,e),r;k(()=>{let e=`btn btn-sm join-item ${i.value===o.get()?`btn-primary`:``}`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let a=e=>{let t=()=>{i.value=o.get()};typeof t==`function`&&t(e)};n.addEventListener(`click`,a),t(()=>n.removeEventListener(`click`,a));let s=y(`rue:compiled-slot`);return b(n,s),k(()=>{let e=V[o.get()];v(()=>T(e,n,s))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{n=e,a=t,o.set(e)})})}),t(()=>f(U));let W=_(M);return C(W,G,()=>({activeView:i,cacheMode:a})),M.insertBefore(W,j),k(()=>{let e=i.value;v(()=>T(e,P,N))}),k(()=>{let e=a.value===`all`?`全部缓存`:a.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`;v(()=>T(e,I,F))}),{__rue_compiled_host:p,__rue_compiled_roots:[p]}},{__rue_compiled_explicit_roots:!0}))),(e,t,i)=>r(e,i,()=>c(Object.assign(e=>{let t=u(),r=B().content.cloneNode(!0),i=r.firstChild,a=i,s=i.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode;t.appendChild(r),k(()=>{o(a,`mt-4 grid gap-6 ${n.value===`code`?``:`hidden`}`)});let l=_(c);return C(l,M,()=>({className:`h-full`,lang:`tsx`,code:U})),c.insertBefore(l,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),e=>m(()=>{})))};export{K as default};