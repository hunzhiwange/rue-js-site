import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,ft as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as ee}from"./vapor-runtime-iQZthBPQ.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,ne=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,S=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,re=e=>d(r=>{let c=i(`button`,r);g(c,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let l=i(`span`,c);n(c,l);let u=a(`rue:slot:anchor`);n(l,u),o(()=>{let n=e.title;t(()=>h(n,l,u))});let f=a(`rue:slot:anchor`);return n(c,f),o(()=>{let r=e.note?d(()=>{let r=s(),c=i(`span`,r);n(r,c),g(c,`text-xs opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.note;t(()=>h(n,c,l))}),r}):``;t(()=>h(r,c,f))}),c}),C=()=>{let{activeTab:C,methodPathCount:ie,keyword:ae,bubbleCount:oe,stopPreventCount:se,enterCount:ce,keyCodeCount:le,selfCount:ue,metaExactCount:de,lastEvent:fe,eventLog:pe,updateLastEvent:w,onMethodPath:me,onInput:he,onManualCall:ge,onBubbleParent:_e,onDirectiveStopPrevent:ve,onEnterDirective:ye,onKeyCode13Directive:be,onSelfOnly:xe,onMetaExact:Se}=_(`useSetup:0:0`,()=>m(()=>{let e=_(`ref:1:0`,()=>r(`code`)),t=_(`ref:1:1`,()=>r(0)),n=_(`ref:1:2`,()=>r(`Rue`)),i=_(`ref:1:3`,()=>r(0)),a=_(`ref:1:4`,()=>r(0)),o=_(`ref:1:5`,()=>r(0)),s=_(`ref:1:6`,()=>r(0)),c=_(`ref:1:7`,()=>r(0)),l=_(`ref:1:8`,()=>r(0)),u=_(`ref:1:9`,()=>r(`等待交互`)),d=_(`ref:1:10`,()=>r([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:i,stopPreventCount:a,enterCount:o,keyCodeCount:s,selfCount:c,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,f(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{i.value+=1,f(`父级收到冒泡 -> 第 `+i.value+` 次`)},onDirectiveStopPrevent:e=>{a.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+a.value+` 次`)},onEnterDirective:e=>{o.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+o.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;s.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+s.value)},onSelfOnly:e=>{c.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+c.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return d(r=>{let m=s(),_=a(`rue:component:anchor`);return n(m,_),h(ee(b,{children:d(()=>{let r=s(),m=i(`h1`,r);n(r,m),g(m,`text-5xl font-semibold mb-4 md:mb-4`),n(m,e(`v-on / r-on`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),g(_,`tabs tabs-box`);let b=i(`button`,_);n(_,b),c(b,`role`,`tab`),o(()=>{g(b,`tab ${C.value===`preview`?`tab-active`:``}`)}),p(b,`click`,()=>{C.value=`preview`}),n(b,e(`效果`));let w=i(`button`,_);n(_,w),c(w,`role`,`tab`),o(()=>{g(w,`tab ${C.value===`code`?`tab-active`:``}`)}),p(w,`click`,()=>{C.value=`code`}),n(w,e(`代码`));let T=i(`div`,r);n(r,T),g(T,`mt-4 grid gap-6 items-start`);let Ce=a(`rue:slot:anchor`);n(T,Ce),o(()=>{let r=C.value===`code`?d(()=>{let r=s(),c=i(`div`,r);n(r,c),g(c,`grid gap-6`);let l=i(`div`,c);n(c,l),g(l,`card bg-base-100 shadow overflow-auto`);let u=i(`div`,l);n(l,u),g(u,`card-body gap-3`);let d=i(`h2`,u);n(u,d),g(d,`card-title`),n(d,e(`Rue TSX 实际源码`));let f=a(`rue:component:anchor`);n(u,f),o(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});t(()=>h(e,u,f))});let p=i(`div`,c);n(c,p),g(p,`card bg-base-100 shadow overflow-auto`);let m=i(`div`,p);n(p,m),g(m,`card-body gap-3`);let _=i(`h2`,m);n(m,_),g(_,`card-title`),n(_,e(`原生 TSX 对照写法`));let v=a(`rue:component:anchor`);n(m,v),o(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});t(()=>h(e,m,v))});let te=i(`div`,c);n(c,te),g(te,`card bg-base-100 shadow overflow-auto`);let b=i(`div`,te);n(te,b),g(b,`card-body gap-3`);let re=i(`h2`,b);n(b,re),g(re,`card-title`),n(re,e(`修饰符速查`));let C=a(`rue:component:anchor`);return n(b,C),o(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:S});t(()=>h(e,b,C))}),r}):``;t(()=>h(r,T,Ce))}),n(T,e(` `));let E=a(`rue:slot:anchor`);return n(T,E),o(()=>{let r=C.value===`preview`?d(()=>{let r=s(),m=i(`div`,r);n(r,m),g(m,`card bg-base-100 shadow`);let _=i(`div`,m);n(m,_),g(_,`card-body grid gap-6`);let y=i(`div`,_);n(_,y),c(y,`role`,`alert`),g(y,`alert alert-info`);let b=i(`span`,y);n(y,b),n(b,e(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let x=i(`div`,_);n(_,x),c(x,`role`,`alert`),g(x,`alert alert-warning alert-soft`);let ne=i(`span`,x);n(x,ne),n(ne,e(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=i(`section`,_);n(_,S),g(S,`space-y-3`);let C=i(`div`,S);n(S,C),g(C,`flex flex-wrap items-center justify-between gap-3`);let w=i(`h2`,C);n(C,w),g(w,`text-xl font-semibold`),n(w,e(`v-on:click：method path 自动注入浏览器事件`));let T=i(`span`,C);n(C,T),g(T,`badge badge-primary badge-lg`);let Ce=l(T);n(T,Ce),o(()=>{f(Ce,ie.value)}),n(T,e(` 次`));let E=i(`div`,S);n(S,E),g(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let we=i(`button`,E);n(E,we),g(we,`btn btn-primary`),p(we,`click`,e=>me(e)),n(we,e(`v-on:click="onMethodPath"`));let Te=i(`p`,E);n(E,Te),g(Te,`text-sm opacity-70`),n(Te,e(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let D=i(`section`,_);n(_,D),g(D,`space-y-3`);let O=i(`div`,D);n(D,O),g(O,`flex flex-wrap items-center justify-between gap-3`);let Ee=i(`h2`,O);n(O,Ee),g(Ee,`text-xl font-semibold`),n(Ee,e(`v-on:click：method() / method($event)`));let De=i(`span`,O);n(O,De),g(De,`badge badge-outline badge-lg`),n(De,e(`last call`));let Oe=i(`div`,D);n(D,Oe),g(Oe,`grid gap-3 md:grid-cols-2`);let ke=i(`button`,Oe);n(Oe,ke),g(ke,`btn btn-secondary`),p(ke,`click`,e=>ge(`method() 不自动注入 event`)),n(ke,e(`method()`));let Ae=i(`button`,Oe);n(Oe,Ae),g(Ae,`btn btn-accent`),p(Ae,`click`,e=>ge(`method($event) 显式注入`,e)),n(Ae,e(`method($event)`));let k=i(`section`,_);n(_,k),g(k,`space-y-3`);let A=i(`div`,k);n(k,A),g(A,`flex flex-wrap items-center justify-between gap-3`);let je=i(`h2`,A);n(A,je),g(je,`text-xl font-semibold`),n(je,e(`r-on:input：直接复用标准输入事件`));let Me=i(`span`,A);n(A,Me),g(Me,`badge badge-outline badge-lg`),n(Me,e(`长度 `));let Ne=a(`rue:slot:anchor`);n(Me,Ne),o(()=>{let e=ae.value.length;t(()=>h(e,Me,Ne))});let j=i(`div`,k);n(k,j),g(j,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Pe=i(`input`,j);n(j,Pe),g(Pe,`input input-bordered w-full`),o(()=>{u(Pe,ae.value)}),p(Pe,`input`,e=>he(e));let M=i(`div`,j);n(j,M),g(M,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let N=i(`div`,M);n(M,N),g(N,`stat`);let Fe=i(`div`,N);n(N,Fe),g(Fe,`stat-title`),n(Fe,e(`当前值`));let Ie=i(`div`,N);n(N,Ie),g(Ie,`stat-value text-2xl`);let Le=l(Ie);n(Ie,Le),o(()=>{f(Le,ae.value||`空`)});let P=i(`div`,M);n(M,P),g(P,`stat`);let Re=i(`div`,P);n(P,Re),g(Re,`stat-title`),n(Re,e(`大写预览`));let ze=i(`div`,P);n(P,ze),g(ze,`stat-value text-2xl`);let Be=l(ze);n(ze,Be),o(()=>{f(Be,ae.value.toUpperCase()||`EMPTY`)});let F=i(`section`,_);n(_,F),g(F,`space-y-3`);let I=i(`div`,F);n(F,I),g(I,`flex flex-wrap items-center justify-between gap-3`);let Ve=i(`h2`,I);n(I,Ve),g(Ve,`text-xl font-semibold`),n(Ve,e(`v-on:click-stop-prevent`));let L=i(`div`,I);n(I,L),g(L,`flex flex-wrap gap-2`);let He=i(`span`,L);n(L,He),g(He,`badge badge-warning badge-lg`),n(He,e(`bubble `));let Ue=l(He);n(He,Ue),o(()=>{f(Ue,oe.value)});let We=i(`span`,L);n(L,We),g(We,`badge badge-success badge-lg`),n(We,e(`stop/prevent `));let Ge=l(We);n(We,Ge),o(()=>{f(Ge,se.value)});let R=i(`div`,F);n(F,R),g(R,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),p(R,`click`,e=>_e(e));let Ke=i(`a`,R);n(R,Ke),g(Ke,`link link-primary`),c(Ke,`href`,`#compiled-stop-prevent`),p(Ke,`click`,v(e=>ve(e),[`stop`,`prevent`])),n(Ke,e(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let qe=i(`p`,R);n(R,qe),g(qe,`text-sm opacity-70`),n(qe,e(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let z=i(`section`,_);n(_,z),g(z,`space-y-3`);let B=i(`div`,z);n(z,B),g(B,`flex flex-wrap items-center justify-between gap-3`);let Je=i(`h2`,B);n(B,Je),g(Je,`text-xl font-semibold`),n(Je,e(`v-on:keyup-enter / v-on:keyup-13`));let V=i(`div`,B);n(B,V),g(V,`flex flex-wrap gap-2`);let Ye=i(`span`,V);n(V,Ye),g(Ye,`badge badge-accent badge-lg`),n(Ye,e(`enter `));let Xe=l(Ye);n(Ye,Xe),o(()=>{f(Xe,ce.value)});let Ze=i(`span`,V);n(V,Ze),g(Ze,`badge badge-neutral badge-lg`),n(Ze,e(`13 `));let Qe=l(Ze);n(Ze,Qe),o(()=>{f(Qe,le.value)});let H=i(`div`,z);n(z,H),g(H,`grid gap-3 md:grid-cols-2`);let U=i(`label`,H);n(H,U),g(U,`floating-label`);let $e=i(`input`,U);n(U,$e),g($e,`input input-bordered`),c($e,`placeholder`,`按 Enter`),p($e,`keyup`,v(e=>ye(e),[`enter`]));let et=i(`span`,U);n(U,et),n(et,e(`v-on:keyup-enter="onEnterDirective"`));let W=i(`label`,H);n(H,W),g(W,`floating-label`);let tt=i(`input`,W);n(W,tt),g(tt,`input input-bordered`),c(tt,`placeholder`,`按 Enter`),p(tt,`keyup`,v(e=>be(e),[`13`]));let nt=i(`span`,W);n(W,nt),n(nt,e(`v-on:keyup-13="onKeyCode13Directive"`));let G=i(`section`,_);n(_,G),g(G,`space-y-3`);let K=i(`div`,G);n(G,K),g(K,`flex flex-wrap items-center justify-between gap-3`);let rt=i(`h2`,K);n(K,rt),g(rt,`text-xl font-semibold`),n(rt,e(`v-on:click-self / v-on:click-meta-exact`));let q=i(`div`,K);n(K,q),g(q,`flex flex-wrap gap-2`);let it=i(`span`,q);n(q,it),g(it,`badge badge-info badge-lg`),n(it,e(`self `));let at=l(it);n(it,at),o(()=>{f(at,ue.value)});let ot=i(`span`,q);n(q,ot),g(ot,`badge badge-info badge-lg`),n(ot,e(`meta.exact `));let st=l(ot);n(ot,st),o(()=>{f(st,de.value)});let J=i(`div`,G);n(G,J),g(J,`grid gap-4 md:grid-cols-2`);let Y=i(`div`,J);n(J,Y),g(Y,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),p(Y,`click`,v(e=>xe(e),[`self`]));let ct=i(`p`,Y);n(Y,ct),g(ct,`font-medium`),n(ct,e(`v-on:click-self="onSelfOnly"`));let lt=i(`p`,Y);n(Y,lt),g(lt,`text-sm opacity-70`),n(lt,e(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let ut=i(`button`,Y);n(Y,ut),g(ut,`btn btn-ghost btn-sm`),n(ut,e(`子元素按钮`));let dt=i(`button`,J);n(J,dt),g(dt,`btn btn-info`),p(dt,`click`,v(e=>Se(e),[`meta`,`exact`])),n(dt,e(`v-on:click-meta-exact：按住 Command 点击`));let X=i(`section`,_);n(_,X),g(X,`space-y-3`);let Z=i(`div`,X);n(X,Z),g(Z,`flex flex-wrap items-center justify-between gap-3`);let ft=i(`h2`,Z);n(Z,ft),g(ft,`text-xl font-semibold`),n(ft,e(`v-on:click-native-once`));let pt=i(`span`,Z);n(Z,pt),g(pt,`badge badge-secondary badge-lg`),n(pt,e(`code path`));let mt=i(`div`,X);n(X,mt),g(mt,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=i(`div`,mt);n(mt,Q),g(Q,`mockup-code text-sm`);let ht=i(`pre`,Q);n(Q,ht),c(ht,`data-prefix`,`1`);let gt=i(`code`,ht);n(ht,gt);let _t=l(gt);n(gt,_t),f(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=i(`pre`,Q);n(Q,vt),c(vt,`data-prefix`,`2`);let yt=i(`code`,vt);n(vt,yt);let bt=l(yt);n(yt,bt),f(bt,`// 编译后保留 native + once 的事件配置`);let xt=i(`pre`,Q);n(Q,xt),c(xt,`data-prefix`,`3`);let St=i(`code`,xt);n(xt,St);let Ct=l(St);n(St,Ct),f(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=i(`div`,mt);n(mt,wt),g(wt,`grid gap-3`);let Tt=a(`rue:component:anchor`);n(wt,Tt),h(ee(re,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=i(`p`,wt);n(wt,Et),g(Et,`text-sm opacity-70`),n(Et,e(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=i(`section`,_);n(_,Dt),g(Dt,`space-y-3`);let Ot=i(`h2`,Dt);n(Dt,Ot),g(Ot,`text-xl font-semibold`),n(Ot,e(`修饰符速查`));let $=i(`div`,Dt);n(Dt,$),g($,`flex flex-wrap gap-2`);let kt=i(`span`,$);n($,kt),g(kt,`badge badge-primary badge-lg`),n(kt,e(`v-on:click-stop`));let At=i(`span`,$);n($,At),g(At,`badge badge-primary badge-lg`),n(At,e(`v-on:click-prevent`));let jt=i(`span`,$);n($,jt),g(jt,`badge badge-primary badge-lg`),n(jt,e(`v-on:click-self`));let Mt=i(`span`,$);n($,Mt),g(Mt,`badge badge-primary badge-lg`),n(Mt,e(`v-on:click-once`));let Nt=i(`span`,$);n($,Nt),g(Nt,`badge badge-primary badge-lg`),n(Nt,e(`v-on:click-capture`));let Pt=i(`span`,$);n($,Pt),g(Pt,`badge badge-primary badge-lg`),n(Pt,e(`v-on:wheel-passive`));let Ft=i(`span`,$);n($,Ft),g(Ft,`badge badge-primary badge-lg`),n(Ft,e(`v-on:click-ctrl`));let It=i(`span`,$);n($,It),g(It,`badge badge-primary badge-lg`),n(It,e(`v-on:click-shift`));let Lt=i(`span`,$);n($,Lt),g(Lt,`badge badge-primary badge-lg`),n(Lt,e(`v-on:click-alt`));let Rt=i(`span`,$);n($,Rt),g(Rt,`badge badge-primary badge-lg`),n(Rt,e(`v-on:click-meta`));let zt=i(`span`,$);n($,zt),g(zt,`badge badge-primary badge-lg`),n(zt,e(`v-on:click-meta-exact`));let Bt=i(`span`,$);n($,Bt),g(Bt,`badge badge-primary badge-lg`),n(Bt,e(`v-on:click-middle`));let Vt=i(`span`,$);n($,Vt),g(Vt,`badge badge-primary badge-lg`),n(Vt,e(`v-on:keyup-enter`));let Ht=i(`span`,$);n($,Ht),g(Ht,`badge badge-primary badge-lg`),n(Ht,e(`v-on:keyup-tab`));let Ut=i(`span`,$);n($,Ut),g(Ut,`badge badge-primary badge-lg`),n(Ut,e(`v-on:keyup-delete`));let Wt=i(`span`,$);n($,Wt),g(Wt,`badge badge-primary badge-lg`),n(Wt,e(`v-on:keyup-esc`));let Gt=i(`span`,$);n($,Gt),g(Gt,`badge badge-primary badge-lg`),n(Gt,e(`v-on:keyup-space`));let Kt=i(`span`,$);n($,Kt),g(Kt,`badge badge-primary badge-lg`),n(Kt,e(`v-on:keyup-up`));let qt=i(`span`,$);n($,qt),g(qt,`badge badge-primary badge-lg`),n(qt,e(`v-on:keyup-down`));let Jt=i(`span`,$);n($,Jt),g(Jt,`badge badge-primary badge-lg`),n(Jt,e(`v-on:keyup-left`));let Yt=i(`span`,$);n($,Yt),g(Yt,`badge badge-primary badge-lg`),n(Yt,e(`v-on:keyup-right`));let Xt=i(`span`,$);n($,Xt),g(Xt,`badge badge-primary badge-lg`),n(Xt,e(`v-on:keyup-13`));let Zt=i(`span`,$);n($,Zt),g(Zt,`badge badge-primary badge-lg`),n(Zt,e(`v-on:click-native-once`));let Qt=i(`section`,_);n(_,Qt),g(Qt,`space-y-3`);let $t=i(`h2`,Qt);n(Qt,$t),g($t,`text-xl font-semibold`),n($t,e(`最近一次事件`));let en=i(`div`,Qt);n(Qt,en),g(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=l(en);n(en,tn),o(()=>{f(tn,fe.value)});let nn=i(`section`,_);n(_,nn),g(nn,`space-y-3`);let rn=i(`h2`,nn);n(nn,rn),g(rn,`text-xl font-semibold`),n(rn,e(`事件日志`));let an=i(`div`,nn);n(nn,an),g(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=i(`ul`,an);n(an,on),g(on,`list gap-2 font-mono text-sm`);let sn=a(`rue:list:start`),cn=a(`rue:list:end`);n(on,sn),n(on,cn);let ln=new Map;return o(()=>{ln=te({items:pe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(e,t,r,a,u)=>{h(d(()=>{let t=s(),r=i(`li`,t);n(t,r),o(()=>{c(r,`key`,String(`${e}-${u}`))}),g(r,`list-row px-0 py-1`);let a=l(r);return n(r,a),o(()=>{f(a,e)}),t}),t,r)}})}),r}):``;t(()=>h(r,T,E))}),r})}),m,_),m})};export{C as default};