import{Bt as e,Dt as t,F as n,M as r,Q as i,Ut as a,V as o,Vt as s,Wt as c,_n as l,fn as u,gn as d,hn as f,in as p,mn as m,mt as h,nt as g,pn as _,sn as v,u as y,vn as b,yn as x,zt as S}from"./rue-runtime-BWbIfNT8.js";import{t as C}from"./Code-C5ZhIIr9.js";import{r as w}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var T=x(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-once / r-once</h1>`),E=x(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),D=x(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),O=(x,O,k)=>{let A=h(`code`),j=h(`首次渲染`),M=h(0);return g(()=>(()=>{let h=c(r=>{let h=m(),g=D().content.cloneNode(!0),y=g.firstChild,x=y.childNodes[0],w=x.parentNode,T=y.childNodes[1],E=T.parentNode;h.appendChild(g),a(w,x,()=>{let e=A.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=f(`div`,e);t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let r=f(`div`,t);return u(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,C,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

const VOnceAndROnce: FC = () => {
  const onceMessage = ref('首次渲染');
  const onceCount = ref(0);

  return (
    <div className="grid gap-4">
      <button
        className="btn btn-sm"
        onClick={() => {
          onceCount.value += 1;
          onceMessage.value = \`已更新 \${onceCount.value} 次\`;
        }}
      >
        更新数据
      </button>

      <div className="grid md:grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="text-sm opacity-70">当前值：{onceMessage.value}</div>
          <span v-once className="badge badge-primary badge-lg">
            {onceMessage.value}
          </span>
        </div>
        <div className="space-y-2">
          <div className="text-sm opacity-70">当前计数：{onceCount.value}</div>
          <span r-once className="badge badge-secondary badge-lg">
            count: {onceCount.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VOnceAndROnce;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>o(t=>{let n=d(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>o(e=>{let t=m();return[t.firstChild,t.lastChild]})}}),e({parent:E,before:T},()=>A.value===`preview`?(n,r,a)=>s(n,a,()=>c(()=>{let n=m(),r=f(`div`,n);u(n,r),t(r,`card bg-base-100 shadow`);let a=f(`div`,r);u(r,a),t(a,`card-body grid gap-6`);let s=f(`section`,a);u(a,s),t(s,`space-y-3`);let c=f(`div`,s);u(s,c),t(c,`flex flex-wrap items-center justify-between gap-3`);let h=f(`h2`,c);u(c,h),t(h,`text-xl font-semibold`),u(h,d(`v-once / r-once`));let g=f(`button`,c);u(c,g),t(g,`btn btn-sm`);let y=e=>{let t=()=>{M.value+=1,j.value=`已更新 ${M.value} 次`};typeof t==`function`&&t(e)};g.addEventListener(`click`,y),v(()=>g.removeEventListener(`click`,y)),u(g,d(`更新数据`));let x=f(`p`,s);u(s,x),t(x,`text-sm opacity-70`),u(x,d(`once 内容仅在当前组件挂载期间保持首次渲染值；离开路由后再次返回会重新取值。`));let C=f(`div`,s);u(s,C),t(C,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let w=f(`div`,C);u(C,w),t(w,`space-y-2`);let T=f(`div`,w);u(w,T),t(T,`text-sm opacity-70`),u(T,d(`当前值：`));let E=l(T);u(T,E),p(()=>{b(E,j.value)});let D=_(`rue:slot:anchor`);u(w,D);let O=i(`memo:3574:3698`,()=>o(()=>{let e=m(),n=f(`span`,e);u(e,n),t(n,`badge badge-primary badge-lg`);let r=l(n);u(n,r),b(r,j.value);let i=d(``),a=d(``);return e.insertBefore(i,e.firstChild),e.appendChild(a),[e.firstChild,e.lastChild]}),[]);e({parent:w,before:D},()=>S(O),()=>({}));let k=f(`div`,C);u(C,k),t(k,`space-y-2`);let A=f(`div`,k);u(k,A),t(A,`text-sm opacity-70`),u(A,d(`当前计数：`));let N=l(A);u(A,N),p(()=>{b(N,M.value)});let P=_(`rue:slot:anchor`);u(k,P);let F=i(`memo:3885:4016`,()=>o(()=>{let e=m(),n=f(`span`,e);u(e,n),t(n,`badge badge-secondary badge-lg`),u(n,d(`count: `));let r=l(n);u(n,r),b(r,M.value);let i=d(``),a=d(``);return e.insertBefore(i,e.firstChild),e.appendChild(a),[e.firstChild,e.lastChild]}),[]);e({parent:k,before:P},()=>S(F),()=>({}));let I=d(``),L=d(``);return n.insertBefore(I,n.firstChild),n.appendChild(L),[n.firstChild,n.lastChild]})):(e,t,n)=>{let r=()=>o(e=>{let t=d(``);return[t,t]});return e==null?r():s(e,n,r)},()=>({}));let O=d(``),k=d(``);return h.insertBefore(O,h.firstChild),h.appendChild(k),[h.firstChild,h.lastChild]});return r(w,()=>({children:[o(e=>{let t=T().content.cloneNode(!0).firstChild;return[t,t]}),c(e=>{let t=E().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;p(()=>{let e=`tab ${A.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),v(y(e,n,`click`,()=>()=>{A.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return p(()=>{let e=`tab ${A.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),v(y(e,r,`click`,()=>()=>{A.value=`code`})),[t,t]}),h]}))})())};export{O as default};