import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{t as y}from"./SidebarPlaygroundExample-CdMvdgT7.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>m(()=>({activeTab:_(`ref:1:0`,()=>u(`code`)),phase:_(`ref:1:1`,()=>u(`draft`)),plan:_(`ref:1:2`,()=>u(`pro`))})));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(y,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`v-pre / r-pre`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let y=s(`button`,_);t(_,y),c(y,`role`,`tab`),n(()=>{e(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),g(y,`click`,()=>{b.value=`preview`}),t(y,r(`效果`));let C=s(`button`,_);t(_,C),c(C,`role`,`tab`),n(()=>{e(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),g(C,`click`,()=>{b.value=`code`}),t(C,r(`代码`));let w=s(`div`,u);t(u,w),e(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=i(`rue:slot:anchor`);t(w,T),n(()=>{let r=b.value===`code`?d(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,a);t(a,c),e(c,`card-body p-0`);let l=i(`rue:component:anchor`);return t(c,l),n(()=>{let e=p(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});h(()=>f(e,c,l))}),r}):``;h(()=>f(r,w,T))}),t(w,r(` `));let E=i(`rue:slot:anchor`);return t(w,E),n(()=>{let u=b.value===`preview`?d(()=>{let u=o(),p=s(`div`,u);t(u,p),e(p,`card bg-base-100 shadow`);let m=s(`div`,p);t(p,m),e(m,`card-body grid gap-6`);let _=s(`section`,m);t(m,_),e(_,`space-y-3`);let v=s(`div`,_);t(_,v),e(v,`flex flex-wrap items-center justify-between gap-3`);let y=s(`h2`,v);t(v,y),e(y,`text-xl font-semibold`),t(y,r(`v-pre / r-pre`));let b=s(`div`,v);t(v,b),e(b,`join`);let C=s(`button`,b);t(b,C),e(C,`btn btn-sm join-item`),g(C,`click`,()=>{x.value=`draft`}),t(C,r(`草稿`));let w=s(`button`,b);t(b,w),e(w,`btn btn-sm join-item`),g(w,`click`,()=>{x.value=`published`}),t(w,r(`发布`));let T=s(`button`,b);t(b,T),e(T,`btn btn-sm join-item`),g(T,`click`,()=>{S.value=`pro`}),t(T,r(`Pro`));let E=s(`button`,b);t(b,E),e(E,`btn btn-sm join-item`),g(E,`click`,()=>{S.value=`basic`}),t(E,r(`Basic`));let D=s(`div`,_);t(_,D),e(D,`grid md:grid-cols-2 gap-3`);let O=s(`div`,D);t(D,O),e(O,`space-y-2`);let k=s(`div`,O);t(O,k),e(k,`text-sm opacity-70`),t(k,r(`当前阶段：`));let A=a(k);t(k,A),n(()=>{l(A,x.value)});let j=s(`div`,O);t(O,j),e(j,`rounded-box border border-dashed border-base-300 p-4`);let M=s(`span`,j);t(j,M),n(()=>{c(M,`v-if`,String(x.value===`draft`))});let N=a(M);t(M,N),l(N,`{{ phase.value }}`);let P=s(`div`,D);t(D,P),e(P,`space-y-2`);let F=s(`div`,P);t(P,F),e(F,`text-sm opacity-70`),t(F,r(`当前套餐：`));let I=a(F);t(F,I),n(()=>{l(I,S.value)});let L=s(`div`,P);t(P,L),e(L,`rounded-box border border-dashed border-base-300 p-4`);let R=s(`span`,L);t(L,R),n(()=>{c(R,`r-if`,String(S.value===`pro`))});let z=a(R);t(R,z),l(z,`{{ plan.value }}`);let B=s(`section`,m);t(m,B),e(B,`space-y-3`);let V=s(`h2`,B);t(B,V),e(V,`text-xl font-semibold`),t(V,r(`对照渲染`));let H=s(`div`,B);t(B,H),e(H,`rounded-box border border-base-300 p-4`);let U=i(`rue:slot:anchor`);return t(H,U),n(()=>{let e=x.value===`draft`?d(()=>{let e=o(),i=s(`span`,e);t(e,i),t(i,r(`当前阶段：`));let c=a(i);return t(i,c),n(()=>{l(c,x.value)}),e}):d(()=>{let e=o(),i=s(`span`,e);t(e,i),t(i,r(`当前阶段：`));let c=a(i);return t(i,c),n(()=>{l(c,x.value)}),e});h(()=>f(e,H,U))}),u}):``;h(()=>f(u,w,E))}),u})}),m,_),m})};export{b as default};