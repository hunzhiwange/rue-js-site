import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g,yt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v,i as y,n as ee}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as b}from"./Code-C5NjdoiC.js";import{r as x}from"./SidebarPlaygroundExample-DpItFif-.js";var S=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,te=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,C=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,ne=n=>c(r=>{let i=p(`button`,r);f(i,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let a=p(`span`,i);e(i,a);let o=g(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.title;h(()=>u(e,a,o))});let s=g(`rue:slot:anchor`);return e(i,s),t(()=>{let r=n.note?c(()=>{let r=l(),i=p(`span`,r);e(r,i),f(i,`text-xs opacity-70`);let a=g(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.note;h(()=>u(e,i,a))}),r}):``;h(()=>u(r,i,s))}),i}),w=()=>{let{activeTab:w,methodPathCount:re,keyword:ie,bubbleCount:ae,stopPreventCount:oe,enterCount:se,keyCodeCount:ce,selfCount:le,metaExactCount:ue,lastEvent:de,eventLog:fe,updateLastEvent:T,onMethodPath:pe,onInput:me,onManualCall:he,onBubbleParent:ge,onDirectiveStopPrevent:_e,onEnterDirective:ve,onKeyCode13Directive:ye,onSelfOnly:be,onMetaExact:xe}=v(`useSetup:0:0`,()=>d(()=>{let e=v(`ref:1:0`,()=>n(`code`)),t=v(`ref:1:1`,()=>n(0)),r=v(`ref:1:2`,()=>n(`Rue`)),i=v(`ref:1:3`,()=>n(0)),a=v(`ref:1:4`,()=>n(0)),o=v(`ref:1:5`,()=>n(0)),s=v(`ref:1:6`,()=>n(0)),c=v(`ref:1:7`,()=>n(0)),l=v(`ref:1:8`,()=>n(0)),u=v(`ref:1:9`,()=>n(`等待交互`)),d=v(`ref:1:10`,()=>n([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:r,bubbleCount:i,stopPreventCount:a,enterCount:o,keyCodeCount:s,selfCount:c,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{r.value=e.target.value,f(`r-on:input -> `+(r.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{i.value+=1,f(`父级收到冒泡 -> 第 `+i.value+` 次`)},onDirectiveStopPrevent:e=>{a.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+a.value+` 次`)},onEnterDirective:e=>{o.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+o.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;s.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+s.value)},onSelfOnly:e=>{c.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+c.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return c(n=>{let d=l(),v=g(`rue:component:anchor`);return e(d,v),u(m(x,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`v-on / r-on`));let v=p(`div`,n);e(n,v),o(v,`role`,`tablist`),f(v,`tabs tabs-box`);let x=p(`button`,v);e(v,x),o(x,`role`,`tab`),t(()=>{f(x,`tab ${w.value===`preview`?`tab-active`:``}`)}),r(x,`click`,()=>{w.value=`preview`}),e(x,s(`效果`));let T=p(`button`,v);e(v,T),o(T,`role`,`tab`),t(()=>{f(T,`tab ${w.value===`code`?`tab-active`:``}`)}),r(T,`click`,()=>{w.value=`code`}),e(T,s(`代码`));let E=p(`div`,n);e(n,E),f(E,`mt-4 grid gap-6 items-start`);let Se=g(`rue:slot:anchor`);e(E,Se),t(()=>{let n=w.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`grid gap-6`);let i=p(`div`,r);e(r,i),f(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);e(i,a),f(a,`card-body gap-3`);let o=p(`h2`,a);e(a,o),f(o,`card-title`),e(o,s(`Rue TSX 实际源码`));let c=g(`rue:component:anchor`);e(a,c),t(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:S});h(()=>u(e,a,c))});let d=p(`div`,r);e(r,d),f(d,`card bg-base-100 shadow overflow-auto`);let _=p(`div`,d);e(d,_),f(_,`card-body gap-3`);let v=p(`h2`,_);e(_,v),f(v,`card-title`),e(v,s(`原生 TSX 对照写法`));let y=g(`rue:component:anchor`);e(_,y),t(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:te});h(()=>u(e,_,y))});let ee=p(`div`,r);e(r,ee),f(ee,`card bg-base-100 shadow overflow-auto`);let x=p(`div`,ee);e(ee,x),f(x,`card-body gap-3`);let ne=p(`h2`,x);e(x,ne),f(ne,`card-title`),e(ne,s(`修饰符速查`));let w=g(`rue:component:anchor`);return e(x,w),t(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:C});h(()=>u(e,x,w))}),n}):``;h(()=>u(n,E,Se))}),e(E,s(` `));let D=g(`rue:slot:anchor`);return e(E,D),t(()=>{let n=w.value===`preview`?c(()=>{let n=l(),d=p(`div`,n);e(n,d),f(d,`card bg-base-100 shadow`);let v=p(`div`,d);e(d,v),f(v,`card-body grid gap-6`);let b=p(`div`,v);e(v,b),o(b,`role`,`alert`),f(b,`alert alert-info`);let x=p(`span`,b);e(b,x),e(x,s(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let S=p(`div`,v);e(v,S),o(S,`role`,`alert`),f(S,`alert alert-warning alert-soft`);let te=p(`span`,S);e(S,te),e(te,s(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let C=p(`section`,v);e(v,C),f(C,`space-y-3`);let w=p(`div`,C);e(C,w),f(w,`flex flex-wrap items-center justify-between gap-3`);let T=p(`h2`,w);e(w,T),f(T,`text-xl font-semibold`),e(T,s(`v-on:click：method path 自动注入浏览器事件`));let E=p(`span`,w);e(w,E),f(E,`badge badge-primary badge-lg`);let Se=i(E);e(E,Se),t(()=>{a(Se,re.value)}),e(E,s(` 次`));let D=p(`div`,C);e(C,D),f(D,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Ce=p(`button`,D);e(D,Ce),f(Ce,`btn btn-primary`),r(Ce,`click`,e=>pe(e)),e(Ce,s(`v-on:click="onMethodPath"`));let we=p(`p`,D);e(D,we),f(we,`text-sm opacity-70`),e(we,s(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let O=p(`section`,v);e(v,O),f(O,`space-y-3`);let k=p(`div`,O);e(O,k),f(k,`flex flex-wrap items-center justify-between gap-3`);let Te=p(`h2`,k);e(k,Te),f(Te,`text-xl font-semibold`),e(Te,s(`v-on:click：method() / method($event)`));let Ee=p(`span`,k);e(k,Ee),f(Ee,`badge badge-outline badge-lg`),e(Ee,s(`last call`));let De=p(`div`,O);e(O,De),f(De,`grid gap-3 md:grid-cols-2`);let Oe=p(`button`,De);e(De,Oe),f(Oe,`btn btn-secondary`),r(Oe,`click`,e=>he(`method() 不自动注入 event`)),e(Oe,s(`method()`));let ke=p(`button`,De);e(De,ke),f(ke,`btn btn-accent`),r(ke,`click`,e=>he(`method($event) 显式注入`,e)),e(ke,s(`method($event)`));let Ae=p(`section`,v);e(v,Ae),f(Ae,`space-y-3`);let je=p(`div`,Ae);e(Ae,je),f(je,`flex flex-wrap items-center justify-between gap-3`);let Me=p(`h2`,je);e(je,Me),f(Me,`text-xl font-semibold`),e(Me,s(`r-on:input：直接复用标准输入事件`));let Ne=p(`span`,je);e(je,Ne),f(Ne,`badge badge-outline badge-lg`),e(Ne,s(`长度 `));let Pe=g(`rue:slot:anchor`);e(Ne,Pe),t(()=>{let e=ie.value.length;h(()=>u(e,Ne,Pe))});let A=p(`div`,Ae);e(Ae,A),f(A,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=p(`input`,A);e(A,Fe),f(Fe,`input input-bordered w-full`),t(()=>{_(Fe,ie.value)}),r(Fe,`input`,e=>me(e));let j=p(`div`,A);e(A,j),f(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=p(`div`,j);e(j,M),f(M,`stat`);let Ie=p(`div`,M);e(M,Ie),f(Ie,`stat-title`),e(Ie,s(`当前值`));let Le=p(`div`,M);e(M,Le),f(Le,`stat-value text-2xl`);let Re=i(Le);e(Le,Re),t(()=>{a(Re,ie.value||`空`)});let N=p(`div`,j);e(j,N),f(N,`stat`);let ze=p(`div`,N);e(N,ze),f(ze,`stat-title`),e(ze,s(`大写预览`));let Be=p(`div`,N);e(N,Be),f(Be,`stat-value text-2xl`);let Ve=i(Be);e(Be,Ve),t(()=>{a(Ve,ie.value.toUpperCase()||`EMPTY`)});let P=p(`section`,v);e(v,P),f(P,`space-y-3`);let F=p(`div`,P);e(P,F),f(F,`flex flex-wrap items-center justify-between gap-3`);let He=p(`h2`,F);e(F,He),f(He,`text-xl font-semibold`),e(He,s(`v-on:click-stop-prevent`));let I=p(`div`,F);e(F,I),f(I,`flex flex-wrap gap-2`);let Ue=p(`span`,I);e(I,Ue),f(Ue,`badge badge-warning badge-lg`),e(Ue,s(`bubble `));let We=i(Ue);e(Ue,We),t(()=>{a(We,ae.value)});let Ge=p(`span`,I);e(I,Ge),f(Ge,`badge badge-success badge-lg`),e(Ge,s(`stop/prevent `));let Ke=i(Ge);e(Ge,Ke),t(()=>{a(Ke,oe.value)});let L=p(`div`,P);e(P,L),f(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),r(L,`click`,e=>ge(e));let qe=p(`a`,L);e(L,qe),f(qe,`link link-primary`),o(qe,`href`,`#compiled-stop-prevent`),r(qe,`click`,y(e=>_e(e),[`stop`,`prevent`])),e(qe,s(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=p(`p`,L);e(L,Je),f(Je,`text-sm opacity-70`),e(Je,s(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=p(`section`,v);e(v,R),f(R,`space-y-3`);let z=p(`div`,R);e(R,z),f(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=p(`h2`,z);e(z,Ye),f(Ye,`text-xl font-semibold`),e(Ye,s(`v-on:keyup-enter / v-on:keyup-13`));let B=p(`div`,z);e(z,B),f(B,`flex flex-wrap gap-2`);let Xe=p(`span`,B);e(B,Xe),f(Xe,`badge badge-accent badge-lg`),e(Xe,s(`enter `));let Ze=i(Xe);e(Xe,Ze),t(()=>{a(Ze,se.value)});let Qe=p(`span`,B);e(B,Qe),f(Qe,`badge badge-neutral badge-lg`),e(Qe,s(`13 `));let $e=i(Qe);e(Qe,$e),t(()=>{a($e,ce.value)});let V=p(`div`,R);e(R,V),f(V,`grid gap-3 md:grid-cols-2`);let H=p(`label`,V);e(V,H),f(H,`floating-label`);let et=p(`input`,H);e(H,et),f(et,`input input-bordered`),o(et,`placeholder`,`按 Enter`),r(et,`keyup`,y(e=>ve(e),[`enter`]));let tt=p(`span`,H);e(H,tt),e(tt,s(`v-on:keyup-enter="onEnterDirective"`));let U=p(`label`,V);e(V,U),f(U,`floating-label`);let nt=p(`input`,U);e(U,nt),f(nt,`input input-bordered`),o(nt,`placeholder`,`按 Enter`),r(nt,`keyup`,y(e=>ye(e),[`13`]));let rt=p(`span`,U);e(U,rt),e(rt,s(`v-on:keyup-13="onKeyCode13Directive"`));let W=p(`section`,v);e(v,W),f(W,`space-y-3`);let G=p(`div`,W);e(W,G),f(G,`flex flex-wrap items-center justify-between gap-3`);let it=p(`h2`,G);e(G,it),f(it,`text-xl font-semibold`),e(it,s(`v-on:click-self / v-on:click-meta-exact`));let K=p(`div`,G);e(G,K),f(K,`flex flex-wrap gap-2`);let at=p(`span`,K);e(K,at),f(at,`badge badge-info badge-lg`),e(at,s(`self `));let ot=i(at);e(at,ot),t(()=>{a(ot,le.value)});let st=p(`span`,K);e(K,st),f(st,`badge badge-info badge-lg`),e(st,s(`meta.exact `));let ct=i(st);e(st,ct),t(()=>{a(ct,ue.value)});let q=p(`div`,W);e(W,q),f(q,`grid gap-4 md:grid-cols-2`);let J=p(`div`,q);e(q,J),f(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),r(J,`click`,y(e=>be(e),[`self`]));let lt=p(`p`,J);e(J,lt),f(lt,`font-medium`),e(lt,s(`v-on:click-self="onSelfOnly"`));let ut=p(`p`,J);e(J,ut),f(ut,`text-sm opacity-70`),e(ut,s(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=p(`button`,J);e(J,dt),f(dt,`btn btn-ghost btn-sm`),e(dt,s(`子元素按钮`));let ft=p(`button`,q);e(q,ft),f(ft,`btn btn-info`),r(ft,`click`,y(e=>xe(e),[`meta`,`exact`])),e(ft,s(`v-on:click-meta-exact：按住 Command 点击`));let Y=p(`section`,v);e(v,Y),f(Y,`space-y-3`);let X=p(`div`,Y);e(Y,X),f(X,`flex flex-wrap items-center justify-between gap-3`);let pt=p(`h2`,X);e(X,pt),f(pt,`text-xl font-semibold`),e(pt,s(`v-on:click-native-once`));let mt=p(`span`,X);e(X,mt),f(mt,`badge badge-secondary badge-lg`),e(mt,s(`code path`));let Z=p(`div`,Y);e(Y,Z),f(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=p(`div`,Z);e(Z,Q),f(Q,`mockup-code text-sm`);let ht=p(`pre`,Q);e(Q,ht),o(ht,`data-prefix`,`1`);let gt=p(`code`,ht);e(ht,gt);let _t=i(gt);e(gt,_t),a(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=p(`pre`,Q);e(Q,vt),o(vt,`data-prefix`,`2`);let yt=p(`code`,vt);e(vt,yt);let bt=i(yt);e(yt,bt),a(bt,`// 编译后保留 native + once 的事件配置`);let xt=p(`pre`,Q);e(Q,xt),o(xt,`data-prefix`,`3`);let St=p(`code`,xt);e(xt,St);let Ct=i(St);e(St,Ct),a(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=p(`div`,Z);e(Z,wt),f(wt,`grid gap-3`);let Tt=g(`rue:component:anchor`);e(wt,Tt),u(m(ne,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=p(`p`,wt);e(wt,Et),f(Et,`text-sm opacity-70`),e(Et,s(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=p(`section`,v);e(v,Dt),f(Dt,`space-y-3`);let Ot=p(`h2`,Dt);e(Dt,Ot),f(Ot,`text-xl font-semibold`),e(Ot,s(`修饰符速查`));let $=p(`div`,Dt);e(Dt,$),f($,`flex flex-wrap gap-2`);let kt=p(`span`,$);e($,kt),f(kt,`badge badge-primary badge-lg`),e(kt,s(`v-on:click-stop`));let At=p(`span`,$);e($,At),f(At,`badge badge-primary badge-lg`),e(At,s(`v-on:click-prevent`));let jt=p(`span`,$);e($,jt),f(jt,`badge badge-primary badge-lg`),e(jt,s(`v-on:click-self`));let Mt=p(`span`,$);e($,Mt),f(Mt,`badge badge-primary badge-lg`),e(Mt,s(`v-on:click-once`));let Nt=p(`span`,$);e($,Nt),f(Nt,`badge badge-primary badge-lg`),e(Nt,s(`v-on:click-capture`));let Pt=p(`span`,$);e($,Pt),f(Pt,`badge badge-primary badge-lg`),e(Pt,s(`v-on:wheel-passive`));let Ft=p(`span`,$);e($,Ft),f(Ft,`badge badge-primary badge-lg`),e(Ft,s(`v-on:click-ctrl`));let It=p(`span`,$);e($,It),f(It,`badge badge-primary badge-lg`),e(It,s(`v-on:click-shift`));let Lt=p(`span`,$);e($,Lt),f(Lt,`badge badge-primary badge-lg`),e(Lt,s(`v-on:click-alt`));let Rt=p(`span`,$);e($,Rt),f(Rt,`badge badge-primary badge-lg`),e(Rt,s(`v-on:click-meta`));let zt=p(`span`,$);e($,zt),f(zt,`badge badge-primary badge-lg`),e(zt,s(`v-on:click-meta-exact`));let Bt=p(`span`,$);e($,Bt),f(Bt,`badge badge-primary badge-lg`),e(Bt,s(`v-on:click-middle`));let Vt=p(`span`,$);e($,Vt),f(Vt,`badge badge-primary badge-lg`),e(Vt,s(`v-on:keyup-enter`));let Ht=p(`span`,$);e($,Ht),f(Ht,`badge badge-primary badge-lg`),e(Ht,s(`v-on:keyup-tab`));let Ut=p(`span`,$);e($,Ut),f(Ut,`badge badge-primary badge-lg`),e(Ut,s(`v-on:keyup-delete`));let Wt=p(`span`,$);e($,Wt),f(Wt,`badge badge-primary badge-lg`),e(Wt,s(`v-on:keyup-esc`));let Gt=p(`span`,$);e($,Gt),f(Gt,`badge badge-primary badge-lg`),e(Gt,s(`v-on:keyup-space`));let Kt=p(`span`,$);e($,Kt),f(Kt,`badge badge-primary badge-lg`),e(Kt,s(`v-on:keyup-up`));let qt=p(`span`,$);e($,qt),f(qt,`badge badge-primary badge-lg`),e(qt,s(`v-on:keyup-down`));let Jt=p(`span`,$);e($,Jt),f(Jt,`badge badge-primary badge-lg`),e(Jt,s(`v-on:keyup-left`));let Yt=p(`span`,$);e($,Yt),f(Yt,`badge badge-primary badge-lg`),e(Yt,s(`v-on:keyup-right`));let Xt=p(`span`,$);e($,Xt),f(Xt,`badge badge-primary badge-lg`),e(Xt,s(`v-on:keyup-13`));let Zt=p(`span`,$);e($,Zt),f(Zt,`badge badge-primary badge-lg`),e(Zt,s(`v-on:click-native-once`));let Qt=p(`section`,v);e(v,Qt),f(Qt,`space-y-3`);let $t=p(`h2`,Qt);e(Qt,$t),f($t,`text-xl font-semibold`),e($t,s(`最近一次事件`));let en=p(`div`,Qt);e(Qt,en),f(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=i(en);e(en,tn),t(()=>{a(tn,de.value)});let nn=p(`section`,v);e(v,nn),f(nn,`space-y-3`);let rn=p(`h2`,nn);e(nn,rn),f(rn,`text-xl font-semibold`),e(rn,s(`事件日志`));let an=p(`div`,nn);e(nn,an),f(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=p(`ul`,an);e(an,on),f(on,`list gap-2 font-mono text-sm`);let sn=g(`rue:list:start`),cn=g(`rue:list:end`);e(on,sn),e(on,cn);let ln=new Map;return t(()=>{ln=ee({items:fe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(n,r,s,d,m)=>{u(c(()=>{let r=l(),s=p(`li`,r);e(r,s),t(()=>{o(s,`key`,String(`${n}-${m}`))}),f(s,`list-row px-0 py-1`);let c=i(s);return e(s,c),t(()=>{a(c,n)}),r}),r,s)}})}),n}):``;h(()=>u(n,E,D))}),n})}),d,v),d})};export{w as default};