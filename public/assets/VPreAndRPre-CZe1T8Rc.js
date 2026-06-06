import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./SidebarPlaygroundExample-KML-rOvA.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>n(()=>({activeTab:_(`ref:1:0`,()=>r(`code`)),phase:_(`ref:1:1`,()=>r(`draft`)),plan:_(`ref:1:2`,()=>r(`pro`))})));return d(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),m(h(y,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`v-pre / r-pre`));let _=e(`div`,n);o(n,_),p(_,`role`,`tablist`),l(_,`tabs tabs-box`);let y=e(`button`,_);o(_,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{b.value=`preview`}),o(y,u(`效果`));let C=e(`button`,_);o(_,C),p(C,`role`,`tab`),s(()=>{l(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),t(C,`click`,()=>{b.value=`code`}),o(C,u(`代码`));let w=e(`div`,n);o(n,w),l(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=c(`rue:slot:anchor`);o(w,T),s(()=>{let t=b.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`card bg-base-100 shadow overflow-auto`);let r=e(`div`,n);o(n,r),l(r,`card-body p-0`);let u=c(`rue:component:anchor`);return o(r,u),s(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});a(()=>m(e,r,u))}),t}):``;a(()=>m(t,w,T))}),o(w,u(` `));let E=c(`rue:slot:anchor`);return o(w,E),s(()=>{let n=b.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let h=e(`div`,r);o(r,h),l(h,`card-body grid gap-6`);let _=e(`section`,h);o(h,_),l(_,`space-y-3`);let v=e(`div`,_);o(_,v),l(v,`flex flex-wrap items-center justify-between gap-3`);let y=e(`h2`,v);o(v,y),l(y,`text-xl font-semibold`),o(y,u(`v-pre / r-pre`));let b=e(`div`,v);o(v,b),l(b,`join`);let C=e(`button`,b);o(b,C),l(C,`btn btn-sm join-item`),t(C,`click`,()=>{x.value=`draft`}),o(C,u(`草稿`));let w=e(`button`,b);o(b,w),l(w,`btn btn-sm join-item`),t(w,`click`,()=>{x.value=`published`}),o(w,u(`发布`));let T=e(`button`,b);o(b,T),l(T,`btn btn-sm join-item`),t(T,`click`,()=>{S.value=`pro`}),o(T,u(`Pro`));let E=e(`button`,b);o(b,E),l(E,`btn btn-sm join-item`),t(E,`click`,()=>{S.value=`basic`}),o(E,u(`Basic`));let D=e(`div`,_);o(_,D),l(D,`grid md:grid-cols-2 gap-3`);let O=e(`div`,D);o(D,O),l(O,`space-y-2`);let k=e(`div`,O);o(O,k),l(k,`text-sm opacity-70`),o(k,u(`当前阶段：`));let A=g(k);o(k,A),s(()=>{f(A,x.value)});let j=e(`div`,O);o(O,j),l(j,`rounded-box border border-dashed border-base-300 p-4`);let M=e(`span`,j);o(j,M),s(()=>{p(M,`v-if`,String(x.value===`draft`))});let N=g(M);o(M,N),f(N,`{{ phase.value }}`);let P=e(`div`,D);o(D,P),l(P,`space-y-2`);let F=e(`div`,P);o(P,F),l(F,`text-sm opacity-70`),o(F,u(`当前套餐：`));let I=g(F);o(F,I),s(()=>{f(I,S.value)});let L=e(`div`,P);o(P,L),l(L,`rounded-box border border-dashed border-base-300 p-4`);let R=e(`span`,L);o(L,R),s(()=>{p(R,`r-if`,String(S.value===`pro`))});let z=g(R);o(R,z),f(z,`{{ plan.value }}`);let B=e(`section`,h);o(h,B),l(B,`space-y-3`);let V=e(`h2`,B);o(B,V),l(V,`text-xl font-semibold`),o(V,u(`对照渲染`));let H=e(`div`,B);o(B,H),l(H,`rounded-box border border-base-300 p-4`);let U=c(`rue:slot:anchor`);return o(H,U),s(()=>{let t=x.value===`draft`?d(()=>{let t=i(),n=e(`span`,t);o(t,n),o(n,u(`当前阶段：`));let r=g(n);return o(n,r),s(()=>{f(r,x.value)}),t}):d(()=>{let t=i(),n=e(`span`,t);o(t,n),o(n,u(`当前阶段：`));let r=g(n);return o(n,r),s(()=>{f(r,x.value)}),t});a(()=>m(t,H,U))}),n}):``;a(()=>m(n,w,E))}),n})}),r,_),r})};export{b as default};