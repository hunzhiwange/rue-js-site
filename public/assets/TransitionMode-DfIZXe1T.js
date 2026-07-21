import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v,o as y}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as b}from"./Transition-CNKiaMmY.js";import{t as x}from"./Code-DhoWkRkB.js";import{r as S}from"./SidebarPlaygroundExample-B78jsvoF.js";var C=320,w=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],T=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],E=`
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
    opacity ${C}ms ease,
    transform ${C}ms ease;
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
`,D=`import { type FC, Transition, ref } from '@rue-js/rue';

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

export default TransitionModeExample;`,O=()=>{let{index:O,mode:k,activeTab:A,current:j,activeMode:M,next:N,previous:P}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`ref:1:0`,()=>l(0)),t=_(`ref:1:1`,()=>l(`default`));return{index:e,mode:t,activeTab:_(`ref:1:2`,()=>l(`preview`)),current:()=>T[e.value],activeMode:()=>w.find(e=>e.value===t.value),next:()=>{e.value=(e.value+1)%T.length},previous:()=>{e.value=(e.value+T.length-1)%T.length}}}));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(S,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`Transition mode`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let S=u(`button`,_);d(_,S),t(S,`role`,`tab`),f(()=>{r(S,`tab ${A.value===`preview`?`tab-active`:``}`)}),c(S,`click`,()=>{A.value=`preview`}),d(S,s(`效果`));let T=u(`button`,_);d(_,T),t(T,`role`,`tab`),f(()=>{r(T,`tab ${A.value===`code`?`tab-active`:``}`)}),c(T,`click`,()=>{A.value=`code`}),d(T,s(`代码`));let O=u(`style`,e);d(e,O),f(()=>{n(O,E)});let F=u(`div`,e);d(e,F),r(F,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let I=i(`rue:slot:anchor`);d(F,I),f(()=>{let e=A.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let n=i(`rue:component:anchor`);return d(t,n),f(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:D});p(()=>h(e,t,n))}),e}):``;p(()=>h(e,F,I))}),d(F,s(` `));let L=i(`rue:slot:anchor`);return d(F,L),f(()=>{let e=A.value===`preview`?m(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`card bg-base-100 shadow`);let _=u(`div`,l);d(l,_),r(_,`card-body grid gap-4`);let x=u(`div`,_);d(_,x),r(x,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let S=u(`div`,x);d(x,S),r(S,`grid gap-2`);let T=u(`p`,S);d(S,T),r(T,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),d(T,s(`mode`));let E=u(`div`,S);d(S,E),r(E,`join`);let D=i(`rue:list:start`),O=i(`rue:list:end`);d(E,D),d(E,O);let A=new Map;f(()=>{A=v({items:w||[],getKey:(e,t)=>e.value,elements:A,parent:E,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(e,n,o,s,l)=>{h(m(()=>{let n=a(),o=u(`button`,n);d(n,o),f(()=>{t(o,`key`,String(e.value))}),t(o,`type`,`button`),f(()=>{r(o,`btn btn-sm join-item ${k.value===e.value?`btn-primary`:``}`)}),c(o,`click`,()=>{k.value=e.value});let s=i(`rue:slot:anchor`);return d(o,s),f(()=>{let t=e.label;p(()=>h(t,o,s))}),n}),n,o)}})});let F=u(`div`,x);d(x,F),r(F,`flex flex-wrap gap-3`);let I=u(`button`,F);d(F,I),r(I,`btn btn-primary`),c(I,`click`,N),d(I,s(`Next panel`));let L=u(`button`,F);d(F,L),r(L,`btn`),c(L,`click`,P),d(L,s(`Previous`));let R=u(`div`,_);d(_,R),r(R,`rounded-md border border-base-300 bg-base-200/40 p-4`);let z=u(`p`,R);d(R,z),r(z,`m-0 font-semibold`);let B=i(`rue:slot:anchor`);d(z,B),f(()=>{let e=M().title;p(()=>h(e,z,B))});let V=u(`p`,R);d(R,V),r(V,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let H=i(`rue:slot:anchor`);d(V,H),f(()=>{let e=M().summary;p(()=>h(e,V,H))});let U=u(`div`,R);d(R,U),r(U,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let W=i(`rue:list:start`),G=i(`rue:list:end`);d(U,W),d(U,G);let K=new Map;f(()=>{K=v({items:M().steps||[],getKey:(e,t)=>e,elements:K,parent:U,before:G,singleRoot:!0,start:W,renderItem:(e,i,s,c,l)=>{h(m(()=>{let i=a(),s=u(`div`,i);d(i,s),f(()=>{t(s,`key`,String(e))}),r(s,`flex items-center gap-2`);let c=u(`span`,s);d(s,c),r(c,`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`);let p=o(c);d(c,p),f(()=>{n(p,l+1)});let m=u(`span`,s);d(s,m);let h=o(m);return d(m,h),f(()=>{n(h,e)}),i}),i,s)}})});let q=u(`div`,_);d(_,q),r(q,`mode-stage`);let J=i(`rue:component:anchor`);return d(q,J),f(()=>{let e=g(b,{name:`mode`,mode:k.value,type:`transition`,duration:C,__rueTransitionChildFactory:()=>y(m(()=>{let e=a(),n=u(`section`,e);d(e,n),f(()=>{t(n,`key`,String(j().id))}),f(()=>{r(n,`mode-card bg-gradient-to-br ${j().tone} p-6 text-white shadow-lg`)});let o=u(`p`,n);d(n,o),r(o,`text-sm uppercase tracking-wide opacity-80`),d(o,s(`state`));let c=u(`h2`,n);d(n,c),r(c,`mt-2 text-3xl font-semibold`);let l=i(`rue:slot:anchor`);d(c,l),f(()=>{let e=j().title;p(()=>h(e,c,l))});let m=u(`p`,n);d(n,m),r(m,`mt-3 max-w-md text-sm leading-6 opacity-90`);let g=i(`rue:slot:anchor`);return d(m,g),f(()=>{let e=j().summary;p(()=>h(e,m,g))}),e}),j().id)});p(()=>h(e,q,J))}),e}):``;p(()=>h(e,F,L))}),e})}),l,_),l})};export{O as default};