import{$ as e,Ht as t,J as n,Jt as r,Lt as i,Q as a,W as o,X as s,Xt as c,Z as l,at as u,et as d,ft as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b,n as x}from"./vapor-helpers-vapor-BjKHCvOa.js";import{i as S}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as C}from"./KeepAlive-hd4Kn7KC.js";import{t as ee}from"./Code-CZqShVUj.js";import{r as w}from"./SidebarPlaygroundExample-5H7RL-T7.js";var te={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},T={CounterPanel:()=>{let{count:t,setCount:i}=b(`useSetup:0:0`,()=>g(()=>{let[e,t]=b(`useState:1:0`,()=>r(0));return{count:e,setCount:t}}));return p(r=>{let o=a(`article`,r);v(o,`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`);let s=a(`div`,o);n(o,s),v(s,`text-xs uppercase tracking-[0.22em] opacity-60`),n(s,e(`CounterPanel`));let l=a(`div`,o);n(o,l),v(l,`mt-2 text-3xl font-semibold`);let u=d(l);n(l,u),c(()=>{m(u,t.value)});let f=a(`button`,o);return n(o,f),v(f,`btn btn-primary btn-sm mt-4`),h(f,`click`,()=>{i(e=>{e.value+=1})}),n(f,e(`增加`)),o})},DraftPanel:()=>{let{title:t,setTitle:i}=b(`useSetup:0:0:dup1`,()=>g(()=>{let[e,t]=b(`useState:1:1`,()=>r(`未提交草稿`));return{title:e,setTitle:t}}));return p(r=>{let o=a(`article`,r);v(o,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=a(`div`,o);n(o,s),v(s,`text-xs uppercase tracking-[0.22em] opacity-60`),n(s,e(`DraftPanel`));let l=a(`label`,o);n(o,l),v(l,`form-control mt-3`);let u=a(`span`,l);n(l,u),v(u,`label-text`),n(u,e(`标题`));let p=a(`input`,l);n(l,p),v(p,`input input-bordered mt-1`),c(()=>{f(p,t.value)}),h(p,`input`,e=>{i(e.target.value)});let g=a(`div`,o);n(o,g),v(g,`mt-3 text-sm opacity-75`),n(g,e(`当前草稿：`));let _=d(g);return n(g,_),c(()=>{m(_,t.value)}),o})},FeedPanel:()=>{let{items:t,setItems:i}=b(`useSetup:0:0:dup2`,()=>g(()=>{let[e,t]=b(`useState:1:2`,()=>r([`初始化记录`]));return{items:e,setItems:t}}));return p(r=>{let o=a(`article`,r);v(o,`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`);let f=a(`div`,o);n(o,f),v(f,`text-xs uppercase tracking-[0.22em] opacity-60`),n(f,e(`FeedPanel`));let g=a(`button`,o);n(o,g),v(g,`btn btn-accent btn-sm mt-3`),h(g,`click`,()=>{i(e=>[`记录 ${e.length+1}`,...e])}),n(g,e(`添加记录`));let y=a(`ul`,o);n(o,y),v(y,`mt-4 space-y-2 text-sm`);let b=s(`rue:list:start`),S=s(`rue:list:end`);n(y,b),n(y,S);let C=new Map;return c(()=>{C=x({items:t||[],getKey:(e,t)=>e,elements:C,parent:y,before:S,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,t,r,i,o)=>{_(p(()=>{let t=l(),r=a(`li`,t);n(t,r),v(r,`rounded-box bg-base-100/80 px-3 py-2`),c(()=>{u(r,`key`,String(e))});let i=d(r);return n(r,i),c(()=>{m(i,e)}),t}),t,r)}})}),o})}},ne=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,E=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},re=e=>p(()=>{let t=document.createDocumentFragment(),n=document.createComment(`keep-alive-demo-anchor`);return t.appendChild(n),b(`watchEffect:1:3`,()=>c(()=>{_(S(C,{...E(e.cacheMode.value),children:S(o,{is:T[e.activeView.value]},e.activeView.value)}),t,n)})),t}),D=()=>{let{activeTab:r,activeView:o,cacheMode:f}=b(`useSetup:0:0:dup3`,()=>g(()=>({activeTab:b(`ref:1:4`,()=>i(`preview`)),activeView:b(`ref:1:5`,()=>i(`CounterPanel`)),cacheMode:b(`ref:1:6`,()=>i(`all`))})));return p(i=>{let g=l(),b=s(`rue:component:anchor`);return n(g,b),_(y(w,{children:p(()=>{let i=l(),g=a(`h1`,i);n(i,g),v(g,`text-5xl font-semibold mb-4 md:mb-4`),n(g,e(`KeepAlive 缓存组件`));let b=a(`div`,i);n(i,b),u(b,`role`,`tablist`),v(b,`tabs tabs-box`);let S=a(`button`,b);n(b,S),u(S,`role`,`tab`),c(()=>{v(S,`tab ${r.value===`preview`?`tab-active`:``}`)}),h(S,`click`,()=>{r.value=`preview`}),n(S,e(`效果`));let C=a(`button`,b);n(b,C),u(C,`role`,`tab`),c(()=>{v(C,`tab ${r.value===`code`?`tab-active`:``}`)}),h(C,`click`,()=>{r.value=`code`}),n(C,e(`代码`));let w=a(`div`,i);n(i,w),c(()=>{v(w,`mt-4 grid gap-6 ${r.value===`preview`?``:`hidden`}`)});let E=a(`div`,w);n(w,E),v(E,`card bg-base-100 shadow`);let D=a(`div`,E);n(E,D),v(D,`card-body gap-6`);let O=a(`section`,D);n(D,O),v(O,`flex flex-wrap items-center justify-between gap-3`);let k=a(`div`,O);n(O,k);let A=a(`h2`,k);n(k,A),v(A,`text-xl font-semibold`),n(A,e(`Component + KeepAlive`));let j=a(`p`,k);n(k,j),v(j,`text-sm opacity-75`),n(j,e(`这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。`));let M=a(`div`,O);n(O,M),v(M,`flex flex-wrap gap-3`);let N=a(`div`,M);n(M,N),v(N,`join`);let P=s(`rue:list:start`),ie=s(`rue:list:end`);n(N,P),n(N,ie);let F=new Map;c(()=>{F=x({items:Object.keys(T)||[],getKey:(e,t)=>e,elements:F,parent:N,before:ie,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,r,i,d,f)=>{_(p(()=>{let r=l(),i=a(`button`,r);n(r,i),c(()=>{v(i,`btn btn-sm join-item ${o.value===e?`btn-primary`:``}`)}),h(i,`click`,()=>{o.value=e}),c(()=>{u(i,`key`,String(e))});let d=s(`rue:slot:anchor`);return n(i,d),c(()=>{let n=te[e];t(()=>_(n,i,d))}),r}),r,i)}})});let I=a(`div`,M);n(M,I),v(I,`join`);let L=a(`button`,I);n(I,L),c(()=>{v(L,`btn btn-sm join-item ${f.value===`all`?`btn-secondary`:``}`)}),h(L,`click`,()=>{f.value=`all`}),n(L,e(`全部缓存`));let R=a(`button`,I);n(I,R),c(()=>{v(R,`btn btn-sm join-item ${f.value===`excludeDraft`?`btn-secondary`:``}`)}),h(R,`click`,()=>{f.value=`excludeDraft`}),n(R,e(`排除草稿`));let z=a(`button`,I);n(I,z),c(()=>{v(z,`btn btn-sm join-item ${f.value===`maxTwo`?`btn-secondary`:``}`)}),h(z,`click`,()=>{f.value=`maxTwo`}),n(z,e(`max=2`));let B=a(`div`,D);n(D,B),v(B,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let V=a(`div`,B);n(B,V),v(V,`rounded-box border border-dashed border-base-300 p-4 min-h-64`);let H=s(`rue:component:anchor`);n(V,H),c(()=>{let e=y(re,{activeView:o,cacheMode:f});t(()=>_(e,V,H))});let U=a(`aside`,B);n(B,U),v(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let W=a(`div`,U);n(U,W);let G=a(`strong`,W);n(W,G),n(G,e(`当前视图`)),n(W,e(`：`));let K=d(W);n(W,K),c(()=>{m(K,o.value)});let q=a(`div`,U);n(U,q);let J=a(`strong`,q);n(q,J),n(J,e(`缓存模式`)),n(q,e(`： `));let Y=d(q);n(q,Y),c(()=>{m(Y,f.value===`all`?`全部缓存`:f.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`)});let X=a(`div`,U);n(U,X),n(X,e(`先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。`));let Z=a(`div`,i);n(i,Z),c(()=>{v(Z,`mt-4 grid gap-6 ${r.value===`code`?``:`hidden`}`)});let Q=a(`div`,Z);n(Z,Q),v(Q,`card bg-base-100 shadow overflow-auto`);let $=a(`div`,Q);n(Q,$),v($,`card-body p-0`);let ae=s(`rue:component:anchor`);return n($,ae),c(()=>{let e=y(ee,{className:`h-full`,lang:`tsx`,code:ne});t(()=>_(e,$,ae))}),i})}),g,b),g})};export{D as default};