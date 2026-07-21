import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,rt as f,st as p,tn as m,vn as h,wn as g}from"./context-8lXZvIn-.js";import{l as _,o as v,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as ee}from"./vapor-helpers-vapor-CMwHgsXf.js";import{l as x}from"./src-DnK6Cdoa.js";import{t as S}from"./Code-DhoWkRkB.js";import{t as C}from"./src-CCTNpCXV.js";import{r as w}from"./SidebarPlaygroundExample-B78jsvoF.js";var te={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},T={CounterPanel:()=>{let{count:t,setCount:i}=b(`useSetup:0:0`,()=>e(()=>{let[e,t]=b(`useState:1:0`,()=>g(0));return{count:e,setCount:t}}));return _(e=>{let a=d(`article`,e);r(a,`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`);let s=d(`div`,a);p(a,s),r(s,`text-xs uppercase tracking-[0.22em] opacity-60`),p(s,c(`CounterPanel`));let u=d(`div`,a);p(a,u),r(u,`mt-2 text-3xl font-semibold`);let f=o(u);p(u,f),m(()=>{n(f,t.value)});let h=d(`button`,a);return p(a,h),r(h,`btn btn-primary btn-sm mt-4`),l(h,`click`,()=>{i(e=>{e.value+=1})}),p(h,c(`增加`)),a})},DraftPanel:()=>{let{title:t,setTitle:i}=b(`useSetup:0:0:dup1`,()=>e(()=>{let[e,t]=b(`useState:1:1`,()=>g(`未提交草稿`));return{title:e,setTitle:t}}));return _(e=>{let a=d(`article`,e);r(a,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let u=d(`div`,a);p(a,u),r(u,`text-xs uppercase tracking-[0.22em] opacity-60`),p(u,c(`DraftPanel`));let f=d(`label`,a);p(a,f),r(f,`form-control mt-3`);let h=d(`span`,f);p(f,h),r(h,`label-text`),p(h,c(`标题`));let g=d(`input`,f);p(f,g),r(g,`input input-bordered mt-1`),m(()=>{s(g,t.value)}),l(g,`input`,e=>{i(e.target.value)});let _=d(`div`,a);p(a,_),r(_,`mt-3 text-sm opacity-75`),p(_,c(`当前草稿：`));let v=o(_);return p(_,v),m(()=>{n(v,t.value)}),a})},FeedPanel:()=>{let{items:s,setItems:u}=b(`useSetup:0:0:dup2`,()=>e(()=>{let[e,t]=b(`useState:1:2`,()=>g([`初始化记录`]));return{items:e,setItems:t}}));return _(e=>{let f=d(`article`,e);r(f,`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`);let h=d(`div`,f);p(f,h),r(h,`text-xs uppercase tracking-[0.22em] opacity-60`),p(h,c(`FeedPanel`));let g=d(`button`,f);p(f,g),r(g,`btn btn-accent btn-sm mt-3`),l(g,`click`,()=>{u(e=>[`记录 ${e.length+1}`,...e])}),p(g,c(`添加记录`));let y=d(`ul`,f);p(f,y),r(y,`mt-4 space-y-2 text-sm`);let b=i(`rue:list:start`),x=i(`rue:list:end`);p(y,b),p(y,x);let S=new Map;return m(()=>{S=ee({items:s||[],getKey:(e,t)=>e,elements:S,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,i,s,c,l)=>{v(_(()=>{let i=a(),s=d(`li`,i);p(i,s),r(s,`rounded-box bg-base-100/80 px-3 py-2`),m(()=>{t(s,`key`,String(e))});let c=o(s);return p(s,c),m(()=>{n(c,e)}),i}),i,s)}})}),f})}},ne=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,E=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},re=e=>_(()=>{let t=document.createDocumentFragment(),n=document.createComment(`keep-alive-demo-anchor`);return t.appendChild(n),b(`watchEffect:1:3`,()=>m(()=>{v(C(x,{...E(e.cacheMode.value),children:C(f,{is:T[e.activeView.value]},e.activeView.value)}),t,n)})),t}),D=()=>{let{activeTab:s,activeView:f,cacheMode:g}=b(`useSetup:0:0:dup3`,()=>e(()=>({activeTab:b(`ref:1:4`,()=>u(`preview`)),activeView:b(`ref:1:5`,()=>u(`CounterPanel`)),cacheMode:b(`ref:1:6`,()=>u(`all`))})));return _(e=>{let u=a(),b=i(`rue:component:anchor`);return p(u,b),v(y(w,{children:_(()=>{let e=a(),u=d(`h1`,e);p(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),p(u,c(`KeepAlive 缓存组件`));let b=d(`div`,e);p(e,b),t(b,`role`,`tablist`),r(b,`tabs tabs-box`);let x=d(`button`,b);p(b,x),t(x,`role`,`tab`),m(()=>{r(x,`tab ${s.value===`preview`?`tab-active`:``}`)}),l(x,`click`,()=>{s.value=`preview`}),p(x,c(`效果`));let C=d(`button`,b);p(b,C),t(C,`role`,`tab`),m(()=>{r(C,`tab ${s.value===`code`?`tab-active`:``}`)}),l(C,`click`,()=>{s.value=`code`}),p(C,c(`代码`));let w=d(`div`,e);p(e,w),m(()=>{r(w,`mt-4 grid gap-6 ${s.value===`preview`?``:`hidden`}`)});let E=d(`div`,w);p(w,E),r(E,`card bg-base-100 shadow`);let D=d(`div`,E);p(E,D),r(D,`card-body gap-6`);let O=d(`section`,D);p(D,O),r(O,`flex flex-wrap items-center justify-between gap-3`);let k=d(`div`,O);p(O,k);let A=d(`h2`,k);p(k,A),r(A,`text-xl font-semibold`),p(A,c(`Component + KeepAlive`));let j=d(`p`,k);p(k,j),r(j,`text-sm opacity-75`),p(j,c(`这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。`));let M=d(`div`,O);p(O,M),r(M,`flex flex-wrap gap-3`);let N=d(`div`,M);p(M,N),r(N,`join`);let P=i(`rue:list:start`),F=i(`rue:list:end`);p(N,P),p(N,F);let ie=new Map;m(()=>{ie=ee({items:Object.keys(T)||[],getKey:(e,t)=>e,elements:ie,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,n,o,s,c)=>{v(_(()=>{let n=a(),o=d(`button`,n);p(n,o),m(()=>{r(o,`btn btn-sm join-item ${f.value===e?`btn-primary`:``}`)}),l(o,`click`,()=>{f.value=e}),m(()=>{t(o,`key`,String(e))});let s=i(`rue:slot:anchor`);return p(o,s),m(()=>{let t=te[e];h(()=>v(t,o,s))}),n}),n,o)}})});let I=d(`div`,M);p(M,I),r(I,`join`);let L=d(`button`,I);p(I,L),m(()=>{r(L,`btn btn-sm join-item ${g.value===`all`?`btn-secondary`:``}`)}),l(L,`click`,()=>{g.value=`all`}),p(L,c(`全部缓存`));let R=d(`button`,I);p(I,R),m(()=>{r(R,`btn btn-sm join-item ${g.value===`excludeDraft`?`btn-secondary`:``}`)}),l(R,`click`,()=>{g.value=`excludeDraft`}),p(R,c(`排除草稿`));let z=d(`button`,I);p(I,z),m(()=>{r(z,`btn btn-sm join-item ${g.value===`maxTwo`?`btn-secondary`:``}`)}),l(z,`click`,()=>{g.value=`maxTwo`}),p(z,c(`max=2`));let B=d(`div`,D);p(D,B),r(B,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let V=d(`div`,B);p(B,V),r(V,`rounded-box border border-dashed border-base-300 p-4 min-h-64`);let H=i(`rue:component:anchor`);p(V,H),m(()=>{let e=y(re,{activeView:f,cacheMode:g});h(()=>v(e,V,H))});let U=d(`aside`,B);p(B,U),r(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let W=d(`div`,U);p(U,W);let G=d(`strong`,W);p(W,G),p(G,c(`当前视图`)),p(W,c(`：`));let K=o(W);p(W,K),m(()=>{n(K,f.value)});let q=d(`div`,U);p(U,q);let J=d(`strong`,q);p(q,J),p(J,c(`缓存模式`)),p(q,c(`： `));let Y=o(q);p(q,Y),m(()=>{n(Y,g.value===`all`?`全部缓存`:g.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`)});let X=d(`div`,U);p(U,X),p(X,c(`先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。`));let Z=d(`div`,e);p(e,Z),m(()=>{r(Z,`mt-4 grid gap-6 ${s.value===`code`?``:`hidden`}`)});let Q=d(`div`,Z);p(Z,Q),r(Q,`card bg-base-100 shadow overflow-auto`);let $=d(`div`,Q);p(Q,$),r($,`card-body p-0`);let ae=i(`rue:component:anchor`);return p($,ae),m(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:ne});h(()=>v(e,$,ae))}),e})}),u,b),u})};export{D as default};