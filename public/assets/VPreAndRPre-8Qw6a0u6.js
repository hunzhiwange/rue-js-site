import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as v}from"./Code-4SUSUwRg.js";import{r as y}from"./SidebarPlaygroundExample-BEWYUWOl.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>t(`code`)),phase:_(`ref:1:1`,()=>t(`draft`)),plan:_(`ref:1:2`,()=>t(`pro`))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(y,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`v-pre / r-pre`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let y=u(`button`,_);n(_,y),l(y,`role`,`tab`),g(()=>{i(y,`tab ${b.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{b.value=`preview`}),n(y,f(`效果`));let C=u(`button`,_);n(_,C),l(C,`role`,`tab`),g(()=>{i(C,`tab ${b.value===`code`?`tab-active`:``}`)}),r(C,`click`,()=>{b.value=`code`}),n(C,f(`代码`));let w=u(`div`,t);n(t,w),i(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);n(w,T),g(()=>{let t=b.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,r);n(r,o),i(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),g(()=>{let t=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});e(()=>d(t,o,s))}),t}):``;e(()=>d(t,w,T))}),n(w,f(` `));let E=a(`rue:slot:anchor`);return n(w,E),g(()=>{let t=b.value===`preview`?c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`card bg-base-100 shadow`);let p=u(`div`,o);n(o,p),i(p,`card-body grid gap-6`);let _=u(`section`,p);n(p,_),i(_,`space-y-3`);let v=u(`div`,_);n(_,v),i(v,`flex flex-wrap items-center justify-between gap-3`);let y=u(`h2`,v);n(v,y),i(y,`text-xl font-semibold`),n(y,f(`v-pre / r-pre`));let b=u(`div`,v);n(v,b),i(b,`join`);let C=u(`button`,b);n(b,C),i(C,`btn btn-sm join-item`),r(C,`click`,()=>{x.value=`draft`}),n(C,f(`草稿`));let w=u(`button`,b);n(b,w),i(w,`btn btn-sm join-item`),r(w,`click`,()=>{x.value=`published`}),n(w,f(`发布`));let T=u(`button`,b);n(b,T),i(T,`btn btn-sm join-item`),r(T,`click`,()=>{S.value=`pro`}),n(T,f(`Pro`));let E=u(`button`,b);n(b,E),i(E,`btn btn-sm join-item`),r(E,`click`,()=>{S.value=`basic`}),n(E,f(`Basic`));let D=u(`div`,_);n(_,D),i(D,`grid md:grid-cols-2 gap-3`);let O=u(`div`,D);n(D,O),i(O,`space-y-2`);let k=u(`div`,O);n(O,k),i(k,`text-sm opacity-70`),n(k,f(`当前阶段：`));let A=s(k);n(k,A),g(()=>{h(A,x.value)});let j=u(`div`,O);n(O,j),i(j,`rounded-box border border-dashed border-base-300 p-4`);let M=u(`span`,j);n(j,M),g(()=>{l(M,`v-if`,String(x.value===`draft`))});let N=s(M);n(M,N),h(N,`{{ phase.value }}`);let P=u(`div`,D);n(D,P),i(P,`space-y-2`);let F=u(`div`,P);n(P,F),i(F,`text-sm opacity-70`),n(F,f(`当前套餐：`));let I=s(F);n(F,I),g(()=>{h(I,S.value)});let L=u(`div`,P);n(P,L),i(L,`rounded-box border border-dashed border-base-300 p-4`);let R=u(`span`,L);n(L,R),g(()=>{l(R,`r-if`,String(S.value===`pro`))});let z=s(R);n(R,z),h(z,`{{ plan.value }}`);let B=u(`section`,p);n(p,B),i(B,`space-y-3`);let V=u(`h2`,B);n(B,V),i(V,`text-xl font-semibold`),n(V,f(`对照渲染`));let H=u(`div`,B);n(B,H),i(H,`rounded-box border border-base-300 p-4`);let U=a(`rue:slot:anchor`);return n(H,U),g(()=>{let t=x.value===`draft`?c(()=>{let e=m(),t=u(`span`,e);n(e,t),n(t,f(`当前阶段：`));let r=s(t);return n(t,r),g(()=>{h(r,x.value)}),e}):c(()=>{let e=m(),t=u(`span`,e);n(e,t),n(t,f(`当前阶段：`));let r=s(t);return n(t,r),g(()=>{h(r,x.value)}),e});e(()=>d(t,H,U))}),t}):``;e(()=>d(t,w,E))}),t})}),o,_),o})};export{b as default};