import{F as e,P as t,Qt as n,Ut as r,V as i,Vt as a,Wt as o,fn as s,gn as c,hn as l,in as u,mn as d,mt as f,nt as p,sn as m,u as h,yn as g}from"./rue-runtime-BWbIfNT8.js";import{t as _}from"./Code-C5ZhIIr9.js";import{r as v}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var y=g(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">事件处理</h1>`),b=g(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),x=g(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),S=`import { type FC, ref } from '@rue-js/rue';

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

export default Events;`,C=(g,C,w)=>{let T=f(0),E=f(0),D=f(0),O=f(0),k=f(`code`),A=e=>{T.value+=1,console.info(`onClick ->`,e.type,T.value)},j=e=>{e.stopPropagation(),e.preventDefault(),E.value+=1,console.info(`manual stop + prevent`,E.value)},M=e=>{e.key===`Enter`&&(D.value+=1,console.info(`manual enter`,D.value))},N=e=>{e.target===e.currentTarget&&(O.value+=1,console.info(`manual self`,O.value))};return p(()=>t(v,()=>({children:(t,f,p)=>{let g=()=>o(t=>{let a=d();a.appendChild(y().content.cloneNode(!0));let f=b().content.cloneNode(!0),p=f.firstChild,g=p.childNodes[0],v=p.childNodes[1];a.appendChild(f),g.setAttribute(`role`,`tab`);let C;u(()=>{let e=`tab ${k.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(C,t)||(C=t,g.setAttribute(`class`,t))}),m(h(t,g,`click`,()=>()=>{k.value=`preview`})),v.setAttribute(`role`,`tab`);let w;u(()=>{let e=`tab ${k.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(w,t)||(w=t,v.setAttribute(`class`,t))}),m(h(t,v,`click`,()=>()=>{k.value=`code`}));let P=x().content.cloneNode(!0),F=P.firstChild,I=F.childNodes[0],L=I.parentNode,R=F.childNodes[1],z=R.parentNode;a.appendChild(P),r(L,I,()=>{let t=k.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>o(t=>{let n=l(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow`);let r=l(`div`,n);s(n,r),r.setAttribute(`class`,`card-body gap-3`);let i=l(`div`,r);s(r,i),i.setAttribute(`role`,`alert`),i.setAttribute(`class`,`alert alert-info alert-soft`);let a=l(`span`,i);return s(i,a),s(a,c(`这是原生 TSX 事件属性写法。若要看 Rue 的 v-on: / r-on: 指令糖、修饰符写法和两者对照，请看 /jsx/v-on-r-on。`)),e(r,_,()=>({lang:`tsx`,code:S})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(e=>{let n=c(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=d();return[t.firstChild,t.lastChild]})}}),r(z,R,()=>{let e=k.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>o(e=>{let t=l(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow`);let r=l(`div`,t);s(t,r),r.setAttribute(`class`,`card-body grid gap-6`);let i=l(`div`,r);s(r,i),i.setAttribute(`role`,`alert`),i.setAttribute(`class`,`alert alert-info`);let a=l(`span`,i);s(i,a),s(a,c(`本页只展示原生 TSX 的 onClick / onKeyUp 写法。Rue 指令版与原生 TSX 的逐项对照，已经同步整理到 /jsx/v-on-r-on。`));let o=l(`section`,r);s(r,o),o.setAttribute(`class`,`space-y-3`);let u=l(`div`,o);s(o,u),u.setAttribute(`class`,`flex items-center justify-between gap-3`);let d=l(`h2`,u);s(u,d),d.setAttribute(`class`,`text-xl font-semibold`),s(d,c(`onClick`));let f=l(`span`,u);s(u,f),f.setAttribute(`class`,`badge badge-primary badge-lg`);let p=c(``);s(f,p),n(p,()=>T.value);let h=l(`button`,o);s(o,h),h.setAttribute(`class`,`btn btn-primary btn-sm`);let g=e=>{let t=A;typeof t==`function`&&t(e)};h.addEventListener(`click`,g),m(()=>h.removeEventListener(`click`,g)),s(h,c(`onClick={handleClick}`));let _=l(`section`,r);s(r,_),_.setAttribute(`class`,`space-y-3`);let v=l(`div`,_);s(_,v),v.setAttribute(`class`,`flex items-center justify-between gap-3`);let y=l(`h2`,v);s(v,y),y.setAttribute(`class`,`text-xl font-semibold`),s(y,c(`onClick + stopPropagation + preventDefault`));let b=l(`span`,v);s(v,b),b.setAttribute(`class`,`badge badge-success badge-lg`);let x=c(``);s(b,x),n(x,()=>E.value);let S=l(`a`,_);s(_,S),S.setAttribute(`class`,`link link-primary`),S.setAttribute(`href`,`#noop`);let C=e=>{let t=j;typeof t==`function`&&t(e)};S.addEventListener(`click`,C),m(()=>S.removeEventListener(`click`,C)),s(S,c(`手写 stop / prevent`));let w=l(`section`,r);s(r,w),w.setAttribute(`class`,`space-y-3`);let k=l(`div`,w);s(w,k),k.setAttribute(`class`,`flex items-center justify-between gap-3`);let P=l(`h2`,k);s(k,P),P.setAttribute(`class`,`text-xl font-semibold`),s(P,c(`onKeyUp + Enter 判定`));let F=l(`span`,k);s(k,F),F.setAttribute(`class`,`badge badge-accent badge-lg`);let I=c(``);s(F,I),n(I,()=>D.value);let L=l(`input`,w);s(w,L),L.setAttribute(`class`,`input input-bordered w-full`),L.setAttribute(`placeholder`,`按 Enter`);let R=e=>{let t=M;typeof t==`function`&&t(e)};L.addEventListener(`keyup`,R),m(()=>L.removeEventListener(`keyup`,R));let z=l(`section`,r);s(r,z),z.setAttribute(`class`,`space-y-3`);let B=l(`div`,z);s(z,B),B.setAttribute(`class`,`flex items-center justify-between gap-3`);let V=l(`h2`,B);s(B,V),V.setAttribute(`class`,`text-xl font-semibold`),s(V,c(`onClick + currentTarget / target 判定`));let H=l(`span`,B);s(B,H),H.setAttribute(`class`,`badge badge-info badge-lg`);let U=c(``);s(H,U),n(U,()=>O.value);let W=l(`div`,z);s(z,W),W.setAttribute(`class`,`rounded-box border border-base-300 p-4`);let G=e=>{let t=N;typeof t==`function`&&t(e)};W.addEventListener(`click`,G),m(()=>W.removeEventListener(`click`,G));let K=l(`span`,W);s(W,K),s(K,c(`点击容器空白处触发`));let q=l(`button`,W);return s(W,q),q.setAttribute(`class`,`btn btn-ghost btn-sm ml-3`),s(q,c(`子元素按钮`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>i(e=>{let t=d();return[t.firstChild,t.lastChild]})}});let B=c(``),V=c(``);return a.insertBefore(B,a.firstChild),a.appendChild(V),[a.firstChild,a.lastChild]});return t==null?g():a(t,p,g)}})))};export{C as default};