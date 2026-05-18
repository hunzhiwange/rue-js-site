import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,Z as l,d as u,dt as d,ht as f,l as p,st as m,t as ee,vt as h,z as g}from"./vapor-runtime-BuwLbCGk.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x=`import { type FC, ref } from '@rue-js/rue';

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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,re=i=>u(o=>{let s=r(`button`,o);n(s,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let c=r(`span`,s);a(s,c);let l=e(`rue:slot:anchor`);a(c,l),h(()=>{let e=i.title;d(()=>p(e,c,l))});let f=e(`rue:slot:anchor`);return a(s,f),h(()=>{let o=i.note?u(()=>{let o=t(),s=r(`span`,o);a(o,s),n(s,`text-xs opacity-70`);let c=e(`rue:slot:anchor`);return a(s,c),h(()=>{let e=i.note;d(()=>p(e,s,c))}),o}):``;d(()=>p(o,s,f))}),s}),C=()=>{let{activeTab:C,methodPathCount:ie,keyword:ae,bubbleCount:oe,stopPreventCount:se,enterCount:ce,keyCodeCount:le,selfCount:ue,metaExactCount:de,lastEvent:fe,eventLog:pe,updateLastEvent:w,onMethodPath:me,onInput:he,onManualCall:ge,onBubbleParent:_e,onDirectiveStopPrevent:ve,onEnterDirective:ye,onKeyCode13Directive:be,onSelfOnly:xe,onMetaExact:Se}=_(`useSetup:0:0`,()=>f(()=>{let e=_(`ref:1:0`,()=>m(`code`)),t=_(`ref:1:1`,()=>m(0)),n=_(`ref:1:2`,()=>m(`Rue`)),r=_(`ref:1:3`,()=>m(0)),i=_(`ref:1:4`,()=>m(0)),a=_(`ref:1:5`,()=>m(0)),o=_(`ref:1:6`,()=>m(0)),s=_(`ref:1:7`,()=>m(0)),c=_(`ref:1:8`,()=>m(0)),l=_(`ref:1:9`,()=>m(`等待交互`)),u=_(`ref:1:10`,()=>m([`等待交互`])),d=e=>{l.value=e,u.value=[e,...u.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:u,updateLastEvent:d,onMethodPath:e=>{t.value+=1,d(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,d(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{d(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,d(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,d(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,d(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,d(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,d(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,d(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return u(f=>{let m=t(),_=e(`rue:component:anchor`);return a(m,_),p(ee(b,{children:u(()=>{let f=t(),m=r(`h1`,f);a(f,m),n(m,`text-5xl font-semibold mb-4 md:mb-4`),a(m,s(`v-on / r-on`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let b=r(`button`,_);a(_,b),c(b,`role`,`tab`),h(()=>{n(b,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),i(b,`click`,()=>{C.value=`preview`}),a(b,s(`效果`));let w=r(`button`,_);a(_,w),c(w,`role`,`tab`),h(()=>{n(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),i(w,`click`,()=>{C.value=`code`}),a(w,s(`代码`));let T=r(`div`,f);a(f,T),n(T,`mt-4 grid gap-6 items-start`);let Ce=e(`rue:slot:anchor`);a(T,Ce),h(()=>{let i=C.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`grid gap-6`);let c=r(`div`,o);a(o,c),n(c,`card bg-base-100 shadow overflow-auto`);let l=r(`div`,c);a(c,l),n(l,`card-body gap-3`);let u=r(`h2`,l);a(l,u),n(u,`card-title`),a(u,s(`Rue TSX 实际源码`));let f=e(`rue:component:anchor`);a(l,f),h(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});d(()=>p(e,l,f))});let m=r(`div`,o);a(o,m),n(m,`card bg-base-100 shadow overflow-auto`);let g=r(`div`,m);a(m,g),n(g,`card-body gap-3`);let _=r(`h2`,g);a(g,_),n(_,`card-title`),a(_,s(`原生 TSX 对照写法`));let v=e(`rue:component:anchor`);a(g,v),h(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});d(()=>p(e,g,v))});let te=r(`div`,o);a(o,te),n(te,`card bg-base-100 shadow overflow-auto`);let b=r(`div`,te);a(te,b),n(b,`card-body gap-3`);let re=r(`h2`,b);a(b,re),n(re,`card-title`),a(re,s(`修饰符速查`));let C=e(`rue:component:anchor`);return a(b,C),h(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:S});d(()=>p(e,b,C))}),i}):``;d(()=>p(i,T,Ce))}),a(T,s(` `));let E=e(`rue:slot:anchor`);return a(T,E),h(()=>{let f=C.value===`preview`?u(()=>{let f=t(),m=r(`div`,f);a(f,m),n(m,`card bg-base-100 shadow`);let _=r(`div`,m);a(m,_),n(_,`card-body grid gap-6`);let y=r(`div`,_);a(_,y),c(y,`role`,`alert`),n(y,`alert alert-info`);let b=r(`span`,y);a(y,b),a(b,s(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let x=r(`div`,_);a(_,x),c(x,`role`,`alert`),n(x,`alert alert-warning alert-soft`);let ne=r(`span`,x);a(x,ne),a(ne,s(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=r(`section`,_);a(_,S),n(S,`space-y-3`);let C=r(`div`,S);a(S,C),n(C,`flex flex-wrap items-center justify-between gap-3`);let w=r(`h2`,C);a(C,w),n(w,`text-xl font-semibold`),a(w,s(`v-on:click：method path 自动注入浏览器事件`));let T=r(`span`,C);a(C,T),n(T,`badge badge-primary badge-lg`);let Ce=g(T);a(T,Ce),h(()=>{o(Ce,ie.value)}),a(T,s(` 次`));let E=r(`div`,S);a(S,E),n(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let we=r(`button`,E);a(E,we),n(we,`btn btn-primary`),i(we,`click`,e=>me(e)),a(we,s(`v-on:click="onMethodPath"`));let Te=r(`p`,E);a(E,Te),n(Te,`text-sm opacity-70`),a(Te,s(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let D=r(`section`,_);a(_,D),n(D,`space-y-3`);let O=r(`div`,D);a(D,O),n(O,`flex flex-wrap items-center justify-between gap-3`);let Ee=r(`h2`,O);a(O,Ee),n(Ee,`text-xl font-semibold`),a(Ee,s(`v-on:click：method() / method($event)`));let De=r(`span`,O);a(O,De),n(De,`badge badge-outline badge-lg`),a(De,s(`last call`));let k=r(`div`,D);a(D,k),n(k,`grid gap-3 md:grid-cols-2`);let Oe=r(`button`,k);a(k,Oe),n(Oe,`btn btn-secondary`),i(Oe,`click`,e=>ge(`method() 不自动注入 event`)),a(Oe,s(`method()`));let ke=r(`button`,k);a(k,ke),n(ke,`btn btn-accent`),i(ke,`click`,e=>ge(`method($event) 显式注入`,e)),a(ke,s(`method($event)`));let A=r(`section`,_);a(_,A),n(A,`space-y-3`);let Ae=r(`div`,A);a(A,Ae),n(Ae,`flex flex-wrap items-center justify-between gap-3`);let je=r(`h2`,Ae);a(Ae,je),n(je,`text-xl font-semibold`),a(je,s(`r-on:input：直接复用标准输入事件`));let Me=r(`span`,Ae);a(Ae,Me),n(Me,`badge badge-outline badge-lg`),a(Me,s(`长度 `));let Ne=e(`rue:slot:anchor`);a(Me,Ne),h(()=>{let e=ae.value.length;d(()=>p(e,Me,Ne))});let Pe=r(`div`,A);a(A,Pe),n(Pe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=r(`input`,Pe);a(Pe,Fe),n(Fe,`input input-bordered w-full`),h(()=>{l(Fe,ae.value)}),i(Fe,`input`,e=>he(e));let j=r(`div`,Pe);a(Pe,j),n(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=r(`div`,j);a(j,M),n(M,`stat`);let Ie=r(`div`,M);a(M,Ie),n(Ie,`stat-title`),a(Ie,s(`当前值`));let Le=r(`div`,M);a(M,Le),n(Le,`stat-value text-2xl`);let Re=g(Le);a(Le,Re),h(()=>{o(Re,ae.value||`空`)});let N=r(`div`,j);a(j,N),n(N,`stat`);let ze=r(`div`,N);a(N,ze),n(ze,`stat-title`),a(ze,s(`大写预览`));let Be=r(`div`,N);a(N,Be),n(Be,`stat-value text-2xl`);let Ve=g(Be);a(Be,Ve),h(()=>{o(Ve,ae.value.toUpperCase()||`EMPTY`)});let P=r(`section`,_);a(_,P),n(P,`space-y-3`);let F=r(`div`,P);a(P,F),n(F,`flex flex-wrap items-center justify-between gap-3`);let He=r(`h2`,F);a(F,He),n(He,`text-xl font-semibold`),a(He,s(`v-on:click-stop-prevent`));let I=r(`div`,F);a(F,I),n(I,`flex flex-wrap gap-2`);let Ue=r(`span`,I);a(I,Ue),n(Ue,`badge badge-warning badge-lg`),a(Ue,s(`bubble `));let We=g(Ue);a(Ue,We),h(()=>{o(We,oe.value)});let Ge=r(`span`,I);a(I,Ge),n(Ge,`badge badge-success badge-lg`),a(Ge,s(`stop/prevent `));let Ke=g(Ge);a(Ge,Ke),h(()=>{o(Ke,se.value)});let L=r(`div`,P);a(P,L),n(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),i(L,`click`,e=>_e(e));let qe=r(`a`,L);a(L,qe),n(qe,`link link-primary`),c(qe,`href`,`#compiled-stop-prevent`),i(qe,`click`,v(e=>ve(e),[`stop`,`prevent`])),a(qe,s(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=r(`p`,L);a(L,Je),n(Je,`text-sm opacity-70`),a(Je,s(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=r(`section`,_);a(_,R),n(R,`space-y-3`);let z=r(`div`,R);a(R,z),n(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=r(`h2`,z);a(z,Ye),n(Ye,`text-xl font-semibold`),a(Ye,s(`v-on:keyup-enter / v-on:keyup-13`));let B=r(`div`,z);a(z,B),n(B,`flex flex-wrap gap-2`);let Xe=r(`span`,B);a(B,Xe),n(Xe,`badge badge-accent badge-lg`),a(Xe,s(`enter `));let Ze=g(Xe);a(Xe,Ze),h(()=>{o(Ze,ce.value)});let Qe=r(`span`,B);a(B,Qe),n(Qe,`badge badge-neutral badge-lg`),a(Qe,s(`13 `));let $e=g(Qe);a(Qe,$e),h(()=>{o($e,le.value)});let V=r(`div`,R);a(R,V),n(V,`grid gap-3 md:grid-cols-2`);let H=r(`label`,V);a(V,H),n(H,`floating-label`);let et=r(`input`,H);a(H,et),n(et,`input input-bordered`),c(et,`placeholder`,`按 Enter`),i(et,`keyup`,v(e=>ye(e),[`enter`]));let tt=r(`span`,H);a(H,tt),a(tt,s(`v-on:keyup-enter="onEnterDirective"`));let U=r(`label`,V);a(V,U),n(U,`floating-label`);let nt=r(`input`,U);a(U,nt),n(nt,`input input-bordered`),c(nt,`placeholder`,`按 Enter`),i(nt,`keyup`,v(e=>be(e),[`13`]));let rt=r(`span`,U);a(U,rt),a(rt,s(`v-on:keyup-13="onKeyCode13Directive"`));let W=r(`section`,_);a(_,W),n(W,`space-y-3`);let G=r(`div`,W);a(W,G),n(G,`flex flex-wrap items-center justify-between gap-3`);let it=r(`h2`,G);a(G,it),n(it,`text-xl font-semibold`),a(it,s(`v-on:click-self / v-on:click-meta-exact`));let K=r(`div`,G);a(G,K),n(K,`flex flex-wrap gap-2`);let at=r(`span`,K);a(K,at),n(at,`badge badge-info badge-lg`),a(at,s(`self `));let ot=g(at);a(at,ot),h(()=>{o(ot,ue.value)});let st=r(`span`,K);a(K,st),n(st,`badge badge-info badge-lg`),a(st,s(`meta.exact `));let ct=g(st);a(st,ct),h(()=>{o(ct,de.value)});let q=r(`div`,W);a(W,q),n(q,`grid gap-4 md:grid-cols-2`);let J=r(`div`,q);a(q,J),n(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),i(J,`click`,v(e=>xe(e),[`self`]));let lt=r(`p`,J);a(J,lt),n(lt,`font-medium`),a(lt,s(`v-on:click-self="onSelfOnly"`));let ut=r(`p`,J);a(J,ut),n(ut,`text-sm opacity-70`),a(ut,s(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=r(`button`,J);a(J,dt),n(dt,`btn btn-ghost btn-sm`),a(dt,s(`子元素按钮`));let ft=r(`button`,q);a(q,ft),n(ft,`btn btn-info`),i(ft,`click`,v(e=>Se(e),[`meta`,`exact`])),a(ft,s(`v-on:click-meta-exact：按住 Command 点击`));let Y=r(`section`,_);a(_,Y),n(Y,`space-y-3`);let X=r(`div`,Y);a(Y,X),n(X,`flex flex-wrap items-center justify-between gap-3`);let pt=r(`h2`,X);a(X,pt),n(pt,`text-xl font-semibold`),a(pt,s(`v-on:click-native-once`));let mt=r(`span`,X);a(X,mt),n(mt,`badge badge-secondary badge-lg`),a(mt,s(`code path`));let Z=r(`div`,Y);a(Y,Z),n(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=r(`div`,Z);a(Z,Q),n(Q,`mockup-code text-sm`);let ht=r(`pre`,Q);a(Q,ht),c(ht,`data-prefix`,`1`);let gt=r(`code`,ht);a(ht,gt);let _t=g(gt);a(gt,_t),o(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=r(`pre`,Q);a(Q,vt),c(vt,`data-prefix`,`2`);let yt=r(`code`,vt);a(vt,yt);let bt=g(yt);a(yt,bt),o(bt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let xt=r(`pre`,Q);a(Q,xt),c(xt,`data-prefix`,`3`);let St=r(`code`,xt);a(xt,St);let Ct=g(St);a(St,Ct),o(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=r(`div`,Z);a(Z,wt),n(wt,`grid gap-3`);let Tt=e(`rue:component:anchor`);a(wt,Tt),p(ee(re,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=r(`p`,wt);a(wt,Et),n(Et,`text-sm opacity-70`),a(Et,s(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=r(`section`,_);a(_,Dt),n(Dt,`space-y-3`);let Ot=r(`h2`,Dt);a(Dt,Ot),n(Ot,`text-xl font-semibold`),a(Ot,s(`修饰符速查`));let $=r(`div`,Dt);a(Dt,$),n($,`flex flex-wrap gap-2`);let kt=r(`span`,$);a($,kt),n(kt,`badge badge-primary badge-lg`),a(kt,s(`v-on:click-stop`));let At=r(`span`,$);a($,At),n(At,`badge badge-primary badge-lg`),a(At,s(`v-on:click-prevent`));let jt=r(`span`,$);a($,jt),n(jt,`badge badge-primary badge-lg`),a(jt,s(`v-on:click-self`));let Mt=r(`span`,$);a($,Mt),n(Mt,`badge badge-primary badge-lg`),a(Mt,s(`v-on:click-once`));let Nt=r(`span`,$);a($,Nt),n(Nt,`badge badge-primary badge-lg`),a(Nt,s(`v-on:click-capture`));let Pt=r(`span`,$);a($,Pt),n(Pt,`badge badge-primary badge-lg`),a(Pt,s(`v-on:wheel-passive`));let Ft=r(`span`,$);a($,Ft),n(Ft,`badge badge-primary badge-lg`),a(Ft,s(`v-on:click-ctrl`));let It=r(`span`,$);a($,It),n(It,`badge badge-primary badge-lg`),a(It,s(`v-on:click-shift`));let Lt=r(`span`,$);a($,Lt),n(Lt,`badge badge-primary badge-lg`),a(Lt,s(`v-on:click-alt`));let Rt=r(`span`,$);a($,Rt),n(Rt,`badge badge-primary badge-lg`),a(Rt,s(`v-on:click-meta`));let zt=r(`span`,$);a($,zt),n(zt,`badge badge-primary badge-lg`),a(zt,s(`v-on:click-meta-exact`));let Bt=r(`span`,$);a($,Bt),n(Bt,`badge badge-primary badge-lg`),a(Bt,s(`v-on:click-middle`));let Vt=r(`span`,$);a($,Vt),n(Vt,`badge badge-primary badge-lg`),a(Vt,s(`v-on:keyup-enter`));let Ht=r(`span`,$);a($,Ht),n(Ht,`badge badge-primary badge-lg`),a(Ht,s(`v-on:keyup-tab`));let Ut=r(`span`,$);a($,Ut),n(Ut,`badge badge-primary badge-lg`),a(Ut,s(`v-on:keyup-delete`));let Wt=r(`span`,$);a($,Wt),n(Wt,`badge badge-primary badge-lg`),a(Wt,s(`v-on:keyup-esc`));let Gt=r(`span`,$);a($,Gt),n(Gt,`badge badge-primary badge-lg`),a(Gt,s(`v-on:keyup-space`));let Kt=r(`span`,$);a($,Kt),n(Kt,`badge badge-primary badge-lg`),a(Kt,s(`v-on:keyup-up`));let qt=r(`span`,$);a($,qt),n(qt,`badge badge-primary badge-lg`),a(qt,s(`v-on:keyup-down`));let Jt=r(`span`,$);a($,Jt),n(Jt,`badge badge-primary badge-lg`),a(Jt,s(`v-on:keyup-left`));let Yt=r(`span`,$);a($,Yt),n(Yt,`badge badge-primary badge-lg`),a(Yt,s(`v-on:keyup-right`));let Xt=r(`span`,$);a($,Xt),n(Xt,`badge badge-primary badge-lg`),a(Xt,s(`v-on:keyup-13`));let Zt=r(`span`,$);a($,Zt),n(Zt,`badge badge-primary badge-lg`),a(Zt,s(`v-on:click-native-once`));let Qt=r(`section`,_);a(_,Qt),n(Qt,`space-y-3`);let $t=r(`h2`,Qt);a(Qt,$t),n($t,`text-xl font-semibold`),a($t,s(`最近一次事件`));let en=r(`div`,Qt);a(Qt,en),n(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=g(en);a(en,tn),h(()=>{o(tn,fe.value)});let nn=r(`section`,_);a(_,nn),n(nn,`space-y-3`);let rn=r(`h2`,nn);a(nn,rn),n(rn,`text-xl font-semibold`),a(rn,s(`事件日志`));let an=r(`div`,nn);a(nn,an),n(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=r(`ul`,an);a(an,on),n(on,`list gap-2 font-mono text-sm`);let sn=e(`rue:list:start`),cn=e(`rue:list:end`);a(on,sn),a(on,cn);let ln=new Map;return h(()=>{ln=te({items:pe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(e,i,s,l,d)=>{p(u(()=>{let i=t(),s=r(`li`,i);a(i,s),h(()=>{c(s,`key`,String(`${e}-${d}`))}),n(s,`list-row px-0 py-1`);let l=g(s);return a(s,l),h(()=>{o(l,e)}),i}),i,s)}})}),f}):``;d(()=>p(f,T,E))}),f})}),m,_),m})};export{C as default};