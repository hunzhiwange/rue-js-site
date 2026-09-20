import{Bt as e,Dt as t,F as n,H as r,I as i,U as a,Ut as o,Vt as s,Wt as c,Y as l,_t as u,en as d,f,fn as p,gn as m,gt as h,h as g,hn as _,in as v,mn as y,n as b,p as x,pn as S,qt as C,sn as w,st as T,u as E,vn as D,vt as O,yn as k,yt as A,z as j,zt as M}from"./rue-runtime-Cv6BZekS.js";import{t as N}from"./Code-BzFVdc3U.js";import{r as P}from"./SidebarPlaygroundExample-rFyhXfC_.js";var F=k(`<section><p class="text-sm uppercase tracking-wide opacity-80">state</p><h2 class="mt-2 text-3xl font-semibold"><!--rue:text-hole:0--></h2><p class="mt-3 max-w-md text-sm leading-6 opacity-90">rue:direct-text</p></section>`),I=k(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Transition mode</h1>`),L=k(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),R=k(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),z=320,B=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],V=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],H=(t,n,r)=>{let i=O(h(t,`card`));return a((e=>e)(c(()=>{let t=y(),n=F().content.cloneNode(!0),r=n.firstChild,a=r,o=r.childNodes[1].childNodes[0],s=o.parentNode,c=r.childNodes[2].childNodes[0],l=c.parentNode,u=S(`rue:text-hole:1`);l.replaceChild(u,c),t.appendChild(n);let d;v(()=>{let e=`mode-card bg-gradient-to-br ${i.get().tone} p-6 text-white shadow-lg`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,a.setAttribute(`class`,t))}),e({parent:s,before:o},()=>M(i.get().title),()=>({})),e({parent:l,before:u},()=>M(i.get().summary),()=>({}));let f=m(``),p=m(``);return t.insertBefore(f,t.firstChild),t.appendChild(p),[t.firstChild,t.lastChild]}),i.get().id),e=>d(()=>{i.set(e.card)}),()=>u(t))},U=`
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
    opacity ${z}ms ease,
    transform ${z}ms ease;
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
`,W=`import { type FC, Transition, ref } from '@rue-js/rue';

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

export default TransitionModeExample;`,G=(a,u,d)=>{let h=T(0),k=T(`default`),F=T(`preview`),G=()=>V[h.value],K=()=>B.find(e=>e.value===k.value),q=()=>{h.value=(h.value+1)%V.length},J=()=>{h.value=(h.value+V.length-1)%V.length};return l(()=>(()=>{let a=c(()=>{let e=y(),t=_(`style`,e);p(e,t),v(()=>{D(t,U)});let n=m(``),r=m(``);return e.insertBefore(n,e.firstChild),e.appendChild(r),[e.firstChild,e.lastChild]}),l=c(a=>{let l=y(),u=R().content.cloneNode(!0),d=u.firstChild,h=d.childNodes[0],T=h.parentNode,D=d.childNodes[1],j=D.parentNode;l.appendChild(u),o(T,h,()=>{let e=F.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(e=>{let t=_(`div`,e);return t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`),r(t,N,()=>({className:`h-full`,lang:`tsx`,code:W})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>A(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>A(e=>{let t=y();return[t.firstChild,t.lastChild]})}}),e({parent:j,before:D},()=>F.value===`preview`?(a,o,l)=>s(a,l,()=>c(a=>{let o=y(),l=_(`div`,o);p(o,l),t(l,`card bg-base-100 shadow`);let u=_(`div`,l);p(l,u),t(u,`card-body grid gap-4`);let d=_(`div`,u);p(u,d),t(d,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let h=_(`div`,d);p(d,h),t(h,`grid gap-2`);let T=_(`p`,h);p(h,T),t(T,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),p(T,m(`mode`));let D=_(`div`,h);p(h,D),t(D,`join`);let A=S(`rue:list:end`);p(D,A);let j=[];C(()=>{j=g(D,A,j,B||[],(e,t)=>e.value,(t,n)=>{let r=O(t);return x((t,n,i)=>{let a=()=>c(t=>{let n=_(`button`,t);n.setAttribute(`type`,`button`);let i;v(()=>{let e=`btn btn-sm join-item ${k.value===r.get().value?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),w(E(t,n,`click`,()=>()=>{k.value=r.get().value}));let a=S(`rue:compiled-slot`);return p(n,a),e({parent:n,before:a},()=>M(r.get().label),()=>({})),[n,n]});return t==null?a():s(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),w(()=>f(j));let N=_(`div`,d);p(d,N),t(N,`flex flex-wrap gap-3`);let P=_(`button`,N);p(N,P),t(P,`btn btn-primary`);let F=e=>{let t=q;typeof t==`function`&&t(e)};P.addEventListener(`click`,F),w(()=>P.removeEventListener(`click`,F)),p(P,m(`Next panel`));let I=_(`button`,N);p(N,I),t(I,`btn`);let L=e=>{let t=J;typeof t==`function`&&t(e)};I.addEventListener(`click`,L),w(()=>I.removeEventListener(`click`,L)),p(I,m(`Previous`));let R=_(`div`,u);p(u,R),t(R,`rounded-md border border-base-300 bg-base-200/40 p-4`);let V=_(`p`,R);p(R,V),t(V,`m-0 font-semibold`);let U=S(`rue:slot:anchor`);p(V,U),e({parent:V,before:U},()=>M(K().title),()=>({}));let W=_(`p`,R);p(R,W),t(W,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let Y=S(`rue:slot:anchor`);p(W,Y),e({parent:W,before:Y},()=>M(K().summary),()=>({}));let X=_(`div`,R);p(R,X),t(X,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let Z=S(`rue:list:end`);p(X,Z);let Q=[];C(()=>{let e=K().steps||[];Q=g(X,Z,Q,e,(e,t)=>e,(e,t)=>{let r=O(e),a=O(t);return x((e,t,o)=>{let c=()=>n(e=>{let t=_(`div`,e);t.setAttribute(`class`,`flex items-center gap-2`);let n=_(`span`,t);p(t,n),n.setAttribute(`class`,`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`);let o=m(``);p(n,o),i(o,()=>a.get()+1);let s=_(`span`,t);p(t,s);let c=m(``);return p(s,c),i(c,()=>r.get()),[t,t]});return e==null?c():s(e,o,c)},(n,i)=>{e=n,t=i,r.set(n),a.set(i)},void 0)},!0,!1)}),w(()=>f(Q));let $=_(`div`,u);p(u,$),t($,`mode-stage`),b(()=>({name:`mode`,mode:k.value,type:`transition`,duration:z,childKey:G().id,children:(e,t,n)=>{let i=()=>c(e=>{let t=y();r(t,H,()=>({card:G()}));let n=m(``),i=m(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():s(e,n,i)}})).__rue_compiled_mount($,null);let ee=m(``),te=m(``);return o.insertBefore(ee,o.firstChild),o.appendChild(te),[o.firstChild,o.lastChild]})):(e,t,n)=>{let r=()=>A(e=>{let t=m(``);return[t,t]});return e==null?r():s(e,n,r)},()=>({}));let P=m(``),I=m(``);return l.insertBefore(P,l.firstChild),l.appendChild(I),[l.firstChild,l.lastChild]});return j(P,()=>({children:[A(e=>{let t=I().content.cloneNode(!0).firstChild;return[t,t]}),c(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;v(()=>{let e=`tab ${F.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),w(E(e,n,`click`,()=>()=>{F.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return v(()=>{let e=`tab ${F.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),w(E(e,r,`click`,()=>()=>{F.value=`code`})),[t,t]}),a,l]}))})())};export{G as default};