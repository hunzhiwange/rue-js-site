import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`ref:1:0`,()=>l(0)),t=_(`ref:1:1`,()=>l(0)),n=_(`ref:1:2`,()=>l(0)),r=_(`ref:1:3`,()=>l(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>l(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(y,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`事件处理`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let y=u(`button`,_);d(_,y),t(y,`role`,`tab`),f(()=>{r(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),c(y,`click`,()=>{T.value=`preview`}),d(y,s(`效果`));let A=u(`button`,_);d(_,A),t(A,`role`,`tab`),f(()=>{r(A,`tab ${T.value===`code`?`tab-active`:``}`)}),c(A,`click`,()=>{T.value=`code`}),d(A,s(`代码`));let j=u(`div`,e);d(e,j),r(j,`mt-4 grid gap-6 items-start`);let M=i(`rue:slot:anchor`);d(j,M),f(()=>{let e=T.value===`code`?m(()=>{let e=a(),n=u(`div`,e);d(e,n),r(n,`card bg-base-100 shadow`);let o=u(`div`,n);d(n,o),r(o,`card-body gap-3`);let c=u(`div`,o);d(o,c),t(c,`role`,`alert`),r(c,`alert alert-info alert-soft`);let l=u(`span`,c);d(c,l),d(l,s(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let m=i(`rue:component:anchor`);return d(o,m),f(()=>{let e=g(v,{lang:`tsx`,code:b});p(()=>h(e,o,m))}),e}):``;p(()=>h(e,j,M))}),d(j,s(` `));let N=i(`rue:slot:anchor`);return d(j,N),f(()=>{let e=T.value===`preview`?m(()=>{let e=a(),i=u(`div`,e);d(e,i),r(i,`card bg-base-100 shadow`);let l=u(`div`,i);d(i,l),r(l,`card-body grid gap-6`);let p=u(`div`,l);d(l,p),t(p,`role`,`alert`),r(p,`alert alert-info`);let m=u(`span`,p);d(p,m),d(m,s(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let h=u(`section`,l);d(l,h),r(h,`space-y-3`);let g=u(`div`,h);d(h,g),r(g,`flex items-center justify-between gap-3`);let _=u(`h2`,g);d(g,_),r(_,`text-xl font-semibold`),d(_,s(`onClick`));let v=u(`span`,g);d(g,v),r(v,`badge badge-primary badge-lg`);let y=o(v);d(v,y),f(()=>{n(y,x.value)});let b=u(`button`,h);d(h,b),r(b,`btn btn-primary btn-sm`),c(b,`click`,E);let T=o(b);d(b,T),n(T,`onClick={handleClick}`);let A=u(`section`,l);d(l,A),r(A,`space-y-3`);let j=u(`div`,A);d(A,j),r(j,`flex items-center justify-between gap-3`);let M=u(`h2`,j);d(j,M),r(M,`text-xl font-semibold`),d(M,s(`onClick + stopPropagation + preventDefault`));let N=u(`span`,j);d(j,N),r(N,`badge badge-success badge-lg`);let P=o(N);d(N,P),f(()=>{n(P,S.value)});let F=u(`a`,A);d(A,F),r(F,`link link-primary`),t(F,`href`,`#noop`),c(F,`click`,D),d(F,s(`手写 stop / prevent`));let I=u(`section`,l);d(l,I),r(I,`space-y-3`);let L=u(`div`,I);d(I,L),r(L,`flex items-center justify-between gap-3`);let R=u(`h2`,L);d(L,R),r(R,`text-xl font-semibold`),d(R,s(`onKeyUp + Enter 判定`));let z=u(`span`,L);d(L,z),r(z,`badge badge-accent badge-lg`);let B=o(z);d(z,B),f(()=>{n(B,C.value)});let V=u(`input`,I);d(I,V),r(V,`input input-bordered w-full`),t(V,`placeholder`,`按 Enter`),c(V,`keyup`,O);let H=u(`section`,l);d(l,H),r(H,`space-y-3`);let U=u(`div`,H);d(H,U),r(U,`flex items-center justify-between gap-3`);let W=u(`h2`,U);d(U,W),r(W,`text-xl font-semibold`),d(W,s(`onClick + currentTarget / target 判定`));let G=u(`span`,U);d(U,G),r(G,`badge badge-info badge-lg`);let K=o(G);d(G,K),f(()=>{n(K,w.value)});let q=u(`div`,H);d(H,q),r(q,`rounded-box border border-base-300 p-4`),c(q,`click`,k);let J=u(`span`,q);d(q,J),d(J,s(`点击容器空白处触发`));let Y=u(`button`,q);return d(q,Y),r(Y,`btn btn-ghost btn-sm ml-3`),d(Y,s(`子元素按钮`)),e}):``;p(()=>h(e,j,N))}),e})}),l,_),l})};export{x as default};