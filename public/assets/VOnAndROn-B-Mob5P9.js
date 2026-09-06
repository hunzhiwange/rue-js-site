import{At as e,C as t,Dn as n,Dt as r,E as i,Mt as a,Ot as o,Q as s,Qt as c,Vt as l,_n as u,_t as d,at as ee,b as te,bt as f,ct as p,dt as m,et as h,gn as g,gt as ne,kn as re,mn as ie,mt as ae,nt as oe,pn as _,qt as v,st as se,tn as y,ut as ce,vn as b,vt as x,w as le,wn as S,xn as ue,xt as C,yt as w}from"./rue-runtime-HIMg8Lz8.js";import{t as T}from"./Code-DpH7u0gk.js";import{r as E}from"./SidebarPlaygroundExample-BCPRe0hA.js";var de=b(`<button class="btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></button>`),D=b(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-on / r-on</h1>`),fe=b(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),O=b(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),k=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,pe=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,me=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,he=e=>{let t=ee(e.note),n=ee(e.title);return p(l(Object.assign(e=>{let r=de().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1],s=o.parentNode,c=u(``);return a.insertBefore(c,i),a.removeChild(i),ue(c,()=>n.get()),oe(s,o,()=>t.get()?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let n=g(`span`,e);n.className=`text-xs opacity-70`;let r=u(``);return _(n,r),ue(r,()=>t.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>h(()=>{t.set(e.note),n.set(e.title)}),()=>e)},A=()=>{let b=y(`code`),de=y(0),A=y(`Rue`),ge=y(0),_e=y(0),ve=y(0),ye=y(0),be=y(0),xe=y(0),Se=y(`等待交互`),Ce=y([`等待交互`]),j=e=>{Se.value=e,Ce.value=[e,...Ce.value].slice(0,8)},we=e=>{de.value+=1,j(`v-on:click -> `+e.type+` #`+de.value)},Te=e=>{A.value=e.target.value,j(`r-on:input -> `+(A.value||`空字符串`))},Ee=(e,t)=>{j(t?e+` -> `+t.type:e)},De=()=>{ge.value+=1,j(`父级收到冒泡 -> 第 `+ge.value+` 次`)},Oe=e=>{_e.value+=1;let t=e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`;j(`v-on:click-stop-prevent -> 已阻止 `+t+`，第 `+_e.value+` 次`)},ke=e=>{ve.value+=1,j(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+ve.value)},Ae=e=>{let t=e.keyCode??e.which;ye.value+=1,j(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+ye.value)},je=e=>{be.value+=1;let t=e.target?.tagName.toLowerCase()??`unknown`;j(`v-on:click-self -> target `+t+`，第 `+be.value+` 次`)},Me=e=>{xe.value+=1,j(`v-on:click-meta-exact -> button `+e.button+`，第 `+xe.value+` 次`)};return v(()=>p((()=>{let p=e(()=>{let a=d(),p=O().content.cloneNode(!0),h=p.firstChild,v=h.childNodes[0],y=v.parentNode,E=h.childNodes[1],D=E.parentNode;return a.appendChild(p),oe(y,v,()=>{let e=b.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(Object.assign(e=>{let t=g(`div`,e);t.className=`grid gap-6`;let n=g(`div`,t);_(t,n),n.className=`card bg-base-100 shadow overflow-auto`;let r=g(`div`,n);_(n,r),r.className=`card-body gap-3`;let i=g(`h2`,r);_(r,i),i.className=`card-title`,_(i,u(`Rue TSX 实际源码`)),se(r,T,()=>({className:`h-full`,lang:`tsx`,code:k}));let a=g(`div`,t);_(t,a),a.className=`card bg-base-100 shadow overflow-auto`;let o=g(`div`,a);_(a,o),o.className=`card-body gap-3`;let s=g(`h2`,o);_(o,s),s.className=`card-title`,_(s,u(`原生 TSX 对照写法`)),se(o,T,()=>({className:`h-full`,lang:`tsx`,code:pe}));let c=g(`div`,t);_(t,c),c.className=`card bg-base-100 shadow overflow-auto`;let l=g(`div`,c);_(c,l),l.className=`card-body gap-3`;let d=g(`h2`,l);return _(l,d),d.className=`card-title`,_(d,u(`修饰符速查`)),se(l,T,()=>({className:`h-full`,lang:`tsx`,code:me})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(Object.assign(t=>{let n=u(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>l(Object.assign(e=>{let t=d();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),S(()=>{let a=b.value===`preview`?e(()=>{let e=d(),a=x(`div`,e);m(e,a),s(a,`card bg-base-100 shadow`);let p=x(`div`,a);m(a,p),s(p,`card-body grid gap-6`);let h=x(`div`,p);m(p,h),C(h,`role`,`alert`),s(h,`alert alert-info`);let oe=x(`span`,h);m(h,oe),m(oe,w(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let v=x(`div`,p);m(p,v),C(v,`role`,`alert`),s(v,`alert alert-warning alert-soft`);let y=x(`span`,v);m(v,y),m(y,w(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let b=x(`section`,p);m(p,b),s(b,`space-y-3`);let T=x(`div`,b);m(b,T),s(T,`flex flex-wrap items-center justify-between gap-3`);let E=x(`h2`,T);m(T,E),s(E,`text-xl font-semibold`),m(E,w(`v-on:click：method path 自动注入浏览器事件`));let D=x(`span`,T);m(T,D),s(D,`badge badge-primary badge-lg`);let fe=f(D);m(D,fe),S(()=>{o(fe,de.value)}),m(D,w(` 次`));let O=x(`div`,b);m(b,O),s(O,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let k=x(`button`,O);m(O,k),s(k,`btn btn-primary`);let pe=e=>{let t=e=>we(e);typeof t==`function`&&t(e)};k.addEventListener(`click`,pe),c(()=>k.removeEventListener(`click`,pe)),m(k,w(`v-on:click="onMethodPath"`));let me=x(`p`,O);m(O,me),s(me,`text-sm opacity-70`),m(me,w(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let j=x(`section`,p);m(p,j),s(j,`space-y-3`);let M=x(`div`,j);m(j,M),s(M,`flex flex-wrap items-center justify-between gap-3`);let Ne=x(`h2`,M);m(M,Ne),s(Ne,`text-xl font-semibold`),m(Ne,w(`v-on:click：method() / method($event)`));let Pe=x(`span`,M);m(M,Pe),s(Pe,`badge badge-outline badge-lg`),m(Pe,w(`last call`));let N=x(`div`,j);m(j,N),s(N,`grid gap-3 md:grid-cols-2`);let Fe=x(`button`,N);m(N,Fe),s(Fe,`btn btn-secondary`);let Ie=e=>{let t=e=>Ee(`method() 不自动注入 event`);typeof t==`function`&&t(e)};Fe.addEventListener(`click`,Ie),c(()=>Fe.removeEventListener(`click`,Ie)),m(Fe,w(`method()`));let Le=x(`button`,N);m(N,Le),s(Le,`btn btn-accent`);let Re=e=>{let t=e=>Ee(`method($event) 显式注入`,e);typeof t==`function`&&t(e)};Le.addEventListener(`click`,Re),c(()=>Le.removeEventListener(`click`,Re)),m(Le,w(`method($event)`));let P=x(`section`,p);m(p,P),s(P,`space-y-3`);let F=x(`div`,P);m(P,F),s(F,`flex flex-wrap items-center justify-between gap-3`);let ze=x(`h2`,F);m(F,ze),s(ze,`text-xl font-semibold`),m(ze,w(`r-on:input：直接复用标准输入事件`));let Be=x(`span`,F);m(F,Be),s(Be,`badge badge-outline badge-lg`),m(Be,w(`长度 `));let Ve=ne(`rue:slot:anchor`);m(Be,Ve),S(()=>{let e=A.value.length;re(()=>ce(e,Be,Ve))});let I=x(`div`,P);m(P,I),s(I,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let He=x(`input`,I);m(I,He),s(He,`input input-bordered w-full`),S(()=>{r(He,A.value)});let Ue=e=>{let t=e=>Te(e);typeof t==`function`&&t(e)};He.addEventListener(`input`,Ue),c(()=>He.removeEventListener(`input`,Ue));let L=x(`div`,I);m(I,L),s(L,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let R=x(`div`,L);m(L,R),s(R,`stat`);let We=x(`div`,R);m(R,We),s(We,`stat-title`),m(We,w(`当前值`));let Ge=x(`div`,R);m(R,Ge),s(Ge,`stat-value text-2xl`);let Ke=f(Ge);m(Ge,Ke),S(()=>{o(Ke,A.value||`空`)});let z=x(`div`,L);m(L,z),s(z,`stat`);let qe=x(`div`,z);m(z,qe),s(qe,`stat-title`),m(qe,w(`大写预览`));let Je=x(`div`,z);m(z,Je),s(Je,`stat-value text-2xl`);let Ye=f(Je);m(Je,Ye),S(()=>{o(Ye,A.value.toUpperCase()||`EMPTY`)});let B=x(`section`,p);m(p,B),s(B,`space-y-3`);let V=x(`div`,B);m(B,V),s(V,`flex flex-wrap items-center justify-between gap-3`);let Xe=x(`h2`,V);m(V,Xe),s(Xe,`text-xl font-semibold`),m(Xe,w(`v-on:click-stop-prevent`));let H=x(`div`,V);m(V,H),s(H,`flex flex-wrap gap-2`);let Ze=x(`span`,H);m(H,Ze),s(Ze,`badge badge-warning badge-lg`),m(Ze,w(`bubble `));let Qe=f(Ze);m(Ze,Qe),S(()=>{o(Qe,ge.value)});let $e=x(`span`,H);m(H,$e),s($e,`badge badge-success badge-lg`),m($e,w(`stop/prevent `));let et=f($e);m($e,et),S(()=>{o(et,_e.value)});let U=x(`div`,B);m(B,U),s(U,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`);let tt=e=>{let t=e=>De(e);typeof t==`function`&&t(e)};U.addEventListener(`click`,tt),c(()=>U.removeEventListener(`click`,tt));let W=x(`a`,U);m(U,W),s(W,`link link-primary`),C(W,`href`,`#compiled-stop-prevent`);let nt=e=>{let t=ae(e=>Oe(e),[`stop`,`prevent`]);typeof t==`function`&&t(e)};W.addEventListener(`click`,nt),c(()=>W.removeEventListener(`click`,nt)),m(W,w(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let rt=x(`p`,U);m(U,rt),s(rt,`text-sm opacity-70`),m(rt,w(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let G=x(`section`,p);m(p,G),s(G,`space-y-3`);let K=x(`div`,G);m(G,K),s(K,`flex flex-wrap items-center justify-between gap-3`);let it=x(`h2`,K);m(K,it),s(it,`text-xl font-semibold`),m(it,w(`v-on:keyup-enter / v-on:keyup-13`));let q=x(`div`,K);m(K,q),s(q,`flex flex-wrap gap-2`);let at=x(`span`,q);m(q,at),s(at,`badge badge-accent badge-lg`),m(at,w(`enter `));let ot=f(at);m(at,ot),S(()=>{o(ot,ve.value)});let st=x(`span`,q);m(q,st),s(st,`badge badge-neutral badge-lg`),m(st,w(`13 `));let ct=f(st);m(st,ct),S(()=>{o(ct,ye.value)});let J=x(`div`,G);m(G,J),s(J,`grid gap-3 md:grid-cols-2`);let Y=x(`label`,J);m(J,Y),s(Y,`floating-label`);let lt=x(`input`,Y);m(Y,lt),s(lt,`input input-bordered`),C(lt,`placeholder`,`按 Enter`);let ut=e=>{let t=ae(e=>ke(e),[`enter`]);typeof t==`function`&&t(e)};lt.addEventListener(`keyup`,ut),c(()=>lt.removeEventListener(`keyup`,ut));let dt=x(`span`,Y);m(Y,dt),m(dt,w(`v-on:keyup-enter="onEnterDirective"`));let X=x(`label`,J);m(J,X),s(X,`floating-label`);let ft=x(`input`,X);m(X,ft),s(ft,`input input-bordered`),C(ft,`placeholder`,`按 Enter`);let pt=e=>{let t=ae(e=>Ae(e),[`13`]);typeof t==`function`&&t(e)};ft.addEventListener(`keyup`,pt),c(()=>ft.removeEventListener(`keyup`,pt));let mt=x(`span`,X);m(X,mt),m(mt,w(`v-on:keyup-13="onKeyCode13Directive"`));let ht=x(`section`,p);m(p,ht),s(ht,`space-y-3`);let gt=x(`div`,ht);m(ht,gt),s(gt,`flex flex-wrap items-center justify-between gap-3`);let _t=x(`h2`,gt);m(gt,_t),s(_t,`text-xl font-semibold`),m(_t,w(`v-on:click-self / v-on:click-meta-exact`));let vt=x(`div`,gt);m(gt,vt),s(vt,`flex flex-wrap gap-2`);let yt=x(`span`,vt);m(vt,yt),s(yt,`badge badge-info badge-lg`),m(yt,w(`self `));let bt=f(yt);m(yt,bt),S(()=>{o(bt,be.value)});let xt=x(`span`,vt);m(vt,xt),s(xt,`badge badge-info badge-lg`),m(xt,w(`meta.exact `));let St=f(xt);m(xt,St),S(()=>{o(St,xe.value)});let Ct=x(`div`,ht);m(ht,Ct),s(Ct,`grid gap-4 md:grid-cols-2`);let Z=x(`div`,Ct);m(Ct,Z),s(Z,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`);let wt=e=>{let t=ae(e=>je(e),[`self`]);typeof t==`function`&&t(e)};Z.addEventListener(`click`,wt),c(()=>Z.removeEventListener(`click`,wt));let Tt=x(`p`,Z);m(Z,Tt),s(Tt,`font-medium`),m(Tt,w(`v-on:click-self="onSelfOnly"`));let Et=x(`p`,Z);m(Z,Et),s(Et,`text-sm opacity-70`),m(Et,w(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let Dt=x(`button`,Z);m(Z,Dt),s(Dt,`btn btn-ghost btn-sm`),m(Dt,w(`子元素按钮`));let Ot=x(`button`,Ct);m(Ct,Ot),s(Ot,`btn btn-info`);let kt=e=>{let t=ae(e=>Me(e),[`meta`,`exact`]);typeof t==`function`&&t(e)};Ot.addEventListener(`click`,kt),c(()=>Ot.removeEventListener(`click`,kt)),m(Ot,w(`v-on:click-meta-exact：按住 Command 点击`));let At=x(`section`,p);m(p,At),s(At,`space-y-3`);let jt=x(`div`,At);m(At,jt),s(jt,`flex flex-wrap items-center justify-between gap-3`);let Mt=x(`h2`,jt);m(jt,Mt),s(Mt,`text-xl font-semibold`),m(Mt,w(`v-on:click-native-once`));let Nt=x(`span`,jt);m(jt,Nt),s(Nt,`badge badge-secondary badge-lg`),m(Nt,w(`code path`));let Pt=x(`div`,At);m(At,Pt),s(Pt,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=x(`div`,Pt);m(Pt,Q),s(Q,`mockup-code text-sm`);let Ft=x(`pre`,Q);m(Q,Ft),C(Ft,`data-prefix`,`1`);let It=x(`code`,Ft);m(Ft,It);let Lt=f(It);m(It,Lt),o(Lt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let Rt=x(`pre`,Q);m(Q,Rt),C(Rt,`data-prefix`,`2`);let zt=x(`code`,Rt);m(Rt,zt);let Bt=f(zt);m(zt,Bt),o(Bt,`// 编译后保留 native + once 的事件配置`);let Vt=x(`pre`,Q);m(Q,Vt),C(Vt,`data-prefix`,`3`);let Ht=x(`code`,Vt);m(Vt,Ht);let Ut=f(Ht);m(Ht,Ut),o(Ut,`// native + once 仍然属于同一条修饰符编译链`);let Wt=x(`div`,Pt);m(Pt,Wt),s(Wt,`grid gap-3`),se(Wt,he,()=>({title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}));let Gt=x(`p`,Wt);m(Wt,Gt),s(Gt,`text-sm opacity-70`),m(Gt,w(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Kt=x(`section`,p);m(p,Kt),s(Kt,`space-y-3`);let qt=x(`h2`,Kt);m(Kt,qt),s(qt,`text-xl font-semibold`),m(qt,w(`修饰符速查`));let $=x(`div`,Kt);m(Kt,$),s($,`flex flex-wrap gap-2`);let Jt=x(`span`,$);m($,Jt),s(Jt,`badge badge-primary badge-lg`),m(Jt,w(`v-on:click-stop`));let Yt=x(`span`,$);m($,Yt),s(Yt,`badge badge-primary badge-lg`),m(Yt,w(`v-on:click-prevent`));let Xt=x(`span`,$);m($,Xt),s(Xt,`badge badge-primary badge-lg`),m(Xt,w(`v-on:click-self`));let Zt=x(`span`,$);m($,Zt),s(Zt,`badge badge-primary badge-lg`),m(Zt,w(`v-on:click-once`));let Qt=x(`span`,$);m($,Qt),s(Qt,`badge badge-primary badge-lg`),m(Qt,w(`v-on:click-capture`));let $t=x(`span`,$);m($,$t),s($t,`badge badge-primary badge-lg`),m($t,w(`v-on:wheel-passive`));let en=x(`span`,$);m($,en),s(en,`badge badge-primary badge-lg`),m(en,w(`v-on:click-ctrl`));let tn=x(`span`,$);m($,tn),s(tn,`badge badge-primary badge-lg`),m(tn,w(`v-on:click-shift`));let nn=x(`span`,$);m($,nn),s(nn,`badge badge-primary badge-lg`),m(nn,w(`v-on:click-alt`));let rn=x(`span`,$);m($,rn),s(rn,`badge badge-primary badge-lg`),m(rn,w(`v-on:click-meta`));let an=x(`span`,$);m($,an),s(an,`badge badge-primary badge-lg`),m(an,w(`v-on:click-meta-exact`));let on=x(`span`,$);m($,on),s(on,`badge badge-primary badge-lg`),m(on,w(`v-on:click-middle`));let sn=x(`span`,$);m($,sn),s(sn,`badge badge-primary badge-lg`),m(sn,w(`v-on:keyup-enter`));let cn=x(`span`,$);m($,cn),s(cn,`badge badge-primary badge-lg`),m(cn,w(`v-on:keyup-tab`));let ln=x(`span`,$);m($,ln),s(ln,`badge badge-primary badge-lg`),m(ln,w(`v-on:keyup-delete`));let un=x(`span`,$);m($,un),s(un,`badge badge-primary badge-lg`),m(un,w(`v-on:keyup-esc`));let dn=x(`span`,$);m($,dn),s(dn,`badge badge-primary badge-lg`),m(dn,w(`v-on:keyup-space`));let fn=x(`span`,$);m($,fn),s(fn,`badge badge-primary badge-lg`),m(fn,w(`v-on:keyup-up`));let pn=x(`span`,$);m($,pn),s(pn,`badge badge-primary badge-lg`),m(pn,w(`v-on:keyup-down`));let mn=x(`span`,$);m($,mn),s(mn,`badge badge-primary badge-lg`),m(mn,w(`v-on:keyup-left`));let hn=x(`span`,$);m($,hn),s(hn,`badge badge-primary badge-lg`),m(hn,w(`v-on:keyup-right`));let gn=x(`span`,$);m($,gn),s(gn,`badge badge-primary badge-lg`),m(gn,w(`v-on:keyup-13`));let _n=x(`span`,$);m($,_n),s(_n,`badge badge-primary badge-lg`),m(_n,w(`v-on:click-native-once`));let vn=x(`section`,p);m(p,vn),s(vn,`space-y-3`);let yn=x(`h2`,vn);m(vn,yn),s(yn,`text-xl font-semibold`),m(yn,w(`最近一次事件`));let bn=x(`div`,vn);m(vn,bn),s(bn,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let xn=f(bn);m(bn,xn),S(()=>{o(xn,Se.value)});let Sn=x(`section`,p);m(p,Sn),s(Sn,`space-y-3`);let Cn=x(`h2`,Sn);m(Sn,Cn),s(Cn,`text-xl font-semibold`),m(Cn,w(`事件日志`));let wn=x(`div`,Sn);m(Sn,wn),s(wn,`rounded-box border border-base-300 bg-base-200 p-4`);let Tn=x(`ul`,wn);m(wn,Tn),s(Tn,`list gap-2 font-mono text-sm`);let En=ie(`rue:list:end`);_(Tn,En);let Dn=[];return S(()=>{let e=Ce.value||[];Dn=le(Tn,En,Dn,e,(e,t)=>`${e}-${t}`,(e,n)=>{let r=ee(e);return t((e,t,n)=>i(e,n,()=>l(Object.assign(e=>{let t=g(`li`,e);t.className=`list-row px-0 py-1`;let n=u(``);return _(t,n),ue(n,()=>r.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(t,i)=>{e=t,n=i,r.set(t)})})}),n(()=>te(Dn)),e},!0):``;re(()=>ce(a,D,E))}),a});return a(E,()=>({children:[l(e=>D().content.cloneNode(!0).firstChild),l(Object.assign(e=>{let t=fe().content.cloneNode(!0).firstChild,r=t.childNodes[0],i=t.childNodes[1];r.setAttribute(`role`,`tab`);let a;S(()=>{let e=`tab ${b.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(a,t)||(a=t,r.className=t)});let o=e=>{let t=()=>{b.value=`preview`};typeof t==`function`&&t(e)};r.addEventListener(`click`,o),n(()=>r.removeEventListener(`click`,o)),i.setAttribute(`role`,`tab`);let s;S(()=>{let e=`tab ${b.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=e=>{let t=()=>{b.value=`code`};typeof t==`function`&&t(e)};return i.addEventListener(`click`,c),n(()=>i.removeEventListener(`click`,c)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),p]}))})(),e=>h(()=>{})))};export{A as default};