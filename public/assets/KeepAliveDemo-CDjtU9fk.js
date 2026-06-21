import{$t as e,J as t,Jt as n,Q as r,Z as i,_t as a,an as o,dt as s,et as c,in as l,it as u,l as d,lt as f,nt as p,o as m,rt as h,t as g,tt as _,vt as v,zt as y}from"./vapor-runtime-DsQWl-IB.js";import{a as b,n as x}from"./vapor-helpers-vapor-Dg64FcpK.js";import{i as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./KeepAlive-zJaZ_QxY.js";import{t as ee}from"./Code-4SUSUwRg.js";import{r as w}from"./SidebarPlaygroundExample-BEWYUWOl.js";var te={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},ne={CounterPanel:()=>{let{count:e,setCount:t}=b(`useSetup:0:0`,()=>l(()=>{let[e,t]=b(`useState:1:0`,()=>o(0));return{count:e,setCount:t}}));return d(n=>{let a=p(`article`,n);s(a,`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`);let o=p(`div`,a);r(a,o),s(o,`text-xs uppercase tracking-[0.22em] opacity-60`),r(o,h(`CounterPanel`));let c=p(`div`,a);r(a,c),s(c,`mt-2 text-3xl font-semibold`);let l=u(c);r(c,l),y(()=>{v(l,e.value)});let d=p(`button`,a);return r(a,d),s(d,`btn btn-primary btn-sm mt-4`),i(d,`click`,()=>{t(e=>{e.value+=1})}),r(d,h(`增加`)),a})},DraftPanel:()=>{let{title:e,setTitle:t}=b(`useSetup:0:0:dup1`,()=>l(()=>{let[e,t]=b(`useState:1:1`,()=>o(`未提交草稿`));return{title:e,setTitle:t}}));return d(n=>{let o=p(`article`,n);s(o,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let c=p(`div`,o);r(o,c),s(c,`text-xs uppercase tracking-[0.22em] opacity-60`),r(c,h(`DraftPanel`));let l=p(`label`,o);r(o,l),s(l,`form-control mt-3`);let d=p(`span`,l);r(l,d),s(d,`label-text`),r(d,h(`标题`));let f=p(`input`,l);r(l,f),s(f,`input input-bordered mt-1`),y(()=>{a(f,e.value)}),i(f,`input`,e=>{t(e.target.value)});let m=p(`div`,o);r(o,m),s(m,`mt-3 text-sm opacity-75`),r(m,h(`当前草稿：`));let g=u(m);return r(m,g),y(()=>{v(g,e.value)}),o})},FeedPanel:()=>{let{items:e,setItems:t}=b(`useSetup:0:0:dup2`,()=>l(()=>{let[e,t]=b(`useState:1:2`,()=>o([`初始化记录`]));return{items:e,setItems:t}}));return d(n=>{let a=p(`article`,n);s(a,`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`);let o=p(`div`,a);r(a,o),s(o,`text-xs uppercase tracking-[0.22em] opacity-60`),r(o,h(`FeedPanel`));let l=p(`button`,a);r(a,l),s(l,`btn btn-accent btn-sm mt-3`),i(l,`click`,()=>{t(e=>[`记录 ${e.length+1}`,...e])}),r(l,h(`添加记录`));let g=p(`ul`,a);r(a,g),s(g,`mt-4 space-y-2 text-sm`);let b=c(`rue:list:start`),S=c(`rue:list:end`);r(g,b),r(g,S);let C=new Map;return y(()=>{C=x({items:e||[],getKey:(e,t)=>e,elements:C,parent:g,before:S,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,t,n,i,a)=>{m(d(()=>{let t=_(),n=p(`li`,t);r(t,n),s(n,`rounded-box bg-base-100/80 px-3 py-2`),y(()=>{f(n,`key`,String(e))});let i=u(n);return r(n,i),y(()=>{v(i,e)}),t}),t,n)}})}),a})}},re=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,T=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},ie=e=>d(()=>{let n=document.createDocumentFragment(),r=document.createComment(`keep-alive-demo-anchor`);return n.appendChild(r),b(`watchEffect:1:3`,()=>y(()=>{m(S(C,{...T(e.cacheMode.value),children:S(t,{is:ne[e.activeView.value]},e.activeView.value)}),n,r)})),n}),E=()=>{let{activeTab:t,activeView:a,cacheMode:o}=b(`useSetup:0:0:dup3`,()=>l(()=>({activeTab:b(`ref:1:4`,()=>n(`preview`)),activeView:b(`ref:1:5`,()=>n(`CounterPanel`)),cacheMode:b(`ref:1:6`,()=>n(`all`))})));return d(n=>{let l=_(),b=c(`rue:component:anchor`);return r(l,b),m(g(w,{children:d(()=>{let n=_(),l=p(`h1`,n);r(n,l),s(l,`text-5xl font-semibold mb-4 md:mb-4`),r(l,h(`KeepAlive 缓存组件`));let b=p(`div`,n);r(n,b),f(b,`role`,`tablist`),s(b,`tabs tabs-box`);let S=p(`button`,b);r(b,S),f(S,`role`,`tab`),y(()=>{s(S,`tab ${t.value===`preview`?`tab-active`:``}`)}),i(S,`click`,()=>{t.value=`preview`}),r(S,h(`效果`));let C=p(`button`,b);r(b,C),f(C,`role`,`tab`),y(()=>{s(C,`tab ${t.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{t.value=`code`}),r(C,h(`代码`));let w=p(`div`,n);r(n,w),y(()=>{s(w,`mt-4 grid gap-6 ${t.value===`preview`?``:`hidden`}`)});let T=p(`div`,w);r(w,T),s(T,`card bg-base-100 shadow`);let E=p(`div`,T);r(T,E),s(E,`card-body gap-6`);let D=p(`section`,E);r(E,D),s(D,`flex flex-wrap items-center justify-between gap-3`);let O=p(`div`,D);r(D,O);let k=p(`h2`,O);r(O,k),s(k,`text-xl font-semibold`),r(k,h(`Component + KeepAlive`));let A=p(`p`,O);r(O,A),s(A,`text-sm opacity-75`),r(A,h(`这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。`));let j=p(`div`,D);r(D,j),s(j,`flex flex-wrap gap-3`);let M=p(`div`,j);r(j,M),s(M,`join`);let N=c(`rue:list:start`),P=c(`rue:list:end`);r(M,N),r(M,P);let F=new Map;y(()=>{F=x({items:Object.keys(ne)||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(t,n,o,l,u)=>{m(d(()=>{let n=_(),o=p(`button`,n);r(n,o),y(()=>{s(o,`btn btn-sm join-item ${a.value===t?`btn-primary`:``}`)}),i(o,`click`,()=>{a.value=t}),y(()=>{f(o,`key`,String(t))});let l=c(`rue:slot:anchor`);return r(o,l),y(()=>{let n=te[t];e(()=>m(n,o,l))}),n}),n,o)}})});let I=p(`div`,j);r(j,I),s(I,`join`);let L=p(`button`,I);r(I,L),y(()=>{s(L,`btn btn-sm join-item ${o.value===`all`?`btn-secondary`:``}`)}),i(L,`click`,()=>{o.value=`all`}),r(L,h(`全部缓存`));let R=p(`button`,I);r(I,R),y(()=>{s(R,`btn btn-sm join-item ${o.value===`excludeDraft`?`btn-secondary`:``}`)}),i(R,`click`,()=>{o.value=`excludeDraft`}),r(R,h(`排除草稿`));let z=p(`button`,I);r(I,z),y(()=>{s(z,`btn btn-sm join-item ${o.value===`maxTwo`?`btn-secondary`:``}`)}),i(z,`click`,()=>{o.value=`maxTwo`}),r(z,h(`max=2`));let B=p(`div`,E);r(E,B),s(B,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let V=p(`div`,B);r(B,V),s(V,`rounded-box border border-dashed border-base-300 p-4 min-h-64`);let H=c(`rue:component:anchor`);r(V,H),y(()=>{let t=g(ie,{activeView:a,cacheMode:o});e(()=>m(t,V,H))});let U=p(`aside`,B);r(B,U),s(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let W=p(`div`,U);r(U,W);let G=p(`strong`,W);r(W,G),r(G,h(`当前视图`)),r(W,h(`：`));let K=u(W);r(W,K),y(()=>{v(K,a.value)});let q=p(`div`,U);r(U,q);let J=p(`strong`,q);r(q,J),r(J,h(`缓存模式`)),r(q,h(`： `));let Y=u(q);r(q,Y),y(()=>{v(Y,o.value===`all`?`全部缓存`:o.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`)});let X=p(`div`,U);r(U,X),r(X,h(`先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。`));let Z=p(`div`,n);r(n,Z),y(()=>{s(Z,`mt-4 grid gap-6 ${t.value===`code`?``:`hidden`}`)});let Q=p(`div`,Z);r(Z,Q),s(Q,`card bg-base-100 shadow overflow-auto`);let $=p(`div`,Q);r(Q,$),s($,`card-body p-0`);let ae=c(`rue:component:anchor`);return r($,ae),y(()=>{let t=g(ee,{className:`h-full`,lang:`tsx`,code:re});e(()=>m(t,$,ae))}),n})}),l,b),l})};export{E as default};