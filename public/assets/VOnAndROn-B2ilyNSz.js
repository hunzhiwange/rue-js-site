import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,_t as u,d,l as f,mt as p,ot as m,t as ee,ut as h,z as g}from"./vapor-runtime-B3ypJaOM.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-CER7Yupw.js";import{t as y}from"./Code-DOCCgQFa.js";import{t as b}from"./SidebarPlaygroundExample-DwVZAGT7.js";var x=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,S=`// Rue TSX 可直接写入的修饰符写法
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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,re=i=>d(o=>{let s=r(`button`,o);n(s,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let c=r(`span`,s);a(s,c);let l=e(`rue:slot:anchor`);a(c,l),u(()=>{let e=i.title;h(()=>f(e,c,l))});let p=e(`rue:slot:anchor`);return a(s,p),u(()=>{let o=i.note?d(()=>{let o=t(),s=r(`span`,o);a(o,s),n(s,`text-xs opacity-70`);let c=e(`rue:slot:anchor`);return a(s,c),u(()=>{let e=i.note;h(()=>f(e,s,c))}),o}):``;h(()=>f(o,s,p))}),s}),C=()=>{let{activeTab:C,methodPathCount:ie,keyword:ae,bubbleCount:oe,stopPreventCount:se,enterCount:ce,keyCodeCount:le,selfCount:ue,metaExactCount:de,lastEvent:fe,eventLog:pe,updateLastEvent:w,onMethodPath:me,onInput:he,onManualCall:ge,onBubbleParent:_e,onDirectiveStopPrevent:ve,onEnterDirective:ye,onKeyCode13Directive:be,onSelfOnly:xe,onMetaExact:Se}=_(`useSetup:0:0`,()=>p(()=>{let e=_(`ref:1:0`,()=>m(`code`)),t=_(`ref:1:1`,()=>m(0)),n=_(`ref:1:2`,()=>m(`Rue`)),r=_(`ref:1:3`,()=>m(0)),i=_(`ref:1:4`,()=>m(0)),a=_(`ref:1:5`,()=>m(0)),o=_(`ref:1:6`,()=>m(0)),s=_(`ref:1:7`,()=>m(0)),c=_(`ref:1:8`,()=>m(0)),l=_(`ref:1:9`,()=>m(`等待交互`)),u=_(`ref:1:10`,()=>m([`等待交互`])),d=e=>{l.value=e,u.value=[e,...u.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:u,updateLastEvent:d,onMethodPath:e=>{t.value+=1,d(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,d(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{d(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,d(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,d(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,d(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,d(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,d(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,d(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return d(p=>{let m=t(),_=e(`rue:component:anchor`);return a(m,_),f(ee(b,{children:d(()=>{let p=t(),m=r(`h1`,p);a(p,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-on / r-on`));let _=r(`div`,p);a(p,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let b=r(`button`,_);a(_,b),c(b,`role`,`tab`),u(()=>{n(b,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(b,`click`,()=>{C.value=`preview`}),a(b,s(`效果`));let w=r(`button`,_);a(_,w),c(w,`role`,`tab`),u(()=>{n(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{C.value=`code`}),a(w,s(`代码`));let T=r(`div`,p);a(p,T),n(T,`mt-4 grid gap-6 items-start`);let Ce=e(`rue:slot:anchor`);a(T,Ce),u(()=>{let i=C.value===`code`?d(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`grid gap-6`);let c=r(`div`,o);a(o,c),n(c,`card bg-base-100 shadow overflow-auto`);let l=r(`div`,c);a(c,l),n(l,`card-body gap-3`);let d=r(`h2`,l);a(l,d),n(d,`card-title`),a(d,s(`Rue TSX 实际源码`));let p=e(`rue:component:anchor`);a(l,p),u(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});h(()=>f(e,l,p))});let m=r(`div`,o);a(o,m),n(m,`card bg-base-100 shadow overflow-auto`);let g=r(`div`,m);a(m,g),n(g,`card-body gap-3`);let _=r(`h2`,g);a(g,_),n(_,`card-title`),a(_,s(`原生 TSX 对照写法`));let v=e(`rue:component:anchor`);a(g,v),u(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});h(()=>f(e,g,v))});let te=r(`div`,o);a(o,te),n(te,`card bg-base-100 shadow overflow-auto`);let b=r(`div`,te);a(te,b),n(b,`card-body gap-3`);let re=r(`h2`,b);a(b,re),n(re,`card-title`),a(re,s(`修饰符速查`));let C=e(`rue:component:anchor`);return a(b,C),u(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:S});h(()=>f(e,b,C))}),i}):``;h(()=>f(i,T,Ce))}),a(T,s(` `));let E=e(`rue:slot:anchor`);return a(T,E),u(()=>{let p=C.value===`preview`?d(()=>{let p=t(),m=r(`div`,p);a(p,m),n(m,`card bg-base-100 shadow`);let _=r(`div`,m);a(m,_),n(_,`card-body grid gap-6`);let y=r(`div`,_);a(_,y),c(y,`role`,`alert`),n(y,`alert alert-info`);let b=r(`span`,y);a(y,b),a(b,s(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let x=r(`div`,_);a(_,x),c(x,`role`,`alert`),n(x,`alert alert-warning alert-soft`);let ne=r(`span`,x);a(x,ne),a(ne,s(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=r(`section`,_);a(_,S),n(S,`space-y-3`);let C=r(`div`,S);a(S,C),n(C,`flex flex-wrap items-center justify-between gap-3`);let w=r(`h2`,C);a(C,w),n(w,`text-xl font-semibold`),a(w,s(`v-on:click：method path 自动注入浏览器事件`));let T=r(`span`,C);a(C,T),n(T,`badge badge-primary badge-lg`);let Ce=g(T);a(T,Ce),u(()=>{o(Ce,ie.value)}),a(T,s(` 次`));let E=r(`div`,S);a(S,E),n(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let we=r(`button`,E);a(E,we),n(we,`btn btn-primary`),i(we,`click`,e=>me(e)),a(we,s(`v-on:click="onMethodPath"`));let Te=r(`p`,E);a(E,Te),n(Te,`text-sm opacity-70`),a(Te,s(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let D=r(`section`,_);a(_,D),n(D,`space-y-3`);let O=r(`div`,D);a(D,O),n(O,`flex flex-wrap items-center justify-between gap-3`);let Ee=r(`h2`,O);a(O,Ee),n(Ee,`text-xl font-semibold`),a(Ee,s(`v-on:click：method() / method($event)`));let De=r(`span`,O);a(O,De),n(De,`badge badge-outline badge-lg`),a(De,s(`last call`));let Oe=r(`div`,D);a(D,Oe),n(Oe,`grid gap-3 md:grid-cols-2`);let ke=r(`button`,Oe);a(Oe,ke),n(ke,`btn btn-secondary`),i(ke,`click`,e=>ge(`method() 不自动注入 event`)),a(ke,s(`method()`));let Ae=r(`button`,Oe);a(Oe,Ae),n(Ae,`btn btn-accent`),i(Ae,`click`,e=>ge(`method($event) 显式注入`,e)),a(Ae,s(`method($event)`));let k=r(`section`,_);a(_,k),n(k,`space-y-3`);let A=r(`div`,k);a(k,A),n(A,`flex flex-wrap items-center justify-between gap-3`);let je=r(`h2`,A);a(A,je),n(je,`text-xl font-semibold`),a(je,s(`r-on:input：直接复用标准输入事件`));let Me=r(`span`,A);a(A,Me),n(Me,`badge badge-outline badge-lg`),a(Me,s(`长度 `));let Ne=e(`rue:slot:anchor`);a(Me,Ne),u(()=>{let e=ae.value.length;h(()=>f(e,Me,Ne))});let j=r(`div`,k);a(k,j),n(j,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Pe=r(`input`,j);a(j,Pe),n(Pe,`input input-bordered w-full`),u(()=>{l(Pe,ae.value)}),i(Pe,`input`,e=>he(e));let M=r(`div`,j);a(j,M),n(M,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let N=r(`div`,M);a(M,N),n(N,`stat`);let Fe=r(`div`,N);a(N,Fe),n(Fe,`stat-title`),a(Fe,s(`当前值`));let Ie=r(`div`,N);a(N,Ie),n(Ie,`stat-value text-2xl`);let Le=g(Ie);a(Ie,Le),u(()=>{o(Le,ae.value||`空`)});let P=r(`div`,M);a(M,P),n(P,`stat`);let Re=r(`div`,P);a(P,Re),n(Re,`stat-title`),a(Re,s(`大写预览`));let ze=r(`div`,P);a(P,ze),n(ze,`stat-value text-2xl`);let Be=g(ze);a(ze,Be),u(()=>{o(Be,ae.value.toUpperCase()||`EMPTY`)});let F=r(`section`,_);a(_,F),n(F,`space-y-3`);let I=r(`div`,F);a(F,I),n(I,`flex flex-wrap items-center justify-between gap-3`);let Ve=r(`h2`,I);a(I,Ve),n(Ve,`text-xl font-semibold`),a(Ve,s(`v-on:click-stop-prevent`));let L=r(`div`,I);a(I,L),n(L,`flex flex-wrap gap-2`);let He=r(`span`,L);a(L,He),n(He,`badge badge-warning badge-lg`),a(He,s(`bubble `));let Ue=g(He);a(He,Ue),u(()=>{o(Ue,oe.value)});let We=r(`span`,L);a(L,We),n(We,`badge badge-success badge-lg`),a(We,s(`stop/prevent `));let Ge=g(We);a(We,Ge),u(()=>{o(Ge,se.value)});let R=r(`div`,F);a(F,R),n(R,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),i(R,`click`,e=>_e(e));let Ke=r(`a`,R);a(R,Ke),n(Ke,`link link-primary`),c(Ke,`href`,`#compiled-stop-prevent`),i(Ke,`click`,v(e=>ve(e),[`stop`,`prevent`])),a(Ke,s(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let qe=r(`p`,R);a(R,qe),n(qe,`text-sm opacity-70`),a(qe,s(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let z=r(`section`,_);a(_,z),n(z,`space-y-3`);let B=r(`div`,z);a(z,B),n(B,`flex flex-wrap items-center justify-between gap-3`);let Je=r(`h2`,B);a(B,Je),n(Je,`text-xl font-semibold`),a(Je,s(`v-on:keyup-enter / v-on:keyup-13`));let V=r(`div`,B);a(B,V),n(V,`flex flex-wrap gap-2`);let Ye=r(`span`,V);a(V,Ye),n(Ye,`badge badge-accent badge-lg`),a(Ye,s(`enter `));let Xe=g(Ye);a(Ye,Xe),u(()=>{o(Xe,ce.value)});let Ze=r(`span`,V);a(V,Ze),n(Ze,`badge badge-neutral badge-lg`),a(Ze,s(`13 `));let Qe=g(Ze);a(Ze,Qe),u(()=>{o(Qe,le.value)});let H=r(`div`,z);a(z,H),n(H,`grid gap-3 md:grid-cols-2`);let U=r(`label`,H);a(H,U),n(U,`floating-label`);let $e=r(`input`,U);a(U,$e),n($e,`input input-bordered`),c($e,`placeholder`,`按 Enter`),i($e,`keyup`,v(e=>ye(e),[`enter`]));let et=r(`span`,U);a(U,et),a(et,s(`v-on:keyup-enter="onEnterDirective"`));let W=r(`label`,H);a(H,W),n(W,`floating-label`);let tt=r(`input`,W);a(W,tt),n(tt,`input input-bordered`),c(tt,`placeholder`,`按 Enter`),i(tt,`keyup`,v(e=>be(e),[`13`]));let nt=r(`span`,W);a(W,nt),a(nt,s(`v-on:keyup-13="onKeyCode13Directive"`));let G=r(`section`,_);a(_,G),n(G,`space-y-3`);let K=r(`div`,G);a(G,K),n(K,`flex flex-wrap items-center justify-between gap-3`);let rt=r(`h2`,K);a(K,rt),n(rt,`text-xl font-semibold`),a(rt,s(`v-on:click-self / v-on:click-meta-exact`));let q=r(`div`,K);a(K,q),n(q,`flex flex-wrap gap-2`);let it=r(`span`,q);a(q,it),n(it,`badge badge-info badge-lg`),a(it,s(`self `));let at=g(it);a(it,at),u(()=>{o(at,ue.value)});let ot=r(`span`,q);a(q,ot),n(ot,`badge badge-info badge-lg`),a(ot,s(`meta.exact `));let st=g(ot);a(ot,st),u(()=>{o(st,de.value)});let J=r(`div`,G);a(G,J),n(J,`grid gap-4 md:grid-cols-2`);let Y=r(`div`,J);a(J,Y),n(Y,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),i(Y,`click`,v(e=>xe(e),[`self`]));let ct=r(`p`,Y);a(Y,ct),n(ct,`font-medium`),a(ct,s(`v-on:click-self="onSelfOnly"`));let lt=r(`p`,Y);a(Y,lt),n(lt,`text-sm opacity-70`),a(lt,s(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let ut=r(`button`,Y);a(Y,ut),n(ut,`btn btn-ghost btn-sm`),a(ut,s(`子元素按钮`));let dt=r(`button`,J);a(J,dt),n(dt,`btn btn-info`),i(dt,`click`,v(e=>Se(e),[`meta`,`exact`])),a(dt,s(`v-on:click-meta-exact：按住 Command 点击`));let X=r(`section`,_);a(_,X),n(X,`space-y-3`);let Z=r(`div`,X);a(X,Z),n(Z,`flex flex-wrap items-center justify-between gap-3`);let ft=r(`h2`,Z);a(Z,ft),n(ft,`text-xl font-semibold`),a(ft,s(`v-on:click-native-once`));let pt=r(`span`,Z);a(Z,pt),n(pt,`badge badge-secondary badge-lg`),a(pt,s(`code path`));let mt=r(`div`,X);a(X,mt),n(mt,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=r(`div`,mt);a(mt,Q),n(Q,`mockup-code text-sm`);let ht=r(`pre`,Q);a(Q,ht),c(ht,`data-prefix`,`1`);let gt=r(`code`,ht);a(ht,gt);let _t=g(gt);a(gt,_t),o(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=r(`pre`,Q);a(Q,vt),c(vt,`data-prefix`,`2`);let yt=r(`code`,vt);a(vt,yt);let bt=g(yt);a(yt,bt),o(bt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let xt=r(`pre`,Q);a(Q,xt),c(xt,`data-prefix`,`3`);let St=r(`code`,xt);a(xt,St);let Ct=g(St);a(St,Ct),o(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=r(`div`,mt);a(mt,wt),n(wt,`grid gap-3`);let Tt=e(`rue:component:anchor`);a(wt,Tt),f(ee(re,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=r(`p`,wt);a(wt,Et),n(Et,`text-sm opacity-70`),a(Et,s(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=r(`section`,_);a(_,Dt),n(Dt,`space-y-3`);let Ot=r(`h2`,Dt);a(Dt,Ot),n(Ot,`text-xl font-semibold`),a(Ot,s(`修饰符速查`));let $=r(`div`,Dt);a(Dt,$),n($,`flex flex-wrap gap-2`);let kt=r(`span`,$);a($,kt),n(kt,`badge badge-primary badge-lg`),a(kt,s(`v-on:click-stop`));let At=r(`span`,$);a($,At),n(At,`badge badge-primary badge-lg`),a(At,s(`v-on:click-prevent`));let jt=r(`span`,$);a($,jt),n(jt,`badge badge-primary badge-lg`),a(jt,s(`v-on:click-self`));let Mt=r(`span`,$);a($,Mt),n(Mt,`badge badge-primary badge-lg`),a(Mt,s(`v-on:click-once`));let Nt=r(`span`,$);a($,Nt),n(Nt,`badge badge-primary badge-lg`),a(Nt,s(`v-on:click-capture`));let Pt=r(`span`,$);a($,Pt),n(Pt,`badge badge-primary badge-lg`),a(Pt,s(`v-on:wheel-passive`));let Ft=r(`span`,$);a($,Ft),n(Ft,`badge badge-primary badge-lg`),a(Ft,s(`v-on:click-ctrl`));let It=r(`span`,$);a($,It),n(It,`badge badge-primary badge-lg`),a(It,s(`v-on:click-shift`));let Lt=r(`span`,$);a($,Lt),n(Lt,`badge badge-primary badge-lg`),a(Lt,s(`v-on:click-alt`));let Rt=r(`span`,$);a($,Rt),n(Rt,`badge badge-primary badge-lg`),a(Rt,s(`v-on:click-meta`));let zt=r(`span`,$);a($,zt),n(zt,`badge badge-primary badge-lg`),a(zt,s(`v-on:click-meta-exact`));let Bt=r(`span`,$);a($,Bt),n(Bt,`badge badge-primary badge-lg`),a(Bt,s(`v-on:click-middle`));let Vt=r(`span`,$);a($,Vt),n(Vt,`badge badge-primary badge-lg`),a(Vt,s(`v-on:keyup-enter`));let Ht=r(`span`,$);a($,Ht),n(Ht,`badge badge-primary badge-lg`),a(Ht,s(`v-on:keyup-tab`));let Ut=r(`span`,$);a($,Ut),n(Ut,`badge badge-primary badge-lg`),a(Ut,s(`v-on:keyup-delete`));let Wt=r(`span`,$);a($,Wt),n(Wt,`badge badge-primary badge-lg`),a(Wt,s(`v-on:keyup-esc`));let Gt=r(`span`,$);a($,Gt),n(Gt,`badge badge-primary badge-lg`),a(Gt,s(`v-on:keyup-space`));let Kt=r(`span`,$);a($,Kt),n(Kt,`badge badge-primary badge-lg`),a(Kt,s(`v-on:keyup-up`));let qt=r(`span`,$);a($,qt),n(qt,`badge badge-primary badge-lg`),a(qt,s(`v-on:keyup-down`));let Jt=r(`span`,$);a($,Jt),n(Jt,`badge badge-primary badge-lg`),a(Jt,s(`v-on:keyup-left`));let Yt=r(`span`,$);a($,Yt),n(Yt,`badge badge-primary badge-lg`),a(Yt,s(`v-on:keyup-right`));let Xt=r(`span`,$);a($,Xt),n(Xt,`badge badge-primary badge-lg`),a(Xt,s(`v-on:keyup-13`));let Zt=r(`span`,$);a($,Zt),n(Zt,`badge badge-primary badge-lg`),a(Zt,s(`v-on:click-native-once`));let Qt=r(`section`,_);a(_,Qt),n(Qt,`space-y-3`);let $t=r(`h2`,Qt);a(Qt,$t),n($t,`text-xl font-semibold`),a($t,s(`最近一次事件`));let en=r(`div`,Qt);a(Qt,en),n(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=g(en);a(en,tn),u(()=>{o(tn,fe.value)});let nn=r(`section`,_);a(_,nn),n(nn,`space-y-3`);let rn=r(`h2`,nn);a(nn,rn),n(rn,`text-xl font-semibold`),a(rn,s(`事件日志`));let an=r(`div`,nn);a(nn,an),n(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=r(`ul`,an);a(an,on),n(on,`list gap-2 font-mono text-sm`);let sn=e(`rue:list:start`),cn=e(`rue:list:end`);a(on,sn),a(on,cn);let ln=new Map;return u(()=>{ln=te({items:pe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(e,i,s,l,p)=>{f(d(()=>{let i=t(),s=r(`li`,i);a(i,s),u(()=>{c(s,`key`,String(`${e}-${p}`))}),n(s,`list-row px-0 py-1`);let l=g(s);return a(s,l),u(()=>{o(l,e)}),i}),i,s)}})}),p}):``;h(()=>f(p,T,E))}),p})}),m,_),m})};export{C as default};