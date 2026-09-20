import{F as e,Ht as t,P as n,Qt as r,Ut as i,V as a,Vt as o,Wt as s,X as c,Y as l,fn as u,gn as d,hn as f,in as p,mn as m,mt as h,nt as g,sn as _,u as v,yn as y}from"./rue-runtime-BWbIfNT8.js";import{t as b}from"./Code-C5ZhIIr9.js";import{r as x}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var S=y(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-pre / r-pre</h1>`),C=y(`<p class="mb-4 opacity-70">pre 区域原样显示 JSX 表达式，切换状态不会求值或更新；下方对照区域正常更新。</p>`),w=y(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=y(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=(y,E,D)=>{let O=h(`preview`),k=h(`draft`),A=h(`pro`);return g(()=>n(x,()=>({children:(n,h,g)=>{let y=()=>s(n=>{let o=m();o.appendChild(S().content.cloneNode(!0)),o.appendChild(C().content.cloneNode(!0));let h=w().content.cloneNode(!0),g=h.firstChild,y=g.childNodes[0],x=g.childNodes[1];o.appendChild(h),y.setAttribute(`role`,`tab`);let E;p(()=>{let e=`tab ${O.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,y.setAttribute(`class`,t))}),_(v(n,y,`click`,()=>()=>{O.value=`preview`})),x.setAttribute(`role`,`tab`);let D;p(()=>{let e=`tab ${O.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,x.setAttribute(`class`,t))}),_(v(n,x,`click`,()=>()=>{O.value=`code`}));let j=T().content.cloneNode(!0),M=j.firstChild,N=M.childNodes[0],P=N.parentNode,F=M.childNodes[1],I=F.parentNode;o.appendChild(j),i(P,N,()=>{let t=O.value===`code`;return t?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let n=f(`div`,t);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=f(`div`,n);return u(n,r),r.setAttribute(`class`,`card-body p-0`),e(r,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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
        <span v-if={phase.value === 'draft'}>{phase.value}</span>
      </div>

      <div r-pre className="rounded-box border border-dashed border-base-300 p-4">
        <span r-if={plan.value === 'pro'}>{plan.value}</span>
      </div>

      <div className="rounded-box border border-base-300 p-4">
        <span v-if={phase.value === 'draft'}>当前阶段：{phase.value}</span>
        <span v-else>当前阶段：{phase.value}</span>
      </div>
    </div>
  );
};

export default VPreAndRPre;`})),[n,n]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>a(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=m();return[t.firstChild,t.lastChild]})}}),i(I,F,()=>{let e=O.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let n=f(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow`);let i=f(`div`,n);u(n,i),i.setAttribute(`class`,`card-body grid gap-6`);let a=f(`section`,i);u(i,a),a.setAttribute(`class`,`space-y-3`);let o=f(`div`,a);u(a,o),o.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let s=f(`h2`,o);u(o,s),s.setAttribute(`class`,`text-xl font-semibold`),u(s,d(`v-pre / r-pre`));let p=f(`div`,o);u(o,p),p.setAttribute(`class`,`join`);let m=f(`button`,p);u(p,m),m.setAttribute(`class`,`btn btn-sm join-item`),_(v(e,m,`click`,()=>()=>{k.value=`draft`})),u(m,d(`草稿`));let h=f(`button`,p);u(p,h),h.setAttribute(`class`,`btn btn-sm join-item`),_(v(e,h,`click`,()=>()=>{k.value=`published`})),u(h,d(`发布`));let g=f(`button`,p);u(p,g),g.setAttribute(`class`,`btn btn-sm join-item`),_(v(e,g,`click`,()=>()=>{A.value=`pro`})),u(g,d(`Pro`));let y=f(`button`,p);u(p,y),y.setAttribute(`class`,`btn btn-sm join-item`),_(v(e,y,`click`,()=>()=>{A.value=`basic`})),u(y,d(`Basic`));let b=f(`div`,a);u(a,b),b.setAttribute(`class`,`grid md:grid-cols-2 gap-3`);let x=f(`div`,b);u(b,x),x.setAttribute(`class`,`space-y-2`);let S=f(`div`,x);u(x,S),S.setAttribute(`class`,`text-sm opacity-70`),u(S,d(`当前阶段：`));let C=d(``);u(S,C),r(C,()=>k.value);let w=f(`div`,x);u(x,w),w.setAttribute(`class`,`rounded-box border border-dashed border-base-300 p-4`);let T=f(`span`,w);u(w,T),T.setAttribute(`v-if`,`{phase.value === 'draft'}`),u(T,d(`{phase.value}`));let E=f(`div`,b);u(b,E),E.setAttribute(`class`,`space-y-2`);let D=f(`div`,E);u(E,D),D.setAttribute(`class`,`text-sm opacity-70`),u(D,d(`当前套餐：`));let O=d(``);u(D,O),r(O,()=>A.value);let j=f(`div`,E);u(E,j),j.setAttribute(`class`,`rounded-box border border-dashed border-base-300 p-4`);let M=f(`span`,j);u(j,M),M.setAttribute(`r-if`,`{plan.value === 'pro'}`),u(M,d(`{plan.value}`));let N=f(`section`,i);u(i,N),N.setAttribute(`class`,`space-y-3`);let P=f(`h2`,N);u(N,P),P.setAttribute(`class`,`text-xl font-semibold`),u(P,d(`对照渲染`));let F=f(`div`,N);return u(N,F),F.setAttribute(`class`,`rounded-box border border-base-300 p-4`),t(()=>k.value===`draft`?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=f(`span`,e);u(t,d(`当前阶段：`));let n=d(``);return u(t,n),c(n,()=>k.value),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=f(`span`,e);u(t,d(`当前阶段：`));let n=d(``);return u(t,n),c(n,()=>k.value),[t,t]})}).__rue_compiled_mount(F),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>a(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>a(e=>{let t=m();return[t.firstChild,t.lastChild]})}});let L=d(``),R=d(``);return o.insertBefore(L,o.firstChild),o.appendChild(R),[o.firstChild,o.lastChild]});return n==null?y():o(n,g,y)}})))};export{E as default};