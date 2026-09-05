import{Bt as e,C as t,Dn as n,Et as r,K as i,L as a,Lt as o,Mt as s,S as c,V as l,W as u,X as d,Y as f,_n as p,_t as m,bn as h,et as g,fn as _,gn as v,hn as y,ht as b,it as x,kn as S,nt as C,pn as w,pt as T,q as E,rt as D,tt as O,v as k,wn as A,x as j,z as M}from"./rue-runtime-CwEGJ854.js";import{t as N}from"./Code-DUvGro8N.js";import{r as P}from"./SidebarPlaygroundExample-EGR0CyDT.js";var F=p(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Transition mode</h1>`),I=p(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),L=p(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),R=320,z=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],B=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],V=`
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

export default TransitionModeExample;`,U=()=>{let p=e(0),U=e(`default`),W=e(`preview`),G=()=>B[p.value],K=()=>z.find(e=>e.value===U.value),ee=()=>{p.value=(p.value+1)%B.length},te=()=>{p.value=(p.value+B.length-1)%B.length};return s(()=>E((()=>{let e=b(()=>{let e=C(),t=D(`style`,e);return d(e,t),A(()=>{T(t,V)}),e}),s=b(()=>{let e=C(),s=L().content.cloneNode(!0),p=s.firstChild,T=p.childNodes[0],E=T.parentNode,M=p.childNodes[1],P=M.parentNode;return e.appendChild(s),l(E,T,()=>{let e=W.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=y(`div`,e);return t.className=`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`,i(t,N,()=>({className:`h-full`,lang:`tsx`,code:H})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=v(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=C();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),A(()=>{let e=W.value===`preview`?b(()=>{let e=C(),i=D(`div`,e);d(e,i),a(i,`card bg-base-100 shadow`);let s=D(`div`,i);d(i,s),a(s,`card-body grid gap-4`);let l=D(`div`,s);d(s,l),a(l,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let p=D(`div`,l);d(l,p),a(p,`grid gap-2`);let T=D(`p`,p);d(p,T),a(T,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),d(T,x(`mode`));let E=D(`div`,p);d(p,E),a(E,`join`);let M=w(`rue:list:end`);_(E,M);let N=[];A(()=>{N=t(E,M,N,z||[],(e,t)=>e.value,(e,t)=>{let i=u(e),a=u(t);return c((e,t,a)=>j(e,a,()=>r(Object.assign(e=>{let t=y(`button`,e);t.setAttribute(`type`,`button`);let r;A(()=>{let e=`btn btn-sm join-item ${U.value===i.get().value?`btn-primary`:``}`,n=e==null?``:String(e);Object.is(r,n)||(r=n,t.className=n)});let a=e=>{let t=()=>{U.value=i.get().value};typeof t==`function`&&t(e)};t.addEventListener(`click`,a),n(()=>t.removeEventListener(`click`,a));let o=v(``);return _(t,o),h(o,()=>i.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,r)=>{e=n,t=r,i.set(n),a.set(r)})})});let P=D(`div`,l);d(l,P),a(P,`flex flex-wrap gap-3`);let F=D(`button`,P);d(P,F),a(F,`btn btn-primary`);let I=e=>{let t=ee;typeof t==`function`&&t(e)};F.addEventListener(`click`,I),o(()=>F.removeEventListener(`click`,I)),d(F,x(`Next panel`));let L=D(`button`,P);d(P,L),a(L,`btn`);let B=e=>{let t=te;typeof t==`function`&&t(e)};L.addEventListener(`click`,B),o(()=>L.removeEventListener(`click`,B)),d(L,x(`Previous`));let V=D(`div`,s);d(s,V),a(V,`rounded-md border border-base-300 bg-base-200/40 p-4`);let H=D(`p`,V);d(V,H),a(H,`m-0 font-semibold`);let W=O(`rue:slot:anchor`);d(H,W),A(()=>{let e=K().title;S(()=>f(e,H,W))});let q=D(`p`,V);d(V,q),a(q,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let J=O(`rue:slot:anchor`);d(q,J),A(()=>{let e=K().summary;S(()=>f(e,q,J))});let Y=D(`div`,V);d(V,Y),a(Y,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let X=w(`rue:list:end`);_(Y,X);let Z=[];A(()=>{let e=K().steps||[];Z=t(Y,X,Z,e,(e,t)=>e,(e,t)=>{let n=u(e),i=u(t);return c((e,t,a)=>j(e,a,()=>r(Object.assign(e=>{let t=y(`div`,e);t.className=`flex items-center gap-2`;let r=y(`span`,t);_(t,r),r.className=`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`;let a=v(``);_(r,a),h(a,()=>i.get()+1);let o=y(`span`,t);_(t,o);let s=v(``);return _(o,s),h(s,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})});let Q=D(`div`,s);d(s,Q),a(Q,`mode-stage`);let $=O(`rue:component:anchor`);return d(Q,$),A(()=>{let e=m(k,()=>({name:`mode`,mode:U.value,type:`transition`,duration:R,__rueTransitionChildFactory:()=>g(b(()=>{let e=C(),t=D(`section`,e);d(e,t),A(()=>{a(t,`mode-card bg-gradient-to-br ${G().tone} p-6 text-white shadow-lg`)});let n=D(`p`,t);d(t,n),a(n,`text-sm uppercase tracking-wide opacity-80`),d(n,x(`state`));let r=D(`h2`,t);d(t,r),a(r,`mt-2 text-3xl font-semibold`);let i=O(`rue:slot:anchor`);d(r,i),A(()=>{let e=G().title;S(()=>f(e,r,i))});let o=D(`p`,t);d(t,o),a(o,`mt-3 max-w-md text-sm leading-6 opacity-90`);let s=O(`rue:slot:anchor`);return d(o,s),A(()=>{let e=G().summary;S(()=>f(e,o,s))}),e},!0),G().id)}));S(()=>f(e,Q,$))}),e},!0):``;S(()=>f(e,P,M))}),e});return m(P,()=>({children:[r(e=>F().content.cloneNode(!0).firstChild),r(Object.assign(e=>{let t=I().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;A(()=>{let e=`tab ${W.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{W.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;A(()=>{let e=`tab ${W.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{W.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e,s]}))})(),e=>M(()=>{})))};export{U as default};