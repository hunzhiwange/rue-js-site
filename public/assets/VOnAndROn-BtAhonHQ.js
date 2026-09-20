import{Bt as e,Dt as t,F as n,H as r,Ht as i,I as a,Mt as o,Tt as s,U as c,Ut as l,Vt as u,Wt as d,Y as f,_n as p,_t as ee,en as m,f as te,fn as h,gn as g,gt as ne,h as re,hn as _,in as v,l as ie,mn as ae,p as oe,pn as se,qt as ce,sn as y,st as b,u as x,vn as S,vt as le,yn as C,yt as w,z as T,zt as ue}from"./rue-runtime-Cv6BZekS.js";import{t as E}from"./Code-BzFVdc3U.js";import{r as de}from"./SidebarPlaygroundExample-rFyhXfC_.js";var D=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-on / r-on</h1>`),O=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),fe=C(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),pe=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,k=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,A=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,me=(t,n,r)=>{let a=le(ne(t,`note`)),o=le(ne(t,`title`));return c(d(t=>{let n=_(`button`,t);n.setAttribute(`class`,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let r=_(`span`,n);h(n,r);let s=se(`rue:compiled-slot`);return h(r,s),e({parent:r,before:s},()=>ue(o.get()),()=>({})),i(()=>a.get()?{__rue_compiled_branch_key:!0,create:()=>d(t=>{let n=_(`span`,t);n.setAttribute(`class`,`text-xs opacity-70`);let r=se(`rue:compiled-slot`);return h(n,r),e({parent:n,before:r},()=>ue(a.get()),()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=ae();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]}),e=>m(()=>{a.set(e.note),o.set(e.title)}),()=>ee(t))},he=(i,c,ee)=>{let m=b(`code`),ne=b(0),C=b(`Rue`),he=b(0),ge=b(0),_e=b(0),ve=b(0),ye=b(0),be=b(0),xe=b(`等待交互`),Se=b([`等待交互`]),j=e=>{xe.value=e,Se.value=[e,...Se.value].slice(0,8)},Ce=e=>{ne.value+=1,j(`v-on:click -> `+e.type+` #`+ne.value)},we=e=>{C.value=e.target.value,j(`r-on:input -> `+(C.value||`空字符串`))},Te=(e,t)=>{j(t?e+` -> `+t.type:e)},Ee=()=>{he.value+=1,j(`父级收到冒泡 -> 第 `+he.value+` 次`)},De=e=>{ge.value+=1;let t=e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`;j(`v-on:click-stop-prevent -> 已阻止 `+t+`，第 `+ge.value+` 次`)},Oe=e=>{_e.value+=1,j(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+_e.value)},ke=e=>{let t=e.keyCode??e.which;ve.value+=1,j(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+ve.value)},Ae=e=>{ye.value+=1;let t=e.target?.tagName.toLowerCase()??`unknown`;j(`v-on:click-self -> target `+t+`，第 `+ye.value+` 次`)},je=e=>{be.value+=1,j(`v-on:click-meta-exact -> button `+e.button+`，第 `+be.value+` 次`)};return f(()=>(()=>{let i=d(i=>{let c=ae(),f=fe().content.cloneNode(!0),ee=f.firstChild,b=ee.childNodes[0],x=b.parentNode,T=ee.childNodes[1],de=T.parentNode;c.appendChild(f),l(x,b,()=>{let e=m.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let t=_(`div`,e);t.setAttribute(`class`,`grid gap-6`);let n=_(`div`,t);h(t,n),n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let i=_(`div`,n);h(n,i),i.setAttribute(`class`,`card-body gap-3`);let a=_(`h2`,i);h(i,a),a.setAttribute(`class`,`card-title`),h(a,g(`Rue TSX 实际源码`)),r(i,E,()=>({className:`h-full`,lang:`tsx`,code:pe}));let o=_(`div`,t);h(t,o),o.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let s=_(`div`,o);h(o,s),s.setAttribute(`class`,`card-body gap-3`);let c=_(`h2`,s);h(s,c),c.setAttribute(`class`,`card-title`),h(c,g(`原生 TSX 对照写法`)),r(s,E,()=>({className:`h-full`,lang:`tsx`,code:k}));let l=_(`div`,t);h(t,l),l.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let u=_(`div`,l);h(l,u),u.setAttribute(`class`,`card-body gap-3`);let d=_(`h2`,u);return h(u,d),d.setAttribute(`class`,`card-title`),h(d,g(`修饰符速查`)),r(u,E,()=>({className:`h-full`,lang:`tsx`,code:A})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=g(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=ae();return[t.firstChild,t.lastChild]})}}),e({parent:de,before:T},()=>m.value===`preview`?(i,c,l)=>u(i,l,()=>d(i=>{let c=ae(),l=_(`div`,c);h(c,l),t(l,`card bg-base-100 shadow`);let d=_(`div`,l);h(l,d),t(d,`card-body grid gap-6`);let f=_(`div`,d);h(d,f),s(f,`role`,`alert`),t(f,`alert alert-info`);let ee=_(`span`,f);h(f,ee),h(ee,g(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let m=_(`div`,d);h(d,m),s(m,`role`,`alert`),t(m,`alert alert-warning alert-soft`);let b=_(`span`,m);h(m,b),h(b,g(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let x=_(`section`,d);h(d,x),t(x,`space-y-3`);let w=_(`div`,x);h(x,w),t(w,`flex flex-wrap items-center justify-between gap-3`);let T=_(`h2`,w);h(w,T),t(T,`text-xl font-semibold`),h(T,g(`v-on:click：method path 自动注入浏览器事件`));let E=_(`span`,w);h(w,E),t(E,`badge badge-primary badge-lg`);let de=p(E);h(E,de),v(()=>{S(de,ne.value)}),h(E,g(` 次`));let D=_(`div`,x);h(x,D),t(D,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let O=_(`button`,D);h(D,O),t(O,`btn btn-primary`);let fe=e=>{let t=e=>Ce(e);typeof t==`function`&&t(e)};O.addEventListener(`click`,fe),y(()=>O.removeEventListener(`click`,fe)),h(O,g(`v-on:click="onMethodPath"`));let pe=_(`p`,D);h(D,pe),t(pe,`text-sm opacity-70`),h(pe,g(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let k=_(`section`,d);h(d,k),t(k,`space-y-3`);let A=_(`div`,k);h(k,A),t(A,`flex flex-wrap items-center justify-between gap-3`);let j=_(`h2`,A);h(A,j),t(j,`text-xl font-semibold`),h(j,g(`v-on:click：method() / method($event)`));let Me=_(`span`,A);h(A,Me),t(Me,`badge badge-outline badge-lg`),h(Me,g(`last call`));let Ne=_(`div`,k);h(k,Ne),t(Ne,`grid gap-3 md:grid-cols-2`);let Pe=_(`button`,Ne);h(Ne,Pe),t(Pe,`btn btn-secondary`);let Fe=e=>{let t=e=>Te(`method() 不自动注入 event`);typeof t==`function`&&t(e)};Pe.addEventListener(`click`,Fe),y(()=>Pe.removeEventListener(`click`,Fe)),h(Pe,g(`method()`));let Ie=_(`button`,Ne);h(Ne,Ie),t(Ie,`btn btn-accent`);let Le=e=>{let t=e=>Te(`method($event) 显式注入`,e);typeof t==`function`&&t(e)};Ie.addEventListener(`click`,Le),y(()=>Ie.removeEventListener(`click`,Le)),h(Ie,g(`method($event)`));let Re=_(`section`,d);h(d,Re),t(Re,`space-y-3`);let M=_(`div`,Re);h(Re,M),t(M,`flex flex-wrap items-center justify-between gap-3`);let ze=_(`h2`,M);h(M,ze),t(ze,`text-xl font-semibold`),h(ze,g(`r-on:input：直接复用标准输入事件`));let Be=_(`span`,M);h(M,Be),t(Be,`badge badge-outline badge-lg`),h(Be,g(`长度 `));let Ve=se(`rue:slot:anchor`);h(Be,Ve),e({parent:Be,before:Ve},()=>ue(C.value.length),()=>({}));let N=_(`div`,Re);h(Re,N),t(N,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let He=_(`input`,N);h(N,He),t(He,`input input-bordered w-full`),v(()=>{o(He,C.value)});let Ue=e=>{let t=e=>we(e);typeof t==`function`&&t(e)};He.addEventListener(`input`,Ue),y(()=>He.removeEventListener(`input`,Ue));let P=_(`div`,N);h(N,P),t(P,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let F=_(`div`,P);h(P,F),t(F,`stat`);let We=_(`div`,F);h(F,We),t(We,`stat-title`),h(We,g(`当前值`));let Ge=_(`div`,F);h(F,Ge),t(Ge,`stat-value text-2xl`);let Ke=p(Ge);h(Ge,Ke),v(()=>{S(Ke,C.value||`空`)});let I=_(`div`,P);h(P,I),t(I,`stat`);let qe=_(`div`,I);h(I,qe),t(qe,`stat-title`),h(qe,g(`大写预览`));let Je=_(`div`,I);h(I,Je),t(Je,`stat-value text-2xl`);let Ye=p(Je);h(Je,Ye),v(()=>{S(Ye,C.value.toUpperCase()||`EMPTY`)});let L=_(`section`,d);h(d,L),t(L,`space-y-3`);let R=_(`div`,L);h(L,R),t(R,`flex flex-wrap items-center justify-between gap-3`);let Xe=_(`h2`,R);h(R,Xe),t(Xe,`text-xl font-semibold`),h(Xe,g(`v-on:click-stop-prevent`));let z=_(`div`,R);h(R,z),t(z,`flex flex-wrap gap-2`);let Ze=_(`span`,z);h(z,Ze),t(Ze,`badge badge-warning badge-lg`),h(Ze,g(`bubble `));let Qe=p(Ze);h(Ze,Qe),v(()=>{S(Qe,he.value)});let $e=_(`span`,z);h(z,$e),t($e,`badge badge-success badge-lg`),h($e,g(`stop/prevent `));let et=p($e);h($e,et),v(()=>{S(et,ge.value)});let B=_(`div`,L);h(L,B),t(B,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`);let tt=e=>{let t=e=>Ee(e);typeof t==`function`&&t(e)};B.addEventListener(`click`,tt),y(()=>B.removeEventListener(`click`,tt));let V=_(`a`,B);h(B,V),t(V,`link link-primary`),s(V,`href`,`#compiled-stop-prevent`);let nt=e=>{let t=ie(e=>De(e),[`stop`,`prevent`]);typeof t==`function`&&t(e)};V.addEventListener(`click`,nt),y(()=>V.removeEventListener(`click`,nt)),h(V,g(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let rt=_(`p`,B);h(B,rt),t(rt,`text-sm opacity-70`),h(rt,g(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let H=_(`section`,d);h(d,H),t(H,`space-y-3`);let U=_(`div`,H);h(H,U),t(U,`flex flex-wrap items-center justify-between gap-3`);let it=_(`h2`,U);h(U,it),t(it,`text-xl font-semibold`),h(it,g(`v-on:keyup-enter / v-on:keyup-13`));let W=_(`div`,U);h(U,W),t(W,`flex flex-wrap gap-2`);let at=_(`span`,W);h(W,at),t(at,`badge badge-accent badge-lg`),h(at,g(`enter `));let ot=p(at);h(at,ot),v(()=>{S(ot,_e.value)});let st=_(`span`,W);h(W,st),t(st,`badge badge-neutral badge-lg`),h(st,g(`13 `));let ct=p(st);h(st,ct),v(()=>{S(ct,ve.value)});let G=_(`div`,H);h(H,G),t(G,`grid gap-3 md:grid-cols-2`);let K=_(`label`,G);h(G,K),t(K,`floating-label`);let lt=_(`input`,K);h(K,lt),t(lt,`input input-bordered`),s(lt,`placeholder`,`按 Enter`);let ut=e=>{let t=ie(e=>Oe(e),[`enter`]);typeof t==`function`&&t(e)};lt.addEventListener(`keyup`,ut),y(()=>lt.removeEventListener(`keyup`,ut));let dt=_(`span`,K);h(K,dt),h(dt,g(`v-on:keyup-enter="onEnterDirective"`));let q=_(`label`,G);h(G,q),t(q,`floating-label`);let ft=_(`input`,q);h(q,ft),t(ft,`input input-bordered`),s(ft,`placeholder`,`按 Enter`);let pt=e=>{let t=ie(e=>ke(e),[`13`]);typeof t==`function`&&t(e)};ft.addEventListener(`keyup`,pt),y(()=>ft.removeEventListener(`keyup`,pt));let mt=_(`span`,q);h(q,mt),h(mt,g(`v-on:keyup-13="onKeyCode13Directive"`));let J=_(`section`,d);h(d,J),t(J,`space-y-3`);let Y=_(`div`,J);h(J,Y),t(Y,`flex flex-wrap items-center justify-between gap-3`);let ht=_(`h2`,Y);h(Y,ht),t(ht,`text-xl font-semibold`),h(ht,g(`v-on:click-self / v-on:click-meta-exact`));let X=_(`div`,Y);h(Y,X),t(X,`flex flex-wrap gap-2`);let gt=_(`span`,X);h(X,gt),t(gt,`badge badge-info badge-lg`),h(gt,g(`self `));let _t=p(gt);h(gt,_t),v(()=>{S(_t,ye.value)});let vt=_(`span`,X);h(X,vt),t(vt,`badge badge-info badge-lg`),h(vt,g(`meta.exact `));let yt=p(vt);h(vt,yt),v(()=>{S(yt,be.value)});let bt=_(`div`,J);h(J,bt),t(bt,`grid gap-4 md:grid-cols-2`);let Z=_(`div`,bt);h(bt,Z),t(Z,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`);let xt=e=>{let t=ie(e=>Ae(e),[`self`]);typeof t==`function`&&t(e)};Z.addEventListener(`click`,xt),y(()=>Z.removeEventListener(`click`,xt));let St=_(`p`,Z);h(Z,St),t(St,`font-medium`),h(St,g(`v-on:click-self="onSelfOnly"`));let Ct=_(`p`,Z);h(Z,Ct),t(Ct,`text-sm opacity-70`),h(Ct,g(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let wt=_(`button`,Z);h(Z,wt),t(wt,`btn btn-ghost btn-sm`),h(wt,g(`子元素按钮`));let Tt=_(`button`,bt);h(bt,Tt),t(Tt,`btn btn-info`);let Et=e=>{let t=ie(e=>je(e),[`meta`,`exact`]);typeof t==`function`&&t(e)};Tt.addEventListener(`click`,Et),y(()=>Tt.removeEventListener(`click`,Et)),h(Tt,g(`v-on:click-meta-exact：按住 Command 点击`));let Dt=_(`section`,d);h(d,Dt),t(Dt,`space-y-3`);let Ot=_(`div`,Dt);h(Dt,Ot),t(Ot,`flex flex-wrap items-center justify-between gap-3`);let kt=_(`h2`,Ot);h(Ot,kt),t(kt,`text-xl font-semibold`),h(kt,g(`v-on:click-native-once`));let At=_(`span`,Ot);h(Ot,At),t(At,`badge badge-secondary badge-lg`),h(At,g(`code path`));let jt=_(`div`,Dt);h(Dt,jt),t(jt,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=_(`div`,jt);h(jt,Q),t(Q,`mockup-code text-sm`);let Mt=_(`pre`,Q);h(Q,Mt),s(Mt,`data-prefix`,`1`);let Nt=_(`code`,Mt);h(Mt,Nt);let Pt=p(Nt);h(Nt,Pt),S(Pt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let Ft=_(`pre`,Q);h(Q,Ft),s(Ft,`data-prefix`,`2`);let It=_(`code`,Ft);h(Ft,It);let Lt=p(It);h(It,Lt),S(Lt,`// 编译后保留 native + once 的事件配置`);let Rt=_(`pre`,Q);h(Q,Rt),s(Rt,`data-prefix`,`3`);let zt=_(`code`,Rt);h(Rt,zt);let Bt=p(zt);h(zt,Bt),S(Bt,`// native + once 仍然属于同一条修饰符编译链`);let Vt=_(`div`,jt);h(jt,Vt),t(Vt,`grid gap-3`),r(Vt,me,()=>({title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}));let Ht=_(`p`,Vt);h(Vt,Ht),t(Ht,`text-sm opacity-70`),h(Ht,g(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Ut=_(`section`,d);h(d,Ut),t(Ut,`space-y-3`);let Wt=_(`h2`,Ut);h(Ut,Wt),t(Wt,`text-xl font-semibold`),h(Wt,g(`修饰符速查`));let $=_(`div`,Ut);h(Ut,$),t($,`flex flex-wrap gap-2`);let Gt=_(`span`,$);h($,Gt),t(Gt,`badge badge-primary badge-lg`),h(Gt,g(`v-on:click-stop`));let Kt=_(`span`,$);h($,Kt),t(Kt,`badge badge-primary badge-lg`),h(Kt,g(`v-on:click-prevent`));let qt=_(`span`,$);h($,qt),t(qt,`badge badge-primary badge-lg`),h(qt,g(`v-on:click-self`));let Jt=_(`span`,$);h($,Jt),t(Jt,`badge badge-primary badge-lg`),h(Jt,g(`v-on:click-once`));let Yt=_(`span`,$);h($,Yt),t(Yt,`badge badge-primary badge-lg`),h(Yt,g(`v-on:click-capture`));let Xt=_(`span`,$);h($,Xt),t(Xt,`badge badge-primary badge-lg`),h(Xt,g(`v-on:wheel-passive`));let Zt=_(`span`,$);h($,Zt),t(Zt,`badge badge-primary badge-lg`),h(Zt,g(`v-on:click-ctrl`));let Qt=_(`span`,$);h($,Qt),t(Qt,`badge badge-primary badge-lg`),h(Qt,g(`v-on:click-shift`));let $t=_(`span`,$);h($,$t),t($t,`badge badge-primary badge-lg`),h($t,g(`v-on:click-alt`));let en=_(`span`,$);h($,en),t(en,`badge badge-primary badge-lg`),h(en,g(`v-on:click-meta`));let tn=_(`span`,$);h($,tn),t(tn,`badge badge-primary badge-lg`),h(tn,g(`v-on:click-meta-exact`));let nn=_(`span`,$);h($,nn),t(nn,`badge badge-primary badge-lg`),h(nn,g(`v-on:click-middle`));let rn=_(`span`,$);h($,rn),t(rn,`badge badge-primary badge-lg`),h(rn,g(`v-on:keyup-enter`));let an=_(`span`,$);h($,an),t(an,`badge badge-primary badge-lg`),h(an,g(`v-on:keyup-tab`));let on=_(`span`,$);h($,on),t(on,`badge badge-primary badge-lg`),h(on,g(`v-on:keyup-delete`));let sn=_(`span`,$);h($,sn),t(sn,`badge badge-primary badge-lg`),h(sn,g(`v-on:keyup-esc`));let cn=_(`span`,$);h($,cn),t(cn,`badge badge-primary badge-lg`),h(cn,g(`v-on:keyup-space`));let ln=_(`span`,$);h($,ln),t(ln,`badge badge-primary badge-lg`),h(ln,g(`v-on:keyup-up`));let un=_(`span`,$);h($,un),t(un,`badge badge-primary badge-lg`),h(un,g(`v-on:keyup-down`));let dn=_(`span`,$);h($,dn),t(dn,`badge badge-primary badge-lg`),h(dn,g(`v-on:keyup-left`));let fn=_(`span`,$);h($,fn),t(fn,`badge badge-primary badge-lg`),h(fn,g(`v-on:keyup-right`));let pn=_(`span`,$);h($,pn),t(pn,`badge badge-primary badge-lg`),h(pn,g(`v-on:keyup-13`));let mn=_(`span`,$);h($,mn),t(mn,`badge badge-primary badge-lg`),h(mn,g(`v-on:click-native-once`));let hn=_(`section`,d);h(d,hn),t(hn,`space-y-3`);let gn=_(`h2`,hn);h(hn,gn),t(gn,`text-xl font-semibold`),h(gn,g(`最近一次事件`));let _n=_(`div`,hn);h(hn,_n),t(_n,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let vn=p(_n);h(_n,vn),v(()=>{S(vn,xe.value)});let yn=_(`section`,d);h(d,yn),t(yn,`space-y-3`);let bn=_(`h2`,yn);h(yn,bn),t(bn,`text-xl font-semibold`),h(bn,g(`事件日志`));let xn=_(`div`,yn);h(yn,xn),t(xn,`rounded-box border border-base-300 bg-base-200 p-4`);let Sn=_(`ul`,xn);h(xn,Sn),t(Sn,`list gap-2 font-mono text-sm`);let Cn=se(`rue:list:end`);h(Sn,Cn);let wn=[];ce(()=>{let e=Se.value||[];wn=re(Sn,Cn,wn,e,(e,t)=>`${e}-${t}`,(e,t)=>{let r=le(e);return oe((e,t,i)=>{let o=()=>n(e=>{let t=_(`li`,e);t.setAttribute(`class`,`list-row px-0 py-1`);let n=g(``);return h(t,n),a(n,()=>r.get()),[t,t]});return e==null?o():u(e,i,o)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),y(()=>te(wn));let Tn=g(``),En=g(``);return c.insertBefore(Tn,c.firstChild),c.appendChild(En),[c.firstChild,c.lastChild]})):(e,t,n)=>{let r=()=>w(e=>{let t=g(``);return[t,t]});return e==null?r():u(e,n,r)},()=>({}));let D=g(``),O=g(``);return c.insertBefore(D,c.firstChild),c.appendChild(O),[c.firstChild,c.lastChild]});return T(de,()=>({children:[w(e=>{let t=D().content.cloneNode(!0).firstChild;return[t,t]}),d(e=>{let t=O().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;v(()=>{let e=`tab ${m.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),y(x(e,n,`click`,()=>()=>{m.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return v(()=>{let e=`tab ${m.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),y(x(e,r,`click`,()=>()=>{m.value=`code`})),[t,t]}),i]}))})())};export{he as default};