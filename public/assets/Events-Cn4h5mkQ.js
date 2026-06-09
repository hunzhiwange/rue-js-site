import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`ref:1:0`,()=>i(0)),t=_(`ref:1:1`,()=>i(0)),n=_(`ref:1:2`,()=>i(0)),r=_(`ref:1:3`,()=>i(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>i(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`事件处理`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{T.value=`preview`}),o(y,l(`效果`));let A=e(`button`,_);o(_,A),f(A,`role`,`tab`),a(()=>{c(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),n(A,`click`,()=>{T.value=`code`}),o(A,l(`代码`));let j=e(`div`,i);o(i,j),c(j,`mt-4 grid gap-6 items-start`);let M=s(`rue:slot:anchor`);o(j,M),a(()=>{let n=T.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow`);let u=e(`div`,i);o(i,u),c(u,`card-body gap-3`);let d=e(`div`,u);o(u,d),f(d,`role`,`alert`),c(d,`alert alert-info alert-soft`);let p=e(`span`,d);o(d,p),o(p,l(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let g=s(`rue:component:anchor`);return o(u,g),a(()=>{let e=h(v,{lang:`tsx`,code:b});t(()=>m(e,u,g))}),n}):``;t(()=>m(n,j,M))}),o(j,l(` `));let N=s(`rue:slot:anchor`);return o(j,N),a(()=>{let i=T.value===`preview`?u(()=>{let t=r(),i=e(`div`,t);o(t,i),c(i,`card bg-base-100 shadow`);let s=e(`div`,i);o(i,s),c(s,`card-body grid gap-6`);let u=e(`div`,s);o(s,u),f(u,`role`,`alert`),c(u,`alert alert-info`);let p=e(`span`,u);o(u,p),o(p,l(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=e(`section`,s);o(s,m),c(m,`space-y-3`);let h=e(`div`,m);o(m,h),c(h,`flex items-center justify-between gap-3`);let _=e(`h2`,h);o(h,_),c(_,`text-xl font-semibold`),o(_,l(`onClick`));let v=e(`span`,h);o(h,v),c(v,`badge badge-primary badge-lg`);let y=g(v);o(v,y),a(()=>{d(y,x.value)});let b=e(`button`,m);o(m,b),c(b,`btn btn-primary btn-sm`),n(b,`click`,E),o(b,l(`onClick=`));let T=g(b);o(b,T),a(()=>{d(T,E)});let A=e(`section`,s);o(s,A),c(A,`space-y-3`);let j=e(`div`,A);o(A,j),c(j,`flex items-center justify-between gap-3`);let M=e(`h2`,j);o(j,M),c(M,`text-xl font-semibold`),o(M,l(`onClick + stopPropagation + preventDefault`));let N=e(`span`,j);o(j,N),c(N,`badge badge-success badge-lg`);let P=g(N);o(N,P),a(()=>{d(P,S.value)});let F=e(`a`,A);o(A,F),c(F,`link link-primary`),f(F,`href`,`#noop`),n(F,`click`,D),o(F,l(`手写 stop / prevent`));let I=e(`section`,s);o(s,I),c(I,`space-y-3`);let L=e(`div`,I);o(I,L),c(L,`flex items-center justify-between gap-3`);let R=e(`h2`,L);o(L,R),c(R,`text-xl font-semibold`),o(R,l(`onKeyUp + Enter 判定`));let z=e(`span`,L);o(L,z),c(z,`badge badge-accent badge-lg`);let B=g(z);o(z,B),a(()=>{d(B,C.value)});let V=e(`input`,I);o(I,V),c(V,`input input-bordered w-full`),f(V,`placeholder`,`按 Enter`),n(V,`keyup`,O);let H=e(`section`,s);o(s,H),c(H,`space-y-3`);let U=e(`div`,H);o(H,U),c(U,`flex items-center justify-between gap-3`);let W=e(`h2`,U);o(U,W),c(W,`text-xl font-semibold`),o(W,l(`onClick + currentTarget / target 判定`));let G=e(`span`,U);o(U,G),c(G,`badge badge-info badge-lg`);let K=g(G);o(G,K),a(()=>{d(K,w.value)});let q=e(`div`,H);o(H,q),c(q,`rounded-box border border-base-300 p-4`),n(q,`click`,k);let J=e(`span`,q);o(q,J),o(J,l(`点击容器空白处触发`));let Y=e(`button`,q);return o(q,Y),c(Y,`btn btn-ghost btn-sm ml-3`),o(Y,l(`子元素按钮`)),t}):``;t(()=>m(i,j,N))}),i})}),p,_),p})};export{x as default};