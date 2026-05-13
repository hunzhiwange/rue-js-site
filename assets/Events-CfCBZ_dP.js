import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,x=()=>{let{clickCount:x,stopPreventCount:S,enterCount:C,selfCount:w,activeTab:T,handleClick:E,handleStopPrevent:D,handleEnter:O,handleSelf:k}=_(`useSetup:0:0`,()=>l(()=>{let e=_(`ref:1:0`,()=>p(0)),t=_(`ref:1:1`,()=>p(0)),n=_(`ref:1:2`,()=>p(0)),r=_(`ref:1:3`,()=>p(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:_(`ref:1:4`,()=>p(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`事件处理`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);i(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{T.value=`preview`}),i(y,r(`效果`));let A=n(`button`);i(_,A),s(A,`role`,`tab`),u(()=>{t(A,String(`tab ${T.value===`code`?`tab-active`:``}`))}),f(A,`click`,()=>{T.value=`code`}),i(A,r(`代码`));let j=n(`div`);i(l,j),t(j,`mt-4 grid gap-6 items-start`);let M=a(`rue:slot:anchor`);i(j,M),u(()=>{let o=T.value===`code`?g(()=>{let o=e(),c=n(`div`);i(o,c),t(c,`card bg-base-100 shadow`);let l=n(`div`);i(c,l),t(l,`card-body gap-3`);let f=n(`div`);i(l,f),s(f,`role`,`alert`),t(f,`alert alert-info alert-soft`);let p=n(`span`);i(f,p),i(p,r(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let g=a(`rue:component:anchor`);return i(l,g),u(()=>{let e=h(v,{lang:`tsx`,code:b});m(()=>d(e,l,g))}),o}):``;m(()=>d(o,j,M))}),i(j,r(` `));let N=a(`rue:slot:anchor`);return i(j,N),u(()=>{let a=T.value===`preview`?g(()=>{let a=e(),l=n(`div`);i(a,l),t(l,`card bg-base-100 shadow`);let d=n(`div`);i(l,d),t(d,`card-body grid gap-6`);let p=n(`div`);i(d,p),s(p,`role`,`alert`),t(p,`alert alert-info`);let m=n(`span`);i(p,m),i(m,r(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let h=n(`section`);i(d,h),t(h,`space-y-3`);let g=n(`div`);i(h,g),t(g,`flex items-center justify-between gap-3`);let _=n(`h2`);i(g,_),t(_,`text-xl font-semibold`),i(_,r(`onClick`));let v=n(`span`);i(g,v),t(v,`badge badge-primary badge-lg`);let y=o(v);i(v,y),u(()=>{c(y,x.value)});let b=n(`button`);i(h,b),t(b,`btn btn-primary btn-sm`),f(b,`click`,E),i(b,r(`onClick=`));let T=o(b);i(b,T),u(()=>{c(T,E)});let A=n(`section`);i(d,A),t(A,`space-y-3`);let j=n(`div`);i(A,j),t(j,`flex items-center justify-between gap-3`);let M=n(`h2`);i(j,M),t(M,`text-xl font-semibold`),i(M,r(`onClick + stopPropagation + preventDefault`));let N=n(`span`);i(j,N),t(N,`badge badge-success badge-lg`);let P=o(N);i(N,P),u(()=>{c(P,S.value)});let F=n(`a`);i(A,F),t(F,`link link-primary`),s(F,`href`,`#noop`),f(F,`click`,D),i(F,r(`手写 stop / prevent`));let I=n(`section`);i(d,I),t(I,`space-y-3`);let L=n(`div`);i(I,L),t(L,`flex items-center justify-between gap-3`);let R=n(`h2`);i(L,R),t(R,`text-xl font-semibold`),i(R,r(`onKeyUp + Enter 判定`));let z=n(`span`);i(L,z),t(z,`badge badge-accent badge-lg`);let B=o(z);i(z,B),u(()=>{c(B,C.value)});let V=n(`input`);i(I,V),t(V,`input input-bordered w-full`),s(V,`placeholder`,`按 Enter`),f(V,`keyup`,O);let H=n(`section`);i(d,H),t(H,`space-y-3`);let U=n(`div`);i(H,U),t(U,`flex items-center justify-between gap-3`);let W=n(`h2`);i(U,W),t(W,`text-xl font-semibold`),i(W,r(`onClick + currentTarget / target 判定`));let G=n(`span`);i(U,G),t(G,`badge badge-info badge-lg`);let K=o(G);i(G,K),u(()=>{c(K,w.value)});let q=n(`div`);i(H,q),t(q,`rounded-box border border-base-300 p-4`),f(q,`click`,k);let J=n(`span`);i(q,J),i(J,r(`点击容器空白处触发`));let Y=n(`button`);return i(q,Y),t(Y,`btn btn-ghost btn-sm ml-3`),i(Y,r(`子元素按钮`)),a}):``;m(()=>d(a,j,N))}),l})}),l,p),l})};export{x as default};