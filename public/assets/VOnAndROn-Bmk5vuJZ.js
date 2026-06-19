import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,ht as u,l as d,nt as f,o as p,rt as m,t as ee,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var ne=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,ie=n=>d(i=>{let a=h(`button`,i);g(a,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let s=h(`span`,a);o(a,s);let l=e(`rue:slot:anchor`);o(s,l),t(()=>{let e=n.title;r(()=>p(e,s,l))});let u=e(`rue:slot:anchor`);return o(a,u),t(()=>{let i=n.note?d(()=>{let i=c(),a=h(`span`,i);o(i,a),g(a,`text-xs opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.note;r(()=>p(e,a,s))}),i}):``;r(()=>p(i,a,u))}),a}),S=()=>{let{activeTab:S,methodPathCount:ae,keyword:oe,bubbleCount:se,stopPreventCount:ce,enterCount:le,keyCodeCount:ue,selfCount:de,metaExactCount:fe,lastEvent:pe,eventLog:me,updateLastEvent:C,onMethodPath:he,onInput:ge,onManualCall:_e,onBubbleParent:ve,onDirectiveStopPrevent:ye,onEnterDirective:be,onKeyCode13Directive:xe,onSelfOnly:Se,onMetaExact:Ce}=_(`useSetup:0:0`,()=>a(()=>{let e=_(`ref:1:0`,()=>n(`code`)),t=_(`ref:1:1`,()=>n(0)),r=_(`ref:1:2`,()=>n(`Rue`)),i=_(`ref:1:3`,()=>n(0)),a=_(`ref:1:4`,()=>n(0)),o=_(`ref:1:5`,()=>n(0)),s=_(`ref:1:6`,()=>n(0)),c=_(`ref:1:7`,()=>n(0)),l=_(`ref:1:8`,()=>n(0)),u=_(`ref:1:9`,()=>n(`等待交互`)),d=_(`ref:1:10`,()=>n([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:r,bubbleCount:i,stopPreventCount:a,enterCount:o,keyCodeCount:s,selfCount:c,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{r.value=e.target.value,f(`r-on:input -> `+(r.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{i.value+=1,f(`父级收到冒泡 -> 第 `+i.value+` 次`)},onDirectiveStopPrevent:e=>{a.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+a.value+` 次`)},onEnterDirective:e=>{o.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+o.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;s.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+s.value)},onSelfOnly:e=>{c.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+c.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return d(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),p(ee(b,{children:d(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,f(`v-on / r-on`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let b=h(`button`,_);o(_,b),s(b,`role`,`tab`),t(()=>{g(b,`tab ${S.value===`preview`?`tab-active`:``}`)}),i(b,`click`,()=>{S.value=`preview`}),o(b,f(`效果`));let C=h(`button`,_);o(_,C),s(C,`role`,`tab`),t(()=>{g(C,`tab ${S.value===`code`?`tab-active`:``}`)}),i(C,`click`,()=>{S.value=`code`}),o(C,f(`代码`));let w=h(`div`,n);o(n,w),g(w,`mt-4 grid gap-6 items-start`);let we=e(`rue:slot:anchor`);o(w,we),t(()=>{let n=S.value===`code`?d(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`grid gap-6`);let a=h(`div`,i);o(i,a),g(a,`card bg-base-100 shadow overflow-auto`);let s=h(`div`,a);o(a,s),g(s,`card-body gap-3`);let l=h(`h2`,s);o(s,l),g(l,`card-title`),o(l,f(`Rue TSX 实际源码`));let u=e(`rue:component:anchor`);o(s,u),t(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});r(()=>p(e,s,u))});let d=h(`div`,i);o(i,d),g(d,`card bg-base-100 shadow overflow-auto`);let m=h(`div`,d);o(d,m),g(m,`card-body gap-3`);let _=h(`h2`,m);o(m,_),g(_,`card-title`),o(_,f(`原生 TSX 对照写法`));let v=e(`rue:component:anchor`);o(m,v),t(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:re});r(()=>p(e,m,v))});let te=h(`div`,i);o(i,te),g(te,`card bg-base-100 shadow overflow-auto`);let b=h(`div`,te);o(te,b),g(b,`card-body gap-3`);let ie=h(`h2`,b);o(b,ie),g(ie,`card-title`),o(ie,f(`修饰符速查`));let S=e(`rue:component:anchor`);return o(b,S),t(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});r(()=>p(e,b,S))}),n}):``;r(()=>p(n,w,we))}),o(w,f(` `));let T=e(`rue:slot:anchor`);return o(w,T),t(()=>{let n=S.value===`preview`?d(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`card bg-base-100 shadow`);let _=h(`div`,a);o(a,_),g(_,`card-body grid gap-6`);let y=h(`div`,_);o(_,y),s(y,`role`,`alert`),g(y,`alert alert-info`);let b=h(`span`,y);o(y,b),o(b,f(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let ne=h(`div`,_);o(_,ne),s(ne,`role`,`alert`),g(ne,`alert alert-warning alert-soft`);let re=h(`span`,ne);o(ne,re),o(re,f(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let x=h(`section`,_);o(_,x),g(x,`space-y-3`);let S=h(`div`,x);o(x,S),g(S,`flex flex-wrap items-center justify-between gap-3`);let C=h(`h2`,S);o(S,C),g(C,`text-xl font-semibold`),o(C,f(`v-on:click：method path 自动注入浏览器事件`));let w=h(`span`,S);o(S,w),g(w,`badge badge-primary badge-lg`);let we=m(w);o(w,we),t(()=>{l(we,ae.value)}),o(w,f(` 次`));let T=h(`div`,x);o(x,T),g(T,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Te=h(`button`,T);o(T,Te),g(Te,`btn btn-primary`),i(Te,`click`,e=>he(e)),o(Te,f(`v-on:click="onMethodPath"`));let Ee=h(`p`,T);o(T,Ee),g(Ee,`text-sm opacity-70`),o(Ee,f(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let E=h(`section`,_);o(_,E),g(E,`space-y-3`);let D=h(`div`,E);o(E,D),g(D,`flex flex-wrap items-center justify-between gap-3`);let De=h(`h2`,D);o(D,De),g(De,`text-xl font-semibold`),o(De,f(`v-on:click：method() / method($event)`));let Oe=h(`span`,D);o(D,Oe),g(Oe,`badge badge-outline badge-lg`),o(Oe,f(`last call`));let O=h(`div`,E);o(E,O),g(O,`grid gap-3 md:grid-cols-2`);let ke=h(`button`,O);o(O,ke),g(ke,`btn btn-secondary`),i(ke,`click`,e=>_e(`method() 不自动注入 event`)),o(ke,f(`method()`));let Ae=h(`button`,O);o(O,Ae),g(Ae,`btn btn-accent`),i(Ae,`click`,e=>_e(`method($event) 显式注入`,e)),o(Ae,f(`method($event)`));let k=h(`section`,_);o(_,k),g(k,`space-y-3`);let A=h(`div`,k);o(k,A),g(A,`flex flex-wrap items-center justify-between gap-3`);let je=h(`h2`,A);o(A,je),g(je,`text-xl font-semibold`),o(je,f(`r-on:input：直接复用标准输入事件`));let Me=h(`span`,A);o(A,Me),g(Me,`badge badge-outline badge-lg`),o(Me,f(`长度 `));let Ne=e(`rue:slot:anchor`);o(Me,Ne),t(()=>{let e=oe.value.length;r(()=>p(e,Me,Ne))});let Pe=h(`div`,k);o(k,Pe),g(Pe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=h(`input`,Pe);o(Pe,Fe),g(Fe,`input input-bordered w-full`),t(()=>{u(Fe,oe.value)}),i(Fe,`input`,e=>ge(e));let j=h(`div`,Pe);o(Pe,j),g(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=h(`div`,j);o(j,M),g(M,`stat`);let Ie=h(`div`,M);o(M,Ie),g(Ie,`stat-title`),o(Ie,f(`当前值`));let Le=h(`div`,M);o(M,Le),g(Le,`stat-value text-2xl`);let Re=m(Le);o(Le,Re),t(()=>{l(Re,oe.value||`空`)});let N=h(`div`,j);o(j,N),g(N,`stat`);let ze=h(`div`,N);o(N,ze),g(ze,`stat-title`),o(ze,f(`大写预览`));let Be=h(`div`,N);o(N,Be),g(Be,`stat-value text-2xl`);let Ve=m(Be);o(Be,Ve),t(()=>{l(Ve,oe.value.toUpperCase()||`EMPTY`)});let P=h(`section`,_);o(_,P),g(P,`space-y-3`);let F=h(`div`,P);o(P,F),g(F,`flex flex-wrap items-center justify-between gap-3`);let He=h(`h2`,F);o(F,He),g(He,`text-xl font-semibold`),o(He,f(`v-on:click-stop-prevent`));let I=h(`div`,F);o(F,I),g(I,`flex flex-wrap gap-2`);let Ue=h(`span`,I);o(I,Ue),g(Ue,`badge badge-warning badge-lg`),o(Ue,f(`bubble `));let We=m(Ue);o(Ue,We),t(()=>{l(We,se.value)});let Ge=h(`span`,I);o(I,Ge),g(Ge,`badge badge-success badge-lg`),o(Ge,f(`stop/prevent `));let Ke=m(Ge);o(Ge,Ke),t(()=>{l(Ke,ce.value)});let L=h(`div`,P);o(P,L),g(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),i(L,`click`,e=>ve(e));let qe=h(`a`,L);o(L,qe),g(qe,`link link-primary`),s(qe,`href`,`#compiled-stop-prevent`),i(qe,`click`,v(e=>ye(e),[`stop`,`prevent`])),o(qe,f(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=h(`p`,L);o(L,Je),g(Je,`text-sm opacity-70`),o(Je,f(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=h(`section`,_);o(_,R),g(R,`space-y-3`);let z=h(`div`,R);o(R,z),g(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=h(`h2`,z);o(z,Ye),g(Ye,`text-xl font-semibold`),o(Ye,f(`v-on:keyup-enter / v-on:keyup-13`));let B=h(`div`,z);o(z,B),g(B,`flex flex-wrap gap-2`);let Xe=h(`span`,B);o(B,Xe),g(Xe,`badge badge-accent badge-lg`),o(Xe,f(`enter `));let Ze=m(Xe);o(Xe,Ze),t(()=>{l(Ze,le.value)});let Qe=h(`span`,B);o(B,Qe),g(Qe,`badge badge-neutral badge-lg`),o(Qe,f(`13 `));let $e=m(Qe);o(Qe,$e),t(()=>{l($e,ue.value)});let V=h(`div`,R);o(R,V),g(V,`grid gap-3 md:grid-cols-2`);let H=h(`label`,V);o(V,H),g(H,`floating-label`);let et=h(`input`,H);o(H,et),g(et,`input input-bordered`),s(et,`placeholder`,`按 Enter`),i(et,`keyup`,v(e=>be(e),[`enter`]));let tt=h(`span`,H);o(H,tt),o(tt,f(`v-on:keyup-enter="onEnterDirective"`));let U=h(`label`,V);o(V,U),g(U,`floating-label`);let nt=h(`input`,U);o(U,nt),g(nt,`input input-bordered`),s(nt,`placeholder`,`按 Enter`),i(nt,`keyup`,v(e=>xe(e),[`13`]));let rt=h(`span`,U);o(U,rt),o(rt,f(`v-on:keyup-13="onKeyCode13Directive"`));let W=h(`section`,_);o(_,W),g(W,`space-y-3`);let G=h(`div`,W);o(W,G),g(G,`flex flex-wrap items-center justify-between gap-3`);let it=h(`h2`,G);o(G,it),g(it,`text-xl font-semibold`),o(it,f(`v-on:click-self / v-on:click-meta-exact`));let K=h(`div`,G);o(G,K),g(K,`flex flex-wrap gap-2`);let at=h(`span`,K);o(K,at),g(at,`badge badge-info badge-lg`),o(at,f(`self `));let ot=m(at);o(at,ot),t(()=>{l(ot,de.value)});let st=h(`span`,K);o(K,st),g(st,`badge badge-info badge-lg`),o(st,f(`meta.exact `));let ct=m(st);o(st,ct),t(()=>{l(ct,fe.value)});let q=h(`div`,W);o(W,q),g(q,`grid gap-4 md:grid-cols-2`);let J=h(`div`,q);o(q,J),g(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),i(J,`click`,v(e=>Se(e),[`self`]));let lt=h(`p`,J);o(J,lt),g(lt,`font-medium`),o(lt,f(`v-on:click-self="onSelfOnly"`));let ut=h(`p`,J);o(J,ut),g(ut,`text-sm opacity-70`),o(ut,f(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=h(`button`,J);o(J,dt),g(dt,`btn btn-ghost btn-sm`),o(dt,f(`子元素按钮`));let ft=h(`button`,q);o(q,ft),g(ft,`btn btn-info`),i(ft,`click`,v(e=>Ce(e),[`meta`,`exact`])),o(ft,f(`v-on:click-meta-exact：按住 Command 点击`));let Y=h(`section`,_);o(_,Y),g(Y,`space-y-3`);let X=h(`div`,Y);o(Y,X),g(X,`flex flex-wrap items-center justify-between gap-3`);let pt=h(`h2`,X);o(X,pt),g(pt,`text-xl font-semibold`),o(pt,f(`v-on:click-native-once`));let mt=h(`span`,X);o(X,mt),g(mt,`badge badge-secondary badge-lg`),o(mt,f(`code path`));let Z=h(`div`,Y);o(Y,Z),g(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=h(`div`,Z);o(Z,Q),g(Q,`mockup-code text-sm`);let ht=h(`pre`,Q);o(Q,ht),s(ht,`data-prefix`,`1`);let gt=h(`code`,ht);o(ht,gt);let _t=m(gt);o(gt,_t),l(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=h(`pre`,Q);o(Q,vt),s(vt,`data-prefix`,`2`);let yt=h(`code`,vt);o(vt,yt);let bt=m(yt);o(yt,bt),l(bt,`// 编译后保留 native + once 的事件配置`);let xt=h(`pre`,Q);o(Q,xt),s(xt,`data-prefix`,`3`);let St=h(`code`,xt);o(xt,St);let Ct=m(St);o(St,Ct),l(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=h(`div`,Z);o(Z,wt),g(wt,`grid gap-3`);let Tt=e(`rue:component:anchor`);o(wt,Tt),p(ee(ie,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=h(`p`,wt);o(wt,Et),g(Et,`text-sm opacity-70`),o(Et,f(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=h(`section`,_);o(_,Dt),g(Dt,`space-y-3`);let Ot=h(`h2`,Dt);o(Dt,Ot),g(Ot,`text-xl font-semibold`),o(Ot,f(`修饰符速查`));let $=h(`div`,Dt);o(Dt,$),g($,`flex flex-wrap gap-2`);let kt=h(`span`,$);o($,kt),g(kt,`badge badge-primary badge-lg`),o(kt,f(`v-on:click-stop`));let At=h(`span`,$);o($,At),g(At,`badge badge-primary badge-lg`),o(At,f(`v-on:click-prevent`));let jt=h(`span`,$);o($,jt),g(jt,`badge badge-primary badge-lg`),o(jt,f(`v-on:click-self`));let Mt=h(`span`,$);o($,Mt),g(Mt,`badge badge-primary badge-lg`),o(Mt,f(`v-on:click-once`));let Nt=h(`span`,$);o($,Nt),g(Nt,`badge badge-primary badge-lg`),o(Nt,f(`v-on:click-capture`));let Pt=h(`span`,$);o($,Pt),g(Pt,`badge badge-primary badge-lg`),o(Pt,f(`v-on:wheel-passive`));let Ft=h(`span`,$);o($,Ft),g(Ft,`badge badge-primary badge-lg`),o(Ft,f(`v-on:click-ctrl`));let It=h(`span`,$);o($,It),g(It,`badge badge-primary badge-lg`),o(It,f(`v-on:click-shift`));let Lt=h(`span`,$);o($,Lt),g(Lt,`badge badge-primary badge-lg`),o(Lt,f(`v-on:click-alt`));let Rt=h(`span`,$);o($,Rt),g(Rt,`badge badge-primary badge-lg`),o(Rt,f(`v-on:click-meta`));let zt=h(`span`,$);o($,zt),g(zt,`badge badge-primary badge-lg`),o(zt,f(`v-on:click-meta-exact`));let Bt=h(`span`,$);o($,Bt),g(Bt,`badge badge-primary badge-lg`),o(Bt,f(`v-on:click-middle`));let Vt=h(`span`,$);o($,Vt),g(Vt,`badge badge-primary badge-lg`),o(Vt,f(`v-on:keyup-enter`));let Ht=h(`span`,$);o($,Ht),g(Ht,`badge badge-primary badge-lg`),o(Ht,f(`v-on:keyup-tab`));let Ut=h(`span`,$);o($,Ut),g(Ut,`badge badge-primary badge-lg`),o(Ut,f(`v-on:keyup-delete`));let Wt=h(`span`,$);o($,Wt),g(Wt,`badge badge-primary badge-lg`),o(Wt,f(`v-on:keyup-esc`));let Gt=h(`span`,$);o($,Gt),g(Gt,`badge badge-primary badge-lg`),o(Gt,f(`v-on:keyup-space`));let Kt=h(`span`,$);o($,Kt),g(Kt,`badge badge-primary badge-lg`),o(Kt,f(`v-on:keyup-up`));let qt=h(`span`,$);o($,qt),g(qt,`badge badge-primary badge-lg`),o(qt,f(`v-on:keyup-down`));let Jt=h(`span`,$);o($,Jt),g(Jt,`badge badge-primary badge-lg`),o(Jt,f(`v-on:keyup-left`));let Yt=h(`span`,$);o($,Yt),g(Yt,`badge badge-primary badge-lg`),o(Yt,f(`v-on:keyup-right`));let Xt=h(`span`,$);o($,Xt),g(Xt,`badge badge-primary badge-lg`),o(Xt,f(`v-on:keyup-13`));let Zt=h(`span`,$);o($,Zt),g(Zt,`badge badge-primary badge-lg`),o(Zt,f(`v-on:click-native-once`));let Qt=h(`section`,_);o(_,Qt),g(Qt,`space-y-3`);let $t=h(`h2`,Qt);o(Qt,$t),g($t,`text-xl font-semibold`),o($t,f(`最近一次事件`));let en=h(`div`,Qt);o(Qt,en),g(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=m(en);o(en,tn),t(()=>{l(tn,pe.value)});let nn=h(`section`,_);o(_,nn),g(nn,`space-y-3`);let rn=h(`h2`,nn);o(nn,rn),g(rn,`text-xl font-semibold`),o(rn,f(`事件日志`));let an=h(`div`,nn);o(nn,an),g(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=h(`ul`,an);o(an,on),g(on,`list gap-2 font-mono text-sm`);let sn=e(`rue:list:start`),cn=e(`rue:list:end`);o(on,sn),o(on,cn);let ln=new Map;return t(()=>{ln=te({items:me.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(e,n,r,i,a)=>{p(d(()=>{let n=c(),r=h(`li`,n);o(n,r),t(()=>{s(r,`key`,String(`${e}-${a}`))}),g(r,`list-row px-0 py-1`);let i=m(r);return o(r,i),t(()=>{l(i,e)}),n}),n,r)}})}),n}):``;r(()=>p(n,w,T))}),n})}),a,_),a})};export{S as default};