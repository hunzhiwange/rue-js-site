import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,X as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v,i as y,n as b}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./Code-2C2psoH3.js";import{t as S}from"./SidebarPlaygroundExample-DKa0aI1C.js";var C=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,ee=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,w=`// Rue TSX 可直接写入的修饰符写法
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

// once / capture / passive 通常需要组件内部自行管理 addEventListener options。`,te=r=>_(()=>{let o=n(`button`);t(o,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let s=n(`span`);i(o,s);let c=a(`rue:slot:anchor`);i(s,c),d(()=>{let e=r.title;h(()=>f(e,s,c))});let l=a(`rue:slot:anchor`);return i(o,l),d(()=>{let s=r.note?_(()=>{let o=e(),s=n(`span`);i(o,s),t(s,`text-xs opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),d(()=>{let e=r.note;h(()=>f(e,s,c))}),o}):``;h(()=>f(s,o,l))}),o}),T=()=>{let{activeTab:T,methodPathCount:ne,keyword:E,bubbleCount:re,stopPreventCount:ie,enterCount:ae,keyCodeCount:oe,selfCount:se,metaExactCount:ce,lastEvent:le,eventLog:ue,updateLastEvent:D,onMethodPath:de,onInput:fe,onManualCall:pe,onBubbleParent:me,onDirectiveStopPrevent:he,onEnterDirective:ge,onKeyCode13Directive:_e,onSelfOnly:ve,onMetaExact:ye}=v(`useSetup:0:0`,()=>u(()=>{let e=v(`ref:1:0`,()=>m(`code`)),t=v(`ref:1:1`,()=>m(0)),n=v(`ref:1:2`,()=>m(`Rue`)),r=v(`ref:1:3`,()=>m(0)),i=v(`ref:1:4`,()=>m(0)),a=v(`ref:1:5`,()=>m(0)),o=v(`ref:1:6`,()=>m(0)),s=v(`ref:1:7`,()=>m(0)),c=v(`ref:1:8`,()=>m(0)),l=v(`ref:1:9`,()=>m(`等待交互`)),u=v(`ref:1:10`,()=>m([`等待交互`])),d=e=>{l.value=e,u.value=[e,...u.value].slice(0,8)};return{activeTab:e,methodPathCount:t,keyword:n,bubbleCount:r,stopPreventCount:i,enterCount:a,keyCodeCount:o,selfCount:s,metaExactCount:c,lastEvent:l,eventLog:u,updateLastEvent:d,onMethodPath:e=>{t.value+=1,d(`v-on:click -> `+e.type+` #`+t.value)},onInput:e=>{n.value=e.target.value,d(`r-on:input -> `+(n.value||`空字符串`))},onManualCall:(e,t)=>{d(t?e+` -> `+t.type:e)},onBubbleParent:()=>{r.value+=1,d(`父级收到冒泡 -> 第 `+r.value+` 次`)},onDirectiveStopPrevent:e=>{i.value+=1,d(`v-on:click-stop-prevent -> 已阻止 `+(e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`)+`，第 `+i.value+` 次`)},onEnterDirective:e=>{a.value+=1,d(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+a.value)},onKeyCode13Directive:e=>{let t=e.keyCode??e.which;o.value+=1,d(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+o.value)},onSelfOnly:e=>{s.value+=1,d(`v-on:click-self -> target `+(e.target?.tagName.toLowerCase()??`unknown`)+`，第 `+s.value+` 次`)},onMetaExact:e=>{c.value+=1,d(`v-on:click-meta-exact -> button `+e.button+`，第 `+c.value+` 次`)}}}));return _(()=>{let u=e(),m=a(`rue:component:anchor`);return i(u,m),f(g(S,{children:_(()=>{let u=e(),m=n(`h1`);i(u,m),t(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,r(`v-on / r-on`));let v=n(`div`);i(u,v),s(v,`role`,`tablist`),t(v,`tabs tabs-box`);let S=n(`button`);i(v,S),s(S,`role`,`tab`),d(()=>{t(S,String(`tab ${T.value===`preview`?`tab-active`:``}`))}),p(S,`click`,()=>{T.value=`preview`}),i(S,r(`效果`));let D=n(`button`);i(v,D),s(D,`role`,`tab`),d(()=>{t(D,String(`tab ${T.value===`code`?`tab-active`:``}`))}),p(D,`click`,()=>{T.value=`code`}),i(D,r(`代码`));let O=n(`div`);i(u,O),t(O,`mt-4 grid gap-6 items-start`);let k=a(`rue:slot:anchor`);i(O,k),d(()=>{let o=T.value===`code`?_(()=>{let o=e(),s=n(`div`);i(o,s),t(s,`grid gap-6`);let c=n(`div`);i(s,c),t(c,`card bg-base-100 shadow overflow-auto`);let l=n(`div`);i(c,l),t(l,`card-body gap-3`);let u=n(`h2`);i(l,u),t(u,`card-title`),i(u,r(`Rue TSX 实际源码`));let p=a(`rue:component:anchor`);i(l,p),d(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:C});h(()=>f(e,l,p))});let m=n(`div`);i(s,m),t(m,`card bg-base-100 shadow overflow-auto`);let _=n(`div`);i(m,_),t(_,`card-body gap-3`);let v=n(`h2`);i(_,v),t(v,`card-title`),i(v,r(`原生 TSX 对照写法`));let y=a(`rue:component:anchor`);i(_,y),d(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:ee});h(()=>f(e,_,y))});let b=n(`div`);i(s,b),t(b,`card bg-base-100 shadow overflow-auto`);let S=n(`div`);i(b,S),t(S,`card-body gap-3`);let te=n(`h2`);i(S,te),t(te,`card-title`),i(te,r(`修饰符速查`));let T=a(`rue:component:anchor`);return i(S,T),d(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:w});h(()=>f(e,S,T))}),o}):``;h(()=>f(o,O,k))}),i(O,r(` `));let A=a(`rue:slot:anchor`);return i(O,A),d(()=>{let u=T.value===`preview`?_(()=>{let u=e(),m=n(`div`);i(u,m),t(m,`card bg-base-100 shadow`);let v=n(`div`);i(m,v),t(v,`card-body grid gap-6`);let x=n(`div`);i(v,x),s(x,`role`,`alert`),t(x,`alert alert-info`);let S=n(`span`);i(x,S),i(S,r(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let C=n(`div`);i(v,C),s(C,`role`,`alert`),t(C,`alert alert-warning alert-soft`);let ee=n(`span`);i(C,ee),i(ee,r(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let w=n(`section`);i(v,w),t(w,`space-y-3`);let T=n(`div`);i(w,T),t(T,`flex flex-wrap items-center justify-between gap-3`);let D=n(`h2`);i(T,D),t(D,`text-xl font-semibold`),i(D,r(`v-on:click：method path 自动注入浏览器事件`));let O=n(`span`);i(T,O),t(O,`badge badge-primary badge-lg`);let k=o(O);i(O,k),d(()=>{l(k,ne.value)}),i(O,r(` 次`));let A=n(`div`);i(w,A),t(A,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let j=n(`button`);i(A,j),t(j,`btn btn-primary`),p(j,`click`,e=>de(e)),i(j,r(`v-on:click="onMethodPath"`));let be=n(`p`);i(A,be),t(be,`text-sm opacity-70`),i(be,r(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let xe=n(`section`);i(v,xe),t(xe,`space-y-3`);let Se=n(`div`);i(xe,Se),t(Se,`flex flex-wrap items-center justify-between gap-3`);let Ce=n(`h2`);i(Se,Ce),t(Ce,`text-xl font-semibold`),i(Ce,r(`v-on:click：method() / method($event)`));let we=n(`span`);i(Se,we),t(we,`badge badge-outline badge-lg`),i(we,r(`last call`));let Te=n(`div`);i(xe,Te),t(Te,`grid gap-3 md:grid-cols-2`);let Ee=n(`button`);i(Te,Ee),t(Ee,`btn btn-secondary`),p(Ee,`click`,e=>pe(`method() 不自动注入 event`)),i(Ee,r(`method()`));let De=n(`button`);i(Te,De),t(De,`btn btn-accent`),p(De,`click`,e=>pe(`method($event) 显式注入`,e)),i(De,r(`method($event)`));let Oe=n(`section`);i(v,Oe),t(Oe,`space-y-3`);let ke=n(`div`);i(Oe,ke),t(ke,`flex flex-wrap items-center justify-between gap-3`);let Ae=n(`h2`);i(ke,Ae),t(Ae,`text-xl font-semibold`),i(Ae,r(`r-on:input：直接复用标准输入事件`));let M=n(`span`);i(ke,M),t(M,`badge badge-outline badge-lg`),i(M,r(`长度 `));let je=a(`rue:slot:anchor`);i(M,je),d(()=>{let e=E.value.length;h(()=>f(e,M,je))});let Me=n(`div`);i(Oe,Me),t(Me,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Ne=n(`input`);i(Me,Ne),t(Ne,`input input-bordered w-full`),d(()=>{c(Ne,E.value)}),p(Ne,`input`,e=>fe(e));let Pe=n(`div`);i(Me,Pe),t(Pe,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let Fe=n(`div`);i(Pe,Fe),t(Fe,`stat`);let Ie=n(`div`);i(Fe,Ie),t(Ie,`stat-title`),i(Ie,r(`当前值`));let N=n(`div`);i(Fe,N),t(N,`stat-value text-2xl`);let Le=o(N);i(N,Le),d(()=>{l(Le,E.value||`空`)});let P=n(`div`);i(Pe,P),t(P,`stat`);let Re=n(`div`);i(P,Re),t(Re,`stat-title`),i(Re,r(`大写预览`));let F=n(`div`);i(P,F),t(F,`stat-value text-2xl`);let ze=o(F);i(F,ze),d(()=>{l(ze,E.value.toUpperCase()||`EMPTY`)});let I=n(`section`);i(v,I),t(I,`space-y-3`);let L=n(`div`);i(I,L),t(L,`flex flex-wrap items-center justify-between gap-3`);let Be=n(`h2`);i(L,Be),t(Be,`text-xl font-semibold`),i(Be,r(`v-on:click-stop-prevent`));let R=n(`div`);i(L,R),t(R,`flex flex-wrap gap-2`);let z=n(`span`);i(R,z),t(z,`badge badge-warning badge-lg`),i(z,r(`bubble `));let Ve=o(z);i(z,Ve),d(()=>{l(Ve,re.value)});let B=n(`span`);i(R,B),t(B,`badge badge-success badge-lg`),i(B,r(`stop/prevent `));let He=o(B);i(B,He),d(()=>{l(He,ie.value)});let V=n(`div`);i(I,V),t(V,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`),p(V,`click`,e=>me(e));let H=n(`a`);i(V,H),t(H,`link link-primary`),s(H,`href`,`#compiled-stop-prevent`),p(H,`click`,y(e=>he(e),[`stop`,`prevent`])),i(H,r(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let Ue=n(`p`);i(V,Ue),t(Ue,`text-sm opacity-70`),i(Ue,r(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let U=n(`section`);i(v,U),t(U,`space-y-3`);let We=n(`div`);i(U,We),t(We,`flex flex-wrap items-center justify-between gap-3`);let Ge=n(`h2`);i(We,Ge),t(Ge,`text-xl font-semibold`),i(Ge,r(`v-on:keyup-enter / v-on:keyup-13`));let Ke=n(`div`);i(We,Ke),t(Ke,`flex flex-wrap gap-2`);let W=n(`span`);i(Ke,W),t(W,`badge badge-accent badge-lg`),i(W,r(`enter `));let qe=o(W);i(W,qe),d(()=>{l(qe,ae.value)});let G=n(`span`);i(Ke,G),t(G,`badge badge-neutral badge-lg`),i(G,r(`13 `));let Je=o(G);i(G,Je),d(()=>{l(Je,oe.value)});let Ye=n(`div`);i(U,Ye),t(Ye,`grid gap-3 md:grid-cols-2`);let Xe=n(`label`);i(Ye,Xe),t(Xe,`floating-label`);let Ze=n(`input`);i(Xe,Ze),t(Ze,`input input-bordered`),s(Ze,`placeholder`,`按 Enter`),p(Ze,`keyup`,y(e=>ge(e),[`enter`]));let Qe=n(`span`);i(Xe,Qe),i(Qe,r(`v-on:keyup-enter="onEnterDirective"`));let $e=n(`label`);i(Ye,$e),t($e,`floating-label`);let et=n(`input`);i($e,et),t(et,`input input-bordered`),s(et,`placeholder`,`按 Enter`),p(et,`keyup`,y(e=>_e(e),[`13`]));let tt=n(`span`);i($e,tt),i(tt,r(`v-on:keyup-13="onKeyCode13Directive"`));let nt=n(`section`);i(v,nt),t(nt,`space-y-3`);let rt=n(`div`);i(nt,rt),t(rt,`flex flex-wrap items-center justify-between gap-3`);let it=n(`h2`);i(rt,it),t(it,`text-xl font-semibold`),i(it,r(`v-on:click-self / v-on:click-meta-exact`));let at=n(`div`);i(rt,at),t(at,`flex flex-wrap gap-2`);let K=n(`span`);i(at,K),t(K,`badge badge-info badge-lg`),i(K,r(`self `));let ot=o(K);i(K,ot),d(()=>{l(ot,se.value)});let q=n(`span`);i(at,q),t(q,`badge badge-info badge-lg`),i(q,r(`meta.exact `));let st=o(q);i(q,st),d(()=>{l(st,ce.value)});let ct=n(`div`);i(nt,ct),t(ct,`grid gap-4 md:grid-cols-2`);let J=n(`div`);i(ct,J),t(J,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`),p(J,`click`,y(e=>ve(e),[`self`]));let lt=n(`p`);i(J,lt),t(lt,`font-medium`),i(lt,r(`v-on:click-self="onSelfOnly"`));let ut=n(`p`);i(J,ut),t(ut,`text-sm opacity-70`),i(ut,r(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let dt=n(`button`);i(J,dt),t(dt,`btn btn-ghost btn-sm`),i(dt,r(`子元素按钮`));let ft=n(`button`);i(ct,ft),t(ft,`btn btn-info`),p(ft,`click`,y(e=>ye(e),[`meta`,`exact`])),i(ft,r(`v-on:click-meta-exact：按住 Command 点击`));let pt=n(`section`);i(v,pt),t(pt,`space-y-3`);let mt=n(`div`);i(pt,mt),t(mt,`flex flex-wrap items-center justify-between gap-3`);let ht=n(`h2`);i(mt,ht),t(ht,`text-xl font-semibold`),i(ht,r(`v-on:click-native-once`));let gt=n(`span`);i(mt,gt),t(gt,`badge badge-secondary badge-lg`),i(gt,r(`code path`));let _t=n(`div`);i(pt,_t),t(_t,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Y=n(`div`);i(_t,Y),t(Y,`mockup-code text-sm`);let vt=n(`pre`);i(Y,vt),s(vt,`data-prefix`,`1`);let yt=n(`code`);i(vt,yt);let bt=o(yt);i(yt,bt),l(bt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let xt=n(`pre`);i(Y,xt),s(xt,`data-prefix`,`2`);let St=n(`code`);i(xt,St);let Ct=o(St);i(St,Ct),l(Ct,`// 编译后包装为 _$vaporWithNativeEvents(...)`);let wt=n(`pre`);i(Y,wt),s(wt,`data-prefix`,`3`);let Tt=n(`code`);i(wt,Tt);let Et=o(Tt);i(Tt,Et),l(Et,`// native + once 仍然属于同一条修饰符编译链`);let X=n(`div`);i(_t,X),t(X,`grid gap-3`);let Dt=a(`rue:component:anchor`);i(X,Dt),f(g(te,{title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}),X,Dt);let Ot=n(`p`);i(X,Ot),t(Ot,`text-sm opacity-70`),i(Ot,r(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Z=n(`section`);i(v,Z),t(Z,`space-y-3`);let kt=n(`h2`);i(Z,kt),t(kt,`text-xl font-semibold`),i(kt,r(`修饰符速查`));let Q=n(`div`);i(Z,Q),t(Q,`flex flex-wrap gap-2`);let At=n(`span`);i(Q,At),t(At,`badge badge-primary badge-lg`),i(At,r(`v-on:click-stop`));let jt=n(`span`);i(Q,jt),t(jt,`badge badge-primary badge-lg`),i(jt,r(`v-on:click-prevent`));let Mt=n(`span`);i(Q,Mt),t(Mt,`badge badge-primary badge-lg`),i(Mt,r(`v-on:click-self`));let Nt=n(`span`);i(Q,Nt),t(Nt,`badge badge-primary badge-lg`),i(Nt,r(`v-on:click-once`));let Pt=n(`span`);i(Q,Pt),t(Pt,`badge badge-primary badge-lg`),i(Pt,r(`v-on:click-capture`));let Ft=n(`span`);i(Q,Ft),t(Ft,`badge badge-primary badge-lg`),i(Ft,r(`v-on:wheel-passive`));let It=n(`span`);i(Q,It),t(It,`badge badge-primary badge-lg`),i(It,r(`v-on:click-ctrl`));let Lt=n(`span`);i(Q,Lt),t(Lt,`badge badge-primary badge-lg`),i(Lt,r(`v-on:click-shift`));let Rt=n(`span`);i(Q,Rt),t(Rt,`badge badge-primary badge-lg`),i(Rt,r(`v-on:click-alt`));let zt=n(`span`);i(Q,zt),t(zt,`badge badge-primary badge-lg`),i(zt,r(`v-on:click-meta`));let Bt=n(`span`);i(Q,Bt),t(Bt,`badge badge-primary badge-lg`),i(Bt,r(`v-on:click-meta-exact`));let Vt=n(`span`);i(Q,Vt),t(Vt,`badge badge-primary badge-lg`),i(Vt,r(`v-on:click-middle`));let Ht=n(`span`);i(Q,Ht),t(Ht,`badge badge-primary badge-lg`),i(Ht,r(`v-on:keyup-enter`));let Ut=n(`span`);i(Q,Ut),t(Ut,`badge badge-primary badge-lg`),i(Ut,r(`v-on:keyup-tab`));let Wt=n(`span`);i(Q,Wt),t(Wt,`badge badge-primary badge-lg`),i(Wt,r(`v-on:keyup-delete`));let Gt=n(`span`);i(Q,Gt),t(Gt,`badge badge-primary badge-lg`),i(Gt,r(`v-on:keyup-esc`));let Kt=n(`span`);i(Q,Kt),t(Kt,`badge badge-primary badge-lg`),i(Kt,r(`v-on:keyup-space`));let qt=n(`span`);i(Q,qt),t(qt,`badge badge-primary badge-lg`),i(qt,r(`v-on:keyup-up`));let Jt=n(`span`);i(Q,Jt),t(Jt,`badge badge-primary badge-lg`),i(Jt,r(`v-on:keyup-down`));let Yt=n(`span`);i(Q,Yt),t(Yt,`badge badge-primary badge-lg`),i(Yt,r(`v-on:keyup-left`));let Xt=n(`span`);i(Q,Xt),t(Xt,`badge badge-primary badge-lg`),i(Xt,r(`v-on:keyup-right`));let Zt=n(`span`);i(Q,Zt),t(Zt,`badge badge-primary badge-lg`),i(Zt,r(`v-on:keyup-13`));let Qt=n(`span`);i(Q,Qt),t(Qt,`badge badge-primary badge-lg`),i(Qt,r(`v-on:click-native-once`));let $t=n(`section`);i(v,$t),t($t,`space-y-3`);let en=n(`h2`);i($t,en),t(en,`text-xl font-semibold`),i(en,r(`最近一次事件`));let tn=n(`div`);i($t,tn),t(tn,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let nn=o(tn);i(tn,nn),d(()=>{l(nn,le.value)});let rn=n(`section`);i(v,rn),t(rn,`space-y-3`);let an=n(`h2`);i(rn,an),t(an,`text-xl font-semibold`),i(an,r(`事件日志`));let on=n(`div`);i(rn,on),t(on,`rounded-box border border-base-300 bg-base-200 p-4`);let $=n(`ul`);i(on,$),t($,`list gap-2 font-mono text-sm`);let sn=a(`rue:list:start`),cn=a(`rue:list:end`);i($,sn),i($,cn);let ln=new Map;return d(()=>{ln=b({items:ue.value||[],getKey:(e,t)=>`${e}-${t}`,elements:ln,parent:$,before:cn,singleRoot:!0,start:sn,renderItem:(r,a,c,u,p)=>{f(_(()=>{let a=e(),c=n(`li`);i(a,c),d(()=>{s(c,`key`,String(`${r}-${p}`))}),t(c,`list-row px-0 py-1`);let u=o(c);return i(c,u),d(()=>{l(u,r)}),a}),a,c)}})}),u}):``;h(()=>f(u,O,A))}),u})}),u,m),u})};export{T as default};