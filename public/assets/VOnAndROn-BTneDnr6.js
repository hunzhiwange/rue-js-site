import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,it as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v,i as y,n as ee}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as b}from"./Code-BCLFq1E3.js";import{t as x}from"./SidebarPlaygroundExample-CdMvdgT7.js";var S=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,C=`// Rue TSX 可直接写入的修饰符写法
<button v-on:click-stop="onStop" />
<button v-on:click-prevent="onPrevent" />
<div v-on:click-self="onSelf" />
<button v-on:click-once="onOnce" />
<div v-on:click-capture="onCapture" />
<div v-on:wheel-passive="onPassiveWheel" />
<button v-on:click-ctrl="onCtrl" />
<button v-on:click-shift="onShift" />
<button v-on:click-alt="onAlt" />
<button v-on:click-meta="onMeta" />
<button v-on:click-meta-exact="onMetaExact" />
<button v-on:click-middle="onMiddle" />
<input v-on:keyup-enter="onEnter" />
<input v-on:keyup-tab="onTab" />
<input v-on:keyup-delete="onDelete" />
<input v-on:keyup-esc="onEsc" />
<input v-on:keyup-space="onSpace" />
<input v-on:keyup-up="onArrowUp" />
<input v-on:keyup-down="onArrowDown" />
<input v-on:keyup-left="onArrowLeft" />
<input v-on:keyup-right="onArrowRight" />
<input v-on:keyup-13="onKeyCode13" />
<NativeCard v-on:click-native-once="onNativeRootClick" />

// 原生 TSX 常见手写等价模式
onClick={event => { event.stopPropagation(); onStop(event); }}
onClick={event => { event.preventDefault(); onPrevent(event); }}
onClick={event => { if (event.target !== event.currentTarget) return; onSelf(event); }}
onClick={event => { if (!event.metaKey) return; if (event.ctrlKey || event.altKey || event.shiftKey) return; onMetaExact(event); }}
onClick={event => { if (event.button !== 1) return; onMiddle(event); }}
onKeyUp={event => { if (event.key !== 'Enter') return; onEnter(event); }}
onKeyUp={event => { if ((event.keyCode ?? event.which) !== 13) return; onKeyCode13(event); }}

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,ne=r=>f(a=>{let c=s(`button`,a);e(c,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let l=s(`span`,c);t(c,l);let u=i(`rue:slot:anchor`);t(l,u),n(()=>{let e=r.title;g(()=>p(e,l,u))});let d=i(`rue:slot:anchor`);return t(c,d),n(()=>{let a=r.note?f(()=>{let a=o(),c=s(`span`,a);t(a,c),e(c,`text-xs opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=r.note;g(()=>p(e,c,l))}),a}):``;g(()=>p(a,c,d))}),c}),w=()=>{let{activeTab:w,methodPathCount:re,keyword:ie,bubbleCount:ae,stopPreventCount:oe,enterCount:se,keyCodeCount:ce,selfCount:le,metaExactCount:ue,lastEvent:de,eventLog:fe,updateLastEvent:T,onMethodPath:pe,onInput:me,onManualCall:he,onBubbleParent:ge,onDirectiveStopPrevent:_e,onEnterDirective:ve,onKeyCode13Directive:ye,onSelfOnly:be,onMetaExact:xe}=v(`useSetup:0:0`,()=>h(()=>{let e=v(`ref:1:0`,()=>u(`code`)),t=v(`ref:1:1`,()=>u(0)),n=v(`ref:1:2`,()=>u(`Rue`)),r=v(`ref:1:3`,()=>u(0)),i=v(`ref:1:4`,()=>u(0)),a=v(`ref:1:5`,()=>u(0)),o=v(`ref:1:6`,()=>u(0)),s=v(`ref:1:7`,()=>u(0)),c=v(`ref:1:8`,()=>u(0)),l=v(`ref:1:9`,()=>u(`等待交互`)),d=v(`ref:1:10`,()=>u([`等待交互`])),f=e=>{l.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,f(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,f(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return f(u=>{let h=o(),v=i(`rue:component:anchor`);return t(h,v),p(m(x,{children:f(()=>{let u=o(),h=s(`h1`,u);t(u,h),e(h,`text-5xl font-semibold mb-4 md:mb-4`),t(h,r(`v-on / r-on`));let v=s(`div`,u);t(u,v),c(v,`role`,`tablist`),e(v,`tabs tabs-box`);let x=s(`button`,v);t(v,x),c(x,`role`,`tab`),n(()=>{e(x,String(`tab ${w.value===`preview`?`tab-active`:``}`))}),_(x,`click`,()=>{w.value=`preview`}),t(x,r(`效果`));let T=s(`button`,v);t(v,T),c(T,`role`,`tab`),n(()=>{e(T,String(`tab ${w.value===`code`?`tab-active`:``}`))}),_(T,`click`,()=>{w.value=`code`}),t(T,r(`代码`));let E=s(`div`,u);t(u,E),e(E,`mt-4 grid gap-6 items-start`);let Se=i(`rue:slot:anchor`);t(E,Se),n(()=>{let a=w.value===`code`?f(()=>{let a=o(),c=s(`div`,a);t(a,c),e(c,`grid gap-6`);let l=s(`div`,c);t(c,l),e(l,`card bg-base-100 shadow overflow-auto`);let u=s(`div`,l);t(l,u),e(u,`card-body gap-3`);let d=s(`h2`,u);t(u,d),e(d,`card-title`),t(d,r(`Rue TSX 实际源码`));let f=i(`rue:component:anchor`);t(u,f),n(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:S});g(()=>p(e,u,f))});let h=s(`div`,c);t(c,h),e(h,`card bg-base-100 shadow overflow-auto`);let _=s(`div`,h);t(h,_),e(_,`card-body gap-3`);let v=s(`h2`,_);t(_,v),e(v,`card-title`),t(v,r(`原生 TSX 对照写法`));let y=i(`rue:component:anchor`);t(_,y),n(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:te});g(()=>p(e,_,y))});let ee=s(`div`,c);t(c,ee),e(ee,`card bg-base-100 shadow overflow-auto`);let x=s(`div`,ee);t(ee,x),e(x,`card-body gap-3`);let ne=s(`h2`,x);t(x,ne),e(ne,`card-title`),t(ne,r(`修饰符速查`));let w=i(`rue:component:anchor`);return t(x,w),n(()=>{let e=m(b,{className:`h-full`,lang:`tsx`,code:C});g(()=>p(e,x,w))}),a}):``;g(()=>p(a,E,Se))}),t(E,r(` `));let D=i(`rue:slot:anchor`);return t(E,D),n(()=>{let u=w.value===`preview`?f(()=>{let u=o(),h=s(`div`,u);t(u,h),e(h,`card bg-base-100 shadow`);let v=s(`div`,h);t(h,v),e(v,`card-body grid gap-6`);let b=s(`div`,v);t(v,b),c(b,`role`,`alert`),e(b,`alert alert-info`);let x=s(`span`,b);t(b,x),t(x,r(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let S=s(`div`,v);t(v,S),c(S,`role`,`alert`),e(S,`alert alert-warning alert-soft`);let te=s(`span`,S);t(S,te),t(te,r(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let C=s(`section`,v);t(v,C),e(C,`space-y-3`);let w=s(`div`,C);t(C,w),e(w,`flex flex-wrap items-center justify-between gap-3`);let T=s(`h2`,w);t(w,T),e(T,`text-xl font-semibold`),t(T,r(`v-on:click：method path 自动注入浏览器事件`));let E=s(`span`,w);t(w,E),e(E,`badge badge-primary badge-lg`);let Se=a(E);t(E,Se),n(()=>{l(Se,re.value)}),t(E,r(` 次`));let D=s(`div`,C);t(C,D),e(D,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Ce=s(`button`,D);t(D,Ce),e(Ce,`btn btn-primary`),_(Ce,`click`,e=>pe(e)),t(Ce,r(`v-on:click="onMethodPath"`));let we=s(`p`,D);t(D,we),e(we,`text-sm opacity-70`),t(we,r(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let O=s(`section`,v);t(v,O),e(O,`space-y-3`);let k=s(`div`,O);t(O,k),e(k,`flex flex-wrap items-center justify-between gap-3`);let Te=s(`h2`,k);t(k,Te),e(Te,`text-xl font-semibold`),t(Te,r(`v-on:click：method() / method($event)`));let Ee=s(`span`,k);t(k,Ee),e(Ee,`badge badge-outline badge-lg`),t(Ee,r(`last call`));let De=s(`div`,O);t(O,De),e(De,`grid gap-3 md:grid-cols-2`);let Oe=s(`button`,De);t(De,Oe),e(Oe,`btn btn-secondary`),_(Oe,`click`,e=>he(`method() 不自动注入 event`)),t(Oe,r(`method()`));let ke=s(`button`,De);t(De,ke),e(ke,`btn btn-accent`),_(ke,`click`,e=>he(`method($event) 显式注入`,e)),t(ke,r(`method($event)`));let Ae=s(`section`,v);t(v,Ae),e(Ae,`space-y-3`);let je=s(`div`,Ae);t(Ae,je),e(je,`flex flex-wrap items-center justify-between gap-3`);let Me=s(`h2`,je);t(je,Me),e(Me,`text-xl font-semibold`),t(Me,r(`r-on:input：直接复用标准输入事件`));let Ne=s(`span`,je);t(je,Ne),e(Ne,`badge badge-outline badge-lg`),t(Ne,r(`长度 `));let Pe=i(`rue:slot:anchor`);t(Ne,Pe),n(()=>{let e=ie.value.length;g(()=>p(e,Ne,Pe))});let A=s(`div`,Ae);t(Ae,A),e(A,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=s(`input`,A);t(A,Fe),e(Fe,`input input-bordered w-full`),n(()=>{d(Fe,ie.value)}),_(Fe,`input`,e=>me(e));let j=s(`div`,A);t(A,j),e(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=s(`div`,j);t(j,M),e(M,`stat`);let Ie=s(`div`,M);t(M,Ie),e(Ie,`stat-title`),t(Ie,r(`当前值`));let Le=s(`div`,M);t(M,Le),e(Le,`stat-value text-2xl`);let Re=a(Le);t(Le,Re),n(()=>{l(Re,ie.value||`空`)});let N=s(`div`,j);t(j,N),e(N,`stat`);let ze=s(`div`,N);t(N,ze),e(ze,`stat-title`),t(ze,r(`大写预览`));let Be=s(`div`,N);t(N,Be),e(Be,`stat-value text-2xl`);let Ve=a(Be);t(Be,Ve),n(()=>{l(Ve,ie.value.toUpperCase()||`EMPTY`)});let P=s(`section`,v);t(v,P),e(P,`space-y-3`);let F=s(`div`,P);t(P,F),e(F,`flex flex-wrap items-center justify-between gap-3`);let He=s(`h2`,F);t(F,He),e(He,`text-xl font-semibold`),t(He,r(`v-on:click-stop-prevent`));let I=s(`div`,F);t(F,I),e(I,`flex flex-wrap gap-2`);let Ue=s(`span`,I);t(I,Ue),e(Ue,`badge badge-warning badge-lg`),t(Ue,r(`bubble `));let We=a(Ue);t(Ue,We),n(()=>{l(We,ae.value)});let Ge=s(`span`,I);t(I,Ge),e(Ge,`badge badge-success badge-lg`),t(Ge,r(`stop/prevent `));let Ke=a(Ge);t(Ge,Ke),n(()=>{l(Ke,oe.value)});let L=s(`div`,P);t(P,L),e(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),_(L,`click`,e=>ge(e));let qe=s(`a`,L);t(L,qe),e(qe,`link link-primary`),c(qe,`href`,`#compiled-stop-prevent`),_(qe,`click`,y(e=>_e(e),[`stop`,`prevent`])),t(qe,r(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=s(`p`,L);t(L,Je),e(Je,`text-sm opacity-70`),t(Je,r(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=s(`section`,v);t(v,R),e(R,`space-y-3`);let z=s(`div`,R);t(R,z),e(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=s(`h2`,z);t(z,Ye),e(Ye,`text-xl font-semibold`),t(Ye,r(`v-on:keyup-enter / v-on:keyup-13`));let B=s(`div`,z);t(z,B),e(B,`flex flex-wrap gap-2`);let Xe=s(`span`,B);t(B,Xe),e(Xe,`badge badge-accent badge-lg`),t(Xe,r(`enter `));let Ze=a(Xe);t(Xe,Ze),n(()=>{l(Ze,se.value)});let Qe=s(`span`,B);t(B,Qe),e(Qe,`badge badge-neutral badge-lg`),t(Qe,r(`13 `));let $e=a(Qe);t(Qe,$e),n(()=>{l($e,ce.value)});let V=s(`div`,R);t(R,V),e(V,`grid gap-3 md:grid-cols-2`);let H=s(`label`,V);t(V,H),e(H,`floating-label`);let et=s(`input`,H);t(H,et),e(et,`input input-bordered`),c(et,`placeholder`,`按 Enter`),_(et,`keyup`,y(e=>ve(e),[`enter`]));let tt=s(`span`,H);t(H,tt),t(tt,r(`v-on:keyup-enter="onEnterDirective"`));let U=s(`label`,V);t(V,U),e(U,`floating-label`);let nt=s(`input`,U);t(U,nt),e(nt,`input input-bordered`),c(nt,`placeholder`,`按 Enter`),_(nt,`keyup`,y(e=>ye(e),[`13`]));let rt=s(`span`,U);t(U,rt),t(rt,r(`v-on:keyup-13="onKeyCode13Directive"`));let W=s(`section`,v);t(v,W),e(W,`space-y-3`);let G=s(`div`,W);t(W,G),e(G,`flex flex-wrap items-center justify-between gap-3`);let it=s(`h2`,G);t(G,it),e(it,`text-xl font-semibold`),t(it,r(`v-on:click-self / v-on:click-meta-exact`));let K=s(`div`,G);t(G,K),e(K,`flex flex-wrap gap-2`);let at=s(`span`,K);t(K,at),e(at,`badge badge-info badge-lg`),t(at,r(`self `));let ot=a(at);t(at,ot),n(()=>{l(ot,le.value)});let st=s(`span`,K);t(K,st),e(st,`badge badge-info badge-lg`),t(st,r(`meta.exact `));let ct=a(st);t(st,ct),n(()=>{l(ct,ue.value)});let q=s(`div`,W);t(W,q),e(q,`grid gap-4 md:grid-cols-2`);let J=s(`div`,q);t(q,J),e(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),_(J,`click`,y(e=>be(e),[`self`]));let lt=s(`p`,J);t(J,lt),e(lt,`font-medium`),t(lt,r(`v-on:click-self="onSelfOnly"`));let ut=s(`p`,J);t(J,ut),e(ut,`text-sm opacity-70`),t(ut,r(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=s(`button`,J);t(J,dt),e(dt,`btn btn-ghost btn-sm`),t(dt,r(`子元素按钮`));let ft=s(`button`,q);t(q,ft),e(ft,`btn btn-info`),_(ft,`click`,y(e=>xe(e),[`meta`,`exact`])),t(ft,r(`v-on:click-meta-exact：按住 Command 点击`));let Y=s(`section`,v);t(v,Y),e(Y,`space-y-3`);let X=s(`div`,Y);t(Y,X),e(X,`flex flex-wrap items-center justify-between gap-3`);let pt=s(`h2`,X);t(X,pt),e(pt,`text-xl font-semibold`),t(pt,r(`v-on:click-native-once`));let mt=s(`span`,X);t(X,mt),e(mt,`badge badge-secondary badge-lg`),t(mt,r(`code path`));let Z=s(`div`,Y);t(Y,Z),e(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=s(`div`,Z);t(Z,Q),e(Q,`mockup-code text-sm`);let ht=s(`pre`,Q);t(Q,ht),c(ht,`data-prefix`,`1`);let gt=s(`code`,ht);t(ht,gt);let _t=a(gt);t(gt,_t),l(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=s(`pre`,Q);t(Q,vt),c(vt,`data-prefix`,`2`);let yt=s(`code`,vt);t(vt,yt);let bt=a(yt);t(yt,bt),l(bt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let xt=s(`pre`,Q);t(Q,xt),c(xt,`data-prefix`,`3`);let St=s(`code`,xt);t(xt,St);let Ct=a(St);t(St,Ct),l(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=s(`div`,Z);t(Z,wt),e(wt,`grid gap-3`);let Tt=i(`rue:component:anchor`);t(wt,Tt),p(m(ne,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=s(`p`,wt);t(wt,Et),e(Et,`text-sm opacity-70`),t(Et,r(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=s(`section`,v);t(v,Dt),e(Dt,`space-y-3`);let Ot=s(`h2`,Dt);t(Dt,Ot),e(Ot,`text-xl font-semibold`),t(Ot,r(`修饰符速查`));let $=s(`div`,Dt);t(Dt,$),e($,`flex flex-wrap gap-2`);let kt=s(`span`,$);t($,kt),e(kt,`badge badge-primary badge-lg`),t(kt,r(`v-on:click-stop`));let At=s(`span`,$);t($,At),e(At,`badge badge-primary badge-lg`),t(At,r(`v-on:click-prevent`));let jt=s(`span`,$);t($,jt),e(jt,`badge badge-primary badge-lg`),t(jt,r(`v-on:click-self`));let Mt=s(`span`,$);t($,Mt),e(Mt,`badge badge-primary badge-lg`),t(Mt,r(`v-on:click-once`));let Nt=s(`span`,$);t($,Nt),e(Nt,`badge badge-primary badge-lg`),t(Nt,r(`v-on:click-capture`));let Pt=s(`span`,$);t($,Pt),e(Pt,`badge badge-primary badge-lg`),t(Pt,r(`v-on:wheel-passive`));let Ft=s(`span`,$);t($,Ft),e(Ft,`badge badge-primary badge-lg`),t(Ft,r(`v-on:click-ctrl`));let It=s(`span`,$);t($,It),e(It,`badge badge-primary badge-lg`),t(It,r(`v-on:click-shift`));let Lt=s(`span`,$);t($,Lt),e(Lt,`badge badge-primary badge-lg`),t(Lt,r(`v-on:click-alt`));let Rt=s(`span`,$);t($,Rt),e(Rt,`badge badge-primary badge-lg`),t(Rt,r(`v-on:click-meta`));let zt=s(`span`,$);t($,zt),e(zt,`badge badge-primary badge-lg`),t(zt,r(`v-on:click-meta-exact`));let Bt=s(`span`,$);t($,Bt),e(Bt,`badge badge-primary badge-lg`),t(Bt,r(`v-on:click-middle`));let Vt=s(`span`,$);t($,Vt),e(Vt,`badge badge-primary badge-lg`),t(Vt,r(`v-on:keyup-enter`));let Ht=s(`span`,$);t($,Ht),e(Ht,`badge badge-primary badge-lg`),t(Ht,r(`v-on:keyup-tab`));let Ut=s(`span`,$);t($,Ut),e(Ut,`badge badge-primary badge-lg`),t(Ut,r(`v-on:keyup-delete`));let Wt=s(`span`,$);t($,Wt),e(Wt,`badge badge-primary badge-lg`),t(Wt,r(`v-on:keyup-esc`));let Gt=s(`span`,$);t($,Gt),e(Gt,`badge badge-primary badge-lg`),t(Gt,r(`v-on:keyup-space`));let Kt=s(`span`,$);t($,Kt),e(Kt,`badge badge-primary badge-lg`),t(Kt,r(`v-on:keyup-up`));let qt=s(`span`,$);t($,qt),e(qt,`badge badge-primary badge-lg`),t(qt,r(`v-on:keyup-down`));let Jt=s(`span`,$);t($,Jt),e(Jt,`badge badge-primary badge-lg`),t(Jt,r(`v-on:keyup-left`));let Yt=s(`span`,$);t($,Yt),e(Yt,`badge badge-primary badge-lg`),t(Yt,r(`v-on:keyup-right`));let Xt=s(`span`,$);t($,Xt),e(Xt,`badge badge-primary badge-lg`),t(Xt,r(`v-on:keyup-13`));let Zt=s(`span`,$);t($,Zt),e(Zt,`badge badge-primary badge-lg`),t(Zt,r(`v-on:click-native-once`));let Qt=s(`section`,v);t(v,Qt),e(Qt,`space-y-3`);let $t=s(`h2`,Qt);t(Qt,$t),e($t,`text-xl font-semibold`),t($t,r(`最近一次事件`));let en=s(`div`,Qt);t(Qt,en),e(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=a(en);t(en,tn),n(()=>{l(tn,de.value)});let nn=s(`section`,v);t(v,nn),e(nn,`space-y-3`);let rn=s(`h2`,nn);t(nn,rn),e(rn,`text-xl font-semibold`),t(rn,r(`事件日志`));let an=s(`div`,nn);t(nn,an),e(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=s(`ul`,an);t(an,on),e(on,`list gap-2 font-mono text-sm`);let sn=i(`rue:list:start`),cn=i(`rue:list:end`);t(on,sn),t(on,cn);let ln=new Map;return n(()=>{ln=ee({items:fe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(r,i,u,d,m)=>{p(f(()=>{let i=o(),u=s(`li`,i);t(i,u),n(()=>{c(u,`key`,String(`${r}-${m}`))}),e(u,`list-row px-0 py-1`);let d=a(u);return t(u,d),n(()=>{l(d,r)}),i}),i,u)}})}),u}):``;g(()=>p(u,E,D))}),u})}),h,v),h})};export{w as default};