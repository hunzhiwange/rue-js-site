import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,pt as ee,s as m,t as te,tt as h}from"./vapor-runtime-DHPuOjqh.js";import{a as g,i as _,n as ne}from"./vapor-helpers-vapor-CJFAWine.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./SidebarPlaygroundExample-KML-rOvA.js";var b=`import { type FC, ref } from '@rue-js/rue';

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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,ie=t=>d(n=>{let r=e(`button`,n);l(r,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let u=e(`span`,r);o(r,u);let f=c(`rue:slot:anchor`);o(u,f),s(()=>{let e=t.title;a(()=>m(e,u,f))});let p=c(`rue:slot:anchor`);return o(r,p),s(()=>{let n=t.note?d(()=>{let n=i(),r=e(`span`,n);o(n,r),l(r,`text-xs opacity-70`);let u=c(`rue:slot:anchor`);return o(r,u),s(()=>{let e=t.note;a(()=>m(e,r,u))}),n}):``;a(()=>m(n,r,p))}),r}),S=()=>{let{activeTab:S,methodPathCount:ae,keyword:oe,bubbleCount:se,stopPreventCount:ce,enterCount:le,keyCodeCount:ue,selfCount:de,metaExactCount:fe,lastEvent:pe,eventLog:me,updateLastEvent:C,onMethodPath:he,onInput:ge,onManualCall:_e,onBubbleParent:ve,onDirectiveStopPrevent:ye,onEnterDirective:be,onKeyCode13Directive:xe,onSelfOnly:Se,onMetaExact:Ce}=g(`useSetup:0:0`,()=>n(()=>{let e=g(`ref:1:0`,()=>r(`code`)),t=g(`ref:1:1`,()=>r(0)),n=g(`ref:1:2`,()=>r(`Rue`)),i=g(`ref:1:3`,()=>r(0)),a=g(`ref:1:4`,()=>r(0)),o=g(`ref:1:5`,()=>r(0)),s=g(`ref:1:6`,()=>r(0)),c=g(`ref:1:7`,()=>r(0)),l=g(`ref:1:8`,()=>r(0)),u=g(`ref:1:9`,()=>r(`等待交互`)),d=g(`ref:1:10`,()=>r([`等待交互`])),f=e=>{u.value=e,d.value=[e,...d.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:i,stopPreventCount:a,enterCount:o,keyCodeCount:s,selfCount:c,metaExactCount:l,lastEvent:u,eventLog:d,updateLastEvent:f,onMethodPath:e=>{t.value+=1,f(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,f(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{f(t?e+` -> `+t.type:e)},onBubbleParent:()=>{i.value+=1,f(`父级收到冒泡 -> 第 `+i.value+` 次`)},onDirectiveStopPrevent:e=>{a.value+=1,f(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+a.value+` 次`)},onEnterDirective:e=>{o.value+=1,f(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+o.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;s.value+=1,f(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+s.value)},onSelfOnly:e=>{c.value+=1,f(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+c.value+` 次`)},onMetaExact:e=>{l.value+=1,f(`v-on:click-meta-exact -> button `+e.button+`，第 `+l.value+` 次`)}}}));return d(n=>{let r=i(),g=c(`rue:component:anchor`);return o(r,g),m(te(y,{children:d(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,u(`v-on / r-on`));let g=e(`div`,n);o(n,g),p(g,`role`,`tablist`),l(g,`tabs tabs-box`);let y=e(`button`,g);o(g,y),p(y,`role`,`tab`),s(()=>{l(y,String(`tab ${S.value===`preview`?`tab-active`:``}`))}),t(y,`click`,()=>{S.value=`preview`}),o(y,u(`效果`));let C=e(`button`,g);o(g,C),p(C,`role`,`tab`),s(()=>{l(C,String(`tab ${S.value===`code`?`tab-active`:``}`))}),t(C,`click`,()=>{S.value=`code`}),o(C,u(`代码`));let w=e(`div`,n);o(n,w),l(w,`mt-4 grid gap-6 items-start`);let we=c(`rue:slot:anchor`);o(w,we),s(()=>{let t=S.value===`code`?d(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`grid gap-6`);let r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow overflow-auto`);let d=e(`div`,r);o(r,d),l(d,`card-body gap-3`);let f=e(`h2`,d);o(d,f),l(f,`card-title`),o(f,u(`Rue TSX 实际源码`));let p=c(`rue:component:anchor`);o(d,p),s(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:b});a(()=>m(e,d,p))});let ee=e(`div`,n);o(n,ee),l(ee,`card bg-base-100 shadow overflow-auto`);let h=e(`div`,ee);o(ee,h),l(h,`card-body gap-3`);let g=e(`h2`,h);o(h,g),l(g,`card-title`),o(g,u(`原生 TSX 对照写法`));let _=c(`rue:component:anchor`);o(h,_),s(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:re});a(()=>m(e,h,_))});let ne=e(`div`,n);o(n,ne),l(ne,`card bg-base-100 shadow overflow-auto`);let y=e(`div`,ne);o(ne,y),l(y,`card-body gap-3`);let ie=e(`h2`,y);o(y,ie),l(ie,`card-title`),o(ie,u(`修饰符速查`));let S=c(`rue:component:anchor`);return o(y,S),s(()=>{let e=te(v,{className:`h-full`,lang:`tsx`,code:x});a(()=>m(e,y,S))}),t}):``;a(()=>m(t,w,we))}),o(w,u(` `));let T=c(`rue:slot:anchor`);return o(w,T),s(()=>{let n=S.value===`preview`?d(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow`);let g=e(`div`,r);o(r,g),l(g,`card-body grid gap-6`);let v=e(`div`,g);o(g,v),p(v,`role`,`alert`),l(v,`alert alert-info`);let y=e(`span`,v);o(v,y),o(y,u(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let b=e(`div`,g);o(g,b),p(b,`role`,`alert`),l(b,`alert alert-warning alert-soft`);let re=e(`span`,b);o(b,re),o(re,u(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let x=e(`section`,g);o(g,x),l(x,`space-y-3`);let S=e(`div`,x);o(x,S),l(S,`flex flex-wrap items-center justify-between gap-3`);let C=e(`h2`,S);o(S,C),l(C,`text-xl font-semibold`),o(C,u(`v-on:click：method path 自动注入浏览器事件`));let w=e(`span`,S);o(S,w),l(w,`badge badge-primary badge-lg`);let we=h(w);o(w,we),s(()=>{f(we,ae.value)}),o(w,u(` 次`));let T=e(`div`,x);o(x,T),l(T,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let Te=e(`button`,T);o(T,Te),l(Te,`btn btn-primary`),t(Te,`click`,e=>he(e)),o(Te,u(`v-on:click="onMethodPath"`));let Ee=e(`p`,T);o(T,Ee),l(Ee,`text-sm opacity-70`),o(Ee,u(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let E=e(`section`,g);o(g,E),l(E,`space-y-3`);let D=e(`div`,E);o(E,D),l(D,`flex flex-wrap items-center justify-between gap-3`);let De=e(`h2`,D);o(D,De),l(De,`text-xl font-semibold`),o(De,u(`v-on:click：method() / method($event)`));let Oe=e(`span`,D);o(D,Oe),l(Oe,`badge badge-outline badge-lg`),o(Oe,u(`last call`));let O=e(`div`,E);o(E,O),l(O,`grid gap-3 md:grid-cols-2`);let ke=e(`button`,O);o(O,ke),l(ke,`btn btn-secondary`),t(ke,`click`,e=>_e(`method() 不自动注入 event`)),o(ke,u(`method()`));let Ae=e(`button`,O);o(O,Ae),l(Ae,`btn btn-accent`),t(Ae,`click`,e=>_e(`method($event) 显式注入`,e)),o(Ae,u(`method($event)`));let k=e(`section`,g);o(g,k),l(k,`space-y-3`);let je=e(`div`,k);o(k,je),l(je,`flex flex-wrap items-center justify-between gap-3`);let Me=e(`h2`,je);o(je,Me),l(Me,`text-xl font-semibold`),o(Me,u(`r-on:input：直接复用标准输入事件`));let Ne=e(`span`,je);o(je,Ne),l(Ne,`badge badge-outline badge-lg`),o(Ne,u(`长度 `));let Pe=c(`rue:slot:anchor`);o(Ne,Pe),s(()=>{let e=oe.value.length;a(()=>m(e,Ne,Pe))});let Fe=e(`div`,k);o(k,Fe),l(Fe,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Ie=e(`input`,Fe);o(Fe,Ie),l(Ie,`input input-bordered w-full`),s(()=>{ee(Ie,oe.value)}),t(Ie,`input`,e=>ge(e));let A=e(`div`,Fe);o(Fe,A),l(A,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let j=e(`div`,A);o(A,j),l(j,`stat`);let Le=e(`div`,j);o(j,Le),l(Le,`stat-title`),o(Le,u(`当前值`));let Re=e(`div`,j);o(j,Re),l(Re,`stat-value text-2xl`);let ze=h(Re);o(Re,ze),s(()=>{f(ze,oe.value||`空`)});let M=e(`div`,A);o(A,M),l(M,`stat`);let Be=e(`div`,M);o(M,Be),l(Be,`stat-title`),o(Be,u(`大写预览`));let Ve=e(`div`,M);o(M,Ve),l(Ve,`stat-value text-2xl`);let He=h(Ve);o(Ve,He),s(()=>{f(He,oe.value.toUpperCase()||`EMPTY`)});let N=e(`section`,g);o(g,N),l(N,`space-y-3`);let P=e(`div`,N);o(N,P),l(P,`flex flex-wrap items-center justify-between gap-3`);let Ue=e(`h2`,P);o(P,Ue),l(Ue,`text-xl font-semibold`),o(Ue,u(`v-on:click-stop-prevent`));let F=e(`div`,P);o(P,F),l(F,`flex flex-wrap gap-2`);let We=e(`span`,F);o(F,We),l(We,`badge badge-warning badge-lg`),o(We,u(`bubble `));let Ge=h(We);o(We,Ge),s(()=>{f(Ge,se.value)});let Ke=e(`span`,F);o(F,Ke),l(Ke,`badge badge-success badge-lg`),o(Ke,u(`stop/prevent `));let qe=h(Ke);o(Ke,qe),s(()=>{f(qe,ce.value)});let I=e(`div`,N);o(N,I),l(I,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),t(I,`click`,e=>ve(e));let Je=e(`a`,I);o(I,Je),l(Je,`link link-primary`),p(Je,`href`,`#compiled-stop-prevent`),t(Je,`click`,_(e=>ye(e),[`stop`,`prevent`])),o(Je,u(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Ye=e(`p`,I);o(I,Ye),l(Ye,`text-sm opacity-70`),o(Ye,u(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let L=e(`section`,g);o(g,L),l(L,`space-y-3`);let R=e(`div`,L);o(L,R),l(R,`flex flex-wrap items-center justify-between gap-3`);let Xe=e(`h2`,R);o(R,Xe),l(Xe,`text-xl font-semibold`),o(Xe,u(`v-on:keyup-enter / v-on:keyup-13`));let z=e(`div`,R);o(R,z),l(z,`flex flex-wrap gap-2`);let Ze=e(`span`,z);o(z,Ze),l(Ze,`badge badge-accent badge-lg`),o(Ze,u(`enter `));let Qe=h(Ze);o(Ze,Qe),s(()=>{f(Qe,le.value)});let $e=e(`span`,z);o(z,$e),l($e,`badge badge-neutral badge-lg`),o($e,u(`13 `));let et=h($e);o($e,et),s(()=>{f(et,ue.value)});let B=e(`div`,L);o(L,B),l(B,`grid gap-3 md:grid-cols-2`);let V=e(`label`,B);o(B,V),l(V,`floating-label`);let tt=e(`input`,V);o(V,tt),l(tt,`input input-bordered`),p(tt,`placeholder`,`按 Enter`),t(tt,`keyup`,_(e=>be(e),[`enter`]));let nt=e(`span`,V);o(V,nt),o(nt,u(`v-on:keyup-enter="onEnterDirective"`));let H=e(`label`,B);o(B,H),l(H,`floating-label`);let rt=e(`input`,H);o(H,rt),l(rt,`input input-bordered`),p(rt,`placeholder`,`按 Enter`),t(rt,`keyup`,_(e=>xe(e),[`13`]));let it=e(`span`,H);o(H,it),o(it,u(`v-on:keyup-13="onKeyCode13Directive"`));let U=e(`section`,g);o(g,U),l(U,`space-y-3`);let W=e(`div`,U);o(U,W),l(W,`flex flex-wrap items-center justify-between gap-3`);let at=e(`h2`,W);o(W,at),l(at,`text-xl font-semibold`),o(at,u(`v-on:click-self / v-on:click-meta-exact`));let G=e(`div`,W);o(W,G),l(G,`flex flex-wrap gap-2`);let ot=e(`span`,G);o(G,ot),l(ot,`badge badge-info badge-lg`),o(ot,u(`self `));let st=h(ot);o(ot,st),s(()=>{f(st,de.value)});let ct=e(`span`,G);o(G,ct),l(ct,`badge badge-info badge-lg`),o(ct,u(`meta.exact `));let lt=h(ct);o(ct,lt),s(()=>{f(lt,fe.value)});let K=e(`div`,U);o(U,K),l(K,`grid gap-4 md:grid-cols-2`);let q=e(`div`,K);o(K,q),l(q,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),t(q,`click`,_(e=>Se(e),[`self`]));let ut=e(`p`,q);o(q,ut),l(ut,`font-medium`),o(ut,u(`v-on:click-self="onSelfOnly"`));let dt=e(`p`,q);o(q,dt),l(dt,`text-sm opacity-70`),o(dt,u(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let ft=e(`button`,q);o(q,ft),l(ft,`btn btn-ghost btn-sm`),o(ft,u(`子元素按钮`));let pt=e(`button`,K);o(K,pt),l(pt,`btn btn-info`),t(pt,`click`,_(e=>Ce(e),[`meta`,`exact`])),o(pt,u(`v-on:click-meta-exact：按住 Command 点击`));let J=e(`section`,g);o(g,J),l(J,`space-y-3`);let Y=e(`div`,J);o(J,Y),l(Y,`flex flex-wrap items-center justify-between gap-3`);let mt=e(`h2`,Y);o(Y,mt),l(mt,`text-xl font-semibold`),o(mt,u(`v-on:click-native-once`));let ht=e(`span`,Y);o(Y,ht),l(ht,`badge badge-secondary badge-lg`),o(ht,u(`code path`));let X=e(`div`,J);o(J,X),l(X,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Z=e(`div`,X);o(X,Z),l(Z,`mockup-code text-sm`);let gt=e(`pre`,Z);o(Z,gt),p(gt,`data-prefix`,`1`);let _t=e(`code`,gt);o(gt,_t);let vt=h(_t);o(_t,vt),f(vt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let yt=e(`pre`,Z);o(Z,yt),p(yt,`data-prefix`,`2`);let bt=e(`code`,yt);o(yt,bt);let xt=h(bt);o(bt,xt),f(xt,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let St=e(`pre`,Z);o(Z,St),p(St,`data-prefix`,`3`);let Ct=e(`code`,St);o(St,Ct);let wt=h(Ct);o(Ct,wt),f(wt,`// native + once 仍然属于同一条修饰符编译链`);let Q=e(`div`,X);o(X,Q),l(Q,`grid gap-3`);let Tt=c(`rue:component:anchor`);o(Q,Tt),m(te(ie,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),Q,Tt);let Et=e(`p`,Q);o(Q,Et),l(Et,`text-sm opacity-70`),o(Et,u(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Dt=e(`section`,g);o(g,Dt),l(Dt,`space-y-3`);let Ot=e(`h2`,Dt);o(Dt,Ot),l(Ot,`text-xl font-semibold`),o(Ot,u(`修饰符速查`));let $=e(`div`,Dt);o(Dt,$),l($,`flex flex-wrap gap-2`);let kt=e(`span`,$);o($,kt),l(kt,`badge badge-primary badge-lg`),o(kt,u(`v-on:click-stop`));let At=e(`span`,$);o($,At),l(At,`badge badge-primary badge-lg`),o(At,u(`v-on:click-prevent`));let jt=e(`span`,$);o($,jt),l(jt,`badge badge-primary badge-lg`),o(jt,u(`v-on:click-self`));let Mt=e(`span`,$);o($,Mt),l(Mt,`badge badge-primary badge-lg`),o(Mt,u(`v-on:click-once`));let Nt=e(`span`,$);o($,Nt),l(Nt,`badge badge-primary badge-lg`),o(Nt,u(`v-on:click-capture`));let Pt=e(`span`,$);o($,Pt),l(Pt,`badge badge-primary badge-lg`),o(Pt,u(`v-on:wheel-passive`));let Ft=e(`span`,$);o($,Ft),l(Ft,`badge badge-primary badge-lg`),o(Ft,u(`v-on:click-ctrl`));let It=e(`span`,$);o($,It),l(It,`badge badge-primary badge-lg`),o(It,u(`v-on:click-shift`));let Lt=e(`span`,$);o($,Lt),l(Lt,`badge badge-primary badge-lg`),o(Lt,u(`v-on:click-alt`));let Rt=e(`span`,$);o($,Rt),l(Rt,`badge badge-primary badge-lg`),o(Rt,u(`v-on:click-meta`));let zt=e(`span`,$);o($,zt),l(zt,`badge badge-primary badge-lg`),o(zt,u(`v-on:click-meta-exact`));let Bt=e(`span`,$);o($,Bt),l(Bt,`badge badge-primary badge-lg`),o(Bt,u(`v-on:click-middle`));let Vt=e(`span`,$);o($,Vt),l(Vt,`badge badge-primary badge-lg`),o(Vt,u(`v-on:keyup-enter`));let Ht=e(`span`,$);o($,Ht),l(Ht,`badge badge-primary badge-lg`),o(Ht,u(`v-on:keyup-tab`));let Ut=e(`span`,$);o($,Ut),l(Ut,`badge badge-primary badge-lg`),o(Ut,u(`v-on:keyup-delete`));let Wt=e(`span`,$);o($,Wt),l(Wt,`badge badge-primary badge-lg`),o(Wt,u(`v-on:keyup-esc`));let Gt=e(`span`,$);o($,Gt),l(Gt,`badge badge-primary badge-lg`),o(Gt,u(`v-on:keyup-space`));let Kt=e(`span`,$);o($,Kt),l(Kt,`badge badge-primary badge-lg`),o(Kt,u(`v-on:keyup-up`));let qt=e(`span`,$);o($,qt),l(qt,`badge badge-primary badge-lg`),o(qt,u(`v-on:keyup-down`));let Jt=e(`span`,$);o($,Jt),l(Jt,`badge badge-primary badge-lg`),o(Jt,u(`v-on:keyup-left`));let Yt=e(`span`,$);o($,Yt),l(Yt,`badge badge-primary badge-lg`),o(Yt,u(`v-on:keyup-right`));let Xt=e(`span`,$);o($,Xt),l(Xt,`badge badge-primary badge-lg`),o(Xt,u(`v-on:keyup-13`));let Zt=e(`span`,$);o($,Zt),l(Zt,`badge badge-primary badge-lg`),o(Zt,u(`v-on:click-native-once`));let Qt=e(`section`,g);o(g,Qt),l(Qt,`space-y-3`);let $t=e(`h2`,Qt);o(Qt,$t),l($t,`text-xl font-semibold`),o($t,u(`最近一次事件`));let en=e(`div`,Qt);o(Qt,en),l(en,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let tn=h(en);o(en,tn),s(()=>{f(tn,pe.value)});let nn=e(`section`,g);o(g,nn),l(nn,`space-y-3`);let rn=e(`h2`,nn);o(nn,rn),l(rn,`text-xl font-semibold`),o(rn,u(`事件日志`));let an=e(`div`,nn);o(nn,an),l(an,`rounded-box border border-base-300 bg-base-200 p-4`);let on=e(`ul`,an);o(an,on),l(on,`list gap-2 font-mono text-sm`);let sn=c(`rue:list:start`),cn=c(`rue:list:end`);o(on,sn),o(on,cn);let ln=new Map;return s(()=>{ln=ne({items:me.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:on,before:cn,singleRoot:!0,start:sn,renderItem:(t,n,r,a,c)=>{m(d(()=>{let n=i(),r=e(`li`,n);o(n,r),s(()=>{p(r,`key`,String(`${t}-${c}`))}),l(r,`list-row px-0 py-1`);let a=h(r);return o(r,a),s(()=>{f(a,t)}),n}),n,r)}})}),n}):``;a(()=>m(n,w,T))}),n})}),r,g),r})};export{S as default};