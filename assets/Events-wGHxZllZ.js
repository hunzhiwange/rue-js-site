import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Bp8DIxJg.js";import{a as _}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as v}from"./Code-D55WiaDx.js";import{t as y}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>f(()=>{let e=_(`ref:1:0`,()=>p(0)),t=_(`ref:1:1`,()=>p(0)),n=_(`ref:1:2`,()=>p(0)),r=_(`ref:1:3`,()=>p(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>p(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(y,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`事件处理`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),l(()=>{n(y,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{T.value=`preview`}),a(y,s(`效果`));let A=r(`button`,_);a(_,A),c(A,`role`,`tab`),l(()=>{n(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),i(A,`click`,()=>{T.value=`code`}),a(A,s(`代码`));let j=r(`div`,f);a(f,j),n(j,`mt-4 grid gap-6 items-start`);let M=e(`rue:slot:anchor`);a(j,M),l(()=>{let i=T.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow`);let u=r(`div`,o);a(o,u),n(u,`card-body gap-3`);let f=r(`div`,u);a(u,f),c(f,`role`,`alert`),n(f,`alert alert-info alert-soft`);let p=r(`span`,f);a(f,p),a(p,s(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let g=e(`rue:component:anchor`);return a(u,g),l(()=>{let e=m(v,{lang:`tsx`,code:b});h(()=>d(e,u,g))}),i}):``;h(()=>d(i,j,M))}),a(j,s(` `));let N=e(`rue:slot:anchor`);return a(j,N),l(()=>{let e=T.value===`preview`?u(()=>{let e=t(),u=r(`div`,e);a(e,u),n(u,`card bg-base-100 shadow`);let d=r(`div`,u);a(u,d),n(d,`card-body grid gap-6`);let f=r(`div`,d);a(d,f),c(f,`role`,`alert`),n(f,`alert alert-info`);let p=r(`span`,f);a(f,p),a(p,s(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=r(`section`,d);a(d,m),n(m,`space-y-3`);let h=r(`div`,m);a(m,h),n(h,`flex items-center justify-between gap-3`);let _=r(`h2`,h);a(h,_),n(_,`text-xl font-semibold`),a(_,s(`onClick`));let v=r(`span`,h);a(h,v),n(v,`badge badge-primary badge-lg`);let y=g(v);a(v,y),l(()=>{o(y,x.value)});let b=r(`button`,m);a(m,b),n(b,`btn btn-primary btn-sm`),i(b,`click`,E),a(b,s(`onClick=`));let T=g(b);a(b,T),l(()=>{o(T,E)});let A=r(`section`,d);a(d,A),n(A,`space-y-3`);let j=r(`div`,A);a(A,j),n(j,`flex items-center justify-between gap-3`);let M=r(`h2`,j);a(j,M),n(M,`text-xl font-semibold`),a(M,s(`onClick + stopPropagation + preventDefault`));let N=r(`span`,j);a(j,N),n(N,`badge badge-success badge-lg`);let P=g(N);a(N,P),l(()=>{o(P,S.value)});let F=r(`a`,A);a(A,F),n(F,`link link-primary`),c(F,`href`,`#noop`),i(F,`click`,D),a(F,s(`手写 stop / prevent`));let I=r(`section`,d);a(d,I),n(I,`space-y-3`);let L=r(`div`,I);a(I,L),n(L,`flex items-center justify-between gap-3`);let R=r(`h2`,L);a(L,R),n(R,`text-xl font-semibold`),a(R,s(`onKeyUp + Enter 判定`));let z=r(`span`,L);a(L,z),n(z,`badge badge-accent badge-lg`);let B=g(z);a(z,B),l(()=>{o(B,C.value)});let V=r(`input`,I);a(I,V),n(V,`input input-bordered w-full`),c(V,`placeholder`,`按 Enter`),i(V,`keyup`,O);let H=r(`section`,d);a(d,H),n(H,`space-y-3`);let U=r(`div`,H);a(H,U),n(U,`flex items-center justify-between gap-3`);let W=r(`h2`,U);a(U,W),n(W,`text-xl font-semibold`),a(W,s(`onClick + currentTarget / target 判定`));let G=r(`span`,U);a(U,G),n(G,`badge badge-info badge-lg`);let K=g(G);a(G,K),l(()=>{o(K,w.value)});let q=r(`div`,H);a(H,q),n(q,`rounded-box border border-base-300 p-4`),i(q,`click`,k);let J=r(`span`,q);a(q,J),a(J,s(`点击容器空白处触发`));let Y=r(`button`,q);return a(q,Y),n(Y,`btn btn-ghost btn-sm ml-3`),a(Y,s(`子元素按钮`)),e}):``;h(()=>d(e,j,N))}),f})}),p,_),p})};export{x as default};