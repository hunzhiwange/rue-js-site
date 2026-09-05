import{Bt as e,C as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,Mt as c,S as l,W as u,Y as d,_n as f,_t as p,bn as m,fn as h,ft as g,gn as _,hn as v,jt as y,kn as b,l as x,m as S,mn as C,nt as w,ot as T,pn as E,q as D,wn as O,x as k,z as A}from"./rue-runtime-CwEGJ854.js";import{t as j}from"./Code-B3jCYMAr.js";import{r as M}from"./SidebarPlaygroundExample-EGR0CyDT.js";var N=f(`<article class="rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">CounterPanel</div><div class="mt-2 text-3xl font-semibold"><!--rue:text-hole:0--></div><button class="btn btn-primary btn-sm mt-4">增加</button></article>`),P=f(`<article class="rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">DraftPanel</div><label class="form-control mt-3"><span class="label-text">标题</span><input class="input input-bordered mt-1"></label><div class="mt-3 text-sm opacity-75">当前草稿：<!--rue:text-hole:0--></div></article>`),F=f(`<article class="rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">FeedPanel</div><button class="btn btn-accent btn-sm mt-3">添加记录</button><ul class="mt-4 space-y-2 text-sm"><!--rue:text-hole:0--></ul></article>`),I=f(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">KeepAlive 缓存组件</h1>`),L=f(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),R=f(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">Component + KeepAlive</h2><p class="text-sm opacity-75">这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。</p></div><div class="flex flex-wrap gap-3"><div class="join"><!--rue:text-hole:0--></div><div class="join"><button>全部缓存</button><button>排除草稿</button><button>max=2</button></div></div></section><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-64"><!--rue:opaque-hole:1--></div><aside class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div><strong>当前视图</strong>：<!--rue:text-hole:2--></div><div><strong>缓存模式</strong>： <!--rue:text-hole:3--></div><div>先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。</div></aside></div></div></div></div>`),z=f(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),B={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},V={CounterPanel:()=>{let[e,t]=y(`CounterPanel:hook:0`,0);return c(()=>D(r(Object.assign(r=>{let i=N().content.cloneNode(!0).firstChild,a=i.childNodes[2],o=i.childNodes[1].childNodes[0],s=o.parentNode;a.className=`btn btn-primary btn-sm mt-4`;let c=e=>{let n=()=>{t(e=>{e.value+=1})};typeof n==`function`&&n(e)};a.addEventListener(`click`,c),n(()=>a.removeEventListener(`click`,c));let l=_(``);return s.insertBefore(l,o),s.removeChild(o),m(l,()=>e.value),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{})))},DraftPanel:()=>{let[e,t]=y(`DraftPanel:hook:0`,`未提交草稿`);return c(()=>D(r(Object.assign(r=>{let i=P().content.cloneNode(!0).firstChild,a=i.childNodes[1].childNodes[1],o=i.childNodes[2].childNodes[1],s=o.parentNode;a.className=`input input-bordered mt-1`;let c;O(()=>{let t=e.value,n=t==null?``:String(t);Object.is(c,n)||(c=n,g(a,n))});let l=e=>{let n=e=>{t(e.target.value)};typeof n==`function`&&n(e)};a.addEventListener(`input`,l),n(()=>a.removeEventListener(`input`,l));let u=_(``);return s.insertBefore(u,o),s.removeChild(o),m(u,()=>e.value),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{})))},FeedPanel:()=>{let[e,i]=y(`FeedPanel:hook:0`,[`初始化记录`]);return c(()=>D(r(Object.assign(a=>{let o=F().content.cloneNode(!0).firstChild,s=o.childNodes[1],c=o.childNodes[2].childNodes[0],d=c.parentNode;s.className=`btn btn-accent btn-sm mt-3`;let f=e=>{let t=()=>{i(e=>[`记录 ${e.length+1}`,...e])};typeof t==`function`&&t(e)};s.addEventListener(`click`,f),n(()=>s.removeEventListener(`click`,f));let p=[];return O(()=>{p=t(d,c,p,e||[],(e,t)=>e,(e,t)=>{let n=u(e),i=u(t);return l((e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=v(`li`,e);t.className=`rounded-box bg-base-100/80 px-3 py-2`;let r=_(``);return h(t,r),m(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{})))}},H=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

type ViewName = 'CounterPanel' | 'DraftPanel' | 'FeedPanel';

const CounterPanel: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(value => { value.value += 1 })}>
      CounterPanel: {count.value}
    </button>
  );
};

