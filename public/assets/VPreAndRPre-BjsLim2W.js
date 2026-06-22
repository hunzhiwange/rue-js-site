import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-C5NjdoiC.js";import{r as y}from"./SidebarPlaygroundExample-DpItFif-.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>n(`code`)),phase:_(`ref:1:1`,()=>n(`draft`)),plan:_(`ref:1:2`,()=>n(`pro`))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(y,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`v-pre / r-pre`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let y=p(`button`,_);e(_,y),o(y,`role`,`tab`),t(()=>{f(y,`tab ${b.value===`preview`?`tab-active`:``}`)}),r(y,`click`,()=>{b.value=`preview`}),e(y,s(`效果`));let C=p(`button`,_);e(_,C),o(C,`role`,`tab`),t(()=>{f(C,`tab ${b.value===`code`?`tab-active`:``}`)}),r(C,`click`,()=>{b.value=`code`}),e(C,s(`代码`));let w=p(`div`,n);e(n,w),f(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=g(`rue:slot:anchor`);e(w,T),t(()=>{let n=b.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto`);let i=p(`div`,r);e(r,i),f(i,`card-body p-0`);let a=g(`rue:component:anchor`);return e(i,a),t(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});h(()=>u(e,i,a))}),n}):``;h(()=>u(n,w,T))}),e(w,s(` `));let E=g(`rue:slot:anchor`);return e(w,E),t(()=>{let n=b.value===`preview`?c(()=>{let n=l(),d=p(`div`,n);e(n,d),f(d,`card bg-base-100 shadow`);let m=p(`div`,d);e(d,m),f(m,`card-body grid gap-6`);let _=p(`section`,m);e(m,_),f(_,`space-y-3`);let v=p(`div`,_);e(_,v),f(v,`flex flex-wrap items-center justify-between gap-3`);let y=p(`h2`,v);e(v,y),f(y,`text-xl font-semibold`),e(y,s(`v-pre / r-pre`));let b=p(`div`,v);e(v,b),f(b,`join`);let C=p(`button`,b);e(b,C),f(C,`btn btn-sm join-item`),r(C,`click`,()=>{x.value=`draft`}),e(C,s(`草稿`));let w=p(`button`,b);e(b,w),f(w,`btn btn-sm join-item`),r(w,`click`,()=>{x.value=`published`}),e(w,s(`发布`));let T=p(`button`,b);e(b,T),f(T,`btn btn-sm join-item`),r(T,`click`,()=>{S.value=`pro`}),e(T,s(`Pro`));let E=p(`button`,b);e(b,E),f(E,`btn btn-sm join-item`),r(E,`click`,()=>{S.value=`basic`}),e(E,s(`Basic`));let D=p(`div`,_);e(_,D),f(D,`grid md:grid-cols-2 gap-3`);let O=p(`div`,D);e(D,O),f(O,`space-y-2`);let k=p(`div`,O);e(O,k),f(k,`text-sm opacity-70`),e(k,s(`当前阶段：`));let A=i(k);e(k,A),t(()=>{a(A,x.value)});let j=p(`div`,O);e(O,j),f(j,`rounded-box border border-dashed border-base-300 p-4`);let M=p(`span`,j);e(j,M),t(()=>{o(M,`v-if`,String(x.value===`draft`))});let N=i(M);e(M,N),a(N,`{{ phase.value }}`);let P=p(`div`,D);e(D,P),f(P,`space-y-2`);let F=p(`div`,P);e(P,F),f(F,`text-sm opacity-70`),e(F,s(`当前套餐：`));let I=i(F);e(F,I),t(()=>{a(I,S.value)});let L=p(`div`,P);e(P,L),f(L,`rounded-box border border-dashed border-base-300 p-4`);let R=p(`span`,L);e(L,R),t(()=>{o(R,`r-if`,String(S.value===`pro`))});let z=i(R);e(R,z),a(z,`{{ plan.value }}`);let B=p(`section`,m);e(m,B),f(B,`space-y-3`);let V=p(`h2`,B);e(B,V),f(V,`text-xl font-semibold`),e(V,s(`对照渲染`));let H=p(`div`,B);e(B,H),f(H,`rounded-box border border-base-300 p-4`);let U=g(`rue:slot:anchor`);return e(H,U),t(()=>{let n=x.value===`draft`?c(()=>{let n=l(),r=p(`span`,n);e(n,r),e(r,s(`当前阶段：`));let o=i(r);return e(r,o),t(()=>{a(o,x.value)}),n}):c(()=>{let n=l(),r=p(`span`,n);e(n,r),e(r,s(`当前阶段：`));let o=i(r);return e(r,o),t(()=>{a(o,x.value)}),n});h(()=>u(n,H,U))}),n}):``;h(()=>u(n,w,E))}),n})}),d,_),d})};export{b as default};