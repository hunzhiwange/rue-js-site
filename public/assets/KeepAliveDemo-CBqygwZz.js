import{J as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,sn as h,t as g,tn as _,tt as v,yt as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as ee}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as x}from"./KeepAlive-CPK-kywO.js";import{t as S}from"./Code-BoXKy3gJ.js";import{t as C}from"./src-Dlanwp1X.js";import{r as w}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var te={CounterPanel:`计数器`,DraftPanel:`草稿`,FeedPanel:`动态`},T={CounterPanel:()=>{let{count:e,setCount:r}=b(`useSetup:0:0`,()=>f(()=>{let[e,t]=b(`useState:1:0`,()=>h(0));return{count:e,setCount:t}}));return l(s=>{let l=m(`article`,s);p(l,`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`);let u=m(`div`,l);t(l,u),p(u,`text-xs uppercase tracking-[0.22em] opacity-60`),t(u,c(`CounterPanel`));let d=m(`div`,l);t(l,d),p(d,`mt-2 text-3xl font-semibold`);let f=a(d);t(d,f),n(()=>{o(f,e.value)});let h=m(`button`,l);return t(l,h),p(h,`btn btn-primary btn-sm mt-4`),i(h,`click`,()=>{r(e=>{e.value+=1})}),t(h,c(`增加`)),l})},DraftPanel:()=>{let{title:e,setTitle:r}=b(`useSetup:0:0:dup1`,()=>f(()=>{let[e,t]=b(`useState:1:1`,()=>h(`未提交草稿`));return{title:e,setTitle:t}}));return l(s=>{let l=m(`article`,s);p(l,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let u=m(`div`,l);t(l,u),p(u,`text-xs uppercase tracking-[0.22em] opacity-60`),t(u,c(`DraftPanel`));let d=m(`label`,l);t(l,d),p(d,`form-control mt-3`);let f=m(`span`,d);t(d,f),p(f,`label-text`),t(f,c(`标题`));let h=m(`input`,d);t(d,h),p(h,`input input-bordered mt-1`),n(()=>{y(h,e.value)}),i(h,`input`,e=>{r(e.target.value)});let g=m(`div`,l);t(l,g),p(g,`mt-3 text-sm opacity-75`),t(g,c(`当前草稿：`));let _=a(g);return t(g,_),n(()=>{o(_,e.value)}),l})},FeedPanel:()=>{let{items:e,setItems:r}=b(`useSetup:0:0:dup2`,()=>f(()=>{let[e,t]=b(`useState:1:2`,()=>h([`初始化记录`]));return{items:e,setItems:t}}));return l(f=>{let h=m(`article`,f);p(h,`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`);let g=m(`div`,h);t(h,g),p(g,`text-xs uppercase tracking-[0.22em] opacity-60`),t(g,c(`FeedPanel`));let _=m(`button`,h);t(h,_),p(_,`btn btn-accent btn-sm mt-3`),i(_,`click`,()=>{r(e=>[`记录 ${e.length+1}`,...e])}),t(_,c(`添加记录`));let y=m(`ul`,h);t(h,y),p(y,`mt-4 space-y-2 text-sm`);let b=v(`rue:list:start`),x=v(`rue:list:end`);t(y,b),t(y,x);let S=new Map;return n(()=>{S=ee({items:e||[],getKey:(e,t)=>e,elements:S,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,i,c,f)=>{d(l(()=>{let r=u(),i=m(`li`,r);t(r,i),p(i,`rounded-box bg-base-100/80 px-3 py-2`),n(()=>{s(i,`key`,String(e))});let c=a(i);return t(i,c),n(()=>{o(c,e)}),r}),r,i)}})}),h})}},ne=`import { Component, KeepAlive, ref, useState, type FC } from '@rue-js/rue';

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

export default Demo;`,E=e=>e===`excludeDraft`?{exclude:`DraftPanel`}:e===`maxTwo`?{max:2}:{},re=t=>l(()=>{let r=document.createDocumentFragment(),i=document.createComment(`keep-alive-demo-anchor`);return r.appendChild(i),b(`watchEffect:1:3`,()=>n(()=>{d(C(x,{...E(t.cacheMode.value),children:C(e,{is:T[t.activeView.value]},t.activeView.value)}),r,i)})),r}),D=()=>{let{activeTab:e,activeView:h,cacheMode:y}=b(`useSetup:0:0:dup3`,()=>f(()=>({activeTab:b(`ref:1:4`,()=>r(`preview`)),activeView:b(`ref:1:5`,()=>r(`CounterPanel`)),cacheMode:b(`ref:1:6`,()=>r(`all`))})));return l(r=>{let f=u(),b=v(`rue:component:anchor`);return t(f,b),d(g(w,{children:l(()=>{let r=u(),f=m(`h1`,r);t(r,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,c(`KeepAlive 缓存组件`));let b=m(`div`,r);t(r,b),s(b,`role`,`tablist`),p(b,`tabs tabs-box`);let x=m(`button`,b);t(b,x),s(x,`role`,`tab`),n(()=>{p(x,`tab ${e.value===`preview`?`tab-active`:``}`)}),i(x,`click`,()=>{e.value=`preview`}),t(x,c(`效果`));let C=m(`button`,b);t(b,C),s(C,`role`,`tab`),n(()=>{p(C,`tab ${e.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{e.value=`code`}),t(C,c(`代码`));let w=m(`div`,r);t(r,w),n(()=>{p(w,`mt-4 grid gap-6 ${e.value===`preview`?``:`hidden`}`)});let E=m(`div`,w);t(w,E),p(E,`card bg-base-100 shadow`);let D=m(`div`,E);t(E,D),p(D,`card-body gap-6`);let O=m(`section`,D);t(D,O),p(O,`flex flex-wrap items-center justify-between gap-3`);let k=m(`div`,O);t(O,k);let A=m(`h2`,k);t(k,A),p(A,`text-xl font-semibold`),t(A,c(`Component + KeepAlive`));let j=m(`p`,k);t(k,j),p(j,`text-sm opacity-75`),t(j,c(`这里用 Component 的 is 动态切换视图，并用 key 作为 KeepAlive 的缓存身份。`));let M=m(`div`,O);t(O,M),p(M,`flex flex-wrap gap-3`);let N=m(`div`,M);t(M,N),p(N,`join`);let P=v(`rue:list:start`),F=v(`rue:list:end`);t(N,P),t(N,F);let ie=new Map;n(()=>{ie=ee({items:Object.keys(T)||[],getKey:(e,t)=>e,elements:ie,parent:N,before:F,singleRoot:!0,trackIndex:!1,start:P,renderItem:(e,r,a,o,c)=>{d(l(()=>{let r=u(),a=m(`button`,r);t(r,a),n(()=>{p(a,`btn btn-sm join-item ${h.value===e?`btn-primary`:``}`)}),i(a,`click`,()=>{h.value=e}),n(()=>{s(a,`key`,String(e))});let o=v(`rue:slot:anchor`);return t(a,o),n(()=>{let t=te[e];_(()=>d(t,a,o))}),r}),r,a)}})});let I=m(`div`,M);t(M,I),p(I,`join`);let L=m(`button`,I);t(I,L),n(()=>{p(L,`btn btn-sm join-item ${y.value===`all`?`btn-secondary`:``}`)}),i(L,`click`,()=>{y.value=`all`}),t(L,c(`全部缓存`));let R=m(`button`,I);t(I,R),n(()=>{p(R,`btn btn-sm join-item ${y.value===`excludeDraft`?`btn-secondary`:``}`)}),i(R,`click`,()=>{y.value=`excludeDraft`}),t(R,c(`排除草稿`));let z=m(`button`,I);t(I,z),n(()=>{p(z,`btn btn-sm join-item ${y.value===`maxTwo`?`btn-secondary`:``}`)}),i(z,`click`,()=>{y.value=`maxTwo`}),t(z,c(`max=2`));let B=m(`div`,D);t(D,B),p(B,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let V=m(`div`,B);t(B,V),p(V,`rounded-box border border-dashed border-base-300 p-4 min-h-64`);let H=v(`rue:component:anchor`);t(V,H),n(()=>{let e=g(re,{activeView:h,cacheMode:y});_(()=>d(e,V,H))});let U=m(`aside`,B);t(B,U),p(U,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let W=m(`div`,U);t(U,W);let G=m(`strong`,W);t(W,G),t(G,c(`当前视图`)),t(W,c(`：`));let K=a(W);t(W,K),n(()=>{o(K,h.value)});let q=m(`div`,U);t(U,q);let J=m(`strong`,q);t(q,J),t(J,c(`缓存模式`)),t(q,c(`： `));let Y=a(q);t(q,Y),n(()=>{o(Y,y.value===`all`?`全部缓存`:y.value===`excludeDraft`?`DraftPanel 不缓存`:`最多缓存 2 个`)});let X=m(`div`,U);t(U,X),t(X,c(`先修改任意面板状态，再切走切回，可以观察缓存命中与淘汰。`));let Z=m(`div`,r);t(r,Z),n(()=>{p(Z,`mt-4 grid gap-6 ${e.value===`code`?``:`hidden`}`)});let Q=m(`div`,Z);t(Z,Q),p(Q,`card bg-base-100 shadow overflow-auto`);let $=m(`div`,Q);t(Q,$),p($,`card-body p-0`);let ae=v(`rue:component:anchor`);return t($,ae),n(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:ne});_(()=>d(e,$,ae))}),r})}),f,b),f})};export{D as default};