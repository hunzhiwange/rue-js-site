import{A as e,F as t,H as n,I as r,J as i,L as a,N as o,P as s,W as c,Y as l,c as u,j as d,pt as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-CKndxKFn.js";import{a as _,i as v,n as ee}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as y}from"./Code-B1JFTu6m.js";import{t as b}from"./SidebarPlaygroundExample-DlK8mtjC.js";var x=`import { type FC, ref } from '@rue-js/rue';

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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,ne=e=>h(()=>{let n=t(`button`);c(n,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let r=t(`span`);d(n,r);let i=o(`rue:slot:anchor`);d(r,i),f(()=>{let t=e.title;u(t,r,i)});let a=o(`rue:slot:anchor`);return d(n,a),f(()=>{u(e.note?h(()=>{let n=s(),r=t(`span`);d(n,r),c(r,`text-xs opacity-70`);let i=o(`rue:slot:anchor`);return d(r,i),f(()=>{let t=e.note;u(t,r,i)}),n}):``,n,a)}),n}),C=()=>{let{activeTab:C,methodPathCount:re,keyword:ie,bubbleCount:ae,stopPreventCount:oe,enterCount:se,keyCodeCount:ce,selfCount:le,metaExactCount:ue,lastEvent:de,eventLog:fe,updateLastEvent:w,onMethodPath:pe,onInput:me,onManualCall:he,onBubbleParent:ge,onDirectiveStopPrevent:_e,onEnterDirective:ve,onKeyCode13Directive:ye,onSelfOnly:be,onMetaExact:xe}=_(`useSetup:0:0`,()=>g(()=>{let e=_(`ref:1:0`,()=>p(`code`)),t=_(`ref:1:1`,()=>p(0)),n=_(`ref:1:2`,()=>p(`Rue`)),r=_(`ref:1:3`,()=>p(0)),i=_(`ref:1:4`,()=>p(0)),a=_(`ref:1:5`,()=>p(0)),o=_(`ref:1:6`,()=>p(0)),s=_(`ref:1:7`,()=>p(0)),c=_(`ref:1:8`,()=>p(0)),l=_(`ref:1:9`,()=>p(`等待交互`)),u=_(`ref:1:10`,()=>p([`等待交互`])),d=e=>{l.value=e,u.value=[e,...u.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:u,updateLastEvent:d,onMethodPath:e=>{t.value+=1,d(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,d(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{d(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,d(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,d(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,d(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,d(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,d(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,d(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return h(()=>{let p=s(),g=o(`rue:component:anchor`);return d(p,g),u(m(b,{children:h(()=>{let p=s(),g=t(`h1`);d(p,g),c(g,`text-5xl font-semibold mb-4 md:mb-4`),d(g,r(`v-on / r-on`));let _=t(`div`);d(p,_),n(_,`role`,`tablist`),c(_,`tabs tabs-box`);let b=t(`button`);d(_,b),n(b,`role`,`tab`),f(()=>{c(b,String(`tab ${C.value===`preview`?`tab-active`:``}`))}),e(b,`click`,()=>{C.value=`preview`}),d(b,r(`效果`));let w=t(`button`);d(_,w),n(w,`role`,`tab`),f(()=>{c(w,String(`tab ${C.value===`code`?`tab-active`:``}`))}),e(w,`click`,()=>{C.value=`code`}),d(w,r(`代码`));let T=t(`div`);d(p,T),c(T,`mt-4 grid gap-6 items-start`);let Se=o(`rue:slot:anchor`);d(T,Se),f(()=>{u(C.value===`code`?h(()=>{let e=s(),n=t(`div`);d(e,n),c(n,`grid gap-6`);let i=t(`div`);d(n,i),c(i,`card bg-base-100 shadow overflow-auto`);let a=t(`div`);d(i,a),c(a,`card-body gap-3`);let l=t(`h2`);d(a,l),c(l,`card-title`),d(l,r(`Rue TSX 实际源码`));let p=o(`rue:component:anchor`);d(a,p),f(()=>{u(m(y,{className:`h-full`,lang:`tsx`,code:x}),a,p)});let h=t(`div`);d(n,h),c(h,`card bg-base-100 shadow overflow-auto`);let g=t(`div`);d(h,g),c(g,`card-body gap-3`);let _=t(`h2`);d(g,_),c(_,`card-title`),d(_,r(`原生 TSX 对照写法`));let v=o(`rue:component:anchor`);d(g,v),f(()=>{u(m(y,{className:`h-full`,lang:`tsx`,code:te}),g,v)});let ee=t(`div`);d(n,ee),c(ee,`card bg-base-100 shadow overflow-auto`);let b=t(`div`);d(ee,b),c(b,`card-body gap-3`);let ne=t(`h2`);d(b,ne),c(ne,`card-title`),d(ne,r(`修饰符速查`));let C=o(`rue:component:anchor`);return d(b,C),f(()=>{u(m(y,{className:`h-full`,lang:`tsx`,code:S}),b,C)}),e}):``,T,Se)}),d(T,r(` `));let E=o(`rue:slot:anchor`);return d(T,E),f(()=>{u(C.value===`preview`?h(()=>{let p=s(),g=t(`div`);d(p,g),c(g,`card bg-base-100 shadow`);let _=t(`div`);d(g,_),c(_,`card-body grid gap-6`);let y=t(`div`);d(_,y),n(y,`role`,`alert`),c(y,`alert alert-info`);let b=t(`span`);d(y,b),d(b,r(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let x=t(`div`);d(_,x),n(x,`role`,`alert`),c(x,`alert alert-warning alert-soft`);let te=t(`span`);d(x,te),d(te,r(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=t(`section`);d(_,S),c(S,`space-y-3`);let C=t(`div`);d(S,C),c(C,`flex flex-wrap items-center justify-between gap-3`);let w=t(`h2`);d(C,w),c(w,`text-xl font-semibold`),d(w,r(`v-on:click：method path 自动注入浏览器事件`));let T=t(`span`);d(C,T),c(T,`badge badge-primary badge-lg`);let Se=a(T);d(T,Se),f(()=>{l(Se,re.value)}),d(T,r(` 次`));let E=t(`div`);d(S,E),c(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let D=t(`button`);d(E,D),c(D,`btn btn-primary`),e(D,`click`,e=>pe(e)),d(D,r(`v-on:click="onMethodPath"`));let Ce=t(`p`);d(E,Ce),c(Ce,`text-sm opacity-70`),d(Ce,r(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let O=t(`section`);d(_,O),c(O,`space-y-3`);let k=t(`div`);d(O,k),c(k,`flex flex-wrap items-center justify-between gap-3`);let we=t(`h2`);d(k,we),c(we,`text-xl font-semibold`),d(we,r(`v-on:click：method() / method($event)`));let Te=t(`span`);d(k,Te),c(Te,`badge badge-outline badge-lg`),d(Te,r(`last call`));let A=t(`div`);d(O,A),c(A,`grid gap-3 md:grid-cols-2`);let Ee=t(`button`);d(A,Ee),c(Ee,`btn btn-secondary`),e(Ee,`click`,e=>he(`method() 不自动注入 event`)),d(Ee,r(`method()`));let De=t(`button`);d(A,De),c(De,`btn btn-accent`),e(De,`click`,e=>he(`method($event) 显式注入`,e)),d(De,r(`method($event)`));let Oe=t(`section`);d(_,Oe),c(Oe,`space-y-3`);let ke=t(`div`);d(Oe,ke),c(ke,`flex flex-wrap items-center justify-between gap-3`);let Ae=t(`h2`);d(ke,Ae),c(Ae,`text-xl font-semibold`),d(Ae,r(`r-on:input：直接复用标准输入事件`));let j=t(`span`);d(ke,j),c(j,`badge badge-outline badge-lg`),d(j,r(`长度 `));let je=o(`rue:slot:anchor`);d(j,je),f(()=>{let e=ie.value.length;u(e,j,je)});let Me=t(`div`);d(Oe,Me),c(Me,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Ne=t(`input`);d(Me,Ne),c(Ne,`input input-bordered w-full`),f(()=>{i(Ne,ie.value)}),e(Ne,`input`,e=>me(e));let Pe=t(`div`);d(Me,Pe),c(Pe,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let M=t(`div`);d(Pe,M),c(M,`stat`);let Fe=t(`div`);d(M,Fe),c(Fe,`stat-title`),d(Fe,r(`当前值`));let N=t(`div`);d(M,N),c(N,`stat-value text-2xl`);let Ie=a(N);d(N,Ie),f(()=>{l(Ie,ie.value||`空`)});let P=t(`div`);d(Pe,P),c(P,`stat`);let Le=t(`div`);d(P,Le),c(Le,`stat-title`),d(Le,r(`大写预览`));let F=t(`div`);d(P,F),c(F,`stat-value text-2xl`);let Re=a(F);d(F,Re),f(()=>{l(Re,ie.value.toUpperCase()||`EMPTY`)});let I=t(`section`);d(_,I),c(I,`space-y-3`);let L=t(`div`);d(I,L),c(L,`flex flex-wrap items-center justify-between gap-3`);let ze=t(`h2`);d(L,ze),c(ze,`text-xl font-semibold`),d(ze,r(`v-on:click-stop-prevent`));let R=t(`div`);d(L,R),c(R,`flex flex-wrap gap-2`);let z=t(`span`);d(R,z),c(z,`badge badge-warning badge-lg`),d(z,r(`bubble `));let Be=a(z);d(z,Be),f(()=>{l(Be,ae.value)});let B=t(`span`);d(R,B),c(B,`badge badge-success badge-lg`),d(B,r(`stop/prevent `));let Ve=a(B);d(B,Ve),f(()=>{l(Ve,oe.value)});let V=t(`div`);d(I,V),c(V,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),e(V,`click`,e=>ge(e));let H=t(`a`);d(V,H),c(H,`link link-primary`),n(H,`href`,`#compiled-stop-prevent`),e(H,`click`,v(e=>_e(e),[`stop`,`prevent`])),d(H,r(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let He=t(`p`);d(V,He),c(He,`text-sm opacity-70`),d(He,r(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let U=t(`section`);d(_,U),c(U,`space-y-3`);let W=t(`div`);d(U,W),c(W,`flex flex-wrap items-center justify-between gap-3`);let Ue=t(`h2`);d(W,Ue),c(Ue,`text-xl font-semibold`),d(Ue,r(`v-on:keyup-enter / v-on:keyup-13`));let We=t(`div`);d(W,We),c(We,`flex flex-wrap gap-2`);let G=t(`span`);d(We,G),c(G,`badge badge-accent badge-lg`),d(G,r(`enter `));let Ge=a(G);d(G,Ge),f(()=>{l(Ge,se.value)});let K=t(`span`);d(We,K),c(K,`badge badge-neutral badge-lg`),d(K,r(`13 `));let Ke=a(K);d(K,Ke),f(()=>{l(Ke,ce.value)});let qe=t(`div`);d(U,qe),c(qe,`grid gap-3 md:grid-cols-2`);let Je=t(`label`);d(qe,Je),c(Je,`floating-label`);let Ye=t(`input`);d(Je,Ye),c(Ye,`input input-bordered`),n(Ye,`placeholder`,`按 Enter`),e(Ye,`keyup`,v(e=>ve(e),[`enter`]));let Xe=t(`span`);d(Je,Xe),d(Xe,r(`v-on:keyup-enter="onEnterDirective"`));let Ze=t(`label`);d(qe,Ze),c(Ze,`floating-label`);let Qe=t(`input`);d(Ze,Qe),c(Qe,`input input-bordered`),n(Qe,`placeholder`,`按 Enter`),e(Qe,`keyup`,v(e=>ye(e),[`13`]));let $e=t(`span`);d(Ze,$e),d($e,r(`v-on:keyup-13="onKeyCode13Directive"`));let et=t(`section`);d(_,et),c(et,`space-y-3`);let tt=t(`div`);d(et,tt),c(tt,`flex flex-wrap items-center justify-between gap-3`);let nt=t(`h2`);d(tt,nt),c(nt,`text-xl font-semibold`),d(nt,r(`v-on:click-self / v-on:click-meta-exact`));let rt=t(`div`);d(tt,rt),c(rt,`flex flex-wrap gap-2`);let q=t(`span`);d(rt,q),c(q,`badge badge-info badge-lg`),d(q,r(`self `));let it=a(q);d(q,it),f(()=>{l(it,le.value)});let J=t(`span`);d(rt,J),c(J,`badge badge-info badge-lg`),d(J,r(`meta.exact `));let at=a(J);d(J,at),f(()=>{l(at,ue.value)});let ot=t(`div`);d(et,ot),c(ot,`grid gap-4 md:grid-cols-2`);let Y=t(`div`);d(ot,Y),c(Y,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),e(Y,`click`,v(e=>be(e),[`self`]));let st=t(`p`);d(Y,st),c(st,`font-medium`),d(st,r(`v-on:click-self="onSelfOnly"`));let ct=t(`p`);d(Y,ct),c(ct,`text-sm opacity-70`),d(ct,r(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let lt=t(`button`);d(Y,lt),c(lt,`btn btn-ghost btn-sm`),d(lt,r(`子元素按钮`));let ut=t(`button`);d(ot,ut),c(ut,`btn btn-info`),e(ut,`click`,v(e=>xe(e),[`meta`,`exact`])),d(ut,r(`v-on:click-meta-exact：按住 Command 点击`));let dt=t(`section`);d(_,dt),c(dt,`space-y-3`);let ft=t(`div`);d(dt,ft),c(ft,`flex flex-wrap items-center justify-between gap-3`);let pt=t(`h2`);d(ft,pt),c(pt,`text-xl font-semibold`),d(pt,r(`v-on:click-native-once`));let mt=t(`span`);d(ft,mt),c(mt,`badge badge-secondary badge-lg`),d(mt,r(`code path`));let ht=t(`div`);d(dt,ht),c(ht,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let X=t(`div`);d(ht,X),c(X,`mockup-code text-sm`);let gt=t(`pre`);d(X,gt),n(gt,`data-prefix`,`1`);let _t=t(`code`);d(gt,_t);let vt=a(_t);d(_t,vt),l(vt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let yt=t(`pre`);d(X,yt),n(yt,`data-prefix`,`2`);let bt=t(`code`);d(yt,bt);let xt=a(bt);d(bt,xt),l(xt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let St=t(`pre`);d(X,St),n(St,`data-prefix`,`3`);let Ct=t(`code`);d(St,Ct);let wt=a(Ct);d(Ct,wt),l(wt,`// native + once 仍然属于同一条修饰符编译链`);let Z=t(`div`);d(ht,Z),c(Z,`grid gap-3`);let Tt=o(`rue:component:anchor`);d(Z,Tt),u(m(ne,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),Z,Tt);let Et=t(`p`);d(Z,Et),c(Et,`text-sm opacity-70`),d(Et,r(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=t(`section`);d(_,Dt),c(Dt,`space-y-3`);let Ot=t(`h2`);d(Dt,Ot),c(Ot,`text-xl font-semibold`),d(Ot,r(`修饰符速查`));let Q=t(`div`);d(Dt,Q),c(Q,`flex flex-wrap gap-2`);let kt=t(`span`);d(Q,kt),c(kt,`badge badge-primary badge-lg`),d(kt,r(`v-on:click-stop`));let At=t(`span`);d(Q,At),c(At,`badge badge-primary badge-lg`),d(At,r(`v-on:click-prevent`));let jt=t(`span`);d(Q,jt),c(jt,`badge badge-primary badge-lg`),d(jt,r(`v-on:click-self`));let Mt=t(`span`);d(Q,Mt),c(Mt,`badge badge-primary badge-lg`),d(Mt,r(`v-on:click-once`));let Nt=t(`span`);d(Q,Nt),c(Nt,`badge badge-primary badge-lg`),d(Nt,r(`v-on:click-capture`));let Pt=t(`span`);d(Q,Pt),c(Pt,`badge badge-primary badge-lg`),d(Pt,r(`v-on:wheel-passive`));let Ft=t(`span`);d(Q,Ft),c(Ft,`badge badge-primary badge-lg`),d(Ft,r(`v-on:click-ctrl`));let It=t(`span`);d(Q,It),c(It,`badge badge-primary badge-lg`),d(It,r(`v-on:click-shift`));let Lt=t(`span`);d(Q,Lt),c(Lt,`badge badge-primary badge-lg`),d(Lt,r(`v-on:click-alt`));let Rt=t(`span`);d(Q,Rt),c(Rt,`badge badge-primary badge-lg`),d(Rt,r(`v-on:click-meta`));let zt=t(`span`);d(Q,zt),c(zt,`badge badge-primary badge-lg`),d(zt,r(`v-on:click-meta-exact`));let Bt=t(`span`);d(Q,Bt),c(Bt,`badge badge-primary badge-lg`),d(Bt,r(`v-on:click-middle`));let Vt=t(`span`);d(Q,Vt),c(Vt,`badge badge-primary badge-lg`),d(Vt,r(`v-on:keyup-enter`));let Ht=t(`span`);d(Q,Ht),c(Ht,`badge badge-primary badge-lg`),d(Ht,r(`v-on:keyup-tab`));let Ut=t(`span`);d(Q,Ut),c(Ut,`badge badge-primary badge-lg`),d(Ut,r(`v-on:keyup-delete`));let Wt=t(`span`);d(Q,Wt),c(Wt,`badge badge-primary badge-lg`),d(Wt,r(`v-on:keyup-esc`));let Gt=t(`span`);d(Q,Gt),c(Gt,`badge badge-primary badge-lg`),d(Gt,r(`v-on:keyup-space`));let Kt=t(`span`);d(Q,Kt),c(Kt,`badge badge-primary badge-lg`),d(Kt,r(`v-on:keyup-up`));let qt=t(`span`);d(Q,qt),c(qt,`badge badge-primary badge-lg`),d(qt,r(`v-on:keyup-down`));let Jt=t(`span`);d(Q,Jt),c(Jt,`badge badge-primary badge-lg`),d(Jt,r(`v-on:keyup-left`));let Yt=t(`span`);d(Q,Yt),c(Yt,`badge badge-primary badge-lg`),d(Yt,r(`v-on:keyup-right`));let Xt=t(`span`);d(Q,Xt),c(Xt,`badge badge-primary badge-lg`),d(Xt,r(`v-on:keyup-13`));let Zt=t(`span`);d(Q,Zt),c(Zt,`badge badge-primary badge-lg`),d(Zt,r(`v-on:click-native-once`));let Qt=t(`section`);d(_,Qt),c(Qt,`space-y-3`);let $t=t(`h2`);d(Qt,$t),c($t,`text-xl font-semibold`),d($t,r(`最近一次事件`));let en=t(`div`);d(Qt,en),c(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=a(en);d(en,tn),f(()=>{l(tn,de.value)});let nn=t(`section`);d(_,nn),c(nn,`space-y-3`);let rn=t(`h2`);d(nn,rn),c(rn,`text-xl font-semibold`),d(rn,r(`事件日志`));let an=t(`div`);d(nn,an),c(an,`rounded-box border border-base-300 bg-base-200 p-4`);let $=t(`ul`);d(an,$),c($,`list gap-2 font-mono text-sm`);let on=o(`rue:list:start`),sn=o(`rue:list:end`);d($,on),d($,sn);let cn=new Map;return f(()=>{cn=ee({items:fe.value||[],getKey:(e,t)=>`${e}-${t}`,elements:cn,parent:$,before:sn,singleRoot:!0,start:on,renderItem:(e,r,i,o,p)=>{u(h(()=>{let r=s(),i=t(`li`);d(r,i),f(()=>{n(i,`key`,String(`${e}-${p}`))}),c(i,`list-row px-0 py-1`);let o=a(i);return d(i,o),f(()=>{l(o,e)}),r}),r,i)}})}),p}):``,T,E)}),p})}),p,g),p})};export{C as default};