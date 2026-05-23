import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,ot as f,q as p,st as m,t as ee,tt as h,xt as g}from"./vapor-runtime-BAZOdMd8.js";import{a as _,i as v,n as te}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as y}from"./Code-DY4Ua5uc.js";import{t as b}from"./SidebarPlaygroundExample-B8LFNSBu.js";var ne=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,x=`// Rue TSX 可直接写入的修饰符写法
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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,ie=e=>l(t=>{let i=a(`button`,t);h(i,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let o=a(`span`,i);r(i,o);let c=s(`rue:slot:anchor`);r(o,c),u(()=>{let t=e.title;g(()=>d(t,o,c))});let f=s(`rue:slot:anchor`);return r(i,f),u(()=>{let t=e.note?l(()=>{let t=n(),i=a(`span`,t);r(t,i),h(i,`text-xs opacity-70`);let o=s(`rue:slot:anchor`);return r(i,o),u(()=>{let t=e.note;g(()=>d(t,i,o))}),t}):``;g(()=>d(t,i,f))}),i}),S=()=>{let{activeTab:S,methodPathCount:ae,keyword:oe,bubbleCount:se,stopPreventCount:ce,enterCount:le,keyCodeCount:ue,selfCount:de,metaExactCount:fe,lastEvent:pe,eventLog:me,updateLastEvent:C,onMethodPath:he,onInput:ge,onManualCall:_e,onBubbleParent:ve,onDirectiveStopPrevent:ye,onEnterDirective:be,onKeyCode13Directive:xe,onSelfOnly:Se,onMetaExact:Ce}=_(`useSetup:0:0`,()=>t(()=>{let e=_(`ref:1:0`,()=>c(`code`)),t=_(`ref:1:1`,()=>c(0)),n=_(`ref:1:2`,()=>c(`Rue`)),r=_(`ref:1:3`,()=>c(0)),i=_(`ref:1:4`,()=>c(0)),a=_(`ref:1:5`,()=>c(0)),o=_(`ref:1:6`,()=>c(0)),s=_(`ref:1:7`,()=>c(0)),l=_(`ref:1:8`,()=>c(0)),u=_(`ref:1:9`,()=>c(`等待交互`)),d=_(`ref:1:10`,()=>c([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,f(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,f(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(ee(b,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,p(`v-on / r-on`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let b=a(`button`,_);r(_,b),e(b,`role`,`tab`),u(()=>{h(b,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),o(b,`click`,()=>{S.value=`preview`}),r(b,p(`效果`));let C=a(`button`,_);r(_,C),e(C,`role`,`tab`),u(()=>{h(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),o(C,`click`,()=>{S.value=`code`}),r(C,p(`代码`));let w=a(`div`,t);r(t,w),h(w,`mt-4 grid gap-6 items-start`);let we=s(`rue:slot:anchor`);r(w,we),u(()=>{let e=S.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`grid gap-6`);let i=a(`div`,t);r(t,i),h(i,`card bg-base-100 shadow overflow-auto`);let o=a(`div`,i);r(i,o),h(o,`card-body gap-3`);let c=a(`h2`,o);r(o,c),h(c,`card-title`),r(c,p(`Rue TSX 实际源码`));let l=s(`rue:component:anchor`);r(o,l),u(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:ne});g(()=>d(e,o,l))});let f=a(`div`,t);r(t,f),h(f,`card bg-base-100 shadow overflow-auto`);let m=a(`div`,f);r(f,m),h(m,`card-body gap-3`);let _=a(`h2`,m);r(m,_),h(_,`card-title`),r(_,p(`原生 TSX 对照写法`));let v=s(`rue:component:anchor`);r(m,v),u(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:re});g(()=>d(e,m,v))});let te=a(`div`,t);r(t,te),h(te,`card bg-base-100 shadow overflow-auto`);let b=a(`div`,te);r(te,b),h(b,`card-body gap-3`);let ie=a(`h2`,b);r(b,ie),h(ie,`card-title`),r(ie,p(`修饰符速查`));let S=s(`rue:component:anchor`);return r(b,S),u(()=>{let e=ee(y,{className:`h-full`,lang:`tsx`,code:x});g(()=>d(e,b,S))}),e}):``;g(()=>d(e,w,we))}),r(w,p(` `));let T=s(`rue:slot:anchor`);return r(w,T),u(()=>{let t=S.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),h(c,`card bg-base-100 shadow`);let _=a(`div`,c);r(c,_),h(_,`card-body grid gap-6`);let y=a(`div`,_);r(_,y),e(y,`role`,`alert`),h(y,`alert alert-info`);let b=a(`span`,y);r(y,b),r(b,p(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let ne=a(`div`,_);r(_,ne),e(ne,`role`,`alert`),h(ne,`alert alert-warning alert-soft`);let re=a(`span`,ne);r(ne,re),r(re,p(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let x=a(`section`,_);r(_,x),h(x,`space-y-3`);let S=a(`div`,x);r(x,S),h(S,`flex flex-wrap items-center justify-between gap-3`);let C=a(`h2`,S);r(S,C),h(C,`text-xl font-semibold`),r(C,p(`v-on:click：method path 自动注入浏览器事件`));let w=a(`span`,S);r(S,w),h(w,`badge badge-primary badge-lg`);let we=i(w);r(w,we),u(()=>{m(we,ae.value)}),r(w,p(` 次`));let T=a(`div`,x);r(x,T),h(T,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Te=a(`button`,T);r(T,Te),h(Te,`btn btn-primary`),o(Te,`click`,e=>he(e)),r(Te,p(`v-on:click="onMethodPath"`));let Ee=a(`p`,T);r(T,Ee),h(Ee,`text-sm opacity-70`),r(Ee,p(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let E=a(`section`,_);r(_,E),h(E,`space-y-3`);let D=a(`div`,E);r(E,D),h(D,`flex flex-wrap items-center justify-between gap-3`);let De=a(`h2`,D);r(D,De),h(De,`text-xl font-semibold`),r(De,p(`v-on:click：method() / method($event)`));let Oe=a(`span`,D);r(D,Oe),h(Oe,`badge badge-outline badge-lg`),r(Oe,p(`last call`));let O=a(`div`,E);r(E,O),h(O,`grid gap-3 md:grid-cols-2`);let ke=a(`button`,O);r(O,ke),h(ke,`btn btn-secondary`),o(ke,`click`,e=>_e(`method() 不自动注入 event`)),r(ke,p(`method()`));let Ae=a(`button`,O);r(O,Ae),h(Ae,`btn btn-accent`),o(Ae,`click`,e=>_e(`method($event) 显式注入`,e)),r(Ae,p(`method($event)`));let k=a(`section`,_);r(_,k),h(k,`space-y-3`);let A=a(`div`,k);r(k,A),h(A,`flex flex-wrap items-center justify-between gap-3`);let je=a(`h2`,A);r(A,je),h(je,`text-xl font-semibold`),r(je,p(`r-on:input：直接复用标准输入事件`));let Me=a(`span`,A);r(A,Me),h(Me,`badge badge-outline badge-lg`),r(Me,p(`长度 `));let Ne=s(`rue:slot:anchor`);r(Me,Ne),u(()=>{let e=oe.value.length;g(()=>d(e,Me,Ne))});let Pe=a(`div`,k);r(k,Pe),h(Pe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Fe=a(`input`,Pe);r(Pe,Fe),h(Fe,`input input-bordered w-full`),u(()=>{f(Fe,oe.value)}),o(Fe,`input`,e=>ge(e));let j=a(`div`,Pe);r(Pe,j),h(j,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=a(`div`,j);r(j,M),h(M,`stat`);let Ie=a(`div`,M);r(M,Ie),h(Ie,`stat-title`),r(Ie,p(`当前值`));let Le=a(`div`,M);r(M,Le),h(Le,`stat-value text-2xl`);let Re=i(Le);r(Le,Re),u(()=>{m(Re,oe.value||`空`)});let N=a(`div`,j);r(j,N),h(N,`stat`);let ze=a(`div`,N);r(N,ze),h(ze,`stat-title`),r(ze,p(`大写预览`));let Be=a(`div`,N);r(N,Be),h(Be,`stat-value text-2xl`);let Ve=i(Be);r(Be,Ve),u(()=>{m(Ve,oe.value.toUpperCase()||`EMPTY`)});let P=a(`section`,_);r(_,P),h(P,`space-y-3`);let F=a(`div`,P);r(P,F),h(F,`flex flex-wrap items-center justify-between gap-3`);let He=a(`h2`,F);r(F,He),h(He,`text-xl font-semibold`),r(He,p(`v-on:click-stop-prevent`));let I=a(`div`,F);r(F,I),h(I,`flex flex-wrap gap-2`);let Ue=a(`span`,I);r(I,Ue),h(Ue,`badge badge-warning badge-lg`),r(Ue,p(`bubble `));let We=i(Ue);r(Ue,We),u(()=>{m(We,se.value)});let Ge=a(`span`,I);r(I,Ge),h(Ge,`badge badge-success badge-lg`),r(Ge,p(`stop/prevent `));let Ke=i(Ge);r(Ge,Ke),u(()=>{m(Ke,ce.value)});let L=a(`div`,P);r(P,L),h(L,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),o(L,`click`,e=>ve(e));let qe=a(`a`,L);r(L,qe),h(qe,`link link-primary`),e(qe,`href`,`#compiled-stop-prevent`),o(qe,`click`,v(e=>ye(e),[`stop`,`prevent`])),r(qe,p(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Je=a(`p`,L);r(L,Je),h(Je,`text-sm opacity-70`),r(Je,p(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let R=a(`section`,_);r(_,R),h(R,`space-y-3`);let z=a(`div`,R);r(R,z),h(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=a(`h2`,z);r(z,Ye),h(Ye,`text-xl font-semibold`),r(Ye,p(`v-on:keyup-enter / v-on:keyup-13`));let B=a(`div`,z);r(z,B),h(B,`flex flex-wrap gap-2`);let Xe=a(`span`,B);r(B,Xe),h(Xe,`badge badge-accent badge-lg`),r(Xe,p(`enter `));let Ze=i(Xe);r(Xe,Ze),u(()=>{m(Ze,le.value)});let Qe=a(`span`,B);r(B,Qe),h(Qe,`badge badge-neutral badge-lg`),r(Qe,p(`13 `));let $e=i(Qe);r(Qe,$e),u(()=>{m($e,ue.value)});let V=a(`div`,R);r(R,V),h(V,`grid gap-3 md:grid-cols-2`);let H=a(`label`,V);r(V,H),h(H,`floating-label`);let et=a(`input`,H);r(H,et),h(et,`input input-bordered`),e(et,`placeholder`,`按 Enter`),o(et,`keyup`,v(e=>be(e),[`enter`]));let tt=a(`span`,H);r(H,tt),r(tt,p(`v-on:keyup-enter="onEnterDirective"`));let U=a(`label`,V);r(V,U),h(U,`floating-label`);let nt=a(`input`,U);r(U,nt),h(nt,`input input-bordered`),e(nt,`placeholder`,`按 Enter`),o(nt,`keyup`,v(e=>xe(e),[`13`]));let rt=a(`span`,U);r(U,rt),r(rt,p(`v-on:keyup-13="onKeyCode13Directive"`));let W=a(`section`,_);r(_,W),h(W,`space-y-3`);let G=a(`div`,W);r(W,G),h(G,`flex flex-wrap items-center justify-between gap-3`);let it=a(`h2`,G);r(G,it),h(it,`text-xl font-semibold`),r(it,p(`v-on:click-self / v-on:click-meta-exact`));let K=a(`div`,G);r(G,K),h(K,`flex flex-wrap gap-2`);let at=a(`span`,K);r(K,at),h(at,`badge badge-info badge-lg`),r(at,p(`self `));let ot=i(at);r(at,ot),u(()=>{m(ot,de.value)});let st=a(`span`,K);r(K,st),h(st,`badge badge-info badge-lg`),r(st,p(`meta.exact `));let ct=i(st);r(st,ct),u(()=>{m(ct,fe.value)});let q=a(`div`,W);r(W,q),h(q,`grid gap-4 md:grid-cols-2`);let J=a(`div`,q);r(q,J),h(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),o(J,`click`,v(e=>Se(e),[`self`]));let lt=a(`p`,J);r(J,lt),h(lt,`font-medium`),r(lt,p(`v-on:click-self="onSelfOnly"`));let ut=a(`p`,J);r(J,ut),h(ut,`text-sm opacity-70`),r(ut,p(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=a(`button`,J);r(J,dt),h(dt,`btn btn-ghost btn-sm`),r(dt,p(`子元素按钮`));let ft=a(`button`,q);r(q,ft),h(ft,`btn btn-info`),o(ft,`click`,v(e=>Ce(e),[`meta`,`exact`])),r(ft,p(`v-on:click-meta-exact：按住 Command 点击`));let Y=a(`section`,_);r(_,Y),h(Y,`space-y-3`);let X=a(`div`,Y);r(Y,X),h(X,`flex flex-wrap items-center justify-between gap-3`);let pt=a(`h2`,X);r(X,pt),h(pt,`text-xl font-semibold`),r(pt,p(`v-on:click-native-once`));let mt=a(`span`,X);r(X,mt),h(mt,`badge badge-secondary badge-lg`),r(mt,p(`code path`));let Z=a(`div`,Y);r(Y,Z),h(Z,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=a(`div`,Z);r(Z,Q),h(Q,`mockup-code text-sm`);let ht=a(`pre`,Q);r(Q,ht),e(ht,`data-prefix`,`1`);let gt=a(`code`,ht);r(ht,gt);let _t=i(gt);r(gt,_t),m(_t,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let vt=a(`pre`,Q);r(Q,vt),e(vt,`data-prefix`,`2`);let yt=a(`code`,vt);r(vt,yt);let bt=i(yt);r(yt,bt),m(bt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let xt=a(`pre`,Q);r(Q,xt),e(xt,`data-prefix`,`3`);let St=a(`code`,xt);r(xt,St);let Ct=i(St);r(St,Ct),m(Ct,`// native + once 仍然属于同一条修饰符编译链`);let wt=a(`div`,Z);r(Z,wt),h(wt,`grid gap-3`);let Tt=s(`rue:component:anchor`);r(wt,Tt),d(ee(ie,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),wt,Tt);let Et=a(`p`,wt);r(wt,Et),h(Et,`text-sm opacity-70`),r(Et,p(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=a(`section`,_);r(_,Dt),h(Dt,`space-y-3`);let Ot=a(`h2`,Dt);r(Dt,Ot),h(Ot,`text-xl font-semibold`),r(Ot,p(`修饰符速查`));let $=a(`div`,Dt);r(Dt,$),h($,`flex flex-wrap gap-2`);let kt=a(`span`,$);r($,kt),h(kt,`badge badge-primary badge-lg`),r(kt,p(`v-on:click-stop`));let At=a(`span`,$);r($,At),h(At,`badge badge-primary badge-lg`),r(At,p(`v-on:click-prevent`));let jt=a(`span`,$);r($,jt),h(jt,`badge badge-primary badge-lg`),r(jt,p(`v-on:click-self`));let Mt=a(`span`,$);r($,Mt),h(Mt,`badge badge-primary badge-lg`),r(Mt,p(`v-on:click-once`));let Nt=a(`span`,$);r($,Nt),h(Nt,`badge badge-primary badge-lg`),r(Nt,p(`v-on:click-capture`));let Pt=a(`span`,$);r($,Pt),h(Pt,`badge badge-primary badge-lg`),r(Pt,p(`v-on:wheel-passive`));let Ft=a(`span`,$);r($,Ft),h(Ft,`badge badge-primary badge-lg`),r(Ft,p(`v-on:click-ctrl`));let It=a(`span`,$);r($,It),h(It,`badge badge-primary badge-lg`),r(It,p(`v-on:click-shift`));let Lt=a(`span`,$);r($,Lt),h(Lt,`badge badge-primary badge-lg`),r(Lt,p(`v-on:click-alt`));let Rt=a(`span`,$);r($,Rt),h(Rt,`badge badge-primary badge-lg`),r(Rt,p(`v-on:click-meta`));let zt=a(`span`,$);r($,zt),h(zt,`badge badge-primary badge-lg`),r(zt,p(`v-on:click-meta-exact`));let Bt=a(`span`,$);r($,Bt),h(Bt,`badge badge-primary badge-lg`),r(Bt,p(`v-on:click-middle`));let Vt=a(`span`,$);r($,Vt),h(Vt,`badge badge-primary badge-lg`),r(Vt,p(`v-on:keyup-enter`));let Ht=a(`span`,$);r($,Ht),h(Ht,`badge badge-primary badge-lg`),r(Ht,p(`v-on:keyup-tab`));let Ut=a(`span`,$);r($,Ut),h(Ut,`badge badge-primary badge-lg`),r(Ut,p(`v-on:keyup-delete`));let Wt=a(`span`,$);r($,Wt),h(Wt,`badge badge-primary badge-lg`),r(Wt,p(`v-on:keyup-esc`));let Gt=a(`span`,$);r($,Gt),h(Gt,`badge badge-primary badge-lg`),r(Gt,p(`v-on:keyup-space`));let Kt=a(`span`,$);r($,Kt),h(Kt,`badge badge-primary badge-lg`),r(Kt,p(`v-on:keyup-up`));let qt=a(`span`,$);r($,qt),h(qt,`badge badge-primary badge-lg`),r(qt,p(`v-on:keyup-down`));let Jt=a(`span`,$);r($,Jt),h(Jt,`badge badge-primary badge-lg`),r(Jt,p(`v-on:keyup-left`));let Yt=a(`span`,$);r($,Yt),h(Yt,`badge badge-primary badge-lg`),r(Yt,p(`v-on:keyup-right`));let Xt=a(`span`,$);r($,Xt),h(Xt,`badge badge-primary badge-lg`),r(Xt,p(`v-on:keyup-13`));let Zt=a(`span`,$);r($,Zt),h(Zt,`badge badge-primary badge-lg`),r(Zt,p(`v-on:click-native-once`));let Qt=a(`section`,_);r(_,Qt),h(Qt,`space-y-3`);let $t=a(`h2`,Qt);r(Qt,$t),h($t,`text-xl font-semibold`),r($t,p(`最近一次事件`));let en=a(`div`,Qt);r(Qt,en),h(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=i(en);r(en,tn),u(()=>{m(tn,pe.value)});let nn=a(`section`,_);r(_,nn),h(nn,`space-y-3`);let rn=a(`h2`,nn);r(nn,rn),h(rn,`text-xl font-semibold`),r(rn,p(`事件日志`));let an=a(`div`,nn);r(nn,an),h(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=a(`ul`,an);r(an,on),h(on,`list gap-2 font-mono text-sm`);let sn=s(`rue:list:start`),cn=s(`rue:list:end`);r(on,sn),r(on,cn);let ln=new Map;return u(()=>{ln=te({items:me.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(t,o,s,c,f)=>{d(l(()=>{let o=n(),s=a(`li`,o);r(o,s),u(()=>{e(s,`key`,String(`${t}-${f}`))}),h(s,`list-row px-0 py-1`);let c=i(s);return r(s,c),u(()=>{m(c,t)}),o}),o,s)}})}),t}):``;g(()=>d(t,w,T))}),t})}),c,_),c})};export{S as default};