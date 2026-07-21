import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,jt as s,mt as c,ot as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as ee}from"./vapor-runtime-ygJWVcNn.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var ne=`import { type FC, ref } from '@rue-js/rue';

const NativeCard: FC<{
  title: string;
  note?: string;
  'v-on:click-native-once'?: string;
}> = props => {
  return (
    <button className="btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case">
      <span>{props.title}</span>
      {props.note ? <span className="text-xs opacity-70">{props.note}</span> : null}
    </button>
  );
};

const Demo: FC = () => {
  const count = ref(0);
  const keyword = ref('Rue');
  const stopCount = ref(0);
  const enterCount = ref(0);
  const selfCount = ref(0);
  const metaExactCount = ref(0);
  const lastEvent = ref('等待交互');

  const updateLastEvent = (message: string) => {
    lastEvent.value = message;
  };

  const onMethodPath = (event: Event) => {
    count.value += 1;
    updateLastEvent('v-on:click -> ' + event.type + ' #' + count.value);
  };

  const onManualCall = (label: string, event?: Event) => {
    updateLastEvent(label + (event ? ' -> ' + event.type : ''));
  };

  const onInput = (event: Event) => {
    keyword.value = (event.target as HTMLInputElement).value;
    updateLastEvent('r-on:input -> ' + keyword.value);
  };

  const onStopPrevent = () => {
    stopCount.value += 1;
    updateLastEvent('v-on:click-stop-prevent -> #' + stopCount.value);
  };

  const onEnter = (event: KeyboardEvent) => {
    enterCount.value += 1;
    updateLastEvent('v-on:keyup-enter -> ' + event.key + ' #' + enterCount.value);
  };

  const onSelfOnly = () => {
    selfCount.value += 1;
    updateLastEvent('v-on:click-self -> #' + selfCount.value);
  };

  const onMetaExact = () => {
    metaExactCount.value += 1;
    updateLastEvent('v-on:click-meta-exact -> #' + metaExactCount.value);
  };

  return (
    <div className="grid gap-4">
      <button className="btn btn-primary" v-on:click="onMethodPath">
        v-on:click
      </button>

      <button className="btn btn-secondary" v-on:click="onManualCall('method() 不自动注入 event')">
        method()
      </button>

      <button className="btn btn-accent" v-on:click="onManualCall('method($event) 显式注入', $event)">
        method($event)
      </button>

      <input className="input input-bordered" value={keyword.value} r-on:input="onInput($event)" />

      <a className="link link-primary" href="#noop" v-on:click-stop-prevent="onStopPrevent">
        v-on:click-stop-prevent
      </a>

      <input className="input input-bordered" placeholder="按 Enter" v-on:keyup-enter="onEnter" />
      <input className="input input-bordered" placeholder="按回车 keyCode 13" v-on:keyup-13="onEnter" />

      <div className="rounded-box border border-base-300 p-4" v-on:click-self="onSelfOnly">
        <span>点击容器空白处触发 v-on:click-self</span>
        <button className="btn btn-ghost btn-sm">子元素不会触发 self</button>
      </div>

      <button className="btn btn-info" v-on:click-meta-exact="onMetaExact">
        v-on:click-meta-exact
      </button>

      <NativeCard
        title="root"
        note="native + once 示例"
        v-on:click-native-once="onMethodPath"
      />

      <div className="rounded-box border border-base-300 bg-base-200 p-3 font-mono text-sm">
        {lastEvent.value}
      </div>
    </div>
  );
};

export default Demo;`,re=`import { type FC, ref } from '@rue-js/rue';

