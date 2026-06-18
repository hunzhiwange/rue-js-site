import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`ref:1:0`,()=>r(0)),t=_(`ref:1:1`,()=>r(0)),n=_(`ref:1:2`,()=>r(0)),i=_(`ref:1:3`,()=>r(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:i,activeTab:_(`ref:1:4`,()=>r(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(i.value+=1,console.info(`manual self`,i.value))}}}));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(y,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`事件处理`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{h(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),f(y,`click`,()=>{T.value=`preview`}),n(y,e(`效果`));let A=i(`button`,_);n(_,A),c(A,`role`,`tab`),o(()=>{h(A,`tab ${T.value===`code`?`tab-active`:``}`)}),f(A,`click`,()=>{T.value=`code`}),n(A,e(`代码`));let j=i(`div`,r);n(r,j),h(j,`mt-4 grid gap-6 items-start`);let M=a(`rue:slot:anchor`);n(j,M),o(()=>{let r=T.value===`code`?u(()=>{let r=s(),l=i(`div`,r);n(r,l),h(l,`card bg-base-100 shadow`);let u=i(`div`,l);n(l,u),h(u,`card-body gap-3`);let d=i(`div`,u);n(u,d),c(d,`role`,`alert`),h(d,`alert alert-info alert-soft`);let f=i(`span`,d);n(d,f),n(f,e(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let p=a(`rue:component:anchor`);return n(u,p),o(()=>{let e=g(v,{lang:`tsx`,code:b});t(()=>m(e,u,p))}),r}):``;t(()=>m(r,j,M))}),n(j,e(` `));let N=a(`rue:slot:anchor`);return n(j,N),o(()=>{let r=T.value===`preview`?u(()=>{let t=s(),r=i(`div`,t);n(t,r),h(r,`card bg-base-100 shadow`);let a=i(`div`,r);n(r,a),h(a,`card-body grid gap-6`);let u=i(`div`,a);n(a,u),c(u,`role`,`alert`),h(u,`alert alert-info`);let p=i(`span`,u);n(u,p),n(p,e(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=i(`section`,a);n(a,m),h(m,`space-y-3`);let g=i(`div`,m);n(m,g),h(g,`flex items-center justify-between gap-3`);let _=i(`h2`,g);n(g,_),h(_,`text-xl font-semibold`),n(_,e(`onClick`));let v=i(`span`,g);n(g,v),h(v,`badge badge-primary badge-lg`);let y=l(v);n(v,y),o(()=>{d(y,x.value)});let b=i(`button`,m);n(m,b),h(b,`btn btn-primary btn-sm`),f(b,`click`,E);let T=l(b);n(b,T),d(T,`onClick={handleClick}`);let A=i(`section`,a);n(a,A),h(A,`space-y-3`);let j=i(`div`,A);n(A,j),h(j,`flex items-center justify-between gap-3`);let M=i(`h2`,j);n(j,M),h(M,`text-xl font-semibold`),n(M,e(`onClick + stopPropagation + preventDefault`));let N=i(`span`,j);n(j,N),h(N,`badge badge-success badge-lg`);let P=l(N);n(N,P),o(()=>{d(P,S.value)});let F=i(`a`,A);n(A,F),h(F,`link link-primary`),c(F,`href`,`#noop`),f(F,`click`,D),n(F,e(`手写 stop / prevent`));let I=i(`section`,a);n(a,I),h(I,`space-y-3`);let L=i(`div`,I);n(I,L),h(L,`flex items-center justify-between gap-3`);let R=i(`h2`,L);n(L,R),h(R,`text-xl font-semibold`),n(R,e(`onKeyUp + Enter 判定`));let z=i(`span`,L);n(L,z),h(z,`badge badge-accent badge-lg`);let B=l(z);n(z,B),o(()=>{d(B,C.value)});let V=i(`input`,I);n(I,V),h(V,`input input-bordered w-full`),c(V,`placeholder`,`按 Enter`),f(V,`keyup`,O);let H=i(`section`,a);n(a,H),h(H,`space-y-3`);let U=i(`div`,H);n(H,U),h(U,`flex items-center justify-between gap-3`);let W=i(`h2`,U);n(U,W),h(W,`text-xl font-semibold`),n(W,e(`onClick + currentTarget / target 判定`));let G=i(`span`,U);n(U,G),h(G,`badge badge-info badge-lg`);let K=l(G);n(G,K),o(()=>{d(K,w.value)});let q=i(`div`,H);n(H,q),h(q,`rounded-box border border-base-300 p-4`),f(q,`click`,k);let J=i(`span`,q);n(q,J),n(J,e(`点击容器空白处触发`));let Y=i(`button`,q);return n(q,Y),h(Y,`btn btn-ghost btn-sm ml-3`),n(Y,e(`子元素按钮`)),t}):``;t(()=>m(r,j,N))}),r})}),p,_),p})};export{x as default};