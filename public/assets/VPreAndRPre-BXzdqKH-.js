import{Dn as e,E as t,Q as n,Qt as r,Vt as i,_n as a,_t as o,ct as s,et as c,gn as l,nt as u,pn as d,qt as f,rt as p,st as m,tn as h,tt as g,vn as _,wn as v,xn as y,xt as b}from"./rue-runtime-HIMg8Lz8.js";import{t as x}from"./Code-DpH7u0gk.js";import{r as S}from"./SidebarPlaygroundExample-BCPRe0hA.js";var C=_(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-pre / r-pre</h1>`),w=_(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=_(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=()=>{let _=h(`code`),E=h(`draft`),D=h(`pro`);return f(()=>s(p(S,()=>({children:[(e,n,r)=>t(e,r,()=>i(Object.assign(e=>{let t=o();return t.appendChild(C().content.cloneNode(!0)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,a,s)=>t(e,s,()=>i(Object.assign(e=>{let t=o(),i=w().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[0],c=a.childNodes[1];t.appendChild(i),b(s,`role`,`tab`),v(()=>{n(s,`tab ${_.value===`preview`?`tab-active`:``}`)});let l=e=>{let t=()=>{_.value=`preview`};typeof t==`function`&&t(e)};s.addEventListener(`click`,l),r(()=>s.removeEventListener(`click`,l)),b(c,`role`,`tab`),v(()=>{n(c,`tab ${_.value===`code`?`tab-active`:``}`)});let u=e=>{let t=()=>{_.value=`code`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,u),r(()=>c.removeEventListener(`click`,u)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r,s)=>t(n,s,()=>i(Object.assign(t=>{let n=o(),r=T().content.cloneNode(!0),s=r.firstChild,c=s.childNodes[0],f=c.parentNode,p=s.childNodes[1],h=p.parentNode;return n.appendChild(r),u(f,c,()=>{let e=_.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=l(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=l(`div`,t);return d(t,n),n.className=`card-body p-0`,m(n,x,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=a(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),u(h,p,()=>{let t=_.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(t=>{let n=l(`div`,t);n.className=`card bg-base-100 shadow`;let r=l(`div`,n);d(n,r),r.className=`card-body grid gap-6`;let o=l(`section`,r);d(r,o),o.className=`space-y-3`;let s=l(`div`,o);d(o,s),s.className=`flex flex-wrap items-center justify-between gap-3`;let c=l(`h2`,s);d(s,c),c.className=`text-xl font-semibold`,d(c,a(`v-pre / r-pre`));let u=l(`div`,s);d(s,u),u.className=`join`;let f=l(`button`,u);d(u,f),f.className=`btn btn-sm join-item`;let p=e=>{let t=()=>{E.value=`draft`};typeof t==`function`&&t(e)};f.addEventListener(`click`,p),e(()=>f.removeEventListener(`click`,p)),d(f,a(`草稿`));let m=l(`button`,u);d(u,m),m.className=`btn btn-sm join-item`;let h=e=>{let t=()=>{E.value=`published`};typeof t==`function`&&t(e)};m.addEventListener(`click`,h),e(()=>m.removeEventListener(`click`,h)),d(m,a(`发布`));let _=l(`button`,u);d(u,_),_.className=`btn btn-sm join-item`;let b=e=>{let t=()=>{D.value=`pro`};typeof t==`function`&&t(e)};_.addEventListener(`click`,b),e(()=>_.removeEventListener(`click`,b)),d(_,a(`Pro`));let x=l(`button`,u);d(u,x),x.className=`btn btn-sm join-item`;let S=e=>{let t=()=>{D.value=`basic`};typeof t==`function`&&t(e)};x.addEventListener(`click`,S),e(()=>x.removeEventListener(`click`,S)),d(x,a(`Basic`));let C=l(`div`,o);d(o,C),C.className=`grid md:grid-cols-2 gap-3`;let w=l(`div`,C);d(C,w),w.className=`space-y-2`;let T=l(`div`,w);d(w,T),T.className=`text-sm opacity-70`,d(T,a(`当前阶段：`));let O=a(``);d(T,O),y(O,()=>E.value);let k=l(`div`,w);d(w,k),k.className=`rounded-box border border-dashed border-base-300 p-4`;let A=l(`span`,k);d(k,A);let j;v(()=>{let e=E.value===`draft`;Object.is(j,e)||(j=e,e==null||e===!1?A.removeAttribute(`v-if`):A.setAttribute(`v-if`,String(e)))}),d(A,a(`{{ phase.value }}`));let M=l(`div`,C);d(C,M),M.className=`space-y-2`;let N=l(`div`,M);d(M,N),N.className=`text-sm opacity-70`,d(N,a(`当前套餐：`));let P=a(``);d(N,P),y(P,()=>D.value);let F=l(`div`,M);d(M,F),F.className=`rounded-box border border-dashed border-base-300 p-4`;let I=l(`span`,F);d(F,I);let L;v(()=>{let e=D.value===`pro`;Object.is(L,e)||(L=e,e==null||e===!1?I.removeAttribute(`r-if`):I.setAttribute(`r-if`,String(e)))}),d(I,a(`{{ plan.value }}`));let R=l(`section`,r);d(r,R),R.className=`space-y-3`;let z=l(`h2`,R);d(R,z),z.className=`text-xl font-semibold`,d(z,a(`对照渲染`));let B=l(`div`,R);return d(R,B),B.className=`rounded-box border border-base-300 p-4`,g(()=>E.value===`draft`?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=l(`span`,e);d(t,a(`当前阶段：`));let n=a(``);return d(t,n),y(n,()=>E.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=l(`span`,e);d(t,a(`当前阶段：`));let n=a(``);return d(t,n),y(n,()=>E.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(B),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=a(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=o();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))]})),e=>c(()=>{})))};export{E as default};