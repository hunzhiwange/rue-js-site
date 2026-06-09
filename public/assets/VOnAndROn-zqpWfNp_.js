import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,pt as ee,qt as p,s as m,t as te,tt as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g,i as _,n as ne}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as v}from"./Code-5DOEyGxf.js";import{r as y}from"./SidebarPlaygroundExample-cASgDpH3.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,ie=n=>u(i=>{let l=e(`button`,i);c(l,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let d=e(`span`,l);o(l,d);let f=s(`rue:slot:anchor`);o(d,f),a(()=>{let e=n.title;t(()=>m(e,d,f))});let ee=s(`rue:slot:anchor`);return o(l,ee),a(()=>{let i=n.note?u(()=>{let i=r(),l=e(`span`,i);o(i,l),c(l,`text-xs opacity-70`);let u=s(`rue:slot:anchor`);return o(l,u),a(()=>{let e=n.note;t(()=>m(e,l,u))}),i}):``;t(()=>m(i,l,ee))}),l}),S=()=>{let{activeTab:S,methodPathCount:ae,keyword:oe,bubbleCount:se,stopPreventCount:ce,enterCount:le,keyCodeCount:ue,selfCount:de,metaExactCount:fe,lastEvent:pe,eventLog:me,updateLastEvent:C,onMethodPath:he,onInput:ge,onManualCall:_e,onBubbleParent:ve,onDirectiveStopPrevent:ye,onEnterDirective:be,onKeyCode13Directive:xe,onSelfOnly:Se,onMetaExact:Ce}=g(`useSetup:0:0`,()=>p(()=>{let e=g(`ref:1:0`,()=>i(`code`)),t=g(`ref:1:1`,()=>i(0)),n=g(`ref:1:2`,()=>i(`Rue`)),r=g(`ref:1:3`,()=>i(0)),a=g(`ref:1:4`,()=>i(0)),o=g(`ref:1:5`,()=>i(0)),s=g(`ref:1:6`,()=>i(0)),c=g(`ref:1:7`,()=>i(0)),l=g(`ref:1:8`,()=>i(0)),u=g(`ref:1:9`,()=>i(`等待交互`)),d=g(`ref:1:10`,()=>i([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:a,enterCount:o,keyCodeCount:s,selfCount:c,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,f(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,f(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{a.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+a.value+` 次`)},onEnterDirective:e=>{o.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+o.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;s.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+s.value)},onSelfOnly:e=>{c.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+c.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return u(i=>{let p=r(),g=s(`rue:component:anchor`);return o(p,g),m(te(y,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`v-on / r-on`));let g=e(`div`,i);o(i,g),f(g,`role`,`tablist`),c(g,`tabs tabs-box`);let y=e(`button`,g);o(g,y),f(y,`role`,`tab`),a(()=>{c(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),n(y,`click`,()=>{S.value=`preview`}),o(y,l(`效果`));let C=e(`button`,g);o(g,C),f(C,`role`,`tab`),a(()=>{c(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),n(C,`click`,()=>{S.value=`code`}),o(C,l(`代码`));let w=e(`div`,i);o(i,w),c(w,`mt-4 grid gap-6 items-start`);let we=s(`rue:slot:anchor`);o(w,we),a(()=>{let n=S.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`grid gap-6`);let u=e(`div`,i);o(i,u),c(u,`card bg-base-100 shadow overflow-auto`);let d=e(`div`,u);o(u,d),c(d,`card-body gap-3`);let f=e(`h2`,d);o(d,f),c(f,`card-title`),o(f,l(`Rue TSX 实际源码`));let ee=s(`rue:component:anchor`);o(d,ee),a(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:b});t(()=>m(e,d,ee))});let p=e(`div`,i);o(i,p),c(p,`card bg-base-100 shadow overflow-auto`);let h=e(`div`,p);o(p,h),c(h,`card-body gap-3`);let g=e(`h2`,h);o(h,g),c(g,`card-title`),o(g,l(`原生 TSX 对照写法`));let _=s(`rue:component:anchor`);o(h,_),a(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:re});t(()=>m(e,h,_))});let ne=e(`div`,i);o(i,ne),c(ne,`card bg-base-100 shadow overflow-auto`);let y=e(`div`,ne);o(ne,y),c(y,`card-body gap-3`);let ie=e(`h2`,y);o(y,ie),c(ie,`card-title`),o(ie,l(`修饰符速查`));let S=s(`rue:component:anchor`);return o(y,S),a(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:x});t(()=>m(e,y,S))}),n}):``;t(()=>m(n,w,we))}),o(w,l(` `));let T=s(`rue:slot:anchor`);return o(w,T),a(()=>{let i=S.value===`preview`?u(()=>{let i=r(),p=e(`div`,i);o(i,p),c(p,`card bg-base-100 shadow`);let g=e(`div`,p);o(p,g),c(g,`card-body grid gap-6`);let v=e(`div`,g);o(g,v),f(v,`role`,`alert`),c(v,`alert alert-info`);let y=e(`span`,v);o(v,y),o(y,l(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let b=e(`div`,g);o(g,b),f(b,`role`,`alert`),c(b,`alert alert-warning alert-soft`);let re=e(`span`,b);o(b,re),o(re,l(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let x=e(`section`,g);o(g,x),c(x,`space-y-3`);let S=e(`div`,x);o(x,S),c(S,`flex flex-wrap items-center justify-between gap-3`);let C=e(`h2`,S);o(S,C),c(C,`text-xl font-semibold`),o(C,l(`v-on:click：method path 自动注入浏览器事件`));let w=e(`span`,S);o(S,w),c(w,`badge badge-primary badge-lg`);let we=h(w);o(w,we),a(()=>{d(we,ae.value)}),o(w,l(` 次`));let T=e(`div`,x);o(x,T),c(T,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Te=e(`button`,T);o(T,Te),c(Te,`btn btn-primary`),n(Te,`click`,e=>he(e)),o(Te,l(`v-on:click="onMethodPath"`));let Ee=e(`p`,T);o(T,Ee),c(Ee,`text-sm opacity-70`),o(Ee,l(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let E=e(`section`,g);o(g,E),c(E,`space-y-3`);let D=e(`div`,E);o(E,D),c(D,`flex flex-wrap items-center justify-between gap-3`);let De=e(`h2`,D);o(D,De),c(De,`text-xl font-semibold`),o(De,l(`v-on:click：method() / method($event)`));let Oe=e(`span`,D);o(D,Oe),c(Oe,`badge badge-outline badge-lg`),o(Oe,l(`last call`));let O=e(`div`,E);o(E,O),c(O,`grid gap-3 md:grid-cols-2`);let ke=e(`button`,O);o(O,ke),c(ke,`btn btn-secondary`),n(ke,`click`,e=>_e(`method() 不自动注入 event`)),o(ke,l(`method()`));let Ae=e(`button`,O);o(O,Ae),c(Ae,`btn btn-accent`),n(Ae,`click`,e=>_e(`method($event) 显式注入`,e)),o(Ae,l(`method($event)`));let k=e(`section`,g);o(g,k),c(k,`space-y-3`);let je=e(`div`,k);o(k,je),c(je,`flex flex-wrap items-center justify-between gap-3`);let Me=e(`h2`,je);o(je,Me),c(Me,`text-xl font-semibold`),o(Me,l(`r-on:input：直接复用标准输入事件`));let Ne=e(`span`,je);o(je,Ne),c(Ne,`badge badge-outline badge-lg`),o(Ne,l(`长度 `));let Pe=s(`rue:slot:anchor`);o(Ne,Pe),a(()=>{let e=oe.value.length;t(()=>m(e,Ne,Pe))});let Fe=e(`div`,k);o(k,Fe),c(Fe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Ie=e(`input`,Fe);o(Fe,Ie),c(Ie,`input input-bordered w-full`),a(()=>{ee(Ie,oe.value)}),n(Ie,`input`,e=>ge(e));let A=e(`div`,Fe);o(Fe,A),c(A,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let j=e(`div`,A);o(A,j),c(j,`stat`);let Le=e(`div`,j);o(j,Le),c(Le,`stat-title`),o(Le,l(`当前值`));let Re=e(`div`,j);o(j,Re),c(Re,`stat-value text-2xl`);let ze=h(Re);o(Re,ze),a(()=>{d(ze,oe.value||`空`)});let M=e(`div`,A);o(A,M),c(M,`stat`);let Be=e(`div`,M);o(M,Be),c(Be,`stat-title`),o(Be,l(`大写预览`));let Ve=e(`div`,M);o(M,Ve),c(Ve,`stat-value text-2xl`);let He=h(Ve);o(Ve,He),a(()=>{d(He,oe.value.toUpperCase()||`EMPTY`)});let N=e(`section`,g);o(g,N),c(N,`space-y-3`);let P=e(`div`,N);o(N,P),c(P,`flex flex-wrap items-center justify-between gap-3`);let Ue=e(`h2`,P);o(P,Ue),c(Ue,`text-xl font-semibold`),o(Ue,l(`v-on:click-stop-prevent`));let F=e(`div`,P);o(P,F),c(F,`flex flex-wrap gap-2`);let We=e(`span`,F);o(F,We),c(We,`badge badge-warning badge-lg`),o(We,l(`bubble `));let Ge=h(We);o(We,Ge),a(()=>{d(Ge,se.value)});let Ke=e(`span`,F);o(F,Ke),c(Ke,`badge badge-success badge-lg`),o(Ke,l(`stop/prevent `));let qe=h(Ke);o(Ke,qe),a(()=>{d(qe,ce.value)});let I=e(`div`,N);o(N,I),c(I,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),n(I,`click`,e=>ve(e));let Je=e(`a`,I);o(I,Je),c(Je,`link link-primary`),f(Je,`href`,`#compiled-stop-prevent`),n(Je,`click`,_(e=>ye(e),[`stop`,`prevent`])),o(Je,l(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Ye=e(`p`,I);o(I,Ye),c(Ye,`text-sm opacity-70`),o(Ye,l(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let L=e(`section`,g);o(g,L),c(L,`space-y-3`);let R=e(`div`,L);o(L,R),c(R,`flex flex-wrap items-center justify-between gap-3`);let Xe=e(`h2`,R);o(R,Xe),c(Xe,`text-xl font-semibold`),o(Xe,l(`v-on:keyup-enter / v-on:keyup-13`));let z=e(`div`,R);o(R,z),c(z,`flex flex-wrap gap-2`);let Ze=e(`span`,z);o(z,Ze),c(Ze,`badge badge-accent badge-lg`),o(Ze,l(`enter `));let Qe=h(Ze);o(Ze,Qe),a(()=>{d(Qe,le.value)});let $e=e(`span`,z);o(z,$e),c($e,`badge badge-neutral badge-lg`),o($e,l(`13 `));let et=h($e);o($e,et),a(()=>{d(et,ue.value)});let B=e(`div`,L);o(L,B),c(B,`grid gap-3 md:grid-cols-2`);let V=e(`label`,B);o(B,V),c(V,`floating-label`);let tt=e(`input`,V);o(V,tt),c(tt,`input input-bordered`),f(tt,`placeholder`,`按 Enter`),n(tt,`keyup`,_(e=>be(e),[`enter`]));let nt=e(`span`,V);o(V,nt),o(nt,l(`v-on:keyup-enter="onEnterDirective"`));let H=e(`label`,B);o(B,H),c(H,`floating-label`);let rt=e(`input`,H);o(H,rt),c(rt,`input input-bordered`),f(rt,`placeholder`,`按 Enter`),n(rt,`keyup`,_(e=>xe(e),[`13`]));let it=e(`span`,H);o(H,it),o(it,l(`v-on:keyup-13="onKeyCode13Directive"`));let U=e(`section`,g);o(g,U),c(U,`space-y-3`);let W=e(`div`,U);o(U,W),c(W,`flex flex-wrap items-center justify-between gap-3`);let at=e(`h2`,W);o(W,at),c(at,`text-xl font-semibold`),o(at,l(`v-on:click-self / v-on:click-meta-exact`));let G=e(`div`,W);o(W,G),c(G,`flex flex-wrap gap-2`);let ot=e(`span`,G);o(G,ot),c(ot,`badge badge-info badge-lg`),o(ot,l(`self `));let st=h(ot);o(ot,st),a(()=>{d(st,de.value)});let ct=e(`span`,G);o(G,ct),c(ct,`badge badge-info badge-lg`),o(ct,l(`meta.exact `));let lt=h(ct);o(ct,lt),a(()=>{d(lt,fe.value)});let K=e(`div`,U);o(U,K),c(K,`grid gap-4 md:grid-cols-2`);let q=e(`div`,K);o(K,q),c(q,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),n(q,`click`,_(e=>Se(e),[`self`]));let ut=e(`p`,q);o(q,ut),c(ut,`font-medium`),o(ut,l(`v-on:click-self="onSelfOnly"`));let dt=e(`p`,q);o(q,dt),c(dt,`text-sm opacity-70`),o(dt,l(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let ft=e(`button`,q);o(q,ft),c(ft,`btn btn-ghost btn-sm`),o(ft,l(`子元素按钮`));let pt=e(`button`,K);o(K,pt),c(pt,`btn btn-info`),n(pt,`click`,_(e=>Ce(e),[`meta`,`exact`])),o(pt,l(`v-on:click-meta-exact：按住 Command 点击`));let J=e(`section`,g);o(g,J),c(J,`space-y-3`);let Y=e(`div`,J);o(J,Y),c(Y,`flex flex-wrap items-center justify-between gap-3`);let mt=e(`h2`,Y);o(Y,mt),c(mt,`text-xl font-semibold`),o(mt,l(`v-on:click-native-once`));let ht=e(`span`,Y);o(Y,ht),c(ht,`badge badge-secondary badge-lg`),o(ht,l(`code path`));let X=e(`div`,J);o(J,X),c(X,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Z=e(`div`,X);o(X,Z),c(Z,`mockup-code text-sm`);let gt=e(`pre`,Z);o(Z,gt),f(gt,`data-prefix`,`1`);let _t=e(`code`,gt);o(gt,_t);let vt=h(_t);o(_t,vt),d(vt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let yt=e(`pre`,Z);o(Z,yt),f(yt,`data-prefix`,`2`);let bt=e(`code`,yt);o(yt,bt);let xt=h(bt);o(bt,xt),d(xt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let St=e(`pre`,Z);o(Z,St),f(St,`data-prefix`,`3`);let Ct=e(`code`,St);o(St,Ct);let wt=h(Ct);o(Ct,wt),d(wt,`// native + once 仍然属于同一条修饰符编译链`);let Q=e(`div`,X);o(X,Q),c(Q,`grid gap-3`);let Tt=s(`rue:component:anchor`);o(Q,Tt),m(te(ie,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),Q,Tt);let Et=e(`p`,Q);o(Q,Et),c(Et,`text-sm opacity-70`),o(Et,l(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=e(`section`,g);o(g,Dt),c(Dt,`space-y-3`);let Ot=e(`h2`,Dt);o(Dt,Ot),c(Ot,`text-xl font-semibold`),o(Ot,l(`修饰符速查`));let $=e(`div`,Dt);o(Dt,$),c($,`flex flex-wrap gap-2`);let kt=e(`span`,$);o($,kt),c(kt,`badge badge-primary badge-lg`),o(kt,l(`v-on:click-stop`));let At=e(`span`,$);o($,At),c(At,`badge badge-primary badge-lg`),o(At,l(`v-on:click-prevent`));let jt=e(`span`,$);o($,jt),c(jt,`badge badge-primary badge-lg`),o(jt,l(`v-on:click-self`));let Mt=e(`span`,$);o($,Mt),c(Mt,`badge badge-primary badge-lg`),o(Mt,l(`v-on:click-once`));let Nt=e(`span`,$);o($,Nt),c(Nt,`badge badge-primary badge-lg`),o(Nt,l(`v-on:click-capture`));let Pt=e(`span`,$);o($,Pt),c(Pt,`badge badge-primary badge-lg`),o(Pt,l(`v-on:wheel-passive`));let Ft=e(`span`,$);o($,Ft),c(Ft,`badge badge-primary badge-lg`),o(Ft,l(`v-on:click-ctrl`));let It=e(`span`,$);o($,It),c(It,`badge badge-primary badge-lg`),o(It,l(`v-on:click-shift`));let Lt=e(`span`,$);o($,Lt),c(Lt,`badge badge-primary badge-lg`),o(Lt,l(`v-on:click-alt`));let Rt=e(`span`,$);o($,Rt),c(Rt,`badge badge-primary badge-lg`),o(Rt,l(`v-on:click-meta`));let zt=e(`span`,$);o($,zt),c(zt,`badge badge-primary badge-lg`),o(zt,l(`v-on:click-meta-exact`));let Bt=e(`span`,$);o($,Bt),c(Bt,`badge badge-primary badge-lg`),o(Bt,l(`v-on:click-middle`));let Vt=e(`span`,$);o($,Vt),c(Vt,`badge badge-primary badge-lg`),o(Vt,l(`v-on:keyup-enter`));let Ht=e(`span`,$);o($,Ht),c(Ht,`badge badge-primary badge-lg`),o(Ht,l(`v-on:keyup-tab`));let Ut=e(`span`,$);o($,Ut),c(Ut,`badge badge-primary badge-lg`),o(Ut,l(`v-on:keyup-delete`));let Wt=e(`span`,$);o($,Wt),c(Wt,`badge badge-primary badge-lg`),o(Wt,l(`v-on:keyup-esc`));let Gt=e(`span`,$);o($,Gt),c(Gt,`badge badge-primary badge-lg`),o(Gt,l(`v-on:keyup-space`));let Kt=e(`span`,$);o($,Kt),c(Kt,`badge badge-primary badge-lg`),o(Kt,l(`v-on:keyup-up`));let qt=e(`span`,$);o($,qt),c(qt,`badge badge-primary badge-lg`),o(qt,l(`v-on:keyup-down`));let Jt=e(`span`,$);o($,Jt),c(Jt,`badge badge-primary badge-lg`),o(Jt,l(`v-on:keyup-left`));let Yt=e(`span`,$);o($,Yt),c(Yt,`badge badge-primary badge-lg`),o(Yt,l(`v-on:keyup-right`));let Xt=e(`span`,$);o($,Xt),c(Xt,`badge badge-primary badge-lg`),o(Xt,l(`v-on:keyup-13`));let Zt=e(`span`,$);o($,Zt),c(Zt,`badge badge-primary badge-lg`),o(Zt,l(`v-on:click-native-once`));let Qt=e(`section`,g);o(g,Qt),c(Qt,`space-y-3`);let $t=e(`h2`,Qt);o(Qt,$t),c($t,`text-xl font-semibold`),o($t,l(`最近一次事件`));let en=e(`div`,Qt);o(Qt,en),c(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=h(en);o(en,tn),a(()=>{d(tn,pe.value)});let nn=e(`section`,g);o(g,nn),c(nn,`space-y-3`);let rn=e(`h2`,nn);o(nn,rn),c(rn,`text-xl font-semibold`),o(rn,l(`事件日志`));let an=e(`div`,nn);o(nn,an),c(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=e(`ul`,an);o(an,on),c(on,`list gap-2 font-mono text-sm`);let sn=s(`rue:list:start`),cn=s(`rue:list:end`);o(on,sn),o(on,cn);let ln=new Map;return a(()=>{ln=ne({items:me.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(t,n,i,s,l)=>{m(u(()=>{let n=r(),i=e(`li`,n);o(n,i),a(()=>{f(i,`key`,String(`${t}-${l}`))}),c(i,`list-row px-0 py-1`);let s=h(i);return o(i,s),a(()=>{d(s,t)}),n}),n,i)}})}),i}):``;t(()=>m(i,w,T))}),i})}),p,g),p})};export{S as default};