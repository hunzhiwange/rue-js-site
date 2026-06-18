import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as v}from"./Code-CZqShVUj.js";import{r as y}from"./SidebarPlaygroundExample-5H7RL-T7.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>r(`code`)),phase:_(`ref:1:1`,()=>r(`draft`)),plan:_(`ref:1:2`,()=>r(`pro`))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(y,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`v-pre / r-pre`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=i(`button`,_);n(_,y),c(y,`role`,`tab`),o(()=>{h(y,`tab ${b.value===`preview`?`tab-active`:``}`)}),f(y,`click`,()=>{b.value=`preview`}),n(y,e(`效果`));let C=i(`button`,_);n(_,C),c(C,`role`,`tab`),o(()=>{h(C,`tab ${b.value===`code`?`tab-active`:``}`)}),f(C,`click`,()=>{b.value=`code`}),n(C,e(`代码`));let w=i(`div`,r);n(r,w),h(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);n(w,T),o(()=>{let e=b.value===`code`?u(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`card bg-base-100 shadow overflow-auto`);let c=i(`div`,r);n(r,c),h(c,`card-body p-0`);let l=a(`rue:component:anchor`);return n(c,l),o(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});t(()=>m(e,c,l))}),e}):``;t(()=>m(e,w,T))}),n(w,e(` `));let E=a(`rue:slot:anchor`);return n(w,E),o(()=>{let r=b.value===`preview`?u(()=>{let r=s(),p=i(`div`,r);n(r,p),h(p,`card bg-base-100 shadow`);let g=i(`div`,p);n(p,g),h(g,`card-body grid gap-6`);let _=i(`section`,g);n(g,_),h(_,`space-y-3`);let v=i(`div`,_);n(_,v),h(v,`flex flex-wrap items-center justify-between gap-3`);let y=i(`h2`,v);n(v,y),h(y,`text-xl font-semibold`),n(y,e(`v-pre / r-pre`));let b=i(`div`,v);n(v,b),h(b,`join`);let C=i(`button`,b);n(b,C),h(C,`btn btn-sm join-item`),f(C,`click`,()=>{x.value=`draft`}),n(C,e(`草稿`));let w=i(`button`,b);n(b,w),h(w,`btn btn-sm join-item`),f(w,`click`,()=>{x.value=`published`}),n(w,e(`发布`));let T=i(`button`,b);n(b,T),h(T,`btn btn-sm join-item`),f(T,`click`,()=>{S.value=`pro`}),n(T,e(`Pro`));let E=i(`button`,b);n(b,E),h(E,`btn btn-sm join-item`),f(E,`click`,()=>{S.value=`basic`}),n(E,e(`Basic`));let D=i(`div`,_);n(_,D),h(D,`grid md:grid-cols-2 gap-3`);let O=i(`div`,D);n(D,O),h(O,`space-y-2`);let k=i(`div`,O);n(O,k),h(k,`text-sm opacity-70`),n(k,e(`当前阶段：`));let A=l(k);n(k,A),o(()=>{d(A,x.value)});let j=i(`div`,O);n(O,j),h(j,`rounded-box border border-dashed border-base-300 p-4`);let M=i(`span`,j);n(j,M),o(()=>{c(M,`v-if`,String(x.value===`draft`))});let N=l(M);n(M,N),d(N,`{{ phase.value }}`);let P=i(`div`,D);n(D,P),h(P,`space-y-2`);let F=i(`div`,P);n(P,F),h(F,`text-sm opacity-70`),n(F,e(`当前套餐：`));let I=l(F);n(F,I),o(()=>{d(I,S.value)});let L=i(`div`,P);n(P,L),h(L,`rounded-box border border-dashed border-base-300 p-4`);let R=i(`span`,L);n(L,R),o(()=>{c(R,`r-if`,String(S.value===`pro`))});let z=l(R);n(R,z),d(z,`{{ plan.value }}`);let B=i(`section`,g);n(g,B),h(B,`space-y-3`);let V=i(`h2`,B);n(B,V),h(V,`text-xl font-semibold`),n(V,e(`对照渲染`));let H=i(`div`,B);n(B,H),h(H,`rounded-box border border-base-300 p-4`);let U=a(`rue:slot:anchor`);return n(H,U),o(()=>{let r=x.value===`draft`?u(()=>{let t=s(),r=i(`span`,t);n(t,r),n(r,e(`当前阶段：`));let a=l(r);return n(r,a),o(()=>{d(a,x.value)}),t}):u(()=>{let t=s(),r=i(`span`,t);n(t,r),n(r,e(`当前阶段：`));let a=l(r);return n(r,a),o(()=>{d(a,x.value)}),t});t(()=>m(r,H,U))}),r}):``;t(()=>m(r,w,E))}),r})}),p,_),p})};export{b as default};