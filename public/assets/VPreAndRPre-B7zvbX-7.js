import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as v}from"./Code-D5UqTwV6.js";import{r as y}from"./SidebarPlaygroundExample-D2vGHFCu.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>a(()=>({activeTab:_(`ref:1:0`,()=>n(`code`)),phase:_(`ref:1:1`,()=>n(`draft`)),plan:_(`ref:1:2`,()=>n(`pro`))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(y,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`v-pre / r-pre`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let y=h(`button`,_);o(_,y),s(y,`role`,`tab`),t(()=>{g(y,`tab ${b.value===`preview`?`tab-active`:``}`)}),i(y,`click`,()=>{b.value=`preview`}),o(y,d(`效果`));let C=h(`button`,_);o(_,C),s(C,`role`,`tab`),t(()=>{g(C,`tab ${b.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{b.value=`code`}),o(C,d(`代码`));let w=h(`div`,n);o(n,w),g(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=e(`rue:slot:anchor`);o(w,T),t(()=>{let n=b.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`card bg-base-100 shadow overflow-auto`);let a=h(`div`,i);o(i,a),g(a,`card-body p-0`);let s=e(`rue:component:anchor`);return o(a,s),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});r(()=>f(e,a,s))}),n}):``;r(()=>f(n,w,T))}),o(w,d(` `));let E=e(`rue:slot:anchor`);return o(w,E),t(()=>{let n=b.value===`preview`?u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`card bg-base-100 shadow`);let m=h(`div`,a);o(a,m),g(m,`card-body grid gap-6`);let _=h(`section`,m);o(m,_),g(_,`space-y-3`);let v=h(`div`,_);o(_,v),g(v,`flex flex-wrap items-center justify-between gap-3`);let y=h(`h2`,v);o(v,y),g(y,`text-xl font-semibold`),o(y,d(`v-pre / r-pre`));let b=h(`div`,v);o(v,b),g(b,`join`);let C=h(`button`,b);o(b,C),g(C,`btn btn-sm join-item`),i(C,`click`,()=>{x.value=`draft`}),o(C,d(`草稿`));let w=h(`button`,b);o(b,w),g(w,`btn btn-sm join-item`),i(w,`click`,()=>{x.value=`published`}),o(w,d(`发布`));let T=h(`button`,b);o(b,T),g(T,`btn btn-sm join-item`),i(T,`click`,()=>{S.value=`pro`}),o(T,d(`Pro`));let E=h(`button`,b);o(b,E),g(E,`btn btn-sm join-item`),i(E,`click`,()=>{S.value=`basic`}),o(E,d(`Basic`));let D=h(`div`,_);o(_,D),g(D,`grid md:grid-cols-2 gap-3`);let O=h(`div`,D);o(D,O),g(O,`space-y-2`);let k=h(`div`,O);o(O,k),g(k,`text-sm opacity-70`),o(k,d(`当前阶段：`));let A=p(k);o(k,A),t(()=>{l(A,x.value)});let j=h(`div`,O);o(O,j),g(j,`rounded-box border border-dashed border-base-300 p-4`);let M=h(`span`,j);o(j,M),t(()=>{s(M,`v-if`,String(x.value===`draft`))});let N=p(M);o(M,N),l(N,`{{ phase.value }}`);let P=h(`div`,D);o(D,P),g(P,`space-y-2`);let F=h(`div`,P);o(P,F),g(F,`text-sm opacity-70`),o(F,d(`当前套餐：`));let I=p(F);o(F,I),t(()=>{l(I,S.value)});let L=h(`div`,P);o(P,L),g(L,`rounded-box border border-dashed border-base-300 p-4`);let R=h(`span`,L);o(L,R),t(()=>{s(R,`r-if`,String(S.value===`pro`))});let z=p(R);o(R,z),l(z,`{{ plan.value }}`);let B=h(`section`,m);o(m,B),g(B,`space-y-3`);let V=h(`h2`,B);o(B,V),g(V,`text-xl font-semibold`),o(V,d(`对照渲染`));let H=h(`div`,B);o(B,H),g(H,`rounded-box border border-base-300 p-4`);let U=e(`rue:slot:anchor`);return o(H,U),t(()=>{let e=x.value===`draft`?u(()=>{let e=c(),n=h(`span`,e);o(e,n),o(n,d(`当前阶段：`));let r=p(n);return o(n,r),t(()=>{l(r,x.value)}),e}):u(()=>{let e=c(),n=h(`span`,e);o(e,n),o(n,d(`当前阶段：`));let r=p(n);return o(n,r),t(()=>{l(r,x.value)}),e});r(()=>f(e,H,U))}),n}):``;r(()=>f(n,w,E))}),n})}),a,_),a})};export{b as default};