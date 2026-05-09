import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as _}from"./Code-C8wy38VS.js";import{t as v}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var y=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,b=()=>{let{clickCount:b,stopPreventCount:x,enterCount:S,selfCount:C,activeTab:w,handleClick:T,handleStopPrevent:E,handleEnter:D,handleSelf:O}=g(`useSetup:0:0`,()=>h(()=>{let e=g(`ref:1:0`,()=>f(0)),t=g(`ref:1:1`,()=>f(0)),n=g(`ref:1:2`,()=>f(0)),r=g(`ref:1:3`,()=>f(0));return{clickCount:e,stopPreventCount:t,enterCount:n,selfCount:r,activeTab:g(`ref:1:4`,()=>f(`code`)),handleClick:t=>{e.value+=1,console.info(`onClick ->`,t.type,e.value)},handleStopPrevent:e=>{e.stopPropagation(),e.preventDefault(),t.value+=1,console.info(`manual stop + prevent`,t.value)},handleEnter:e=>{e.key===`Enter`&&(n.value+=1,console.info(`manual enter`,n.value))},handleSelf:e=>{e.target===e.currentTarget&&(r.value+=1,console.info(`manual self`,r.value))}}}));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`事件处理`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{s(v,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{w.value=`preview`}),u(v,r(`效果`));let k=t(`button`);u(g,k),n(k,`role`,`tab`),d(()=>{s(k,String(`tab ${w.value===`code`?`tab-active`:``}`))}),e(k,`click`,()=>{w.value=`code`}),u(k,r(`代码`));let A=t(`div`);u(f,A),s(A,`mt-4 grid gap-6 items-start`);let j=a(`rue:slot:anchor`);u(A,j),d(()=>{l(w.value===`code`?m(()=>{let e=o(),i=t(`div`);u(e,i),s(i,`card bg-base-100 shadow`);let c=t(`div`);u(i,c),s(c,`card-body gap-3`);let f=t(`div`);u(c,f),n(f,`role`,`alert`),s(f,`alert alert-info alert-soft`);let m=t(`span`);u(f,m),u(m,r(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`));let h=a(`rue:component:anchor`);return u(c,h),d(()=>{l(p(_,{lang:`tsx`,code:y}),c,h)}),e}):``,A,j)}),u(A,r(` `));let M=a(`rue:slot:anchor`);return u(A,M),d(()=>{l(w.value===`preview`?m(()=>{let a=o(),l=t(`div`);u(a,l),s(l,`card bg-base-100 shadow`);let f=t(`div`);u(l,f),s(f,`card-body grid gap-6`);let p=t(`div`);u(f,p),n(p,`role`,`alert`),s(p,`alert alert-info`);let m=t(`span`);u(p,m),u(m,r(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let h=t(`section`);u(f,h),s(h,`space-y-3`);let g=t(`div`);u(h,g),s(g,`flex items-center justify-between gap-3`);let _=t(`h2`);u(g,_),s(_,`text-xl font-semibold`),u(_,r(`onClick`));let v=t(`span`);u(g,v),s(v,`badge badge-primary badge-lg`);let y=i(v);u(v,y),d(()=>{c(y,b.value)});let w=t(`button`);u(h,w),s(w,`btn btn-primary btn-sm`),e(w,`click`,T),u(w,r(`onClick=`));let k=i(w);u(w,k),d(()=>{c(k,T)});let A=t(`section`);u(f,A),s(A,`space-y-3`);let j=t(`div`);u(A,j),s(j,`flex items-center justify-between gap-3`);let M=t(`h2`);u(j,M),s(M,`text-xl font-semibold`),u(M,r(`onClick + stopPropagation + preventDefault`));let N=t(`span`);u(j,N),s(N,`badge badge-success badge-lg`);let P=i(N);u(N,P),d(()=>{c(P,x.value)});let F=t(`a`);u(A,F),s(F,`link link-primary`),n(F,`href`,`#noop`),e(F,`click`,E),u(F,r(`手写 stop / prevent`));let I=t(`section`);u(f,I),s(I,`space-y-3`);let L=t(`div`);u(I,L),s(L,`flex items-center justify-between gap-3`);let R=t(`h2`);u(L,R),s(R,`text-xl font-semibold`),u(R,r(`onKeyUp + Enter 判定`));let z=t(`span`);u(L,z),s(z,`badge badge-accent badge-lg`);let B=i(z);u(z,B),d(()=>{c(B,S.value)});let V=t(`input`);u(I,V),s(V,`input input-bordered w-full`),n(V,`placeholder`,`按 Enter`),e(V,`keyup`,D);let H=t(`section`);u(f,H),s(H,`space-y-3`);let U=t(`div`);u(H,U),s(U,`flex items-center justify-between gap-3`);let W=t(`h2`);u(U,W),s(W,`text-xl font-semibold`),u(W,r(`onClick + currentTarget / target 判定`));let G=t(`span`);u(U,G),s(G,`badge badge-info badge-lg`);let K=i(G);u(G,K),d(()=>{c(K,C.value)});let q=t(`div`);u(H,q),s(q,`rounded-box border border-base-300 p-4`),e(q,`click`,O);let J=t(`span`);u(q,J),u(J,r(`点击容器空白处触发`));let Y=t(`button`);return u(q,Y),s(Y,`btn btn-ghost btn-sm ml-3`),u(Y,r(`子元素按钮`)),a}):``,A,M)}),f})}),f,h),f})};export{b as default};