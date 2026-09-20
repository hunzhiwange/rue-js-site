import{B as e,Bt as t,Dt as n,F as r,Ht as i,I as a,M as o,Mt as s,Tt as c,Ut as l,V as u,Vt as ee,W as te,Wt as d,X as ne,Y as re,_n as f,en as p,f as ie,fn as m,gn as h,h as ae,hn as g,in as _,l as oe,mn as se,mt as v,nt as y,p as ce,pn as le,qt as ue,sn as b,u as x,vn as S,yn as C,z as w,zt as de}from"./rue-runtime-BWbIfNT8.js";import{t as T}from"./Code-C5ZhIIr9.js";import{r as fe}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var E=C(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">v-on / r-on</h1>`),D=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),pe=C(`<div class="mt-4 grid gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),me=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,O=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,k=`import { type FC, ref } from '@rue-js/rue';

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

export default Demo;`,he=(n,r,o)=>{let s=te(w(n,`note`)),c=te(w(n,`title`));return a(d(e=>{let n=g(`button`,e);n.setAttribute(`class`,`btn btn-outline h-auto min-h-0 flex-col items-start py-3 normal-case`);let r=g(`span`,n);m(n,r);let a=le(`rue:compiled-slot`);return m(r,a),t({parent:r,before:a},()=>de(c.get()),()=>({})),i(()=>s.get()?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let n=g(`span`,e);n.setAttribute(`class`,`text-xs opacity-70`);let r=le(`rue:compiled-slot`);return m(n,r),t({parent:n,before:r},()=>de(s.get()),()=>({})),[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>u(e=>{let t=se();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n),[n,n]}),e=>p(()=>{s.set(e.note),c.set(e.title)}),()=>e(n))},ge=(e,i,a)=>{let p=v(`code`),C=v(0),w=v(`Rue`),ge=v(0),_e=v(0),ve=v(0),ye=v(0),be=v(0),xe=v(0),Se=v(`等待交互`),Ce=v([`等待交互`]),A=e=>{Se.value=e,Ce.value=[e,...Ce.value].slice(0,8)},we=e=>{C.value+=1,A(`v-on:click -> `+e.type+` #`+C.value)},Te=e=>{w.value=e.target.value,A(`r-on:input -> `+(w.value||`空字符串`))},Ee=(e,t)=>{A(t?e+` -> `+t.type:e)},De=()=>{ge.value+=1,A(`父级收到冒泡 -> 第 `+ge.value+` 次`)},Oe=e=>{_e.value+=1;let t=e.currentTarget?.getAttribute(`href`)??`#compiled-stop-prevent`;A(`v-on:click-stop-prevent -> 已阻止 `+t+`，第 `+_e.value+` 次`)},ke=e=>{ve.value+=1,A(`v-on:keyup-enter -> `+(e.key||`Enter`)+` #`+ve.value)},Ae=e=>{let t=e.keyCode??e.which;ye.value+=1,A(`v-on:keyup-13 -> keyCode `+(t??13)+` #`+ye.value)},je=e=>{be.value+=1;let t=e.target?.tagName.toLowerCase()??`unknown`;A(`v-on:click-self -> target `+t+`，第 `+be.value+` 次`)},Me=e=>{xe.value+=1,A(`v-on:click-meta-exact -> button `+e.button+`，第 `+xe.value+` 次`)};return y(()=>(()=>{let e=d(e=>{let i=se(),a=pe().content.cloneNode(!0),o=a.firstChild,v=o.childNodes[0],y=v.parentNode,x=o.childNodes[1],fe=x.parentNode;i.appendChild(a),l(y,v,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>d(e=>{let t=g(`div`,e);t.setAttribute(`class`,`grid gap-6`);let n=g(`div`,t);m(t,n),n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let i=g(`div`,n);m(n,i),i.setAttribute(`class`,`card-body gap-3`);let a=g(`h2`,i);m(i,a),a.setAttribute(`class`,`card-title`),m(a,h(`Rue TSX 实际源码`)),r(i,T,()=>({className:`h-full`,lang:`tsx`,code:me}));let o=g(`div`,t);m(t,o),o.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let s=g(`div`,o);m(o,s),s.setAttribute(`class`,`card-body gap-3`);let c=g(`h2`,s);m(s,c),c.setAttribute(`class`,`card-title`),m(c,h(`原生 TSX 对照写法`)),r(s,T,()=>({className:`h-full`,lang:`tsx`,code:O}));let l=g(`div`,t);m(t,l),l.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let u=g(`div`,l);m(l,u),u.setAttribute(`class`,`card-body gap-3`);let ee=g(`h2`,u);return m(u,ee),ee.setAttribute(`class`,`card-title`),m(ee,h(`修饰符速查`)),r(u,T,()=>({className:`h-full`,lang:`tsx`,code:k})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>u(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>u(e=>{let t=se();return[t.firstChild,t.lastChild]})}}),t({parent:fe,before:x},()=>p.value===`preview`?(e,i,a)=>ee(e,a,()=>d(e=>{let i=se(),a=g(`div`,i);m(i,a),n(a,`card bg-base-100 shadow`);let o=g(`div`,a);m(a,o),n(o,`card-body grid gap-6`);let l=g(`div`,o);m(o,l),c(l,`role`,`alert`),n(l,`alert alert-info`);let u=g(`span`,l);m(l,u),m(u,h(`这页的预览区、代码区、日志文案统一展示当前真实可写进 TSX 的 Rue 语法：v-on: / r-on:。 你在页面上看到什么写法，当前源码里就是什么写法。`));let d=g(`div`,o);m(o,d),c(d,`role`,`alert`),n(d,`alert alert-warning alert-soft`);let p=g(`span`,d);m(d,p),m(p,h(`代码页已经同步给出两种对照：第一块是 Rue TSX 实际源码，第二块是原生 TSX 的 onClick / onKeyUp 手写版本， 第三块尽量把当前支持的修饰符写法完整列出来。`));let v=g(`section`,o);m(o,v),n(v,`space-y-3`);let y=g(`div`,v);m(v,y),n(y,`flex flex-wrap items-center justify-between gap-3`);let x=g(`h2`,y);m(y,x),n(x,`text-xl font-semibold`),m(x,h(`v-on:click：method path 自动注入浏览器事件`));let T=g(`span`,y);m(y,T),n(T,`badge badge-primary badge-lg`);let fe=f(T);m(T,fe),_(()=>{S(fe,C.value)}),m(T,h(` 次`));let E=g(`div`,v);m(v,E),n(E,`rounded-box border border-base-300 p-4 flex flex-wrap items-center gap-3`);let D=g(`button`,E);m(E,D),n(D,`btn btn-primary`);let pe=e=>{let t=e=>we(e);typeof t==`function`&&t(e)};D.addEventListener(`click`,pe),b(()=>D.removeEventListener(`click`,pe)),m(D,h(`v-on:click="onMethodPath"`));let me=g(`p`,E);m(E,me),n(me,`text-sm opacity-70`),m(me,h(`这里直接使用真实的 v-on:click 方法路径，点击后会把 event.type 自动传给处理函数。`));let O=g(`section`,o);m(o,O),n(O,`space-y-3`);let k=g(`div`,O);m(O,k),n(k,`flex flex-wrap items-center justify-between gap-3`);let A=g(`h2`,k);m(k,A),n(A,`text-xl font-semibold`),m(A,h(`v-on:click：method() / method($event)`));let Ne=g(`span`,k);m(k,Ne),n(Ne,`badge badge-outline badge-lg`),m(Ne,h(`last call`));let j=g(`div`,O);m(O,j),n(j,`grid gap-3 md:grid-cols-2`);let Pe=g(`button`,j);m(j,Pe),n(Pe,`btn btn-secondary`);let Fe=e=>{let t=e=>Ee(`method() 不自动注入 event`);typeof t==`function`&&t(e)};Pe.addEventListener(`click`,Fe),b(()=>Pe.removeEventListener(`click`,Fe)),m(Pe,h(`method()`));let Ie=g(`button`,j);m(j,Ie),n(Ie,`btn btn-accent`);let Le=e=>{let t=e=>Ee(`method($event) 显式注入`,e);typeof t==`function`&&t(e)};Ie.addEventListener(`click`,Le),b(()=>Ie.removeEventListener(`click`,Le)),m(Ie,h(`method($event)`));let M=g(`section`,o);m(o,M),n(M,`space-y-3`);let N=g(`div`,M);m(M,N),n(N,`flex flex-wrap items-center justify-between gap-3`);let Re=g(`h2`,N);m(N,Re),n(Re,`text-xl font-semibold`),m(Re,h(`r-on:input：直接复用标准输入事件`));let ze=g(`span`,N);m(N,ze),n(ze,`badge badge-outline badge-lg`),m(ze,h(`长度 `));let Be=le(`rue:slot:anchor`);m(ze,Be),t({parent:ze,before:Be},()=>de(w.value.length),()=>({}));let P=g(`div`,M);m(M,P),n(P,`grid gap-4 md:grid-cols-[minmax(0,24rem),1fr] items-start`);let Ve=g(`input`,P);m(P,Ve),n(Ve,`input input-bordered w-full`),_(()=>{s(Ve,w.value)});let He=e=>{let t=e=>Te(e);typeof t==`function`&&t(e)};Ve.addEventListener(`input`,He),b(()=>Ve.removeEventListener(`input`,He));let F=g(`div`,P);m(P,F),n(F,`stats stats-vertical md:stats-horizontal shadow-sm border border-base-300`);let I=g(`div`,F);m(F,I),n(I,`stat`);let Ue=g(`div`,I);m(I,Ue),n(Ue,`stat-title`),m(Ue,h(`当前值`));let We=g(`div`,I);m(I,We),n(We,`stat-value text-2xl`);let Ge=f(We);m(We,Ge),_(()=>{S(Ge,w.value||`空`)});let L=g(`div`,F);m(F,L),n(L,`stat`);let Ke=g(`div`,L);m(L,Ke),n(Ke,`stat-title`),m(Ke,h(`大写预览`));let qe=g(`div`,L);m(L,qe),n(qe,`stat-value text-2xl`);let Je=f(qe);m(qe,Je),_(()=>{S(Je,w.value.toUpperCase()||`EMPTY`)});let R=g(`section`,o);m(o,R),n(R,`space-y-3`);let z=g(`div`,R);m(R,z),n(z,`flex flex-wrap items-center justify-between gap-3`);let Ye=g(`h2`,z);m(z,Ye),n(Ye,`text-xl font-semibold`),m(Ye,h(`v-on:click-stop-prevent`));let B=g(`div`,z);m(z,B),n(B,`flex flex-wrap gap-2`);let Xe=g(`span`,B);m(B,Xe),n(Xe,`badge badge-warning badge-lg`),m(Xe,h(`bubble `));let Ze=f(Xe);m(Xe,Ze),_(()=>{S(Ze,ge.value)});let Qe=g(`span`,B);m(B,Qe),n(Qe,`badge badge-success badge-lg`),m(Qe,h(`stop/prevent `));let $e=f(Qe);m(Qe,$e),_(()=>{S($e,_e.value)});let V=g(`div`,R);m(R,V),n(V,`rounded-box border border-dashed border-base-300 bg-base-200 p-4 space-y-3`);let et=e=>{let t=e=>De(e);typeof t==`function`&&t(e)};V.addEventListener(`click`,et),b(()=>V.removeEventListener(`click`,et));let H=g(`a`,V);m(V,H),n(H,`link link-primary`),c(H,`href`,`#compiled-stop-prevent`);let tt=e=>{let t=oe(e=>Oe(e),[`stop`,`prevent`]);typeof t==`function`&&t(e)};H.addEventListener(`click`,tt),b(()=>H.removeEventListener(`click`,tt)),m(H,h(`v-on:click-stop-prevent="onDirectiveStopPrevent"`));let nt=g(`p`,V);m(V,nt),n(nt,`text-sm opacity-70`),m(nt,h(`这条写法会同时阻止默认行为与冒泡，因此不会改 hash，也不会冒泡到外层容器。`));let U=g(`section`,o);m(o,U),n(U,`space-y-3`);let W=g(`div`,U);m(U,W),n(W,`flex flex-wrap items-center justify-between gap-3`);let rt=g(`h2`,W);m(W,rt),n(rt,`text-xl font-semibold`),m(rt,h(`v-on:keyup-enter / v-on:keyup-13`));let G=g(`div`,W);m(W,G),n(G,`flex flex-wrap gap-2`);let it=g(`span`,G);m(G,it),n(it,`badge badge-accent badge-lg`),m(it,h(`enter `));let at=f(it);m(it,at),_(()=>{S(at,ve.value)});let ot=g(`span`,G);m(G,ot),n(ot,`badge badge-neutral badge-lg`),m(ot,h(`13 `));let st=f(ot);m(ot,st),_(()=>{S(st,ye.value)});let K=g(`div`,U);m(U,K),n(K,`grid gap-3 md:grid-cols-2`);let q=g(`label`,K);m(K,q),n(q,`floating-label`);let ct=g(`input`,q);m(q,ct),n(ct,`input input-bordered`),c(ct,`placeholder`,`按 Enter`);let lt=e=>{let t=oe(e=>ke(e),[`enter`]);typeof t==`function`&&t(e)};ct.addEventListener(`keyup`,lt),b(()=>ct.removeEventListener(`keyup`,lt));let ut=g(`span`,q);m(q,ut),m(ut,h(`v-on:keyup-enter="onEnterDirective"`));let J=g(`label`,K);m(K,J),n(J,`floating-label`);let dt=g(`input`,J);m(J,dt),n(dt,`input input-bordered`),c(dt,`placeholder`,`按 Enter`);let ft=e=>{let t=oe(e=>Ae(e),[`13`]);typeof t==`function`&&t(e)};dt.addEventListener(`keyup`,ft),b(()=>dt.removeEventListener(`keyup`,ft));let pt=g(`span`,J);m(J,pt),m(pt,h(`v-on:keyup-13="onKeyCode13Directive"`));let Y=g(`section`,o);m(o,Y),n(Y,`space-y-3`);let X=g(`div`,Y);m(Y,X),n(X,`flex flex-wrap items-center justify-between gap-3`);let mt=g(`h2`,X);m(X,mt),n(mt,`text-xl font-semibold`),m(mt,h(`v-on:click-self / v-on:click-meta-exact`));let ht=g(`div`,X);m(X,ht),n(ht,`flex flex-wrap gap-2`);let gt=g(`span`,ht);m(ht,gt),n(gt,`badge badge-info badge-lg`),m(gt,h(`self `));let _t=f(gt);m(gt,_t),_(()=>{S(_t,be.value)});let vt=g(`span`,ht);m(ht,vt),n(vt,`badge badge-info badge-lg`),m(vt,h(`meta.exact `));let yt=f(vt);m(vt,yt),_(()=>{S(yt,xe.value)});let bt=g(`div`,Y);m(Y,bt),n(bt,`grid gap-4 md:grid-cols-2`);let Z=g(`div`,bt);m(bt,Z),n(Z,`rounded-box border border-base-300 bg-base-200 p-4 space-y-3`);let xt=e=>{let t=oe(e=>je(e),[`self`]);typeof t==`function`&&t(e)};Z.addEventListener(`click`,xt),b(()=>Z.removeEventListener(`click`,xt));let St=g(`p`,Z);m(Z,St),n(St,`font-medium`),m(St,h(`v-on:click-self="onSelfOnly"`));let Ct=g(`p`,Z);m(Z,Ct),n(Ct,`text-sm opacity-70`),m(Ct,h(`点击这块容器的空白处会触发；点击里面的按钮不会触发 self。`));let wt=g(`button`,Z);m(Z,wt),n(wt,`btn btn-ghost btn-sm`),m(wt,h(`子元素按钮`));let Tt=g(`button`,bt);m(bt,Tt),n(Tt,`btn btn-info`);let Et=e=>{let t=oe(e=>Me(e),[`meta`,`exact`]);typeof t==`function`&&t(e)};Tt.addEventListener(`click`,Et),b(()=>Tt.removeEventListener(`click`,Et)),m(Tt,h(`v-on:click-meta-exact：按住 Command 点击`));let Dt=g(`section`,o);m(o,Dt),n(Dt,`space-y-3`);let Ot=g(`div`,Dt);m(Dt,Ot),n(Ot,`flex flex-wrap items-center justify-between gap-3`);let kt=g(`h2`,Ot);m(Ot,kt),n(kt,`text-xl font-semibold`),m(kt,h(`v-on:click-native-once`));let At=g(`span`,Ot);m(Ot,At),n(At,`badge badge-secondary badge-lg`),m(At,h(`code path`));let jt=g(`div`,Dt);m(Dt,jt),n(jt,`grid gap-4 md:grid-cols-[minmax(0,1fr),minmax(0,20rem)] items-start`);let Q=g(`div`,jt);m(jt,Q),n(Q,`mockup-code text-sm`);let Mt=g(`pre`,Q);m(Q,Mt),c(Mt,`data-prefix`,`1`);let Nt=g(`code`,Mt);m(Mt,Nt);let Pt=f(Nt);m(Nt,Pt),S(Pt,`<NativeCard v-on:click-native-once="onNativeRootClick" />`);let Ft=g(`pre`,Q);m(Q,Ft),c(Ft,`data-prefix`,`2`);let It=g(`code`,Ft);m(Ft,It);let Lt=f(It);m(It,Lt),S(Lt,`// 编译后保留 native + once 的事件配置`);let Rt=g(`pre`,Q);m(Q,Rt),c(Rt,`data-prefix`,`3`);let zt=g(`code`,Rt);m(Rt,zt);let Bt=f(zt);m(zt,Bt),S(Bt,`// native + once 仍然属于同一条修饰符编译链`);let Vt=g(`div`,jt);m(jt,Vt),n(Vt,`grid gap-3`),r(Vt,he,()=>({title:`组件根元素外观`,note:`这里保留组件根按钮的视觉形态，代码区会给出与原生 TSX 的对照写法。`}));let Ht=g(`p`,Vt);m(Vt,Ht),n(Ht,`text-sm opacity-70`),m(Ht,h(`组件根元素修饰符同样使用当前真实 TSX-safe 写法；改成原生 TSX 时，通常需要组件自己透传 onClick 或暴露 root 事件 prop。`));let Ut=g(`section`,o);m(o,Ut),n(Ut,`space-y-3`);let Wt=g(`h2`,Ut);m(Ut,Wt),n(Wt,`text-xl font-semibold`),m(Wt,h(`修饰符速查`));let $=g(`div`,Ut);m(Ut,$),n($,`flex flex-wrap gap-2`);let Gt=g(`span`,$);m($,Gt),n(Gt,`badge badge-primary badge-lg`),m(Gt,h(`v-on:click-stop`));let Kt=g(`span`,$);m($,Kt),n(Kt,`badge badge-primary badge-lg`),m(Kt,h(`v-on:click-prevent`));let qt=g(`span`,$);m($,qt),n(qt,`badge badge-primary badge-lg`),m(qt,h(`v-on:click-self`));let Jt=g(`span`,$);m($,Jt),n(Jt,`badge badge-primary badge-lg`),m(Jt,h(`v-on:click-once`));let Yt=g(`span`,$);m($,Yt),n(Yt,`badge badge-primary badge-lg`),m(Yt,h(`v-on:click-capture`));let Xt=g(`span`,$);m($,Xt),n(Xt,`badge badge-primary badge-lg`),m(Xt,h(`v-on:wheel-passive`));let Zt=g(`span`,$);m($,Zt),n(Zt,`badge badge-primary badge-lg`),m(Zt,h(`v-on:click-ctrl`));let Qt=g(`span`,$);m($,Qt),n(Qt,`badge badge-primary badge-lg`),m(Qt,h(`v-on:click-shift`));let $t=g(`span`,$);m($,$t),n($t,`badge badge-primary badge-lg`),m($t,h(`v-on:click-alt`));let en=g(`span`,$);m($,en),n(en,`badge badge-primary badge-lg`),m(en,h(`v-on:click-meta`));let tn=g(`span`,$);m($,tn),n(tn,`badge badge-primary badge-lg`),m(tn,h(`v-on:click-meta-exact`));let nn=g(`span`,$);m($,nn),n(nn,`badge badge-primary badge-lg`),m(nn,h(`v-on:click-middle`));let rn=g(`span`,$);m($,rn),n(rn,`badge badge-primary badge-lg`),m(rn,h(`v-on:keyup-enter`));let an=g(`span`,$);m($,an),n(an,`badge badge-primary badge-lg`),m(an,h(`v-on:keyup-tab`));let on=g(`span`,$);m($,on),n(on,`badge badge-primary badge-lg`),m(on,h(`v-on:keyup-delete`));let sn=g(`span`,$);m($,sn),n(sn,`badge badge-primary badge-lg`),m(sn,h(`v-on:keyup-esc`));let cn=g(`span`,$);m($,cn),n(cn,`badge badge-primary badge-lg`),m(cn,h(`v-on:keyup-space`));let ln=g(`span`,$);m($,ln),n(ln,`badge badge-primary badge-lg`),m(ln,h(`v-on:keyup-up`));let un=g(`span`,$);m($,un),n(un,`badge badge-primary badge-lg`),m(un,h(`v-on:keyup-down`));let dn=g(`span`,$);m($,dn),n(dn,`badge badge-primary badge-lg`),m(dn,h(`v-on:keyup-left`));let fn=g(`span`,$);m($,fn),n(fn,`badge badge-primary badge-lg`),m(fn,h(`v-on:keyup-right`));let pn=g(`span`,$);m($,pn),n(pn,`badge badge-primary badge-lg`),m(pn,h(`v-on:keyup-13`));let mn=g(`span`,$);m($,mn),n(mn,`badge badge-primary badge-lg`),m(mn,h(`v-on:click-native-once`));let hn=g(`section`,o);m(o,hn),n(hn,`space-y-3`);let gn=g(`h2`,hn);m(hn,gn),n(gn,`text-xl font-semibold`),m(gn,h(`最近一次事件`));let _n=g(`div`,hn);m(hn,_n),n(_n,`rounded-box border border-base-300 bg-base-200 p-4 font-mono text-sm`);let vn=f(_n);m(_n,vn),_(()=>{S(vn,Se.value)});let yn=g(`section`,o);m(o,yn),n(yn,`space-y-3`);let bn=g(`h2`,yn);m(yn,bn),n(bn,`text-xl font-semibold`),m(bn,h(`事件日志`));let xn=g(`div`,yn);m(yn,xn),n(xn,`rounded-box border border-base-300 bg-base-200 p-4`);let Sn=g(`ul`,xn);m(xn,Sn),n(Sn,`list gap-2 font-mono text-sm`);let Cn=le(`rue:list:end`);m(Sn,Cn);let wn=[];ue(()=>{let e=Ce.value||[];wn=ae(Sn,Cn,wn,e,(e,t)=>`${e}-${t}`,(e,t)=>{let n=te(e);return ce((e,t,r)=>{let i=()=>re(e=>{let t=g(`li`,e);t.setAttribute(`class`,`list-row px-0 py-1`);let r=h(``);return m(t,r),ne(r,()=>n.get()),[t,t]});return e==null?i():ee(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),b(()=>ie(wn));let Tn=h(``),En=h(``);return i.insertBefore(Tn,i.firstChild),i.appendChild(En),[i.firstChild,i.lastChild]})):(e,t,n)=>{let r=()=>u(e=>{let t=h(``);return[t,t]});return e==null?r():ee(e,n,r)},()=>({}));let E=h(``),D=h(``);return i.insertBefore(E,i.firstChild),i.appendChild(D),[i.firstChild,i.lastChild]});return o(fe,()=>({children:[u(e=>{let t=E().content.cloneNode(!0).firstChild;return[t,t]}),d(e=>{let t=D().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;_(()=>{let e=`tab ${p.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),b(x(e,n,`click`,()=>()=>{p.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return _(()=>{let e=`tab ${p.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),b(x(e,r,`click`,()=>()=>{p.value=`code`})),[t,t]}),e]}))})())};export{ge as default};