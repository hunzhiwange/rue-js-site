import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as v}from"./Code-BIscIyEp.js";import{r as y}from"./SidebarPlaygroundExample-CEz1fABX.js";var b=()=>{let{activeTab:b,phase:x,plan:S}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>g(`code`)),phase:_(`ref:1:1`,()=>g(`draft`)),plan:_(`ref:1:2`,()=>g(`pro`))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(y,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`v-pre / r-pre`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let y=s(`button`,_);i(_,y),p(y,`role`,`tab`),n(()=>{u(y,`tab ${b.value===`preview`?`tab-active`:``}`)}),a(y,`click`,()=>{b.value=`preview`}),i(y,h(`效果`));let C=s(`button`,_);i(_,C),p(C,`role`,`tab`),n(()=>{u(C,`tab ${b.value===`code`?`tab-active`:``}`)}),a(C,`click`,()=>{b.value=`code`}),i(C,h(`代码`));let w=s(`div`,o);i(o,w),u(w,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let T=t(`rue:slot:anchor`);i(w,T),n(()=>{let a=b.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`card bg-base-100 shadow overflow-auto`);let c=s(`div`,o);i(o,c),u(c,`card-body p-0`);let l=t(`rue:component:anchor`);return i(c,l),n(()=>{let e=m(v,{className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`});r(()=>f(e,c,l))}),a}):``;r(()=>f(a,w,T))}),i(w,h(` `));let E=t(`rue:slot:anchor`);return i(w,E),n(()=>{let o=b.value===`preview`?l(()=>{let o=e(),m=s(`div`,o);i(o,m),u(m,`card bg-base-100 shadow`);let g=s(`div`,m);i(m,g),u(g,`card-body grid gap-6`);let _=s(`section`,g);i(g,_),u(_,`space-y-3`);let v=s(`div`,_);i(_,v),u(v,`flex flex-wrap items-center justify-between gap-3`);let y=s(`h2`,v);i(v,y),u(y,`text-xl font-semibold`),i(y,h(`v-pre / r-pre`));let b=s(`div`,v);i(v,b),u(b,`join`);let C=s(`button`,b);i(b,C),u(C,`btn btn-sm join-item`),a(C,`click`,()=>{x.value=`draft`}),i(C,h(`草稿`));let w=s(`button`,b);i(b,w),u(w,`btn btn-sm join-item`),a(w,`click`,()=>{x.value=`published`}),i(w,h(`发布`));let T=s(`button`,b);i(b,T),u(T,`btn btn-sm join-item`),a(T,`click`,()=>{S.value=`pro`}),i(T,h(`Pro`));let E=s(`button`,b);i(b,E),u(E,`btn btn-sm join-item`),a(E,`click`,()=>{S.value=`basic`}),i(E,h(`Basic`));let D=s(`div`,_);i(_,D),u(D,`grid md:grid-cols-2 gap-3`);let O=s(`div`,D);i(D,O),u(O,`space-y-2`);let k=s(`div`,O);i(O,k),u(k,`text-sm opacity-70`),i(k,h(`当前阶段：`));let A=d(k);i(k,A),n(()=>{c(A,x.value)});let j=s(`div`,O);i(O,j),u(j,`rounded-box border border-dashed border-base-300 p-4`);let M=s(`span`,j);i(j,M),n(()=>{p(M,`v-if`,String(x.value===`draft`))});let N=d(M);i(M,N),c(N,`{{ phase.value }}`);let P=s(`div`,D);i(D,P),u(P,`space-y-2`);let F=s(`div`,P);i(P,F),u(F,`text-sm opacity-70`),i(F,h(`当前套餐：`));let I=d(F);i(F,I),n(()=>{c(I,S.value)});let L=s(`div`,P);i(P,L),u(L,`rounded-box border border-dashed border-base-300 p-4`);let R=s(`span`,L);i(L,R),n(()=>{p(R,`r-if`,String(S.value===`pro`))});let z=d(R);i(R,z),c(z,`{{ plan.value }}`);let B=s(`section`,g);i(g,B),u(B,`space-y-3`);let V=s(`h2`,B);i(B,V),u(V,`text-xl font-semibold`),i(V,h(`对照渲染`));let H=s(`div`,B);i(B,H),u(H,`rounded-box border border-base-300 p-4`);let U=t(`rue:slot:anchor`);return i(H,U),n(()=>{let t=x.value===`draft`?l(()=>{let t=e(),r=s(`span`,t);i(t,r),i(r,h(`当前阶段：`));let a=d(r);return i(r,a),n(()=>{c(a,x.value)}),t}):l(()=>{let t=e(),r=s(`span`,t);i(t,r),i(r,h(`当前阶段：`));let a=d(r);return i(r,a),n(()=>{c(a,x.value)}),t});r(()=>f(t,H,U))}),o}):``;r(()=>f(o,w,E))}),o})}),g,_),g})};export{b as default};