const Demo: FC = () => {
  const count = ref(0);
  const keyword = ref('Rue');

  const onMethodPath = (event: MouseEvent) => {
    count.value += 1;
    console.log('onClick ->', event.type, count.value);
  };

  const onManualCall = (label: string, event?: Event) => {
    console.log(label, event?.type);
  };

  const onInput = (event: Event) => {
    keyword.value = (event.target as HTMLInputElement).value;
  };

  const onStopPrevent = (event: MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    console.log('manual stop + prevent');
  };

  const onEnter = (event: KeyboardEvent) => {
    if (event.key !== 'Enter') return;
    console.log('manual enter');
  };

  const onKeyCode13 = (event: KeyboardEvent & { keyCode?: number; which?: number }) => {
    const keyCode = event.keyCode ?? event.which;
    if (keyCode !== 13) return;
    console.log('manual keyCode 13');
  };

  const onSelfOnly = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    console.log('manual self');
  };

  const onMetaExact = (event: MouseEvent) => {
    if (!event.metaKey) return;
    if (event.ctrlKey || event.altKey || event.shiftKey) return;
    console.log('manual meta exact');
  };

  return (
    <div className="grid gap-4">
      <button className="btn btn-primary" onClick={onMethodPath}>
        onClick
      </button>

      <button className="btn btn-secondary" onClick={() => onManualCall('method() 不自动注入 event')}>
        method()
      </button>

      <button className="btn btn-accent" onClick={event => onManualCall('method($event) 显式注入', event)}>
        method($event)
      </button>

      <input className="input input-bordered" value={keyword.value} onInput={onInput} />

      <a className="link link-primary" href="#noop" onClick={onStopPrevent}>
        onClick + stopPropagation + preventDefault
      </a>

      <input className="input input-bordered" placeholder="按 Enter" onKeyUp={onEnter} />
      <input className="input input-bordered" placeholder="按回车 keyCode 13" onKeyUp={onKeyCode13} />

      <div className="rounded-box border border-base-300 p-4" onClick={onSelfOnly}>
        <span>手写 currentTarget / target 判断</span>
        <button className="btn btn-ghost btn-sm">子元素按钮</button>
      </div>

      <button className="btn btn-info" onClick={onMetaExact}>
        手写 meta + exact 判断
      </button>

      {/* 组件根元素事件通常需要组件显式透传 onClick 或暴露 root 事件 prop */}
    </div>
  );
};

export default Demo;`,x=`import { type FC, ref } from '@rue-js/rue';

const NativeCard: FC<{
  title: string;
  'v-on:click-native-once'?: string;
}> = props => (
  <button className="btn btn-outline">
    {props.title}
  </button>
);

const Demo: FC = () => {
  const lastEvent = ref('等待交互');
  const write = (name: string) => {
    lastEvent.value = name;
  };

  const onStop = (event: MouseEvent) => write('stop: ' + event.type);
  const onPrevent = (event: MouseEvent) => write('prevent: ' + event.type);
  const onSelf = (event: MouseEvent) => write('self: ' + event.type);
  const onOnce = (event: MouseEvent) => write('once: ' + event.type);
  const onCapture = (event: MouseEvent) => write('capture: ' + event.type);
  const onPassiveWheel = (event: WheelEvent) => write('passive wheel: ' + event.type);
  const onCtrl = (event: MouseEvent) => write('ctrl: ' + event.type);
  const onShift = (event: MouseEvent) => write('shift: ' + event.type);
  const onAlt = (event: MouseEvent) => write('alt: ' + event.type);
  const onMeta = (event: MouseEvent) => write('meta: ' + event.type);
  const onMetaExact = (event: MouseEvent) => write('meta exact: ' + event.type);
  const onMiddle = (event: MouseEvent) => write('middle: ' + event.type);
  const onEnter = (event: KeyboardEvent) => write('enter: ' + event.key);
  const onTab = (event: KeyboardEvent) => write('tab: ' + event.key);
  const onDelete = (event: KeyboardEvent) => write('delete: ' + event.key);
  const onEsc = (event: KeyboardEvent) => write('esc: ' + event.key);
  const onSpace = (event: KeyboardEvent) => write('space: ' + event.key);
  const onArrowUp = (event: KeyboardEvent) => write('up: ' + event.key);
  const onArrowDown = (event: KeyboardEvent) => write('down: ' + event.key);
  const onArrowLeft = (event: KeyboardEvent) => write('left: ' + event.key);
  const onArrowRight = (event: KeyboardEvent) => write('right: ' + event.key);
  const onKeyCode13 = (event: KeyboardEvent) => write('keyCode 13: ' + event.key);
  const onNativeRootClick = (event: MouseEvent) => write('native once: ' + event.type);

  return (
    <section className="grid gap-4">
      <button v-on:click-stop="onStop">stop</button>
      <button v-on:click-prevent="onPrevent">prevent</button>
      <div v-on:click-self="onSelf">
        self
        <button>child button</button>
      </div>
      <button v-on:click-once="onOnce">once</button>
      <div v-on:click-capture="onCapture">capture</div>
      <div v-on:wheel-passive="onPassiveWheel">passive wheel</div>
      <button v-on:click-ctrl="onCtrl">ctrl</button>
      <button v-on:click-shift="onShift">shift</button>
      <button v-on:click-alt="onAlt">alt</button>
      <button v-on:click-meta="onMeta">meta</button>
      <button v-on:click-meta-exact="onMetaExact">meta exact</button>
      <button v-on:click-middle="onMiddle">middle</button>
      <input v-on:keyup-enter="onEnter" placeholder="Enter" />
      <input v-on:keyup-tab="onTab" placeholder="Tab" />
      <input v-on:keyup-delete="onDelete" placeholder="Delete" />
      <input v-on:keyup-esc="onEsc" placeholder="Esc" />
      <input v-on:keyup-space="onSpace" placeholder="Space" />
      <input v-on:keyup-up="onArrowUp" placeholder="ArrowUp" />
      <input v-on:keyup-down="onArrowDown" placeholder="ArrowDown" />
      <input v-on:keyup-left="onArrowLeft" placeholder="ArrowLeft" />
      <input v-on:keyup-right="onArrowRight" placeholder="ArrowRight" />
      <input v-on:keyup-13="onKeyCode13" placeholder="keyCode 13" />
      <NativeCard title="root native once" v-on:click-native-once="onNativeRootClick" />
      <output>{lastEvent.value}</output>
    </section>
  );
};