const DraftPanel: FC = () => {
  const [title, setTitle] = useState('未提交草稿');
  return (
    <input
      value={title.value}
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

export default Demo;`,U=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},W=e=>{let t=u(e.activeView),n=u(e.cacheMode);return D((()=>{let e=p(x,()=>({is:V[t.get().value],key:t.get().value}));return p(S,()=>({...U(n.get().value),cacheKey:t.get().value,cacheName:V[t.get().value].name,children:e}))})(),e=>A(()=>{t.set(e.activeView),n.set(e.cacheMode)}),()=>e)},G=()=>{let f=e(`preview`),p=e(`CounterPanel`),m=e(`all`);return c(()=>D(i(M,()=>({children:[(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=w();return t.appendChild(I().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=w(),n=L().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),T(i,`role`,`tab`),O(()=>{o(i,`tab ${f.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{f.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),s(()=>i.removeEventListener(`click`,c)),T(a,`role`,`tab`),O(()=>{o(a,`tab ${f.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{f.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,i,c)=>k(e,c,()=>r(Object.assign(e=>{let i=w(),c=R().content.cloneNode(!0),g=c.firstChild,_=g,y=g.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],x=g.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],S=g.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2],T=g.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],D=T.parentNode,A=g.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],j=A.parentNode,M=g.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2],N=M.parentNode,P=g.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[2],F=P.parentNode;i.appendChild(c),O(()=>{o(_,`mt-4 grid gap-6 ${f.value===`preview`?``:`hidden`}`)}),O(()=>{o(y,`btn btn-sm join-item ${m.value===`all`?`btn-secondary`:``}`)});let I=e=>{let t=()=>{m.value=`all`};typeof t==`function`&&t(e)};y.addEventListener(`click`,I),s(()=>y.removeEventListener(`click`,I)),O(()=>{o(x,`btn btn-sm join-item ${m.value===`excludeDraft`?`btn-secondary`:``}`)});let L=e=>{let t=()=>{m.value=`excludeDraft`};typeof t==`function`&&t(e)};x.addEventListener(`click`,L),s(()=>x.removeEventListener(`click`,L)),O(()=>{o(S,`btn btn-sm join-item ${m.value===`maxTwo`?`btn-secondary`:``}`)});let z=e=>{let t=()=>{m.value=`maxTwo`};typeof t==`function`&&t(e)};S.addEventListener(`click`,z),s(()=>S.removeEventListener(`click`,z));let H=[];O(()=>{let e=Object.keys(V)||[];H=t(D,T,H,e,(e,t)=>e,(e,t)=>{let i=u(e),a=u(t);return l((e,t,a)=>k(e,a,()=>r(Object.assign(e=>{let t=v(`button`,e),r;O(()=>{let e=`btn btn-sm join-item ${p.value===i.get()?`btn-primary`:``}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let a=e=>{let t=()=>{p.value=i.get()};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),n(()=>t.removeEventListener(`click`,a));let o=E(`rue:compiled-slot`);return h(t,o),O(()=>{let e=B[i.get()];b(()=>d(e,t,o))}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r)=>{e=n,t=r,i.set(n),a.set(r)})})});let U=C(j);return a(U,W,()=>({activeView:p,cacheMode:m})),j.insertBefore(U,A),O(()=>{let e=p.value;b(()=>d(e,N,M))}),O(()=>{let e=m.value===`all`?`全部缓存`:m.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`;b(()=>d(e,F,P))}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>k(e,n,()=>r(Object.assign(e=>{let t=w(),n=z().content.cloneNode(!0),r=n.firstChild,i=r,s=r.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode;t.appendChild(n),O(()=>{o(i,`mt-4 grid gap-6 ${f.value===`code`?``:`hidden`}`)});let l=C(c);return a(l,j,()=>({className:`h-full`,lang:`tsx`,code:H})),c.insertBefore(l,s),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),e=>A(()=>{})))};export{G as default};