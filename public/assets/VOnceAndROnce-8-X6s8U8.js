import{At as e,Dn as t,Ht as n,Mt as r,Ot as i,Q as a,Qt as o,Vt as s,_n as c,_t as l,bt as u,ct as d,dt as f,et as p,gn as m,gt as h,kn as g,nt as _,pn as v,qt as y,st as b,tn as x,ut as S,vn as C,vt as w,wn as T,xn as E,yt as D}from"./rue-runtime-HIMg8Lz8.js";import{t as O}from"./Code-DpH7u0gk.js";import{r as k}from"./SidebarPlaygroundExample-BCPRe0hA.js";var A=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-once / r-once</h1>`),j=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),M=C(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),N=()=>{let C=x(`code`),N=x(`首次渲染`),P=x(0);return y(()=>d((()=>{let d=e(()=>{let t=l(),r=M().content.cloneNode(!0),d=r.firstChild,p=d.childNodes[0],y=p.parentNode,x=d.childNodes[1],k=x.parentNode;return t.appendChild(r),_(y,p,()=>{let e=C.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=m(`div`,e);t.className=`card bg-base-100 shadow overflow-auto`;let n=m(`div`,t);return v(t,n),n.className=`card-body p-0`,b(n,O,()=>({className:`h-full`,lang:`tsx`,code:`import { type FC, ref } from '@rue-js/rue';

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

export default VOnceAndROnce;`})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(Object.assign(t=>{let n=c(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),T(()=>{let t=C.value===`preview`?e(()=>{let e=l(),t=w(`div`,e);f(e,t),a(t,`card bg-base-100 shadow`);let r=w(`div`,t);f(t,r),a(r,`card-body grid gap-6`);let d=w(`section`,r);f(r,d),a(d,`space-y-3`);let p=w(`div`,d);f(d,p),a(p,`flex flex-wrap items-center justify-between gap-3`);let g=w(`h2`,p);f(p,g),a(g,`text-xl font-semibold`),f(g,D(`v-once / r-once`));let _=w(`button`,p);f(p,_),a(_,`btn btn-sm`);let y=e=>{let t=()=>{P.value+=1,N.value=`已更新 ${P.value} 次`};typeof t==`function`&&t(e)};_.addEventListener(`click`,y),o(()=>_.removeEventListener(`click`,y)),f(_,D(`更新数据`));let b=w(`p`,d);f(d,b),a(b,`text-sm opacity-70`),f(b,D(`once 内容仅在当前组件挂载期间保持首次渲染值；离开路由后再次返回会重新取值。`));let x=w(`div`,d);f(d,x),a(x,`rounded-box border border-base-300 p-4 grid md:grid-cols-2 gap-3`);let C=w(`div`,x);f(x,C),a(C,`space-y-2`);let O=w(`div`,C);f(C,O),a(O,`text-sm opacity-70`),f(O,D(`当前值：`));let k=u(O);f(O,k),T(()=>{i(k,N.value)});let A=h(`rue:slot:anchor`);f(C,A);let j=n(`memo:3574:3698`,()=>s(Object.assign(e=>{let t=m(`span`,e);t.className=`badge badge-primary badge-lg`;let n=c(``);return v(t,n),E(n,()=>N.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),[]);S(j,C,A);let M=w(`div`,x);f(x,M),a(M,`space-y-2`);let F=w(`div`,M);f(M,F),a(F,`text-sm opacity-70`),f(F,D(`当前计数：`));let I=u(F);f(F,I),T(()=>{i(I,P.value)});let L=h(`rue:slot:anchor`);f(M,L);let R=n(`memo:3885:4016`,()=>s(Object.assign(e=>{let t=m(`span`,e);t.className=`badge badge-secondary badge-lg`,v(t,c(`count: `));let n=c(``);return v(t,n),E(n,()=>P.value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),[]);return S(R,M,L),e},!0):``;g(()=>S(t,k,x))}),t});return r(k,()=>({children:[s(e=>A().content.cloneNode(!0).firstChild),s(Object.assign(e=>{let n=j().content.cloneNode(!0).firstChild,r=n.childNodes[0],i=n.childNodes[1];r.setAttribute(`role`,`tab`);let a;T(()=>{let e=`tab ${C.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{C.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),t(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;T(()=>{let e=`tab ${C.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{C.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),t(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),d]}))})(),e=>p(()=>{})))};export{N as default};