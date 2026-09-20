import{F as e,H as t,Ht as n,I as r,Qt as i,Ut as a,V as o,Vt as s,Wt as c,Y as l,fn as u,gn as d,hn as f,in as p,mn as m,sn as h,st as g,u as _,yn as v,yt as y}from"./rue-runtime-Cv6BZekS.js";import{t as b}from"./Code-BzFVdc3U.js";import{r as x}from"./SidebarPlaygroundExample-rFyhXfC_.js";var S=v(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-pre / r-pre</h1>`),C=v(`<p class="mb-4 opacity-70">pre 区域原样显示 JSX 表达式，切换状态不会求值或更新；下方对照区域正常更新。</p>`),w=v(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),T=v(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),E=(v,E,D)=>{let O=g(`preview`),k=g(`draft`),A=g(`pro`);return l(()=>o(x,()=>({children:(o,l,g)=>{let v=()=>c(o=>{let s=m();s.appendChild(S().content.cloneNode(!0)),s.appendChild(C().content.cloneNode(!0));let l=w().content.cloneNode(!0),g=l.firstChild,v=g.childNodes[0],x=g.childNodes[1];s.appendChild(l),v.setAttribute(`role`,`tab`);let E;p(()=>{let e=`tab ${O.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(E,t)||(E=t,v.setAttribute(`class`,t))}),h(_(o,v,`click`,()=>()=>{O.value=`preview`})),x.setAttribute(`role`,`tab`);let D;p(()=>{let e=`tab ${O.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,x.setAttribute(`class`,t))}),h(_(o,x,`click`,()=>()=>{O.value=`code`}));let j=T().content.cloneNode(!0),M=j.firstChild,N=M.childNodes[0],P=N.parentNode,F=M.childNodes[1],I=F.parentNode;s.appendChild(j),a(P,N,()=>{let e=O.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let n=f(`div`,e);n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=f(`div`,n);return u(n,r),r.setAttribute(`class`,`card-body p-0`),t(r,b,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VPreAndRPre;`})),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>y(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>y(e=>{let t=m();return[t.firstChild,t.lastChild]})}}),a(I,F,()=>{let t=O.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>c(t=>{let a=f(`div`,t);a.setAttribute(`class`,`card bg-base-100 shadow`);let o=f(`div`,a);u(a,o),o.setAttribute(`class`,`card-body grid gap-6`);let s=f(`section`,o);u(o,s),s.setAttribute(`class`,`space-y-3`);let c=f(`div`,s);u(s,c),c.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let l=f(`h2`,c);u(c,l),l.setAttribute(`class`,`text-xl font-semibold`),u(l,d(`v-pre / r-pre`));let p=f(`div`,c);u(c,p),p.setAttribute(`class`,`join`);let m=f(`button`,p);u(p,m),m.setAttribute(`class`,`btn btn-sm join-item`),h(_(t,m,`click`,()=>()=>{k.value=`draft`})),u(m,d(`草稿`));let g=f(`button`,p);u(p,g),g.setAttribute(`class`,`btn btn-sm join-item`),h(_(t,g,`click`,()=>()=>{k.value=`published`})),u(g,d(`发布`));let v=f(`button`,p);u(p,v),v.setAttribute(`class`,`btn btn-sm join-item`),h(_(t,v,`click`,()=>()=>{A.value=`pro`})),u(v,d(`Pro`));let y=f(`button`,p);u(p,y),y.setAttribute(`class`,`btn btn-sm join-item`),h(_(t,y,`click`,()=>()=>{A.value=`basic`})),u(y,d(`Basic`));let b=f(`div`,s);u(s,b),b.setAttribute(`class`,`grid md:grid-cols-2 gap-3`);let x=f(`div`,b);u(b,x),x.setAttribute(`class`,`space-y-2`);let S=f(`div`,x);u(x,S),S.setAttribute(`class`,`text-sm opacity-70`),u(S,d(`当前阶段：`));let C=d(``);u(S,C),i(C,()=>k.value);let w=f(`div`,x);u(x,w),w.setAttribute(`class`,`rounded-box border border-dashed border-base-300 p-4`);let T=f(`span`,w);u(w,T),T.setAttribute(`v-if`,`{phase.value === 'draft'}`),u(T,d(`{phase.value}`));let E=f(`div`,b);u(b,E),E.setAttribute(`class`,`space-y-2`);let D=f(`div`,E);u(E,D),D.setAttribute(`class`,`text-sm opacity-70`),u(D,d(`当前套餐：`));let O=d(``);u(D,O),i(O,()=>A.value);let j=f(`div`,E);u(E,j),j.setAttribute(`class`,`rounded-box border border-dashed border-base-300 p-4`);let M=f(`span`,j);u(j,M),M.setAttribute(`r-if`,`{plan.value === 'pro'}`),u(M,d(`{plan.value}`));let N=f(`section`,o);u(o,N),N.setAttribute(`class`,`space-y-3`);let P=f(`h2`,N);u(N,P),P.setAttribute(`class`,`text-xl font-semibold`),u(P,d(`对照渲染`));let F=f(`div`,N);return u(N,F),F.setAttribute(`class`,`rounded-box border border-base-300 p-4`),n(()=>k.value===`draft`?{__rue_compiled_branch_key:!0,create:()=>e(e=>{let t=f(`span`,e);u(t,d(`当前阶段：`));let n=d(``);return u(t,n),r(n,()=>k.value),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>e(e=>{let t=f(`span`,e);u(t,d(`当前阶段：`));let n=d(``);return u(t,n),r(n,()=>k.value),[t,t]})}).__rue_compiled_mount(F),[a,a]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>y(e=>{let n=d(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>y(e=>{let t=m();return[t.firstChild,t.lastChild]})}});let L=d(``),R=d(``);return s.insertBefore(L,s.firstChild),s.appendChild(R),[s.firstChild,s.lastChild]});return o==null?v():s(o,g,v)}})))};export{E as default};