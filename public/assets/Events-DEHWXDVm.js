import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>a(()=>{let e=_(`ref:1:0`,()=>n(0)),t=_(`ref:1:1`,()=>n(0)),r=_(`ref:1:2`,()=>n(0)),i=_(`ref:1:3`,()=>n(0));return{clickCount:e,stopPreventCount:t,enterCount:r,selfCount:i,activeTab:_(`ref:1:4`,()=>n(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(r.value+=1,console.info(`manual enter`,r.value))},handleSelf:e=>{e.target===e.currentTarget&&(i.value+=1,console.info(`manual self`,i.value))}}}));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`事件处理`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{T.value=`preview`}),o(y,d(`效果`));let A=h(`button`,_);o(_,A),s(A,`role`,`tab`),t(()=>{g(A,`tab ${T.value===`code`?`tab-active`:``}`)}),i(A,`click`,()=>{T.value=`code`}),o(A,d(`代码`));let j=h(`div`,n);o(n,j),g(j,`mt-4 grid gap-6 items-start`);let M=e(`rue:slot:anchor`);o(j,M),t(()=>{let n=T.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow`);let a=h(`div`,i);o(i,a),g(a,`card-body gap-3`);let l=h(`div`,a);o(a,l),s(l,`role`,`alert`),g(l,`alert alert-info alert-soft`);let u=h(`span`,l);o(l,u),o(u,d(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let p=e(`rue:component:anchor`);return o(a,p),t(()=>{let e=m(v,{lang:`tsx`,code:b});r(()=>f(e,a,p))}),n}):``;r(()=>f(n,j,M))}),o(j,d(` `));let N=e(`rue:slot:anchor`);return o(j,N),t(()=>{let e=T.value===`preview`?u(()=>{let e=c(),n=h(`div`,e);o(e,n),g(n,`card bg-base-100 shadow`);let r=h(`div`,n);o(n,r),g(r,`card-body grid gap-6`);let a=h(`div`,r);o(r,a),s(a,`role`,`alert`),g(a,`alert alert-info`);let u=h(`span`,a);o(a,u),o(u,d(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let f=h(`section`,r);o(r,f),g(f,`space-y-3`);let m=h(`div`,f);o(f,m),g(m,`flex items-center justify-between gap-3`);let _=h(`h2`,m);o(m,_),g(_,`text-xl font-semibold`),o(_,d(`onClick`));let v=h(`span`,m);o(m,v),g(v,`badge badge-primary badge-lg`);let y=p(v);o(v,y),t(()=>{l(y,x.value)});let b=h(`button`,f);o(f,b),g(b,`btn btn-primary btn-sm`),i(b,`click`,E);let T=p(b);o(b,T),l(T,`onClick={handleClick}`);let A=h(`section`,r);o(r,A),g(A,`space-y-3`);let j=h(`div`,A);o(A,j),g(j,`flex items-center justify-between gap-3`);let M=h(`h2`,j);o(j,M),g(M,`text-xl font-semibold`),o(M,d(`onClick + stopPropagation + preventDefault`));let N=h(`span`,j);o(j,N),g(N,`badge badge-success badge-lg`);let P=p(N);o(N,P),t(()=>{l(P,S.value)});let F=h(`a`,A);o(A,F),g(F,`link link-primary`),s(F,`href`,`#noop`),i(F,`click`,D),o(F,d(`手写 stop / prevent`));let I=h(`section`,r);o(r,I),g(I,`space-y-3`);let L=h(`div`,I);o(I,L),g(L,`flex items-center justify-between gap-3`);let R=h(`h2`,L);o(L,R),g(R,`text-xl font-semibold`),o(R,d(`onKeyUp + Enter 判定`));let z=h(`span`,L);o(L,z),g(z,`badge badge-accent badge-lg`);let B=p(z);o(z,B),t(()=>{l(B,C.value)});let V=h(`input`,I);o(I,V),g(V,`input input-bordered w-full`),s(V,`placeholder`,`按 Enter`),i(V,`keyup`,O);let H=h(`section`,r);o(r,H),g(H,`space-y-3`);let U=h(`div`,H);o(H,U),g(U,`flex items-center justify-between gap-3`);let W=h(`h2`,U);o(U,W),g(W,`text-xl font-semibold`),o(W,d(`onClick + currentTarget / target 判定`));let G=h(`span`,U);o(U,G),g(G,`badge badge-info badge-lg`);let K=p(G);o(G,K),t(()=>{l(K,w.value)});let q=h(`div`,H);o(H,q),g(q,`rounded-box border border-base-300 p-4`),i(q,`click`,k);let J=h(`span`,q);o(q,J),o(J,d(`点击容器空白处触发`));let Y=h(`button`,q);return o(q,Y),g(Y,`btn btn-ghost btn-sm ml-3`),o(Y,d(`子元素按钮`)),e}):``;r(()=>f(e,j,N))}),n})}),a,_),a})};export{x as default};