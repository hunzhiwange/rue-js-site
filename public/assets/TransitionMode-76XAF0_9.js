import{At as e,C as t,Dn as n,E as r,Mt as i,Ot as a,Q as o,Qt as s,Vt as c,_n as l,_t as u,at as d,b as f,ct as p,dt as m,et as h,g as ee,gn as g,gt as _,ht as v,kn as y,mn as b,nt as x,pn as S,qt as C,st as w,tn as T,ut as E,vn as D,vt as O,w as k,wn as A,xn as j,yt as M}from"./rue-runtime-HIMg8Lz8.js";import{t as N}from"./Code-DpH7u0gk.js";import{r as P}from"./SidebarPlaygroundExample-BCPRe0hA.js";var F=D(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Transition mode</h1>`),I=D(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=D(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=320,z=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],B=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],V=`
.mode-stage {
  position: relative;
  min-height: 13rem;
  overflow: hidden;
}

.mode-card {
  min-height: 13rem;
  border-radius: 0.75rem;
  transform-origin: center;
}

.mode-enter-active,
.mode-leave-active {
  transition:
    opacity ${R}ms ease,
    transform ${R}ms ease;
}

.mode-enter-from {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

.mode-leave-to {
  opacity: 0;
  transform: translateY(-16px) scale(0.98);
}

.mode-leave-active {
  position: absolute;
  inset: 0;
}
`,H=`import { type FC, Transition, ref } from '@rue-js/rue';

type Mode = 'default' | 'out-in' | 'in-out';

const cards = [
  { id: 'draft', title: 'Draft' },
  { id: 'review', title: 'Review' },
  { id: 'ship', title: 'Ship' },
];

const modes: Mode[] = ['default', 'out-in', 'in-out'];
const modeTips: Record<Mode, string> = {
  default: '旧节点 leave 与新节点 enter 同时开始。',
  'out-in': '旧节点先 leave，结束后新节点 enter。',
  'in-out': '新节点先 enter，结束后旧节点 leave。',
};

const TransitionModeExample: FC = () => {
  const index = ref(0);
  const mode = ref<Mode>('default');
  const current = () => cards[index.value];

  return (
    <>
      {modes.map(nextMode => (
        <button key={nextMode} onClick={() => (mode.value = nextMode)}>
          {nextMode}
        </button>
      ))}
      <button onClick={() => (index.value = (index.value + 1) % cards.length)}>
        Next
      </button>
      <p>{modeTips[mode.value]}</p>

      <Transition name="mode" mode={mode.value} type="transition" duration={320}>
        <section key={current().id}>
          <h2>{current().title}</h2>
        </section>
      </Transition>
    </>
  );
};

export default TransitionModeExample;`,U=()=>{let D=T(0),U=T(`default`),W=T(`preview`),G=()=>B[D.value],K=()=>z.find(e=>e.value===U.value),te=()=>{D.value=(D.value+1)%B.length},ne=()=>{D.value=(D.value+B.length-1)%B.length};return C(()=>p((()=>{let p=e(()=>{let e=u(),t=O(`style`,e);return m(e,t),A(()=>{a(t,V)}),e}),h=e(()=>{let a=u(),p=L().content.cloneNode(!0),h=p.firstChild,C=h.childNodes[0],T=C.parentNode,D=h.childNodes[1],P=D.parentNode;return a.appendChild(p),x(T,C,()=>{let e=W.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=g(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`,w(t,N,()=>({className:`h-full`,lang:`tsx`,code:H})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),A(()=>{let a=W.value===`preview`?e(()=>{let a=u(),p=O(`div`,a);m(a,p),o(p,`card bg-base-100 shadow`);let h=O(`div`,p);m(p,h),o(h,`card-body grid gap-4`);let x=O(`div`,h);m(h,x),o(x,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let C=O(`div`,x);m(x,C),o(C,`grid gap-2`);let w=O(`p`,C);m(C,w),o(w,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),m(w,M(`mode`));let T=O(`div`,C);m(C,T),o(T,`join`);let D=b(`rue:list:end`);S(T,D);let N=[];A(()=>{N=k(T,D,N,z||[],(e,t)=>e.value,(e,i)=>{let a=d(e);return t((e,t,i)=>r(e,i,()=>c(Object.assign(e=>{let t=g(`button`,e);t.setAttribute(`type`,`button`);let r;A(()=>{let e=`btn btn-sm join-item ${U.value===a.get().value?`btn-primary`:``}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let i=e=>{let t=()=>{U.value=a.get().value};typeof t==`function`&&t(e)};t.addEventListener(`click`,i),n(()=>t.removeEventListener(`click`,i));let o=l(``);return S(t,o),j(o,()=>a.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,n)=>{e=t,i=n,a.set(t)})})}),n(()=>f(N));let P=O(`div`,x);m(x,P),o(P,`flex flex-wrap gap-3`);let F=O(`button`,P);m(P,F),o(F,`btn btn-primary`);let I=e=>{let t=te;typeof t==`function`&&t(e)};F.addEventListener(`click`,I),s(()=>F.removeEventListener(`click`,I)),m(F,M(`Next panel`));let L=O(`button`,P);m(P,L),o(L,`btn`);let B=e=>{let t=ne;typeof t==`function`&&t(e)};L.addEventListener(`click`,B),s(()=>L.removeEventListener(`click`,B)),m(L,M(`Previous`));let V=O(`div`,h);m(h,V),o(V,`rounded-md border border-base-300 bg-base-200/40 p-4`);let H=O(`p`,V);m(V,H),o(H,`m-0 font-semibold`);let W=_(`rue:slot:anchor`);m(H,W),A(()=>{let e=K().title;y(()=>E(e,H,W))});let q=O(`p`,V);m(V,q),o(q,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let J=_(`rue:slot:anchor`);m(q,J),A(()=>{let e=K().summary;y(()=>E(e,q,J))});let Y=O(`div`,V);m(V,Y),o(Y,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let X=b(`rue:list:end`);S(Y,X);let Z=[];A(()=>{let e=K().steps||[];Z=k(Y,X,Z,e,(e,t)=>e,(e,n)=>{let i=d(e),a=d(n);return t((e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=g(`div`,e);t.className=`flex items-center gap-2`;let n=g(`span`,t);S(t,n),n.className=`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`;let r=l(``);S(n,r),j(r,()=>a.get()+1);let o=g(`span`,t);S(t,o);let s=l(``);return S(o,s),j(s,()=>i.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,r)=>{e=t,n=r,i.set(t),a.set(r)})})}),n(()=>f(Z));let Q=O(`div`,h);m(h,Q),o(Q,`mode-stage`);let $=_(`rue:component:anchor`);return m(Q,$),A(()=>{let t=i(ee,()=>({name:`mode`,mode:U.value,type:`transition`,duration:R,__rueTransitionChildFactory:()=>v(e(()=>{let e=u(),t=O(`section`,e);m(e,t),A(()=>{o(t,`mode-card bg-gradient-to-br ${G().tone} p-6 text-white shadow-lg`)});let n=O(`p`,t);m(t,n),o(n,`text-sm uppercase tracking-wide opacity-80`),m(n,M(`state`));let r=O(`h2`,t);m(t,r),o(r,`mt-2 text-3xl font-semibold`);let i=_(`rue:slot:anchor`);m(r,i),A(()=>{let e=G().title;y(()=>E(e,r,i))});let a=O(`p`,t);m(t,a),o(a,`mt-3 max-w-md text-sm leading-6 opacity-90`);let s=_(`rue:slot:anchor`);return m(a,s),A(()=>{let e=G().summary;y(()=>E(e,a,s))}),e},!0),G().id)}));y(()=>E(t,Q,$))}),a},!0):``;y(()=>E(a,P,D))}),a});return i(P,()=>({children:[c(e=>F().content.cloneNode(!0).firstChild),c(Object.assign(e=>{let t=I().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;A(()=>{let e=`tab ${W.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{W.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;A(()=>{let e=`tab ${W.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{W.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),p,h]}))})(),e=>h(()=>{})))};export{U as default};