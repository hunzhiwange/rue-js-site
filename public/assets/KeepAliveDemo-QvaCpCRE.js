import{$ as e,K as t,Q as n,Qt as r,Wt as i,X as a,Xt as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,mt as p,nt as m,o as h,st as g,t as _,tt as v,zt as y}from"./vapor-runtime-CXIalONM.js";import{a as b,n as x}from"./vapor-helpers-vapor-CoXKrGmY.js";import{i as S}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as C}from"./KeepAlive-Da7RpvkH.js";import{t as ee}from"./Code-BIscIyEp.js";import{r as w}from"./SidebarPlaygroundExample-CEz1fABX.js";var te={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},T={CounterPanel:()=>{let{count:e,setCount:t}=b(`useSetup:0:0`,()=>c(()=>{let[e,t]=b(`useState:1:0`,()=>o(0));return{count:e,setCount:t}}));return d(n=>{let i=l(`article`,n);f(i,`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`);let o=l(`div`,i);a(i,o),f(o,`text-xs uppercase tracking-[0.22em] opacity-60`),a(o,v(`CounterPanel`));let c=l(`div`,i);a(i,c),f(c,`mt-2 text-3xl font-semibold`);let d=m(c);a(c,d),r(()=>{u(d,e.value)});let p=l(`button`,i);return a(i,p),f(p,`btn btn-primary btn-sm mt-4`),s(p,`click`,()=>{t(e=>{e.value+=1})}),a(p,v(`增加`)),i})},DraftPanel:()=>{let{title:e,setTitle:t}=b(`useSetup:0:0:dup1`,()=>c(()=>{let[e,t]=b(`useState:1:1`,()=>o(`未提交草稿`));return{title:e,setTitle:t}}));return d(n=>{let i=l(`article`,n);f(i,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let o=l(`div`,i);a(i,o),f(o,`text-xs uppercase tracking-[0.22em] opacity-60`),a(o,v(`DraftPanel`));let c=l(`label`,i);a(i,c),f(c,`form-control mt-3`);let d=l(`span`,c);a(c,d),f(d,`label-text`),a(d,v(`标题`));let h=l(`input`,c);a(c,h),f(h,`input input-bordered mt-1`),r(()=>{p(h,e.value)}),s(h,`input`,e=>{t(e.target.value)});let g=l(`div`,i);a(i,g),f(g,`mt-3 text-sm opacity-75`),a(g,v(`当前草稿：`));let _=m(g);return a(g,_),r(()=>{u(_,e.value)}),i})},FeedPanel:()=>{let{items:t,setItems:i}=b(`useSetup:0:0:dup2`,()=>c(()=>{let[e,t]=b(`useState:1:2`,()=>o([`初始化记录`]));return{items:e,setItems:t}}));return d(o=>{let c=l(`article`,o);f(c,`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`);let p=l(`div`,c);a(c,p),f(p,`text-xs uppercase tracking-[0.22em] opacity-60`),a(p,v(`FeedPanel`));let _=l(`button`,c);a(c,_),f(_,`btn btn-accent btn-sm mt-3`),s(_,`click`,()=>{i(e=>[`记录 ${e.length+1}`,...e])}),a(_,v(`添加记录`));let y=l(`ul`,c);a(c,y),f(y,`mt-4 space-y-2 text-sm`);let b=n(`rue:list:start`),S=n(`rue:list:end`);a(y,b),a(y,S);let C=new Map;return r(()=>{C=x({items:t||[],getKey:(e,t)=>e,elements:C,parent:y,before:S,singleRoot:!0,trackIndex:!1,start:b,renderItem:(t,n,i,o,s)=>{h(d(()=>{let n=e(),i=l(`li`,n);a(n,i),f(i,`rounded-box bg-base-100/80 px-3 py-2`),r(()=>{g(i,`key`,String(t))});let o=m(i);return a(i,o),r(()=>{u(o,t)}),n}),n,i)}})}),c})}},ne=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,E=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},re=e=>d(()=>{let n=document.createDocumentFragment(),i=document.createComment(`keep-alive-demo-anchor`);return n.appendChild(i),b(`watchEffect:1:3`,()=>r(()=>{h(S(C,{...E(e.cacheMode.value),children:S(t,{is:T[e.activeView.value]},e.activeView.value)}),n,i)})),n}),D=()=>{let{activeTab:t,activeView:o,cacheMode:p}=b(`useSetup:0:0:dup3`,()=>c(()=>({activeTab:b(`ref:1:4`,()=>y(`preview`)),activeView:b(`ref:1:5`,()=>y(`CounterPanel`)),cacheMode:b(`ref:1:6`,()=>y(`all`))})));return d(c=>{let y=e(),b=n(`rue:component:anchor`);return a(y,b),h(_(w,{children:d(()=>{let c=e(),y=l(`h1`,c);a(c,y),f(y,`text-5xl font-semibold mb-4 md:mb-4`),a(y,v(`KeepAlive 缓存组件`));let b=l(`div`,c);a(c,b),g(b,`role`,`tablist`),f(b,`tabs tabs-box`);let S=l(`button`,b);a(b,S),g(S,`role`,`tab`),r(()=>{f(S,`tab ${t.value===`preview`?`tab-active`:``}`)}),s(S,`click`,()=>{t.value=`preview`}),a(S,v(`效果`));let C=l(`button`,b);a(b,C),g(C,`role`,`tab`),r(()=>{f(C,`tab ${t.value===`code`?`tab-active`:``}`)}),s(C,`click`,()=>{t.value=`code`}),a(C,v(`代码`));let w=l(`div`,c);a(c,w),r(()=>{f(w,`mt-4 grid gap-6 ${t.value===`preview`?``:`hidden`}`)});let E=l(`div`,w);a(w,E),f(E,`card bg-base-100 shadow`);let D=l(`div`,E);a(E,D),f(D,`card-body gap-6`);let O=l(`section`,D);a(D,O),f(O,`flex flex-wrap items-center justify-between gap-3`);let k=l(`div`,O);a(O,k);let A=l(`h2`,k);a(k,A),f(A,`text-xl font-semibold`),a(A,v(`Component + KeepAlive`));let j=l(`p`,k);a(k,j),f(j,`text-sm opacity-75`),a(j,v(`这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。`));let M=l(`div`,O);a(O,M),f(M,`flex flex-wrap gap-3`);let N=l(`div`,M);a(M,N),f(N,`join`);let P=n(`rue:list:start`),ie=n(`rue:list:end`);a(N,P),a(N,ie);let F=new Map;r(()=>{F=x({items:Object.keys(T)||[],getKey:(e,t)=>e,elements:F,parent:N,before:ie,singleRoot:!0,trackIndex:!1,start:P,renderItem:(t,c,u,p,m)=>{h(d(()=>{let c=e(),u=l(`button`,c);a(c,u),r(()=>{f(u,`btn btn-sm join-item ${o.value===t?`btn-primary`:``}`)}),s(u,`click`,()=>{o.value=t}),r(()=>{g(u,`key`,String(t))});let d=n(`rue:slot:anchor`);return a(u,d),r(()=>{let e=te[t];i(()=>h(e,u,d))}),c}),c,u)}})});let I=l(`div`,M);a(M,I),f(I,`join`);let L=l(`button`,I);a(I,L),r(()=>{f(L,`btn btn-sm join-item ${p.value===`all`?`btn-secondary`:``}`)}),s(L,`click`,()=>{p.value=`all`}),a(L,v(`全部缓存`));let R=l(`button`,I);a(I,R),r(()=>{f(R,`btn btn-sm join-item ${p.value===`excludeDraft`?`btn-secondary`:``}`)}),s(R,`click`,()=>{p.value=`excludeDraft`}),a(R,v(`排除草稿`));let z=l(`button`,I);a(I,z),r(()=>{f(z,`btn btn-sm join-item ${p.value===`maxTwo`?`btn-secondary`:``}`)}),s(z,`click`,()=>{p.value=`maxTwo`}),a(z,v(`max=2`));let B=l(`div`,D);a(D,B),f(B,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let V=l(`div`,B);a(B,V),f(V,`rounded-box border border-dashed border-base-300 p-4 min-h-64`);let H=n(`rue:component:anchor`);a(V,H),r(()=>{let e=_(re,{activeView:o,cacheMode:p});i(()=>h(e,V,H))});let U=l(`aside`,B);a(B,U),f(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let W=l(`div`,U);a(U,W);let G=l(`strong`,W);a(W,G),a(G,v(`当前视图`)),a(W,v(`：`));let K=m(W);a(W,K),r(()=>{u(K,o.value)});let q=l(`div`,U);a(U,q);let J=l(`strong`,q);a(q,J),a(J,v(`缓存模式`)),a(q,v(`： `));let Y=m(q);a(q,Y),r(()=>{u(Y,p.value===`all`?`全部缓存`:p.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`)});let X=l(`div`,U);a(U,X),a(X,v(`先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。`));let Z=l(`div`,c);a(c,Z),r(()=>{f(Z,`mt-4 grid gap-6 ${t.value===`code`?``:`hidden`}`)});let Q=l(`div`,Z);a(Z,Q),f(Q,`card bg-base-100 shadow overflow-auto`);let $=l(`div`,Q);a(Q,$),f($,`card-body p-0`);let ae=n(`rue:component:anchor`);return a($,ae),r(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ne});i(()=>h(e,$,ae))}),c})}),y,b),y})};export{D as default};