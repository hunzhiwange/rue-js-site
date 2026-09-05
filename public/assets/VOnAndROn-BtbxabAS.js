import{$ as e,Bt as t,C as n,Dn as r,Et as i,K as a,L as o,Lt as s,Mt as c,S as l,V as u,W as d,X as f,Y as ee,_n as p,_t as m,at as h,bn as te,fn as g,ft as ne,gn as _,hn as v,ht as re,it as y,kn as ie,nt as ae,ot as b,pn as oe,pt as x,q as S,rt as C,tt as se,wn as w,x as ce,z as T}from"./rue-runtime-CwEGJ854.js";import{t as E}from"./Code-B3jCYMAr.js";import{r as D}from"./SidebarPlaygroundExample-EGR0CyDT.js";var le=p(`<button class="btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></button>`),ue=p(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-on / r-on</h1>`),O=p(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),k=p(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),de=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,fe=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,pe=e=>{let t=d(e.note),n=d(e.title);return S(i(Object.assign(e=>{let r=le().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1],c=s.parentNode,l=_(``);return o.insertBefore(l,a),o.removeChild(a),te(l,()=>n.get()),u(c,s,()=>t.get()?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let n=v(`span`,e);n.className=`text-xs opacity-70`;let r=_(``);return g(n,r),te(r,()=>t.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=ae();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>T(()=>{t.set(e.note),n.set(e.title)}),()=>e)},j=()=>{let p=t(`code`),le=t(0),j=t(`Rue`),me=t(0),he=t(0),ge=t(0),_e=t(0),ve=t(0),ye=t(0),be=t(`等待交互`),xe=t([`等待交互`]),M=e=>{be.value=e,xe.value=[e,...xe.value].slice(0,8)},Se=e=>{le.value+=1,M(`v-on:click -> `+e.type+` #`+le.value)},Ce=e=>{j.value=e.target.value,M(`r-on:input -> `+(j.value||`空字符串`))},we=(e,t)=>{M(t?e+` -> `+t.type:e)},Te=()=>{me.value+=1,M(`父级收到冒泡 -> 第 `+me.value+` 次`)},Ee=e=>{he.value+=1;let t=e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`;M(`v-on:click-stop-prevent -> 已阻止 `+t+`，第 `+he.value+` 次`)},De=e=>{ge.value+=1,M(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+ge.value)},Oe=e=>{let t=e.keyCode??e.which;_e.value+=1,M(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+_e.value)},ke=e=>{ve.value+=1;let t=e.target?.tagName.toLowerCase()??`unknown`;M(`v-on:click-self -> target `+t+`，第 `+ve.value+` 次`)},Ae=e=>{ye.value+=1,M(`v-on:click-meta-exact -> button `+e.button+`，第 `+ye.value+` 次`)};return c(()=>S((()=>{let t=re(()=>{let t=ae(),r=k().content.cloneNode(!0),c=r.firstChild,m=c.childNodes[0],S=m.parentNode,T=c.childNodes[1],D=T.parentNode;return t.appendChild(r),u(S,m,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=v(`div`,e);t.className=`grid gap-6`;let n=v(`div`,t);g(t,n),n.className=`card bg-base-100 shadow overflow-auto`;let r=v(`div`,n);g(n,r),r.className=`card-body gap-3`;let i=v(`h2`,r);g(r,i),i.className=`card-title`,g(i,_(`Rue TSX 实际源码`)),a(r,E,()=>({className:`h-full`,lang:`tsx`,code:de}));let o=v(`div`,t);g(t,o),o.className=`card bg-base-100 shadow overflow-auto`;let s=v(`div`,o);g(o,s),s.className=`card-body gap-3`;let c=v(`h2`,s);g(s,c),c.className=`card-title`,g(c,_(`原生 TSX 对照写法`)),a(s,E,()=>({className:`h-full`,lang:`tsx`,code:fe}));let l=v(`div`,t);g(t,l),l.className=`card bg-base-100 shadow overflow-auto`;let u=v(`div`,l);g(l,u),u.className=`card-body gap-3`;let d=v(`h2`,u);return g(u,d),d.className=`card-title`,g(d,_(`修饰符速查`)),a(u,E,()=>({className:`h-full`,lang:`tsx`,code:A})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=_(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=ae();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),w(()=>{let t=p.value===`preview`?re(()=>{let t=ae(),r=C(`div`,t);f(t,r),o(r,`card bg-base-100 shadow`);let c=C(`div`,r);f(r,c),o(c,`card-body grid gap-6`);let u=C(`div`,c);f(c,u),b(u,`role`,`alert`),o(u,`alert alert-info`);let p=C(`span`,u);f(u,p),f(p,y(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let m=C(`div`,c);f(c,m),b(m,`role`,`alert`),o(m,`alert alert-warning alert-soft`);let re=C(`span`,m);f(m,re),f(re,y(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let S=C(`section`,c);f(c,S),o(S,`space-y-3`);let T=C(`div`,S);f(S,T),o(T,`flex flex-wrap items-center justify-between gap-3`);let E=C(`h2`,T);f(T,E),o(E,`text-xl font-semibold`),f(E,y(`v-on:click：method path 自动注入浏览器事件`));let D=C(`span`,T);f(T,D),o(D,`badge badge-primary badge-lg`);let ue=h(D);f(D,ue),w(()=>{x(ue,le.value)}),f(D,y(` 次`));let O=C(`div`,S);f(S,O),o(O,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let k=C(`button`,O);f(O,k),o(k,`btn btn-primary`);let de=e=>{let t=e=>Se(e);typeof t==`function`&&t(e)};k.addEventListener(`click`,de),s(()=>k.removeEventListener(`click`,de)),f(k,y(`v-on:click="onMethodPath"`));let fe=C(`p`,O);f(O,fe),o(fe,`text-sm opacity-70`),f(fe,y(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let A=C(`section`,c);f(c,A),o(A,`space-y-3`);let M=C(`div`,A);f(A,M),o(M,`flex flex-wrap items-center justify-between gap-3`);let je=C(`h2`,M);f(M,je),o(je,`text-xl font-semibold`),f(je,y(`v-on:click：method() / method($event)`));let Me=C(`span`,M);f(M,Me),o(Me,`badge badge-outline badge-lg`),f(Me,y(`last call`));let N=C(`div`,A);f(A,N),o(N,`grid gap-3 md:grid-cols-2`);let Ne=C(`button`,N);f(N,Ne),o(Ne,`btn btn-secondary`);let Pe=e=>{let t=e=>we(`method() 不自动注入 event`);typeof t==`function`&&t(e)};Ne.addEventListener(`click`,Pe),s(()=>Ne.removeEventListener(`click`,Pe)),f(Ne,y(`method()`));let Fe=C(`button`,N);f(N,Fe),o(Fe,`btn btn-accent`);let Ie=e=>{let t=e=>we(`method($event) 显式注入`,e);typeof t==`function`&&t(e)};Fe.addEventListener(`click`,Ie),s(()=>Fe.removeEventListener(`click`,Ie)),f(Fe,y(`method($event)`));let Le=C(`section`,c);f(c,Le),o(Le,`space-y-3`);let Re=C(`div`,Le);f(Le,Re),o(Re,`flex flex-wrap items-center justify-between gap-3`);let ze=C(`h2`,Re);f(Re,ze),o(ze,`text-xl font-semibold`),f(ze,y(`r-on:input：直接复用标准输入事件`));let Be=C(`span`,Re);f(Re,Be),o(Be,`badge badge-outline badge-lg`),f(Be,y(`长度 `));let Ve=se(`rue:slot:anchor`);f(Be,Ve),w(()=>{let e=j.value.length;ie(()=>ee(e,Be,Ve))});let He=C(`div`,Le);f(Le,He),o(He,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Ue=C(`input`,He);f(He,Ue),o(Ue,`input input-bordered w-full`),w(()=>{ne(Ue,j.value)});let We=e=>{let t=e=>Ce(e);typeof t==`function`&&t(e)};Ue.addEventListener(`input`,We),s(()=>Ue.removeEventListener(`input`,We));let Ge=C(`div`,He);f(He,Ge),o(Ge,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let P=C(`div`,Ge);f(Ge,P),o(P,`stat`);let Ke=C(`div`,P);f(P,Ke),o(Ke,`stat-title`),f(Ke,y(`当前值`));let qe=C(`div`,P);f(P,qe),o(qe,`stat-value text-2xl`);let Je=h(qe);f(qe,Je),w(()=>{x(Je,j.value||`空`)});let F=C(`div`,Ge);f(Ge,F),o(F,`stat`);let Ye=C(`div`,F);f(F,Ye),o(Ye,`stat-title`),f(Ye,y(`大写预览`));let Xe=C(`div`,F);f(F,Xe),o(Xe,`stat-value text-2xl`);let Ze=h(Xe);f(Xe,Ze),w(()=>{x(Ze,j.value.toUpperCase()||`EMPTY`)});let I=C(`section`,c);f(c,I),o(I,`space-y-3`);let L=C(`div`,I);f(I,L),o(L,`flex flex-wrap items-center justify-between gap-3`);let Qe=C(`h2`,L);f(L,Qe),o(Qe,`text-xl font-semibold`),f(Qe,y(`v-on:click-stop-prevent`));let R=C(`div`,L);f(L,R),o(R,`flex flex-wrap gap-2`);let $e=C(`span`,R);f(R,$e),o($e,`badge badge-warning badge-lg`),f($e,y(`bubble `));let et=h($e);f($e,et),w(()=>{x(et,me.value)});let tt=C(`span`,R);f(R,tt),o(tt,`badge badge-success badge-lg`),f(tt,y(`stop/prevent `));let nt=h(tt);f(tt,nt),w(()=>{x(nt,he.value)});let z=C(`div`,I);f(I,z),o(z,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`);let rt=e=>{let t=e=>Te(e);typeof t==`function`&&t(e)};z.addEventListener(`click`,rt),s(()=>z.removeEventListener(`click`,rt));let B=C(`a`,z);f(z,B),o(B,`link link-primary`),b(B,`href`,`#compiled-stop-prevent`);let it=t=>{let n=e(e=>Ee(e),[`stop`,`prevent`]);typeof n==`function`&&n(t)};B.addEventListener(`click`,it),s(()=>B.removeEventListener(`click`,it)),f(B,y(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let at=C(`p`,z);f(z,at),o(at,`text-sm opacity-70`),f(at,y(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let V=C(`section`,c);f(c,V),o(V,`space-y-3`);let H=C(`div`,V);f(V,H),o(H,`flex flex-wrap items-center justify-between gap-3`);let ot=C(`h2`,H);f(H,ot),o(ot,`text-xl font-semibold`),f(ot,y(`v-on:keyup-enter / v-on:keyup-13`));let U=C(`div`,H);f(H,U),o(U,`flex flex-wrap gap-2`);let st=C(`span`,U);f(U,st),o(st,`badge badge-accent badge-lg`),f(st,y(`enter `));let ct=h(st);f(st,ct),w(()=>{x(ct,ge.value)});let lt=C(`span`,U);f(U,lt),o(lt,`badge badge-neutral badge-lg`),f(lt,y(`13 `));let ut=h(lt);f(lt,ut),w(()=>{x(ut,_e.value)});let W=C(`div`,V);f(V,W),o(W,`grid gap-3 md:grid-cols-2`);let G=C(`label`,W);f(W,G),o(G,`floating-label`);let dt=C(`input`,G);f(G,dt),o(dt,`input input-bordered`),b(dt,`placeholder`,`按 Enter`);let ft=t=>{let n=e(e=>De(e),[`enter`]);typeof n==`function`&&n(t)};dt.addEventListener(`keyup`,ft),s(()=>dt.removeEventListener(`keyup`,ft));let pt=C(`span`,G);f(G,pt),f(pt,y(`v-on:keyup-enter="onEnterDirective"`));let K=C(`label`,W);f(W,K),o(K,`floating-label`);let mt=C(`input`,K);f(K,mt),o(mt,`input input-bordered`),b(mt,`placeholder`,`按 Enter`);let ht=t=>{let n=e(e=>Oe(e),[`13`]);typeof n==`function`&&n(t)};mt.addEventListener(`keyup`,ht),s(()=>mt.removeEventListener(`keyup`,ht));let gt=C(`span`,K);f(K,gt),f(gt,y(`v-on:keyup-13="onKeyCode13Directive"`));let q=C(`section`,c);f(c,q),o(q,`space-y-3`);let J=C(`div`,q);f(q,J),o(J,`flex flex-wrap items-center justify-between gap-3`);let _t=C(`h2`,J);f(J,_t),o(_t,`text-xl font-semibold`),f(_t,y(`v-on:click-self / v-on:click-meta-exact`));let Y=C(`div`,J);f(J,Y),o(Y,`flex flex-wrap gap-2`);let vt=C(`span`,Y);f(Y,vt),o(vt,`badge badge-info badge-lg`),f(vt,y(`self `));let yt=h(vt);f(vt,yt),w(()=>{x(yt,ve.value)});let bt=C(`span`,Y);f(Y,bt),o(bt,`badge badge-info badge-lg`),f(bt,y(`meta.exact `));let xt=h(bt);f(bt,xt),w(()=>{x(xt,ye.value)});let X=C(`div`,q);f(q,X),o(X,`grid gap-4 md:grid-cols-2`);let Z=C(`div`,X);f(X,Z),o(Z,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`);let St=t=>{let n=e(e=>ke(e),[`self`]);typeof n==`function`&&n(t)};Z.addEventListener(`click`,St),s(()=>Z.removeEventListener(`click`,St));let Ct=C(`p`,Z);f(Z,Ct),o(Ct,`font-medium`),f(Ct,y(`v-on:click-self="onSelfOnly"`));let wt=C(`p`,Z);f(Z,wt),o(wt,`text-sm opacity-70`),f(wt,y(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let Tt=C(`button`,Z);f(Z,Tt),o(Tt,`btn btn-ghost btn-sm`),f(Tt,y(`子元素按钮`));let Et=C(`button`,X);f(X,Et),o(Et,`btn btn-info`);let Dt=t=>{let n=e(e=>Ae(e),[`meta`,`exact`]);typeof n==`function`&&n(t)};Et.addEventListener(`click`,Dt),s(()=>Et.removeEventListener(`click`,Dt)),f(Et,y(`v-on:click-meta-exact：按住 Command 点击`));let Ot=C(`section`,c);f(c,Ot),o(Ot,`space-y-3`);let kt=C(`div`,Ot);f(Ot,kt),o(kt,`flex flex-wrap items-center justify-between gap-3`);let At=C(`h2`,kt);f(kt,At),o(At,`text-xl font-semibold`),f(At,y(`v-on:click-native-once`));let jt=C(`span`,kt);f(kt,jt),o(jt,`badge badge-secondary badge-lg`),f(jt,y(`code path`));let Mt=C(`div`,Ot);f(Ot,Mt),o(Mt,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=C(`div`,Mt);f(Mt,Q),o(Q,`mockup-code text-sm`);let Nt=C(`pre`,Q);f(Q,Nt),b(Nt,`data-prefix`,`1`);let Pt=C(`code`,Nt);f(Nt,Pt);let Ft=h(Pt);f(Pt,Ft),x(Ft,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let It=C(`pre`,Q);f(Q,It),b(It,`data-prefix`,`2`);let Lt=C(`code`,It);f(It,Lt);let Rt=h(Lt);f(Lt,Rt),x(Rt,`// 编译后保留 native + once 的事件配置`);let zt=C(`pre`,Q);f(Q,zt),b(zt,`data-prefix`,`3`);let Bt=C(`code`,zt);f(zt,Bt);let Vt=h(Bt);f(Bt,Vt),x(Vt,`// native + once 仍然属于同一条修饰符编译链`);let Ht=C(`div`,Mt);f(Mt,Ht),o(Ht,`grid gap-3`),a(Ht,pe,()=>({title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}));let Ut=C(`p`,Ht);f(Ht,Ut),o(Ut,`text-sm opacity-70`),f(Ut,y(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Wt=C(`section`,c);f(c,Wt),o(Wt,`space-y-3`);let Gt=C(`h2`,Wt);f(Wt,Gt),o(Gt,`text-xl font-semibold`),f(Gt,y(`修饰符速查`));let $=C(`div`,Wt);f(Wt,$),o($,`flex flex-wrap gap-2`);let Kt=C(`span`,$);f($,Kt),o(Kt,`badge badge-primary badge-lg`),f(Kt,y(`v-on:click-stop`));let qt=C(`span`,$);f($,qt),o(qt,`badge badge-primary badge-lg`),f(qt,y(`v-on:click-prevent`));let Jt=C(`span`,$);f($,Jt),o(Jt,`badge badge-primary badge-lg`),f(Jt,y(`v-on:click-self`));let Yt=C(`span`,$);f($,Yt),o(Yt,`badge badge-primary badge-lg`),f(Yt,y(`v-on:click-once`));let Xt=C(`span`,$);f($,Xt),o(Xt,`badge badge-primary badge-lg`),f(Xt,y(`v-on:click-capture`));let Zt=C(`span`,$);f($,Zt),o(Zt,`badge badge-primary badge-lg`),f(Zt,y(`v-on:wheel-passive`));let Qt=C(`span`,$);f($,Qt),o(Qt,`badge badge-primary badge-lg`),f(Qt,y(`v-on:click-ctrl`));let $t=C(`span`,$);f($,$t),o($t,`badge badge-primary badge-lg`),f($t,y(`v-on:click-shift`));let en=C(`span`,$);f($,en),o(en,`badge badge-primary badge-lg`),f(en,y(`v-on:click-alt`));let tn=C(`span`,$);f($,tn),o(tn,`badge badge-primary badge-lg`),f(tn,y(`v-on:click-meta`));let nn=C(`span`,$);f($,nn),o(nn,`badge badge-primary badge-lg`),f(nn,y(`v-on:click-meta-exact`));let rn=C(`span`,$);f($,rn),o(rn,`badge badge-primary badge-lg`),f(rn,y(`v-on:click-middle`));let an=C(`span`,$);f($,an),o(an,`badge badge-primary badge-lg`),f(an,y(`v-on:keyup-enter`));let on=C(`span`,$);f($,on),o(on,`badge badge-primary badge-lg`),f(on,y(`v-on:keyup-tab`));let sn=C(`span`,$);f($,sn),o(sn,`badge badge-primary badge-lg`),f(sn,y(`v-on:keyup-delete`));let cn=C(`span`,$);f($,cn),o(cn,`badge badge-primary badge-lg`),f(cn,y(`v-on:keyup-esc`));let ln=C(`span`,$);f($,ln),o(ln,`badge badge-primary badge-lg`),f(ln,y(`v-on:keyup-space`));let un=C(`span`,$);f($,un),o(un,`badge badge-primary badge-lg`),f(un,y(`v-on:keyup-up`));let dn=C(`span`,$);f($,dn),o(dn,`badge badge-primary badge-lg`),f(dn,y(`v-on:keyup-down`));let fn=C(`span`,$);f($,fn),o(fn,`badge badge-primary badge-lg`),f(fn,y(`v-on:keyup-left`));let pn=C(`span`,$);f($,pn),o(pn,`badge badge-primary badge-lg`),f(pn,y(`v-on:keyup-right`));let mn=C(`span`,$);f($,mn),o(mn,`badge badge-primary badge-lg`),f(mn,y(`v-on:keyup-13`));let hn=C(`span`,$);f($,hn),o(hn,`badge badge-primary badge-lg`),f(hn,y(`v-on:click-native-once`));let gn=C(`section`,c);f(c,gn),o(gn,`space-y-3`);let _n=C(`h2`,gn);f(gn,_n),o(_n,`text-xl font-semibold`),f(_n,y(`最近一次事件`));let vn=C(`div`,gn);f(gn,vn),o(vn,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let yn=h(vn);f(vn,yn),w(()=>{x(yn,be.value)});let bn=C(`section`,c);f(c,bn),o(bn,`space-y-3`);let xn=C(`h2`,bn);f(bn,xn),o(xn,`text-xl font-semibold`),f(xn,y(`事件日志`));let Sn=C(`div`,bn);f(bn,Sn),o(Sn,`rounded-box border border-base-300 bg-base-200 p-4`);let Cn=C(`ul`,Sn);f(Sn,Cn),o(Cn,`list gap-2 font-mono text-sm`);let wn=oe(`rue:list:end`);g(Cn,wn);let Tn=[];return w(()=>{let e=xe.value||[];Tn=n(Cn,wn,Tn,e,(e,t)=>`${e}-${t}`,(e,t)=>{let n=d(e),r=d(t);return l((e,t,r)=>ce(e,r,()=>i(Object.assign(e=>{let t=v(`li`,e);t.className=`list-row px-0 py-1`;let r=_(``);return g(t,r),te(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),t},!0):``;ie(()=>ee(t,D,T))}),t});return m(D,()=>({children:[i(e=>ue().content.cloneNode(!0).firstChild),i(Object.assign(e=>{let t=O().content.cloneNode(!0).firstChild,n=t.childNodes[0],i=t.childNodes[1];n.setAttribute(`role`,`tab`);let a;w(()=>{let e=`tab ${p.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,n.className=t)});let o=e=>{let t=()=>{p.value=`preview`};typeof t==`function`&&t(e)};n.addEventListener(`click`,o),r(()=>n.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;w(()=>{let e=`tab ${p.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{p.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),r(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),t]}))})(),e=>T(()=>{})))};export{j as default};