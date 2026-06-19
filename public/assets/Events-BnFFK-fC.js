import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=`import { type FC, ref } from '@rue-js/rue';

const Events: FC = () => {
  const clickCount = ref(0);
  const stopPreventCount = ref(0);
  const enterCount = ref(0);
  const selfCount = ref(0);

  const handleClick = (event: MouseEvent) => {
    clickCount.value += 1;
    console.log('onClick ->', event.type, clickCount.value);
  };

  const handleStopPrevent = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    stopPreventCount.value += 1;
  };

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    enterCount.value += 1;
  };

  const handleSelf = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    selfCount.value += 1;
  };

  return (
    <div className="grid gap-4">
      <button className="btn btn-primary" onClick={handleClick}>
        onClick
      </button>

      <a className="link link-primary" href="#noop" onClick={handleStopPrevent}>
        onClick + stopPropagation + preventDefault
      </a>

      <input className="input input-bordered" placeholder="按 Enter" onKeyUp={handleEnter} />

      <div className="rounded-box border border-base-300 p-4" onClick={handleSelf}>
        <span>手写 self 判定</span>
        <button className="btn btn-ghost btn-sm">子元素按钮</button>
      </div>
    </div>
  );
};

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>g(0)),t=_(`ref:1:1`,()=>g(0)),n=_(`ref:1:2`,()=>g(0)),r=_(`ref:1:3`,()=>g(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>g(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`事件处理`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{T.value=`preview`}),i(y,h(`效果`));let A=s(`button`,_);i(_,A),p(A,`role`,`tab`),n(()=>{u(A,`tab ${T.value===`code`?`tab-active`:``}`)}),a(A,`click`,()=>{T.value=`code`}),i(A,h(`代码`));let j=s(`div`,o);i(o,j),u(j,`mt-4 grid gap-6 items-start`);let M=t(`rue:slot:anchor`);i(j,M),n(()=>{let a=T.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow`);let c=s(`div`,o);i(o,c),u(c,`card-body gap-3`);let l=s(`div`,c);i(c,l),p(l,`role`,`alert`),u(l,`alert alert-info alert-soft`);let d=s(`span`,l);i(l,d),i(d,h(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let g=t(`rue:component:anchor`);return i(c,g),n(()=>{let e=m(v,{lang:`tsx`,code:b});r(()=>f(e,c,g))}),a}):``;r(()=>f(a,j,M))}),i(j,h(` `));let N=t(`rue:slot:anchor`);return i(j,N),n(()=>{let t=T.value===`preview`?l(()=>{let t=e(),r=s(`div`,t);i(t,r),u(r,`card bg-base-100 shadow`);let o=s(`div`,r);i(r,o),u(o,`card-body grid gap-6`);let l=s(`div`,o);i(o,l),p(l,`role`,`alert`),u(l,`alert alert-info`);let f=s(`span`,l);i(l,f),i(f,h(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=s(`section`,o);i(o,m),u(m,`space-y-3`);let g=s(`div`,m);i(m,g),u(g,`flex items-center justify-between gap-3`);let _=s(`h2`,g);i(g,_),u(_,`text-xl font-semibold`),i(_,h(`onClick`));let v=s(`span`,g);i(g,v),u(v,`badge badge-primary badge-lg`);let y=d(v);i(v,y),n(()=>{c(y,x.value)});let b=s(`button`,m);i(m,b),u(b,`btn btn-primary btn-sm`),a(b,`click`,E);let T=d(b);i(b,T),c(T,`onClick={handleClick}`);let A=s(`section`,o);i(o,A),u(A,`space-y-3`);let j=s(`div`,A);i(A,j),u(j,`flex items-center justify-between gap-3`);let M=s(`h2`,j);i(j,M),u(M,`text-xl font-semibold`),i(M,h(`onClick + stopPropagation + preventDefault`));let N=s(`span`,j);i(j,N),u(N,`badge badge-success badge-lg`);let P=d(N);i(N,P),n(()=>{c(P,S.value)});let F=s(`a`,A);i(A,F),u(F,`link link-primary`),p(F,`href`,`#noop`),a(F,`click`,D),i(F,h(`手写 stop / prevent`));let I=s(`section`,o);i(o,I),u(I,`space-y-3`);let L=s(`div`,I);i(I,L),u(L,`flex items-center justify-between gap-3`);let R=s(`h2`,L);i(L,R),u(R,`text-xl font-semibold`),i(R,h(`onKeyUp + Enter 判定`));let z=s(`span`,L);i(L,z),u(z,`badge badge-accent badge-lg`);let B=d(z);i(z,B),n(()=>{c(B,C.value)});let V=s(`input`,I);i(I,V),u(V,`input input-bordered w-full`),p(V,`placeholder`,`按 Enter`),a(V,`keyup`,O);let H=s(`section`,o);i(o,H),u(H,`space-y-3`);let U=s(`div`,H);i(H,U),u(U,`flex items-center justify-between gap-3`);let W=s(`h2`,U);i(U,W),u(W,`text-xl font-semibold`),i(W,h(`onClick + currentTarget / target 判定`));let G=s(`span`,U);i(U,G),u(G,`badge badge-info badge-lg`);let K=d(G);i(G,K),n(()=>{c(K,w.value)});let q=s(`div`,H);i(H,q),u(q,`rounded-box border border-base-300 p-4`),a(q,`click`,k);let J=s(`span`,q);i(q,J),i(J,h(`点击容器空白处触发`));let Y=s(`button`,q);return i(q,Y),u(Y,`btn btn-ghost btn-sm ml-3`),i(Y,h(`子元素按钮`)),t}):``;r(()=>f(t,j,N))}),o})}),g,_),g})};export{x as default};