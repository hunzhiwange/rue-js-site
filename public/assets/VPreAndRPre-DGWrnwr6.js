import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,d as l,dt as u,ht as d,l as f,st as p,t as m,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as v}from"./Code-DQxnq0in.js";import{t as y}from"./SidebarPlaygroundExample-BwOo72z2.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),phase:_(`ref:1:1`,()=>p(`draft`)),plan:_(`ref:1:2`,()=>p(`pro`))})));return l(d=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),f(m(y,{children:l(()=>{let d=t(),p=r(`h1`,d);a(d,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`v-pre / r-pre`));let _=r(`div`,d);a(d,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let y=r(`button`,_);a(_,y),c(y,`role`,`tab`),h(()=>{n(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),i(y,`click`,()=>{b.value=`preview`}),a(y,s(`效果`));let C=r(`button`,_);a(_,C),c(C,`role`,`tab`),h(()=>{n(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),i(C,`click`,()=>{b.value=`code`}),a(C,s(`代码`));let w=r(`div`,d);a(d,w),n(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);a(w,T),h(()=>{let i=b.value===`code`?l(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card bg-base-100 shadow overflow-auto`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),h(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});u(()=>f(e,s,c))}),i}):``;u(()=>f(i,w,T))}),a(w,s(` `));let E=e(`rue:slot:anchor`);return a(w,E),h(()=>{let d=b.value===`preview`?l(()=>{let d=t(),p=r(`div`,d);a(d,p),n(p,`card bg-base-100 shadow`);let m=r(`div`,p);a(p,m),n(m,`card-body grid gap-6`);let _=r(`section`,m);a(m,_),n(_,`space-y-3`);let v=r(`div`,_);a(_,v),n(v,`flex flex-wrap items-center justify-between gap-3`);let y=r(`h2`,v);a(v,y),n(y,`text-xl font-semibold`),a(y,s(`v-pre / r-pre`));let b=r(`div`,v);a(v,b),n(b,`join`);let C=r(`button`,b);a(b,C),n(C,`btn btn-sm join-item`),i(C,`click`,()=>{x.value=`draft`}),a(C,s(`草稿`));let w=r(`button`,b);a(b,w),n(w,`btn btn-sm join-item`),i(w,`click`,()=>{x.value=`published`}),a(w,s(`发布`));let T=r(`button`,b);a(b,T),n(T,`btn btn-sm join-item`),i(T,`click`,()=>{S.value=`pro`}),a(T,s(`Pro`));let E=r(`button`,b);a(b,E),n(E,`btn btn-sm join-item`),i(E,`click`,()=>{S.value=`basic`}),a(E,s(`Basic`));let D=r(`div`,_);a(_,D),n(D,`grid md:grid-cols-2 gap-3`);let O=r(`div`,D);a(D,O),n(O,`space-y-2`);let k=r(`div`,O);a(O,k),n(k,`text-sm opacity-70`),a(k,s(`当前阶段：`));let A=g(k);a(k,A),h(()=>{o(A,x.value)});let j=r(`div`,O);a(O,j),n(j,`rounded-box border border-dashed border-base-300 p-4`);let M=r(`span`,j);a(j,M),h(()=>{c(M,`v-if`,String(x.value===`draft`))});let N=g(M);a(M,N),o(N,`{{ phase.value }}`);let P=r(`div`,D);a(D,P),n(P,`space-y-2`);let F=r(`div`,P);a(P,F),n(F,`text-sm opacity-70`),a(F,s(`当前套餐：`));let I=g(F);a(F,I),h(()=>{o(I,S.value)});let L=r(`div`,P);a(P,L),n(L,`rounded-box border border-dashed border-base-300 p-4`);let R=r(`span`,L);a(L,R),h(()=>{c(R,`r-if`,String(S.value===`pro`))});let z=g(R);a(R,z),o(z,`{{ plan.value }}`);let B=r(`section`,m);a(m,B),n(B,`space-y-3`);let V=r(`h2`,B);a(B,V),n(V,`text-xl font-semibold`),a(V,s(`对照渲染`));let H=r(`div`,B);a(B,H),n(H,`rounded-box border border-base-300 p-4`);let U=e(`rue:slot:anchor`);return a(H,U),h(()=>{let e=x.value===`draft`?l(()=>{let e=t(),n=r(`span`,e);a(e,n),a(n,s(`当前阶段：`));let i=g(n);return a(n,i),h(()=>{o(i,x.value)}),e}):l(()=>{let e=t(),n=r(`span`,e);a(e,n),a(n,s(`当前阶段：`));let i=g(n);return a(n,i),h(()=>{o(i,x.value)}),e});u(()=>f(e,H,U))}),d}):``;u(()=>f(d,w,E))}),d})}),p,_),p})};export{b as default};