import{B as e,Bt as t,Dt as n,F as r,I as i,M as a,Ut as o,V as s,Vt as c,W as l,Wt as u,X as d,Y as f,en as p,f as m,fn as h,gn as g,h as _,hn as v,in as y,mn as b,mt as x,n as S,nt as C,p as w,pn as T,qt as E,sn as D,u as O,vn as k,yn as A,z as j,zt as M}from"./rue-runtime-BWbIfNT8.js";import{t as N}from"./Code-C5ZhIIr9.js";import{r as P}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var F=A(`<section><p class="text-sm uppercase tracking-wide opacity-80">state</p><h2 class="mt-2 text-3xl font-semibold"><!--rue:text-hole:0--></h2><p class="mt-3 max-w-md text-sm leading-6 opacity-90">rue:direct-text</p></section>`),I=A(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">Transition mode</h1>`),L=A(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),R=A(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),z=320,B=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],V=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],H=(n,r,a)=>{let o=l(j(n,`card`));return i((e=>e)(u(()=>{let e=b(),n=F().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[1].childNodes[0],s=a.parentNode,c=r.childNodes[2].childNodes[0],l=c.parentNode,u=T(`rue:text-hole:1`);l.replaceChild(u,c),e.appendChild(n);let d;y(()=>{let e=`mode-card bg-gradient-to-br ${o.get().tone} p-6 text-white shadow-lg`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,i.setAttribute(`class`,t))}),t({parent:s,before:a},()=>M(o.get().title),()=>({})),t({parent:l,before:u},()=>M(o.get().summary),()=>({}));let f=g(``),p=g(``);return e.insertBefore(f,e.firstChild),e.appendChild(p),[e.firstChild,e.lastChild]}),o.get().id),e=>p(()=>{o.set(e.card)}),()=>e(n))},U=`
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

export default TransitionModeExample;`,G=(e,i,p)=>{let A=x(0),j=x(`default`),F=x(`preview`),G=()=>V[A.value],K=()=>B.find(e=>e.value===j.value),q=()=>{A.value=(A.value+1)%V.length},J=()=>{A.value=(A.value+V.length-1)%V.length};return C(()=>(()=>{let e=u(()=>{let e=b(),t=v(`style`,e);h(e,t),y(()=>{k(t,U)});let n=g(``),r=g(``);return e.insertBefore(n,e.firstChild),e.appendChild(r),[e.firstChild,e.lastChild]}),i=u(e=>{let i=b(),a=R().content.cloneNode(!0),p=a.firstChild,x=p.childNodes[0],C=x.parentNode,k=p.childNodes[1],A=k.parentNode;i.appendChild(a),o(C,x,()=>{let e=F.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=v(`div`,e);return t.setAttribute(`class`,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`),r(t,N,()=>({className:`h-full`,lang:`tsx`,code:W})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=b();return[t.firstChild,t.lastChild]})}}),t({parent:A,before:k},()=>F.value===`preview`?(e,i,a)=>c(e,a,()=>u(e=>{let i=b(),a=v(`div`,i);h(i,a),n(a,`card bg-base-100 shadow`);let o=v(`div`,a);h(a,o),n(o,`card-body grid gap-4`);let s=v(`div`,o);h(o,s),n(s,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let p=v(`div`,s);h(s,p),n(p,`grid gap-2`);let x=v(`p`,p);h(p,x),n(x,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),h(x,g(`mode`));let C=v(`div`,p);h(p,C),n(C,`join`);let k=T(`rue:list:end`);h(C,k);let A=[];E(()=>{A=_(C,k,A,B||[],(e,t)=>e.value,(e,n)=>{let r=l(e);return w((e,n,i)=>{let a=()=>u(e=>{let n=v(`button`,e);n.setAttribute(`type`,`button`);let i;y(()=>{let e=`btn btn-sm join-item ${j.value===r.get().value?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),D(O(e,n,`click`,()=>()=>{j.value=r.get().value}));let a=T(`rue:compiled-slot`);return h(n,a),t({parent:n,before:a},()=>M(r.get().label),()=>({})),[n,n]});return e==null?a():c(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),D(()=>m(A));let N=v(`div`,s);h(s,N),n(N,`flex flex-wrap gap-3`);let P=v(`button`,N);h(N,P),n(P,`btn btn-primary`);let F=e=>{let t=q;typeof t==`function`&&t(e)};P.addEventListener(`click`,F),D(()=>P.removeEventListener(`click`,F)),h(P,g(`Next panel`));let I=v(`button`,N);h(N,I),n(I,`btn`);let L=e=>{let t=J;typeof t==`function`&&t(e)};I.addEventListener(`click`,L),D(()=>I.removeEventListener(`click`,L)),h(I,g(`Previous`));let R=v(`div`,o);h(o,R),n(R,`rounded-md border border-base-300 bg-base-200/40 p-4`);let V=v(`p`,R);h(R,V),n(V,`m-0 font-semibold`);let U=T(`rue:slot:anchor`);h(V,U),t({parent:V,before:U},()=>M(K().title),()=>({}));let W=v(`p`,R);h(R,W),n(W,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let Y=T(`rue:slot:anchor`);h(W,Y),t({parent:W,before:Y},()=>M(K().summary),()=>({}));let X=v(`div`,R);h(R,X),n(X,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let Z=T(`rue:list:end`);h(X,Z);let Q=[];E(()=>{let e=K().steps||[];Q=_(X,Z,Q,e,(e,t)=>e,(e,t)=>{let n=l(e),r=l(t);return w((e,t,i)=>{let a=()=>f(e=>{let t=v(`div`,e);t.setAttribute(`class`,`flex items-center gap-2`);let i=v(`span`,t);h(t,i),i.setAttribute(`class`,`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`);let a=g(``);h(i,a),d(a,()=>r.get()+1);let o=v(`span`,t);h(t,o);let s=g(``);return h(o,s),d(s,()=>n.get()),[t,t]});return e==null?a():c(e,i,a)},(i,a)=>{e=i,t=a,n.set(i),r.set(a)},void 0)},!0,!1)}),D(()=>m(Q));let $=v(`div`,o);h(o,$),n($,`mode-stage`),S(()=>({name:`mode`,mode:j.value,type:`transition`,duration:z,childKey:G().id,children:(e,t,n)=>{let i=()=>u(e=>{let t=b();r(t,H,()=>({card:G()}));let n=g(``),i=g(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():c(e,n,i)}})).__rue_compiled_mount($,null);let ee=g(``),te=g(``);return i.insertBefore(ee,i.firstChild),i.appendChild(te),[i.firstChild,i.lastChild]})):(e,t,n)=>{let r=()=>s(e=>{let t=g(``);return[t,t]});return e==null?r():c(e,n,r)},()=>({}));let P=g(``),I=g(``);return i.insertBefore(P,i.firstChild),i.appendChild(I),[i.firstChild,i.lastChild]});return a(P,()=>({children:[s(e=>{let t=I().content.cloneNode(!0).firstChild;return[t,t]}),u(e=>{let t=L().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;y(()=>{let e=`tab ${F.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),D(O(e,n,`click`,()=>()=>{F.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return y(()=>{let e=`tab ${F.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),D(O(e,r,`click`,()=>()=>{F.value=`code`})),[t,t]}),e,i]}))})())};export{G as default};