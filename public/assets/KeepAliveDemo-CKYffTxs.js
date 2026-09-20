import{Bt as e,F as t,H as n,I as r,Qt as i,T as a,U as o,V as s,Vt as c,Wt as l,Y as u,_t as d,en as f,et as p,f as m,fn as h,gn as g,gt as _,h as v,hn as y,in as b,k as x,mn as S,p as C,pn as w,qt as T,sn as E,st as D,u as O,vt as k,yn as A,yt as j,zt as M}from"./rue-runtime-Cv6BZekS.js";import{t as N}from"./Code-BzFVdc3U.js";import{r as P}from"./SidebarPlaygroundExample-rFyhXfC_.js";var F=A(`<article class="rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">CounterPanel</div><div class="mt-2 text-3xl font-semibold">rue:direct-text</div><button class="btn btn-primary btn-sm mt-4">增加</button></article>`),I=A(`<article class="rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">DraftPanel</div><label class="form-control mt-3"><span class="label-text">标题</span><input class="input input-bordered mt-1"></label><div class="mt-3 text-sm opacity-75">当前草稿：<!--rue:text-hole:0--></div></article>`),L=A(`<article class="rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm"><div class="text-xs uppercase tracking-[0.22em] opacity-60">FeedPanel</div><button class="btn btn-accent btn-sm mt-3">添加记录</button><ul class="mt-4 space-y-2 text-sm"><!--rue:text-hole:0--></ul></article>`),ee=A(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">KeepAlive 缓存组件</h1>`),te=A(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),ne=A(`<div><div class="card bg-base-100 shadow"><div class="card-body gap-6"><section class="flex flex-wrap items-center justify-between gap-3"><div><h2 class="text-xl font-semibold">Component + KeepAlive</h2><p class="text-sm opacity-75">这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。</p></div><div class="flex flex-wrap gap-3"><div class="join"><!--rue:text-hole:0--></div><div class="join"><button>全部缓存</button><button>排除草稿</button><button>max=2</button></div></div></section><div class="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]"><div class="rounded-box border border-dashed border-base-300 p-4 min-h-64"><!--rue:opaque-hole:1--></div><aside class="rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2"><div><strong>当前视图</strong>：<!--rue:text-hole:2--></div><div><strong>缓存模式</strong>： <!--rue:text-hole:3--></div><div>先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。</div></aside></div></div></div></div>`),re=A(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),ie={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},R={CounterPanel:(e,t,n)=>{let[r,a]=p(`CounterPanel:hook:0`,0);return u(()=>l(e=>{let t=F().content.cloneNode(!0).firstChild,n=t.childNodes[2],o=t.childNodes[1].childNodes[0];return o.parentNode,n.setAttribute(`class`,`btn btn-primary btn-sm mt-4`),E(O(e,n,`click`,()=>()=>{a(e=>e+1)})),i(o,()=>r.get()),[t,t]}))},DraftPanel:(e,t,n)=>{let[r,a]=p(`DraftPanel:hook:0`,`未提交草稿`);return u(()=>l(e=>{let t=I().content.cloneNode(!0).firstChild,n=t.childNodes[1].childNodes[1],o=t.childNodes[2].childNodes[1],s=o.parentNode;n.setAttribute(`class`,`input input-bordered mt-1`);let c;b(()=>{let e=r.get(),t=e==null?``:String(e);Object.is(c,t)||(c=t,n.value=t)});let l=e=>{let t=e=>{a(e.target.value)};typeof t==`function`&&t(e)};n.addEventListener(`input`,l),E(()=>n.removeEventListener(`input`,l));let u=g(``);return s.insertBefore(u,o),s.removeChild(o),i(u,()=>r.get()),[t,t]}))},FeedPanel:(e,n,i)=>{let[a,o]=p(`FeedPanel:hook:0`,[`初始化记录`]);return u(()=>l(e=>{let n=L().content.cloneNode(!0).firstChild,i=n.childNodes[1],s=n.childNodes[2].childNodes[0],l=s.parentNode;i.setAttribute(`class`,`btn btn-accent btn-sm mt-3`),E(O(e,i,`click`,()=>()=>{o(e=>[`记录 ${e.length+1}`,...e])}));let u=[];return T(()=>{let e=a.get()||[];u=v(l,s,u,e,(e,t)=>e,(e,n)=>{let i=k(e);return C((e,n,a)=>{let o=()=>t(e=>{let t=y(`li`,e);t.setAttribute(`class`,`rounded-box bg-base-100/80 px-3 py-2`);let n=g(``);return h(t,n),r(n,()=>i.get()),[t,t]});return e==null?o():c(e,a,o)},(t,r)=>{e=t,n=r,i.set(t)},void 0)},!1,!1)}),E(()=>m(u)),[n,n]}))}},ae=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,z=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},oe=(e,t,r)=>{let i=k(_(e,`activeView`)),s=k(_(e,`cacheMode`));return o(x(()=>({...z(s.get().value),cacheKey:i.get().value,children:(e=>(t,r,i)=>{let o=()=>l(t=>{let r=S();n(r,a,()=>({is:e}));let i=g(``),o=g(``);return r.insertBefore(i,r.firstChild),r.appendChild(o),[r.firstChild,r.lastChild]});return t==null?o():c(t,i,o)})(R[i.get().value]),cacheName:`Component`})),e=>f(()=>{i.set(e.activeView),s.set(e.cacheMode)}),()=>d(e))},B=(t,n,r)=>{let i=D(`preview`),a=D(`CounterPanel`),o=D(`all`);return u(()=>s(P,()=>({children:(t,n,r)=>{let u=()=>l(t=>{let n=S();n.appendChild(ee().content.cloneNode(!0));let r=te().content.cloneNode(!0),u=r.firstChild,d=u.childNodes[0],f=u.childNodes[1];n.appendChild(r),d.setAttribute(`role`,`tab`);let p;b(()=>{let e=`tab ${i.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,d.setAttribute(`class`,t))}),E(O(t,d,`click`,()=>()=>{i.value=`preview`})),f.setAttribute(`role`,`tab`);let _;b(()=>{let e=`tab ${i.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(_,t)||(_=t,f.setAttribute(`class`,t))}),E(O(t,f,`click`,()=>()=>{i.value=`code`}));let x=ne().content.cloneNode(!0),D=x.firstChild,A=D,P=D.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0],F=D.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1],I=D.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[2],L=D.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],z=L.parentNode,B=D.childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],V=B.parentNode,H=D.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[2],se=H.parentNode,U=D.childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[2],ce=U.parentNode;n.appendChild(x);let W;b(()=>{let e=`mt-4 grid gap-6 ${i.value===`preview`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(W,t)||(W=t,A.setAttribute(`class`,t))});let G;b(()=>{let e=`btn btn-sm join-item ${o.value===`all`?`btn-secondary`:``}`,t=e===!1||e==null?``:String(e);Object.is(G,t)||(G=t,P.setAttribute(`class`,t))}),E(O(t,P,`click`,()=>()=>{o.value=`all`}));let K;b(()=>{let e=`btn btn-sm join-item ${o.value===`excludeDraft`?`btn-secondary`:``}`,t=e===!1||e==null?``:String(e);Object.is(K,t)||(K=t,F.setAttribute(`class`,t))}),E(O(t,F,`click`,()=>()=>{o.value=`excludeDraft`}));let q;b(()=>{let e=`btn btn-sm join-item ${o.value===`maxTwo`?`btn-secondary`:``}`,t=e===!1||e==null?``:String(e);Object.is(q,t)||(q=t,I.setAttribute(`class`,t))}),E(O(t,I,`click`,()=>()=>{o.value=`maxTwo`}));let J=[];T(()=>{let t=Object.keys(R)||[];J=v(z,L,J,t,(e,t)=>e,(t,n)=>{let r=k(t);return C((t,n,i)=>{let o=()=>l(t=>{let n=y(`button`,t),i;b(()=>{let e=`btn btn-sm join-item ${a.value===r.get()?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),E(O(t,n,`click`,()=>()=>{a.value=r.get()}));let o=w(`rue:compiled-slot`);return h(n,o),e({parent:n,before:o},()=>M(ie[r.get()]),()=>({})),[n,n]});return t==null?o():c(t,i,o)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),E(()=>m(J));let le=(e,t,n)=>{let r=()=>s(oe,()=>({activeView:a,cacheMode:o}));return e==null?r():c(e,n,r)},ue=B.nextSibling;V.removeChild(B),e({parent:V,before:ue},()=>le,()=>({})),e({parent:se,before:H},()=>M(a.value),()=>({})),e({parent:ce,before:U},()=>o.value===`all`?(e,t,n)=>{let r=()=>j(e=>{let t=g(`全部缓存`);return[t,t]});return e==null?r():c(e,n,r)}:o.value===`excludeDraft`?(e,t,n)=>{let r=()=>j(e=>{let t=g(`DraftPanel 不缓存`);return[t,t]});return e==null?r():c(e,n,r)}:(e,t,n)=>{let r=()=>j(e=>{let t=g(`最多缓存 2 个`);return[t,t]});return e==null?r():c(e,n,r)},()=>({}));let Y=re().content.cloneNode(!0),X=Y.firstChild,de=X,Z=X.childNodes[0].childNodes[0].childNodes[0],Q=Z.parentNode;n.appendChild(Y);let $;b(()=>{let e=`mt-4 grid gap-6 ${i.value===`code`?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is($,t)||($=t,de.setAttribute(`class`,t))});let fe=(e,t,n)=>{let r=()=>s(N,()=>({className:`h-full`,lang:`tsx`,code:ae}));return e==null?r():c(e,n,r)},pe=Z.nextSibling;Q.removeChild(Z),e({parent:Q,before:pe},()=>fe,()=>({}));let me=g(``),he=g(``);return n.insertBefore(me,n.firstChild),n.appendChild(he),[n.firstChild,n.lastChild]});return t==null?u():c(t,r,u)}})))};export{B as default};