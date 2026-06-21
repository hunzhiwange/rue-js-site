import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>t(0)),n=_(`ref:1:1`,()=>t(0)),r=_(`ref:1:2`,()=>t(0)),i=_(`ref:1:3`,()=>t(0));return{clickCount:e,stopPreventCount:n,enterCount:r,selfCount:i,activeTab:_(`ref:1:4`,()=>t(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),n.value+=1,console.info(`manual stop + prevent`,n.value)},handleEnter:e=>{e.key===`Enter`&&(r.value+=1,console.info(`manual enter`,r.value))},handleSelf:e=>{e.target===e.currentTarget&&(i.value+=1,console.info(`manual self`,i.value))}}}));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(y,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`事件处理`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let y=u(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{i(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{T.value=`preview`}),n(y,f(`效果`));let A=u(`button`,_);n(_,A),l(A,`role`,`tab`),g(()=>{i(A,`tab ${T.value===`code`?`tab-active`:``}`)}),r(A,`click`,()=>{T.value=`code`}),n(A,f(`代码`));let j=u(`div`,t);n(t,j),i(j,`mt-4 grid gap-6 items-start`);let M=a(`rue:slot:anchor`);n(j,M),g(()=>{let t=T.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow`);let o=u(`div`,r);n(r,o),i(o,`card-body gap-3`);let s=u(`div`,o);n(o,s),l(s,`role`,`alert`),i(s,`alert alert-info alert-soft`);let c=u(`span`,s);n(s,c),n(c,f(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let h=a(`rue:component:anchor`);return n(o,h),g(()=>{let t=p(v,{lang:`tsx`,code:b});e(()=>d(t,o,h))}),t}):``;e(()=>d(t,j,M))}),n(j,f(` `));let N=a(`rue:slot:anchor`);return n(j,N),g(()=>{let t=T.value===`preview`?c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`card bg-base-100 shadow`);let a=u(`div`,t);n(t,a),i(a,`card-body grid gap-6`);let o=u(`div`,a);n(a,o),l(o,`role`,`alert`),i(o,`alert alert-info`);let c=u(`span`,o);n(o,c),n(c,f(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let d=u(`section`,a);n(a,d),i(d,`space-y-3`);let p=u(`div`,d);n(d,p),i(p,`flex items-center justify-between gap-3`);let _=u(`h2`,p);n(p,_),i(_,`text-xl font-semibold`),n(_,f(`onClick`));let v=u(`span`,p);n(p,v),i(v,`badge badge-primary badge-lg`);let y=s(v);n(v,y),g(()=>{h(y,x.value)});let b=u(`button`,d);n(d,b),i(b,`btn btn-primary btn-sm`),r(b,`click`,E);let T=s(b);n(b,T),h(T,`onClick={handleClick}`);let A=u(`section`,a);n(a,A),i(A,`space-y-3`);let j=u(`div`,A);n(A,j),i(j,`flex items-center justify-between gap-3`);let M=u(`h2`,j);n(j,M),i(M,`text-xl font-semibold`),n(M,f(`onClick + stopPropagation + preventDefault`));let N=u(`span`,j);n(j,N),i(N,`badge badge-success badge-lg`);let P=s(N);n(N,P),g(()=>{h(P,S.value)});let F=u(`a`,A);n(A,F),i(F,`link link-primary`),l(F,`href`,`#noop`),r(F,`click`,D),n(F,f(`手写 stop / prevent`));let I=u(`section`,a);n(a,I),i(I,`space-y-3`);let L=u(`div`,I);n(I,L),i(L,`flex items-center justify-between gap-3`);let R=u(`h2`,L);n(L,R),i(R,`text-xl font-semibold`),n(R,f(`onKeyUp + Enter 判定`));let z=u(`span`,L);n(L,z),i(z,`badge badge-accent badge-lg`);let B=s(z);n(z,B),g(()=>{h(B,C.value)});let V=u(`input`,I);n(I,V),i(V,`input input-bordered w-full`),l(V,`placeholder`,`按 Enter`),r(V,`keyup`,O);let H=u(`section`,a);n(a,H),i(H,`space-y-3`);let U=u(`div`,H);n(H,U),i(U,`flex items-center justify-between gap-3`);let W=u(`h2`,U);n(U,W),i(W,`text-xl font-semibold`),n(W,f(`onClick + currentTarget / target 判定`));let G=u(`span`,U);n(U,G),i(G,`badge badge-info badge-lg`);let K=s(G);n(G,K),g(()=>{h(K,w.value)});let q=u(`div`,H);n(H,q),i(q,`rounded-box border border-base-300 p-4`),r(q,`click`,k);let J=u(`span`,q);n(q,J),n(J,f(`点击容器空白处触发`));let Y=u(`button`,q);return n(q,Y),i(Y,`btn btn-ghost btn-sm ml-3`),n(Y,f(`子元素按钮`)),e}):``;e(()=>d(t,j,N))}),t})}),o,_),o})};export{x as default};