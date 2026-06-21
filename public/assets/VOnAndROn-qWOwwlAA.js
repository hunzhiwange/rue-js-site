import{$t as e,Jt as t,Q as n,Z as r,_t as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as ee,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,re=t=>l(r=>{let i=d(`button`,r);a(i,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let s=d(`span`,i);n(i,s);let c=o(`rue:slot:anchor`);n(s,c),g(()=>{let n=t.title;e(()=>f(n,s,c))});let u=o(`rue:slot:anchor`);return n(i,u),g(()=>{let r=t.note?l(()=>{let r=m(),i=d(`span`,r);n(r,i),a(i,`text-xs opacity-70`);let s=o(`rue:slot:anchor`);return n(i,s),g(()=>{let n=t.note;e(()=>f(n,i,s))}),r}):``;e(()=>f(r,i,u))}),i}),C=()=>{let{activeTab:C,methodPathCount:ie,keyword:ae,bubbleCount:oe,stopPreventCount:se,enterCount:ce,keyCodeCount:le,selfCount:ue,metaExactCount:de,lastEvent:fe,eventLog:pe,updateLastEvent:w,onMethodPath:me,onInput:he,onManualCall:ge,onBubbleParent:_e,onDirectiveStopPrevent:ve,onEnterDirective:ye,onKeyCode13Directive:be,onSelfOnly:xe,onMetaExact:Se}=_(`useSetup:0:0`,()=>s(()=>{let e=_(`ref:1:0`,()=>t(`code`)),n=_(`ref:1:1`,()=>t(0)),r=_(`ref:1:2`,()=>t(`Rue`)),i=_(`ref:1:3`,()=>t(0)),a=_(`ref:1:4`,()=>t(0)),o=_(`ref:1:5`,()=>t(0)),s=_(`ref:1:6`,()=>t(0)),c=_(`ref:1:7`,()=>t(0)),l=_(`ref:1:8`,()=>t(0)),u=_(`ref:1:9`,()=>t(`等待交互`)),d=_(`ref:1:10`,()=>t([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:n,keyword:r,bubbleCount:i,stopPreventCount:a,enterCount:o,keyCodeCount:s,selfCount:c,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{n.value+=1,f(`v-on:click -> `+e.type+` #`+n.value)},onInput:e=>{r.value=e.target.value,f(`r-on:input -> `+(r.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{i.value+=1,f(`父级收到冒泡 -> 第 `+i.value+` 次`)},onDirectiveStopPrevent:e=>{a.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+a.value+` 次`)},onEnterDirective:e=>{o.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+o.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;s.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+s.value)},onSelfOnly:e=>{c.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+c.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return l(t=>{let s=m(),_=o(`rue:component:anchor`);return n(s,_),f(ee(b,{children:l(()=>{let t=m(),s=d(`h1`,t);n(t,s),a(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,p(`v-on / r-on`));let _=d(`div`,t);n(t,_),u(_,`role`,`tablist`),a(_,`tabs tabs-box`);let b=d(`button`,_);n(_,b),u(b,`role`,`tab`),g(()=>{a(b,`tab ${C.value===`preview`?`tab-active`:``}`)}),r(b,`click`,()=>{C.value=`preview`}),n(b,p(`效果`));let w=d(`button`,_);n(_,w),u(w,`role`,`tab`),g(()=>{a(w,`tab ${C.value===`code`?`tab-active`:``}`)}),r(w,`click`,()=>{C.value=`code`}),n(w,p(`代码`));let T=d(`div`,t);n(t,T),a(T,`mt-4 grid gap-6 items-start`);let Ce=o(`rue:slot:anchor`);n(T,Ce),g(()=>{let t=C.value===`code`?l(()=>{let t=m(),r=d(`div`,t);n(t,r),a(r,`grid gap-6`);let i=d(`div`,r);n(r,i),a(i,`card bg-base-100 shadow overflow-auto`);let s=d(`div`,i);n(i,s),a(s,`card-body gap-3`);let c=d(`h2`,s);n(s,c),a(c,`card-title`),n(c,p(`Rue TSX 实际源码`));let l=o(`rue:component:anchor`);n(s,l),g(()=>{let t=ee(y,{className:`h-full`,lang:`tsx`,code:x});e(()=>f(t,s,l))});let u=d(`div`,r);n(r,u),a(u,`card bg-base-100 shadow overflow-auto`);let h=d(`div`,u);n(u,h),a(h,`card-body gap-3`);let _=d(`h2`,h);n(h,_),a(_,`card-title`),n(_,p(`原生 TSX 对照写法`));let v=o(`rue:component:anchor`);n(h,v),g(()=>{let t=ee(y,{className:`h-full`,lang:`tsx`,code:ne});e(()=>f(t,h,v))});let te=d(`div`,r);n(r,te),a(te,`card bg-base-100 shadow overflow-auto`);let b=d(`div`,te);n(te,b),a(b,`card-body gap-3`);let re=d(`h2`,b);n(b,re),a(re,`card-title`),n(re,p(`修饰符速查`));let C=o(`rue:component:anchor`);return n(b,C),g(()=>{let t=ee(y,{className:`h-full`,lang:`tsx`,code:S});e(()=>f(t,b,C))}),t}):``;e(()=>f(t,T,Ce))}),n(T,p(` `));let E=o(`rue:slot:anchor`);return n(T,E),g(()=>{let t=C.value===`preview`?l(()=>{let t=m(),s=d(`div`,t);n(t,s),a(s,`card bg-base-100 shadow`);let _=d(`div`,s);n(s,_),a(_,`card-body grid gap-6`);let y=d(`div`,_);n(_,y),u(y,`role`,`alert`),a(y,`alert alert-info`);let b=d(`span`,y);n(y,b),n(b,p(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let x=d(`div`,_);n(_,x),u(x,`role`,`alert`),a(x,`alert alert-warning alert-soft`);let ne=d(`span`,x);n(x,ne),n(ne,p(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=d(`section`,_);n(_,S),a(S,`space-y-3`);let C=d(`div`,S);n(S,C),a(C,`flex flex-wrap items-center justify-between gap-3`);let w=d(`h2`,C);n(C,w),a(w,`text-xl font-semibold`),n(w,p(`v-on:click：method path 自动注入浏览器事件`));let T=d(`span`,C);n(C,T),a(T,`badge badge-primary badge-lg`);let Ce=c(T);n(T,Ce),g(()=>{h(Ce,ie.value)}),n(T,p(` 次`));let E=d(`div`,S);n(S,E),a(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let we=d(`button`,E);n(E,we),a(we,`btn btn-primary`),r(we,`click`,e=>me(e)),n(we,p(`v-on:click="onMethodPath"`));let Te=d(`p`,E);n(E,Te),a(Te,`text-sm opacity-70`),n(Te,p(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let D=d(`section`,_);n(_,D),a(D,`space-y-3`);let O=d(`div`,D);n(D,O),a(O,`flex flex-wrap items-center justify-between gap-3`);let Ee=d(`h2`,O);n(O,Ee),a(Ee,`text-xl font-semibold`),n(Ee,p(`v-on:click：method() / method($event)`));let De=d(`span`,O);n(O,De),a(De,`badge badge-outline badge-lg`),n(De,p(`last call`));let k=d(`div`,D);n(D,k),a(k,`grid gap-3 md:grid-cols-2`);let Oe=d(`button`,k);n(k,Oe),a(Oe,`btn btn-secondary`),r(Oe,`click`,e=>ge(`method() 不自动注入 event`)),n(Oe,p(`method()`));let ke=d(`button`,k);n(k,ke),a(ke,`btn btn-accent`),r(ke,`click`,e=>ge(`method($event) 显式注入`,e)),n(ke,p(`method($event)`));let A=d(`section`,_);n(_,A),a(A,`space-y-3`);let Ae=d(`div`,A);n(A,Ae),a(Ae,`flex flex-wrap items-center justify-between gap-3`);let je=d(`h2`,Ae);n(Ae,je),a(je,`text-xl font-semibold`),n(je,p(`r-on:input：直接复用标准输入事件`));let Me=d(`span`,Ae);n(Ae,Me),a(Me,`badge badge-outline badge-lg`),n(Me,p(`长度 `));let Ne=o(`rue:slot:anchor`);n(Me,Ne),g(()=>{let t=ae.value.length;e(()=>f(t,Me,Ne))});let Pe=d(`div`,A);n(A,Pe),a(Pe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=d(`input`,Pe);n(Pe,Fe),a(Fe,`input input-bordered w-full`),g(()=>{i(Fe,ae.value)}),r(Fe,`input`,e=>he(e));let j=d(`div`,Pe);n(Pe,j),a(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=d(`div`,j);n(j,M),a(M,`stat`);let Ie=d(`div`,M);n(M,Ie),a(Ie,`stat-title`),n(Ie,p(`当前值`));let Le=d(`div`,M);n(M,Le),a(Le,`stat-value text-2xl`);let Re=c(Le);n(Le,Re),g(()=>{h(Re,ae.value||`空`)});let N=d(`div`,j);n(j,N),a(N,`stat`);let ze=d(`div`,N);n(N,ze),a(ze,`stat-title`),n(ze,p(`大写预览`));let Be=d(`div`,N);n(N,Be),a(Be,`stat-value text-2xl`);let Ve=c(Be);n(Be,Ve),g(()=>{h(Ve,ae.value.toUpperCase()||`EMPTY`)});let P=d(`section`,_);n(_,P),a(P,`space-y-3`);let F=d(`div`,P);n(P,F),a(F,`flex flex-wrap items-center justify-between gap-3`);let He=d(`h2`,F);n(F,He),a(He,`text-xl font-semibold`),n(He,p(`v-on:click-stop-prevent`));let I=d(`div`,F);n(F,I),a(I,`flex flex-wrap gap-2`);let Ue=d(`span`,I);n(I,Ue),a(Ue,`badge badge-warning badge-lg`),n(Ue,p(`bubble `));let We=c(Ue);n(Ue,We),g(()=>{h(We,oe.value)});let Ge=d(`span`,I);n(I,Ge),a(Ge,`badge badge-success badge-lg`),n(Ge,p(`stop/prevent `));let Ke=c(Ge);n(Ge,Ke),g(()=>{h(Ke,se.value)});let L=d(`div`,P);n(P,L),a(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),r(L,`click`,e=>_e(e));let qe=d(`a`,L);n(L,qe),a(qe,`link link-primary`),u(qe,`href`,`#compiled-stop-prevent`),r(qe,`click`,v(e=>ve(e),[`stop`,`prevent`])),n(qe,p(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=d(`p`,L);n(L,Je),a(Je,`text-sm opacity-70`),n(Je,p(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=d(`section`,_);n(_,R),a(R,`space-y-3`);let z=d(`div`,R);n(R,z),a(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=d(`h2`,z);n(z,Ye),a(Ye,`text-xl font-semibold`),n(Ye,p(`v-on:keyup-enter / v-on:keyup-13`));let B=d(`div`,z);n(z,B),a(B,`flex flex-wrap gap-2`);let Xe=d(`span`,B);n(B,Xe),a(Xe,`badge badge-accent badge-lg`),n(Xe,p(`enter `));let Ze=c(Xe);n(Xe,Ze),g(()=>{h(Ze,ce.value)});let Qe=d(`span`,B);n(B,Qe),a(Qe,`badge badge-neutral badge-lg`),n(Qe,p(`13 `));let $e=c(Qe);n(Qe,$e),g(()=>{h($e,le.value)});let V=d(`div`,R);n(R,V),a(V,`grid gap-3 md:grid-cols-2`);let H=d(`label`,V);n(V,H),a(H,`floating-label`);let et=d(`input`,H);n(H,et),a(et,`input input-bordered`),u(et,`placeholder`,`按 Enter`),r(et,`keyup`,v(e=>ye(e),[`enter`]));let tt=d(`span`,H);n(H,tt),n(tt,p(`v-on:keyup-enter="onEnterDirective"`));let U=d(`label`,V);n(V,U),a(U,`floating-label`);let nt=d(`input`,U);n(U,nt),a(nt,`input input-bordered`),u(nt,`placeholder`,`按 Enter`),r(nt,`keyup`,v(e=>be(e),[`13`]));let rt=d(`span`,U);n(U,rt),n(rt,p(`v-on:keyup-13="onKeyCode13Directive"`));let W=d(`section`,_);n(_,W),a(W,`space-y-3`);let G=d(`div`,W);n(W,G),a(G,`flex flex-wrap items-center justify-between gap-3`);let it=d(`h2`,G);n(G,it),a(it,`text-xl font-semibold`),n(it,p(`v-on:click-self / v-on:click-meta-exact`));let K=d(`div`,G);n(G,K),a(K,`flex flex-wrap gap-2`);let at=d(`span`,K);n(K,at),a(at,`badge badge-info badge-lg`),n(at,p(`self `));let ot=c(at);n(at,ot),g(()=>{h(ot,ue.value)});let st=d(`span`,K);n(K,st),a(st,`badge badge-info badge-lg`),n(st,p(`meta.exact `));let ct=c(st);n(st,ct),g(()=>{h(ct,de.value)});let q=d(`div`,W);n(W,q),a(q,`grid gap-4 md:grid-cols-2`);let J=d(`div`,q);n(q,J),a(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),r(J,`click`,v(e=>xe(e),[`self`]));let lt=d(`p`,J);n(J,lt),a(lt,`font-medium`),n(lt,p(`v-on:click-self="onSelfOnly"`));let ut=d(`p`,J);n(J,ut),a(ut,`text-sm opacity-70`),n(ut,p(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=d(`button`,J);n(J,dt),a(dt,`btn btn-ghost btn-sm`),n(dt,p(`子元素按钮`));let ft=d(`button`,q);n(q,ft),a(ft,`btn btn-info`),r(ft,`click`,v(e=>Se(e),[`meta`,`exact`])),n(ft,p(`v-on:click-meta-exact：按住 Command 点击`));let Y=d(`section`,_);n(_,Y),a(Y,`space-y-3`);let X=d(`div`,Y);n(Y,X),a(X,`flex flex-wrap items-center justify-between gap-3`);let pt=d(`h2`,X);n(X,pt),a(pt,`text-xl font-semibold`),n(pt,p(`v-on:click-native-once`));let mt=d(`span`,X);n(X,mt),a(mt,`badge badge-secondary badge-lg`),n(mt,p(`code path`));let Z=d(`div`,Y);n(Y,Z),a(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=d(`div`,Z);n(Z,Q),a(Q,`mockup-code text-sm`);let ht=d(`pre`,Q);n(Q,ht),u(ht,`data-prefix`,`1`);let gt=d(`code`,ht);n(ht,gt);let _t=c(gt);n(gt,_t),h(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=d(`pre`,Q);n(Q,vt),u(vt,`data-prefix`,`2`);let yt=d(`code`,vt);n(vt,yt);let bt=c(yt);n(yt,bt),h(bt,`// 编译后保留 native + once 的事件配置`);let xt=d(`pre`,Q);n(Q,xt),u(xt,`data-prefix`,`3`);let St=d(`code`,xt);n(xt,St);let Ct=c(St);n(St,Ct),h(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=d(`div`,Z);n(Z,wt),a(wt,`grid gap-3`);let Tt=o(`rue:component:anchor`);n(wt,Tt),f(ee(re,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=d(`p`,wt);n(wt,Et),a(Et,`text-sm opacity-70`),n(Et,p(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=d(`section`,_);n(_,Dt),a(Dt,`space-y-3`);let Ot=d(`h2`,Dt);n(Dt,Ot),a(Ot,`text-xl font-semibold`),n(Ot,p(`修饰符速查`));let $=d(`div`,Dt);n(Dt,$),a($,`flex flex-wrap gap-2`);let kt=d(`span`,$);n($,kt),a(kt,`badge badge-primary badge-lg`),n(kt,p(`v-on:click-stop`));let At=d(`span`,$);n($,At),a(At,`badge badge-primary badge-lg`),n(At,p(`v-on:click-prevent`));let jt=d(`span`,$);n($,jt),a(jt,`badge badge-primary badge-lg`),n(jt,p(`v-on:click-self`));let Mt=d(`span`,$);n($,Mt),a(Mt,`badge badge-primary badge-lg`),n(Mt,p(`v-on:click-once`));let Nt=d(`span`,$);n($,Nt),a(Nt,`badge badge-primary badge-lg`),n(Nt,p(`v-on:click-capture`));let Pt=d(`span`,$);n($,Pt),a(Pt,`badge badge-primary badge-lg`),n(Pt,p(`v-on:wheel-passive`));let Ft=d(`span`,$);n($,Ft),a(Ft,`badge badge-primary badge-lg`),n(Ft,p(`v-on:click-ctrl`));let It=d(`span`,$);n($,It),a(It,`badge badge-primary badge-lg`),n(It,p(`v-on:click-shift`));let Lt=d(`span`,$);n($,Lt),a(Lt,`badge badge-primary badge-lg`),n(Lt,p(`v-on:click-alt`));let Rt=d(`span`,$);n($,Rt),a(Rt,`badge badge-primary badge-lg`),n(Rt,p(`v-on:click-meta`));let zt=d(`span`,$);n($,zt),a(zt,`badge badge-primary badge-lg`),n(zt,p(`v-on:click-meta-exact`));let Bt=d(`span`,$);n($,Bt),a(Bt,`badge badge-primary badge-lg`),n(Bt,p(`v-on:click-middle`));let Vt=d(`span`,$);n($,Vt),a(Vt,`badge badge-primary badge-lg`),n(Vt,p(`v-on:keyup-enter`));let Ht=d(`span`,$);n($,Ht),a(Ht,`badge badge-primary badge-lg`),n(Ht,p(`v-on:keyup-tab`));let Ut=d(`span`,$);n($,Ut),a(Ut,`badge badge-primary badge-lg`),n(Ut,p(`v-on:keyup-delete`));let Wt=d(`span`,$);n($,Wt),a(Wt,`badge badge-primary badge-lg`),n(Wt,p(`v-on:keyup-esc`));let Gt=d(`span`,$);n($,Gt),a(Gt,`badge badge-primary badge-lg`),n(Gt,p(`v-on:keyup-space`));let Kt=d(`span`,$);n($,Kt),a(Kt,`badge badge-primary badge-lg`),n(Kt,p(`v-on:keyup-up`));let qt=d(`span`,$);n($,qt),a(qt,`badge badge-primary badge-lg`),n(qt,p(`v-on:keyup-down`));let Jt=d(`span`,$);n($,Jt),a(Jt,`badge badge-primary badge-lg`),n(Jt,p(`v-on:keyup-left`));let Yt=d(`span`,$);n($,Yt),a(Yt,`badge badge-primary badge-lg`),n(Yt,p(`v-on:keyup-right`));let Xt=d(`span`,$);n($,Xt),a(Xt,`badge badge-primary badge-lg`),n(Xt,p(`v-on:keyup-13`));let Zt=d(`span`,$);n($,Zt),a(Zt,`badge badge-primary badge-lg`),n(Zt,p(`v-on:click-native-once`));let Qt=d(`section`,_);n(_,Qt),a(Qt,`space-y-3`);let $t=d(`h2`,Qt);n(Qt,$t),a($t,`text-xl font-semibold`),n($t,p(`最近一次事件`));let en=d(`div`,Qt);n(Qt,en),a(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=c(en);n(en,tn),g(()=>{h(tn,fe.value)});let nn=d(`section`,_);n(_,nn),a(nn,`space-y-3`);let rn=d(`h2`,nn);n(nn,rn),a(rn,`text-xl font-semibold`),n(rn,p(`事件日志`));let an=d(`div`,nn);n(nn,an),a(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=d(`ul`,an);n(an,on),a(on,`list gap-2 font-mono text-sm`);let sn=o(`rue:list:start`),cn=o(`rue:list:end`);n(on,sn),n(on,cn);let ln=new Map;return g(()=>{ln=te({items:pe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(e,t,r,i,o)=>{f(l(()=>{let t=m(),r=d(`li`,t);n(t,r),g(()=>{u(r,`key`,String(`${e}-${o}`))}),a(r,`list-row px-0 py-1`);let i=c(r);return n(r,i),g(()=>{h(i,e)}),t}),t,r)}})}),t}):``;e(()=>f(t,T,E))}),t})}),s,_),s})};export{C as default};