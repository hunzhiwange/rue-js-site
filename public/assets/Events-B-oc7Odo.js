import{Dn as e,E as t,Q as n,Qt as r,Vt as i,_n as a,_t as o,ct as s,et as c,gn as l,nt as u,pn as d,qt as f,rt as p,st as m,tn as h,vn as g,wn as _,xn as v,xt as y}from"./rue-runtime-HIMg8Lz8.js";import{t as b}from"./Code-DpH7u0gk.js";import{r as x}from"./SidebarPlaygroundExample-BCPRe0hA.js";var S=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">事件处理</h1>`),C=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),w=g(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),T=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,E=()=>{let g=h(0),E=h(0),D=h(0),O=h(0),k=h(`code`),A=e=>{g.value+=1,console.info(`onClick ->`,e.type,g.value)},j=e=>{e.stopPropagation(),e.preventDefault(),E.value+=1,console.info(`manual stop + prevent`,E.value)},M=e=>{e.key===`Enter`&&(D.value+=1,console.info(`manual enter`,D.value))},N=e=>{e.target===e.currentTarget&&(O.value+=1,console.info(`manual self`,O.value))};return f(()=>s(p(x,()=>({children:[(e,n,r)=>t(e,r,()=>i(Object.assign(e=>{let t=o();return t.appendChild(S().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,a,s)=>t(e,s,()=>i(Object.assign(e=>{let t=o(),i=C().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],c=a.childNodes[1];t.appendChild(i),y(s,`role`,`tab`),_(()=>{n(s,`tab ${k.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{k.value=`preview`};typeof t==`function`&&t(e)};s.addEventListener(`click`,l),r(()=>s.removeEventListener(`click`,l)),y(c,`role`,`tab`),_(()=>{n(c,`tab ${k.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{k.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),r(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r,s)=>t(n,s,()=>i(Object.assign(t=>{let n=o(),r=w().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[0],f=c.parentNode,p=s.childNodes[1],h=p.parentNode;return n.appendChild(r),u(f,c,()=>{let e=k.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=l(`div`,e);t.className=`card bg-base-100 shadow`;let n=l(`div`,t);d(t,n),n.className=`card-body gap-3`;let r=l(`div`,n);d(n,r),r.setAttribute(`role`,`alert`),r.className=`alert alert-info alert-soft`;let i=l(`span`,r);return d(r,i),d(i,a(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`)),m(n,b,()=>({lang:`tsx`,code:T})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=a(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),u(h,p,()=>{let t=k.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let n=l(`div`,t);n.className=`card bg-base-100 shadow`;let r=l(`div`,n);d(n,r),r.className=`card-body grid gap-6`;let i=l(`div`,r);d(r,i),i.setAttribute(`role`,`alert`),i.className=`alert alert-info`;let o=l(`span`,i);d(i,o),d(o,a(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let s=l(`section`,r);d(r,s),s.className=`space-y-3`;let c=l(`div`,s);d(s,c),c.className=`flex items-center justify-between gap-3`;let u=l(`h2`,c);d(c,u),u.className=`text-xl font-semibold`,d(u,a(`onClick`));let f=l(`span`,c);d(c,f),f.className=`badge badge-primary badge-lg`;let p=a(``);d(f,p),v(p,()=>g.value);let m=l(`button`,s);d(s,m),m.className=`btn btn-primary btn-sm`;let h=e=>{let t=A;typeof t==`function`&&t(e)};m.addEventListener(`click`,h),e(()=>m.removeEventListener(`click`,h)),d(m,a(`onClick={handleClick}`));let _=l(`section`,r);d(r,_),_.className=`space-y-3`;let y=l(`div`,_);d(_,y),y.className=`flex items-center justify-between gap-3`;let b=l(`h2`,y);d(y,b),b.className=`text-xl font-semibold`,d(b,a(`onClick + stopPropagation + preventDefault`));let x=l(`span`,y);d(y,x),x.className=`badge badge-success badge-lg`;let S=a(``);d(x,S),v(S,()=>E.value);let C=l(`a`,_);d(_,C),C.className=`link link-primary`,C.setAttribute(`href`,`#noop`);let w=e=>{let t=j;typeof t==`function`&&t(e)};C.addEventListener(`click`,w),e(()=>C.removeEventListener(`click`,w)),d(C,a(`手写 stop / prevent`));let T=l(`section`,r);d(r,T),T.className=`space-y-3`;let k=l(`div`,T);d(T,k),k.className=`flex items-center justify-between gap-3`;let P=l(`h2`,k);d(k,P),P.className=`text-xl font-semibold`,d(P,a(`onKeyUp + Enter 判定`));let F=l(`span`,k);d(k,F),F.className=`badge badge-accent badge-lg`;let I=a(``);d(F,I),v(I,()=>D.value);let L=l(`input`,T);d(T,L),L.className=`input input-bordered w-full`,L.setAttribute(`placeholder`,`按 Enter`);let R=e=>{let t=M;typeof t==`function`&&t(e)};L.addEventListener(`keyup`,R),e(()=>L.removeEventListener(`keyup`,R));let z=l(`section`,r);d(r,z),z.className=`space-y-3`;let B=l(`div`,z);d(z,B),B.className=`flex items-center justify-between gap-3`;let V=l(`h2`,B);d(B,V),V.className=`text-xl font-semibold`,d(V,a(`onClick + currentTarget / target 判定`));let H=l(`span`,B);d(B,H),H.className=`badge badge-info badge-lg`;let U=a(``);d(H,U),v(U,()=>O.value);let W=l(`div`,z);d(z,W),W.className=`rounded-box border border-base-300 p-4`;let G=e=>{let t=N;typeof t==`function`&&t(e)};W.addEventListener(`click`,G),e(()=>W.removeEventListener(`click`,G));let K=l(`span`,W);d(W,K),d(K,a(`点击容器空白处触发`));let q=l(`button`,W);return d(W,q),q.className=`btn btn-ghost btn-sm ml-3`,d(q,a(`子元素按钮`)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=a(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>c(()=>{})))};export{E as default};