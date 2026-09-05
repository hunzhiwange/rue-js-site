import{Bt as e,Dn as t,Et as n,Ht as r,K as i,L as a,Lt as o,Mt as s,V as c,X as l,Y as u,_n as d,_t as f,at as p,bn as m,fn as h,gn as g,hn as _,ht as v,it as y,kn as b,nt as x,pt as S,q as C,qt as w,rt as T,tt as E,wn as D,z as O}from"./rue-runtime-CwEGJ854.js";import{t as k}from"./Code-B3jCYMAr.js";import{r as A}from"./SidebarPlaygroundExample-EGR0CyDT.js";var j=d(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-once / r-once</h1>`),M=d(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=d(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),P=()=>{let d=e(`code`),P=e(`首次渲染`),F=e(0);return s(()=>C((()=>{let e=v(()=>{let e=x(),t=N().content.cloneNode(!0),s=t.firstChild,f=s.childNodes[0],C=f.parentNode,O=s.childNodes[1],A=O.parentNode;return e.appendChild(t),c(C,f,()=>{let e=d.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(e=>{let t=_(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=_(`div`,t);return h(t,n),n.className=`card-body p-0`,i(n,k,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>n(Object.assign(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),D(()=>{let e=d.value===`preview`?v(()=>{let e=x(),t=T(`div`,e);l(e,t),a(t,`card bg-base-100 shadow`);let i=T(`div`,t);l(t,i),a(i,`card-body grid gap-6`);let s=T(`section`,i);l(i,s),a(s,`space-y-3`);let c=T(`div`,s);l(s,c),a(c,`flex flex-wrap items-center justify-between gap-3`);let d=T(`h2`,c);l(c,d),a(d,`text-xl font-semibold`),l(d,y(`v-once / r-once`));let f=T(`button`,c);l(c,f),a(f,`btn btn-sm`);let v=e=>{let t=()=>{F.value+=1,P.value=`已更新 ${F.value} 次`};typeof t==`function`&&t(e)};f.addEventListener(`click`,v),o(()=>f.removeEventListener(`click`,v)),l(f,y(`更新数据`));let b=T(`p`,s);l(s,b),a(b,`text-sm opacity-70`),l(b,y(`once 内容仅在当前组件挂载期间保持首次渲染值；离开路由后再次返回会重新取值。`));let C=T(`div`,s);l(s,C),a(C,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let O=T(`div`,C);l(C,O),a(O,`space-y-2`);let k=T(`div`,O);l(O,k),a(k,`text-sm opacity-70`),l(k,y(`当前值：`));let A=p(k);l(k,A),D(()=>{S(A,P.value)});let j=E(`rue:slot:anchor`);l(O,j);let M=w(`useMemo:3574:3698`,()=>r(()=>n(Object.assign(e=>{let t=_(`span`,e);t.className=`badge badge-primary badge-lg`;let n=g(``);return h(t,n),m(n,()=>P.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),[]));u(M,O,j);let N=T(`div`,C);l(C,N),a(N,`space-y-2`);let I=T(`div`,N);l(N,I),a(I,`text-sm opacity-70`),l(I,y(`当前计数：`));let L=p(I);l(I,L),D(()=>{S(L,F.value)});let R=E(`rue:slot:anchor`);l(N,R);let z=w(`useMemo:3885:4016`,()=>r(()=>n(Object.assign(e=>{let t=_(`span`,e);t.className=`badge badge-secondary badge-lg`,h(t,g(`count: `));let n=g(``);return h(t,n),m(n,()=>F.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),[]));return u(z,N,R),e},!0):``;b(()=>u(e,A,O))}),e});return f(A,()=>({children:[n(e=>j().content.cloneNode(!0).firstChild),n(Object.assign(e=>{let n=M().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;D(()=>{let e=`tab ${d.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{d.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;D(()=>{let e=`tab ${d.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{d.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e]}))})(),e=>O(()=>{})))};export{P as default};