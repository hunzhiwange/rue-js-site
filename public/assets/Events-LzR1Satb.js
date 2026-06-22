import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>d(()=>{let e=_(`ref:1:0`,()=>n(0)),t=_(`ref:1:1`,()=>n(0)),r=_(`ref:1:2`,()=>n(0)),i=_(`ref:1:3`,()=>n(0));return{clickCount:e,stopPreventCount:t,enterCount:r,selfCount:i,activeTab:_(`ref:1:4`,()=>n(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(r.value+=1,console.info(`manual enter`,r.value))},handleSelf:e=>{e.target===e.currentTarget&&(i.value+=1,console.info(`manual self`,i.value))}}}));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(y,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`事件处理`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let y=p(`button`,_);e(_,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${T.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{T.value=`preview`}),e(y,s(`效果`));let A=p(`button`,_);e(_,A),o(A,`role`,`tab`),t(()=>{f(A,`tab ${T.value===`code`?`tab-active`:``}`)}),r(A,`click`,()=>{T.value=`code`}),e(A,s(`代码`));let j=p(`div`,n);e(n,j),f(j,`mt-4 grid gap-6 items-start`);let M=g(`rue:slot:anchor`);e(j,M),t(()=>{let n=T.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow`);let i=p(`div`,r);e(r,i),f(i,`card-body gap-3`);let a=p(`div`,i);e(i,a),o(a,`role`,`alert`),f(a,`alert alert-info alert-soft`);let c=p(`span`,a);e(a,c),e(c,s(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let d=g(`rue:component:anchor`);return e(i,d),t(()=>{let e=m(v,{lang:`tsx`,code:b});h(()=>u(e,i,d))}),n}):``;h(()=>u(n,j,M))}),e(j,s(` `));let N=g(`rue:slot:anchor`);return e(j,N),t(()=>{let n=T.value===`preview`?c(()=>{let n=l(),c=p(`div`,n);e(n,c),f(c,`card bg-base-100 shadow`);let u=p(`div`,c);e(c,u),f(u,`card-body grid gap-6`);let d=p(`div`,u);e(u,d),o(d,`role`,`alert`),f(d,`alert alert-info`);let m=p(`span`,d);e(d,m),e(m,s(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let h=p(`section`,u);e(u,h),f(h,`space-y-3`);let g=p(`div`,h);e(h,g),f(g,`flex items-center justify-between gap-3`);let _=p(`h2`,g);e(g,_),f(_,`text-xl font-semibold`),e(_,s(`onClick`));let v=p(`span`,g);e(g,v),f(v,`badge badge-primary badge-lg`);let y=i(v);e(v,y),t(()=>{a(y,x.value)});let b=p(`button`,h);e(h,b),f(b,`btn btn-primary btn-sm`),r(b,`click`,E);let T=i(b);e(b,T),a(T,`onClick={handleClick}`);let A=p(`section`,u);e(u,A),f(A,`space-y-3`);let j=p(`div`,A);e(A,j),f(j,`flex items-center justify-between gap-3`);let M=p(`h2`,j);e(j,M),f(M,`text-xl font-semibold`),e(M,s(`onClick + stopPropagation + preventDefault`));let N=p(`span`,j);e(j,N),f(N,`badge badge-success badge-lg`);let P=i(N);e(N,P),t(()=>{a(P,S.value)});let F=p(`a`,A);e(A,F),f(F,`link link-primary`),o(F,`href`,`#noop`),r(F,`click`,D),e(F,s(`手写 stop / prevent`));let I=p(`section`,u);e(u,I),f(I,`space-y-3`);let L=p(`div`,I);e(I,L),f(L,`flex items-center justify-between gap-3`);let R=p(`h2`,L);e(L,R),f(R,`text-xl font-semibold`),e(R,s(`onKeyUp + Enter 判定`));let z=p(`span`,L);e(L,z),f(z,`badge badge-accent badge-lg`);let B=i(z);e(z,B),t(()=>{a(B,C.value)});let V=p(`input`,I);e(I,V),f(V,`input input-bordered w-full`),o(V,`placeholder`,`按 Enter`),r(V,`keyup`,O);let H=p(`section`,u);e(u,H),f(H,`space-y-3`);let U=p(`div`,H);e(H,U),f(U,`flex items-center justify-between gap-3`);let W=p(`h2`,U);e(U,W),f(W,`text-xl font-semibold`),e(W,s(`onClick + currentTarget / target 判定`));let G=p(`span`,U);e(U,G),f(G,`badge badge-info badge-lg`);let K=i(G);e(G,K),t(()=>{a(K,w.value)});let q=p(`div`,H);e(H,q),f(q,`rounded-box border border-base-300 p-4`),r(q,`click`,k);let J=p(`span`,q);e(q,J),e(J,s(`点击容器空白处触发`));let Y=p(`button`,q);return e(q,Y),f(Y,`btn btn-ghost btn-sm ml-3`),e(Y,s(`子元素按钮`)),n}):``;h(()=>u(n,j,N))}),n})}),d,_),d})};export{x as default};