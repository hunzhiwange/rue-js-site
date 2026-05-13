import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as v}from"./Code-2C2psoH3.js";import{t as y}from"./SidebarPlaygroundExample-DKa0aI1C.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>l(()=>({activeTab:_(`ref:1:0`,()=>p(`code`)),phase:_(`ref:1:1`,()=>p(`draft`)),plan:_(`ref:1:2`,()=>p(`pro`))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(y,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`v-pre / r-pre`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let y=n(`button`);i(_,y),s(y,`role`,`tab`),u(()=>{t(y,String(`tab ${b.value===`preview`?`tab-active`:``}`))}),f(y,`click`,()=>{b.value=`preview`}),i(y,r(`效果`));let C=n(`button`);i(_,C),s(C,`role`,`tab`),u(()=>{t(C,String(`tab ${b.value===`code`?`tab-active`:``}`))}),f(C,`click`,()=>{b.value=`code`}),i(C,r(`代码`));let w=n(`div`);i(l,w),t(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=a(`rue:slot:anchor`);i(w,T),u(()=>{let r=b.value===`code`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`card bg-base-100 shadow overflow-auto`);let s=n(`div`);i(o,s),t(s,`card-body p-0`);let c=a(`rue:component:anchor`);return i(s,c),u(()=>{let e=h(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});m(()=>d(e,s,c))}),r}):``;m(()=>d(r,w,T))}),i(w,r(` `));let E=a(`rue:slot:anchor`);return i(w,E),u(()=>{let l=b.value===`preview`?g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`card bg-base-100 shadow`);let h=n(`div`);i(p,h),t(h,`card-body grid gap-6`);let _=n(`section`);i(h,_),t(_,`space-y-3`);let v=n(`div`);i(_,v),t(v,`flex flex-wrap items-center justify-between gap-3`);let y=n(`h2`);i(v,y),t(y,`text-xl font-semibold`),i(y,r(`v-pre / r-pre`));let b=n(`div`);i(v,b),t(b,`join`);let C=n(`button`);i(b,C),t(C,`btn btn-sm join-item`),f(C,`click`,()=>{x.value=`draft`}),i(C,r(`草稿`));let w=n(`button`);i(b,w),t(w,`btn btn-sm join-item`),f(w,`click`,()=>{x.value=`published`}),i(w,r(`发布`));let T=n(`button`);i(b,T),t(T,`btn btn-sm join-item`),f(T,`click`,()=>{S.value=`pro`}),i(T,r(`Pro`));let E=n(`button`);i(b,E),t(E,`btn btn-sm join-item`),f(E,`click`,()=>{S.value=`basic`}),i(E,r(`Basic`));let D=n(`div`);i(_,D),t(D,`grid md:grid-cols-2 gap-3`);let O=n(`div`);i(D,O),t(O,`space-y-2`);let k=n(`div`);i(O,k),t(k,`text-sm opacity-70`),i(k,r(`当前阶段：`));let A=o(k);i(k,A),u(()=>{c(A,x.value)});let j=n(`div`);i(O,j),t(j,`rounded-box border border-dashed border-base-300 p-4`);let M=n(`span`);i(j,M),u(()=>{s(M,`v-if`,String(x.value===`draft`))});let N=o(M);i(M,N),c(N,`{{ phase.value }}`);let P=n(`div`);i(D,P),t(P,`space-y-2`);let F=n(`div`);i(P,F),t(F,`text-sm opacity-70`),i(F,r(`当前套餐：`));let I=o(F);i(F,I),u(()=>{c(I,S.value)});let L=n(`div`);i(P,L),t(L,`rounded-box border border-dashed border-base-300 p-4`);let R=n(`span`);i(L,R),u(()=>{s(R,`r-if`,String(S.value===`pro`))});let z=o(R);i(R,z),c(z,`{{ plan.value }}`);let B=n(`section`);i(h,B),t(B,`space-y-3`);let V=n(`h2`);i(B,V),t(V,`text-xl font-semibold`),i(V,r(`对照渲染`));let H=n(`div`);i(B,H),t(H,`rounded-box border border-base-300 p-4`);let U=a(`rue:slot:anchor`);return i(H,U),u(()=>{let t=x.value===`draft`?g(()=>{let t=e(),a=n(`span`);i(t,a),i(a,r(`当前阶段：`));let s=o(a);return i(a,s),u(()=>{c(s,x.value)}),t}):g(()=>{let t=e(),a=n(`span`);i(t,a),i(a,r(`当前阶段：`));let s=o(a);return i(a,s),u(()=>{c(s,x.value)}),t});m(()=>d(t,H,U))}),l}):``;m(()=>d(l,w,E))}),l})}),l,p),l})};export{b as default};