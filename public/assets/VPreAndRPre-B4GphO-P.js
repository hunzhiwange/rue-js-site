import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{r as y}from"./SidebarPlaygroundExample-B78jsvoF.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>e(()=>({activeTab:_(`ref:1:0`,()=>l(`code`)),phase:_(`ref:1:1`,()=>l(`draft`)),plan:_(`ref:1:2`,()=>l(`pro`))})));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(y,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`v-pre / r-pre`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let y=u(`button`,_);d(_,y),t(y,`role`,`tab`),f(()=>{r(y,`tab ${b.value===`preview`?`tab-active`:``}`)}),c(y,`click`,()=>{b.value=`preview`}),d(y,s(`效果`));let C=u(`button`,_);d(_,C),t(C,`role`,`tab`),f(()=>{r(C,`tab ${b.value===`code`?`tab-active`:``}`)}),c(C,`click`,()=>{b.value=`code`}),d(C,s(`代码`));let w=u(`div`,e);d(e,w),r(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=i(`rue:slot:anchor`);d(w,T),f(()=>{let e=b.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto`);let n=u(`div`,t);d(t,n),r(n,`card-body p-0`);let o=i(`rue:component:anchor`);return d(n,o),f(()=>{let e=g(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});p(()=>h(e,n,o))}),e}):``;p(()=>h(e,w,T))}),d(w,s(` `));let E=i(`rue:slot:anchor`);return d(w,E),f(()=>{let e=b.value===`preview`?m(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`card bg-base-100 shadow`);let g=u(`div`,l);d(l,g),r(g,`card-body grid gap-6`);let _=u(`section`,g);d(g,_),r(_,`space-y-3`);let v=u(`div`,_);d(_,v),r(v,`flex flex-wrap items-center justify-between gap-3`);let y=u(`h2`,v);d(v,y),r(y,`text-xl font-semibold`),d(y,s(`v-pre / r-pre`));let b=u(`div`,v);d(v,b),r(b,`join`);let C=u(`button`,b);d(b,C),r(C,`btn btn-sm join-item`),c(C,`click`,()=>{x.value=`draft`}),d(C,s(`草稿`));let w=u(`button`,b);d(b,w),r(w,`btn btn-sm join-item`),c(w,`click`,()=>{x.value=`published`}),d(w,s(`发布`));let T=u(`button`,b);d(b,T),r(T,`btn btn-sm join-item`),c(T,`click`,()=>{S.value=`pro`}),d(T,s(`Pro`));let E=u(`button`,b);d(b,E),r(E,`btn btn-sm join-item`),c(E,`click`,()=>{S.value=`basic`}),d(E,s(`Basic`));let D=u(`div`,_);d(_,D),r(D,`grid md:grid-cols-2 gap-3`);let O=u(`div`,D);d(D,O),r(O,`space-y-2`);let k=u(`div`,O);d(O,k),r(k,`text-sm opacity-70`),d(k,s(`当前阶段：`));let A=o(k);d(k,A),f(()=>{n(A,x.value)});let j=u(`div`,O);d(O,j),r(j,`rounded-box border border-dashed border-base-300 p-4`);let M=u(`span`,j);d(j,M),f(()=>{t(M,`v-if`,String(x.value===`draft`))});let N=o(M);d(M,N),n(N,`{{ phase.value }}`);let P=u(`div`,D);d(D,P),r(P,`space-y-2`);let F=u(`div`,P);d(P,F),r(F,`text-sm opacity-70`),d(F,s(`当前套餐：`));let I=o(F);d(F,I),f(()=>{n(I,S.value)});let L=u(`div`,P);d(P,L),r(L,`rounded-box border border-dashed border-base-300 p-4`);let R=u(`span`,L);d(L,R),f(()=>{t(R,`r-if`,String(S.value===`pro`))});let z=o(R);d(R,z),n(z,`{{ plan.value }}`);let B=u(`section`,g);d(g,B),r(B,`space-y-3`);let V=u(`h2`,B);d(B,V),r(V,`text-xl font-semibold`),d(V,s(`对照渲染`));let H=u(`div`,B);d(B,H),r(H,`rounded-box border border-base-300 p-4`);let U=i(`rue:slot:anchor`);return d(H,U),f(()=>{let e=x.value===`draft`?m(()=>{let e=a(),t=u(`span`,e);d(e,t),d(t,s(`当前阶段：`));let r=o(t);return d(t,r),f(()=>{n(r,x.value)}),e}):m(()=>{let e=a(),t=u(`span`,e);d(e,t),d(t,s(`当前阶段：`));let r=o(t);return d(t,r),f(()=>{n(r,x.value)}),e});p(()=>h(e,H,U))}),e}):``;p(()=>h(e,w,E))}),e})}),l,_),l})};export{b as default};