export default Demo;`,ie=e=>h(t=>{let n=d(`button`,t);r(n,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let o=d(`span`,n);f(n,o);let s=i(`rue:slot:anchor`);f(o,s),p(()=>{let t=e.title;m(()=>g(t,o,s))});let c=i(`rue:slot:anchor`);return f(n,c),p(()=>{let t=e.note?h(()=>{let t=a(),n=d(`span`,t);f(t,n),r(n,`text-xs opacity-70`);let o=i(`rue:slot:anchor`);return f(n,o),p(()=>{let t=e.note;m(()=>g(t,n,o))}),t}):``;m(()=>g(t,n,c))}),n}),S=()=>{let{activeTab:S,methodPathCount:ae,keyword:oe,bubbleCount:se,stopPreventCount:ce,enterCount:le,keyCodeCount:ue,selfCount:de,metaExactCount:fe,lastEvent:pe,eventLog:me,updateLastEvent:C,onMethodPath:he,onInput:ge,onManualCall:_e,onBubbleParent:ve,onDirectiveStopPrevent:ye,onEnterDirective:be,onKeyCode13Directive:xe,onSelfOnly:Se,onMetaExact:Ce}=_(`useSetup:0:0`,()=>e(()=>{let e=_(`ref:1:0`,()=>u(`code`)),t=_(`ref:1:1`,()=>u(0)),n=_(`ref:1:2`,()=>u(`Rue`)),r=_(`ref:1:3`,()=>u(0)),i=_(`ref:1:4`,()=>u(0)),a=_(`ref:1:5`,()=>u(0)),o=_(`ref:1:6`,()=>u(0)),s=_(`ref:1:7`,()=>u(0)),c=_(`ref:1:8`,()=>u(0)),l=_(`ref:1:9`,()=>u(`等待交互`)),d=_(`ref:1:10`,()=>u([`等待交互`])),f=e=>{l.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,f(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,f(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1;let t=e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`;f(`v-on:click-stop-prevent -> 已阻止 `+t+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1;let t=e.target?.tagName.toLowerCase()??`unknown`;f(`v-on:click-self -> target `+t+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return h(e=>{let u=a(),_=i(`rue:component:anchor`);return f(u,_),g(ee(b,{children:h(()=>{let e=a(),u=d(`h1`,e);f(e,u),r(u,`text-5xl font-semibold mb-4 md:mb-4`),f(u,c(`v-on / r-on`));let _=d(`div`,e);f(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let b=d(`button`,_);f(_,b),t(b,`role`,`tab`),p(()=>{r(b,`tab ${S.value===`preview`?`tab-active`:``}`)}),l(b,`click`,()=>{S.value=`preview`}),f(b,c(`效果`));let C=d(`button`,_);f(_,C),t(C,`role`,`tab`),p(()=>{r(C,`tab ${S.value===`code`?`tab-active`:``}`)}),l(C,`click`,()=>{S.value=`code`}),f(C,c(`代码`));let w=d(`div`,e);f(e,w),r(w,`mt-4 grid gap-6 items-start`);let we=i(`rue:slot:anchor`);f(w,we),p(()=>{let e=S.value===`code`?h(()=>{let e=a(),t=d(`div`,e);f(e,t),r(t,`grid gap-6`);let n=d(`div`,t);f(t,n),r(n,`card bg-base-100 shadow overflow-auto`);let o=d(`div`,n);f(n,o),r(o,`card-body gap-3`);let s=d(`h2`,o);f(o,s),r(s,`card-title`),f(s,c(`Rue TSX 实际源码`));let l=i(`rue:component:anchor`);f(o,l),p(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});m(()=>g(e,o,l))});let u=d(`div`,t);f(t,u),r(u,`card bg-base-100 shadow overflow-auto`);let h=d(`div`,u);f(u,h),r(h,`card-body gap-3`);let _=d(`h2`,h);f(h,_),r(_,`card-title`),f(_,c(`原生 TSX 对照写法`));let v=i(`rue:component:anchor`);f(h,v),p(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:re});m(()=>g(e,h,v))});let te=d(`div`,t);f(t,te),r(te,`card bg-base-100 shadow overflow-auto`);let b=d(`div`,te);f(te,b),r(b,`card-body gap-3`);let ie=d(`h2`,b);f(b,ie),r(ie,`card-title`),f(ie,c(`修饰符速查`));let S=i(`rue:component:anchor`);return f(b,S),p(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});m(()=>g(e,b,S))}),e}):``;m(()=>g(e,w,we))}),f(w,c(` `));let T=i(`rue:slot:anchor`);return f(w,T),p(()=>{let e=S.value===`preview`?h(()=>{let e=a(),u=d(`div`,e);f(e,u),r(u,`card bg-base-100 shadow`);let _=d(`div`,u);f(u,_),r(_,`card-body grid gap-6`);let y=d(`div`,_);f(_,y),t(y,`role`,`alert`),r(y,`alert alert-info`);let b=d(`span`,y);f(y,b),f(b,c(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let ne=d(`div`,_);f(_,ne),t(ne,`role`,`alert`),r(ne,`alert alert-warning alert-soft`);let re=d(`span`,ne);f(ne,re),f(re,c(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let x=d(`section`,_);f(_,x),r(x,`space-y-3`);let S=d(`div`,x);f(x,S),r(S,`flex flex-wrap items-center justify-between gap-3`);let C=d(`h2`,S);f(S,C),r(C,`text-xl font-semibold`),f(C,c(`v-on:click：method path 自动注入浏览器事件`));let w=d(`span`,S);f(S,w),r(w,`badge badge-primary badge-lg`);let we=o(w);f(w,we),p(()=>{n(we,ae.value)}),f(w,c(` 次`));let T=d(`div`,x);f(x,T),r(T,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Te=d(`button`,T);f(T,Te),r(Te,`btn btn-primary`),l(Te,`click`,e=>he(e)),f(Te,c(`v-on:click="onMethodPath"`));let Ee=d(`p`,T);f(T,Ee),r(Ee,`text-sm opacity-70`),f(Ee,c(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let E=d(`section`,_);f(_,E),r(E,`space-y-3`);let D=d(`div`,E);f(E,D),r(D,`flex flex-wrap items-center justify-between gap-3`);let De=d(`h2`,D);f(D,De),r(De,`text-xl font-semibold`),f(De,c(`v-on:click：method() / method($event)`));let Oe=d(`span`,D);f(D,Oe),r(Oe,`badge badge-outline badge-lg`),f(Oe,c(`last call`));let O=d(`div`,E);f(E,O),r(O,`grid gap-3 md:grid-cols-2`);let ke=d(`button`,O);f(O,ke),r(ke,`btn btn-secondary`),l(ke,`click`,e=>_e(`method() 不自动注入 event`)),f(ke,c(`method()`));let Ae=d(`button`,O);f(O,Ae),r(Ae,`btn btn-accent`),l(Ae,`click`,e=>_e(`method($event) 显式注入`,e)),f(Ae,c(`method($event)`));let k=d(`section`,_);f(_,k),r(k,`space-y-3`);let A=d(`div`,k);f(k,A),r(A,`flex flex-wrap items-center justify-between gap-3`);let je=d(`h2`,A);f(A,je),r(je,`text-xl font-semibold`),f(je,c(`r-on:input：直接复用标准输入事件`));let Me=d(`span`,A);f(A,Me),r(Me,`badge badge-outline badge-lg`),f(Me,c(`长度 `));let Ne=i(`rue:slot:anchor`);f(Me,Ne),p(()=>{let e=oe.value.length;m(()=>g(e,Me,Ne))});let Pe=d(`div`,k);f(k,Pe),r(Pe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=d(`input`,Pe);f(Pe,Fe),r(Fe,`input input-bordered w-full`),p(()=>{s(Fe,oe.value)}),l(Fe,`input`,e=>ge(e));let j=d(`div`,Pe);f(Pe,j),r(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=d(`div`,j);f(j,M),r(M,`stat`);let Ie=d(`div`,M);f(M,Ie),r(Ie,`stat-title`),f(Ie,c(`当前值`));let Le=d(`div`,M);f(M,Le),r(Le,`stat-value text-2xl`);let Re=o(Le);f(Le,Re),p(()=>{n(Re,oe.value||`空`)});let N=d(`div`,j);f(j,N),r(N,`stat`);let ze=d(`div`,N);f(N,ze),r(ze,`stat-title`),f(ze,c(`大写预览`));let Be=d(`div`,N);f(N,Be),r(Be,`stat-value text-2xl`);let Ve=o(Be);f(Be,Ve),p(()=>{n(Ve,oe.value.toUpperCase()||`EMPTY`)});let P=d(`section`,_);f(_,P),r(P,`space-y-3`);let F=d(`div`,P);f(P,F),r(F,`flex flex-wrap items-center justify-between gap-3`);let He=d(`h2`,F);f(F,He),r(He,`text-xl font-semibold`),f(He,c(`v-on:click-stop-prevent`));let I=d(`div`,F);f(F,I),r(I,`flex flex-wrap gap-2`);let Ue=d(`span`,I);f(I,Ue),r(Ue,`badge badge-warning badge-lg`),f(Ue,c(`bubble `));let We=o(Ue);f(Ue,We),p(()=>{n(We,se.value)});let Ge=d(`span`,I);f(I,Ge),r(Ge,`badge badge-success badge-lg`),f(Ge,c(`stop/prevent `));let Ke=o(Ge);f(Ge,Ke),p(()=>{n(Ke,ce.value)});let L=d(`div`,P);f(P,L),r(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),l(L,`click`,e=>ve(e));let qe=d(`a`,L);f(L,qe),r(qe,`link link-primary`),t(qe,`href`,`#compiled-stop-prevent`),l(qe,`click`,v(e=>ye(e),[`stop`,`prevent`])),f(qe,c(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=d(`p`,L);f(L,Je),r(Je,`text-sm opacity-70`),f(Je,c(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=d(`section`,_);f(_,R),r(R,`space-y-3`);let z=d(`div`,R);f(R,z),r(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=d(`h2`,z);f(z,Ye),r(Ye,`text-xl font-semibold`),f(Ye,c(`v-on:keyup-enter / v-on:keyup-13`));let B=d(`div`,z);f(z,B),r(B,`flex flex-wrap gap-2`);let Xe=d(`span`,B);f(B,Xe),r(Xe,`badge badge-accent badge-lg`),f(Xe,c(`enter `));let Ze=o(Xe);f(Xe,Ze),p(()=>{n(Ze,le.value)});let Qe=d(`span`,B);f(B,Qe),r(Qe,`badge badge-neutral badge-lg`),f(Qe,c(`13 `));let $e=o(Qe);f(Qe,$e),p(()=>{n($e,ue.value)});let V=d(`div`,R);f(R,V),r(V,`grid gap-3 md:grid-cols-2`);let H=d(`label`,V);f(V,H),r(H,`floating-label`);let et=d(`input`,H);f(H,et),r(et,`input input-bordered`),t(et,`placeholder`,`按 Enter`),l(et,`keyup`,v(e=>be(e),[`enter`]));let tt=d(`span`,H);f(H,tt),f(tt,c(`v-on:keyup-enter="onEnterDirective"`));let U=d(`label`,V);f(V,U),r(U,`floating-label`);let nt=d(`input`,U);f(U,nt),r(nt,`input input-bordered`),t(nt,`placeholder`,`按 Enter`),l(nt,`keyup`,v(e=>xe(e),[`13`]));let rt=d(`span`,U);f(U,rt),f(rt,c(`v-on:keyup-13="onKeyCode13Directive"`));let W=d(`section`,_);f(_,W),r(W,`space-y-3`);let G=d(`div`,W);f(W,G),r(G,`flex flex-wrap items-center justify-between gap-3`);let it=d(`h2`,G);f(G,it),r(it,`text-xl font-semibold`),f(it,c(`v-on:click-self / v-on:click-meta-exact`));let K=d(`div`,G);f(G,K),r(K,`flex flex-wrap gap-2`);let at=d(`span`,K);f(K,at),r(at,`badge badge-info badge-lg`),f(at,c(`self `));let ot=o(at);f(at,ot),p(()=>{n(ot,de.value)});let st=d(`span`,K);f(K,st),r(st,`badge badge-info badge-lg`),f(st,c(`meta.exact `));let ct=o(st);f(st,ct),p(()=>{n(ct,fe.value)});let q=d(`div`,W);f(W,q),r(q,`grid gap-4 md:grid-cols-2`);let J=d(`div`,q);f(q,J),r(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),l(J,`click`,v(e=>Se(e),[`self`]));let lt=d(`p`,J);f(J,lt),r(lt,`font-medium`),f(lt,c(`v-on:click-self="onSelfOnly"`));let ut=d(`p`,J);f(J,ut),r(ut,`text-sm opacity-70`),f(ut,c(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=d(`button`,J);f(J,dt),r(dt,`btn btn-ghost btn-sm`),f(dt,c(`子元素按钮`));let ft=d(`button`,q);f(q,ft),r(ft,`btn btn-info`),l(ft,`click`,v(e=>Ce(e),[`meta`,`exact`])),f(ft,c(`v-on:click-meta-exact：按住 Command 点击`));let Y=d(`section`,_);f(_,Y),r(Y,`space-y-3`);let X=d(`div`,Y);f(Y,X),r(X,`flex flex-wrap items-center justify-between gap-3`);let pt=d(`h2`,X);f(X,pt),r(pt,`text-xl font-semibold`),f(pt,c(`v-on:click-native-once`));let mt=d(`span`,X);f(X,mt),r(mt,`badge badge-secondary badge-lg`),f(mt,c(`code path`));let Z=d(`div`,Y);f(Y,Z),r(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=d(`div`,Z);f(Z,Q),r(Q,`mockup-code text-sm`);let ht=d(`pre`,Q);f(Q,ht),t(ht,`data-prefix`,`1`);let gt=d(`code`,ht);f(ht,gt);let _t=o(gt);f(gt,_t),n(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=d(`pre`,Q);f(Q,vt),t(vt,`data-prefix`,`2`);let yt=d(`code`,vt);f(vt,yt);let bt=o(yt);f(yt,bt),n(bt,`// 编译后保留 native + once 的事件配置`);let xt=d(`pre`,Q);f(Q,xt),t(xt,`data-prefix`,`3`);let St=d(`code`,xt);f(xt,St);let Ct=o(St);f(St,Ct),n(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=d(`div`,Z);f(Z,wt),r(wt,`grid gap-3`);let Tt=i(`rue:component:anchor`);f(wt,Tt),g(ee(ie,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=d(`p`,wt);f(wt,Et),r(Et,`text-sm opacity-70`),f(Et,c(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=d(`section`,_);f(_,Dt),r(Dt,`space-y-3`);let Ot=d(`h2`,Dt);f(Dt,Ot),r(Ot,`text-xl font-semibold`),f(Ot,c(`修饰符速查`));let $=d(`div`,Dt);f(Dt,$),r($,`flex flex-wrap gap-2`);let kt=d(`span`,$);f($,kt),r(kt,`badge badge-primary badge-lg`),f(kt,c(`v-on:click-stop`));let At=d(`span`,$);f($,At),r(At,`badge badge-primary badge-lg`),f(At,c(`v-on:click-prevent`));let jt=d(`span`,$);f($,jt),r(jt,`badge badge-primary badge-lg`),f(jt,c(`v-on:click-self`));let Mt=d(`span`,$);f($,Mt),r(Mt,`badge badge-primary badge-lg`),f(Mt,c(`v-on:click-once`));let Nt=d(`span`,$);f($,Nt),r(Nt,`badge badge-primary badge-lg`),f(Nt,c(`v-on:click-capture`));let Pt=d(`span`,$);f($,Pt),r(Pt,`badge badge-primary badge-lg`),f(Pt,c(`v-on:wheel-passive`));let Ft=d(`span`,$);f($,Ft),r(Ft,`badge badge-primary badge-lg`),f(Ft,c(`v-on:click-ctrl`));let It=d(`span`,$);f($,It),r(It,`badge badge-primary badge-lg`),f(It,c(`v-on:click-shift`));let Lt=d(`span`,$);f($,Lt),r(Lt,`badge badge-primary badge-lg`),f(Lt,c(`v-on:click-alt`));let Rt=d(`span`,$);f($,Rt),r(Rt,`badge badge-primary badge-lg`),f(Rt,c(`v-on:click-meta`));let zt=d(`span`,$);f($,zt),r(zt,`badge badge-primary badge-lg`),f(zt,c(`v-on:click-meta-exact`));let Bt=d(`span`,$);f($,Bt),r(Bt,`badge badge-primary badge-lg`),f(Bt,c(`v-on:click-middle`));let Vt=d(`span`,$);f($,Vt),r(Vt,`badge badge-primary badge-lg`),f(Vt,c(`v-on:keyup-enter`));let Ht=d(`span`,$);f($,Ht),r(Ht,`badge badge-primary badge-lg`),f(Ht,c(`v-on:keyup-tab`));let Ut=d(`span`,$);f($,Ut),r(Ut,`badge badge-primary badge-lg`),f(Ut,c(`v-on:keyup-delete`));let Wt=d(`span`,$);f($,Wt),r(Wt,`badge badge-primary badge-lg`),f(Wt,c(`v-on:keyup-esc`));let Gt=d(`span`,$);f($,Gt),r(Gt,`badge badge-primary badge-lg`),f(Gt,c(`v-on:keyup-space`));let Kt=d(`span`,$);f($,Kt),r(Kt,`badge badge-primary badge-lg`),f(Kt,c(`v-on:keyup-up`));let qt=d(`span`,$);f($,qt),r(qt,`badge badge-primary badge-lg`),f(qt,c(`v-on:keyup-down`));let Jt=d(`span`,$);f($,Jt),r(Jt,`badge badge-primary badge-lg`),f(Jt,c(`v-on:keyup-left`));let Yt=d(`span`,$);f($,Yt),r(Yt,`badge badge-primary badge-lg`),f(Yt,c(`v-on:keyup-right`));let Xt=d(`span`,$);f($,Xt),r(Xt,`badge badge-primary badge-lg`),f(Xt,c(`v-on:keyup-13`));let Zt=d(`span`,$);f($,Zt),r(Zt,`badge badge-primary badge-lg`),f(Zt,c(`v-on:click-native-once`));let Qt=d(`section`,_);f(_,Qt),r(Qt,`space-y-3`);let $t=d(`h2`,Qt);f(Qt,$t),r($t,`text-xl font-semibold`),f($t,c(`最近一次事件`));let en=d(`div`,Qt);f(Qt,en),r(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=o(en);f(en,tn),p(()=>{n(tn,pe.value)});let nn=d(`section`,_);f(_,nn),r(nn,`space-y-3`);let rn=d(`h2`,nn);f(nn,rn),r(rn,`text-xl font-semibold`),f(rn,c(`事件日志`));let an=d(`div`,nn);f(nn,an),r(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=d(`ul`,an);f(an,on),r(on,`list gap-2 font-mono text-sm`);let sn=i(`rue:list:start`),cn=i(`rue:list:end`);f(on,sn),f(on,cn);let ln=new Map;return p(()=>{ln=te({items:me.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(e,i,s,c,l)=>{g(h(()=>{let i=a(),s=d(`li`,i);f(i,s),p(()=>{t(s,`key`,String(`${e}-${l}`))}),r(s,`list-row px-0 py-1`);let c=o(s);return f(s,c),p(()=>{n(c,e)}),i}),i,s)}})}),e}):``;m(()=>g(e,w,T))}),e})}),u,_),u})};export{S as default};