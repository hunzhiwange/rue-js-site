import{Bt as e,Dn as t,Et as n,H as r,K as i,L as a,Lt as o,Mt as s,V as c,_n as l,bn as u,fn as d,gn as f,hn as p,nt as m,ot as h,q as g,wn as _,x as v,z as y}from"./rue-runtime-CwEGJ854.js";import{t as b}from"./Code-B3jCYMAr.js";import{r as x}from"./SidebarPlaygroundExample-EGR0CyDT.js";var S=l(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">事件处理</h1>`),C=l(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),w=l(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),T=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,E=()=>{let l=e(0),E=e(0),D=e(0),O=e(0),k=e(`code`),A=e=>{l.value+=1,console.info(`onClick ->`,e.type,l.value)},j=e=>{e.stopPropagation(),e.preventDefault(),E.value+=1,console.info(`manual stop + prevent`,E.value)},M=e=>{e.key===`Enter`&&(D.value+=1,console.info(`manual enter`,D.value))},N=e=>{e.target===e.currentTarget&&(O.value+=1,console.info(`manual self`,O.value))};return s(()=>g(r(x,()=>({children:[(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m();return t.appendChild(S().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,r)=>v(e,r,()=>n(Object.assign(e=>{let t=m(),n=C().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],s=r.childNodes[1];t.appendChild(n),h(i,`role`,`tab`),_(()=>{a(i,`tab ${k.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{k.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),o(()=>i.removeEventListener(`click`,c)),h(s,`role`,`tab`),_(()=>{a(s,`tab ${k.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{k.value=`code`};typeof t==`function`&&t(e)};return s.addEventListener(`click`,l),o(()=>s.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,r,a)=>v(e,a,()=>n(Object.assign(e=>{let r=m(),a=w().content.cloneNode(!0),o=a.firstChild,s=o.childNodes[0],h=s.parentNode,g=o.childNodes[1],_=g.parentNode;return r.appendChild(a),c(h,s,()=>{let e=k.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=p(`div`,e);t.className=`card bg-base-100 shadow`;let n=p(`div`,t);d(t,n),n.className=`card-body gap-3`;let r=p(`div`,n);d(n,r),r.setAttribute(`role`,`alert`),r.className=`alert alert-info alert-soft`;let a=p(`span`,r);return d(r,a),d(a,f(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`)),i(n,b,()=>({lang:`tsx`,code:T})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),c(_,g,()=>{let e=k.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let n=p(`div`,e);n.className=`card bg-base-100 shadow`;let r=p(`div`,n);d(n,r),r.className=`card-body grid gap-6`;let i=p(`div`,r);d(r,i),i.setAttribute(`role`,`alert`),i.className=`alert alert-info`;let a=p(`span`,i);d(i,a),d(a,f(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let o=p(`section`,r);d(r,o),o.className=`space-y-3`;let s=p(`div`,o);d(o,s),s.className=`flex items-center justify-between gap-3`;let c=p(`h2`,s);d(s,c),c.className=`text-xl font-semibold`,d(c,f(`onClick`));let m=p(`span`,s);d(s,m),m.className=`badge badge-primary badge-lg`;let h=f(``);d(m,h),u(h,()=>l.value);let g=p(`button`,o);d(o,g),g.className=`btn btn-primary btn-sm`;let _=e=>{let t=A;typeof t==`function`&&t(e)};g.addEventListener(`click`,_),t(()=>g.removeEventListener(`click`,_)),d(g,f(`onClick={handleClick}`));let v=p(`section`,r);d(r,v),v.className=`space-y-3`;let y=p(`div`,v);d(v,y),y.className=`flex items-center justify-between gap-3`;let b=p(`h2`,y);d(y,b),b.className=`text-xl font-semibold`,d(b,f(`onClick + stopPropagation + preventDefault`));let x=p(`span`,y);d(y,x),x.className=`badge badge-success badge-lg`;let S=f(``);d(x,S),u(S,()=>E.value);let C=p(`a`,v);d(v,C),C.className=`link link-primary`,C.setAttribute(`href`,`#noop`);let w=e=>{let t=j;typeof t==`function`&&t(e)};C.addEventListener(`click`,w),t(()=>C.removeEventListener(`click`,w)),d(C,f(`手写 stop / prevent`));let T=p(`section`,r);d(r,T),T.className=`space-y-3`;let k=p(`div`,T);d(T,k),k.className=`flex items-center justify-between gap-3`;let P=p(`h2`,k);d(k,P),P.className=`text-xl font-semibold`,d(P,f(`onKeyUp + Enter 判定`));let F=p(`span`,k);d(k,F),F.className=`badge badge-accent badge-lg`;let I=f(``);d(F,I),u(I,()=>D.value);let L=p(`input`,T);d(T,L),L.className=`input input-bordered w-full`,L.setAttribute(`placeholder`,`按 Enter`);let R=e=>{let t=M;typeof t==`function`&&t(e)};L.addEventListener(`keyup`,R),t(()=>L.removeEventListener(`keyup`,R));let z=p(`section`,r);d(r,z),z.className=`space-y-3`;let B=p(`div`,z);d(z,B),B.className=`flex items-center justify-between gap-3`;let V=p(`h2`,B);d(B,V),V.className=`text-xl font-semibold`,d(V,f(`onClick + currentTarget / target 判定`));let H=p(`span`,B);d(B,H),H.className=`badge badge-info badge-lg`;let U=f(``);d(H,U),u(U,()=>O.value);let W=p(`div`,z);d(z,W),W.className=`rounded-box border border-base-300 p-4`;let G=e=>{let t=N;typeof t==`function`&&t(e)};W.addEventListener(`click`,G),t(()=>W.removeEventListener(`click`,G));let K=p(`span`,W);d(W,K),d(K,f(`点击容器空白处触发`));let q=p(`button`,W);return d(W,q),q.className=`btn btn-ghost btn-sm ml-3`,d(q,f(`子元素按钮`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=m();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))]})),e=>y(()=>{})))};export{E as default};