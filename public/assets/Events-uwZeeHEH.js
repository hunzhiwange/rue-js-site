import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-EUvELKQT.js";import{a as _}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as v}from"./Code-BdVklNCb.js";import{t as y}from"./SidebarPlaygroundExample-1AA0CIwm.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`ref:1:0`,()=>c(0)),t=_(`ref:1:1`,()=>c(0)),n=_(`ref:1:2`,()=>c(0)),r=_(`ref:1:3`,()=>c(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>c(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(y,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`事件处理`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=a(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),o(y,`click`,()=>{T.value=`preview`}),r(y,f(`效果`));let A=a(`button`,_);r(_,A),e(A,`role`,`tab`),u(()=>{h(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),o(A,`click`,()=>{T.value=`code`}),r(A,f(`代码`));let j=a(`div`,t);r(t,j),h(j,`mt-4 grid gap-6 items-start`);let M=s(`rue:slot:anchor`);r(j,M),u(()=>{let t=T.value===`code`?l(()=>{let t=n(),i=a(`div`,t);r(t,i),h(i,`card bg-base-100 shadow`);let o=a(`div`,i);r(i,o),h(o,`card-body gap-3`);let c=a(`div`,o);r(o,c),e(c,`role`,`alert`),h(c,`alert alert-info alert-soft`);let l=a(`span`,c);r(c,l),r(l,f(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let p=s(`rue:component:anchor`);return r(o,p),u(()=>{let e=m(v,{lang:`tsx`,code:b});g(()=>d(e,o,p))}),t}):``;g(()=>d(t,j,M))}),r(j,f(` `));let N=s(`rue:slot:anchor`);return r(j,N),u(()=>{let t=T.value===`preview`?l(()=>{let t=n(),s=a(`div`,t);r(t,s),h(s,`card bg-base-100 shadow`);let c=a(`div`,s);r(s,c),h(c,`card-body grid gap-6`);let l=a(`div`,c);r(c,l),e(l,`role`,`alert`),h(l,`alert alert-info`);let d=a(`span`,l);r(l,d),r(d,f(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=a(`section`,c);r(c,m),h(m,`space-y-3`);let g=a(`div`,m);r(m,g),h(g,`flex items-center justify-between gap-3`);let _=a(`h2`,g);r(g,_),h(_,`text-xl font-semibold`),r(_,f(`onClick`));let v=a(`span`,g);r(g,v),h(v,`badge badge-primary badge-lg`);let y=i(v);r(v,y),u(()=>{p(y,x.value)});let b=a(`button`,m);r(m,b),h(b,`btn btn-primary btn-sm`),o(b,`click`,E),r(b,f(`onClick=`));let T=i(b);r(b,T),u(()=>{p(T,E)});let A=a(`section`,c);r(c,A),h(A,`space-y-3`);let j=a(`div`,A);r(A,j),h(j,`flex items-center justify-between gap-3`);let M=a(`h2`,j);r(j,M),h(M,`text-xl font-semibold`),r(M,f(`onClick + stopPropagation + preventDefault`));let N=a(`span`,j);r(j,N),h(N,`badge badge-success badge-lg`);let P=i(N);r(N,P),u(()=>{p(P,S.value)});let F=a(`a`,A);r(A,F),h(F,`link link-primary`),e(F,`href`,`#noop`),o(F,`click`,D),r(F,f(`手写 stop / prevent`));let I=a(`section`,c);r(c,I),h(I,`space-y-3`);let L=a(`div`,I);r(I,L),h(L,`flex items-center justify-between gap-3`);let R=a(`h2`,L);r(L,R),h(R,`text-xl font-semibold`),r(R,f(`onKeyUp + Enter 判定`));let z=a(`span`,L);r(L,z),h(z,`badge badge-accent badge-lg`);let B=i(z);r(z,B),u(()=>{p(B,C.value)});let V=a(`input`,I);r(I,V),h(V,`input input-bordered w-full`),e(V,`placeholder`,`按 Enter`),o(V,`keyup`,O);let H=a(`section`,c);r(c,H),h(H,`space-y-3`);let U=a(`div`,H);r(H,U),h(U,`flex items-center justify-between gap-3`);let W=a(`h2`,U);r(U,W),h(W,`text-xl font-semibold`),r(W,f(`onClick + currentTarget / target 判定`));let G=a(`span`,U);r(U,G),h(G,`badge badge-info badge-lg`);let K=i(G);r(G,K),u(()=>{p(K,w.value)});let q=a(`div`,H);r(H,q),h(q,`rounded-box border border-base-300 p-4`),o(q,`click`,k);let J=a(`span`,q);r(q,J),r(J,f(`点击容器空白处触发`));let Y=a(`button`,q);return r(q,Y),h(Y,`btn btn-ghost btn-sm ml-3`),r(Y,f(`子元素按钮`)),t}):``;g(()=>d(t,j,N))}),t})}),c,_),c})};export{x as default};