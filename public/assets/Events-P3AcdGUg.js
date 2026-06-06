import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>m(()=>{let e=_(`ref:1:0`,()=>u(0)),t=_(`ref:1:1`,()=>u(0)),n=_(`ref:1:2`,()=>u(0)),r=_(`ref:1:3`,()=>u(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>u(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`事件处理`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=s(`button`,_);t(_,y),c(y,`role`,`tab`),n(()=>{e(y,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{T.value=`preview`}),t(y,r(`效果`));let A=s(`button`,_);t(_,A),c(A,`role`,`tab`),n(()=>{e(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),g(A,`click`,()=>{T.value=`code`}),t(A,r(`代码`));let j=s(`div`,u);t(u,j),e(j,`mt-4 grid gap-6 items-start`);let M=i(`rue:slot:anchor`);t(j,M),n(()=>{let a=T.value===`code`?d(()=>{let a=o(),l=s(`div`,a);t(a,l),e(l,`card bg-base-100 shadow`);let u=s(`div`,l);t(l,u),e(u,`card-body gap-3`);let d=s(`div`,u);t(u,d),c(d,`role`,`alert`),e(d,`alert alert-info alert-soft`);let m=s(`span`,d);t(d,m),t(m,r(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let g=i(`rue:component:anchor`);return t(u,g),n(()=>{let e=p(v,{lang:`tsx`,code:b});h(()=>f(e,u,g))}),a}):``;h(()=>f(a,j,M))}),t(j,r(` `));let N=i(`rue:slot:anchor`);return t(j,N),n(()=>{let i=T.value===`preview`?d(()=>{let i=o(),u=s(`div`,i);t(i,u),e(u,`card bg-base-100 shadow`);let d=s(`div`,u);t(u,d),e(d,`card-body grid gap-6`);let f=s(`div`,d);t(d,f),c(f,`role`,`alert`),e(f,`alert alert-info`);let p=s(`span`,f);t(f,p),t(p,r(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let m=s(`section`,d);t(d,m),e(m,`space-y-3`);let h=s(`div`,m);t(m,h),e(h,`flex items-center justify-between gap-3`);let _=s(`h2`,h);t(h,_),e(_,`text-xl font-semibold`),t(_,r(`onClick`));let v=s(`span`,h);t(h,v),e(v,`badge badge-primary badge-lg`);let y=a(v);t(v,y),n(()=>{l(y,x.value)});let b=s(`button`,m);t(m,b),e(b,`btn btn-primary btn-sm`),g(b,`click`,E),t(b,r(`onClick=`));let T=a(b);t(b,T),n(()=>{l(T,E)});let A=s(`section`,d);t(d,A),e(A,`space-y-3`);let j=s(`div`,A);t(A,j),e(j,`flex items-center justify-between gap-3`);let M=s(`h2`,j);t(j,M),e(M,`text-xl font-semibold`),t(M,r(`onClick + stopPropagation + preventDefault`));let N=s(`span`,j);t(j,N),e(N,`badge badge-success badge-lg`);let P=a(N);t(N,P),n(()=>{l(P,S.value)});let F=s(`a`,A);t(A,F),e(F,`link link-primary`),c(F,`href`,`#noop`),g(F,`click`,D),t(F,r(`手写 stop / prevent`));let I=s(`section`,d);t(d,I),e(I,`space-y-3`);let L=s(`div`,I);t(I,L),e(L,`flex items-center justify-between gap-3`);let R=s(`h2`,L);t(L,R),e(R,`text-xl font-semibold`),t(R,r(`onKeyUp + Enter 判定`));let z=s(`span`,L);t(L,z),e(z,`badge badge-accent badge-lg`);let B=a(z);t(z,B),n(()=>{l(B,C.value)});let V=s(`input`,I);t(I,V),e(V,`input input-bordered w-full`),c(V,`placeholder`,`按 Enter`),g(V,`keyup`,O);let H=s(`section`,d);t(d,H),e(H,`space-y-3`);let U=s(`div`,H);t(H,U),e(U,`flex items-center justify-between gap-3`);let W=s(`h2`,U);t(U,W),e(W,`text-xl font-semibold`),t(W,r(`onClick + currentTarget / target 判定`));let G=s(`span`,U);t(U,G),e(G,`badge badge-info badge-lg`);let K=a(G);t(G,K),n(()=>{l(K,w.value)});let q=s(`div`,H);t(H,q),e(q,`rounded-box border border-base-300 p-4`),g(q,`click`,k);let J=s(`span`,q);t(q,J),t(J,r(`点击容器空白处触发`));let Y=s(`button`,q);return t(q,Y),e(Y,`btn btn-ghost btn-sm ml-3`),t(Y,r(`子元素按钮`)),i}):``;h(()=>f(i,j,N))}),u})}),m,_),m})};export{x as default};