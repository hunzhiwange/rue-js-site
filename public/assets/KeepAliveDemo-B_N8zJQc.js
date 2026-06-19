import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,Zt as s,ct as c,et as l,gt as u,ht as d,l as f,nt as p,o as m,q as h,rt as g,t as _,tt as v,ut as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b,n as x}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{i as S}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as C}from"./KeepAlive-CB9L6C0S.js";import{t as ee}from"./Code-D5UqTwV6.js";import{r as w}from"./SidebarPlaygroundExample-D2vGHFCu.js";var te={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},T={CounterPanel:()=>{let{count:e,setCount:n}=b(`useSetup:0:0`,()=>a(()=>{let[e,t]=b(`useState:1:0`,()=>s(0));return{count:e,setCount:t}}));return f(r=>{let a=v(`article`,r);y(a,`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`);let s=v(`div`,a);o(a,s),y(s,`text-xs uppercase tracking-[0.22em] opacity-60`),o(s,p(`CounterPanel`));let c=v(`div`,a);o(a,c),y(c,`mt-2 text-3xl font-semibold`);let l=g(c);o(c,l),t(()=>{u(l,e.value)});let d=v(`button`,a);return o(a,d),y(d,`btn btn-primary btn-sm mt-4`),i(d,`click`,()=>{n(e=>{e.value+=1})}),o(d,p(`增加`)),a})},DraftPanel:()=>{let{title:e,setTitle:n}=b(`useSetup:0:0:dup1`,()=>a(()=>{let[e,t]=b(`useState:1:1`,()=>s(`未提交草稿`));return{title:e,setTitle:t}}));return f(r=>{let a=v(`article`,r);y(a,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=v(`div`,a);o(a,s),y(s,`text-xs uppercase tracking-[0.22em] opacity-60`),o(s,p(`DraftPanel`));let c=v(`label`,a);o(a,c),y(c,`form-control mt-3`);let l=v(`span`,c);o(c,l),y(l,`label-text`),o(l,p(`标题`));let f=v(`input`,c);o(c,f),y(f,`input input-bordered mt-1`),t(()=>{d(f,e.value)}),i(f,`input`,e=>{n(e.target.value)});let m=v(`div`,a);o(a,m),y(m,`mt-3 text-sm opacity-75`),o(m,p(`当前草稿：`));let h=g(m);return o(m,h),t(()=>{u(h,e.value)}),a})},FeedPanel:()=>{let{items:n,setItems:r}=b(`useSetup:0:0:dup2`,()=>a(()=>{let[e,t]=b(`useState:1:2`,()=>s([`初始化记录`]));return{items:e,setItems:t}}));return f(a=>{let s=v(`article`,a);y(s,`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`);let d=v(`div`,s);o(s,d),y(d,`text-xs uppercase tracking-[0.22em] opacity-60`),o(d,p(`FeedPanel`));let h=v(`button`,s);o(s,h),y(h,`btn btn-accent btn-sm mt-3`),i(h,`click`,()=>{r(e=>[`记录 ${e.length+1}`,...e])}),o(h,p(`添加记录`));let _=v(`ul`,s);o(s,_),y(_,`mt-4 space-y-2 text-sm`);let b=e(`rue:list:start`),S=e(`rue:list:end`);o(_,b),o(_,S);let C=new Map;return t(()=>{C=x({items:n||[],getKey:(e,t)=>e,elements:C,parent:_,before:S,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,n,r,i,a)=>{m(f(()=>{let n=l(),r=v(`li`,n);o(n,r),y(r,`rounded-box bg-base-100/80 px-3 py-2`),t(()=>{c(r,`key`,String(e))});let i=g(r);return o(r,i),t(()=>{u(i,e)}),n}),n,r)}})}),s})}},ne=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,E=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},re=e=>f(()=>{let n=document.createDocumentFragment(),r=document.createComment(`keep-alive-demo-anchor`);return n.appendChild(r),b(`watchEffect:1:3`,()=>t(()=>{m(S(C,{...E(e.cacheMode.value),children:S(h,{is:T[e.activeView.value]},e.activeView.value)}),n,r)})),n}),D=()=>{let{activeTab:s,activeView:d,cacheMode:h}=b(`useSetup:0:0:dup3`,()=>a(()=>({activeTab:b(`ref:1:4`,()=>n(`preview`)),activeView:b(`ref:1:5`,()=>n(`CounterPanel`)),cacheMode:b(`ref:1:6`,()=>n(`all`))})));return f(n=>{let a=l(),b=e(`rue:component:anchor`);return o(a,b),m(_(w,{children:f(()=>{let n=l(),a=v(`h1`,n);o(n,a),y(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,p(`KeepAlive 缓存组件`));let b=v(`div`,n);o(n,b),c(b,`role`,`tablist`),y(b,`tabs tabs-box`);let S=v(`button`,b);o(b,S),c(S,`role`,`tab`),t(()=>{y(S,`tab ${s.value===`preview`?`tab-active`:``}`)}),i(S,`click`,()=>{s.value=`preview`}),o(S,p(`效果`));let C=v(`button`,b);o(b,C),c(C,`role`,`tab`),t(()=>{y(C,`tab ${s.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{s.value=`code`}),o(C,p(`代码`));let w=v(`div`,n);o(n,w),t(()=>{y(w,`mt-4 grid gap-6 ${s.value===`preview`?``:`hidden`}`)});let E=v(`div`,w);o(w,E),y(E,`card bg-base-100 shadow`);let D=v(`div`,E);o(E,D),y(D,`card-body gap-6`);let O=v(`section`,D);o(D,O),y(O,`flex flex-wrap items-center justify-between gap-3`);let k=v(`div`,O);o(O,k);let A=v(`h2`,k);o(k,A),y(A,`text-xl font-semibold`),o(A,p(`Component + KeepAlive`));let j=v(`p`,k);o(k,j),y(j,`text-sm opacity-75`),o(j,p(`这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。`));let M=v(`div`,O);o(O,M),y(M,`flex flex-wrap gap-3`);let N=v(`div`,M);o(M,N),y(N,`join`);let P=e(`rue:list:start`),ie=e(`rue:list:end`);o(N,P),o(N,ie);let F=new Map;t(()=>{F=x({items:Object.keys(T)||[],getKey:(e,t)=>e,elements:F,parent:N,before:ie,singleRoot:!0,trackIndex:!1,start:P,renderItem:(n,a,s,u,p)=>{m(f(()=>{let a=l(),s=v(`button`,a);o(a,s),t(()=>{y(s,`btn btn-sm join-item ${d.value===n?`btn-primary`:``}`)}),i(s,`click`,()=>{d.value=n}),t(()=>{c(s,`key`,String(n))});let u=e(`rue:slot:anchor`);return o(s,u),t(()=>{let e=te[n];r(()=>m(e,s,u))}),a}),a,s)}})});let I=v(`div`,M);o(M,I),y(I,`join`);let L=v(`button`,I);o(I,L),t(()=>{y(L,`btn btn-sm join-item ${h.value===`all`?`btn-secondary`:``}`)}),i(L,`click`,()=>{h.value=`all`}),o(L,p(`全部缓存`));let R=v(`button`,I);o(I,R),t(()=>{y(R,`btn btn-sm join-item ${h.value===`excludeDraft`?`btn-secondary`:``}`)}),i(R,`click`,()=>{h.value=`excludeDraft`}),o(R,p(`排除草稿`));let z=v(`button`,I);o(I,z),t(()=>{y(z,`btn btn-sm join-item ${h.value===`maxTwo`?`btn-secondary`:``}`)}),i(z,`click`,()=>{h.value=`maxTwo`}),o(z,p(`max=2`));let B=v(`div`,D);o(D,B),y(B,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let V=v(`div`,B);o(B,V),y(V,`rounded-box border border-dashed border-base-300 p-4 min-h-64`);let H=e(`rue:component:anchor`);o(V,H),t(()=>{let e=_(re,{activeView:d,cacheMode:h});r(()=>m(e,V,H))});let U=v(`aside`,B);o(B,U),y(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let W=v(`div`,U);o(U,W);let G=v(`strong`,W);o(W,G),o(G,p(`当前视图`)),o(W,p(`：`));let K=g(W);o(W,K),t(()=>{u(K,d.value)});let q=v(`div`,U);o(U,q);let J=v(`strong`,q);o(q,J),o(J,p(`缓存模式`)),o(q,p(`： `));let Y=g(q);o(q,Y),t(()=>{u(Y,h.value===`all`?`全部缓存`:h.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`)});let X=v(`div`,U);o(U,X),o(X,p(`先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。`));let Z=v(`div`,n);o(n,Z),t(()=>{y(Z,`mt-4 grid gap-6 ${s.value===`code`?``:`hidden`}`)});let Q=v(`div`,Z);o(Z,Q),y(Q,`card bg-base-100 shadow overflow-auto`);let $=v(`div`,Q);o(Q,$),y($,`card-body p-0`);let ae=e(`rue:component:anchor`);return o($,ae),t(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ne});r(()=>m(e,$,ae))}),n})}),a,b),a})};export{D as default};