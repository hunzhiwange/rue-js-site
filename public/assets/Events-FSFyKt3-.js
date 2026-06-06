import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./SidebarPlaygroundExample-KML-rOvA.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>n(()=>{let e=_(`ref:1:0`,()=>r(0)),t=_(`ref:1:1`,()=>r(0)),n=_(`ref:1:2`,()=>r(0)),i=_(`ref:1:3`,()=>r(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:i,activeTab:_(`ref:1:4`,()=>r(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(i.value+=1,console.info(`manual self`,i.value))}}}));return d(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),m(h(y,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`事件处理`));let _=e(`div`,n);o(n,_),p(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{T.value=`preview`}),o(y,u(`效果`));let A=e(`button`,_);o(_,A),p(A,`role`,`tab`),s(()=>{l(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),t(A,`click`,()=>{T.value=`code`}),o(A,u(`代码`));let j=e(`div`,n);o(n,j),l(j,`mt-4 grid gap-6 items-start`);let M=c(`rue:slot:anchor`);o(j,M),s(()=>{let t=T.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow`);let r=e(`div`,n);o(n,r),l(r,`card-body gap-3`);let d=e(`div`,r);o(r,d),p(d,`role`,`alert`),l(d,`alert alert-info alert-soft`);let f=e(`span`,d);o(d,f),o(f,u(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let g=c(`rue:component:anchor`);return o(r,g),s(()=>{let e=h(v,{lang:`tsx`,code:b});a(()=>m(e,r,g))}),t}):``;a(()=>m(t,j,M))}),o(j,u(` `));let N=c(`rue:slot:anchor`);return o(j,N),s(()=>{let n=T.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let a=e(`div`,r);o(r,a),l(a,`card-body grid gap-6`);let c=e(`div`,a);o(a,c),p(c,`role`,`alert`),l(c,`alert alert-info`);let d=e(`span`,c);o(c,d),o(d,u(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=e(`section`,a);o(a,m),l(m,`space-y-3`);let h=e(`div`,m);o(m,h),l(h,`flex items-center justify-between gap-3`);let _=e(`h2`,h);o(h,_),l(_,`text-xl font-semibold`),o(_,u(`onClick`));let v=e(`span`,h);o(h,v),l(v,`badge badge-primary badge-lg`);let y=g(v);o(v,y),s(()=>{f(y,x.value)});let b=e(`button`,m);o(m,b),l(b,`btn btn-primary btn-sm`),t(b,`click`,E),o(b,u(`onClick=`));let T=g(b);o(b,T),s(()=>{f(T,E)});let A=e(`section`,a);o(a,A),l(A,`space-y-3`);let j=e(`div`,A);o(A,j),l(j,`flex items-center justify-between gap-3`);let M=e(`h2`,j);o(j,M),l(M,`text-xl font-semibold`),o(M,u(`onClick + stopPropagation + preventDefault`));let N=e(`span`,j);o(j,N),l(N,`badge badge-success badge-lg`);let P=g(N);o(N,P),s(()=>{f(P,S.value)});let F=e(`a`,A);o(A,F),l(F,`link link-primary`),p(F,`href`,`#noop`),t(F,`click`,D),o(F,u(`手写 stop / prevent`));let I=e(`section`,a);o(a,I),l(I,`space-y-3`);let L=e(`div`,I);o(I,L),l(L,`flex items-center justify-between gap-3`);let R=e(`h2`,L);o(L,R),l(R,`text-xl font-semibold`),o(R,u(`onKeyUp + Enter 判定`));let z=e(`span`,L);o(L,z),l(z,`badge badge-accent badge-lg`);let B=g(z);o(z,B),s(()=>{f(B,C.value)});let V=e(`input`,I);o(I,V),l(V,`input input-bordered w-full`),p(V,`placeholder`,`按 Enter`),t(V,`keyup`,O);let H=e(`section`,a);o(a,H),l(H,`space-y-3`);let U=e(`div`,H);o(H,U),l(U,`flex items-center justify-between gap-3`);let W=e(`h2`,U);o(U,W),l(W,`text-xl font-semibold`),o(W,u(`onClick + currentTarget / target 判定`));let G=e(`span`,U);o(U,G),l(G,`badge badge-info badge-lg`);let K=g(G);o(G,K),s(()=>{f(K,w.value)});let q=e(`div`,H);o(H,q),l(q,`rounded-box border border-base-300 p-4`),t(q,`click`,k);let J=e(`span`,q);o(q,J),o(J,u(`点击容器空白处触发`));let Y=e(`button`,q);return o(q,Y),l(Y,`btn btn-ghost btn-sm ml-3`),o(Y,u(`子元素按钮`)),n}):``;a(()=>m(n,j,N))}),n})}),r,_),r})};export{x as default};