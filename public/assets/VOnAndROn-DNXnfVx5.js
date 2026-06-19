import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,mt as d,nt as f,o as p,st as m,t as ee,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,re=a=>l(o=>{let c=s(`button`,o);u(c,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let d=s(`span`,c);i(c,d);let f=t(`rue:slot:anchor`);i(d,f),n(()=>{let e=a.title;r(()=>p(e,d,f))});let m=t(`rue:slot:anchor`);return i(c,m),n(()=>{let o=a.note?l(()=>{let o=e(),c=s(`span`,o);i(o,c),u(c,`text-xs opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.note;r(()=>p(e,c,l))}),o}):``;r(()=>p(o,c,m))}),c}),C=()=>{let{activeTab:C,methodPathCount:ie,keyword:ae,bubbleCount:oe,stopPreventCount:se,enterCount:ce,keyCodeCount:le,selfCount:ue,metaExactCount:de,lastEvent:fe,eventLog:pe,updateLastEvent:w,onMethodPath:me,onInput:he,onManualCall:ge,onBubbleParent:_e,onDirectiveStopPrevent:ve,onEnterDirective:ye,onKeyCode13Directive:be,onSelfOnly:xe,onMetaExact:Se}=_(`useSetup:0:0`,()=>o(()=>{let e=_(`ref:1:0`,()=>g(`code`)),t=_(`ref:1:1`,()=>g(0)),n=_(`ref:1:2`,()=>g(`Rue`)),r=_(`ref:1:3`,()=>g(0)),i=_(`ref:1:4`,()=>g(0)),a=_(`ref:1:5`,()=>g(0)),o=_(`ref:1:6`,()=>g(0)),s=_(`ref:1:7`,()=>g(0)),c=_(`ref:1:8`,()=>g(0)),l=_(`ref:1:9`,()=>g(`等待交互`)),u=_(`ref:1:10`,()=>g([`等待交互`])),d=e=>{l.value=e,u.value=[e,...u.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:u,updateLastEvent:d,onMethodPath:e=>{t.value+=1,d(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,d(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{d(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,d(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,d(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,d(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,d(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,d(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,d(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),p(ee(b,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`v-on / r-on`));let _=s(`div`,o);i(o,_),m(_,`role`,`tablist`),u(_,`tabs tabs-box`);let b=s(`button`,_);i(_,b),m(b,`role`,`tab`),n(()=>{u(b,`tab ${C.value===`preview`?`tab-active`:``}`)}),a(b,`click`,()=>{C.value=`preview`}),i(b,h(`效果`));let w=s(`button`,_);i(_,w),m(w,`role`,`tab`),n(()=>{u(w,`tab ${C.value===`code`?`tab-active`:``}`)}),a(w,`click`,()=>{C.value=`code`}),i(w,h(`代码`));let T=s(`div`,o);i(o,T),u(T,`mt-4 grid gap-6 items-start`);let Ce=t(`rue:slot:anchor`);i(T,Ce),n(()=>{let a=C.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`grid gap-6`);let c=s(`div`,o);i(o,c),u(c,`card bg-base-100 shadow overflow-auto`);let l=s(`div`,c);i(c,l),u(l,`card-body gap-3`);let d=s(`h2`,l);i(l,d),u(d,`card-title`),i(d,h(`Rue TSX 实际源码`));let f=t(`rue:component:anchor`);i(l,f),n(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});r(()=>p(e,l,f))});let m=s(`div`,o);i(o,m),u(m,`card bg-base-100 shadow overflow-auto`);let g=s(`div`,m);i(m,g),u(g,`card-body gap-3`);let _=s(`h2`,g);i(g,_),u(_,`card-title`),i(_,h(`原生 TSX 对照写法`));let v=t(`rue:component:anchor`);i(g,v),n(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});r(()=>p(e,g,v))});let te=s(`div`,o);i(o,te),u(te,`card bg-base-100 shadow overflow-auto`);let b=s(`div`,te);i(te,b),u(b,`card-body gap-3`);let re=s(`h2`,b);i(b,re),u(re,`card-title`),i(re,h(`修饰符速查`));let C=t(`rue:component:anchor`);return i(b,C),n(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:S});r(()=>p(e,b,C))}),a}):``;r(()=>p(a,T,Ce))}),i(T,h(` `));let E=t(`rue:slot:anchor`);return i(T,E),n(()=>{let o=C.value===`preview`?l(()=>{let o=e(),g=s(`div`,o);i(o,g),u(g,`card bg-base-100 shadow`);let _=s(`div`,g);i(g,_),u(_,`card-body grid gap-6`);let y=s(`div`,_);i(_,y),m(y,`role`,`alert`),u(y,`alert alert-info`);let b=s(`span`,y);i(y,b),i(b,h(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let x=s(`div`,_);i(_,x),m(x,`role`,`alert`),u(x,`alert alert-warning alert-soft`);let ne=s(`span`,x);i(x,ne),i(ne,h(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=s(`section`,_);i(_,S),u(S,`space-y-3`);let C=s(`div`,S);i(S,C),u(C,`flex flex-wrap items-center justify-between gap-3`);let w=s(`h2`,C);i(C,w),u(w,`text-xl font-semibold`),i(w,h(`v-on:click：method path 自动注入浏览器事件`));let T=s(`span`,C);i(C,T),u(T,`badge badge-primary badge-lg`);let Ce=f(T);i(T,Ce),n(()=>{c(Ce,ie.value)}),i(T,h(` 次`));let E=s(`div`,S);i(S,E),u(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let we=s(`button`,E);i(E,we),u(we,`btn btn-primary`),a(we,`click`,e=>me(e)),i(we,h(`v-on:click="onMethodPath"`));let Te=s(`p`,E);i(E,Te),u(Te,`text-sm opacity-70`),i(Te,h(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let D=s(`section`,_);i(_,D),u(D,`space-y-3`);let O=s(`div`,D);i(D,O),u(O,`flex flex-wrap items-center justify-between gap-3`);let Ee=s(`h2`,O);i(O,Ee),u(Ee,`text-xl font-semibold`),i(Ee,h(`v-on:click：method() / method($event)`));let De=s(`span`,O);i(O,De),u(De,`badge badge-outline badge-lg`),i(De,h(`last call`));let k=s(`div`,D);i(D,k),u(k,`grid gap-3 md:grid-cols-2`);let Oe=s(`button`,k);i(k,Oe),u(Oe,`btn btn-secondary`),a(Oe,`click`,e=>ge(`method() 不自动注入 event`)),i(Oe,h(`method()`));let ke=s(`button`,k);i(k,ke),u(ke,`btn btn-accent`),a(ke,`click`,e=>ge(`method($event) 显式注入`,e)),i(ke,h(`method($event)`));let A=s(`section`,_);i(_,A),u(A,`space-y-3`);let Ae=s(`div`,A);i(A,Ae),u(Ae,`flex flex-wrap items-center justify-between gap-3`);let je=s(`h2`,Ae);i(Ae,je),u(je,`text-xl font-semibold`),i(je,h(`r-on:input：直接复用标准输入事件`));let Me=s(`span`,Ae);i(Ae,Me),u(Me,`badge badge-outline badge-lg`),i(Me,h(`长度 `));let Ne=t(`rue:slot:anchor`);i(Me,Ne),n(()=>{let e=ae.value.length;r(()=>p(e,Me,Ne))});let Pe=s(`div`,A);i(A,Pe),u(Pe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=s(`input`,Pe);i(Pe,Fe),u(Fe,`input input-bordered w-full`),n(()=>{d(Fe,ae.value)}),a(Fe,`input`,e=>he(e));let j=s(`div`,Pe);i(Pe,j),u(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=s(`div`,j);i(j,M),u(M,`stat`);let Ie=s(`div`,M);i(M,Ie),u(Ie,`stat-title`),i(Ie,h(`当前值`));let Le=s(`div`,M);i(M,Le),u(Le,`stat-value text-2xl`);let Re=f(Le);i(Le,Re),n(()=>{c(Re,ae.value||`空`)});let N=s(`div`,j);i(j,N),u(N,`stat`);let ze=s(`div`,N);i(N,ze),u(ze,`stat-title`),i(ze,h(`大写预览`));let Be=s(`div`,N);i(N,Be),u(Be,`stat-value text-2xl`);let Ve=f(Be);i(Be,Ve),n(()=>{c(Ve,ae.value.toUpperCase()||`EMPTY`)});let P=s(`section`,_);i(_,P),u(P,`space-y-3`);let F=s(`div`,P);i(P,F),u(F,`flex flex-wrap items-center justify-between gap-3`);let He=s(`h2`,F);i(F,He),u(He,`text-xl font-semibold`),i(He,h(`v-on:click-stop-prevent`));let I=s(`div`,F);i(F,I),u(I,`flex flex-wrap gap-2`);let Ue=s(`span`,I);i(I,Ue),u(Ue,`badge badge-warning badge-lg`),i(Ue,h(`bubble `));let We=f(Ue);i(Ue,We),n(()=>{c(We,oe.value)});let Ge=s(`span`,I);i(I,Ge),u(Ge,`badge badge-success badge-lg`),i(Ge,h(`stop/prevent `));let Ke=f(Ge);i(Ge,Ke),n(()=>{c(Ke,se.value)});let L=s(`div`,P);i(P,L),u(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),a(L,`click`,e=>_e(e));let qe=s(`a`,L);i(L,qe),u(qe,`link link-primary`),m(qe,`href`,`#compiled-stop-prevent`),a(qe,`click`,v(e=>ve(e),[`stop`,`prevent`])),i(qe,h(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=s(`p`,L);i(L,Je),u(Je,`text-sm opacity-70`),i(Je,h(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=s(`section`,_);i(_,R),u(R,`space-y-3`);let z=s(`div`,R);i(R,z),u(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=s(`h2`,z);i(z,Ye),u(Ye,`text-xl font-semibold`),i(Ye,h(`v-on:keyup-enter / v-on:keyup-13`));let B=s(`div`,z);i(z,B),u(B,`flex flex-wrap gap-2`);let Xe=s(`span`,B);i(B,Xe),u(Xe,`badge badge-accent badge-lg`),i(Xe,h(`enter `));let Ze=f(Xe);i(Xe,Ze),n(()=>{c(Ze,ce.value)});let Qe=s(`span`,B);i(B,Qe),u(Qe,`badge badge-neutral badge-lg`),i(Qe,h(`13 `));let $e=f(Qe);i(Qe,$e),n(()=>{c($e,le.value)});let V=s(`div`,R);i(R,V),u(V,`grid gap-3 md:grid-cols-2`);let H=s(`label`,V);i(V,H),u(H,`floating-label`);let et=s(`input`,H);i(H,et),u(et,`input input-bordered`),m(et,`placeholder`,`按 Enter`),a(et,`keyup`,v(e=>ye(e),[`enter`]));let tt=s(`span`,H);i(H,tt),i(tt,h(`v-on:keyup-enter="onEnterDirective"`));let U=s(`label`,V);i(V,U),u(U,`floating-label`);let nt=s(`input`,U);i(U,nt),u(nt,`input input-bordered`),m(nt,`placeholder`,`按 Enter`),a(nt,`keyup`,v(e=>be(e),[`13`]));let rt=s(`span`,U);i(U,rt),i(rt,h(`v-on:keyup-13="onKeyCode13Directive"`));let W=s(`section`,_);i(_,W),u(W,`space-y-3`);let G=s(`div`,W);i(W,G),u(G,`flex flex-wrap items-center justify-between gap-3`);let it=s(`h2`,G);i(G,it),u(it,`text-xl font-semibold`),i(it,h(`v-on:click-self / v-on:click-meta-exact`));let K=s(`div`,G);i(G,K),u(K,`flex flex-wrap gap-2`);let at=s(`span`,K);i(K,at),u(at,`badge badge-info badge-lg`),i(at,h(`self `));let ot=f(at);i(at,ot),n(()=>{c(ot,ue.value)});let st=s(`span`,K);i(K,st),u(st,`badge badge-info badge-lg`),i(st,h(`meta.exact `));let ct=f(st);i(st,ct),n(()=>{c(ct,de.value)});let q=s(`div`,W);i(W,q),u(q,`grid gap-4 md:grid-cols-2`);let J=s(`div`,q);i(q,J),u(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),a(J,`click`,v(e=>xe(e),[`self`]));let lt=s(`p`,J);i(J,lt),u(lt,`font-medium`),i(lt,h(`v-on:click-self="onSelfOnly"`));let ut=s(`p`,J);i(J,ut),u(ut,`text-sm opacity-70`),i(ut,h(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=s(`button`,J);i(J,dt),u(dt,`btn btn-ghost btn-sm`),i(dt,h(`子元素按钮`));let ft=s(`button`,q);i(q,ft),u(ft,`btn btn-info`),a(ft,`click`,v(e=>Se(e),[`meta`,`exact`])),i(ft,h(`v-on:click-meta-exact：按住 Command 点击`));let Y=s(`section`,_);i(_,Y),u(Y,`space-y-3`);let X=s(`div`,Y);i(Y,X),u(X,`flex flex-wrap items-center justify-between gap-3`);let pt=s(`h2`,X);i(X,pt),u(pt,`text-xl font-semibold`),i(pt,h(`v-on:click-native-once`));let mt=s(`span`,X);i(X,mt),u(mt,`badge badge-secondary badge-lg`),i(mt,h(`code path`));let Z=s(`div`,Y);i(Y,Z),u(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=s(`div`,Z);i(Z,Q),u(Q,`mockup-code text-sm`);let ht=s(`pre`,Q);i(Q,ht),m(ht,`data-prefix`,`1`);let gt=s(`code`,ht);i(ht,gt);let _t=f(gt);i(gt,_t),c(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=s(`pre`,Q);i(Q,vt),m(vt,`data-prefix`,`2`);let yt=s(`code`,vt);i(vt,yt);let bt=f(yt);i(yt,bt),c(bt,`// 编译后保留 native + once 的事件配置`);let xt=s(`pre`,Q);i(Q,xt),m(xt,`data-prefix`,`3`);let St=s(`code`,xt);i(xt,St);let Ct=f(St);i(St,Ct),c(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=s(`div`,Z);i(Z,wt),u(wt,`grid gap-3`);let Tt=t(`rue:component:anchor`);i(wt,Tt),p(ee(re,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=s(`p`,wt);i(wt,Et),u(Et,`text-sm opacity-70`),i(Et,h(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=s(`section`,_);i(_,Dt),u(Dt,`space-y-3`);let Ot=s(`h2`,Dt);i(Dt,Ot),u(Ot,`text-xl font-semibold`),i(Ot,h(`修饰符速查`));let $=s(`div`,Dt);i(Dt,$),u($,`flex flex-wrap gap-2`);let kt=s(`span`,$);i($,kt),u(kt,`badge badge-primary badge-lg`),i(kt,h(`v-on:click-stop`));let At=s(`span`,$);i($,At),u(At,`badge badge-primary badge-lg`),i(At,h(`v-on:click-prevent`));let jt=s(`span`,$);i($,jt),u(jt,`badge badge-primary badge-lg`),i(jt,h(`v-on:click-self`));let Mt=s(`span`,$);i($,Mt),u(Mt,`badge badge-primary badge-lg`),i(Mt,h(`v-on:click-once`));let Nt=s(`span`,$);i($,Nt),u(Nt,`badge badge-primary badge-lg`),i(Nt,h(`v-on:click-capture`));let Pt=s(`span`,$);i($,Pt),u(Pt,`badge badge-primary badge-lg`),i(Pt,h(`v-on:wheel-passive`));let Ft=s(`span`,$);i($,Ft),u(Ft,`badge badge-primary badge-lg`),i(Ft,h(`v-on:click-ctrl`));let It=s(`span`,$);i($,It),u(It,`badge badge-primary badge-lg`),i(It,h(`v-on:click-shift`));let Lt=s(`span`,$);i($,Lt),u(Lt,`badge badge-primary badge-lg`),i(Lt,h(`v-on:click-alt`));let Rt=s(`span`,$);i($,Rt),u(Rt,`badge badge-primary badge-lg`),i(Rt,h(`v-on:click-meta`));let zt=s(`span`,$);i($,zt),u(zt,`badge badge-primary badge-lg`),i(zt,h(`v-on:click-meta-exact`));let Bt=s(`span`,$);i($,Bt),u(Bt,`badge badge-primary badge-lg`),i(Bt,h(`v-on:click-middle`));let Vt=s(`span`,$);i($,Vt),u(Vt,`badge badge-primary badge-lg`),i(Vt,h(`v-on:keyup-enter`));let Ht=s(`span`,$);i($,Ht),u(Ht,`badge badge-primary badge-lg`),i(Ht,h(`v-on:keyup-tab`));let Ut=s(`span`,$);i($,Ut),u(Ut,`badge badge-primary badge-lg`),i(Ut,h(`v-on:keyup-delete`));let Wt=s(`span`,$);i($,Wt),u(Wt,`badge badge-primary badge-lg`),i(Wt,h(`v-on:keyup-esc`));let Gt=s(`span`,$);i($,Gt),u(Gt,`badge badge-primary badge-lg`),i(Gt,h(`v-on:keyup-space`));let Kt=s(`span`,$);i($,Kt),u(Kt,`badge badge-primary badge-lg`),i(Kt,h(`v-on:keyup-up`));let qt=s(`span`,$);i($,qt),u(qt,`badge badge-primary badge-lg`),i(qt,h(`v-on:keyup-down`));let Jt=s(`span`,$);i($,Jt),u(Jt,`badge badge-primary badge-lg`),i(Jt,h(`v-on:keyup-left`));let Yt=s(`span`,$);i($,Yt),u(Yt,`badge badge-primary badge-lg`),i(Yt,h(`v-on:keyup-right`));let Xt=s(`span`,$);i($,Xt),u(Xt,`badge badge-primary badge-lg`),i(Xt,h(`v-on:keyup-13`));let Zt=s(`span`,$);i($,Zt),u(Zt,`badge badge-primary badge-lg`),i(Zt,h(`v-on:click-native-once`));let Qt=s(`section`,_);i(_,Qt),u(Qt,`space-y-3`);let $t=s(`h2`,Qt);i(Qt,$t),u($t,`text-xl font-semibold`),i($t,h(`最近一次事件`));let en=s(`div`,Qt);i(Qt,en),u(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=f(en);i(en,tn),n(()=>{c(tn,fe.value)});let nn=s(`section`,_);i(_,nn),u(nn,`space-y-3`);let rn=s(`h2`,nn);i(nn,rn),u(rn,`text-xl font-semibold`),i(rn,h(`事件日志`));let an=s(`div`,nn);i(nn,an),u(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=s(`ul`,an);i(an,on),u(on,`list gap-2 font-mono text-sm`);let sn=t(`rue:list:start`),cn=t(`rue:list:end`);i(on,sn),i(on,cn);let ln=new Map;return n(()=>{ln=te({items:pe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(t,r,a,o,d)=>{p(l(()=>{let r=e(),a=s(`li`,r);i(r,a),n(()=>{m(a,`key`,String(`${t}-${d}`))}),u(a,`list-row px-0 py-1`);let o=f(a);return i(a,o),n(()=>{c(o,t)}),r}),r,a)}})}),o}):``;r(()=>p(o,T,E))}),o})}),g,_),g})};export{C as default};