import{B as e,Bt as t,F as n,I as r,P as i,Qt as a,T as o,V as s,Vt as c,W as l,Wt as u,X as d,Y as f,en as p,f as m,fn as h,gn as g,h as _,hn as v,in as y,k as b,mn as x,mt as S,nt as C,p as w,pn as T,qt as E,sn as D,st as O,u as k,yn as A,z as j,zt as M}from"./rue-runtime-BWbIfNT8.js";import{t as N}from"./Code-C5ZhIIr9.js";import{r as P}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var F=A(`<article class="rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">CounterPanel</div><div class="mt-2 text-3xl font-semibold">rue:direct-text</div><button class="btn btn-primary btn-sm mt-4">增加</button></article>`),I=A(`<article class="rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">DraftPanel</div><label class="form-control mt-3"><span class="label-text">标题</span><input class="input input-bordered mt-1"></label><div class="mt-3 text-sm opacity-75">当前草稿：<!--rue:text-hole:0--></div></article>`),L=A(`<article class="rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">FeedPanel</div><button class="btn btn-accent btn-sm mt-3">添加记录</button><ul class="mt-4 space-y-2 text-sm"><!--rue:text-hole:0--></ul></article>`),ee=A(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">KeepAlive 缓存组件</h1>`),te=A(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),ne=A(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">Component + KeepAlive</h2><p class="text-sm opacity-75">这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。</p></div><div class="flex flex-wrap gap-3"><div class="join"><!--rue:text-hole:0--></div><div class="join"><button>全部缓存</button><button>排除草稿</button><button>max=2</button></div></div></section><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-64"><!--rue:opaque-hole:1--></div><aside class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div><strong>当前视图</strong>：<!--rue:text-hole:2--></div><div><strong>缓存模式</strong>： <!--rue:text-hole:3--></div><div>先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。</div></aside></div></div></div></div>`),re=A(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),ie={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},R={CounterPanel:(e,t,n)=>{let[r,i]=O(`CounterPanel:hook:0`,0);return C(()=>u(e=>{let t=F().content.cloneNode(!0).firstChild,n=t.childNodes[2],o=t.childNodes[1].childNodes[0];return o.parentNode,n.setAttribute(`class`,`btn btn-primary btn-sm mt-4`),D(k(e,n,`click`,()=>()=>{i(e=>e+1)})),a(o,()=>r.get()),[t,t]}))},DraftPanel:(e,t,n)=>{let[r,i]=O(`DraftPanel:hook:0`,`未提交草稿`);return C(()=>u(e=>{let t=I().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[1],o=t.childNodes[2].childNodes[1],s=o.parentNode;n.setAttribute(`class`,`input input-bordered mt-1`);let c;y(()=>{let e=r.get(),t=e==null?``:String(e);Object.is(c,t)||(c=t,n.value=t)});let l=e=>{let t=e=>{i(e.target.value)};typeof t==`function`&&t(e)};n.addEventListener(`input`,l),D(()=>n.removeEventListener(`input`,l));let u=g(``);return s.insertBefore(u,o),s.removeChild(o),a(u,()=>r.get()),[t,t]}))},FeedPanel:(e,t,n)=>{let[r,i]=O(`FeedPanel:hook:0`,[`初始化记录`]);return C(()=>u(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[1],a=t.childNodes[2].childNodes[0],o=a.parentNode;n.setAttribute(`class`,`btn btn-accent btn-sm mt-3`),D(k(e,n,`click`,()=>()=>{i(e=>[`记录 ${e.length+1}`,...e])}));let s=[];return E(()=>{let e=r.get()||[];s=_(o,a,s,e,(e,t)=>e,(e,t)=>{let n=l(e);return w((e,t,r)=>{let i=()=>f(e=>{let t=v(`li`,e);t.setAttribute(`class`,`rounded-box bg-base-100/80 px-3 py-2`);let r=g(``);return h(t,r),d(r,()=>n.get()),[t,t]});return e==null?i():c(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),D(()=>m(s)),[t,t]}))}},ae=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,z=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},oe=(t,i,a)=>{let s=l(j(t,`activeView`)),d=l(j(t,`cacheMode`));return r(b(()=>({...z(d.get().value),cacheKey:s.get().value,children:(e=>(t,r,i)=>{let a=()=>u(t=>{let r=x();n(r,o,()=>({is:e}));let i=g(``),a=g(``);return r.insertBefore(i,r.firstChild),r.appendChild(a),[r.firstChild,r.lastChild]});return t==null?a():c(t,i,a)})(R[s.get().value]),cacheName:`Component`})),e=>p(()=>{s.set(e.activeView),d.set(e.cacheMode)}),()=>e(t))},B=(e,n,r)=>{let a=S(`preview`),o=S(`CounterPanel`),d=S(`all`);return C(()=>i(P,()=>({children:(e,n,r)=>{let f=()=>u(e=>{let n=x();n.appendChild(ee().content.cloneNode(!0));let r=te().content.cloneNode(!0),f=r.firstChild,p=f.childNodes[0],b=f.childNodes[1];n.appendChild(r),p.setAttribute(`role`,`tab`);let S;y(()=>{let e=`tab ${a.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(S,t)||(S=t,p.setAttribute(`class`,t))}),D(k(e,p,`click`,()=>()=>{a.value=`preview`})),b.setAttribute(`role`,`tab`);let C;y(()=>{let e=`tab ${a.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,b.setAttribute(`class`,t))}),D(k(e,b,`click`,()=>()=>{a.value=`code`}));let O=ne().content.cloneNode(!0),A=O.firstChild,j=A,P=A.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],F=A.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],I=A.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2],L=A.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],z=L.parentNode,B=A.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],V=B.parentNode,H=A.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2],se=H.parentNode,U=A.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[2],ce=U.parentNode;n.appendChild(O);let W;y(()=>{let e=`mt-4 grid gap-6 ${a.value===`preview`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(W,t)||(W=t,j.setAttribute(`class`,t))});let G;y(()=>{let e=`btn btn-sm join-item ${d.value===`all`?`btn-secondary`:``}`,t=e===!1||e==null?``:String(e);Object.is(G,t)||(G=t,P.setAttribute(`class`,t))}),D(k(e,P,`click`,()=>()=>{d.value=`all`}));let K;y(()=>{let e=`btn btn-sm join-item ${d.value===`excludeDraft`?`btn-secondary`:``}`,t=e===!1||e==null?``:String(e);Object.is(K,t)||(K=t,F.setAttribute(`class`,t))}),D(k(e,F,`click`,()=>()=>{d.value=`excludeDraft`}));let q;y(()=>{let e=`btn btn-sm join-item ${d.value===`maxTwo`?`btn-secondary`:``}`,t=e===!1||e==null?``:String(e);Object.is(q,t)||(q=t,I.setAttribute(`class`,t))}),D(k(e,I,`click`,()=>()=>{d.value=`maxTwo`}));let J=[];E(()=>{let e=Object.keys(R)||[];J=_(z,L,J,e,(e,t)=>e,(e,n)=>{let r=l(e);return w((e,n,i)=>{let a=()=>u(e=>{let n=v(`button`,e),i;y(()=>{let e=`btn btn-sm join-item ${o.value===r.get()?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),D(k(e,n,`click`,()=>()=>{o.value=r.get()}));let a=T(`rue:compiled-slot`);return h(n,a),t({parent:n,before:a},()=>M(ie[r.get()]),()=>({})),[n,n]});return e==null?a():c(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),D(()=>m(J));let le=(e,t,n)=>{let r=()=>i(oe,()=>({activeView:o,cacheMode:d}));return e==null?r():c(e,n,r)},ue=B.nextSibling;V.removeChild(B),t({parent:V,before:ue},()=>le,()=>({})),t({parent:se,before:H},()=>M(o.value),()=>({})),t({parent:ce,before:U},()=>d.value===`all`?(e,t,n)=>{let r=()=>s(e=>{let t=g(`全部缓存`);return[t,t]});return e==null?r():c(e,n,r)}:d.value===`excludeDraft`?(e,t,n)=>{let r=()=>s(e=>{let t=g(`DraftPanel 不缓存`);return[t,t]});return e==null?r():c(e,n,r)}:(e,t,n)=>{let r=()=>s(e=>{let t=g(`最多缓存 2 个`);return[t,t]});return e==null?r():c(e,n,r)},()=>({}));let Y=re().content.cloneNode(!0),X=Y.firstChild,de=X,Z=X.childNodes[0].childNodes[0].childNodes[0],Q=Z.parentNode;n.appendChild(Y);let $;y(()=>{let e=`mt-4 grid gap-6 ${a.value===`code`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is($,t)||($=t,de.setAttribute(`class`,t))});let fe=(e,t,n)=>{let r=()=>i(N,()=>({className:`h-full`,lang:`tsx`,code:ae}));return e==null?r():c(e,n,r)},pe=Z.nextSibling;Q.removeChild(Z),t({parent:Q,before:pe},()=>fe,()=>({}));let me=g(``),he=g(``);return n.insertBefore(me,n.firstChild),n.appendChild(he),[n.firstChild,n.lastChild]});return e==null?f():c(e,r,f)}})))};export{B as default};