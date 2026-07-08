import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v,o as y}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Transition-ddE8wpt4.js";import{t as x}from"./Code-BoXKy3gJ.js";import{r as S}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var C=320,w=[{value:`default`,label:`default`,title:`default: 同时进入和离开`,summary:`新面板会立刻渲染，旧面板作为快照同时执行 leave。适合两个状态可以短暂重叠的切换。`,steps:[`旧面板开始 leave`,`新面板同时开始 enter`]},{value:`out-in`,label:`out-in`,title:`out-in: 先离开，再进入`,summary:`旧面板完成 leave 后，新面板才会渲染并 enter。适合需要避免两个状态同时出现的页面。`,steps:[`旧面板完整 leave`,`新面板随后 enter`]},{value:`in-out`,label:`in-out`,title:`in-out: 先进入，再离开`,summary:`新面板先渲染并完成 enter，旧面板再执行 leave。适合希望新内容先接住视线的切换。`,steps:[`新面板先 enter`,`旧面板随后 leave`]}],T=[{id:`draft`,title:`Draft`,summary:`Content is still changing and can be replaced safely.`,tone:`from-sky-500 to-cyan-400`},{id:`review`,title:`Review`,summary:`Compare how each mode schedules this panel against the previous state.`,tone:`from-emerald-500 to-teal-400`},{id:`ship`,title:`Ship`,summary:`Use keys to make Rue treat each panel as a distinct transition child.`,tone:`from-rose-500 to-pink-400`}],E=`
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

export default TransitionModeExample;`,O=()=>{let{index:O,mode:k,activeTab:A,current:j,activeMode:M,next:N,previous:P}=_(`useSetup:0:0`,()=>d(()=>{let e=_(`ref:1:0`,()=>n(0)),t=_(`ref:1:1`,()=>n(`default`));return{index:e,mode:t,activeTab:_(`ref:1:2`,()=>n(`preview`)),current:()=>T[e.value],activeMode:()=>w.find(e=>e.value===t.value),next:()=>{e.value=(e.value+1)%T.length},previous:()=>{e.value=(e.value+T.length-1)%T.length}}}));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(S,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`Transition mode`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let S=p(`button`,_);e(_,S),o(S,`role`,`tab`),t(()=>{f(S,`tab ${A.value===`preview`?`tab-active`:``}`)}),r(S,`click`,()=>{A.value=`preview`}),e(S,s(`效果`));let T=p(`button`,_);e(_,T),o(T,`role`,`tab`),t(()=>{f(T,`tab ${A.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{A.value=`code`}),e(T,s(`代码`));let O=p(`style`,n);e(n,O),t(()=>{a(O,E)});let F=p(`div`,n);e(n,F),f(F,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let I=g(`rue:slot:anchor`);e(F,I),t(()=>{let n=A.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`card bg-base-100 shadow overflow-auto h-[360px] md:h-[560px]`);let i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(x,{className:`h-full`,lang:`tsx`,code:D});h(()=>u(e,r,i))}),n}):``;h(()=>u(n,F,I))}),e(F,s(` `));let L=g(`rue:slot:anchor`);return e(F,L),t(()=>{let n=A.value===`preview`?c(()=>{let n=l(),d=p(`div`,n);e(n,d),f(d,`card bg-base-100 shadow`);let _=p(`div`,d);e(d,_),f(_,`card-body grid gap-4`);let x=p(`div`,_);e(_,x),f(x,`grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end`);let S=p(`div`,x);e(x,S),f(S,`grid gap-2`);let T=p(`p`,S);e(S,T),f(T,`m-0 text-xs font-semibold uppercase tracking-wide opacity-60`),e(T,s(`mode`));let E=p(`div`,S);e(S,E),f(E,`join`);let D=g(`rue:list:start`),O=g(`rue:list:end`);e(E,D),e(E,O);let A=new Map;t(()=>{A=v({items:w||[],getKey:(e,t)=>e.value,elements:A,parent:E,before:O,singleRoot:!0,trackIndex:!1,start:D,renderItem:(n,i,a,s,d)=>{u(c(()=>{let i=l(),a=p(`button`,i);e(i,a),t(()=>{o(a,`key`,String(n.value))}),o(a,`type`,`button`),t(()=>{f(a,`btn btn-sm join-item ${k.value===n.value?`btn-primary`:``}`)}),r(a,`click`,()=>{k.value=n.value});let s=g(`rue:slot:anchor`);return e(a,s),t(()=>{let e=n.label;h(()=>u(e,a,s))}),i}),i,a)}})});let F=p(`div`,x);e(x,F),f(F,`flex flex-wrap gap-3`);let I=p(`button`,F);e(F,I),f(I,`btn btn-primary`),r(I,`click`,N),e(I,s(`Next panel`));let L=p(`button`,F);e(F,L),f(L,`btn`),r(L,`click`,P),e(L,s(`Previous`));let R=p(`div`,_);e(_,R),f(R,`rounded-md border border-base-300 bg-base-200/40 p-4`);let z=p(`p`,R);e(R,z),f(z,`m-0 font-semibold`);let B=g(`rue:slot:anchor`);e(z,B),t(()=>{let e=M().title;h(()=>u(e,z,B))});let V=p(`p`,R);e(R,V),f(V,`m-0 mt-2 max-w-2xl text-sm leading-6 opacity-75`);let H=g(`rue:slot:anchor`);e(V,H),t(()=>{let e=M().summary;h(()=>u(e,V,H))});let U=p(`div`,R);e(R,U),f(U,`mt-3 grid gap-2 text-sm md:grid-cols-2`);let W=g(`rue:list:start`),G=g(`rue:list:end`);e(U,W),e(U,G);let K=new Map;t(()=>{K=v({items:M().steps||[],getKey:(e,t)=>e,elements:K,parent:U,before:G,singleRoot:!0,start:W,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`div`,r);e(r,s),t(()=>{o(s,`key`,String(n))}),f(s,`flex items-center gap-2`);let c=p(`span`,s);e(s,c),f(c,`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-300 text-xs font-semibold`);let u=i(c);e(c,u),t(()=>{a(u,m+1)});let d=p(`span`,s);e(s,d);let h=i(d);return e(d,h),t(()=>{a(h,n)}),r}),r,s)}})});let q=p(`div`,_);e(_,q),f(q,`mode-stage`);let J=g(`rue:component:anchor`);return e(q,J),t(()=>{let n=m(b,{name:`mode`,mode:k.value,type:`transition`,duration:C,__rueTransitionChildFactory:()=>y(c(()=>{let n=l(),r=p(`section`,n);e(n,r),t(()=>{o(r,`key`,String(j().id))}),t(()=>{f(r,`mode-card bg-gradient-to-br ${j().tone} p-6 text-white shadow-lg`)});let i=p(`p`,r);e(r,i),f(i,`text-sm uppercase tracking-wide opacity-80`),e(i,s(`state`));let a=p(`h2`,r);e(r,a),f(a,`mt-2 text-3xl font-semibold`);let c=g(`rue:slot:anchor`);e(a,c),t(()=>{let e=j().title;h(()=>u(e,a,c))});let d=p(`p`,r);e(r,d),f(d,`mt-3 max-w-md text-sm leading-6 opacity-90`);let m=g(`rue:slot:anchor`);return e(d,m),t(()=>{let e=j().summary;h(()=>u(e,d,m))}),n}),j().id)});h(()=>u(n,q,J))}),n}):``;h(()=>u(n,F,L))}),n})}),d,_),d})};export{O as default};