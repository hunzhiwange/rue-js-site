import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as v}from"./Code-CliOXHNE.js";import{t as y}from"./SidebarPlaygroundExample-DXnPmR3z.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>t(()=>({activeTab:_(`ref:1:0`,()=>c(`code`)),phase:_(`ref:1:1`,()=>c(`draft`)),plan:_(`ref:1:2`,()=>c(`pro`))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(y,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`v-pre / r-pre`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let y=a(`button`,_);r(_,y),e(y,`role`,`tab`),u(()=>{h(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),o(y,`click`,()=>{b.value=`preview`}),r(y,f(`效果`));let C=a(`button`,_);r(_,C),e(C,`role`,`tab`),u(()=>{h(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),o(C,`click`,()=>{b.value=`code`}),r(C,f(`代码`));let w=a(`div`,t);r(t,w),h(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=s(`rue:slot:anchor`);r(w,T),u(()=>{let e=b.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`card bg-base-100 shadow overflow-auto`);let i=a(`div`,t);r(t,i),h(i,`card-body p-0`);let o=s(`rue:component:anchor`);return r(i,o),u(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});g(()=>d(e,i,o))}),e}):``;g(()=>d(e,w,T))}),r(w,f(` `));let E=s(`rue:slot:anchor`);return r(w,E),u(()=>{let t=b.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),h(c,`card bg-base-100 shadow`);let m=a(`div`,c);r(c,m),h(m,`card-body grid gap-6`);let _=a(`section`,m);r(m,_),h(_,`space-y-3`);let v=a(`div`,_);r(_,v),h(v,`flex flex-wrap items-center justify-between gap-3`);let y=a(`h2`,v);r(v,y),h(y,`text-xl font-semibold`),r(y,f(`v-pre / r-pre`));let b=a(`div`,v);r(v,b),h(b,`join`);let C=a(`button`,b);r(b,C),h(C,`btn btn-sm join-item`),o(C,`click`,()=>{x.value=`draft`}),r(C,f(`草稿`));let w=a(`button`,b);r(b,w),h(w,`btn btn-sm join-item`),o(w,`click`,()=>{x.value=`published`}),r(w,f(`发布`));let T=a(`button`,b);r(b,T),h(T,`btn btn-sm join-item`),o(T,`click`,()=>{S.value=`pro`}),r(T,f(`Pro`));let E=a(`button`,b);r(b,E),h(E,`btn btn-sm join-item`),o(E,`click`,()=>{S.value=`basic`}),r(E,f(`Basic`));let D=a(`div`,_);r(_,D),h(D,`grid md:grid-cols-2 gap-3`);let O=a(`div`,D);r(D,O),h(O,`space-y-2`);let k=a(`div`,O);r(O,k),h(k,`text-sm opacity-70`),r(k,f(`当前阶段：`));let A=i(k);r(k,A),u(()=>{p(A,x.value)});let j=a(`div`,O);r(O,j),h(j,`rounded-box border border-dashed border-base-300 p-4`);let M=a(`span`,j);r(j,M),u(()=>{e(M,`v-if`,String(x.value===`draft`))});let N=i(M);r(M,N),p(N,`{{ phase.value }}`);let P=a(`div`,D);r(D,P),h(P,`space-y-2`);let F=a(`div`,P);r(P,F),h(F,`text-sm opacity-70`),r(F,f(`当前套餐：`));let I=i(F);r(F,I),u(()=>{p(I,S.value)});let L=a(`div`,P);r(P,L),h(L,`rounded-box border border-dashed border-base-300 p-4`);let R=a(`span`,L);r(L,R),u(()=>{e(R,`r-if`,String(S.value===`pro`))});let z=i(R);r(R,z),p(z,`{{ plan.value }}`);let B=a(`section`,m);r(m,B),h(B,`space-y-3`);let V=a(`h2`,B);r(B,V),h(V,`text-xl font-semibold`),r(V,f(`对照渲染`));let H=a(`div`,B);r(B,H),h(H,`rounded-box border border-base-300 p-4`);let U=s(`rue:slot:anchor`);return r(H,U),u(()=>{let e=x.value===`draft`?l(()=>{let e=n(),t=a(`span`,e);r(e,t),r(t,f(`当前阶段：`));let o=i(t);return r(t,o),u(()=>{p(o,x.value)}),e}):l(()=>{let e=n(),t=a(`span`,e);r(e,t),r(t,f(`当前阶段：`));let o=i(t);return r(t,o),u(()=>{p(o,x.value)}),e});g(()=>d(e,H,U))}),t}):``;g(()=>d(t,w,E))}),t})}),c,_),c})};export{b as default};