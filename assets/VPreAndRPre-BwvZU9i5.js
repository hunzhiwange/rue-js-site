import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as _}from"./Code-C8wy38VS.js";import{t as v}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var y=()=>{let{activeTab:y,phase:b,plan:x}=g(`useSetup:0:0`,()=>h(()=>({activeTab:g(`ref:1:0`,()=>f(`code`)),phase:g(`ref:1:1`,()=>f(`draft`)),plan:g(`ref:1:2`,()=>f(`pro`))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(v,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`v-pre / r-pre`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let v=t(`button`);u(g,v),n(v,`role`,`tab`),d(()=>{s(v,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),e(v,`click`,()=>{y.value=`preview`}),u(v,r(`效果`));let S=t(`button`);u(g,S),n(S,`role`,`tab`),d(()=>{s(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),e(S,`click`,()=>{y.value=`code`}),u(S,r(`代码`));let C=t(`div`);u(f,C),s(C,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let w=a(`rue:slot:anchor`);u(C,w),d(()=>{l(y.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`card bg-base-100 shadow overflow-auto`);let r=t(`div`);u(n,r),s(r,`card-body p-0`);let i=a(`rue:component:anchor`);return u(r,i),d(()=>{l(p(_,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`}),r,i)}),e}):``,C,w)}),u(C,r(` `));let T=a(`rue:slot:anchor`);return u(C,T),d(()=>{l(y.value===`preview`?m(()=>{let f=o(),p=t(`div`);u(f,p),s(p,`card bg-base-100 shadow`);let h=t(`div`);u(p,h),s(h,`card-body grid gap-6`);let g=t(`section`);u(h,g),s(g,`space-y-3`);let _=t(`div`);u(g,_),s(_,`flex flex-wrap items-center justify-between gap-3`);let v=t(`h2`);u(_,v),s(v,`text-xl font-semibold`),u(v,r(`v-pre / r-pre`));let y=t(`div`);u(_,y),s(y,`join`);let S=t(`button`);u(y,S),s(S,`btn btn-sm join-item`),e(S,`click`,()=>{b.value=`draft`}),u(S,r(`草稿`));let C=t(`button`);u(y,C),s(C,`btn btn-sm join-item`),e(C,`click`,()=>{b.value=`published`}),u(C,r(`发布`));let w=t(`button`);u(y,w),s(w,`btn btn-sm join-item`),e(w,`click`,()=>{x.value=`pro`}),u(w,r(`Pro`));let T=t(`button`);u(y,T),s(T,`btn btn-sm join-item`),e(T,`click`,()=>{x.value=`basic`}),u(T,r(`Basic`));let E=t(`div`);u(g,E),s(E,`grid md:grid-cols-2 gap-3`);let D=t(`div`);u(E,D),s(D,`space-y-2`);let O=t(`div`);u(D,O),s(O,`text-sm opacity-70`),u(O,r(`当前阶段：`));let k=i(O);u(O,k),d(()=>{c(k,b.value)});let A=t(`div`);u(D,A),s(A,`rounded-box border border-dashed border-base-300 p-4`);let j=t(`span`);u(A,j),d(()=>{n(j,`v-if`,String(b.value===`draft`))});let M=i(j);u(j,M),c(M,`{{ phase.value }}`);let N=t(`div`);u(E,N),s(N,`space-y-2`);let P=t(`div`);u(N,P),s(P,`text-sm opacity-70`),u(P,r(`当前套餐：`));let F=i(P);u(P,F),d(()=>{c(F,x.value)});let I=t(`div`);u(N,I),s(I,`rounded-box border border-dashed border-base-300 p-4`);let L=t(`span`);u(I,L),d(()=>{n(L,`r-if`,String(x.value===`pro`))});let R=i(L);u(L,R),c(R,`{{ plan.value }}`);let z=t(`section`);u(h,z),s(z,`space-y-3`);let B=t(`h2`);u(z,B),s(B,`text-xl font-semibold`),u(B,r(`对照渲染`));let V=t(`div`);u(z,V),s(V,`rounded-box border border-base-300 p-4`);let H=a(`rue:slot:anchor`);return u(V,H),d(()=>{l(b.value===`draft`?m(()=>{let e=o(),n=t(`span`);u(e,n),u(n,r(`当前阶段：`));let a=i(n);return u(n,a),d(()=>{c(a,b.value)}),e}):m(()=>{let e=o(),n=t(`span`);u(e,n),u(n,r(`当前阶段：`));let a=i(n);return u(n,a),d(()=>{c(a,b.value)}),e}),V,H)}),f}):``,C,T)}),f})}),f,h),f})};export{y as default};