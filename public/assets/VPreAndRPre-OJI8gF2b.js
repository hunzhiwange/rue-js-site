import{B as e,Bt as t,Dn as n,Et as r,H as i,K as a,L as o,Lt as s,Mt as c,V as l,_n as u,bn as d,fn as f,gn as p,hn as m,nt as h,ot as g,q as _,wn as v,x as y,z as b}from"./rue-runtime-CwEGJ854.js";import{t as x}from"./Code-B3jCYMAr.js";import{r as S}from"./SidebarPlaygroundExample-EGR0CyDT.js";var C=u(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-pre / r-pre</h1>`),w=u(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=u(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=()=>{let u=t(`code`),E=t(`draft`),D=t(`pro`);return c(()=>_(i(S,()=>({children:[(e,t,n)=>y(e,n,()=>r(Object.assign(e=>{let t=h();return t.appendChild(C().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>y(e,n,()=>r(Object.assign(e=>{let t=h(),n=w().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0],a=r.childNodes[1];t.appendChild(n),g(i,`role`,`tab`),v(()=>{o(i,`tab ${u.value===`preview`?`tab-active`:``}`)});let c=e=>{let t=()=>{u.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,c),s(()=>i.removeEventListener(`click`,c)),g(a,`role`,`tab`),v(()=>{o(a,`tab ${u.value===`code`?`tab-active`:``}`)});let l=e=>{let t=()=>{u.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),s(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i,o)=>y(t,o,()=>r(Object.assign(t=>{let i=h(),o=T().content.cloneNode(!0),s=o.firstChild,c=s.childNodes[0],g=c.parentNode,_=s.childNodes[1],y=_.parentNode;return i.appendChild(o),l(g,c,()=>{let e=u.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=m(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=m(`div`,t);return f(t,n),n.className=`card-body p-0`,a(n,x,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VPreAndRPre: FC = () => {
  const phase = ref<'draft' | 'published'>('draft');
  const plan = ref<'pro' | 'basic'>('pro');

  return (
    <div className="grid gap-4">
      <div className="join">
        <button className="btn btn-sm join-item" onClick={() => { phase.value = 'draft'; }}>
          草稿
        </button>
        <button className="btn btn-sm join-item" onClick={() => { phase.value = 'published'; }}>
          发布
        </button>
        <button className="btn btn-sm join-item" onClick={() => { plan.value = 'pro'; }}>
          Pro
        </button>
        <button className="btn btn-sm join-item" onClick={() => { plan.value = 'basic'; }}>
          Basic
        </button>
      </div>

      <div v-pre className="rounded-box border border-dashed border-base-300 p-4">
        <span v-if={phase.value === 'draft'}>{'{{ phase.value }}'}</span>
      </div>

      <div r-pre className="rounded-box border border-dashed border-base-300 p-4">
        <span r-if={plan.value === 'pro'}>{'{{ plan.value }}'}</span>
      </div>

      <div className="rounded-box border border-base-300 p-4">
        <span v-if={phase.value === 'draft'}>当前阶段：{phase.value}</span>
        <span v-else>当前阶段：{phase.value}</span>
      </div>
    </div>
  );
};

export default VPreAndRPre;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),l(y,_,()=>{let t=u.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let i=m(`div`,t);i.className=`card bg-base-100 shadow`;let a=m(`div`,i);f(i,a),a.className=`card-body grid gap-6`;let o=m(`section`,a);f(a,o),o.className=`space-y-3`;let s=m(`div`,o);f(o,s),s.className=`flex flex-wrap items-center justify-between gap-3`;let c=m(`h2`,s);f(s,c),c.className=`text-xl font-semibold`,f(c,p(`v-pre / r-pre`));let l=m(`div`,s);f(s,l),l.className=`join`;let u=m(`button`,l);f(l,u),u.className=`btn btn-sm join-item`;let h=e=>{let t=()=>{E.value=`draft`};typeof t==`function`&&t(e)};u.addEventListener(`click`,h),n(()=>u.removeEventListener(`click`,h)),f(u,p(`草稿`));let g=m(`button`,l);f(l,g),g.className=`btn btn-sm join-item`;let _=e=>{let t=()=>{E.value=`published`};typeof t==`function`&&t(e)};g.addEventListener(`click`,_),n(()=>g.removeEventListener(`click`,_)),f(g,p(`发布`));let y=m(`button`,l);f(l,y),y.className=`btn btn-sm join-item`;let b=e=>{let t=()=>{D.value=`pro`};typeof t==`function`&&t(e)};y.addEventListener(`click`,b),n(()=>y.removeEventListener(`click`,b)),f(y,p(`Pro`));let x=m(`button`,l);f(l,x),x.className=`btn btn-sm join-item`;let S=e=>{let t=()=>{D.value=`basic`};typeof t==`function`&&t(e)};x.addEventListener(`click`,S),n(()=>x.removeEventListener(`click`,S)),f(x,p(`Basic`));let C=m(`div`,o);f(o,C),C.className=`grid md:grid-cols-2 gap-3`;let w=m(`div`,C);f(C,w),w.className=`space-y-2`;let T=m(`div`,w);f(w,T),T.className=`text-sm opacity-70`,f(T,p(`当前阶段：`));let O=p(``);f(T,O),d(O,()=>E.value);let k=m(`div`,w);f(w,k),k.className=`rounded-box border border-dashed border-base-300 p-4`;let A=m(`span`,k);f(k,A);let j;v(()=>{let e=E.value===`draft`;Object.is(j,e)||(j=e,e==null||e===!1?A.removeAttribute(`v-if`):A.setAttribute(`v-if`,String(e)))}),f(A,p(`{{ phase.value }}`));let M=m(`div`,C);f(C,M),M.className=`space-y-2`;let N=m(`div`,M);f(M,N),N.className=`text-sm opacity-70`,f(N,p(`当前套餐：`));let P=p(``);f(N,P),d(P,()=>D.value);let F=m(`div`,M);f(M,F),F.className=`rounded-box border border-dashed border-base-300 p-4`;let I=m(`span`,F);f(F,I);let L;v(()=>{let e=D.value===`pro`;Object.is(L,e)||(L=e,e==null||e===!1?I.removeAttribute(`r-if`):I.setAttribute(`r-if`,String(e)))}),f(I,p(`{{ plan.value }}`));let R=m(`section`,a);f(a,R),R.className=`space-y-3`;let z=m(`h2`,R);f(R,z),z.className=`text-xl font-semibold`,f(z,p(`对照渲染`));let B=m(`div`,R);return f(R,B),B.className=`rounded-box border border-base-300 p-4`,e(()=>E.value===`draft`?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=m(`span`,e);f(t,p(`当前阶段：`));let n=p(``);return f(t,n),d(n,()=>E.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=m(`span`,e);f(t,p(`当前阶段：`));let n=p(``);return f(t,n),d(n,()=>E.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(B),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>r(Object.assign(e=>{let n=p(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})))]})),e=>b(()=>{})))};export{E as default};