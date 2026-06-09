import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>i(`code`)),phase:_(`ref:1:1`,()=>i(`draft`)),plan:_(`ref:1:2`,()=>i(`pro`))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`v-pre / r-pre`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{b.value=`preview`}),o(y,l(`效果`));let C=e(`button`,_);o(_,C),f(C,`role`,`tab`),a(()=>{c(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),n(C,`click`,()=>{b.value=`code`}),o(C,l(`代码`));let w=e(`div`,i);o(i,w),c(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);o(w,T),a(()=>{let n=b.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let l=e(`div`,i);o(i,l),c(l,`card-body p-0`);let u=s(`rue:component:anchor`);return o(l,u),a(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});t(()=>m(e,l,u))}),n}):``;t(()=>m(n,w,T))}),o(w,l(` `));let E=s(`rue:slot:anchor`);return o(w,E),a(()=>{let i=b.value===`preview`?u(()=>{let i=r(),p=e(`div`,i);o(i,p),c(p,`card bg-base-100 shadow`);let h=e(`div`,p);o(p,h),c(h,`card-body grid gap-6`);let _=e(`section`,h);o(h,_),c(_,`space-y-3`);let v=e(`div`,_);o(_,v),c(v,`flex flex-wrap items-center justify-between gap-3`);let y=e(`h2`,v);o(v,y),c(y,`text-xl font-semibold`),o(y,l(`v-pre / r-pre`));let b=e(`div`,v);o(v,b),c(b,`join`);let C=e(`button`,b);o(b,C),c(C,`btn btn-sm join-item`),n(C,`click`,()=>{x.value=`draft`}),o(C,l(`草稿`));let w=e(`button`,b);o(b,w),c(w,`btn btn-sm join-item`),n(w,`click`,()=>{x.value=`published`}),o(w,l(`发布`));let T=e(`button`,b);o(b,T),c(T,`btn btn-sm join-item`),n(T,`click`,()=>{S.value=`pro`}),o(T,l(`Pro`));let E=e(`button`,b);o(b,E),c(E,`btn btn-sm join-item`),n(E,`click`,()=>{S.value=`basic`}),o(E,l(`Basic`));let D=e(`div`,_);o(_,D),c(D,`grid md:grid-cols-2 gap-3`);let O=e(`div`,D);o(D,O),c(O,`space-y-2`);let k=e(`div`,O);o(O,k),c(k,`text-sm opacity-70`),o(k,l(`当前阶段：`));let A=g(k);o(k,A),a(()=>{d(A,x.value)});let j=e(`div`,O);o(O,j),c(j,`rounded-box border border-dashed border-base-300 p-4`);let M=e(`span`,j);o(j,M),a(()=>{f(M,`v-if`,String(x.value===`draft`))});let N=g(M);o(M,N),d(N,`{{ phase.value }}`);let P=e(`div`,D);o(D,P),c(P,`space-y-2`);let F=e(`div`,P);o(P,F),c(F,`text-sm opacity-70`),o(F,l(`当前套餐：`));let I=g(F);o(F,I),a(()=>{d(I,S.value)});let L=e(`div`,P);o(P,L),c(L,`rounded-box border border-dashed border-base-300 p-4`);let R=e(`span`,L);o(L,R),a(()=>{f(R,`r-if`,String(S.value===`pro`))});let z=g(R);o(R,z),d(z,`{{ plan.value }}`);let B=e(`section`,h);o(h,B),c(B,`space-y-3`);let V=e(`h2`,B);o(B,V),c(V,`text-xl font-semibold`),o(V,l(`对照渲染`));let H=e(`div`,B);o(B,H),c(H,`rounded-box border border-base-300 p-4`);let U=s(`rue:slot:anchor`);return o(H,U),a(()=>{let n=x.value===`draft`?u(()=>{let t=r(),n=e(`span`,t);o(t,n),o(n,l(`当前阶段：`));let i=g(n);return o(n,i),a(()=>{d(i,x.value)}),t}):u(()=>{let t=r(),n=e(`span`,t);o(t,n),o(n,l(`当前阶段：`));let i=g(n);return o(n,i),a(()=>{d(i,x.value)}),t});t(()=>m(n,H,U))}),i}):``;t(()=>m(i,w,E))}),i})}),p,_),p})};export{b as default};