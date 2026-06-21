import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v,o as y}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as b}from"./Transition-BACSrr7q.js";import{t as x}from"./Code-4SUSUwRg.js";import{r as S}from"./SidebarPlaygroundExample-BEWYUWOl.js";var C=320,w=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],T=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],E=`
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

export default TransitionModeExample;`,O=()=>{let{index:O,mode:k,activeTab:A,current:j,activeMode:M,next:N,previous:P}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>t(0)),n=_(`ref:1:1`,()=>t(`default`));return{index:e,mode:n,activeTab:_(`ref:1:2`,()=>t(`preview`)),current:()=>T[e.value],activeMode:()=>w.find(e=>e.value===n.value),next:()=>{e.value=(e.value+1)%T.length},previous:()=>{e.value=(e.value+T.length-1)%T.length}}}));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(S,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`Transition mode`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let S=u(`button`,_);n(_,S),l(S,`role`,`tab`),g(()=>{i(S,`tab ${A.value===`preview`?`tab-active`:``}`)}),r(S,`click`,()=>{A.value=`preview`}),n(S,f(`效果`));let T=u(`button`,_);n(_,T),l(T,`role`,`tab`),g(()=>{i(T,`tab ${A.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{A.value=`code`}),n(T,f(`代码`));let O=u(`style`,t);n(t,O),g(()=>{h(O,E)});let F=u(`div`,t);n(t,F),i(F,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let I=a(`rue:slot:anchor`);n(F,I),g(()=>{let t=A.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let o=a(`rue:component:anchor`);return n(r,o),g(()=>{let t=p(x,{className:`h-full`,lang:`tsx`,code:D});e(()=>d(t,r,o))}),t}):``;e(()=>d(t,F,I))}),n(F,f(` `));let L=a(`rue:slot:anchor`);return n(F,L),g(()=>{let t=A.value===`preview`?c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`card bg-base-100 shadow`);let _=u(`div`,o);n(o,_),i(_,`card-body grid gap-4`);let x=u(`div`,_);n(_,x),i(x,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let S=u(`div`,x);n(x,S),i(S,`grid gap-2`);let T=u(`p`,S);n(S,T),i(T,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),n(T,f(`mode`));let E=u(`div`,S);n(S,E),i(E,`join`);let D=a(`rue:list:start`),O=a(`rue:list:end`);n(E,D),n(E,O);let A=new Map;g(()=>{A=v({items:w||[],getKey:(e,t)=>e.value,elements:A,parent:E,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(t,o,s,f,p)=>{d(c(()=>{let o=m(),s=u(`button`,o);n(o,s),g(()=>{l(s,`key`,String(t.value))}),l(s,`type`,`button`),g(()=>{i(s,`btn btn-sm join-item ${k.value===t.value?`btn-primary`:``}`)}),r(s,`click`,()=>{k.value=t.value});let c=a(`rue:slot:anchor`);return n(s,c),g(()=>{let n=t.label;e(()=>d(n,s,c))}),o}),o,s)}})});let F=u(`div`,x);n(x,F),i(F,`flex flex-wrap gap-3`);let I=u(`button`,F);n(F,I),i(I,`btn btn-primary`),r(I,`click`,N),n(I,f(`Next panel`));let L=u(`button`,F);n(F,L),i(L,`btn`),r(L,`click`,P),n(L,f(`Previous`));let R=u(`div`,_);n(_,R),i(R,`rounded-md border border-base-300 bg-base-200/40 p-4`);let z=u(`p`,R);n(R,z),i(z,`m-0 font-semibold`);let B=a(`rue:slot:anchor`);n(z,B),g(()=>{let t=M().title;e(()=>d(t,z,B))});let V=u(`p`,R);n(R,V),i(V,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let H=a(`rue:slot:anchor`);n(V,H),g(()=>{let t=M().summary;e(()=>d(t,V,H))});let U=u(`div`,R);n(R,U),i(U,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let W=a(`rue:list:start`),G=a(`rue:list:end`);n(U,W),n(U,G);let K=new Map;g(()=>{K=v({items:M().steps||[],getKey:(e,t)=>e,elements:K,parent:U,before:G,singleRoot:!0,start:W,renderItem:(e,t,r,a,o)=>{d(c(()=>{let t=m(),r=u(`div`,t);n(t,r),g(()=>{l(r,`key`,String(e))}),i(r,`flex items-center gap-2`);let a=u(`span`,r);n(r,a),i(a,`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`);let c=s(a);n(a,c),g(()=>{h(c,o+1)});let d=u(`span`,r);n(r,d);let f=s(d);return n(d,f),g(()=>{h(f,e)}),t}),t,r)}})});let q=u(`div`,_);n(_,q),i(q,`mode-stage`);let J=a(`rue:component:anchor`);return n(q,J),g(()=>{let t=p(b,{name:`mode`,mode:k.value,type:`transition`,duration:C,__rueTransitionChildFactory:()=>y(c(()=>{let t=m(),r=u(`section`,t);n(t,r),g(()=>{l(r,`key`,String(j().id))}),g(()=>{i(r,`mode-card bg-gradient-to-br ${j().tone} p-6 text-white shadow-lg`)});let o=u(`p`,r);n(r,o),i(o,`text-sm uppercase tracking-wide opacity-80`),n(o,f(`state`));let s=u(`h2`,r);n(r,s),i(s,`mt-2 text-3xl font-semibold`);let c=a(`rue:slot:anchor`);n(s,c),g(()=>{let t=j().title;e(()=>d(t,s,c))});let p=u(`p`,r);n(r,p),i(p,`mt-3 max-w-md text-sm leading-6 opacity-90`);let h=a(`rue:slot:anchor`);return n(p,h),g(()=>{let t=j().summary;e(()=>d(t,p,h))}),t}),j().id)});e(()=>d(t,q,J))}),t}):``;e(()=>d(t,F,L))}),t})}),o,_),o})};export{O as default};